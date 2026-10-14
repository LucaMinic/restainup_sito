import type { ReactNode } from 'react';
import { ShieldCheck } from 'lucide-react';
import { categoryTexts, fill, ui, useT } from '../../consent/consentTexts';
import { serviceById } from '../../consent/cookieConfig';
import { grantCategory, openPreferences } from '../../consent/consentStore';
import { useHasConsent } from '../../consent/useConsent';

interface ConsentGateProps {
  /** Service id from cookieConfig (e.g. 'recaptcha'). */
  service: string;
  /** The embed (iframe, widget...). It is not rendered at all until its category is accepted. */
  children: ReactNode;
  /** Optional link to open the content directly on the provider's site. */
  externalUrl?: string;
  /** Classes for the placeholder box, to keep the same size as the embed. */
  className?: string;
}

/** Shows the embed only with consent; otherwise a placeholder with an "Enable content" button. */
export function ConsentGate({ service: serviceId, children, externalUrl, className = '' }: ConsentGateProps) {
  const t = useT();
  const service = serviceById(serviceId);
  if (!service) throw new Error(`ConsentGate: unknown service "${serviceId}" (add it to cookieConfig.ts)`);
  const allowed = useHasConsent(service.category);

  if (allowed) return <>{children}</>;

  const values = {
    service: service.name,
    provider: service.provider,
    category: t(categoryTexts[service.category].title),
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-secondary/30 p-6 text-center ${className}`}
      data-consent-placeholder={serviceId}
    >
      <ShieldCheck className="size-7 text-ink" aria-hidden="true" />
      <p className="font-medium text-ink">{fill(t(ui.placeholderTitle), values)}</p>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{fill(t(ui.placeholderText), values)}</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => grantCategory(service.category)}
          className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink/85 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {t(ui.placeholderButton)}
        </button>
        <button
          type="button"
          onClick={openPreferences}
          className="rounded text-sm font-semibold text-ink underline underline-offset-2 focus-visible:outline-3 focus-visible:outline-ink"
        >
          {t(ui.footerLink)}
        </button>
      </div>
      {externalUrl && (
        <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground underline">
          {fill(t(ui.placeholderOpenExternal), values)}
        </a>
      )}
    </div>
  );
}
