// @ts-check
import { defineConfig } from 'astro/config';

// Static site for Cloudflare Pages.
// Build command: npm run build   Output directory: dist
export default defineConfig({
  output: 'static',
  outDir: './dist',
  // TODO: set this to your real domain once Cloudflare gives you one,
  // e.g. 'https://goodness-site.pages.dev'
  // site: 'https://example.pages.dev',
});
