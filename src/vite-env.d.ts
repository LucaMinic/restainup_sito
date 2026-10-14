/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_ORIGIN: string;
  /** Robots meta: "index, follow" on public builds, "noindex, nofollow" on previews. */
  readonly VITE_ROBOTS: string;
  /** Base path the site is served from (e.g. /restainup_sito/ on GitHub Pages, / on www.restainup.it). */
  readonly VITE_BASE_PATH?: string;
  /** Base URL of the consents backend (POST /consent/config and /consent). Empty: choices are applied but not recorded. */
  readonly VITE_CONSENT_API_URL?: string;
  /** Version of the Cookie Policy; changing it asks every visitor for consent again. */
  readonly VITE_COOKIE_POLICY_VERSION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
