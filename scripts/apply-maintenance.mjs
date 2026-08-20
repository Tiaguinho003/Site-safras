/**
 * Pós-processa o dist/ pra deixar SOMENTE a página de manutenção acessível
 * em produção. Roda depois de `astro build`, no fim de `pnpm build`.
 *
 * - Sem MAINTENANCE=1 no env: no-op (early exit). Build normal segue.
 * - Com MAINTENANCE=1:
 *     1. copia dist/manutencao/index.html pra dist/index.html e pras homes
 *        de cada idioma (dist/en/, dist/es/) — preserva os hashes que o
 *        Astro gerou pros assets dessa página;
 *     2. remove todo diretório de rota que não esteja na lista de preservados;
 *     3. valida o resultado e falha o build se algo não bateu.
 *
 * PRESERVA: _astro/ (assets), qr/ (redirect imutável do cartão físico),
 * en/ e es/ (agora servindo a manutenção), e os arquivos de raiz
 * (404.html, favicon.png, robots.txt, sitemaps).
 *
 * ── Por que NÃO existe rewrite curinga ──────────────────────────────────
 * Versões anteriores deste script dependiam de `** → /index.html` no
 * firebase.json pra que qualquer URL caísse na manutenção. Esse rewrite foi
 * REMOVIDO na Fase 1 do plano de SEO: ele fazia URLs inexistentes
 * responderem 200 com a home (falso 200 / soft 404), que era justamente o
 * problema crítico que a fase corrigiu.
 *
 * Não reintroduzir. Durante a manutenção, URL desconhecida retorna 404 real
 * — comportamento correto. O que precisa continuar respondendo são as URLs
 * que as pessoas realmente têm: as três homes, e /qr (impresso no cartão).
 *
 * Pra reverter pro modo normal: trocar MAINTENANCE=1 por 0 no cloudbuild.yaml.
 */

import { existsSync } from "node:fs";
import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST = resolve(__dirname, "..", "dist");

/**
 * Homes de idioma que também devem servir a manutenção.
 * Espelha `locales` em astro.config.mjs, menos o default (que é a raiz).
 */
const LOCALE_HOMES = ["en", "es"];

/**
 * Diretórios preservados. Tudo que não estiver aqui é removido.
 *
 * Lista de PERMITIDOS em vez de lista de REMOVIDOS: assim uma rota nova
 * criada no futuro é removida automaticamente durante a manutenção, em vez
 * de continuar acessível porque ninguém lembrou de atualizar este arquivo.
 * A versão anterior tinha exatamente esse bug — listava rotas que já não
 * existiam e não listava `en` e `es`, deixando o site inteiro no ar em dois
 * idiomas durante a "manutenção".
 */
const KEEP_DIRS = new Set(["_astro", "qr", ...LOCALE_HOMES]);

async function main() {
  if (process.env.MAINTENANCE !== "1") {
    return;
  }

  const sourceHtml = resolve(DIST, "manutencao", "index.html");

  if (!existsSync(sourceHtml)) {
    console.error(
      `[maintenance] ERRO: ${sourceHtml} não existe. Astro build emitiu manutencao.astro?`,
    );
    process.exit(1);
  }

  // 1. Manutenção na raiz e em cada home de idioma.
  const targets = [resolve(DIST, "index.html")];

  for (const locale of LOCALE_HOMES) {
    const dir = resolve(DIST, locale);
    await mkdir(dir, { recursive: true });
    targets.push(resolve(dir, "index.html"));
  }

  for (const target of targets) {
    await copyFile(sourceHtml, target);
  }

  // Tamanho lido AGORA: o passo 2 apaga dist/manutencao/, que é a origem.
  const { size: expectedSize } = await stat(sourceHtml);

  // 2. Remove toda rota que não esteja preservada.
  const removed = [];

  for (const entry of await readdir(DIST, { withFileTypes: true })) {
    if (!entry.isDirectory() || KEEP_DIRS.has(entry.name)) continue;
    await rm(resolve(DIST, entry.name), { recursive: true, force: true });
    removed.push(entry.name);
  }

  // 2b. Dentro de cada home de idioma, só o index.html sobrevive.
  //
  // As homes de idioma são preservadas por inteiro no passo anterior, então
  // qualquer sub-rota delas — /en/privacy, /es/privacidad — continuaria no ar
  // enquanto a equivalente em PT já teria sido removida. O site ficaria meio
  // aberto em dois idiomas, que é a mesma classe de defeito corrigida na
  // Fase 1. A poda precisa descer um nível.
  for (const locale of LOCALE_HOMES) {
    const dir = resolve(DIST, locale);
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      await rm(resolve(dir, entry.name), { recursive: true, force: true });
      removed.push(`${locale}/${entry.name}`);
    }
  }

  // 3. Valida — build quebrado é melhor que site meio no ar.
  const failures = [];

  for (const target of targets) {
    if (!existsSync(target)) {
      failures.push(`${target} não foi criado`);
      continue;
    }
    const { size } = await stat(target);
    if (size !== expectedSize) {
      failures.push(`${target} não é a página de manutenção (${size}b ≠ ${expectedSize}b)`);
    }
  }

  for (const entry of await readdir(DIST, { withFileTypes: true })) {
    if (entry.isDirectory() && !KEEP_DIRS.has(entry.name)) {
      failures.push(`${entry.name}/ deveria ter sido removido`);
    }
  }

  for (const locale of LOCALE_HOMES) {
    for (const entry of await readdir(resolve(DIST, locale), { withFileTypes: true })) {
      if (entry.isDirectory()) {
        failures.push(`${locale}/${entry.name}/ deveria ter sido removido`);
      }
    }
  }

  if (failures.length > 0) {
    console.error("[maintenance] ERRO: verificação falhou.");
    for (const failure of failures) console.error(`  - ${failure}`);
    process.exit(1);
  }

  console.log(
    `[maintenance] Mode ON — manutenção em / e em ${LOCALE_HOMES.map((l) => `/${l}`).join(", ")}.`,
  );
  console.log(
    `[maintenance] Removido: ${removed.length > 0 ? removed.join(", ") : "nada"}. Preservado: ${[...KEEP_DIRS].join(", ")}.`,
  );
  console.log(
    "[maintenance] URL desconhecida retorna 404 real — não há rewrite curinga, por decisão da Fase 1.",
  );
}

main().catch((err) => {
  console.error("[maintenance] Falha:", err);
  process.exit(1);
});
