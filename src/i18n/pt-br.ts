/**
 * Dicionário PT-BR — SOURCE OF TRUTH do conteúdo do site.
 *
 * Toda string visível ao usuário (ou anunciada a screen reader) vive aqui.
 * Esse arquivo define a SHAPE que en.ts e es.ts devem espelhar.
 *
 * Convenções:
 * - Chaves em camelCase, agrupadas por seção/contexto
 * - Strings curtas inline; strings longas em template strings se precisar
 * - Arrays pra listas (rotatingWords, strips, etc.)
 * - "as const" no final pra inferência precisa de tipos
 */

const dict = {
  meta: {
    siteTitle: "Safras & Negócios | Corretora de café",
    siteDescription:
      "Intermediação e serviços para o mercado de café, com suporte em mercado físico e futuro, CPR, qualidade, prova sensorial, embarques e conferências.",
    socialImageAlt:
      "Fachada da Safras & Negócios em São Sebastião do Paraíso, Minas Gerais",
  },

  brand: {
    name: "Safras & Negócios",
    logoAlt: "Safras & Negócios",
  },

  common: {
    loading: "Carregando",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    skipToContent: "Pular para o conteúdo",
    backToTop: "Voltar ao topo",
    top: "Topo",
    send: "Enviar",
  },

  languageSuggestion: {
    prompt: "Prefere ver esta página em português?",
    accept: "Ver em português",
    dismiss: "Agora não",
  },

  notFound: {
    metaTitle: "Página não encontrada | Safras & Negócios",
    eyebrow: "Erro 404",
    title: "Esta página não foi encontrada.",
    description:
      "O endereço pode ter mudado ou não existir. Você pode voltar ao início, conhecer nossos serviços ou falar com a equipe.",
    home: "Voltar ao início",
    services: "Conhecer os serviços",
    contact: "Entrar em contato",
    whatsapp: "Falar pelo WhatsApp",
    email: "Enviar e-mail",
    languageLabel: "Idioma desta página",
  },

  nav: {
    mainMenu: "Menu principal",
    items: {
      home: "Home",
      services: "Serviços",
      about: "Sobre nós",
      contact: "Contato",
    },
    cta: "Solicitar Serviço",
    logoAriaLabel: "Safras & Negócios — Ir para o topo",
    heroHeaderAriaLabel: "Cabeçalho sobre o hero",
    mobileMenuAriaLabel: "Menu principal (mobile)",
    language: "Idioma",
    languageSwitcherAriaLabel: "Selecionar idioma",
  },

  hero: {
    tag: "[ Corretora de café ]",
    rotatingWords: ["Tradição", "Confiança"],
    suffix: "no mercado cafeeiro",
    cta: "Explorar Serviços",
    scrollNextLabel: "Ir para a próxima seção",
  },

  services: {
    sectionLabel: "[ Serviços ]",
    titleLines: [
      ["Soluções"],
      ["completas", "para"],
      ["o", "seu", "café"], // "café" recebe text-brand
    ],
    intro: {
      part1: "Da origem à comercialização, oferecemos",
      highlight: "serviço estratégico",
      part2:
        "para produtores, compradores, empresas e exportadoras do mercado.",
    },
    cards: {
      mercadoNegociacao: {
        number: "01",
        title: "Mercado e Negociação",
        imageAlt:
          "Consultor da Safras & Negócios com prancheta orientando produtor de café em lavoura nas montanhas",
        description:
          "Intermediamos negócios no mercado de café com análise de mercado, consultoria comercial e acompanhamento completo da negociação.",
        strips: [
          "Consultoria comercial",
          "Mercado físico",
          "Mercado futuro",
          "Conexão\nProdução/Exportação",
          "CPR financeira",
        ],
      },
      analiseQualidade: {
        number: "02",
        title: "Análise de Qualidade",
        imageAlt:
          "Grãos de café verde sobre tapete preto Safras & Negócios, ao lado de peneira de classificação",
        description:
          "Avaliamos cada amostra por meio da classificação, prova sensorial e análise de umidade, oferecendo informações técnicas para uma negociação mais segura.",
        strips: [
          "Classificação de grãos",
          "Análise sensorial",
          "Análise de umidade",
        ],
      },
      suporteLogistico: {
        number: "03",
        title: "Suporte Logístico",
        imageAlt:
          "Equipe da Safras & Negócios supervisionando carregamento de sacas de café em caminhão com empilhadeira",
        description:
          "Apoiamos a etapa logística do café com agendamentos de embarque e desembarque, emissão de notas fiscais de remessa e acompanhamento completo do processo.",
        strips: ["Embarque", "Desembarque", "Suporte Pós Venda"],
      },
    },
  },

  about: {
    sectionLabel: "[ Sobre nós ]",
    titleLines: [
      ["Conectamos", "a", "origem"], // "Conectamos" recebe text-brand
      ["ao", "mercado."],
    ],
    intro: {
      part1:
        "Desde 2015, oferecemos consultoria e intermediação de café com a",
      highlight: "transparência e seriedade",
      part2: "que produtores e compradores esperam.",
    },
    stats: {
      city: {
        lines: ["São", "Sebastião", "do Paraíso"],
        label: "Sediado em",
      },
      years: {
        suffix: "",
        label: "Desde",
      },
    },
  },

  principles: {
    sectionLabel: "[ Princípios ]",
    titleLines: [
      ["Como"],
      ["trabalhamos."], // "trabalhamos." recebe text-brand
    ],
    intro: {
      part1: "Pilares que sustentam a",
      highlight: "excelência",
      part2: "no trabalho em cada parceria.",
    },
    cards: {
      historia: {
        title: "Nossa história",
        description:
          "Fundada em outubro de 2015, a Safras & Negócios iniciou sua trajetória no mercado cafeeiro com foco na intermediação de operações comerciais. Ao longo dos anos se consolidando como uma das principais corretoras da região, enxergando grandes oportunidades para o café mineiro.",
      },
      missao: {
        title: "Nossa missão",
        description:
          "Atender com excelência às demandas de nossos clientes a partir do atendimento de qualidade e oferta de serviços que contribuam para a melhoria de toda a cadeia que envolve nossos parceiros. Proporcionando assim, riqueza e desenvolvimento à região.",
      },
      visao: {
        title: "Nossa visão",
        description:
          "Ser empresa de referência no ramo serviço, reconhecida como uma excelente opção por clientes, colaboradores, comunidade, fornecedores e investidores, devido à qualidade de nossos serviços e relacionamentos.",
      },
      valores: {
        title: "Nossos valores",
        lead: "Princípios que sustentam cada relação:",
        items: [
          { name: "Valorização humana", body: "o ser humano como protagonista do negócio." },
          { name: "Ética", body: "conduta correta na sociedade." },
          { name: "Integridade", body: "retidão em cada decisão." },
          { name: "Comprometimento", body: "dedicação genuína." },
          { name: "Inovação", body: "diferenciais reconhecidos." },
          { name: "Superação de resultados", body: "evolução contínua." },
        ],
      },
    },
  },

  contact: {
    sectionLabel: "[ Contato ]",
    sectionAriaLabel: "Contato",
    cityMarkerLabel: "São Sebastião do Paraíso, MG",
    whatsappPrefill:
      "Olá! Encontrei a Safras & Negócios pelo site e gostaria de mais informações.",
    details: {
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      addressLabel: "Endereço",
      hoursLabel: "Horário",
      email: "atendimento@safrasnegocios.com.br",
      phone: "(35) 98461-7193",
      address:
        "Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso/MG",
      hours: "Segunda a sexta-feira, das 8h às 18h.",
      callAction: "Ligar",
      mapAction: "Abrir no Google Maps",
      whatsappAction: "Conversar pelo WhatsApp",
    },
    form: {
      honeypotLabel: "Não preencher",
      labels: {
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        state: "Estado",
        profile: "Perfil",
        interest: "Interesse",
        message: "Mensagem",
      },
      placeholders: {
        name: "Seu nome completo",
        email: "seu@email.com",
        phone: "(00) 00000-0000",
        state: "Ex: MG",
        select: "Selecione",
        message: "Descreva sua demanda (opcional)",
      },
      profileOptions: {
        producer: "Produtor",
        buyer: "Comprador / Trader",
        exporter: "Exportador",
        cooperative: "Cooperativa",
        financialInstitution: "Instituição financeira",
        partner: "Parceiro",
        other: "Outro",
      },
      interestOptions: {
        brokerage: "Intermediação e negociação de café",
        physicalMarket: "Mercado físico",
        futuresMarket: "Mercado futuro",
        cpr: "CPR",
        grading: "Classificação e análise de qualidade",
        cupping: "Prova sensorial",
        logistics: "Embarques e conferências",
        other: "Outro assunto",
      },
      submitLabel: "Enviar solicitação",
      submitSending: "Enviando...",
      successMessage:
        "Recebemos sua solicitação. Nossa equipe entrará em contato pelos dados informados.",
      privacySummary:
        "Ao enviar, você está ciente de que seus dados serão utilizados pela Safras & Negócios para analisar e responder ao seu contato.",
      states: {
        errorDetailed:
          "Não foi possível enviar agora. Fale conosco por um dos canais abaixo:",
      },
    },
  },

  consent: {
    title: "Cookies e privacidade",
    description:
      "Para entender como o site é usado e melhorá-lo, precisamos da sua permissão. Os cookies necessários ao funcionamento continuam ativos de qualquer forma.",
    learnMore: "Ler a Política de Privacidade",
    accept: "Aceitar",
    reject: "Recusar",
    preferences: "Preferências",
    panel: {
      title: "Preferências de cookies",
      alwaysOn: "Sempre ativo",
      save: "Salvar preferências",
      categories: {
        necessary: {
          title: "Necessários",
          description:
            "Mantêm o site funcionando: guardam o idioma que você escolheu e a sua própria decisão sobre cookies. Não identificam você e não podem ser desativados.",
        },
        analytics: {
          title: "Medição de audiência",
          description:
            "Permitem contar visitas e entender quais páginas são úteis, sempre de forma agregada. Nunca incluem nome, e-mail, telefone nem o conteúdo de mensagens.",
        },
      },
    },
    footerLink: "Preferências de cookies",
  },

  privacy: {
    meta: {
      title: "Política de Privacidade | Safras & Negócios",
      description:
        "Como a Safras & Negócios trata os dados enviados pelo site: o que é coletado, para quê, com quem é compartilhado e como exercer seus direitos.",
    },
    title: "Política de Privacidade",
    updatedLabel: "Última atualização",
    updatedAt: "20 de agosto de 2026",
    intro:
      "Esta política explica, em linguagem direta, como a Safras & Negócios trata os dados pessoais recebidos por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
    sections: [
      {
        title: "Quem trata os seus dados",
        body: [
          "A responsável pelo tratamento é a Safras & Negócios, corretora de café com atendimento presencial na Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso/MG.",
          "Para qualquer assunto relacionado a esta política, incluindo o exercício dos seus direitos, o canal é atendimento@safrasnegocios.com.br.",
          "Esta política se aplica ao site safrasenegocios.com.br. Não se aplica a sites de terceiros que você acesse a partir de links publicados aqui.",
        ],
      },
      {
        title: "Quais dados coletamos",
        body: [
          "Coletamos apenas o que você mesmo escreve no formulário de contato:",
        ],
        list: [
          "nome",
          "e-mail",
          "telefone",
          "estado",
          "perfil — produtor, comprador, exportador, cooperativa, instituição financeira, parceiro ou outro",
          "interesse — o assunto que motivou o contato",
          "mensagem, quando você opta por escrever uma",
        ],
        after: [
          "Não há cadastro, login nem área restrita. Navegar pelo site não exige que você informe dado algum.",
          "O formulário tem um campo oculto que serve apenas para barrar envios automatizados. Ele é ignorado quando preenchido por uma pessoa e não guarda informação sobre você.",
        ],
      },
      {
        title: "Para que usamos",
        body: [
          "Usamos os dados do formulário para analisar a sua solicitação, preparar uma resposta adequada e entrar em contato pelos canais que você informou. O tratamento decorre do seu próprio pedido de contato.",
          "Não usamos esses dados para publicidade. Não vendemos, não alugamos e não cedemos os seus dados.",
        ],
      },
      {
        title: "Com quem compartilhamos",
        body: [
          "O envio do formulário é intermediado pelo Web3Forms, serviço externo que recebe o conteúdo preenchido e o encaminha ao e-mail da Safras & Negócios. Os dados também transitam pelo provedor de e-mail usado pela empresa.",
          "Fora isso, não compartilhamos os seus dados com terceiros, salvo obrigação legal ou requisição de autoridade competente.",
        ],
      },
      {
        title: "Cookies e tecnologias semelhantes",
        body: [
          "Este site usa dois cookies, ambos necessários ao funcionamento e nenhum deles capaz de identificar você:",
        ],
        list: [
          "safras_locale — guarda o idioma que você escolheu, para que a preferência seja respeitada na próxima visita. Dura um ano. É gravado somente quando você age: ao trocar de idioma no seletor ou ao aceitar a sugestão de idioma.",
          "safras_consent — guarda a sua decisão sobre a medição de audiência e a data em que ela foi tomada. Dura seis meses, depois dos quais perguntamos de novo. Não contém identificador, endereço de IP nem qualquer dado sobre você.",
        ],
        after: [
          "O site também usa o armazenamento de sessão do navegador para lembrar que você dispensou a sugestão de idioma. Esse registro é apagado quando você fecha a aba.",
          "Este site não utiliza, hoje, nenhuma ferramenta de análise de audiência, pixel de rede social ou cookie de publicidade. Pedimos a sua permissão antes de instalar qualquer uma delas, e esta política é atualizada antes de a mudança entrar em funcionamento.",
          "Você pode rever a sua decisão quando quiser, pelo link “Preferências de cookies” no rodapé de qualquer página. Revogar é tão simples quanto consentir.",
          "Se o seu navegador enviar o sinal Global Privacy Control, tratamos isso como recusa e não exibimos o aviso — a sua escolha já foi feita, e não cabe perguntar de novo.",
        ],
      },
      {
        title: "Por quanto tempo guardamos",
        body: [
          "As mensagens recebidas permanecem no e-mail da empresa pelo tempo necessário para responder à solicitação e manter o registro do relacionamento comercial, ou pelo prazo que a lei exigir.",
          "Você pode pedir a exclusão a qualquer momento, e nós atendemos, salvo quando houver obrigação legal de conservar.",
        ],
      },
      {
        title: "Seus direitos",
        body: ["A lei garante a você o direito de:"],
        list: [
          "confirmar se tratamos dados seus e acessá-los",
          "corrigir dados incompletos, inexatos ou desatualizados",
          "pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou excessivos",
          "solicitar a portabilidade dos dados",
          "saber com quem compartilhamos seus dados",
          "revogar o consentimento e pedir a eliminação dos dados tratados com base nele",
          "opor-se a um tratamento que considere irregular",
        ],
        after: [
          "Para exercer qualquer um deles, escreva para atendimento@safrasnegocios.com.br. Podemos pedir informações que confirmem a sua identidade, para não entregar dados à pessoa errada.",
        ],
      },
      {
        title: "Segurança",
        body: [
          "O site é servido exclusivamente por conexão criptografada (HTTPS) e não armazena dados pessoais em banco de dados próprio: o conteúdo do formulário segue direto para o e-mail da empresa.",
          "O acesso às mensagens é restrito às pessoas envolvidas no atendimento.",
        ],
      },
      {
        title: "Crianças e adolescentes",
        body: [
          "O site é dirigido a produtores, compradores e parceiros do mercado de café. Não coletamos intencionalmente dados de crianças e adolescentes. Se identificarmos um registro nessa condição, ele é eliminado.",
        ],
      },
      {
        title: "Mudanças nesta política",
        body: [
          "Quando esta política mudar, a nova versão passa a valer a partir da publicação nesta página, e a data de atualização no topo é alterada.",
          "Mudanças que ampliem o tratamento de dados — a instalação de uma ferramenta de medição, por exemplo — são publicadas aqui antes de entrarem em funcionamento.",
        ],
      },
    ],
    contact: {
      title: "Fale com a gente",
      body: "Dúvidas sobre esta política ou sobre os seus dados:",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      addressLabel: "Endereço",
    },
    backHome: "Voltar para a página inicial",
  },

  footer: {
    tagline: "Tradição e Confiança no mercado cafeeiro.",
    columns: {
      services: "Serviços",
      navigation: "Navegação",
      contact: "Contato",
    },
    servicesLinks: [
      "Mercado e Negociação",
      "Análise de Qualidade",
      "Suporte Logístico",
    ],
    socialsLinks: ["Instagram", "WhatsApp"],
    backToTop: "Topo",
    backToTopAriaLabel: "Voltar ao topo",
    copyright: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    developedBy: "Desenvolvido por",
    developerName: "Measy",
    developerAriaLabel: "Falar com a Measy no WhatsApp",
  },
} as const;

export default dict;
export type Dictionary = typeof dict;
