// Consent logic, independent from the UI: reads/writes the cc_consent cookie,
// answers hasConsent(), unlocks blocked scripts and notifies listeners
// (React components and the consent API that records every choice).
import {
  ACCEPT_MAX_AGE_DAYS,
  CONSENT_COOKIE,
  POLICY_VERSION,
  REJECT_MAX_AGE_DAYS,
  SERVICES,
  servicesSignature,
  type ConsentCategory,
} from './cookieConfig';

export type ConsentCategories = Record<ConsentCategory, boolean>;
export type ConsentAction = 'accept_all' | 'reject_all' | 'custom' | 'update' | 'withdraw';

/** What is stored in the cc_consent first-party cookie. */
export interface ConsentRecord {
  consent_id: string;
  policy_version: string;
  services: string;
  categories: ConsentCategories;
  timestamp: string;
}

export interface ConsentState {
  /** Last stored choice, also when it is outdated (kept to reuse its consent_id). */
  record: ConsentRecord | null;
  /** True when the banner must be shown: no choice yet, or policy/services changed since. */
  needsChoice: boolean;
  preferencesOpen: boolean;
}

type ChoiceListener = (action: ConsentAction, record: ConsentRecord) => void;

const OPTIONAL: ConsentCategory[] = ['preferences', 'statistics', 'marketing'];
const COOKIE_PATH = import.meta.env.BASE_URL || '/';

function uuidv4(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const b = crypto.getRandomValues(new Uint8Array(16));
  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;
  const h = [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

function writeCookie(name: string, value: string, maxAgeDays: number) {
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeDays * 86400}; Path=${COOKIE_PATH}; SameSite=Lax${secure}`;
}

function deleteCookie(name: string) {
  // The cookie may have been set on the root path or on the site's base path.
  for (const path of new Set(['/', COOKIE_PATH])) {
    document.cookie = `${name}=; Max-Age=0; Path=${path}`;
  }
}

function loadRecord(): ConsentRecord | null {
  try {
    const raw = readCookie(CONSENT_COOKIE);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    return parsed && typeof parsed.consent_id === 'string' && parsed.categories ? parsed : null;
  } catch {
    return null;
  }
}

// Policy version and banner status: local defaults, replaced by the backend's
// configuration (POST /consent/config) as soon as it arrives.
let policyVersion = POLICY_VERSION;
let bannerActive = true;

function isCurrent(record: ConsentRecord | null): record is ConsentRecord {
  return !!record && record.policy_version === policyVersion && record.services === servicesSignature();
}

const initialRecord = loadRecord();
let state: ConsentState = {
  record: initialRecord,
  needsChoice: !isCurrent(initialRecord),
  preferencesOpen: false,
};
// Generated at the first visit and reused for this browser: taken from the stored
// choice when there is one, otherwise created now and saved with the first choice.
const consentId = initialRecord?.consent_id ?? uuidv4();

const stateListeners = new Set<() => void>();
const choiceListeners = new Set<ChoiceListener>();

function setState(patch: Partial<ConsentState>) {
  state = { ...state, ...patch };
  stateListeners.forEach((l) => l());
}

/**
 * Applies the backend's configuration. A different policy version asks for consent
 * again; `active: false` hides the banner (optional content then stays blocked).
 */
export function applyRemoteConfig({ policyVersion: remoteVersion, active }: { policyVersion?: string; active?: boolean }) {
  if (remoteVersion) policyVersion = remoteVersion;
  bannerActive = active !== false;
  setState({ needsChoice: bannerActive && !isCurrent(state.record) });
}

export function getConsentState(): ConsentState {
  return state;
}

export function subscribe(listener: () => void): () => void {
  stateListeners.add(listener);
  return () => stateListeners.delete(listener);
}

/** Called after every choice with the action and the stored record (used to log consent). */
export function onConsentChoice(listener: ChoiceListener): () => void {
  choiceListeners.add(listener);
  return () => choiceListeners.delete(listener);
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === 'necessary') return true;
  return isCurrent(state.record) && state.record.categories[category] === true;
}

/** Categories as currently granted (all optional ones off when there is no valid choice). */
export function currentCategories(): ConsentCategories {
  return {
    necessary: true,
    preferences: hasConsent('preferences'),
    statistics: hasConsent('statistics'),
    marketing: hasConsent('marketing'),
  };
}

/** "Accept all" grants every optional category (also those with no service yet), "Reject all" none. */
export function allCategories(granted: boolean): ConsentCategories {
  return { necessary: true, preferences: granted, statistics: granted, marketing: granted };
}

export function openPreferences() {
  setState({ preferencesOpen: true });
}

export function closePreferences() {
  setState({ preferencesOpen: false });
}

/**
 * Stores a choice. `kind` says how it was made: from the banner/first panel
 * ('accept_all' | 'reject_all' | 'custom'); when a valid choice already exists the
 * action is reported as 'update', or 'withdraw' if it revokes something granted.
 */
export function saveChoice(kind: 'accept_all' | 'reject_all' | 'custom', categories: ConsentCategories) {
  const previous = isCurrent(state.record) ? state.record.categories : null;
  const next: ConsentCategories = { ...categories, necessary: true };

  // With a choice already given: 'withdraw' when everything optional is turned off,
  // otherwise 'update'.
  let action: ConsentAction = kind;
  if (previous) {
    const hadOptional = OPTIONAL.some((c) => previous[c]);
    const hasOptional = OPTIONAL.some((c) => next[c]);
    action = hadOptional && !hasOptional ? 'withdraw' : 'update';
  }

  const record: ConsentRecord = {
    consent_id: consentId,
    policy_version: policyVersion,
    services: servicesSignature(),
    categories: next,
    timestamp: new Date().toISOString(),
  };
  const anyOptional = OPTIONAL.some((c) => next[c]);
  writeCookie(CONSENT_COOKIE, JSON.stringify(record), anyOptional ? ACCEPT_MAX_AGE_DAYS : REJECT_MAX_AGE_DAYS);

  const revokedCategories = previous ? OPTIONAL.filter((c) => previous[c] && !next[c]) : [];
  setState({ record, needsChoice: false, preferencesOpen: false });
  choiceListeners.forEach((l) => l(action, record));

  if (revokedCategories.length) cleanUpRevoked(revokedCategories);
  activateBlockedScripts();
}

/** Grants one extra category (used by the "Enable content" button of a placeholder). */
export function grantCategory(category: ConsentCategory) {
  saveChoice('custom', { ...currentCategories(), [category]: true });
}

// --- Revocation -------------------------------------------------------------

const activatedCategories = new Set<ConsentCategory>();

function cleanUpRevoked(categories: ConsentCategory[]) {
  for (const service of SERVICES) {
    if (!categories.includes(service.category)) continue;
    for (const cookie of service.cookies) {
      if (cookie.party !== 'first') continue;
      if (cookie.type === 'cookie') deleteCookie(cookie.name);
      else {
        try {
          localStorage.removeItem(cookie.name);
        } catch {}
      }
    }
  }
  // Scripts that already ran cannot be unloaded: reload so they are not executed again.
  if (categories.some((c) => activatedCategories.has(c))) location.reload();
}

// --- Blocked scripts --------------------------------------------------------
// Third-party scripts are added to the page as
//   <script type="text/plain" data-cookie-category="statistics" src="..."></script>
// and only turned into real scripts once their category is accepted.

export function activateBlockedScripts() {
  if (typeof document === 'undefined') return;
  const blocked = document.querySelectorAll<HTMLScriptElement>('script[type="text/plain"][data-cookie-category]');
  blocked.forEach((original) => {
    const category = original.dataset.cookieCategory as ConsentCategory;
    if (!hasConsent(category)) return;
    const script = document.createElement('script');
    for (const attr of original.getAttributeNames()) {
      if (attr !== 'type') script.setAttribute(attr, original.getAttribute(attr)!);
    }
    script.type = original.dataset.type || 'text/javascript';
    if (!original.src) script.text = original.text;
    original.replaceWith(script);
    activatedCategories.add(category);
  });
}

// Public API for code outside React (e.g. inline scripts or the browser console).
declare global {
  interface Window {
    cookieConsent?: {
      hasConsent: typeof hasConsent;
      openPreferences: typeof openPreferences;
    };
  }
}
if (typeof window !== 'undefined') {
  window.cookieConsent = { hasConsent, openPreferences };
  activateBlockedScripts();
}
