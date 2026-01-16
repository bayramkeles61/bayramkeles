// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://bayramkeles.com',
  integrations: [sitemap()],

  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  },

  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },
});