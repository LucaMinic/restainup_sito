import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { companyInfo } from '../data/siteMeta';

export function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);

  // Nessun backend collegato: da integrare con un servizio di invio email
  // (es. endpoint dedicato o provider tipo Formspree) prima di andare live.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <RevealOnScroll className="max-w-2xl">
        <SectionEyebrow>Contatti</SectionEyebrow>
        <h1 className="mt-4">Parliamo del tuo progetto</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Raccontaci cosa vuoi realizzare: ti rispondiamo il prima possibile.
        </p>
      </RevealOnScroll>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_320px]">
        <RevealOnScroll delay={0.08}>
          {submitted ? (
            <div className="rounded-xl border border-border bg-accent/60 p-8">
              <h3>Messaggio inviato</h3>
              <p className="mt-2 text-muted-foreground">
                Grazie, ti risponderemo al più presto all'indirizzo che ci hai lasciato.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nome">Nome e cognome</Label>
                  <Input id="nome" name="nome" required placeholder="Mario Rossi" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="mario@azienda.it" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="azienda">Azienda (opzionale)</Label>
                <Input id="azienda" name="azienda" placeholder="Nome dell'azienda" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="messaggio">Messaggio</Label>
                <Textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={6}
                  placeholder="Raccontaci il tuo progetto..."
                />
              </div>
              <Button type="submit" size="lg" className="self-start">
                Invia messaggio
              </Button>
            </form>
          )}
        </RevealOnScroll>

        <RevealOnScroll delay={0.16} className="flex flex-col gap-6">
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-muted-foreground hover:text-ink">
                  {companyInfo.email}
                </a>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">Sede legale</p>
                <p className="text-sm text-muted-foreground">{companyInfo.registeredOffice}</p>
              </div>
            </div>
          </div>

          <div className="font-mono text-xs leading-relaxed text-muted-foreground">
            <p>{companyInfo.legalName} — Cap. Soc. {companyInfo.shareCapital}</p>
            <p>CF/P.IVA: {companyInfo.taxId} — {companyInfo.rea}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
