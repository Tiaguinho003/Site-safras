/**
 * Configuração do consentimento de cookies.
 *
 * Constantes e helpers puros, sem dependência de DOM. Importado no
 * front-matter dos componentes e repassado ao script inline do `<head>`
 * via `define:vars` — o bootstrap precisa ser inline e síncrono, e por
 * isso não pode importar nada em tempo de execução.
 *
 * O que este arquivo NÃO faz: gravar cookie, ler `document`, decidir
 * interface. Só descreve o contrato.
 */

/** Nome do cookie que guarda a decisão. */
export const CONSENT_COOKIE = "safras_consent";

/**
 * Versão do consentimento. Incrementar SÓ quando as finalidades mudarem —
 * uma finalidade nova torna a decisão anterior desatualizada, e o banner
 * volta a aparecer para quem já havia decidido.
 *
 * Mudança de texto ou de layout NÃO é motivo para incrementar.
 */
export const CONSENT_VERSION = 1;

/** Seis meses. Depois disso a escolha é perguntada de novo. */
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 182;

/**
 * Categorias opcionais — as que a interface controla.
 *
 * `necessarios` não entra aqui de propósito: cookie funcional não é
 * negociável e oferecer uma chave para ele seria oferecer um controle
 * falso. Hoje isso cobre `safras_locale` (idioma) e o próprio cookie de
 * consentimento.
 */
export const OPTIONAL_CATEGORIES = ["analytics"] as const;

export type OptionalCategory = (typeof OPTIONAL_CATEGORIES)[number];

/** Estado de uma categoria, no vocabulário do Consent Mode v2. */
export type ConsentValue = "granted" | "denied";

export interface ConsentState {
  version: number;
  /** Unix timestamp em segundos de quando a escolha foi feita. */
  timestamp: number;
  analytics: ConsentValue;
}

/**
 * Sinais do Consent Mode v2 que ficam `denied` de forma permanente.
 *
 * O site não faz publicidade nem remarketing. Declarar isso no código é
 * mais honesto do que exibir uma chave que não corresponde a nada — e
 * garante que, se o GA4 for instalado, ele nunca receba permissão de
 * publicidade por descuido de configuração.
 */
export const PERMANENTLY_DENIED = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
] as const;

/**
 * Serializa o estado para o valor do cookie.
 *
 * Formato deliberadamente legível e mínimo: `v=1&t=<unix>&analytics=denied`.
 * Sem identificador de pessoa, sem IP, sem hash — o cookie de consentimento
 * não pode ele mesmo virar um dado pessoal.
 *
 * Consequência assumida: não há prova individual de consentimento, apenas
 * a decisão e a data. Registrada como decisão no registro operacional.
 */
export function serializeConsent(state: ConsentState): string {
  return `v=${state.version}&t=${state.timestamp}&analytics=${state.analytics}`;
}

/**
 * Lê o valor do cookie. Retorna null quando ausente, malformado ou de uma
 * versão anterior — em todos esses casos a decisão precisa ser pedida de
 * novo, e tratar como "sem decisão" é o comportamento seguro.
 */
export function parseConsent(raw: string | null | undefined): ConsentState | null {
  if (!raw) return null;

  const params = new URLSearchParams(raw);
  const version = Number(params.get("v"));
  const timestamp = Number(params.get("t"));
  const analytics = params.get("analytics");

  if (version !== CONSENT_VERSION) return null;
  if (!Number.isFinite(timestamp) || timestamp <= 0) return null;
  if (analytics !== "granted" && analytics !== "denied") return null;

  return { version, timestamp, analytics };
}
