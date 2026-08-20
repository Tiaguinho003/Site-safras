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
      phone: "+55 (35) 98461-7193",
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

  consent: {
    title: "Cookies and privacy",
    description:
      "To understand how this site is used and improve it, we need your permission. Cookies required for the site to work stay active either way.",
    learnMore: "Read the Privacy Policy",
    accept: "Accept",
    reject: "Reject",
    preferences: "Preferences",
    panel: {
      title: "Cookie preferences",
      alwaysOn: "Always on",
      save: "Save preferences",
      categories: {
        necessary: {
          title: "Necessary",
          description:
            "These keep the site working: they store the language you chose and your own decision about cookies. They do not identify you and cannot be turned off.",
        },
        analytics: {
          title: "Audience measurement",
          description:
            "These let us count visits and understand which pages are useful, always in aggregate. They never include your name, email, phone or the content of messages.",
        },
      },
    },
    footerLink: "Cookie preferences",
  },

  privacy: {
    meta: {
      title: "Privacy Policy | Safras & Negócios",
      description:
        "How Safras & Negócios handles the data submitted through this site: what is collected, why, who it is shared with, and how to exercise your rights.",
    },
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    updatedAt: "August 20, 2026",
    intro:
      "This policy explains, in plain language, how Safras & Negócios processes the personal data received through this website, under Brazil's General Data Protection Law (Lei nº 13.709/2018, the LGPD).",
    sections: [
      {
        title: "Who processes your data",
        body: [
          "The controller is Safras & Negócios, a coffee brokerage that receives clients at Av. Oliveira Rezende, 1397 — Jardim Bernadete, São Sebastião do Paraíso, Minas Gerais, Brazil.",
          "For anything related to this policy, including exercising your rights, write to atendimento@safrasnegocios.com.br.",
          "This policy covers safrasenegocios.com.br. It does not cover third-party sites you may reach through links published here.",
        ],
      },
      {
        title: "What we collect",
        body: [
          "We collect only what you type into the contact form yourself:",
        ],
        list: [
          "name",
          "email",
          "phone",
          "state",
          "profile — grower, buyer, exporter, cooperative, financial institution, partner or other",
          "interest — the subject that prompted your enquiry",
          "message, when you choose to write one",
        ],
        after: [
          "There is no account, no login and no restricted area. Browsing the site requires no data from you.",
          "The form contains a hidden field whose only purpose is to block automated submissions. It is ignored when filled in by a person and holds no information about you.",
        ],
      },
      {
        title: "Why we use it",
        body: [
          "We use the form data to review your enquiry, prepare a proper answer and reach you through the channels you provided. The processing follows from your own request to be contacted.",
          "We do not use this data for advertising. We do not sell, rent or trade your data.",
        ],
      },
      {
        title: "Who we share it with",
        body: [
          "Form submissions are handled by Web3Forms, an external service that receives what you filled in and forwards it to the Safras & Negócios inbox. The data also passes through the company's email provider.",
          "Beyond that, we do not disclose your data to third parties, except where required by law or by a competent authority.",
        ],
      },
      {
        id: "cookies",
        title: "Cookies and similar technologies",
        body: [
          "This site uses two cookies, both required for it to work, and neither able to identify you:",
        ],
        list: [
          "safras_locale — stores the language you chose, so your preference is respected on your next visit. It lasts one year. It is written only when you act: switching language in the selector, or accepting the language suggestion.",
          "safras_consent — stores your decision about audience measurement and the date you made it. It lasts six months, after which we ask again. It holds no identifier, no IP address and no data about you.",
        ],
        after: [
          "The site also uses the browser's session storage to remember that you dismissed the language suggestion. That record is cleared when you close the tab.",
          "This site currently uses no audience analytics, no social media pixel and no advertising cookie. We ask your permission before installing any of them, and this policy is updated before the change goes live.",
          "You may revisit your decision at any time through the “Cookie preferences” link in the footer of any page. Withdrawing is as simple as consenting.",
          "If your browser sends the Global Privacy Control signal, we treat it as a refusal and do not show the notice — you have already made your choice, and it is not for us to ask again.",
        ],
      },
      {
        title: "How long we keep it",
        body: [
          "Messages remain in the company inbox for as long as needed to answer your enquiry and keep a record of the business relationship, or for as long as the law requires.",
          "You may request erasure at any time, and we comply, except where we are legally required to retain the data.",
        ],
      },
      {
        title: "Your rights",
        body: ["The law grants you the right to:"],
        list: [
          "confirm whether we process your data, and access it",
          "correct incomplete, inaccurate or outdated data",
          "request anonymization, blocking or erasure of unnecessary or excessive data",
          "request data portability",
          "know who we share your data with",
          "withdraw consent and request erasure of data processed on that basis",
          "object to processing you consider unlawful",
        ],
        after: [
          "To exercise any of them, write to atendimento@safrasnegocios.com.br. We may ask for information confirming your identity, so that we do not hand data to the wrong person.",
        ],
      },
      {
        title: "Security",
        body: [
          "The site is served exclusively over an encrypted connection (HTTPS) and stores no personal data in a database of its own: form content goes straight to the company inbox.",
          "Access to those messages is restricted to the people handling the enquiry.",
        ],
      },
      {
        title: "Children and teenagers",
        body: [
          "This site addresses coffee growers, buyers and partners. We do not knowingly collect data from children or teenagers. If we identify such a record, we erase it.",
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "When this policy changes, the new version takes effect once published on this page, and the update date at the top changes with it.",
          "Changes that widen data processing — installing a measurement tool, for instance — are published here before they go live.",
        ],
      },
    ],
    /**
     * Version of the cookies section that applies WHEN measurement is on.
     * Swapped in automatically by PrivacyPage — see the pt-br dictionary
     * for the full rationale.
     */
    cookiesWithAnalytics: {
      id: "cookies",
      title: "Cookies and similar technologies",
      body: [
        "This site uses cookies required for it to work and, only with your permission, audience measurement cookies. None of them are used for advertising.",
        "These are the cookies that may be stored:",
      ],
      list: [
        "safras_locale — required. Stores the language you chose, so your preference is respected on your next visit. It lasts one year. It is written only when you act: switching language in the selector, or accepting the language suggestion.",
        "safras_consent — required. Stores your decision about audience measurement and the date you made it. It lasts six months, after which we ask again. It holds no identifier, no IP address and no data about you.",
        "_ga — measurement, stored only if you allow it. It tells repeat visits apart using a random number that holds no name, email or phone. It lasts six months, the same period as your decision.",
        "_ga_<site code> — measurement, also conditional on your permission. It stores the state of the current visit. It lasts six months.",
      ],
      after: [
        "The site also uses the browser's session storage to remember that you dismissed the language suggestion. That record is cleared when you close the tab.",
        "Measurement is done with Google Analytics 4 and begins only after you allow it. Until you do, this site loads no Google files at all.",
        "What we measure is aggregate: how many people visit, which pages they pass through, where they arrived from and which language they browse in. Your IP address is not stored. We use no advertising, remarketing or similar-audience features, and this data is not associated with your Google account.",
        "Browsing data is kept for 14 months and then deleted automatically.",
        "You may revisit your decision at any time through the “Cookie preferences” link in the footer of any page. Withdrawing is as simple as consenting.",
        "If your browser sends the Global Privacy Control signal, we treat it as a refusal and do not show the notice — you have already made your choice, and it is not for us to ask again.",
      ],
    },
    contact: {
      title: "Talk to us",
      body: "Questions about this policy or about your data:",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
    },
    backHome: "Back to the home page",
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
    privacy: "Privacy Policy",
    developedBy: "Developed by",
    developerName: "Measy",
    developerAriaLabel: "Chat with Measy on WhatsApp",
  },
} as const;

export default dict;
