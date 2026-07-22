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
| Versão | 2.7 |
| Fase ativa | Fase 1 — Recuperação técnica |
| Ação extraordinária | H0 — APROVADA e verificada em produção |
| Estado geral | EM VALIDAÇÃO — recuperação técnica publicada; estabilidade de desempenho em ES e dados de campo pendentes |
| Última revisão | 21/07/2026 |
| Próxima revisão | Após nova rodada representativa do Lighthouse em ES e início da coleta de dados de campo |

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
| Telefone e WhatsApp | (35) 3531-4046 |
| E-mails | `atendimento@safrasnegocios.com.br` é o canal público; `flavio@safrasnegocios.com.br` é o destinatário interno do formulário e não deve aparecer publicamente |
| Web3Forms | Conta e chave administráveis confirmadas; destino atualizado para `flavio@safrasnegocios.com.br` e envio real validado pelo usuário |
| Horário | Segunda a sexta-feira, das 8h às 18h |
| Fundação | 19/10/2015 |
| Proprietário | Gilson Souza |
| Experiência | Gilson possui mais de 30 anos de atuação no mercado cafeeiro; a apresentação nominal foi adiada para uma futura página de equipe |
| Serviços | Intermediação de café no mercado físico e futuro; CPR em relação com instituições bancárias; classificação e análise de qualidade; prova sensorial; embarques e conferências |
| Públicos | Vendedores e compradores, incluindo produtores, exportadores e multinacionais |
| Cobertura | Atendimento em várias regiões; mapa e delimitação detalhada serão validados futuramente |
| Idiomas | PT-BR como fonte; EN e ES têm finalidade comercial e institucional, sempre com revisão |
| Equipe | Funcionários possuem capacidade técnica; nomes e perfis individuais não serão publicados nesta etapa |
| Responsáveis | Gilson Souza: comercial, editorial, técnico e aprovador factual |
| Registro de leads | E-mail e planilha privada aprovados; acesso por contas individuais para pessoas autorizadas dos setores de cadastro e comercial; retenção operacional de 12 meses após a última interação |
| Acesso técnico | CLI do Firebase e do GCP `site-safras` confirmadas; domínio/DNS e Search Console ainda precisam ser verificados |
| Google Business Profile | A empresa existe no Google Maps; acesso administrativo ainda precisa ser localizado |
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
- [x] Confirmar telefone e WhatsApp oficial: `(35) 3531-4046`.
- [x] Definir `atendimento@safrasnegocios.com.br` como e-mail público e manter `flavio@safrasnegocios.com.br` somente como destinatário interno.
- [x] Confirmar o destinatário operacional atual do formulário.
- [x] Confirmar conta Web3Forms administrável, destino interno e realizar envio controlado com recebimento validado.
- [ ] Reavaliar restrição de domínio somente se um plano pago do Web3Forms for aprovado; o recurso não está disponível gratuitamente.
- [x] Definir Gilson Souza como responsável comercial, editorial, técnico e aprovador factual.
- [x] Confirmar acesso CLI ao Firebase/GCP `site-safras`.
- [ ] Confirmar acessos ao domínio/DNS e Google Search Console.
- [ ] Recuperar ou confirmar acesso administrativo ao Google Business Profile.
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
| 1 | Recuperação técnica | EM ANDAMENTO | Site rastreável, indexável, rápido e sem falsos 200 |
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

**Estado:** APROVADA

### Objetivo

Definir o que a Safras & Negócios pode afirmar publicamente, quem valida o conteúdo e quais recursos estão disponíveis. Sem esta base, escala aumenta o risco de publicar informação incorreta.

### Checklist

- [x] Aprovar o nome comercial e registrar a decisão de não publicar razão social/CNPJ neste momento.
- [x] Registrar endereço, telefone, e-mail atual, horários e fundação confirmados.
- [x] Confirmar telefone e WhatsApp oficial: `(35) 3531-4046`.
- [x] Definir `atendimento@safrasnegocios.com.br` como e-mail público; manter `flavio@safrasnegocios.com.br` somente como destinatário interno do formulário.
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
- [ ] Recuperar ou confirmar acesso administrativo ao Google Business Profile.
- [x] Adiar Google Analytics e novas ferramentas de mensuração até a finalização da construção do site e da página completa de privacidade.
- [x] Aprovar planilha privada como registro inicial; responsável operacional: titular de `flavio@safrasnegocios.com.br`.
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

**Estado:** EM VALIDAÇÃO — implementação publicada e produção auditada; estabilidade de desempenho em ES pendente

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

### Gate da Fase 1

- [x] URL inexistente retorna 404, não a página inicial, em produção.
- [x] `robots.txt` e `sitemap-index.xml` respondem corretamente em produção.
- [x] Nenhum erro crítico de canonical ou `hreflang` em produção.
- [ ] Lighthouse mobile igual ou superior a 95 nas páginas principais.
- [x] LCP e CLS dentro das metas em laboratório; INP será validado com dados de campo quando disponível.
- [x] Checklist básico de acessibilidade aprovado em produção.
- [x] Build e deploy de produção aprovados.

### Registro de encerramento

- **Data:** 21/07/2026.
- **Relatório técnico:** implementação, PRs #18 e #19, dois Cloud Builds e auditoria pública concluídos; site principal publicado e funcional.
- **Métricas antes/depois:** performance PT 53 → 97; acessibilidade 97 → 100; transferência aproximada 10,8 MiB → 441 KB; LCP 17,6 s → 1,95 s em PT.
- **Pendências:** repetir Lighthouse de ES em condições controladas, validar INP com dados de campo e revalidar externamente o caminho IPv6 de `www`.
- **Decisão:** mover a Fase 1 para EM VALIDAÇÃO; não aprovar o gate integral enquanto a mediana de performance em ES permanecer abaixo de 95.

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
4. quando o Analytics for futuramente aprovado, enviar somente conversões agregadas e categorias predefinidas;
5. avaliar backend próprio no GCP ou CRM somente quando volume, risco ou operação justificarem.

Gilson Souza será o responsável comercial inicial. A planilha poderá ser acessada por pessoas autorizadas dos setores de cadastro e comercial, sempre por contas individuais, com autenticação em duas etapas e privilégio mínimo. Os nomes e responsabilidades serão registrados quando a planilha for criada.

Os registros serão excluídos ou anonimizados 12 meses após a última interação, salvo negociação ativa ou obrigação legal aplicável.

O destinatário operacional do formulário é `flavio@safrasnegocios.com.br`. A conta, a chave e o destino do Web3Forms foram confirmados, e o usuário validou um envio real. A restrição por domínio é um recurso pago e não será contratada nesta etapa. Retenção do fornecedor, transferência internacional, exclusão e continuidade continuarão sendo avaliadas antes de tratá-lo como solução permanente.

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
| 21/07/2026 | 0 | Separar o e-mail público `atendimento@` do destinatário interno `flavio@` | Preserva clareza comercial e evita expor o canal operacional do formulário | Gilson Souza | Quando houver mudança oficial |
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
| 21/07/2026 | 0 | Governança do formulário confirmada | Destino alterado para `flavio@safrasnegocios.com.br` e recebimento real validado pelo usuário | Manter chave sob controle e acompanhar spam |
| 21/07/2026 | 0 | Pacote de contato e formulário aprovado para implementação | Quinze decisões comerciais e de apresentação aprovadas em conjunto | Validar código, build e apresentação antes de publicar |
| 21/07/2026 | 1 | Especificações da recuperação técnica registradas | Dez decisões aprovadas e documentadas sem iniciar a execução nem alterar o site | Encerrar ou aceitar formalmente as pendências da Fase 0 antes de iniciar a Fase 1 |
| 21/07/2026 | 0 | Gate de governança encerrado | Fase 0 aprovada com dados, responsáveis, teto de gastos, controles e pendências externas aceitas | Iniciar a Fase 1 localmente |
| 21/07/2026 | 1 | Auditoria local, pública e do GCP/Firebase concluída | Falso 200, ausência real de robots/sitemap, metadados incompletos, fluxo de deploy e estado da produção documentados | Implementar a base técnica |
| 21/07/2026 | 1 | Base técnica de recuperação implementada localmente | 404, robots, sitemap, canonical, hreflang, sugestão de idioma, metadados sociais, LocalBusiness, noindex e imagem social concluídos | Validar build, HTTP e experiência |
| 21/07/2026 | 1 | Validação técnica e visual local concluída | 0 erros; 7 rotas; sitemap com 3 URLs; URL inexistente 404; redirects 301/302; 404 e sugestão testados em desktop/mobile e em três idiomas | Auditar Lighthouse, acessibilidade e demais recursos |

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

## 15. Próximas ações da Fase 1

A base técnica foi implementada e validada localmente. As mudanças permanecem sem commit, PR ou deploy e serão acumuladas com os demais ajustes do site até nova autorização específica.

1. executar Lighthouse local em PT-BR, EN e ES, priorizando mobile;
2. revisar LCP, CLS, scripts, imagens e recursos ainda pesados;
3. concluir testes de teclado, foco, leitor de tela e redução de movimento;
4. revisar headings, links internos, contraste e textos alternativos de toda a home;
5. revalidar o domínio `www`, o certificado e todos os códigos HTTP antes do gate;
6. manter Search Console e Google Business Profile como pendências acompanhadas, sem bloquear os testes locais;
7. continuar os ajustes institucionais e do formulário já aprovados;
8. criar futuramente a página completa de privacidade antes de instalar o Google Analytics;
9. não realizar commit, PR ou deploy até o conjunto estar revisado e houver autorização específica.

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
