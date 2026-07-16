import { NavLink } from 'react-router';
import logo from '../../../assets/restainup-logo.png';
import { companyInfo, navItems } from '../../data/siteMeta';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Restainup" className="h-7 w-auto self-start" />
          <div className="font-mono text-xs leading-relaxed text-muted-foreground">
            <p>{companyInfo.legalName} — Cap. Soc. {companyInfo.shareCapital}</p>
            <p>Sede Legale: {companyInfo.registeredOffice}</p>
            <p>
              CF/P.IVA: {companyInfo.taxId} — {companyInfo.rea}
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
        <p className="mx-auto max-w-6xl font-mono text-xs text-muted-foreground">
          © {year} {companyInfo.legalName}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
