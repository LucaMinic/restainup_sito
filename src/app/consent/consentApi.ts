// Talks to the consents backend (base URL in VITE_CONSENT_API_URL, e.g. https://amosport.it):
//  - POST {base}/consent/config  at startup: policy version and whether the banner is active
//    for this site (the backend recognises the site from the request's origin);
//  - POST {base}/consent         after every choice: records it.
// Both calls are technical operations and need no consent themselves. No IP, e-mail or other
// identifying data is sent from here. If the backend is unreachable the site keeps working
// with its local settings, and unsent choices are retried at the next page load.
import { applyRemoteConfig, onConsentChoice, type ConsentAction, type ConsentCategories, type ConsentRecord } from './consentStore';

/** Body of POST /consent. */
export interface ConsentPayload {
  consent_id: string;
  azione: ConsentAction;
  categorie: ConsentCategories;
  policy_version: string;
  client_timestamp: string;
}

/** Answer of POST /consent. */
export interface ConsentApiResponse {
  success: boolean;
  error?: string;
}

/** Answer of POST /consent/config. */
export interface ConsentConfigResponse {
  success: boolean;
  error?: string;
  data?: {
    tipo: 'config';
    dominio: string;
    policy_version: string;
    attivo: boolean;
    categorie: Record<keyof ConsentCategories, { required: boolean; services: unknown[] }>;
  };
}

interface QueuedPayload {
  payload: ConsentPayload;
  attempts: number;
}

const BASE_URL: string = (import.meta.env.VITE_CONSENT_API_URL || '').trim().replace(/\/+$/, '');
const QUEUE_KEY = 'cc_queue';
const MAX_ATTEMPTS = 3;

async function postJson<T>(path: string, body: unknown, keepalive = false): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    keepalive,
    credentials: 'omit',
  });
  const json = (await response.json().catch(() => ({}))) as T & { success?: boolean; error?: string };
  if (!response.ok || json.success === false) {
    throw new Error(`Consent API ${path}: ${response.status} ${json.error ?? ''}`.trim());
  }
  return json;
}

function buildPayload(action: ConsentAction, record: ConsentRecord): ConsentPayload {
  return {
    consent_id: record.consent_id,
    azione: action,
    categorie: { ...record.categories, necessary: true },
    policy_version: record.policy_version,
    client_timestamp: record.timestamp,
  };
}

function readQueue(): QueuedPayload[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter((item) => item?.payload?.azione) : [];
  } catch {
    return [];
  }
}

function writeQueue(queue: QueuedPayload[]) {
  try {
    if (queue.length) localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    else localStorage.removeItem(QUEUE_KEY);
  } catch {}
}

/** Sends a record; on failure keeps it for a new attempt at the next page load. */
async function send(payload: ConsentPayload, attempts = 0) {
  try {
    await postJson<ConsentApiResponse>('/consent', payload, true);
  } catch {
    if (attempts + 1 < MAX_ATTEMPTS) writeQueue([...readQueue(), { payload, attempts: attempts + 1 }]);
  }
}

/** Retries the records that could not be sent before (each at most 3 times in total). */
async function flushQueue() {
  const queue = readQueue();
  if (!queue.length) return;
  writeQueue([]);
  for (const item of queue) await send(item.payload, item.attempts);
}

/** Reads the site's cookie configuration; on any error the local settings stay in use. */
async function loadConfig() {
  try {
    const config = await postJson<ConsentConfigResponse>('/consent/config', {});
    if (config.data) applyRemoteConfig({ policyVersion: config.data.policy_version, active: config.data.attivo });
  } catch (error) {
    if (import.meta.env.DEV) console.info('[consent] remote config not available, using local settings.', error);
  }
}

let started = false;

/** Connects the consent system to the backend. Called once at startup. */
export function initConsentApi() {
  if (started || typeof window === 'undefined') return;
  started = true;
  if (!BASE_URL) {
    if (import.meta.env.DEV) console.info('[consent] VITE_CONSENT_API_URL is not set: choices are applied but not recorded.');
    return;
  }
  onConsentChoice((action, record) => {
    // The choice is already applied locally; recording never blocks the page.
    void send(buildPayload(action, record));
  });
  void loadConfig();
  void flushQueue();
}
