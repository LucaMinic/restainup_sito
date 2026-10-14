import { useSyncExternalStore } from 'react';
import { getConsentState, hasConsent, openPreferences, subscribe, type ConsentState } from './consentStore';
import type { ConsentCategory } from './cookieConfig';

/** Current consent state; components re-render whenever the visitor changes their choice. */
export function useConsentState(): ConsentState {
  return useSyncExternalStore(subscribe, getConsentState, getConsentState);
}

/** True when the visitor accepted the given category ('necessary' is always true). */
export function useHasConsent(category: ConsentCategory): boolean {
  useConsentState();
  return hasConsent(category);
}

export { hasConsent, openPreferences };
