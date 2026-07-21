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
      "Safras & Negócios — corretora de café com tradição, confiança, clareza e praticidade.",
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
        "Com mais de 10 anos no mercado, oferecemos consultoria e intermediação de café com a",
      highlight: "transparência e seriedade",
      part2: "que produtores e compradores esperam.",
    },
    stats: {
      city: {
        lines: ["São", "Sebastião", "do Paraíso"],
        label: "Sediado em",
      },
      years: {
        suffix: "+",
        label: "Anos de história",
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
        partner: "Parceiro",
        other: "Outro",
      },
      interestOptions: {
        brokerage: "Corretagem",
        advisory: "Assessoria comercial",
        grading: "Classificação",
        other: "Outro",
      },
      submitLabel: "Enviar solicitação",
      submitSending: "Enviando...",
      states: {
        errorDetailed:
          "Não foi possível enviar agora. Tente novamente em instantes.",
      },
    },
  },

  footer: {
    tagline: "Tradição e Confiança no mercado cafeeiro.",
    columns: {
      services: "Serviços",
      navigation: "Navegação",
      socials: "Sociais",
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
    developedBy: "Desenvolvido por",
    developerName: "Measy",
    developerAriaLabel: "Falar com a Measy no WhatsApp",
  },

  loader: {
    ariaLabel: "Carregando",
  },
} as const;

export default dict;
export type Dictionary = typeof dict;
