/**
 * Pós-processa o dist/ pra deixar SOMENTE a página de manutenção
 * acessível em produção. Roda depois de `astro build`.
 *
 * - Sem MAINTENANCE=1 no env: no-op (early exit). Build normal segue.
 * - Com MAINTENANCE=1: move dist/manutencao/index.html → dist/index.html
 *   (preserva os hashes que o Astro gerou pros assets dessa página)
 *   e remove os diretórios das outras páginas.
 *
 * NÃO mexe em: _astro/, qr/, favicon.png ou outros assets em public/.
 *
 * O catch-all rewrite no firebase.json (`** → /index.html`) garante que
 * qualquer URL morta cai na página de manutenção. Os redirects existentes
 * (/qr, /contato) tem precedência sobre rewrites no Firebase Hosting.
 *
 * Pra reverter pra modo normal: remover MAINTENANCE=1 do cloudbuild.yaml.
 */

import { existsSync } from "node:fs";
import { copyFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST = resolve(__dirname, "..", "dist");

const PAGES_TO_REMOVE = [
  "quem-somos",
  "servicos",
  "blog",
  "noticias",
  "contato",
  "manutencao",
];

async function main() {
  if (process.env.MAINTENANCE !== "1") {
    return;
  }

  const sourceHtml = resolve(DIST, "manutencao", "index.html");
  const targetHtml = resolve(DIST, "index.html");

  if (!existsSync(sourceHtml)) {
    console.error(
      `[maintenance] ERRO: ${sourceHtml} não existe. Astro build emitiu manutencao.astro?`,
    );
    process.exit(1);
  }

  await copyFile(sourceHtml, targetHtml);

  for (const dir of PAGES_TO_REMOVE) {
    const path = resolve(DIST, dir);
    await rm(path, { recursive: true, force: true });
  }

  console.log(
    "[maintenance] Mode ON — dist/index.html é a página de manutenção; outras rotas removidas.",
  );
}

main().catch((err) => {
  console.error("[maintenance] Falha:", err);
  process.exit(1);
});
