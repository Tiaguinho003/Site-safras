// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { getAllRoutes } from "./src/i18n/routes";

const SITE = "https://safrasenegocios.com.br";

// O sitemap sai do registro de rotas (src/i18n/routes.ts), não de uma lista
// literal: página nova entra por construção. Antes era um array fixo de três
// URLs, e qualquer página criada depois ficaria fora do sitemap em silêncio.
const SITEMAP_URLS = new Set(getAllRoutes().map((path) => new URL(path, SITE).href));

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  integrations: [sitemap({ filter: (page) => SITEMAP_URLS.has(page) })],
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
