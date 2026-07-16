import { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu } from 'lucide-react';
import logo from '../../../assets/restainup-logo.png';
import { navItems } from '../../data/siteMeta';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { cn } from '../ui/utils';

export function Header() {
  const [open, setOpen] = useState(false);

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

        <div className="hidden md:block">
          <Button asChild size="sm">
            <NavLink to="/contatti">Contattaci</NavLink>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label="Apri il menu"
        >
          <Menu className="size-6" />
        </button>
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
