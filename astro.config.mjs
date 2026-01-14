import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://chenyue664347078-web.github.io',
  base: '/yue-astroplate/',
  integrations: [react()],
});
