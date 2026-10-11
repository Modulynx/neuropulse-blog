// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://neuropulsemind.com',
  integrations: [sitemap()],
  // 2026-10-11: short links for the comment-keyword DMs (Comment FOG / MEMORY / ENERGY) -> quiz with the keyword + source
  redirects: {
    '/fog': '/quiz/?k=FOG&utm_source=dm',
    '/memory': '/quiz/?k=MEMORY&utm_source=dm',
    '/energy': '/quiz/?k=ENERGY&utm_source=dm',
  },
});
