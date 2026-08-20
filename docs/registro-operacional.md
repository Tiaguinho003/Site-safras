# Registro operacional — Safras & Negócios

Log append-only do programa. Duas coisas vivem aqui:

1. **Registro de decisões** — o que foi decidido, por quê, por quem e quando revisar.
2. **Histórico de execução** — o que foi feito, com evidência e próximo passo.

Foi separado de [`plano-seo-programatico.md`](./plano-seo-programatico.md) em 2026-08-20 porque
ambas as listas crescem indefinidamente e estavam empurrando o roadmap para o fim de um arquivo de
1.258 linhas. O plano responde *"para onde vamos"*; este arquivo responde *"o que já decidimos e
fizemos"*.

**Regra:** entradas nunca são apagadas nem reescritas. Uma decisão superada ganha uma nova linha
que a substitui, e a antiga permanece para preservar o rastro.

> **Este repositório é público.** Não registrar aqui CNPJ, razão social, nomes de sócios,
> endereços não publicados, e-mails internos, chaves ou dados de clientes. Quando um registro
> depender desses dados, referenciar "registro privado da empresa" e manter os identificadores
> fora do Git.

---

## Registro de decisões

| Data | Fase | Decisão | Motivo | Responsável | Revisar em |
|---|---:|---|---|---|---|
| 20/07/2026 | Geral | Adotar SEO programático assistido | Permite escala controlada com revisão e valor real | A definir | Encerramento da Fase 0 |
| 20/07/2026 | Geral | Não criar uma página para cada palavra-chave | Evita duplicidade, doorway pages e risco de spam | A definir | Permanente |
| 20/07/2026 | Geral | Executar uma fase por vez | Permite aprender e melhorar antes de ampliar | A definir | A cada gate |
| 20/07/2026 | 0 | Remover depoimentos não reais; autorização recebida e execução local concluída | Integridade e confiança são pré-condições do programa | Gilson Souza | Após publicação |
| 20/07/2026 | 0 | Não publicar razão social e CNPJ neste momento | O nome comercial foi considerado suficiente para a comunicação pública atual | Gilson Souza | Ao revisar identidade institucional |
| 20/07/2026 | 0 | ~~Adotar `(35) 3531-4046` como telefone e WhatsApp oficial~~ — **superada em 20/08/2026** | Eliminar divergência de contato no site | Gilson Souza | Quando houver mudança oficial |
| 20/07/2026 | 0 | Gilson Souza assume inicialmente as responsabilidades comercial, editorial, técnica e factual | Há um responsável nominal único nesta fase | Gilson Souza | Ao ampliar a equipe editorial |
| 20/07/2026 | 2 | Tratar a configuração atual do Web3Forms como temporária até recuperar sua governança | Não há conta administrativa confirmada para a chave existente | Gilson Souza | Antes de ampliar tráfego |
| 20/07/2026 | 0 | Distinguir empresa fundada em 2015 da experiência de 30+ anos de Gilson | Evita alegação institucional incorreta | Editorial | Permanente |
| 20/07/2026 | 2 | Não enviar PII ao Analytics ou BigQuery de SEO | Política do Google, minimização e privacidade | Técnico | Permanente |
| 20/07/2026 | 2 | Iniciar com e-mail e planilha privada manual | Baixo custo e controle operacional inicial | Gilson Souza / titular do destinatário interno | Ao atingir gatilhos |
| 20/07/2026 | 4 | Usar URLs sem barra final | Convenção já adotada pelo Astro e Firebase | Técnico | Permanente |
| 20/07/2026 | 6 | PT-BR primeiro; EN/ES somente com revisão | Preserva qualidade e alternates corretos | Editorial | Por lote |
| 20/07/2026 | Geral | Não contratar mensalidade sem aprovação específica | Custo deve ter benefício demonstrável | Proprietário | Antes de contratar |
| 21/07/2026 | 0 | Separar o e-mail público `atendimento@safrasnegocios.com.br` do destinatário interno (registro privado) | Preserva clareza comercial e evita expor o canal operacional do formulário | Gilson Souza | Quando houver mudança oficial |
| 21/07/2026 | 0 | Aprovar o pacote de contatos, campos do formulário, mensagem de sucesso textual e canais alternativos | Reduz atrito, melhora organização dos leads e evita perda de contato em caso de falha | Gilson Souza | Após validação em produção |
| 21/07/2026 | 0 | Adotar publicamente “Desde 2015” | Evita confundir a idade da empresa com a experiência pessoal de Gilson | Gilson Souza | Permanente |
| 21/07/2026 | 0 | Não contratar o plano pago do Web3Forms apenas para restrição de domínio nesta etapa | O recurso é pago e qualquer mensalidade exige aprovação específica | Gilson Souza | Se spam ou volume justificarem |
| 21/07/2026 | 0 | Adiar a apresentação nominal do proprietário e dos funcionários para uma futura página de equipe | A estrutura e o conteúdo dessa apresentação ainda serão planejados | Empresa | Ao planejar a página de equipe |
| 21/07/2026 | 0 | Aprovar diferenciais verificáveis sem citar o proprietário | Mantém a comunicação factual e compatível com a etapa atual do site | Empresa | Ao revisar conteúdo institucional |
| 21/07/2026 | 0 | Publicar depoimentos futuros somente com autorização registrada | Protege a integridade, a imagem e o direito de retirada | Empresa | Antes de cada publicação |
| 21/07/2026 | 0 | Não apresentar nomes, logotipos, contratos ou negociações de clientes e entidades sem autorização específica | Preserva confidencialidade e evita uso indevido de marca | Empresa | Permanente |
| 21/07/2026 | 0 | Reter leads por 12 meses após a última interação | Equilibra continuidade comercial e minimização de dados | Cadastro e Comercial | Ao implementar a planilha |
| 21/07/2026 | 0 | Permitir acesso à planilha para pessoas autorizadas dos setores de cadastro e comercial | O processo envolve mais de uma função operacional | Empresa | Ao nomear usuários e responsabilidades |
| 21/07/2026 | 0 | Adotar meta interna de resposta em até um dia útil, sem promessa pública nesta etapa | Cria padrão operacional sem publicar compromisso ainda não medido | Comercial | Após medir o atendimento |
| 21/07/2026 | 0 | Fixar o teto atual em R$ 0 de novas mensalidades | Prioriza recursos existentes e exige aprovação para qualquer exceção | Empresa | Antes de contratar recurso pago |
| 21/07/2026 | 2 | Adiar Google Analytics até a finalização do site e da privacidade | A mensuração deve entrar com governança e transparência adequadas | Empresa | Após finalizar o site |
| 21/07/2026 | 0 | Manter Search Console e Google Business Profile pendentes até localizar os acessos administrativos | Ainda não foi identificado quem controla essas propriedades | Empresa | Assim que os acessos forem localizados |
| 21/07/2026 | Geral | Aprovar as práticas permitidas e proibidas do plano de SEO | Impede atalhos que prejudiquem reputação, qualidade ou indexação | Empresa | Permanente |
| 21/07/2026 | 1 | Aprovar as especificações técnicas da Fase 1 | Define antecipadamente domínio canônico, idiomas, 404, metadados, imagem social, dados estruturados, sitemap, robots e regra de publicação | Empresa | Durante a implementação e no gate da Fase 1 |
| 21/07/2026 | 0 | Aprovar a Fase 0 com pendências externas formalmente aceitas | Dados, responsáveis, orçamento e riscos foram tratados; os acessos pendentes possuem plano e não impedem o trabalho local | Empresa | Ao recuperar cada acesso |
| 21/07/2026 | 1 | Iniciar a Fase 1 somente no ambiente local | Permite corrigir e validar a base técnica antes de qualquer nova publicação | Empresa | Antes de commit, PR ou deploy |
| 21/07/2026 | 1 | Usar a foto real da fachada como imagem social inicial otimizada | Há um ativo verdadeiro e coerente com a entidade, sem criar imagem ou alegação artificial | Empresa / Técnico | Quando houver nova imagem institucional aprovada |
| 21/07/2026 | 1 | Remover a tela de carregamento artificial do caminho visual | O bloqueio mínimo de 900 ms atrasava a percepção de carregamento e podia prejudicar métricas | Técnico | No gate da Fase 1 |
| 20/08/2026 | 0 | Adotar a entidade fundada em 19/10/2015 como **única** entidade pública, com atendimento presencial na Av. Oliveira Rezende, 1397 — Jardim Bernadete | Existiam duas empresas registradas sob a mesma marca; o site misturava dados das duas. A segunda não será usada na comunicação | Proprietário | Se a estrutura societária mudar |
| 20/08/2026 | 0 | Confirmar que a alegação pública “Desde 2015” está correta | A data de fundação pertence à entidade pública adotada | Proprietário | Permanente |
| 20/08/2026 | 0 | Confirmar sócio proprietário **único** | Corrige a leitura de fontes públicas que sugeriam mais de um sócio | Proprietário | Se a estrutura societária mudar |
| 20/08/2026 | 0 | Adotar `(35) 98461-7193` como telefone e WhatsApp **único**, substituindo `(35) 3531-4046` em todo o site | O número anterior não é o canal principal de atendimento. Número único para ligação e WhatsApp reduz atrito e evita NAP divergente | Proprietário | Ao incluir contatos de funcionários |
| 20/08/2026 | 0 | Confirmar **atuação exclusiva em café** | Define o descritor da marca como corretora de café, sem outras commodities | Proprietário | Se a atuação for ampliada |
| 20/08/2026 | 4 | Não incluir a cidade no título das páginas | Decisão do cliente, ciente da recomendação de SEO local. O descritor geográfico segue disponível como opção futura | Proprietário | Ao revisar títulos com dados do Search Console |
| 20/08/2026 | 1 | Medir performance pela **API do PageSpeed Insights**, reportando a **mediana** de N execuções, e não por Lighthouse local | O Lighthouse local herda a contenção de CPU da máquina; a mesma URL oscilava entre 89 e 99. O PSI roda em infraestrutura padronizada do Google e é a mesma medida que o buscador reporta | Técnico | Ao passar a ter dados de campo (CrUX/INP), que substituem o laboratório como referência |
| 20/08/2026 | 1 | Registrar sempre a **amplitude** entre execuções junto da mediana | Número solto sem método foi o que travou o gate por semanas. Amplitude alta significa medição não confiável, não site lento | Técnico | Permanente |
| 20/08/2026 | 1 | Encerrar a **Fase 1 como APROVADA**, com 7 de 7 itens do gate | Última pendência era o Lighthouse do espanhol, que a medição confiável mostrou ser ruído: 100 nas três línguas, amplitude 0 em 18 execuções | Técnico | Se alguma métrica regredir em medição futura |
| 20/08/2026 | 1 | **Não** otimizar o bloco de script bloqueante de idioma agora | É o único JavaScript verdadeiramente bloqueante da página (2.559 b, sem `type="module"`), mas o TBT medido é 0 ms. Otimizar sem problema medido é trabalho no escuro | Técnico | Se o TBT subir acima de 200 ms em medição futura |
| 20/08/2026 | 2 | Adotar **slugs traduzidos por idioma** — `/privacidade`, `/en/privacy`, `/es/privacidad` | URL na língua do leitor é sinal de relevância e mantém coerência com os anchors, que já são traduzidos. Decidido com uma página em vez de quinze, quando o custo de mudar ainda é baixo | Proprietário | Se a estrutura de URLs for revista na Fase 4 |
| 20/08/2026 | 2 | Criar o registro `routeKey → locale → pathname` em `src/i18n/routes.ts` | `localizeURL()` trocava só o prefixo de idioma e assumia o mesmo slug em todos. Com slug traduzido, publicaria `hreflang` apontando para 404. O registro corrige num só lugar canonical, hreflang, x-default, switcher e sitemap | Técnico | Ao adicionar rotas na Fase 4 |
| 20/08/2026 | 2 | Identificar o controlador na política por **nome fantasia, endereço e e-mail**, sem CNPJ nem razão social | Atende à exigência de identificação da LGPD sem versionar dado societário em repositório público. Ver os boundaries do `CLAUDE.md` | Proprietário | Se a identificação for questionada juridicamente |
| 20/08/2026 | 2 | A política descreve **apenas o que existe hoje** e será atualizada antes de qualquer medição entrar | Descrever cookie ou analytics inexistente seria declaração falsa. O compromisso de atualizar antes está escrito na própria página | Técnico | A cada mudança no tratamento de dados |
| 20/08/2026 | 0 | Grafia oficial do endereço: **Oliveira Rezende**, com Z | O código usava Z em 5 pontos e está em produção desde o lançamento; a documentação usava S em 2. Divergência levada ao cliente, que confirmou o Z | Proprietário | Permanente |
| 20/08/2026 | 2 | Adotar **GA4 com Consent Mode v2** como ferramenta de medição | Única opção sem custo que registra os eventos de conversão da Fase E. Alternativas cookieless gratuitas medem visitas, mas não medem contato gerado — o que inviabilizaria o objetivo do programa | Proprietário | Se o custo ou a política do Google mudarem |
| 20/08/2026 | 2 | Banner com **Aceitar e Recusar de peso visual idêntico**, mais Preferências | Recusar precisa ser tão fácil quanto aceitar. Botão de recusa discreto cumpre a letra e burla o propósito da regra. A paridade é verificada por teste automatizado, não por inspeção visual | Proprietário | Permanente |
| 20/08/2026 | 2 | Negar **permanentemente** os sinais de publicidade do Consent Mode | O site não faz publicidade nem remarketing. Travar no código impede que uma configuração descuidada do GA4 conceda o que nunca foi pedido, e evita oferecer na interface um controle que não corresponde a nada | Técnico | Se a empresa passar a anunciar |
| 20/08/2026 | 2 | Respeitar o **Global Privacy Control** como recusa, sem exibir o banner | O visitante já declarou a escolha no navegador; perguntar de novo seria ignorá-la. O link do rodapé permanece para quem quiser mudar de ideia | Técnico | Permanente |
| 20/08/2026 | 2 | Cookie de consentimento **sem identificador**: só decisão, data e versão | Um cookie de consentimento que carrega ID vira ele mesmo um dado pessoal. Contrapartida assumida: não há prova individual de consentimento, apenas a decisão e a data | Técnico | Se houver exigência legal de prova individual |
| 20/08/2026 | 2 | Cookie funcional de idioma **fora** do consentimento | `safras_locale` é preferência do usuário, não rastreamento. Colocá-lo sob consentimento faria o site esquecer o idioma de quem recusa — regressão visível num site trilíngue | Técnico | Permanente |
| 20/08/2026 | 2 | Publicar a CSP do analytics **antes** de instalar o GA4 | CSP desatualizada bloqueia o script sem erro visível: a ferramenta parece instalada e não coleta nada. Com a permissão publicada, a Fase D vira mudança puramente aditiva | Técnico | A cada serviço externo novo |
| 20/08/2026 | Geral | **Não** usar login como estratégia de SEO nem de captação de dados | Conteúdo atrás de autenticação é invisível ao buscador — o Googlebot não faz login, então uma biblioteca trancada contribui com zero para o ranqueamento. Some-se a isso que volume de páginas não melhora posição desde que o critério passou a ser propósito e valor | Proprietário | Se o modelo de negócio passar a depender de assinatura |
| 20/08/2026 | Geral | Captar lead por **troca de valor**, não por pedágio | A pessoa entrega o dado em troca de algo que quer — boletim de preços, alerta por praça —, não porque existe um campo. Formulário obrigatório antes do conteúdo derruba permanência na página, que é sinal de qualidade lido pelo buscador | Proprietário | Permanente |
| 20/08/2026 | 2 | Consentimento de **marketing separado** do consentimento de contato | O formulário declara que os dados servem "para analisar e responder ao seu contato". Usar os mesmos e-mails para boletim excede a finalidade declarada, e finalidade é limite na LGPD. A caixa de opt-in nasce separada e desmarcada — implantar antes de existir lista, porque depois obrigaria a descartá-la | Técnico | Ao criar o boletim |
| 20/08/2026 | Geral | Preferir **canal** de WhatsApp a grupo | Em grupo, todo participante vê o telefone dos demais. Com produtores e compradores na mesma sala, isso é exposição comercial além de questão de privacidade. Canal é transmissão de ida só, gratuito e sem expor ninguém | Proprietário | Se houver necessidade real de conversa entre participantes |
| 20/08/2026 | 2 | Entregar o código da medição **inerte**, governado por variável de build vazia | Criar a propriedade do GA4 e verificar o Search Console são passos no painel do Google, fora do repositório. Bloquear a entrega neles adiaria código já pronto; entregá-lo desligado permite revisar, testar e mesclar agora, e ativar depois com uma variável | Ao receber o `G-XXXXXXXXXX` |
| 20/08/2026 | 2 | Desligar **explicitamente** `allow_google_signals` e `allow_ad_personalization_signals` | Os dois vêm **ligados por padrão** no GA4 e são independentes do Consent Mode: negar `ad_*` no consentimento não os desliga. Sem esta linha, a implementação contradiria a política de privacidade já publicada | Permanente |
| 20/08/2026 | 2 | `cookie_expires` do GA4 alinhado aos 182 dias do consentimento | O padrão do GA4 é dois anos. Um cookie de medição que sobrevive à decisão que o autorizou mede quem já não consentiu | Se o prazo do consentimento mudar |
| 20/08/2026 | 2 | Retenção de dados no GA4: **14 meses** | Café é sazonal. Comparar safra com safra exige mais de um ciclo, e o padrão de 2 meses não permitiria ler sazonalidade alguma | Ao revisar o painel |
| 20/08/2026 | 2 | Política de privacidade com **duas versões** da seção de cookies, trocadas pela mesma variável | A política afirma que o site não mede audiência e promete ser atualizada antes da mudança entrar em vigor. Sem a troca automática, ela ficaria falsa no instante em que alguém preenchesse a variável — ou descreveria uma medição inexistente se fosse atualizada antes | Permanente |
| 20/08/2026 | 2 | Verificar o Search Console por **meta tag**, não por DNS | Reversível removendo uma variável, e não exige tocar na zona de DNS que hoje serve a produção | Se a propriedade precisar de verificação em nível de domínio |

## Histórico de execução

| Data | Fase | Ação | Resultado/evidência | Próximo passo |
|---|---:|---|---|---|
| 20/07/2026 | 0 | Criação deste plano operacional | Roadmap, gates e controles documentados | Levantar dados e acessos da Fase 0 |
| 20/07/2026 | 0 | Auditoria técnica e pesquisa oficial | Soft 404, sitemap/robots ausentes, lacunas de entidade, privacidade e i18n confirmadas | Consolidar respostas empresariais |
| 20/07/2026 | 0 | Respostas empresariais registradas | Dados institucionais, serviços, públicos, idiomas e restrições de custo documentados | Resolver pendências e autorizar H0 |
| 20/07/2026 | 0 | Plano atualizado para versão 2.0 | H0, lead mínimo viável e gates refinados | Aprovar ações da Fase 0 |
| 20/07/2026 | 0 | Novas confirmações empresariais registradas | WhatsApp, publicação de dados legais, responsáveis, GCP/Firebase, Web3Forms e planilha documentados | Resolver acessos e privacidade restantes |
| 20/07/2026 | H0 | Depoimentos fictícios removidos localmente nos três idiomas | Dados, markup, JS, CSS, anchors e referências enganosas removidos; contatos oficiais alinhados | Validar e publicar por PR autorizado |
| 20/07/2026 | H0 | Validação local concluída | `pnpm check` com 0 erros; build de 6 rotas; PT/EN/ES aprovados em mobile e desktop sem erro de runtime; diretiva TypeScript obsoleta removida | Solicitar autorização específica para commit, PR e deploy |
| 21/07/2026 | 0 | Governança do formulário confirmada | Destino alterado para o endereço interno definido no registro privado e recebimento real validado pelo usuário | Manter chave sob controle e acompanhar spam |
| 21/07/2026 | 0 | Pacote de contato e formulário aprovado para implementação | Quinze decisões comerciais e de apresentação aprovadas em conjunto | Validar código, build e apresentação antes de publicar |
| 21/07/2026 | 1 | Especificações da recuperação técnica registradas | Dez decisões aprovadas e documentadas sem iniciar a execução nem alterar o site | Encerrar ou aceitar formalmente as pendências da Fase 0 antes de iniciar a Fase 1 |
| 21/07/2026 | 0 | Gate de governança encerrado | Fase 0 aprovada com dados, responsáveis, teto de gastos, controles e pendências externas aceitas | Iniciar a Fase 1 localmente |
| 21/07/2026 | 1 | Auditoria local, pública e do GCP/Firebase concluída | Falso 200, ausência real de robots/sitemap, metadados incompletos, fluxo de deploy e estado da produção documentados | Implementar a base técnica |
| 21/07/2026 | 1 | Base técnica de recuperação implementada localmente | 404, robots, sitemap, canonical, hreflang, sugestão de idioma, metadados sociais, LocalBusiness, noindex e imagem social concluídos | Validar build, HTTP e experiência |
| 21/07/2026 | 1 | Validação técnica e visual local concluída | 0 erros; 7 rotas; sitemap com 3 URLs; URL inexistente 404; redirects 301/302; 404 e sugestão testados em desktop/mobile e em três idiomas | Auditar Lighthouse, acessibilidade e demais recursos |
| 20/08/2026 | Geral | Auditoria de presença externa | Conflito de entidade, NAP divergente, confusão de marca confirmada, ausência em diretório setorial, superfície de 1 URL contra 10 do concorrente de referência e canal social sem atribuição | Responder as decisões em aberto |
| 20/08/2026 | Geral | Acessos externos confirmados como disponíveis | Search Console, perfil comercial, rede social e DNS — encerra a pendência mais antiga do programa, aberta desde a Fase 0 | Verificar a propriedade no Search Console |
| 20/08/2026 | Geral | Reorganização da documentação | Criados `AGENTS.md` + `CLAUDE.md` espelhados, `registro-operacional.md`, `deploy.md` e `plano-ecossistema-comunicacao.md`; corrigido o drift factual de `arquitetura.md` e `design-system.md` (paleta, versão do Astro, estrutura de pastas, CI e preview deploy inexistentes, schema, i18n); plano reduzido e reindexado | Obter autorização para commit e PR |
| 20/08/2026 | Geral | Modo manutenção identificado como quebrado | `apply-maintenance.mjs` depende do rewrite curinga removido na Fase 1 e não remove as rotas `/en` e `/es` | Corrigido no mesmo dia |
| 20/08/2026 | Geral | Modo manutenção corrigido | Manutenção passa a ser servida em `/`, `/en` e `/es`; lista de permitidos substitui a de removidos; validação falha o build se o resultado não bater. Testado no emulador: 200 nas três homes, 302 em `/qr`, 301 em `/contato`, 404 real em URL desconhecida; build normal sem regressão (7 páginas) | Ativar só quando houver necessidade real |
| 20/08/2026 | 0 | Respostas do cliente às decisões bloqueantes registradas | Entidade pública única, endereço de atendimento, sócio único, “Desde 2015” validado, telefone `(35) 98461-7193` como número único e atuação exclusiva em café. Telefone substituído em 11 pontos do código, nos três idiomas | Credenciais setoriais e redação do descritor seguem em aberto |
| 20/08/2026 | 1 | Metodologia de medição implantada | API do PageSpeed Insights habilitada no projeto `site-safras` com chave restrita a ela; criado `scripts/measure-psi.mjs`, que mede as três homes, reporta mediana e amplitude e falha se alguma página reprovar no gate. A chave fica em `.env`, fora do versionamento | Medir as três homes |
| 20/08/2026 | 1 | Medição definitiva das três homes | **100 em PT, EN e ES**; LCP 1,43 s; TBT 0 ms; CLS < 0,001. **Amplitude 0 em todas as URLs, em 18 execuções distribuídas em duas rodadas independentes.** Confirma a hipótese de ruído de medição: a comparação estrutural dos três builds mostrou 2 tags e 1 byte de diferença entre eles | Encerrar o item do gate |
| 20/08/2026 | 1 | Pendência de IPv6 encerrada | `www` tem IPv6 via CNAME e responde; a máquina de teste não tem IPv6 global, o que explica a falha anterior. **Novo achado:** o domínio apex tem apenas registro `A`, sem `AAAA` | Tratar o apex quando a zona de DNS for tocada, confirmando antes no console do Firebase |
| 20/08/2026 | 1 | **Fase 1 encerrada como APROVADA** | 7 de 7 itens do gate atendidos e registrados com método, data e execuções individuais | Iniciar a Fase 2 pela infraestrutura de rotas e pela página de privacidade |
| 20/08/2026 | 2 | Registro de rotas traduzidas implantado | `src/i18n/routes.ts` criado no mesmo desenho de `anchors.ts`; `localizeURL()` passa a consultá-lo, com fallback para rotas não registradas; sitemap deixa de ser lista literal. Verificado: as três páginas de privacidade apontam reciprocamente umas às outras em `hreflang`, e o switcher navega para o slug traduzido | Publicar a política |
| 20/08/2026 | 2 | **Política de privacidade publicada nos três idiomas** | `/privacidade`, `/en/privacy`, `/es/privacidad`. Descreve os 7 campos do formulário, o encaminhamento por serviço externo, o cookie `safras_locale` e a ausência de analytics. Encerra o pré-requisito legal aberto desde 21/07/2026 | Implementar o consentimento de cookies |
| 20/08/2026 | 2 | Defeito do modo manutenção corrigido pela segunda vez | A poda só varria o primeiro nível: `/en/privacy` e `/es/privacidad` continuariam no ar enquanto `/privacidade` já teria sido removida. A poda agora desce um nível dentro das homes de idioma, com validação equivalente | Revalidar a cada rota nova sob `/en` ou `/es` |
| 20/08/2026 | 0 | E-mail interno removido da documentação | O endereço destinatário do formulário aparecia em 6 pontos do `plano-seo-programatico.md`, em repositório público — inclusive numa linha que dizia que ele *não deve aparecer publicamente*. Substituído por referência ao registro privado. Os arquivos atuais estão limpos, mas o endereço **permanece no histórico do Git** — o risco fica mitigado, não encerrado | Decidir se vale reescrever o histórico |
| 20/08/2026 | 2 | **Consentimento de cookies implantado** | Bootstrap inline como primeiro script da página, banner com Aceitar/Recusar de tamanho idêntico (144×44 medidos), painel de preferências em linha, revogação pelo rodapé e CSP publicada. 24 verificações automatizadas passaram, incluindo os casos que mais falham na prática: recusar grava recusa, GPC não é interrompido e o cookie de idioma sobrevive à recusa | Instalar o GA4 sob a comporta (Fase D) |
| 20/08/2026 | 2 | Política de privacidade atualizada no mesmo dia da publicação | A Fase C criou um segundo cookie, e a política dizia "um único cookie". Reescrita nos três idiomas descrevendo os dois, a revogação pelo rodapé e o respeito ao GPC | Atualizar de novo quando o GA4 entrar |
| 20/08/2026 | 2 | **GA4 sob consentimento implementado e entregue inerte** | `Analytics.astro` assina `window.__consent.onChange()` e carrega o `gtag.js` só com permissão, em `requestIdleCallback`. 12 verificações com Playwright passaram, incluindo as que decidem a fase: recusar não carrega nada, aceitar carrega, aceite anterior carrega sozinho e GPC não carrega. A configuração emitida traz `allow_google_signals: false`, `allow_ad_personalization_signals: false` e `cookie_expires` de 182 dias | Receber o `G-XXXXXXXXXX` do cliente |
| 20/08/2026 | 2 | Estado inerte verificado por diff contra `main` | Sem as variáveis, o HTML publicado difere do build de `main` em **dois caracteres de espaço** — não em conteúdo. Nenhuma requisição a domínio do Google, nenhuma meta de verificação, e as três políticas continuam declarando que o site não mede audiência | Manter as variáveis vazias até a ativação |
| 20/08/2026 | 2 | Dependência da data da política amarrada ao ponto de ativação | O texto da política troca sozinho na ativação, mas `privacy.updatedAt` é estático e ficaria para trás — e a própria política promete que a data muda junto. A obrigação foi escrita ao lado da variável no `cloudbuild.yaml` e em `deploy.md`, onde é impossível não ver ao preencher | Ao ativar o GA4 |
| 20/08/2026 | 2 | **Medição de audiência ativada** | Propriedade GA4 criada pelo cliente e `PUBLIC_GA4_MEASUREMENT_ID` preenchida. Retenção configurada em 14 meses no painel **antes** da publicação — a política afirma esse prazo, e publicar antes de ser verdade seria afirmação falsa sobre tratamento de dado pessoal. Verificado com o ID real: recusa não chama o Google, aceite chama `gtag/js`, GPC não chama; `allow_google_signals` e `allow_ad_personalization_signals` desligados. Requisições abortadas no teste, de modo que nenhum dado de teste entrou na propriedade | Verificar a propriedade no Search Console |

### Modelo para novas entradas

Copiar uma linha para o Histórico de execução e registrar:

- data;
- fase;
- ação realizada;
- responsável;
- arquivos ou páginas alterados;
- evidência antes e depois;
- métricas observadas;
- custo, se houver;
- risco ou pendência;
- próximo passo.


---

## Decisões em aberto

Decisões que dependem de confirmação externa e **bloqueiam** trabalho já identificado. Enquanto
não forem respondidas, nenhum agente deve alterar os itens dependentes.

| Aberta em | Tema | Pergunta | Bloqueia | Responsável |
|---|---|---|---|---|
| 20/08/2026 | Credenciais setoriais | A empresa possui registro, associação ou credenciamento setorial (ex.: centro de comércio de café estadual) que possa ser exibido? Também vale para certificações ou qualificações técnicas da equipe. | Conteúdo de autoridade (E-E-A-T), páginas institucionais da Fase 6, backlinks legítimos da Fase 10 | Proprietário |
| 20/08/2026 | Redação do descritor | A atuação exclusiva em café está confirmada e a cidade não entra no título. Falta definir a redação final do descritor, que hoje difere entre o site (“corretora de café”) e o perfil social (“corretora e consultora de multimercados”). | Padronização do descritor entre canais, bio das redes, perfil comercial | Proprietário |

Ao responder qualquer uma, mover a decisão para a tabela de Registro de decisões acima, com data e
motivo, e remover a linha daqui.

### Ideias registradas, fora de escopo

Não bloqueiam nada e não estão planejadas. Ficam aqui para não serem redescobertas do zero.

| Registrada em | Ideia | Situação |
|---|---|---|
| 20/08/2026 | **Área do cliente** — produtor acompanhando os próprios lotes, resultados de classificação e alertas de preço por praça | Faz sentido como relacionamento, **não** como SEO. Só depois de existir conteúdo aberto que traga o público que talvez queira uma conta. O custo real não é infraestrutura — o Firebase Authentication tem camada gratuita e o projeto GCP já existe —, é a responsabilidade de manter base de identidades e senhas |
| 20/08/2026 | **Boletim de preços por e-mail**, alimentado pelo Observatório da Fase 7 | Depende do consentimento de marketing separado e de ferramenta de envio. Camadas gratuitas existem, mas **os limites não foram verificados** — verificar antes de qualquer decisão, o teto de R$ 0 continua valendo |
| 20/08/2026 | **Canal do WhatsApp** para transmissão de preços e informações de mercado | Gratuito e independente do site. Pode começar antes de qualquer fase técnica |

### Resolvidas em 20/08/2026

- **Identidade da entidade** — resolvida: entidade única definida, endereço de atendimento
  confirmado, “Desde 2015” validado.
- **Telefone oficial** — resolvida: `(35) 98461-7193` como número único.

---

## Riscos registrados fora do plano

| Registrado em | Risco | Situação |
|---|---|---|
| 20/08/2026 | O e-mail interno destinatário do formulário aparece repetidamente na documentação de um repositório público, contrariando a própria decisão de 21/07/2026 que o define como não público. | **Mitigado em 20/08/2026:** removido dos 6 pontos em que aparecia; nenhum arquivo atual contém o endereço. **Permanece no histórico do Git** — eliminá-lo de lá exige reescrita de histórico, ação destrutiva pendente de autorização específica. |
| 20/08/2026 | A chave pública do Web3Forms está literal em `cloudbuild.yaml`, em repositório público, e a restrição por domínio é recurso pago não contratado. | Aceito conscientemente enquanto o volume for baixo. Reavaliar se surgir spam ou ao ampliar tráfego — gatilho já previsto na Fase 2. |
