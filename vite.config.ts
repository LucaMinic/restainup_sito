import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // Sottocartella da cui è servito il sito, da VITE_BASE_PATH nei file .env:
  // '/restainup_sito/' su GitHub Pages (.env), '/' sul nostro server, dove
  // www.restainup.it punta alla cartella /frontend/restainup/ (.env.server,
  // npm run build:server). La build per Aruba la sovrascrive con `--base=/`.
  base: (loadEnv(mode, process.cwd(), '').VITE_BASE_PATH || '/restainup_sito/').replace(/\/?$/, '/'),
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.jfif'],
}))
