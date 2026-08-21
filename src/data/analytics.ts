/**
 * Contrato dos eventos de conversão.
 *
 * Nomes de evento, vocabulários fechados e normalizadores. Espelha a
 * disciplina de `src/data/consent.ts`: o arquivo descreve o contrato, não
 * decide interface e não lê estado de negócio.
 *
 * Diferença assumida em relação ao `consent.ts`: este módulo é importado
 * por script de cliente (`ConversionEvents.astro` e o formulário), e por
 * isso tem UMA função que toca `window` — `track()`. Todo o resto é puro.
 *
 * A tabela de eventos e parâmetros permitidos vive em
 * `docs/plano-ecossistema-comunicacao.md` §7. Mudança aqui obriga mudança lá.
 */
import { DEFAULT_LOCALE, LOCALE_LABELS, type Locale } from "../i18n/types";

/** Eventos disparados por clique em link de contato. */
export const CONTACT_EVENTS = [
  "contato_whatsapp",
  "contato_telefone",
  "contato_email",
  /* Ainda sem link no site — o Canal não existe. O nome fica reservado
     para que marcar o link, quando existir, não exija tocar em código. */
  "canal_whatsapp",
] as const;

export type ContactEvent = (typeof CONTACT_EVENTS)[number];

/**
 * Seção de onde o clique partiu.
 *
 * `sucesso` está reservado para o botão de WhatsApp da tela de sucesso,
 * que ainda não foi construído.
 */
export const ORIGENS = [
  "rodape",
  "contato",
  "formulario_erro",
  "politica",
  "sucesso",
] as const;

export type Origem = (typeof ORIGENS)[number];

/**
 * Por que o envio do formulário falhou.
 *
 * Categoria, nunca a mensagem crua do erro: o serviço de formulário pode
 * ecoar conteúdo digitado pela pessoa, e isso não pode chegar ao analytics.
 */
export const MOTIVOS = ["rede", "servico", "configuracao"] as const;

export type Motivo = (typeof MOTIVOS)[number];

/** Devolvido quando o texto digitado não corresponde a nenhuma UF. */
export const UF_DESCONHECIDA = "outro";

/**
 * Valor usado quando um campo opcional veio vazio.
 *
 * Existe para que campo em branco não vire string vazia no relatório. Uma
 * categoria sem rótulo é indistinguível de erro de implementação; "não
 * informado" é um fato, e um fato é o que se quer contar.
 */
export const NAO_INFORMADO = "nao_informado";

/**
 * As 27 unidades federativas.
 *
 * Existe porque o campo `estado` do formulário é texto livre, não `<select>`.
 * Sem esta lista, o que a pessoa digitou iria cru para o analytics — e a
 * regra do programa é que só categoria prevista sai daqui.
 */
const UF_NAMES: Record<string, string> = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

/** Minúsculas, sem acento e com espaços colapsados. */
function fold(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

const UF_BY_NAME: Record<string, string> = {};
for (const sigla of Object.keys(UF_NAMES)) {
  UF_BY_NAME[fold(UF_NAMES[sigla])] = sigla;
}

/**
 * Converte o texto livre do campo `estado` em sigla de UF.
 *
 * Aceita "MG", "mg", "Minas Gerais" e "minas gerais". Qualquer outra coisa
 * vira `outro` — a saída é sempre um dos 29 valores previstos, nunca o que
 * foi digitado.
 */
export function normalizeUf(raw: string | null | undefined): string {
  const value = (raw ?? "").trim();
  if (!value) return NAO_INFORMADO;

  const sigla = value.toUpperCase();
  if (UF_NAMES[sigla] !== undefined) return sigla;

  return UF_BY_NAME[fold(value)] ?? UF_DESCONHECIDA;
}

/* `<html lang>` usa BCP-47 (pt-BR, en-US, es-ES); o vocabulário do programa
   usa o slug do locale (pt-br, en, es). O mapa é derivado do LOCALE_LABELS
   para não virar uma segunda fonte da verdade. */
const LOCALE_BY_BCP47: Record<string, Locale> = {};
for (const locale of Object.keys(LOCALE_LABELS) as Locale[]) {
  LOCALE_BY_BCP47[LOCALE_LABELS[locale].bcp47.toLowerCase()] = locale;
}

export function localeFromLang(lang: string | null | undefined): Locale {
  return LOCALE_BY_BCP47[(lang ?? "").toLowerCase()] ?? DEFAULT_LOCALE;
}

/** Parâmetros que um evento pode carregar. Nunca nome, e-mail, telefone ou mensagem. */
export interface TrackParams {
  origem_secao?: Origem;
  perfil?: string;
  interesse?: string;
  estado_uf?: string;
  motivo?: Motivo;
}

interface ConsentSnapshot {
  analytics: "granted" | "denied";
}

type AnalyticsWindow = Window & {
  __consent?: { get: () => ConsentSnapshot };
  gtag?: (...args: unknown[]) => void;
};

/**
 * Despacha um evento — se, e só se, houver consentimento.
 *
 * A guarda NÃO é redundante com o Consent Mode. `window.gtag` existe em
 * toda página desde o bootstrap do `<head>`, e um `gtag('event', …)`
 * disparado antes da decisão fica na fila do `dataLayer`; se a pessoa
 * aceitasse depois, o GA4 processaria retroativamente um clique de quem
 * ainda não tinha consentido. Sem `__consent`, nada é medido — falhar para
 * o lado de não medir é o lado certo de falhar.
 *
 * `idioma` é injetado aqui, e não pelos chamadores: todo evento do programa
 * carrega o idioma, e centralizar remove a chance de esquecer.
 */
export function track(evento: string, params: TrackParams = {}): void {
  if (typeof window === "undefined") return;

  const w = window as AnalyticsWindow;
  if (w.__consent?.get().analytics !== "granted") return;
  if (typeof w.gtag !== "function") return;

  w.gtag("event", evento, {
    ...params,
    idioma: localeFromLang(document.documentElement.lang),
  });
}
