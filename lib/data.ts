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
  phone: "+52 (81) 8000-0000",
  email: "ventas@trevigo.com.mx",
  address: {
    street: "Av. A. Ruiz Cortines Pte. 139",
    city: "San Nicolás de los Garza",
    state: "Nuevo León",
    country: "México",
    zip: "66490",
    full: "Av. A. Ruiz Cortines Pte. 139, San Nicolás de los Garza, N.L. 66490",
  },
  coordinates: {
    lat: 25.7329,
    lng: -100.2994,
  },
  social: {
    linkedin: "https://www.linkedin.com/company/industrias-trevigo",
    facebook: "https://www.facebook.com/industriastrevigo",
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
            name: "Fosfato de Zinc Brillante",
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
            name: "ANTICOR SELL 50 — Sellador de Zirconio",
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

export const INDUSTRIES = [
  {
    id: "automotriz",
    name: "Automotriz",
    slug: "automotriz",
    description:
      "Soluciones para la cadena automotriz en Nuevo León y México: fosfatado, galvanizado, tratamiento de aguas residuales de taller y productos para fabricantes de autopartes.",
    heroText:
      "Nuevo León produce el 42% de las autopartes de México. Trevigo lleva 35 años siendo proveedor técnico de confianza para esta industria.",
    keyProducts: ["fosfatos", "galvanizado", "coagulantes", "detergentes-industriales"],
    icon: "🚗",
  },
  {
    id: "metalmecanica",
    name: "Metalmecánica",
    slug: "metalmecanica",
    description:
      "Desde talleres de maquinado hasta grandes plantas de manufactura: desoxidantes, inhibidores, fluidos de corte y tratamiento de aguas industriales.",
    heroText:
      "La industria metalmecánica es el núcleo del norte de México. Trevigo entiende sus procesos y tiene el producto correcto para cada etapa.",
    keyProducts: [
      "desoxidantes",
      "inhibidores-corrosion",
      "aceites-industriales",
      "removedores-pintura",
    ],
    icon: "🔩",
  },
  {
    id: "tratamiento-agua-municipal",
    name: "Agua & Medio Ambiente",
    slug: "agua-medio-ambiente",
    description:
      "Coagulantes, floculantes y consultoría técnica para plantas de tratamiento de aguas residuales industriales y municipales en cumplimiento NOM.",
    heroText:
      "Cumplir con la NOM-001-SEMARNAT no es negociable. Trevigo te ayuda a lograrlo con los productos correctos y el soporte técnico necesario.",
    keyProducts: ["coagulantes", "floculantes"],
    icon: "💧",
  },
  {
    id: "manufactura-general",
    name: "Manufactura General",
    slug: "manufactura-general",
    description:
      "Portafolio completo para plantas de manufactura: limpieza industrial, protección de superficies, tratamiento de aguas y materias primas.",
    heroText:
      "Un solo proveedor técnico para todos tus requerimientos de químicos industriales. Eso es lo que Trevigo ofrece a las plantas manufactureras del norte de México.",
    keyProducts: [
      "detergentes-industriales",
      "inhibidores-corrosion",
      "acido-citrico",
      "coagulantes",
    ],
    icon: "🏭",
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
  { value: "200+", label: "Clientes activos", description: "En el norte de México" },
  { value: "3", label: "Líneas de negocio", description: "Metales, agua, materias primas" },
  { value: "48h", label: "Entrega en AMM", description: "Tiempo promedio de entrega" },
];
