// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://inflvx.org',

  image: {
    service: passthroughImageService(),
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});