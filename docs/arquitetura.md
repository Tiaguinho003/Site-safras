# Arquitetura — Site Safras & Negócios

Documento vivo. Fonte da verdade pras decisões arquiteturais do projeto.
Última atualização: 2026-04-21 (v1 — fundação inicial).

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
| Framework | **Astro 5+** | HTML estático rápido (SEO), islands pra interatividade pontual, zero runtime por padrão |
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

```
site-safras/
├── public/                       # estáticos servidos tal qual (robots.txt, favicons)
├── src/
│   ├── assets/
│   │   └── branding/             # logos oficiais (reinjetados)
│   ├── components/
│   │   ├── ui/                   # primitivos (Button, Input, Badge...)
│   │   ├── sections/             # blocos de página (Hero, FeatureGrid, CTA...)
│   │   └── layout/               # Header, Footer, Nav
│   ├── layouts/
│   │   └── BaseLayout.astro      # template padrão de página
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── quem-somos.astro
│   │   ├── servicos.astro
│   │   ├── noticias/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contato.astro
│   ├── content/                  # Astro Content Collections
│   │   ├── blog/                 # markdown de posts
│   │   └── noticias/             # markdown de notícias
│   ├── styles/
│   │   ├── tokens.css            # CSS vars (cores, fontes, espaçamentos, shadows)
│   │   └── global.css            # reset + base + utilities globais
│   └── lib/                      # utilitários (formatação, helpers, clients API futuros)
├── docs/
│   ├── arquitetura.md            # este arquivo
│   ├── design-system.md          # TBD (quando houver componentes)
│   └── deploy.md                 # TBD (quando pipeline existir)
├── tests/                        # Vitest / Playwright (quando houver lógica pra testar)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── firebase.json                 # config Firebase Hosting
├── cloudbuild.yaml               # pipeline Cloud Build
├── .nvmrc                        # trava versão do Node
├── .gitignore
├── CLAUDE.md                     # contexto pra Claude
└── README.md                     # overview pra humanos
```

---

## 5. Design system (baseline)

Definições iniciais — evoluem em `docs/design-system.md` quando componentes forem construídos.

### Paleta

Paleta enxuta e institucional — base branca, 2 verdes da marca, 1 accent terra pontual. Declarada em `src/styles/tokens.css` via `@theme` (Tailwind v4), o que automaticamente gera utility classes (`bg-brand`, `text-ink`, `border-line`...).

| Token CSS | Hex | Utility Tailwind | Uso |
|---|---|---|---|
| `--color-paper` | `#ffffff` | `bg-paper` | Background principal (branco puro) |
| `--color-paper-alt` | `#f6f6f4` | `bg-paper-alt` | Alternância de seções |
| `--color-line` | `#e3e3df` | `border-line` | Bordas e divisores |
| `--color-ink` | `#141311` | `text-ink` | Textos primários |
| `--color-ink-muted` | `#5a564f` | `text-ink-muted` | Textos secundários |
| `--color-brand` | `#1f6b3a` | `bg-brand` / `text-brand` | Verde da marca — CTAs primários |
| `--color-brand-dark` | `#134024` | `bg-brand-dark` | Verde escuro — hover, headings fortes |
| `--color-earth` | `#8b5e34` | `text-earth` | Accent terra (café torrado) — uso pontual |

*Paleta pode ser refinada após validação com a marca.*

### Tipografia

- **Única family**: [Inter](https://fonts.google.com/specimen/Inter) — sans variável, altíssima legibilidade, visual institucional limpo.
- Hierarquia é criada por **peso** e **tamanho**, não por uma segunda family:
  - Display/headings: Inter 700–800 em tamanhos grandes (40/56/72)
  - Subheadings: Inter 600 em tamanhos médios (24/32)
  - Body: Inter 400 · 16–18
  - Metadados/UI small: Inter 500 · 14
- Carregada via Fontsource (local, sem CDN third-party) pra controle total de performance.
- **Escala**: 12 / 14 / 16 / 18 / 20 / 24 / 32 / 40 / 56 / 72 (rem-based).

### Espaçamento

Escala base 4pt: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px).

### Motion (princípios)

- **Scroll reveal**: fade-up (translateY 16px → 0, opacity 0 → 1), duração 600ms, `ease-out`. Disparado via Intersection Observer.
- **Hover em cards**: `scale(1.02)` + sombra crescente, 200ms `ease-out`.
- **Page transitions**: Astro View Transitions API (nativo, progressivo).
- **Counters numéricos**: animação de 1.5s em estatísticas (produtores atendidos, anos de mercado).
- **Regra de ouro**: se `prefers-reduced-motion: reduce` estiver ativo, todas as animações viram transições instantâneas de estado.

### Componentes planejados (catalogação em `docs/design-system.md` quando existirem)

`Button`, `Link`, `Badge`, `Input`, `Textarea`, `Hero`, `SectionIntro`, `ServiceCard`, `StatCard`, `FeatureCard`, `Testimonial`, `NewsCard`, `PostCard`, `ContactForm`, `Header`, `Footer`, `Breadcrumb`.

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
[ Firebase Hosting ]
     │
     ↓
[ site-safras.web.app → depois: domínio final ]
```

- **Push em `main`** → deploy em produção.
- **PRs abertos** → preview deploy em URL temporária (`site-safras--pr-123.web.app`).
- **Rollback**: `firebase hosting:rollback` ou reverter commit e push.

Detalhes operacionais em `docs/deploy.md` (a ser criado quando o pipeline estiver implementado).

---

## 7. Metas de performance

| Métrica | Meta | Como medir |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse mobile + CrUX |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| INP (Interaction to Next Paint) | < 200ms | Lighthouse + real user |
| TTFB | < 600ms | Firebase Hosting (CDN edge) |
| Lighthouse Performance (mobile) | ≥ 95 | CI check em todo PR |
| Lighthouse Accessibility | 100 | CI check |
| Lighthouse Best Practices | ≥ 95 | CI check |
| Lighthouse SEO | 100 | CI check |

---

## 8. SEO baseline

- `<title>` e `description` únicos por página.
- `<link rel="canonical">` em todas as páginas.
- **OpenGraph** e **Twitter Cards** completos.
- `sitemap.xml` gerado automaticamente (`@astrojs/sitemap`).
- `robots.txt` permissivo (exceto rotas internas, quando existirem).
- **Schema.org** JSON-LD: `Organization`, `WebSite`, `Article` (notícias/blog), `BreadcrumbList`.
- HTML semântico — `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` corretamente aninhados.
- Headings sequenciais sem pular níveis.

---

## 9. Acessibilidade

- Contraste mínimo **4.5:1** (texto) / **3:1** (UI non-text) — WCAG AA.
- **Foco visível** em todos os elementos interativos (outline customizado, nunca `outline: none` sem substituto).
- Navegação **100% por teclado** — skip links, ordem de tab lógica.
- `alt` em toda imagem significativa; `alt=""` em decorativas.
- Formulários com `<label>` associados, mensagens de erro com `aria-describedby`.
- `prefers-reduced-motion: reduce` respeitado em todas as animações.
- Testes: axe-core em CI, auditoria manual antes de releases grandes.

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

### Branches

- `main` → produção (push direto bloqueado; merge só via PR).
- `feat/<slug>` → nova feature.
- `fix/<slug>` → correção.
- `chore/<slug>` → manutenção (deps, config, etc).
- `docs/<slug>` → mudanças só de documentação.

### Pull Requests

- 1 feature/correção por PR.
- Descrição: **o que** mudou, **por que**, **como testar**.
- Preview deploy (Cloud Build) obrigatório antes do merge.
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
- Internacionalização (i18n)
- Dashboard interna de analytics
- App mobile nativo
- Integração em tempo real com feeds de cotação externa (decidir quando automações forem priorizadas)
