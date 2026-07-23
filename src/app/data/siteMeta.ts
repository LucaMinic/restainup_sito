import type { Language } from '../i18n/LanguageContext';

export type NavItem = {
  label: string;
  path: string;
};

const navItemsByLang: Record<Language, NavItem[]> = {
  it: [
    { label: 'Home', path: '/' },
    { label: 'Chi siamo', path: '/chi-siamo' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Remote Dental', path: '/remote-dental' },
    { label: 'Contatti', path: '/contatti' },
  ],
  en: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/chi-siamo' },
    { label: 'Services', path: '/servizi' },
    { label: 'Remote Dental', path: '/remote-dental' },
    { label: 'Contact', path: '/contatti' },
  ],
};

const legalLinksByLang: Record<Language, NavItem[]> = {
  it: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ],
  en: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ],
};

export function getNavItems(language: Language): NavItem[] {
  return navItemsByLang[language];
}

export function getLegalLinks(language: Language): NavItem[] {
  return legalLinksByLang[language];
}

const companyInfoByLang: Record<Language, { shareCapital: string }> = {
  it: { shareCapital: '€ 100.000' },
  en: { shareCapital: '€100,000' },
};

// Ragione sociale, sede, codici fiscali e contatti non si traducono: sono dati
// legali identici in ogni lingua. Cambia solo il formato del capitale sociale.
export function getCompanyInfo(language: Language) {
  return {
    legalName: 'Resta in UP Srl',
    shareCapital: companyInfoByLang[language].shareCapital,
    registeredOffice: 'Milano, Via Feltre 32',
    taxId: '09958630965',
    rea: 'REA MI 2124381',
    email: 'info@restainup.it',
  };
}
