/**
 * Dicionário EN — tradução completa baseada em docs/i18n-glossary.md.
 *
 * Decisões locked do glossário aplicadas aqui:
 * - "fazenda" → estate (specialty/premium)
 * - "produtor" → grower
 * - "intermediação/corretagem" → brokerage
 * - "consultoria" → advisory (não consulting)
 * - "análise sensorial" → cupping
 * - "embarque" → shipping
 * - "Anos de história" → Years in business
 * - "Sobre nós" → About (minimalist, não About Us)
 * - "seriedade" → integrity (não seriousness)
 * - CTA "Solicitar Serviço" → Get Started (punchy B2B moderno)
 * - "safra" → harvest (não crop)
 *
 * Voice: institucional, B2B, "10+ anos de mercado", confiante sem pomposidade.
 * Referências: SCA vocabulary, Sucafina/Volcafe trade publications style.
 */

const dict = {
  meta: {
    siteTitle: "Safras & Negócios | Coffee Brokerage",
    siteDescription:
      "Brokerage and services for the coffee market, with support in physical and futures markets, CPR, quality analysis, cupping, shipping, and inspections.",
    socialImageAlt:
      "Safras & Negócios headquarters in São Sebastião do Paraíso, Minas Gerais, Brazil",
  },

  brand: {
    name: "Safras & Negócios",
    logoAlt: "Safras & Negócios",
  },

  common: {
    loading: "Loading",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    top: "Top",
    send: "Send",
  },

  languageSuggestion: {
    prompt: "Would you prefer to view this page in English?",
    accept: "View in English",
    dismiss: "Not now",
  },

  notFound: {
    metaTitle: "Page not found | Safras & Negócios",
    eyebrow: "Error 404",
    title: "This page could not be found.",
    description:
      "The address may have changed or may not exist. Return to the homepage, explore our services, or contact our team.",
    home: "Back to homepage",
    services: "Explore our services",
    contact: "Contact us",
    whatsapp: "Chat on WhatsApp",
    email: "Send an email",
    languageLabel: "Page language",
  },

  nav: {
    mainMenu: "Main menu",
    items: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    cta: "Get Started",
    logoAriaLabel: "Safras & Negócios — Back to top",
    heroHeaderAriaLabel: "Hero header",
    mobileMenuAriaLabel: "Main menu (mobile)",
    language: "Language",
    languageSwitcherAriaLabel: "Select language",
  },

  hero: {
    tag: "[ Coffee Brokerage ]",
    rotatingWords: ["Tradition", "Trust"],
    suffix: "in the coffee market",
    cta: "Explore Services",
    scrollNextLabel: "Go to next section",
  },

  services: {
    sectionLabel: "[ Services ]",
    // Estrutura preservada do PT: última palavra da última linha em destaque (text-brand + size).
    // "End-to-end / solutions for / your coffee" — flow B2B clássico.
    titleLines: [
      ["End-to-end"],
      ["solutions", "for"],
      ["your", "coffee"],
    ],
    intro: {
      part1: "From origin to trade, we deliver",
      highlight: "strategic service",
      part2: "for growers, buyers, companies, and exporters in the market.",
    },
    cards: {
      mercadoNegociacao: {
        number: "01",
        title: "Market & Trading",
        imageAlt:
          "Safras & Negócios advisor with a clipboard guiding a coffee grower on a mountain estate",
        description:
          "We broker coffee market deals with market analysis, commercial advisory, and end-to-end oversight of every negotiation.",
        strips: [
          "Commercial advisory",
          "Physical market",
          "Futures market",
          "Production/Export\nbridge",
          "Financial CPR",
        ],
      },
      analiseQualidade: {
        number: "02",
        title: "Quality Analysis",
        imageAlt:
          "Green coffee beans on a black Safras & Negócios mat, beside a grading screen",
        description:
          "We evaluate each sample through grading, cupping, and moisture analysis, providing technical data for safer negotiations.",
        strips: ["Bean grading", "Cupping", "Moisture analysis"],
      },
      suporteLogistico: {
        number: "03",
        title: "Logistics Support",
        imageAlt:
          "Safras & Negócios team overseeing the loading of coffee bags onto a truck with a forklift",
        description:
          "We support the logistical stage of coffee — shipping and unloading scheduling, shipping invoice issuance, and full process oversight.",
        strips: ["Shipping", "Unloading", "After-sales support"],
      },
    },
  },

  about: {
    sectionLabel: "[ About ]",
    // "Connecting / origin to market." — "Connecting" highlighted in brand.
    titleLines: [["Connecting"], ["origin", "to", "market."]],
    intro: {
      part1:
        "Since 2015, we have offered coffee advisory and brokerage with the",
      highlight: "transparency and integrity",
      part2: "that growers and buyers expect.",
    },
    stats: {
      city: {
        // Cidade é nome próprio — mantém em PT em todos os idiomas
        lines: ["São", "Sebastião", "do Paraíso"],
        label: "Based in",
      },
      years: {
        suffix: "",
        label: "Since",
      },
    },
  },

  principles: {
    sectionLabel: "[ Principles ]",
    // "How / we work." — última linha (verb) em destaque
    titleLines: [["How"], ["we work."]],
    intro: {
      part1: "Pillars that uphold",
      highlight: "excellence",
      part2: "in our work, in every partnership.",
    },
    cards: {
      historia: {
        title: "Our history",
        description:
          "Founded in October 2015, Safras & Negócios began its journey in the coffee market with a focus on brokering commercial operations. Over the years, it has consolidated as one of the region's leading brokerages, seeing major opportunities for Minas Gerais coffee.",
      },
      missao: {
        title: "Our mission",
        description:
          "To meet our clients' needs with excellence, through quality service and offerings that improve every stage of the chain involving our partners — generating wealth and development for the region.",
      },
      visao: {
        title: "Our vision",
        description:
          "To be a reference company in the service sector, recognized as an excellent choice by clients, employees, the community, suppliers, and investors — through the quality of our work and relationships.",
      },
      valores: {
        title: "Our values",
        lead: "Principles that uphold every relationship:",
        items: [
          { name: "Valuing people", body: "people as the protagonists of business." },
          { name: "Ethics", body: "right conduct in society." },
          { name: "Integrity", body: "honesty in every decision." },
          { name: "Commitment", body: "genuine dedication." },
          { name: "Innovation", body: "recognized differentiators." },
          { name: "Driving results", body: "continuous improvement." },
        ],
      },
    },
  },

  contact: {
    sectionLabel: "[ Contact ]",
    sectionAriaLabel: "Contact",
    cityMarkerLabel: "São Sebastião do Paraíso, MG",
    whatsappPrefill:
      "Hello! I found Safras & Negócios through the website and would like more information.",
    details: {
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      hoursLabel: "Business hours",
      email: "atendimento@safrasnegocios.com.br",
      phone: "+55 (35) 3531-4046",
      address:
        "Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso/MG, Brazil",
      hours: "Monday through Friday, 8:00 a.m. to 6:00 p.m. (BRT).",
      callAction: "Call",
      mapAction: "Open in Google Maps",
      whatsappAction: "Chat on WhatsApp",
    },
    form: {
      honeypotLabel: "Do not fill",
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        state: "State / Country",
        profile: "Profile",
        interest: "Interest",
        message: "Message",
      },
      placeholders: {
        name: "Your full name",
        email: "you@email.com",
        phone: "+55 00 00000-0000",
        state: "e.g., MG or country",
        select: "Select",
        message: "Describe your request (optional)",
      },
      profileOptions: {
        producer: "Grower",
        buyer: "Buyer / Trader",
        exporter: "Exporter",
        cooperative: "Cooperative",
        financialInstitution: "Financial institution",
        partner: "Partner",
        other: "Other",
      },
      interestOptions: {
        brokerage: "Coffee brokerage and trading",
        physicalMarket: "Physical market",
        futuresMarket: "Futures market",
        cpr: "CPR",
        grading: "Grading and quality analysis",
        cupping: "Cupping",
        logistics: "Shipping and inspections",
        other: "Other subject",
      },
      submitLabel: "Send request",
      submitSending: "Sending...",
      successMessage:
        "We have received your request. Our team will contact you using the details provided.",
      privacySummary:
        "By submitting, you acknowledge that Safras & Negócios will use your data to review and respond to your inquiry.",
      states: {
        errorDetailed:
          "Unable to send right now. Please contact us through one of the channels below:",
      },
    },
  },

  footer: {
    tagline: "Tradition and Trust in the coffee market.",
    columns: {
      services: "Services",
      navigation: "Navigation",
      contact: "Contact",
    },
    servicesLinks: ["Market & Trading", "Quality Analysis", "Logistics Support"],
    socialsLinks: ["Instagram", "WhatsApp"],
    backToTop: "Top",
    backToTopAriaLabel: "Back to top",
    copyright: "All rights reserved.",
    developedBy: "Developed by",
    developerName: "Measy",
    developerAriaLabel: "Chat with Measy on WhatsApp",
  },
} as const;

export default dict;
