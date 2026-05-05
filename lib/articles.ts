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
    metaTitle: "Ácido Fosfórico para Limpieza de Metales",
    metaDescription:
      "Guía técnica del ácido fosfórico industrial para limpieza, desoxidación y fosfatizado de metales. Concentraciones, aplicaciones y proveedor en Monterrey.",
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
    metaTitle: "Fosfatizado de Zinc: Pretratamiento para Pintura",
    metaDescription:
      "Guía técnica del fosfatizado de zinc: cómo funciona, por qué se usa antes de la pintura, etapas del proceso y normas automotrices. Proveedor en Monterrey.",
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
    metaTitle: "Decapado Industrial de Metales",
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
];

export const getArticleBySlug = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);
