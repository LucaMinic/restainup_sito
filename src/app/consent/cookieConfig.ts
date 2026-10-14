// Single source of truth for the cookie consent system: categories, services and
// the cookies each service sets. The banner, the preferences panel and the content
// placeholders are all generated from this file.
//
// To add a service: add an entry to SERVICES (see the README section in
// src/app/consent/README.md). Adding a service changes the services signature,
// so every visitor is asked for consent again.
import type { Localized } from './consentTexts';

export type ConsentCategory = 'necessary' | 'preferences' | 'statistics' | 'marketing';

export const CATEGORY_ORDER: ConsentCategory[] = ['necessary', 'preferences', 'statistics', 'marketing'];

export interface CookieInfo {
  name: string;
  /** Where the cookie/storage lives: our own domain, or the provider's. */
  party: 'first' | 'third';
  type: 'cookie' | 'localStorage';
  duration: Localized;
  purpose: Localized;
}

export interface ServiceConfig {
  id: string;
  category: ConsentCategory;
  name: string;
  provider: string;
  privacyPolicyUrl?: string;
  description: Localized;
  cookies: CookieInfo[];
}

// Version of the Cookie Policy text. Changing it asks every visitor for consent again.
export const POLICY_VERSION: string = import.meta.env.VITE_COOKIE_POLICY_VERSION || '1.0.0';
// Version of the banner/consent logic, sent with every consent record.
export const BANNER_VERSION = '1.0.0';

export const CONSENT_COOKIE = 'cc_consent';
/** A choice that rejects everything optional is kept 6 months, any acceptance 12 months. */
export const REJECT_MAX_AGE_DAYS = 182;
export const ACCEPT_MAX_AGE_DAYS = 365;

const sixMonths: Localized = { it: '6 mesi', en: '6 months' };

export const SERVICES: ServiceConfig[] = [
  {
    id: 'site',
    category: 'necessary',
    name: 'Restainup',
    provider: 'Resta in UP Srl',
    description: {
      it: 'Funzionamento del sito e memorizzazione delle tue scelte.',
      en: 'Running the site and remembering your choices.',
    },
    cookies: [
      {
        name: CONSENT_COOKIE,
        party: 'first',
        type: 'cookie',
        duration: {
          it: '6 mesi (rifiuto) / 12 mesi (accettazione)',
          en: '6 months (rejection) / 12 months (acceptance)',
        },
        purpose: {
          it: 'Memorizza le tue scelte sui cookie (identificativo anonimo, categorie, versione della policy, data).',
          en: 'Stores your cookie choices (anonymous identifier, categories, policy version, date).',
        },
      },
      {
        name: 'restainup-lang',
        party: 'first',
        type: 'localStorage',
        duration: { it: 'Fino alla cancellazione', en: 'Until deleted' },
        purpose: {
          it: 'Ricorda la lingua che hai scelto.',
          en: 'Remembers the language you chose.',
        },
      },
      {
        name: 'cc_queue',
        party: 'first',
        type: 'localStorage',
        duration: { it: "Fino all'invio", en: 'Until sent' },
        purpose: {
          it: "Conserva temporaneamente la registrazione del consenso se l'invio non riesce.",
          en: 'Temporarily keeps the consent record if sending it fails.',
        },
      },
    ],
  },
  {
    id: 'recaptcha',
    category: 'marketing',
    name: 'Google reCAPTCHA',
    provider: 'Google Ireland Limited',
    privacyPolicyUrl: 'https://policies.google.com/privacy',
    description: {
      it: 'Protezione antispam del modulo nella pagina Contatti. Google raccoglie dati sul dispositivo e sulla navigazione e può usare i suoi cookie anche per altre finalità.',
      en: 'Spam protection for the form on the Contact page. Google collects device and browsing data and may also use its cookies for other purposes.',
    },
    cookies: [
      {
        name: '_GRECAPTCHA',
        party: 'third',
        type: 'cookie',
        duration: sixMonths,
        purpose: {
          it: 'Analisi del rischio per distinguere persone e bot.',
          en: 'Risk analysis to tell people and bots apart.',
        },
      },
      {
        name: 'NID',
        party: 'third',
        type: 'cookie',
        duration: sixMonths,
        purpose: {
          it: 'Memorizza preferenze e informazioni usate da Google, anche per la pubblicità.',
          en: 'Stores preferences and information Google also uses for advertising.',
        },
      },
    ],
  },
];

/** Categories that actually have services: only these are shown to the visitor. */
export function activeCategories(): ConsentCategory[] {
  return CATEGORY_ORDER.filter((c) => SERVICES.some((s) => s.category === c));
}

/** Changes whenever a service is added or removed: used to ask for consent again. */
export function servicesSignature(): string {
  return SERVICES.map((s) => `${s.id}:${s.category}`).sort().join(',');
}

export function serviceById(id: string): ServiceConfig | undefined {
  return SERVICES.find((s) => s.id === id);
}
