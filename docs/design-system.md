# Design System — Site Safras & Negócios

Documento vivo. **Fonte documental** dos tokens visuais, do padrão responsivo e do catálogo de
componentes.

> A fonte **executável** dos tokens é `src/styles/tokens.css`. Este documento descreve; o CSS
> decide. Em caso de divergência entre os dois, o CSS está certo e este arquivo deve ser corrigido
> — nunca o contrário.

Última atualização: 2026-09-10.

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
| `--color-brand-dark` | `#013d01` | `bg-brand-dark` | Verde escuro — hover, headings fortes, painel do hero |
| `--color-brand-tint` | `#9ed69a` | `text-brand-tint` | Verde-claro de apoio sobre o verde escuro — sobretítulo e hover de link no hero |
| `--color-earth` | `#3c3424` | `text-earth` | Accent terra — declarado e **sem uso** nos componentes em 10/09/2026; ver dívidas conhecidas |

O `theme-color` do navegador (`BaseLayout.astro`) acompanha `--color-brand`: `#025c00`.

Fora do `@theme`, `src/styles/global.css` declara **`--site-header-h`** (`64px`; `72px` a partir de
`md`): a altura do header, consumida por `Header.astro` e `HeroSection.astro` para que a barra em
fluxo e a barra fixa tenham a mesma medida. Não gera utility; é lida via `var()`.

Também no `@theme`: **`--font-sans`** (Inter Variable mais a pilha de fallback), que gera a utility
`font-sans` aplicada em `global.css`. `Header.astro` declara custom properties locais — `--header-h`,
`--header-px` e `--logo-h` — para as duas variantes da barra; não são tokens globais.

> **Histórico:** até agosto de 2026 este documento e o `CLAUDE.md` descreviam uma paleta antiga
> (`#1f6b3a` / `#134024` / `#8b5e34`) como se fosse a vigente. Os valores acima foram conferidos
> diretamente contra `tokens.css`. **Resíduo em 10/09/2026:** a paleta antiga ainda aparece fora dos
> tokens — em `src/pages/404.astro` (`#1f6b3a` e `#134024`; página standalone com CSS próprio), no
> brilho do ponto ativo do menu em `Header.astro` (`rgba(31, 107, 58, …)`, que é `#1f6b3a`) e no
> ícone ativo dos cards de serviço em `HomePage.astro` (`#8b5e34`). Ver dívidas conhecidas.

### Tipografia

- **Family única:** Inter Variable, via `@fontsource-variable/inter` — servida localmente, sem CDN
  de terceiros. Fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, …`.
- Hierarquia por **peso e tamanho**, nunca por uma segunda family. O que o código faz em
  10/09/2026:
  - Títulos: pesos **300 a 500** — `font-light` no `h1` da política, `font-medium` no `h1` do hero e
    nos `h2` de seção. Não há `font-bold` nem peso acima de 600 em componente algum.
  - Sobretítulos, rótulos e UI pequena: 500–600 (`font-medium`, `font-semibold`), de 10 a 14 px.
  - Corpo: 400, 16–18 px.
- **Não existe escala tipográfica em token** — `tokens.css` só declara cores e `--font-sans`. Vale a
  escala padrão do Tailwind, e os títulos da home escapam dela com valores arbitrários em px
  (`text-[22px]` a `text-[112px]`); o hero usa `clamp()` por idioma. Escala própria é dívida
  registrada em §5.

### Espaçamento

Escala base 4pt: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px) — é a escala padrão do
Tailwind, sem token próprio. Exceções em uso: `py-[15px]` no CTA do hero e
`pb-[3.6rem] md:pb-[4.5rem] lg:pb-[5.4rem]` no rodapé.

### Motion

- **Scroll reveal:** fade-up (translateY 28px → 0, opacity 0 → 1), 800 ms com
  `cubic-bezier(0.22, 1, 0.36, 1)` e atraso de 200 ms, via Intersection Observer (`HomePage.astro`).
  Os demais reveals da home ficam entre 700 e 1100 ms.
- **Hover em cards:** não há elevação nem sombra. Nos cards de serviço, o hover troca a proporção da
  coluna em 500 ms, escurece topo e base da foto em 400 ms e abre o painel de detalhes animando
  `grid-template-rows` (500 ms, após 120 ms), com o vidro fosco surgindo após 320 ms; nos cards de
  princípios, preenche a altura em 400 ms.
- **Menu mobile:** backdrop em 240 ms, cartão em 320 ms (fade + leve escala) e itens escalonados a
  cada 45 ms via `--i`. Tudo desliga com `prefers-reduced-motion`.
- **Rolagem:** nativa do navegador. A biblioteca `lenis` foi removida na Fase 1; o helper
  `window.__smoothScrollTo` vive em `BaseLayout.astro` e é reusado por Header e Footer.
- **Hero:** entrada escalonada do texto (fade-up de 16 px, 900 ms, atrasos de 60 a 360 ms), selo
  girando em 48 s e carrossel de fotos: uma troca a cada 6 s, fusão de 1,8 s
  (`cubic-bezier(0.4, 0, 0.2, 1)`) com a foto nova por cima da atual, e zoom de 1 → 1,06 em 9 s
  linear. Com `prefers-reduced-motion` o texto e o selo ficam parados e o carrossel nasce pausado;
  se o usuário retomar, as trocas são instantâneas.
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

**Estado em 10/09/2026:** nenhum componente usa a Camada 2. O exemplo acima é ilustrativo — o hero é
um único arquivo (`sections/HeroSection.astro`, Camada 1) e não existe `*Mobile.astro` nem
`*Desktop.astro` no repositório.

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

Exceção em uso: o **header** troca a navegação completa pelo menu hamburger em `lg:` (1024 px), não
em `md:` — entre 768 e 1023 px o site já está em modo hamburger, com o `LanguageSwitcher` inline
dentro do menu. As seções da home e o rodapé usam `md:` como primeira quebra.

### Container & padding (em uso em 10/09/2026)

| Contexto | Max-width | Padding lateral |
|---|---|---|
| Seções da home (serviços, sobre, princípios) | `max-w-[88rem]` | `px-6 md:px-10` |
| Header, rodapé e seção de contato | `max-w-[100rem]` | `px-6 md:px-10` |
| Texto longo (política de privacidade) | `max-w-[46rem]` | `px-6 md:px-10` |
| Full-bleed (hero) | sem max-width | padding próprio do componente |

Não há `max-w-6xl` nem `max-w-prose` no código. Refinar conforme uso real demandar.

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

Componentes que **existem** no código, em 2026-09-10. Cada entrada documenta anatomia, props,
estados, comportamento responsivo e acessibilidade.

Fora do catálogo, porque não são componentes: as páginas standalone `pages/404.astro` e
`pages/manutencao.astro` (CSS próprio, sem `BaseLayout`), o skip-link e o banner de sugestão de
idioma, os dois em `BaseLayout.astro`.

Não há biblioteca de primitivos (`Button`, `Input`, `Badge`…): os estilos são aplicados
diretamente com utilities Tailwind nos componentes de seção. Extrair primitivos só se justifica
quando a repetição doer — o que ainda não aconteceu. Ver "dívidas conhecidas" no fim.

---

### `layout/Header.astro`

Barra superior do site, com duas variantes que coexistem no mesmo arquivo.

- **Anatomia:** logo → navegação por anchors (`data/navigation.ts`) → CTA de contato →
  `LanguageSwitcher` → botão de menu (abaixo de `lg:`).
- **Props:** nenhuma. Deriva tudo de `Astro.url.pathname` e do locale corrente.
- **Variantes:** as duas têm a mesma aparência — fundo branco, logo colorida, CTA verde — e a
  mesma altura, lida de `--site-header-h` (`global.css`: 64 px, 72 px a partir de `md:`). O hero
  desconta essa mesma variável da viewport. A logo usa `branding/safras-logo-completo-escuro.svg`
  (o verde da marca, `#025c00`); o SVG original, de verde mais claro, segue no selo do hero.
  - `.site-header--hero` (`data-header-hero`) — em fluxo, abre a home acima do hero. Renderizada
    **apenas na home** de cada idioma. Até setembro de 2026 era transparente sobre uma foto de
    fundo, com logo branca.
  - `.site-header--sticky` (`data-header-sticky`) — barra fixa que entra de cima na rolagem,
    quando a barra em fluxo sai da tela. Recebe `data-scroll-aware="true"` na home.
- **Estados:** oculta ↔ visível (rolagem) · link `[data-active]` via scroll-spy · menu mobile
  aberto/fechado (`aria-expanded`; o botão alterna o ícone barras/X por esse atributo).
- **Menu mobile (`#mobile-menu`):** camada fixa abaixo do header, com backdrop que escurece e
  desfoca a página e um cartão de vidro fosco (filete da marca no topo) com os links — ponto verde
  marca a seção ativa —, o CTA (só abaixo de `sm:`) e o `LanguageSwitcher` inline. No tablet o
  cartão encosta à direita com 24 rem. Fecha ao clicar fora do cartão, com Esc (foco volta ao
  hambúrguer), ao clicar num link e ao chegar em `lg:`; enquanto aberto, trava a rolagem
  (`overflow: hidden` no `<html>`).
- **Responsivo:** Camada 1 + JS de rolagem — navegação vira menu hamburger abaixo de `lg:`, e a
  transição de estados das barras é controlada por JS a partir de `scroll` e `resize`; o único
  `matchMedia` fecha o menu mobile ao chegar em `lg:`.
- **Acessibilidade:** `aria-label` na variante em fluxo e nos dois `<nav>`; a variante fixa não tem
  `aria-label` próprio e fica `aria-hidden` e `inert` enquanto oculta na home. `aria-expanded` no
  botão de menu, navegação por teclado preservada, foco visível.

### `layout/Footer.astro`

Rodapé institucional sobre a foto aérea da lavoura (`about/lavoura-aerea.png`): a foto entra em
fade curto a partir do branco da seção anterior e anoitece em gradiente para o verde da marca e um
preto quente na base, onde ficam as colunas.

- **Anatomia:** logo branca centralizada (`branding/safras-logo-branco.png`, sobre uma sombra
  radial, com a tagline em `brand-tint`) → linha que desaparece nas pontas → três colunas
  (serviços · navegação · contato, com o Instagram como item da lista de contato) → linha inferior
  (copyright, privacidade, cookies, "voltar ao topo") → linha de créditos.
- **Props:** nenhuma.
- **Detalhe de conteúdo:** os links da coluna "Serviços" reusam as chaves do dicionário dos cards
  da home (`services.cards.*.title`), o que impede o rodapé de divergir da seção de serviços.
- **Estados:** hover/focus nos links; botão de topo reusa `window.__smoothScrollTo`.
- **Responsivo:** Camada 1 — no mobile ficam duas colunas lado a lado (navegação e contato); a
  coluna de serviços aparece a partir de `md:` (três colunas). Logo e tagline aparecem em todos os
  tamanhos.
- **Acessibilidade:** links externos com `rel="noopener noreferrer"`, ícones `aria-hidden`, nomes
  acessíveis em todos os links.

### `layout/LanguageSwitcher.astro`

Seletor de idioma. O arquivo já carrega documentação inline detalhada — mantê-la sincronizada.

- **Props:** `mode?: "dropdown" | "inline"` (default `"dropdown"`).
  - `dropdown` — trigger compacto (bandeira + código + chevron), usado no header a partir de `lg:`.
  - `inline` — três chips horizontais, usado dentro do menu hamburger (abaixo de `lg:`).
- **Estados:** aberto/fechado · opção ativa (`aria-current`) · hover/focus.
- **Comportamento:** ao escolher um idioma, grava o cookie `safras_locale` (1 ano), traduz o hash
  atual para o anchor equivalente (`i18n/anchors.ts`) e navega.
- **Acessibilidade:** `aria-haspopup`, `aria-expanded`, `role="menu"`/`menuitem`, fecha com ESC e
  com clique fora, itens saem do tab order quando fechado.

### `sections/HeroSection.astro`

Hero da home nos três idiomas, versão "Painel" (setembro de 2026). Painel verde com o texto à
esquerda e a foto à direita; no mobile, a foto vai para baixo.

- **Anatomia:** luz radial → ramo de café em marca d'água (`assets/hero/ramo-cafe.png`, PNG com
  transparência a 7 %) → sobretítulo → `h1` (a única da página) → parágrafo → CTA principal
  (`#contato`, mesmo efeito radial do header) e link secundário (`#servicos`, só desktop) →
  carrossel de fotos (canto superior esquerdo arredondado, sombra leve na junção) → selo giratório
  na junção verde/foto.
- **Carrossel (`[data-hero-carousel]`):** seis fotos em `assets/hero/` — `hero-prova-de-xicara.jpg`
  (a primeira, LCP da página, `eager` + `fetchpriority="high"`), `hero-peneira-graos.jpg`,
  `hero-graos-e-xicara.jpg`, `hero-torra.jpg`, `hero-prova-colheres.jpg` e
  `hero-fachada-placa.jpg`. As cinco seguintes nascem `hidden` e o script as libera uma troca
  antes de aparecer, já decodificadas (`img.decode()`), então não entram no caminho do LCP. Fusão
  por cima da foto atual (a anterior fica opaca atrás até a troca acabar, sem queda de brilho).
  Pausa fora da viewport, com a aba oculta e pelo botão de pausar/retomar no canto da foto
  (`aria-label` traduzido por `data-*`). Slides inativos ficam `aria-hidden`. Foi incluída, por
  decisão do proprietário, a foto da placa da fachada, que mostra a representação comercial de
  outra marca.
- **Selo:** SVG montado no front-matter — texto correndo num anel (`textPath` com `textLength`,
  para fechar o círculo em qualquer idioma) e o símbolo da marca lido de
  `safras-logo-completo-escuro.svg?raw` (verde da marca, como no header), sem duplicar caminhos. Decorativo (`aria-hidden`). O invólucro
  só posiciona (`translate`); quem gira é o SVG interno — animar a rotação no mesmo `transform`
  do posicionamento faz o navegador interpolar por matriz, e o selo desliza em vez de girar.
- **Props:** nenhuma. Strings em `dict.hero.*`; anchors por `getAnchor`/`localizeAnchor`.
- **Responsivo:** Camada 1. Coluna de texto 58 % em `md:`, 55 % a partir de `lg:`; o tamanho do
  título é calibrado por idioma (`:lang(en)`, `:lang(es)`) para a primeira linha caber inteira —
  a Inter servida pelo site não tem eixo óptico e é um pouco mais larga que a do desenho.
  Sobretítulo e texto do selo têm versão curta no mobile.
- **Acessibilidade:** foco visível em branco sobre o verde, por regra própria do componente (ver
  dívida sobre a regra global de foco), `alt` descritivo em cada foto, ramo e selo ocultos de leitor
  de tela, botão de pausa do carrossel (WCAG 2.2.2), animações desligadas com
  `prefers-reduced-motion`.

### `sections/ContactSection.astro`

Seção de contato: dados institucionais e formulário. É o único ponto de conversão do site.

- **Anatomia:** rótulo da seção e cartão de dados (e-mail, telefone, endereço, horário) à
  esquerda → formulário à direita. O mapa do Brasil com marcador da cidade foi removido em
  10/09/2026. Os canais alternativos (WhatsApp, e-mail) só aparecem na caixa de erro, quando um
  envio falha.
- **Props:** nenhuma.
- **Campos:** `nome`, `email`, `telefone`, `estado`, `perfil` (select), `interesse` (select),
  `mensagem` + honeypot `company` (oculto, `tabindex="-1"`).
- **Estados do formulário:** `data-state="idle" | "submitting" | "success" | "error"` · `aria-busy` durante o envio · botão
  desabilitado com spinner · caixa de erro com `role="alert"` · overlay de sucesso com
  `aria-live="polite"`.
- **Integração:** POST para `https://api.web3forms.com/submit` com `access_key` vinda de
  `PUBLIC_WEB3FORMS_KEY`. Ver `deploy.md`.
- **Responsivo:** Camada 1 — uma coluna; duas a partir de `lg:`.
- **Acessibilidade:** labels associados, resumo de privacidade como `aria-describedby` do
  formulário, foco movido para o aviso em caso de erro.
- **i18n:** strings que o JS do cliente precisa (rótulos de envio) chegam por `data-*` no markup —
  nunca via `t()` dentro de `<script>`.

### `pages/HomePage.astro`

Composição da home. Recebe o locale do contexto e monta `HeroSection`, serviços, sobre,
princípios e `ContactSection`. Também declara o `structuredData` (`LocalBusiness`) passado ao
`BaseLayout`.

- **Props:** nenhuma — o locale vem de `Astro.currentLocale` via `useTranslation`.
- **Cards de serviço:** `[data-service-card]` com `data-active` (hover, foco e, até o `lg:`,
  rolagem — `data-scroll-active-card="md"`). Empilhados em largura total até o `md:`; acordeão
  3:1:1 a partir do `lg:` (470 px de altura). Número e título ficam no topo, ao lado do ícone
  (embaixo dele só no `lg:`, onde o card compacto tem 180 px); a foto fica livre no meio; a
  descrição e as fichas das frentes (`services.cards.*.strips`) abrem num painel de vidro escuro na
  base só no card ativo — fichas numa linha rolável até o `lg:` e ao lado da descrição no `xl:`. O
  card compacto mostra só ícone, número e título sobre o véu claro. Fotos em `assets/services/` —
  `mercado-negociacao.jpg` e `analise-qualidade.jpg` (10/09/2026) e `suporte-logistico.png`.
- **Observação:** é um arquivo grande (≈1.100 linhas; o hero saiu para componente próprio em
  setembro de 2026). Ver dívidas conhecidas.

### `layout/CookieConsent.astro`

Banner de consentimento e painel de preferências, no rodapé da viewport. Renderizado pelo
`BaseLayout` nas seis páginas reais — `404.astro` e `manutencao.astro` são standalone e não gravam
cookie.

- **Props:** nenhuma.
- **Onde está a lógica:** **não está aqui.** O estado, o cookie e o sinal do Consent Mode vivem no
  bootstrap inline do `<head>` do `BaseLayout`, que precisa rodar antes de qualquer tag. Este
  componente é só a interface: lê `window.__consent` e chama `set()`.
- **Falha segura:** se o bootstrap não tiver rodado, o banner não aparece e nada é liberado.
- **Aceitar e Recusar têm o mesmo tamanho, peso e contraste.** Não é preferência estética: recusar
  precisa ser tão fácil quanto aceitar. Verificado por teste automatizado, não por inspeção visual.
- **Preferências** expande no próprio banner. Sem modal e sem armadilha de foco — hoje há uma única
  chave, e um modal seria complexidade sem contrapartida.
- **`role="dialog"` com `aria-modal="false"`:** não bloqueia a navegação nem rouba o foco.
- **Camada:** `z-[90]`, acima do `z-[80]` da sugestão de idioma. Um fica embaixo, o outro em cima —
  conferido no mobile, sem sobreposição.
- **Reabertura:** qualquer elemento com `data-consent-open` reabre o painel. Hoje, o botão do rodapé
  (é `<button>`, porque abre uma interface, não navega).

### `layout/Analytics.astro`

- **Papel:** carrega o `gtag.js` do GA4 **só** depois de consentimento, assinando
  `window.__consent.onChange()` e usando `requestIdleCallback`. Sem `PUBLIC_GA4_MEASUREMENT_ID`
  não emite nada — a variável está preenchida no `cloudbuild.yaml` desde 20/08/2026. No build local
  ela costuma estar vazia (`.env`): então nem este componente nem `ConversionEvents` são servidos, e
  a política renderiza a versão sem medição.
- **Sem UI.** Não tem estados visuais nem breakpoints; está no catálogo porque toda página o inclui
  via `BaseLayout` e porque a política de privacidade descreve exatamente o que ele faz.
- **Privacidade:** `allow_google_signals` e `allow_ad_personalization_signals` desligados;
  `cookie_expires` de 182 dias; nenhum dado pessoal em parâmetro.

### `layout/ConversionEvents.astro`

- **Papel:** ouvinte delegado de cliques em elementos marcados com `data-contato` (nome do evento)
  e `data-origem` (seção). Emite `contato_whatsapp`, `contato_telefone` e `contato_email`;
  `formulario_envio` e `formulario_erro` saem do próprio script do formulário.
- **Sem UI.** Só é servido quando a medição está ativa. Marcar um link novo é adicionar os dois
  atributos — o contrato em `src/data/analytics.ts` fecha os vocabulários aceitos.
- **Verificação:** `pnpm verify:medicao` dispara os cinco eventos em pt-BR e um `contato_email` em
  `/en` para conferir o parâmetro `idioma`; em `/es` a suíte confere apresentação e consentimento, não
  eventos.

### `pages/PrivacyPage.astro`

Política de privacidade, fonte única para os três idiomas. Primeira página do site que usa
`BaseLayout` **sem ser a home**.

- **Props:** nenhuma — o locale vem de `Astro.currentLocale` via `useTranslation`.
- **Conteúdo:** 100% do dicionário (`privacy.*`), incluindo a lista de seções. Nenhum texto
  jurídico no componente.
- **Medida de leitura:** `max-w-[46rem]`, mais estreita que o `max-w-[88rem]` das seções da home.
  Texto corrido longo pede linha curta.
- **Atenção ao header:** fora da home o header é `position: fixed` e opaco (64 px no mobile, 72 px
  a partir de `md`, lidos de `--site-header-h`). A página abre com `pt-28 md:pt-36` para dar folga. **Toda página nova fora da
  home precisa dessa folga** — o `BaseLayout` não a fornece.
- **Rotas:** `/privacidade` · `/en/privacy` · `/es/privacidad`, registradas em `src/i18n/routes.ts`.

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
| `HomePage.astro` com ≈1.060 linhas concentra serviços, sobre e princípios (o hero já é componente) | Contraria a estrutura de seções que este documento propõe; dificulta edição isolada e revisão de diff | Ao criar a segunda página real (Fase 4 do plano de SEO) |
| ~~Assets órfãos em `src/assets/hero/` (`prova-de-xicara.jpg`, `cafe-cereja-mao.png`, ≈1,9 MB)~~ — **resolvida em 10/09/2026**: a varredura completa achou seis arquivos sem referência (os dois do hero mais `about/lavoura-cafe-paisagem.png`, `about/lavoura-cafe-sunset.webp`, `about/lavoura-de-cafe.webp` e `branding/safras-logo-ori.png`, ≈5,1 MB no total); todos excluídos com autorização e recuperáveis pelo histórico do Git | — | — |
| `inlineStylesheets: "always"` embute todo o CSS em cada HTML (≈76 KB na home e ≈63 KB na política, medidos no build de 10/09/2026) | Ótimo para uma página; com muitas páginas o CSS deixa de ser cacheável entre elas | Antes de publicar o primeiro lote de páginas novas |
| Paleta antiga residual fora dos tokens — `404.astro` (`#1f6b3a`, `#134024`), brilho do menu em `Header.astro` (`rgba(31, 107, 58, …)`), ícone ativo dos cards em `HomePage.astro` (`#8b5e34`) — e `--color-earth` declarado sem uso | Cor fora do token não acompanha mudança de marca | Ao tocar em cada arquivo; o 404 quando deixar de ser standalone |
| Sem escala tipográfica em token; títulos da home com tamanhos arbitrários em px | Cada título novo escolhe um número; nada garante consistência | Ao criar a segunda página real, junto com a extração de `HomePage.astro` |
| Nenhum primitivo de UI extraído | Estilos de botão/input repetidos inline entre seções | Quando a terceira repetição aparecer |
| Sem CI de qualidade (Lighthouse, axe, lint) | Toda verificação depende de disciplina manual | Lacuna aberta, sem prioridade definida |
| A regra global `:focus-visible` (`global.css`) fica fora de `@layer`, então vence qualquer utility `focus-visible:outline-*` do Tailwind, que fica sem efeito | Cor ou offset de foco declarados por utility não se aplicam (hoje inofensivo: as utilities existentes repetem a cor global). Componente que precise de anel diferente usa regra própria, como o hero | Ao revisar o foco de forma global; mover a regra para `@layer base` exige antes tratar os `focus:outline-none` da home |

## 6. Componentes previstos

Ainda não existem. Só devem ser criados quando houver uso real:

`SectionIntro` · `ServiceCard` · `StatCard` · `FeatureCard` · `PostCard` · `Breadcrumb` ·
`Button` · `Input` · `Textarea`

**`Testimonial` foi removido desta lista.** Os depoimentos do site não eram reais e foram
eliminados pela ação extraordinária H0. Qualquer depoimento futuro exige autorização registrada
antes de existir componente — ver `registro-operacional.md`.
