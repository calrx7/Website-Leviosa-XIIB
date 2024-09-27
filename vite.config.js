import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    Pages(),
    Sitemap({
      hostname: 'https://your-domain.com', // Ganti dengan domain Anda
    }),
  ],
});
