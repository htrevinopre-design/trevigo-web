// ============================================================
// DATOS CENTRALIZADOS DE TREVIGO
// Toda la información de productos, servicios, industrias y
// contenido del sitio vive aquí para fácil mantenimiento.
// ============================================================

export const COMPANY = {
  name: "Industrias Trevigo",
  shortName: "Trevigo",
  legalName: "Industrias Trevigo, S.A. de C.V.",
  tagline: "Químicos Industriales & Tratamientos de Superficie",
  description:
    "Más de 30 años fabricando y distribuyendo productos químicos para el tratamiento de metales, limpieza industrial y tratamiento de aguas en México. Tecnología avanzada, servicio técnico especializado y precios competitivos.",
  founded: "1990",
  yearsExperience: 35,
  phone: "81 2040 3135",
  email: "ventas@trevigo.com.mx",
  address: {
    street: "Puerto Tampico 325, La Fe",
    city: "San Nicolás de los Garza",
    state: "Nuevo León",
    country: "México",
    zip: "66477",
    full: "Puerto Tampico 325, La Fe, 66477 San Nicolás de los Garza, N.L.",
    mapsUrl: "https://maps.google.com/?q=Puerto+Tampico+325,+La+Fe,+66477+San+Nicolás+de+los+Garza,+N.L.",
  },
  coordinates: {
    lat: 25.7329,
    lng: -100.2994,
  },
  social: {
    linkedin: "https://www.linkedin.com/company/industrias-trevigo",
    facebook: "https://www.facebook.com/industriastrevigo",
    googleBusiness: "https://maps.app.goo.gl/35MYDqnokHs8AwHy6",
  },
  url: "https://www.trevigo.com.mx",
};

// ---- TIPOS DE PRODUCTOS ----

export interface ProductFormat {
  name: 'porron' | 'tambo' | 'tote' | 'saco';
  label: string;
  weight: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  shortDescription: string;
  formats: ProductFormat[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  products: Product[];
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories: ProductSubcategory[];
  // Keep products array for backward compat (flat list)
  products: Product[];
}

// ---- FORMATOS REUTILIZABLES ----

const FORMATS_LIQUID: ProductFormat[] = [
  { name: 'porron', label: 'Porrón',  weight: '50 Kg',     image: '/formatos/porron.png' },
  { name: 'tambo',  label: 'Tambo',   weight: '200 Kg',    image: '/formatos/tambo.png'  },
  { name: 'tote',   label: 'Tote',    weight: '1,000 Kg',  image: '/formatos/tote.png'   },
];

const FORMATS_POWDER: ProductFormat[] = [
  { name: 'saco', label: 'Saco', weight: '25 Kg', image: '/formatos/saco.png' },
];

// ---- PRODUCTOS ----

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  // ══════════════════════════════════════════════
  // CATEGORÍA 1: TRATAMIENTO DE METALES
  // ══════════════════════════════════════════════
  {
    id: "tratamiento-metales",
    name: "Químicos para Tratamiento de Metales",
    icon: "⚙️",
    description:
      "Soluciones químicas completas para la preparación, limpieza y protección de superficies metálicas antes, durante y después del proceso industrial.",
    subcategories: [
      {
        id: "detergentes",
        name: "Detergentes",
        products: [
          {
            id: "limpiador-liquido-alcalino-metales",
            name: "Limpiador Líquido Alcalino para Metales",
            sku: "MX-LIMP-001",
            shortDescription:
              "Limpiador alcalino de alta eficiencia para remover aceites, grasas y contaminantes de superficies metálicas en procesos industriales.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-polvo-alcalino-multiusos",
            name: "Limpiador en Polvo Alcalino Multiusos",
            sku: "MX-LIMP-002",
            shortDescription:
              "Limpiador en polvo concentrado para la limpieza profunda de metales, compatible con múltiples superficies.",
            formats: FORMATS_POWDER,
          },
          {
            id: "limpiador-acido-fosforico-hierro-acero",
            name: "Limpiador Ácido Fosfórico para Hierro y Acero",
            sku: "MX-LIMP-003",
            shortDescription:
              "Limpiador ácido a base de ácido fosfórico para remover óxido e incrustaciones en hierro y acero.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-neutro-pasivado",
            name: "Limpiador Neutro Acuoso con Pasivado",
            sku: "MX-LIMP-004",
            shortDescription:
              "Limpiador de pH neutro que combina limpieza y pasivado ligero, ideal para metales sensibles.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-alcalino-multimetalico",
            name: "Limpiador Alcalino Líquido Multimetálico",
            sku: "MX-LIMP-005",
            shortDescription:
              "Limpiador alcalino compatible con distintos metales: acero, aluminio, zinc y sus aleaciones.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-solido-alcalino",
            name: "Limpiador Sólido Alcalino",
            sku: "MX-DESG-001",
            shortDescription:
              "Desengrasante sólido de alta concentración para sistemas de aspersión e inmersión en líneas de producción.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "desengrasante-multisuperficies",
            name: "Desengrasante Multisuperficies",
            sku: "MX-DESG-002",
            shortDescription:
              "Desengrasante industrial polivalente para limpieza de metales, plásticos y superficies pintadas.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "desoxidantes",
        name: "Desoxidantes",
        products: [
          {
            id: "desoxidante-fosfato-ligero",
            name: "Desoxidante con Fosfato Ligero",
            sku: "MX-DESOX-001",
            shortDescription:
              "Elimina óxido y escamas de laminación mientras deposita un fosfato ligero que mejora la adhesión de recubrimientos.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-acido-desincrustante",
            name: "Limpiador Ácido Desincrustante Multisuperficies",
            sku: "MX-DESOX-002",
            shortDescription:
              "Desoxidante ácido potente para remover óxido, incrustaciones calcáreas y residuos de soldadura.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-desoxidante-fosfatizante",
            name: "Limpiador y Desoxidante Fosfatizante",
            sku: "MX-DESOX-003",
            shortDescription:
              "Limpia, desoxida y fosfatiza en un solo paso, optimizando el proceso de pretratamiento metálico.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-desoxidante-fosfatizacion-ligera",
            name: "Limpiador y Desoxidante con Fosfatización Ligera",
            sku: "MX-DESOX-004",
            shortDescription:
              "Producto multifuncional para líneas rápidas de pretratamiento que requieren limpieza y conversión química simultánea.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "desoxidante-acero-inoxidable",
            name: "Desoxidante y Limpiador para Acero Inoxidable",
            sku: "MX-DESOX-005",
            shortDescription:
              "Formulación especial para la remoción de óxido y manchas en acero inoxidable sin alterar el acabado superficial.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "fosfatos",
        name: "Fosfatos",
        products: [
          {
            id: "fosfato-zinc-brillante",
            name: "Fosfato de Zinc",
            sku: "MX-FOSF-001",
            shortDescription:
              "Fosfato de zinc de grano fino que genera un recubrimiento cristalino denso, ideal como base para pintura.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "fosfato-zinc-calcio-alta-resistencia",
            name: "Fosfato de Zinc-Calcio de Alta Resistencia",
            sku: "MX-FOSF-002",
            shortDescription:
              "Fosfato de zinc-calcio de alto peso para aplicaciones que demandan máxima resistencia a la corrosión.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "limpiador-fosfato-fierro-multimetales",
            name: "Limpiador y Fosfato de Fierro Multimetales",
            sku: "MX-FOSF-003",
            shortDescription:
              "Combina limpieza y fosfatado de fierro en un solo proceso, compatible con acero, zinc y aluminio.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "fosfato-acido-detergente-integral",
            name: "Fosfato Ácido con Detergente Integral",
            sku: "MX-FOSF-004",
            shortDescription:
              "Fosfato ácido con surfactantes integrados que realiza limpieza y conversión química en una sola etapa.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "removedores",
        name: "Removedores",
        products: [
          {
            id: "removedor-alcalino-pinturas",
            name: "Removedor Alcalino de Pinturas",
            sku: "MX-REM-001",
            shortDescription:
              "Removedor alcalino de alto poder para eliminar pintura, barnices y recubrimientos orgánicos sin dañar el sustrato.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "removedor-pintura-cloruro-metileno",
            name: "Removedor de Pintura con Cloruro de Metileno",
            sku: "MX-REM-002",
            shortDescription:
              "Removedor de acción rápida a base de solventes para despintado eficiente en piezas metálicas complejas.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "removedor-intensivo-superficies",
            name: "Removedor Intensivo para Superficies",
            sku: "MX-REM-003",
            shortDescription:
              "Removedor de alta concentración para recubrimientos de difícil remoción, incluidos epoxi y poliuretano.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "sellos",
        name: "Sellos",
        products: [
          {
            id: "sellador-anticorrosion-libre-cromo",
            name: "Sellador Anticorrosión Libre de Cromo",
            sku: "MX-SELL-001",
            shortDescription:
              "Sellador de última generación libre de cromo VI para protección anticorrosiva en líneas de fosfatado.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "anticor-sell-50",
            name: "ANTICOR SELL 50: Sellador de Zirconio",
            sku: "MX-SELL-002",
            shortDescription:
              "Sellador a base de zirconio de alto rendimiento que mejora la adhesión y resistencia a la corrosión post-fosfatado.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "inhibidores",
        name: "Inhibidores",
        products: [
          {
            id: "inhibidor-oxidacion-temporal",
            name: "Inhibidor de Oxidación Temporal para Acero",
            sku: "MX-INH-001",
            shortDescription:
              "Protección temporal anticorrosiva para piezas metálicas en almacenamiento o tránsito interoperacional.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "pasivados",
        name: "Pasivados",
        products: [
          {
            id: "pasivador-aluminio-cromo",
            name: "Pasivador de Aluminio con Cromo",
            sku: "MX-PAS-001",
            shortDescription:
              "Pasivado cromático para aluminio y sus aleaciones, generando una capa de conversión altamente protectora.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "aceites-metales",
        name: "Aceites",
        products: [
          {
            id: "aceite-protector-piezas-metalicas",
            name: "Aceite Protector para Piezas Metálicas",
            sku: "MX-ACE-002",
            shortDescription:
              "Aceite protector de film fino para prevenir la oxidación de piezas acabadas durante almacenamiento o transporte.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "aceite-desmoldante-naftenico",
            name: "Aceite Desmoldante Nafténico",
            sku: "MX-ACE-001",
            shortDescription:
              "Aceite nafténico para desmoldado de piezas fundidas, con excelente separación y sin residuos quemados.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
    ],
    get products() {
      return this.subcategories.flatMap((sc) => sc.products);
    },
  },

  // ══════════════════════════════════════════════
  // CATEGORÍA 2: TRATAMIENTO DE AGUAS
  // ══════════════════════════════════════════════
  {
    id: "tratamiento-aguas",
    name: "Químicos para Tratamiento de Aguas Residuales",
    icon: "💧",
    description:
      "Productos especializados para el tratamiento y acondicionamiento de aguas industriales, residuales y de proceso.",
    subcategories: [
      {
        id: "coagulantes",
        name: "Coagulantes",
        products: [
          {
            id: "coagulante-inorganico-clarificacion",
            name: "Coagulante Inorgánico para Clarificación de Agua",
            sku: "MX-AGUA-003",
            shortDescription:
              "Coagulante inorgánico de alta carga para la remoción eficiente de sólidos suspendidos y turbiedad.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "coagulante-organico-liquido",
            name: "Coagulante Orgánico Líquido para Tratamiento de Agua",
            sku: "MX-AGUA-004",
            shortDescription:
              "Coagulante orgánico líquido de fácil dosificación para el tratamiento primario de aguas residuales industriales.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "coagulante-alta-carga-cationica",
            name: "Coagulante de Alta Carga Catiónica",
            sku: "MX-AGUA-005",
            shortDescription:
              "Polímero coagulante de alta densidad de carga para sistemas de flotación y clarificación de alta demanda.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "floculantes",
        name: "Floculantes",
        products: [
          {
            id: "floculante-anionico-alto-peso",
            name: "Floculante Aniónico de Alto Peso Molecular",
            sku: "MX-AGUA-007",
            shortDescription:
              "Floculante aniónico de alto peso molecular para la aglomeración rápida de sólidos en aguas residuales.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "poliacrilamidas",
        name: "Poliacrilamidas",
        products: [
          {
            id: "poliacrilamida-phpa",
            name: "Poliacrilamida Parcialmente Hidrolizada (PHPA)",
            sku: "MX-AGUA-008",
            shortDescription:
              "Poliacrilamida parcialmente hidrolizada para optimizar la separación sólido-líquido en procesos industriales.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "poliacrilamida-baja-densidad",
            name: "Poliacrilamida de Baja Densidad (PAC-L)",
            sku: "MX-AGUA-009",
            shortDescription:
              "Poliacrilamida de baja densidad para floculación en aguas con baja concentración de sólidos.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "poliacrilamida-alta-densidad",
            name: "Poliacrilamida de Alta Densidad (PAC-R)",
            sku: "MX-AGUA-010",
            shortDescription:
              "Poliacrilamida de alta densidad para aguas con elevada carga de sólidos y alta demanda de floculante.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "agentes-secuestrantes",
        name: "Agentes Secuestrantes",
        products: [
          {
            id: "agente-secuestrante",
            name: "Agente Secuestrante para Tratamiento de Agua",
            sku: "MX-AGUA-001",
            shortDescription:
              "Secuestrante de iones metálicos que previene incrustaciones y deposiciones en sistemas de agua.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "inhibidores-oxigeno",
        name: "Inhibidores de Oxígeno",
        products: [
          {
            id: "inhibidor-oxigeno-calderas",
            name: "Inhibidor de Oxígeno para Calderas",
            sku: "MX-AGUA-002",
            shortDescription:
              "Eliminador de oxígeno disuelto en agua de calderas para prevenir la corrosión por picaduras.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "microbicidas",
        name: "Microbicidas",
        products: [
          {
            id: "microbicida-amplio-espectro",
            name: "Microbicida de Amplio Espectro",
            sku: "MX-AGUA-006",
            shortDescription:
              "Biocida de amplio espectro para el control de bacterias, algas y hongos en sistemas de enfriamiento y aguas de proceso.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
    ],
    get products() {
      return this.subcategories.flatMap((sc) => sc.products);
    },
  },

  // ══════════════════════════════════════════════
  // CATEGORÍA 3: LUBRICANTES Y ACEITES
  // ══════════════════════════════════════════════
  {
    id: "lubricantes-aceites",
    name: "Lubricantes y Aceites Generales",
    icon: "🛢️",
    description:
      "Lubricantes industriales y aceites especiales formulados para maximizar la vida útil de equipos y maquinaria de manufactura.",
    subcategories: [
      {
        id: "lubricantes-especializados",
        name: "Lubricantes Especializados",
        products: [
          {
            id: "lubricantes-sinteticos",
            name: "Lubricantes Sintéticos",
            sku: "SCE-401",
            shortDescription:
              "Lubricantes sintéticos de alto rendimiento para aplicaciones de alta temperatura y cargas extremas.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "lubricante-compresores",
            name: "Lubricante para Compresores",
            sku: "SCE-406",
            shortDescription:
              "Aceite para compresores de tornillo y pistón con alto grado de resistencia a la oxidación y formación de depósitos.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "lubricante-metalworking",
            name: "Lubricante para Metalworking",
            sku: "SCE-409",
            shortDescription:
              "Fluido para trabajo de metales en procesos de corte, torneado, fresado y taladrado.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "fluido-termico",
            name: "Fluido Térmico",
            sku: "SCE-410",
            shortDescription:
              "Aceite térmico para sistemas de calentamiento indirecto con estabilidad hasta 300°C.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "lubricante-grado-alimento",
            name: "Lubricante Grado Alimento",
            sku: "SCE-407",
            shortDescription:
              "Lubricante certificado NSF H1 para uso en zonas de contacto incidental con alimentos.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "grasas-lubricantes",
        name: "Grasas y Lubricantes",
        products: [
          {
            id: "grasas-industriales",
            name: "Grasas Industriales",
            sku: "SCE-408",
            shortDescription:
              "Grasas de litio y litio complejo para rodamientos, cojinetes y articulaciones en condiciones severas.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "anti-aferrante",
            name: "Anti Aferrante",
            sku: "SCE-412",
            shortDescription:
              "Compuesto anti-aferrante para prevenir el pegado de piezas en procesos de alta temperatura y presión.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "desmoldante-industrial",
            name: "Desmoldante Industrial",
            sku: "SCE-411",
            shortDescription:
              "Agente desmoldante para moldes metálicos y de plástico, con fácil aplicación y limpieza.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "lubricantes-formato-especial",
        name: "Lubricantes en Formato Especial",
        products: [
          {
            id: "lubricantes-transportadores-conveyor",
            name: "Lubricantes para Transportadores (Conveyor)",
            sku: "SCE-402",
            shortDescription:
              "Lubricante especial para cadenas y guías de sistemas transportadores, con alta resistencia al agua.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "lubricantes-cadenas",
            name: "Lubricantes para Cadenas",
            sku: "SCE-403",
            shortDescription:
              "Lubricante adherente para cadenas industriales, con protección anticorrosiva y resistencia a la proyección.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "lubricantes-aerosol",
            name: "Lubricantes en Aerosol",
            sku: "SCE-404",
            shortDescription:
              "Lubricante multiusos en aerosol para puntos de difícil acceso, con efecto penetrante y antioxidante.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "lubricante-engranes-abiertos",
            name: "Lubricante para Engranes Abiertos",
            sku: "SCE-405",
            shortDescription:
              "Lubricante de alta viscosidad y consistencia para engranes abiertos expuestos a cargas e impactos.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
      {
        id: "aceites-generales",
        name: "Aceites",
        products: [
          {
            id: "aceites-hidraulicos",
            name: "Aceites Hidráulicos",
            sku: "SCE-413",
            shortDescription:
              "Aceite hidráulico antidesgaste para sistemas hidráulicos industriales de alta presión.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "aceites-motor",
            name: "Aceites de Motor",
            sku: "SCE-414",
            shortDescription:
              "Aceite para motores de combustión interna en equipos y maquinaria industrial.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "aceite-turbina",
            name: "Aceite para Turbina",
            sku: "SCE-415",
            shortDescription:
              "Aceite de turbina con inhibidores de oxidación y anticorrosión para turbinas de vapor y gas.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "aceite-engranes",
            name: "Aceite para Engranes",
            sku: "SCE-416",
            shortDescription:
              "Aceite EP para cajas de engranes industriales bajo cargas severas y choques.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
    ],
    get products() {
      return this.subcategories.flatMap((sc) => sc.products);
    },
  },

  // ══════════════════════════════════════════════
  // CATEGORÍA 4: MATERIAS PRIMAS
  // ══════════════════════════════════════════════
  {
    id: "materias-primas",
    name: "Materias Primas",
    icon: "🧪",
    description:
      "Materias primas químicas de alta pureza para formulación industrial, procesos de manufactura y aplicaciones especializadas.",
    subcategories: [
      {
        id: "acidos-bases",
        name: "Ácidos y Bases",
        products: [
          {
            id: "acido-citrico",
            name: "Ácido Cítrico",
            sku: "ACT-100",
            shortDescription:
              "Ácido cítrico natural de alta pureza para limpieza, desoxidación y ajuste de pH en procesos industriales.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "acido-nitrico",
            name: "Ácido Nítrico",
            sku: "ANI-200",
            shortDescription:
              "Ácido nítrico industrial para pasivado de acero inoxidable, grabado y síntesis química.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "acido-clorhidrico",
            name: "Ácido Clorhídrico",
            sku: "ACL-350",
            shortDescription:
              "Ácido clorhídrico industrial para decapado de metales, ajuste de pH y procesos químicos.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "acido-fosforico",
            name: "Ácido Fosfórico",
            sku: "AFP-500",
            shortDescription:
              "Ácido fosfórico industrial para fosfatado, limpieza de metales y tratamiento de agua.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "sosa-caustica-escamas",
            name: "Sosa Cáustica en Escamas",
            sku: "SCE-400",
            shortDescription:
              "Hidróxido de sodio en escamas de alta pureza para formulación de limpiadores, neutralización y procesos alcalinos.",
            formats: FORMATS_POWDER,
          },
          {
            id: "sosa-al-50",
            name: "Sosa Cáustica al 50%",
            sku: "SSA-50L",
            shortDescription:
              "Solución de hidróxido de sodio al 50% para dosificación directa en procesos industriales y ajuste de pH.",
            formats: FORMATS_LIQUID,
          },
          {
            id: "hipoclorito-sodio",
            name: "Hipoclorito de Sodio",
            sku: "HPS-150",
            shortDescription:
              "Hipoclorito de sodio para desinfección, blanqueo y control microbiológico en procesos industriales.",
            formats: FORMATS_LIQUID,
          },
        ],
      },
    ],
    get products() {
      return this.subcategories.flatMap((sc) => sc.products);
    },
  },
];

// ---- SERVICIOS ----

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'metales' | 'aguas';
}

export const SERVICES_METALES: ServiceItem[] = [
  {
    id: "galvanizado",
    name: "Galvanizado",
    icon: "🔩",
    category: "metales",
    description:
      "Proporcionamos recubrimientos de zinc mediante procesos de galvanizado, diseñados para proteger las superficies metálicas contra la corrosión y extender su vida útil. Este servicio es ideal para componentes expuestos a ambientes agresivos, garantizando resistencia y durabilidad.",
  },
  {
    id: "tropicalizado",
    name: "Tropicalizado",
    icon: "🛡️",
    category: "metales",
    description:
      "Aplicamos recubrimientos tropicalizados que combinan protección anticorrosiva con un acabado estético, logrando una resistencia adicional en climas húmedos o con alta salinidad. Este proceso es perfecto para piezas que requieren un equilibrio entre funcionalidad y presentación.",
  },
  {
    id: "fosfatizado",
    name: "Fosfatizado",
    icon: "🧪",
    category: "metales",
    description:
      "Pretratamiento de superficies metálicas con fosfato al zinc, hierro o tricatiónico para preparar piezas antes de pintura electrostática y e-coat. Mejora dramáticamente la adherencia y la resistencia a corrosión.",
  },
  {
    id: "despintado",
    name: "Despintado",
    icon: "🔧",
    category: "metales",
    description:
      "Ofrecemos un servicio de despintado eficiente y seguro, diseñado para eliminar recubrimientos antiguos o defectuosos sin dañar la superficie metálica. Utilizamos métodos químicos y mecánicos especializados que garantizan una limpieza profunda, dejando las piezas listas para nuevos tratamientos o acabados.",
  },
  {
    id: "decapado",
    name: "Decapado",
    icon: "⚗️",
    category: "metales",
    description:
      "Nuestro servicio de decapado elimina óxidos, contaminantes y residuos de las superficies metálicas, asegurando una limpieza profunda y uniforme. Este proceso es ideal para preparar materiales antes de tratamientos como pasivado o pintura, mejorando la calidad y durabilidad de los acabados.",
  },
  {
    id: "pasivado",
    name: "Pasivado",
    icon: "✨",
    category: "metales",
    description:
      "Ofrecemos un servicio de pasivado que mejora la resistencia a la corrosión de las superficies metálicas mediante la formación de una capa protectora uniforme. Este proceso es ideal para componentes de acero inoxidable o galvanizados, garantizando mayor durabilidad y un acabado limpio y profesional.",
  },
  {
    id: "pintura-electrostatica",
    name: "Pintura Electrostática",
    icon: "🎨",
    category: "metales",
    description:
      "Nuestro servicio de pintura electrostática proporciona recubrimientos de alta calidad, duraderos y uniformes para superficies metálicas. Este proceso garantiza una excelente adherencia, resistencia a la abrasión y un acabado estético que protege las piezas contra impactos y condiciones climáticas adversas.",
  },
];

export const SERVICES_AGUAS: ServiceItem[] = [
  {
    id: "ingenieria-asesoria",
    name: "Ingeniería y Asesoría",
    icon: "📐",
    category: "aguas",
    description:
      "En Trevigo, ofrecemos servicios de ingeniería y asesoría especializados para el diseño y optimización de sistemas de tratamiento de aguas residuales. Nuestro equipo de expertos analiza tus necesidades específicas y desarrolla procesos a medida que garantizan eficiencia operativa, ahorro de recursos y cumplimiento con las normativas ambientales más estrictas.",
  },
  {
    id: "mantenimiento",
    name: "Mantenimiento",
    icon: "🔨",
    category: "aguas",
    description:
      "Proveemos mantenimiento preventivo y correctivo para plantas de tratamiento de aguas residuales, asegurando la continuidad y efectividad de las operaciones. Nuestro servicio incluye limpieza, inspección y reparación de equipos, prolongando su vida útil y evitando interrupciones en los procesos críticos.",
  },
  {
    id: "pruebas-jarras",
    name: "Pruebas de Jarras",
    icon: "🧫",
    category: "aguas",
    description:
      "Realizamos pruebas de jarras para identificar las condiciones óptimas y los productos químicos más eficaces para el tratamiento de aguas. Este procedimiento permite ajustar los procesos de coagulación y floculación, logrando una mayor eficiencia operativa y reduciendo costos en el manejo de aguas residuales.",
  },
  {
    id: "optimizacion-procesos",
    name: "Optimización de Procesos Físico-Químicos",
    icon: "📊",
    category: "aguas",
    description:
      "Mejoramos la eficiencia de los procesos fisicoquímicos en plantas de tratamiento de aguas residuales mediante la selección y dosificación óptima de productos químicos. Nuestro servicio ayuda a reducir costos operativos, mejorar la calidad del efluente y optimizar la remoción de contaminantes. Implementamos soluciones personalizadas para coagulación, floculación, ajuste de pH, control de espuma y más.",
  },
];

// Backward-compatible SERVICES array for the homepage (first 4 from SERVICES_METALES)
export const SERVICES = SERVICES_METALES.slice(0, 4).map((s) => ({
  id: s.id,
  name: s.name,
  slug: s.id,
  shortDescription: s.description,
  description: s.description,
  icon: s.icon,
}));

// ---- INDUSTRIAS ----

export interface IndustryDefinition {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  heroText: string;
  productSubcategoryIds: string[];  // IDs of product subcategories to feature
  serviceIds: string[];              // IDs of services to feature (from SERVICES_METALES + SERVICES_AGUAS)
  stats: Array<{ value: string; label: string }>;
  faqs: Array<{ q: string; a: string }>;
}

export const INDUSTRIES: IndustryDefinition[] = [
  {
    id: "automotriz", name: "Automotriz", slug: "automotriz", icon: "🚗",
    description: "Soluciones para la cadena automotriz en Nuevo León: fosfatado, galvanizado, tratamiento de aguas residuales de taller y productos para fabricantes de autopartes.",
    heroText: "Nuevo León produce el 42% de las autopartes de México. Trevigo lleva 35 años siendo proveedor técnico de confianza para esta industria.",
    productSubcategoryIds: ["detergentes", "desoxidantes", "fosfatos", "sellos", "inhibidores", "aceites-metales", "coagulantes", "floculantes", "lubricantes-especializados"],
    serviceIds: ["galvanizado", "fosfatizado", "pasivado", "decapado", "ingenieria-asesoria"],
    stats: [
      { value: "42%", label: "de autopartes de México producidas en N.L." },
      { value: "35+", label: "años proveyendo a la cadena automotriz" },
      { value: "NOM-001", label: "Cumplimiento SEMARNAT en tratamiento de agua" },
      { value: "GM/Ford", label: "Normas automotrices de fosfatado cubiertas" },
    ],
    faqs: [
      { q: "¿Qué productos químicos se usan en el pretratamiento antes de la pintura?", a: "El proceso estándar incluye: (1) Desengrase alcalino, (2) Fosfatado de zinc, (3) Enjuague con agua desmineralizada, (4) Pasivado final. Trevigo suministra productos para cada etapa." },
      { q: "¿Cómo cumplir con la normativa de descarga de aguas en una planta automotriz?", a: "Las plantas automotrices generan efluentes con metales pesados. Con nuestros coagulantes y floculantes ayudamos a cumplir NOM-001-SEMARNAT-2021. Realizamos Jar Test con muestra de tu efluente sin costo." },
      { q: "¿Atienden a plantas tier 1 y tier 2?", a: "Sí, atendemos OEMs y fabricantes tier 1 y tier 2 en todo México. Tenemos experiencia con plantas de estampado, maquinado, pintura y ensamble." },
    ],
  },
  {
    id: "metalmecanica", name: "Metalmecánica", slug: "metalmecanica", icon: "🔩",
    description: "Desde talleres de maquinado hasta grandes plantas: desoxidantes, inhibidores, fluidos de corte y tratamiento de aguas industriales.",
    heroText: "La industria metalmecánica es el núcleo de la manufactura mexicana. Trevigo entiende sus procesos y tiene el producto correcto para cada etapa.",
    productSubcategoryIds: ["detergentes", "desoxidantes", "fosfatos", "removedores", "inhibidores", "aceites-metales", "grasas-lubricantes", "lubricantes-especializados", "coagulantes", "floculantes"],
    serviceIds: ["galvanizado", "despintado", "decapado", "pasivado", "pintura-electrostatica"],
    stats: [
      { value: "35+", label: "años en la industria metalmecánica" },
      { value: "200+", label: "clientes activos en México" },
      { value: "24h", label: "tiempo de respuesta técnica" },
      { value: "NOM", label: "cumplimiento normativo garantizado" },
    ],
    faqs: [
      { q: "¿Qué desoxidante recomienda Trevigo para acero al carbón?", a: "Para acero al carbón recomendamos nuestro Desoxidante con Fosfato Ligero o el Limpiador y Desoxidante Fosfatizante, que limpian y protegen en un solo paso." },
      { q: "¿Tienen fluidos de corte para maquinado CNC?", a: "Sí, nuestro Lubricante para Metalworking está formulado para procesos de corte, torneado, fresado y taladrado con herramientas de carburo y acero rápido." },
      { q: "¿Cómo manejo el aceite residual de mis baños de maquinado?", a: "Ofrecemos coagulantes y floculantes especializados en separación aceite-agua para tratar los efluentes de talleres metalmecánicos antes de su descarga." },
    ],
  },
  {
    id: "aeronautica", name: "Aeronáutica", slug: "aeronautica", icon: "✈️",
    description: "Productos de alta precisión para el tratamiento de superficies aeroespaciales: fosfatados, pasivados, selladores y lubricantes de alto rendimiento.",
    heroText: "La industria aeronáutica exige los más altos estándares de calidad. Trevigo provee químicos de superficie que cumplen con las especificaciones más exigentes.",
    productSubcategoryIds: ["detergentes", "desoxidantes", "fosfatos", "sellos", "inhibidores", "pasivados", "aceites-metales", "lubricantes-especializados"],
    serviceIds: ["pasivado", "decapado", "galvanizado", "tropicalizado"],
    stats: [
      { value: "Spec", label: "cumplimiento con especificaciones aeroespaciales" },
      { value: "35+", label: "años de experiencia en tratamiento de metales" },
      { value: "100%", label: "trazabilidad de lotes" },
      { value: "TDS+SDS", label: "documentación técnica completa" },
    ],
    faqs: [
      { q: "¿Qué pasivados ofrecen para aluminio aeronáutico?", a: "Ofrecemos Pasivador de Aluminio con Cromo y Sellador ANTICOR SELL 50 a base de zirconio, compatibles con aleaciones de aluminio utilizadas en estructuras aeronáuticas." },
      { q: "¿Sus selladores son libres de cromo VI?", a: "Sí, nuestro Sellador Anticorrosión Libre de Cromo está formulado sin cromo hexavalente, cumpliendo con las restricciones medioambientales de la industria aeroespacial moderna." },
      { q: "¿Emiten certificados de análisis por lote?", a: "Sí, emitimos certificado de análisis (CoA) y ficha de seguridad (SDS) por cada lote, con trazabilidad completa para auditorías de calidad." },
    ],
  },
  {
    id: "alimenticia", name: "Alimenticia", slug: "alimenticia", icon: "🍽️",
    description: "Lubricantes grado alimento, tratamiento de aguas residuales y materias primas para plantas procesadoras de alimentos con cumplimiento NSF y FDA.",
    heroText: "La inocuidad alimentaria no se negocia. Trevigo provee productos certificados NSF H1 y químicos de proceso para la industria de alimentos en México.",
    productSubcategoryIds: ["lubricantes-especializados", "lubricantes-formato-especial", "coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "acidos-bases"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "pruebas-jarras", "optimizacion-procesos"],
    stats: [
      { value: "NSF H1", label: "lubricantes certificados para contacto incidental con alimentos" },
      { value: "FDA", label: "compatibilidad con regulaciones de inocuidad" },
      { value: "NOM-001", label: "cumplimiento en tratamiento de aguas residuales" },
      { value: "35+", label: "años de experiencia en industria de alimentos" },
    ],
    faqs: [
      { q: "¿Qué lubricantes son seguros en zonas de contacto con alimentos?", a: "Nuestro Lubricante Grado Alimento (SCE-407) está certificado NSF H1, diseñado para uso en zonas de contacto incidental con alimentos, cumpliendo con FDA 21 CFR y normas USDA." },
      { q: "¿Cómo trato las aguas residuales de una planta procesadora de alimentos?", a: "Las aguas de proceso de plantas alimentarias contienen altas cargas orgánicas y grasas. Nuestros coagulantes y floculantes, junto con asesoría de pruebas de jarras, optimizan el tratamiento primario." },
      { q: "¿Ofrecen hipoclorito de sodio para desinfección en planta?", a: "Sí, suministramos Hipoclorito de Sodio grado industrial en presentaciones de 200L y 1,000L para programas CIP/SIP y desinfección de superficies en plantas de alimentos." },
    ],
  },
  {
    id: "vitivinicola", name: "Vitivinícola", slug: "vitivinicola", icon: "🍷",
    description: "Tratamiento de aguas residuales de vinícolas, materias primas de alta pureza y lubricantes grado alimento para la industria del vino y destilados.",
    heroText: "Las vinícolas de México requieren química de alta pureza. Trevigo provee los insumos correctos para cada etapa del proceso enológico industrial.",
    productSubcategoryIds: ["coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "acidos-bases", "lubricantes-especializados"],
    serviceIds: ["ingenieria-asesoria", "pruebas-jarras", "optimizacion-procesos", "mantenimiento"],
    stats: [
      { value: "Alta", label: "pureza en materias primas para proceso enológico" },
      { value: "NSF H1", label: "lubricantes certificados grado alimento" },
      { value: "NOM-001", label: "cumplimiento en tratamiento de aguas residuales" },
      { value: "Jar Test", label: "pruebas sin costo en tu efluente" },
    ],
    faqs: [
      { q: "¿Qué químicos necesita una vinícola para el tratamiento de sus aguas residuales?", a: "Las aguas de prensado y lavado de una vinícola tienen alta DBO y sólidos suspendidos. Utilizamos coagulantes, floculantes y ajuste de pH con nuestras materias primas para obtener efluentes dentro de norma." },
      { q: "¿Tienen ácido cítrico para uso en procesos enológicos?", a: "Sí, suministramos Ácido Cítrico de alta pureza en sacos de 25 kg, adecuado para ajuste de acidez y procesos de limpieza en industria vitivinícola." },
    ],
  },
  {
    id: "cervecera", name: "Cervecera", slug: "cervecera", icon: "🍺",
    description: "Lubricantes grado alimento, tratamiento de aguas residuales y materias primas para plantas cerveceras y de bebidas fermentadas.",
    heroText: "La industria cervecera genera grandes volúmenes de aguas residuales. Trevigo tiene la experiencia y los productos para tratar tus efluentes y lubricar tu maquinaria de forma segura.",
    productSubcategoryIds: ["coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "acidos-bases", "lubricantes-especializados", "lubricantes-formato-especial"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "pruebas-jarras", "optimizacion-procesos"],
    stats: [
      { value: "NSF H1", label: "lubricantes certificados grado alimento" },
      { value: "Alto", label: "rendimiento en tratamiento de aguas cerveceras" },
      { value: "NOM-001", label: "cumplimiento normativo en descarga" },
      { value: "35+", label: "años de experiencia en plantas de bebidas" },
    ],
    faqs: [
      { q: "¿Qué lubricantes necesito para transportadores de latas y botellas?", a: "Para transportadores de latas y botellas usamos el Lubricante para Transportadores (Conveyor) SCE-402, de alta resistencia al agua y con formulación compatible con zonas adyacentes a producto." },
      { q: "¿Cómo trato las aguas residuales de una planta cervecera?", a: "Los efluentes cerveceros tienen alta DBO y temperatura variable. Realizamos pruebas de jarras con muestras de tu planta para determinar la dosis óptima de coagulante y floculante." },
    ],
  },
  {
    id: "farmaceutica", name: "Farmacéutica", slug: "farmaceutica", icon: "💊",
    description: "Materias primas de alta pureza, tratamiento de aguas residuales de proceso y lubricantes grado alimento para laboratorios y plantas farmacéuticas.",
    heroText: "La industria farmacéutica requiere materias primas con documentación GMP-ready. Trevigo provee productos con trazabilidad completa y soporte técnico especializado.",
    productSubcategoryIds: ["acidos-bases", "coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "lubricantes-especializados"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "optimizacion-procesos"],
    stats: [
      { value: "TDS+SDS", label: "documentación técnica GMP-ready" },
      { value: "Alta", label: "pureza en materias primas" },
      { value: "NSF H1", label: "lubricantes para zonas de proceso" },
      { value: "NOM-001", label: "cumplimiento en tratamiento de aguas" },
    ],
    faqs: [
      { q: "¿Sus materias primas cuentan con documentación GMP?", a: "Sí, todas nuestras materias primas incluyen ficha técnica (TDS), hoja de seguridad (SDS) conforme GHS/NOM-018-STPS, y certificado de análisis por lote con trazabilidad." },
      { q: "¿Tienen sosa cáustica de grado farmacéutico?", a: "Suministramos Sosa Cáustica en Escamas y Sosa Cáustica al 50% con documentación técnica completa, adecuadas para formulación y limpieza CIP en plantas farmacéuticas." },
    ],
  },
  {
    id: "papel-derivados", name: "Papel y derivados", slug: "papel-derivados", icon: "📄",
    description: "Tratamiento de aguas residuales de plantas papeleras, control de incrustaciones y biocidas para sistemas de agua de proceso.",
    heroText: "Las plantas papeleras generan efluentes complejos con alta carga de fibras y sólidos. Trevigo tiene los coagulantes y floculantes para tratarlos eficientemente.",
    productSubcategoryIds: ["coagulantes", "floculantes", "poliacrilamidas", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "pruebas-jarras", "optimizacion-procesos"],
    stats: [
      { value: "Alta", label: "eficiencia en remoción de fibras y sólidos" },
      { value: "NOM-001", label: "cumplimiento en descarga de efluentes papeleros" },
      { value: "Jar Test", label: "pruebas sin costo en tu efluente" },
      { value: "35+", label: "años de experiencia en tratamiento de aguas" },
    ],
    faqs: [
      { q: "¿Qué coagulante es mejor para aguas de proceso de una papelera?", a: "Para aguas papeleras con alta carga de fibras cortas recomendamos el Coagulante de Alta Carga Catiónica en combinación con Poliacrilamida, para maximizar la clarificación." },
      { q: "¿Cómo controlo las incrustaciones en los sistemas de agua de una planta de papel?", a: "Nuestro Agente Secuestrante previene la formación de incrustaciones de calcio y magnesio en sistemas de agua circulante de plantas papeleras." },
    ],
  },
  {
    id: "lavanderias", name: "Lavanderías", slug: "lavanderias", icon: "👕",
    description: "Materias primas para formulación de productos de lavado industrial: sosa cáustica, hipoclorito, ácidos y químicos de proceso.",
    heroText: "Las lavanderías industriales necesitan materias primas confiables para sus fórmulas de lavado. Trevigo las provee con entrega rápida y soporte técnico.",
    productSubcategoryIds: ["acidos-bases", "detergentes", "microbicidas", "coagulantes", "floculantes"],
    serviceIds: ["ingenieria-asesoria", "optimizacion-procesos"],
    stats: [
      { value: "Granel", label: "suministro en tote y tambo para grandes volúmenes" },
      { value: "Entrega", label: "48 horas en el AMM" },
      { value: "Alta", label: "pureza en materias primas" },
      { value: "Soporte", label: "técnico en formulación" },
    ],
    faqs: [
      { q: "¿En qué presentaciones suministran sosa cáustica?", a: "Suministramos Sosa Cáustica en Escamas (sacos 25 kg) y Sosa Cáustica al 50% (tambos 200 kg y totes 1,000 kg) para lavanderías industriales con alto consumo." },
      { q: "¿Tienen hipoclorito de sodio a granel?", a: "Sí, suministramos Hipoclorito de Sodio en presentaciones de 200 litros (tambo) y 1,000 litros (tote IBC) para consumos de mediana y alta escala." },
    ],
  },
  {
    id: "agroindustria", name: "Agroindustria", slug: "agroindustria", icon: "🌾",
    description: "Tratamiento de aguas residuales agroindustriales, materias primas para limpieza de equipos y lubricantes grado alimento para maquinaria de campo.",
    heroText: "La agroindustria genera efluentes con alta carga orgánica. Trevigo provee los químicos necesarios para tratarlos y mantener la maquinaria operando eficientemente.",
    productSubcategoryIds: ["coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "acidos-bases", "lubricantes-especializados", "lubricantes-formato-especial"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "pruebas-jarras"],
    stats: [
      { value: "NSF H1", label: "lubricantes para maquinaria de proceso de alimentos" },
      { value: "NOM-001", label: "cumplimiento en tratamiento de aguas agroindustriales" },
      { value: "35+", label: "años de experiencia" },
      { value: "Jar Test", label: "pruebas de jarras sin costo" },
    ],
    faqs: [
      { q: "¿Cómo trato las aguas residuales de una empacadora o procesadora de frutas y verduras?", a: "Los efluentes de empacadoras tienen alta carga orgánica y sólidos. Con coagulantes y floculantes Trevigo, ajuste de pH y prueba de jarras previa, logramos efluentes dentro de la norma." },
      { q: "¿Qué lubricantes son seguros para maquinaria en contacto con alimentos?", a: "El Lubricante Grado Alimento SCE-407 certificado NSF H1 es ideal para bandas, cadenas y engranajes en contacto incidental con alimentos frescos o procesados." },
    ],
  },
  {
    id: "minera", name: "Minera", slug: "minera", icon: "⛏️",
    description: "Tratamiento de aguas ácidas de mina, lubricantes industriales de alto rendimiento y materias primas para la industria extractiva.",
    heroText: "Las operaciones mineras enfrentan condiciones extremas. Trevigo provee lubricantes de alta exigencia y químicos para el tratamiento de aguas ácidas de mina (AMD).",
    productSubcategoryIds: ["coagulantes", "floculantes", "poliacrilamidas", "agentes-secuestrantes", "lubricantes-especializados", "grasas-lubricantes", "aceites-generales", "lubricantes-formato-especial", "acidos-bases"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "pruebas-jarras", "optimizacion-procesos"],
    stats: [
      { value: "Extremo", label: "rendimiento en condiciones de alta carga y temperatura" },
      { value: "AMD", label: "tratamiento de aguas ácidas de mina" },
      { value: "NOM-001", label: "cumplimiento en descarga de efluentes mineros" },
      { value: "35+", label: "años en industria extractiva y metalúrgica" },
    ],
    faqs: [
      { q: "¿Pueden tratar aguas ácidas de mina (AMD)?", a: "Sí. Para tratamiento de AMD usamos coagulantes, floculantes y agentes de ajuste de pH de nuestro portafolio. Realizamos pruebas de jarras con muestras de tu efluente antes de cualquier recomendación." },
      { q: "¿Qué grasas recomiendan para maquinaria minera expuesta a polvo y humedad?", a: "Nuestras Grasas Industriales de litio complejo (SCE-408) están formuladas para condiciones severas de polvo, vibración y humedad presentes en equipos mineros." },
    ],
  },
  {
    id: "cosmetica", name: "Cosmética", slug: "cosmetica", icon: "✨",
    description: "Materias primas de alta pureza para formulación cosmética, tratamiento de aguas residuales y documentación técnica para plantas de cosméticos.",
    heroText: "La industria cosmética requiere materias primas con documentación completa. Trevigo provee ácidos, bases y otros insumos con trazabilidad y soporte técnico.",
    productSubcategoryIds: ["acidos-bases", "coagulantes", "floculantes", "agentes-secuestrantes", "microbicidas"],
    serviceIds: ["ingenieria-asesoria", "optimizacion-procesos"],
    stats: [
      { value: "Alta", label: "pureza en materias primas para cosmética" },
      { value: "TDS+SDS", label: "documentación técnica completa" },
      { value: "NOM-001", label: "cumplimiento en tratamiento de aguas" },
      { value: "35+", label: "años de experiencia" },
    ],
    faqs: [
      { q: "¿Tienen ácido cítrico para uso en formulaciones cosméticas?", a: "Sí, suministramos Ácido Cítrico de alta pureza con ficha técnica y SDS, adecuado para ajuste de pH en emulsiones, tónicos y productos de cuidado personal." },
      { q: "¿Cómo trato las aguas residuales de una planta de cosméticos?", a: "Los efluentes cosméticos tienen tensoactivos, surfactantes y aceites. Con nuestros coagulantes y floculantes, más asesoría técnica, logramos reducir DBO y aceites a niveles dentro de norma." },
    ],
  },
  {
    id: "artes-graficas", name: "Artes gráficas", slug: "artes-graficas", icon: "🖨️",
    description: "Desengrasantes para cilindros de impresión, removedores de tintas y materias primas para la industria gráfica y editorial.",
    heroText: "La industria gráfica requiere químicos precisos para la limpieza de prensas e impresoras industriales. Trevigo tiene la solución para cada proceso.",
    productSubcategoryIds: ["detergentes", "desoxidantes", "removedores", "lubricantes-especializados", "lubricantes-formato-especial", "coagulantes"],
    serviceIds: ["despintado", "decapado", "galvanizado"],
    stats: [
      { value: "Eficaz", label: "remoción de tintas y barnices en piezas de prensa" },
      { value: "35+", label: "años de experiencia en química industrial" },
      { value: "Entrega", label: "48h en el área metropolitana de Monterrey" },
      { value: "Soporte", label: "técnico especializado post-venta" },
    ],
    faqs: [
      { q: "¿Tienen removedores para tintas de impresión en offset?", a: "Sí, nuestros Removedores de Pinturas (alcalino y con solvente) son eficaces para la limpieza profunda de cilindros de impresión offset y piezas de prensa." },
      { q: "¿Cómo limpio los rodillos de una prensa flexográfica?", a: "Para flexografía recomendamos el Desengrasante Multisuperficies o el Limpiador Líquido Alcalino, dependiendo del tipo de tinta (base agua o base solvente) utilizada." },
    ],
  },
  {
    id: "refresquera", name: "Refresquera", slug: "refresquera", icon: "🥤",
    description: "Lubricantes grado alimento para transportadores, tratamiento de aguas residuales y materias primas para plantas embotelladores y refresqueras.",
    heroText: "Las plantas embotelladores y refresqueras de México requieren lubricantes certificados NSF y químicos de proceso confiables. Trevigo los provee.",
    productSubcategoryIds: ["lubricantes-especializados", "lubricantes-formato-especial", "coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "acidos-bases"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "pruebas-jarras"],
    stats: [
      { value: "NSF H1", label: "lubricantes grado alimento certificados" },
      { value: "Conveyor", label: "lubricantes para transportadores de botellas/latas" },
      { value: "NOM-001", label: "tratamiento de aguas de proceso" },
      { value: "35+", label: "años de experiencia" },
    ],
    faqs: [
      { q: "¿Qué lubricante uso en un transportador de botellas PET?", a: "El Lubricante para Transportadores (Conveyor) SCE-402 con formulación NSF H1 es ideal para transportadores de botellas PET, latas de aluminio y vidrio en líneas de embotellado." },
      { q: "¿Tienen ácido cítrico para limpieza CIP en una planta embotelladora?", a: "Sí, suministramos Ácido Cítrico de alta pureza en presentaciones de tambo (200 kg) y tote (1,000 kg) para programas CIP en plantas de bebidas." },
    ],
  },
  {
    id: "tratamiento-superficies-metalicas", name: "Tratamiento de superficies metálicas", slug: "tratamiento-superficies-metalicas", icon: "🔧",
    description: "Portafolio completo para empresas de acabados metálicos: fosfatado, galvanizado, tropicalizado, pasivado, despintado y decapado industrial.",
    heroText: "Trevigo es el proveedor técnico de referencia para empresas de tratamiento de superficies metálicas en México.",
    productSubcategoryIds: ["detergentes", "desoxidantes", "fosfatos", "removedores", "sellos", "inhibidores", "pasivados", "aceites-metales", "coagulantes", "floculantes"],
    serviceIds: ["galvanizado", "tropicalizado", "despintado", "decapado", "pasivado", "pintura-electrostatica"],
    stats: [
      { value: "8", label: "líneas de productos para tratamiento de metales" },
      { value: "35+", label: "años en la industria de acabados metálicos" },
      { value: "Cr-Free", label: "selladores sin cromo hexavalente" },
      { value: "NSS", label: "pruebas de niebla salina ASTM B117" },
    ],
    faqs: [
      { q: "¿Qué línea de fosfatado ofrecen para hierro y acero?", a: "Ofrecemos Fosfato de Zinc, Fosfato de Zinc-Calcio de Alta Resistencia y Fosfato de Fierro para acero, zinc y aluminio, con soporte técnico en arranque de línea." },
      { q: "¿Tienen selladores libres de cromo VI?", a: "Sí, el Sellador Anticorrosión Libre de Cromo y el ANTICOR SELL 50 (zirconio) son alternativas Cr(VI)-free que cumplen con directivas medioambientales como RoHS y REACH." },
      { q: "¿Pueden hacer pruebas en mis piezas antes de recomendar?", a: "Siempre. Tomamos muestras de tus piezas, las evaluamos en planta y entregamos un reporte técnico con la recomendación de proceso antes de cualquier compra." },
    ],
  },
  {
    id: "limpieza-general", name: "Limpieza general", slug: "limpieza-general", icon: "🧹",
    description: "Materias primas y productos para formulación de limpiadores industriales: sosa, hipoclorito, ácidos y desengrasantes de alto rendimiento.",
    heroText: "Para empresas de limpieza industrial y formuladores de productos de aseo, Trevigo provee las materias primas con la pureza, el precio y el servicio que necesitas.",
    productSubcategoryIds: ["acidos-bases", "detergentes", "microbicidas", "coagulantes", "floculantes"],
    serviceIds: ["ingenieria-asesoria"],
    stats: [
      { value: "Granel", label: "suministro en tote y tambo para grandes volúmenes" },
      { value: "Alta", label: "pureza en materias primas para formulación" },
      { value: "Entrega", label: "48h en el AMM" },
      { value: "35+", label: "años de experiencia" },
    ],
    faqs: [
      { q: "¿En qué volúmenes mínimos venden hipoclorito de sodio?", a: "El mínimo para Hipoclorito de Sodio es un tambo de 200 litros. Para grandes volúmenes contamos con tote IBC de 1,000 litros y podemos coordinar entregas programadas." },
      { q: "¿Tienen sosa cáustica en escamas para formulación de limpiadores alcalinos?", a: "Sí, Sosa Cáustica en Escamas (SCE-400) en sacos de 25 kg, con alta pureza para formulación de limpiadores y desengrasantes industriales." },
    ],
  },
  {
    id: "electrica-electronica", name: "Eléctrica y electrónica", slug: "electrica-electronica", icon: "⚡",
    description: "Limpiadores de precisión, pasivados y lubricantes para la industria eléctrica y electrónica: protección de componentes, terminales y gabinetes.",
    heroText: "La industria eléctrica y electrónica requiere limpiadores de alta precisión y protectores anticorrosivos para componentes sensibles. Trevigo tiene la solución.",
    productSubcategoryIds: ["detergentes", "desoxidantes", "pasivados", "sellos", "inhibidores", "aceites-metales", "lubricantes-especializados"],
    serviceIds: ["pasivado", "decapado", "tropicalizado"],
    stats: [
      { value: "Alta", label: "precisión en limpiadores para componentes electrónicos" },
      { value: "Cr-Free", label: "selladores sin cromo VI" },
      { value: "35+", label: "años de experiencia" },
      { value: "Soporte", label: "técnico especializado" },
    ],
    faqs: [
      { q: "¿Tienen limpiadores para componentes electrónicos sensibles?", a: "El Limpiador Neutro Acuoso con Pasivado es compatible con metales sensibles como aluminio y zinc usados en gabinetes y carcasas electrónicas sin alterar tolerancias." },
      { q: "¿Qué inhibidor de oxidación usan para piezas metálicas en almacenamiento?", a: "El Inhibidor de Oxidación Temporal para Acero proporciona protección anticorrosiva de corta a mediana duración para piezas en almacenamiento o tránsito entre procesos." },
    ],
  },
  {
    id: "textil", name: "Textil", slug: "textil", icon: "🧵",
    description: "Tratamiento de aguas residuales textiles con alta carga de colorantes, materias primas para procesos de teñido y blanqueo industrial.",
    heroText: "Las aguas residuales textiles son de las más complejas por su alta carga de colorantes y químicos de proceso. Trevigo tiene la experiencia para tratarlas.",
    productSubcategoryIds: ["coagulantes", "floculantes", "poliacrilamidas", "agentes-secuestrantes", "inhibidores-oxigeno", "microbicidas", "acidos-bases"],
    serviceIds: ["ingenieria-asesoria", "pruebas-jarras", "optimizacion-procesos"],
    stats: [
      { value: "Alta", label: "eficiencia en remoción de colorantes textiles" },
      { value: "NOM-001", label: "cumplimiento en descarga de efluentes textiles" },
      { value: "Jar Test", label: "pruebas sin costo en tu efluente" },
      { value: "35+", label: "años de experiencia en tratamiento de aguas industriales" },
    ],
    faqs: [
      { q: "¿Pueden tratar efluentes textiles con colorantes reactivos?", a: "Sí. Para colorantes reactivos utilizamos coagulantes de alta carga catiónica combinados con floculantes aniónico de alto peso molecular. La dosis óptima se determina mediante prueba de jarras con tu muestra." },
      { q: "¿Tienen hipoclorito de sodio para blanqueo industrial?", a: "Sí, suministramos Hipoclorito de Sodio industrial en presentaciones de 200 y 1,000 litros para procesos de blanqueo en plantas textiles." },
    ],
  },
  {
    id: "hule-caucho", name: "Hule y caucho", slug: "hule-caucho", icon: "⚙️",
    description: "Desmoldantes industriales, lubricantes y aceites protectores para la industria del hule, elastómeros y productos de caucho.",
    heroText: "La industria del hule y el caucho requiere desmoldantes de alta eficiencia y lubricantes especializados. Trevigo los provee con soporte técnico en planta.",
    productSubcategoryIds: ["grasas-lubricantes", "lubricantes-especializados", "aceites-generales", "lubricantes-formato-especial", "aceites-metales", "detergentes"],
    serviceIds: ["decapado", "galvanizado", "ingenieria-asesoria"],
    stats: [
      { value: "Alta", label: "eficiencia de desmoldado en moldes de hule" },
      { value: "35+", label: "años de experiencia en industria del caucho" },
      { value: "Soporte", label: "técnico en arranque de proceso" },
      { value: "Entrega", label: "48h en el área metropolitana de Monterrey" },
    ],
    faqs: [
      { q: "¿Qué desmoldante recomiendan para moldes de vulcanización de hule?", a: "El Desmoldante Industrial SCE-411 y el Aceite Desmoldante Nafténico son las opciones más usadas en moldes de vulcanización, garantizando una separación limpia sin residuos quemados." },
      { q: "¿Tienen lubricantes para prensas hidráulicas de moldeo de caucho?", a: "Sí, los Aceites Hidráulicos SCE-413 y Lubricantes Sintéticos SCE-401 son adecuados para prensas hidráulicas en plantas de moldeo de hule." },
    ],
  },
  {
    id: "hospitales", name: "Hospitales", slug: "hospitales", icon: "🏥",
    description: "Tratamiento de aguas residuales hospitalarias, desinfectantes de alto espectro y materias primas para procesos de higiene y esterilización.",
    heroText: "Los hospitales y clínicas generan efluentes con alto riesgo sanitario. Trevigo provee biocidas de amplio espectro y químicos para el tratamiento seguro de estas aguas.",
    productSubcategoryIds: ["microbicidas", "acidos-bases", "coagulantes", "floculantes", "agentes-secuestrantes", "inhibidores-oxigeno"],
    serviceIds: ["ingenieria-asesoria", "mantenimiento", "optimizacion-procesos"],
    stats: [
      { value: "Amplio", label: "espectro en control de bacterias, hongos y virus" },
      { value: "NOM-001", label: "cumplimiento en tratamiento de aguas hospitalarias" },
      { value: "Alta", label: "pureza en materias primas desinfectantes" },
      { value: "35+", label: "años de experiencia" },
    ],
    faqs: [
      { q: "¿Tienen biocidas para el tratamiento de aguas residuales hospitalarias?", a: "El Microbicida de Amplio Espectro controla bacterias, algas y hongos en sistemas de agua de proceso y efluentes hospitalarios, cumpliendo con normativas de descarga." },
      { q: "¿Suministran hipoclorito de sodio para desinfección en hospital?", a: "Sí, suministramos Hipoclorito de Sodio industrial en presentaciones de 200 y 1,000 litros para desinfección de superficies, equipos y tratamiento de aguas." },
    ],
  },
  {
    id: "polimeros", name: "Polímeros", slug: "polimeros", icon: "🔬",
    description: "Desmoldantes industriales, lubricantes para maquinaria de inyección y extrusión, y aceites de proceso para la industria de plásticos y polímeros.",
    heroText: "Las plantas de inyección y extrusión de plásticos necesitan desmoldantes precisos y lubricantes de alta temperatura. Trevigo tiene el portafolio adecuado.",
    productSubcategoryIds: ["grasas-lubricantes", "lubricantes-especializados", "aceites-generales", "lubricantes-formato-especial", "aceites-metales", "detergentes"],
    serviceIds: ["ingenieria-asesoria", "decapado", "galvanizado"],
    stats: [
      { value: "Alta", label: "temperatura de operación en lubricantes de proceso" },
      { value: "35+", label: "años de experiencia en industria del plástico" },
      { value: "Desmoldado", label: "sin residuos quemados en moldes de inyección" },
      { value: "Soporte", label: "técnico en arranque de línea" },
    ],
    faqs: [
      { q: "¿Tienen desmoldante para moldes de inyección de plástico?", a: "El Desmoldante Industrial SCE-411 es compatible con moldes de aluminio y acero para inyección de termoplásticos (PP, ABS, PA) y termoestables." },
      { q: "¿Qué fluido térmico recomiendan para sistemas de calentamiento de moldes?", a: "El Fluido Térmico SCE-410 con estabilidad hasta 300°C es adecuado para sistemas de calentamiento de moldes de inyección y extrusión de polímeros." },
    ],
  },
];

// ---- FAQ GENERAL ----

export const GENERAL_FAQS = [
  {
    q: "¿Cuál es el área de cobertura de Industrias Trevigo?",
    a: "Tenemos base en San Nicolás de los Garza, Nuevo León, y atendemos toda el Área Metropolitana de Monterrey con entrega inmediata. También servimos al norte, centro y occidente de México con envíos en 24-72 horas.",
  },
  {
    q: "¿Ofrecen fichas técnicas y hojas de datos de seguridad (SDS/MSDS)?",
    a: "Sí. Cada producto cuenta con ficha técnica (TDS) y hoja de seguridad (SDS) en español, conforme al Reglamento GHS/NOM-018-STPS. Las enviamos al solicitar cotización o las puedes descargar en nuestra sección de Recursos.",
  },
  {
    q: "¿Hacen pruebas antes de recomendar un producto?",
    a: "Siempre. Para tratamiento de metales, tomamos muestras de tus piezas y las evaluamos en planta. Para tratamiento de aguas, realizamos una prueba de jarras con muestra de tu efluente antes de cualquier recomendación.",
  },
  {
    q: "¿Cuáles son sus presentaciones mínimas de venta?",
    a: "Depende del producto: detergentes y químicos líquidos desde 20 litros, solventes desde 4 litros, materias primas sólidas desde 25 kg. Para proyectos grandes ofrecemos contenedores IBC de 1,000 litros y entregas a granel.",
  },
  {
    q: "¿Tienen soporte técnico post-venta?",
    a: "Sí, contamos con ingenieros de aplicación que realizan visitas técnicas, arranques de línea y optimización de procesos sin costo adicional para clientes activos. También ofrecemos capacitación para operadores.",
  },
];

// ---- STATS ----

export const STATS = [
  { value: "35+", label: "Años de experiencia", description: "En el mercado industrial mexicano" },
  { value: "200+", label: "Clientes activos", description: "En todo México" },
  { value: "3", label: "Líneas de negocio", description: "Metales, agua, materias primas" },
  { value: "48h", label: "Entrega en AMM", description: "Tiempo promedio de entrega" },
];
