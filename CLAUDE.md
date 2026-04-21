# Site Safras & Negócios — Contexto pra Claude

## O que é este projeto
Site institucional da **Safras & Negócios**, corretora de café brasileira. Reconstruído do zero em 2026-04-21. Objetivo: transmitir **confiança, tradição, clareza e praticidade** pros públicos-alvo (produtores, compradores, parceiros), com experiência moderna e interativa.

## Stack
- **Framework**: Astro 5+ com TypeScript
- **CSS**: Tailwind CSS v4 + design tokens em CSS vars (`src/styles/tokens.css`)
- **Pacotes**: pnpm
- **Node**: 22 LTS (ver `.nvmrc`)
- **Hospedagem**: Firebase Hosting no projeto GCP `site-safras`
- **CI/CD**: Cloud Build trigger em push para `main`

## Projeto GCP
- **Project ID**: `site-safras`
- **Conta ativa**: `measyia@gmail.com`
- **Região preferida**: `southamerica-east1` (São Paulo)
- **Regra crítica**: Claude só opera neste projeto. NUNCA rodar comandos gcloud em outros projetos (ex: `safras-amostras-prod`) sem autorização explícita na conversa. Usar `--project=site-safras` em todo comando `gcloud`.

## Repositório
- **GitHub**: `Tiaguinho003/Site-safras` (público)
- **Branch padrão**: `main`
- **Convenção de commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`)
- **Fluxo**: feature branches + PR obrigatório, nunca push direto em `main`

## Comandos comuns
```bash
pnpm install        # instala dependências
pnpm dev            # servidor local (http://localhost:4321)
pnpm build          # build de produção em dist/
pnpm preview        # serve build local pra testar
pnpm lint           # lint (quando configurado)
pnpm test           # testes (quando configurado)
```

## Princípios de design (não violar sem discussão explícita)
1. **Clareza > ornamento** — cada elemento tem propósito
2. **Movimento comedido** — animações reforçam hierarquia, não distraem; sempre respeitar `prefers-reduced-motion`
3. **Mobile-first** — design e código começam pelo mobile
4. **Acessibilidade WCAG 2.2 AA** como baseline
5. **Performance como feature**: LCP < 2.5s, CLS < 0.1, Lighthouse mobile ≥ 95

## Design tokens (referência rápida)
- Background: `--bg: #ffffff` (branco puro) · `--bg-subtle: #f6f6f4` (alt sections)
- Primary (marca): `--safras-green-700: #1f6b3a`
- Primary escuro: `--safras-green-900: #134024`
- Accent terra (pontual): `--safras-earth-600: #8b5e34`
- Texto: `--ink: #141311` · `--ink-muted: #5a564f`
- Borda: `--line: #e3e3df`
- **Única tipografia**: Inter (hierarquia por peso e tamanho, sem segunda family)

## Páginas planejadas (v1)
- `/` — Home
- `/quem-somos`
- `/servicos`
- `/noticias` + `/noticias/[slug]`
- `/blog` + `/blog/[slug]`
- `/contato`

## Estrutura de pastas
Ver `docs/arquitetura.md` seção 4.

## Automações
**Escopo atual**: nenhuma automação implementada. A arquitetura é flexível pra acomodar depois (Cloud Functions, Cloud Run, Scheduler, Secret Manager). **NÃO arquitetar endpoints ou integrações antes do usuário pedir explicitamente.**

## Boundaries fortes
- ❌ NÃO mexer em projetos GCP diferentes do `site-safras`
- ❌ NÃO criar novas skills ou docs sem aprovação
- ❌ NÃO introduzir libs novas sem justificar na conversa
- ❌ NÃO push direto em `main` — sempre via PR
- ❌ NÃO mockar testes de integração (quando existirem)
- ✅ Rodar comandos gcloud sempre com `--project=site-safras`
- ✅ Confirmar antes de ações destrutivas (rm, force-push, drop, delete)
- ✅ Commits só quando o usuário pedir explicitamente

## Documentação deste repositório
- `docs/arquitetura.md` — decisões arquiteturais e rationale (fonte da verdade)
- `docs/design-system.md` — tokens e componentes (a ser criado quando surgirem componentes)
- `docs/deploy.md` — fluxo de deploy detalhado (a ser criado quando pipeline existir)
