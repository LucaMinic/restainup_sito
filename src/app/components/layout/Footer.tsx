import { NavLink } from 'react-router';
import logo from '../../../assets/restainup-logo.png';
import { getCompanyInfo, getNavItems, getLegalLinks } from '../../data/siteMeta';
import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const companyInfo = getCompanyInfo(language);
  const navItems = getNavItems(language);
  const legalLinks = getLegalLinks(language);
  const rightsReserved = language === 'en' ? 'All rights reserved.' : 'Tutti i diritti riservati.';
  const shareCapitalLabel = language === 'en' ? 'Share Capital' : 'Cap. Soc.';
  const registeredOfficeLabel = language === 'en' ? 'Registered Office:' : 'Sede Legale:';
  const taxIdLabel = language === 'en' ? 'Tax ID/VAT:' : 'CF/P.IVA:';

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Restainup" className="h-7 w-auto self-start" />
          <div className="font-mono text-xs leading-relaxed text-muted-foreground">
            <p>{companyInfo.legalName} — {shareCapitalLabel} {companyInfo.shareCapital}</p>
            <p>{registeredOfficeLabel} {companyInfo.registeredOffice}</p>
            <p>
              {taxIdLabel} {companyInfo.taxId} — {companyInfo.rea}
            </p>
            <a href={`mailto:${companyInfo.email}`} className="hover:text-ink">
              {companyInfo.email}
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2 md:items-end">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="border-t border-border px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © {year} {companyInfo.legalName}. {rightsReserved}
          </p>
          <nav className="flex gap-4">
            {legalLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-ink"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
