// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://safrasenegocios.com.br",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) =>
        [
          "https://safrasenegocios.com.br/",
          "https://safrasenegocios.com.br/en",
          "https://safrasenegocios.com.br/es",
        ].includes(page),
    }),
  ],
  i18n: {
    // PT-BR é default (sem prefixo na URL — fica em /). EN e ES em /en/ e /es/.
    defaultLocale: "pt-br",
    locales: ["pt-br", "en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
