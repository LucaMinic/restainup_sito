// Regenerates public/sitemap.xml. Run manually with `node scripts/generate-sitemap.mjs`
// whenever a route is added/removed/renamed (routes.tsx is the source of truth).
//
// Update SITE_URL here when the final domain goes live.
import { writeFileSync } from 'fs';

const SITE_URL = 'https://lucaminic.github.io/restainup_sito';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/servizi', priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'monthly' },
  { path: '/chi-siamo', priority: '0.7', changefreq: 'monthly' },
  { path: '/remote-dental', priority: '0.7', changefreq: 'monthly' },
  { path: '/contatti', priority: '0.6', changefreq: 'yearly' },
];

const urlEntries = pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml written with ${pages.length} URLs`);
