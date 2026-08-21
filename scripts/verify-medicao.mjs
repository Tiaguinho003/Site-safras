/**
 * Verificação funcional do consentimento e da medição.
 *
 * O que este script protege: as Fases C, D e E — banner de cookies, carga do
 * GA4 sob consentimento e eventos de conversão. Tudo isso é ancorado em
 * atributos espalhados por rodapé, seção de contato, caixa de erro e política.
 * São pontos que qualquer reforma de layout apaga sem querer, e a falha é
 * silenciosa: os eventos simplesmente param, o painel mostra queda de contatos,
 * e queda de contato se lê como mercado, não como defeito.
 *
 * Antes deste arquivo as verificações existiam como scripts descartáveis,
 * refeitos e jogados fora a cada entrega. Nada no repositório impedia a
 * regressão.
 *
 * A tabela de eventos, parâmetros e pontos ancorados vive em
 * `docs/plano-ecossistema-comunicacao.md` §7. Mudar aquela tabela é mudar este
 * arquivo — e o contrário também vale.
 *
 * NENHUM DADO DE TESTE CHEGA À PROPRIEDADE REAL. Duas travas independentes:
 *   1. o build usa um ID de medição de teste, e o script aborta se o HTML
 *      gerado não contiver exatamente esse ID;
 *   2. toda requisição a domínio do Google é interceptada e abortada.
 * O serviço do formulário também é simulado — nenhum e-mail é disparado.
 *
 * Uso:
 *   pnpm verify:medicao
 *   node scripts/verify-medicao.mjs --porta=4398
 *   node scripts/verify-medicao.mjs --manter            # não apaga o build ao final
 *   node scripts/verify-medicao.mjs --pular-build=/tmp/safras-verify-xyz
 *
 * Sai com código 1 se qualquer verificação falhar.
 */

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

/** Raiz do projeto — o script roda igual de qualquer diretório. */
const RAIZ = fileURLToPath(new URL("..", import.meta.url));

/**
 * ID de medição de teste. Não pertence a propriedade alguma — é o valor que
 * separa este build do build real. Se ele não aparecer no HTML gerado, o
 * script para antes de abrir o navegador.
 */
const ID_TESTE = "G-TESTE00000";

/** Precisa bater com CONSENT_MAX_AGE de src/data/consent.ts. */
const MAX_AGE_ESPERADO = 60 * 60 * 24 * 182;

/**
 * Dados pessoais usados no preenchimento do formulário. Existem para serem
 * procurados depois: a verificação de privacidade confere que nenhum deles
 * aparece em parâmetro de evento.
 */
const PESSOAIS = {
  nome: "Fulano De Teste",
  email: "fulano.teste@example.invalid",
  telefone: "35999998888",
  mensagem: "Mensagem confidencial de teste 42",
};

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);

const PORTA = Number(args.porta ?? args.port ?? 4398);
const BASE = `http://localhost:${PORTA}`;

/* ============================ Relatório ============================ */

const resultados = [];
let grupoAtual = "";

const grupo = (nome) => {
  grupoAtual = nome;
};
const check = (condicao, nome, detalhe = "") =>
  resultados.push({ ok: Boolean(condicao), grupo: grupoAtual, nome, detalhe });

/** Uma exceção derruba só o próprio grupo, não o restante da suíte. */
async function bloco(nome, fn) {
  grupo(nome);
  try {
    await fn();
  } catch (erro) {
    check(false, `${nome} — exceção`, String(erro).split("\n")[0].slice(0, 180));
  }
}

/* ============================ Build ============================ */

function run(cmd, argv, env) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, argv, { cwd: RAIZ, env: { ...process.env, ...env }, stdio: "pipe" });
    let saida = "";
    p.stdout.on("data", (d) => (saida += d));
    p.stderr.on("data", (d) => (saida += d));
    p.on("close", (code) =>
      code === 0 ? resolve(saida) : reject(new Error(saida.slice(-1500))),
    );
  });
}

/**
 * Build próprio, em diretório temporário.
 *
 * Não reaproveita `dist/`: aquele diretório pode ter sido gerado sem a
 * variável do GA4 (o estado inerte) ou com o ID real de produção. Nos dois
 * casos a suíte estaria testando outra coisa.
 */
async function construir() {
  const destino = await mkdtemp(join(tmpdir(), "safras-verify-"));
  console.log(`[verify] build de teste em ${destino}`);

  // Chamado pelo .bin, e não por `pnpm build`: aquele script encadeia a poda do
  // modo manutenção, que não tem papel nesta verificação.
  await run(join(RAIZ, "node_modules/.bin/astro"), ["build", "--outDir", destino], {
    PUBLIC_GA4_MEASUREMENT_ID: ID_TESTE,
    PUBLIC_GSC_VERIFICATION: "verificacao-de-teste",
    /* Valor de fachada, para a suíte não depender de um `.env` presente. O que
       o formulário faz com a chave é irrelevante aqui: a requisição ao serviço
       é interceptada e respondida por este script. Sem nenhuma chave, porém, o
       envio falharia com motivo `configuracao` e mascararia tudo o que vem
       depois — foi o que aconteceu na primeira execução contra um checkout limpo. */
    PUBLIC_WEB3FORMS_KEY: "chave-de-teste",
  });

  const home = await readFile(join(destino, "index.html"), "utf8").catch(() => "");
  if (!home.includes(ID_TESTE)) {
    throw new Error(
      `o HTML gerado não contém ${ID_TESTE}. O build não recebeu a variável de teste — ` +
        "interrompido para garantir que nenhum dado de teste alcance a propriedade real.",
    );
  }
  return destino;
}

/* ============================ Servidor ============================ */

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const existe = async (p) => {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
};

/**
 * Servidor estático que imita o Firebase Hosting: `cleanUrls` e
 * `trailingSlash: false`. Usar `astro preview` daria um roteamento diferente
 * do de produção e ocuparia a porta do desenvolvimento.
 */
function servir(raiz) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    const p = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    const rel = p.replace(/^\//, "");
    const candidatos = p === "/" ? ["index.html"] : [rel, `${rel}.html`, join(rel, "index.html")];

    for (const c of candidatos) {
      const completo = join(raiz, c);
      if (await existe(completo)) {
        res.writeHead(200, {
          "Content-Type": TIPOS[extname(completo)] ?? "application/octet-stream",
        });
        res.end(await readFile(completo));
        return;
      }
    }
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(join(raiz, "404.html")).catch(() => "404"));
  });

  return new Promise((resolve) => server.listen(PORTA, () => resolve(server)));
}

/* ============================ Navegador ============================ */

let browser;
/** Alterna o comportamento do serviço de formulário entre os blocos. */
let modoFormulario = "ok";

/**
 * Contexto isolado por cenário. Devolve também os registros de rede, que são
 * a evidência de "não chamou o Google" — a asserção central da fase C.
 */
async function contexto({ gpc = false, cookies = [], locale = "pt-BR" } = {}) {
  const c = await browser.newContext({ locale, viewport: { width: 1280, height: 900 } });
  const google = [];
  const formulario = [];

  if (gpc) {
    await c.addInitScript(() => {
      Object.defineProperty(navigator, "globalPrivacyControl", { get: () => true });
    });
  }

  /* Impede que `mailto:`, `tel:` e `wa.me` tirem o navegador da página. Roda na
     fase de captura e só chama preventDefault — a propagação continua, então o
     ouvinte delegado de ConversionEvents recebe o clique normalmente. */
  await c.addInitScript(() => {
    document.addEventListener(
      "click",
      (e) => {
        const a = e.target?.closest?.("a[href]");
        if (a) e.preventDefault();
      },
      true,
    );
  });

  await c.route(
    /googletagmanager\.com|google-analytics\.com|analytics\.google\.com|google\.com/,
    (route) => {
      google.push(route.request().url());
      route.abort();
    },
  );

  await c.route(/api\.web3forms\.com/, (route) => {
    formulario.push(route.request().url());
    if (modoFormulario === "falha") {
      return route.fulfill({
        status: 500,
        contentType: "application/json",
        body: JSON.stringify({ success: false, message: "erro simulado" }),
      });
    }
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true, message: "ok" }),
    });
  });

  if (cookies.length) {
    await c.addCookies(cookies.map((k) => ({ domain: "localhost", path: "/", ...k })));
  }
  return { c, google, formulario };
}

/** O dataLayer guarda objetos `arguments`; aqui viram arrays comparáveis. */
const dataLayer = (page) =>
  page.evaluate(() =>
    (window.dataLayer || []).map((a) => {
      try {
        return JSON.parse(JSON.stringify(Array.from(a)));
      } catch {
        return ["<nao-serializavel>"];
      }
    }),
  );

const eventos = (camada, nome) =>
  camada.filter((e) => e[0] === "event" && (!nome || e[1] === nome));

const cookie = async (c, nome) => (await c.cookies(BASE)).find((k) => k.name === nome);

const decidido = (analytics) => [
  {
    name: "safras_consent",
    value: encodeURIComponent(`v=1&t=${Math.floor(Date.now() / 1000)}&analytics=${analytics}`),
  },
];

/* ============================ Cenários ============================ */

async function primeiraVisita() {
  const { c, google } = await contexto();
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);

  check(await page.locator("#cookie-consent").isVisible(), "banner aparece na primeira visita");
  check(google.length === 0, "nada do Google é chamado antes da decisão", google.join(", "));

  const camada = await dataLayer(page);
  const padrao = camada.find((e) => e[0] === "consent" && e[1] === "default");
  check(Boolean(padrao), "gtag consent default é emitido");
  check(
    padrao?.[2]?.analytics_storage === "denied",
    "analytics_storage nasce denied",
    JSON.stringify(padrao?.[2]),
  );
  check(
    ["ad_storage", "ad_user_data", "ad_personalization"].every(
      (k) => padrao?.[2]?.[k] === "denied",
    ),
    "sinais de publicidade nascem denied",
  );
  check(!(await cookie(c, "safras_consent")), "nenhum cookie de consentimento antes da decisão");

  /* A lei exige que recusar seja tão fácil quanto aceitar. Botão menor ou mais
     apagado burla a exigência sem burlar a letra dela — por isso é medido. */
  const a = await page.locator("[data-consent-accept]").boundingBox();
  const r = await page.locator("[data-consent-reject]").boundingBox();
  check(
    Math.abs(a.width - r.width) < 2 && Math.abs(a.height - r.height) < 2,
    "Aceitar e Recusar têm o mesmo tamanho",
    `${Math.round(a.width)}x${Math.round(a.height)} vs ${Math.round(r.width)}x${Math.round(r.height)}`,
  );

  await c.close();
}

async function recusar() {
  const { c, google } = await contexto();
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.click("[data-consent-reject]");
  await page.waitForTimeout(2500);

  const k = await cookie(c, "safras_consent");
  check(
    decodeURIComponent(k?.value ?? "").includes("analytics=denied"),
    "recusar grava analytics=denied",
    k?.value,
  );
  check(k?.sameSite === "Lax", "cookie de consentimento é SameSite=Lax", k?.sameSite);
  check(google.length === 0, "recusar não carrega nada do Google", google.join(", "));
  check(!(await page.locator("#cookie-consent").isVisible()), "banner some após recusar");

  await c.close();
}

async function aceitar() {
  const { c, google } = await contexto();
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.click("[data-consent-accept]");
  await page.waitForTimeout(3500);

  const k = await cookie(c, "safras_consent");
  check(
    decodeURIComponent(k?.value ?? "").includes("analytics=granted"),
    "aceitar grava analytics=granted",
    k?.value,
  );
  check(
    google.some((u) => u.includes("gtag/js")),
    "aceitar carrega o gtag.js",
    google.join(", "),
  );

  const camada = await dataLayer(page);
  const update = camada.find((e) => e[0] === "consent" && e[1] === "update");
  check(update?.[2]?.analytics_storage === "granted", "consent update granted é emitido");

  const config = camada.find((e) => e[0] === "config");
  check(Boolean(config), "gtag config é emitido");

  /* Os dois vêm LIGADOS por padrão no GA4 e são independentes do Consent Mode.
     Sem estas linhas a implementação contradiria a política de privacidade. */
  check(
    config?.[2]?.allow_google_signals === false,
    "allow_google_signals desligado",
    JSON.stringify(config?.[2]),
  );
  check(
    config?.[2]?.allow_ad_personalization_signals === false,
    "allow_ad_personalization_signals desligado",
  );
  check(
    config?.[2]?.cookie_expires === MAX_AGE_ESPERADO,
    "cookie de medição expira junto com o consentimento",
    String(config?.[2]?.cookie_expires),
  );

  /* Ordem que valida o sinal: o consentimento precisa estar declarado antes de
     qualquer tag. Invertido, o Consent Mode não vale. */
  const iPadrao = camada.findIndex((e) => e[0] === "consent" && e[1] === "default");
  const iConfig = camada.findIndex((e) => e[0] === "config");
  check(iPadrao >= 0 && iPadrao < iConfig, "consent default vem antes do config", `${iPadrao} < ${iConfig}`);

  await c.close();
}

async function retorno() {
  for (const [estado, esperaGoogle] of [
    ["granted", true],
    ["denied", false],
  ]) {
    const { c, google } = await contexto({ cookies: decidido(estado) });
    const page = await c.newPage();
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(3500);

    check(
      !(await page.locator("#cookie-consent").isVisible()),
      `quem já decidiu (${estado}) não é perguntado de novo`,
    );
    check(
      google.some((u) => u.includes("gtag/js")) === esperaGoogle,
      `decisão anterior ${estado} ${esperaGoogle ? "carrega" : "não carrega"} o GA4 sozinha`,
      google.join(", "),
    );
    await c.close();
  }
}

async function cookieInvalido() {
  for (const [rotulo, valor] of [
    ["de versão anterior", "v=99&t=1&analytics=granted"],
    ["malformado", "lixo"],
  ]) {
    const { c, google } = await contexto({
      cookies: [{ name: "safras_consent", value: encodeURIComponent(valor) }],
    });
    const page = await c.newPage();
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    check(await page.locator("#cookie-consent").isVisible(), `cookie ${rotulo} volta a perguntar`);
    check(google.length === 0, `cookie ${rotulo} não libera medição`);
    await c.close();
  }
}

async function globalPrivacyControl() {
  const { c, google } = await contexto({ gpc: true });
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);

  check(!(await page.locator("#cookie-consent").isVisible()), "GPC não é interrompido pelo banner");
  const k = await cookie(c, "safras_consent");
  check(
    decodeURIComponent(k?.value ?? "").includes("analytics=denied"),
    "GPC tem a recusa registrada",
    k?.value,
  );
  check(google.length === 0, "GPC não carrega o GA4");
  await c.close();
}

async function revogacao() {
  const { c } = await contexto();
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.click("[data-consent-accept]");
  await page.waitForTimeout(2000);

  /* Os cookies do GA4 são simulados: o gtag.js nunca chega a rodar aqui, então
     ninguém os cria. O que se verifica é a limpeza, não a criação. */
  await page.evaluate(() => {
    document.cookie = "_ga=GA1.1.111.222; path=/";
    document.cookie = "_ga_TESTE00000=GS1.1.333; path=/";
  });

  await page.click("[data-consent-open]");
  await page.waitForTimeout(300);
  check(await page.locator("#cookie-consent-panel").isVisible(), "o rodapé reabre as preferências");

  const chave = page.locator("[data-consent-analytics]");
  check(await chave.isChecked(), "o painel reflete a decisão vigente");
  await chave.uncheck();
  await page.click("[data-consent-save]");
  await page.waitForTimeout(1200);

  const k = await cookie(c, "safras_consent");
  check(
    decodeURIComponent(k?.value ?? "").includes("analytics=denied"),
    "salvar sem a chave grava recusa",
    k?.value,
  );

  const restantes = (await c.cookies(BASE)).filter((x) => x.name.startsWith("_ga"));
  check(restantes.length === 0, "revogar apaga os cookies _ga já criados", restantes.map((x) => x.name).join(", "));

  const updates = (await dataLayer(page)).filter((e) => e[0] === "consent" && e[1] === "update");
  check(
    updates.length >= 2 && updates.at(-1)[2].analytics_storage === "denied",
    "revogar emite consent update denied",
  );
  await c.close();
}

async function cookieDeIdioma() {
  const { c } = await contexto();
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.cookie = "safras_locale=pt-br; path=/; max-age=31536000";
  });
  await page.click("[data-consent-reject]");
  await page.waitForTimeout(800);

  /* Cookie funcional fica fora do consentimento por decisão registrada: sob
     consentimento, recusar faria o site esquecer o idioma escolhido. */
  check(Boolean(await cookie(c, "safras_locale")), "o cookie de idioma sobrevive à recusa");
  await c.close();
}

async function cobertura() {
  const { c } = await contexto();
  const page = await c.newPage();

  for (const rota of ["/", "/en", "/es", "/privacidade", "/en/privacy", "/es/privacidad"]) {
    await page.goto(BASE + rota, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(400);
    const temBanner = (await page.locator("#cookie-consent").count()) === 1;
    const temBootstrap = await page.evaluate(() => typeof window.__consent === "object");
    check(temBanner && temBootstrap, `${rota} tem banner e bootstrap`);
  }

  /* 404 e manutenção ficam sem medição por decisão registrada — são standalone
     e não usam o BaseLayout. A meta do Search Console, essa sim, precisa
     sobreviver à manutenção, ou a propriedade cai numa revalidação. */
  await page.goto(`${BASE}/404`, { waitUntil: "domcontentloaded" });
  const html404 = await page.content();
  check(
    !html404.includes("__consent") && !html404.includes("googletagmanager"),
    "404 fica sem consentimento e sem medição",
  );

  await page.goto(`${BASE}/manutencao`, { waitUntil: "domcontentloaded" });
  const htmlManutencao = await page.content();
  check(
    htmlManutencao.includes("google-site-verification"),
    "manutenção preserva a meta do Search Console",
  );
  check(!htmlManutencao.includes("__consent"), "manutenção fica sem consentimento");

  await c.close();
}

async function politica() {
  const { c } = await contexto();
  const page = await c.newPage();
  await page.goto(`${BASE}/privacidade`, { waitUntil: "domcontentloaded" });
  const texto = (await page.locator("article").innerText()).toLowerCase();

  /* A política tem duas versões da seção de cookies, escolhidas pela mesma
     variável que liga a medição. Com o GA4 ativo, ela precisa descrevê-lo. */
  check(
    texto.includes("google analytics") || texto.includes("medição de audiência") || texto.includes("_ga"),
    "com medição ativa, a política descreve a medição",
  );
  check(
    !/não (utiliza|usa|realiza).{0,40}(medição|analytics)/.test(texto),
    "com medição ativa, a política não afirma mais que o site não mede",
  );
  await c.close();
}

async function eventosDeClique() {
  const { c } = await contexto({ cookies: decidido("granted") });
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const clicar = async (seletor) => {
    await page.evaluate(() => {
      window.dataLayer.length = 0;
    });
    await page.locator(seletor).first().click();
    await page.waitForTimeout(250);
    return eventos(await dataLayer(page));
  };

  const esperado = async (seletor, evento, origem, rotulo) => {
    const ev = await clicar(seletor);
    check(
      ev.length === 1 && ev[0][1] === evento && ev[0][2].origem_secao === origem,
      rotulo,
      JSON.stringify(ev),
    );
    return ev;
  };

  const rodapeEmail = await esperado(
    'footer a[data-contato="contato_email"]',
    "contato_email",
    "rodape",
    "rodapé — e-mail dispara contato_email/rodape",
  );
  check(rodapeEmail[0]?.[2]?.idioma === "pt-br", "todo evento carrega o idioma da página");

  await esperado(
    'footer a[data-contato="contato_whatsapp"]',
    "contato_whatsapp",
    "rodape",
    "rodapé — WhatsApp dispara contato_whatsapp/rodape",
  );
  await esperado(
    'footer a[data-contato="contato_telefone"]',
    "contato_telefone",
    "rodape",
    "rodapé — telefone dispara contato_telefone/rodape",
  );

  /* O rodapé tem um wa.me que é o contato do desenvolvedor. Ancorar por padrão
     de href contaria clique nele como lead do cliente — é a razão de a
     ancoragem ser por atributo explícito. */
  check(
    (await clicar('a[href*="5511910784384"]')).length === 0,
    "o WhatsApp do desenvolvedor não gera evento",
  );
  check(
    (await clicar('a[href*="instagram"]')).length === 0,
    "o Instagram não gera evento (fora do vocabulário da §7)",
  );

  await esperado(
    'a[data-origem="contato"][data-contato="contato_email"]',
    "contato_email",
    "contato",
    "seção de contato — e-mail dispara origem=contato",
  );
  await esperado(
    'a[data-origem="contato"][data-contato="contato_telefone"]',
    "contato_telefone",
    "contato",
    "seção de contato — telefone dispara origem=contato",
  );

  await page.goto(`${BASE}/privacidade`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await esperado(
    'a[data-origem="politica"][data-contato="contato_email"]',
    "contato_email",
    "politica",
    "política — e-mail dispara origem=politica",
  );
  await esperado(
    'a[data-origem="politica"][data-contato="contato_telefone"]',
    "contato_telefone",
    "politica",
    "política — telefone dispara origem=politica",
  );

  await page.goto(`${BASE}/en`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const ingles = await clicar('footer a[data-contato="contato_email"]');
  check(ingles[0]?.[2]?.idioma === "en", "o idioma acompanha a página (/en)", JSON.stringify(ingles));

  await c.close();
}

async function semConsentimento() {
  const { c } = await contexto({ cookies: decidido("denied") });
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    window.dataLayer.length = 0;
  });
  await page.locator('footer a[data-contato="contato_email"]').first().click();
  await page.waitForTimeout(300);

  /* A guarda do track() não é redundante com o Consent Mode: window.gtag existe
     desde o bootstrap, e um evento disparado sem decisão ficaria na fila do
     dataLayer para ser processado retroativamente se a pessoa aceitasse depois. */
  check(eventos(await dataLayer(page)).length === 0, "sem consentimento, clique não vira evento");
  await c.close();
}

const preencher = async (page, { interesse = "corretagem", estado = "MG", honeypot = false } = {}) => {
  await page.fill("#cf-nome", PESSOAIS.nome);
  await page.fill("#cf-email", PESSOAIS.email);
  await page.fill("#cf-telefone", PESSOAIS.telefone);
  await page.fill("#cf-estado", estado);
  await page.selectOption("#cf-perfil", "produtor");
  if (interesse) await page.selectOption("#cf-interesse", interesse);
  await page.fill("#cf-mensagem", PESSOAIS.mensagem);
  if (honeypot) {
    await page.evaluate(() => {
      document.querySelector('input[name="company"]').value = "bot";
    });
  }
};

async function formularioSucesso() {
  const { c, formulario } = await contexto({ cookies: decidido("granted") });
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  await preencher(page, { estado: "minas gerais" });
  await page.evaluate(() => {
    window.dataLayer.length = 0;
  });
  await page.click("[data-form-submit]");
  await page.waitForTimeout(1500);

  const camada = await dataLayer(page);
  const ev = eventos(camada, "formulario_envio");
  check(formulario.length === 1, "o envio chama o serviço de formulário uma vez", String(formulario.length));
  check(ev.length === 1, "envio bem-sucedido dispara formulario_envio", JSON.stringify(ev));

  /* Os rótulos são traduzidos; os value são slugs estáveis. Mandar o rótulo
     fragmentaria cada categoria em três no relatório, uma por idioma. */
  const p = ev[0]?.[2] ?? {};
  check(p.perfil === "produtor", "perfil vai como slug estável", p.perfil);
  check(p.interesse === "corretagem", "interesse vai como slug estável", p.interesse);

  /* O campo estado é texto livre e passa por lista fechada das 27 UFs. */
  check(p.estado_uf === "MG", '"minas gerais" normaliza para MG', p.estado_uf);

  const bruto = JSON.stringify(camada);
  const vazados = Object.entries(PESSOAIS).filter(([, v]) => bruto.includes(v));
  check(
    vazados.length === 0,
    "nenhum dado pessoal aparece em parâmetro de evento",
    vazados.map(([k]) => k).join(", "),
  );
  check(await page.locator("[data-form-success]").isVisible(), "a confirmação de envio aparece");

  await c.close();
}

async function formularioCamposVazios() {
  const { c } = await contexto({ cookies: decidido("granted") });
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  await preencher(page, { interesse: "", estado: "zzz inexistente" });
  await page.evaluate(() => {
    window.dataLayer.length = 0;
  });
  await page.click("[data-form-submit]");
  await page.waitForTimeout(1500);

  /* Categoria em branco no relatório é indistinguível de defeito de
     implementação: o leitor não sabe se ninguém respondeu ou se a medição
     quebrou. "Não informado" é um fato, e fato é o que se quer contar. */
  const p = eventos(await dataLayer(page), "formulario_envio")[0]?.[2] ?? {};
  check(p.interesse === "nao_informado", "interesse em branco vira nao_informado", JSON.stringify(p));
  check(p.estado_uf === "outro", "estado desconhecido vira outro", JSON.stringify(p));

  await c.close();
}

async function honeypot() {
  const { c, formulario } = await contexto({ cookies: decidido("granted") });
  const page = await c.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  await preencher(page, { honeypot: true });
  await page.evaluate(() => {
    window.dataLayer.length = 0;
  });
  await page.click("[data-form-submit]");
  await page.waitForTimeout(1200);

  /* O desvio do honeypot finge sucesso para o bot. Se o evento morasse dentro
     de showSuccess(), bot contaria como lead. */
  check(eventos(await dataLayer(page), "formulario_envio").length === 0, "honeypot não conta como lead");
  check(formulario.length === 0, "honeypot não chega ao serviço de formulário");

  await c.close();
}

async function formularioErro() {
  modoFormulario = "falha";
  try {
    const { c } = await contexto({ cookies: decidido("granted") });
    const page = await c.newPage();
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);

    await preencher(page);
    await page.evaluate(() => {
      window.dataLayer.length = 0;
    });
    await page.click("[data-form-submit]");
    await page.waitForTimeout(1500);

    /* Categoria, nunca a mensagem crua: o serviço pode ecoar conteúdo digitado
       pela pessoa, e isso não pode chegar ao analytics. */
    const ev = eventos(await dataLayer(page), "formulario_erro");
    check(
      ev.length === 1 && ev[0][2].motivo === "servico",
      "falha do serviço dispara formulario_erro com motivo=servico",
      JSON.stringify(ev),
    );
    check(await page.locator("[data-form-error]").isVisible(), "a caixa de erro aparece");

    await page.evaluate(() => {
      window.dataLayer.length = 0;
    });
    await page.locator('[data-form-error] a[data-contato="contato_whatsapp"]').click();
    await page.waitForTimeout(250);
    const ev2 = eventos(await dataLayer(page));
    check(
      ev2.length === 1 && ev2[0][2].origem_secao === "formulario_erro",
      "os canais da caixa de erro usam origem=formulario_erro",
      JSON.stringify(ev2),
    );
    await c.close();
  } finally {
    modoFormulario = "ok";
  }
}

async function apresentacao() {
  for (const [rota, idioma] of [
    ["/", "pt"],
    ["/en", "en"],
    ["/es", "es"],
  ]) {
    for (const [dispositivo, viewport] of [
      ["mobile", { width: 390, height: 844 }],
      ["desktop", { width: 1440, height: 900 }],
    ]) {
      const c = await browser.newContext({ viewport });
      await c.route(/googletagmanager|google-analytics|analytics\.google/, (r) => r.abort());
      const page = await c.newPage();
      await page.goto(BASE + rota, { waitUntil: "networkidle" });
      await page.waitForTimeout(800);

      const a = await page.locator("[data-consent-accept]").boundingBox();
      const r = await page.locator("[data-consent-reject]").boundingBox();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );

      await page.click("[data-consent-preferences]");
      await page.waitForTimeout(400);
      /* 24px é o alvo mínimo da WCAG 2.2 (2.5.8). */
      const chave = await page.locator("[data-consent-analytics]").boundingBox();

      check(
        Math.abs(a.width - r.width) < 2 && Math.abs(a.height - r.height) < 2,
        `${idioma}/${dispositivo}: Aceitar e Recusar do mesmo tamanho`,
      );
      check(!overflow, `${idioma}/${dispositivo}: sem overflow horizontal`);
      check(
        chave.width >= 24 && chave.height >= 24,
        `${idioma}/${dispositivo}: a chave de medição atende o alvo mínimo`,
        `${Math.round(chave.width)}x${Math.round(chave.height)}`,
      );
      await c.close();
    }
  }
}

async function console_() {
  const { c } = await contexto({ cookies: decidido("granted") });
  const page = await c.newPage();
  const erros = [];
  page.on("console", (m) => m.type() === "error" && erros.push(m.text()));
  page.on("pageerror", (e) => erros.push(String(e)));

  for (const rota of ["/", "/en", "/es", "/privacidade"]) {
    await page.goto(BASE + rota, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
  }

  /* Os aborts são provocados por este script, não são defeito da página. */
  const relevantes = erros.filter((e) => !/net::ERR_FAILED|Failed to load resource/i.test(e));
  check(relevantes.length === 0, "nenhum erro de console", relevantes.join(" | ").slice(0, 300));
  await c.close();
}

/* ============================ Execução ============================ */

let destino;
let server;

try {
  destino = typeof args["pular-build"] === "string" ? args["pular-build"] : await construir();
  server = await servir(destino);
  console.log(`[verify] servindo em ${BASE}\n`);

  browser = await chromium.launch();

  await bloco("Primeira visita", primeiraVisita);
  await bloco("Recusar", recusar);
  await bloco("Aceitar", aceitar);
  await bloco("Visitas de retorno", retorno);
  await bloco("Cookie inválido", cookieInvalido);
  await bloco("Global Privacy Control", globalPrivacyControl);
  await bloco("Revogação", revogacao);
  await bloco("Cookie de idioma", cookieDeIdioma);
  await bloco("Cobertura de páginas", cobertura);
  await bloco("Política de privacidade", politica);
  await bloco("Eventos de clique", eventosDeClique);
  await bloco("Sem consentimento", semConsentimento);
  await bloco("Formulário — sucesso", formularioSucesso);
  await bloco("Formulário — campos vazios", formularioCamposVazios);
  await bloco("Formulário — honeypot", honeypot);
  await bloco("Formulário — erro", formularioErro);
  await bloco("Apresentação nos três idiomas", apresentacao);
  await bloco("Console", console_);
} catch (erro) {
  console.error(`\n[verify] ERRO: ${erro.message}`);
  process.exitCode = 1;
} finally {
  await browser?.close();
  server?.close();
  if (destino && !args["pular-build"] && !args.manter) {
    await rm(destino, { recursive: true, force: true });
  }
}

let ultimoGrupo = "";
for (const r of resultados) {
  if (r.grupo !== ultimoGrupo) {
    console.log(`\n${r.grupo}`);
    ultimoGrupo = r.grupo;
  }
  console.log(`  ${r.ok ? "ok  " : "FALHA"}  ${r.nome}${r.detalhe ? `  →  ${r.detalhe}` : ""}`);
}

const falhas = resultados.filter((r) => !r.ok);
console.log(`\n${resultados.length - falhas.length}/${resultados.length} verificações passaram`);

if (falhas.length) {
  console.log("\nFalhas:");
  for (const f of falhas) console.log(`  - [${f.grupo}] ${f.nome}${f.detalhe ? `  →  ${f.detalhe}` : ""}`);
  process.exitCode = 1;
}
