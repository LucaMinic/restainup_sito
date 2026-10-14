import { useEffect } from "react";
import { NavLink } from "react-router";
import { Mail, Phone } from "lucide-react";
import logo from "../../assets/restainup-logo.png";
import photo from "../../assets/Alessandro.jpg";

const CONTACT = {
  fullName: "Alessandro Senesi",
  role: "Sales Manager",
  company: "Restainup",
  phone: "+39 339 885 0665",
  phoneHref: "tel:+393398850665",
  email: "alessandro.senesi@restainup.it",
};

export function AlessandroSenesiCardPage() {
  useEffect(() => {
    document.title = `${CONTACT.fullName} — ${CONTACT.role} | Restainup`;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 py-12">
      <div className="w-full min-w-0 max-w-sm overflow-hidden rounded-3xl bg-background shadow-2xl">
        <div className="relative flex flex-col items-center bg-ink px-6 pb-16 pt-8">
          <NavLink to="/" className="mb-6">
            <img src={logo} alt="Restainup" className="h-7 w-auto brightness-0 invert" />
          </NavLink>
          <div className="absolute -bottom-14 size-28 overflow-hidden rounded-full border-4 border-background bg-lime">
            <img
              src={photo}
              alt={CONTACT.fullName}
              className="size-full object-cover object-[65%_35%]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center px-6 pb-8 pt-18 text-center">
          <h1 className="font-display text-2xl font-bold text-ink">{CONTACT.fullName}</h1>
          <p className="mt-1 font-medium text-ink/60">{CONTACT.role}</p>
          <p className="text-sm text-ink/40">{CONTACT.company}</p>

          <div className="mt-8 flex w-full flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-left transition-colors hover:border-lime"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <Phone className="size-4 text-ink" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-ink/50">Telefono</span>
                <span className="font-medium text-ink">{CONTACT.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-left transition-colors hover:border-lime"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <Mail className="size-4 text-ink" />
              </span>
              <span className="flex min-w-0 flex-col overflow-hidden">
                <span className="text-xs text-ink/50">Email</span>
                <span className="truncate font-medium text-ink">{CONTACT.email}</span>
              </span>
            </a>
          </div>

          <NavLink to="/" className="mt-8 text-xs text-ink/40 hover:text-ink/60">
            www.restainup.it
          </NavLink>
        </div>
      </div>
    </div>
  );
}
