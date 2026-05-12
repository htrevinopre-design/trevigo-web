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
  /** Slug del autor (key de AUTHORS en lib/authors.ts). Default: blanca-garza */
  authorSlug?: string;
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
  // 0. INDUSTRIA AUTOMOTRIZ EN MÉXICO
  // ══════════════════════════════════════════════
  {
    slug: "industria-automotriz-mexico-tamano",
    category: "Industria",
    metaTitle: "¿Cuántos vehículos produce México al año? Cifras de la industria automotriz",
    metaDescription:
      "Producción anual de vehículos en México (récord histórico 2024: 3.99 millones), exportaciones, empleos y posición global según AMIA, INA, INEGI y OICA.",
    question: "¿Cuántos vehículos produce México al año?",
    shortAnswer:
      "México produjo 3,989,403 vehículos ligeros en 2024 (récord histórico) y se ubica entre los primeros cinco productores automotrices del mundo, según AMIA y la OICA.",
    headlineStat: {
      value: "3.99",
      unit: "millones de vehículos en 2024",
      label:
        "Producción de vehículos ligeros en México en 2024 — récord histórico, +5.6% vs 2023 (AMIA)",
      source: {
        name: "AMIA — Asociación Mexicana de la Industria Automotriz",
        url: "https://www.amia.com.mx/",
        year: "2024",
      },
    },
    intro:
      "La industria automotriz es la columna vertebral de la manufactura mexicana y el principal motor de exportación del país. Según la OICA (Organización Internacional de Constructores Automotrices), México se ubicó en el quinto lugar mundial de producción automotriz en 2024, por encima de Corea del Sur y Brasil. El sector incluye armadoras (OEMs) de marcas globales — General Motors, Ford, Stellantis, Volkswagen, Audi, BMW, Toyota, Nissan, Honda, Kia, Mazda, Mercedes-Benz, JAC — y un ecosistema de más de mil empresas de autopartes (tier 1, tier 2, tier 3) distribuidas principalmente en el Bajío, el norte y centro del país.",
    supportingStats: [
      {
        value: "5° lugar",
        label:
          "Posición mundial de México en producción automotriz 2024 (OICA), arriba de Corea y Brasil",
        source: "OICA — Organización Internacional de Constructores Automotrices",
      },
      {
        value: "3.48M",
        label:
          "Vehículos ligeros exportados desde México en 2024 (récord histórico)",
        source: "AMIA — Reporte anual 2024",
      },
      {
        value: "169,929",
        label:
          "Vehículos híbridos y eléctricos producidos en México en 2024 (Mach-E, Equinox EV, Blazer EV, Tacoma híbrida, Wagoner)",
        source: "AMIA",
      },
      {
        value: "≈ 1,000,000+",
        label:
          "Empleos directos en armadoras y la cadena de autopartes en México",
        source: "INA — Industria Nacional de Autopartes",
      },
      {
        value: "≈ 20",
        label: "Plantas de ensamble de vehículos en operación en México",
        source: "AMIA",
      },
      {
        value: "≈ 87%",
        label:
          "Porcentaje de la producción de 2024 que se exportó (principalmente a Estados Unidos)",
        source: "AMIA — Cálculo: 3.48M exportados / 3.99M producidos",
      },
    ],
    context: [
      {
        heading: "Las regiones automotrices de México",
        paragraphs: [
          "La producción automotriz mexicana está concentrada en cuatro grandes regiones que dividen al país por especialización:",
        ],
        list: [
          "Bajío (Guanajuato, Querétaro, Aguascalientes, San Luis Potosí): clusters de Nissan, Mazda, Honda, Toyota, GM y proveedores tier 1 — la zona automotriz con más crecimiento de la última década",
          "Noreste (Nuevo León, Coahuila, Tamaulipas): GM en Ramos Arizpe, Stellantis en Saltillo, Kia en Pesquería, plus la cadena tier 1 más grande del país y el cluster de Tesla anunciado para Santa Catarina",
          "Norte (Chihuahua, Sonora): Ford en Hermosillo, plantas de motores y transmisiones, fuerte componente maquilador",
          "Centro (CDMX, Edomex, Puebla, Morelos): Audi en Puebla, Volkswagen, Nissan en Aguascalientes (extensión), Mercedes-Benz autobuses",
        ],
      },
      {
        heading: "Pretratamiento químico en la línea automotriz",
        paragraphs: [
          "Cada vehículo producido en México pasa por una secuencia químico-industrial intensiva antes de salir de la planta: limpieza alcalina para retirar aceites de estampado, desoxidación ácida, fosfatado de zinc tricatiónico (la capa anticorrosiva base previa al e-coat), pasivado o sello sin cromo, electrodepósito (e-coat), aplicación de primer y pintura final, y finalmente sellado y protección anticorrosiva en cavidades. Cada una de estas etapas consume químicos especializados que cumplen con especificaciones OEM como GMW3179 (GM), WSS-M3P18-A (Ford), o equivalentes Chrysler, Toyota y Volkswagen.",
          "La cadena de proveeduría tier 1 y tier 2 — que abastece a las armadoras de autopartes, ejes, suspensiones, asientos, plásticos y electrónica vehicular — también consume químicos para sus propios procesos de fosfatado, galvanizado, decapado y tratamiento de aguas residuales. Esto multiplica el tamaño real del mercado de químicos industriales para automotriz.",
          "Industrias Trevigo, fundada en 1989 en San Nicolás de los Garza, abastece desde hace tres décadas a OEMs y a la cadena tier 1/tier 2 automotriz del norte de México con productos para cada una de estas etapas.",
        ],
      },
      {
        heading: "Tendencia: electrificación y nearshoring",
        paragraphs: [
          "El sector automotriz mexicano vive dos transformaciones simultáneas. La primera es la transición a vehículos eléctricos (EV) e híbridos, que implica cambios en la cadena de suministro: menos partes mecánicas, más electrónica, baterías y aluminio. Las plantas que producen EVs requieren menos químicos de algunos tipos (por ejemplo, limpieza de motores de combustión) pero más de otros (tratamientos para aluminio, recubrimientos especiales para componentes de batería).",
          "La segunda tendencia es el nearshoring: la relocalización masiva de proveedores y armadoras desde Asia hacia México por proximidad con Estados Unidos. Esto está incrementando la demanda de químicos industriales en regiones como Nuevo León, Bajío y norte del país, y generando oportunidades para proveedores químicos mexicanos con capacidad técnica.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿En qué lugar del mundo está México como productor de vehículos?",
        a: "En 2024 México se consolidó en el quinto lugar mundial de producción automotriz con 4.2 millones de unidades (incluyendo vehículos pesados), de acuerdo con la OICA. El ranking ese año fue: China (31.3M), Estados Unidos (10.56M), Japón (8.23M), India (6.01M) y México. La posición de México ha fluctuado entre el quinto y el séptimo lugar en años recientes según el comportamiento de Corea del Sur y Brasil.",
      },
      {
        q: "¿Cuántas armadoras de autos hay en México?",
        a: "Operan en México aproximadamente 13 marcas con plantas de ensamble: General Motors, Ford, Stellantis (Chrysler/Jeep/RAM), Volkswagen, Audi, BMW, Toyota, Nissan, Honda, Kia, Mazda, Mercedes-Benz y JAC. En total son alrededor de 20 plantas de ensamble en operación, considerando que algunas marcas tienen múltiples plantas en diferentes estados.",
      },
      {
        q: "¿Cuál es el principal destino de las exportaciones automotrices mexicanas?",
        a: "Estados Unidos es por mucho el principal destino, recibiendo alrededor del 75-80% de las exportaciones automotrices mexicanas. Le siguen Canadá, Alemania y mercados latinoamericanos. La integración productiva con Norteamérica se rige por el T-MEC.",
      },
      {
        q: "¿Cuántas empresas de autopartes hay en México?",
        a: "Según datos de la INA (Industria Nacional de Autopartes), México cuenta con más de 1,000 empresas de autopartes (tier 1, tier 2 y tier 3) distribuidas principalmente en el Bajío, noreste y norte del país. El sector autopartes en sí mismo emplea a más de 800,000 personas y genera exportaciones por más de 100 mil millones de USD al año.",
      },
    ],
    sources: [
      {
        name: "AMIA — Asociación Mexicana de la Industria Automotriz",
        url: "https://www.amia.com.mx/",
      },
      {
        name: "INA — Industria Nacional de Autopartes",
        url: "https://www.ina.com.mx/",
      },
      {
        name: "INEGI — Estadísticas mensuales de la industria automotriz",
        url: "https://www.inegi.org.mx/temas/automotriz/",
      },
      {
        name: "Banxico — Balanza comercial automotriz",
        url: "https://www.banxico.org.mx/",
      },
      {
        name: "OICA — Organización Internacional de Constructores Automotrices",
        url: "https://www.oica.net/",
      },
    ],
    internalLinks: [
      {
        text: "Industria automotriz: cómo Trevigo abastece a OEMs y tier 1",
        href: "/industrias/automotriz",
        description:
          "Productos y servicios químicos para cada etapa de la línea de pretratamiento automotriz en Nuevo León.",
      },
      {
        text: "Fosfato de zinc tricatiónico — estándar OEM",
        href: "/productos/fosfato-zinc-brillante",
        description:
          "El recubrimiento de conversión que usan todas las armadoras antes del e-coat.",
      },
      {
        text: "Servicio de fosfatizado industrial",
        href: "/servicios/fosfatizado",
        description: "Pretratamiento de zinc y hierro previo a pintura electrostática.",
      },
      {
        text: "Nearshoring en Nuevo León: cifras 2025",
        href: "/datos/nearshoring-nuevo-leon-cifras",
        description:
          "Cómo el nearshoring está transformando la cadena automotriz mexicana.",
      },
      {
        text: "Metalmecánica: la base de la cadena automotriz",
        href: "/industrias/metalmecanica",
        description: "Desoxidantes, inhibidores y fluidos de corte para tier 1 y tier 2.",
      },
      {
        text: "Industria química mexicana: tamaño y datos",
        href: "/datos/industria-quimica-mexico-tamano",
        description: "El sector que abastece de químicos a la industria automotriz.",
      },
    ],
    updatedAt: "2026-05-12",
    publishedAt: "2026-05-12",
  },

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
      value: "≈ 45,663",
      unit: "millones de USD",
      label:
        "Valor de mercado de la industria química mexicana en 2024 (ANIQ, no incluye petroquímica de PEMEX)",
      source: {
        name: "ANIQ — Anuario Estadístico de la Industria Química Mexicana 2024",
        url: "https://aniq.org.mx/anuario/2025/Capitulo2/introduccion.html",
        year: "2024",
      },
    },
    intro:
      "La industria química es uno de los pilares de la manufactura mexicana. Según el Anuario Estadístico de ANIQ, el sector tiene un valor de mercado cercano a los 45,663 millones de dólares y representa alrededor del 1.7% del PIB nacional. Concentra plantas de químicos básicos, especialidades, fertilizantes, productos de higiene y cosméticos. Es proveedor obligado de prácticamente todas las cadenas de manufactura mexicanas, desde la automotriz hasta la alimenticia. La cifra no incluye la petroquímica básica operada por PEMEX, que se contabiliza por separado.",
    supportingStats: [
      {
        value: "USD 21,025M",
        label: "Producción de la industria química mexicana en 2024",
        source: "ANIQ — Anuario 2024",
      },
      {
        value: "≈ 1.7%",
        label: "Participación de la industria química en el PIB nacional",
        source: "ANIQ — Anuario 2024",
      },
      {
        value: "USD 38,140M",
        label: "Importaciones del sector químico en 2025 (+5.0% vs 2024)",
        source: "ANIQ — Balanza Comercial 2025",
      },
      {
        value: "USD 9,984M",
        label: "Exportaciones del sector químico en 2025 (-14.6% vs 2024)",
        source: "ANIQ — Balanza Comercial 2025",
      },
      {
        value: "USD -28,156M",
        label: "Déficit de balanza comercial del sector químico mexicano en 2025",
        source: "ANIQ",
      },
      {
        value: "≈ 5,000",
        label: "Establecimientos químicos registrados en México",
        source: "DENUE INEGI",
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
      "La industria mexicana genera alrededor de 210 m³/s de aguas residuales (≈ 6,800-7,000 hm³ al año), de los cuales sólo cerca del 27% recibe tratamiento antes de su descarga, según CONAGUA.",
    headlineStat: {
      value: "≈ 6.9",
      unit: "km³/año",
      label:
        "Volumen anual de aguas residuales industriales descargadas en México — ~6,880 hm³ (CONAGUA, último dato consolidado)",
      source: {
        name: "CONAGUA — Estadísticas del Agua en México / SINA",
        url: "https://sina.conagua.gob.mx/sina/index.php?p=12",
        year: "2017-2023",
      },
    },
    intro:
      "Las aguas residuales de origen industrial son uno de los principales focos de regulación ambiental en México. La normativa rectora es la NOM-001-SEMARNAT-2021, que establece los límites máximos permisibles de contaminantes en descargas a cuerpos receptores. El tratamiento físico-químico (coagulación, floculación, sedimentación) y biológico es obligatorio para plantas que descargan a redes municipales o cuerpos de agua federales. A pesar de ello, los datos de CONAGUA muestran que sólo una fracción minoritaria del agua residual industrial se trata de manera efectiva antes de su descarga.",
    supportingStats: [
      {
        value: "≈ 210",
        label: "m³/segundo de aguas residuales descargadas por la industria",
        source: "CONAGUA / SINA",
      },
      {
        value: "≈ 27%",
        label:
          "Porcentaje del agua residual industrial que recibe tratamiento antes de su descarga",
        source: "CONAGUA — Sistema Nacional de Información del Agua",
      },
      {
        value: "≈ 3,041",
        label:
          "Plantas industriales de tratamiento de aguas registradas (CONAGUA 2016)",
        source: "CONAGUA — Inventario de plantas industriales",
      },
      {
        value: "NOM-001",
        label:
          "Norma SEMARNAT 2021 que regula descargas industriales a cuerpos receptores",
        source: "DOF — Diario Oficial de la Federación",
      },
      {
        value: "Hasta 20%",
        label:
          "Recargo al recibo de agua por incumplimiento de la norma de descarga industrial",
        source: "Ley Federal de Derechos",
      },
      {
        value: "+28.4%",
        label:
          "Aumento del volumen de descargas industriales entre 2000 y 2017",
        source: "CONAGUA — series históricas",
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
    authorSlug: "arturo-trevino",
    metaTitle: "Nearshoring en Nuevo León: cifras de inversión 2024-2026",
    metaDescription:
      "Inversión extranjera directa, anuncios de plantas y empleos del nearshoring en Nuevo León. Por qué NL es el estado #1 en captación de IED por nearshoring en México.",
    question:
      "¿Cuánta inversión ha captado Nuevo León por nearshoring?",
    shortAnswer:
      "El Gobierno de Nuevo León reporta más de 75 mil millones de dólares en inversión anunciada por 382 proyectos (192 nuevos y 190 expansiones), con más de 385,000 empleos comprometidos. La IED acumulada del estado supera los 117 mil millones de dólares al cierre de 2025.",
    headlineStat: {
      value: "USD 75,000M+",
      unit: "anunciados",
      label:
        "Inversión anunciada para Nuevo León vía 382 proyectos (192 nuevos + 190 expansiones), Gobierno del Estado 2025",
      source: {
        name: "Gobierno de Nuevo León — Secretaría de Economía",
        url: "https://www.nl.gob.mx/es/boletines/registra-nuevo-leon-3032-mdd-de-inversion-extranjera-directa-al-segundo-trimestre-de-2025",
        year: "2025",
      },
    },
    intro:
      "Nuevo León es el principal beneficiario del fenómeno de nearshoring en México. La combinación de cercanía con Estados Unidos, ecosistema industrial maduro, talento técnico, infraestructura logística y oferta de parques industriales lo ha posicionado como destino #1 para empresas que relocalizan operaciones desde Asia. Esto se traduce en demanda creciente de químicos industriales, servicios de pretratamiento, lubricantes y tratamiento de aguas en toda la cadena de proveeduría local.",
    supportingStats: [
      {
        value: "382",
        label:
          "Proyectos de inversión anunciados en NL (192 nuevos + 190 expansiones)",
        source: "Gobierno del Estado de Nuevo León",
      },
      {
        value: "USD 117,000M+",
        label:
          "IED acumulada de Nuevo León al cierre de 2025 (Gobierno del Estado)",
        source: "Gobierno del Estado de Nuevo León",
      },
      {
        value: "+73%",
        label:
          "Crecimiento de IED captada por NL en 2025 vs. año anterior",
        source: "Vértigo Político / Secretaría de Economía NL",
      },
      {
        value: "237,894",
        label:
          "Empleos ya generados por proyectos anunciados (de más de 385 mil comprometidos)",
        source: "Gobierno del Estado de Nuevo León",
      },
      {
        value: "USD 3,628M",
        label: "IED captada por Nuevo León durante 2025",
        source: "Gobierno del Estado / Secretaría de Economía Federal",
      },
      {
        value: ">95%",
        label: "Ocupación de parques industriales en NL en 2024-2025",
        source: "AMPIP / brokers industriales",
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
        a: "Tesla anunció en marzo de 2023 una inversión de aproximadamente 10,000 millones de dólares para construir una gigafactory en Santa Catarina. En 2024 Elon Musk anunció que se pausaría la inversión a la espera de las elecciones de Estados Unidos y las eventuales políticas arancelarias. Al cierre de 2025 el proyecto sigue oficialmente en pausa (no cancelado): el predio no ha iniciado construcción pero el Gobierno federal y el de NL han reiterado que la inversión no se cancela. Otras inversiones automotrices y de proveeduría tier 1 han seguido fluyendo al estado durante este período.",
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
