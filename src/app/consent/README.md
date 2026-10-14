# Gestione del consenso cookie

Sistema interno, senza librerie CMP esterne (sostituisce Cookiebot), conforme a GDPR, Direttiva ePrivacy, art. 122 Codice Privacy e Linee guida del Garante del 10 giugno 2021. È lo stesso sistema usato su ffb-salvador.

## File

| File | Ruolo |
|---|---|
| `cookieConfig.ts` | **Unico punto di configurazione**: categorie, servizi, fornitori, cookie e durate, versione della policy |
| `consentTexts.ts` | Testi del banner, del pannello e dei segnaposto in it / en |
| `consentStore.ts` | Logica: cookie `cc_consent`, `hasConsent()`, `openPreferences()`, revoca, sblocco degli script |
| `consentApi.ts` | Collegamento al backend (`VITE_CONSENT_API_URL`): legge la configurazione (`POST /consent/config`) e registra ogni scelta (`POST /consent`), con coda e nuovi tentativi |
| `useConsent.ts` | Hook React: `useConsentState()`, `useHasConsent(categoria)` |
| `../components/consent/CookieBanner.tsx` | Primo livello (banner) |
| `../components/consent/CookiePreferences.tsx` | Secondo livello (pannello preferenze) |
| `../components/consent/ConsentGate.tsx` | Segnaposto "Attiva contenuto" per i contenuti di terze parti |
| `../components/consent/CookieConsent.tsx` | Monta banner e pannello nel layout |

## Servizi

- **Necessari:** `cc_consent` (cookie), `restainup-lang` e `cc_queue` (Local Storage).
- **Marketing e contenuti esterni:** Google reCAPTCHA nel modulo Contatti. Finché la categoria non è accettata, al posto del reCAPTCHA c'è il segnaposto "Attiva contenuto" (il modulo non si può inviare, l'indirizzo email resta visibile).
- I font (Montserrat, Open Sans, JetBrains Mono) sono serviti dal sito tramite `@fontsource-variable`: nessuna richiesta a Google Fonts.
- Le immagini segnaposto di picsum.photos non impostano cookie.

## Configurazione (.env)

```
VITE_CONSENT_API_URL=https://amosport.it      # indirizzo base del backend; vuoto = scelte applicate ma non registrate
VITE_COOKIE_POLICY_VERSION=2026-10-08         # versione usata finché non arriva quella del backend
```

## Backend

Il backend riconosce il sito dall'origine della richiesta (CORS: deve rispondere anche a `OPTIONS`).

- **All'apertura del sito**: `POST {base}/consent/config` con body `{}`. Dalla risposta (`data.policy_version`, `data.attivo`) il sito prende la versione della policy (se cambia, il banner viene riproposto) e se mostrare il banner. Se il backend non risponde o non ha la configurazione, restano i valori locali.
- **A ogni scelta**: `POST {base}/consent` con body
  ```json
  { "consent_id": "uuid", "azione": "accept_all|reject_all|custom|update|withdraw",
    "categorie": { "necessary": true, "preferences": false, "statistics": false, "marketing": true },
    "policy_version": "2026-10-08", "client_timestamp": "ISO 8601" }
  ```
  risposta attesa `{ "success": true }`. `update` = modifica di una scelta già data; `withdraw` = revoca di tutte le categorie facoltative.

## API pubblica

```ts
import { hasConsent, openPreferences } from './consent/useConsent';

hasConsent('marketing'); // true/false, 'necessary' è sempre true
openPreferences();       // apre il pannello preferenze
```

In un componente React: `const ok = useHasConsent('marketing')`, che si aggiorna da solo quando la scelta cambia.
Fuori da React, per esempio nella console del browser: `window.cookieConsent.hasConsent('marketing')`.

## Aggiungere un nuovo servizio

1. **Configurazione.** In `cookieConfig.ts` aggiungi una voce a `SERVICES` con `id`, `category`, `name`, `provider`, `privacyPolicyUrl`, `description` in it/en e l'elenco `cookies`. Aggiungere un servizio cambia la "firma" dei servizi, quindi il banner viene **riproposto a tutti**.
2. **Blocco.**
   - **Embed o widget** (iframe, video, mappe, reCAPTCHA): avvolgilo con `<ConsentGate service="id">…</ConsentGate>`.
   - **Script** (statistiche, pixel): `<script type="text/plain" data-cookie-category="statistics" src="https://..."></script>`, oppure caricalo dal codice solo se `hasConsent('statistics')`.
   - **Google Analytics / Ads**: imposta anche Google Consent Mode v2 (tutto `denied` di default, aggiornamento in `onConsentChoice()`).
3. **Testi.** Aggiorna `ui.bannerText` e la descrizione della categoria in `consentTexts.ts`.
4. **Cookie Policy.** Aggiorna la pagina e, se è una modifica sostanziale, `VITE_COOKIE_POLICY_VERSION`.

## Checklist di test manuale

Finestra in incognito, DevTools su **Application → Cookies / Local Storage** e **Network**.

1. **Prima visita:** il banner compare e riceve il focus; nessuna richiesta a `google.com`, `gstatic.com` o `fonts.googleapis.com`; nessun cookie.
2. **Nessun consenso implicito:** scroll, clic e cambio pagina non chiudono il banner.
3. **Rifiuto** ("Rifiuta tutti" o X): `cc_consent` con `marketing:false`, scadenza ~6 mesi; in Contatti c'è il segnaposto al posto del reCAPTCHA.
4. **Accettazione:** `cc_consent` con `marketing:true`, scadenza ~12 mesi; il reCAPTCHA si carica.
5. **Personalizza:** il focus resta nel pannello, Esc lo chiude, gli switch hanno `role="switch"`.
6. **"Attiva contenuto"** in Contatti: il reCAPTCHA si carica e `cc_consent` registra `marketing:true`.
7. **Revoca dal footer** ("Preferenze cookie"): disattivando Marketing il reCAPTCHA torna segnaposto e l'azione inviata è `withdraw`.
8. **Chiamate al backend:** `POST /consent/config` all'apertura e `POST /consent` a ogni scelta; nessun IP né email inviati.
9. **Backend non raggiungibile:** la scelta resta applicata e compare `cc_queue` in Local Storage (massimo 3 tentativi).
