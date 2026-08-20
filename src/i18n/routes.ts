/**
 * Mapeamento de ROTAS entre idiomas.
 *
 * Cada página do site tem um identificador canônico (chave) e seu
 * pathname varia por idioma. Ex: a política de privacidade é
 * /privacidade em PT, /en/privacy em EN, /es/privacidad em ES.
 *
 * É o mesmo desenho de `anchors.ts`, um nível acima: lá o mapa é de
 * âncoras dentro de uma página; aqui é de páginas dentro do site.
 *
 * Esse mapa é a SOURCE OF TRUTH das rotas traduzidas. Ele alimenta:
 * - `localizeURL()` em index.ts, e portanto canonical, hreflang,
 *   x-default, o switcher e a sugestão automática de idioma
 * - o filtro do sitemap em astro.config.mjs
 * - qualquer link interno entre páginas (ex: a política no rodapé)
 *
 * ⚠️ IMPORTANTE: este módulo é importado pelo `astro.config.mjs`, que roda
 * FORA do runtime do Astro. Ele não pode importar nada além de `types.ts`
 * — nem dicionários, nem componentes, nem `astro:*`.
 *
 * Alinhado com astro.config `trailingSlash: "never"`: nenhum pathname
 * termina em barra, exceto a raiz `/`.
 */

import type { Locale } from "./types";
import { LOCALES } from "./types";

export type RouteKey = "home" | "privacidade";

const ROUTE_MAP: Record<RouteKey, Record<Locale, string>> = {
  home: { "pt-br": "/", en: "/en", es: "/es" },
  privacidade: {
    "pt-br": "/privacidade",
    en: "/en/privacy",
    es: "/es/privacidad",
  },
};

/**
 * Normaliza um pathname para comparação: garante barra inicial e remove
 * a barra final (exceto na raiz). `/en/privacy/` e `en/privacy` viram
 * ambos `/en/privacy`.
 */
function normalize(pathname: string): string {
  let path = pathname.split(/[?#]/)[0] ?? "";
  if (!path.startsWith("/")) path = "/" + path;
  if (path !== "/") path = path.replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

/**
 * Retorna o pathname da rota no idioma especificado.
 * Ex: getRoute("privacidade", "en") → "/en/privacy"
 */
export function getRoute(key: RouteKey, locale: Locale): string {
  return ROUTE_MAP[key][locale];
}

/**
 * Dado um pathname qualquer (em qualquer idioma), retorna a chave
 * canônica da rota. Útil para traduzir a URL atual sem saber de antemão
 * em que idioma ela está.
 *
 * Retorna null se o pathname não corresponder a nenhuma rota registrada
 * — o caso de /404, /manutencao e /qr, que não são traduzidas.
 */
export function getRouteKey(pathname: string): RouteKey | null {
  const path = normalize(pathname);
  for (const [key, translations] of Object.entries(ROUTE_MAP)) {
    if (Object.values(translations).includes(path)) {
      return key as RouteKey;
    }
  }
  return null;
}

/**
 * Traduz um pathname para outro idioma usando o registro.
 *
 * Retorna null quando a rota não está registrada — quem chama decide o
 * fallback. `localizeURL()` em index.ts usa isso para cair na troca
 * simples de prefixo.
 *
 * Ex: localizeRoute("/privacidade", "en") → "/en/privacy"
 * Ex: localizeRoute("/manutencao", "en")  → null
 */
export function localizeRoute(
  pathname: string,
  targetLocale: Locale
): string | null {
  const key = getRouteKey(pathname);
  return key === null ? null : getRoute(key, targetLocale);
}

/**
 * Todos os pathnames registrados, em todos os idiomas.
 *
 * É o que o sitemap consome: página nova entra por construção, em vez de
 * depender de alguém lembrar de atualizar uma lista literal.
 */
export function getAllRoutes(): string[] {
  return Object.values(ROUTE_MAP).flatMap((translations) =>
    LOCALES.map((locale) => translations[locale])
  );
}
