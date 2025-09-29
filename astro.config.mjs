import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Astro configuration file
// Optimized for Lighthouse 100/100
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});