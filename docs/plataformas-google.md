# Plataformas Google — capacidades e plano de ação em ondas

> Documento de referência, datado. Responde **"que recursos do Google e dos canais usamos, em que
> estado, e em que ordem entram"**. Não é roadmap (isso é o plano de SEO) nem log (isso é o
> registro operacional).

## 1. Controle do documento

| Campo | Valor |
|---|---|
| Criado em | 12/09/2026 |
| Versão | 1.0 |
| Última revisão | 12/09/2026 |
| Estado | Levantamento feito em 11/09/2026 e registrado em 12/09/2026. A Onda 0 está liberada pelo descritor decidido em 11/09/2026; as Ondas 1 a 4 aguardam autorização por PR. **Este documento não guarda estado vivo:** fase ativa e estado geral estão na §1 do [`plano-seo-programatico.md`](./plano-seo-programatico.md); decisões e histórico, no [`registro-operacional.md`](./registro-operacional.md) |
| Origem | Pedido do proprietário em 11/09/2026: análise a fundo do que melhorar, implementar e conectar, antes de qualquer investimento pago em posicionamento |
| Documentos irmãos | [`plano-seo-programatico.md`](./plano-seo-programatico.md) · [`registro-operacional.md`](./registro-operacional.md) · [`plano-ecossistema-comunicacao.md`](./plano-ecossistema-comunicacao.md) · [`arquitetura.md`](./arquitetura.md) |
| Legenda | `[oficial]` documentação ou blog do Google (ou do fornecedor citado) · `[terceiro]` veículo ou estudo independente · `[não confirmado]` a conferir no painel antes de contar com isso |

Toda coluna "Estado no projeto" é fotografia de 12/09/2026. Quando uma onda for executada, o
registro operacional recebe a linha; este documento só muda de versão em revisão deliberada.

## 2. O que este documento é e não é

- **É** o inventário do que cada plataforma permite, do que já existe no código e no painel, do
  que falta e da ordem em que entra, com fonte e data.
- **Não é** o plano de fases (gates e estado vivem no plano de SEO), nem o registro de decisões,
  nem uma promessa de posição: o plano de SEO §4 exclui "promessas de primeira posição garantida",
  e nada aqui contraria isso.
- **Quando ler:** antes de mexer em qualquer painel do Google, antes de tocar em SEO técnico no
  código e antes de discutir mídia paga, que continua fora do escopo (§8).

## 3. Diagnóstico de visibilidade em 12/09/2026

Por que o site não aparece para "corretora", nem no Maps, quando alguém busca na região:

1. **Superfície.** O sitemap tem 6 URLs (home e política de privacidade em três idiomas); em
   10/09/2026 o Search Console mostrava 2 indexadas e 4 "descobertas, ainda não indexadas". O
   Google ranqueia páginas, e não há página alguma sobre os assuntos que produtores e compradores
   buscam. A auditoria de 20/08/2026 (plano de SEO §15, achado 5) já apontava a superfície como o
   principal limitador, acima de design e performance. "Descoberta, não indexada" em site pequeno
   costuma significar baixa demanda de rastreio; ajudam links internos, `lastmod` verdadeiro no
   sitemap e conteúdo mais forte `[oficial + terceiro]`.
2. **Perfil comercial.** O Maps e o bloco local da busca ranqueiam o **Perfil da Empresa no
   Google**, não o site. O acesso ao perfil foi confirmado como disponível em 20/08/2026, mas o perfil nunca foi
   reivindicado e ajustado porque o descritor estava em aberto. A decisão de 11/09/2026
   ("Corretora de café") removeu o bloqueio.
3. **Termo.** "Corretora" sozinha devolve corretoras de seguros, imóveis e valores; "Safras" é
   dominado por uma consultoria nacional (achado 3 da mesma auditoria). O caminho é desambiguar a
   entidade (nome completo, descritor, NAP, `sameAs`, perfil) e disputar termos que combinem café
   com serviço ou região, nunca o genérico.

O que o Search Console responde e o que não responde: posição média é média de todas as
impressões (dispositivos, cidades, pessoas); só existe linha para consulta em que o site apareceu;
a busca feita à mão é personalizada por localização e histórico. A medida real vem do baseline de
17/09/2026 (plano de SEO, Fase 2).

## 4. Matriz de capacidades por plataforma

Colunas: **Estado no projeto** ∈ Feito · Possível agora · Depende de decisão · Fase futura · Não
faremos. **Onde** ∈ painel · código · fora do repo. **Custo** é sempre R$ 0 salvo indicação.
**Fase** é a do plano de SEO.

### 4.1 Search Console

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Propriedade verificada e sitemap enviado | Base de todo relatório `[oficial]` | Feito (20/08/2026) | painel | 0 | 2 | Proprietário |
| *Performance* (consultas, páginas, país, dispositivo, aparência) | Cliques, impressões, CTR e posição média; até 1.000 linhas, dados com 2 a 3 dias de atraso, 16 meses `[oficial]` | Possível agora; baseline em 17/09/2026 | painel | 0 | 2 | Técnico |
| *Generative AI performance* | Impressões em AI Overviews e AI Mode por página, país, dispositivo e data; sem consultas, cliques ou posição; para todos os sites desde 31/08/2026 `[oficial]` | Possível agora; entra na leitura mensal | painel | 0 | 2 | Técnico |
| *Recommendations* e *Insights* | Sugestões automáticas quando existem; Insights integrado ao painel desde 06/2025, só com dados do Search Console `[oficial]` | Possível agora | painel | 0 | 2 | Técnico |
| Anotações no gráfico | Marcar publicações e mudanças (11/2025) `[oficial]` | Possível agora | painel | 0 | 2 | Técnico |
| Configuração por linguagem natural | Aplica filtros e comparações no relatório de desempenho (12/2025) `[oficial]` | Possível agora (conveniência) | painel | 0 | 2 | Técnico |
| Inspeção de URL e *Pages* | Estado de indexação, canônica escolhida, pedido de indexação com cota diária `[oficial]` | Feito para as 4 URLs pendentes (10/09/2026); repetir a cada página nova | painel | 0 | 2 | Técnico |
| *Core Web Vitals* | Dados de campo do CrUX; "sem dados" é esperado com pouco tráfego `[oficial]` | Feito; aguardando dados | painel | 0 | 2 | Técnico |
| *Links* | Amostra de links internos e externos `[oficial]` | Possível agora | painel | 0 | 3 e 10 | Técnico |
| Relatórios *Discover* e *Google News* | Aparecem só após impressões mínimas `[oficial]` | Fase futura (após conteúdo) | painel | 0 | 6 | Técnico |
| Propriedade de plataforma (Instagram, YouTube) | Mostra como o conteúdo social aparece na Busca (07/2026) `[oficial]` | Possível agora `[não confirmado: disponibilidade para esta conta]` | painel | 0 | 2 | Marketing |
| Vínculo com o GA4 | Coleção *Search Console* no GA4 `[oficial]` | Feito (25/08/2026) | painel | 0 | 2 | Proprietário |
| Exportação em massa para BigQuery | Exige projeto com faturamento ativo `[oficial]` | Não faremos (decisão de 11/09/2026) | — | — | — | — |
| Indexing API | Só `JobPosting` e `BroadcastEvent` `[oficial]` | Não faremos (plano §4) | — | — | — | — |

### 4.2 Google Analytics 4

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Medição sob consentimento, 5 eventos, 6 dimensões, 4 eventos principais, tráfego interno, retenção de 14 meses | Contrato da Fase E | Feito (20/08 a 10/09/2026) | código e painel | 0 | 2 | Técnico |
| Coleção *Search Console* | Consultas e páginas de destino orgânicas dentro do GA4; 16 meses; até 48 h de atraso `[oficial]` | Feito (publicada) | painel | 0 | 2 | Técnico |
| Quatro explorações do painel mensal | Contatos por origem, Leads do formulário, Conversão por canal, Saúde do formulário (definidas em 10/09/2026) | Possível agora: salvar no *Explore* antes do baseline de 17/09/2026 | painel | 0 | 2 | Técnico |
| **Grupo de canais personalizado** | Até 2 grupos e 50 canais por grupo, regras por origem, meio e campanha; retroativo `[oficial]` | Decidido em 11/09/2026: "Perfil comercial" (origem `gbp`) e "Mensageria" (origem `whatsapp`) | painel | 0 | 2 | Técnico |
| **Vínculo com o Perfil da Empresa** | Importa 7 métricas agregadas do perfil (interações, cliques no site, ligações, rotas, mensagens, reservas, cardápios), janela de 6 meses, coleção própria; exige Editor no GA4 e Proprietário ou Gerente no perfil; disponível desde 08/06/2026 `[oficial]` | Depende do perfil ajustado (Onda 0) | painel | 0 | 2 | Proprietário |
| Anotações | Até 1.000 por propriedade; visíveis nos relatórios com gráfico de linha `[oficial]` | Possível agora | painel | 0 | 2 | Técnico |
| *Insights* automáticos e alertas personalizados | Anomalias e condições com aviso por e-mail `[oficial]` | Possível agora | painel | 0 | 2 | Técnico |
| Canal "AI Assistant" | Tráfego de assistentes de IA reconhecido por referrer desde 05/2026 `[oficial]` | Feito por padrão; só ler | painel | 0 | 2 | Técnico |
| *Grupo de origem* e filtro de hostname | Normaliza variações de origem; filtro só de exclusão (06/2026) `[oficial]` | Possível agora (opcional) | painel | 0 | 2 | Técnico |
| Dashboards nativos | Painéis de arrastar e soltar (09/09/2026) `[oficial]` | Possível agora; alternativa ao Looker Studio, descartado como entrega ao cliente | painel | 0 | 11 | Técnico |
| Consent Mode v2 | Exigido pelo Google só para EEE, Reino Unido e Suíça; no Brasil valem a LGPD e o guia de cookies da ANPD `[oficial]` | Feito | código | 0 | 2 | Técnico |
| Google Tag Manager | Camada extra de scripts | Não necessário: `gtag` direto com consentimento resolve | — | — | — | — |
| Exportação para BigQuery | Diária gratuita até 1 milhão de eventos por dia; sandbox apaga tabelas em 60 dias `[oficial]` | Não faremos (decisão de 11/09/2026) | — | — | — | — |
| Measurement Protocol | Eventos servidor a servidor; exige `api_secret` `[oficial]` | Não faremos (credencial nova) | — | — | — | — |

### 4.3 Perfil da Empresa no Google (Maps e bloco local)

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Reivindicar e verificar | Gestão pela própria Busca ou Maps, logado; método de verificação escolhido pelo Google, em geral vídeo mostrando fachada, equipamentos e acesso `[oficial]` | Possível agora (bloqueio caiu em 11/09/2026) | painel | 0 | 2 | Proprietário |
| Nome | Só o nome real; proibidos descritor, cidade, slogan e telefone `[oficial]` | Possível agora: "Safras & Negócios" | painel | 0 | 2 | Proprietário |
| Categoria primária e adicionais | "A empresa É", a mais específica; pesa no ranking `[oficial]`. Não existe "corretora de commodities"; candidatas `[terceiro, listas de 02/2026]`: "Corretor de Alimentos", "Atacadista de café", "Atacadista de produtos agrícolas", "Serviço agrícola" | Depende de decisão do proprietário, no seletor do painel; registrar a escolha | painel | 0 | 2 | Proprietário |
| Descrição | Até 750 caracteres, sem links nem promoção `[oficial]` | Possível agora: "corretora de café", cidade e serviços | painel | 0 | 2 | Proprietário |
| Serviços | Predefinidos por categoria mais personalizados `[oficial]`; efeito relatado no ranking em 24 a 72 h para os predefinidos `[terceiro: Sterling Sky, 02/2026]` | Possível agora | painel | 0 | 2 | Proprietário |
| Endereço e área de atendimento | Empresa híbrida mostra endereço e até 20 áreas `[oficial]` | Possível agora para o endereço; áreas dependem do mapa de regiões (plano §6, adiado) | painel | 0 | 2 | Proprietário |
| Horário e telefone | Horário com equipe presente; número local, sem redirecionar para fora `[oficial]` | Possível agora (seg–sex 8h–18h, telefone oficial) | painel | 0 | 2 | Proprietário |
| Link do site com UTM | UTM no próprio domínio é aceita `[terceiro]`; convenção `gbp/local/perfil` | Possível agora | painel | 0 | 2 | Técnico |
| Contato por WhatsApp no perfil | Substitui o chat nativo, encerrado em 07/2024 `[oficial]`; disponível no Brasil `[terceiro]` | Possível agora | painel | 0 | 2 | Comercial |
| Fotos, logo e capa | JPG ou PNG, 720×720 recomendado `[oficial]` | Possível agora (fachada, escritório; equipe só com autorização registrada) | painel | 0 | 2 | Marketing |
| Postagens | Novidades, ofertas, eventos; não movem ranking, servem à conversão `[oficial + terceiro]` | Possível agora; reaproveitar notas de mercado | painel | 0 | 5 | Marketing |
| Avaliações | Pedir por link ou QR é permitido; proibido incentivar, filtrar ou pedir a funcionários e parentes; responder todas `[oficial]` | Possível agora após a verificação; link e QR ficam no registro privado | painel | 0 | 2 | Comercial |
| *Performance* | Termos de pesquisa (mensal), visualizações, rotas, ligações, cliques no site, mensagens `[oficial]` | Após a verificação; entra na leitura mensal | painel | 0 | 2 | Técnico |
| "Ask" (IA) no lugar de Perguntas e respostas | P&R público encerrado em 12/2025; a IA responde com base no perfil, no site e nas avaliações `[terceiro]` | Nada a fazer além de manter perfil e site completos | — | 0 | — | — |
| Nome curto `g.page` | Não se cria nem edita desde 02/2026 `[terceiro]` | Não existe mais; usar o link de compartilhamento do Maps | — | — | — | — |
| Link real do perfil e `hasMap` no site | Troca do link genérico de busca por endereço | Fase futura (Onda 1, código) | código | 0 | 4 | Técnico |

### 4.4 Busca e dados estruturados

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| `LocalBusiness` | Painel local e desambiguação; obrigatórios `name` e `address`; recomendados `geo`, `telephone`, `url`, `openingHoursSpecification`, `priceRange` `[oficial]` | Feito em parte (`src/components/pages/HomePage.astro`) | código | 0 | 1 | Técnico |
| `@id`, `geo`, `sameAs`, `hasMap`, `logo`, `description`, `areaServed` | `geo` e `sameAs` recomendados pelo Google; `hasMap`, `areaServed` e `@id` válidos no schema.org, sem menção do Google `[oficial + terceiro]` | Possível agora (Onda 1); `geo` e `hasMap` exigem dados do proprietário (pino do perfil, URL do Maps) | código | 0 | 2 e 4 | Técnico |
| `Organization` separado | Logo e `sameAs` no painel de conhecimento `[oficial]` | Não necessário: `LocalBusiness` já é subtipo; usar os mesmos campos nele | — | — | — | — |
| `WebSite` | Nome do site nos resultados (`name`, `alternateName`) `[oficial]` | Possível agora (Onda 1) | código | 0 | 4 | Técnico |
| `BreadcrumbList` | Trilha nos resultados, só desktop desde 01/2025 `[oficial]` | Fase futura: a partir do primeiro nível abaixo da home | código | 0 | 4 | Técnico |
| `Article` / `BlogPosting` | Notas e guias: `author.name` e `author.url`, `datePublished` e `dateModified` em ISO com fuso, imagens de 50 mil px ou mais em 16:9, 4:3 e 1:1 `[oficial]` | Fase futura (Onda 2) | código | 0 | 5 | Técnico |
| `ProfilePage` | Página de autor, destino do `author.url` `[oficial]` | Fase futura (Onda 2; autoria decidida em 11/09/2026) | código | 0 | 4 e 6 | Técnico |
| `Dataset` | Tabelas e CSV do observatório no Dataset Search `[oficial]` | Fase futura (Onda 4) | código | 0 | 7 | Técnico |
| `VideoObject` | Só com vídeo como conteúdo principal da página `[oficial]` | Não faremos por ora (YouTube recusado em 11/09/2026) | — | — | — | — |
| FAQ, HowTo, Sitelinks search box | Aposentados (FAQ encerrado em 05/2026) `[oficial]` | Não faremos | — | — | — | — |
| `taxID`, `vatID`, `legalName` | Desambiguação de entidade `[oficial]` | Não faremos: exporiam CNPJ e razão social no repositório público | — | — | — | — |
| `max-image-preview:large` | Pré-requisito de imagem grande em Discover e nos resultados `[oficial]` | Possível agora (Onda 1, `src/layouts/BaseLayout.astro`) | código | 0 | 2 | Técnico |
| Sitemap com `lastmod` verdadeiro e alternates | `lastmod` é usado se verificável; `changefreq` e `priority` são ignorados `[oficial]` | Possível agora (Onda 1, `astro.config.mjs`); hoje só `<loc>` | código | 0 | 2 | Técnico |
| Favicon e ícones | 48 px ou mais recomendado; `apple-touch-icon` aceito `[oficial]` | Feito em parte (224 px); completar na Onda 1 | código | 0 | 2 | Técnico |
| hreflang para página só em português | Nunca declarar tradução inexistente; autorreferência mais `x-default`, ou nenhum `[oficial + terceiro]` | Fase futura (Onda 2, `src/i18n/routes.ts`) | código | 0 | 4 | Técnico |
| Cidade ou região no `title` e no H1 | Título descritivo é orientação geral; sem declaração oficial como sinal `[não confirmado como fator]` | Depende de decisão: critério de 17/09/2026 | código | 0 | 4 | Proprietário |
| Preferred Sources | Botão para o leitor marcar o site como fonte preferida em Top Stories, AI Overviews e AI Mode (08/2026) `[oficial]` | Fase futura (após cadência de notas) | código | 0 | 6 | Técnico |

### 4.5 Discover, Google News e IA na Busca

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Discover | Página indexada, imagem de 1.200 px ou mais e `max-image-preview:large`; sem marcação especial; elegível não é garantido `[oficial]` | Fase futura; pré-requisito técnico na Onda 1 | código | 0 | 6 | Técnico |
| Google News e Top Stories | Consideração automática; Publisher Center desnecessário `[oficial]` | Nada a fazer além de datas, autoria e contato visíveis | — | 0 | 6 | — |
| AI Overviews e AI Mode | Em português desde 08/2024 e 09/2025; "não há requisitos adicionais nem otimizações especiais" `[oficial]` | Mesmo SEO: conteúdo específico e citável | código | 0 | 6 | Técnico |
| Controles `nosnippet`, `max-snippet`, `Google-Extended` | Reduzem também a apresentação normal; `Google-Extended` não afeta AI Overviews `[oficial]` | Não faremos: manter tudo aberto | — | — | — | — |
| `llms.txt`, marcação "para IA", fragmentação de texto | "O Google ignora" `[oficial, 05/2026]` | Não faremos (plano §4) | — | — | — | — |
| Risco de CTR | Estudos medem cliques menores onde há AI Overviews; ser citado recupera parte `[terceiro: Pew 07/2025, Ahrefs 02/2026, Seer 04/2026]` | Registrado como risco; acompanhar no relatório de IA | painel | 0 | 2 | Técnico |

### 4.6 Demanda: Trends, Keyword Planner e Alerts

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Search Console como fonte primeira | Consultas com impressão e relatório de IA | Possível agora | painel | 0 | 3 | Técnico |
| Google Trends *Explore* | Até 8 termos, resumo por IA (01/2026), sub-região (Minas Gerais), exportação em CSV `[oficial]` | Possível agora | fora do repo | 0 | 3 | Técnico |
| Google Trends *Em alta agora* | Atualização a cada 10 minutos, CSV e RSS `[oficial]` | Possível agora | fora do repo | 0 | 3 | Técnico |
| API do Trends | Alpha por inscrição desde 07/2025; exige credencial `[oficial]` | Não faremos | — | — | — | — |
| Keyword Planner | Exige conta Google Ads com dados de faturamento; sem campanha mostra faixas de volume `[oficial + terceiro]` | Depende de conta: autorizada em 11/09/2026, **sem campanha** | fora do repo | 0 | 3 | Proprietário |
| Google Alerts | E-mail com novos resultados para marca e temas `[oficial]` | Possível agora | fora do repo | 0 | 3 e 10 | Marketing |
| Autocomplete e "perguntas relacionadas" | Leitura manual; consultas automatizadas violam os termos `[oficial]` | Possível agora, só à mão | fora do repo | 0 | 3 | Técnico |

### 4.7 Citações fora do Google (autorizadas em 11/09/2026)

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Bing Places | Importa e sincroniza a partir do perfil do Google (10/2025) `[oficial Microsoft]` | Depende do perfil verificado | fora do repo | 0 | 2 | Marketing |
| Apple Business | Cadastro gratuito, cartão no Apple Maps (03/2026) `[oficial Apple]`; cobertura do Brasil `[não confirmado]` | Possível agora | fora do repo | 0 | 2 | Marketing |
| Waze | Local adicionado ou editado pelo Waze Map Editor `[oficial Waze]` | Possível agora | fora do repo | 0 | 2 | Marketing |
| Diretórios com telefone antigo | Três telefones circulavam fora do site (plano de SEO §15, achado 2, resolvido no site em 20/08/2026; fora dele, não) | Possível agora: corrigir para o número oficial | fora do repo | 0 | 2 | Comercial |
| Lista de corretores do centro de comércio de café estadual | Citação setorial com NAP e credencial `[terceiro]` | Depende de decisão em aberto (credenciais setoriais) | fora do repo | `[não confirmado]` | 10 | Proprietário |

### 4.8 Instagram e WhatsApp como superfícies do Google

| Capacidade | O que faz | Estado no projeto | Onde | Custo | Fase | Responsável |
|---|---|---|---|---|---|---|
| Conteúdo público do Instagram indexável | Fotos, vídeos e carrosséis de conta profissional, desde 10/07/2025, opção ligada por padrão `[terceiro]` | Feito por padrão; conferir a opção e aplicar nome completo, descritor e UTM `instagram/social/bio` | fora do repo | 0 | 2 | Marketing |
| Página pública do Canal do WhatsApp | `whatsapp.com/channel/…` sem `noindex` (verificação de 11/09/2026) | Fase futura: canal a criar; nome, descrição e URL do site consistentes | fora do repo | 0 | ecossistema | Marketing |
| Comunidade e grupos | Links `chat.whatsapp.com` levam `noindex` `[terceiro]` | Nada a fazer; não divulgar link de convite em página pública | — | — | — | — |
| Atribuição sem PII | UTM por superfície; mensagem pré-preenchida com código de origem; nada de telefone ou nome em analytics | Regra já registrada (ecossistema §6 e §7) | código | 0 | ecossistema | Técnico |

## 5. O que existe no código e o que falta

| Item | Existe? | Onde | Onda |
|---|---|---|---|
| Sitemap filtrado pelo registro de rotas | Sim, só `<loc>` | `astro.config.mjs` L12 e L18 | 1 (alternates, `lastmod`) |
| `robots.txt` allow-all com `Sitemap:` | Sim | `public/robots.txt` | — |
| Canonical absoluto, hreflang e `x-default` | Sim | `src/layouts/BaseLayout.astro`, `src/i18n/routes.ts` | 2 (rota só em PT) |
| Open Graph e Twitter | Sim; `og:type` fixo em `website`; política sem `og:image` | `BaseLayout.astro` | 2 (`article`) |
| `meta robots` com `max-image-preview:large` | Não | — | 1 |
| JSON-LD `LocalBusiness` | Sim: name, url, image, email, telephone, foundingDate, address, openingHours | `src/components/pages/HomePage.astro` L40-68 | 1 (`@id`, `geo`, `sameAs`, `hasMap`, `logo`, `description`, `areaServed`) |
| `WebSite`, `BreadcrumbList`, `Article`, `ProfilePage`, `Dataset` | Não | — | 1, 2, 2, 2 e 4 |
| Consent Mode v2, GA4 sob consentimento, 5 eventos, 6 dimensões | Sim | `BaseLayout.astro`, `src/data/analytics.ts`, `ConversionEvents.astro` | — |
| Suíte `pnpm verify:medicao` | Sim (92 verificações; não cobre SEO) | `scripts/verify-medicao.mjs` | — |
| Content Collections, página de autor, RSS | Não | — | 2 (RSS só se pedido: biblioteca nova) |
| Rota só em português no registro | Não: `Record<Locale, string>` exige os três idiomas; rota fora do registro cai em fallback de prefixo | `src/i18n/routes.ts` L28-37, `src/i18n/index.ts` L204-219 | 2 |
| Link real do perfil comercial | Não: busca genérica por endereço, sem evento (decisão do ecossistema §7) | `src/components/sections/ContactSection.astro` L12 | 1 (após a Onda 0) |
| UTM padronizada | Só no `/qr`; sem gerador | `src/pages/qr.astro`, `firebase.json` | 2 (gerador) |
| Imagens de 1.200 px ou mais e social 1200×630 | Sim (12 originais) | `src/assets/**` | — |
| Favicon de 48 px ou mais e `apple-touch-icon` | Só `favicon.png` de 224 px | `public/favicon.png` | 1 |
| 404 real com `noindex`; redirects `/contato` e `/qr` | Sim | `src/pages/404.astro`, `firebase.json` | — |
| `astro check` e `verify:medicao` no CI | Não | `cloudbuild.yaml` | a decidir |

Padrão reutilizável para página de texto: `src/components/pages/PrivacyPage.astro` (conteúdo no
dicionário, `article`, `header`, `h1` e `time`, aside de contato medido).

## 6. Plano de ação em ondas

Regra fixa: a Onda 0 é painel e não toca o repositório. A partir da Onda 1, estrutura nova, rota
nova, biblioteca nova, commit e PR exigem autorização caso a caso (`CLAUDE.md` §5). Nada abaixo
tem mensalidade.

### Onda 0 — painel, sem código (Fase 2; liberada em 11/09/2026)

| # | Item | Pré-condição | Quem | Observação |
|---|---|---|---|---|
| 0.1 | Reivindicar e verificar o Perfil da Empresa | descritor decidido | Proprietário | verificação em geral por vídeo |
| 0.2 | Nome "Safras & Negócios"; categoria primária escolhida no seletor e registrada; descrição de até 750 caracteres com "corretora de café" e a cidade; serviços predefinidos e personalizados, com os nomes que o site usa (Mercado e Negociação, Análise de Qualidade, Suporte Logístico); endereço e horário iguais aos do site; telefone oficial | 0.1 | Proprietário | a categoria é decisão a registrar; nada de palavra-chave no nome |
| 0.3 | Link do site com `?utm_source=gbp&utm_medium=local&utm_campaign=perfil` | 0.1 | Técnico | nunca `utm_source=google` |
| 0.4 | Contato por WhatsApp no perfil; fotos reais (fachada, escritório), logo e capa | 0.1 | Comercial e Marketing | equipe só com autorização registrada |
| 0.5 | Link e QR de avaliação guardados no registro privado; pedir após atendimento, sem incentivo, sem filtro, sem equipe; responder todas | 0.1 | Comercial | política oficial na §10 |
| 0.6 | Vincular GA4 ↔ Perfil da Empresa (Admin → Vínculos de produtos) | perfil verificado e ajustado | Proprietário | exige Editor no GA4 e Proprietário ou Gerente no perfil |
| 0.7 | Grupo de canais personalizado no GA4: "Perfil comercial" (origem `gbp`) e "Mensageria" (origem `whatsapp`) | — | Técnico | criar antes do baseline; retroativo |
| 0.8 | Anotações iniciais no Search Console e no GA4: 20/08/2026 (medição), 09/09/2026 (hero), 11/09/2026 (cards), data do ajuste do perfil | — | Técnico | — |
| 0.9 | Ler *Recommendations* e *Insights*; incluir *Generative AI performance* na leitura mensal; conferir a propriedade de plataforma do Instagram | — | Técnico | — |
| 0.10 | Citações: Bing Places (importar do perfil), Apple Business, Waze; corrigir o telefone nos diretórios antigos | 0.1 para o Bing | Marketing | NAP idêntico ao do site |
| 0.11 | Instagram: bio com nome completo, "Corretora de café" e link com UTM `instagram/social/bio`; opção de indexação por buscadores ligada | — | Marketing | — |
| 0.12 | Conta Google Ads só para o Keyword Planner (faturamento preenchido, nenhuma campanha) | decisão de 11/09/2026 | Proprietário | uso na Fase 3 |
| 0.13 | Trends: exportar CSV das consultas de referência (Brasil → Minas Gerais, 5 anos) para o backlog da Fase 3 | — | Técnico | termos a escolher no painel; nada verificado ainda |

Execução guiada no painel, um passo por vez, com captura de tela antes de cada instrução.

### Onda 1 — técnica (uma PR; Fases 2 e 4)

Insumos do proprietário antes de abrir: coordenadas do pino do perfil, URL de compartilhamento do
Maps, URLs oficiais para `sameAs` (Instagram, perfil do Google).

| # | Item | Arquivo | Exige |
|---|---|---|---|
| 1.1 | `<meta name="robots" content="max-image-preview:large">` nas páginas indexáveis | `src/layouts/BaseLayout.astro` | PR |
| 1.2 | JSON-LD em `@graph`: `LocalBusiness` com `@id`, `description` (descritor), `logo`, `geo`, `hasMap`, `sameAs`, `areaServed` e telefone em E.164; `WebSite` com `name`, `alternateName`, `url` e `publisher`. Sem `taxID`, `vatID` ou `legalName` | `src/components/pages/HomePage.astro` | PR |
| 1.3 | Sitemap com alternates a partir de `ROUTE_MAP` (via `serialize`) e `lastmod` só onde houver data verdadeira; confirmar suporte na versão instalada de `@astrojs/sitemap` | `astro.config.mjs`, `src/i18n/routes.ts` | PR |
| 1.4 | Favicon de 48 px ou mais e `apple-touch-icon` | `public/`, `BaseLayout.astro` | PR |
| 1.5 | `datetime` no `<time>` da política; canonical absoluto em `contato.astro` e `qr.astro` | `PrivacyPage.astro`, `src/pages/` | PR |
| 1.6 | Link real do perfil na seção de contato (sem evento novo) | `ContactSection.astro` | PR, após 0.1 |
| 1.7 | `title` e H1 com cidade ou região | dicionários `src/i18n/*.ts` | só se o critério de 17/09/2026 mandar |

Verificação: `pnpm check`, `pnpm build`, teste de resultados avançados sobre o HTML gerado,
`pnpm verify:medicao` 92/92, XML do sitemap inspecionado, conferência visual nos três idiomas.

### Onda 2 — notas de mercado (antecipa as Fases 4 e 5; PRs autorizadas)

Estrutura nova: `src/content/`, `src/content.config.ts`, rotas `/conteudos`,
`/conteudos/notas/[slug]` e `/sobre/<autor>`.

| # | Item | Exige |
|---|---|---|
| 2.1 | Consentimento do proprietário para a autoria nominal e exceção explícita ao boundary "nome de sócio" (`AGENTS.md` e `CLAUDE.md` §8), em edição espelhada separada | decisão e PR |
| 2.2 | Rota só em português no registro de rotas: tipo parcial, `getAllRoutes` e `localizeRoute` cientes; hreflang só dos idiomas existentes mais `x-default`; seletor de idioma aponta para a home do idioma (decisão de UX a registrar) | PR |
| 2.3 | Coleção `notas` com os campos mínimos da Fase 5 e schema que bloqueia o build | estrutura nova e PR |
| 2.4 | Template de nota: `Article` (`author` → `ProfilePage`, datas em ISO com fuso, imagem de 1.200 px ou mais em 16:9), `BreadcrumbList`, `og:type=article`; hub `/conteudos` | rota nova e PR |
| 2.5 | Página de autor com `ProfilePage` e `Person`; texto factual, sem confundir idade da empresa com experiência pessoal | rota nova e PR |
| 2.6 | Novo valor `origem_secao: "conteudo"` no contrato de eventos | decisão registrada e PR |
| 2.7 | Gerador de links com UTM (recomendado: página `noindex` `/links`; alternativa: script local) | rota nova e PR |
| 2.8 | Regra editorial de preço e mercado escrita na Fase 5 do plano antes da primeira nota | docs |
| 2.9 | Sitemap com `lastmod` das notas; anotação a cada publicação; réplica no canal e no Instagram com UTM por superfície | PR e painel |
| 2.10 | RSS | só se pedido (biblioteca nova) |

Cadência decidida: uma nota por semana (300 a 500 palavras), reaproveitando o material do canal;
um guia por mês a partir da Fase 3. Estudos de terceiros apontam 3 a 6 meses para os primeiros
sinais e 6 a 12 para tráfego relevante `[terceiro: Ahrefs]`.

### Onda 3 — demanda, serviços e regiões (Fases 3, 4 e 6)

- backlog a partir do Search Console (28 dias mais o relatório de IA), Trends, Keyword Planner
  (faixas) e entrevistas com equipe e clientes;
- `/servicos/{servico}` para os três serviços reais; `/sobre`; `/regioes` com conteúdo real por
  região, sem afunilar para a home (doorway);
- guias mensais; links internos; `title` e H1 com região conforme o critério de 17/09/2026;
- credenciais setoriais (decisão em aberto) e, com elas, a lista de corretores do centro estadual.

### Onda 4 — observatório e autoridade (Fases 7 e 10)

- `Dataset` para tabelas e CSV do observatório (Dataset Search); análise assinada;
- menções e citações setoriais; Preferred Sources quando houver cadência.

## 7. Leitura mensal — o que este levantamento acrescentou

O roteiro canônico está na Fase 2 do plano de SEO ("Painel e cadência de revisão"). As leituras
10 a 12 entraram em 12/09/2026:

| # | Onde | Por que entra |
|---|---|---|
| 10 | Search Console → *Generative AI performance* | única medida de presença em AI Overviews e AI Mode; só impressões |
| 11 | Perfil da Empresa → *Performance*; GA4 → coleção *Perfil da Empresa* após o vínculo | termos, rotas, ligações, cliques e mensagens do Maps, sem UTM |
| 12 | Search Console → *Recommendations* e *Insights* | correções simples que o Google já apontou |

Anotar cada publicação, ajuste de perfil e mudança de título nas duas ferramentas. Relatórios de
Discover e Google News entram quando aparecerem.

## 8. O que não faremos

| Item | Motivo |
|---|---|
| Mídia paga | fora do escopo (plano §6 e ecossistema §13); não muda ranking orgânico |
| Indexing API | restrita a `JobPosting` e `BroadcastEvent` `[oficial]`; proibida no plano §4 |
| Palavra-chave ou cidade no nome do perfil | viola as diretrizes; motivo frequente de suspensão `[oficial + terceiro]` |
| FAQ, HowTo, Sitelinks search box | aposentados pelo Google |
| `llms.txt`, marcação "para IA", fragmentação de texto | "o Google ignora" `[oficial]`; plano §4 |
| Páginas por cidade em lote | doorway `[oficial]`; risco na §11 do plano |
| Avaliações incentivadas, filtradas ou de funcionários | política de conteúdo do Google |
| BigQuery | decisão de 11/09/2026 |
| YouTube | recusado por ora (11/09/2026) |
| CNPJ, razão social, `taxID`, `vatID`, `legalName` em JSON-LD | repositório público (`CLAUDE.md` §8) |
| Raspagem de resultados e rank tracking automatizado | termos do Google e política de spam |
| `nosnippet`, `max-snippet`, `Google-Extended` | reduzem a busca comum; não afetam AI Overviews |
| Measurement Protocol, API do Trends, qualquer API nova | exigem credencial (decisão de 10/09/2026) |
| Redirecionamento automático por idioma | orientação oficial para sites multilíngues |
| Promessa de posição | plano §4 |

## 9. Decisões que este levantamento fechou ou reabriu

Todas registradas com data de 11/09/2026 no [`registro-operacional.md`](./registro-operacional.md):
descritor "Corretora de café" (fecha a de 20/08/2026); autoria nominal com página de autor (supera a
de 21/07/2026, com consentimento e exceção ao boundary do nome a registrar); critério para a cidade
no título (17/09/2026); contas gratuitas aceitas e recusadas; convenção `gbp/local/perfil` mantida
com grupo de canais; cadência editorial; este documento.

Divergências deixadas anotadas, sem bloqueio: o gate da Fase 2 marca "eventos testados em
produção" e o gate do ecossistema não (só o código servido foi conferido); o link do mapa segue
sem evento por decisão da §7 do ecossistema; `hasMap`, `areaServed` e `@id` não constam da
documentação do Google, só do schema.org.

## 10. Fontes

Consultadas em 11/09/2026; todas respondendo em 12/09/2026.

**Busca e Search Console** `[oficial]`

- [Recursos de IA na Busca e como medir](https://developers.google.com/search/docs/appearance/ai-features)
- [Relatório Generative AI performance — anúncio](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) · [ajuda](https://support.google.com/webmasters/answer/16984139)
- [Guia de otimização para recursos de IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Configuração por linguagem natural](https://developers.google.com/search/blog/2025/12/ai-powered-configuration) · [Anotações](https://developers.google.com/search/blog/2025/11/custom-chart-annotations) · [Insights integrado](https://developers.google.com/search/blog/2025/06/search-console-insights) · [Recommendations](https://developers.google.com/search/blog/2024/08/search-console-recommendations) · [Propriedades de plataforma](https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide)
- [Relatório de desempenho](https://support.google.com/webmasters/answer/7576553) · [Inspeção de URL](https://support.google.com/webmasters/answer/9012289) · [Indexação de páginas](https://support.google.com/webmasters/answer/7440203) · [Core Web Vitals](https://support.google.com/webmasters/answer/9205520) · [Links](https://support.google.com/webmasters/answer/9049606) · [Exportação para BigQuery](https://support.google.com/webmasters/answer/12917675)
- [Search Console e Google Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console)
- [Galeria de resultados avançados](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) · [Article](https://developers.google.com/search/docs/appearance/structured-data/article) · [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization) · [LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business) · [Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) · [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page) · [Dataset](https://developers.google.com/search/docs/appearance/structured-data/dataset) · [Video](https://developers.google.com/search/docs/appearance/structured-data/video) · [Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Nome do site](https://developers.google.com/search/docs/appearance/site-names) · [Favicon](https://developers.google.com/search/docs/appearance/favicon-in-search) · [Discover](https://developers.google.com/search/docs/appearance/google-discover) · [Preferred Sources](https://developers.google.com/search/docs/appearance/preferred-sources)
- [Políticas de spam](https://developers.google.com/search/docs/essentials/spam-policies) · [Conteúdo gerado por IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) · [Sistemas de ranking](https://developers.google.com/search/docs/appearance/ranking-systems-guide) · [Atualizações da Busca](https://developers.google.com/search/updates)
- [Versões localizadas e hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions) · [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) · [Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart) · [Rastreadores e Google-Extended](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)

**Perfil da Empresa** `[oficial]`

- [Diretrizes de representação](https://support.google.com/business/answer/3038177) · [Elegibilidade](https://support.google.com/business/answer/13763036) · [Área de atendimento e empresa híbrida](https://support.google.com/business/answer/9157481) · [Verificação](https://support.google.com/business/answer/7107242) · [Categorias](https://support.google.com/business/answer/7249669) · [Serviços](https://support.google.com/business/answer/9455399) · [Postagens](https://support.google.com/business/answer/7662907) · [Chat por WhatsApp ou SMS](https://support.google.com/business/answer/15013580) · [Performance](https://support.google.com/business/answer/9918094) · [Fotos](https://support.google.com/business/answer/6103862)
- [Como melhorar o ranking local](https://support.google.com/business/answer/7091) · [Pedir avaliações](https://support.google.com/business/answer/3474122) · [Política de conteúdo gerado por usuários](https://support.google.com/contributionpolicy/answer/7400114) · [Denunciar avaliações](https://support.google.com/business/answer/4596773) · [Painel de conhecimento](https://support.google.com/knowledgepanel/answer/7534842) · [Fim do chat nativo (07/2024)](https://developers.google.com/business-communications/business-messages/resources/release-notes/update-on-gbm)

**GA4** `[oficial]`

- [Search Console no GA4](https://support.google.com/analytics/answer/10737381) · [Grupo de canais padrão](https://support.google.com/analytics/answer/9756891) · [Grupos de canais personalizados](https://support.google.com/analytics/answer/13051316) · [Vínculo com o Perfil da Empresa](https://support.google.com/analytics/answer/16930347) · [Eventos principais](https://support.google.com/analytics/answer/9267568) · [Anotações](https://support.google.com/analytics/answer/15884203) · [Consent Mode](https://developers.google.com/tag-platform/security/guides/consent) · [Sandbox do BigQuery](https://docs.cloud.google.com/bigquery/docs/sandbox)

**Demanda** `[oficial]`

- [Google Trends para donos de site](https://developers.google.com/search/docs/monitor-debug/trends-start) · [API do Trends (alpha)](https://developers.google.com/search/blog/2025/07/trends-api) · [Keyword Planner](https://support.google.com/google-ads/answer/7337243) · [Google Alerts](https://support.google.com/websearch/answer/4815696)

**Citações e canais**

- [Bing Places (10/2025)](https://blogs.bing.com/search/October-2025/Introducing-the-New-Bing-Places-for-Business-Built-for-Business-Owners,-Powered-by-Research) `[oficial Microsoft]` · [Apple Business (03/2026)](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/) `[oficial Apple]` · [Waze Map Editor](https://support.google.com/waze/answer/6263233) `[oficial]`
- [Modo IA em português (09/2025)](https://blog.google/intl/pt-br/produtos/busca-do-google-agora-o-brasil-ja-pode-usar-o-modo-ia-em-portugues/) `[oficial]` · [IndexNow — participantes](https://www.indexnow.org/faq) `[oficial IndexNow]`
- [Instagram indexável pelo Google (07/2025)](https://ppc.land/instagram-content-becomes-searchable-on-google-starting-july-10/) `[terceiro]`

**Terceiros** `[terceiro]`

- [Whitespark — Local Search Ranking Factors 2026](https://whitespark.ca/local-search-ranking-factors/) · [Sterling Sky — serviços predefinidos e ranking (02/2026)](https://www.sterlingsky.ca/services-in-google-business-profile-impact-ranking/) · [Search Engine Land — UTM no perfil (11/2025)](https://searchengineland.com/guide/utms-for-google-business-profile)
- [Search Engine Roundtable — fim do P&R (12/2025)](https://www.seroundtable.com/google-maps-qa-feature-ask-40594.html) · [Fim dos nomes curtos (02/2026)](https://www.seroundtable.com/google-business-short-names-going-away-40912.html)
- CTR com AI Overviews: [Pew (07/2025)](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) · [Ahrefs (02/2026)](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update) · [Seer (04/2026)](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)
- [Ahrefs — quanto tempo leva o SEO](https://ahrefs.com/blog/how-long-does-seo-take/)
