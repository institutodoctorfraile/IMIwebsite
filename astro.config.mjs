// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TEMPORAL: usando dominio de Vercel hasta conectar el dominio definitivo.
  // Cambiar a 'https://institutoginecologicoalicante.com' cuando el DNS apunte a Vercel.
  site: 'https://im-iwebsite.vercel.app',
  
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
          ru: 'ru-RU',
        },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Build options for optimal performance
  build: {
    inlineStylesheets: 'auto',
  },

  // Enable view transitions for smooth navigation (optional)
  // viewTransitions: true,

  // Compress HTML output
  compressHTML: true,

  // Image optimization
  image: {
    // Use Sharp for image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
