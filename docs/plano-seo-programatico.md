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
| Versão | 3.1 |
| Fase ativa | Fase 2 — Mensuração e presença oficial |
| Ação extraordinária | H0 — APROVADA e verificada em produção |
| Estado geral | **Fase 1 APROVADA em 20/08/2026** — gate integralmente atendido, com performance 100 nos três idiomas medida no PageSpeed Insights. Fase 2 autorizada a iniciar |
| Última revisão | 20/08/2026 |
| Próxima revisão | Ao concluir a página de privacidade e o consentimento, pré-requisitos do analytics |
| Documentos irmãos | [`registro-operacional.md`](./registro-operacional.md) · [`plano-ecossistema-comunicacao.md`](./plano-ecossistema-comunicacao.md) |

**Mudanças da versão 3.1 (20/08/2026):** Fase 1 encerrada como APROVADA — o item de performance
que faltava foi resolvido por método de medição, não por alteração de código; adotada a API do
PageSpeed Insights com mediana e amplitude registradas; pendência de IPv6 encerrada, com o novo
achado do `AAAA` ausente no apex; §14 reescrita com a sequência acordada até o fim da Fase 2; §15
atualizada — achados 1 e 2 marcados como resolvidos e a recomendação de cidade no título revogada
por decisão do cliente.

**Mudanças da versão 3.0 (20/08/2026):** registro de decisões e histórico de execução migraram
para o registro operacional; §14 reescrita (descrevia como pendente uma publicação já feita);
nova §15 com a primeira auditoria de presença externa; acessos ao Search Console, perfil comercial,
rede social e DNS confirmados como disponíveis, encerrando a pendência mais antiga do programa.

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
- [x] Criar e validar localmente um `404` real; publicação pendente.
- [x] Criar e validar localmente `robots.txt`; publicação pendente.
- [x] Criar e validar localmente `sitemap-index.xml`; publicação pendente.
- [x] Garantir localmente que URLs aleatórias retornem 404; correção de produção pendente.
- [ ] Confirmar propriedade e dados no Google Search Console — acesso disponível desde 20/08/2026; verificação da propriedade ainda não executada.
- [ ] Implantar mensuração de visitas e conversões.
- [ ] Criar páginas próprias para serviços e intenções comerciais.
- [ ] Revisar títulos, descrições e H1 ainda genéricos.
- [ ] Adicionar dados estruturados somente quando correspondam ao conteúdo visível.
- [ ] Adicionar metadados sociais e identidade local consistente.
- [ ] Otimizar imagens grandes e remover atrasos artificiais de carregamento.
- [x] Confirmado: a detecção automática de idioma deve ser substituída por sugestão que respeite a URL solicitada.
- [x] Confirmado: os depoimentos atuais não são reais.
- [x] Remover integralmente os depoimentos não reais do código e do build nos três idiomas.
- [x] Confirmar em produção a remoção dos depoimentos não verificáveis.
- [x] Criar aviso resumido de privacidade junto ao formulário no código local; publicação pendente.
- [ ] Revisar o uso do Web3Forms, sua retenção e transferência internacional de dados.
- [ ] Diferenciar a entidade Safras & Negócios de marcas semelhantes nos metadados e presenças oficiais.

> Evidência pública de 20/07/2026: `/` respondeu 200; `/robots.txt`, `/sitemap.xml` e uma URL aleatória também responderam 200 com `text/html`. A busca pública testada não apresentou o domínio da empresa para as consultas analisadas.

> Auditoria pública repetida em 21/07/2026: `/`, `/en` e `/es` responderam 200; `/robots.txt`, `/sitemap.xml`, `/sitemap-index.xml` e uma URL aleatória continuaram respondendo 200 com a página inicial. `/contato` manteve 301 e `/qr` manteve 302. A produção já não continha os depoimentos não verificáveis.

> Evidência local de 21/07/2026: após a recuperação técnica, o emulador do Firebase respondeu 404 para URL inexistente, 200 para as três páginas canônicas e arquivos de SEO, 301 para `/contato` e 302 para `/qr`. Nenhuma alteração dessa etapa foi publicada.

### Verdade comercial confirmada

| Tema | Informação confirmada |
|---|---|
| Nome comercial | Safras & Negócios |
| Razão social e CNPJ | Não serão publicados neste momento; o nome comercial foi aprovado como identificação pública |
| Endereço | Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso/MG |
| Atendimento presencial | Sim, no endereço oficial |
| Telefone e WhatsApp | (35) 98461-7193 — número único para ligação e WhatsApp, confirmado em 20/08/2026. Substitui o (35) 3531-4046 adotado em 20/07/2026 |
| E-mails | `atendimento@safrasnegocios.com.br` é o canal público; o destinatário interno do formulário está no registro privado da empresa e não aparece neste repositório |
| Web3Forms | Conta e chave administráveis confirmadas; destino atualizado para o e-mail interno definido no registro privado da empresa e envio real validado pelo usuário |
| Horário | Segunda a sexta-feira, das 8h às 18h |
| Fundação | 19/10/2015 — confirmada em 20/08/2026 como pertencente à entidade pública; a alegação “Desde 2015” está correta |
| Proprietário | Sócio proprietário único, confirmado em 20/08/2026 |
| Experiência | Gilson possui mais de 30 anos de atuação no mercado cafeeiro; a apresentação nominal foi adiada para uma futura página de equipe |
| Serviços | **Atuação exclusiva em café**, confirmada em 20/08/2026. Intermediação de café no mercado físico e futuro; CPR em relação com instituições bancárias; classificação e análise de qualidade; prova sensorial; embarques e conferências |
| Públicos | Vendedores e compradores, incluindo produtores, exportadores e multinacionais |
| Cobertura | Atendimento em várias regiões; mapa e delimitação detalhada serão validados futuramente |
| Idiomas | PT-BR como fonte; EN e ES têm finalidade comercial e institucional, sempre com revisão |
| Equipe | Funcionários possuem capacidade técnica; nomes e perfis individuais não serão publicados nesta etapa |
| Responsáveis | Gilson Souza: comercial, editorial, técnico e aprovador factual |
| Registro de leads | E-mail e planilha privada aprovados; acesso por contas individuais para pessoas autorizadas dos setores de cadastro e comercial; retenção operacional de 12 meses após a última interação |
| Acesso técnico | CLI do Firebase e do GCP `site-safras` confirmadas; domínio/DNS e Search Console ainda precisam ser verificados |
| Google Business Profile | A empresa existe no Google Maps; acesso administrativo confirmado como disponível em 20/08/2026. Ajustar o perfil depende de definir qual entidade é a pública — ver decisões em aberto |
| Google Ads | Fora do escopo atual |
| Custos | Teto atual de R$ 0 em novas mensalidades; qualquer recurso pago exige aprovação específica |
| Depoimentos | Os relatos não reais foram removidos localmente; novos relatos dependerão de autorização registrada e serão buscados futuramente |

### Regras de redação institucional

- Não confundir a idade da empresa com a experiência pessoal de Gilson.
- Formulação segura: “A Safras & Negócios atua desde 19 de outubro de 2015.”
- A experiência pessoal de Gilson permanece como fato interno validado, mas não será apresentada publicamente antes da futura página de equipe.
- Conteúdo sobre mercado futuro, CPR, hedge ou preço deve ser educativo, sem promessa de rentabilidade, garantia de preço ou recomendação financeira individual.
- Não afirmar exportação direta, representação ou presença física internacional sem documentar o modelo real da atuação.
- Não publicar nomes, logotipos, contratos ou negociações de clientes, exportadores, multinacionais ou instituições financeiras sem autorização específica.

### Pendências obrigatórias da Fase 0

- [x] Registrar a decisão de não publicar razão social e CNPJ neste momento.
- [x] Confirmar telefone e WhatsApp oficial: `(35) 98461-7193` (revisado em 20/08/2026).
- [x] Definir `atendimento@safrasnegocios.com.br` como e-mail público e manter o endereço do registro privado somente como destinatário interno.
- [x] Confirmar o destinatário operacional atual do formulário.
- [x] Confirmar conta Web3Forms administrável, destino interno e realizar envio controlado com recebimento validado.
- [ ] Reavaliar restrição de domínio somente se um plano pago do Web3Forms for aprovado; o recurso não está disponível gratuitamente.
- [x] Definir Gilson Souza como responsável comercial, editorial, técnico e aprovador factual.
- [x] Confirmar acesso CLI ao Firebase/GCP `site-safras`.
- [x] Confirmar acessos ao domínio/DNS e Google Search Console — disponíveis (20/08/2026).
- [x] Recuperar ou confirmar acesso administrativo ao Google Business Profile — disponível (20/08/2026); a reivindicação depende da definição da entidade pública.
- [x] Aprovar e implementar aviso resumido de uso dos dados junto ao formulário; página completa de privacidade conscientemente adiada.
- [x] Aprovar a execução da ação extraordinária H0.
- [x] Aprovar e-mail mais planilha privada como modelo operacional inicial de leads.

### Itens conscientemente adiados

- mapa completo das regiões atendidas;
- página de equipe e apresentação nominal de proprietário e funcionários;
- localidades do Observatório;
- quantidade mensal definitiva de conteúdo;
- CRM ou automação completa do registro de leads;
- ferramentas pagas;
- Google Analytics, consentimento e mensuração, até a finalização da construção do site e da página completa de privacidade;
- tradução de todo conteúdo futuro.

## 7. Visão geral das fases

| Fase | Nome | Estado | Saída principal |
|---:|---|---|---|
| 0 | Governança e verdade comercial | APROVADA | Dados, acessos, responsáveis e regras aprovados |
| 1 | Recuperação técnica | **APROVADA** | Site rastreável, indexável, rápido e sem falsos 200 |
| 2 | Mensuração e presença oficial | **EM ANDAMENTO** | Baseline, Search Console, Analytics e perfil comercial |
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

**Estado:** APROVADA

### Objetivo

Definir o que a Safras & Negócios pode afirmar publicamente, quem valida o conteúdo e quais recursos estão disponíveis. Sem esta base, escala aumenta o risco de publicar informação incorreta.

### Checklist

- [x] Aprovar o nome comercial e registrar a decisão de não publicar razão social/CNPJ neste momento.
- [x] Registrar endereço, telefone, e-mail atual, horários e fundação confirmados.
- [x] Confirmar telefone e WhatsApp oficial: `(35) 98461-7193` (revisado em 20/08/2026).
- [x] Definir `atendimento@safrasnegocios.com.br` como e-mail público; manter o endereço do registro privado somente como destinatário interno do formulário.
- [x] Confirmar atendimento presencial e cobertura de várias regiões; detalhamento geográfico formalmente adiado.
- [x] Documentar os serviços atualmente confirmados; limites editoriais de CPR e mercado futuro registrados.
- [x] Definir públicos: vendedores e compradores, incluindo produtores, exportadores e multinacionais.
- [x] Definir diferenciais comprováveis: atuação desde 2015, equipe tecnicamente capacitada, acompanhamento da negociação à logística, atendimento a vendedores e compradores e conhecimento aplicado à classificação e qualidade; não citar o proprietário nesta etapa.
- [x] Confirmar fundação em 19/10/2015 e mais de 30 anos de experiência pessoal de Gilson.
- [x] Confirmar que os depoimentos atuais não são reais.
- [x] Executar e validar H0 localmente no código, build e navegador em PT-BR, EN e ES.
- [x] Verificar em produção a remoção do conteúdo não verificável após a publicação autorizada.
- [x] Definir procedimento para futuros depoimentos: texto e identificação aprovados, autorização de imagem e traduções quando aplicável e canal para alteração ou retirada.
- [x] Confirmar capacidade técnica da equipe.
- [x] Nomear Gilson Souza como autor/revisor técnico e aprovador factual inicial; redistribuir por tema quando necessário.
- [x] Definir Gilson Souza como responsável comercial pelos contatos recebidos.
- [x] Definir Gilson Souza como responsável editorial inicial.
- [x] Definir Gilson Souza como responsável técnico inicial.
- [ ] Confirmar acesso ao domínio e DNS.
- [x] Confirmar acesso CLI ao Firebase/GCP `site-safras`.
- [ ] Confirmar acesso ao Google Search Console.
- [x] Confirmar que a empresa possui perfil no Google Maps.
- [x] Recuperar ou confirmar acesso administrativo ao Google Business Profile — disponível (20/08/2026); a reivindicação depende da definição da entidade pública.
- [x] Adiar Google Analytics e novas ferramentas de mensuração até a finalização da construção do site e da página completa de privacidade.
- [x] Aprovar planilha privada como registro inicial; responsável operacional: titular do e-mail interno definido no registro privado da empresa.
- [x] Definir controles da planilha: contas individuais, acesso restrito às pessoas autorizadas dos setores de cadastro e comercial, autenticação em duas etapas e exclusão ou anonimização 12 meses após a última interação, salvo negociação ativa ou obrigação legal.
- [x] Definir princípio de não contratar mensalidades sem aprovação específica.
- [x] Definir teto de R$ 0 em novas mensalidades na fase atual; qualquer exceção exige aprovação específica.
- [x] Aprovar as práticas permitidas e proibidas deste plano, incluindo a proibição de páginas duplicadas, texto oculto, avaliações falsas, compra de links e expansão sem revisão humana.

### Gate da Fase 0

- [x] Dados oficiais registrados e aprovados.
- [x] Serviços confirmados e cobertura geral registrada; delimitação geográfica detalhada formalmente adiada.
- [x] Responsáveis técnico, editorial e comercial definidos.
- [x] Acessos essenciais disponíveis ou com plano de obtenção.
- [x] Limite de gastos aprovado.
- [x] Riscos legais e de reputação tratados ou conscientemente adiados com controles.

### Registro de encerramento

- **Data:** 21/07/2026
- **Aprovado por:** empresa, por aprovação explícita das recomendações nesta conversa
- **Evidências:** verdade comercial registrada; responsáveis definidos; envio real do Web3Forms confirmado; acesso ao GCP/Firebase `site-safras` validado; DNS público verificado; H0 confirmada em produção; teto de R$ 0 aprovado
- **Pendências aceitas:** acesso administrativo ao DNS, Search Console e Google Business Profile; detalhamento das regiões; planilha de leads; página completa de privacidade; Analytics adiado
- **Decisão:** Fase 0 aprovada; Fase 1 autorizada somente para implementação e testes locais, sem commit, PR ou deploy

---

## Ação extraordinária H0 — Remoção de conteúdo não verificável

**Estado:** APROVADA — implementação e produção verificadas

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
- [x] Produção verificada em 21/07/2026 sem depoimentos não verificáveis.

### Gate H0

- [x] Autorização explícita recebida.
- [x] Nenhum depoimento não verificável permanece no código ou no build local.
- [x] Nenhum depoimento não verificável permanece em produção.
- [x] Nenhuma lacuna visual ou regressão funcional nos cenários locais testados.
- [x] Incidente registrado no Histórico e no Log de decisões.
- [x] Regra permanente de autorização de depoimentos documentada.

---

## Fase 1 — Recuperação técnica

**Estado:** APROVADA — 20/08/2026. Gate integralmente atendido; ver “Medição definitiva” abaixo.

### Objetivo

Garantir que mecanismos de busca encontrem, entendam e indexem apenas URLs válidas, com excelente experiência para usuários.

### Auditoria de entrada — 21/07/2026

- produção em PT-BR, EN e ES respondendo 200;
- `robots.txt`, sitemap e URL inexistente respondendo incorretamente 200 com a home;
- regra `rewrites: ** → /index.html` confirmada como causa do falso 200;
- canonical e quatro alternates presentes nas três páginas principais;
- redirecionamento automático de idioma confirmado no layout;
- Open Graph, Twitter Cards e dados estruturados ausentes;
- `www` configurado por CNAME para `site-safras.web.app`; HTTP redireciona ao domínio sem `www`, mas a resposta HTTPS com `www` deverá ser revalidada antes do gate;
- GCP `site-safras` ativo, gatilho regional `deploy-main` ligado a `main` e Firebase Hosting com somente o canal `live`;
- última publicação regional identificada: build bem-sucedido do commit `d253e446aa1431f2b655d7b293b60c8abc155b9d` em 21/07/2026.

### Especificações aprovadas para implementação

**Aprovação recebida em:** 21/07/2026

Estas decisões estão aprovadas. Cada item só será considerado concluído após implementação, testes e evidências.

1. **Domínio canônico:** usar `https://safrasenegocios.com.br`; a variante `www` deverá redirecionar permanentemente para o domínio sem `www`.
2. **Idiomas:** manter URLs separadas em PT-BR, EN e ES, com `hreflang` e seletor visível; substituir o redirecionamento automático por uma sugestão que dependa da escolha do visitante.
3. **Erro 404:** criar página real e útil nos três idiomas, com identidade da marca, mensagem curta, retorno ao início, serviços, contato, e-mail e WhatsApp.
4. **Títulos da página inicial:** PT `Safras & Negócios | Corretora de café`; EN `Safras & Negócios | Coffee Brokerage`; ES `Safras & Negócios | Corretaje de Café`.
5. **Descrição PT da página inicial:** “Intermediação e serviços para o mercado de café, com suporte em mercado físico e futuro, CPR, qualidade, prova sensorial, embarques e conferências.” EN e ES terão traduções equivalentes e revisadas.
6. **Imagem social:** criar posteriormente uma imagem horizontal própria, em alta resolução, baseada em atividade ou ambiente real da empresa e com marca discreta; evitar arte composta apenas por logotipo ou excesso de texto.
7. **Dados estruturados:** implementar `LocalBusiness` com nome, endereço, telefone internacional, e-mail público, horário, URL canônica, fundação em 19/10/2015 e imagem real da empresa. Não incluir proprietário, funcionários, avaliações, clientes, preços ou logotipos de terceiros.
8. **Sitemap inicial:** incluir somente `/`, `/en` e `/es`. Excluir `/contato`, `/qr`, `/manutencao`, 404, redirecionamentos, URLs experimentais e inexistentes.
9. **Robots e indexação:** permitir rastreamento das páginas públicas, indicar o sitemap em `robots.txt` e usar `noindex` nas páginas que não devem aparecer, sem tentar usar `robots.txt` como substituto de `noindex`.
10. **Publicação:** implementar e testar localmente junto das demais mudanças; commit, PR e deploy somente quando o conjunto estiver pronto e houver nova autorização.

### Implementação concluída nesta etapa

- fallback curinga removido do Firebase Hosting;
- 404 trilíngue, responsivo e com `noindex`;
- `robots.txt` explícito e sitemap oficial com somente `/`, `/en` e `/es`;
- canonical normalizado, `hreflang`, Open Graph e Twitter Cards validados nos três idiomas;
- imagem social real da fachada gerada em 1200 × 630, reduzida de aproximadamente 525 KB para 60 KB;
- `LocalBusiness` com dados públicos aprovados, sem proprietário, avaliações, clientes ou terceiros;
- redirecionamento automático substituído por sugestão que depende da escolha da pessoa;
- `noindex` nas rotas auxiliares e de manutenção;
- tela de carregamento artificial retirada do caminho visual, eliminando o bloqueio mínimo de 900 ms;
- títulos e descrições iniciais revisados em PT-BR, EN e ES.
- transição visual da barra superior preservada; a biblioteca de rolagem foi substituída pela rolagem nativa do navegador, com os mesmos deslocamentos de navegação e respeito à preferência de movimento reduzido;
- dependência `lenis` e o carregador oculto sem função removidos, reduzindo JavaScript e trabalho da página;
- imagens do hero, serviços, mapa, diferenciais, rodapé e logotipos convertidas para variantes responsivas e otimizadas, com dimensões explícitas, carregamento prioritário apenas no hero e carregamento tardio no conteúdo fora da primeira tela;
- imagens brutas de vários megabytes deixaram de ser entregues diretamente como fundos CSS;
- animações mais custosas simplificadas ou desativadas no celular quando não acrescentavam informação;
- estilos críticos incorporados ao HTML para retirar o bloqueio de renderização da folha principal nesta arquitetura de página única;
- hierarquia de títulos, nomes acessíveis de links, estado da barra oculta, contato e tratamento de erro do formulário revisados;
- formulário passou a expor o resumo de privacidade como descrição, estado de envio e foco no aviso de erro, sem alterar seu destino nem realizar novo envio real durante a auditoria.

### Evidências de desempenho e experiência — 21/07/2026

Auditoria Lighthouse mobile executada localmente com build de produção:

| Indicador | Antes | Melhor execução após as alterações | Mediana local após as alterações |
|---|---:|---:|---:|
| Performance | 53 | 95 | 94 em PT, EN e ES |
| Acessibilidade | 97 | 100 | 100 em PT, EN e ES |
| Boas práticas | 100 | 100 | 100 em PT, EN e ES |
| SEO técnico | 100 | 100 | 100 em PT, EN e ES |
| LCP | 17,6 s | 2,7 s | 2,93 s PT; 2,93 s EN; 2,86 s ES |
| FCP | — | 1,8 s | aproximadamente 1,8 s nos três idiomas |
| CLS | — | 0,002 | inferior a 0,001 nas três medianas |
| TBT | 830 ms | 50 ms | 45 ms PT; 100 ms EN; 31 ms ES |
| Transferência inicial aproximada | 10,8 MiB | 580 KiB | aproximadamente 593 KiB |

As medianas foram obtidas em três execuções por idioma usando servidor local simples, sem compressão de transporte. A melhor execução já atingiu 95, mas o gate de desempenho continuará aberto até a medição em preview ou produção confirmar Lighthouse mobile igual ou superior a 95 e LCP igual ou inferior a 2,5 s de forma representativa.

Validações locais adicionais:

- `/`, `/en` e `/es` respondem 200; `robots.txt`, `sitemap-index.xml` e `sitemap-0.xml` respondem 200;
- `/contato` responde 301, `/qr` responde 302 e uma URL inexistente responde 404;
- uma única H1, headings complementares, navegação por anchors e ausência de overflow horizontal foram verificadas nos três idiomas;
- a barra superior mantém sua transição visual atual e passa a alternar corretamente seus estados acessíveis conforme aparece;
- menu móvel abre, fecha e conduz à seção selecionada; navegação nativa mantém o conteúdo abaixo da barra;
- contraste, nomes acessíveis e dimensões de imagens passaram nas auditorias automatizadas;
- nenhum envio de formulário foi realizado durante as auditorias automatizadas.

### Publicação e validação em produção — 21/07/2026

- PR #18 integrada à `main` pelo commit `9cf63dbc4e17a2637ae3231d17a2daa4017a03e4`;
- Cloud Build `c6b9fab2-a771-4e57-803d-4d66b3543c36` concluído com sucesso e 72 arquivos publicados no Firebase Hosting;
- auditoria pública identificou que a frase final do hero, após a retirada do preenchimento visual solicitada, perdeu contraste sobre áreas claras da fotografia;
- correção sem restaurar fundo, borda ou preenchimento publicada pela PR #19 e commit `b429e556073ea56819db71319d6ff5a084b6cdf7`;
- Cloud Build complementar `14a1edf3-a114-4867-a765-275e5a70ae17` concluído com sucesso;
- `/`, `/en` e `/es` responderam 200; `robots.txt`, `sitemap-index.xml` e `sitemap-0.xml` responderam 200 com os tipos corretos;
- `/contato` respondeu 301, `/qr` respondeu 302 e uma URL aleatória respondeu 404 real;
- as três páginas apresentaram uma H1, canonical correto, quatro alternates, Open Graph, `LocalBusiness`, imagens dimensionadas, anchors existentes e ausência de overflow horizontal;
- menu móvel abriu, fechou e posicionou `#servicos` aproximadamente 70 px abaixo do topo, preservando a barra superior;
- nenhum erro de console foi observado e o formulário não foi enviado durante a verificação;
- Firebase informou `HOST_ACTIVE`, `OWNERSHIP_ACTIVE` e `CERT_ACTIVE` para o domínio principal e `www`; a variante `www` possui redirecionamento para `safrasenegocios.com.br` e respondeu 301 por IPv4;
- a conexão IPv6 de `www` foi reiniciada no computador de teste, apesar do estado ativo no Firebase; manter revalidação externa para separar limitação da rede local de eventual problema de rota.

#### Lighthouse mobile na hospedagem pública

| Idioma | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT | Transferência |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| PT-BR | 97 | 100 | 100 | 100 | 1,95 s | 0,0023 | 67 ms | 441 KB |
| EN | 96 | 100 | 100 | 100 | 1,48 s | 0,0006 | 221 ms | 440 KB |
| ES — mediana de 3 | 90 | 100 | 100 | 100 | 1,61 s | 0,0005 | 387 ms | 441 KB |

As três execuções de ES variaram entre 89, 90 e 99 de performance, com TBT entre 95 e 403 ms. LCP, CLS, acessibilidade, boas práticas, SEO e peso permaneceram dentro das metas; a instabilidade do TBT exige nova rodada controlada antes de aprovar integralmente o gate de performance para esse idioma.

### Checklist

- [x] Auditar configuração do Firebase Hosting.
- [x] Corrigir localmente o fallback que produzia falsos status 200.
- [x] Implementar página 404 real e útil nos três idiomas.
- [x] Implementar `robots.txt` explícito.
- [x] Instalar a integração oficial e gerar `sitemap-index.xml` somente com URLs canônicas e indexáveis.
- [x] Validar `canonical`, idioma e alternates nas três páginas principais.
- [x] Manter registro explícito das três URLs indexáveis e traduções correspondentes.
- [x] Substituir o redirecionamento automático por sugestão de idioma.
- [x] Revisar localmente códigos HTTP e redirects; revalidação pública permanece para o deploy.
- [x] Aplicar `noindex` ao 404, manutenção e fallbacks das rotas auxiliares.
- [x] Revisar títulos, descrições, headings e links rastreáveis.
- [x] Implementar metadados Open Graph, Twitter Cards e imagem social real otimizada.
- [x] Implementar dados estruturados institucionais válidos.
- [x] Padronizar localmente nome, endereço, telefone e e-mail público.
- [x] Converter e dimensionar imagens corretamente.
- [x] Remover o atraso visual artificial mínimo de 900 ms.
- [x] Auditar os demais recursos que possam prejudicar Core Web Vitals.
- [x] Testar mobile, teclado, semântica acessível e redução de movimento no ambiente local.
- [x] Rodar checagem, build, validação de metadados, teste visual responsivo e teste local de códigos HTTP.
- [x] Rodar auditoria Lighthouse e concluir testes locais de links e acessibilidade.
- [x] Validar produção após o deploy aprovado, mantendo as pendências explícitas de ES, IPv6 de `www` e INP de campo.

### Medição definitiva — 20/08/2026

A medição de 21/07/2026 deixou o gate aberto: o espanhol marcou mediana 90, com execuções entre 89
e 99 e TBT oscilando de 95 a 403 ms. A suspeita era um defeito específico do ES.

**A comparação estrutural dos três idiomas no build derrubou essa hipótese:**

| | PT | EN | ES |
|---|---:|---:|---:|
| HTML | 167.991 b | 167.227 b | 168.192 b |
| Tags no DOM | 631 | 629 | 630 |
| Scripts | 13 | 13 | 13 |
| JS inline | 13.605 b | 13.604 b | 13.604 b |

São praticamente o mesmo documento — 2 tags e 1 byte de diferença. Não há nada estruturalmente
específico do espanhol. A variação de 89 a 99 na mesma URL é assinatura de contenção de CPU na
máquina de teste, não de diferença no site.

**Nova medição, via PageSpeed Insights API**, que roda o Lighthouse nos servidores do Google, com
CPU e rede padronizadas — eliminando exatamente a variável suspeita:

| Idioma | Performance | LCP | FCP | TBT | CLS | Amplitude |
|---|---:|---:|---:|---:|---:|---:|
| PT-BR | **100** | 1,43 s | 1,20 s | 0 ms | 0,0009 | 0 |
| EN | **100** | 1,43 s | 1,20 s | 0 ms | 0,0008 | 0 |
| ES | **100** | 1,43 s | 1,20 s | 0 ms | 0,0006 | 0 |

**Método:** `scripts/measure-psi.mjs`, estratégia mobile, mediana de 3 execuções por URL, em **duas
rodadas independentes** — 18 execuções ao todo. Todas retornaram 100, com amplitude 0 em cada URL.
A medição local que gerou o impasse não era reprodutível; esta é.

**Conclusão:** não havia problema de performance em espanhol. Havia problema de medição. Nenhuma
otimização foi necessária e nenhum código de `src/` foi alterado.

> Toda medição futura deve usar este script e reportar **mediana**, nunca a melhor execução. Foi a
> ausência desse critério que manteve o gate aberto por um mês.

### Desfecho do IPv6 de `www` — 20/08/2026

A pendência registrava que a conexão IPv6 de `www` havia sido reiniciada no computador de teste.
Verificado:

- a máquina de teste **não possui endereço IPv6 global** — o erro era local, como se suspeitava;
- `www.safrasenegocios.com.br` **tem IPv6**, via `CNAME` para `site-safras.web.app`, que publica
  registro `AAAA`;
- `www` responde 301 para o domínio sem `www`, como esperado.

**Achado novo:** o domínio apex `safrasenegocios.com.br` possui apenas registro `A`, **sem `AAAA`**.
Clientes exclusivamente IPv6 não alcançam o domínio principal de forma direta. Não é regressão —
sempre foi assim — mas é uma lacuna de configuração de DNS, registrada para tratamento na Fase 2,
quando os acessos de DNS forem usados. Confirmar no console do Firebase quais registros ele indica
para o domínio antes de alterar a zona.

### Gate da Fase 1

- [x] URL inexistente retorna 404, não a página inicial, em produção.
- [x] `robots.txt` e `sitemap-index.xml` respondem corretamente em produção.
- [x] Nenhum erro crítico de canonical ou `hreflang` em produção.
- [x] Lighthouse mobile igual ou superior a 95 nas páginas principais — **100 em PT, EN e ES** (PageSpeed Insights, mediana de 3 execuções, duas rodadas independentes).
- [x] LCP e CLS dentro das metas em laboratório; INP será validado com dados de campo quando disponível.
- [x] Checklist básico de acessibilidade aprovado em produção.
- [x] Build e deploy de produção aprovados.

### Registro de encerramento

- **Data:** 21/07/2026.
- **Relatório técnico:** implementação, PRs #18 e #19, dois Cloud Builds e auditoria pública concluídos; site principal publicado e funcional.
- **Métricas antes/depois:** performance PT 53 → 97; acessibilidade 97 → 100; transferência aproximada 10,8 MiB → 441 KB; LCP 17,6 s → 1,95 s em PT.
- **Pendências:** repetir Lighthouse de ES em condições controladas, validar INP com dados de campo e revalidar externamente o caminho IPv6 de `www`.
- **Decisão:** mover a Fase 1 para EM VALIDAÇÃO; não aprovar o gate integral enquanto a mediana de performance em ES permanecer abaixo de 95. *(Registro histórico — superado pelo encerramento final de 20/08/2026, logo abaixo.)*

#### Encerramento final — 20/08/2026

- **Relatório técnico:** o único item pendente do gate era o desempenho em espanhol. A comparação
  estrutural dos três idiomas e a nova medição via PageSpeed Insights demonstraram que não havia
  defeito no site, e sim medição não reprodutível.
- **Métricas finais:** performance **100** em PT, EN e ES; LCP 1,43 s; TBT 0 ms; CLS abaixo de
  0,001. Mediana de 3 execuções por URL, em duas rodadas independentes.
- **Pendências resolvidas:** desempenho em ES e IPv6 de `www`.
- **Pendências transferidas para a Fase 2:** INP de campo, que depende de dados reais de usuário, e
  o registro `AAAA` ausente no domínio apex.
- **Código alterado:** nenhum em `src/`. A correção foi de método, não de implementação.
- **Decisão:** **Fase 1 APROVADA.** Fase 2 autorizada a iniciar.

---

## Fase 2 — Mensuração e presença oficial

**Estado:** EM ANDAMENTO desde 20/08/2026

### Objetivo

Criar uma linha de base confiável. Sem mensuração, não há como distinguir crescimento real de impressão subjetiva.

### Política de privacidade — CONCLUÍDA em 20/08/2026 (Fase B)

A decisão de 21/07/2026 condiciona qualquer mensuração à publicação da política de privacidade.
Publicada nos três idiomas em `/privacidade`, `/en/privacy` e `/es/privacidad`, descrevendo
**apenas o que existe hoje**: o formulário de contato e o cookie de idioma. Ela declara
explicitamente que o site não usa analytics, pixel nem cookie de publicidade — o que obriga a
atualizá-la **antes** de instalar qualquer medição, não depois.

Junto com ela veio o registro de rotas (`src/i18n/routes.ts`), que passa a ser a fonte da verdade
das URLs por idioma e alimenta canonical, `hreflang`, o switcher e o sitemap.

### Consentimento — CONCLUÍDO em 20/08/2026 (Fase C)

O consentimento entrou **antes** de existir o que medir. É a única ordem segura: com o analytics
primeiro, haveria uma janela em que o site mede pessoas sem base para isso, e essa janela não teria
como ser desfeita.

O que ficou pronto:

- `gtag('consent','default', …)` com tudo negado, emitido como **primeiro script da página** — sem
  isso o sinal do Consent Mode não é válido;
- sinais de publicidade negados **permanentemente**, sem controle na interface: o site não faz
  publicidade, e travar no código impede concessão por descuido de configuração;
- **Global Privacy Control respeitado** — quem já sinalizou a escolha no navegador não é
  interrompido;
- revogação pelo rodapé, em qualquer página;
- CSP publicada, de modo que a instalação do GA4 seja puramente aditiva.

A comporta que a Fase D vai consumir é `window.__consent.onChange()`.

### Checklist

- [x] Publicar a política de privacidade completa nos três idiomas.
- [x] Implementar o consentimento de cookies, com estado persistido e revogação disponível.
- [x] Atualizar a CSP do `firebase.json` para o domínio de analytics.
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
4. quando o Analytics for futuramente aprovado, enviar somente conversões agregadas e categorias predefinidas;
5. avaliar backend próprio no GCP ou CRM somente quando volume, risco ou operação justificarem.

Gilson Souza será o responsável comercial inicial. A planilha poderá ser acessada por pessoas autorizadas dos setores de cadastro e comercial, sempre por contas individuais, com autenticação em duas etapas e privilégio mínimo. Os nomes e responsabilidades serão registrados quando a planilha for criada.

Os registros serão excluídos ou anonimizados 12 meses após a última interação, salvo negociação ativa ou obrigação legal aplicável.

O destinatário operacional do formulário é o e-mail interno definido no registro privado da empresa. A conta, a chave e o destino do Web3Forms foram confirmados, e o usuário validou um envio real. A restrição por domínio é um recurso pago e não será contratada nesta etapa. Retenção do fornecedor, transferência internacional, exclusão e continuidade continuarão sendo avaliadas antes de tratá-lo como solução permanente.

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

## 12. Registro de decisões e histórico de execução

Ambos migraram para **[`registro-operacional.md`](./registro-operacional.md)** em 20/08/2026.

O motivo: as duas listas crescem a cada entrega e empurravam o roadmap para o fim de um arquivo de
1.258 linhas. Este documento passa a responder *"para onde vamos"*; o registro operacional responde
*"o que já decidimos e fizemos"*.

O registro operacional contém:

- **Registro de decisões** — decisões tomadas, com motivo, responsável e data de revisão;
- **Decisões em aberto** — o que depende de confirmação externa e **bloqueia** trabalho já
  identificado;
- **Histórico de execução** — ações, evidências e próximos passos;
- **Riscos registrados fora do plano**;
- o modelo para novas entradas.

**Ao concluir qualquer trabalho deste plano, registrar lá — não aqui.**

## 13. Revisão de encerramento de fase

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

## 14. Próximas ações

Atualizado em 20/08/2026, com a Fase 1 aprovada.

A sequência acordada com o cliente: **Fase 1 (concluída) → privacidade e consentimento → Search
Console e analytics → eventos de conversão.** Ao fim, a Fase 2 encerra e a trilha do ecossistema
destrava. Cada etapa tem análise e plano próprios antes da implementação.

### Etapa em andamento — infraestrutura de rotas e privacidade

1. criar o registro `routeKey → locale → pathname`, item já previsto no checklist da Fase 4 e
   antecipado porque a primeira página nova o exige de qualquer forma;
2. publicar a **página completa de privacidade** nos três idiomas — pré-requisito registrado para
   qualquer mensuração;
3. ajustar o filtro do sitemap em `astro.config.mjs`, hoje uma lista fixa de três URLs.

### Na sequência

4. **consentimento de cookies**, granular e com estado persistido;
5. atualizar a **CSP** do `firebase.json` para o domínio de analytics — sem isso o recurso é
   bloqueado silenciosamente pelo navegador;
6. verificar a propriedade no **Search Console** e enviar o sitemap;
7. instalar **analytics sob consentimento** e preencher o baseline;
8. instrumentar os **eventos de conversão** — WhatsApp, telefone, e-mail, envio e erro de
   formulário, sempre sem dado pessoal.

### Pendências herdadas da Fase 1

9. **INP de campo** — depende de dados reais de usuário, disponíveis após a etapa 7;
10. **registro `AAAA` ausente no domínio apex** — o `www` tem IPv6, o domínio principal não.
    Tratar quando a zona de DNS for tocada, confirmando antes no console do Firebase.

### Adiadas por decisão do cliente

11. credenciais setoriais e redação final do descritor da marca — ver
    [`registro-operacional.md`](./registro-operacional.md#decisões-em-aberto).

**Regra mantida:** nenhum commit, PR ou deploy sem autorização específica.

---

## 15. Auditoria externa — 20/08/2026

Primeira auditoria de presença fora do site. Complementa o diagnóstico da §6, que olhava apenas
para o código e para a resposta HTTP.

### Estado técnico confirmado em produção

`/`, `/en`, `/es`, `robots.txt` e `sitemap-index.xml` responderam 200; URL inexistente respondeu
404 real; `/contato` respondeu 301 e `/qr` respondeu 302. Canonical, quatro alternates, Open Graph
e `LocalBusiness` presentes e coerentes nos três idiomas. **A Fase 1 se sustenta em produção.**

### Achados

**1. Conflito de entidade — RESOLVIDO em 20/08/2026.** A auditoria encontrou duas empresas
registradas sob a mesma marca na cidade, com datas de fundação e endereços diferentes, e o site
combinava dados das duas. **O cliente confirmou a entidade única e oficial**: fundação em 2015,
endereço de atendimento na Av. Oliveira Rezende, sócio proprietário único. A alegação "Desde 2015"
está correta e o endereço publicado é o certo. A segunda inscrição não é usada publicamente e não
entra em nenhuma superfície do site. Identificadores permanecem no registro privado da empresa —
não neste repositório.

**2. NAP inconsistente — RESOLVIDO em 20/08/2026.** Nenhum dos três telefones que circulavam em
diretórios públicos era o oficial, e o que estava publicado no site era um **fixo** — o que
significa que os botões de WhatsApp apontavam para um número sem WhatsApp, provavelmente desde o
lançamento. O cliente informou o número oficial único, para ligação e para WhatsApp, e ele
substituiu o fixo em todas as onze ocorrências do site (PR #24). **Ação remanescente, fora do
código:** corrigir o número nos diretórios externos, para que o NAP fique consistente também fora
do site.

**3. Confusão de marca confirmada.** O termo "Safras" no setor agro é dominado por uma consultoria
nacional de grande porte, com décadas de operação e presença internacional, além de outras
empresas com nomes semelhantes. Disputar o termo genérico é inviável. O caminho é a desambiguação
de entidade: `sameAs` ligando perfis oficiais, perfil comercial consistente e descritor próprio.

> **Correção de 20/08/2026 —** esta seção recomendava incluir a cidade nos títulos das páginas.
> **Decidido não fazer.** Os títulos atuais já são específicos e a inserção da cidade encurtaria o
> espaço útil do título em troca de ganho incerto; o cliente também indicou que a cidade não é
> necessária nessa posição. A desambiguação de entidade fica por conta de `sameAs` e do perfil
> comercial. A redação final do descritor da marca segue em aberto por decisão do cliente.

**4. Ausência em diretório setorial.** A empresa não consta na lista de corretores do centro de
comércio de café estadual, onde constam concorrentes diretos. É credencial de autoridade e fonte
legítima de link. Registrado como decisão em aberto.

**5. Superfície de conteúdo insuficiente.** O site tem **uma** URL indexável por idioma. O
concorrente digital de referência do setor mantém **dez**, com hub editorial e slugs orientados a
intenção de busca. Não há o que ranquear além da home — este é o principal limitador de
posicionamento hoje, acima de design e de performance.

**6. Canal social subaproveitado.** O perfil oficial em rede social tem audiência real de quase dois
mil seguidores e já aponta para o site, mas nenhum acesso vindo dele é medido ou atribuído. Além
disso, o descritor da marca no perfil difere do descritor do site.

### Vantagens competitivas observadas

- O site é estático e entrega HTML completo; o concorrente de referência renderiza o conteúdo por
  JavaScript, entregando poucos KB de HTML inicial.
- Desempenho, acessibilidade e trilinguismo já estão acima do padrão observado no setor.
- Nenhum concorrente analisado publica dados regionais ou cotações — o espaço previsto para o
  Observatório (Fase 7) está aberto.

### Consequências para o plano

- A Fase 4 (arquitetura da informação) ganha prioridade estratégica: é ela que resolve o achado 5.
- A Fase 2 estava travada pelo achado 1; **com a entidade e o telefone confirmados, o bloqueio caiu**
  e as ações de presença oficial estão liberadas.
- Os achados 3 e 6 alimentam a trilha do
  [`plano-ecossistema-comunicacao.md`](./plano-ecossistema-comunicacao.md).
- O risco "Confusão de marca" da §11 deixa de ser hipótese e passa a fato observado.

**Método:** consulta a buscador público, diretórios de empresas, perfis públicos e sites de
concorrentes, mais verificação direta de códigos HTTP e metadados em produção. As consultas usaram
índice de busca não regionalizado — servem como direção, **não** como medida de posicionamento no
Brasil. A medida real virá do Search Console, agora acessível.

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
