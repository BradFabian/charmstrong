// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Netlify sets URL at build time. Replace with the real domain at launch.
  site: process.env.URL ?? 'http://localhost:4321',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  // Downloaded at build time and served from this site, not a font CDN.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Zilla Slab',
      cssVariable: '--font-zilla-slab',
      weights: [700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Barlow',
      cssVariable: '--font-barlow',
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
