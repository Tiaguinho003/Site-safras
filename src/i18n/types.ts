/**
 * Tipos e constantes centrais do sistema i18n.
 *
 * Aqui ficam:
 * - Locale: união dos idiomas suportados
 * - LOCALES / DEFAULT_LOCALE: arrays e padrão
 * - LOCALE_LABELS: nomes nativos e bandeiras pro switcher
 */

export type Locale = "pt-br" | "en" | "es";

export const LOCALES = ["pt-br", "en", "es"] as const satisfies readonly Locale[];

export const DEFAULT_LOCALE: Locale = "pt-br";

/**
 * Locales não-default (= que recebem prefixo na URL). Útil pra iteração
 * em rotas, hreflang tags, switcher etc.
 */
export const NON_DEFAULT_LOCALES = ["en", "es"] as const satisfies readonly Locale[];

/**
 * Metadados visuais por idioma — usados no switcher do header.
 * Bandeiras escolhidas por reconhecimento global (não por exatidão
 * política): 🇧🇷 BR / 🇺🇸 US / 🇪🇸 ES.
 */
export const LOCALE_LABELS: Record<Locale, { native: string; flag: string; bcp47: string }> = {
  "pt-br": { native: "Português", flag: "🇧🇷", bcp47: "pt-BR" },
  en: { native: "English", flag: "🇺🇸", bcp47: "en-US" },
  es: { native: "Español", flag: "🇪🇸", bcp47: "es-ES" },
};

/**
 * Type guard: checa se uma string é um Locale válido.
 */
export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
