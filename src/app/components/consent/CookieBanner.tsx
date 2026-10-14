import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { X } from 'lucide-react';
import { ui, useT } from '../../consent/consentTexts';
import { allCategories, openPreferences, saveChoice } from '../../consent/consentStore';
import { useConsentState } from '../../consent/useConsent';

// The three choices share exactly the same look: no option is visually favoured.
export const consentButtonClass =
  'w-full sm:w-auto sm:flex-1 rounded-md bg-ink px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-ink/85 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink';

/** First layer: shown until the visitor makes a choice. The site stays usable meanwhile. */
export function CookieBanner() {
  const t = useT();
  const { needsChoice, preferencesOpen } = useConsentState();
  const dialogRef = useRef<HTMLDivElement>(null);
  const visible = needsChoice && !preferencesOpen;

  // Move focus to the banner when it appears, so keyboard and screen reader users reach it.
  useEffect(() => {
    if (visible) dialogRef.current?.focus();
  }, [visible]);

  if (!needsChoice) return null;

  return (
    <div
      ref={dialogRef}
      data-cookie-banner
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
      tabIndex={-1}
      hidden={preferencesOpen}
      className="fixed inset-x-0 bottom-0 z-[60] p-3 focus:outline-none sm:p-4"
    >
      <div className="relative mx-auto max-h-[85vh] max-w-4xl overflow-y-auto rounded-xl border border-border bg-white p-5 text-ink shadow-[0_-4px_40px_rgba(0,0,0,0.2)] sm:p-6">
        <button
          type="button"
          onClick={() => saveChoice('reject_all', allCategories(false))}
          className="absolute top-3 right-3 rounded-md p-2 text-ink/70 hover:bg-secondary focus-visible:outline-3 focus-visible:outline-ink"
          aria-label={t(ui.closeBanner)}
          title={t(ui.closeBanner)}
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <h2 id="cookie-banner-title" className="mb-2 pr-10 text-lg font-bold">
          {t(ui.bannerTitle)}
        </h2>
        <p id="cookie-banner-text" className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {t(ui.bannerText)}{' '}
          <NavLink to="/cookie-policy" className="font-semibold text-ink underline underline-offset-2 hover:no-underline">
            {t(ui.policyLink)}
          </NavLink>
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" className={consentButtonClass} onClick={() => saveChoice('reject_all', allCategories(false))}>
            {t(ui.rejectAll)}
          </button>
          <button type="button" className={consentButtonClass} onClick={openPreferences}>
            {t(ui.customize)}
          </button>
          <button type="button" className={consentButtonClass} onClick={() => saveChoice('accept_all', allCategories(true))}>
            {t(ui.acceptAll)}
          </button>
        </div>
      </div>
    </div>
  );
}
