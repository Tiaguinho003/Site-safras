# Arquitetura — Site Safras & Negócios

Documento vivo. Fonte da verdade pras decisões arquiteturais do projeto.
Última atualização: 2026-08-20 (v1 — single-page trilíngue, Fase 1 do plano de SEO publicada).

> **Escopo deste documento:** decisões de arquitetura e rationale. Tokens visuais e catálogo de
> componentes vivem em [`design-system.md`](./design-system.md). Pipeline de publicação em
> [`deploy.md`](./deploy.md). Roadmap, gates e estado do programa em
> [`plano-seo-programatico.md`](./plano-seo-programatico.md).

---

## 1. Visão geral

Site institucional da **Safras & Negócios**, corretora de café brasileira. Reconstrução completa, partindo do zero, com foco em:

- **Público-alvo**: produtores de café, compradores, traders, parceiros institucionais.
- **Objetivo**: transmitir **confiança, tradição, clareza e praticidade**.
- **Experiência**: moderna e interativa, com movimento funcional que guia o olhar sem distrair.
- **Decisão de valor**: o visitante deve confirmar em < 10 segundos que está no site certo pra resolver o que veio buscar.

---

## 2. Princípios de design

1. **Confiança sobre ornamento** — cada elemento visual serve uma intenção clara.
2. **Tradição com frescor** — tipografia e paleta referenciam o histórico do setor, em execução contemporânea.
3. **Clareza > criatividade** — se criatividade e clareza conflitam, clareza vence.
4. **Movimento comedido** — animações reforçam hierarquia; `prefers-reduced-motion` sempre respeitado.
5. **Mobile-first** — setor tem alto tráfego mobile; design e código começam pelo mobile.
6. **Performance como feature** — site rápido é site confiável.
7. **Acessibilidade WCAG 2.2 AA** — baseline, não "extra".

---

## 3. Stack técnica

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | **Astro 6** (6.1.8) | HTML estático rápido (SEO), islands pra interatividade pontual, zero runtime por padrão |
| Linguagem | **TypeScript 5+** | Tipos em todo JS, melhor DX e menos bugs |
| CSS | **Tailwind CSS v4** | Iteração rápida, tokens nativos via CSS vars |
| Pacotes | **pnpm** | Mais rápido que npm, menor footprint em disco |
| Node | **22 LTS** | Suporte oficial até abr/2027 |
| Hospedagem | **Firebase Hosting** | CDN global, SSL automático, free tier, nativo GCP |
| CI/CD | **Cloud Build trigger** | Integrado ao GCP, logs centralizados, sem dependência externa |
| Secrets | **Secret Manager** | Tokens e credenciais quando vierem automações |

**Alternativas descartadas e motivo:**
- *Next.js* — overkill pra site institucional; SSR traria custo e complexidade sem benefício real aqui.
- *WordPress* — manutenção e segurança contínuas; não combina com o nível de controle desejado.
- *HTML puro (como era)* — não escala pra organização e consistência visual que o projeto exige.
- *GitHub Actions pra deploy* — trocado por Cloud Build pra centralizar tudo no GCP.

---

## 4. Estrutura de pastas

Estrutura real e versionada (conferida em 2026-08-20):

```
site-safras/
├── public/                       # servidos tal qual: favicon.png, robots.txt
├── scripts/                      # utilitários Node one-off (build, QR, captura)
│   ├── apply-maintenance.mjs     # roda no fim do `pnpm build` (gate de manutenção)
│   ├── generate-qr.mjs           # gera o QR do cartão físico
│   └── …                         # analyze-bg, capture-hero, measure-title, vectorize-logo…
├── src/
│   ├── assets/                   # imagens otimizadas pelo Astro
│   │   ├── about/ branding/ hero/ maps/ services/
│   ├── components/
│   │   ├── layout/               # Header, Footer, LanguageSwitcher, CookieConsent
│   │   ├── pages/                # HomePage.astro, PrivacyPage.astro
│   │   └── sections/             # ContactSection.astro
│   ├── data/
│   │   ├── navigation.ts         # itens do menu (anchor + labelKey)
│   │   └── consent.ts            # contrato do consentimento (cookie, categorias)
│   ├── i18n/                     # dicionários e helpers de tradução
│   │   ├── pt-br.ts en.ts es.ts  # pt-br é source of truth
│   │   ├── anchors.ts            # mapa de anchors traduzidos (#contato/#contact)
│   │   ├── routes.ts             # mapa de rotas traduzidas (/privacidade, /en/privacy)
│   │   ├── index.ts types.ts
│   ├── layouts/
│   │   └── BaseLayout.astro      # head, meta, hreflang, schema, sugestão de idioma
│   ├── pages/
│   │   ├── index.astro           # home PT-BR
│   │   ├── en/index.astro        # home EN
│   │   ├── es/index.astro        # home ES
│   │   ├── privacidade.astro     # política de privacidade PT-BR
│   │   ├── en/privacy.astro      # política EN
│   │   ├── es/privacidad.astro   # política ES
│   │   ├── 404.astro             # 404 real trilíngue (noindex)
│   │   ├── contato.astro         # fallback do redirect /contato → /#contato
│   │   ├── qr.astro              # redirect imutável (cartão físico)
│   │   └── manutencao.astro      # modo manutenção (noindex)
│   └── styles/
│       ├── tokens.css            # @theme do Tailwind v4 (fonte dos tokens)
│       └── global.css            # reset + base
├── docs/
│   ├── arquitetura.md            # este arquivo
│   ├── design-system.md          # tokens + catálogo de componentes
│   ├── deploy.md                 # pipeline de publicação
│   ├── i18n-glossary.md          # glossário PT/EN/ES (decisões locked)
│   ├── plano-seo-programatico.md # roadmap por fases e gates
│   ├── plano-ecossistema-comunicacao.md
│   └── registro-operacional.md   # decisões + histórico de execução
├── astro.config.mjs              # site, i18n, sitemap, inlineStylesheets
├── firebase.json                 # hosting: headers, redirects, cache, CSP
├── cloudbuild.yaml               # pipeline Cloud Build
├── package.json · pnpm-lock.yaml · pnpm-workspace.yaml
├── tsconfig.json · .nvmrc · .env.example
├── AGENTS.md                     # contrato operacional dos agentes
└── CLAUDE.md                     # espelho de AGENTS.md
```

**Não existem** (e não devem ser referenciados como se existissem): `tailwind.config.mjs` —
Tailwind v4 declara tokens via `@theme` em `tokens.css`, sem arquivo de config; `src/lib/`;
`src/components/ui/`; `tests/`; `README.md`.

---

## 5. Design system

Os tokens visuais (paleta, tipografia, espaçamento, motion) e o catálogo de componentes vivem em
**[`design-system.md`](./design-system.md)** — que por sua vez deriva da fonte executável,
`src/styles/tokens.css`.

A migração prevista na versão anterior deste documento foi concluída em 2026-08-20: os tokens
saíram daqui para evitar duas descrições da mesma coisa divergindo — foi exatamente o que
aconteceu entre maio e agosto de 2026, quando esta seção listava uma paleta que o código já não
usava.

**Regra permanente:** `src/styles/tokens.css` é a fonte da verdade. `design-system.md` documenta.
Este arquivo apenas aponta.

Decisões de arquitetura visual que permanecem aqui:

- **Tipografia única** — Inter (variable, via `@fontsource-variable/inter`, servida localmente,
  sem CDN de terceiros). Hierarquia por peso e tamanho, sem segunda family.
- **Tailwind v4 sem arquivo de config** — tokens declarados em `@theme` geram as utilities
  automaticamente. Não existe `tailwind.config.mjs` e não deve ser criado sem discussão.
- **CSS crítico inline** — `astro.config.mjs` usa `inlineStylesheets: "always"`, que remove o
  bloqueio de renderização numa arquitetura de página única. **Essa decisão precisa ser revista
  antes da Fase 4** do plano de SEO: com muitas páginas, o CSS deixa de ser cacheável entre elas e
  passa a ser rebaixado inteiro a cada visita. Ver "dívidas conhecidas" em `design-system.md`.
- **Movimento comedido** — animações reforçam hierarquia e sempre respeitam
  `prefers-reduced-motion: reduce`. Animações mais custosas são simplificadas ou desativadas no
  celular quando não acrescentam informação (decisão da Fase 1).
- **Rolagem nativa** — a biblioteca de smooth scroll (`lenis`) foi removida na Fase 1 em favor da
  rolagem nativa do navegador, reduzindo JavaScript sem perder a transição da barra superior.

---

## 6. Fluxo de deploy

```
[ Dev local ]
     │
     │  feat/nova-feature → PR → review → merge em main
     ↓
[ GitHub: Tiaguinho003/Site-safras ]
     │
     │  webhook dispara trigger
     ↓
[ Cloud Build trigger ] (projeto GCP: site-safras)
     │  1. pnpm install
     │  2. pnpm build
     │  3. firebase deploy --only hosting
     ↓
[ Firebase Hosting — canal `live` ]
     │
     ↓
[ safrasenegocios.com.br  ·  site-safras.web.app ]
```

- **Push em `main`** → deploy em produção. É o único gatilho de publicação.
- **Rollback**: `firebase hosting:rollback` ou reverter o commit e dar push.
- **Não existe preview deploy por PR.** O Firebase Hosting deste projeto tem **somente o canal
  `live`** (confirmado na auditoria da Fase 1). Qualquer validação pré-merge é local:
  `pnpm build` + `pnpm preview`, ou o emulador do Firebase. Criar canais de preview é uma
  melhoria em aberto, não um recurso existente.

Detalhes operacionais completos — service account, roles, gate de manutenção, headers, cache e
região do Cloud Build — em **[`deploy.md`](./deploy.md)**.

---

## 7. Metas de performance

| Métrica | Meta | Como medir | Última medição (21/07/2026, produção) |
|---|---|---|---|
| LCP | ≤ 2,5s | Lighthouse mobile + CrUX | 1,95s PT · 1,48s EN · 1,61s ES |
| CLS | ≤ 0,1 | Lighthouse mobile | < 0,003 nos três idiomas |
| INP | ≤ 200ms | dados de campo (CrUX) | **sem dados de campo ainda** |
| TTFB | < 600ms | Firebase Hosting (CDN edge) | — |
| Lighthouse Performance (mobile) | ≥ 95 | execução manual | 97 PT · 96 EN · **90 ES** ⚠️ |
| Lighthouse Accessibility | 100 | execução manual | 100 nos três idiomas |
| Lighthouse Best Practices | ≥ 95 | execução manual | 100 nos três idiomas |
| Lighthouse SEO | 100 | execução manual | 100 nos três idiomas |

> **Estas medições são manuais, não automatizadas.** Não existe CI de qualidade neste repositório:
> `cloudbuild.yaml` instala, builda e publica — não roda Lighthouse, axe, lint nem testes. Criar
> esse CI é uma lacuna conhecida e ainda não priorizada. Enquanto não existir, a verificação é
> responsabilidade de quem entrega, seguindo o checklist do `AGENTS.md`.
>
> ⚠️ O gate de performance da Fase 1 segue **aberto** por causa da instabilidade de ES
> (execuções entre 89 e 99). Ver `plano-seo-programatico.md`.

---

## 8. SEO baseline

Implementado e verificado em produção (Fase 1):

- `<title>` e `description` únicos por página, revisados nos três idiomas.
- `<link rel="canonical">` em todas as páginas.
- `hreflang` para `pt-BR`, `en-US`, `es-ES` + `x-default`.
- **Open Graph** e **Twitter Cards** completos, com imagem social real 1200×630.
- `sitemap-index.xml` via `@astrojs/sitemap`, filtrado pelo registro de rotas (`src/i18n/routes.ts`).
  Página nova entra por construção; antes era uma lista literal de três URLs.
- `robots.txt` explícito, apontando o sitemap.
- `noindex` em 404, `/manutencao` e rotas auxiliares.
- 404 real — URL inexistente retorna 404, não a home (o fallback curinga do Firebase foi removido).
- HTML semântico e headings sequenciais, com uma única `<h1>` por página.

**Rotas traduzidas:** `src/i18n/routes.ts` mapeia `routeKey → locale → pathname` — é a fonte da
verdade das URLs por idioma (`/privacidade` · `/en/privacy` · `/es/privacidad`). É o mesmo desenho
de `anchors.ts`, um nível acima. `localizeURL()` consulta esse mapa, e por isso canonical,
`hreflang`, `x-default` e o switcher acompanham o slug traduzido em vez de trocar só o prefixo.
Rota não registrada cai no comportamento antigo de prefixo.

**Consentimento e medição:** nada é carregado sem permissão. O bootstrap inline do `<head>` do
`BaseLayout` emite `gtag('consent','default', …)` com tudo negado antes de qualquer script — é o que
torna o sinal válido. Os sinais de publicidade (`ad_storage`, `ad_user_data`, `ad_personalization`)
ficam negados de forma permanente, sem controle na interface, porque o site não faz publicidade. O
contrato para a Fase D é `window.__consent.onChange()`. `src/data/consent.ts` descreve o cookie e as
categorias. Ver `docs/registro-operacional.md` para as decisões.

**Schema.org — estado real:** existe **apenas `LocalBusiness`** (nome, endereço, telefone, e-mail
público, horário, URL canônica, fundação, imagem). Declarado em `HomePage.astro` e injetado pelo
`BaseLayout.astro` via prop `structuredData`.

Pendências registradas, ainda **não** implementadas:

- `sameAs` ligando o `LocalBusiness` aos perfis oficiais (Instagram, Google Business Profile) —
  alta prioridade para desambiguar a entidade, dado o conflito de marca documentado no plano.
- `Organization`, `WebSite` e `BreadcrumbList` — só fazem sentido quando houver mais páginas
  (Fase 4). Não devem ser adicionados antes de existir conteúdo visível correspondente.
- `LocalBusiness` dependia da confirmação de qual entidade jurídica é a pública. **Resolvido em
  20/08/2026:** entidade única confirmada, endereço e telefone corretos no schema. Ver
  `registro-operacional.md`.

---

## 9. Acessibilidade

- Contraste mínimo **4.5:1** (texto) / **3:1** (UI non-text) — WCAG AA.
- **Foco visível** em todos os elementos interativos (outline customizado, nunca `outline: none` sem substituto).
- Navegação **100% por teclado** — skip links, ordem de tab lógica.
- `alt` em toda imagem significativa; `alt=""` em decorativas.
- Formulários com `<label>` associados, mensagens de erro com `aria-describedby`.
- `prefers-reduced-motion: reduce` respeitado em todas as animações.
- Testes: **auditoria manual** com Lighthouse antes de cada entrega. Não há axe-core nem qualquer
  verificação automatizada em CI — ver a nota em §7.

---

## 10. Convenções

### Commits (Conventional Commits)

```
feat: adiciona seção de serviços na home
fix: corrige quebra do menu em mobile
chore: atualiza dependências astro e tailwind
docs: documenta tokens de cor no design-system
refactor: extrai card de notícia pra componente
test: adiciona cobertura pro formulário de contato
```

**A mensagem ocupa uma única linha.** Sem corpo, sem rodapé.

### Branches

- `main` → produção (push direto bloqueado; merge só via PR).
- `feat/<slug>` → nova feature.
- `fix/<slug>` → correção.
- `chore/<slug>` → manutenção (deps, config, etc).
- `docs/<slug>` → mudanças só de documentação.
- `codex/<slug>` → trabalho conduzido por agente de IA.

### Pull Requests

- 1 feature/correção por PR.
- Descrição: **o que** mudou, **por que**, **como testar**.
- Validação local obrigatória antes do merge (`pnpm check`, `pnpm build`, conferência visual nos
  três idiomas). **Não há preview deploy** — ver §6.
- Revisão mesmo quando trabalhando sozinho — ler o próprio diff como se fosse de outra pessoa.

---

## 11. Flexibilidade pra automações futuras

A arquitetura **não fecha porta** pra nenhum caminho. Quando a demanda por automação surgir, os caminhos disponíveis:

| Necessidade | Solução GCP |
|---|---|
| API / endpoints customizados | Cloud Functions 2nd gen ou Cloud Run |
| Webhooks recebidos (WhatsApp, etc) | Cloud Functions |
| Jobs agendados (boletins, syncs) | Cloud Scheduler + Cloud Functions |
| Integrações com tokens/secrets | Secret Manager |
| Dados estruturados | Firestore ou BigQuery (conforme uso) |
| Envio de e-mail transacional | SendGrid / Mailgun via Secret Manager |
| Formulários server-side | Astro endpoints → Cloud Function |

**Decisões específicas de cada automação serão tomadas quando a demanda surgir, não antes.**

---

## 12. Fora de escopo (por enquanto)

Explicitamente NÃO fazem parte desta fase do projeto:

- Sistema de autenticação / área logada
- E-commerce
- Dashboard interna de analytics
- App mobile nativo
- Integração em tempo real com feeds de cotação externa (decidir quando automações forem priorizadas)

**Saiu de "fora de escopo":** internacionalização. O site é trilíngue (PT-BR/EN/ES) e está em
produção desde maio de 2026 — ver `i18n-glossary.md` e o workflow de tradução no `AGENTS.md`.
