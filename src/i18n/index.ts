/**
 * Public API do sistema i18n.
 *
 * Pattern recomendado em componentes Astro:
 * ```astro
 * ---
 * import { useTranslation } from "../i18n";
 * const { t, tArray, locale, localizeAnchor } = useTranslation(Astro);
 * ---
 * <h1>{t("hero.tag")}</h1>
 * <a href={localizeAnchor("contato")}>...</a>
 * ```
 */

import ptBr from "./pt-br";
import en from "./en";
import es from "./es";
import { DEFAULT_LOCALE, isLocale } from "./types";
import type { Locale } from "./types";
import { localizeAnchorURL, type AnchorKey } from "./anchors";
import { localizeRoute, getRoute, type RouteKey } from "./routes";

export type { Locale } from "./types";
export type { AnchorKey } from "./anchors";
export type { RouteKey } from "./routes";
export {
  LOCALES,
  NON_DEFAULT_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  isLocale,
} from "./types";
export { localizeAnchorURL, getAnchor, getCanonicalKey, getAllAnchors } from "./anchors";
export { getRoute, getRouteKey, localizeRoute, getAllRoutes } from "./routes";

/**
 * Mapeamento de Locale → dicionário. PT-BR é sempre o fallback.
 */
const DICTS: Record<Locale, unknown> = {
  "pt-br": ptBr,
  en,
  es,
};

/**
 * Resolve uma chave dot-path num objeto de dicionário.
 * Ex: resolveKey({ hero: { tag: "x" } }, "hero.tag") → "x"
 * Retorna undefined se a chave não existir.
 */
function resolveKey(dict: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((obj, segment) => {
    if (obj == null || typeof obj !== "object") return undefined;
    return (obj as Record<string, unknown>)[segment];
  }, dict);
}

/**
 * Traduz uma chave para a língua especificada. Faz fallback pra PT-BR
 * se a chave não existir no idioma alvo. Em dev, loga warning se a chave
 * faltar até em PT (ajuda a pegar typos).
 *
 * @example
 *   t("hero.tag", "en") → "[ Coffee Brokerage ]" (após Fase 3)
 *   t("hero.tag", "en") → "[ Corretora de café ]" (Fase 2 — fallback)
 */
export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  const value = resolveKey(DICTS[locale], key);
  if (typeof value === "string") return value;

  // Fallback pra PT-BR
  if (locale !== DEFAULT_LOCALE) {
    const fallback = resolveKey(DICTS[DEFAULT_LOCALE], key);
    if (typeof fallback === "string") return fallback;
  }

  // Warning em dev pra ajudar a pegar typos / chaves faltando
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] Missing key: "${key}" (locale: ${locale})`);
  }

  return key;
}

/**
 * Traduz uma chave cujo valor é um array. Útil pra listas (rotatingWords,
 * strips, etc.). Faz fallback pra PT-BR e retorna [] se inválido.
 *
 * @example
 *   tArray<string>("hero.rotatingWords", "en") → ["Tradition", "Trust"]
 */
export function tArray<T = string>(
  key: string,
  locale: Locale = DEFAULT_LOCALE
): T[] {
  const value = resolveKey(DICTS[locale], key);
  if (Array.isArray(value)) return value as T[];

  if (locale !== DEFAULT_LOCALE) {
    const fallback = resolveKey(DICTS[DEFAULT_LOCALE], key);
    if (Array.isArray(fallback)) return fallback as T[];
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] Missing/invalid array key: "${key}" (locale: ${locale})`);
  }

  return [];
}

/**
 * Traduz uma chave cujo valor é um objeto. Útil pra agrupamentos
 * estruturados (form labels, services cards, etc.).
 */
export function tObject<T = Record<string, unknown>>(
  key: string,
  locale: Locale = DEFAULT_LOCALE
): T {
  const value = resolveKey(DICTS[locale], key);
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as T;
  }

  if (locale !== DEFAULT_LOCALE) {
    const fallback = resolveKey(DICTS[DEFAULT_LOCALE], key);
    if (fallback && typeof fallback === "object" && !Array.isArray(fallback)) {
      return fallback as T;
    }
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] Missing/invalid object key: "${key}" (locale: ${locale})`);
  }

  return {} as T;
}

/**
 * Extrai o Locale atual do contexto Astro. Type-safe: nunca retorna undefined.
 * Cai no DEFAULT_LOCALE se o valor for inválido (ex: rotas sem i18n config).
 */
export function getCurrentLocale(astro: {
  currentLocale: string | undefined;
}): Locale {
  return isLocale(astro.currentLocale) ? astro.currentLocale : DEFAULT_LOCALE;
}

/**
 * Hook-like helper pra componentes Astro. Devolve `t`, `tArray`, `locale`
 * e `localizeAnchor` já vinculados ao locale atual da página — evita
 * repetir `locale` em cada chamada.
 *
 * `route` faz o mesmo para páginas: devolve o pathname da rota no idioma
 * atual, com o slug traduzido que estiver no registro.
 *
 * @example
 *   const { t, locale, localizeAnchor, route } = useTranslation(Astro);
 *   <h1>{t("hero.tag")}</h1>
 *   <a href={localizeAnchor("contato")}>Contato</a>
 *   <a href={route("privacidade")}>Privacidade</a>
 */
export function useTranslation(astro: { currentLocale: string | undefined }): {
  locale: Locale;
  t: (key: string) => string;
  tArray: <T = string>(key: string) => T[];
  tObject: <T = Record<string, unknown>>(key: string) => T;
  localizeAnchor: (key: AnchorKey) => string;
  route: (key: RouteKey) => string;
} {
  const locale = getCurrentLocale(astro);
  return {
    locale,
    t: (key) => t(key, locale),
    tArray: <T = string>(key: string) => tArray<T>(key, locale),
    tObject: <T = Record<string, unknown>>(key: string) => tObject<T>(key, locale),
    localizeAnchor: (key) => localizeAnchorURL(key, locale),
    route: (key) => getRoute(key, locale),
  };
}

/**
 * Constrói URL pra mesma rota em outro idioma. Útil pro switcher
 * (mantém o anchor atual se houver).
 *
 * Consulta primeiro o registro de rotas (`routes.ts`), que é quem sabe
 * que /privacidade em PT é /en/privacy em EN — slug traduzido, não só
 * prefixo trocado. Rota não registrada (/404, /manutencao, /qr) cai no
 * comportamento antigo de troca de prefixo.
 *
 * É esta função que alimenta canonical, hreflang, x-default, o switcher
 * e a sugestão de idioma. Traduzir slug sem passar por aqui produziria
 * hreflang apontando pra 404.
 *
 * IMPORTANTE: alinhado com astro.config `trailingSlash: "never"`.
 * NUNCA adiciona barra final — `/en/` dá 404 no Astro com essa config.
 *
 * Ex: localizeURL("/", "en") → "/en"
 * Ex: localizeURL("/en", "pt-br") → "/"
 * Ex: localizeURL("/privacidade", "en") → "/en/privacy"
 * Ex: localizeURL("/manutencao", "en") → "/en/manutencao" (não registrada)
 */
export function localizeURL(currentPath: string, targetLocale: Locale): string {
  // Rota registrada: o slug do idioma alvo vem do mapa, não de heurística.
  const registered = localizeRoute(currentPath, targetLocale);
  if (registered !== null) return registered;

  // Strip prefix de idioma existente
  let cleanPath = currentPath.replace(/^\/(en|es)(\/|$)/, "/");
  if (!cleanPath.startsWith("/")) cleanPath = "/" + cleanPath;
  // Strip trailing slash exceto se for raiz
  if (cleanPath !== "/") cleanPath = cleanPath.replace(/\/$/, "");

  if (targetLocale === DEFAULT_LOCALE) return cleanPath;

  // Adiciona prefixo do locale alvo (SEM trailing slash)
  return cleanPath === "/" ? `/${targetLocale}` : `/${targetLocale}${cleanPath}`;
}
