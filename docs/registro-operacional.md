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

| 20/08/2026 | 0 | Adotar a entidade fundada em 19/10/2015 como **única** entidade pública, com atendimento presencial na Av. Oliveira Resende, 1397 — Jardim Bernadete | Existiam duas empresas registradas sob a mesma marca; o site misturava dados das duas. A segunda não será usada na comunicação | Proprietário | Se a estrutura societária mudar |
| 20/08/2026 | 0 | Confirmar que a alegação pública “Desde 2015” está correta | A data de fundação pertence à entidade pública adotada | Proprietário | Permanente |
| 20/08/2026 | 0 | Confirmar sócio proprietário **único** | Corrige a leitura de fontes públicas que sugeriam mais de um sócio | Proprietário | Se a estrutura societária mudar |
| 20/08/2026 | 0 | Adotar `(35) 98461-7193` como telefone e WhatsApp **único**, substituindo `(35) 3531-4046` em todo o site | O número anterior não é o canal principal de atendimento. Número único para ligação e WhatsApp reduz atrito e evita NAP divergente | Proprietário | Ao incluir contatos de funcionários |
| 20/08/2026 | 0 | Confirmar **atuação exclusiva em café** | Define o descritor da marca como corretora de café, sem outras commodities | Proprietário | Se a atuação for ampliada |
| 20/08/2026 | 4 | Não incluir a cidade no título das páginas | Decisão do cliente, ciente da recomendação de SEO local. O descritor geográfico segue disponível como opção futura | Proprietário | Ao revisar títulos com dados do Search Console |
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

### Resolvidas em 20/08/2026

- **Identidade da entidade** — resolvida: entidade única definida, endereço de atendimento
  confirmado, “Desde 2015” validado.
- **Telefone oficial** — resolvida: `(35) 98461-7193` como número único.

---

## Riscos registrados fora do plano

| Registrado em | Risco | Situação |
|---|---|---|
| 20/08/2026 | O e-mail interno destinatário do formulário aparece repetidamente na documentação de um repositório público, contrariando a própria decisão de 21/07/2026 que o define como não público. | Aberto. Corrigir exige limpar o histórico do Git — ação destrutiva, pendente de autorização específica. Documentação nova não repete o dado. |
| 20/08/2026 | A chave pública do Web3Forms está literal em `cloudbuild.yaml`, em repositório público, e a restrição por domínio é recurso pago não contratado. | Aceito conscientemente enquanto o volume for baixo. Reavaliar se surgir spam ou ao ampliar tráfego — gatilho já previsto na Fase 2. |
