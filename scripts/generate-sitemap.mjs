// Regenerates public/sitemap.xml (default: GitHub Pages staging domain). Run
// manually with `node scripts/generate-sitemap.mjs` whenever a route is
// added/removed/renamed (routes.tsx is the source of truth).
//
// Override SITE_URL and the output path for other targets (see build-aruba.sh,
// which regenerates the sitemap directly into dist/ for the Aruba domain):
//   SITEMAP_SITE_URL=https://www.restainup.it SITEMAP_OUT=dist/sitemap.xml node scripts/generate-sitemap.mjs
import { writeFileSync } from 'fs';
import path from 'path';

const SITE_URL = process.env.SITEMAP_SITE_URL || 'https://lucaminic.github.io/restainup_sito';
const OUT_PATH = path.resolve(process.cwd(), process.env.SITEMAP_OUT || 'public/sitemap.xml');
const today = new Date().toISOString().slice(0, 10);

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/servizi', priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'monthly' },
  { path: '/chi-siamo', priority: '0.7', changefreq: 'monthly' },
  { path: '/remote-dental', priority: '0.7', changefreq: 'monthly' },
  { path: '/contatti', priority: '0.6', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
];

const urlEntries = pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
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

writeFileSync(OUT_PATH, xml);
console.log(`${OUT_PATH} written with ${pages.length} URLs`);
