// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// 2026-11-19: articles with `unlisted: true` in their frontmatter stay reachable but are left out of the sitemap (src/utils/listed.ts)
const BLOG_DIR = new URL('./src/content/blog/', import.meta.url);
const UNLISTED = readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f))
  .filter((f) => /^unlisted:\s*true\s*$/m.test((readFileSync(new URL(f, BLOG_DIR), 'utf8').match(/^---\n([\s\S]*?)\n---/) || ['', ''])[1]))
  .map((f) => '/blog/' + f.replace(/\.mdx?$/, '') + '/');

// https://astro.build/config
export default defineConfig({
  site: 'https://neuropulsemind.com',
  integrations: [sitemap({ filter: (page) => !UNLISTED.some((u) => page.endsWith(u)) })],
  // 2026-10-11: short links for the comment-keyword DMs (Comment FOG / MEMORY / ENERGY) -> quiz with the keyword + source
  redirects: {
    '/fog': '/quiz/?k=FOG&utm_source=dm',
    '/memory': '/quiz/?k=MEMORY&utm_source=dm',
    '/energy': '/quiz/?k=ENERGY&utm_source=dm',
  },
});
