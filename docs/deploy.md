# Deploy — Site Safras & Negócios

Como o site vai do commit à produção. Derivado de `cloudbuild.yaml`, `firebase.json`,
`.firebaserc` e `scripts/apply-maintenance.mjs`.

Criado em 2026-08-20. O pipeline existia desde abril e nunca havia sido documentado.

---

## 1. Visão geral

```
push em main
   │
   ▼
Cloud Build — trigger `deploy-main`  (projeto GCP: site-safras)
   │   corepack enable pnpm
   │   pnpm install --frozen-lockfile
   │   pnpm build            → astro build + scripts/apply-maintenance.mjs
   │   firebase deploy --only=hosting
   ▼
Firebase Hosting — canal `live`
   │
   ▼
safrasenegocios.com.br  ·  www → 301  ·  site-safras.web.app
```

**Push em `main` é o único gatilho de publicação.** Não há deploy manual no fluxo normal, não há
staging e **não existe canal de preview** — o Hosting deste projeto tem apenas `live`.

Consequência prática: **a validação acontece antes do merge, localmente.** Depois do merge, já é
produção.

---

## 2. Projeto e credenciais

| Item | Valor |
|---|---|
| Projeto GCP / Firebase | `site-safras` (default em `.firebaserc`) |
| Região do Cloud Build | `southamerica-east1` |
| Trigger | `deploy-main`, ligado à branch `main` |
| Service account | `cloud-build-deployer@site-safras.iam.gserviceaccount.com` |
| Roles | `cloudbuild.builds.builder` · `firebasehosting.admin` · `firebase.viewer` · `logging.logWriter` |
| Máquina | default `e2-medium` — elegível ao free tier de 120 build-minutes/dia |
| Timeout | 1200s (build leva ~6–10 min nessa máquina) |

> ⚠️ **`gcloud builds` exige `--region=southamerica-east1`.** Sem a flag, o comando consulta a
> região global e retorna vazio — dá a impressão de que não há builds. Isso já custou tempo de
> diagnóstico antes.

```bash
gcloud builds list --project=site-safras --region=southamerica-east1 --limit=5
gcloud builds log <BUILD_ID> --project=site-safras --region=southamerica-east1
```

**Todo comando `gcloud` leva `--project=site-safras`.** Operar em qualquer outro projeto exige
autorização explícita na conversa.

---

## 3. Variáveis de build

Definidas no `env` do step em `cloudbuild.yaml`:

| Variável | Valor | Efeito |
|---|---|---|
| `MAINTENANCE` | `0` | `apply-maintenance.mjs` vira no-op; site completo é publicado |
| `PUBLIC_WEB3FORMS_KEY` | chave pública | Consumida pelo formulário de contato |

Sobre a chave do Web3Forms: é pública por design — vai para o bundle do cliente de qualquer forma.
Mas ela está **literal em arquivo versionado, em repositório público**, e a restrição por domínio
do Web3Forms é recurso pago não contratado. O risco é conhecido e aceito enquanto o volume for
baixo; o gatilho de reavaliação está na Fase 2 do plano de SEO. Ver
[`registro-operacional.md`](./registro-operacional.md).

Localmente a chave vem de `.env` (ver `.env.example`), que não é versionado.

---

## 4. Modo manutenção

`pnpm build` roda `astro build` e, em seguida, `scripts/apply-maintenance.mjs`.

- `MAINTENANCE` diferente de `1` → o script sai imediatamente. Build normal.
- `MAINTENANCE=1` → a manutenção passa a ser servida em `/`, `/en` e `/es`; todo diretório de rota
  fora da lista de preservados é removido; o resultado é validado e o build falha se algo não bater.

Preservados: `_astro/` (assets), `qr/` (redirect impresso no cartão físico) e as homes de idioma.

Para ativar: trocar `MAINTENANCE=0` por `MAINTENANCE=1` em `cloudbuild.yaml` e publicar.

### Comportamento em manutenção

Validado no emulador do Firebase:

| URL | Resposta |
|---|---|
| `/`, `/en`, `/es` | 200 com a página de manutenção |
| `/qr` | 302 — o cartão físico continua funcionando |
| `/contato` | 301 |
| URL desconhecida | **404 real** |

### Por que não há rewrite curinga

Versões anteriores do script dependiam de `** → /index.html` no `firebase.json` para que qualquer
URL caísse na manutenção. Esse rewrite foi **removido na Fase 1**: ele fazia URLs inexistentes
responderem 200 com a home — o falso 200 que era o problema crítico da fase.

**Não reintroduzir.** Durante a manutenção, URL desconhecida retornando 404 é o comportamento
correto. O que precisa continuar respondendo são as URLs que as pessoas de fato têm: as três homes
e `/qr`.

### Lista de permitidos, não de removidos

O script preserva o que está em `KEEP_DIRS` e remove todo o resto. É deliberado: uma rota nova
criada no futuro é removida automaticamente durante a manutenção, em vez de continuar no ar porque
ninguém lembrou de atualizar o script.

A versão anterior fazia o inverso — listava rotas a remover — e tinha exatamente esse defeito:
listava quatro rotas que já não existiam e não listava `en` nem `es`, de modo que o site seguiria
totalmente acessível em dois idiomas durante a "manutenção". Corrigido em 20/08/2026.

### Limitação conhecida

A página de manutenção é **PT-BR apenas** e é servida como está nas três homes. Aceitável para um
estado temporário; se a manutenção passar a ser longa, traduzir antes.

A resposta é HTTP 200, não 503. Hospedagem estática não permite código de status por rota. Para uma
janela curta é irrelevante; para uma parada longa, considerar.

---

## 5. Configuração do Hosting

Tudo em `firebase.json`.

- `public: "dist"` · `cleanUrls: true` · `trailingSlash: false`
- **Sem `rewrites`** — é o que garante 404 real em URL inexistente.

### Redirects

| Origem | Destino | Tipo |
|---|---|---|
| `/contato` | `/#contato` | 301 |
| `/qr` | `/?utm_source=qr&utm_medium=print&utm_campaign=cartao` | 302 |

> 🔒 **`/qr` é imutável.** A URL está impressa em QR code no cartão físico da empresa. Nunca
> remover, nunca alterar o caminho. O destino pode mudar; o caminho `/qr`, não.

### Cache

| Padrão | Cache-Control |
|---|---|
| Imagens e fontes | `public, max-age=31536000, immutable` |
| `/_astro/**` | `public, max-age=31536000, immutable` |
| `**/*.html` | `public, max-age=300, must-revalidate` |
| `404.html` | `public, max-age=300, must-revalidate` + `X-Robots-Tag: noindex` |

### Segurança

`X-Content-Type-Options: nosniff` · `Referrer-Policy: strict-origin-when-cross-origin` ·
`X-Frame-Options: DENY` · `Permissions-Policy` restritiva · **CSP** com `default-src 'self'` e
`frame-ancestors 'none'`.

`script-src` libera `googletagmanager.com` e `connect-src` libera `api.web3forms.com` mais os
domínios do Google Analytics. **Preparado em 20/08/2026, na Fase C, antes de existir qualquer tag.**
O motivo é o modo de falha: carregar analytics sem a CSP correspondente faz o navegador bloquear o
script **sem erro visível** — a ferramenta parece instalada e não coleta nada. Deixar a permissão
pronta e publicada torna a instalação da Fase D puramente aditiva.

> Ao integrar qualquer serviço externo novo — pixel, tag manager, fontes remotas — **a CSP precisa
> ser atualizada junto**. É o ponto que mais costuma ser esquecido.

**Limitação conhecida:** `script-src` mantém `'unsafe-inline'`, exigido pelos scripts inline do
Astro. Hospedagem estática não gera nonce por requisição, então endurecer isso não é possível hoje.

---

## 6. Comandos

```bash
pnpm dev        # servidor local — http://localhost:4321
pnpm build      # build de produção em dist/ (+ gate de manutenção)
pnpm preview    # serve o build local
pnpm check      # astro check (TypeScript + templates)
pnpm deploy     # build + firebase deploy --only=hosting --project=site-safras
```

`pnpm deploy` publica **direto em produção**, sem PR e sem review. Existe para emergência.
O fluxo normal é merge em `main`. Usar só com autorização explícita.

---

## 7. Rollback

```bash
firebase hosting:rollback --project=site-safras
```

Ou reverter o commit em `main` e deixar o pipeline republicar — mais lento, porém rastreável.

> **Cache de CDN após mudança de domínio:** conectar um domínio próprio no Firebase Hosting exige
> um novo deploy para invalidar o cache de edge. Sem isso, edges regionais continuam servindo a
> versão antiga por um período. Já aconteceu neste projeto.

---

## 8. Verificação pós-deploy

Mínimo, nos três idiomas:

```bash
for u in / /en /es /robots.txt /sitemap-index.xml /url-que-nao-existe /contato /qr; do
  curl -s -o /dev/null -w "%{http_code}  $u\n" "https://safrasenegocios.com.br$u"
done
```

Esperado: `200` nas cinco primeiras · `404` na inexistente · `301` em `/contato` · `302` em `/qr`.

Conferir também: canonical e quatro alternates presentes; uma única `<h1>`; nenhum erro de console.

### Medição de performance

Performance é medida pela **API do PageSpeed Insights**, não por Lighthouse local. O Lighthouse do
PSI roda em infraestrutura padronizada do Google; o local herda a contenção de CPU da máquina, e foi
exatamente esse ruído que travou o gate da Fase 1 por semanas, com a mesma URL oscilando entre 89 e
99.

```bash
set -a; . ./.env; set +a          # carrega PAGESPEED_API_KEY
node scripts/measure-psi.mjs --runs=3
```

O script mede `/`, `/en` e `/es`, reporta a **mediana** de cada métrica mais a amplitude entre
execuções, e sai com código 1 se alguma página reprovar no gate. Amplitude alta significa que a
própria medição não é confiável — aumentar `--runs` antes de concluir qualquer coisa.

A chave vive em `PAGESPEED_API_KEY` no `.env` (não versionado; ver `.env.example`). Foi criada no
projeto GCP `site-safras` e é **restrita à API do PageSpeed**. É uma credencial: não imprimir, não
commitar.

---

## 9. Lacunas conhecidas

| Lacuna | Consequência |
|---|---|
| Sem canal de preview | Nada é visto em ambiente real antes de virar produção |
| Sem CI de qualidade | Lighthouse, acessibilidade e lint dependem de disciplina manual |
| Chave do Web3Forms versionada em repo público | Vetor de spam quando o tráfego crescer |
| Sem registro `AAAA` no domínio apex | Rede exclusivamente IPv6 não alcança o apex; `www` tem IPv6 |

> O modo manutenção constava aqui como quebrado. **Corrigido em 20/08/2026** (PR #23): hoje é
> uma lista de permitidos, com validação que derruba o build se o resultado não bater — ver §4.
