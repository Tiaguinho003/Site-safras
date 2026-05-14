// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://safrasenegocios.com.br",
  trailingSlash: "never",
  i18n: {
    // PT-BR é default (sem prefixo na URL — fica em /). EN e ES em /en/ e /es/.
    defaultLocale: "pt-br",
    locales: ["pt-br", "en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
