// @ts-check
import { defineConfig } from 'astro/config';

// Static site, deployed on Cloudflare (Workers, connected to GitHub).
// Build command: npm run build   Output directory: dist
export default defineConfig({
  output: 'static',
  outDir: './dist',
  site: 'https://goodnessazike.com',
});
