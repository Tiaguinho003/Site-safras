/**
 * Mapeamento de anchors entre idiomas.
 *
 * Cada seção do site tem um identificador canônico (chave) e seu
 * "slug" varia por idioma. Ex: a seção de Contato é #contato em PT,
 * #contact em EN, #contacto em ES.
 *
 * Esse mapa é a SOURCE OF TRUTH dos anchors traduzidos. Ele alimenta:
 * - Header / Footer links de navegação (href correto por idioma)
 * - O switcher (mantém anchor ao trocar idioma)
 * - O auto-detect / smooth-scroll que precisa entender qualquer anchor
 */

import type { Locale } from "./types";
import { DEFAULT_LOCALE } from "./types";

export type AnchorKey = "hero" | "servicos" | "quem-somos" | "contato";

const ANCHOR_MAP: Record<AnchorKey, Record<Locale, string>> = {
  hero: { "pt-br": "hero", en: "home", es: "inicio" },
  servicos: { "pt-br": "servicos", en: "services", es: "servicios" },
  "quem-somos": { "pt-br": "quem-somos", en: "about", es: "sobre-nosotros" },
  contato: { "pt-br": "contato", en: "contact", es: "contacto" },
};

/**
 * Retorna o anchor (sem #) na língua especificada.
 * Ex: getAnchor("contato", "en") → "contact"
 */
export function getAnchor(key: AnchorKey, locale: Locale): string {
  return ANCHOR_MAP[key][locale];
}

/**
 * Constrói uma URL completa pra um anchor numa língua específica.
 * Inclui prefixo de idioma se não-default.
 *
 * IMPORTANTE: alinhado com astro.config `trailingSlash: "never"`.
 * Pra PT-BR (default) retorna `/#anchor`. Pra non-default retorna
 * `/en#anchor` (SEM barra antes do #) — `/en/#anchor` dá 404 no Astro.
 *
 * Ex: localizeAnchorURL("contato", "en") → "/en#contact"
 * Ex: localizeAnchorURL("hero", "pt-br") → "/#hero"
 */
export function localizeAnchorURL(key: AnchorKey, locale: Locale): string {
  const anchor = getAnchor(key, locale);
  if (locale === DEFAULT_LOCALE) return `/#${anchor}`;
  return `/${locale}#${anchor}`;
}

/**
 * Dado um anchor qualquer (em qualquer idioma), retorna a chave canônica.
 * Útil pra o scroll-spy entender que "contact" e "contacto" mapeiam pro
 * mesmo conceito.
 *
 * Retorna null se o anchor não corresponder a nenhuma seção conhecida.
 */
export function getCanonicalKey(anchor: string): AnchorKey | null {
  const cleanAnchor = anchor.replace(/^#/, "");
  for (const [key, translations] of Object.entries(ANCHOR_MAP)) {
    if (Object.values(translations).includes(cleanAnchor)) {
      return key as AnchorKey;
    }
  }
  return null;
}

/**
 * Lista de TODOS os anchors válidos (em todos os idiomas). Útil pro
 * scroll-spy ou pra validação.
 */
export function getAllAnchors(): string[] {
  return Object.values(ANCHOR_MAP).flatMap((m) => Object.values(m));
}
