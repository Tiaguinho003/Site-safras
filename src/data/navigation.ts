/**
 * Itens do menu principal — schema locale-aware.
 *
 * Cada item carrega:
 * - `anchor`: chave canônica da seção (mapeada em src/i18n/anchors.ts)
 * - `labelKey`: chave do dicionário pra texto visível
 *
 * Header/Footer renderizam usando t(labelKey) + localizeAnchor(anchor),
 * o que garante:
 * - Texto no idioma certo
 * - URL no idioma certo (/en/#services vs /#servicos)
 */
import type { AnchorKey } from "../i18n/anchors";

export interface NavItem {
  anchor: AnchorKey;
  labelKey: string;
}

export const mainNav: NavItem[] = [
  { anchor: "hero", labelKey: "nav.items.home" },
  { anchor: "servicos", labelKey: "nav.items.services" },
  { anchor: "quem-somos", labelKey: "nav.items.about" },
  { anchor: "contato", labelKey: "nav.items.contact" },
];
