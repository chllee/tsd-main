import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.threesparks.digital',
  integrations: [sitemap()],
  build: { format: 'directory' }
});