export type NavItem = {
  label: string;
  path: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Servizi', path: '/servizi' },
  { label: 'Chi siamo', path: '/chi-siamo' },
  { label: 'Remote Dental', path: '/remote-dental' },
  { label: 'Contatti', path: '/contatti' },
];

export const companyInfo = {
  legalName: 'Resta in UP Srl',
  shareCapital: '€ 100.000',
  registeredOffice: 'Milano, Via Feltre 32',
  taxId: '09958630965',
  rea: 'REA MI 2124381',
  email: 'info@restainup.it',
};
