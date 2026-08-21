# Plano do Ecossistema de Comunicação — Safras & Negócios

> Documento operacional vivo. Trilha paralela ao
> [`plano-seo-programatico.md`](./plano-seo-programatico.md), com o mesmo modelo de estados e
> gates.

## 1. Controle do documento

| Campo | Valor |
|---|---|
| Criado em | 20/08/2026 |
| Versão | 1.0 |
| Estado | NÃO INICIADA — **bloqueada** pela Fase 2 do plano de SEO |
| Origem | Auditoria externa de 20/08/2026 (§15 do plano de SEO) |
| Registro de decisões | [`registro-operacional.md`](./registro-operacional.md) |

---

## 2. Objetivo

Fazer com que os canais da empresa — site, WhatsApp, rede social, perfil comercial, telefone,
e-mail e o QR do cartão físico — funcionem como **um sistema medido**, e não como pontos soltos.

Hoje eles existem, mas são cegos: um contato que chega por WhatsApp é indistinguível de um que
chegou pela busca orgânica. Sem origem, não há como saber o que funciona, e portanto não há como
decidir onde investir.

O resultado esperado não é "mais canais". É **saber de onde vem cada contato** e quanto cada canal
custa e devolve.

---

## 3. Por que é uma trilha separada

A Fase 2 do plano de SEO cobre mensuração e presença oficial. Esta trilha cobre a camada de cima:
a costura entre canais, o padrão de atribuição e o funil de leads.

Separar evita dois problemas: inchar a Fase 2 a ponto de ela nunca fechar, e criar duas fontes
concorrentes de verdade sobre eventos e conversões.

**Dependência dura:** nada aqui começa antes de a Fase 2 estar EM ANDAMENTO com analytics e
consentimento instalados. Instrumentar canais sem ter onde registrar o dado é retrabalho.

---

## 4. Pré-condições

| Pré-condição | Origem | Estado |
|---|---|---|
| Página completa de privacidade publicada | Decisão de 21/07/2026 | Pendente |
| Consentimento de cookies implementado | Regra permanente de privacidade | Pendente |
| Analytics instalado com consentimento | Fase 2 | Pendente |
| Entidade pública definida | Cliente, 20/08/2026 | **Resolvida** |
| Telefone oficial confirmado | Cliente, 20/08/2026 | **Resolvida** — publicado no site via PR #24 |
| CSP do `firebase.json` atualizada para o domínio de analytics | [`deploy.md §5`](./deploy.md) | Pendente |

As duas pré-condições que bloqueavam o perfil comercial e a padronização de NAP **caíram em
20/08/2026**: o cliente confirmou a entidade única e oficial e o telefone único para ligação e
WhatsApp. Detalhe em [`registro-operacional.md`](./registro-operacional.md).

Duas consequências para esta trilha:

1. **Reivindicação do perfil comercial está liberada** — a entidade não é mais ambígua.
2. **Padronização de NAP virou tarefa concreta**: o número oficial precisa substituir os três
   números divergentes que circulam em diretórios externos. É trabalho fora do repositório e
   depende do cliente.

O que segue bloqueando a trilha é a Fase 2 do plano de SEO — privacidade, consentimento e
mensuração —, não mais dados da empresa.

---

## 5. Inventário de canais

| Canal | Situação hoje | Medido? | Dono |
|---|---|---|---|
| Site (3 URLs indexáveis) | Em produção, saudável | Não | Técnico |
| WhatsApp (`wa.me`) | Links no rodapé e na caixa de erro do formulário; também em 404 e manutenção, que não têm medição. **Não há link no header** — o CTA do header aponta para o formulário | Não | Comercial |
| Canal do WhatsApp | A criar. Divulgado pelo site | Não | Marketing |
| Comunidade do WhatsApp | 3 grupos existentes, anteriores ao programa, a serem reunidos em uma comunidade. **Não divulgada publicamente** | Não | Comercial |
| Formulário (Web3Forms) | Funcional; coleta perfil e interesse | Não | Comercial |
| Telefone | Publicado no site | Não | Comercial |
| E-mail público | Publicado no site | Não | Comercial |
| Rede social oficial | Audiência real, link para o site na bio | Não | Marketing |
| Google Business Profile | Existe; acesso disponível | Não | Marketing |
| QR do cartão físico (`/qr`) | **Único canal com UTM** | Parcialmente | Marketing |

O QR é a prova de que o padrão funciona: ele já carrega `utm_source`, `utm_medium` e
`utm_campaign`. Falta estender esse mesmo cuidado ao resto.

---

## 6. Padrão de atribuição

### Convenção de UTM

Sempre minúsculas, sem acento, sem espaço. `utm_source` identifica **onde a pessoa estava**;
`utm_medium`, **o tipo de canal**; `utm_campaign`, **a iniciativa**.

| Canal | `utm_source` | `utm_medium` | `utm_campaign` |
|---|---|---|---|
| Cartão físico (QR) | `qr` | `print` | `cartao` |
| Bio da rede social | `instagram` | `social` | `bio` |
| Publicação da rede social | `instagram` | `social` | `<nome-da-acao>` |
| Perfil comercial (Google) | `gbp` | `local` | `perfil` |
| Assinatura de e-mail | `email` | `assinatura` | `institucional` |
| Canal do WhatsApp | `whatsapp` | `canal` | `<tema-ou-data>` |
| Comunidade do WhatsApp | `whatsapp` | `comunidade` | `<tema-ou-data>` |

**Nunca colocar UTM em link interno do site** — isso reinicia a sessão e destrói a atribuição
original. UTM é só para links que **entram** no site.

### Por que a UTM deixa de ser opcional quando houver conteúdo

Tráfego vindo de WhatsApp e Instagram chega com frequência como **direto**: o aplicativo abre o
link sem informar a origem. Sem UTM, canal, comunidade, Instagram e quem digitou o endereço viram
um único bloco indistinguível no relatório.

Isso torna a UTM o **único** mecanismo capaz de responder "de onde vieram os leitores" — que é a
pergunta que justifica publicar conteúdo no site em vez de só no WhatsApp.

Consequência operacional: um link publicado sem UTM é dado perdido de forma irrecuperável, porque
não há como reconstruir a origem depois. Por isso a decisão de **construir um gerador de links**
junto com a seção de conteúdo, em vez de depender de alguém montar a query string à mão todo dia.

### Saída para WhatsApp

Links `wa.me` saem do site e não carregam UTM de volta. A atribuição do lado de fora é feita pelo
texto pré-preenchido, e a de dentro por evento de clique. Padrão sugerido: manter um identificador
curto de origem no início da mensagem pré-preenchida, para que o atendente saiba de onde veio sem
depender de ferramenta.

---

## 7. Eventos de conversão

Um evento por ação de contato. Nomes estáveis, definidos uma vez.

| Evento | Dispara quando | Parâmetros permitidos |
|---|---|---|
| `contato_whatsapp` | clique em link de WhatsApp **da empresa** | `origem_secao`, `idioma` |
| `contato_telefone` | clique em `tel:` | `origem_secao`, `idioma` |
| `contato_email` | clique em `mailto:` | `origem_secao`, `idioma` |
| `formulario_envio` | envio bem-sucedido | `perfil`, `interesse`, `estado_uf`, `idioma` |
| `formulario_erro` | falha no envio | `motivo`, `idioma` |
| `canal_whatsapp` | clique no convite para o Canal | `origem_secao`, `idioma` |

### Onde os eventos estão ancorados

Implementado em 21/08/2026. `data-contato` carrega o nome do evento; `data-origem`, a seção. Um
ouvinte delegado em `ConversionEvents.astro` lê os dois. Mudar esta tabela é mudar código.

| Elemento | `data-contato` | `data-origem` |
|---|---|---|
| Rodapé — e-mail | `contato_email` | `rodape` |
| Rodapé — telefone | `contato_telefone` | `rodape` |
| Rodapé — WhatsApp | `contato_whatsapp` | `rodape` |
| Rodapé — "desenvolvido por" | **nenhum** | — |
| Rodapé — Instagram | **nenhum** | — |
| Seção de contato — e-mail | `contato_email` | `contato` |
| Seção de contato — telefone | `contato_telefone` | `contato` |
| Caixa de erro — e-mail | `contato_email` | `formulario_erro` |
| Caixa de erro — WhatsApp | `contato_whatsapp` | `formulario_erro` |
| Política de privacidade — e-mail | `contato_email` | `politica` |
| Política de privacidade — telefone | `contato_telefone` | `politica` |

Dois valores existem sem uso hoje, de propósito: `origem_secao: "sucesso"`, reservado para o botão
de WhatsApp da tela de sucesso, e o evento `canal_whatsapp`, reservado para quando o Canal existir.
Nos dois casos basta marcar o elemento — o contrato já os aceita.

O formulário não usa atributo: `formulario_envio` e `formulario_erro` são disparados pelo próprio
script de envio, em `ContactSection.astro`.

### Regras de implementação

Decididas em 20/08/2026, ao analisar a Fase E sobre o código real.

- **Ancorar por atributo explícito**, nunca por padrão de `href`. O rodapé contém um `wa.me` que é
  o contato do desenvolvedor, no crédito "desenvolvido por" — amarrar por "qualquer link `wa.me`"
  contaria cliques nele como lead do cliente.
- **Enviar o `value` do campo, nunca o rótulo visível.** Os rótulos são traduzidos; os `value` são
  slugs estáveis (`produtor`, `comprador`, `corretagem`…). Mandar o rótulo fragmentaria cada
  categoria em três no relatório, uma por idioma. O e-mail do formulário continua usando o rótulo,
  que é o certo para quem lê.
- **404 e manutenção ficam sem medição.** São standalone, não usam o `BaseLayout` e não têm tag nem
  consentimento. Instrumentar exigiria levar as duas coisas para lá, por um dado que não usaríamos.
- **`formulario_erro` não é conversão.** É diagnóstico. Marcá-lo como *key event* no painel sujaria
  a métrica que o cliente lê.
- **`canal_whatsapp` também não é lead.** O administrador de um canal não vê quem segue, então não
  existe contato identificável do outro lado. O evento serve para saber se o site alimenta o canal,
  que é o papel atribuído a ele.
- **A medição subnotifica, por desenho.** Evento só existe se a pessoa aceitou cookies. Quem recusa
  ou usa Global Privacy Control clica e não conta. O número real de contatos é sempre maior que o
  reportado, e isso precisa estar escrito no relatório — sem essa frase, o cliente lê queda onde não
  houve.

### Regra inegociável de privacidade

**Nome, e-mail, telefone e mensagem nunca vão para analytics.** Nem em parâmetro, nem em URL, nem
em identificador. Só categorias já previstas: perfil, interesse, UF, idioma, seção de origem.

Isso não é preferência — é política do provedor de analytics, é a LGPD e é regra permanente do
programa. Um agente que precise "só dessa vez" enviar um dado pessoal deve **parar e perguntar**.

---

## 8. Funil de leads

### Fluxo do usuário no site

Decidido em 21/08/2026, antes de instrumentar.

```
CTA do header ──────────► #contato ──► FORMULÁRIO
                                           │
                                  envio bem-sucedido
                                           │
                                           ▼
                                   tela de sucesso
                           "Quer adiantar? Falar no WhatsApp"
                                           │
                                           ▼
                                 conversa já qualificada

RODAPÉ: telefone · e-mail · Instagram · WhatsApp
        contato institucional, não CTA — e medido

CAIXA DE ERRO: WhatsApp · e-mail
        rede de segurança quando o formulário falha
```

**O formulário é a porta; o rodapé é o endereço na fachada.** Ninguém tira o telefone da fachada
para obrigar o cliente a tocar a campainha.

Papel de cada ponto:

| Ponto | Papel | Por que existe |
|---|---|---|
| CTA do header → formulário | porta principal | Captura perfil, interesse e estado antes do primeiro contato |
| Tela de sucesso → WhatsApp | acelerador | Os dados já foram capturados; quem tem pressa não é perdido, e o atendente recebe a conversa sabendo quem é |
| Rodapé | contato institucional | Telefone e e-mail visíveis são base da consistência de entidade e do SEO local — esconder prejudicaria trabalho que o programa está tentando consertar |
| Caixa de erro | rede de segurança | Se o serviço de formulário falhar, é o único caminho que sobra. Sem ele, formulário quebrado = lead perdido sem ninguém saber |

**"Somente formulário" foi avaliado e descartado como inalcançável:** a regra teria de valer para os
quatro canais do rodapé, e telefone e e-mail não podem sair.

O formulário já coleta `perfil` e `interesse`. Hoje esses campos vão para o e-mail e morrem lá.
São exatamente os dois eixos que permitem separar produtor de comprador e priorizar atendimento.

Modelo aprovado na Fase 2 — e-mail mais planilha privada — mantido, com três camadas separadas:

| Camada | Contém | Quem acessa |
|---|---|---|
| Privada | nome, e-mail, telefone, mensagem | Comercial e cadastro, contas individuais |
| Funil | categorias, status, datas, resultado | Comercial |
| Analytics | evento, categoria, idioma — **sem PII** | Quem analisa |

Campos operacionais, origem agrupada, status, retenção de 12 meses e gatilhos de evolução para CRM
já estão definidos na Fase 2 do plano de SEO. Não duplicar aqui.

---

## 9. Consistência de entidade

A auditoria mostrou que a marca disputa espaço com empresas de nome semelhante e de porte maior.
A defesa é consistência, repetida em todos os canais:

- **um descritor único** — decisão em aberto, hoje o site e a rede social usam descritores
  diferentes;
- **NAP idêntico** em site, perfil comercial e diretórios — depende do telefone oficial;
- **`sameAs`** no `LocalBusiness` ligando os perfis oficiais, para que o buscador saiba que são a
  mesma entidade;
- **descritor geográfico nos títulos**, em vez de disputar o termo genérico da marca;
- correção dos diretórios que publicam telefone divergente.

---

## 10. Checklist

Executar somente após as pré-condições.

- [ ] Definir e travar o descritor único da marca.
- [ ] Padronizar NAP em site, perfil comercial e diretórios.
- [ ] Adicionar `sameAs` ao `LocalBusiness`.
- [ ] Aplicar a convenção de UTM em todos os links de entrada.
- [ ] Substituir o link genérico de mapa pelo link real do perfil comercial.
- [ ] Instrumentar os cinco eventos de conversão.
- [ ] Atualizar a CSP para o domínio de analytics.
- [ ] Criar a planilha de funil com as três camadas.
- [ ] Ligar `perfil` e `interesse` ao funil.
- [ ] Definir painel mensal por canal.
- [ ] Registrar baseline de cada canal antes de qualquer otimização.
- [ ] Testar cada evento em produção sem enviar dado pessoal.

---

## 11. Gate

- [ ] Todo canal de entrada carrega origem identificável.
- [ ] Os cinco eventos disparam corretamente e foram verificados em produção.
- [ ] Nenhum dado pessoal aparece em analytics — verificado, não presumido.
- [ ] O funil registra origem para todo lead recebido.
- [ ] NAP e descritor idênticos em todos os canais oficiais.
- [ ] Baseline por canal preenchido, com data e fonte.
- [ ] Painel mensal em uso e com responsável definido.

---

## 12. Indicadores

| Indicador | Fonte |
|---|---|
| Contatos por canal | Funil |
| Taxa de conversão por canal | Analytics + funil |
| Tempo até o primeiro contato | Funil |
| Distribuição por perfil e interesse | Funil |
| Participação do orgânico no total | Search Console + funil |
| Ações no perfil comercial (rotas, ligações, cliques) | Google Business Profile |

---

## 13. Fora de escopo

- Mídia paga.
- Automação de mensagens ou chatbot no WhatsApp.
- CRM — só quando os gatilhos da Fase 2 forem atingidos.
- Publicação automática em redes sociais.
- Qualquer ferramenta com mensalidade sem aprovação específica.
