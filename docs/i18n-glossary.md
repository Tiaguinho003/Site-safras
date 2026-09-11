# Glossário de tradução — Safras & Negócios

Documento de referência para internacionalização (i18n) do site safrasenegocios.com.br. Aqui ficam as decisões deliberadas de tradução para Inglês (EN) e Espanhol (ES), com justificativa por termo. **Toda nova string deve respeitar este glossário** — se aparecer um termo não documentado, adicionar aqui antes de traduzir.

**Última atualização**: 2026-09-10 — tabelas de frases e microcopy (§5, §7, §8) realinhadas ao que está em `src/i18n/*.ts`. Os dicionários são a fonte da verdade das **strings**; este glossário é a fonte das **decisões de termo**.

---

## 1. Princípios gerais

### Voice da marca por idioma

A Safras é uma corretora de café institucional com 10+ anos de mercado em São Sebastião do Paraíso (Sul de Minas). O tom é **sério, confiante, B2B premium — sem pomposidade**.

| Idioma | Tom equivalente | Referências |
|--------|----------------|-------------|
| PT-BR (origem) | Institucional, sério, "Sul de Minas" — confiante mas não arrogante | Atual |
| EN | B2B trade publications style — direto, "specialty coffee" vocabulary | Sucafina, Volcafe, Cafe Imports |
| ES | Profesional, "comercio cafetero" — formal mas acessível | Federación de Cafeteros (CO) |

### Audiência-alvo por idioma

- **PT-BR**: produtores, exportadoras nacionais, traders brasileiros, parceiros do mercado interno.
- **EN**: compradores internacionais (US, EU, Ásia), traders, roasters especialty, importadoras.
- **ES**: compradores e parceiros latino-americanos (México, Colômbia, Peru, Costa Rica), exportadoras hispano-americanas.

### Regras-mestre

1. **Nunca tradução literal** se a versão idiomática for melhor (ex: "Solicitar Serviço" não vira "Request Service").
2. **Manter sigla quando reconhecida globalmente** (CPR, FOB, ICE).
3. **Adaptar números/datas** ao formato local (en-US: 1,000 / pt-BR: 1.000).
4. **Manter nomes próprios** sem traduzir (marca, cidades, pessoas).

---

## 2. Termos que NUNCA são traduzidos

| Termo | Por quê |
|-------|---------|
| Safras & Negócios | Nome da marca — proper noun |
| São Sebastião do Paraíso | Nome próprio de cidade — sempre em PT |
| Minas Gerais | Nome de estado |
| Cerrado Mineiro | Denominação de origem geográfica (DO) — termo técnico mantido |
| Sul de Minas | Região cafeeira — termo técnico mantido |
| Nomes de pessoas em relatos reais e autorizados | Nomes próprios |
| Nomes oficiais de organizações citadas com autorização | Nomes próprios |
| WhatsApp, Instagram | Marcas |

---

## 3. Termos institucionais do café (decisões deliberadas)

Esta é a **parte mais crítica**. Tradução literal aqui mata credibilidade B2B.

### 3.1 Atividade principal

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| corretora (de café) | coffee brokerage | corretaje de café | "Broker company" é literal e awkward. "Brokerage" é o termo da indústria. |
| corretor | (coffee) broker | corredor de café | OK |
| intermediação | brokerage | corretaje / intermediación | "Intermediation" em EN soa burocrático/jurídico, não comercial |
| consultoria comercial | commercial advisory | asesoría comercial | "Advisory" soa premium B2B, "consulting" é genérico |
| acompanhamento | follow-up / oversight | seguimiento / acompañamiento | "Oversight" se for fiscalização ativa; "follow-up" se for relacionamento |

### 3.2 Atores do mercado

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| produtor (de café) | coffee grower (**locked**; não usar producer) | productor (cafetero) | "Grower" eleva o tom (specialty/premium). **Ver §11** |
| comprador | buyer | comprador | OK |
| exportadora | exporter / export company | exportadora | "Exporter" é mais curto e idiomático |
| importadora | importer | importadora | OK |
| trader | trader | trader / operador | Termo internacional, mantém |
| roaster (torrefador) | roaster | tostador | "Roaster" é mais usado internacionalmente |
| cooperativa | cooperative | cooperativa | OK |
| parceiro | partner | socio / aliado | "Aliado" tem peso comercial em ES |

### 3.3 Origem & produção

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| fazenda | estate (**locked**; não usar farm) | finca (**locked**; não usar hacienda) | "Estate" é premium specialty. **Ver §11** |
| lavoura | crop fields / coffee fields | cultivo cafetero | "Crop" sozinho é confuso (= colheita também) |
| safra | harvest | cosecha | "Crop" em EN pode confundir com "cultivo". "Harvest" é específico. |
| colheita | harvest (action) | cosecha (acción) | mesmo termo, contexto distingue |
| terroir | terroir | terroir | Termo francês adotado globalmente |
| origem | origin | origen | Termo do specialty: "single origin", "origins program" |
| café cereja | cherry coffee / coffee cherries | café cereza | "Coffee cherries" no plural é mais natural em EN |
| grão verde | green coffee / green beans | café verde | OK |
| torrado | roasted | tostado | OK |

### 3.4 Operações comerciais

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| mercado físico | physical market | mercado físico | OK |
| mercado futuro | futures market | mercado de futuros | OK termo da indústria |
| CPR financeira | financial CPR (Cédula de Produto Rural) | CPR financiero | Sigla brasileira — na 1ª menção, adicionar parenthetical explicativo |
| contrato | contract | contrato | OK |
| negociação | negotiation / deal | negociación | "Deal" é mais punchy quando se refere a transação fechada |
| operação comercial | commercial transaction / trade | operación comercial | "Trade" se for operação spot; "transaction" se for formal |

### 3.5 Qualidade & análise

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| classificação (de grãos) | bean grading / classification | clasificación (de granos) | "Grading" é mais técnico; "classification" é mais formal |
| peneira | screen size | criba / malla | OK termo técnico |
| análise sensorial | cupping (**locked**; não usar sensory analysis) | catación | "Cupping" é específico ao café e mais reconhecido por specialty buyers. **Ver §11** |
| prova de xícara | cup tasting / cupping | catación / prueba de taza | "Cupping" e "catación" são padrão na indústria |
| análise de umidade | moisture analysis | análisis de humedad | OK |
| amostra | sample | muestra | OK |
| defeito | defect | defecto | OK |
| pontuação SCA | SCA score / cupping score | puntuación SCA | Sigla SCA mantém |

### 3.6 Logística

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| embarque | shipping (**locked**; não usar loading) | embarque | "Shipping" é o processo logístico; "loading" seria só carregar caminhão/contêiner. **Ver §11** |
| desembarque | unloading | desembarque | OK |
| nota fiscal de remessa | shipping invoice / freight invoice | factura de envío / guía de remisión | varia por país |
| agendamento de embarque | shipping scheduling | programación de embarque | OK |
| logística | logistics | logística | OK |
| pós-venda | after-sales / post-sale | postventa | "After-sales" mais comum |
| FOB / FCL / CIF | mantém siglas | mantém siglas | Incoterms internacionais |

---

## 4. Conceitos de valor (Princípios da empresa)

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| Tradição | Tradition | Tradición | OK |
| Confiança | Trust | Confianza | OK |
| Transparência | Transparency | Transparencia | OK |
| Seriedade | Integrity (**locked**; não usar Reliability) | Seriedad | **"Seriousness" em EN soa errado** (parece doença/gravidade). "Integrity" é melhor. |
| Excelência | Excellence | Excelencia | OK |
| Compromisso | Commitment | Compromiso | OK |
| Respeito | Respect | Respeto | OK |
| Responsabilidade | Responsibility / Accountability | Responsabilidad | "Accountability" se for prestação de contas; "responsibility" se for atribuição |
| Qualidade | Quality | Calidad | OK |
| Parceria | Partnership | Alianza / Colaboración | "Alianza" tem peso comercial mais forte em ES |
| Praticidade | Convenience / Ease | Practicidad | "Convenience" se foca no usuário; "ease" se foca no processo |
| Clareza | Clarity | Claridad | OK |

---

## 5. Frases-âncora (slogans, hero, CTAs)

### Hero

Hero "Painel", em vigor desde 09/09/2026. As frases anteriores (Tradição / Confiança rotativo,
"no mercado cafeeiro", "Explorar Serviços") saíram do site.

| PT | EN | ES |
|----|-----|-----|
| [Corretora de café · São Sebastião do Paraíso, MG] | [Coffee brokerage · São Sebastião do Paraíso, MG] | [Corretaje de café · São Sebastião do Paraíso, MG] |
| [Corretora de café · Desde 2015] (mobile) | [Coffee brokerage · Since 2015] | [Corretaje de café · Desde 2015] |
| Conectando seu CAFÉ ao MERCADO. | Connecting your COFFEE to the MARKET. | Conectando su CAFÉ al MERCADO. |
| Desde 2015, conectamos produtores, compradores e exportadoras às oportunidades do mercado. | Since 2015, we have connected growers, buyers and exporters to market opportunities. | Desde 2015, conectamos productores, compradores y exportadoras a las oportunidades del mercado. |
| Solicitar serviço (CTA principal, igual ao header) | Get started | Solicitar cotización |
| Conhecer os serviços (link, só desktop) | Explore our services | Conocer los servicios |
| Selo: SAFRAS & NEGÓCIOS · CORRETORA DE CAFÉ · DESDE 2015 | SAFRAS & NEGÓCIOS · COFFEE BROKERAGE · SINCE 2015 | SAFRAS & NEGÓCIOS · CORRETAJE DE CAFÉ · DESDE 2015 |
| Selo (mobile): SAFRAS & NEGÓCIOS · CAFÉ · DESDE 2015 | SAFRAS & NEGÓCIOS · COFFEE · SINCE 2015 | SAFRAS & NEGÓCIOS · CAFÉ · DESDE 2015 |

Regras aplicadas: "café" e "mercado" em caixa alta por CSS, não no dicionário; produtor → grower;
análise sensorial → cupping / catación no `alt` da foto; nome da cidade sem tradução.

### Sobre nós

| PT | EN | ES |
|----|-----|-----|
| [ Sobre nós ] | [ About ] | [ Sobre Nosotros ] |
| Conectamos a origem ao mercado. | We connect origin to market. | Conectamos el origen al mercado. |
| Desde 2015, oferecemos consultoria e intermediação de café com a transparência e seriedade que produtores e compradores esperam. | Since 2015, we have offered coffee advisory and brokerage with the transparency and integrity that growers and buyers expect. | Desde 2015, ofrecemos asesoría y corretaje de café con la transparencia y seriedad que productores y compradores esperan. |

### Serviços

| PT | EN | ES |
|----|-----|-----|
| [ Serviços ] | [ Services ] | [ Servicios ] |
| Soluções completas para o seu café | End-to-end solutions for your coffee | Soluciones integrales para su café |
| Da origem à comercialização, oferecemos serviço estratégico para produtores, compradores, empresas e exportadoras do mercado. | From origin to trade, we deliver strategic service for growers, buyers, companies and exporters in the market. | Del origen a la comercialización, ofrecemos servicio estratégico para productores, compradores, empresas y exportadoras del mercado. |

### Princípios

| PT | EN | ES |
|----|-----|-----|
| [ Princípios ] | [ Principles ] | [ Principios ] |
| Como trabalhamos. | How we work. | Cómo trabajamos. |
| Pilares que sustentam a excelência no trabalho em cada parceria. | Pillars that uphold excellence in our work, in every partnership. | Pilares que sustentan la excelencia del trabajo en cada alianza. |

### CTAs principais

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| Solicitar serviço | Get started | Solicitar cotización | "Service" sozinho em EN é fraco. "Request a Quote" é B2B clássico. "Get Started" é mais punchy. **Ver §11.** Caixa de sentença desde 09/09/2026, como o resto dos botões do site |
| Falar pelo WhatsApp (link direto) · Conversar pelo WhatsApp (caixa de erro) | Chat on WhatsApp (nos dois casos) | Hablar por WhatsApp · Conversar por WhatsApp | Não usar "Chatear" em ES |
| Voltar ao topo | Back to top | Volver arriba | OK |
| Enviar solicitação (botão do formulário) | Send request | Enviar solicitud | Acompanha o CTA "Solicitar serviço": o formulário é uma solicitação, não uma mensagem |

### Footer tagline

| PT | EN | ES |
|----|-----|-----|
| Tradição e Confiança no mercado cafeeiro. | Tradition and Trust in the coffee market. | Tradición y Confianza en el mercado cafetero. |

---

## 6. Anchors (URLs internas)

Cada idioma traduz os anchors. A rota `/en/#contact` é equivalente a `/#contato` em PT, etc.

| ID PT | EN | ES |
|-------|-----|-----|
| #hero | #home | #inicio |
| #servicos | #services | #servicios |
| #quem-somos | #about | #sobre-nosotros |
| #contato | #contact | #contacto |

---

## 7. Navegação & UI (microcopy)

### Header

| PT | EN | ES |
|----|-----|-----|
| Home | Home | Inicio |
| Serviços | Services | Servicios |
| Sobre nós | About | Sobre Nosotros |
| Contato | Contact | Contacto |
| Solicitar serviço (CTA) | Get started | Solicitar cotización |
| Pular para o conteúdo | Skip to content | Saltar al contenido |
| Safras & Negócios — Ir para o topo | Safras & Negócios — Back to top | Safras & Negócios — Volver arriba |
| Abrir menu | Open menu | Abrir menú |
| Fechar menu | Close menu | Cerrar menú |
| Menu principal | Main menu | Menú principal |

### Sections — labels e títulos secundários

| PT | EN | ES |
|----|-----|-----|
| Nossa história | Our history | Nuestra historia |
| Nossa missão | Our mission | Nuestra misión |
| Nossa visão | Our vision | Nuestra visión |
| Nossos valores | Our values | Nuestros valores |
| Sediado em | Based in | Con sede en |
| Desde (rótulo do ano de fundação; substituiu "Anos de história") | Since | Desde |
| Em breve | Coming soon | Próximamente |
| Carregando | Loading | Cargando |

### Cards de serviço — strips (lista de itens)

| PT | EN | ES |
|----|-----|-----|
| Consultoria comercial | Commercial advisory | Asesoría comercial |
| Mercado físico | Physical market | Mercado físico |
| Mercado futuro | Futures market | Mercado de futuros |
| Conexão Produção/Exportação | Production/Export bridge | Conexión Producción/Exportación |
| CPR financeira | Financial CPR | CPR financiero |
| Classificação de grãos | Bean grading | Clasificación de granos |
| Análise sensorial | Cupping | Catación |
| Análise de umidade | Moisture analysis | Análisis de humedad |
| Embarque | Shipping | Embarque |
| Desembarque | Unloading | Desembarque |
| Suporte Pós Venda | After-sales support | Soporte postventa |

---

## 8. Formulário de contato (microcopy crítica)

### Labels (campos reais do formulário, desde 21/07/2026)

| PT | EN | ES | Nota |
|----|-----|-----|------|
| Nome | Name | Nombre | |
| E-mail | Email | Correo electrónico | |
| Telefone | Phone | Teléfono | |
| Estado | State / Country | Estado / País | Texto livre; no analytics vira sigla de UF, `outro` ou `nao_informado` |
| Perfil | Profile | Perfil | `<select>`, opções abaixo |
| Interesse | Interest | Interés | `<select>` opcional, opções abaixo |
| Mensagem | Message | Mensaje | Opcional |
| Enviar solicitação | Send request | Enviar solicitud | Botão |

Os campos "Empresa" e "Assunto", previstos na primeira versão deste glossário, não existem.

### Opções de Perfil

| PT | EN | ES |
|----|-----|-----|
| Produtor | Grower | Productor |
| Comprador / Trader | Buyer / Trader | Comprador / Trader |
| Exportador | Exporter | Exportador |
| Cooperativa | Cooperative | Cooperativa |
| Instituição financeira | Financial institution | Institución financiera |
| Parceiro | Partner | Aliado |
| Outro | Other | Otro |

### Opções de Interesse

| PT | EN | ES |
|----|-----|-----|
| Intermediação e negociação de café | Coffee brokerage and trading | Corretaje y negociación de café |
| Mercado físico | Physical market | Mercado físico |
| Mercado futuro | Futures market | Mercado de futuros |
| CPR | CPR | CPR |
| Classificação e análise de qualidade | Grading and quality analysis | Clasificación y análisis de calidad |
| Prova sensorial | Cupping | Catación |
| Embarques e conferências | Shipping and inspections | Embarques e inspecciones |
| Outro assunto | Other subject | Otro asunto |

O `value` de cada opção é um slug estável e é o que vai ao analytics — nunca o rótulo traduzido
(decisão de 20/08/2026, registro operacional).

### Estados

| PT | EN | ES |
|----|-----|-----|
| Enviando... | Sending... | Enviando... |
| Recebemos sua solicitação. Nossa equipe entrará em contato pelos dados informados. | We have received your request. Our team will contact you using the details provided. | Recibimos su solicitud. Nuestro equipo se pondrá en contacto mediante los datos informados. |
| Não foi possível enviar agora. Fale conosco por um dos canais abaixo: | Unable to send right now. Please contact us through one of the channels below: | No fue posible enviar ahora. Contáctenos a través de uno de los siguientes canales: |

### Validação

A validação é a nativa do navegador (`checkValidity()` / `reportValidity()`), com as mensagens do
próprio navegador no idioma do usuário. Não há strings de validação nos dicionários.

### Mensagens contextuais do WhatsApp

Texto pré-preenchido ao clicar no botão WhatsApp:

| PT | EN | ES |
|----|-----|-----|
| Olá! Encontrei a Safras & Negócios pelo site e gostaria de mais informações. | Hello! I found Safras & Negócios through the website and would like more information. | ¡Hola! Encontré Safras & Negócios a través del sitio web y me gustaría recibir más información. |

---

## 9. Termos jurídicos e de privacidade

Vocabulário da política de privacidade, adicionado em 20/08/2026. A referência em PT é a
**LGPD (Lei nº 13.709/2018)**; em EN, o vocabulário do **GDPR**, que é o padrão internacional que o
público estrangeiro reconhece; em ES, a terminologia hispano-americana de proteção de dados.

| PT | EN | ES | Justificativa |
|----|-----|-----|---------------|
| dados pessoais | personal data (não usar personal information) | datos personales | "Personal data" é o termo do GDPR. "Personal information" é o uso norte-americano — mais coloquial, menos preciso |
| titular (dos dados) | data subject | titular (de los datos) | "Data subject" é o termo técnico consagrado. "Owner" seria errado: o titular não é proprietário no sentido patrimonial |
| tratamento (de dados) | processing | tratamiento | ❗ **Nunca "treatment"** — em EN significa tratamento médico ou modo de lidar com alguém. "Processing" é o termo legal |
| controlador | controller | responsable (del tratamiento) | ES hispano-americano usa "responsable", não "controlador" |
| operador | processor | encargado (del tratamiento) | Segue o par controller/processor do GDPR |
| base legal | legal basis | base legal | OK |
| consentimento | consent | consentimiento | OK |
| finalidade | purpose | finalidad | ❗ Nunca "finality" |
| compartilhamento | sharing / disclosure | compartición / comunicación | "Disclosure" quando for revelação a terceiro; "sharing" no uso corrente |
| eliminação | erasure (não usar deletion) | eliminación / supresión | "Erasure" é o termo do GDPR ("right to erasure"); "deletion" é o corrente |
| anonimização | anonymization | anonimización | OK |
| portabilidade | portability | portabilidad | OK |
| revogar o consentimento | withdraw consent | revocar el consentimiento | ❗ Nunca "revoke consent" em EN — "withdraw" é o verbo do GDPR |
| prazo de guarda / retenção | retention period | plazo de conservación | ES prefere "conservación" a "retención" |
| política de privacidade | privacy policy | política de privacidad | OK |
| cookie | cookie | cookie | Termo internacional, não se traduz |
| armazenamento de sessão | session storage | almacenamiento de sesión | Termo técnico do navegador |
| preferências (de cookies) | cookie preferences | preferencias de cookies | Rótulo do painel e do link do rodapé |
| necessários | necessary | necesarias | Categoria de cookie. ❗ Nunca "essential" em EN nesta interface — "necessary" é o termo do GDPR |
| medição de audiência | audience measurement | medición de audiencia | ❗ Preferido a "analytics" na interface. O visitante entende a finalidade, não a ferramenta |
| sempre ativo | always on | siempre activa | Estado da categoria necessária. ES concorda com "cookie", que é feminino |
| aceitar / recusar | accept / reject | aceptar / rechazar | ❗ Em EN, **"reject"**, não "decline" nem "manage" — recusar precisa ser explícito |
| dados de navegação | browsing data | datos de navegación | O que a medição coleta. Evita "dados de uso", vago demais para uma política |
| públicos semelhantes | similar-audience | públicos similares | Recurso de publicidade do GA4 que o site **não** usa. Nomeado na política justamente para negá-lo |
| remarketing | remarketing | remarketing | Não se traduz nos três idiomas: é o nome do recurso no painel do Google, e traduzir tornaria a negativa ambígua |

### Aceitar e recusar têm o mesmo peso

O par **Aceitar / Recusar** é uma exigência legal antes de ser uma decisão de design: recusar
precisa ser tão fácil quanto aceitar. Isso vale para a tradução também — nada de suavizar o verbo
de recusa em nenhum idioma. "Reject", "Rechazar", "Recusar". Sem eufemismo, sem "Gerenciar", sem
transformar a recusa num link discreto enquanto o aceite é um botão.

### Regra de tom para a política

Texto jurídico neste site é **explicativo, não defensivo**. Frase curta, voz ativa, sem
"outrossim", sem "o presente instrumento". O leitor é um produtor ou comprador de café, não um
advogado. Em EN e ES vale o mesmo: clareza acima de formalidade.

### Rota da página

| Chave | PT | EN | ES |
|-------|-----|-----|-----|
| `privacidade` | `/privacidade` | `/en/privacy` | `/es/privacidad` |

Registrada em `src/i18n/routes.ts`, que é a fonte da verdade das rotas traduzidas — o equivalente
de `anchors.ts` para páginas. Ver §6.

---

## 10. Formatos locais (datas, números, telefone)

| | PT-BR | EN (US English) | ES |
|---|-------|-----------------|-----|
| Data curta | 14/05/2026 | May 14, 2026 | 14 de mayo de 2026 |
| Data longa | 14 de maio de 2026 | May 14, 2026 | 14 de mayo de 2026 |
| Número grande | 1.000 | 1,000 | 1.000 |
| Decimal | 1,5 | 1.5 | 1,5 |
| Moeda (se aparecer) | R$ 1.500,00 | R$ 1,500.00 ou US$ 1,500.00 | R$ 1.500,00 ou US$ 1.500,00 |
| Telefone | (35) 98461-7193 | +55 (35) 98461-7193 | +55 (35) 98461-7193 |

---

## 11. Decisões finais (resolvidas em 2026-05-14)

✅ **Todas as decisões abaixo foram tomadas e estão locked**. Manter como referência histórica.

### Resumo executivo

| # | Termo | Decisão final | Não usar |
|---|-------|---------------|----------|
| 1 | "fazenda" (EN) | **estate** | farm |
| 2 | "fazenda" (ES) | **finca** | hacienda, fazenda |
| 3 | "produtor" (EN) | **grower** | producer |
| 4 | CTA "Solicitar serviço" | **Get started** (caixa de sentença desde 09/09/2026) | Request a Quote, Contact Us |
| 5 | "análise sensorial" (EN) | **cupping** | sensory analysis |
| 6 | "embarque" (EN) | **shipping** | loading |
| 7 | "Anos de história" (EN) | **Years in business** — string fora do site em 10/09/2026; o contador mostra "Desde / Since" | expertise, market |
| 8 | "Sobre nós" (EN) | **About** | About Us |
| 9 | "Seriedade" (EN) | **Integrity** | Reliability, Seriousness |

**Racional unificado**: posicionamento da Safras é **B2B specialty premium**. Os termos escolhidos refletem isso (estate / grower / cupping = vocabulário specialty coffee); o CTA "Get started" é punchier e mais moderno que o tradicional "Request a Quote"; "About" minimalista é o padrão de sites institucionais atuais; "Integrity" é a tradução correta de "seriedade" para B2B EN.

### Rationale detalhado por decisão

### 11.1 "fazenda" — qual termo em EN?
- **"estate"**: tom premium, vocabulário specialty coffee. Sugere fazenda grande/icônica. Bom se o público-alvo são roasters/importadoras especialty.
- **"farm"**: genérico, mais inclusivo. Cobre fazendas de todos os tamanhos.
- **Pergunta**: O cliente típico internacional da Safras valoriza specialty (origens, microlotes) ou é mais commodity/volume?

### 11.2 "fazenda/finca" — qual termo em ES?
- **"finca"**: usado em Colômbia, Costa Rica, El Salvador, Cuba. Conota cafezais de montanha.
- **"hacienda"**: usado em México, Equador. Conota propriedade rural maior.
- **"fazenda"**: termo brasileiro. Pode ser mantido como brasileirismo? (alguns sites mantêm)
- **Pergunta**: Onde estão os principais prospects em ES — México (hacienda), Colômbia (finca), ou geral?

### 11.3 "produtor" em EN
- **"grower"**: específico do specialty coffee, sugere atenção à qualidade.
- **"producer"**: genérico, cobre desde fazenda pequena até grande operação.
- **Pergunta**: Mesmo do item 11.1.

### 11.4 "Solicitar Serviço" (CTA do header)
- **"Request a Quote"**: B2B clássico, claro, mas pressupõe orçamento.
- **"Get Started"**: punchy, moderno, abre conversação.
- **"Contact Us"**: simples, conservador.
- **"Request Service"**: literal, mas fraco.
- **Pergunta**: Qual tom prefere — formal-comercial ou casual-convidativo?

### 11.5 "análise sensorial" em EN
- **"cupping"**: termo da indústria specialty, reconhecido por roasters/importers.
- **"sensory analysis"**: mais formal, inclui não-especialistas.
- **Pergunta**: Os serviços são vendidos pra specialty (cupping) ou comércio geral (sensory analysis)?

### 11.6 "embarque" em EN
- **"loading"**: carregar fisicamente caminhão/contêiner.
- **"shipping"**: o processo logístico inteiro.
- A Safras faz a operação física ou agenda/coordena com terceiros? Define qual termo cabe.

### 11.7 "Anos de história" em EN
- **"Years in business"**: foca em estabilidade comercial.
- **"Years of expertise"**: foca em know-how acumulado.
- **"Years in the market"**: literal.

### 11.8 "Sobre nós" em EN
- **"About"**: minimalista, padrão de site moderno.
- **"About Us"**: mais formal, inclusivo (sugere humanidade).
- Preferência?

### 11.9 "Seriedade" em EN
- **"Integrity"**: caráter ético, padrão B2B.
- **"Reliability"**: confiabilidade operacional.
- Recomendo "Integrity" mas confirma.

---

## 12. Workflow de manutenção (futura)

Quando adicionar nova string ao site:
1. Adicionar a chave em `src/i18n/pt-br.ts` primeiro.
2. Buscar termos similares no glossário — usar mesma decisão.
3. Adicionar tradução em `en.ts` e `es.ts` seguindo o glossário.
4. Se o termo é novo (não documentado), adicionar entrada aqui no glossário.

**Nunca traduzir uma string sem verificar se já existe decisão no glossário.**

---

## 13. Referências consultadas

- SCA (Specialty Coffee Association) — vocabulário oficial: cupping, grading, scoring.
- Volcafe, Sucafina, Cafe Imports — tom B2B internacional.
- Federación Nacional de Cafeteros (Colombia) — vocabulário ES profissional.
- ICO (International Coffee Organization) — termos formais multilíngue.
