import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Default: GitHub Pages (staging), servito da una sottocartella.
  // La build per Aruba (dominio alla radice) sovrascrive questo valore con
  // `--base=/` — vedi build-aruba.sh.
  base: '/restainup_sito/',
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
})
