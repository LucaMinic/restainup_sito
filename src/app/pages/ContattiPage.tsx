import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { NavLink } from 'react-router';
import { Mail, MapPin } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { SectionEyebrow } from '../components/shared/SectionEyebrow';
import { RevealOnScroll } from '../components/shared/RevealOnScroll';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { getCompanyInfo } from '../data/siteMeta';
import { getContattiContent } from '../data/contatti';
import { useLanguage } from '../i18n/LanguageContext';

const CONTACT_EMAIL = 'info@restainup.it';
const RECAPTCHA_SITE_KEY = '6Le7u28sAAAAAMc6TQbSEgr1h-Q52tY52_EA-vTS';

export function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<'generic' | 'captcha' | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { language } = useLanguage();
  const content = getContattiContent(language);
  const companyInfo = getCompanyInfo(language);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get('nome') ?? '');
    const email = String(data.get('email') ?? '');
    const azienda = String(data.get('azienda') ?? '');
    const messaggio = String(data.get('messaggio') ?? '');

    if (!captchaToken) {
      setError('captcha');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const payload = {
        from: CONTACT_EMAIL,
        to: CONTACT_EMAIL,
        subject: content.email.subject(nome),
        text: content.email.body({ nome, azienda, email, messaggio }),
        captchaToken,
      };

      const response = await fetch('https://eccopec.eccosolution.it/Email/SendKaleyraMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio");
      }

      setSubmitted(true);
      form.reset();
      recaptchaRef.current?.reset();
      setCaptchaToken(null);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('generic');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <RevealOnScroll className="max-w-2xl">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        <h1 className="mt-4">{content.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{content.subtitle}</p>
      </RevealOnScroll>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_320px]">
        <RevealOnScroll delay={0.08}>
          {submitted ? (
            <div className="rounded-xl border border-border bg-accent/60 p-8">
              <h3>{content.successTitle}</h3>
              <p className="mt-2 text-muted-foreground">{content.successText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nome">{content.form.nomeLabel}</Label>
                  <Input id="nome" name="nome" required className="border-primary/60" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">{content.form.emailLabel}</Label>
                  <Input id="email" name="email" type="email" required className="border-primary/60" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="azienda">{content.form.aziendaLabel}</Label>
                <Input id="azienda" name="azienda" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="messaggio">{content.form.messaggioLabel}</Label>
                <Textarea id="messaggio" name="messaggio" required rows={6} className="border-primary/60" />
              </div>

              <div className="rounded-lg border border-border bg-secondary/30 p-4 text-xs leading-relaxed text-muted-foreground">
                <p className="font-medium text-ink">{content.privacy.title}</p>
                <p className="mt-2">{content.privacy.text1}</p>
                <p className="mt-2">
                  {content.privacy.text2Prefix}{' '}
                  <NavLink to="/privacy-policy" className="text-primary underline underline-offset-2 hover:text-ink">
                    {content.privacy.linkLabel}
                  </NavLink>{' '}
                  {content.privacy.text2Suffix}
                </p>
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                hl={language}
                onChange={(token) => {
                  setCaptchaToken(token);
                  if (token) setError(null);
                }}
                onExpired={() => setCaptchaToken(null)}
              />

              {error === 'captcha' && <p className="text-sm text-destructive">{content.error.captchaMissing}</p>}

              {error === 'generic' && (
                <p className="text-sm text-destructive">
                  {content.error.prefix}{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}

              <Button type="submit" size="lg" className="self-start" disabled={loading}>
                {loading ? content.form.loadingLabel : content.form.submitLabel}
              </Button>
            </form>
          )}
        </RevealOnScroll>

        <RevealOnScroll delay={0.16} className="flex flex-col gap-6">
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{content.sidebar.emailLabel}</p>
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-muted-foreground hover:text-ink">
                  {companyInfo.email}
                </a>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{content.sidebar.officeLabel}</p>
                <p className="text-sm text-muted-foreground">{companyInfo.registeredOffice}</p>
              </div>
            </div>
          </div>

          <div className="font-mono text-xs leading-relaxed text-muted-foreground">
            <p>
              {companyInfo.legalName} — {language === 'en' ? 'Share Capital' : 'Cap. Soc.'} {companyInfo.shareCapital}
            </p>
            <p>
              {language === 'en' ? 'Tax ID/VAT:' : 'CF/P.IVA:'} {companyInfo.taxId} — {companyInfo.rea}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
