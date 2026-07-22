/**
 * Dicionário ES — tradução completa baseada em docs/i18n-glossary.md.
 *
 * Decisões locked do glossário aplicadas aqui:
 * - "fazenda" → finca (mais universal LatAm — Colombia/Costa Rica/El Salvador)
 * - "produtor" → productor cafetero
 * - "intermediación" → corretaje (B2B trade)
 * - "consultoria" → asesoría comercial
 * - "análise sensorial" → catación
 * - "embarque/desembarque" → embarque/desembarque
 * - "parceria" → alianza (peso comercial em ES)
 * - "Sobre nós" → Sobre Nosotros
 * - CTA "Solicitar Serviço" → Solicitar Cotización
 *
 * Voice: profesional, "comercio cafetero", formal mas acessível.
 * Referência: Federación Nacional de Cafeteros (CO) tone.
 *
 * Audiência principal: compradores e parceiros latino-americanos
 * (México, Colômbia, Peru, Costa Rica).
 */

const dict = {
  meta: {
    siteTitle: "Safras & Negócios | Corretaje de Café",
    siteDescription:
      "Corretaje y servicios para el mercado del café, con apoyo en los mercados físico y de futuros, CPR, calidad, catación, embarques e inspecciones.",
    socialImageAlt:
      "Sede de Safras & Negócios en São Sebastião do Paraíso, Minas Gerais, Brasil",
  },

  brand: {
    name: "Safras & Negócios",
    logoAlt: "Safras & Negócios",
  },

  common: {
    loading: "Cargando",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    backToTop: "Volver arriba",
    top: "Arriba",
    send: "Enviar",
  },

  languageSuggestion: {
    prompt: "¿Prefiere ver esta página en español?",
    accept: "Ver en español",
    dismiss: "Ahora no",
  },

  notFound: {
    metaTitle: "Página no encontrada | Safras & Negócios",
    eyebrow: "Error 404",
    title: "No encontramos esta página.",
    description:
      "Es posible que la dirección haya cambiado o no exista. Vuelva al inicio, conozca nuestros servicios o contacte a nuestro equipo.",
    home: "Volver al inicio",
    services: "Conocer los servicios",
    contact: "Contactarnos",
    whatsapp: "Hablar por WhatsApp",
    email: "Enviar un correo",
    languageLabel: "Idioma de esta página",
  },

  nav: {
    mainMenu: "Menú principal",
    items: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre Nosotros",
      contact: "Contacto",
    },
    cta: "Solicitar Cotización",
    logoAriaLabel: "Safras & Negócios — Volver arriba",
    heroHeaderAriaLabel: "Encabezado sobre el hero",
    mobileMenuAriaLabel: "Menú principal (móvil)",
    language: "Idioma",
    languageSwitcherAriaLabel: "Seleccionar idioma",
  },

  hero: {
    tag: "[ Corretaje de Café ]",
    rotatingWords: ["Tradición", "Confianza"],
    suffix: "en el mercado cafetero",
    cta: "Explorar Servicios",
    scrollNextLabel: "Ir a la siguiente sección",
  },

  services: {
    sectionLabel: "[ Servicios ]",
    // "Soluciones / integrales para / su café" — mesma estrutura visual que PT
    titleLines: [
      ["Soluciones"],
      ["integrales", "para"],
      ["su", "café"],
    ],
    intro: {
      part1: "Del origen a la comercialización, ofrecemos",
      highlight: "servicio estratégico",
      part2:
        "para productores, compradores, empresas y exportadoras del mercado.",
    },
    cards: {
      mercadoNegociacao: {
        number: "01",
        title: "Mercado y Negociación",
        imageAlt:
          "Asesor de Safras & Negócios con tablero orientando a un productor de café en finca de montaña",
        description:
          "Intermediamos negocios en el mercado del café con análisis de mercado, asesoría comercial y acompañamiento completo de la negociación.",
        strips: [
          "Asesoría comercial",
          "Mercado físico",
          "Mercado de futuros",
          "Conexión\nProducción/Exportación",
          "CPR financiero",
        ],
      },
      analiseQualidade: {
        number: "02",
        title: "Análisis de Calidad",
        imageAlt:
          "Granos de café verde sobre tapete negro Safras & Negócios, al lado de criba de clasificación",
        description:
          "Evaluamos cada muestra mediante clasificación, catación y análisis de humedad, ofreciendo información técnica para una negociación más segura.",
        strips: [
          "Clasificación de granos",
          "Catación",
          "Análisis de humedad",
        ],
      },
      suporteLogistico: {
        number: "03",
        title: "Soporte Logístico",
        imageAlt:
          "Equipo de Safras & Negócios supervisando la carga de sacos de café en camión con montacargas",
        description:
          "Apoyamos la etapa logística del café — programación de embarques y desembarques, emisión de facturas de envío y acompañamiento completo del proceso.",
        strips: ["Embarque", "Desembarque", "Soporte postventa"],
      },
    },
  },

  about: {
    sectionLabel: "[ Sobre Nosotros ]",
    // "Conectamos / el origen al mercado." — "Conectamos" destacado em brand
    titleLines: [["Conectamos"], ["el", "origen", "al", "mercado."]],
    intro: {
      part1:
        "Desde 2015, ofrecemos asesoría y corretaje de café con la",
      highlight: "transparencia y seriedad",
      part2: "que productores y compradores esperan.",
    },
    stats: {
      city: {
        // Cidade mantém em PT (nome próprio)
        lines: ["São", "Sebastião", "do Paraíso"],
        label: "Con sede en",
      },
      years: {
        suffix: "",
        label: "Desde",
      },
    },
  },

  principles: {
    sectionLabel: "[ Principios ]",
    // "Cómo / trabajamos." — última linha (verbo) em destaque
    titleLines: [["Cómo"], ["trabajamos."]],
    intro: {
      part1: "Pilares que sustentan la",
      highlight: "excelencia",
      part2: "del trabajo en cada alianza.",
    },
    cards: {
      historia: {
        title: "Nuestra historia",
        description:
          "Fundada en octubre de 2015, Safras & Negócios inició su trayectoria en el mercado cafetero con foco en la intermediación de operaciones comerciales. A lo largo de los años se consolidó como una de las principales corredoras de la región, viendo grandes oportunidades para el café de Minas Gerais.",
      },
      missao: {
        title: "Nuestra misión",
        description:
          "Atender con excelencia las demandas de nuestros clientes a partir de un servicio de calidad y la oferta de soluciones que contribuyan a la mejora de toda la cadena que involucra a nuestros socios. Proporcionando así, riqueza y desarrollo a la región.",
      },
      visao: {
        title: "Nuestra visión",
        description:
          "Ser empresa de referencia en el sector de servicios, reconocida como una excelente opción por clientes, colaboradores, comunidad, proveedores e inversionistas, debido a la calidad de nuestros servicios y relaciones.",
      },
      valores: {
        title: "Nuestros valores",
        lead: "Principios que sustentan cada relación:",
        items: [
          { name: "Valorización humana", body: "el ser humano como protagonista del negocio." },
          { name: "Ética", body: "conducta correcta en la sociedad." },
          { name: "Integridad", body: "rectitud en cada decisión." },
          { name: "Compromiso", body: "dedicación genuina." },
          { name: "Innovación", body: "diferenciales reconocidos." },
          { name: "Superación de resultados", body: "evolución continua." },
        ],
      },
    },
  },

  contact: {
    sectionLabel: "[ Contacto ]",
    sectionAriaLabel: "Contacto",
    cityMarkerLabel: "São Sebastião do Paraíso, MG",
    whatsappPrefill:
      "¡Hola! Encontré Safras & Negócios a través del sitio web y me gustaría recibir más información.",
    details: {
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      addressLabel: "Dirección",
      hoursLabel: "Horario de atención",
      email: "atendimento@safrasnegocios.com.br",
      phone: "+55 (35) 3531-4046",
      address:
        "Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso/MG, Brasil",
      hours: "De lunes a viernes, de 8:00 a 18:00 (BRT).",
      callAction: "Llamar",
      mapAction: "Abrir en Google Maps",
      whatsappAction: "Conversar por WhatsApp",
    },
    form: {
      honeypotLabel: "No completar",
      labels: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        state: "Estado / País",
        profile: "Perfil",
        interest: "Interés",
        message: "Mensaje",
      },
      placeholders: {
        name: "Su nombre completo",
        email: "usted@correo.com",
        phone: "+55 00 00000-0000",
        state: "Ej: MG o país",
        select: "Seleccione",
        message: "Describa su solicitud (opcional)",
      },
      profileOptions: {
        producer: "Productor",
        buyer: "Comprador / Trader",
        exporter: "Exportador",
        cooperative: "Cooperativa",
        financialInstitution: "Institución financiera",
        partner: "Aliado",
        other: "Otro",
      },
      interestOptions: {
        brokerage: "Corretaje y negociación de café",
        physicalMarket: "Mercado físico",
        futuresMarket: "Mercado de futuros",
        cpr: "CPR",
        grading: "Clasificación y análisis de calidad",
        cupping: "Catación",
        logistics: "Embarques e inspecciones",
        other: "Otro asunto",
      },
      submitLabel: "Enviar solicitud",
      submitSending: "Enviando...",
      successMessage:
        "Recibimos su solicitud. Nuestro equipo se pondrá en contacto mediante los datos informados.",
      privacySummary:
        "Al enviar, usted reconoce que Safras & Negócios utilizará sus datos para analizar y responder a su contacto.",
      states: {
        errorDetailed:
          "No fue posible enviar ahora. Contáctenos a través de uno de los siguientes canales:",
      },
    },
  },

  footer: {
    tagline: "Tradición y Confianza en el mercado cafetero.",
    columns: {
      services: "Servicios",
      navigation: "Navegación",
      contact: "Contacto",
    },
    servicesLinks: [
      "Mercado y Negociación",
      "Análisis de Calidad",
      "Soporte Logístico",
    ],
    socialsLinks: ["Instagram", "WhatsApp"],
    backToTop: "Arriba",
    backToTopAriaLabel: "Volver arriba",
    copyright: "Todos los derechos reservados.",
    developedBy: "Desarrollado por",
    developerName: "Measy",
    developerAriaLabel: "Chatear con Measy por WhatsApp",
  },
} as const;

export default dict;
