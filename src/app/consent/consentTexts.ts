// Texts of the cookie banner, the preferences panel and the content placeholders,
// in every language of the site.
import { useLanguage, type Language } from '../i18n/LanguageContext';
import type { ConsentCategory } from './cookieConfig';

export type Localized = Record<Language, string>;

/** Returns a translator for Localized texts in the current language. */
export function useT() {
  const { language } = useLanguage();
  return (text: Localized) => text[language];
}

export const categoryTexts: Record<ConsentCategory, { title: Localized; description: Localized }> = {
  necessary: {
    title: { it: 'Necessari', en: 'Necessary' },
    description: {
      it: 'Indispensabili per il funzionamento del sito e per ricordare le tue scelte. Non possono essere disattivati.',
      en: 'Essential for the site to work and to remember your choices. They cannot be switched off.',
    },
  },
  preferences: {
    title: { it: 'Preferenze', en: 'Preferences' },
    description: {
      it: 'Permettono di ricordare impostazioni facoltative per migliorare la tua esperienza.',
      en: 'Let the site remember optional settings to improve your experience.',
    },
  },
  statistics: {
    title: { it: 'Statistici', en: 'Statistics' },
    description: {
      it: 'Ci aiutano a capire, in forma aggregata, come viene usato il sito.',
      en: 'Help us understand, in aggregate, how the site is used.',
    },
  },
  marketing: {
    title: { it: 'Marketing e contenuti esterni', en: 'Marketing and external content' },
    description: {
      it: 'Permettono di usare Google reCAPTCHA, la protezione antispam del modulo di contatto. Google può usare i suoi cookie anche per pubblicità personalizzata.',
      en: 'Let you use Google reCAPTCHA, the spam protection of the contact form. Google may also use its cookies for personalised advertising.',
    },
  },
};

export const ui = {
  bannerTitle: { it: 'Questo sito usa i cookie', en: 'This site uses cookies' },
  bannerText: {
    it: 'Usiamo cookie tecnici, necessari al funzionamento del sito. Con il tuo consenso usiamo anche cookie di terze parti (Google reCAPTCHA) per proteggere il modulo di contatto dallo spam, che Google può usare anche per pubblicità personalizzata. Puoi accettare, rifiutare o scegliere quali attivare. Chiudendo questo avviso con la X restano attivi solo i cookie tecnici.',
    en: 'We use technical cookies that the site needs to work. With your consent we also use third-party cookies (Google reCAPTCHA) to protect the contact form from spam, which Google may also use for personalised advertising. You can accept, reject or choose which ones to allow. Closing this notice with the X keeps only technical cookies.',
  },
  policyLink: { it: 'Cookie Policy', en: 'Cookie Policy' },
  acceptAll: { it: 'Accetta tutti', en: 'Accept all' },
  rejectAll: { it: 'Rifiuta tutti', en: 'Reject all' },
  customize: { it: 'Personalizza', en: 'Customise' },
  closeBanner: {
    it: 'Chiudi: mantieni solo i cookie tecnici',
    en: 'Close: keep technical cookies only',
  },
  prefsTitle: { it: 'Preferenze cookie', en: 'Cookie preferences' },
  prefsIntro: {
    it: 'Scegli quali categorie di cookie consentire. Puoi cambiare idea in qualsiasi momento dal link "Preferenze cookie" nel footer.',
    en: 'Choose which cookie categories to allow. You can change your mind at any time from the "Cookie preferences" link in the footer.',
  },
  alwaysActive: { it: 'Sempre attivi', en: 'Always active' },
  savePrefs: { it: 'Salva scelte', en: 'Save choices' },
  closePrefs: { it: 'Chiudi', en: 'Close' },
  showDetails: { it: 'Vedi servizi e cookie', en: 'Show services and cookies' },
  provider: { it: 'Fornitore', en: 'Provider' },
  cookieName: { it: 'Nome', en: 'Name' },
  cookieDuration: { it: 'Durata', en: 'Duration' },
  cookiePurpose: { it: 'Finalità', en: 'Purpose' },
  firstParty: { it: 'prima parte', en: 'first party' },
  thirdParty: { it: 'terza parte', en: 'third party' },
  privacyPolicy: { it: 'Informativa privacy', en: 'Privacy policy' },
  footerLink: { it: 'Preferenze cookie', en: 'Cookie preferences' },
  placeholderTitle: {
    it: 'Contenuto di {service} bloccato',
    en: '{service} content blocked',
  },
  placeholderText: {
    it: 'Per usare questo contenuto devi accettare i cookie della categoria "{category}". {provider} potrà usare cookie anche per pubblicità personalizzata.',
    en: 'To use this content you need to accept cookies in the "{category}" category. {provider} may also use cookies for personalised advertising.',
  },
  placeholderButton: { it: 'Attiva contenuto', en: 'Enable content' },
  placeholderOpenExternal: { it: 'Apri su {service}', en: 'Open on {service}' },
} satisfies Record<string, Localized>;

export function fill(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}
