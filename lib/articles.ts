// Artículos técnicos para SEO y contenido educativo
// Cada artículo está optimizado para una query específica que ya aparece
// en Search Console o que tiene volumen de búsqueda relevante en México.

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: { title?: string; items: string[] };
};

export type Article = {
  slug: string;
  /** Slug del autor (key de AUTHORS en lib/authors.ts). Default: blanca-garza */
  authorSlug?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string; // ISO date
  updatedAt: string;
  keywords: string[];
  intro: string;
  sections: ArticleSection[];
  faqs?: { q: string; a: string }[];
  relatedProducts?: string[]; // product ids from data.ts
  cta: { title: string; description: string };
};

export const ARTICLES: Article[] = [
  {
    slug: "acido-fosforico-limpieza-metales",
    title: "Ácido fosfórico para limpieza de metales: usos, concentraciones y proveedores en México",
    metaTitle: "Ácido Fosfórico: Usos, Dosis y Venta en México",
    metaDescription:
      "Cómo usar ácido fosfórico para desoxidar y fosfatizar metal: concentraciones recomendadas, errores comunes y dónde comprarlo en Monterrey con asesoría.",
    excerpt:
      "El ácido fosfórico es uno de los reactivos más usados en la limpieza y preparación de superficies metálicas. Conoce sus aplicaciones industriales, concentraciones recomendadas y cómo elegir el grado correcto para tu proceso.",
    category: "Tratamiento de Metales",
    readingTime: "6 min",
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-27",
    keywords: [
      "acido fosforico limpieza metales",
      "acido fosforico industrial Mexico",
      "acido fosforico desoxidante",
      "proveedor acido fosforico Monterrey",
      "H3PO4 industrial",
    ],
    intro:
      "El ácido fosfórico (H₃PO₄) es uno de los reactivos químicos más versátiles en la industria metalmecánica mexicana. Se utiliza para desoxidar, fosfatizar, pasivar y acondicionar superficies metálicas antes de operaciones de pintura, recubrimiento o ensamble. En esta guía técnica explicamos para qué sirve cada concentración, qué aplicaciones tiene en plantas de manufactura y qué consideraciones tomar al elegir un proveedor industrial en Nuevo León.",
    sections: [
      {
        heading: "¿Qué es el ácido fosfórico industrial?",
        paragraphs: [
          "El ácido fosfórico es un ácido inorgánico de fórmula H₃PO₄. En su forma pura es un sólido cristalino, pero en aplicaciones industriales se distribuye en solución acuosa, normalmente al 75% u 85% de concentración.",
          "Es un ácido moderado, más seguro de manejar que el ácido sulfúrico o el clorhídrico, lo que lo convierte en la opción preferida para procesos de limpieza donde el sustrato metálico es sensible. No genera vapores agresivos y permite formular productos con tiempos de contacto controlados.",
        ],
      },
      {
        heading: "Aplicaciones del ácido fosfórico en la limpieza de metales",
        paragraphs: [
          "En la industria, el ácido fosfórico se usa principalmente en cuatro tipos de procesos sobre superficies de acero, acero galvanizado y aluminio:",
        ],
        list: {
          items: [
            "Desoxidación: remueve óxido superficial y escamas de laminación sin atacar el metal base. Se usa en piezas de acero antes de fosfatizado o pintura.",
            "Fosfatizado al hierro: forma una capa de fosfato amorfo que mejora la adherencia de pinturas y recubrimientos en polvo.",
            "Pasivado: deja una capa pasiva temporal que protege contra corrosión durante el almacenamiento entre etapas del proceso.",
            "Limpieza de equipos: se utiliza en circuitos de enfriamiento, intercambiadores de calor y tuberías para remover incrustaciones de óxidos y carbonatos.",
          ],
        },
      },
      {
        heading: "Concentraciones recomendadas según la aplicación",
        paragraphs: [
          "La concentración del ácido fosfórico determina su agresividad y velocidad de reacción. Estas son las concentraciones típicas según el uso:",
        ],
        list: {
          items: [
            "75 a 85% (grado técnico): se usa como materia prima para formular limpiadores, detergentes ácidos y soluciones de fosfatizado.",
            "30 a 50% (solución concentrada): aplicaciones de desincrustación intensiva en equipos industriales.",
            "5 a 15% (solución diluida): baños de desoxidación en línea de pintura, fosfatizado al hierro y limpieza de aluminio.",
            "1 a 3% (solución muy diluida): pasivado final y enjuagues acidulados.",
          ],
        },
      },
      {
        heading: "Diferencia entre ácido fosfórico y otros ácidos industriales",
        paragraphs: [
          "Frente al ácido clorhídrico, el fosfórico es menos volátil y deja una superficie más limpia, sin residuos clorurados que puedan causar corrosión posterior. Frente al ácido sulfúrico, es más selectivo y no ataca al sustrato cuando se controla la concentración.",
          "La principal ventaja del ácido fosfórico en procesos de pintura es que su residuo, cuando se enjuaga correctamente, mejora la adherencia del recubrimiento posterior gracias a la formación de fosfatos amorfos en la superficie metálica.",
        ],
      },
      {
        heading: "Cómo elegir un proveedor de ácido fosfórico en México",
        paragraphs: [
          "Al elegir un proveedor industrial es importante validar tres aspectos: la pureza del producto, la disponibilidad de hoja de seguridad (SDS) y certificado de análisis (COA), y la capacidad de entrega en presentaciones que se adapten al consumo de tu planta.",
          "Industrias Trevigo distribuye ácido fosfórico al 85% técnico desde nuestra planta en San Nicolás de los Garza. Atendemos plantas de manufactura, líneas de pintura y empresas de tratamiento de aguas en todo Nuevo León con entrega en 48 horas dentro del Área Metropolitana de Monterrey.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre ácido fosfórico grado alimenticio y grado técnico?",
        a: "El grado alimenticio cumple con especificaciones FCC (Food Chemicals Codex) y se usa en bebidas y alimentos. El grado técnico tiene impurezas tolerables para procesos industriales y es significativamente más económico. Para limpieza de metales, fosfatizado y desoxidación, el grado técnico al 85% es la opción estándar.",
      },
      {
        q: "¿En qué presentaciones se distribuye el ácido fosfórico industrial?",
        a: "Las presentaciones más comunes son tambor de 250 a 270 kg, contenedor IBC de 1,200 a 1,500 kg y pipa a granel para consumos mayores. Trevigo maneja todas estas presentaciones con entrega programada según el volumen de tu planta.",
      },
      {
        q: "¿Qué precauciones de manejo requiere el ácido fosfórico?",
        a: "Aunque es un ácido moderado, requiere equipo de protección personal completo: lentes de seguridad, guantes resistentes a ácidos, mandil de PVC y zapato de seguridad. Debe almacenarse en tanques de polietileno, fibra de vidrio o acero recubierto. Nunca debe mezclarse con cloro ni con bases concentradas sin protocolo.",
      },
    ],
    relatedProducts: ["acido-fosforico", "limpiador-acido-fosforico-hierro-acero", "fosfato-acido-detergente-integral"],
    cta: {
      title: "¿Necesitas ácido fosfórico para tu proceso?",
      description:
        "Distribuimos ácido fosfórico al 85% técnico con SDS y COA incluidos. Cotización personalizada según volumen y presentación.",
    },
  },

  {
    slug: "acido-nitrico-industrial",
    title: "Ácido nítrico industrial: aplicaciones, usos en metalurgia y cómo comprarlo en México",
    metaTitle: "Ácido Nítrico Industrial: Usos y Venta en México",
    metaDescription:
      "Guía completa del ácido nítrico industrial: aplicaciones en pasivado de acero inoxidable, decapado, electrónica y química fina. Proveedor en Monterrey.",
    excerpt:
      "El ácido nítrico es indispensable en la pasivación de aceros inoxidables, decapado de metales y producción de químicos. Conoce sus aplicaciones, concentraciones industriales y dónde comprarlo en México.",
    category: "Materias Primas",
    readingTime: "5 min",
    publishedAt: "2026-04-22",
    updatedAt: "2026-04-27",
    keywords: [
      "acido nitrico industrial",
      "acido nitrico venta Mexico",
      "HNO3 industrial Monterrey",
      "pasivado acero inoxidable",
      "acido nitrico proveedor",
    ],
    intro:
      "El ácido nítrico (HNO₃) es uno de los ácidos minerales más importantes en la industria metalmecánica, química y electrónica. En México, su demanda principal proviene de plantas de manufactura de acero inoxidable, talleres de decapado y empresas de tratamiento de superficies metálicas. Esta guía explica las aplicaciones más comunes del ácido nítrico industrial, las concentraciones recomendadas y los criterios para elegir un proveedor confiable en Nuevo León.",
    sections: [
      {
        heading: "Propiedades químicas del ácido nítrico",
        paragraphs: [
          "El ácido nítrico es un ácido fuerte, oxidante y altamente corrosivo. Se distribuye comercialmente en concentraciones del 53 al 68% (ácido nítrico diluido) y del 95 al 98% (ácido nítrico fumante). En su forma concentrada genera vapores anaranjados de NO₂, por lo que su manejo requiere ventilación industrial controlada.",
          "Su carácter oxidante lo hace único frente a otros ácidos: además de protonar, oxida directamente al metal, lo que permite reacciones que el clorhídrico o el sulfúrico no pueden lograr.",
        ],
      },
      {
        heading: "Aplicaciones industriales más comunes",
        paragraphs: [
          "El ácido nítrico industrial tiene aplicaciones críticas en sectores donde se requiere control de superficie metálica con alta pureza:",
        ],
        list: {
          items: [
            "Pasivado de acero inoxidable: forma una capa de óxido de cromo que protege contra corrosión. Es el paso final obligatorio en piezas de acero 304, 316 y aceros martensíticos según norma ASTM A380.",
            "Decapado de metales: remueve óxidos pesados y escamas de soldadura en aceros al carbono y aleaciones especiales.",
            "Limpieza de equipos: usado en intercambiadores y reactores de la industria farmacéutica y alimenticia para garantizar inocuidad.",
            "Electrónica: en concentraciones de alta pureza se usa para grabado de circuitos y limpieza de obleas.",
            "Química fina: como oxidante en síntesis orgánica y producción de explosivos industriales.",
            "Producción de fertilizantes: principal precursor del nitrato de amonio.",
          ],
        },
      },
      {
        heading: "Pasivado de acero inoxidable con ácido nítrico",
        paragraphs: [
          "El pasivado con ácido nítrico es el método tradicional para restaurar la capa pasiva del acero inoxidable después de operaciones de soldadura, maquinado o conformado. La concentración típica es del 20 al 50% en volumen, con tiempos de inmersión de 20 a 60 minutos según la aleación.",
          "Aunque algunas plantas modernas migran a ácido cítrico por consideraciones ambientales y de seguridad, el ácido nítrico sigue siendo obligatorio por norma en aplicaciones aeroespaciales, médicas y de equipos a presión sometidos a inspección rigurosa.",
        ],
      },
      {
        heading: "Manejo, almacenamiento y normativa",
        paragraphs: [
          "El ácido nítrico debe almacenarse en tanques de acero inoxidable 304L, polietileno de alta densidad o materiales especiales resistentes a oxidantes. Nunca debe almacenarse cerca de bases, materiales orgánicos, metales reductores ni en presencia de cloruros.",
          "En México su transporte está regulado por la SCT bajo el código UN 2031 (clase 8, riesgo subsidiario 5.1). Toda compra industrial requiere validación del cliente como usuario final y entrega con manifiesto de transporte.",
        ],
      },
      {
        heading: "Compra de ácido nítrico industrial en Monterrey",
        paragraphs: [
          "Industrias Trevigo distribuye ácido nítrico industrial al 65% en presentaciones desde tambor de 250 kg hasta IBC de 1,200 kg. Cada lote se entrega con certificado de análisis y hoja de seguridad GHS actualizada. Atendemos plantas de manufactura, talleres de pasivado y laboratorios industriales en todo el Área Metropolitana de Monterrey.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué concentración de ácido nítrico se usa para pasivar acero inoxidable?",
        a: "Para acero 304 y 316 se usa una solución del 20 al 50% en volumen, a temperatura ambiente, durante 20 a 60 minutos. Para aceros martensíticos (410, 420) se usa concentración menor (10 a 25%) para evitar ataque excesivo. Siempre debe seguirse el procedimiento de la norma ASTM A380 o A967.",
      },
      {
        q: "¿Es lo mismo ácido nítrico industrial que ácido nítrico de laboratorio?",
        a: "Ambos son HNO₃ pero difieren en pureza. El industrial al 65% tiene impurezas tolerables (cloruros, sulfatos, hierro) que no afectan procesos como pasivado o decapado. El de laboratorio (grado ACS o reactivo analítico) tiene pureza superior al 99% y se usa solo en análisis o aplicaciones críticas.",
      },
      {
        q: "¿Qué metales no se deben limpiar con ácido nítrico?",
        a: "El ácido nítrico ataca rápidamente al cobre, latón, bronce, plomo, estaño y zinc. Tampoco se debe usar en aluminio sin inhibidor, ya que puede causar reacción exotérmica violenta. En estos casos se recomienda ácido fosfórico o ácido cítrico como alternativa.",
      },
    ],
    relatedProducts: ["acido-nitrico", "desoxidante-acero-inoxidable", "pasivador-aluminio-cromo"],
    cta: {
      title: "¿Buscas un proveedor de ácido nítrico industrial?",
      description:
        "Distribuimos ácido nítrico al 65% con SDS y COA por lote. Entrega programada en Monterrey y Nuevo León.",
    },
  },

  {
    slug: "fosfatizado-zinc-pretratamiento-pintura",
    title: "Fosfatizado de zinc: el paso clave en el pretratamiento antes de pintar",
    metaTitle: "Fosfatizado de Zinc Antes de Pintar: Guía Completa",
    metaDescription:
      "Por qué el fosfatizado de zinc multiplica la vida de la pintura: etapas del proceso, control del baño y normas automotrices. Guía técnica mexicana.",
    excerpt:
      "El fosfatizado de zinc es el tratamiento más importante para garantizar adherencia y resistencia a la corrosión en piezas pintadas. Aprende cómo funciona, qué etapas tiene y qué normas debe cumplir.",
    category: "Tratamiento de Metales",
    readingTime: "7 min",
    publishedAt: "2026-04-24",
    updatedAt: "2026-04-27",
    keywords: [
      "fosfatizado zinc",
      "fosfatizado industrial Monterrey",
      "pretratamiento pintura industrial",
      "fosfato zinc adherencia",
      "GMW3179 Ford WSS",
    ],
    intro:
      "El fosfatizado de zinc es el proceso químico que transforma una pieza metálica en bruto en una superficie lista para recibir pintura electrostática, e-coat o pintura líquida. Se considera el paso más crítico en el pretratamiento porque determina la adherencia del recubrimiento, la resistencia a la corrosión del producto final y, en consecuencia, la vida útil de cualquier pieza pintada. Esta guía explica cómo funciona, qué etapas tiene la línea de fosfatizado y qué normas automotrices debe cumplir.",
    sections: [
      {
        heading: "¿Qué es el fosfatizado de zinc?",
        paragraphs: [
          "El fosfatizado de zinc es una reacción química controlada en la que iones de zinc, fósforo y otros catalizadores se depositan sobre la superficie de un metal, formando una capa cristalina microscópica de fosfato de zinc adherida químicamente al sustrato.",
          "Esta capa cumple dos funciones: actúa como ancla para la pintura (mejora la adherencia hasta 5 veces frente a un metal sin tratar) y funciona como barrera anticorrosiva al cubrir las microfisuras de la superficie. Sin fosfatizado, la pintura se desprende con facilidad ante humedad, sales o golpes mecánicos.",
        ],
      },
      {
        heading: "Etapas de una línea de fosfatizado completa",
        paragraphs: [
          "Una línea de fosfatizado industrial completa consta de 6 a 8 etapas, dependiendo del nivel de calidad requerido. Las etapas estándar son las siguientes:",
        ],
        list: {
          items: [
            "Desengrase alcalino: elimina aceites de proceso, grasas de embutido y partículas. Se usa detergente alcalino caliente a 50-65 °C.",
            "Enjuague con agua: remueve residuos del desengrase para evitar contaminación del baño siguiente.",
            "Activador: en muchas líneas se aplica un acondicionador de titanio que controla el tamaño del cristal de fosfato.",
            "Fosfatizado de zinc: el corazón del proceso. Se forma la capa cristalina con peso de 1.8 a 4.5 g/m².",
            "Enjuague con agua desmineralizada: elimina sales solubles que afectarían la adherencia.",
            "Pasivado o sellado: aplica una capa final de pasivante libre de cromo VI que sella poros y mejora la resistencia a la niebla salina.",
            "Enjuague final con agua DI: garantiza superficie limpia antes del horno de secado.",
            "Secado: elimina humedad antes de la cabina de pintura.",
          ],
        },
      },
      {
        heading: "Diferencia entre fosfatizado al hierro y fosfatizado al zinc",
        paragraphs: [
          "El fosfatizado al hierro (también llamado fosfato amorfo) es una versión simplificada que se usa cuando los requisitos de corrosión son moderados. Forma una capa amorfa de 0.2 a 0.8 g/m², es más económico y se opera en menos etapas.",
          "El fosfatizado al zinc (fosfato cristalino) es la opción técnica superior. Forma cristales claramente diferenciados, con peso de capa de 1.8 a 4.5 g/m², y resiste niebla salina ASTM B117 por más de 500 horas con pintura adecuada. Es obligatorio en piezas automotrices, electrodomésticos premium y piezas expuestas a intemperie.",
        ],
      },
      {
        heading: "Normas automotrices y de calidad",
        paragraphs: [
          "Las plantas de la cadena automotriz aplican normas estrictas para validar el peso de capa, la cristalografía y la composición del baño de fosfatizado. Las más comunes en México son:",
        ],
        list: {
          items: [
            "GM GMW3179: especificación de pretratamiento de General Motors.",
            "Ford WSS-M3P18-A: norma de fosfatado y e-coat de Ford Motor Company.",
            "Chrysler PS-1106: fosfatizado de zinc para piezas estructurales.",
            "ASTM B117: prueba de niebla salina para validar resistencia a corrosión.",
            "ISO 9227: equivalente internacional para pruebas aceleradas de corrosión.",
          ],
        },
      },
      {
        heading: "Control de proceso: parámetros que se monitorean",
        paragraphs: [
          "Un baño de fosfatizado de zinc requiere monitoreo continuo de varios parámetros para mantener consistencia. Los principales son:",
        ],
        list: {
          items: [
            "Acidez total y acidez libre (puntos de titulación).",
            "Concentración de zinc, manganeso y níquel (acelerantes catiónicos).",
            "Temperatura del baño (típicamente 45 a 60 °C).",
            "Concentración de catalizadores oxidantes (nitrito, clorato).",
            "Peso de capa por gravimetría o XRF.",
            "Tiempo de inmersión por etapa.",
          ],
        },
      },
      {
        heading: "Por qué externalizar el suministro químico",
        paragraphs: [
          "Las plantas que operan líneas de fosfatizado generalmente trabajan con un proveedor químico que no solo entrega los productos sino que asesora técnicamente. El proveedor analiza muestras del baño, ajusta dosificaciones, recomienda correctivos cuando hay desviaciones y entrega reportes de cumplimiento.",
          "Industrias Trevigo opera bajo este modelo desde 1990. Suministramos químicos para fosfatizado al zinc y al hierro, hacemos titulación de baños sin costo y entregamos formulaciones ajustadas al perfil de cada planta. Atendemos a fabricantes Tier 1 y Tier 2 de la industria automotriz en Nuevo León y otras zonas industriales del país.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tiempo dura el fosfatizado antes de pintar?",
        a: "Una pieza fosfatizada y secada correctamente puede esperar entre 4 y 24 horas antes de la cabina de pintura sin perder adherencia. Si el ambiente es húmedo o tiene cloruros, este tiempo se reduce. Lo ideal es minimizar la espera y mantener flujo continuo entre fosfatizado y pintura.",
      },
      {
        q: "¿Qué peso de capa debe tener un fosfatizado para uso automotriz?",
        a: "Para piezas automotrices estructurales el peso de capa debe estar entre 1.8 y 4.5 g/m², con cristalografía fina y uniforme. Pesos menores indican baño débil o pieza mal preparada; pesos mayores indican exceso de acelerantes y pueden afectar la adherencia.",
      },
      {
        q: "¿Se puede fosfatizar acero galvanizado?",
        a: "Sí, pero requiere formulación específica. Los baños tradicionales de fosfatizado al zinc atacan la capa galvánica si no se ajusta el pH y los catalizadores. Para piezas galvanizadas se usan fosfatizadores tricatiónicos (zinc-manganeso-níquel) diseñados para sustratos mixtos.",
      },
      {
        q: "¿Qué problemas de calidad indican que el baño de fosfatizado está fallando?",
        a: "Los síntomas más comunes son: peso de capa fuera de rango, manchas o flores en la superficie, baja resistencia a niebla salina, falla de adherencia en cinta cross-cut, presencia de óxido superficial después del enjuague. Cada síntoma se asocia con desviaciones específicas de acidez, concentración de zinc o temperatura.",
      },
    ],
    relatedProducts: ["fosfato-zinc-brillante", "fosfato-zinc-calcio-alta-resistencia", "limpiador-fosfato-fierro-multimetales"],
    cta: {
      title: "¿Tu línea de fosfatizado necesita asesoría técnica?",
      description:
        "Visitamos tu planta sin costo, evaluamos tu baño y proponemos mejoras con impacto medible en peso de capa, consumo y resistencia a corrosión.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. TROPICALIZADO (palabra clave GSC: "tropicalizado galvanizado Monterrey")
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "tropicalizado-acero-galvanizado-corrosion",
    title: "Tropicalizado: cómo proteger acero y galvanizado contra corrosión en climas húmedos",
    metaTitle: "Tropicalizado de Acero y Galvanizado",
    metaDescription:
      "Guía técnica del tropicalizado industrial: químicos, procesos y aplicaciones para proteger acero, galvanizado y aluminio contra corrosión en climas húmedos.",
    excerpt:
      "El tropicalizado es un proceso clave para proteger piezas metálicas en climas con alta humedad. Conoce los químicos involucrados, las etapas del proceso y cómo elegir el sistema correcto para tu producto final.",
    category: "Tratamiento de Metales",
    readingTime: "7 min",
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    keywords: [
      "tropicalizado",
      "tropicalizado galvanizado",
      "tropicalizado acero",
      "tropicalizado Monterrey",
      "proteccion contra corrosion industrial",
      "tropicalizar piezas metalicas",
    ],
    intro:
      "En México, especialmente en zonas costeras y regiones con alta humedad relativa como el Golfo, la Península de Yucatán y el bajío en temporada de lluvias, las piezas metálicas necesitan una protección adicional contra la corrosión. El proceso para lograr esa protección se conoce como tropicalizado, y es estándar en industrias como la electrónica, electrodomésticos, automotriz y bienes duraderos. En esta guía explicamos qué químicos se usan, cómo se ejecuta el proceso por etapas y cómo evaluar el sistema correcto para tu pieza.",
    sections: [
      {
        heading: "¿Qué es el tropicalizado y por qué se usa?",
        paragraphs: [
          "El tropicalizado es un conjunto de tratamientos químicos y de recubrimiento aplicados a piezas metálicas para incrementar su resistencia a la corrosión bajo condiciones de alta humedad, niebla salina y temperaturas variables. El término viene de los protocolos militares de la Segunda Guerra Mundial, cuando se desarrollaron tratamientos especiales para equipo destinado a climas tropicales.",
          "Hoy es estándar en la industria mexicana porque permite que productos como gabinetes electrónicos, electrodomésticos, herramientas y partes automotrices duren 5 a 10 veces más que sin tratamiento, especialmente cuando se exportan o se distribuyen a regiones con humedad relativa superior al 70%.",
        ],
      },
      {
        heading: "Sustratos típicos que se tropicalizan",
        paragraphs: [
          "Aunque cada sustrato tiene su propio sistema de tropicalizado, los más comunes en plantas mexicanas son:",
        ],
        list: {
          items: [
            "Acero al carbón: requiere desoxidación, fosfatizado al zinc o hierro y sellado con resina o pintura.",
            "Acero galvanizado: necesita pasivado libre de cromo o tropicalizado a base de fosfato y zirconio para complementar la capa galvánica.",
            "Aluminio: se tropicaliza con conversión química y selladores hidrofugantes específicos.",
            "Acero inoxidable: se pasiva con ácido nítrico o cítrico para activar la capa pasiva natural y eliminar contaminación de hierro.",
          ],
        },
      },
      {
        heading: "Etapas del proceso de tropicalizado industrial",
        paragraphs: [
          "Aunque cada planta adapta el proceso a sus equipos y volumen, las etapas básicas son:",
        ],
        list: {
          items: [
            "Limpieza alcalina: remueve grasa y aceites de mecanizado en una solución de detergente alcalino a 50-70°C.",
            "Enjuague: agua limpia para evitar arrastre de detergente al baño siguiente.",
            "Desoxidación: ácido fosfórico o mezcla de ácidos para remover óxido superficial.",
            "Fosfatizado o pasivado: forma la capa de conversión química que es el corazón del tropicalizado.",
            "Sellado: solución libre de cromo o con zirconio que estabiliza la capa de conversión.",
            "Secado y recubrimiento orgánico: pintura, e-coat o powder coating como capa final de barrera.",
          ],
        },
      },
      {
        heading: "Diferencia entre tropicalizado y galvanizado",
        paragraphs: [
          "Es común confundir ambos términos pero son procesos complementarios. El galvanizado es una capa metálica de zinc aplicada por inmersión en caliente o electrólisis, que protege al acero por sacrificio galvánico. El tropicalizado es un tratamiento adicional sobre el galvanizado (o sobre acero pelón) que añade una capa de conversión química para retrasar la corrosión del propio recubrimiento.",
          "En piezas para climas húmedos lo recomendable es combinar ambos: galvanizado primario, seguido de tropicalizado con pasivado libre de cromo y sellado. Este sistema multiplica por 4 a 10 las horas de niebla salina sin presencia de óxido rojo en pruebas estándar ASTM B117.",
        ],
      },
      {
        heading: "Cómo elegir un sistema de tropicalizado en Monterrey",
        paragraphs: [
          "La elección del sistema depende del sustrato, las exigencias de niebla salina, si la pieza llevará pintura posterior, y el volumen de producción. No existe un único producto universal: cada combinación requiere validación en línea con tu equipo y proceso.",
          "Industrias Trevigo opera desde San Nicolás de los Garza con servicio técnico para plantas en Nuevo León y la región norte de México. Visitamos tu planta sin costo, evaluamos tu sistema actual y diseñamos un protocolo de tropicalizado a la medida con productos como nuestro Sellador Anticorrosión Libre de Cromo y nuestro Fosfato de Zinc-Calcio de Alta Resistencia.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuántas horas de niebla salina debe pasar un tropicalizado de calidad?",
        a: "Depende de la aplicación. Para piezas automotrices interiores se exigen 240-500 horas sin óxido rojo. Para electrodomésticos exteriores y equipos industriales se exigen 720-1000 horas. Para componentes marinos o de exportación a zonas costeras se exigen 1500+ horas con sistemas multicapa.",
      },
      {
        q: "¿El tropicalizado libre de cromo cumple con normativas internacionales?",
        a: "Sí. Los tropicalizados libres de cromo hexavalente cumplen con las directivas RoHS y REACH europeas, y con los estándares de proveeduría de armadoras automotrices como GM, Ford, Stellantis y Toyota. Trevigo ofrece formulaciones libres de cromo certificadas.",
      },
      {
        q: "¿Se puede tropicalizar piezas ya pintadas?",
        a: "No. El tropicalizado es un tratamiento previo a la pintura. Si la pieza ya está pintada y necesita protección adicional, lo correcto es aplicar un sellador o cera anticorrosión sobre la pintura, pero el sistema completo de tropicalizado requiere acceso al sustrato metálico desnudo.",
      },
      {
        q: "¿Es lo mismo tropicalizado que pavonado?",
        a: "No. El pavonado o blacking forma una capa de óxido negro de hierro mediante reacción con sales calientes. Es un acabado decorativo y de baja protección. El tropicalizado es un sistema multicapa diseñado para alta resistencia a corrosión, no es solo cosmético.",
      },
    ],
    relatedProducts: [
      "sellador-anticorrosion-libre-cromo",
      "fosfato-zinc-calcio-alta-resistencia",
      "inhibidor-oxidacion-temporal",
      "pasivador-aluminio-cromo",
    ],
    cta: {
      title: "¿Necesitas tropicalizar tus piezas en Monterrey?",
      description:
        "Diseñamos sistemas de tropicalizado a la medida con productos formulados en nuestra planta. Visita técnica gratuita para plantas en Nuevo León.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "tratamiento-aguas-residuales-industriales",
    title: "Tratamiento de aguas residuales industriales: coagulantes, floculantes y proceso completo",
    metaTitle: "Tratamiento de Aguas Residuales Industriales",
    metaDescription:
      "Guía técnica completa: cómo tratar aguas residuales industriales con coagulantes, floculantes y polímeros. Cumple NOM-002 y NOM-003 en plantas mexicanas.",
    excerpt:
      "El tratamiento correcto de aguas residuales industriales reduce costos de descarga y evita sanciones por incumplimiento de NOM-001, NOM-002 y NOM-003. Conoce los químicos clave y el proceso completo paso a paso.",
    category: "Tratamiento de Aguas",
    readingTime: "8 min",
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    keywords: [
      "tratamiento aguas residuales industriales",
      "coagulantes y floculantes",
      "PTAR industrial",
      "NOM-001 descarga agua",
      "NOM-002 alcantarillado",
      "polielectrolito tratamiento agua",
      "policloruro de aluminio",
    ],
    intro:
      "Cada planta industrial mexicana que genera más de 5 m³/día de descarga necesita un sistema de tratamiento de aguas residuales que cumpla con NOM-001-SEMARNAT-2021 (descarga a cuerpo receptor) o NOM-002-SEMARNAT-1996 (descarga al alcantarillado municipal). En esta guía explicamos cómo funciona un tren de tratamiento típico, qué químicos se usan en cada etapa y cómo elegir el coagulante o floculante correcto para tu tipo de agua.",
    sections: [
      {
        heading: "Etapas de un tren de tratamiento industrial",
        paragraphs: [
          "Una planta de tratamiento de aguas residuales industriales (PTAR) bien diseñada se compone de etapas físicas, fisicoquímicas y biológicas. La selección depende de la composición del agua cruda, el caudal y los parámetros de descarga exigidos.",
        ],
        list: {
          items: [
            "Pretratamiento: cribado, desarenado y trampa de grasas para remover sólidos gruesos.",
            "Tratamiento primario fisicoquímico: ajuste de pH, coagulación, floculación y sedimentación primaria.",
            "Tratamiento secundario biológico: lodos activados, reactores aeróbicos o anaeróbicos para reducir DBO y DQO.",
            "Tratamiento terciario: filtración, desinfección y, en plantas avanzadas, ósmosis inversa o ultrafiltración.",
            "Tratamiento de lodos: espesado, deshidratación y disposición final.",
          ],
        },
      },
      {
        heading: "Coagulantes: qué son y cuál elegir",
        paragraphs: [
          "Los coagulantes son sales metálicas o polímeros catiónicos que neutralizan la carga negativa de las partículas coloidales en suspensión, permitiendo que se aglomeren. La elección depende del pH del agua, del tipo de contaminante y del costo operativo.",
        ],
        list: {
          items: [
            "Sulfato de aluminio: el más económico y usado en aguas con turbidez moderada y pH 6 a 7.5.",
            "Cloruro férrico: más eficiente en remoción de fósforo y materia orgánica, opera en pH 4 a 6.",
            "Policloruro de aluminio (PAC): coagulante de alta carga, requiere menos dosis y produce menos lodos. Ideal para descargas industriales con alta carga orgánica.",
            "Coagulantes orgánicos catiónicos: polímeros líquidos para sustituir o complementar coagulantes inorgánicos.",
          ],
        },
      },
      {
        heading: "Floculantes: cómo se forman flóculos sedimentables",
        paragraphs: [
          "Después de la coagulación, los floculantes son polímeros de alto peso molecular que unen las partículas coaguladas formando flóculos grandes y densos que sedimentan rápido. Los más usados son las poliacrilamidas, disponibles en tres cargas:",
        ],
        list: {
          items: [
            "Aniónica: para agua con coagulante inorgánico ya dosificado. Es la más usada en industrias metalmecánicas y alimenticias.",
            "Catiónica: para agua con alta materia orgánica y para deshidratación de lodos biológicos.",
            "No iónica: en aplicaciones donde el agua tiene alta salinidad o pH extremo.",
          ],
        },
      },
      {
        heading: "Errores comunes en la dosificación",
        paragraphs: [
          "La dosificación incorrecta es la causa principal de fallas en plantas de tratamiento. Los errores más comunes que hemos visto en plantas en Nuevo León son: sobredosis de coagulante (genera turbidez residual), preparación incorrecta del polímero (mezcla con agua sin cumplir tiempo de maduración), pH fuera de rango óptimo y mezcla rápida insuficiente en el reactor de coagulación.",
          "Hacer un Jar Test mensual con muestras del agua residual es la mejor práctica para validar dosis óptimas. El test toma 30 minutos y previene desperdicio mensual de químicos del orden del 20 al 40%.",
        ],
      },
      {
        heading: "Cumplimiento normativo en México",
        paragraphs: [
          "Las normas vigentes son: NOM-001-SEMARNAT-2021 (descarga a aguas nacionales), NOM-002-SEMARNAT-1996 (descarga al alcantarillado municipal) y NOM-003-SEMARNAT-1997 (reúso en servicios al público). Cada una establece límites máximos de DBO, DQO, sólidos suspendidos totales, grasas, metales pesados y otros parámetros según el giro industrial.",
          "El incumplimiento puede resultar en multas, clausura temporal y, en casos graves, suspensión de la operación. Por eso muchas plantas industriales prefieren trabajar con un proveedor químico que también dé asesoría técnica de proceso, no solo entregar producto.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre coagulante y floculante?",
        a: "El coagulante neutraliza la carga eléctrica de las partículas coloidales, permitiendo que se acerquen. El floculante es un polímero de alto peso molecular que tiende un puente entre las partículas ya neutralizadas, formando flóculos grandes que sedimentan. En la mayoría de plantas se dosifican ambos en serie: primero coagulante, luego floculante.",
      },
      {
        q: "¿Qué dosis de policloruro de aluminio (PAC) debo usar?",
        a: "Las dosis típicas van de 30 a 200 mg/L según la turbidez y carga orgánica del agua. La dosis exacta solo se determina con Jar Test usando muestras reales de tu efluente. Ajustes mensuales son normales conforme cambian las características del agua cruda.",
      },
      {
        q: "¿Cómo se prepara correctamente un polímero floculante en planta?",
        a: "Se prepara una solución madre al 0.1 a 0.5% con agua limpia, dispersión gradual con agitador lento durante 5 minutos, maduración mínima de 30 minutos sin agitación, y luego dilución en línea al 0.05 a 0.1% para dosificación. La preparación incorrecta corta las cadenas del polímero y reduce eficacia hasta en un 50%.",
      },
      {
        q: "¿Pueden ayudarme a diseñar mi planta de tratamiento?",
        a: "Trevigo no construye plantas, pero asesora en la selección de químicos y en el ajuste de dosificación. Trabajamos en conjunto con ingenierías de PTAR para garantizar que el sistema químico esté alineado con el diseño hidráulico y biológico de tu planta.",
      },
    ],
    relatedProducts: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "coagulante-alta-carga-cationica",
      "floculante-anionico-alto-peso",
      "poliacrilamida-phpa",
    ],
    cta: {
      title: "¿Tu planta tratadora necesita optimizar costos?",
      description:
        "Diseñamos protocolos químicos específicos para tu agua residual con foco en cumplir NOM y reducir costo por m³ tratado.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. DECAPADO DE METALES
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "decapado-metales-industrial",
    title: "Decapado industrial de metales: químicos, procesos y aplicaciones en manufactura",
    metaTitle: "Decapado Industrial de Metales: Guía Técnica",
    metaDescription:
      "Guía técnica del decapado industrial: ácidos, procesos y aplicaciones en acero, aluminio y acero inoxidable. Productos químicos y servicio en Monterrey.",
    excerpt:
      "El decapado es el proceso químico que remueve óxidos, calamina y contaminantes de una superficie metálica antes de la pintura, galvanizado o ensamble. Conoce los ácidos y procesos según el sustrato.",
    category: "Tratamiento de Metales",
    readingTime: "6 min",
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-28",
    keywords: [
      "decapado industrial",
      "decapado de acero",
      "decapado de aluminio",
      "decapado quimico metales",
      "pickling industrial",
      "acido para decapar",
    ],
    intro:
      "El decapado, también conocido como pickling, es el proceso químico que remueve óxidos, escamas de laminación, calamina y contaminantes superficiales de una pieza metálica. Es el paso obligado antes de fosfatizado, galvanizado, pintura o cualquier operación de unión soldada. En esta guía explicamos qué ácido usar según el metal, cómo se ejecuta el proceso y qué errores evitar para no dañar el sustrato.",
    sections: [
      {
        heading: "¿Para qué sirve el decapado en manufactura?",
        paragraphs: [
          "Toda pieza metálica que viene de laminación, fundición o almacenamiento prolongado tiene una capa de óxidos en su superficie. Esa capa interfiere con la adherencia de pinturas, recubrimientos y soldaduras. Sin decapado adecuado, las fallas que aparecen son: pintura que se desprende, soldaduras con porosidad, fosfatizado heterogéneo y corrosión prematura.",
          "El decapado químico en plantas mexicanas se ejecuta por inmersión, aspersión o aplicación localizada con gel. La elección depende del tamaño y geometría de la pieza, el volumen de producción y la severidad del óxido a remover.",
        ],
      },
      {
        heading: "Decapado de acero al carbón",
        paragraphs: [
          "Para acero al carbón, los ácidos típicos son clorhídrico, sulfúrico o fosfórico, según las condiciones específicas del proceso:",
        ],
        list: {
          items: [
            "Ácido clorhídrico al 15-25%: rápido, agresivo y económico. Ideal para grandes volúmenes pero genera vapores ácidos que requieren extracción.",
            "Ácido sulfúrico al 10-15% a 60-80°C: muy usado en líneas de galvanizado en caliente. Eficiente con calamina gruesa.",
            "Ácido fosfórico al 5-15%: opción más segura para piezas pequeñas o procesos sin extracción de vapores. Deja una capa pasiva temporal.",
            "Mezclas ácidas con inhibidor: previenen ataque al metal base y reducen consumo de ácido por sobre-decapado.",
          ],
        },
      },
      {
        heading: "Decapado de acero inoxidable",
        paragraphs: [
          "El acero inoxidable requiere un tratamiento distinto porque el objetivo no es solo remover óxido sino también reactivar la capa pasiva natural. Se usa una mezcla de ácido nítrico al 10-20% con ácido fluorhídrico al 1-3% para remover residuos de hierro libre y restos de soldadura. Después es indispensable un pasivado con ácido nítrico o ácido cítrico para regenerar la capa de óxido de cromo protectora.",
          "Para piezas de inoxidable que no toleran fluorhídrico (por geometría o seguridad operativa), existen formulaciones libres de fluoruros a base de ácido nítrico-fosfórico que logran resultados aceptables a costa de tiempos de inmersión más largos.",
        ],
      },
      {
        heading: "Decapado de aluminio",
        paragraphs: [
          "El aluminio se decapa con sosa cáustica al 5-10% a 60-65°C para remover el óxido natural del aluminio (Al₂O₃) y aceites residuales. Después se neutraliza en un baño de ácido nítrico al 20-30% para remover el smut negro de cobre, hierro y silicio que se libera durante el ataque alcalino.",
          "La secuencia completa es: limpieza alcalina, decapado cáustico, enjuague, desmutado nítrico, enjuague final y secado. Si la pieza llevará anodizado, no se aplica desmutado completo y se ajusta el siguiente paso para preservar la nano-textura.",
        ],
      },
      {
        heading: "Errores comunes y cómo evitarlos",
        paragraphs: [
          "Los errores que más vemos en plantas son: sobre-decapado (pieza queda picada o pierde tolerancias dimensionales), bajo enjuague (residuos ácidos generan corrosión posterior), temperatura de baño no controlada (ataca metal base) y mezcla incorrecta de ácidos (cloro + nítrico genera vapores tóxicos).",
          "Una buena práctica es monitorear semanalmente la concentración del ácido por titulación, hacer cambio de baño cuando el hierro disuelto supera 30 g/L, y mantener registros de tiempo de inmersión por geometría de pieza.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre decapado y desoxidado?",
        a: "Son términos similares pero el decapado es más agresivo: remueve calamina, óxido pesado y contaminantes orgánicos en piezas que vienen directamente de fundición o laminación. El desoxidado es más suave, se usa para remover oxidación superficial ligera en piezas previamente limpias y se aplica antes del fosfatizado o pintura en línea.",
      },
      {
        q: "¿Qué temperatura debe tener un baño de decapado?",
        a: "Depende del ácido. El clorhídrico se usa a temperatura ambiente (20-30°C). El sulfúrico requiere 60-80°C para ser eficiente. El fosfórico opera bien entre 40-60°C. Subir la temperatura acelera la reacción pero también acelera el ataque al metal base, por lo que debe controlarse con inhibidores.",
      },
      {
        q: "¿Puedo reutilizar el baño de decapado?",
        a: "Sí, hasta cierto punto. La concentración de hierro disuelto va subiendo conforme se procesan piezas. Cuando el hierro alcanza 30-50 g/L (depende del ácido), la velocidad de decapado cae al 20-30% del óptimo y conviene cambiar el baño. Algunos sistemas regeneran el ácido por intercambio iónico o cristalización.",
      },
      {
        q: "¿Qué hacer con los baños de decapado agotados?",
        a: "Son residuos peligrosos clasificados según la NOM-052-SEMARNAT-2005 y deben disponerse con un manejador autorizado de RP. Algunas industrias los neutralizan in-situ con cal o sosa para precipitar metales y enviar el lodo a confinamiento controlado. Trevigo asesora en la selección de químicos compatibles con el manejo posterior del residuo.",
      },
    ],
    relatedProducts: [
      "limpiador-acido-fosforico-hierro-acero",
      "desoxidante-acero-inoxidable",
      "limpiador-acido-desincrustante",
      "acido-nitrico",
      "acido-clorhidrico",
    ],
    cta: {
      title: "¿Necesitas químicos para decapar en tu planta?",
      description:
        "Distribuimos ácidos técnicos y mezclas formuladas para decapado industrial. Asesoría técnica gratuita para optimizar tu proceso.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. DESPINTADO INDUSTRIAL (keyword: "despintado monterrey" — 240 visitas)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "despintado-industrial",
    title: "Despintado industrial de metales: métodos, químicos y servicio en Monterrey",
    metaTitle: "Despintado Industrial de Metales en Monterrey",
    metaDescription:
      "Guía técnica del despintado industrial: métodos químicos, alcalinos y por pirólisis para remover pintura de piezas metálicas. Productos y asesoría en Monterrey.",
    excerpt:
      "El despintado industrial es la clave para recuperar piezas rechazadas, reprocesar recubrimientos fallados o renovar flota industrial. Conoce los métodos, los químicos correctos y cómo elegir el sistema para tu proceso en Monterrey.",
    category: "Tratamiento de Metales",
    readingTime: "7 min",
    publishedAt: "2026-05-11",
    updatedAt: "2026-05-11",
    keywords: [
      "despintado monterrey",
      "despintado industrial",
      "despintado de piezas metalicas",
      "stripping pintura industrial",
      "remover pintura metal",
      "despintado quimico",
      "despintado alcalino",
      "recuperar piezas rechazadas pintura",
    ],
    intro:
      "En toda línea de pintura industrial hay un porcentaje de piezas rechazadas: pintura fuera de espesor, mala adherencia, contaminación en la cabina, corridas o defectos de aspersión. La única forma correcta de recuperar esas piezas es el despintado industrial: la remoción completa de la capa de pintura, primer o polvo para reprocesarla desde cero. Esta guía explica los tres métodos principales de despintado, qué químicos se usan en cada caso y cómo elegir el sistema correcto para tu tipo de pieza y recubrimiento.",
    sections: [
      {
        heading: "¿Qué es el despintado industrial y cuándo se necesita?",
        paragraphs: [
          "El despintado industrial es el proceso de remoción de capas de pintura, primer, powder coating, e-coat o barniz sobre piezas metálicas. Se aplica en cuatro escenarios principales: piezas rechazadas en control de calidad que no cumplen especificaciones de espesor o adhesión; piezas que llegarán al final de su vida útil y se quiere recuperar el metal base; renovación de flota o maquinaria industrial con recubrimientos desgastados; y reproceso de piezas con defectos cosméticos antes de repintar.",
          "En Monterrey y el Área Metropolitana, la demanda de despintado industrial proviene principalmente de plantas de manufactura automotriz y proveedores Tier 1-2, fabricantes de electrodomésticos, maquiladoras con rechazo de línea de pintura y talleres de mantenimiento industrial. La decisión clave es el método: no toda pieza puede despintarse con cualquier proceso.",
        ],
      },
      {
        heading: "Método 1: Despintado químico alcalino",
        paragraphs: [
          "El despintado químico alcalino es el método más usado en plantas mexicanas. Consiste en sumergir las piezas en un baño de solución alcalina concentrada (sosa cáustica, hidróxido de potasio o formulaciones especializadas con aminas) que ataca la película de pintura y la separa del sustrato metálico.",
          "Las condiciones típicas de operación son temperatura de 60 a 90°C, concentración de sosa cáustica al 5 al 15% según la pintura, y tiempos de inmersión de 20 a 90 minutos para pinturas en base acuosa o polvo de baja resistencia. Para pinturas de alta resistencia química como e-coat catódico (CED), epóxico de alta densidad o poliuretano bicomponente, se requieren formulaciones con acelerantes orgánicos (monoetanolamina, benzilamina) o mezclas con solventes polares.",
          "La ventaja principal del despintado alcalino es que no daña el metal base ni afecta tolerancias dimensionales, lo que lo hace ideal para piezas con geometría compleja y cavidades interiores. El residuo generado es un lodo con pigmentos metálicos que debe disponerse como residuo peligroso según NOM-052-SEMARNAT-2005.",
        ],
      },
      {
        heading: "Método 2: Despintado pirolítico (por horno)",
        paragraphs: [
          "El despintado pirolítico usa un horno a alta temperatura (350 a 550°C) para carbonizar la película de pintura y convertirla en ceniza que luego se remueve con agua o granallado. Es el método más eficiente para volúmenes altos y piezas de acero estructural robusto.",
          "Sus principales ventajas son la capacidad de procesar grandes volúmenes sin químicos líquidos y la eliminación total de cualquier recubrimiento, incluyendo los más resistentes. Sin embargo, tiene limitaciones importantes: no es apto para piezas con tolerancias estrechas porque el calor puede generar distorsiones, no puede usarse en piezas con insertos de zinc, aluminio o plástico, y requiere inversión en equipo especializado. Muy pocas plantas en Monterrey cuentan con este método internamente.",
        ],
      },
      {
        heading: "Método 3: Despintado mecánico (granallado)",
        paragraphs: [
          "El despintado mecánico por granalla metálica proyecta partículas de acero a alta velocidad sobre la pieza para arrancar mecánicamente la pintura. Es el método más agresivo y el más rápido para piezas de acero al carbón de gran tamaño y geometría simple.",
          "La desventaja es que elimina el perfil superficial del metal base y puede crear microfisuras en piezas delgadas o de geometría compleja. Después del granallado siempre se necesita una nueva preparación de superficie completa: limpieza, fosfatizado y pasivado antes de repintar. Para piezas pequeñas o de geometría compleja, el granallado no llega a interiores y cavidades, por lo que se combina con despintado químico.",
        ],
      },
      {
        heading: "Cómo elegir el método correcto según el recubrimiento",
        paragraphs: [
          "La selección del método depende del tipo de recubrimiento, el metal base, la geometría de la pieza y el volumen a procesar. Esta es la guía general que usamos en Trevigo al asesorar a nuestros clientes:",
        ],
        list: {
          items: [
            "Pintura en polvo (powder coating) sobre acero: despintado alcalino con sosa + acelerante a 70-80°C. Tiempo 30-60 min. Opción más económica.",
            "E-coat catódico (CED): requiere formulación alcalina especializada con aminas. Sosa sola no es suficiente. Tiempo 60-90 min a 80-90°C.",
            "Pintura líquida epóxica o poliuretano: despintado alcalino con formulación con solvente polar, o despintado pirolítico para volúmenes altos.",
            "Piezas grandes de acero estructural: granallado + limpieza química posterior.",
            "Piezas con aluminio, zinc o insertos plásticos: solo despintado alcalino a temperatura controlada (<65°C) para no atacar el aluminio.",
            "Piezas de precisión con tolerancias estrechas: solo despintado químico, nunca granallado ni pirolítico.",
          ],
        },
      },
      {
        heading: "Proceso completo: de la pieza rechazada al reproceso",
        paragraphs: [
          "Un ciclo completo de despintado y reproceso en planta incluye las siguientes etapas: recepción e identificación de piezas rechazadas, inspección del tipo de recubrimiento y estado del metal base, selección del método y configuración del baño, despintado y enjuague abundante, inspección visual del sustrato (no debe haber residuo de pintura, manchas ni ataque al metal), preparación de superficie para reproceso (limpieza, fosfatizado, pasivado), y finalmente reentrada a la línea de pintura.",
          "El enjuague después del despintado es tan crítico como el proceso mismo. Residuos alcalinos en la superficie interfieren con el fosfatizado y la adherencia de la nueva pintura. Se recomienda enjuague en dos etapas: agua limpia y enjuague con agua ligeramente acidulada (ácido fosfórico al 0.5%) para neutralizar residuos alcalinos.",
        ],
      },
      {
        heading: "Despintado industrial en Monterrey: qué buscar en un proveedor",
        paragraphs: [
          "Si tu planta en el Área Metropolitana de Monterrey o en Nuevo León requiere químicos para despintado, los criterios clave son: disponibilidad de formulaciones específicas para el tipo de recubrimiento que manejas (polvo, e-coat, líquida), asesoría técnica en configuración del baño (temperatura, concentración, tiempo), entrega en presentaciones adecuadas al volumen de producción (tambor, IBC o granel), y disponibilidad de SDS y COA por lote.",
          "Industrias Trevigo distribuye desde San Nicolás de los Garza formulaciones alcalinas especializadas para despintado de powder coating, e-coat y pinturas líquidas de alta resistencia, así como los ácidos de enjuague y los químicos de reproceso (fosfatizado, pasivado) que necesitas después. Podemos visitar tu planta sin costo para evaluar tu proceso de despintado actual y recomendar mejoras.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué químico se usa para despintar powder coating?",
        a: "Para powder coating sobre acero se usa típicamente una solución de hidróxido de sodio (sosa cáustica) al 8-15% con acelerantes orgánicos (monoetanolamina o dietilenglicol), operada a 70-80°C. El tiempo de inmersión varía de 20 a 60 minutos según el espesor y tipo de polvo. Algunos polvos de alta resistencia química requieren formulaciones especializadas con solventes polares añadidos.",
      },
      {
        q: "¿El despintado alcalino daña las piezas metálicas?",
        a: "Un despintado alcalino bien controlado no daña el acero al carbón ni el acero inoxidable. Sin embargo, puede atacar el aluminio si la temperatura supera 65°C o la concentración de sosa es muy alta, y puede dañar piezas de zinc galvanizado si el tiempo de inmersión es excesivo. Para sustratos sensibles se usan formulaciones de pH más bajo o tiempos controlados.",
      },
      {
        q: "¿Cuánto tiempo toma despintar una pieza?",
        a: "Depende del recubrimiento y el método. Powder coating en baño alcalino caliente: 20-60 minutos. E-coat catódico con formulación especializada: 60-90 minutos. Pintura líquida epóxica: 30-90 minutos. Granallado mecánico: 5-15 minutos para piezas robustas de geometría simple. El tiempo se determina en pruebas piloto antes de procesar el lote.",
      },
      {
        q: "¿Después del despintado se puede ir directo a pintar?",
        a: "No. Después del despintado siempre se necesita una preparación de superficie completa antes de repintar: enjuague doble (agua + enjuague acidulado), inspección del sustrato, fosfatizado o conversión química según el recubrimiento final, enjuague con agua desmineralizada y secado. Saltar estos pasos resulta en la misma falla de adherencia que motivó el despintado inicial.",
      },
      {
        q: "¿Pueden ayudarme a despintar piezas en mi planta en Monterrey?",
        a: "Trevigo no ofrece servicio de despintado directamente, pero suministramos los químicos, asesoramos en la configuración del proceso y visitamos tu planta para evaluar el sistema. Si necesitas un contratista de servicio de despintado, podemos referirte a talleres especializados en el Área Metropolitana de Monterrey con quienes trabajamos.",
      },
    ],
    relatedProducts: [
      "limpiador-acido-fosforico-hierro-acero",
      "limpiador-acido-desincrustante",
      "acido-clorhidrico",
      "fosfato-zinc-brillante",
    ],
    cta: {
      title: "¿Necesitas químicos para despintado en tu planta?",
      description:
        "Distribuimos formulaciones alcalinas especializadas para despintado de powder coating, e-coat y pinturas de alta resistencia. Visita técnica sin costo en Monterrey.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. FOSFATO DE ZINC VS FOSFATO DE HIERRO (comparativa, alta intención)
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "fosfato-zinc-vs-fosfato-hierro",
    title: "Fosfato de zinc vs fosfato de hierro: cuándo usar cada uno en pretratamiento de pintura",
    metaTitle: "Fosfato de Zinc vs Fosfato de Hierro: Comparativa Técnica",
    metaDescription:
      "Diferencias entre fosfato de zinc y fosfato de hierro en pretratamiento de pintura industrial: aplicaciones, costos, peso de recubrimiento y desempeño anticorrosivo.",
    excerpt:
      "El fosfato de zinc y el fosfato de hierro son los dos sistemas de pretratamiento más usados antes de pintar acero. La elección entre uno y otro impacta directamente la durabilidad, costo y capacidad de tu línea de pintura.",
    category: "Tratamiento de Metales",
    readingTime: "8 min",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    keywords: [
      "fosfato zinc vs fosfato hierro",
      "fosfatizado de zinc",
      "fosfatizado de hierro",
      "pretratamiento pintura",
      "fosfato pintura automotriz",
      "diferencia fosfato zinc hierro",
    ],
    intro:
      "El fosfato de zinc y el fosfato de hierro son los dos sistemas de pretratamiento por conversión química más usados en la industria mexicana antes de aplicar pintura electrostática, e-coat o esmaltes industriales sobre acero. Aunque cumplen una función similar — formar una capa de conversión que mejora la adhesión y resistencia anticorrosiva — sus diferencias en costo operativo, peso del recubrimiento, capacidad de línea y desempeño final son significativas. Esta guía técnica te ayuda a decidir cuál sistema usar según tu aplicación.",
    sections: [
      {
        heading: "Qué hace cada sistema",
        paragraphs: [
          "El fosfato de zinc deposita un recubrimiento cristalino denso compuesto principalmente por hopeita (Zn₃(PO₄)₂·4H₂O) y, en formulaciones tricatiónicas, fosfofilita (Zn₂Fe(PO₄)₂·4H₂O). El peso típico del recubrimiento va de 1.5 a 3.5 g/m² en sistemas estándar y hasta 7 g/m² en formulaciones de alta resistencia anticorrosiva.",
          "El fosfato de hierro, por contraste, deposita una película amorfa de óxidos y fosfatos de hierro (FePO₄ + Fe₃O₄) con peso de 0.2 a 0.6 g/m². No es cristalino y técnicamente es más una capa de conversión ligera que un fosfato pleno.",
          "Ambos sistemas mejoran la adhesión del recubrimiento posterior y protegen el sustrato, pero el fosfato de zinc lo hace mediante anclaje mecánico (área superficial mayor por la estructura cristalina) y barrera química, mientras que el fosfato de hierro depende casi exclusivamente del anclaje químico ligero.",
        ],
      },
      {
        heading: "Desempeño anticorrosivo: la diferencia más importante",
        paragraphs: [
          "En pruebas de niebla salina ASTM B117 con e-coat de buena calidad, los resultados típicos son:",
        ],
        list: {
          items: [
            "Fosfato de hierro + powder coating: 150-300 horas antes de falla del 5% en el panel",
            "Fosfato de zinc estándar + powder coating: 400-700 horas",
            "Fosfato de zinc + e-coat (automotriz OEM): 500-1,000 horas",
            "Fosfato de zinc-calcio de alto peso + e-coat: >1,000 horas (especificación para mercados costeros y exportación)",
          ],
        },
      },
      {
        heading: "Costo operativo y capacidad de línea",
        paragraphs: [
          "El fosfato de hierro es más económico de operar: requiere menos químico por pieza, opera a temperaturas menores (40-55°C vs 50-60°C del zinc), y la línea puede ser más compacta — un sistema de 3 etapas (limpieza+fosfato → enjuague → sello) es suficiente. Esto es atractivo para plantas pequeñas y medianas.",
          "El fosfato de zinc requiere una línea de 5 a 7 etapas con activador, control estricto de relación punto libre/total, y un sistema de sellado posterior. La inversión inicial y el costo operativo por pieza son mayores, pero el desempeño anticorrosivo es muy superior.",
          "Como regla general, si tu cliente final es la industria automotriz tier 1, electrodomésticos de exportación o cualquier producto con servicio exterior, el fosfato de zinc es prácticamente obligatorio. Para muebles metálicos, lockers, archiveros o productos de servicio interior, el fosfato de hierro es suficiente y mucho más económico.",
        ],
      },
      {
        heading: "Compatibilidad con sustratos",
        paragraphs: [
          "El fosfato de zinc tradicional es selectivo: funciona excelente sobre acero al carbón y zinc galvanizado, pero requiere formulaciones tricatiónicas (Zn-Mn-Ni) para procesar aluminio en la misma línea. Las plantas automotrices modernas usan estas formulaciones para procesar carrocerías mixtas con paneles de acero y aluminio.",
          "El fosfato de hierro es más versátil sobre sustratos mixtos en operaciones de bajo a mediano peso, ya que su recubrimiento más ligero no genera los mismos problemas de compatibilidad. Sin embargo, el desempeño anticorrosivo se reduce sobre aluminio comparado con un buen pasivado específico para aluminio.",
        ],
      },
      {
        heading: "Tendencia: química verde y selladores sin cromo",
        paragraphs: [
          "Tanto el fosfato de zinc como el fosfato de hierro se complementan con selladores post-fosfatado. Tradicionalmente se usaba cromo hexavalente (Cr+6), pero la regulación europea REACH y la presión OEM han impulsado el cambio a selladores sin cromo basados en zirconio y silanos.",
          "Industrias Trevigo distribuye selladores libres de cromo de última generación que mejoran 30-50% la resistencia anticorrosiva del recubrimiento de fosfato sin riesgos ambientales ni de salud ocupacional.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo cambiar mi línea de fosfato de hierro a fosfato de zinc fácilmente?",
        a: "Es técnicamente posible pero requiere modificar las etapas de la línea (típicamente pasar de 3 a 5-7 etapas), ajustar tiempos de contacto y temperatura, y agregar un baño de activador. La inversión puede ser significativa. Recomendamos evaluar primero si el desempeño anticorrosivo real lo justifica para tu aplicación.",
      },
      {
        q: "¿Qué fosfato se usa en la industria automotriz mexicana?",
        a: "Las armadoras (OEMs) usan fosfato de zinc tricatiónico (Zn-Mn-Ni) seguido de e-coat. Es el estándar que cumple con especificaciones GM (GMW3179), Ford (WSS-M3P18-A) y los lineamientos de la cadena tier 1.",
      },
      {
        q: "¿Cómo controlo la calidad del fosfato en mi planta?",
        a: "Los parámetros básicos son: peso del recubrimiento (gravimetría), relación punto libre/punto total del baño (titulación diaria), cristalinidad y uniformidad (inspección visual), y desempeño de niebla salina con panel testigo cada lote. Trevigo provee soporte técnico para establecer estos protocolos sin costo adicional para clientes activos.",
      },
      {
        q: "¿Cuál es la vida útil promedio de un baño de fosfato de zinc?",
        a: "Depende del volumen de producción y la calidad del enjuague previo, pero un baño bien controlado dura típicamente 3-6 meses antes de necesitar reemplazo o regeneración. El control de Fe disuelto, lodo y relación de acidez son los indicadores clave.",
      },
    ],
    relatedProducts: [
      "fosfato-zinc-brillante",
      "fosfato-zinc-calcio-alta-resistencia",
      "limpiador-fosfato-fierro-multimetales",
      "fosfato-acido-detergente-integral",
      "sellador-anticorrosion-libre-cromo",
    ],
    cta: {
      title: "¿Quieres optimizar tu línea de fosfatado?",
      description:
        "Distribuimos fosfatos de zinc y de hierro formulados en México. Visita técnica sin costo para evaluar tu proceso y recomendar la formulación correcta.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 9. COAGULANTE ORGÁNICO VS INORGÁNICO
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "coagulante-organico-vs-inorganico",
    title: "Coagulante orgánico vs inorgánico: cuándo elegir cada uno en tratamiento de aguas industriales",
    metaTitle: "Coagulante Orgánico vs Inorgánico: Guía de Selección",
    metaDescription:
      "Diferencias entre coagulantes orgánicos y inorgánicos en tratamiento de aguas residuales industriales: cuándo usar cada uno, dosis, costos y casos de uso reales.",
    excerpt:
      "Elegir el coagulante correcto para tu planta de tratamiento de aguas residuales puede reducir 30-50% el costo operativo y los lodos generados. Conoce cuándo conviene un coagulante inorgánico (PAC, sulfato de aluminio) y cuándo uno orgánico (polyDADMAC, poliaminas).",
    category: "Tratamiento de Aguas",
    readingTime: "7 min",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    keywords: [
      "coagulante organico vs inorganico",
      "coagulante PAC mexico",
      "coagulante para PTAR",
      "polyDADMAC",
      "policloruro aluminio",
      "tratamiento aguas industriales coagulante",
    ],
    intro:
      "Los coagulantes son el primer químico que entra a una planta de tratamiento de aguas residuales (PTAR) industrial. Su función es neutralizar las cargas negativas de las partículas coloidales en suspensión para que se aglomeren y luego sedimenten o floten. La selección entre un coagulante inorgánico (basado en sales metálicas) y uno orgánico (basado en polímeros) afecta directamente el costo operativo, la cantidad de lodos generados y el cumplimiento de la NOM-001-SEMARNAT.",
    sections: [
      {
        heading: "Coagulantes inorgánicos: qué son y cuándo usarlos",
        paragraphs: [
          "Los coagulantes inorgánicos más usados en México son el policloruro de aluminio (PAC, ~18% Al₂O₃), el sulfato de aluminio (alumbre) y el cloruro férrico. Funcionan generando cationes metálicos de alta carga (Al³⁺, Fe³⁺) que neutralizan las cargas negativas de las partículas en el agua.",
          "Sus ventajas: bajo costo por kg, amplia disponibilidad, efectivos para aguas con turbidez alta y sólidos suspendidos visibles. El PAC en particular tiene un rango de pH operativo amplio (5.5-9.0) lo que lo hace muy versátil.",
          "Sus desventajas: generan más lodos (hidróxidos metálicos), introducen aluminio o hierro residual al efluente, y consumen alcalinidad del agua (a veces requieren ajustar pH con sosa cáustica).",
        ],
        list: {
          title: "Cuándo elegir coagulante inorgánico:",
          items: [
            "Aguas con TSS (sólidos suspendidos) >500 mg/L",
            "Efluentes industriales con turbidez visible (>50 NTU)",
            "Plantas con tolerancia a generación de lodos (espacio para deshidratación)",
            "Sistemas que descargan a drenaje municipal donde aluminio residual no es problema",
            "Operaciones que priorizan costo operativo bajo",
          ],
        },
      },
      {
        heading: "Coagulantes orgánicos: qué son y cuándo usarlos",
        paragraphs: [
          "Los coagulantes orgánicos catiónicos son polímeros sintéticos: polyDADMAC (polidialildimetilamonio), poliaminas, o polielectrolitos catiónicos de alta densidad de carga. A diferencia de los inorgánicos, no generan precipitados metálicos — actúan formando puentes moleculares directos entre las partículas.",
          "Sus ventajas: no aumentan el contenido de metales en el efluente, generan 30-50% menos lodos, funcionan a pH neutro sin ajuste, y dosis menores (10-100 ppm vs 50-300 ppm de los inorgánicos).",
          "Sus desventajas: costo por kg significativamente mayor (3-5x), sensibles a overdose (inversión de carga si te pasas), y menos efectivos contra turbidez muy alta o sólidos gruesos sin un coagulante inorgánico como apoyo previo.",
        ],
        list: {
          title: "Cuándo elegir coagulante orgánico:",
          items: [
            "Plantas con descarga directa a cuerpo de agua sensible (ríos, lagos)",
            "Operaciones que reúsan el agua tratada (necesitan baja salinidad y metales)",
            "Efluentes con alta carga orgánica disuelta o emulsiones aceite-agua",
            "Industrias con regulación estricta de aluminio/hierro residual",
            "Plantas con poco espacio para manejo de lodos",
          ],
        },
      },
      {
        heading: "Combinación: lo que hacen las plantas optimizadas",
        paragraphs: [
          "En la práctica, las PTAR industriales más eficientes en México combinan ambos tipos. Una secuencia típica es: dosis baja de coagulante inorgánico (PAC) para neutralizar la turbidez gruesa, seguida de un polímero orgánico catiónico para formar flóculos compactos y, finalmente, un floculante aniónico (poliacrilamida) de alto peso molecular para aglomerar y sedimentar.",
          "Esta combinación reduce el costo total 20-40% comparado con usar un solo tipo de coagulante en altas dosis, y produce un efluente de calidad superior con menos lodos.",
        ],
      },
      {
        heading: "Cómo determinar el coagulante correcto: la Prueba de Jarras",
        paragraphs: [
          "No hay forma de saber con certeza qué coagulante (o combinación) funciona mejor para tu efluente sin hacer una Prueba de Jarras (Jar Test) con muestra real. Este ensayo de laboratorio prueba 3-6 coagulantes a distintas dosis y mide turbidez residual, sólidos sedimentables y pH del clarificado.",
          "En Trevigo realizamos Jar Test sin costo para clientes nuevos y existentes. El proceso toma 2-3 días e identifica el coagulante óptimo, la dosis correcta y el pH de trabajo antes de hacer cualquier ajuste en planta.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto coagulante necesito por m³ de agua tratada?",
        a: "Depende totalmente del efluente. Como referencia: aguas con TSS bajo (50-200 mg/L) requieren 20-50 ppm de PAC; aguas con TSS medio-alto (500-2,000 mg/L) requieren 100-300 ppm. Los coagulantes orgánicos típicamente operan en 10-100 ppm. La única forma de tener la dosis exacta es con Jar Test.",
      },
      {
        q: "¿El policloruro de aluminio (PAC) es lo mismo que el sulfato de aluminio?",
        a: "No. El PAC tiene mayor carga catiónica activa por unidad de masa, opera en un rango de pH más amplio, genera menos lodos y consume menos alcalinidad. Cuesta más por kg pero suele ser más económico por m³ tratado. El sulfato de aluminio sigue usándose por su bajo costo en plantas grandes con tolerancia a más lodos.",
      },
      {
        q: "¿Los coagulantes orgánicos son seguros para descarga ambiental?",
        a: "Los polielectrolitos modernos son biodegradables y no se acumulan en el ambiente. Sin embargo, sobredosificarlos puede afectar organismos acuáticos por su alta carga. Siempre usar dosis óptima determinada por Jar Test es la práctica correcta.",
      },
      {
        q: "¿Qué pasa si sobredosifico el coagulante?",
        a: "Inversión de carga: las partículas vuelven a quedar con carga positiva (en lugar de neutralizadas) y se desestabilizan. Visualmente verás que el agua queda turbia y no flocula. La solución es reducir dosis y/o agregar floculante aniónico. Es el error más común en operadores nuevos de PTAR.",
      },
    ],
    relatedProducts: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "coagulante-alta-carga-cationica",
      "floculante-anionico-alto-peso",
      "poliacrilamida-phpa",
    ],
    cta: {
      title: "¿Quieres optimizar tu PTAR?",
      description:
        "Realizamos Prueba de Jarras sin costo con muestra de tu efluente para determinar el coagulante óptimo, dosis exacta y ahorro proyectado en químicos.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 10. NOM-001-SEMARNAT 2026: CHECKLIST DE CUMPLIMIENTO
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "nom-001-semarnat-cumplimiento-checklist",
    title: "NOM-001-SEMARNAT 2021: guía completa de cumplimiento para plantas industriales",
    metaTitle: "NOM-001-SEMARNAT 2021: Checklist de Cumplimiento",
    metaDescription:
      "Guía completa de cumplimiento de la NOM-001-SEMARNAT-2021 para descargas industriales en México: parámetros, límites, checklist y consecuencias del incumplimiento.",
    excerpt:
      "La NOM-001-SEMARNAT-2021 regula todas las descargas de aguas residuales a cuerpos nacionales en México. Cumplirla no es opcional: las multas por incumplimiento pueden suspender tu operación. Esta guía te da la checklist completa para garantizar conformidad.",
    category: "Cumplimiento Normativo",
    readingTime: "10 min",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    keywords: [
      "NOM-001-SEMARNAT-2021",
      "cumplimiento descargas aguas residuales",
      "limite descarga industrial mexico",
      "checklist NOM-001",
      "PROFEPA descarga industrial",
      "SEMARNAT descarga industrial",
    ],
    intro:
      "La NOM-001-SEMARNAT-2021 entró en vigor en 2023 reemplazando a la histórica NOM-001-ECOL-1996. Es la norma rectora para descargas de aguas residuales a cuerpos receptores nacionales (ríos, embalses, suelo, costa) y aplica a todas las plantas industriales en México. Su cumplimiento es supervisado por PROFEPA mediante inspecciones aleatorias y reportes obligatorios de la planta misma. Esta guía resume los parámetros, límites y acciones requeridas para garantizar conformidad.",
    sections: [
      {
        heading: "Qué regula la NOM-001-SEMARNAT-2021",
        paragraphs: [
          "La norma establece los límites máximos permisibles de contaminantes en descargas de aguas residuales en cuerpos receptores propiedad de la Nación. Aplica tanto a descargas industriales como a tratamiento municipal cuando éste vierte a un cuerpo receptor.",
          "Los parámetros regulados se dividen en cinco grupos: (1) contaminantes básicos, (2) metales pesados, (3) cianuros, (4) microbiológicos, y (5) toxicológicos. Cada cuerpo receptor (río, embalse, suelo, costa, drenaje urbano) tiene límites distintos según su uso y capacidad asimilativa.",
        ],
      },
      {
        heading: "Parámetros básicos y límites típicos",
        paragraphs: [
          "Para una descarga típica industrial a río o embalse, los parámetros básicos son:",
        ],
        list: {
          items: [
            "DBO5 (Demanda Bioquímica de Oxígeno): 30-75 mg/L según cuerpo receptor",
            "DQO (Demanda Química de Oxígeno): 75-200 mg/L",
            "Sólidos Suspendidos Totales (SST): 30-75 mg/L",
            "Grasas y aceites: 15-25 mg/L",
            "Fósforo total: 5-15 mg/L (más estricto cerca de embalses)",
            "Nitrógeno total: 15-40 mg/L",
            "pH: 6.0-9.0",
            "Temperatura: máximo 35-40°C",
          ],
        },
      },
      {
        heading: "Checklist de cumplimiento para tu planta",
        paragraphs: [
          "Si tu planta industrial descarga aguas residuales a cuerpo nacional o a drenaje municipal con tratamiento, este es el orden lógico de cumplimiento:",
        ],
        list: {
          items: [
            "1. Tener permiso de descarga vigente registrado en CONAGUA (REPDA)",
            "2. Caracterización del efluente real con laboratorio acreditado (no estimación)",
            "3. Comparar resultados de caracterización vs límites de tu cuerpo receptor",
            "4. Si hay parámetros fuera de norma, implementar tratamiento físico-químico (coagulación-floculación-sedimentación) y/o biológico (lodos activados)",
            "5. Análisis mensual o trimestral según volumen — laboratorio acreditado",
            "6. Reportes a CONAGUA y SEMARNAT en los formatos oficiales",
            "7. Bitácora de operación de la PTAR (firma del operador y supervisor)",
            "8. Disposición autorizada de lodos generados (NOM-052-SEMARNAT)",
            "9. Auditoría interna anual + capacitación del personal operador",
          ],
        },
      },
      {
        heading: "Consecuencias del incumplimiento",
        paragraphs: [
          "PROFEPA y CONAGUA tienen facultades de inspección sin previo aviso. Cuando detectan incumplimiento, las consecuencias escalan según gravedad:",
        ],
        list: {
          items: [
            "Multa administrativa: desde 50 hasta 50,000 UMAs (~$5,400 hasta $5.4 millones MXN)",
            "Recargo del 10-20% en el cobro de derechos de agua según la Ley Federal de Derechos",
            "Clausura temporal o permanente de la descarga (medida de emergencia)",
            "Suspensión del título de concesión de agua para la planta",
            "En casos graves con afectación a salud o ambiente: responsabilidad penal del Director General y/o responsable técnico",
          ],
        },
      },
      {
        heading: "Cómo Trevigo apoya el cumplimiento",
        paragraphs: [
          "Industrias Trevigo provee los químicos necesarios para tratamiento físico-químico de aguas industriales (coagulantes, floculantes, poliacrilamidas, microbicidas) y asesoría técnica para diagnosticar tu planta. Nuestro proceso para clientes nuevos incluye:",
          "Visita técnica sin costo, Prueba de Jarras con muestra real, diseño de dosificación, capacitación del operador y soporte post-arranque. Para plantas con incumplimiento detectado, nuestro equipo puede acompañarte en el proceso de regularización con CONAGUA.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuáles son los parámetros más fáciles de incumplir en industria?",
        a: "Los más frecuentes son: grasas y aceites (industria alimenticia, automotriz, metalmecánica), DQO/DBO (alimenticia, papel), metales pesados como zinc y plomo (galvanizado, fosfatado, electrodepósito), y sólidos suspendidos (manufactura general, lavanderías).",
      },
      {
        q: "¿Cada cuánto tengo que hacer análisis del efluente?",
        a: "Depende del volumen de descarga. Plantas con >100 L/s: análisis mensual. Plantas con 10-100 L/s: análisis trimestral. Plantas con <10 L/s: semestral. Pero PROFEPA puede solicitar análisis adicionales en cualquier momento durante una inspección.",
      },
      {
        q: "¿La NOM-001 aplica si descargo a drenaje municipal?",
        a: "Para descargas a drenaje municipal aplica la NOM-002-SEMARNAT-1996, no la NOM-001. Sin embargo, muchos municipios exigen que también cumplas con la NOM-001 como condición para autorizar la conexión. Si tu municipio no tiene PTAR municipal y descarga al ambiente, la NOM-001 te aplica indirectamente.",
      },
      {
        q: "¿Qué laboratorio debo usar para los análisis?",
        a: "Únicamente laboratorios acreditados por la Entidad Mexicana de Acreditación (EMA) bajo la ISO/IEC 17025. Los resultados de laboratorios no acreditados no son válidos para reportes oficiales y pueden invalidar tu cumplimiento ante PROFEPA.",
      },
    ],
    relatedProducts: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "floculante-anionico-alto-peso",
      "poliacrilamida-phpa",
      "microbicida-amplio-espectro",
      "inhibidor-oxigeno-calderas",
    ],
    cta: {
      title: "¿Tu planta cumple con NOM-001-SEMARNAT-2021?",
      description:
        "Diagnóstico técnico sin costo: revisamos tus análisis recientes, identificamos brechas y proponemos el tratamiento químico para cumplimiento. Visita en planta incluida.",
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 11. PRUEBA DE JARRAS (JAR TEST): PROTOCOLO COMPLETO
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "prueba-de-jarras-jar-test-protocolo",
    title: "Prueba de jarras (Jar Test): protocolo paso a paso para optimizar coagulación",
    metaTitle: "Cómo Hacer una Prueba de Jarras: Protocolo",
    metaDescription:
      "Protocolo completo de jar test: velocidades de agitación, tiempos, dosis y cómo leer resultados para elegir coagulante y pH óptimos en tu planta.",
    excerpt:
      "La Prueba de Jarras (Jar Test) es el ensayo de laboratorio más importante en tratamiento de aguas. Permite determinar el coagulante correcto, la dosis exacta y el pH óptimo antes de hacer cambios en planta — ahorrando semanas de ensayo-error.",
    category: "Tratamiento de Aguas",
    readingTime: "8 min",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    keywords: [
      "prueba de jarras",
      "jar test protocolo",
      "test de jarras tratamiento agua",
      "dosis optima coagulante",
      "ensayo coagulacion floculacion",
      "jar test PTAR",
    ],
    intro:
      "La Prueba de Jarras (Jar Test en inglés) es un ensayo de laboratorio que simula el proceso de coagulación-floculación a escala pequeña. Es la herramienta fundamental de cualquier ingeniero de procesos para decidir qué coagulante usar, en qué dosis y a qué pH, antes de hacer cualquier ajuste en una planta real de tratamiento de aguas residuales. Esta guía detalla el protocolo paso a paso y cómo interpretar los resultados.",
    sections: [
      {
        heading: "Qué necesitas para hacer una Prueba de Jarras",
        paragraphs: [
          "El equipo básico incluye un floculador de jarras (típicamente 4-6 vasos de precipitado de 1 L con agitadores sincronizados a velocidad variable), una muestra fresca del efluente a tratar (mínimo 5 litros, refrigerada si han pasado más de 24 horas), los coagulantes y floculantes candidatos a evaluar, y equipo de medición: turbidímetro, pH-metro, conductivímetro y, opcionalmente, balanza analítica.",
          "También necesitas pipetas calibradas para dosificar los coagulantes a las jarras y un cronómetro para controlar los tiempos exactos del ensayo.",
        ],
      },
      {
        heading: "Protocolo paso a paso",
        paragraphs: [
          "El protocolo estándar de un Jar Test sigue esta secuencia:",
        ],
        list: {
          items: [
            "1. Caracterización inicial: medir pH, conductividad, temperatura y turbidez de la muestra original",
            "2. Llenar 4-6 jarras con 1 L cada una de la misma muestra homogeneizada",
            "3. Si la prueba evalúa dosis: aplicar dosis crecientes del mismo coagulante (ej. 20, 50, 100, 150, 200 ppm)",
            "4. Si la prueba evalúa coagulantes distintos: aplicar misma dosis nominal de cada coagulante candidato",
            "5. Agitación rápida: 1 minuto a 100-150 rpm para dispersión del coagulante",
            "6. Agitación lenta: 15-20 minutos a 30-40 rpm para favorecer floculación",
            "7. Sedimentación: detener agitación y dejar reposar 20-30 minutos sin perturbar",
            "8. Toma de muestra del sobrenadante (~2 cm bajo la superficie) y medir turbidez residual",
            "9. Registrar pH final, observar tamaño de flóculo y velocidad de sedimentación",
          ],
        },
      },
      {
        heading: "Cómo interpretar los resultados",
        paragraphs: [
          "El coagulante óptimo es el que produce la menor turbidez residual con la menor dosis posible. Pero también importa cómo se ve el proceso visualmente:",
        ],
        list: {
          items: [
            "Flóculos grandes (3-5 mm) que sedimentan rápido = buena coagulación",
            "Flóculos pequeños y dispersos que no sedimentan = dosis insuficiente o coagulante incorrecto",
            "Agua turbia sin flóculos visibles = sobredosis (inversión de carga) o pH fuera de rango",
            "Buena claridad pero flóculos muy ligeros que flotan = típico de aguas con alta carga orgánica, considerar coagulante orgánico",
          ],
        },
      },
      {
        heading: "Ajustes avanzados: pH y floculante",
        paragraphs: [
          "Una vez identificado el coagulante y dosis base, vale la pena repetir el Jar Test ajustando el pH inicial de las jarras (con sosa cáustica o ácido sulfúrico al 10%) para encontrar el pH óptimo de coagulación. Para PAC, el rango óptimo suele ser 6.5-8.0; para sulfato de aluminio 5.5-7.5; para cloruro férrico 4.5-6.5.",
          "Después del coagulante, agregar un floculante aniónico de alto peso molecular (poliacrilamida) en dosis bajas (0.5-2 ppm) puede mejorar dramáticamente la sedimentación. Hacer una segunda ronda de jarras con el coagulante óptimo + distintas dosis de floculante para encontrar la combinación ideal.",
        ],
      },
      {
        heading: "Cómo se usa el resultado en planta",
        paragraphs: [
          "Una vez identificada la dosis óptima en jarras, hay que ajustarla al sistema real. Como regla general, la dosis en planta suele ser 10-20% mayor que la óptima en jarras por turbulencia y tiempos de contacto distintos. Empieza con la dosis del Jar Test, monitorea la turbidez del efluente clarificado diariamente y ajusta gradualmente.",
          "El Jar Test debe repetirse cada 3-6 meses o cuando el efluente cambie significativamente (nuevo producto en la planta, cambio de proveedor de químicos, variación estacional). Cambios en la composición del efluente pueden requerir ajustes mayores que un simple cambio de dosis.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta hacer una Prueba de Jarras?",
        a: "Un Jar Test completo en laboratorio externo cuesta entre $2,500 y $8,000 MXN dependiendo de los coagulantes evaluados y los análisis post-jarras (DBO, DQO, metales, etc.). En Trevigo lo hacemos sin costo para clientes activos y prospectos con potencial de compra de químicos.",
      },
      {
        q: "¿Puedo hacer el Jar Test yo mismo en mi planta?",
        a: "Sí, si tienes el equipo (floculador, turbidímetro, pH-metro). El equipo de floculador cuesta $25,000-$80,000 MXN. La inversión se justifica si tu planta procesa volúmenes altos o tiene efluentes variables que requieren ajustes frecuentes. Para empezar, recomendamos hacerlo con asesoría técnica externa hasta que el equipo interno domine el protocolo.",
      },
      {
        q: "¿Cuántas veces al año debo repetir el Jar Test?",
        a: "Mínimo cada 6 meses como mantenimiento preventivo. Adicionalmente, cada vez que: (1) cambies de proveedor de químicos, (2) ingrese un nuevo producto a la planta que afecte el efluente, (3) cambien estaciones del año con efectos en temperatura o flujo, o (4) detectes degradación de la calidad del clarificado.",
      },
      {
        q: "¿Qué hago si ningún coagulante de los probados funciona?",
        a: "Probablemente tu efluente requiere pretratamiento adicional antes de coagulación. Causas típicas: pH muy bajo o muy alto (ajustar primero), presencia de aceites/grasas emulsionadas (separar con DAF antes), exceso de surfactantes (tratamiento biológico o filtración con carbón activado), o temperatura demasiado alta (>40°C interfiere con coagulación).",
      },
    ],
    relatedProducts: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "coagulante-alta-carga-cationica",
      "floculante-anionico-alto-peso",
      "poliacrilamida-phpa",
      "poliacrilamida-baja-densidad",
    ],
    cta: {
      title: "¿Quieres una Prueba de Jarras sin costo para tu efluente?",
      description:
        "Trae 5 litros de muestra a nuestro laboratorio en San Nicolás. Te entregamos el reporte completo con coagulante recomendado, dosis óptima y ahorro proyectado en 5 días hábiles.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 12 — Sosa cáustica al 50% vs escamas (PRODUCTO — Blanca)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "sosa-caustica-50-vs-escamas-industrial",
    authorSlug: "blanca-garza",
    title:
      "Sosa cáustica al 50% vs en escamas: cuál conviene para tu planta industrial",
    metaTitle: "Sosa Cáustica al 50% vs Escamas: Guía de Compra Industrial",
    metaDescription:
      "Diferencias entre sosa cáustica líquida al 50% y en escamas (NaOH sólido): logística, costo total, dosificación y aplicaciones industriales. Proveedor en Monterrey.",
    excerpt:
      "Sosa al 50% líquida y sosa en escamas son el mismo químico en presentaciones distintas — pero la elección impacta directamente en costo logístico, riesgos de manejo y eficiencia operativa. Cuándo conviene cada una.",
    category: "Materias Primas",
    readingTime: "7 min",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
    keywords: [
      "sosa caustica al 50",
      "sosa caustica escamas",
      "hidroxido de sodio industrial",
      "naoh liquido",
      "sosa caustica proveedor mexico",
      "sosa caustica precio",
    ],
    intro:
      "La sosa cáustica (hidróxido de sodio, NaOH) es una de las materias primas más consumidas en la industria mexicana: ajuste de pH en PTAR, formulación de detergentes, neutralización de ácidos, regeneración de resinas y mil aplicaciones más. Una pregunta recurrente de los compradores industriales es: ¿conviene comprar sosa al 50% líquida o en escamas sólidas? Ambas son el mismo compuesto químico, pero la decisión correcta depende del volumen de consumo, infraestructura disponible y costos logísticos. En esta guía técnica comercial analizamos cuándo conviene cada una y cómo seleccionar la presentación correcta para tu planta.",
    sections: [
      {
        heading: "¿Qué es la sosa cáustica y por qué viene en dos presentaciones?",
        paragraphs: [
          "La sosa cáustica es hidróxido de sodio (NaOH) — una base fuerte que se produce industrialmente mediante electrólisis de salmuera (proceso cloro-soda). Es altamente higroscópica: absorbe humedad y CO₂ del aire rápidamente, formando una solución concentrada espontáneamente.",
          "Esta propiedad determina las dos presentaciones comerciales principales: (1) en escamas sólidas (NaOH 99% pureza) que requiere envasado hermético y disolución en planta, y (2) en solución líquida al 50% — una concentración estable que se entrega lista para usar. Ambas son química y técnicamente equivalentes una vez en uso; la diferencia está en la logística y costos operativos.",
        ],
      },
      {
        heading: "Sosa al 50%: ventajas y limitaciones",
        paragraphs: [
          "La sosa al 50% líquida es la presentación preferida por plantas con consumo medio-alto (>500 kg/mes) y dosificación continua. Sus ventajas:",
        ],
        list: {
          items: [
            "Dosificación directa con bomba — sin necesidad de disolver, ahorra tiempo de operación y reduce errores",
            "Manejo más seguro — no genera polvo aerosolizado al verter (el polvo de sosa en escamas es altamente corrosivo en ojos y vías respiratorias)",
            "Concentración estable y verificada — no hay variación por absorción de humedad",
            "Compatible con sistemas automatizados de tratamiento de aguas, CIP alimentario y procesos continuos",
            "Disolución exotérmica ya ocurrió en fábrica — no hay riesgo de calentamiento en planta",
          ],
        },
      },
      {
        heading: "Sosa en escamas: cuándo sigue siendo la mejor opción",
        paragraphs: [
          "La sosa en escamas tiene tres ventajas que la mantienen vigente en aplicaciones específicas: (1) el costo por kg de NaOH activo es menor (no pagas por agua), (2) no requiere tanque de almacenamiento — se guarda en sacos sellados ocupando menos volumen, y (3) permite preparar concentraciones específicas distintas al 50% según necesidad.",
          "Es la opción correcta para: talleres pequeños con consumo <300 kg/mes, plantas que necesitan formular soluciones a 10%, 25% u otra concentración específica, almacenes con espacio limitado, y aplicaciones intermitentes donde un tanque de líquido se contaminaría o cristalizaría por baja rotación.",
        ],
      },
      {
        heading: "Cálculo de costo total: el factor que muchos compradores ignoran",
        paragraphs: [
          "El comprador novato suele comparar precio por kilogramo (la escama gana ~30-40%). Pero el costo total del NaOH usado debe incluir: (1) costo del químico, (2) costo logístico (transporte de agua al comprar líquido), (3) costo de mano de obra para disolver escamas, (4) costo del riesgo (incidentes con sosa sólida son más graves que con líquida).",
          "Como regla práctica: si consumes >500 kg de NaOH activo al mes y tienes tanque + bomba, la sosa al 50% sale más barata en costo total. Si consumes <300 kg/mes y disuelves manualmente, las escamas siguen siendo más económicas. En el rango intermedio (300-500 kg/mes) depende del costo de mano de obra y disponibilidad de infraestructura.",
        ],
      },
      {
        heading: "Aplicaciones industriales más comunes para cada presentación",
        paragraphs: [
          "En nuestra experiencia atendiendo plantas en Nuevo León, las aplicaciones se distribuyen así:",
        ],
        list: {
          items: [
            "Sosa al 50% líquida: PTAR con dosificación continua, CIP alimentario, neutralización de efluentes ácidos, plantas de papel (proceso kraft), formulación de detergentes alcalinos industriales",
            "Sosa en escamas: talleres metalmecánicos pequeños, laboratorios, plantas con consumo intermitente, formulación de detergentes en lote por kilogramos, regeneración de resinas en sistemas pequeños",
            "Ambas: plantas con líneas múltiples, manufactura general — depende del volumen específico por área",
          ],
        },
      },
      {
        heading: "Seguridad y almacenamiento: lo que debes saber antes de comprar",
        paragraphs: [
          "La sosa cáustica — en cualquier presentación — es un químico corrosivo categoría 1 conforme NOM-018-STPS-2015. Causa quemaduras químicas graves por contacto y ceguera permanente si entra a los ojos. El manejo requiere capacitación previa, EPP completo (lentes de seguridad química, careta facial, guantes de neopreno largo, mandil PVC, zapato de seguridad) y procedimientos documentados.",
          "Almacenamiento: la sosa al 50% se almacena en tanques de polietileno de alta densidad, fibra de vidrio o acero inoxidable. No usar tanques de aluminio (reacción exotérmica que genera hidrógeno). Las escamas se almacenan en sus sacos originales sellados, en lugar fresco y seco lejos de ácidos y materiales orgánicos.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿La sosa al 50% se congela en invierno?",
        a: "Sí. La sosa al 50% empieza a cristalizar por debajo de 12°C. Para climas con inviernos fríos (norte de México en diciembre-febrero), se recomienda almacenar en interior climatizado o usar resistencia térmica en el tanque. En Nuevo León rara vez es un problema; en climas más fríos sí. Como alternativa existe sosa al 32% que cristaliza por debajo de -10°C.",
      },
      {
        q: "¿Cuánto tiempo dura la sosa cáustica almacenada?",
        a: "En condiciones adecuadas: la sosa al 50% líquida en tanque sellado se mantiene estable por 1-2 años. Las escamas en saco sellado duran 2-3 años. La principal causa de degradación es la absorción de CO₂ del aire, que convierte parte del NaOH en carbonato de sodio (Na₂CO₃) — esto reduce la concentración efectiva pero no inutiliza el producto.",
      },
      {
        q: "¿Qué presentaciones de sosa cáustica vende Trevigo?",
        a: "Manejamos sosa cáustica al 50% en tambo de 250 kg, contenedor IBC de 1,300 kg y autotanque a granel para grandes consumidores. También distribuimos sosa cáustica en escamas en saco de 25 kg con calidad técnica industrial. Entregamos en 48 horas en el Área Metropolitana de Monterrey con SDS y COA actualizados.",
      },
    ],
    relatedProducts: ["sosa-al-50", "sosa-caustica-escamas"],
    cta: {
      title: "¿Necesitas sosa cáustica para tu planta?",
      description:
        "Cotizamos sosa al 50% líquida y en escamas con entrega en 48 h en N.L. Incluye SDS, COA y asesoría técnica para seleccionar la presentación óptima según tu consumo.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 13 — Pasivado de acero inoxidable (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "pasivado-acero-inoxidable-astm-a967",
    authorSlug: "nohemi-cervantes",
    title:
      "Pasivado de acero inoxidable: protocolo ASTM A967 y selección entre ácido nítrico y cítrico",
    metaTitle: "Pasivado de Acero Inoxidable ASTM A967: Guía Completa",
    metaDescription:
      "Cómo pasivar acero inoxidable conforme ASTM A967 (método nítrico vs cítrico). Protocolo paso a paso, validación con prueba de ferroxyl y casos de uso industrial.",
    excerpt:
      "El pasivado no es opcional: el acero inoxidable recién maquinado o soldado tiene hierro libre incrustado que oxida en semanas. Te explicamos cuándo aplicar el método Nitric vs Citric de ASTM A967 y cómo validar el resultado.",
    category: "Tratamiento de Metales",
    readingTime: "9 min",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
    keywords: [
      "pasivado acero inoxidable",
      "ASTM A967",
      "pasivado con acido citrico",
      "pasivado con acido nitrico",
      "prueba ferroxyl",
      "passivation stainless steel mexico",
    ],
    intro:
      "Una creencia común en talleres metalmecánicos es que el acero inoxidable 'no se oxida'. La realidad técnica es distinta: el acero inoxidable resiste corrosión gracias a una capa pasiva delgadísima de óxido de cromo (3-5 nanómetros) que se forma espontáneamente en su superficie. Durante maquinado, soldadura o estampado esa capa se daña y queda hierro libre incrustado — que sí oxida visiblemente en cuestión de días o semanas. El pasivado químico restaura la capa pasiva y elimina el hierro libre. En esta guía explicamos el protocolo conforme ASTM A967, cuándo elegir nítrico vs cítrico, y cómo validar que el pasivado quedó correcto.",
    sections: [
      {
        heading: "¿Qué es el pasivado y por qué es necesario?",
        paragraphs: [
          "El pasivado es un tratamiento químico que remueve hierro libre y otros contaminantes ferrosos de la superficie del acero inoxidable, permitiendo que la capa natural de óxido de cromo (Cr₂O₃) se regenere uniformemente. El resultado: máxima resistencia a corrosión bajo condiciones de servicio.",
          "Sin pasivado, las piezas de inoxidable recién mecanizadas, cortadas, soldadas o estampadas pueden mostrar puntos de óxido en 7-30 días — sobre todo en ambientes húmedos o con presencia de cloruros. En aplicaciones críticas (industria alimentaria, farmacéutica, médica, química) el pasivado no es opcional: es requisito normativo bajo FDA, FSMA, BPM y GMP.",
        ],
      },
      {
        heading: "ASTM A967: la norma estándar de pasivado en industria",
        paragraphs: [
          "ASTM A967 'Standard Specification for Chemical Passivation Treatments for Stainless Steel Parts' es la norma de referencia mundial para pasivado químico. Define 8 métodos numerados (Nitric 1 a 5, Citric 1 a 3) con parámetros específicos de concentración, temperatura, tiempo y validación.",
          "Los métodos Nitric usan ácido nítrico (HNO₃) en concentraciones del 20-50% y temperaturas de 21-66°C, dependiendo del grado de acero. Los métodos Citric usan ácido cítrico al 4-10% a 49-71°C — son más recientes y se desarrollaron como alternativa segura al nítrico para industria alimentaria y aplicaciones donde los vapores NOₓ son problemáticos.",
        ],
      },
      {
        heading: "Nitric vs Citric: cómo elegir el método correcto",
        paragraphs: [
          "La selección entre ácido nítrico y cítrico depende de tres factores: tipo de acero inoxidable, exigencia normativa de la aplicación, y consideraciones de seguridad operativa.",
        ],
        list: {
          items: [
            "Usar Nitric: acero inoxidable austenítico (304, 316, 321) en aplicaciones aeroespaciales, defensa y química industrial pesada. AMS 2700 (aeroespacial) y MIL-STD-753 lo requieren específicamente",
            "Usar Citric: industria alimentaria, farmacéutica, lácteos, bebidas, cosmética y dispositivos médicos. El cítrico no genera vapores NOₓ tóxicos, es biodegradable y compatible con CIP",
            "Cualquiera de los dos: aplicaciones generales metalmecánicas, hardware de inoxidable, tanques de almacenamiento. El cítrico cuesta más pero su manejo es significativamente más seguro",
            "Acero martensítico (410, 420): se prefiere nítrico — el cítrico puede dar resultados inconsistentes",
            "Acero ferrítico (430): nítrico estándar; cítrico funciona con tiempo y temperatura mayores",
          ],
        },
      },
      {
        heading: "Protocolo paso a paso para pasivado correcto",
        paragraphs: [
          "Un pasivado correcto sigue cinco pasos secuenciales. Saltarse alguno es la causa #1 de pasivados fallidos:",
        ],
        list: {
          items: [
            "1. Desengrase alcalino — eliminar aceites de corte, grasas y contaminantes orgánicos. Sin esta etapa, el ácido no contacta uniformemente con la superficie. Usar desengrasante alcalino 5-10% a 60-70°C, 10-20 minutos",
            "2. Enjuague con agua de calidad — agua suave o desmineralizada para eliminar residuos alcalinos. Mínimo 2 enjuagues",
            "3. Pasivado químico — inmersión en el ácido seleccionado conforme método ASTM A967. Tiempo y temperatura según método específico (Citric 4: 49-71°C, 20-30 min; Nitric 2: 21-32°C, 30 min)",
            "4. Enjuague con agua desmineralizada — eliminar residuos de pasivador. Crítico para evitar manchas y depósitos secos",
            "5. Secado con aire limpio o agua DI a alta temperatura — superficie seca uniformemente, sin gotas que dejen mancha",
          ],
        },
      },
      {
        heading: "Validación: pruebas de aceptación post-pasivado",
        paragraphs: [
          "El pasivado no es completo hasta validar el resultado. La norma ASTM A967 acepta varias pruebas; las más usadas en industria son:",
        ],
        list: {
          items: [
            "Prueba de ferroxyl (Practice A) — gota de solución de ferricianuro de potasio sobre la pieza. Si aparece un punto azul, hay hierro libre residual y el pasivado falló. Es la prueba más rápida (minutos) y económica",
            "Prueba de agua a alta humedad (Practice B) — 100% humedad relativa, 35°C, 24 horas. La pieza no debe mostrar manchas de óxido. Más representativa de condiciones reales que ferroxyl",
            "Prueba de inmersión en agua destilada (Practice C) — sumergir 24-72 horas, observar aparición de manchas. Para aplicaciones críticas",
            "Prueba de niebla salina ASTM B117 (Practice D) — 8 horas mínimo. Para industria aeroespacial y defensa",
            "Prueba CASS (Practice E) — niebla salina acelerada con cobre. La más severa, para aplicaciones marítimas y defensa",
          ],
        },
      },
      {
        heading: "Errores comunes que arruinan un pasivado",
        paragraphs: [
          "En nuestras visitas técnicas a clientes encontramos repetidamente los mismos errores. Los más frecuentes: (1) saltarse el desengrase previo — el ácido no penetra contaminación orgánica, (2) usar agua de la llave en enjuague final — los cloruros del agua municipal pueden manchar el inoxidable pasivado, (3) tiempo de inmersión insuficiente (especialmente con cítrico, que es más lento que nítrico), (4) mezclar piezas de diferentes grados de acero en el mismo baño sin verificar compatibilidad, y (5) no validar resultado — el cliente entrega piezas que se oxidarán en 2 semanas.",
          "La buena práctica es: un protocolo escrito, registro por lote, prueba de ferroxyl en panel testigo de cada lote, y para aplicaciones críticas validación con cliente final usando paneles que aprueben las pruebas requeridas.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo pasivar acero inoxidable con vinagre o limpiador de cocina?",
        a: "No para uso industrial. El vinagre contiene ácido acético al 4-7% — concentración insuficiente para remover hierro libre incrustado. Los limpiadores comerciales contienen surfactantes y aditivos que pueden contaminar la superficie. Para pasivado conforme ASTM A967 se requiere ácido nítrico o ácido cítrico de grado técnico industrial con control de concentración, temperatura y tiempo.",
      },
      {
        q: "¿Cada cuánto debo repasivar mis tanques de acero inoxidable?",
        a: "Depende del servicio: tanques de proceso alimentario suelen repasivarse cada 6-12 meses como parte de validación. Tanques con servicio neutro y baja humedad pueden durar 3-5 años. Tanques expuestos a cloruros o ácidos requieren repasivado más frecuente. Si observas manchas de óxido o picaduras, es momento de repasivar. La prueba de ferroxyl semestral es buena práctica preventiva.",
      },
      {
        q: "¿Trevigo ofrece servicio de pasivado en sitio?",
        a: "Sí. Hacemos pasivado en planta del cliente para tanques fijos, tuberías y equipos que no pueden moverse. Incluye desengrase previo, pasivado con método ASTM A967 según especificación, validación con prueba de ferroxyl y certificado escrito del proceso. También distribuimos los químicos para clientes que pasivan internamente.",
      },
    ],
    relatedProducts: [
      "desoxidante-acero-inoxidable",
      "acido-nitrico",
      "acido-citrico",
      "limpiador-neutro-pasivado",
    ],
    cta: {
      title: "¿Necesitas pasivar piezas o equipos de acero inoxidable?",
      description:
        "Distribuimos químicos de pasivado conforme ASTM A967 (método Nitric y Citric) y ofrecemos servicio en planta del cliente. Validación incluida con prueba de ferroxyl.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 14 — Aceite hidráulico ISO VG (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "aceite-hidraulico-iso-vg-32-46-68-seleccion",
    authorSlug: "nohemi-cervantes",
    title:
      "Aceite hidráulico ISO VG 32, 46 o 68: cómo seleccionar la viscosidad correcta",
    metaTitle: "Aceite ISO VG 32 vs 46 vs 68: ¿Cuál Elegir? (2026)",
    metaDescription:
      "Tabla comparativa ISO VG 32, 46 y 68: presión, temperatura y tipo de bomba. Elige la viscosidad correcta en 2 minutos y evita fallas en tu sistema hidráulico.",
    excerpt:
      "ISO VG 46 es la viscosidad más universal para sistemas hidráulicos industriales — pero hay casos donde 32 o 68 son la elección correcta. Te explicamos cómo decidirlo según presión, temperatura y bomba.",
    category: "Lubricantes",
    readingTime: "8 min",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
    keywords: [
      "aceite hidraulico iso vg 46",
      "aceite hidraulico iso vg 32",
      "aceite hidraulico iso vg 68",
      "seleccion aceite hidraulico",
      "hm vs hv hidraulico",
      "viscosidad aceite hidraulico",
    ],
    intro:
      "Un sistema hidráulico mal lubricado puede acortar la vida útil de la bomba de 20,000 horas a menos de 5,000 — quintuplicando el costo de mantenimiento. La causa #1 de fallas prematuras en hidráulicos industriales es usar la viscosidad incorrecta de aceite. Esta guía técnica explica cómo seleccionar entre ISO VG 32, 46 y 68, cuándo necesitas variantes especializadas (HM, HV, HE), y los errores más comunes que vemos en visitas técnicas a plantas en el norte de México.",
    sections: [
      {
        heading: "¿Qué significa ISO VG y por qué es importante?",
        paragraphs: [
          "ISO VG (Viscosity Grade) es la norma ISO 3448 que estandariza la viscosidad cinemática de aceites industriales a 40°C. El número indica la viscosidad nominal en centistokes (cSt): ISO VG 32 significa ~32 cSt @ 40°C, ISO VG 46 significa ~46 cSt, ISO VG 68 ~68 cSt.",
          "La viscosidad del aceite es crítica en hidráulicos porque determina: (1) la capacidad de formar película lubricante en superficies con presión, (2) la eficiencia volumétrica de la bomba (pérdidas internas), (3) la generación de calor por fricción interna, y (4) la respuesta dinámica del sistema (tiempo de actuación de cilindros y válvulas).",
        ],
      },
      {
        heading: "Cómo elegir entre ISO VG 32, 46 y 68",
        paragraphs: [
          "La selección depende principalmente de la temperatura operativa, la presión del sistema y el tipo de bomba. Como guía técnica:",
        ],
        list: {
          items: [
            "ISO VG 32: para sistemas hidráulicos en clima frío (operación <30°C ambiente), baja presión (<140 bar), y sistemas con servoválvulas que requieren respuesta dinámica rápida. Común en maquinaria de plástico, prensas pequeñas y equipos de laboratorio",
            "ISO VG 46: la viscosidad más universal para industria. Sistemas estándar a temperatura ambiente moderada (30-60°C operativo), presión media (140-210 bar), bombas de paletas o engranajes. Cubre 70-80% de aplicaciones hidráulicas en plantas mexicanas",
            "ISO VG 68: para climas calientes (operación >40°C ambiente), alta presión (>210 bar), maquinaria pesada de alta carga, equipo móvil expuesto al sol, y aplicaciones con bombas de pistón axial que toleran viscosidad mayor. Necesario en prensas grandes, equipo de minería y construcción",
            "ISO VG 100+: aplicaciones muy específicas con cargas extremas y velocidades bajas — engranajes, no típicamente hidráulicos",
          ],
        },
      },
      {
        heading: "HM vs HV vs HE: variantes especializadas",
        paragraphs: [
          "Más allá del grado ISO VG, los aceites hidráulicos se clasifican por aditivos en familias funcionales. Las principales son:",
        ],
        list: {
          items: [
            "HM (Mineral con aditivos antidesgaste) — el estándar industrial. Aditivos zinc-fósforo para protección antidesgaste. Adecuado para sistemas estándar a presión media-alta",
            "HV (High Viscosity Index) — índice de viscosidad >140, viscosidad más estable en rangos amplios de temperatura. Para equipo móvil expuesto a variaciones día/noche, y aplicaciones con arranques en frío",
            "HE (Hydraulic Environmental / Biodegradable) — para equipos en zonas ambientalmente sensibles (forestal, marítimo, agrícola). Cumple normas OECD 301B de biodegradabilidad. Base de ésteres saturados",
            "HL (Hydraulic Lubricant) — sin aditivos antidesgaste. Solo para sistemas de muy baja presión (<70 bar). Cada vez menos usado",
            "HEES (Environmental Synthetic Ester) — variante de HE con base sintética. Excelente desempeño + biodegradable. Premium",
          ],
        },
      },
      {
        heading: "Errores comunes en selección de aceite hidráulico",
        paragraphs: [
          "Los errores que más vemos en visitas técnicas son cuatro, y cualquiera puede acortar significativamente la vida útil del sistema:",
          "(1) Usar la 'viscosidad que siempre se ha usado' sin verificar manual OEM — el fabricante de la bomba especifica viscosidad operativa óptima; ignorarlo causa cavitación o desgaste prematuro. (2) Mezclar marcas distintas sin verificar compatibilidad — diferentes paquetes de aditivos pueden reaccionar y formar lodos o precipitados. (3) No considerar temperatura real de operación — un sistema 'a 40°C ambiente' puede operar a 75°C internamente; ahí ISO VG 46 ya no es suficiente. (4) No cambiar aceite hasta que falla visible — el aceite degradado pierde aditivos antes que viscosidad y desgasta el sistema en silencio.",
        ],
      },
      {
        heading: "Análisis de aceite en uso: la práctica que ahorra millones",
        paragraphs: [
          "El análisis periódico del aceite hidráulico es la práctica de mantenimiento con mayor retorno de inversión en hidráulicos. Por 250-400 MXN por muestra, un laboratorio certificado entrega reporte con: viscosidad real, código de partículas ISO 4406 (contaminación), agua, TAN/TBN, espectrometría de elementos de desgaste (Fe, Cu, Cr, Pb, Si) y oxidación FTIR.",
          "Indicadores de alerta: cambio de viscosidad >10% del nominal indica oxidación o contaminación; código ISO 4406 superior a 22/20/17 indica filtración deficiente; agua >0.1% indica problema de empaques o respiraderos; partículas de Fe altas indican desgaste anormal. Cualquier alerta permite intervención antes de falla catastrófica. Recomendamos análisis cada 250-500 horas en equipos críticos y cada 1,000 horas en equipos estándar.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo cambiar de ISO VG 46 a ISO VG 68 sin drenar el sistema?",
        a: "No es recomendable. La mezcla resultante tendrá viscosidad intermedia variable según proporción exacta — perdiendo las propiedades de ambos. Adicionalmente, los paquetes de aditivos pueden ser incompatibles entre marcas. Para cambiar viscosidad: drenado completo, flush con aceite nuevo si el sistema mostró contaminación, y llenado con la nueva viscosidad. Mantener registro del cambio.",
      },
      {
        q: "¿Cada cuánto debo cambiar el aceite hidráulico?",
        a: "Por calendario: 4,000-8,000 horas de operación (1-2 años en uso continuo). La mejor práctica es por análisis de laboratorio — extiende intervalos en sistemas bien mantenidos y detecta problemas temprano en sistemas con desgaste. Cambio anticipado si: viscosidad cambia >10%, TAN aumenta >0.5 mg KOH/g, agua >0.1%, código ISO 4406 supera 22/20/17, o se detecta oxidación significativa por FTIR.",
      },
      {
        q: "¿Vale la pena pagar más por un aceite hidráulico sintético?",
        a: "Depende del valor del equipo. En equipos críticos (prensas industriales, inyectoras grandes, sistemas con servoválvulas), un sintético dura 3-5x más, opera mejor en temperaturas extremas y reduce desgaste — ROI positivo en 12-24 meses. En equipos estándar de baja exigencia (cargadores, equipos pequeños), el mineral HM sigue siendo más económico en costo total. Recomendamos sintético solo donde el caso técnico lo justifica.",
      },
    ],
    relatedProducts: ["aceite-hidraulico-iso-46", "aceite-hidraulico-premium"],
    cta: {
      title: "¿Necesitas asesoría técnica para tu sistema hidráulico?",
      description:
        "Ofrecemos análisis de aceite en uso con laboratorio certificado y recomendación técnica de viscosidad por equipo. Cotizamos aceites hidráulicos ISO VG 32-68 minerales y sintéticos.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 15 — Hipoclorito de sodio (PRODUCTO — Blanca)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "hipoclorito-sodio-industrial-tratamiento-aguas",
    authorSlug: "blanca-garza",
    title:
      "Hipoclorito de sodio industrial: usos, dosificación y compra para tratamiento de aguas",
    metaTitle: "Hipoclorito de Sodio: Dosis, Usos y Venta MX",
    metaDescription:
      "Guía de hipoclorito de sodio industrial: dosificación para tratamiento de aguas, almacenamiento seguro y venta por tambo o tote en Monterrey.",
    excerpt:
      "El hipoclorito de sodio es el desinfectante químico más usado en la industria mexicana. Te explicamos las concentraciones disponibles, dosificaciones típicas y cómo elegir entre granel y envasado para tu planta.",
    category: "Tratamiento de Aguas",
    readingTime: "7 min",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
    keywords: [
      "hipoclorito de sodio industrial",
      "naclo industrial",
      "hipoclorito tratamiento aguas",
      "cloro liquido industrial",
      "hipoclorito proveedor mexico",
      "hipoclorito de sodio 13",
    ],
    intro:
      "El hipoclorito de sodio (NaClO) es el químico desinfectante más versátil y económico del mercado industrial. Se usa para desinfección de agua potable, blanqueo en industria textil y papelera, oxidación de contaminantes en PTAR, control microbiológico en torres de enfriamiento y limpieza CIP en industria alimentaria. En esta guía técnica comercial analizamos las concentraciones disponibles, dosificaciones según aplicación, cuándo conviene granel vs envasado, y consideraciones críticas de almacenamiento y manejo.",
    sections: [
      {
        heading: "¿Qué es el hipoclorito de sodio y cómo se produce?",
        paragraphs: [
          "El hipoclorito de sodio es un compuesto químico de fórmula NaClO, comercializado en solución acuosa de color amarillo verdoso. Se produce industrialmente por reacción de cloro gas con solución de sosa cáustica: Cl₂ + 2NaOH → NaClO + NaCl + H₂O.",
          "La concentración comercial industrial estándar es 13% peso/volumen de cloro activo (130 g/L). El producto comercial 'cloro doméstico' (la marca Cloralex y similares) tiene 4-6%; el industrial concentrado puede llegar a 14-15%. La concentración determina el costo logístico (más concentrado = menos volumen de agua transportada) y la dosis requerida en aplicación.",
        ],
      },
      {
        heading: "Aplicaciones industriales más comunes",
        paragraphs: [
          "El hipoclorito de sodio es el insumo más versátil de tratamiento de aguas en industria. Las aplicaciones principales son:",
        ],
        list: {
          items: [
            "Desinfección de agua potable industrial — dosis típica 1-3 ppm de cloro residual libre. Cumple con NOM-127-SSA1 para agua potable",
            "Tratamiento terciario en PTAR — desinfección final antes de descarga o reúso. Dosis 3-10 ppm según calidad del efluente y norma aplicable (NOM-001-SEMARNAT-2021)",
            "Control microbiológico en torres de enfriamiento — choques periódicos a 5-15 ppm para prevenir biofouling y Legionella. Combinado con biocidas no-oxidantes",
            "Limpieza CIP en industria alimentaria — desinfección de tuberías, tanques y equipos. Dosis 100-200 ppm cloro libre, contacto 10-15 min",
            "Blanqueo en industria textil y papelera — dosis altas (1,000-3,000 ppm) para decolorar fibras",
            "Oxidación de contaminantes en PTAR — oxidación de cianuros, sulfuros, fenoles. Dosis estequiométrica + exceso de seguridad",
          ],
        },
      },
      {
        heading: "Concentraciones disponibles y selección",
        paragraphs: [
          "El hipoclorito de sodio se distribuye en varias concentraciones según el uso final:",
        ],
        list: {
          items: [
            "Hipoclorito al 13% industrial — el estándar para tratamiento de aguas y desinfección. Cloro activo 130 g/L. Es la presentación más usada en industria",
            "Hipoclorito al 6-8% comercial — para limpieza, sanitización y aplicaciones de bajo consumo. Más estable en almacenamiento prolongado",
            "Hipoclorito al 4-5% doméstico — productos terminados de marca (Cloralex y similares). NO usar en aplicaciones industriales por costo y trazabilidad",
            "Hipoclorito de calcio sólido al 65-70% — alternativa cuando se requiere larga vida útil de almacén o transporte sin restricciones de líquidos. Más caro por kg de cloro activo",
          ],
        },
      },
      {
        heading: "Dosificación correcta: el factor que muchos plantas ignoran",
        paragraphs: [
          "El error #1 en uso de hipoclorito industrial es subdosificar — el cloro residual no llega al nivel de protección microbiológica y se forman bacterias resistentes que requieren después choques masivos. El error #2 es sobredosificar — desperdicia químico, genera trihalometanos (THM) potencialmente cancerígenos, y consume alcalinidad del agua.",
          "La buena práctica es controlar el cloro residual libre con kit colorimétrico DPD (medición rápida en planta) o con sonda continua amperométrica para sistemas grandes. Mantener: 0.5-1.0 ppm en agua potable, 2-5 ppm en torres de enfriamiento durante operación normal con choques periódicos de 10-20 ppm, y 100-200 ppm en CIP alimentario con enjuague posterior obligatorio.",
        ],
      },
      {
        heading: "Almacenamiento y vida útil: lo que pierde el hipoclorito",
        paragraphs: [
          "El hipoclorito de sodio se degrada naturalmente — esa es su característica más problemática logísticamente. Factores que aceleran degradación: (1) temperatura — a 20°C la degradación es lenta (~1% por mes), a 40°C es 5-10x más rápida, (2) luz solar directa — descompone NaClO en sales sódicas inactivas, (3) presencia de metales pesados (Fe, Cu, Ni, Mn) — catalizan descomposición, (4) pH bajo — el hipoclorito se descompone en HClO menos estable.",
          "Mejores prácticas de almacenamiento: tanques de polietileno opaco o fibra de vidrio en interior climatizado o bajo techo (no sol directo), separado de ácidos (reacción peligrosa libera cloro gas), tubería de PVC o polipropileno (no metales), y rotar inventario para usar producto fresco. Vida útil práctica: 3 meses a 13% en condiciones adecuadas, después la concentración cae significativamente.",
        ],
      },
      {
        heading: "Seguridad: el manejo correcto del hipoclorito",
        paragraphs: [
          "El hipoclorito de sodio es clasificado como corrosivo categoría 1 conforme NOM-018-STPS-2015. Aunque su manejo es relativamente más seguro que ácidos fuertes, requiere atención específica: EPP completo (lentes químicos, careta facial, guantes de PVC o neopreno, mandil PVC, botas), ventilación adecuada en zonas de trasvase, y procedimiento documentado de emergencia para derrames.",
          "El riesgo principal es mezclar accidentalmente con ácidos (incluyendo limpiadores ácidos comunes y ácido muriático) — la reacción libera cloro gas tóxico que puede causar daño respiratorio severo. Otro riesgo es mezcla con amoniaco o derivados (algunos limpiadores domésticos) que forma cloraminas tóxicas. En planta industrial, el etiquetado claro y la separación física de químicos es crítico.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre hipoclorito y cloro?",
        a: "Coloquialmente se usan como sinónimos pero técnicamente son distintos. 'Cloro' es el gas Cl₂ (peligroso, requiere infraestructura especial). 'Hipoclorito de sodio' (NaClO) es la solución acuosa estable que se distribuye en industria — más segura de manejar pero con la misma capacidad oxidante/desinfectante. En aplicaciones industriales generales, cuando se dice 'cloración' se está usando hipoclorito.",
      },
      {
        q: "¿En qué presentaciones venden hipoclorito de sodio?",
        a: "Trevigo distribuye hipoclorito al 13% industrial en porrón de 60 kg, tambor de 250 kg y contenedor IBC de 1,300 kg. Para grandes consumidores manejamos también pipas a granel. Entregamos en 48 h en el Área Metropolitana de Monterrey con SDS y COA actualizados conforme NOM-018-STPS-2015.",
      },
      {
        q: "¿El hipoclorito de sodio es lo mismo que la lejía o cloro doméstico?",
        a: "Sí, químicamente es el mismo compuesto. La diferencia es la concentración: el cloro doméstico (Cloralex, etc.) tiene 4-6% y trae aditivos (estabilizadores, perfume). El hipoclorito industrial al 13% es puro (sin aditivos), más concentrado y económico por kg de cloro activo. Para aplicaciones industriales, usar siempre el grado industrial.",
      },
    ],
    relatedProducts: ["hipoclorito-sodio"],
    cta: {
      title: "¿Necesitas hipoclorito de sodio para tu planta?",
      description:
        "Distribuimos hipoclorito al 13% industrial con SDS y COA. Entrega en 48 h en N.L. Asesoría técnica para dosificación correcta según tu aplicación: agua potable, PTAR, torres de enfriamiento o CIP.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 16 — Niebla salina ASTM B117 (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "prueba-niebla-salina-astm-b117",
    authorSlug: "nohemi-cervantes",
    title:
      "Prueba de niebla salina ASTM B117: cómo se hace y qué significan los resultados",
    metaTitle: "Prueba de Niebla Salina ASTM B117: Guía Completa",
    metaDescription:
      "Protocolo de prueba de niebla salina (NSS) conforme ASTM B117: parámetros de cámara, criterios de aceptación, interpretación de resultados y aplicaciones automotrices.",
    excerpt:
      "Si tus piezas pintadas no superan 240 horas en niebla salina, el problema rara vez es la pintura — está en el pretratamiento. Te explicamos qué mide la prueba, qué horas necesitas según aplicación y cómo interpretar resultados.",
    category: "Tratamiento de Metales",
    readingTime: "9 min",
    publishedAt: "2026-05-19",
    updatedAt: "2026-05-19",
    keywords: [
      "niebla salina ASTM B117",
      "prueba de niebla salina",
      "salt spray test mexico",
      "NSS automotriz",
      "horas niebla salina",
      "validacion anticorrosiva",
    ],
    intro:
      "La prueba de niebla salina (Neutral Salt Spray, NSS) bajo ASTM B117 es la prueba de validación anticorrosiva más usada en industria — desde automotriz OEM hasta electrodomésticos y partes aeroespaciales. Pero la prueba es frecuentemente mal interpretada: las horas en niebla salina no equivalen directamente a años de servicio real, y el resultado depende tanto del sistema de pintura como del pretratamiento químico aplicado. En esta guía técnica explicamos cómo funciona la prueba, qué horas necesitas según la aplicación de tu producto, y cómo diagnosticar fallas comunes que vemos en clientes de manufactura mexicana.",
    sections: [
      {
        heading: "¿Qué mide la prueba de niebla salina ASTM B117?",
        paragraphs: [
          "ASTM B117 'Standard Practice for Operating Salt Spray (Fog) Apparatus' establece condiciones aceleradas de corrosión: cámara cerrada con atmósfera de niebla salina al 5% NaCl, temperatura 35°C, pH 6.5-7.2, presión atmosférica controlada. La pieza de prueba se expone a esta atmósfera por períodos definidos (24, 96, 240, 500, 1000+ horas) y se inspecciona el grado de corrosión observado.",
          "El propósito no es predecir la vida útil real del producto, sino comparar el desempeño relativo entre sistemas de recubrimiento. Es una prueba acelerada — las horas en cámara no corresponden a años calendario en servicio. La interpretación correcta es: 'el sistema A resistió 500 horas y el sistema B 1000 horas, por lo tanto B es más resistente en servicio similar'.",
        ],
      },
      {
        heading: "Parámetros de la cámara de niebla salina",
        paragraphs: [
          "Una cámara conforme ASTM B117 controla 6 parámetros específicos:",
        ],
        list: {
          items: [
            "Solución salina: NaCl al 5% peso/peso preparada con agua destilada o desmineralizada, pureza ACS",
            "Temperatura: 35°C ± 1.7°C dentro de la cámara (medida con termómetro calibrado en zona de exposición)",
            "pH del condensado: 6.5-7.2 medido en líquido recolectado por embudos durante la prueba",
            "Tasa de niebla: 1.0-2.0 mL/hora por cada 80 cm² de área horizontal de recolección",
            "Presión del aire atomizante: 12-18 psi con burbujeo en torre humidificadora",
            "Posición de muestras: ángulo de 15-30° respecto a la vertical, evitando que goteen entre sí",
          ],
        },
      },
      {
        heading: "Horas requeridas según aplicación industrial",
        paragraphs: [
          "Las horas mínimas de aceptación varían según industria y aplicación. Como referencia técnica:",
        ],
        list: {
          items: [
            "Servicio interior básico (muebles, electrónica): 96-240 horas mínimas",
            "Servicio exterior moderado (hardware general, equipo agrícola): 240-500 horas",
            "Automotriz OEM tier 1 — pintura primaria + e-coat: 500-720 horas (GMW3179, WSS-M3P18-A)",
            "Aplicaciones costeras y tropicales: 500-1,000 horas",
            "Aeronáutica civil: 500-1,500 horas según componente",
            "Aplicaciones marítimas: 1,000-2,000+ horas",
            "Defensa y aeroespacial militar: 2,000-3,000+ horas (con pruebas cíclicas adicionales)",
          ],
        },
      },
      {
        heading: "Criterios de aceptación: qué se evalúa",
        paragraphs: [
          "Al terminar las horas de exposición, la pieza se evalúa según criterios documentados en ASTM D1654 (Standard Test Method for Evaluation of Painted or Coated Specimens). Los criterios principales son:",
        ],
        list: {
          items: [
            "Rust creepage — propagación de oxidación desde una incisión de prueba (scribe). Se mide en mm a partir del scribe. Aceptación típica: <2 mm para automotriz, <5 mm para servicio interior",
            "Blistering — formación de ampollas bajo la pintura. Se evalúa por densidad (frecuencia) y tamaño (escala ASTM D714). Para automotriz: 'no blistering' o 'pocas pequeñas'",
            "Field corrosion — corrosión en áreas no rayadas. Aceptación: <1% del área expuesta",
            "Coating loss — pérdida de adherencia de pintura. Inspección visual + prueba de adherencia cross-hatch después de NSS",
            "Edge corrosion — corrosión en bordes (zonas críticas). Evaluación específica por aplicación",
          ],
        },
      },
      {
        heading: "Diagnóstico de fallas comunes",
        paragraphs: [
          "Cuando una pieza no pasa niebla salina, el problema rara vez es 'la pintura'. En 80% de los casos que diagnosticamos, la causa raíz está en el pretratamiento químico o en la preparación de la superficie:",
        ],
        list: {
          items: [
            "Fosfatado inadecuado — peso de fosfato fuera de rango, cristalinidad irregular o presencia de smut por reactivos contaminados. Verificar baño con análisis y panel testigo",
            "Sellado inadecuado o ausente — sin sellador post-fosfato, los microporos permiten penetración de cloruros. Causa #1 en piezas para exterior",
            "Desengrase deficiente — aceite residual impide adhesión uniforme de fosfato. Verificar break-time del agua sobre la pieza limpia",
            "Enjuague final con agua contaminada — cloruros del agua de la llave (típico en Monterrey, 50-100 ppm Cl⁻) causan corrosión bajo pintura. Usar agua desmineralizada en último enjuague",
            "Espesor de pintura insuficiente — verificar con galga digital ANCHURA o cross-section. Mínimos típicos: 30-50 μm para servicio interior, 60-100 μm para exterior",
            "Hornos de curado fuera de rango — pintura sub-curada o sobre-curada pierde propiedades anticorrosivas. Verificar con cintas testigo de temperatura",
          ],
        },
      },
      {
        heading: "Pruebas relacionadas y cuándo usarlas",
        paragraphs: [
          "ASTM B117 (NSS estándar) es la prueba más usada pero no la más representativa de condiciones reales. Para aplicaciones más críticas existen pruebas adicionales:",
        ],
        list: {
          items: [
            "Cyclical Corrosion Test SAE J2334 — ciclo de niebla salina + humedad + secado. Más representativo que NSS estándar. Usado en automotriz moderno",
            "ASTM B368 (CASS) — niebla salina con cobre, más severa. Para aplicaciones marítimas y decorativas chrome",
            "ASTM G85 Annex 4 (SO₂ Salt Spray) — niebla salina con dióxido de azufre. Simula contaminación industrial",
            "ASTM D1735 (Water Fog) — humedad sin sal. Para sistemas que protegen contra humedad sin exposición salina",
            "Filiform corrosion ASTM D2803 — corrosión filiforme. Específico para aluminio pintado",
          ],
        },
      },
    ],
    faqs: [
      {
        q: "¿1,000 horas de niebla salina equivalen a cuántos años de servicio real?",
        a: "No hay equivalencia universal — depende del ambiente real de servicio. Como referencia muy general usada en industria: 240 hrs NSS ≈ 1-3 años en servicio interior templado, 500 hrs NSS ≈ 3-7 años en servicio exterior moderado, 1,000 hrs NSS ≈ 7-15 años. Pero ambientes costeros, tropicales o industriales severos pueden reducir estos números 50% o más. NSS sirve para comparar sistemas, no para predecir tiempo exacto de servicio.",
      },
      {
        q: "¿Trevigo hace pruebas de niebla salina para sus clientes?",
        a: "Sí, ofrecemos servicio de prueba en cámara conforme ASTM B117 con duración solicitada por el cliente. Entregamos reporte con fotografías antes/durante/después, evaluación conforme ASTM D1654, y diagnóstico técnico si la prueba falla. Tiempo de servicio: depende de horas solicitadas (24 hrs a 1,500 hrs típicamente). Servicio incluido sin costo para clientes activos que evalúan nuevas formulaciones de pretratamiento.",
      },
      {
        q: "¿Por qué dos piezas idénticas pueden tener resultados muy distintos en NSS?",
        a: "Variabilidad típica en NSS es 20-30% entre piezas del mismo lote — por eso ASTM B117 requiere mínimo 3 réplicas por evaluación. Causas: variación en espesor de pintura (±10%), defectos microscópicos en el sustrato, variación en preparación de la pieza, y posición dentro de la cámara (zonas con más concentración de niebla). Para evaluación válida estadísticamente, mínimo 5 réplicas y análisis de variabilidad.",
      },
    ],
    relatedProducts: [
      "fosfato-zinc-tricationico",
      "sellador-zirconio-anticorrosivo",
      "pasivado-libre-cromo",
    ],
    cta: {
      title: "¿Tus piezas pintadas no pasan niebla salina?",
      description:
        "Hacemos diagnóstico técnico de tu línea de pintura: análisis de baños, paneles testigo en cámara NSS y recomendaciones para alcanzar las horas requeridas. Servicio incluido para clientes con consumo regular.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 17 — PAC policloruro de aluminio (PRODUCTO — Blanca)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "pac-policloruro-aluminio-coagulante",
    authorSlug: "blanca-garza",
    title:
      "PAC (policloruro de aluminio): qué es, dosis típicas y cómo comprarlo en México",
    metaTitle: "PAC Policloruro de Aluminio: Dosis, Usos y Venta en México",
    metaDescription:
      "Guía del PAC (policloruro de aluminio): ventajas vs sulfato de aluminio, dosis típicas por tipo de efluente, presentaciones y proveedor en Monterrey con Jar Test sin costo.",
    excerpt:
      "El PAC desplazó al sulfato de aluminio como el coagulante estándar en PTAR industriales: genera menos lodo, trabaja en un rango de pH más amplio y reduce el costo total de tratamiento. Te explicamos cómo dosificarlo y comprarlo.",
    category: "Tratamiento de Aguas",
    readingTime: "8 min",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    keywords: [
      "policloruro de aluminio",
      "PAC coagulante",
      "PAC tratamiento de agua",
      "policloruro de aluminio dosis",
      "PAC vs sulfato de aluminio",
      "policloruro de aluminio proveedor mexico",
      "PAC precio",
    ],
    intro:
      "El policloruro de aluminio — conocido en industria simplemente como PAC — es hoy el coagulante más usado en plantas de tratamiento de aguas residuales industriales en México. Reemplazó gradualmente al sulfato de aluminio (alumbre) porque genera entre 30 y 50% menos lodo, funciona en un rango de pH mucho más amplio y forma flóculos más densos que sedimentan más rápido. En esta guía técnica comercial explicamos qué es exactamente el PAC, cómo se dosifica según el tipo de efluente, cuánto cuesta tratar un metro cúbico con él, y qué validar al elegir proveedor.",
    sections: [
      {
        heading: "¿Qué es el PAC y en qué se diferencia del sulfato de aluminio?",
        paragraphs: [
          "El policloruro de aluminio es un coagulante inorgánico pre-polimerizado de fórmula general Al₂(OH)ₙCl₆₋ₙ. La palabra clave es 'pre-polimerizado': mientras el sulfato de aluminio debe hidrolizarse dentro del agua a tratar (consumiendo alcalinidad y bajando el pH), el PAC ya viene parcialmente hidrolizado de fábrica. Su parámetro característico es la basicidad — típicamente 40-85% — que indica qué tan avanzada viene esa pre-polimerización.",
          "Esta diferencia química se traduce en ventajas operativas concretas: el PAC coagula eficientemente entre pH 5 y 9 (el alumbre solo entre 6 y 7), consume mucha menos alcalinidad del agua (menos gasto en sosa o cal para reponer pH), forma flóculos más grandes y densos a igual dosis, y deja menos aluminio residual disuelto en el agua tratada.",
        ],
      },
      {
        heading: "Ventajas del PAC en números",
        paragraphs: [
          "En las pruebas de jarras comparativas que realizamos para clientes, el cambio de sulfato de aluminio a PAC muestra consistentemente estos resultados:",
        ],
        list: {
          items: [
            "30-50% menos volumen de lodo generado — el ahorro más importante, porque la disposición de lodos cuesta típicamente más que el coagulante mismo",
            "20-40% menos dosis en peso para la misma remoción de turbidez",
            "Menor consumo de álcali para corrección de pH — en muchos efluentes se elimina por completo la etapa de ajuste",
            "Sedimentación más rápida — flóculos más densos permiten operar el sedimentador a mayor carga hidráulica",
            "Funciona en agua fría — la coagulación con alumbre se degrada notablemente debajo de 15°C; el PAC mantiene desempeño",
            "Menos aluminio residual en el efluente tratado — relevante si el agua se reutiliza o descarga con límite de Al",
          ],
        },
      },
      {
        heading: "Dosis típicas de PAC según el tipo de efluente",
        paragraphs: [
          "La dosis óptima de PAC siempre debe determinarse con prueba de jarras sobre el efluente real — pero como referencia de arranque, estos son los rangos típicos que manejamos en planta:",
        ],
        list: {
          items: [
            "Agua de proceso con turbidez moderada (clarificación): 20-80 ppm de PAC líquido",
            "Efluente metalmecánico con aceites emulsionados: 100-300 ppm, frecuentemente combinado con ajuste de pH y floculante aniónico",
            "Efluente de pintura y fosfatado (automotriz): 150-400 ppm con precipitación previa de metales a pH 8.5-9.5",
            "Efluente alimentario con carga orgánica (DQO alta): 100-250 ppm, a veces en esquema dual con coagulante orgánico",
            "Efluente textil con color: 200-500 ppm — el PAC es particularmente bueno removiendo colorantes dispersos",
            "Lavado de arenas y agregados: 30-100 ppm con floculante de alto peso molecular",
          ],
        },
      },
      {
        heading: "PAC líquido vs PAC en polvo: cuál conviene",
        paragraphs: [
          "El PAC se comercializa en dos presentaciones. El PAC líquido (solución al 10-18% de Al₂O₃) es la opción estándar para plantas con dosificación continua: se bombea directo del contenedor con bomba dosificadora, sin preparación. El PAC en polvo (28-30% Al₂O₃) concentra más aluminio activo por kilogramo — conviene cuando el flete es caro (plantas lejanas), el consumo es bajo e intermitente, o el almacenamiento de líquidos es limitado.",
          "Para la mayoría de plantas en el área metropolitana de Monterrey recomendamos líquido: el costo de flete es bajo por cercanía y la operación se simplifica. Para plantas foráneas con consumos menores a 200 kg/mes, el polvo suele ganar en costo total a pesar de requerir tanque de preparación.",
        ],
      },
      {
        heading: "Cuánto cuesta tratar con PAC: economía real",
        paragraphs: [
          "El costo del coagulante por metro cúbico tratado depende de la dosis: a 150 ppm de PAC líquido, el costo químico de coagulación ronda entre $0.80 y $2.00 MXN por m³ según volumen de compra. Pero el número que importa es el costo total de tratamiento, que incluye ajuste de pH, floculante, manejo de lodos y disposición.",
          "Aquí es donde el PAC gana: aunque su precio por kilogramo es mayor que el del sulfato de aluminio, el costo total por m³ tratado resulta típicamente 15-35% menor por la reducción de lodos y la eliminación del ajuste de pH. Recomendamos siempre evaluar con prueba de jarras comparativa y calcular el costo completo — es un análisis que hacemos sin costo para plantas interesadas.",
        ],
      },
      {
        heading: "Qué validar al comprar PAC en México",
        paragraphs: [
          "No todos los PAC son iguales. Al cotizar, valida estos cuatro puntos: (1) contenido de Al₂O₃ — es la base de comparación real entre proveedores; un PAC 'barato' al 8% sale más caro que uno al 17% a mejor precio por aluminio activo, (2) basicidad — para efluentes industriales generales, 40-70% es el rango versátil, (3) certificado de análisis (COA) por lote y hoja de seguridad (SDS) conforme NOM-018-STPS-2015, y (4) metales pesados — un PAC de mala calidad puede aportar Fe, Cr o Pb al efluente que después no cumples en descarga.",
          "Industrias Trevigo distribuye PAC líquido y en polvo con COA por lote desde San Nicolás de los Garza, con entrega en 48 horas en el área metropolitana de Monterrey. Incluimos prueba de jarras del efluente del cliente para entregar la dosis óptima y el costo proyectado por m³ antes de que compres el primer kilogramo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿El PAC sirve para agua potable o solo para residuales?",
        a: "Sirve para ambas. De hecho el PAC grado potable es el coagulante más usado en potabilizadoras municipales modernas porque deja menos aluminio residual que el alumbre. Para uso en agua potable verifica que el producto cumpla la certificación NSF/ANSI 60 o su equivalente y que el COA lo declare grado potable; el PAC industrial estándar es para efluentes y agua de proceso.",
      },
      {
        q: "¿Puedo cambiar de sulfato de aluminio a PAC sin modificar mi PTAR?",
        a: "En la mayoría de los casos sí — se usa la misma bomba dosificadora y el mismo punto de inyección. Los ajustes típicos son: recalibrar la dosis (el PAC requiere 20-40% menos), verificar si la etapa de ajuste de pH sigue siendo necesaria (frecuentemente se elimina), y re-optimizar la dosis de floculante. Una prueba de jarras comparativa antes del cambio define los nuevos parámetros en una semana.",
      },
      {
        q: "¿Cómo se almacena el PAC y cuánto dura?",
        a: "El PAC líquido se almacena en tanques de polietileno, fibra de vidrio o acero recubierto — nunca acero al carbón desnudo ni aluminio, porque es corrosivo para metales. Vida útil típica: 6-12 meses en líquido y 1-2 años en polvo en saco cerrado. A temperaturas bajo 0°C el líquido puede cristalizar; se redisuelve con agitación suave sin perder propiedades.",
      },
    ],
    relatedProducts: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "floculante-anionico-alto-peso",
    ],
    cta: {
      title: "¿Quieres saber cuánto PAC necesita tu efluente?",
      description:
        "Trae una muestra de 5 litros y te entregamos prueba de jarras sin costo: dosis óptima, costo por m³ y comparativa contra tu coagulante actual. Distribuimos PAC líquido y en polvo con entrega en 48 h en N.L.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 18 — Torres de enfriamiento (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "tratamiento-agua-torres-enfriamiento",
    authorSlug: "nohemi-cervantes",
    title:
      "Tratamiento de agua para torres de enfriamiento: incrustación, corrosión y control de Legionella",
    metaTitle: "Tratamiento de Agua para Torres de Enfriamiento: Guía Completa",
    metaDescription:
      "Programa químico completo para torres de enfriamiento: inhibidores de incrustación, control de corrosión, biocidas y prevención de Legionella conforme NOM-013-SSA1.",
    excerpt:
      "Una torre de enfriamiento sin tratamiento químico pierde 20-40% de eficiencia térmica en meses y puede convertirse en foco de Legionella. Te explicamos el programa completo: incrustación, corrosión, biológico y purga.",
    category: "Tratamiento de Aguas",
    readingTime: "10 min",
    publishedAt: "2026-06-10",
    updatedAt: "2026-06-10",
    keywords: [
      "tratamiento agua torres de enfriamiento",
      "quimicos para torre de enfriamiento",
      "control legionella torre enfriamiento",
      "NOM-013-SSA1",
      "inhibidor incrustacion torre enfriamiento",
      "ciclos de concentracion torre",
    ],
    intro:
      "Las torres de enfriamiento son el equipo de agua industrial más descuidado en plantas mexicanas — hasta que fallan. El agua que recircula en una torre se concentra continuamente por evaporación: las sales disueltas se multiplican, los microorganismos encuentran temperatura ideal (25-40°C) y el oxígeno disuelto ataca la tubería. Sin un programa químico, el resultado es predecible: incrustación que roba eficiencia térmica, corrosión que perfora intercambiadores, y biopelícula que puede albergar Legionella — un riesgo de salud pública regulado por la NOM-013-SSA1. En esta guía explico el programa de tratamiento completo: las cuatro líneas de defensa química y los parámetros de control que toda torre debe monitorear.",
    sections: [
      {
        heading: "Por qué el agua de una torre se vuelve agresiva: ciclos de concentración",
        paragraphs: [
          "Una torre de enfriamiento extrae calor evaporando una fracción del agua que recircula. El agua evaporada sale pura — las sales se quedan. Si la reposición trae 300 ppm de dureza y operas a 5 ciclos de concentración, el agua de la torre carga 1,500 ppm: cinco veces más incrustante y más conductiva (corrosiva) que el agua original.",
          "Los ciclos de concentración se controlan con la purga: una descarga continua o intermitente de agua concentrada que se repone con agua fresca. Más ciclos = menos consumo de agua pero química más agresiva; menos ciclos = agua más benigna pero mayor consumo y costo. El punto óptimo típico está entre 3 y 6 ciclos, y es la primera decisión de diseño de cualquier programa de tratamiento — los químicos se dosifican alrededor de ese punto, no al revés.",
        ],
      },
      {
        heading: "Línea de defensa 1: inhibidores de incrustación",
        paragraphs: [
          "La incrustación de carbonato de calcio es el problema número uno. Una capa de apenas 0.6 mm de CaCO₃ sobre los tubos de un intercambiador reduce la transferencia de calor alrededor de 12%; con 1.5 mm la pérdida supera el 25% — que se paga en consumo eléctrico de chillers y compresores.",
          "El control químico se hace con inhibidores de incrustación dosificados de forma continua a 5-15 ppm: fosfonatos (HEDP, ATMP, PBTC) que distorsionan el crecimiento del cristal de carbonato, combinados con dispersantes poliacrílicos que mantienen las partículas en suspensión hasta que salen por la purga. El índice de saturación de Langelier (LSI) del agua concentrada define la agresividad del programa: con LSI mayor a +2.5, ni el mejor inhibidor compensa — hay que bajar ciclos o ablandar la reposición.",
        ],
      },
      {
        heading: "Línea de defensa 2: inhibidores de corrosión",
        paragraphs: [
          "El agua de torre es un electrolito aireado a temperatura templada: condiciones ideales para corroer acero al carbón. Sin inhibidor, las velocidades de corrosión típicas superan 10 mpy (milésimas de pulgada por año) — suficiente para perforar tubería estándar en 3-5 años y para sembrar el sistema de óxido que a su vez alimenta incrustación y bacterias.",
          "Los programas modernos usan mezclas de fosfonatos con azoles (tolitriazol o benzotriazol para proteger cobre y sus aleaciones) y en algunos casos zinc o molibdato para acero. La meta operativa: mantener corrosión de acero al carbón debajo de 3 mpy y de cobre debajo de 0.3 mpy, verificado con cupones de corrosión instalados en un rack lateral que se pesan cada 60-90 días.",
        ],
      },
      {
        heading: "Línea de defensa 3: control microbiológico y Legionella",
        paragraphs: [
          "El relleno de una torre es un reactor biológico perfecto: agua tibia, oxígeno abundante, nutrientes y superficies de adhesión. La biopelícula resultante aísla térmicamente (es 4 veces más aislante que el carbonato), genera corrosión bajo depósito por bacterias sulfato-reductoras, y crea el hábitat donde prolifera Legionella pneumophila — la bacteria que causa legionelosis y que se dispersa precisamente por el aerosol que toda torre emite.",
          "En México, la NOM-013-SSA1 y las guías ANSI/ASHRAE 188 exigen un plan documentado de gestión del agua para sistemas con potencial de aerosolización. El programa químico estándar combina dos familias de biocidas en alternancia para evitar resistencias:",
        ],
        list: {
          items: [
            "Biocida oxidante en dosificación continua o diaria: hipoclorito de sodio manteniendo 0.5-1.0 ppm de cloro residual libre, o bromo activado (BCDMH) a 0.2-0.4 ppm — más estable a pH alcalino típico de torres",
            "Biocida no-oxidante en choque semanal o quincenal: glutaraldehído o isotiazolinonas a 100-300 ppm — penetran la biopelícula que el oxidante no alcanza",
            "Biodispersante opcional antes del choque: despega la biopelícula para exponer las bacterias al biocida",
            "Monitoreo: recuento de bacterias heterótrofas semanal o quincenal (mantener debajo de 10⁴ UFC/mL) y análisis de Legionella en laboratorio acreditado cada trimestre",
            "Limpieza física periódica: la biopelícula establecida y el sedimento en la bandeja no se eliminan solo con químico — requieren limpieza mecánica de relleno y bandeja durante paros programados",
          ],
        },
      },
      {
        heading: "Línea de defensa 4: control de purga y monitoreo",
        paragraphs: [
          "Ninguna dosificación química funciona sin control de la purga. La purga (blowdown) mantiene los ciclos de concentración en el rango de diseño descargando agua concentrada y reponiendo con fresca. Se controla automáticamente con un controlador de conductividad: cuando la conductividad del agua de torre supera el setpoint, abre la válvula de purga hasta volver al rango.",
          "El monitoreo mínimo de una torre bien operada incluye: conductividad (diaria o continua), pH (mantener 7.5-8.5), cloro/bromo residual (diario durante operación), niveles de inhibidor de incrustación y corrosión (semanal por titulación o trazador), cupones de corrosión (cada 60-90 días) y recuentos microbiológicos (semanal o quincenal). Sin registro de estos parámetros, el programa químico opera a ciegas y las fallas aparecen sin aviso.",
        ],
      },
      {
        heading: "Cumplimiento normativo: NOM-013-SSA1 y gestión documentada",
        paragraphs: [
          "En México, las torres de enfriamiento con potencial de generar aerosoles están sujetas a la NOM-013-SSA1, que exige un programa documentado de gestión del agua para prevenir la proliferación y dispersión de Legionella. Esto no es opcional para hospitales, hoteles, edificios con población vulnerable ni plantas industriales con torres cercanas a zonas ocupadas.",
          "El cumplimiento exige: un plan escrito con responsable técnico designado, registros de dosificación y purga, análisis microbiológicos periódicos incluyendo Legionella, inspección física trimestral del sistema, y un procedimiento de respuesta ante resultados positivos. Un programa de tratamiento bien diseñado no solo protege el equipo y ahorra energía — es la evidencia documental de que la instalación cumple con su responsabilidad sanitaria.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuántos ciclos de concentración debe operar mi torre de enfriamiento?",
        a: "Depende de la calidad del agua de reposición. Aguas blandas permiten más ciclos (6-8), aguas duras requieren menos (3-4) para evitar precipitación. El punto óptimo típico está entre 3 y 6 ciclos. Se calcula a partir del índice de saturación de Langelier (LSI) y otros índices del agua concentrada. Más ciclos ahorran agua pero aumentan el riesgo de incrustación; el balance correcto se define con un análisis de agua.",
      },
      {
        q: "¿Cada cuánto debo hacer choque biocida en mi torre?",
        a: "Mínimo 1-2 veces por semana con biocida no-oxidante durante operación normal, además del oxidante en dosificación continua. Choques intensivos (dosis 2-3x) tras paros prolongados, cuando el recuento bacteriano supere 10⁴ UFC/mL, o si hay biopelícula visible. La alternancia oxidante/no-oxidante evita que las bacterias desarrollen resistencia.",
      },
      {
        q: "¿Trevigo ofrece el programa completo de tratamiento de torres?",
        a: "Sí. Manejamos toda la línea de químicos (inhibidores de incrustación, dispersantes, inhibidores de corrosión, biocidas oxidantes y no-oxidantes) y ofrecemos análisis de agua, diseño de programa personalizado y seguimiento técnico con monitoreo de parámetros. Para clientes con consumo regular el seguimiento está incluido sin costo adicional.",
      },
    ],
    relatedProducts: [
      "microbicida-amplio-espectro",
      "agente-secuestrante",
      "inhibidor-oxigeno-calderas",
    ],
    cta: {
      title: "¿Tu torre de enfriamiento necesita un programa de tratamiento?",
      description:
        "Analizamos tu agua y diseñamos el programa completo: incrustación, corrosión, biológico y cumplimiento NOM-013-SSA1. Seguimiento técnico incluido para clientes con consumo regular.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 19 — Aceite soluble CNC/torno (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "aceite-soluble-cnc-torno-control-bano",
    authorSlug: "nohemi-cervantes",
    title:
      "Aceite soluble para CNC y torno: cómo controlar tu baño de corte y evitar que se eche a perder",
    metaTitle: "Aceite Soluble para CNC y Torno: Control del Baño de Corte",
    metaDescription:
      "Cómo seleccionar y controlar aceite soluble para maquinado CNC y torno: concentración, pH, control bacteriano y solución al olor a podrido. Guía técnica para talleres.",
    excerpt:
      "Si tu refrigerante de torno huele a huevo podrido o se separa, el problema tiene solución sin tirar todo el baño. Te explicamos cómo controlar concentración, pH y bacterias para que tu aceite soluble dure semanas en vez de días.",
    category: "Lubricantes",
    readingTime: "9 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    keywords: [
      "aceite soluble torno",
      "refrigerante CNC",
      "aceite soluble para maquinado",
      "aceite soluble olor podrido",
      "concentracion aceite soluble",
      "fluido de corte soluble",
    ],
    intro:
      "El aceite soluble — también llamado refrigerante o fluido de corte emulsionable — es el insumo más usado en talleres de maquinado: tornos CNC, fresadoras, taladros y rectificadoras. Bien manejado, lubrica y refrigera el corte, extiende la vida de las herramientas y mejora el acabado de la pieza. Mal manejado, se descompone en días, genera olor pútrido a huevo podrido, mancha las piezas y se convierte en un gasto recurrente frustrante. La diferencia entre un baño que dura semanas y uno que se echa a perder en días no es el producto — es el control. En esta guía técnica explicamos cómo seleccionar y, sobre todo, controlar tu baño de aceite soluble.",
    sections: [
      {
        heading: "¿Qué es el aceite soluble y cómo funciona?",
        paragraphs: [
          "El aceite soluble es un concentrado que se mezcla con agua para formar una emulsión lechosa estable. Combina aceite mineral o sintético con emulsificantes (que permiten que se mezcle con agua), aditivos de lubricación de extrema presión (EP), inhibidores de corrosión (para proteger la pieza y la máquina) y biocidas (para resistir el crecimiento bacteriano).",
          "Durante el maquinado cumple cuatro funciones simultáneas: refrigera la zona de corte disipando el calor de fricción, lubrica la interfaz herramienta-pieza reduciendo desgaste, evacúa la viruta del área de trabajo, y protege contra corrosión la pieza recién mecanizada y la máquina. La concentración correcta de la emulsión es lo que determina qué tan bien cumple cada función.",
        ],
      },
      {
        heading: "Tipos de aceite soluble: cuál usar",
        paragraphs: [
          "Los fluidos de corte emulsionables se clasifican según su contenido de aceite mineral, cada uno con su mejor aplicación:",
        ],
        list: {
          items: [
            "Solubles convencionales (60-80% aceite mineral): emulsión lechosa, buena lubricación. Para maquinado general de acero y hierro con operaciones de carga media-alta",
            "Semi-sintéticos (10-40% aceite mineral): translúcidos, balance entre lubricación y limpieza. Resisten mejor las bacterias y dan buena visibilidad de la zona de corte. La opción más popular hoy",
            "Sintéticos (sin aceite mineral): solución transparente, máxima refrigeración y resistencia bacteriana. Ideal para rectificado y alta velocidad, pero menor lubricación para cargas pesadas",
            "Para aluminio: formulaciones sin cloro ni aminas agresivas que mancharían o atacarían el aluminio y sus aleaciones",
          ],
        },
      },
      {
        heading: "La concentración correcta: el parámetro #1",
        paragraphs: [
          "La concentración de la emulsión es el factor que más afecta el desempeño y la vida del baño. Se mide con un refractómetro — un instrumento económico que da una lectura en grados Brix, que multiplicada por el factor del producto da la concentración real.",
          "Concentraciones típicas: 5-8% para maquinado general, 8-10% para operaciones de alta carga (brochado, roscado), 3-5% para rectificado. Concentración baja causa mala lubricación, corrosión de piezas y crecimiento bacteriano acelerado (las bacterias prosperan en emulsiones diluidas). Concentración alta desperdicia producto, genera residuo espumoso y puede irritar la piel de los operadores. La medición diaria con refractómetro y la reposición con emulsión preparada — nunca agua sola — es la práctica que más extiende la vida del baño.",
        ],
      },
      {
        heading: "El problema del olor a podrido: causa y solución",
        paragraphs: [
          "El olor a huevo podrido es la queja número uno en talleres y tiene una causa específica: crecimiento de bacterias anaeróbicas reductoras de sulfato, que producen sulfuro de hidrógeno (H₂S). Ocurre típicamente los lunes por la mañana, después de que el baño estuvo sin circular el fin de semana — las bacterias prosperan en ausencia de oxígeno.",
          "Las causas raíz son: contaminación con aceite de fugas de la máquina (tramping oil, que alimenta las bacterias), concentración baja de la emulsión, falta de circulación o aireación, acumulación de viruta y lodo en el tanque, y agotamiento del biocida. La solución no siempre es tirar el baño: ajustar concentración, remover el tramping oil con un desnatador (skimmer), airear el baño, limpiar el tanque y dosificar biocida puede recuperar un baño con olor incipiente.",
        ],
      },
      {
        heading: "Control diario del baño: la rutina que ahorra dinero",
        paragraphs: [
          "Un baño de aceite soluble bien controlado dura 3-6 meses; uno descuidado se echa a perder en 1-3 semanas. La diferencia es una rutina simple de control:",
        ],
        list: {
          items: [
            "Concentración (diario): medir con refractómetro y reponer con emulsión preparada para mantener el rango operativo",
            "pH (semanal): mantener entre 8.8 y 9.5. Un pH descendente indica acidificación por bacterias — señal de alerta temprana",
            "Tramping oil (continuo): remover el aceite de fugas que flota en la superficie con un desnatador; es la principal fuente de alimento bacteriano",
            "Viruta y lodo (semanal): limpiar el fondo del tanque, donde la viruta acumulada alberga bacterias y consume biocida",
            "Biocida (cada 2-4 semanas o según monitoreo): dosificar para mantener el control microbiológico antes de que el olor aparezca",
            "Aireación: mantener el baño en movimiento o airearlo en paros prolongados para evitar condiciones anaeróbicas",
          ],
        },
      },
      {
        heading: "Cuándo cambiar el baño y cómo hacerlo bien",
        paragraphs: [
          "Un baño debe cambiarse cuando: el olor pútrido persiste a pesar del tratamiento, la concentración no se mantiene estable, hay separación irreversible de la emulsión, o el pH cae por debajo de 8.5 de forma sostenida. Cuando llega ese momento, el cambio debe hacerse correctamente para que el baño nuevo no se contamine de inmediato.",
          "El procedimiento correcto: drenar completamente el baño viejo, limpiar el tanque con un limpiador de sistema (system cleaner) para remover biofilm y lodo adheridos, enjuagar, y recién entonces cargar la emulsión nueva. Saltarse la limpieza del tanque es el error más común: el biofilm residual inocula el baño nuevo y la descomposición vuelve a empezar en días. La disposición del baño agotado debe seguir la normativa de residuos (NOM-052-SEMARNAT) mediante empresa autorizada.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué mi aceite soluble huele a podrido los lunes?",
        a: "Es crecimiento de bacterias anaeróbicas que producen sulfuro de hidrógeno (H₂S) durante el fin de semana, cuando el baño está sin circular y sin oxígeno. La solución de fondo es: mantener concentración correcta, remover el tramping oil (aceite de fugas que alimenta bacterias), airear el baño en paros, y dosificar biocida preventivamente. Si el olor es incipiente, un choque de biocida más aireación puede recuperar el baño sin tirarlo.",
      },
      {
        q: "¿Cómo mido la concentración del aceite soluble?",
        a: "Con un refractómetro de mano — un instrumento económico (300-800 MXN) que da una lectura en grados Brix. Multiplicas la lectura por el factor del producto (que indica la ficha técnica, típicamente 1.0-1.5) para obtener la concentración real. La medición diaria es la práctica más importante para extender la vida del baño. Incluimos asesoría de uso del refractómetro con nuestros productos.",
      },
      {
        q: "¿Cuánto debe durar un baño de aceite soluble?",
        a: "Un baño bien controlado dura 3-6 meses; uno descuidado se echa a perder en 1-3 semanas. La diferencia está en el control diario: concentración, remoción de tramping oil, limpieza de viruta y dosificación de biocida. Con buen manejo, el costo del fluido de corte por pieza maquinada baja significativamente porque cambias el baño mucho menos seguido.",
      },
    ],
    relatedProducts: [
      "lubricante-metalworking",
      "lubricantes-sinteticos",
      "aceite-protector-piezas-metalicas",
    ],
    cta: {
      title: "¿Tu refrigerante de corte se echa a perder muy seguido?",
      description:
        "Distribuimos aceite soluble convencional, semi-sintético y sintético para CNC y torno. Te asesoramos en el control del baño para que dure meses, no días. Cotización y entrega en 48 h en N.L.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 20 — Ácido clorhídrico/muriático (PRODUCTO — Blanca)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "acido-clorhidrico-muriatico-industrial",
    authorSlug: "blanca-garza",
    title:
      "Ácido clorhídrico (muriático) industrial: usos, concentraciones y cómo comprarlo en México",
    metaTitle: "Ácido Clorhídrico (Muriático) Industrial: Usos y Venta",
    metaDescription:
      "Guía del ácido clorhídrico (muriático) industrial: decapado de metales, ajuste de pH, regeneración de resinas. Concentraciones, manejo seguro y proveedor en Monterrey.",
    excerpt:
      "El ácido clorhídrico — o muriático — es el ácido más potente y económico para decapado de acero. Te explicamos sus aplicaciones industriales, concentraciones, qué metales NO debe tocar y cómo comprarlo con seguridad.",
    category: "Materias Primas",
    readingTime: "8 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    keywords: [
      "acido clorhidrico industrial",
      "acido muriatico industrial",
      "acido clorhidrico decapado",
      "HCl industrial mexico",
      "acido muriatico precio",
      "acido clorhidrico proveedor",
    ],
    intro:
      "El ácido clorhídrico — conocido comúnmente como ácido muriático en su grado técnico industrial — es uno de los ácidos minerales más usados en la industria mexicana. Es el más potente y económico para remover óxido pesado y escamas de laminación del acero, lo que lo convierte en el reactivo estándar para decapado (pickling). También se usa para ajuste de pH, regeneración de resinas de intercambio iónico y múltiples procesos químicos. Pero su potencia conlleva riesgos: genera vapores corrosivos y ataca selectivamente ciertos metales. En esta guía técnica comercial explicamos sus aplicaciones, concentraciones, precauciones críticas y cómo seleccionar un proveedor confiable.",
    sections: [
      {
        heading: "¿Qué es el ácido clorhídrico industrial?",
        paragraphs: [
          "El ácido clorhídrico es una solución acuosa de cloruro de hidrógeno (HCl), un ácido mineral fuerte. En su grado industrial se distribuye típicamente al 31-33% de concentración (conocido comercialmente como '20° Baumé') y al 36-37% (grado reactivo más concentrado). El término 'ácido muriático' se refiere al grado técnico industrial, que tiene un ligero color amarillento por trazas de hierro.",
          "Es un ácido fuerte y volátil: a temperatura ambiente libera vapores de HCl gaseoso que son corrosivos e irritantes para las vías respiratorias. Esta volatilidad es su principal diferencia operativa frente al ácido fosfórico o sulfúrico, y determina los requisitos de ventilación y manejo. A cambio, su potencia y bajo costo lo hacen insuperable para remover óxido pesado.",
        ],
      },
      {
        heading: "Aplicaciones industriales del ácido clorhídrico",
        paragraphs: [
          "El ácido clorhídrico es un reactivo versátil con aplicaciones en múltiples industrias. Las más comunes son:",
        ],
        list: {
          items: [
            "Decapado (pickling) de acero — remoción de óxido pesado, calamina y escamas de laminación antes de galvanizado, recubrimiento o trefilado. Es la aplicación número uno del HCl industrial",
            "Ajuste de pH — neutralización de efluentes alcalinos en PTAR y ajuste de pH en procesos industriales",
            "Regeneración de resinas de intercambio iónico — regeneración de resinas catiónicas en sistemas de desmineralización y ablandamiento de agua",
            "Limpieza de incrustaciones — desincrustación de intercambiadores de calor, tuberías y equipos con depósitos de carbonatos",
            "Procesos químicos — producción de cloruros metálicos y ajuste de procesos en industria química",
            "Tratamiento de pozos de agua — rehabilitación de pozos con incrustación mineral",
          ],
        },
      },
      {
        heading: "Concentraciones y presentaciones",
        paragraphs: [
          "El ácido clorhídrico industrial se distribuye principalmente en dos concentraciones, y la elección depende de la aplicación:",
        ],
        list: {
          items: [
            "31-33% (20° Baumé) — el grado industrial estándar, el más usado para decapado, ajuste de pH y regeneración de resinas. El mejor balance costo-desempeño",
            "36-37% (grado concentrado) — para aplicaciones que requieren máxima concentración o donde el costo logístico de transportar agua es crítico",
            "Diluciones de proceso (5-15%) — preparadas en planta a partir del concentrado, para baños de decapado controlados y limpiezas menos agresivas",
          ],
        },
      },
      {
        heading: "Qué metales NO debe tocar el ácido clorhídrico",
        paragraphs: [
          "Una advertencia técnica crítica: el ácido clorhídrico ataca selectivamente ciertos metales y aleaciones, por lo que su uso debe limitarse a sustratos compatibles. Usarlo en el metal equivocado causa daño severo e irreversible.",
        ],
        list: {
          items: [
            "NO usar en acero inoxidable — el cloruro del HCl causa picaduras (pitting) severas y corrosión por cloruros en la matriz cromo-níquel. Para inoxidable usar ácido nítrico o cítrico",
            "NO usar en aluminio — reacción violenta que disuelve el aluminio rápidamente",
            "NO usar en metales galvanizados sin control estricto — disuelve el recubrimiento de zinc",
            "SÍ usar en acero al carbón y hierro — es su aplicación ideal para decapado, con inhibidor de decapado para proteger el metal base de sobreataque",
            "Precaución con cobre y latón — reacciona en presencia de oxígeno; requiere evaluación específica",
          ],
        },
      },
      {
        heading: "Manejo seguro y almacenamiento",
        paragraphs: [
          "El ácido clorhídrico es un químico corrosivo categoría 1 conforme NOM-018-STPS-2015 que requiere manejo cuidadoso por su corrosividad y sus vapores. El manejo seguro exige: EPP completo (lentes de seguridad química, careta facial, guantes resistentes a ácidos, mandil PVC, botas), ventilación forzada en zonas de uso y trasvase (los vapores de HCl son irritantes respiratorios), y procedimiento documentado de respuesta ante derrames.",
          "Almacenamiento: en tanques de polietileno de alta densidad, fibra de vidrio (FRP) o materiales recubiertos resistentes — nunca en metal. Lejos de bases (sosa cáustica) y de oxidantes como el hipoclorito de sodio: la mezcla de ácido clorhídrico con hipoclorito libera cloro gas tóxico. Área techada y ventilada, con muro de contención y piso impermeable. La separación física de químicos incompatibles es la medida de seguridad más importante.",
        ],
      },
      {
        heading: "Cómo elegir un proveedor de ácido clorhídrico",
        paragraphs: [
          "Al elegir proveedor de ácido clorhídrico industrial, los aspectos a validar son: concentración garantizada y consistente (verificable en el COA), disponibilidad de hoja de seguridad SDS actualizada, presentaciones adecuadas al consumo de tu planta, y capacidad de entrega confiable.",
          "Industrias Trevigo distribuye ácido clorhídrico industrial al 31-33% desde nuestra planta en San Nicolás de los Garza, con SDS y COA por lote. Atendemos plantas de decapado, galvanizado, tratamiento de aguas y manufactura general en todo Nuevo León y el norte de México, con entrega en 48 horas en el Área Metropolitana de Monterrey y asesoría técnica para el manejo seguro.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿El ácido muriático es lo mismo que el ácido clorhídrico?",
        a: "Sí, químicamente son el mismo compuesto (HCl en solución acuosa). 'Ácido muriático' es el nombre comercial del grado técnico industrial, que suele tener un ligero color amarillo por trazas de hierro. 'Ácido clorhídrico' es el nombre químico formal, usado para grados más puros. Para aplicaciones industriales de decapado y ajuste de pH, el grado muriático técnico es el estándar.",
      },
      {
        q: "¿Por qué no puedo usar ácido clorhídrico en acero inoxidable?",
        a: "Porque el ion cloruro del HCl ataca selectivamente la matriz cromo-níquel del acero inoxidable, causando picaduras (pitting) severas y corrosión por cloruros que destruyen el material. Para decapar o limpiar acero inoxidable se usan ácido nítrico, ácido cítrico o mezclas específicas que pasivan en lugar de atacar. Usar HCl en inoxidable es uno de los errores más costosos en talleres.",
      },
      {
        q: "¿En qué presentaciones venden ácido clorhídrico industrial?",
        a: "Trevigo distribuye ácido clorhídrico al 31-33% en porrón de 60 kg, tambor de 250 kg y contenedor IBC de 1,200-1,300 kg. Para grandes consumidores manejamos entrega a granel en pipa. Todas las presentaciones incluyen SDS y COA actualizados conforme NOM-018-STPS-2015, con entrega en 48 h en el Área Metropolitana de Monterrey.",
      },
    ],
    relatedProducts: ["acido-clorhidrico", "limpiador-acido-desincrustante"],
    cta: {
      title: "¿Necesitas ácido clorhídrico para tu proceso?",
      description:
        "Distribuimos ácido clorhídrico (muriático) industrial al 31-33% con SDS y COA incluidos. Entrega en 48 h en N.L. y asesoría técnica para manejo seguro y selección de concentración.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 21 — Aditivos para formular lubricantes (PRODUCTO — Blanca)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "aditivos-para-formular-lubricantes-guia",
    authorSlug: "blanca-garza",
    title:
      "Aditivos para formular lubricantes: qué son y cómo elegir el paquete correcto",
    metaTitle: "Aditivos para Formular Lubricantes: Guía de Selección",
    metaDescription:
      "Qué son los paquetes de aditivos para formular lubricantes, cómo elegirlos por tipo de aceite (motor, transmisión, hidráulico, engranes, grasa) y niveles API. Proveedor en México.",
    excerpt:
      "Un lubricante terminado es aceite base más un paquete de aditivos — y el paquete define el desempeño. Te explicamos qué hace cada tipo de aditivo, cómo elegir el correcto por aplicación y nivel de servicio API, y cómo dosificarlo.",
    category: "Lubricantes",
    readingTime: "9 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    keywords: [
      "aditivos para formular lubricantes",
      "paquete de aditivos lubricantes",
      "aditivo para aceite de motor",
      "formular aceite de motor diesel",
      "aditivos para lubricantes mexico",
      "additive package lubricantes",
    ],
    intro:
      "Un lubricante terminado no es solo aceite: es una fórmula de aceite base más un paquete de aditivos que le da su desempeño real. Los aditivos representan entre 5% y 30% de la formulación y son los responsables de casi todo lo que hace útil a un lubricante — la detergencia, la protección antidesgaste, la resistencia a la oxidación, el control de espuma y la modificación de fricción. Para un formulador o envasador de lubricantes, elegir el paquete de aditivos correcto es la decisión más importante del producto. En esta guía explicamos qué hace cada familia de aditivos, cómo seleccionar el paquete según el tipo de aceite y el nivel de servicio objetivo, y cómo dosificarlo correctamente.",
    sections: [
      {
        heading: "¿Qué es un paquete de aditivos y por qué importa tanto?",
        paragraphs: [
          "El aceite base — mineral o sintético — aporta la película lubricante y las propiedades de viscosidad, pero por sí solo no cumple las especificaciones de un lubricante moderno. Los aditivos son los componentes químicos que se dosifican sobre el aceite base para darle desempeño: sin ellos, un aceite de motor se degradaría en horas y no protegería el motor.",
          "Un 'paquete de aditivos' (additive package) es una mezcla ya balanceada de esos componentes, formulada para alcanzar un nivel de servicio específico (por ejemplo, API CK-4 para Diesel) con una dosificación porcentual definida. Comprar el paquete en lugar de cada aditivo por separado garantiza el balance correcto entre componentes — algo crítico, porque los aditivos interactúan entre sí y un desbalance puede anular el desempeño.",
        ],
      },
      {
        heading: "Qué hace cada familia de aditivos",
        paragraphs: [
          "Un paquete completo combina varias funciones químicas. Las principales son:",
        ],
        list: {
          items: [
            "Detergentes: neutralizan ácidos de la combustión y mantienen limpias las superficies calientes del motor. Aportan la reserva alcalina (TBN)",
            "Dispersantes: mantienen en suspensión el hollín y los contaminantes para que no formen lodos ni depósitos",
            "Antidesgaste (AW) y extrema presión (EP): forman una película protectora que evita el contacto metal-metal bajo carga. El ZDDP es el más común",
            "Antioxidantes: retrasan la degradación del aceite por oxidación, extendiendo la vida útil del lubricante",
            "Inhibidores de corrosión y herrumbre: protegen las superficies metálicas durante operación y paros",
            "Modificadores de fricción: reducen el coeficiente de fricción para mejorar eficiencia energética",
            "Antiespumantes: controlan la formación de espuma que interferiría con la lubricación",
            "Mejoradores de índice de viscosidad (VI): permiten formular lubricantes multigrado con viscosidad estable en frío y en caliente",
          ],
        },
      },
      {
        heading: "Cómo elegir el paquete según el tipo de lubricante",
        paragraphs: [
          "El paquete correcto depende de qué lubricante vas a formular. Cada aplicación tiene requisitos químicos distintos:",
        ],
        list: {
          items: [
            "Aceite de motor a Diesel: requiere alta detergencia/dispersancia y control de hollín. El nivel API (CF-CG4, CI-4 Plus, CK-4 Plus, CJ-4) define el tratamiento y el desempeño",
            "Aceite de motor a gasolina: balance de detergencia, antidesgaste y protección contra depósitos. Niveles API SL, SM, SN",
            "Transmisión automática (ATF): modificación de fricción precisa para el desempeño de embragues, más estabilidad térmica",
            "Fluidos hidráulicos: antidesgaste, antiespuma y demulsibilidad. Versiones con o sin cenizas (ashless) según el sistema",
            "Aceites de engranes: extrema presión (EP) para soportar las cargas de contacto de los dientes",
            "Grasas: aditivos EP y antidesgaste compatibles con el espesante y el aceite base de la grasa",
          ],
        },
      },
      {
        heading: "Dosificación: el porcentaje de tratamiento",
        paragraphs: [
          "Cada paquete se dosifica en un porcentaje específico sobre el aceite base — lo que se llama 'tratamiento'. La ficha técnica del paquete indica el porcentaje recomendado y el nivel de desempeño alcanzable a ese tratamiento. Los aceites de motor de alto desempeño requieren tratamientos mayores (por ejemplo 12-15%), mientras que un hidráulico puede necesitar solo 0.5-1%.",
          "Para formular un lubricante multigrado (por ejemplo 15W-40) se combina el paquete de desempeño con un mejorador de índice de viscosidad y, si es necesario, un depresor del punto de fluidez. El costo del tratamiento es una parte significativa del costo del lubricante terminado, por lo que optimizar la formulación — alcanzar la especificación con el menor tratamiento posible — tiene impacto directo en el margen.",
        ],
      },
      {
        heading: "Errores comunes al formular con aditivos",
        paragraphs: [
          "Los errores más frecuentes que vemos en formuladores nuevos son: (1) mezclar aditivos individuales sin conocer sus interacciones — el resultado suele ser peor que un paquete balanceado, (2) sub-dosificar para ahorrar costo, sacrificando el nivel de servicio real del producto, (3) usar un aceite base de calidad inferior a la que el paquete asume, lo que impide alcanzar la especificación, y (4) no verificar la formulación con pruebas de laboratorio antes de producir a escala.",
          "La buena práctica es partir del nivel de servicio objetivo, seleccionar un paquete diseñado para ese nivel, usar el aceite base especificado y validar la formulación con las pruebas correspondientes. En Trevigo ofrecemos asesoría técnica de formulación para ayudarte a alcanzar tu especificación objetivo con el mejor balance costo-desempeño.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo comprar aditivos individuales en lugar de un paquete?",
        a: "Para la mayoría de formuladores no se recomienda. Los aditivos interactúan químicamente entre sí — un detergente, un dispersante y un antidesgaste mal balanceados pueden anular su desempeño mutuo o generar incompatibilidades. Un paquete ya viene balanceado para un nivel de servicio específico. Solo formuladores muy avanzados con laboratorio propio formulan desde componentes individuales.",
      },
      {
        q: "¿Qué nivel API puedo alcanzar con sus aditivos?",
        a: "Nuestros paquetes BTA cubren los niveles de servicio más usados: Diesel API CF-CG4, CI-4 Plus, CK-4 Plus y CJ-4; gasolina API SL, SM-SN; más aplicaciones específicas como TO-4/Allison C-4. El nivel final depende de la combinación paquete + aceite base + viscosidad. Damos asesoría técnica para asegurar que tu formulación cumpla la especificación objetivo.",
      },
      {
        q: "¿En qué presentaciones venden los aditivos para lubricantes?",
        a: "Manejamos cubeta (19 L) para lotes pequeños y desarrollo de formulaciones, y tambo de 208 L para producción a escala. Todas las presentaciones incluyen ficha técnica y hoja de seguridad (SDS), con asesoría de formulación. Para grandes volúmenes coordinamos entrega programada.",
      },
    ],
    relatedProducts: [
      "bta-2000p1-diesel-ck4-plus",
      "bta-2091-gasolina-sm-sn",
      "bta-2012-modificador-viscosidad",
    ],
    cta: {
      title: "¿Formulas lubricantes y buscas un proveedor de aditivos?",
      description:
        "Distribuimos paquetes de aditivos BTA para formular aceites de motor, transmisión, hidráulicos, engranes y grasas. Cubeta y tambo de 208 L, con asesoría técnica de formulación. Cotización en 24 h.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 22 — Modificador de índice de viscosidad (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "modificador-indice-viscosidad-vi-lubricantes",
    authorSlug: "nohemi-cervantes",
    title:
      "Modificador de índice de viscosidad (VI): qué es y cómo funciona en un lubricante",
    metaTitle: "Modificador de Índice de Viscosidad (VI): Guía Técnica",
    metaDescription:
      "Qué es un mejorador de índice de viscosidad (VI), cómo permite formular lubricantes multigrado, tipos de polímeros VI y consideraciones de shear stability. Guía técnica.",
    excerpt:
      "El mejorador de índice de viscosidad es lo que hace posible un aceite multigrado como el 15W-40. Te explicamos cómo funciona el polímero VI, por qué estabiliza la viscosidad con la temperatura y qué es la estabilidad al corte.",
    category: "Lubricantes",
    readingTime: "8 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    keywords: [
      "modificador de indice de viscosidad",
      "mejorador de indice de viscosidad",
      "VI improver",
      "aceite multigrado como funciona",
      "indice de viscosidad lubricante",
      "polimero VI lubricante",
    ],
    intro:
      "¿Por qué un aceite 15W-40 puede fluir en frío como un aceite ligero y proteger en caliente como uno pesado? La respuesta es un aditivo específico: el mejorador de índice de viscosidad (VI improver). Es el componente que hace posibles los lubricantes multigrado modernos, y entender cómo funciona es clave para cualquiera que formule aceites de motor, hidráulicos o de engranes multigrado. En esta guía técnica explicamos qué es el índice de viscosidad, cómo actúa el polímero VI a nivel molecular, los tipos disponibles y la consideración crítica de estabilidad al corte.",
    sections: [
      {
        heading: "¿Qué es el índice de viscosidad?",
        paragraphs: [
          "Todo aceite se adelgaza al calentarse y se espesa al enfriarse — pero unos lo hacen más que otros. El índice de viscosidad (IV o VI) es un número adimensional que mide qué tan estable es la viscosidad de un aceite frente a los cambios de temperatura: mientras mayor es el VI, menos cambia la viscosidad con la temperatura.",
          "Un aceite base mineral típico tiene un VI de 90-105. Para aplicaciones que operan en un rango amplio de temperatura — un motor que arranca en frío y opera caliente, o maquinaria expuesta a la intemperie — se necesita un VI mucho más alto. Ahí entra el mejorador de índice de viscosidad, que puede elevar el VI de una formulación a 150 o más.",
        ],
      },
      {
        heading: "Cómo funciona el polímero VI a nivel molecular",
        paragraphs: [
          "El mejorador de índice de viscosidad es un polímero de cadena larga que se disuelve en el aceite base. Su comportamiento depende de la temperatura de una forma muy útil: en frío, las moléculas del polímero están contraídas (ovilladas) y contribuyen poco a la viscosidad, permitiendo que el aceite fluya fácilmente. Al calentarse, las cadenas del polímero se expanden y se despliegan, aumentando su contribución a la viscosidad — compensando el adelgazamiento natural del aceite base.",
          "El resultado neto es un aceite cuya viscosidad cambia mucho menos con la temperatura que el aceite base solo: fluye en frío (facilitando el arranque y la lubricación inmediata) y mantiene película en caliente (protegiendo bajo carga térmica). Este mecanismo es lo que permite formular un multigrado como 15W-40 o 5W-30 a partir de un aceite base ligero.",
        ],
      },
      {
        heading: "Tipos de polímeros mejoradores de VI",
        paragraphs: [
          "Existen varias familias de polímeros VI, cada una con un balance distinto entre desempeño, costo y estabilidad al corte:",
        ],
        list: {
          items: [
            "Copolímeros de olefina (OCP): los más usados por su buen balance costo-desempeño. Comunes en aceites de motor",
            "Polimetacrilatos (PMA): excelente desempeño a baja temperatura y buenas propiedades de flujo en frío. Usados en hidráulicos y ATF",
            "Copolímeros estireno-diénicos hidrogenados: alto engrosamiento y buena estabilidad al corte. Para formulaciones de alto desempeño",
            "Copolímeros estireno-éster: multifuncionales, combinan mejora de VI con propiedades dispersantes o de flujo en frío",
          ],
        },
      },
      {
        heading: "La consideración crítica: estabilidad al corte (shear stability)",
        paragraphs: [
          "El talón de Aquiles de los polímeros VI es la estabilidad al corte. Bajo el esfuerzo mecánico intenso de un motor o una bomba — donde el aceite pasa por holguras estrechas a alta velocidad — las cadenas largas del polímero pueden romperse permanentemente. Cuando eso ocurre, el polímero pierde su capacidad de engrosar y la viscosidad del aceite cae de forma permanente: el aceite 'pierde grado'.",
          "Por eso, al formular con un mejorador de VI, no basta con alcanzar la viscosidad objetivo cuando el aceite es nuevo — hay que asegurar que la mantenga después del corte. Esto se mide con pruebas de estabilidad al corte (como el ensayo de inyector Bosch o KRL). Un polímero de mayor estabilidad al corte cuesta más pero mantiene el grado de viscosidad durante toda la vida útil del lubricante, lo que es crítico en aceites de motor de servicio pesado y drenados extendidos.",
        ],
      },
      {
        heading: "Cómo se usa en una formulación multigrado",
        paragraphs: [
          "Formular un multigrado combina tres elementos: un aceite base de baja viscosidad (que da el buen flujo en frío del grado 'W'), el mejorador de índice de viscosidad (que aporta el engrosamiento en caliente para alcanzar el grado alto), y el paquete de aditivos de desempeño. La dosificación del VI improver se ajusta para alcanzar exactamente la viscosidad objetivo a 100°C.",
          "La selección del polímero VI correcto depende del tipo de lubricante, el rango de grados a cubrir y la severidad del servicio. Para un aceite de motor de servicio pesado con drenados largos, se prioriza la estabilidad al corte; para un hidráulico, las propiedades de flujo en frío. En Trevigo ofrecemos el mejorador de índice de viscosidad y asesoría de formulación para integrarlo correctamente en tu producto multigrado.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué pasa si uso demasiado mejorador de índice de viscosidad?",
        a: "Sobredosificar el polímero VI encarece la formulación y, más importante, aumenta el riesgo de pérdida de viscosidad por corte — porque hay más polímero que puede romperse bajo esfuerzo mecánico. También puede afectar la volatilidad y el desempeño a baja temperatura. La práctica correcta es usar la mínima cantidad de VI que alcance la viscosidad objetivo, apoyándose en un aceite base de VI adecuado.",
      },
      {
        q: "¿Por qué mi aceite multigrado 'pierde grado' con el uso?",
        a: "Es degradación por corte del polímero VI. Bajo el esfuerzo mecánico del motor o la bomba, las cadenas largas del polímero se rompen permanentemente y pierden su capacidad de engrosar — la viscosidad cae y el aceite baja de grado (por ejemplo, un 15W-40 se comporta como 15W-30). La solución es formular con un polímero VI de mayor estabilidad al corte, adecuado a la severidad del servicio.",
      },
      {
        q: "¿Venden el mejorador de índice de viscosidad por separado?",
        a: "Sí. Distribuimos el aditivo modificador de índice de viscosidad para que lo integres en tus formulaciones multigrado, junto con los paquetes de aditivos de desempeño. Lo manejamos en cubeta y tambo de 208 L, con asesoría técnica para determinar el tipo y la dosificación correcta según tu lubricante y nivel de servicio.",
      },
    ],
    relatedProducts: [
      "bta-2012-modificador-viscosidad",
      "bta-2050-antifriccionante",
      "bta-2004-hidraulicos",
    ],
    cta: {
      title: "¿Formulas lubricantes multigrado?",
      description:
        "Distribuimos mejoradores de índice de viscosidad y paquetes de aditivos para formular lubricantes multigrado. Cubeta y tambo de 208 L, con asesoría técnica de formulación.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 23 — Clasificación API aceites de motor (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "clasificacion-api-aceite-motor-diesel-gasolina",
    authorSlug: "nohemi-cervantes",
    title:
      "Clasificación API de aceites de motor: qué significan CK-4, CJ-4, SN y cómo elegir",
    metaTitle: "Clasificación API de Aceites de Motor (CK-4, CJ-4, SN): Guía",
    metaDescription:
      "Qué significan las clasificaciones API de aceites de motor: categorías C (Diesel) y S (gasolina), CK-4 vs CJ-4, SM-SN, compatibilidad y cómo elegir la correcta para formular.",
    excerpt:
      "CK-4, CJ-4, SM, SN... la nomenclatura API confunde a muchos. Te explicamos qué significa cada letra y número, la diferencia entre categorías Diesel y gasolina, y cómo saber cuál necesitas para formular tu aceite.",
    category: "Lubricantes",
    readingTime: "8 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    keywords: [
      "clasificacion API aceite de motor",
      "que significa API CK-4",
      "API CJ-4 vs CK-4",
      "API SN gasolina",
      "categorias API aceite motor",
      "niveles de servicio API",
    ],
    intro:
      "Si formulas o vendes aceites de motor, entender la clasificación API (American Petroleum Institute) no es opcional: es el lenguaje con el que se define el nivel de servicio de un lubricante. La nomenclatura — CK-4, CJ-4, SN, SP — parece un código arbitrario, pero cada letra y número tiene un significado preciso que determina para qué motor sirve el aceite y qué desempeño garantiza. En esta guía explicamos cómo leer la clasificación API, la diferencia entre las categorías para Diesel y gasolina, y cómo saber qué nivel necesitas al formular.",
    sections: [
      {
        heading: "Cómo se lee la clasificación API",
        paragraphs: [
          "La clasificación API para aceites de motor usa dos letras. La primera indica el tipo de motor: 'C' (Commercial) para motores a Diesel, 'S' (Service/Spark) para motores a gasolina. La segunda letra indica el nivel de desempeño, avanzando alfabéticamente con cada generación: cuanto más avanzada la letra, más reciente y exigente la categoría.",
          "Así, API CK-4 es una categoría para Diesel (C) de nivel K, más reciente que CJ-4 (nivel J). API SN es para gasolina (S) de nivel N, más reciente que SM. El número que a veces aparece (CK-4, CJ-4) se refiere a la aplicación de motor de 4 tiempos. Las categorías más nuevas generalmente son compatibles hacia atrás — un CK-4 puede usarse donde se pedía CJ-4 — pero no al revés en motores modernos.",
        ],
      },
      {
        heading: "Categorías para motores a Diesel (serie C)",
        paragraphs: [
          "Las categorías Diesel han evolucionado siguiendo las normas de emisiones y la tecnología de postratamiento de gases. Las relevantes hoy:",
        ],
        list: {
          items: [
            "CF-4 / CG-4: categorías de generación anterior para motores Diesel de aspiración natural y turbo sin postratamiento",
            "CI-4 Plus: para motores con recirculación de gases (EGR); control reforzado de hollín",
            "CJ-4: bajo contenido de cenizas sulfatadas (low SAPS); protege el filtro de partículas Diesel (DPF)",
            "CK-4: la categoría vigente (2016+); mejor estabilidad al corte y oxidación, compatible con DPF/SCR",
            "FA-4: subcategoría CK-4 de menor viscosidad (HTHS) para economía de combustible en motores específicos — NO intercambiable con CK-4",
          ],
        },
      },
      {
        heading: "Categorías para motores a gasolina (serie S)",
        paragraphs: [
          "Las categorías de gasolina han evolucionado hacia mayor protección de sistemas de emisiones, economía de combustible y protección de motores turbo modernos:",
        ],
        list: {
          items: [
            "SL: protección contra depósitos y compatibilidad con catalizador; vehículos de principios de los 2000",
            "SM: mayor resistencia a la oxidación y protección de depósitos a alta temperatura",
            "SN: control de LSPI reducido, protección de turbo y compatibilidad con biocombustibles (E85)",
            "SP: la más reciente; máxima protección LSPI para motores turbo de inyección directa y economía de combustible",
          ],
        },
      },
      {
        heading: "Cómo elegir la categoría al formular",
        paragraphs: [
          "La regla es formular al nivel de servicio que exige el parque de motores objetivo. Si produces aceite para flotillas de camiones modernos (2017+) con postratamiento, necesitas CK-4. Si atiendes maquinaria agrícola vieja, un CF-4/CG-4 cumple a menor costo. Formular por encima de lo necesario encarece el producto; formular por debajo deja motores desprotegidos y expone a reclamos.",
          "El nivel API se alcanza combinando el paquete de aditivos correcto, el aceite base adecuado (grupo I, II o III) y la viscosidad objetivo. Un mismo paquete puede alcanzar distintos grados de viscosidad (15W-40, 10W-30) con el mejorador de índice de viscosidad apropiado. En Trevigo ofrecemos paquetes BTA para cada nivel API y asesoría de formulación para alcanzar la especificación con el mejor balance costo-desempeño.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Un aceite CK-4 puede reemplazar a uno CJ-4?",
        a: "Sí, en la mayoría de los casos. CK-4 es compatible hacia atrás con CJ-4 y categorías anteriores, con mejor estabilidad al corte y oxidación. La excepción a vigilar es FA-4, una subcategoría de menor viscosidad HTHS que NO es intercambiable con CK-4 y solo debe usarse en motores específicamente diseñados para ella.",
      },
      {
        q: "¿Qué significa 'low SAPS' en un aceite Diesel?",
        a: "SAPS son las siglas de Sulfated Ash, Phosphorus and Sulfur (cenizas sulfatadas, fósforo y azufre). Un aceite 'low SAPS' tiene niveles reducidos de estos componentes para proteger los sistemas de postratamiento de gases (filtro de partículas DPF y catalizador SCR) de los motores Diesel modernos. Las categorías CJ-4 y CK-4 son low SAPS.",
      },
      {
        q: "¿La clasificación API es lo mismo que la especificación del fabricante?",
        a: "No exactamente. API define un nivel de servicio genérico de la industria. Los fabricantes (OEM) como Mack, Volvo, Cummins, Mercedes o GM tienen además sus propias especificaciones que pueden ser más exigentes o específicas que la categoría API equivalente. Para aprobación OEM formal se requiere cumplir la especificación del fabricante, no solo la categoría API.",
      },
    ],
    relatedProducts: [
      "bta-2000p1-diesel-ck4-plus",
      "bta-2095-diesel-cj4",
      "bta-2091-gasolina-sm-sn",
    ],
    cta: {
      title: "¿Formulas aceites de motor a distintos niveles API?",
      description:
        "Distribuimos paquetes de aditivos BTA para cada nivel de servicio API — Diesel CF-CG4 a CK-4 Plus, gasolina SL a SM-SN. Asesoría de formulación y entrega en cubeta y tambo de 208 L.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 24 — Grupos de aceite base (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "grupos-aceite-base-api-i-ii-iii-iv-v",
    authorSlug: "nohemi-cervantes",
    title:
      "Grupos de aceite base (I, II, III, IV, V): cuál usar para formular tu lubricante",
    metaTitle: "Grupos de Aceite Base API (I, II, III, IV, V): Guía de Selección",
    metaDescription:
      "Qué son los grupos de aceite base API (I, II, III, IV PAO, V), sus diferencias en índice de viscosidad y pureza, y cómo elegir el correcto para formular lubricantes.",
    excerpt:
      "El aceite base es la mitad de la ecuación en un lubricante. Te explicamos los cinco grupos API de aceites base, en qué se diferencian (VI, azufre, saturados) y cómo elegir el correcto según el lubricante que formulas.",
    category: "Lubricantes",
    readingTime: "8 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    keywords: [
      "grupos de aceite base",
      "aceite base grupo II",
      "aceite base grupo III",
      "PAO grupo IV",
      "aceite base API",
      "base oil groups",
    ],
    intro:
      "Un lubricante terminado es aceite base más un paquete de aditivos — y la calidad del aceite base determina buena parte del desempeño final. El API clasifica los aceites base en cinco grupos según su método de refinación y sus propiedades. Elegir el grupo correcto es tan importante como elegir el paquete de aditivos: un paquete de alto desempeño sobre un aceite base pobre no alcanza la especificación. En esta guía explicamos los cinco grupos de aceite base, sus diferencias y cómo seleccionarlos al formular.",
    sections: [
      {
        heading: "Qué define a un grupo de aceite base",
        paragraphs: [
          "El API clasifica los aceites base según tres parámetros: el porcentaje de hidrocarburos saturados, el contenido de azufre y el índice de viscosidad (VI). Estos parámetros reflejan qué tan refinado y estable es el aceite: más saturados y menos azufre significan mayor resistencia a la oxidación y mejor desempeño; un VI más alto significa que la viscosidad cambia menos con la temperatura.",
          "La clasificación va del grupo I (el menos refinado, mineral convencional) al grupo V (bases especiales como ésteres). Entre ellos, los grupos II y III (minerales de alto refinamiento por hidroprocesamiento) y el IV (sintéticos PAO) dominan la formulación moderna de lubricantes de alto desempeño.",
        ],
      },
      {
        heading: "Los cinco grupos de aceite base",
        paragraphs: [
          "Cada grupo tiene un perfil de propiedades y un rango de aplicaciones:",
        ],
        list: {
          items: [
            "Grupo I: mineral por refinación con solvente. Menos del 90% de saturados, más de 0.03% de azufre, VI 80-120. El más económico; para lubricantes industriales y de motor de gama básica",
            "Grupo II: mineral hidroprocesado. Más del 90% de saturados, menos de 0.03% de azufre, VI 80-120. Mejor estabilidad y color; el estándar actual para aceites de motor",
            "Grupo III: mineral severamente hidroprocesado. VI mayor a 120. Muy alto desempeño, se comercializa a veces como 'sintético'; para aceites de motor premium y de baja viscosidad",
            "Grupo IV: polialfaolefinas (PAO), sintético verdadero. Excelente VI, estabilidad térmica y desempeño a baja temperatura; para lubricantes sintéticos de alto desempeño",
            "Grupo V: todas las demás bases (ésteres, poliglicoles, nafténicos, etc.). Se usan como complemento o para aplicaciones especiales que requieren propiedades específicas",
          ],
        },
      },
      {
        heading: "Cómo elegir el grupo según el lubricante",
        paragraphs: [
          "La selección del grupo de aceite base depende del nivel de desempeño objetivo y del costo aceptable. Como guía general: para lubricantes industriales básicos y aceites de motor de gama económica, el grupo I sigue siendo válido y económico. Para aceites de motor modernos (API SN, CK-4), el grupo II es el estándar. Para multigrados de baja viscosidad y larga vida (5W-30, 0W-20), el grupo III o mezclas con PAO permiten alcanzar el VI y la volatilidad requeridos.",
          "El aceite base y el paquete de aditivos deben elegirse en conjunto: un paquete API CK-4 asume cierta calidad de base. Formular ese paquete sobre grupo I probablemente no alcance la especificación de oxidación. En Trevigo damos asesoría de formulación considerando el aceite base disponible para asegurar que la combinación alcance tu especificación objetivo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Un aceite grupo III es realmente sintético?",
        a: "Es un tema debatido. Técnicamente el grupo III es un aceite mineral severamente hidroprocesado, no un sintético 'construido' molecularmente como el PAO (grupo IV). Sin embargo, en muchos mercados — incluido México y Estados Unidos — se permite comercializarlo como 'sintético' por su desempeño equivalente. En rigor técnico, solo el grupo IV (PAO) y ciertas bases del grupo V son sintéticos verdaderos.",
      },
      {
        q: "¿Puedo mezclar aceites base de distintos grupos?",
        a: "Sí, y es una práctica común en formulación. Por ejemplo, mezclar grupo III con PAO (grupo IV) o con un éster (grupo V) para alcanzar un balance de VI, solubilidad de aditivos y desempeño a baja temperatura. La clave es validar la compatibilidad y que la mezcla alcance las propiedades objetivo. La solubilidad de aditivos es una razón común para añadir un éster del grupo V a formulaciones con PAO.",
      },
      {
        q: "¿Por qué importa el índice de viscosidad del aceite base?",
        a: "Porque determina cuánto mejorador de índice de viscosidad (VI) necesitas para alcanzar un multigrado. Un aceite base de VI alto (grupo III) requiere menos polímero VI para formular un 5W-30, lo que mejora la estabilidad al corte del producto final. Un aceite base de VI bajo (grupo I) necesita más polímero, con mayor riesgo de pérdida de grado por corte.",
      },
    ],
    relatedProducts: [
      "bta-2012-modificador-viscosidad",
      "bta-2000p1-diesel-ck4-plus",
      "bta-2091-gasolina-sm-sn",
    ],
    cta: {
      title: "¿Formulas lubricantes y necesitas asesoría de aceite base?",
      description:
        "Damos asesoría de formulación considerando tu aceite base disponible y el paquete de aditivos objetivo. Distribuimos aditivos BTA para todos los niveles de servicio. Cubeta y tambo de 208 L.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 25 — Cómo formular aceite de motor (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "como-formular-aceite-motor-multigrado",
    authorSlug: "nohemi-cervantes",
    title:
      "Cómo formular un aceite de motor multigrado: aceite base, paquete de aditivos y VI",
    metaTitle: "Cómo Formular Aceite de Motor Multigrado: Guía Paso a Paso",
    metaDescription:
      "Guía para formular un aceite de motor multigrado (15W-40, 5W-30): selección de aceite base, paquete de aditivos, mejorador de índice de viscosidad y validación de la fórmula.",
    excerpt:
      "Formular un 15W-40 no es mezclar al azar: es combinar aceite base, paquete de aditivos y mejorador de VI en las proporciones correctas. Te explicamos el proceso paso a paso y los errores que arruinan una formulación.",
    category: "Lubricantes",
    readingTime: "9 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    keywords: [
      "como formular aceite de motor",
      "formular aceite multigrado",
      "formulacion 15W-40",
      "blending aceite de motor",
      "tratamiento de aditivos aceite motor",
      "como hacer aceite de motor",
    ],
    intro:
      "Formular un aceite de motor multigrado — un 15W-40, un 5W-30 — combina tres elementos en proporciones precisas: el aceite base, el paquete de aditivos de desempeño y el mejorador de índice de viscosidad. No es una mezcla al azar: cada componente cumple una función y la proporción determina si el producto alcanza el grado de viscosidad y el nivel de servicio API objetivo. En esta guía explicamos el proceso de formulación paso a paso, desde la selección de componentes hasta la validación de la fórmula, y los errores más comunes que hay que evitar.",
    sections: [
      {
        heading: "Los tres componentes de un aceite multigrado",
        paragraphs: [
          "Un aceite de motor multigrado se construye con: (1) el aceite base, que aporta la película lubricante y la mayor parte del volumen (70-90%); (2) el paquete de aditivos, que aporta el desempeño — detergencia, dispersancia, antidesgaste, antioxidación — y define el nivel API (10-18%); y (3) el mejorador de índice de viscosidad, el polímero que permite el comportamiento multigrado (unos pocos por ciento).",
          "El grado de viscosidad SAE (el '15W-40') describe el comportamiento: el número con 'W' (Winter) indica el flujo en frío, y el número sin W la viscosidad a 100 °C. Un multigrado cumple ambos: fluye en frío como un grado ligero y protege en caliente como uno pesado, gracias al mejorador de VI.",
        ],
      },
      {
        heading: "Paso a paso de la formulación",
        paragraphs: [
          "El proceso de formulación sigue una secuencia lógica:",
        ],
        list: {
          items: [
            "1. Definir el objetivo: grado SAE (ej. 15W-40) y nivel de servicio API (ej. CK-4). Esto determina todos los componentes",
            "2. Seleccionar el aceite base: grupo y viscosidad según el objetivo. Para un 15W-40 CK-4, típicamente grupo II de viscosidad adecuada",
            "3. Seleccionar y dosificar el paquete de aditivos: el paquete del nivel API objetivo, al porcentaje de tratamiento indicado en ficha técnica",
            "4. Añadir el mejorador de índice de viscosidad: dosificar hasta alcanzar la viscosidad objetivo a 100 °C",
            "5. Ajustar el flujo en frío: si es necesario, un depresor del punto de fluidez para el grado 'W'",
            "6. Mezclar (blending): homogeneizar a temperatura controlada según el procedimiento",
            "7. Validar: verificar viscosidad (40 y 100 °C), índice de viscosidad, TBN y demás propiedades en laboratorio antes de producir a escala",
          ],
        },
      },
      {
        heading: "Cómo se alcanza el grado de viscosidad",
        paragraphs: [
          "El grado de viscosidad se alcanza combinando la viscosidad del aceite base con el aporte del mejorador de VI. Se parte de un aceite base más ligero de lo que sería el grado final, y el polímero VI aporta el engrosamiento en caliente para llegar a la viscosidad objetivo a 100 °C. Cuanto más ligero el aceite base y mayor la brecha entre los grados (por ejemplo 5W-40 vs 15W-40), más mejorador de VI se necesita.",
          "Aquí está el equilibrio clave: más polímero VI permite grados más amplios, pero aumenta el riesgo de pérdida de viscosidad por corte en servicio. Por eso, para grados exigentes se usa un aceite base de VI alto (grupo III) que requiere menos polímero, o un polímero VI de alta estabilidad al corte. La formulación óptima alcanza el grado con la mínima cantidad de VI necesaria.",
        ],
      },
      {
        heading: "Errores comunes al formular",
        paragraphs: [
          "Los errores que más comprometen una formulación son: (1) sub-dosificar el paquete de aditivos para ahorrar costo, lo que baja el nivel de servicio real por debajo de lo etiquetado; (2) usar un aceite base de calidad inferior a la que el paquete asume, impidiendo alcanzar la especificación de oxidación; (3) sobredosificar el mejorador de VI, aumentando el riesgo de pérdida de grado por corte; y (4) no validar la fórmula en laboratorio antes de producir a escala.",
          "La buena práctica es partir del objetivo (grado + nivel API), seleccionar componentes compatibles con ese objetivo, y validar cada lote con pruebas de viscosidad, VI y TBN. En Trevigo ofrecemos los paquetes de aditivos, el mejorador de índice de viscosidad y asesoría técnica de formulación para ayudarte a construir tu producto con el balance correcto de costo y desempeño.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué proporción de aditivos lleva un aceite de motor multigrado?",
        a: "Depende del nivel de servicio. Un aceite de motor a gasolina básico puede llevar 8-12% de paquete de aditivos; un Diesel de servicio pesado API CK-4 requiere 12-18%. A eso se suma el mejorador de índice de viscosidad (unos pocos por ciento) para lograr el comportamiento multigrado. El resto — 70-90% — es aceite base. Las proporciones exactas las indica la ficha técnica del paquete.",
      },
      {
        q: "¿Puedo formular un aceite multigrado sin mejorador de índice de viscosidad?",
        a: "En general no para grados amplios. El mejorador de VI es lo que permite el comportamiento multigrado (fluir en frío y proteger en caliente). Sin él, tendrías un monogrado. La única excepción parcial son ciertos aceites base de muy alto índice de viscosidad (grupo III/IV) que pueden alcanzar grados multigrado estrechos con poco o ningún polímero, pero para la mayoría de multigrados comerciales el mejorador de VI es necesario.",
      },
      {
        q: "¿Trevigo ayuda con la formulación completa o solo vende los aditivos?",
        a: "Ambas cosas. Distribuimos los paquetes de aditivos BTA, el mejorador de índice de viscosidad y demás componentes, y ofrecemos asesoría técnica de formulación: te ayudamos a seleccionar el aceite base, calcular el tratamiento y ajustar la fórmula para alcanzar tu grado y nivel API objetivo. La validación final de laboratorio es responsabilidad del formulador, pero te orientamos en el proceso.",
      },
    ],
    relatedProducts: [
      "bta-2000p1-diesel-ck4-plus",
      "bta-2012-modificador-viscosidad",
      "bta-2091-gasolina-sm-sn",
    ],
    cta: {
      title: "¿Vas a formular tu propia línea de lubricantes?",
      description:
        "Te damos los paquetes de aditivos, el mejorador de índice de viscosidad y la asesoría técnica de formulación para construir tu producto. Cubeta y tambo de 208 L, entrega en N.L.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 26 — Despintado de bastidores y cadenas (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "despintado-bastidores-cadenas-pintura-electrostatica",
    authorSlug: "nohemi-cervantes",
    title:
      "Despintado de bastidores y cadenas de pintura electrostática: por qué, cómo y cada cuánto",
    metaTitle: "Despintado de Bastidores de Pintura Electrostática: Guía",
    metaDescription:
      "Por qué los bastidores y cadenas de una línea de pintura electrostática deben despintarse, el proceso de despintado alcalino por inmersión y cómo definir la frecuencia correcta.",
    excerpt:
      "Los bastidores saturados de pintura pierden conductividad y arruinan la calidad del recubrimiento — sin que la pistola ni la pintura tengan la culpa. Te explicamos por qué, cómo despintarlos y cada cuánto hacerlo.",
    category: "Tratamiento de Metales",
    readingTime: "8 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    keywords: [
      "despintado de bastidores",
      "despintado de racks pintura",
      "despintado cadenas de pintura",
      "bastidores pintura electrostatica",
      "recuperar conductividad bastidores",
      "removedor de pintura bastidores",
    ],
    intro:
      "En una línea de pintura electrostática, los bastidores, ganchos y cadenas transportadoras son componentes críticos que suelen pasar desapercibidos — hasta que la calidad del recubrimiento cae y nadie sabe por qué. La causa, muchas veces, no es la pintura ni la pistola ni el horno: son los bastidores saturados de pintura acumulada, que pierden la conductividad eléctrica necesaria para un buen depósito. En esta guía técnica explicamos por qué hay que despintar los bastidores y cadenas periódicamente, cómo se hace el despintado alcalino por inmersión, y cómo definir la frecuencia correcta para tu línea.",
    sections: [
      {
        heading: "Por qué los bastidores pierden conductividad",
        paragraphs: [
          "La pintura electrostática funciona cargando eléctricamente el polvo y conectando la pieza a tierra a través del bastidor: las partículas cargadas son atraídas a la superficie aterrizada y se depositan de forma uniforme, incluso envolviendo bordes y geometrías complejas (el llamado efecto Faraday). Para que esto funcione, la continuidad eléctrica entre la pieza, el bastidor y la línea debe ser buena.",
          "El problema es que cada ciclo de horneado deja una capa de pintura curada sobre el bastidor. La pintura es un aislante eléctrico: al acumularse ciclo tras ciclo, rompe el contacto a tierra. El bastidor deja de aterrizar correctamente la pieza, el depósito de polvo se vuelve irregular y la calidad cae. Es un deterioro gradual y silencioso que se confunde fácilmente con problemas de equipo.",
        ],
      },
      {
        heading: "Síntomas de bastidores saturados",
        paragraphs: [
          "Antes de reajustar pistolas o cambiar pintura, vale la pena revisar los bastidores. Los síntomas típicos de saturación son:",
        ],
        list: {
          items: [
            "Caída gradual del espesor de recubrimiento sin cambios en el proceso",
            "Mal cubrimiento en geometrías complejas, esquinas y zonas internas (pérdida del efecto Faraday)",
            "Aumento del rechazo y del reproceso sin causa aparente en pistola u horno",
            "Necesidad de subir el voltaje o acercar las pistolas para lograr el mismo resultado",
            "Puntos de contacto del bastidor visiblemente cubiertos de pintura",
          ],
        },
      },
      {
        heading: "El proceso de despintado alcalino por inmersión",
        paragraphs: [
          "El método estándar para recuperar bastidores y cadenas es el despintado alcalino por inmersión. Los bastidores se sumergen en tinas calefaccionadas a 60-90°C con un removedor alcalino que disuelve la pintura en polvo, el e-coat y los primers epóxicos acumulados, en tiempos de 30 minutos a 4 horas según el espesor. Tras retirar la pintura levantada se enjuaga con agua y se seca.",
          "Es el método preferido para bastidores de acero al carbón porque cuesta menos por kilo de pintura removida, permite alta rotación y no ataca el metal base ni deforma los puntos de contacto. La clave está en usar el removedor formulado para el tipo de pintura de la planta y controlar temperatura y tiempo de inmersión. El bastidor regresa a la línea con su conductividad restaurada.",
        ],
      },
      {
        heading: "Cómo definir la frecuencia de despintado",
        paragraphs: [
          "No hay un número universal: la frecuencia óptima depende del volumen de producción y del tipo de pintura. Como referencia, las líneas de alta producción despintan cada 1-2 semanas (o cada 50-100 ciclos), mientras que las líneas medianas lo hacen cada 1-2 meses (100-200 ciclos). La señal práctica es la caída de calidad del recubrimiento por pérdida de conductividad.",
          "Despintar demasiado tarde genera rechazo y reproceso; despintar demasiado seguido es un costo innecesario. Lo ideal es establecer un programa preventivo basado en el conteo de ciclos y el monitoreo de calidad, no esperar a que aparezca el problema. Un baño de despintado bien controlado — midiendo concentración del agente activo y carga de pintura disuelta — mantiene su eficiencia lote tras lote.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué cae la calidad de mi pintura en polvo si no cambié nada del proceso?",
        a: "La causa más común y menos revisada son los bastidores saturados de pintura acumulada, que pierden conductividad y rompen el contacto a tierra necesario para el efecto Faraday. Antes de reajustar pistolas u horno, revisa el estado de los bastidores: si los puntos de contacto están cubiertos de pintura, necesitan despintado. Recuperan la calidad al restaurar la conductividad.",
      },
      {
        q: "¿El despintado por inmersión daña los bastidores?",
        a: "No, si se usa el removedor y los parámetros correctos. Los removedores alcalinos calientes disuelven la pintura sin atacar el acero al carbón ni deformar los puntos de contacto. El control de temperatura (60-90°C) y tiempo de inmersión es clave. Por eso conviene formular el removedor a la medida del tipo de pintura y controlar el baño.",
      },
      {
        q: "¿Cada cuánto conviene despintar los bastidores?",
        a: "Depende del volumen y el tipo de pintura: líneas de alta producción cada 1-2 semanas (50-100 ciclos), líneas medianas cada 1-2 meses (100-200 ciclos). Lo mejor es un programa preventivo basado en conteo de ciclos y monitoreo de calidad, en lugar de esperar a que aparezca el rechazo.",
      },
    ],
    relatedProducts: [
      "removedor-alcalino-pinturas",
      "removedor-intensivo-superficies",
      "removedor-pintura-cloruro-metileno",
    ],
    cta: {
      title: "¿Tus bastidores de pintura están perdiendo conductividad?",
      description:
        "Suministramos los removedores alcalinos especializados y la asesoría de proceso para despintar cadenas y bastidores de tu línea de pintura. Recupera la calidad del recubrimiento. Cotización en 24 h.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ARTÍCULO 27 — Fallas de calidad en pintura en polvo (PROCESO — Nohemí)
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "fallas-calidad-pintura-polvo-bastidores",
    authorSlug: "nohemi-cervantes",
    title:
      "Fallas de calidad en pintura en polvo: cuándo el problema son los bastidores",
    metaTitle: "Fallas de Calidad en Pintura en Polvo: Diagnóstico",
    metaDescription:
      "Cómo diagnosticar fallas de calidad en pintura electrostática en polvo: mal cubrimiento, bajo espesor y rechazo. Cuándo la causa raíz son los bastidores saturados y cómo resolverlo.",
    excerpt:
      "Antes de culpar a la pistola, la pintura o el horno, revisa los bastidores. Te damos un árbol de diagnóstico para fallas de pintura en polvo y explicamos por qué los bastidores saturados son una causa raíz frecuente y subestimada.",
    category: "Tratamiento de Metales",
    readingTime: "8 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    keywords: [
      "fallas pintura en polvo",
      "problemas pintura electrostatica",
      "mal cubrimiento pintura en polvo",
      "bajo espesor pintura electrostatica",
      "efecto faraday pintura",
      "rechazo pintura en polvo",
    ],
    intro:
      "Cuando aumenta el rechazo en una línea de pintura electrostática, la reacción habitual es reajustar las pistolas, revisar el horno o cambiar de pintura. Muchas veces, después de horas de ajustes, el problema persiste — porque la causa raíz estaba en un componente que casi nadie revisa: los bastidores. En esta guía técnica ofrecemos un árbol de diagnóstico para las fallas más comunes de pintura en polvo y explicamos por qué los bastidores saturados son una causa raíz frecuente y subestimada.",
    sections: [
      {
        heading: "Las fallas de calidad más comunes y sus causas",
        paragraphs: [
          "Las fallas de pintura en polvo suelen agruparse en unas pocas categorías, cada una con varias causas posibles:",
        ],
        list: {
          items: [
            "Bajo espesor o cubrimiento irregular: presión de pistola, distancia, voltaje, o pérdida de conductividad del bastidor",
            "Mal cubrimiento en esquinas y zonas internas: pérdida del efecto Faraday, frecuentemente por aterrizaje deficiente del bastidor",
            "Cráteres y contaminación: contaminación del polvo, aire con aceite, o mala limpieza previa de la pieza",
            "Mala adherencia: pretratamiento (desengrase/fosfatado) deficiente o curado incorrecto en horno",
            "Variación de color o brillo: curado fuera de rango de temperatura o tiempo",
          ],
        },
      },
      {
        heading: "El árbol de diagnóstico: aísla la variable",
        paragraphs: [
          "El error más costoso es cambiar varias cosas a la vez. El diagnóstico correcto aísla una variable a la vez. Un orden lógico: (1) verificar el pretratamiento con una pieza testigo — si la adherencia falla, el problema está antes de la pintura; (2) verificar el curado con cintas testigo de temperatura en el horno; (3) verificar la aplicación (pistola, voltaje, distancia) con parámetros documentados; y (4) verificar la conductividad de los bastidores.",
          "Si los parámetros de pistola, horno y pretratamiento están en especificación pero el cubrimiento sigue siendo irregular — sobre todo en geometrías complejas — la conductividad del bastidor es el sospechoso principal. Es la variable que más se pasa por alto porque se deteriora de forma gradual y no aparece en ningún parámetro de proceso.",
        ],
      },
      {
        heading: "Por qué los bastidores saturados causan mal cubrimiento",
        paragraphs: [
          "La pintura en polvo se deposita porque las partículas cargadas eléctricamente son atraídas por la pieza conectada a tierra. Esa conexión a tierra pasa por el bastidor. Cuando el bastidor acumula capas de pintura curada (un aislante), el contacto a tierra se degrada: la pieza aterriza mal, el campo eléctrico se debilita y el polvo ya no envuelve bordes ni penetra en cavidades. El resultado es exactamente el patrón de 'mal cubrimiento en geometrías complejas' que tanto frustra a los operadores.",
          "La prueba es simple: si al colgar la misma pieza en un bastidor recién despintado el cubrimiento mejora notablemente, el problema eran los bastidores. Por eso el despintado periódico de bastidores y cadenas no es solo mantenimiento — es control de calidad de la línea de pintura.",
        ],
      },
      {
        heading: "La solución: despintado periódico como control de calidad",
        paragraphs: [
          "Integrar el despintado de bastidores al programa de mantenimiento preventivo — basado en conteo de ciclos, no en esperar el rechazo — estabiliza la calidad de toda la línea. El despintado alcalino por inmersión restaura la conductividad de los bastidores sin dañar el metal, y un baño bien controlado procesa múltiples lotes antes de agotarse.",
          "El retorno es directo: menos rechazo, menos reproceso, menor consumo de pintura (un bastidor conductivo deposita más eficientemente) y calidad consistente. Trevigo suministra los removedores alcalinos especializados y la asesoría de proceso para implementar el despintado de cadenas y bastidores como parte del control de calidad de tu línea de pintura.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo sé si el problema de mi pintura son los bastidores y no la pistola?",
        a: "Haz la prueba de la pieza testigo: cuelga la misma pieza en un bastidor recién despintado y compárala con el resultado en un bastidor de uso normal. Si el cubrimiento mejora notablemente con el bastidor despintado, la causa raíz era la pérdida de conductividad por saturación. Es la forma más rápida de aislar esa variable.",
      },
      {
        q: "¿El mal cubrimiento en esquinas siempre es problema de bastidores?",
        a: "No siempre, pero es una causa frecuente y subestimada. El mal cubrimiento en esquinas y cavidades (pérdida del efecto Faraday) puede deberse a parámetros de pistola/voltaje o a pérdida de conductividad del bastidor. Si los parámetros de aplicación están en especificación y el problema persiste, revisa los bastidores: suelen ser el culpable.",
      },
      {
        q: "¿Despintar los bastidores reduce el consumo de pintura?",
        a: "Sí, indirectamente. Un bastidor con buena conductividad aterriza correctamente la pieza y el polvo se deposita de forma más eficiente, con mejor transferencia. Los bastidores saturados obligan a subir voltaje o acercar pistolas para compensar, lo que desperdicia polvo. Mantener los bastidores despintados mejora la eficiencia de transferencia y reduce el rechazo.",
      },
    ],
    relatedProducts: [
      "removedor-alcalino-pinturas",
      "removedor-intensivo-superficies",
      "removedor-pintura-cloruro-metileno",
    ],
    cta: {
      title: "¿Rechazo alto en tu línea de pintura en polvo?",
      description:
        "Te ayudamos a diagnosticar si la causa son los bastidores y suministramos los removedores para despintarlos. Recupera la conductividad y estabiliza la calidad. Cotización en 24 h.",
    },
  },
];

export const getArticleBySlug = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);
