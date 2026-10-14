import { CookieBanner } from './CookieBanner';
import { CookiePreferences } from './CookiePreferences';

/** Mounted once in the root layout: first-layer banner + preferences panel. */
export function CookieConsent() {
  return (
    <>
      <CookieBanner />
      <CookiePreferences />
    </>
  );
}
