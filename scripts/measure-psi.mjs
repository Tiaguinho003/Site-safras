/**
 * Mede performance via PageSpeed Insights API e reporta a MEDIANA de N execuções.
 *
 * Por que PSI e não Lighthouse local: o Lighthouse do PSI roda nos servidores do
 * Google, com CPU e rede padronizadas. Isso elimina o ruído da máquina local —
 * que foi exatamente o que deixou o gate da Fase 1 em aberto, com o espanhol
 * oscilando entre 89 e 99 na mesma URL.
 *
 * Por que mediana e não melhor execução: o gate precisa de um número
 * representativo. Reportar a melhor execução foi o vício que criou o impasse.
 *
 * Uso:
 *   set -a; . ./.env; set +a
 *   node scripts/measure-psi.mjs                    # 3 execuções, mobile
 *   node scripts/measure-psi.mjs --runs=5           # 5 execuções
 *   node scripts/measure-psi.mjs --strategy=desktop
 *   node scripts/measure-psi.mjs --json=/caminho/saida.json
 *
 * A chave vem de PAGESPEED_API_KEY (.env, não versionado). Ela é uma credencial:
 * nunca imprimir, nunca commitar.
 */

const API = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const URLS = [
  { label: "PT", url: "https://safrasenegocios.com.br/" },
  { label: "EN", url: "https://safrasenegocios.com.br/en" },
  { label: "ES", url: "https://safrasenegocios.com.br/es" },
];

/** Metas do gate — ver docs/plano-seo-programatico.md */
const METAS = { performance: 95, lcp: 2500, cls: 0.1, tbt: 200 };

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);

const RUNS = Number(args.runs ?? 3);
const STRATEGY = args.strategy ?? "mobile";
const PAUSE_MS = Number(args.pause ?? 4000);

const key = process.env.PAGESPEED_API_KEY;
if (!key) {
  console.error(
    "[psi] ERRO: PAGESPEED_API_KEY ausente.\n" +
      "      Rode antes:  set -a; . ./.env; set +a\n" +
      "      A chave é criada no projeto GCP site-safras — ver docs/deploy.md.",
  );
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Mediana — para N par, média dos dois centrais. */
function median(values) {
  if (values.length === 0) return null;
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

async function measureOnce(url) {
  const qs = new URLSearchParams({
    url,
    strategy: STRATEGY,
    category: "performance",
    key,
  });

  const res = await fetch(`${API}?${qs}`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} — ${(await res.text()).slice(0, 160)}`);
  }

  const { lighthouseResult: lr } = await res.json();
  const audit = (id) => lr.audits[id]?.numericValue ?? null;

  return {
    performance: Math.round(lr.categories.performance.score * 100),
    fcp: audit("first-contentful-paint"),
    lcp: audit("largest-contentful-paint"),
    tbt: audit("total-blocking-time"),
    cls: audit("cumulative-layout-shift"),
    speedIndex: audit("speed-index"),
  };
}

function fmt(metric, value) {
  if (value === null) return "—";
  if (metric === "cls") return value.toFixed(4);
  if (metric === "performance") return String(value);
  return `${(value / 1000).toFixed(2)}s`;
}

async function main() {
  console.log(
    `[psi] ${RUNS} execuções por URL · estratégia ${STRATEGY} · ${new Date().toISOString()}\n`,
  );

  const results = [];

  for (const { label, url } of URLS) {
    const runs = [];

    for (let i = 1; i <= RUNS; i++) {
      process.stdout.write(`  ${label}  execução ${i}/${RUNS} … `);
      try {
        const r = await measureOnce(url);
        runs.push(r);
        console.log(
          `perf ${r.performance} · LCP ${fmt("lcp", r.lcp)} · TBT ${Math.round(r.tbt)}ms`,
        );
      } catch (err) {
        console.log(`falhou — ${err.message}`);
      }
      if (i < RUNS) await sleep(PAUSE_MS);
    }

    if (runs.length === 0) {
      console.log(`  ${label}: nenhuma execução bem-sucedida\n`);
      continue;
    }

    const medians = Object.fromEntries(
      ["performance", "fcp", "lcp", "tbt", "cls", "speedIndex"].map((m) => [
        m,
        median(runs.map((r) => r[m]).filter((v) => v !== null)),
      ]),
    );

    results.push({ label, url, runs, medians });
    console.log("");
  }

  // ── Tabela de medianas ──────────────────────────────────────────────────
  console.log("─".repeat(78));
  console.log("MEDIANAS");
  console.log("─".repeat(78));
  console.log(
    "  " +
      ["", "perf", "LCP", "FCP", "TBT", "CLS", "gate"]
        .map((h, i) => h.padEnd([6, 6, 8, 8, 9, 9, 6][i]))
        .join(""),
  );

  let todosPassaram = true;

  for (const { label, medians: m } of results) {
    const passa =
      m.performance >= METAS.performance &&
      m.lcp <= METAS.lcp &&
      m.cls <= METAS.cls;
    if (!passa) todosPassaram = false;

    console.log(
      "  " +
        label.padEnd(6) +
        String(m.performance).padEnd(6) +
        fmt("lcp", m.lcp).padEnd(8) +
        fmt("fcp", m.fcp).padEnd(8) +
        `${Math.round(m.tbt)}ms`.padEnd(9) +
        fmt("cls", m.cls).padEnd(9) +
        (passa ? "PASSA" : "FALHA"),
    );
  }

  console.log("─".repeat(78));
  console.log(
    `  Gate (perf ≥ ${METAS.performance} · LCP ≤ ${METAS.lcp / 1000}s · CLS ≤ ${METAS.cls}): ` +
      (todosPassaram ? "TODAS AS PÁGINAS PASSAM" : "HÁ PÁGINA REPROVADA"),
  );

  // ── Amplitude: mede a confiabilidade da própria medição ────────────────
  console.log("\n  Amplitude de performance por URL (min–max nas execuções):");
  for (const { label, runs } of results) {
    const scores = runs.map((r) => r.performance);
    const min = Math.min(...scores);
    const max = Math.max(...scores);
    console.log(
      `    ${label}: ${scores.join(", ")}  →  amplitude ${max - min}` +
        (max - min > 5 ? "  ⚠️ instável, aumentar --runs" : ""),
    );
  }

  if (args.json) {
    const { writeFile } = await import("node:fs/promises");
    await writeFile(
      String(args.json),
      JSON.stringify(
        { strategy: STRATEGY, runs: RUNS, medidoEm: new Date().toISOString(), results },
        null,
        2,
      ),
      "utf-8",
    );
    console.log(`\n  JSON salvo em ${args.json}`);
  }

  process.exit(todosPassaram ? 0 : 1);
}

main().catch((err) => {
  console.error("[psi] Falha:", err.message);
  process.exit(1);
});
