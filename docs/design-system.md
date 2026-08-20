# Design System — Site Safras & Negócios

Documento vivo. **Fonte documental** dos tokens visuais, do padrão responsivo e do catálogo de
componentes.

> A fonte **executável** dos tokens é `src/styles/tokens.css`. Este documento descreve; o CSS
> decide. Em caso de divergência entre os dois, o CSS está certo e este arquivo deve ser corrigido
> — nunca o contrário.

Última atualização: 2026-08-20.

---

## 0. Tokens

Declarados em `src/styles/tokens.css` via `@theme` (Tailwind v4). Cada token gera as utilities
automaticamente — `--color-brand` vira `bg-brand`, `text-brand`, `border-brand` e assim por diante.
Não existe `tailwind.config.mjs`.

### Paleta

Base branca, dois verdes da marca (extraídos dos PNGs oficiais da logo) e um accent terra pontual.

| Token CSS | Hex | Utility | Uso |
|---|---|---|---|
| `--color-paper` | `#ffffff` | `bg-paper` | Background principal |
| `--color-paper-alt` | `#f6f6f4` | `bg-paper-alt` | Alternância de seções |
| `--color-line` | `#e3e3df` | `border-line` | Bordas e divisores |
| `--color-ink` | `#141311` | `text-ink` | Texto primário |
| `--color-ink-muted` | `#5a564f` | `text-ink-muted` | Texto secundário |
| `--color-brand` | `#025c00` | `bg-brand` · `text-brand` | Verde da marca — CTAs primários |
| `--color-brand-dark` | `#013d01` | `bg-brand-dark` | Verde escuro — hover, headings fortes |
| `--color-earth` | `#3c3424` | `text-earth` | Accent terra — uso pontual |

O `theme-color` do navegador (`BaseLayout.astro`) acompanha `--color-brand`: `#025c00`.

> **Histórico:** até agosto de 2026 este documento e o `CLAUDE.md` descreviam uma paleta antiga
> (`#1f6b3a` / `#134024` / `#8b5e34`) que o código já não usava havia meses. Os valores acima foram
> conferidos diretamente contra `tokens.css`.

### Tipografia

- **Family única:** Inter Variable, via `@fontsource-variable/inter` — servida localmente, sem CDN
  de terceiros. Fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, …`.
- Hierarquia por **peso e tamanho**, nunca por uma segunda family:
  - Display/headings: 700–800 em 40/56/72
  - Subheadings: 600 em 24/32
  - Body: 400 em 16–18
  - Metadados/UI small: 500 em 14
- Escala: 12 · 14 · 16 · 18 · 20 · 24 · 32 · 40 · 56 · 72 (rem-based).

### Espaçamento

Escala base 4pt: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px).

### Motion

- **Scroll reveal:** fade-up (translateY 16px → 0, opacity 0 → 1), ~600ms `ease-out`, via
  Intersection Observer.
- **Hover em cards:** elevação sutil + sombra crescente, ~200ms `ease-out`.
- **Rolagem:** nativa do navegador. A biblioteca `lenis` foi removida na Fase 1; o helper
  `window.__smoothScrollTo` vive em `BaseLayout.astro` e é reusado por Header e Footer.
- **Regra de ouro:** com `prefers-reduced-motion: reduce`, toda animação vira transição
  instantânea de estado. Sem exceção.
- No celular, animações custosas que não acrescentam informação são simplificadas ou desativadas
  (decisão da Fase 1, motivada por TBT).

**Não usamos** View Transitions API. Já foi previsto, nunca implementado — não referenciar como se
existisse.

---

## 1. Estratégia responsiva

Site é **mobile-first**. Toda divergência entre mobile e desktop é resolvida em uma de três camadas, escolhida pelo critério no final desta seção.

### Camada 1 — Utilities Tailwind (default)

Para diferenças **puramente visuais** — espaçamento, tipografia, número de colunas, tamanho de imagem, ordem em grid. Mesmo DOM, mesmo componente, variants por breakpoint:

```astro
<h1 class="text-3xl md:text-5xl lg:text-6xl leading-tight">…</h1>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">…</div>
<section class="py-12 md:py-20 lg:py-28 px-4 md:px-8 lg:px-12">…</section>
```

DOM enxuto, zero duplicação. Use isso pra ~80% dos casos.

### Camada 2 — Componentes separados (comportamento diverge)

Quando a **interação ou estrutura** muda significativamente (hover → tap, accordion → carrossel, sidebar → drawer, ordem dos elementos se inverte, conteúdo diferente em cada lado), divide em dois arquivos invocados por um wrapper:

```
src/components/sections/Hero/
  ├─ index.astro        # wrapper
  ├─ HeroDesktop.astro
  └─ HeroMobile.astro
```

```astro
---
// Hero/index.astro
import HeroDesktop from './HeroDesktop.astro';
import HeroMobile from './HeroMobile.astro';
---
<div class="hidden md:block"><HeroDesktop /></div>
<div class="md:hidden"><HeroMobile /></div>
```

Custo: dois arquivos pra manter + ~5–10kb de HTML extra por seção. Benefício: cada arquivo curto, lógica isolada, dá pra evoluir um lado sem medo de quebrar o outro.

### Camada 3 — JS / `matchMedia` (interação dinâmica)

Pra animações, scroll triggers, hover states condicionais ou qualquer comportamento JS que difere entre touch e desktop, usar `matchMedia` no client script:

```ts
const mqDesktop = window.matchMedia('(min-width: 768px)');
const mqReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function apply() {
  if (mqDesktop.matches && !mqReducedMotion.matches) {
    // ativa animação desktop
  } else {
    // estado estático ou variante mobile
  }
}

apply();
mqDesktop.addEventListener('change', apply);
mqReducedMotion.addEventListener('change', apply);
```

Regras:
- **Nunca** confiar em User-Agent detection no servidor — quebra com CDN cache e é unreliable.
- **Sempre** checar `prefers-reduced-motion: reduce` antes de animação não-essencial.
- Reagir a mudanças de viewport com `addEventListener('change', ...)` — usuário pode rotacionar tablet ou redimensionar janela.

### Critério de decisão

> **Se a interação muda → divide (Camada 2). Se só a aparência muda → utility (Camada 1).**

Sem esse critério, vira um de dois extremos ruins:
- Tudo virando componente duplicado → manutenção dobrada, drift entre os dois lados
- Tudo virando sopa de `md:hidden lg:flex xl:grid-cols-3` → ilegível

### Breakpoints

Defaults do Tailwind, sem custom:

| Token | Min-width | Uso típico |
|---|---|---|
| (default) | 0 | Smartphone, design base |
| `sm:` | 640px | Smartphone landscape, phablet |
| `md:` | 768px | Tablet portrait / entry desktop — **quebra principal mobile/desktop** |
| `lg:` | 1024px | Laptop padrão |
| `xl:` | 1280px | Desktop comum |
| `2xl:` | 1536px | Monitores grandes |

`md:` é o divisor padrão entre os dois mundos. Use `lg:`/`xl:` apenas pra refinar dentro do "lado desktop", não pra separar contextos.

### Container & padding (padrão inicial)

| Contexto | Max-width | Padding lateral |
|---|---|---|
| Texto longo (artigo) | `max-w-prose` (~65ch) | `px-4 md:px-6` |
| Seção de página padrão | `max-w-6xl` (1152px) | `px-4 md:px-8 lg:px-12` |
| Full-bleed (hero, seções imersivas) | sem max-width | `px-4 md:px-8 lg:px-12` no conteúdo interno |

Refinar conforme uso real demandar.

---

## 2. Convenção de instruções: `(mobile)` / `(desktop)`

O usuário marca o escopo do dispositivo em pedidos de UI com a tag `(mobile)` ou `(desktop)`, antes ou depois da instrução:

> "(desktop) Aumenta o espaçamento entre os cards de serviço."
> "Substitui a imagem do hero (mobile)."

Aplicação:

| Tag | Escopo |
|---|---|
| `(mobile)` | Mudança SÓ no breakpoint base (sem prefixo Tailwind) ou em `*Mobile.astro`. Não tocar em variants `md:`/`lg:`/`xl:` nem em `*Desktop.astro`. |
| `(desktop)` | Mudança SÓ em variants `md:` em diante ou em `*Desktop.astro`. Não tocar em estilos base nem em `*Mobile.astro`. |
| Sem tag | Tratar como mobile-first padrão (vale pros dois). Em dúvida sobre escopo, perguntar antes de implementar. |

Se a instrução exigir divergência forte de comportamento e o componente ainda estiver unificado (sem split Mobile/Desktop), propor refatorar pra Camada 2 antes de implementar.

---

## 3. Acessibilidade (não-negociáveis na UI)

Detalhes completos em [`arquitetura.md §9`](./arquitetura.md#9-acessibilidade). Mínimo pra qualquer componente novo:

- Foco visível em tudo interativo. Nunca `outline: none` sem substituto.
- Contraste 4.5:1 (texto) / 3:1 (UI non-text).
- `prefers-reduced-motion: reduce` respeitado em toda animação.
- Toda imagem significativa com `alt`; decorativas com `alt=""`.
- Navegação 100% por teclado, ordem de tab lógica.
- Componentes interativos custom (modal, dropdown, accordion) com roles ARIA corretos e gerenciamento de foco.

---

## 4. Catálogo de componentes

Componentes que **existem** no código, em 2026-08-20. Cada entrada documenta anatomia, props,
estados, comportamento responsivo e acessibilidade.

Não há biblioteca de primitivos (`Button`, `Input`, `Badge`…): os estilos são aplicados
diretamente com utilities Tailwind nos componentes de seção. Extrair primitivos só se justifica
quando a repetição doer — o que ainda não aconteceu. Ver "dívidas conhecidas" no fim.

---

### `layout/Header.astro`

Barra superior do site, com duas variantes que coexistem no mesmo arquivo.

- **Anatomia:** logo → navegação por anchors (`data/navigation.ts`) → `LanguageSwitcher` → CTA de
  contato → botão de menu (mobile).
- **Props:** nenhuma. Deriva tudo de `Astro.url.pathname` e do locale corrente.
- **Variantes:**
  - `.site-header--hero` (`data-header-hero`) — sobreposta ao hero, fundo transparente, logo
    branca. Renderizada **apenas na home** de cada idioma.
  - `.site-header--sticky` (`data-header-sticky`) — barra sólida que aparece na rolagem. Recebe
    `data-scroll-aware="true"` na home.
- **Estados:** oculta ↔ visível (rolagem) · link `[data-active]` via scroll-spy · menu mobile
  aberto/fechado (`aria-expanded`).
- **Responsivo:** Camada 1 + Camada 3 — navegação vira menu hamburger abaixo de `md:`, e a
  transição de estados é controlada por JS conforme a rolagem.
- **Acessibilidade:** `aria-label` próprio em cada variante, `aria-expanded` no botão de menu,
  navegação por teclado preservada, foco visível.

### `layout/Footer.astro`

Rodapé institucional em fundo escuro.

- **Anatomia:** logo → colunas (navegação · serviços · contato · Instagram) → botão "voltar ao
  topo" → linha de créditos.
- **Props:** nenhuma.
- **Detalhe de conteúdo:** os links da coluna "Serviços" reusam as chaves do dicionário dos cards
  da home (`services.cards.*.title`), o que impede o rodapé de divergir da seção de serviços.
- **Estados:** hover/focus nos links; botão de topo reusa `window.__smoothScrollTo`.
- **Responsivo:** Camada 1 — colunas empilham no mobile.
- **Acessibilidade:** links externos com `rel="noopener noreferrer"`, ícones `aria-hidden`, nomes
  acessíveis em todos os links.

### `layout/LanguageSwitcher.astro`

Seletor de idioma. O arquivo já carrega documentação inline detalhada — mantê-la sincronizada.

- **Props:** `mode?: "dropdown" | "inline"` (default `"dropdown"`).
  - `dropdown` — trigger compacto (bandeira + código + chevron), usado no header desktop.
  - `inline` — três chips horizontais, usado dentro do menu hamburger mobile.
- **Estados:** aberto/fechado · opção ativa (`aria-current`) · hover/focus.
- **Comportamento:** ao escolher um idioma, grava o cookie `safras_locale` (1 ano), traduz o hash
  atual para o anchor equivalente (`i18n/anchors.ts`) e navega.
- **Acessibilidade:** `aria-haspopup`, `aria-expanded`, `role="menu"`/`menuitem`, fecha com ESC e
  com clique fora, itens saem do tab order quando fechado.

### `sections/ContactSection.astro`

Seção de contato: mapa, dados institucionais e formulário. É o único ponto de conversão do site.

- **Anatomia:** mapa do Brasil com marcador → dados (endereço, e-mail, telefone, horário) →
  formulário → canais alternativos (WhatsApp, e-mail).
- **Props:** nenhuma.
- **Campos:** `nome`, `email`, `telefone`, `estado`, `perfil` (select), `interesse` (select),
  `mensagem` + honeypot `company` (oculto, `tabindex="-1"`).
- **Estados do formulário:** `data-state="idle" | "success"` · `aria-busy` durante o envio · botão
  desabilitado com spinner · caixa de erro com `role="alert"` · overlay de sucesso com
  `aria-live="polite"`.
- **Integração:** POST para `https://api.web3forms.com/submit` com `access_key` vinda de
  `PUBLIC_WEB3FORMS_KEY`. Ver `deploy.md`.
- **Responsivo:** Camada 1 + bloco de mapa exclusivo do mobile (`md:hidden`).
- **Acessibilidade:** labels associados, resumo de privacidade como `aria-describedby` do
  formulário, foco movido para o aviso em caso de erro.
- **i18n:** strings que o JS do cliente precisa (rótulos de envio) chegam por `data-*` no markup —
  nunca via `t()` dentro de `<script>`.

### `pages/HomePage.astro`

Composição da home. Recebe o locale do contexto e monta hero, serviços, sobre, princípios e
`ContactSection`. Também declara o `structuredData` (`LocalBusiness`) passado ao `BaseLayout`.

- **Props:** nenhuma — o locale vem de `Astro.currentLocale` via `useTranslation`.
- **Observação:** é um arquivo grande (≈1.300 linhas). Ver dívidas conhecidas.

### `layouts/BaseLayout.astro`

Não é um componente de UI, mas é o contrato de toda página.

- **Props:** `title` (obrigatório) · `description` · `socialImage` + `socialImageAlt` /
  `Width` / `Height` · `canonical` · `alternates` · `noindex` · `structuredData`.
- **Responsabilidades:** `<head>` completo (meta, canonical, hreflang + `x-default`, Open Graph,
  Twitter Cards, JSON-LD), Header, Footer, sugestão de idioma e o helper
  `window.__smoothScrollTo`.
- **Regra:** toda página nova passa por aqui. Páginas que não devem ser indexadas usam
  `noindex={true}`.

---

## 5. Dívidas conhecidas

Registradas para não serem redescobertas a cada ciclo. Nenhuma é bloqueante hoje; todas escalam
mal quando o site crescer.

| Dívida | Impacto | Quando tratar |
|---|---|---|
| `HomePage.astro` com ≈1.300 linhas concentra hero, serviços, sobre e princípios | Contraria a estrutura de seções que este documento propõe; dificulta edição isolada e revisão de diff | Ao criar a segunda página real (Fase 4 do plano de SEO) |
| `inlineStylesheets: "always"` embute todo o CSS em cada HTML (~164 KB por página) | Ótimo para uma página; com muitas páginas o CSS deixa de ser cacheável entre elas | Antes de publicar o primeiro lote de páginas novas |
| Nenhum primitivo de UI extraído | Estilos de botão/input repetidos inline entre seções | Quando a terceira repetição aparecer |
| Sem CI de qualidade (Lighthouse, axe, lint) | Toda verificação depende de disciplina manual | Lacuna aberta, sem prioridade definida |

## 6. Componentes previstos

Ainda não existem. Só devem ser criados quando houver uso real:

`SectionIntro` · `ServiceCard` · `StatCard` · `FeatureCard` · `PostCard` · `Breadcrumb` ·
`Button` · `Input` · `Textarea`

**`Testimonial` foi removido desta lista.** Os depoimentos do site não eram reais e foram
eliminados pela ação extraordinária H0. Qualquer depoimento futuro exige autorização registrada
antes de existir componente — ver `registro-operacional.md`.
