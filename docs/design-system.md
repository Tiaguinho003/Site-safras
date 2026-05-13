# Design System — Site Safras & Negócios

Documento vivo. Convenções de UI, padrão responsivo e (futuro) catálogo de componentes.

Tokens visuais (paleta, tipografia, espaçamento, motion) vivem em [`arquitetura.md §5`](./arquitetura.md#5-design-system-baseline) enquanto o catálogo aqui não maturar. Quando os componentes forem catalogados, os tokens migram pra cá.

Última atualização: 2026-05-12.

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

A construir conforme componentes forem extraídos/estabilizados. Cada entrada documentará:

- **Anatomia** (estrutura HTML)
- **Props / variants**
- **Estados** (default, hover, focus, disabled, loading, erro)
- **Comportamento responsivo** (Camada 1, 2 ou 3 — link pra §1)
- **Acessibilidade** (roles, labels, navegação por teclado)
- **Exemplo de uso**

Componentes previstos em arquitetura, ainda não catalogados:

`Button` · `Link` · `Badge` · `Input` · `Textarea` · `Hero` · `SectionIntro` · `ServiceCard` · `StatCard` · `FeatureCard` · `Testimonial` · `NewsCard` · `PostCard` · `ContactForm` · `Header` · `Footer` · `Breadcrumb`
