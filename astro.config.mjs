// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://site-safras.web.app",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
