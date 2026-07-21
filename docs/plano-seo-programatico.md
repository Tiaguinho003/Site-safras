# Plano de SEO, Alcance e Autoridade Digital

> Documento operacional vivo da Safras & Negócios.
> A equipe deve executar, medir e aprovar uma fase antes de iniciar a seguinte.

## 1. Controle do documento

| Campo | Valor |
|---|---|
| Projeto | Safras & Negócios |
| Repositório | `Tiaguinho003/Site-safras` |
| GCP/Firebase | `site-safras` |
| Criado em | 20/07/2026 |
| Versão | 2.1 |
| Fase ativa | Fase 0 — Governança, verdade comercial e preparação |
| Ação extraordinária | H0 — Remoção de conteúdo não verificável |
| Estado geral | EM ANDAMENTO — H0 validada localmente; publicação pendente |
| Última revisão | 20/07/2026 |
| Próxima revisão | Após publicação da H0 e conclusão das pendências obrigatórias da Fase 0 |

## 2. Objetivo

Construir presença orgânica duradoura para que a Safras & Negócios seja encontrada por produtores, compradores e parceiros quando pesquisarem temas realmente relacionados aos serviços, regiões e conhecimentos da empresa.

O objetivo não é apenas aumentar visitas. O programa deve gerar:

- visibilidade qualificada no Google;
- reconhecimento e confiança na marca;
- contatos comerciais relevantes;
- conteúdo útil para o setor cafeeiro;
- crescimento mensurável sem colocar o domínio em risco;
- uma operação editorial capaz de melhorar continuamente.

Nenhuma técnica pode garantir a primeira posição em todas as buscas. O trabalho buscará ampliar a relevância e a autoridade com qualidade técnica, conteúdo original, boa experiência e reputação legítima.

## 3. Como este documento deve ser usado

1. Manter apenas uma fase principal como **EM ANDAMENTO**.
2. Executar cada item do checklist da fase ativa.
3. Registrar evidências, métricas, decisões, custos e pendências.
4. Realizar a revisão de encerramento da fase.
5. Aprovar o gate somente quando seus critérios forem demonstrados.
6. Mover a próxima fase para **EM ANDAMENTO**.
7. Revisar o plano quando dados reais indicarem uma oportunidade melhor.

### Estados permitidos

- **NÃO INICIADA**: ainda não entrou em execução.
- **EM ANDAMENTO**: fase atualmente trabalhada.
- **EM VALIDAÇÃO**: execução concluída, aguardando análise de dados.
- **APROVADA**: gate atendido e evidências registradas.
- **BLOQUEADA**: depende de acesso, informação ou decisão externa.
- **REVISÃO NECESSÁRIA**: resultado abaixo do esperado ou novo risco identificado.

### Regra de passagem

Uma fase só pode ser marcada como **APROVADA** quando:

- todos os itens obrigatórios estiverem concluídos;
- os critérios do gate estiverem atendidos;
- os resultados estiverem registrados neste documento;
- riscos e pendências tiverem um responsável e um tratamento;
- houver decisão explícita para prosseguir.

Exceções devem ser registradas no Log de decisões, com justificativa, risco e responsável.

Correções de segurança, privacidade, informação não verificável ou risco reputacional podem ser executadas antes da fase seguinte, desde que tenham autorização explícita, branch e pull request próprios, testes e registro neste documento.

## 4. Estratégia escolhida

Será adotado **SEO programático assistido**, não uma fábrica automática de páginas.

Isso significa:

- uma URL para cada intenção de busca que mereça uma resposta própria;
- dados oficiais, conhecimento interno e análise editorial;
- modelos de página que organizem conteúdo, mas não produzam páginas quase iguais;
- automações criando pesquisas, rascunhos, alertas e propostas de alteração;
- revisão humana obrigatória antes da publicação;
- páginas publicadas em ondas pequenas e avaliadas antes de ampliar a escala;
- atualização, consolidação ou remoção de conteúdo sem valor;
- nenhuma página criada apenas para repetir palavras-chave.

SEO para recursos de IA, AEO ou GEO não será tratado como técnica separada. A mesma página deve servir pessoas, busca tradicional e experiências generativas por meio de informação original, especializada, clara e verificável. Não serão criados `llms.txt`, marcação especial para IA, fragmentação artificial de texto ou páginas para cada variação de consulta.

### O que não faremos

- páginas de entrada que levam o usuário sempre ao mesmo destino;
- milhares de páginas trocando apenas cidade, produto ou palavra-chave;
- texto oculto, repetição artificial de termos ou títulos enganosos;
- cópia ou combinação superficial de conteúdo de terceiros;
- raspagem automatizada dos resultados do Google;
- compra de links ou redes artificiais de backlinks;
- publicação automática irrestrita de texto gerado por IA;
- indexação de páginas vazias, duplicadas, experimentais ou sem revisão;
- uso da Indexing API para páginas comuns;
- promessas de primeira posição garantida.

## 5. Regras permanentes de qualidade

Estas regras valem em todas as fases:

- **Intenção clara:** cada URL responde a uma necessidade específica.
- **Valor exclusivo:** a página contém algo que não seria obtido trocando apenas um nome.
- **Fonte verificável:** fatos e números exibem origem e data de atualização.
- **Autoria responsável:** conteúdo técnico identifica autor e, quando necessário, revisor.
- **Revisão humana:** nenhuma automação publica diretamente em produção.
- **Experiência:** leitura simples, navegação clara e contato acessível.
- **Acessibilidade:** WCAG 2.2 AA como padrão mínimo.
- **Performance:** LCP menor ou igual a 2,5 s, INP menor ou igual a 200 ms e CLS menor ou igual a 0,1 no percentil 75; Lighthouse mobile igual ou superior a 95 como diagnóstico de laboratório.
- **Mobile-first:** tudo deve funcionar primeiro em telas pequenas.
- **Internacionalização:** PT-BR é a fonte; EN e ES seguem o glossário do projeto.
- **Segurança operacional:** alterações passam por branch, pull request e validação.
- **Escopo de nuvem:** qualquer operação GCP usa exclusivamente o projeto `site-safras`.
- **Privacidade:** métricas e formulários devem respeitar consentimento e legislação aplicável.
- **Integridade comercial:** depoimentos, casos, credenciais, números e experiências exigem origem e autorização registradas.
- **Separação de dados:** nome, telefone, e-mail, mensagem e outros dados pessoais nunca serão enviados ao Google Analytics.
- **Identidade da marca:** usar o nome completo Safras & Negócios e um descritor consistente; evitar “Safras” isoladamente.

## 6. Diagnóstico inicial

### Pontos favoráveis observados

- Astro com geração estática, adequado para desempenho e rastreamento.
- Firebase Hosting com HTTPS e distribuição por CDN.
- Estrutura semântica e uma base visual já construída.
- Indicações de canonical e `hreflang`.
- Site disponível em PT-BR, inglês e espanhol.
- Posicionamento comercial e identidade visual definidos.

### Problemas críticos confirmados ou a corrigir

- [x] Confirmado em 20/07/2026: a regra curinga do Firebase envia URLs inexistentes para a página inicial com status 200.
- [ ] Criar e validar um `404` real.
- [ ] Criar e validar `robots.txt`.
- [ ] Criar e validar o sitemap gerado, inicialmente `sitemap-index.xml`.
- [ ] Garantir que URLs aleatórias não sejam tratadas como conteúdo válido.
- [ ] Confirmar propriedade e dados no Google Search Console.
- [ ] Implantar mensuração de visitas e conversões.
- [ ] Criar páginas próprias para serviços e intenções comerciais.
- [ ] Revisar títulos, descrições e H1 ainda genéricos.
- [ ] Adicionar dados estruturados somente quando correspondam ao conteúdo visível.
- [ ] Adicionar metadados sociais e identidade local consistente.
- [ ] Otimizar imagens grandes e remover atrasos artificiais de carregamento.
- [x] Confirmado: a detecção automática de idioma deve ser substituída por sugestão que respeite a URL solicitada.
- [x] Confirmado: os depoimentos atuais não são reais.
- [x] Remover integralmente os depoimentos não reais do código e do build nos três idiomas.
- [ ] Confirmar a remoção em produção após PR e deploy autorizados.
- [ ] Criar aviso de privacidade antes de ampliar coleta ou mensuração.
- [ ] Revisar o uso do Web3Forms, sua retenção e transferência internacional de dados.
- [ ] Diferenciar a entidade Safras & Negócios de marcas semelhantes nos metadados e presenças oficiais.

> Evidência pública de 20/07/2026: `/` respondeu 200; `/robots.txt`, `/sitemap.xml` e uma URL aleatória também responderam 200 com `text/html`. A busca pública testada não apresentou o domínio da empresa para as consultas analisadas.

### Verdade comercial confirmada

| Tema | Informação confirmada |
|---|---|
| Nome comercial | Safras & Negócios |
| Razão social e CNPJ | Não serão publicados neste momento; o nome comercial foi aprovado como identificação pública |
| Endereço | Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso/MG |
| Atendimento presencial | Sim, no endereço oficial |
| Telefone e WhatsApp | (35) 3531-4046 |
| E-mail atual | `flavio@safrasnegocios.com.br`; destinatário operacional controlado pelo usuário, mas ainda poderá mudar |
| Web3Forms | A chave está configurada, porém não há conta administrativa confirmada; propriedade, destino e governança precisam ser recuperados e testados |
| Horário | Segunda a sexta-feira, das 8h às 18h |
| Fundação | 19/10/2015 |
| Proprietário | Gilson Souza |
| Experiência | Gilson possui mais de 30 anos de atuação no mercado cafeeiro |
| Serviços | Intermediação de café no mercado físico e futuro; CPR em relação com instituições bancárias; classificação e análise de qualidade; prova sensorial; embarques e conferências |
| Públicos | Vendedores e compradores, incluindo produtores, exportadores e multinacionais |
| Cobertura | Atendimento em várias regiões; mapa e delimitação detalhada serão validados futuramente |
| Idiomas | PT-BR como fonte; EN e ES têm finalidade comercial e institucional, sempre com revisão |
| Equipe | Funcionários possuem capacidade técnica |
| Responsáveis | Gilson Souza: comercial, editorial, técnico e aprovador factual |
| Registro de leads | E-mail e planilha privada aprovados; responsável operacional inicial: titular de `flavio@safrasnegocios.com.br` |
| Acesso técnico | CLI do Firebase e do GCP `site-safras` confirmadas; domínio/DNS e Search Console ainda precisam ser verificados |
| Google Business Profile | A empresa existe no Google Maps; acesso administrativo ainda precisa ser localizado |
| Google Ads | Fora do escopo atual |
| Custos | Priorizar recursos atuais e gratuitos; nenhuma mensalidade nova sem aprovação de benefício e custo |
| Depoimentos | Os relatos não reais foram removidos localmente; só retornarão com origem e autorização registradas; produção aguarda publicação |

### Regras de redação institucional

- Não confundir a idade da empresa com a experiência pessoal de Gilson.
- Formulação segura: “A Safras & Negócios atua desde 19 de outubro de 2015.”
- Formulação segura: “Gilson Souza, proprietário da Safras & Negócios, reúne mais de 30 anos de experiência no mercado cafeeiro.”
- Conteúdo sobre mercado futuro, CPR, hedge ou preço deve ser educativo, sem promessa de rentabilidade, garantia de preço ou recomendação financeira individual.
- Não afirmar exportação direta, representação ou presença física internacional sem documentar o modelo real da atuação.

### Pendências obrigatórias da Fase 0

- [x] Registrar a decisão de não publicar razão social e CNPJ neste momento.
- [x] Confirmar telefone e WhatsApp oficial: `(35) 3531-4046`.
- [ ] Definir o e-mail público definitivo; `flavio@safrasnegocios.com.br` é o endereço operacional atual.
- [x] Confirmar o destinatário operacional atual do formulário.
- [ ] Recuperar ou criar conta Web3Forms administrável, documentar proprietário e chave, restringir domínio e realizar envio controlado.
- [x] Definir Gilson Souza como responsável comercial, editorial, técnico e aprovador factual.
- [x] Confirmar acesso CLI ao Firebase/GCP `site-safras`.
- [ ] Confirmar acessos ao domínio/DNS e Google Search Console.
- [ ] Recuperar ou confirmar acesso administrativo ao Google Business Profile.
- [ ] Decidir a base e o texto de privacidade com revisão adequada.
- [x] Aprovar a execução da ação extraordinária H0.
- [x] Aprovar e-mail mais planilha privada como modelo operacional inicial de leads.

### Itens conscientemente adiados

- mapa completo das regiões atendidas;
- localidades do Observatório;
- quantidade mensal definitiva de conteúdo;
- CRM ou automação completa do registro de leads;
- ferramentas pagas;
- tradução de todo conteúdo futuro.

## 7. Visão geral das fases

| Fase | Nome | Estado | Saída principal |
|---:|---|---|---|
| 0 | Governança e verdade comercial | EM ANDAMENTO | Dados, acessos, responsáveis e regras aprovados |
| 1 | Recuperação técnica | NÃO INICIADA | Site rastreável, indexável, rápido e sem falsos 200 |
| 2 | Mensuração e presença oficial | NÃO INICIADA | Baseline, Search Console, Analytics e perfil comercial |
| 3 | Inteligência de demanda | NÃO INICIADA | Mapa de públicos, intenções e oportunidades |
| 4 | Arquitetura da informação | NÃO INICIADA | Estrutura de URLs, hubs e links internos |
| 5 | Plataforma editorial | NÃO INICIADA | Conteúdo validado, versionado e publicável com segurança |
| 6 | Conteúdo fundamental | NÃO INICIADA | Primeiras páginas excelentes e manualmente revisadas |
| 7 | Observatório Safras do Café | NÃO INICIADA | Piloto regional com dados e análise próprios |
| 8 | Robôs assistentes | NÃO INICIADA | Automação de pesquisa, QA e manutenção sem autopublicação |
| 9 | Expansão em ondas | NÃO INICIADA | Crescimento controlado baseado em evidências |
| 10 | Autoridade e distribuição | NÃO INICIADA | Menções, links legítimos, parcerias e presença setorial |
| 11 | Operação contínua | NÃO INICIADA | Rotina editorial, técnica e comercial permanente |

---

## Fase 0 — Governança, verdade comercial e preparação

**Estado:** EM ANDAMENTO

### Objetivo

Definir o que a Safras & Negócios pode afirmar publicamente, quem valida o conteúdo e quais recursos estão disponíveis. Sem esta base, escala aumenta o risco de publicar informação incorreta.

### Checklist

- [x] Aprovar o nome comercial e registrar a decisão de não publicar razão social/CNPJ neste momento.
- [x] Registrar endereço, telefone, e-mail atual, horários e fundação confirmados.
- [x] Confirmar telefone e WhatsApp oficial: `(35) 3531-4046`.
- [ ] Definir o e-mail público definitivo; manter `flavio@safrasnegocios.com.br` como endereço operacional atual.
- [x] Confirmar atendimento presencial e cobertura de várias regiões; detalhamento geográfico formalmente adiado.
- [x] Documentar os serviços atualmente confirmados; limites editoriais de CPR e mercado futuro registrados.
- [x] Definir públicos: vendedores e compradores, incluindo produtores, exportadores e multinacionais.
- [ ] Definir diferenciais que possam ser comprovados.
- [x] Confirmar fundação em 19/10/2015 e mais de 30 anos de experiência pessoal de Gilson.
- [x] Confirmar que os depoimentos atuais não são reais.
- [x] Executar e validar H0 localmente no código, build e navegador em PT-BR, EN e ES.
- [ ] Publicar a H0 por PR/deploy e verificar a produção, após autorização específica.
- [ ] Definir procedimento de autorização para futuros depoimentos e casos.
- [x] Confirmar capacidade técnica da equipe.
- [x] Nomear Gilson Souza como autor/revisor técnico e aprovador factual inicial; redistribuir por tema quando necessário.
- [x] Definir Gilson Souza como responsável comercial pelos contatos recebidos.
- [x] Definir Gilson Souza como responsável editorial inicial.
- [x] Definir Gilson Souza como responsável técnico inicial.
- [ ] Confirmar acesso ao domínio e DNS.
- [x] Confirmar acesso CLI ao Firebase/GCP `site-safras`.
- [ ] Confirmar acesso ao Google Search Console.
- [x] Confirmar que a empresa possui perfil no Google Maps.
- [ ] Recuperar ou confirmar acesso administrativo ao Google Business Profile.
- [ ] Confirmar se existe Google Analytics ou outra ferramenta de métricas.
- [x] Aprovar planilha privada como registro inicial; responsável operacional: titular de `flavio@safrasnegocios.com.br`.
- [ ] Definir controles de acesso, retenção e exclusão da planilha.
- [x] Definir princípio de não contratar mensalidades sem aprovação específica.
- [ ] Definir teto financeiro antes de habilitar qualquer recurso pago.
- [ ] Aprovar as práticas permitidas e proibidas deste plano.

### Gate da Fase 0

- [ ] Dados oficiais registrados e aprovados.
- [ ] Serviços e cobertura geográfica comprovados.
- [x] Responsáveis técnico, editorial e comercial definidos.
- [ ] Acessos essenciais disponíveis ou com plano de obtenção.
- [ ] Limite de gastos aprovado.
- [ ] Riscos legais e de reputação tratados.

### Registro de encerramento

- **Data:** —
- **Aprovado por:** —
- **Evidências:** —
- **Pendências aceitas:** —
- **Decisão:** —

---

## Ação extraordinária H0 — Remoção de conteúdo não verificável

**Estado:** EM VALIDAÇÃO — implementação local concluída; PR, deploy e produção pendentes

**Autorização recebida:** 20/07/2026

**Branch de trabalho:** `codex/fix-remove-fake-testimonials`

### Motivo

Foi confirmado que os depoimentos atualmente publicados não são reais. Eles entram em conflito com as regras de fonte verificável, integridade comercial e confiança deste plano. A correção deve ocorrer antes de qualquer divulgação ou expansão.

### Escopo executado localmente

- remover os depoimentos dos dicionários PT-BR, EN e ES;
- remover seção visual, scripts, estilos e anchors exclusivos do carrossel;
- não substituir por textos fictícios, genéricos ou apresentados como exemplos;
- manter a seção ausente até existirem relatos reais e autorizados;
- avaliar como substituição futura processo de trabalho, experiência verificável, matérias e casos reais auditáveis.

### Testes obrigatórios

- [x] Busca no código e no build não encontra nomes, empresas, citações, seletores ou scripts removidos.
- [x] `pnpm check`: 0 erros; `pnpm build`: 6 rotas geradas com sucesso.
- [x] PT-BR, EN e ES validados em navegador nos tamanhos mobile e desktop.
- [x] Contato sucede diretamente a seção anterior; nenhuma seção vazia ou overflow horizontal.
- [x] Nenhum erro JavaScript observado nos seis cenários de navegador.
- [x] WhatsApp oficial presente e contato antigo ausente do build.
- [ ] Produção verificada depois de PR e deploy aprovados.

### Gate H0

- [x] Autorização explícita recebida.
- [x] Nenhum depoimento não verificável permanece no código ou no build local.
- [ ] Nenhum depoimento não verificável permanece em produção; depende de publicação autorizada.
- [x] Nenhuma lacuna visual ou regressão funcional nos cenários locais testados.
- [x] Incidente registrado no Histórico e no Log de decisões.
- [x] Regra permanente de autorização de depoimentos documentada.

---

## Fase 1 — Recuperação técnica

**Estado:** NÃO INICIADA

### Objetivo

Garantir que mecanismos de busca encontrem, entendam e indexem apenas URLs válidas, com excelente experiência para usuários.

### Checklist

- [ ] Auditar configuração do Firebase Hosting.
- [ ] Corrigir fallback de SPA se estiver produzindo falsos status 200.
- [ ] Implementar página 404 real e útil nos três idiomas.
- [ ] Implementar `robots.txt` explícito.
- [ ] Instalar a integração oficial e gerar `sitemap-index.xml` somente com URLs canônicas e indexáveis.
- [ ] Validar `canonical`, idioma e alternates.
- [ ] Criar registro explícito de rotas e traduções; nenhuma tradução inexistente gera `hreflang`.
- [ ] Substituir o redirecionamento automático por sugestão de idioma.
- [ ] Revisar códigos HTTP, redirects e cadeias de redirecionamento.
- [ ] Bloquear indexação de ambientes, buscas internas e páginas sem valor.
- [ ] Revisar títulos, descrições, headings e links rastreáveis.
- [ ] Implementar metadados Open Graph e imagem social adequada.
- [ ] Implementar dados estruturados institucionais válidos.
- [ ] Padronizar nome, endereço e telefone em todas as presenças.
- [ ] Converter e dimensionar imagens corretamente.
- [ ] Remover atrasos artificiais e recursos que prejudiquem Core Web Vitals.
- [ ] Testar mobile, teclado, leitor de tela e redução de movimento.
- [ ] Rodar build, testes de links e auditoria Lighthouse.
- [ ] Validar produção após o deploy aprovado.

### Gate da Fase 1

- [ ] URL inexistente retorna 404, não a página inicial.
- [ ] `robots.txt` e `sitemap-index.xml` respondem corretamente.
- [ ] Nenhum erro crítico de canonical ou `hreflang`.
- [ ] Lighthouse mobile igual ou superior a 95 nas páginas principais.
- [ ] LCP e CLS dentro das metas em laboratório; INP será validado com dados de campo quando disponível.
- [ ] Checklist básico de acessibilidade aprovado.
- [ ] Build de produção aprovado.

### Registro de encerramento

- **Data:** —
- **Relatório técnico:** —
- **Métricas antes/depois:** —
- **Pendências:** —
- **Decisão:** —

---

## Fase 2 — Mensuração e presença oficial

**Estado:** NÃO INICIADA

### Objetivo

Criar uma linha de base confiável. Sem mensuração, não há como distinguir crescimento real de impressão subjetiva.

### Checklist

- [ ] Verificar todas as variantes necessárias no Search Console.
- [ ] Enviar o sitemap.
- [ ] Registrar páginas indexadas, excluídas e erros.
- [ ] Configurar analytics com consentimento apropriado.
- [ ] Definir conversões: WhatsApp, telefone, formulário e e-mail.
- [ ] Excluir acessos internos quando possível.
- [ ] Configurar painel mensal.
- [ ] Reivindicar ou revisar Google Business Profile.
- [ ] Padronizar informações oficiais no perfil comercial.
- [ ] Configurar alertas de disponibilidade e erros.
- [ ] Registrar consumo e orçamento do Firebase/GCP.

### Lead mínimo viável

Modelo inicial aprovado, de baixo custo:

1. manter o formulário como canal de entrega por e-mail durante uma fase curta;
2. registrar manualmente os contatos em planilha privada e protegida, controlada pela empresa;
3. manter dados pessoais somente na camada operacional;
4. enviar ao Analytics apenas conversões agregadas e categorias predefinidas;
5. avaliar backend próprio no GCP ou CRM somente quando volume, risco ou operação justificarem.

Gilson Souza será o responsável comercial. A operação inicial da planilha ficará com o titular de `flavio@safrasnegocios.com.br`; o nome civil desse responsável ainda deve ser registrado.

O destinatário operacional informado para o formulário é `flavio@safrasnegocios.com.br`, e há uma chave pública do Web3Forms configurada no projeto. Entretanto, não há conta administrativa confirmada. Antes de ampliar o tráfego, será necessário recuperar ou criar a conta, documentar proprietário e responsável reserva, restringir o domínio, realizar um envio controlado e definir rotação da chave. O Web3Forms declara que pode reter submissões por até três anos e processá-las em infraestrutura internacional; o plano gratuito aceita até 250 submissões mensais e mostra 30 dias de histórico no painel. DPA, transferência internacional, exclusão e continuidade continuam pendentes antes de tratá-lo como solução permanente.

#### Separação obrigatória

- Camada privada: nome, e-mail, telefone e mensagem; acesso comercial restrito.
- Camada de funil: categorias, status, datas e resultado; sem contato ou mensagem.
- Analytics: evento `generate_lead`, idioma, página controlada, cluster e categoria de serviço; nunca `lead_id` ou PII.
- BigQuery de SEO: somente dados de navegação e resultados agregados.

#### Campos operacionais sugeridos

- recebido em;
- origem agrupada e página de entrada controlada;
- idioma, perfil, interesse e estado;
- responsável;
- status: novo, contatado, qualificado, negociação, ganho ou perdido;
- primeiro contato, próxima ação e encerramento;
- resultado e motivo de perda.

#### Gatilhos para evoluir

- duas ou mais pessoas atendendo simultaneamente;
- mais de 30 a 50 leads mensais;
- prazos perdidos ou contatos sem responsável;
- necessidade de histórico, tarefas, auditoria ou integração;
- ultrapassar 250 envios mensais;
- Web3Forms não comprovar tratamento e transferência adequados;
- necessidade de anexos ou dados mais sensíveis.

### Baseline obrigatório

| Indicador | Valor inicial | Data | Fonte |
|---|---:|---|---|
| Cliques orgânicos em 28 dias | — | — | Search Console |
| Impressões orgânicas em 28 dias | — | — | Search Console |
| CTR orgânico | — | — | Search Console |
| Posição média | — | — | Search Console |
| URLs indexadas | — | — | Search Console |
| Contatos orgânicos | — | — | Analytics/CRM |
| Conversão orgânica | — | — | Analytics/CRM |
| LCP p75 | — | — | CrUX/Search Console |
| CLS p75 | — | — | CrUX/Search Console |
| INP p75 | — | — | CrUX/Search Console |

### Gate da Fase 2

- [ ] Search Console coletando dados.
- [ ] Analytics e eventos de conversão testados.
- [ ] Perfil comercial consistente.
- [ ] Baseline preenchido.
- [ ] Painel e cadência de revisão definidos.

---

## Fase 3 — Inteligência de demanda

**Estado:** NÃO INICIADA

### Objetivo

Descobrir quais problemas e perguntas reais merecem conteúdo, sem transformar cada palavra-chave em uma página.

### Fontes permitidas

- dados próprios do Search Console;
- entrevistas com equipe e clientes;
- dúvidas recebidas por telefone, formulário e WhatsApp;
- Google Trends por meios oficiais;
- Keyword Planner quando disponível;
- fontes públicas como IBGE, Conab e órgãos setoriais;
- pesquisas e publicações primárias;
- análise manual dos resultados de busca;
- sites de concorrentes somente para estudo, nunca para cópia.

### Checklist

- [ ] Entrevistar equipe comercial e especialistas.
- [ ] Listar perguntas por público e estágio de decisão.
- [ ] Separar intenção informacional, comercial, local e de marca.
- [ ] Agrupar termos que pedem a mesma resposta.
- [ ] Identificar lacunas entre demanda e conteúdo atual.
- [ ] Avaliar volume, relevância comercial, dificuldade e capacidade de resposta.
- [ ] Identificar assuntos sensíveis que exigem especialista.
- [ ] Criar backlog priorizado.
- [ ] Definir hipótese e métrica para cada cluster.
- [ ] Selecionar o primeiro conjunto de páginas fundamentais.

### Gate da Fase 3

- [ ] Mapa de públicos aprovado.
- [ ] Clusters sem canibalização evidente.
- [ ] Backlog priorizado por valor, não apenas por volume.
- [ ] Fontes e especialista definidos para os temas prioritários.
- [ ] Primeiro lote editorial aprovado.

---

## Fase 4 — Arquitetura da informação

**Estado:** NÃO INICIADA

### Objetivo

Transformar a página institucional em uma estrutura coerente de páginas, hubs e ligações internas.

### Estrutura inicial a validar

- `/` — marca e proposta principal;
- `/servicos` — hub de serviços;
- `/servicos/{servico}` — uma página por serviço real;
- `/sobre` — história, equipe, método e credenciais;
- `/contato` — manter inicialmente o redirect para `/#contato`; página própria depende de decisão futura;
- `/conteudos` — hub editorial;
- `/conteudos/guias/{tema}` — guias aprofundados;
- `/conteudos/perguntas/{tema}` — respostas úteis quando merecerem URL própria;
- `/observatorio` — hub de inteligência regional;
- `/observatorio/{estado}/{localidade}` — somente quando houver dados e análise exclusivos;
- equivalentes localizados sob `/en` e `/es` somente quando houver tradução publicada e revisada.

### Checklist

- [ ] Definir taxonomia e nomes de URLs.
- [ ] Mapear cada intenção prioritária para uma URL.
- [ ] Definir hubs e páginas-filhas.
- [ ] Evitar mais de uma URL para a mesma intenção.
- [ ] Projetar breadcrumbs.
- [ ] Projetar links contextuais e conteúdos relacionados.
- [ ] Definir regras de canonical, tradução e paginação.
- [ ] Criar registro `routeKey → locale → pathname` para slugs realmente traduzidos.
- [ ] Definir o que recebe `noindex`.
- [ ] Definir processo de consolidação e redirects.
- [ ] Validar navegação com usuários e equipe.

### Gate da Fase 4

- [ ] Toda URL proposta possui propósito e proprietário.
- [ ] Nenhuma família de páginas depende apenas de troca de palavra.
- [ ] Links internos formam caminhos claros até serviços e contato.
- [ ] Taxonomia funciona nos três idiomas.
- [ ] Plano de migração e redirects aprovado.

---

## Fase 5 — Plataforma editorial

**Estado:** NÃO INICIADA

### Objetivo

Criar um sistema seguro e rastreável para conteúdo estruturado, revisão humana e publicação.

### Modelo técnico preferencial

- Astro Content Collections;
- conteúdo e dados versionados no Git;
- schemas de validação obrigatórios;
- templates por tipo de conteúdo;
- preview antes da publicação;
- pull request obrigatório;
- build bloqueado quando dados ou regras falharem;
- histórico de autor, revisor e atualização;
- automações criando propostas, nunca publicando direto em produção.

### Campos mínimos por conteúdo

- título e descrição;
- intenção principal;
- slug e idioma;
- status editorial;
- autor e revisor;
- data de publicação e revisão;
- fontes;
- data de atualização dos dados;
- escopo geográfico quando aplicável;
- nível de confiança;
- links internos;
- CTA adequado;
- canonical e traduções;
- instrução de indexação;
- motivo de existência da página;
- `translationKey`, `approvedBy` e fontes das alegações;
- registro de autorização obrigatório para depoimentos e casos;
- data de revisão e expiração.

### Checklist

- [ ] Definir schemas.
- [ ] Criar templates editoriais.
- [ ] Criar validação de campos e links.
- [ ] Criar validação de duplicidade e similaridade.
- [ ] Criar preview.
- [ ] Criar checklist de revisão factual, editorial, legal e SEO.
- [ ] Definir papéis e aprovações.
- [ ] Definir política de atualização e expiração.
- [ ] Definir como dados oficiais são importados e citados.
- [ ] Testar fluxo completo até produção em pequeno lote.

### Gate da Fase 5

- [ ] Conteúdo inválido impede o build.
- [ ] Nenhuma publicação ignora revisão humana.
- [ ] Fontes e datas ficam visíveis e rastreáveis.
- [ ] Preview e rollback foram testados.
- [ ] Processo editorial está documentado e compreendido.
- [ ] Depoimento, caso, número institucional ou alegação comercial sem evidência impede o build.

---

## Fase 6 — Conteúdo fundamental

**Estado:** NÃO INICIADA

### Objetivo

Publicar um conjunto pequeno de páginas excepcionais que estabeleça confiança, serviços e conhecimento antes de escalar.

### Escopo inicial sugerido

O piloto deverá conter de 15 a 30 páginas, prioritariamente em PT-BR:

- 5 a 7 páginas institucionais e de serviços;
- 8 a 12 guias técnicos;
- 2 a 4 casos reais ou fluxos operacionais documentados;
- tradução apenas das páginas comerciais prioritárias quando revisadas.

Clusters iniciais: autoridade e identidade; quem vende café; quem compra café; classificação e qualidade; mercado e gestão de risco; embarques e operações comerciais; cobertura geral.

A revisão humana confirma fatos, serviços, termos técnicos, limites financeiros, fontes, datas e traduções. Ela não é apenas revisão ortográfica.

- páginas dos serviços realmente prestados;
- página completa sobre a empresa e especialistas;
- página de regiões atendidas, sem criar cidade fictícia;
- guias principais sobre intermediação, qualidade, comercialização e embarque;
- perguntas reais de produtores e compradores;
- estudos, explicações ou casos autorizados;
- páginas de contato orientadas à conversão.

### Checklist

- [ ] Selecionar de 15 a 30 páginas prioritárias.
- [ ] Preparar briefing de intenção para cada página.
- [ ] Produzir conteúdo original com especialista.
- [ ] Incluir evidências, fontes e exemplos úteis.
- [ ] Revisar títulos e snippets sem sensacionalismo.
- [ ] Inserir links internos relevantes.
- [ ] Validar conversão e experiência mobile.
- [ ] Solicitar indexação pelo fluxo normal de sitemap.
- [ ] Acompanhar desempenho por 8 a 12 semanas.
- [ ] Atualizar páginas com impressões e baixo CTR.
- [ ] Consolidar páginas que disputem a mesma busca.

### Gate da Fase 6

- [ ] Todas as páginas atendem ao padrão editorial.
- [ ] Não existem páginas órfãs ou duplicadas.
- [ ] O Google consegue rastrear e indexar o lote.
- [ ] Há sinais mensuráveis de impressões, cliques ou conversões.
- [ ] Aprendizados do período estão registrados.
- [ ] O modelo editorial foi ajustado antes de escalar.

---

## Fase 7 — Observatório Safras do Café

**Estado:** NÃO INICIADA

### Objetivo

Criar um produto editorial próprio, útil e atualizável que combine dados públicos confiáveis com análise da Safras & Negócios.

### Piloto sugerido

Começar com até 20 localidades de real relevância comercial comprovada. Cada página precisa oferecer informação exclusiva suficiente para existir.

> Esta fase permanece condicionada ao mapa validado de regiões atendidas, fontes de dados, capacidade de atualização e critérios que evitem falsa indicação de presença local.

### Conteúdo possível por localidade

- panorama da cafeicultura;
- dados oficiais com fonte e período;
- características produtivas e logísticas;
- contexto de safra e riscos;
- perguntas locais frequentes;
- análise assinada por especialista;
- data da última revisão;
- ligação com guias, serviços e contato;
- limites claros dos dados e da análise.

### Checklist

- [ ] Definir critérios objetivos para escolher localidades.
- [ ] Confirmar cobertura comercial real.
- [ ] Selecionar fontes como IBGE, Conab e órgãos oficiais.
- [ ] Criar pipeline reprodutível de dados.
- [ ] Definir frequência de atualização.
- [ ] Criar template com blocos obrigatórios e opcionais.
- [ ] Produzir análise humana exclusiva.
- [ ] Validar similaridade entre páginas.
- [ ] Publicar piloto.
- [ ] Observar indexação, engajamento e contatos por 8 a 12 semanas.

### Gate da Fase 7

- [ ] Cada localidade possui valor próprio demonstrável.
- [ ] Fontes e datas estão corretas.
- [ ] Páginas não funcionam como portas para o mesmo conteúdo.
- [ ] O piloto gera sinais úteis de busca ou negócio.
- [ ] A atualização é operacionalmente sustentável.

---

## Fase 8 — Robôs assistentes

**Estado:** NÃO INICIADA

### Objetivo

Automatizar tarefas repetitivas e de controle sem retirar a responsabilidade humana.

### Robôs permitidos

1. **Radar de demanda:** lê dados próprios e fontes autorizadas para sugerir oportunidades.
2. **Agrupador de intenção:** reúne consultas que devem ser respondidas pela mesma página.
3. **Planejador editorial:** cria briefings e aponta fontes, lacunas e links internos.
4. **Atualizador de dados:** propõe alterações quando uma fonte oficial muda.
5. **Sentinela de indexação:** alerta sobre queda, exclusões, erros ou canibalização.
6. **Auditor de qualidade:** identifica páginas finas, similares, desatualizadas ou órfãs.
7. **Auditor de links:** encontra links quebrados e oportunidades internas.
8. **Gerador de pull request:** organiza mudanças para revisão e aprovação.

### Barreiras obrigatórias

- sem coleta automatizada dos resultados do Google;
- sem publicação direta;
- sem criação ilimitada de URLs;
- sem texto factual sem fonte;
- sem conteúdo técnico sem especialista;
- sem indexação até aprovação;
- logs de entrada, saída, versão e responsável;
- bot não cria depoimentos, casos, credenciais ou experiência;
- conteúdo externo é tratado como entrada não confiável;
- toda saída permanece `draft` ou pull request;
- o robô não possui credencial de deploy;
- limites de custo, frequência e volume;
- botão de pausa e procedimento de rollback.

### Gate da Fase 8

- [ ] Cada robô tem propósito, proprietário e limite.
- [ ] Revisão humana não pode ser contornada.
- [ ] Logs, alertas e rollback foram testados.
- [ ] O sistema rejeita conteúdo duplicado, incompleto ou sem fonte.
- [ ] Custos são previsíveis e monitorados.
- [ ] Um piloto reduz trabalho sem reduzir qualidade.

---

## Fase 9 — Expansão em ondas

**Estado:** NÃO INICIADA

### Objetivo

Ampliar o número de páginas somente quando os lotes anteriores demonstrarem qualidade, indexação, utilidade e retorno.

### Ondas sugeridas

| Onda | Novas páginas | Condição para avançar |
|---:|---:|---|
| 1 | 20 a 50 | Modelo já validado em conteúdo fundamental |
| 2 | Até 100 | Qualidade e indexação estáveis por 8 a 12 semanas |
| 3 | Até 300 | Engajamento, manutenção e conversão sustentáveis |
| 4 | Até 1.000 | Demanda real, dados únicos e operação madura |
| Posteriores | A definir | Nova aprovação estratégica e de capacidade |

Os números são tetos de teste, não metas obrigatórias.

### Benchmark técnico antes de escala

Antes da primeira onda grande, gerar localmente 100, 500, 1.000 e 5.000 entradas sintéticas que nunca serão publicadas. Medir duração e memória do build, tamanho de `dist`, quantidade de arquivos e tempo de preview.

Gate interno: build/deploy p95 abaixo de 15 minutos, preservando margem frente ao timeout atual de 20 minutos.
### Critérios por onda

- [ ] Pelo menos 90% das URLs elegíveis foram rastreadas.
- [ ] A taxa de indexação foi analisada por tipo de página.
- [ ] Não houve aumento relevante de soft 404, duplicidade ou conteúdo rastreado sem valor.
- [ ] Páginas apresentam impressões ou justificativa estratégica documentada.
- [ ] Engajamento e conversão foram comparados com o lote anterior.
- [ ] Custo de criação e manutenção é aceitável.
- [ ] Atualizações podem ser realizadas no prazo definido.
- [ ] Amostra humana de qualidade foi aprovada.
- [ ] Foram removidas ou melhoradas páginas abaixo do padrão.

### Gate da Fase 9

- [ ] Relatório da onda concluído.
- [ ] Benefício incremental comprovado.
- [ ] Sem sinais de abuso de conteúdo em escala.
- [ ] Próxima onda tem demanda, dados e capacidade editorial.
- [ ] Decisão de avançar, manter, reduzir ou encerrar registrada.

---

## Fase 10 — Autoridade e distribuição

**Estado:** NÃO INICIADA

### Objetivo

Fazer conteúdo e especialistas serem reconhecidos por pessoas, empresas e instituições do setor.

### Checklist

- [ ] Criar estudos ou materiais citáveis.
- [ ] Estabelecer calendário de divulgação.
- [ ] Construir relacionamento com associações, cooperativas e parceiros.
- [ ] Oferecer especialistas para entrevistas e eventos.
- [ ] Distribuir análises em canais próprios.
- [ ] Recuperar menções legítimas sem link.
- [ ] Corrigir cadastros e citações locais inconsistentes.
- [ ] Medir links, menções, tráfego de referência e oportunidades.
- [ ] Recusar compra, troca artificial ou rede de links.
- [ ] Integrar presença orgânica com comercial e relacionamento.

### Gate da Fase 10

- [ ] Crescimento de menções e links editoriais legítimos.
- [ ] Parcerias possuem relação real com a atividade.
- [ ] Tráfego de referência e contatos são acompanhados.
- [ ] Não há dependência de práticas artificiais.

---

## Fase 11 — Operação contínua

**Estado:** NÃO INICIADA

### Objetivo

Transformar SEO e conteúdo em uma rotina permanente de produto, reputação e negócio.

### Rotina mensal

- revisar Search Console e conversões;
- investigar páginas com perda relevante;
- melhorar CTR onde houver boas posições e snippets fracos;
- corrigir erros, links e páginas órfãs;
- atualizar dados vencidos;
- revisar sugestões dos robôs;
- registrar custos e resultados;
- selecionar o próximo pequeno lote.

### Rotina trimestral

- revisar arquitetura e canibalização;
- comparar clusters e públicos;
- auditar qualidade de uma amostra representativa;
- consolidar, redirecionar ou remover páginas sem função;
- revisar Core Web Vitals e acessibilidade;
- reavaliar concorrência, demanda e oportunidades;
- revisar retorno por tipo de página.

### Rotina anual

- revisar estratégia, fontes e política editorial;
- validar todas as informações institucionais;
- revisar especialistas, bios e credenciais;
- recalcular capacidade e orçamento;
- auditar políticas do Google aplicáveis;
- decidir se novas famílias de páginas fazem sentido.

### Gate permanente

- [ ] Indicadores atualizados.
- [ ] Conteúdo vencido dentro do limite acordado.
- [ ] Alertas críticos tratados.
- [ ] Custos dentro do orçamento.
- [ ] Próximas ações priorizadas por impacto e evidência.

## 8. Critério para criar uma nova página

Uma página só entra no backlog quando todas as respostas abaixo forem **sim**:

- [ ] Existe uma intenção de usuário distinta?
- [ ] A Safras & Negócios tem legitimidade para responder?
- [ ] Há dados, experiência ou análise originais?
- [ ] O conteúdo será substancialmente diferente de páginas existentes?
- [ ] Há uma pessoa responsável pela precisão?
- [ ] É possível manter a página atualizada?
- [ ] A URL cabe claramente na arquitetura?
- [ ] Existe caminho natural de links internos?
- [ ] A página ajuda o visitante mesmo que ele nunca vire cliente?
- [ ] Existe uma métrica para avaliar seu resultado?

Se alguma resposta for **não**, a informação deve ser incorporada a uma página existente, mantida fora do índice ou descartada.

## 9. Indicadores do programa

### Descoberta e indexação

- URLs válidas descobertas;
- URLs indexadas por tipo;
- tempo entre publicação e primeira impressão;
- erros, duplicidades e soft 404;
- rastreamento desperdiçado em URLs sem valor.

### Visibilidade

- impressões, cliques, CTR e posição por cluster;
- consultas novas relevantes;
- presença de marca e termos sem marca;
- desempenho por país, idioma, região e dispositivo.

### Qualidade e experiência

- Core Web Vitals;
- acessibilidade;
- engajamento e navegação interna;
- páginas desatualizadas;
- páginas órfãs, duplicadas ou com baixa utilidade.

### Negócio

- contatos orgânicos por canal;
- taxa de conversão;
- qualidade comercial dos contatos;
- serviços e regiões que geram oportunidade;
- receita ou pipeline atribuível quando houver dados confiáveis.

### Eficiência

- custo por página útil;
- horas de especialista e revisão;
- custo de infraestrutura e ferramentas;
- percentual de sugestões automatizadas aprovadas;
- tempo de atualização de informação crítica.

## 10. Custos e controles

Grande parte da base pode começar em faixas gratuitas, mas o programa não é necessariamente gratuito.

### Itens que podem começar sem cobrança direta

- Google Search Console;
- Google Business Profile;
- Google Trends;
- Lighthouse e ferramentas de qualidade;
- geração estática com Astro;
- Git e revisão por pull request dentro dos limites dos serviços usados;
- fontes públicas que permitam o uso pretendido.
- Web3Forms gratuito, dentro do limite atual de 250 submissões mensais, somente como ponte temporária após recuperar a governança da conta.
- planilha privada manual aprovada para o funil inicial, usando conta controlada pela empresa.

### Itens que podem gerar custo

- tráfego e armazenamento do Firebase Hosting acima da franquia;
- minutos de build acima da franquia;
- BigQuery acima dos limites gratuitos;
- APIs, modelos de IA e serviços de monitoramento;
- banco de dados, funções agendadas ou Cloud Run no futuro;
- ferramentas profissionais de pesquisa ou auditoria;
- redação, tradução, revisão, design e especialistas;
- mídia paga, caso seja aprovada separadamente.
- backend próprio de leads, CRM ou integração automática quando os gatilhos operacionais forem atingidos.
- revisão jurídica ou de privacidade quando necessária.

### Controles obrigatórios

- [ ] Orçamento mensal aprovado.
- [ ] Alertas de orçamento no GCP `site-safras`.
- [ ] Limites por robô e por lote.
- [ ] Estimativa antes de contratar nova ferramenta.
- [ ] Revisão mensal de custo real.
- [ ] Nenhum recurso pago habilitado sem necessidade e responsável.

## 11. Riscos principais

| Risco | Sinal | Tratamento |
|---|---|---|
| Conteúdo em escala sem valor | muitas páginas semelhantes e sem impressões | pausar, consolidar e revisar o modelo |
| Doorway pages | páginas locais que levam ao mesmo destino | exigir valor e atendimento local reais |
| Canibalização | várias URLs alternando para a mesma consulta | unir páginas e reforçar canonical/redirect |
| Informação incorreta | fonte ausente ou divergência com especialista | retirar do índice até correção |
| Conteúdo desatualizado | data vencida ou queda de confiança | alertas, revisão e expiração |
| Baixa indexação | páginas descobertas mas não indexadas | revisar qualidade, links e arquitetura |
| Queda de performance | piora dos Core Web Vitals | orçamento de desempenho e otimização |
| Custo inesperado | aumento de uso de nuvem ou IA | alertas, cotas e pausa automática |
| Reputação artificial | links comprados ou conteúdo enganoso | proibição e auditoria |
| Dependência de automação | equipe não consegue revisar ou corrigir | documentação, logs e operação manual possível |
| Depoimento não verificável | relato sem origem ou autorização | não publicar; remover imediatamente e exigir registro |
| Vazamento de dados pessoais | PII em Analytics, URL, log ou planilha ampla | separar camadas, minimizar campos e restringir acesso |
| Retenção excessiva | cópias antigas em fornecedor, e-mail ou planilha | política de retenção e exclusão em todas as cópias |
| Confusão de marca | resultados associam a empresa a outra organização | nome completo, descritor, NAP e entidade consistente |

## 12. Registro de decisões

| Data | Fase | Decisão | Motivo | Responsável | Revisar em |
|---|---:|---|---|---|---|
| 20/07/2026 | Geral | Adotar SEO programático assistido | Permite escala controlada com revisão e valor real | A definir | Encerramento da Fase 0 |
| 20/07/2026 | Geral | Não criar uma página para cada palavra-chave | Evita duplicidade, doorway pages e risco de spam | A definir | Permanente |
| 20/07/2026 | Geral | Executar uma fase por vez | Permite aprender e melhorar antes de ampliar | A definir | A cada gate |
| 20/07/2026 | 0 | Remover depoimentos não reais; autorização recebida e execução local concluída | Integridade e confiança são pré-condições do programa | Gilson Souza | Após publicação |
| 20/07/2026 | 0 | Não publicar razão social e CNPJ neste momento | O nome comercial foi considerado suficiente para a comunicação pública atual | Gilson Souza | Ao revisar identidade institucional |
| 20/07/2026 | 0 | Adotar `(35) 3531-4046` como telefone e WhatsApp oficial | Eliminar divergência de contato no site | Gilson Souza | Quando houver mudança oficial |
| 20/07/2026 | 0 | Gilson Souza assume inicialmente as responsabilidades comercial, editorial, técnica e factual | Há um responsável nominal único nesta fase | Gilson Souza | Ao ampliar a equipe editorial |
| 20/07/2026 | 2 | Tratar a configuração atual do Web3Forms como temporária até recuperar sua governança | Não há conta administrativa confirmada para a chave existente | Gilson Souza | Antes de ampliar tráfego |
| 20/07/2026 | 0 | Distinguir empresa fundada em 2015 da experiência de 30+ anos de Gilson | Evita alegação institucional incorreta | Editorial | Permanente |
| 20/07/2026 | 2 | Não enviar PII ao Analytics ou BigQuery de SEO | Política do Google, minimização e privacidade | Técnico | Permanente |
| 20/07/2026 | 2 | Iniciar com e-mail e planilha privada manual | Baixo custo e controle operacional inicial | Gilson Souza / titular de `flavio@safrasnegocios.com.br` | Ao atingir gatilhos |
| 20/07/2026 | 4 | Usar URLs sem barra final | Convenção já adotada pelo Astro e Firebase | Técnico | Permanente |
| 20/07/2026 | 6 | PT-BR primeiro; EN/ES somente com revisão | Preserva qualidade e alternates corretos | Editorial | Por lote |
| 20/07/2026 | Geral | Não contratar mensalidade sem aprovação específica | Custo deve ter benefício demonstrável | Proprietário | Antes de contratar |

## 13. Histórico de execução

| Data | Fase | Ação | Resultado/evidência | Próximo passo |
|---|---:|---|---|---|
| 20/07/2026 | 0 | Criação deste plano operacional | Roadmap, gates e controles documentados | Levantar dados e acessos da Fase 0 |
| 20/07/2026 | 0 | Auditoria técnica e pesquisa oficial | Soft 404, sitemap/robots ausentes, lacunas de entidade, privacidade e i18n confirmadas | Consolidar respostas empresariais |
| 20/07/2026 | 0 | Respostas empresariais registradas | Dados institucionais, serviços, públicos, idiomas e restrições de custo documentados | Resolver pendências e autorizar H0 |
| 20/07/2026 | 0 | Plano atualizado para versão 2.0 | H0, lead mínimo viável e gates refinados | Aprovar ações da Fase 0 |
| 20/07/2026 | 0 | Novas confirmações empresariais registradas | WhatsApp, publicação de dados legais, responsáveis, GCP/Firebase, Web3Forms e planilha documentados | Resolver acessos e privacidade restantes |
| 20/07/2026 | H0 | Depoimentos fictícios removidos localmente nos três idiomas | Dados, markup, JS, CSS, anchors e referências enganosas removidos; contatos oficiais alinhados | Validar e publicar por PR autorizado |
| 20/07/2026 | H0 | Validação local concluída | `pnpm check` com 0 erros; build de 6 rotas; PT/EN/ES aprovados em mobile e desktop sem erro de runtime; diretiva TypeScript obsoleta removida | Solicitar autorização específica para commit, PR e deploy |

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

## 14. Revisão de encerramento de fase

Preencher ao final de cada fase:

- **Fase:**
- **Período:**
- **Objetivo alcançado:**
- **Itens concluídos:**
- **Itens não concluídos e motivo:**
- **Métricas antes:**
- **Métricas depois:**
- **O que funcionou:**
- **O que não funcionou:**
- **Melhorias incorporadas ao processo:**
- **Novos riscos:**
- **Custo realizado:**
- **Evidências e links:**
- **Decisão:** aprovar / manter em validação / revisar / bloquear
- **Responsáveis pela decisão:**
- **Data da próxima revisão:**

## 15. Próximas ações da Fase 0

A H0 está concluída e validada localmente. Commit, PR, deploy e alteração da produção não foram realizados e exigem autorização específica.

1. autorizar, quando desejado, o commit e a abertura de PR da H0; depois do deploy, verificar a produção e encerrar o gate H0;
2. confirmar acesso ao domínio/DNS e ao Google Search Console;
3. recuperar ou confirmar acesso administrativo ao Google Business Profile;
4. recuperar ou criar uma conta Web3Forms administrável, documentar a chave e realizar envio controlado;
5. definir o e-mail público definitivo;
6. definir aviso de privacidade, retenção, exclusão e responsáveis;
7. criar a planilha privada aprovada com controles de acesso e registrar nominalmente seu responsável;
8. definir teto financeiro e aprovar as regras operacionais restantes;
9. preencher o gate antes de iniciar a Fase 1.

## 16. Referências oficiais

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Políticas de spam da Pesquisa Google](https://developers.google.com/search/docs/essentials/spam-policies)
- [Guia de conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Guia de SEO para iniciantes](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Guia do Google para recursos de IA generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=pt-BR)
- [Sites multilíngues](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=pt-BR)
- [Política do Google Analytics sobre PII](https://support.google.com/analytics/answer/6366371)
- [Guia de cookies da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf)
- [Transferência internacional de dados — ANPD](https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados)
- [Privacidade do Web3Forms](https://web3forms.com/privacy)
- [Termos do Web3Forms](https://web3forms.com/terms)
- [Preços e limites do Web3Forms](https://web3forms.com/pricing)
- [Google Search Console](https://search.google.com/search-console/about)
- [Documentação do Astro](https://docs.astro.build/)
- [Documentação do Firebase Hosting](https://firebase.google.com/docs/hosting)
- [IBGE](https://www.ibge.gov.br/)
- [Conab](https://www.conab.gov.br/)

---

**Nota operacional:** este documento deve acompanhar o código, mas não substitui relatórios técnicos, evidências do Search Console ou aprovação humana. Toda alteração relevante no plano deve ser registrada no histórico e no Log de decisões.
