// ============================================================
// PÁGINAS DE DATOS — Reverse Outreach SEO
// Cada entrada responde una pregunta estadística específica que
// periodistas y bloggers buscan en Google al escribir sobre la
// industria mexicana. La estructura está optimizada para que el
// dato aparezca front-and-center para que nos citen como fuente.
//
// IMPORTANTE: Las cifras citadas vienen de fuentes públicas con
// fecha explícita. Antes de cada publicación o actualización mayor,
// verificar contra el reporte original de la fuente (ANIQ, INEGI,
// CONAGUA, Secretaría de Economía, gobierno de Nuevo León, etc.).
// ============================================================

export interface DatoSource {
  name: string;
  url?: string;
  year?: string;
}

export interface DatoSupporting {
  value: string;
  label: string;
  source?: string;
}

export interface DatoContextSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface DatoInternalLink {
  text: string;
  href: string;
  description?: string;
}

export interface Dato {
  slug: string;
  category: "Industria" | "Sustentabilidad" | "Nearshoring" | "Mercado";
  metaTitle: string;
  metaDescription: string;
  /** Pregunta exacta tal como un periodista la teclearía */
  question: string;
  /** Respuesta corta — 1 frase, máximo 25 palabras */
  shortAnswer: string;
  /** Stat principal — el número grande que el periodista cita */
  headlineStat: {
    value: string;
    unit?: string;
    label: string;
    source: DatoSource;
  };
  /** 2-3 frases de contexto, debajo del stat principal */
  intro: string;
  /** 3-6 stats secundarios en grid de tarjetas */
  supportingStats: DatoSupporting[];
  /** Secciones de contexto narrativo */
  context: DatoContextSection[];
  /** FAQs adicionales para schema.org FAQPage */
  faqs?: { q: string; a: string }[];
  /** Lista de fuentes para que el lector verifique */
  sources: DatoSource[];
  /** Links internos hacia páginas de producto / servicio / industria */
  internalLinks: DatoInternalLink[];
  /** ISO date de la última verificación de cifras */
  updatedAt: string;
  /** Fecha de publicación inicial */
  publishedAt: string;
}

export const DATOS: Dato[] = [
  // ══════════════════════════════════════════════
  // 1. INDUSTRIA QUÍMICA EN MÉXICO
  // ══════════════════════════════════════════════
  {
    slug: "industria-quimica-mexico-tamano",
    category: "Industria",
    metaTitle: "¿Cuánto vale la industria química en México? Cifras 2026",
    metaDescription:
      "Tamaño de la industria química mexicana: ventas anuales, empleo, número de empresas y participación en el PIB manufacturero. Fuentes ANIQ, INEGI y Secretaría de Economía.",
    question: "¿Cuánto vale la industria química en México?",
    shortAnswer:
      "La industria química mexicana genera ventas anuales por aproximadamente 110,000 millones de dólares y representa el segundo sector manufacturero más grande del país, después del automotriz.",
    headlineStat: {
      value: "≈ 110,000",
      unit: "millones de USD",
      label:
        "Ventas anuales de la industria química mexicana (ANIQ, último anuario disponible)",
      source: {
        name: "ANIQ — Anuario Estadístico de la Industria Química Mexicana",
        url: "https://aniq.org.mx/",
        year: "2024",
      },
    },
    intro:
      "La industria química es el segundo sector manufacturero más importante de México por valor agregado, después del automotriz. Concentra plantas de petroquímicos, químicos básicos, especialidades, fertilizantes, productos de higiene y cosméticos. Es proveedor obligado de prácticamente todas las cadenas de manufactura mexicanas, desde la automotriz hasta la alimenticia.",
    supportingStats: [
      {
        value: "≈ 5,000",
        label: "Establecimientos químicos registrados en México",
        source: "DENUE INEGI",
      },
      {
        value: "≈ 110,000",
        label: "Empleos directos en el sector químico",
        source: "INEGI / ANIQ",
      },
      {
        value: "≈ 3-4%",
        label: "Participación en el PIB manufacturero mexicano",
        source: "INEGI — Sistema de Cuentas Nacionales",
      },
      {
        value: "≈ 25%",
        label:
          "Concentración geográfica en la región noreste (NL, Coahuila, Tamaulipas)",
        source: "ANIQ — distribución regional",
      },
      {
        value: "USD 38B+",
        label: "Importaciones anuales de productos químicos a México",
        source: "Secretaría de Economía / SAT",
      },
    ],
    context: [
      {
        heading: "Composición del sector",
        paragraphs: [
          "La industria química mexicana está dividida en cinco grandes subsectores: petroquímica básica, química inorgánica, química orgánica, especialidades químicas (incluyendo tratamiento de superficies, tratamiento de aguas y limpieza industrial), y productos finales de consumo (cosméticos, higiene, fertilizantes).",
          "Las especialidades químicas — que incluyen el segmento donde opera Industrias Trevigo — han crecido a tasas superiores al promedio del sector por la demanda de la industria automotriz, electrodomésticos, manufactura de exportación y plantas de tratamiento de aguas industriales.",
        ],
      },
      {
        heading: "Concentración geográfica",
        paragraphs: [
          "La región noreste de México (Nuevo León, Coahuila y Tamaulipas) concentra cerca del 25% de la producción química nacional. Nuevo León en particular alberga clusters industriales en San Nicolás de los Garza, Guadalupe, Apodaca y Pesquería que producen tanto químicos básicos como especialidades.",
          "Otras regiones relevantes son el Bajío (Querétaro, Guanajuato, San Luis Potosí) por su crecimiento automotriz, el Valle de México por consumo final y la zona del Golfo (Veracruz, Tabasco) por petroquímica de PEMEX.",
        ],
      },
      {
        heading: "Tendencia de los últimos 5 años",
        paragraphs: [
          "Tras la contracción del 2020, el sector químico mexicano recuperó niveles prepandemia hacia finales de 2022 y ha mostrado crecimiento sostenido en los segmentos vinculados a manufactura de exportación y nearshoring. La inversión extranjera directa al sector ha crecido en doble dígito anual en años recientes según datos de la Secretaría de Economía.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la participación de la industria química en el PIB mexicano?",
        a: "La industria química representa entre el 3% y 4% del PIB manufacturero mexicano según el Sistema de Cuentas Nacionales del INEGI. En PIB nacional total, su participación directa es de aproximadamente el 1.6%, aunque su impacto indirecto es mayor por ser proveedor transversal de otras cadenas productivas.",
      },
      {
        q: "¿Cuántas empresas químicas hay en México?",
        a: "Según el Directorio Estadístico Nacional de Unidades Económicas (DENUE) del INEGI, existen aproximadamente 5,000 establecimientos clasificados en industrias químicas en México, considerando manufactura, distribución y formulación.",
      },
      {
        q: "¿Cuál es la principal asociación de la industria química en México?",
        a: "La principal asociación es ANIQ (Asociación Nacional de la Industria Química), fundada en 1959, que agrupa a las empresas químicas más representativas del país y publica el Anuario Estadístico de la Industria Química Mexicana.",
      },
    ],
    sources: [
      {
        name: "ANIQ — Anuario Estadístico de la Industria Química Mexicana",
        url: "https://aniq.org.mx/",
        year: "2024",
      },
      {
        name: "INEGI — DENUE (Directorio Estadístico Nacional de Unidades Económicas)",
        url: "https://www.inegi.org.mx/app/mapa/denue/",
      },
      {
        name: "INEGI — Sistema de Cuentas Nacionales de México",
        url: "https://www.inegi.org.mx/temas/pib/",
      },
      {
        name: "Secretaría de Economía — Datos de Inversión Extranjera Directa",
        url: "https://www.economia.gob.mx/",
      },
    ],
    internalLinks: [
      {
        text: "Catálogo completo de químicos industriales Trevigo",
        href: "/productos",
        description:
          "Más de 60 productos formulados en México para metales, aguas y materias primas.",
      },
      {
        text: "Industria automotriz: nuestro mayor cliente del sector",
        href: "/industrias/automotriz",
        description:
          "Servicios y químicos para la cadena automotriz en Nuevo León.",
      },
      {
        text: "Manufactura general en el norte de México",
        href: "/industrias/manufactura-general",
        description:
          "Cómo Trevigo atiende a plantas de manufactura de exportación.",
      },
      {
        text: "Materias primas químicas para industria",
        href: "/productos",
        description: "Ácidos, sosa cáustica, hipoclorito de sodio y más.",
      },
    ],
    updatedAt: "2026-05-12",
    publishedAt: "2026-05-12",
  },

  // ══════════════════════════════════════════════
  // 2. AGUAS RESIDUALES INDUSTRIALES EN MÉXICO
  // ══════════════════════════════════════════════
  {
    slug: "aguas-residuales-industriales-mexico",
    category: "Sustentabilidad",
    metaTitle:
      "¿Cuánta agua residual genera la industria en México? Cifras y tratamiento",
    metaDescription:
      "Volumen de aguas residuales industriales generadas y tratadas en México, descargas por sector y cobertura de tratamiento según CONAGUA y SEMARNAT.",
    question: "¿Cuánta agua residual genera la industria en México?",
    shortAnswer:
      "La industria mexicana genera aproximadamente 7 km³ (7,000 hm³) de aguas residuales por año, de los cuales se trata cerca del 50%, según datos de CONAGUA.",
    headlineStat: {
      value: "≈ 7",
      unit: "km³/año",
      label:
        "Volumen anual de aguas residuales industriales generadas en México (CONAGUA)",
      source: {
        name: "CONAGUA — Estadísticas del Agua en México",
        url: "https://www.gob.mx/conagua",
        year: "2023",
      },
    },
    intro:
      "Las aguas residuales de origen industrial son uno de los principales focos de regulación ambiental en México. La normativa rectora es la NOM-001-SEMARNAT-2021, que establece los límites máximos permisibles de contaminantes en descargas a cuerpos receptores. El tratamiento físico-químico (coagulación, floculación, sedimentación) y biológico es obligatorio para plantas que descargan a redes municipales o cuerpos de agua federales.",
    supportingStats: [
      {
        value: "≈ 195",
        label: "m³/segundo de aguas residuales industriales descargadas",
        source: "CONAGUA",
      },
      {
        value: "≈ 50%",
        label:
          "Porcentaje aproximado de aguas residuales industriales tratadas antes de descarga",
        source: "CONAGUA — Estadísticas del Agua",
      },
      {
        value: "NOM-001",
        label:
          "Norma SEMARNAT 2021 que regula descargas industriales a cuerpos receptores",
        source: "DOF — Diario Oficial de la Federación",
      },
      {
        value: "≈ 2,800",
        label: "Plantas de tratamiento de aguas residuales en operación (municipales e industriales)",
        source: "CONAGUA — Inventario Nacional",
      },
      {
        value: "Hasta 20%",
        label:
          "Penalización al recibo de agua por incumplimiento de descarga industrial",
        source: "Ley Federal de Derechos",
      },
    ],
    context: [
      {
        heading: "Marco regulatorio: NOM-001-SEMARNAT-2021",
        paragraphs: [
          "La NOM-001-SEMARNAT-2021 entró en vigor en 2023 y reemplazó a la NOM-001-ECOL-1996, con límites más estrictos para DBO, DQO, sólidos suspendidos totales, grasas y aceites, metales pesados, fósforo total, nitrógeno total y otros parámetros. Las descargas se clasifican según el tipo de cuerpo receptor: ríos, embalses, suelo, costa o redes urbanas.",
          "El incumplimiento puede derivar en multas por parte de PROFEPA, suspensión de operaciones, y cargos adicionales en el recibo del agua hasta del 20% del consumo mensual de acuerdo con la Ley Federal de Derechos.",
        ],
      },
      {
        heading: "Sectores que más agua residual generan",
        paragraphs: [
          "Los sectores con mayor volumen de descarga industrial en México son, en orden aproximado:",
        ],
        list: [
          "Industria alimenticia y de bebidas — cervecera, refresquera, cárnica, láctea, vinícola",
          "Industria química y petroquímica — refinación, fertilizantes, plásticos",
          "Industria del papel y celulosa",
          "Industria metalmecánica y automotriz — efluentes de fosfatado, pintura, decapado",
          "Industria textil — colorantes, ácidos, álcalis",
          "Industria minera — efluentes de procesamiento de minerales",
        ],
      },
      {
        heading: "Tratamientos típicos",
        paragraphs: [
          "El tratamiento de aguas residuales industriales sigue generalmente tres etapas: primaria (separación física: cribado, sedimentación), secundaria (biológica: lodos activados, lagunas aireadas) y terciaria (físico-química avanzada: coagulación-floculación, ósmosis inversa, oxidación). Los químicos más usados son coagulantes inorgánicos (sulfato de aluminio, policloruro de aluminio), coagulantes orgánicos catiónicos, floculantes aniónicos y poliacrilamidas.",
          "La selección del químico óptimo se realiza con Prueba de Jarras (Jar Test) sobre muestra real del efluente, antes de ajustar dosis y pH del sistema en planta.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánta agua usa la industria en México?",
        a: "La industria usa aproximadamente el 5% del agua extraída en México, equivalente a unos 5-6 km³ al año, según el Sistema Nacional de Información del Agua de CONAGUA. Esta cifra excluye el uso agrícola (76%) y público urbano (15%), que son los más grandes.",
      },
      {
        q: "¿Cuál es la normativa principal para descargas industriales?",
        a: "La NOM-001-SEMARNAT-2021 es la norma rectora. Regula los límites máximos permisibles de contaminantes en descargas a aguas y bienes nacionales. Es complementada por la NOM-002-SEMARNAT-1996 para descargas al alcantarillado municipal.",
      },
      {
        q: "¿Qué pasa si una planta no trata sus aguas residuales?",
        a: "Las plantas que descargan sin cumplir la norma enfrentan multas de PROFEPA que pueden ser desde decenas hasta cientos de miles de pesos según la infracción, recargos del 10-20% sobre el cobro del agua según la Ley Federal de Derechos, y en casos graves clausura temporal o permanente de la descarga.",
      },
    ],
    sources: [
      {
        name: "CONAGUA — Estadísticas del Agua en México",
        url: "https://www.gob.mx/conagua/acciones-y-programas/publicaciones-estadisticas-y-geograficas-60692",
        year: "2023",
      },
      {
        name: "SEMARNAT — NOM-001-SEMARNAT-2021",
        url: "https://www.dof.gob.mx/",
      },
      {
        name: "CONAGUA — Inventario Nacional de Plantas Municipales de Potabilización y Tratamiento",
      },
      {
        name: "PROFEPA — Reportes de inspecciones y sanciones",
        url: "https://www.gob.mx/profepa",
      },
    ],
    internalLinks: [
      {
        text: "Productos para tratamiento de aguas residuales",
        href: "/productos",
        description:
          "Coagulantes, floculantes, poliacrilamidas y biocidas formulados en México.",
      },
      {
        text: "Industrias y aguas residuales",
        href: "/industrias/agua-medio-ambiente",
        description:
          "Servicios técnicos para plantas que cumplen NOM-001-SEMARNAT.",
      },
      {
        text: "Servicio de Prueba de Jarras sin costo",
        href: "/servicios/pruebas-jarras",
        description:
          "Ensayo en laboratorio con muestra real para determinar dosis óptima.",
      },
      {
        text: "Glosario: NOM-001-SEMARNAT",
        href: "/glosario/nom-001",
        description: "Definición y alcances de la norma rectora de descargas.",
      },
      {
        text: "Glosario: Coagulante",
        href: "/glosario/coagulante",
        description: "Cómo funcionan los químicos coagulantes en una PTAR.",
      },
    ],
    updatedAt: "2026-05-12",
    publishedAt: "2026-05-12",
  },

  // ══════════════════════════════════════════════
  // 3. NEARSHORING EN NUEVO LEÓN
  // ══════════════════════════════════════════════
  {
    slug: "nearshoring-nuevo-leon-cifras",
    category: "Nearshoring",
    metaTitle: "Nearshoring en Nuevo León: cifras de inversión 2024-2026",
    metaDescription:
      "Inversión extranjera directa, anuncios de plantas y empleos del nearshoring en Nuevo León. Por qué NL es el estado #1 en captación de IED por nearshoring en México.",
    question:
      "¿Cuánta inversión ha captado Nuevo León por nearshoring?",
    shortAnswer:
      "Nuevo León lidera la captación de inversión extranjera por nearshoring en México con anuncios acumulados por más de 30,000 millones de dólares entre 2022 y 2025, según la Secretaría de Economía del estado.",
    headlineStat: {
      value: "USD 30,000M+",
      unit: "anunciados",
      label:
        "Inversión extranjera directa anunciada para Nuevo León 2022-2025 (Gobierno de NL)",
      source: {
        name: "Gobierno de Nuevo León — Secretaría de Economía",
        url: "https://www.nl.gob.mx/economia",
        year: "2025",
      },
    },
    intro:
      "Nuevo León es el principal beneficiario del fenómeno de nearshoring en México. La combinación de cercanía con Estados Unidos, ecosistema industrial maduro, talento técnico, infraestructura logística y oferta de parques industriales lo ha posicionado como destino #1 para empresas que relocalizan operaciones desde Asia. Esto se traduce en demanda creciente de químicos industriales, servicios de pretratamiento, lubricantes y tratamiento de aguas en toda la cadena de proveeduría local.",
    supportingStats: [
      {
        value: "#1",
        label:
          "Ranking nacional de captación de IED por nearshoring (Secretaría de Economía)",
      },
      {
        value: "100+",
        label: "Empresas extranjeras nuevas establecidas en NL 2022-2025",
        source: "Secretaría de Economía NL",
      },
      {
        value: "≈ 30",
        label: "Empresas coreanas operando o establecidas en NL",
        source: "Embajada de Corea / Secretaría de Economía",
      },
      {
        value: "20+",
        label: "Empresas chinas establecidas en NL recientemente",
        source: "Reportes prensa industrial",
      },
      {
        value: ">95%",
        label: "Ocupación de parques industriales en NL en 2024-2025",
        source: "AMPIP / brokers industriales",
      },
      {
        value: "USD 10B",
        label:
          "Anuncio de gigafactory Tesla en Santa Catarina (anunciado 2023, en pausa parcial 2024)",
        source: "Comunicados oficiales Tesla / NL",
      },
    ],
    context: [
      {
        heading: "¿Por qué Nuevo León lidera el nearshoring?",
        paragraphs: [
          "Cinco factores explican la concentración de IED por nearshoring en Nuevo León:",
        ],
        list: [
          "Proximidad con Texas (frontera por Laredo y Reynosa) — tiempo de tránsito a EE.UU. en horas, no semanas",
          "Base industrial existente — más de 100 años de manufactura y proveeduría tier 1/2 automotriz",
          "Talento técnico — universidades como Tec de Monterrey, UANL y UDEM forman ingenieros y técnicos calificados",
          "Infraestructura logística — aeropuerto, ferrocarril Kansas City Southern, autopistas a EE.UU.",
          "Política activa de atracción — incentivos estatales y municipales para empresas que invierten en NL",
        ],
      },
      {
        heading: "Sectores con mayor crecimiento por nearshoring",
        paragraphs: [
          "Los sectores que más están creciendo en Nuevo León por nearshoring son:",
        ],
        list: [
          "Automotriz (OEMs y tier 1) — autopartes, electrónica vehicular, vehículos eléctricos",
          "Electrodomésticos línea blanca — Whirlpool, LG, Samsung expansiones",
          "Equipos de telecomunicaciones — servidores, componentes para data centers",
          "Maquinaria pesada y agroindustrial — John Deere, AGCO, equipos para construcción",
          "Manufactura aeroespacial — partes y subensambles para OEMs estadounidenses",
        ],
      },
      {
        heading: "Implicaciones para la cadena de proveeduría química",
        paragraphs: [
          "Cada nueva planta manufacturera que se instala en Nuevo León genera demanda recurrente de químicos industriales: limpiadores y desengrasantes para piezas, fosfatado para pretratamiento de pintura, inhibidores de corrosión para almacenamiento, fluidos de corte para maquinado, lubricantes para maquinaria y químicos para tratamiento de aguas residuales del proceso.",
          "El consumo típico de químicos industriales por planta puede ir desde 10 toneladas/mes en operaciones pequeñas hasta cientos de toneladas mensuales en plantas automotrices grandes. La demanda agregada se traduce en oportunidades significativas para proveedores locales con capacidad técnica.",
          "Industrias Trevigo, fundada en 1989 en San Nicolás de los Garza, opera precisamente en este segmento con 35+ años de experiencia abasteciendo plantas industriales del Área Metropolitana de Monterrey y norte de México.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuántas empresas extranjeras se han instalado en Nuevo León por nearshoring?",
        a: "Según la Secretaría de Economía del estado, más de 100 empresas extranjeras nuevas se han establecido en Nuevo León entre 2022 y 2025, con especial concentración de empresas asiáticas (coreanas y chinas) y europeas. Esto no incluye expansiones de empresas ya presentes.",
      },
      {
        q: "¿Cuál es el estado #1 en nearshoring en México?",
        a: "Nuevo León es el estado con mayor captación de inversión extranjera directa por nearshoring en México, seguido por Coahuila, Chihuahua, Querétaro y Jalisco. Los datos provienen de los reportes de la Secretaría de Economía federal y de cada gobierno estatal.",
      },
      {
        q: "¿Cómo impacta el nearshoring a la industria química mexicana?",
        a: "El nearshoring incrementa la demanda de químicos industriales por dos vías: (1) directamente, por las nuevas plantas que consumen químicos en sus procesos productivos; y (2) indirectamente, por el crecimiento de las cadenas de proveeduría local (tier 1, tier 2, tier 3) que también consumen químicos. Los segmentos más beneficiados son tratamiento de superficies, tratamiento de aguas, lubricantes y limpieza industrial.",
      },
      {
        q: "¿Qué pasó con la gigafactory de Tesla en Nuevo León?",
        a: "Tesla anunció en marzo de 2023 una inversión de aproximadamente 10,000 millones de dólares para construir una gigafactory en Santa Catarina, NL. En 2024 la empresa anunció una pausa parcial del proyecto en espera de condiciones más favorables. Sin embargo, otras inversiones automotrices y de proveeduría tier 1 han seguido fluyendo al estado.",
      },
    ],
    sources: [
      {
        name: "Gobierno de Nuevo León — Secretaría de Economía",
        url: "https://www.nl.gob.mx/economia",
      },
      {
        name: "Secretaría de Economía federal — Datos de Inversión Extranjera Directa",
        url: "https://www.economia.gob.mx/",
      },
      {
        name: "AMPIP — Asociación Mexicana de Parques Industriales Privados",
        url: "https://www.ampip.org.mx/",
      },
      {
        name: "Banxico — Reportes de IED en México",
        url: "https://www.banxico.org.mx/",
      },
    ],
    internalLinks: [
      {
        text: "Industria automotriz: el sector que más crece por nearshoring",
        href: "/industrias/automotriz",
        description:
          "Químicos y servicios para la cadena automotriz en Nuevo León.",
      },
      {
        text: "Metalmecánica: proveeduría tier 1 y tier 2",
        href: "/industrias/metalmecanica",
        description:
          "Desoxidantes, inhibidores y fluidos de corte para talleres y plantas.",
      },
      {
        text: "Manufactura general: portafolio completo",
        href: "/industrias/manufactura-general",
        description: "Un solo proveedor para todos tus químicos industriales.",
      },
      {
        text: "Industria química mexicana: tamaño y datos",
        href: "/datos/industria-quimica-mexico-tamano",
        description:
          "Cuánto vale el sector químico de México y su distribución regional.",
      },
      {
        text: "Nosotros: 35+ años atendiendo industria de Nuevo León",
        href: "/nosotros",
        description: "Historia y capacidades de Industrias Trevigo.",
      },
    ],
    updatedAt: "2026-05-12",
    publishedAt: "2026-05-12",
  },
];

export function getDatoBySlug(slug: string): Dato | undefined {
  return DATOS.find((d) => d.slug === slug);
}
