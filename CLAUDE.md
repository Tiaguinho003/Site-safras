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
Declarados em `src/styles/tokens.css` via `@theme` (Tailwind v4 gera utilities automaticamente).

- Surface: `--color-paper` `#ffffff` (bg) · `--color-paper-alt` `#f6f6f4` · `--color-line` `#e3e3df`
- Texto: `--color-ink` `#141311` · `--color-ink-muted` `#5a564f`
- Brand: `--color-brand` `#1f6b3a` (marca) · `--color-brand-dark` `#134024` · `--color-earth` `#8b5e34`
- **Única tipografia**: Inter (variable, via `@fontsource-variable/inter`). Hierarquia por peso e tamanho, sem segunda family.

## Estrutura de páginas (v1 — single-page)
Site institucional em página única (`/`) com navegação por anchors:
- `/#hero` · `/#servicos` · `/#quem-somos` · `/#contato`

Rotas adicionais (sem layout próprio):
- `/contato` — redireciona pra `/#contato` (retrocompatibilidade)
- `/qr` — redirect imutável (cartão físico, NÃO ALTERAR)
- `/manutencao` — gate de manutenção em produção

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
- `docs/i18n-glossary.md` — **glossário de tradução PT/EN/ES** (decisões locked) — sempre consultar antes de traduzir

## i18n (internacionalização)

### Stack
- Astro i18n nativo: PT-BR default em `/`, EN em `/en/`, ES em `/es/`
- Dicionários em `src/i18n/{pt-br,en,es}.ts` (objetos `as const`, source of truth = pt-br)
- Helper público: `useTranslation(Astro)` retorna `{ t, tArray, locale, localizeAnchor }`
- Anchors traduzidos via `src/i18n/anchors.ts` (#contato ⇄ #contact ⇄ #contacto)
- Switcher: `src/components/layout/LanguageSwitcher.astro` (dropdown desktop + chips mobile)
- Auto-detect: script inline em `BaseLayout.astro` (Accept-Language → redirect na 1ª visita; cookie `safras_locale` respeita escolha manual)

### Workflow ao adicionar uma string nova
1. **Adicionar em `src/i18n/pt-br.ts` primeiro** (source of truth)
2. **Consultar `docs/i18n-glossary.md`** — termo de café? cargo/título? Já há decisão? Reusar
3. Traduzir em `en.ts` e `es.ts` seguindo o glossário religiosamente
4. Se termo novo (não documentado), adicionar entrada no glossário com rationale
5. Usar em componente via `const { t } = useTranslation(Astro); t("chave.nova")`

### Regras críticas
- ❌ NUNCA usar `t<Type>("chave")` ou `tArray<Type>(...)` **dentro de JSX** — Astro v6/esbuild lê `<Type>` como tag JSX e quebra o build. Usar type assertion: `(tArray("chave") as string[])`. Em front-matter (.astro) generics funcionam normalmente.
- ❌ NUNCA hardcoded strings traduzíveis em componentes — sempre `t()`
- ❌ NÃO traduzir: nome da marca (Safras & Negócios), cidades (São Sebastião do Paraíso), nomes pessoais nos depoimentos
- ✅ Strings dinâmicas que precisam ir pro client-side JS: passar via `data-*` attributes no markup (ex: form submit labels) — NÃO tentar usar `t()` em `<script>` blocks
- ✅ Anchors traduzidos: usar `localizeAnchor("contato")` pra href, `getAnchor("contato", locale)` pra id de seção

### Decisões locked do glossário (resumo executivo)
| PT | EN | ES |
|----|----|-----|
| fazenda | estate | finca |
| produtor | grower | productor |
| corretora/intermediação | brokerage | corretaje |
| análise sensorial | cupping | catación |
| embarque | shipping | embarque |
| seriedade | integrity | seriedad |
| Anos de história | Years in business | Años de trayectoria |
| Sobre nós | About | Sobre Nosotros |
| Solicitar Serviço (CTA) | Get Started | Solicitar Cotización |
| safra | harvest | cosecha |
