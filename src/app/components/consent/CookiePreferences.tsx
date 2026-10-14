import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { X } from 'lucide-react';
import { categoryTexts, ui, useT } from '../../consent/consentTexts';
import { SERVICES, activeCategories, type ConsentCategory } from '../../consent/cookieConfig';
import {
  allCategories,
  closePreferences,
  currentCategories,
  saveChoice,
  type ConsentCategories,
} from '../../consent/consentStore';
import { useConsentState } from '../../consent/useConsent';
import { consentButtonClass } from './CookieBanner';

/** Second layer: one switch per category, everything optional off by default. */
export function CookiePreferences() {
  const t = useT();
  const { preferencesOpen } = useConsentState();
  const [choice, setChoice] = useState<ConsentCategories>(currentCategories);

  // Every time the panel opens it starts from what is currently granted.
  useEffect(() => {
    if (preferencesOpen) setChoice(currentCategories());
  }, [preferencesOpen]);

  // saveChoice reports later changes as 'update' or 'withdraw' by itself.
  const save = saveChoice;

  return (
    <Dialog.Root open={preferencesOpen} onOpenChange={(open) => !open && closePreferences()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50" />
        <Dialog.Content
          className="fixed z-[70] inset-x-3 top-1/2 -translate-y-1/2 mx-auto max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white text-ink shadow-2xl p-5 sm:p-7 focus:outline-none"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <Dialog.Title className="text-xl font-bold">{t(ui.prefsTitle)}</Dialog.Title>
            <Dialog.Close
              className="p-2 -m-2 rounded-md text-ink/70 hover:bg-secondary focus-visible:outline-3 focus-visible:outline-ink"
              aria-label={t(ui.closePrefs)}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="mb-5 text-sm leading-relaxed text-muted-foreground">{t(ui.prefsIntro)}</Dialog.Description>

          <ul className="space-y-4 mb-6">
            {activeCategories().map((category) => (
              <CategoryRow
                key={category}
                category={category}
                checked={choice[category]}
                onChange={(value) => setChoice((prev) => ({ ...prev, [category]: value }))}
              />
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" className={consentButtonClass} onClick={() => save('reject_all', allCategories(false))}>
              {t(ui.rejectAll)}
            </button>
            <button type="button" className={consentButtonClass} onClick={() => save('custom', choice)}>
              {t(ui.savePrefs)}
            </button>
            <button type="button" className={consentButtonClass} onClick={() => save('accept_all', allCategories(true))}>
              {t(ui.acceptAll)}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CategoryRow({
  category,
  checked,
  onChange,
}: {
  category: ConsentCategory;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  const t = useT();
  const texts = categoryTexts[category];
  const services = SERVICES.filter((s) => s.category === category);
  const titleId = `cookie-cat-${category}`;
  const descId = `cookie-cat-${category}-desc`;
  const necessary = category === 'necessary';

  return (
    <li className="rounded-lg border border-border p-4">
      <div className="flex items-start justify-between gap-4">
        <h3 id={titleId} className="font-bold">
          {t(texts.title)}
        </h3>
        {necessary ? (
          <span className="whitespace-nowrap text-sm font-semibold">{t(ui.alwaysActive)}</span>
        ) : (
          // Radix renders role="switch" with aria-checked.
          <SwitchPrimitive.Root
            checked={checked}
            onCheckedChange={onChange}
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-ink data-[state=unchecked]:bg-gray-500 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <SwitchPrimitive.Thumb className="block h-6 w-6 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        )}
      </div>
      <p id={descId} className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {t(texts.description)}
      </p>

      <details className="mt-3 group">
        <summary className="cursor-pointer rounded text-sm font-semibold underline underline-offset-2 focus-visible:outline-3 focus-visible:outline-ink">
          {t(ui.showDetails)}
        </summary>
        <div className="mt-3 space-y-4">
          {services.map((service) => (
            <div key={service.id} className="text-sm">
              <p className="font-semibold">{service.name}</p>
              <p className="text-muted-foreground">{t(service.description)}</p>
              <p className="text-muted-foreground">
                {t(ui.provider)}: {service.provider}
                {service.privacyPolicyUrl && (
                  <>
                    {' · '}
                    <a href={service.privacyPolicyUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline">
                      {t(ui.privacyPolicy)}
                    </a>
                  </>
                )}
              </p>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th scope="col" className="py-1 pr-3 font-semibold">{t(ui.cookieName)}</th>
                      <th scope="col" className="py-1 pr-3 font-semibold">{t(ui.cookieDuration)}</th>
                      <th scope="col" className="py-1 font-semibold">{t(ui.cookiePurpose)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.cookies.map((cookie) => (
                      <tr key={cookie.name} className="border-b border-border/60 align-top text-muted-foreground">
                        <td className="py-1 pr-3 font-mono break-all">
                          {cookie.name}
                          <span className="block font-sans text-muted-foreground">
                            {t(cookie.party === 'first' ? ui.firstParty : ui.thirdParty)}
                          </span>
                        </td>
                        <td className="py-1 pr-3">{t(cookie.duration)}</td>
                        <td className="py-1">{t(cookie.purpose)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </details>
    </li>
  );
}
