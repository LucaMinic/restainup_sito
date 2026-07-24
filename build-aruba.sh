#!/usr/bin/env bash
# Build di produzione per l'hosting Aruba (dominio alla radice, indicizzabile),
# in parallelo al flusso di staging su GitHub Pages (sottocartella, noindex)
# che resta invariato con `npm run build` / `npm run deploy`.
#
# Genera una dist/ pulita con base "/", canonical/OG/robots sul dominio Aruba,
# sitemap.xml e robots.txt dedicati, l'.htaccess per il routing SPA su Apache,
# e un archivio zip pronto per l'upload via FTP/File Manager.
set -euo pipefail

cd "$(dirname "$0")"

ARUBA_SITE_URL="https://www.restainup.it"

echo "==> Pulizia build precedente"
rm -rf dist dist-aruba.zip

echo "==> Build di produzione (base=/, dominio Aruba, indicizzabile)"
# MSYS_NO_PATHCONV evita che Git Bash su Windows riscriva "/" come percorso di
# filesystem (es. C:/Program Files/Git/) prima di passarlo a Vite.
MSYS_NO_PATHCONV=1 VITE_SITE_ORIGIN="$ARUBA_SITE_URL" VITE_ROBOTS="index, follow" npx vite build --base=/

echo "==> Genero sitemap.xml per il dominio Aruba"
SITEMAP_SITE_URL="$ARUBA_SITE_URL" SITEMAP_OUT="dist/sitemap.xml" node scripts/generate-sitemap.mjs

echo "==> Scrivo robots.txt per Aruba (indicizzabile, sovrascrive quello di staging)"
cat > dist/robots.txt <<EOF
User-agent: *
Allow: /

Sitemap: ${ARUBA_SITE_URL}/sitemap.xml
EOF

echo "==> Aggiungo .htaccess per il routing SPA su Apache"
cat > dist/.htaccess <<'HTACCESS'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # File e cartelle esistenti (asset, immagini, ecc.) vengono serviti direttamente
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Tutte le altre richieste (le route della SPA) vengono gestite da index.html
  RewriteRule ^ index.html [L]
</IfModule>
HTACCESS

echo "==> Creo l'archivio per l'upload"
if command -v zip >/dev/null 2>&1; then
  (cd dist && zip -rq ../dist-aruba.zip .)
  echo "Archivio creato: dist-aruba.zip"
elif command -v powershell.exe >/dev/null 2>&1; then
  powershell.exe -NoProfile -Command "Compress-Archive -Path 'dist/*' -DestinationPath 'dist-aruba.zip' -Force"
  echo "Archivio creato (PowerShell): dist-aruba.zip"
else
  echo "Nessun tool di compressione trovato: carica manualmente il contenuto di dist/ su Aruba."
fi

echo "==> Fatto. Carica il contenuto di dist/ (o dist-aruba.zip) nella document root su Aruba."
