# AGENTS.md — Contrato operacional dos agentes

> **Este arquivo é espelhado.** `AGENTS.md` e `CLAUDE.md` têm conteúdo idêntico, diferindo apenas
> na primeira linha. Claude Code lê `CLAUDE.md`; os demais agentes leem `AGENTS.md`.
> **Editar um obriga a editar o outro, na mesma entrega.** Verificação:
> `diff <(tail -n +2 AGENTS.md) <(tail -n +2 CLAUDE.md)` deve retornar vazio.

---

## 1. O projeto

Site institucional da **Safras & Negócios**, corretora de café brasileira sediada em São Sebastião
do Paraíso/MG. Em produção em `safrasenegocios.com.br`.

Objetivo da comunicação: transmitir **confiança, tradição, clareza e praticidade** para produtores,
compradores e parceiros. Público com alto tráfego mobile.

Idioma de trabalho: **pt-BR**.

**O repositório é público** (`Tiaguinho003/Site-safras`). Tudo que for escrito aqui — código,
comentário, documentação, mensagem de commit — é publicado. Ver §8.

---

## 2. Mapa da documentação

Cada documento responde a uma pergunta. Antes de escrever, saiba qual você precisa.

| Documento | Responde |
|---|---|
| `AGENTS.md` / `CLAUDE.md` | Como trabalhar neste repositório |
| `docs/plano-seo-programatico.md` | **Para onde vamos** — fases, gates, estado do programa |
| `docs/registro-operacional.md` | **O que já decidimos e fizemos** — decisões, decisões em aberto, histórico, riscos |
| `docs/arquitetura.md` | Por que a stack é essa — decisões arquiteturais e rationale |
| `docs/design-system.md` | Tokens, padrão responsivo, catálogo de componentes, dívidas |
| `docs/deploy.md` | Como o site vai do commit à produção |
| `docs/i18n-glossary.md` | Como traduzir — decisões locked de PT/EN/ES |
| `docs/plano-ecossistema-comunicacao.md` | Canais, atribuição e funil de leads |

**Fonte da verdade viva:** o estado atual do programa está na tabela §1 do
`plano-seo-programatico.md` — fase ativa, estado geral, última revisão. Não duplicar esse estado
aqui; ele muda toda entrega.

### Ordem de leitura antes de implementar

1. `plano-seo-programatico.md` §1 — qual é a fase ativa e qual o estado dela.
2. `registro-operacional.md` — há decisão em aberto que bloqueia o que vou fazer?
3. O documento específico do que vou tocar (design-system, deploy, i18n-glossary).

---

## 3. Fluxo obrigatório

```
ler estado  →  checar bloqueios  →  checar autorização  →  implementar  →  validar  →  registrar
```

1. **Ler o estado.** Fase ativa e o que o gate dela exige.
2. **Checar bloqueios.** Se o trabalho depende de uma decisão em aberto, **pare e pergunte**. Não
   escolha por conta própria e não invente um valor "provisório".
3. **Checar autorização.** Ver §5. Na dúvida, é porque precisa.
4. **Implementar.** Escopo pedido, nem mais nem menos.
5. **Validar.** Checklist da §9.
6. **Registrar.** Toda entrega relevante vira uma linha no histórico do `registro-operacional.md`.

Uma fase por vez. Só se aprova um gate com evidência registrada, nunca por impressão.

---

## 4. Regras de parada

Situações em que a resposta certa é **parar e relatar**, não decidir sozinho:

- **Duas fontes discordam** sobre o mesmo fato. Relate a divergência antes de qualquer alteração
  que dependa dela.
- **Dado não verificável** — número, credencial, depoimento, data, alegação comercial sem origem
  registrada. Nunca publicar. Nunca estimar.
- **Ação destrutiva** — `rm`, force-push, reescrita de histórico, exclusão de recurso em nuvem.
- **Custo novo** — qualquer mensalidade ou recurso pago. O teto atual é **R$ 0** em novas
  mensalidades.
- **Dado pessoal** prestes a ir para analytics, URL, log ou documento público.
- **Projeto GCP diferente de `site-safras`.**

Parar e perguntar não é falha. Publicar algo errado, sim.

---

## 5. O que exige autorização explícita

Caso a caso, na conversa. Aprovação anterior não vale para a próxima vez.

- commit · push · abrir PR · merge · deploy
- exclusão permanente de qualquer coisa
- criar estrutura nova (pasta, doc, skill, rota)
- adicionar biblioteca nova — justificar na conversa antes
- qualquer comando `gcloud` fora de `site-safras`
- ativar o modo manutenção

**Nunca push direto em `main`.** Sempre branch + PR.

---

## 6. Stack e comandos

| Camada | Valor |
|---|---|
| Framework | Astro 6 (6.1.8), TypeScript |
| CSS | Tailwind v4 — tokens via `@theme` em `src/styles/tokens.css`, **sem `tailwind.config.mjs`** |
| Pacotes | pnpm |
| Node | 22 LTS (`.nvmrc`) |
| Hospedagem | Firebase Hosting, projeto GCP `site-safras`, região `southamerica-east1` |
| CI/CD | Cloud Build no push para `main`. **Não há CI de qualidade** — nem lint, nem teste, nem Lighthouse |

```bash
pnpm dev        # http://localhost:4321
pnpm build      # produção em dist/
pnpm preview    # serve o build
pnpm check      # astro check
```

> **Não acumular servidor de desenvolvimento.** O Astro tem HMR — não reinicie a cada validação.
> Se precisar subir outro, mate o anterior primeiro.

### Tokens da marca

Verde `--color-brand` **`#025c00`** · escuro `--color-brand-dark` **`#013d01`** · terra
`--color-earth` **`#3c3424`** · texto `--color-ink` `#141311` · secundário `--color-ink-muted`
`#5a564f` · fundo `--color-paper` `#ffffff` · alt `#f6f6f4` · linha `#e3e3df`.

Tipografia: **Inter apenas**. Hierarquia por peso e tamanho, jamais por segunda family.

`src/styles/tokens.css` é a fonte da verdade. Divergiu da documentação? O CSS está certo.

---

## 7. Convenções

### Commits e branches

Conventional Commits — `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`.
**A mensagem ocupa uma única linha.** Sem corpo, sem rodapé.

Branches: `feat/<slug>` · `fix/<slug>` · `chore/<slug>` · `docs/<slug>` · `codex/<slug>`.

### i18n

PT-BR é source of truth. Fluxo ao adicionar qualquer string:

1. escrever em `src/i18n/pt-br.ts`;
2. consultar `docs/i18n-glossary.md` — o termo já tem decisão? Reusar;
3. traduzir em `en.ts` e `es.ts` seguindo o glossário;
4. termo novo vira entrada no glossário, com rationale;
5. usar via `const { t } = useTranslation(Astro); t("chave")`.

Regras críticas:

- ❌ **Nunca** `t<Tipo>("chave")` ou `tArray<Tipo>(...)` **dentro de JSX** — o esbuild lê `<Tipo>`
  como tag JSX e quebra o build no Astro v6. Use asserção: `(tArray("chave") as string[])`.
  Em front-matter, generics funcionam normalmente.
- ❌ Nunca string traduzível hardcoded em componente.
- ❌ Não traduzir: nome da marca, nomes de cidades, nomes de pessoas.
- ✅ String que o JS do cliente precisa vai por `data-*` no markup — nunca `t()` dentro de
  `<script>`.
- ✅ Anchors traduzidos: `localizeAnchor("contato")` para href, `getAnchor("contato", locale)`
  para id.

Decisões locked: fazenda→estate/finca · produtor→grower/productor · corretora→brokerage/corretaje ·
análise sensorial→cupping/catación · embarque→shipping/embarque · seriedade→integrity/seriedad ·
safra→harvest/cosecha.

### `(mobile)` / `(desktop)`

O usuário marca o escopo do dispositivo na instrução.

| Tag | Escopo |
|---|---|
| `(mobile)` | Só o breakpoint base ou `*Mobile.astro`. Não tocar em `md:`/`lg:`/`xl:`. |
| `(desktop)` | Só variants `md:` em diante ou `*Desktop.astro`. Não tocar no estilo base. |
| sem tag | Mobile-first, vale para os dois. Em dúvida sobre escopo, perguntar. |

Detalhe completo em `docs/design-system.md` §1 e §2.

---

## 8. Boundaries permanentes

- 🔒 **`/qr` é imutável.** A URL está impressa em QR no cartão físico. Nunca remover nem alterar o
  caminho.
- 🔒 **Repositório público.** Nunca versionar: chave, credencial, endpoint privado, CNPJ, razão
  social, nome de sócio, e-mail interno, dado de cliente. Quando um registro depender desses dados,
  referenciar "registro privado da empresa".
- 🔒 **Sem PII em analytics**, URL, log ou planilha ampla. Só categorias previstas.
- 🔒 **Depoimento, caso, número ou credencial** só com autorização registrada. Já houve remoção de
  depoimentos não reais neste projeto — não repetir o erro.
- 🔒 **Não confundir** a idade da empresa com a experiência pessoal de qualquer pessoa. Formulação
  segura no plano.
- 🔒 **Só o projeto GCP `site-safras`.** Sempre `--project=site-safras`. E `gcloud builds` exige
  também `--region=southamerica-east1`, ou retorna vazio.
- 🔒 **Não arquitetar automações, endpoints ou integrações** antes de serem pedidas.
- 🔒 **Conteúdo sobre mercado futuro, CPR, hedge ou preço** é educativo. Nunca promessa de
  rentabilidade, garantia de preço ou recomendação financeira individual.

---

## 9. Checklist de entrega

Antes de dizer que terminou:

- [ ] `pnpm check` sem erro.
- [ ] `pnpm build` conclui.
- [ ] Conferência visual nos **três idiomas**, mobile e desktop.
- [ ] Sem overflow horizontal; uma única `<h1>` por página.
- [ ] Foco visível, navegação por teclado, `prefers-reduced-motion` respeitado.
- [ ] Nenhum erro de console.
- [ ] Nenhuma string traduzível hardcoded.
- [ ] Nenhum dado sensível novo versionado.
- [ ] Se tocou documentação espelhada: `diff` entre `AGENTS.md` e `CLAUDE.md` vazio.
- [ ] Entrega registrada no histórico do `registro-operacional.md`.

Relatar o resultado com honestidade. Teste que falhou, se diz que falhou. Etapa pulada, se diz que
foi pulada. Nada de "pronto" com pendência escondida.
