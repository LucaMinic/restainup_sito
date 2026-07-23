import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { getPageSeo, SITE_ORIGIN, SITE_URL, SITE_NAME } from '../../data/seo';
import { useLanguage } from '../../i18n/LanguageContext';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Il sito è una SPA client-rendered senza SSR: title, meta description, canonical
// e Open Graph vanno aggiornati manualmente ad ogni cambio di route (react-router
// non lo fa da solo). Googlebot esegue il JS e legge questi tag dopo il render.
export function Seo() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const meta = getPageSeo(language, pathname);
    const url = `${SITE_URL}${pathname}`;
    const imageUrl = meta.image ? `${SITE_ORIGIN}${meta.image}` : undefined;

    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:locale', language === 'en' ? 'en_US' : 'it_IT');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);

    if (imageUrl) {
      upsertMeta('property', 'og:image', imageUrl);
      upsertMeta('name', 'twitter:image', imageUrl);
    }
  }, [pathname, language]);

  return null;
}
