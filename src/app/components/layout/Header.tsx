import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu } from 'lucide-react';
import logo from '../../../assets/restainup-logo.png';
import { getNavItems } from '../../data/siteMeta';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Language } from '../../i18n/LanguageContext';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { cn } from '../ui/utils';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
];

function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border bg-white p-0.5',
        className,
      )}
      role="group"
      aria-label="Seleziona lingua / Select language"
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={cn(
            'rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-colors',
            language === code ? 'bg-ink text-background' : 'text-ink/60 hover:text-ink',
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const navItems = getNavItems(language);
  const contactLabel = language === 'en' ? 'Contact us' : 'Contattaci';
  const menuLabel = language === 'en' ? 'Open menu' : 'Apri il menu';

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Restainup" className="h-7 w-auto" />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-ink/70 transition-colors hover:text-ink',
                  isActive && 'text-ink',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <Button asChild size="sm">
            <NavLink to="/contatti">{contactLabel}</NavLink>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink"
            aria-label={menuLabel}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-2.5 text-base font-medium text-ink/80 transition-colors hover:bg-accent hover:text-ink',
                    isActive && 'bg-accent text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
