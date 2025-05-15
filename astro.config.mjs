// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lacerdareformas.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date()
    })
  ],
  output: 'static',
  trailingSlash: 'always',
  vite: {
    build: {
      cssMinify: true,
      minify: true,
      assetsInlineLimit: 4096
    }
  }
});
