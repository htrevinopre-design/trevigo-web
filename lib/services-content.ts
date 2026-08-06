// Contenido extendido por servicio para las páginas /servicios/[slug].
// Cada servicio tiene secciones técnicas, FAQs, productos asociados e industrias.
// Diseñado para SEO long-tail (queries específicas por proceso industrial).

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type ServiceContent = {
  slug: string; // matches the id in SERVICES_METALES / SERVICES_AGUAS
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "metales" | "aguas";
  intro: string;
  // Imagen banner opcional (mostrada entre el hero y el contenido)
  heroImage?: string;
  heroImageAlt?: string;
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  // IDs from PRODUCT_CATEGORIES → subcategories → products
  relatedProductIds: string[];
  // Slugs from INDUSTRIES
  relatedIndustrySlugs: string[];
};

export const SERVICES_CONTENT: ServiceContent[] = [
  // ─────────────────────────── METALES ───────────────────────────
  {
    slug: "galvanizado",
    title: "Servicio de Galvanizado: Protección de Acero contra Corrosión",
    metaTitle: "Galvanizado Industrial",
    metaDescription:
      "Servicio técnico para procesos de galvanizado: químicos, asesoría de baño, optimización de zinc y validación de capa galvánica. Plantas en Nuevo León y norte de México.",
    category: "metales",
    intro:
      "El galvanizado es un proceso de recubrimiento metálico mediante el cual se aplica una capa de zinc a piezas de acero para protegerlas contra la corrosión. En Industrias Trevigo damos soporte químico a líneas de galvanizado en caliente y galvanizado electrolítico, incluyendo asesoría técnica de baño, productos de pretratamiento y validación de capa galvánica.",
    sections: [
      {
        heading: "Tipos de galvanizado y aplicaciones",
        paragraphs: [
          "Existen dos sistemas principales de galvanizado utilizados en plantas mexicanas: galvanizado por inmersión en caliente (hot-dip) y galvanizado electrolítico (electroplating).",
        ],
        list: [
          "Galvanizado por inmersión en caliente: pieza se sumerge en zinc fundido a 450°C, ideal para estructuras de acero, postes, tornillería y herrajes con alta exposición ambiental.",
          "Galvanizado electrolítico: aplicación por electrólisis con baños de cianuro o cloruros, ideal para piezas pequeñas y de precisión donde el control de espesor es crítico.",
          "Galvanizado en frío: pintura rica en zinc, no es galvanizado real pero es alternativa para retoques de campo.",
        ],
      },
      {
        heading: "Etapas del proceso de galvanizado por inmersión",
        paragraphs: [
          "Una línea típica de galvanizado por inmersión incluye: limpieza alcalina, decapado ácido, fluxado, secado, inmersión en zinc, enfriamiento y pasivado opcional.",
          "El éxito del recubrimiento depende del control químico de cada baño. Una falla en el decapado o el fluxado resulta en zinc mal adherido, manchas o ampollas en la superficie.",
        ],
      },
      {
        heading: "Cómo Trevigo apoya tu línea de galvanizado",
        paragraphs: [
          "Trabajamos con galvanizadoras de Nuevo León y norte de México proveyendo: limpiadores alcalinos para desengrase previo, ácidos técnicos para decapado, sales de fluxado, inhibidores de hidrógeno, y selladores libres de cromo para tropicalizado posterior. Adicionalmente damos asesoría técnica para optimización de baño y solución de defectos.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué espesor de zinc se requiere para una galvanización adecuada?",
        a: "Depende de la aplicación. ASTM A123 establece 65-100 µm para estructuras industriales. Piezas con exposición marina o altísima humedad requieren 100-150 µm. Para tornillería y partes pequeñas la norma ASTM A153 contempla 43-55 µm.",
      },
      {
        q: "¿Pueden ayudarme con la formulación del baño de fluxado?",
        a: "Sí. Trabajamos con sales de cloruro de zinc-amonio en concentraciones específicas según el tipo de pieza y la velocidad de línea. Hacemos diagnóstico en planta y ajustamos parámetros para minimizar defectos.",
      },
      {
        q: "¿Cuál es la diferencia entre galvanizado y tropicalizado?",
        a: "El galvanizado es la aplicación de la capa de zinc. El tropicalizado es un tratamiento posterior (pasivado libre de cromo, fosfatizado, sellador) que protege al propio zinc contra corrosión blanca y multiplica su vida útil en climas húmedos.",
      },
    ],
    relatedProductIds: [
      "limpiador-liquido-alcalino-metales",
      "limpiador-acido-fosforico-hierro-acero",
      "sellador-anticorrosion-libre-cromo",
      "pasivador-aluminio-cromo",
    ],
    relatedIndustrySlugs: ["automotriz", "metalmecanica", "electrica-electronica", "tratamiento-superficies-metalicas"],
  },

  {
    slug: "tropicalizado",
    title: "Servicio de Tropicalizado: Protección Avanzada contra Corrosión",
    metaTitle: "Tropicalizado Industrial",
    metaDescription:
      "Servicio técnico para sistemas de tropicalizado: pasivado libre de cromo, sellado anticorrosión y validación con pruebas de niebla salina. Monterrey y norte de México.",
    category: "metales",
    intro:
      "El tropicalizado es un sistema multicapa de protección anticorrosión aplicado a piezas metálicas para soportar climas con alta humedad, niebla salina y temperaturas variables. En Trevigo diseñamos protocolos de tropicalizado a la medida con productos libres de cromo hexavalente que cumplen RoHS y REACH.",
    sections: [
      {
        heading: "¿Cuándo se requiere tropicalizado?",
        paragraphs: [
          "El tropicalizado es estándar en piezas que se exportan a regiones con humedad relativa superior al 70%, en componentes para zonas costeras y en productos de larga vida útil donde la garantía exige resistencia a corrosión documentada con horas de niebla salina.",
        ],
        list: [
          "Electrodomésticos y línea blanca para exportación a Centroamérica y Caribe.",
          "Gabinetes electrónicos para sector industrial y telecomunicaciones.",
          "Componentes automotrices interiores y bajo capó.",
          "Herramienta y equipo industrial para minería.",
        ],
      },
      {
        heading: "Sistema típico de tropicalizado libre de cromo",
        paragraphs: [
          "Un sistema completo de tropicalizado tiene 5 etapas: limpieza alcalina, desoxidación ácida, fosfatizado al zinc, sellado libre de cromo y aplicación de recubrimiento orgánico (e-coat o pintura).",
          "Cada etapa requiere control químico específico. Por ejemplo, el pH del sellador debe mantenerse entre 4.5 y 5.5, y la concentración del baño se valida semanalmente con titulación.",
        ],
      },
      {
        heading: "Validación con pruebas de niebla salina",
        paragraphs: [
          "El estándar internacional es la prueba ASTM B117. Un sistema de tropicalizado bien ejecutado debe superar 720 horas sin presencia de óxido rojo en piezas comerciales y 1,500+ horas en piezas para sectores exigentes como automotriz Tier 1 o aeronáutico.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿El tropicalizado libre de cromo cumple RoHS y REACH?",
        a: "Sí. Nuestras formulaciones son cromo-free certificadas y cumplen con las directivas europeas RoHS y REACH, además de los estándares de proveeduría de armadoras automotrices globales (GM, Ford, Stellantis, Toyota, Nissan).",
      },
      {
        q: "¿Cuál es la diferencia entre pasivado y tropicalizado?",
        a: "El pasivado es solo una etapa: forma una capa pasiva delgada sobre el sustrato. El tropicalizado es un sistema multicapa que combina pasivado, fosfatizado, sellado y recubrimiento orgánico. El tropicalizado da 5 a 10 veces más protección.",
      },
      {
        q: "¿Hacen pruebas de validación de niebla salina?",
        a: "No tenemos cámara propia de niebla salina, pero trabajamos con laboratorios certificados en Monterrey que realizan pruebas ASTM B117 acreditadas. Te ayudamos a coordinar las muestras y la documentación de resultados.",
      },
    ],
    relatedProductIds: [
      "sellador-anticorrosion-libre-cromo",
      "fosfato-zinc-calcio-alta-resistencia",
      "inhibidor-oxidacion-temporal",
      "pasivador-aluminio-cromo",
    ],
    relatedIndustrySlugs: ["automotriz", "electrica-electronica", "metalmecanica", "tratamiento-superficies-metalicas"],
  },

  {
    slug: "despintado",
    title: "Servicio de Despintado Industrial: Removedores y Procesos",
    metaTitle: "Despintado Industrial de Piezas",
    metaDescription:
      "Servicio de despintado industrial con removedores químicos para racks, ganchos y piezas con pintura curada. Eficiencia y seguridad operativa.",
    category: "metales",
    intro:
      "El despintado es el proceso de remoción de pintura curada en piezas metálicas, racks, ganchos y herramienta de línea. Es indispensable cuando se necesita re-trabajar piezas con defectos de pintura, recuperar racks de cabinas de pintura electrostática o reciclar herramienta para nuevos lotes de producción.",
    sections: [
      {
        heading: "Tipos de removedores de pintura",
        paragraphs: [
          "Existen tres tecnologías principales en plantas mexicanas:",
        ],
        list: [
          "Removedores alcalinos: a base de hidróxidos calientes, eficaces para pinturas en polvo y e-coat. Bajo costo operativo pero requieren cuidado en piezas de aluminio.",
          "Removedores con cloruro de metileno: muy rápidos, retiran cualquier pintura curada en minutos. Tienen restricciones ambientales crecientes.",
          "Removedores intensivos formulados: mezclas modernas con cosolventes que combinan eficacia con menor impacto ambiental, alternativa frecuente al cloruro de metileno.",
        ],
      },
      {
        heading: "Proceso típico de despintado por inmersión",
        paragraphs: [
          "En tinas calefaccionadas a 80-95°C se sumergen los racks o piezas durante 30 a 120 minutos según el espesor de la pintura. Tras retirar la pintura levantada se hace enjuague con agua y secado. La eficiencia del baño se monitorea midiendo concentración del agente activo y carga de pintura disuelta.",
        ],
      },
      {
        heading: "Manejo seguro de removedores químicos",
        paragraphs: [
          "Los removedores requieren equipo de protección personal completo (mandil, lentes, guantes resistentes a alcalinos o solventes), extracción adecuada de vapores y protocolos de almacenamiento estricto. Asesoramos en la implementación de procedimientos seguros y disposición de baños agotados como residuo peligroso conforme a NOM-052-SEMARNAT.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál removedor es mejor para racks de pintura electrostática?",
        a: "Removedores alcalinos calientes son la opción estándar: cuestan menos por kilo de pintura removida, son seguros para acero al carbón y permiten alta rotación de racks. Los formulamos a la medida según el tipo de e-coat o powder coating de tu planta.",
      },
      {
        q: "¿Es legal el uso de cloruro de metileno en México?",
        a: "Está permitido pero con restricciones crecientes. EPA y México avanzan hacia regulaciones similares a las europeas. Recomendamos transicionar a removedores formulados modernos para evitar reformulaciones forzadas y posibles costos adicionales de cumplimiento ambiental.",
      },
      {
        q: "¿Pueden ofrecer servicio de despintado en mi planta?",
        a: "Trevigo no ofrece servicio de aplicación, somos proveedor químico y de asesoría técnica. Te conectamos con plantas de despintado en Monterrey si necesitas externalizar el proceso, o te capacitamos para implementarlo internamente con garantía de soporte técnico.",
      },
    ],
    relatedProductIds: [
      "removedor-alcalino-pinturas",
      "removedor-pintura-cloruro-metileno",
      "removedor-intensivo-superficies",
    ],
    relatedIndustrySlugs: ["automotriz", "metalmecanica", "tratamiento-superficies-metalicas"],
  },

  {
    slug: "cadenas-pintura",
    title: "Despintado de Cadenas y Bastidores de Líneas de Pintura",
    metaTitle: "Despintado de Bastidores y Cadenas de Pintura",
    metaDescription:
      "Removedores y asesoría para despintar cadenas, ganchos y bastidores de líneas de pintura electrostática. Recupera la conductividad y la calidad del recubrimiento. Monterrey, N.L.",
    category: "metales",
    heroImage: "/servicios/cadena-pintura.png",
    heroImageAlt:
      "Cadena transportadora con bastidores entrando a una cabina de pintura electrostática",
    intro:
      "Los bastidores, ganchos y cadenas transportadoras de una línea de pintura electrostática acumulan pintura horneada con cada ciclo de producción. Después de 50 a 200 ciclos, ese espesor de pintura acumulado aísla eléctricamente el bastidor: se pierde el contacto a tierra necesario para el efecto Faraday, cae la calidad del recubrimiento y aumenta el rechazo. El despintado periódico de cadenas y bastidores los restaura a su condición conductiva original. Trevigo suministra los removedores alcalinos especializados y la asesoría de proceso para hacerlo de forma eficiente y segura.",
    sections: [
      {
        heading: "Por qué hay que despintar los bastidores periódicamente",
        paragraphs: [
          "En la pintura electrostática, la pieza y el bastidor deben estar conectados a tierra para que el polvo cargado eléctricamente se deposite de manera uniforme (efecto Faraday). Cada ciclo de horneado deja una capa de pintura sobre el bastidor; al acumularse, esa pintura actúa como aislante y rompe la continuidad eléctrica entre la pieza y la línea.",
          "El síntoma clásico es una caída gradual de la calidad del recubrimiento: zonas con menor espesor, mal cubrimiento en geometrías complejas y aumento del rechazo. La causa raíz no es la pintura ni la pistola — son los bastidores saturados. El despintado periódico (típicamente cada 50-200 ciclos según la producción) es mantenimiento preventivo que sostiene la calidad de toda la línea.",
        ],
      },
      {
        heading: "El proceso: despintado alcalino por inmersión",
        paragraphs: [
          "El método estándar para cadenas y bastidores es el despintado alcalino por inmersión en tinas calefaccionadas a 60-90°C. Los removedores alcalinos calientes disuelven la pintura en polvo, el e-coat y los primers epóxicos acumulados sin deformar el metal ni dañar los puntos de contacto, en tiempos de 30 minutos a 4 horas según el espesor.",
          "Es el método preferido para bastidores de acero al carbón porque cuesta menos por kilo de pintura removida, permite alta rotación y no ataca el sustrato base. Tras el despintado se enjuaga y se seca, y el bastidor regresa a la línea con su conductividad restaurada. Trevigo formula el removedor a la medida del tipo de pintura (powder, e-coat, líquida) de tu planta.",
        ],
      },
      {
        heading: "Control del baño y frecuencia de despintado",
        paragraphs: [
          "Un baño de despintado bien controlado mantiene su eficiencia monitoreando la concentración del agente activo y la carga de pintura disuelta. A medida que se satura, el tiempo de despintado aumenta — es la señal para reponer químico o programar el cambio de baño. Con buen control, un baño alcalino puede procesar varios lotes de bastidores antes de agotarse.",
          "La frecuencia óptima de despintado depende del volumen de producción y del tipo de pintura: líneas de alta producción despintan bastidores cada 1-2 semanas; líneas más pequeñas cada 1-2 meses. Definir la frecuencia correcta evita tanto el rechazo por bastidores saturados como el costo innecesario de despintar demasiado seguido.",
        ],
      },
      {
        heading: "Seguridad y disposición de residuos",
        paragraphs: [
          "Los removedores alcalinos son cáusticos y requieren equipo de protección personal completo (mandil de PVC, lentes, careta, guantes resistentes a alcalinos), extracción de vapores y área dedicada con contención. Los baños agotados y la pintura removida se clasifican como residuo peligroso y deben disponerse conforme a NOM-052-SEMARNAT mediante empresa autorizada.",
          "Asesoramos en la implementación segura del proceso: diseño del área de despintado, procedimientos de manejo, control del baño y disposición de residuos. Para plantas que prefieren externalizar, te conectamos con talleres de despintado en Monterrey.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo despintar los bastidores de mi línea de pintura?",
        a: "Depende del volumen de producción y el tipo de pintura. Como referencia: líneas de alta producción despintan cada 1-2 semanas (o cada 50-100 ciclos), líneas medianas cada 1-2 meses (100-200 ciclos). La señal práctica es la caída de calidad del recubrimiento por pérdida de conductividad. Te ayudamos a definir la frecuencia óptima para tu operación.",
      },
      {
        q: "¿El despintado daña los bastidores o los puntos de contacto?",
        a: "No, si se hace con el removedor y los parámetros correctos. Los removedores alcalinos calientes disuelven la pintura sin atacar el acero al carbón del bastidor ni deformar los puntos de contacto. El control de temperatura y tiempo de inmersión es clave; por eso formulamos el removedor a la medida de tu tipo de pintura y damos asesoría de proceso.",
      },
      {
        q: "¿Ofrecen el servicio de despintado o solo los químicos?",
        a: "Trevigo es proveedor químico y de asesoría técnica: suministramos los removedores especializados y te apoyamos en la implementación y control del proceso de despintado de cadenas y bastidores en tu planta. Si prefieres externalizar, te conectamos con talleres de despintado en Monterrey.",
      },
      {
        q: "¿Sirve para e-coat y pintura en polvo acumulados?",
        a: "Sí. Los removedores alcalinos calientes retiran pintura en polvo curada, e-coat, primers epóxicos y pintura líquida acumulados sobre los bastidores. Para pinturas epóxicas curadas a muy alta temperatura puede requerirse mayor tiempo de inmersión o un removedor intensivo, que también formulamos.",
      },
    ],
    relatedProductIds: [
      "removedor-alcalino-pinturas",
      "removedor-intensivo-superficies",
      "removedor-pintura-cloruro-metileno",
    ],
    relatedIndustrySlugs: ["automotriz", "metalmecanica", "tratamiento-superficies-metalicas", "electrica-electronica"],
  },

  {
    slug: "decapado",
    title: "Servicio de Decapado: Remoción Química de Óxidos",
    metaTitle: "Servicio de Decapado de Metales en Monterrey",
    metaDescription:
      "Servicio técnico para procesos de decapado: ácidos formulados, asesoría de baño y optimización de tiempos en plantas metalmecánicas y de pretratamiento.",
    category: "metales",
    intro:
      "El decapado o pickling es el proceso químico mediante el cual se remueven óxidos, calamina y contaminantes superficiales de piezas metálicas con ácidos formulados. Es paso obligado antes de fosfatizado, galvanizado, pintura y operaciones de soldadura crítica. En Trevigo damos soporte completo: ácidos técnicos, mezclas con inhibidor y asesoría de optimización.",
    sections: [
      {
        heading: "Decapado según el sustrato",
        paragraphs: [
          "El ácido y la concentración varían según el metal a decapar:",
        ],
        list: [
          "Acero al carbón: HCl al 15-25% o H₂SO₄ al 10-15% caliente, según volumen y geometría.",
          "Acero galvanizado: ácidos especialmente formulados con inhibidor para no consumir el zinc.",
          "Acero inoxidable: nítrico-fluorhídrico o nítrico-fosfórico para remover residuos de hierro libre.",
          "Aluminio: sosa cáustica seguida de desmutado nítrico para retirar smut superficial.",
        ],
      },
      {
        heading: "Cómo optimizar tu proceso de decapado",
        paragraphs: [
          "Hemos visto plantas con consumos de ácido el doble del benchmark sectorial por temperatura no controlada, falta de inhibidor o purgas no programadas. Trabajamos con tu equipo de proceso para definir setpoints óptimos, frecuencia de cambio de baño y monitoreo semanal de concentración.",
        ],
      },
      {
        heading: "Disposición de baños agotados",
        paragraphs: [
          "Un baño de decapado al final de su vida útil es residuo peligroso (NOM-052-SEMARNAT-2005). Asesoramos en la neutralización in-situ y conexión con manejadores autorizados de RP en Nuevo León.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué temperatura debe tener un baño de decapado?",
        a: "Depende del ácido. HCl trabaja a temperatura ambiente (20-30°C). H₂SO₄ requiere 60-80°C para eficiencia. H₃PO₄ opera entre 40-60°C. Subir temperatura acelera la reacción pero también el ataque al metal base si no se usa inhibidor.",
      },
      {
        q: "¿Cuándo debo cambiar el baño de ácido?",
        a: "Cuando el hierro disuelto supera 30-50 g/L (depende del ácido) la velocidad de decapado cae al 20-30% del óptimo. Algunas plantas regeneran por intercambio iónico o cristalización para extender la vida del baño.",
      },
      {
        q: "¿Pueden formular un mix ácido específico para mi proceso?",
        a: "Sí. Formulamos mezclas con inhibidor según el tipo de pieza, la velocidad de línea y los requerimientos de acabado. Hacemos diagnóstico en planta sin costo y entregamos propuesta con consumo proyectado y costo por kilo de óxido removido.",
      },
    ],
    relatedProductIds: [
      "limpiador-acido-fosforico-hierro-acero",
      "limpiador-acido-desincrustante",
      "desoxidante-acero-inoxidable",
      "acido-clorhidrico",
      "acido-fosforico",
    ],
    relatedIndustrySlugs: ["metalmecanica", "automotriz", "tratamiento-superficies-metalicas"],
  },

  {
    slug: "pasivado",
    title: "Servicio de Pasivado: Capa Pasiva Anticorrosión Temporal y Permanente",
    metaTitle: "Pasivado de Metales Industrial",
    metaDescription:
      "Servicio técnico para pasivado de acero, acero inoxidable y aluminio. Cumplimiento ASTM A967 y validación documental para auditorías OEM.",
    category: "metales",
    intro:
      "El pasivado es el proceso químico mediante el cual se forma una capa protectora delgada y estable sobre la superficie metálica para proteger contra la corrosión. En acero inoxidable es indispensable para activar la capa pasiva natural; en acero al carbón es protección temporal entre etapas; en aluminio es preparación para anodizado o pintura.",
    sections: [
      {
        heading: "Tipos de pasivado por sustrato",
        paragraphs: [
          "Cada metal requiere química específica:",
        ],
        list: [
          "Acero inoxidable: ácido nítrico al 20% o ácido cítrico al 4-10% según ASTM A967. Reactiva la capa de óxido de cromo y elimina hierro libre.",
          "Acero al carbón: pasivado temporal con inhibidores para protección de 30-90 días entre operaciones.",
          "Aluminio: cromato (proceso clásico) o conversión libre de cromo a base de zirconio o titanio.",
          "Galvanizado y zinc electrolítico: pasivado libre de cromo trivalente para sustituir cromato hexavalente.",
        ],
      },
      {
        heading: "Pasivado de acero inoxidable según ASTM A967",
        paragraphs: [
          "ASTM A967 es la norma internacional para pasivado de inoxidable. Define 5 sub-procesos según el grado del acero (304, 316, 17-4 PH, etc.) y exige validación con prueba de inmersión en sulfato de cobre, agua a alta humedad o ferroxilo.",
          "Damos soporte completo: producto químico, parámetros validados de tiempo y temperatura, registro documental por lote y entrega de certificado por proceso para auditorías OEM en sectores aeronáutico, médico y alimenticio.",
        ],
      },
      {
        heading: "Pasivado libre de cromo hexavalente",
        paragraphs: [
          "Las regulaciones RoHS, REACH y los estándares de proveeduría automotriz exigen eliminar cromo hexavalente. Tenemos formulaciones de pasivado a base de cromo trivalente y alternativas libres de cromo a base de zirconio que igualan o superan el desempeño anticorrosión del cromato clásico.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cumplen sus pasivados con ASTM A967?",
        a: "Sí. Nuestros productos para pasivado de acero inoxidable cumplen los métodos C, D y E de ASTM A967, validados con prueba de sulfato de cobre. Entregamos COA por lote y guía de proceso para que tu equipo de calidad documente el procedimiento.",
      },
      {
        q: "¿Qué duración da el pasivado temporal en acero al carbón?",
        a: "Entre 30 y 90 días dependiendo de las condiciones de almacenamiento. En ambiente seco con embalaje primario alcanza 90 días. En ambiente con humedad ambiental 70%+ baja a 30 días. Para mayor duración recomendamos sistema de tropicalizado completo.",
      },
      {
        q: "¿Puedo sustituir cromato hexavalente sin perder desempeño?",
        a: "Sí. Las formulaciones modernas a base de zirconio igualan en niebla salina al cromato clásico (200-720 horas según especificación). Hacemos validación en planta con tus piezas reales antes de cambiar el sistema.",
      },
    ],
    relatedProductIds: [
      "pasivador-aluminio-cromo",
      "desoxidante-acero-inoxidable",
      "inhibidor-oxidacion-temporal",
      "sellador-anticorrosion-libre-cromo",
    ],
    relatedIndustrySlugs: ["aeronautica", "automotriz", "metalmecanica", "tratamiento-superficies-metalicas"],
  },

  {
    slug: "fosfatizado",
    title: "Servicio de Fosfatizado: Pretratamiento Anticorrosivo para Pintura",
    metaTitle: "Fosfatizado Industrial",
    metaDescription:
      "Servicio técnico para líneas de fosfatizado al zinc, hierro y tricatiónico: químicos formulados, asesoría de baño y validación de peso de capa. Plantas en Nuevo León.",
    category: "metales",
    intro:
      "El fosfatizado es el tratamiento de conversión química más usado en pretratamiento previo a pintura electrostática y e-coat. Forma una capa de cristales de fosfato sobre el acero que mejora dramáticamente la adherencia de pinturas y la resistencia a corrosión. En Industrias Trevigo damos soporte integral a líneas de fosfatizado: químicos formulados, asesoría técnica de baño y validación de calidad por lote.",
    sections: [
      {
        heading: "Tipos de fosfatizado y cuándo usar cada uno",
        paragraphs: [
          "Existen tres sistemas principales de fosfatizado en plantas mexicanas, cada uno con propiedades específicas según el sector y el nivel de exigencia:",
        ],
        list: [
          "Fosfato al hierro: capa amorfa, peso 0.4-0.8 g/m². Económico, simple de operar. Ideal para muebles metálicos, estanterías, racks y piezas con baja exigencia de corrosión.",
          "Fosfato al zinc: capa cristalina, peso 1.8-3.0 g/m². Estándar automotriz y línea blanca. Da resistencia 500-1000 horas de niebla salina con pintura.",
          "Fosfato tricatiónico (zinc-níquel-manganeso): capa cristalina fina y uniforme, peso 2.0-3.5 g/m². Alta resistencia, exigencias OEM Tier 1, automotriz y aeronáutico. Niebla salina 1000+ horas.",
        ],
      },
      {
        heading: "Etapas de una línea de fosfatizado moderna",
        paragraphs: [
          "Una línea bien diseñada tiene 7 a 9 etapas. El éxito depende del control químico estricto en cada baño, no solo en el de fosfatizado:",
        ],
        list: [
          "Limpieza alcalina caliente (50-70°C): remueve aceites de mecanizado y silicón.",
          "Enjuague: agua limpia para evitar arrastre al baño siguiente.",
          "Desoxidación ácida: remueve óxido superficial (cuando aplica).",
          "Enjuague intermedio.",
          "Activación coloidal: activa la superficie con titanio para nuclear cristales finos.",
          "Fosfatizado: el corazón del proceso, control de pH 2.5-3.5, T 50-60°C.",
          "Enjuague final: agua desmineralizada para evitar contaminación.",
          "Sellado libre de cromo: cierra la capa de fosfato y mejora resistencia.",
          "Secado controlado: previene flash rust antes de pintura.",
        ],
      },
      {
        heading: "Por qué falla el fosfatizado y cómo lo resolvemos",
        paragraphs: [
          "El 80% de las fallas de adherencia y corrosión en pintura industrial vienen de problemas en el fosfatizado, no de la pintura. Los síntomas más comunes que diagnosticamos en plantas de Nuevo León son:",
        ],
        list: [
          "Peso de capa fuera de rango: relación de aceleración mal balanceada o concentración de zinc desviada.",
          "Cristales gruesos y oscuros: temperatura baja, falta de activador o agua dura.",
          "Manchas y flores en superficie: enjuague intermedio insuficiente o pH desviado.",
          "Flash rust antes de pintura: tiempo entre pretratamiento y pintura excedido o secado inadecuado.",
          "Consumo elevado de químico: hierro disuelto alto, falta de purga programada.",
        ],
      },
      {
        heading: "Cómo Trevigo apoya tu línea de fosfatizado",
        paragraphs: [
          "Trabajamos con plantas automotrices, metalmecánicas, de electrodomésticos y de muebles metálicos en Nuevo León y norte de México. Nuestro soporte incluye: fórmulas de fosfatizador a la medida (al zinc, al hierro o tricatiónico), titulaciones automatizadas semanales, ajuste de relación de aceleración, capacitación de operadores en control de baño y validación con pruebas ASTM B117 en laboratorios certificados.",
          "Casos típicos: reducción de 20-40% en consumo mensual de químico, estabilización de peso de capa dentro de rango OEM, eliminación total de rechazos por adherencia. Visita técnica sin costo en planta para diagnóstico inicial.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es el peso de capa óptimo para pintura electrostática?",
        a: "Para fosfato al zinc: 1.8-3.0 g/m². Para fosfato al hierro: 0.4-0.8 g/m². Para fosfato tricatiónico: 2.0-3.5 g/m². Pesos por encima del rango aumentan riesgo de fallas de adherencia; pesos por debajo dan baja resistencia a corrosión.",
      },
      {
        q: "¿Cuánto tiempo entre fosfatizado y pintura puedo dejar pasar?",
        a: "Lo ideal es menos de 2 horas en ambiente con humedad relativa controlada, y máximo 24 horas si la pieza está sellada con pasivante libre de cromo. Excederse genera flash rust microscópico que afecta adherencia. Si tu línea no puede pintar en ese tiempo, conviene rediseñar el flujo.",
      },
      {
        q: "¿Pueden ayudarme a transitar de fosfato al hierro a fosfato al zinc?",
        a: "Sí. Es un proyecto típico cuando una planta sube de gama de cliente o exige mayor resistencia a corrosión. Hacemos análisis técnico-económico, validación con pruebas piloto y acompañamos el cambio de baño sin parar la producción. Tiempo típico: 4-6 semanas.",
      },
      {
        q: "¿Sus fosfatizadores son libres de cromo y nitritos?",
        a: "Sí. Tenemos formulaciones libres de cromo hexavalente, libres de nitritos y bajos en zinc para cumplir con regulaciones automotrices RoHS, REACH, ELV y exigencias de proveeduría de armadoras globales (GM, Ford, Stellantis, Toyota, Nissan).",
      },
    ],
    relatedProductIds: [
      "fosfato-zinc-brillante",
      "fosfato-zinc-calcio-alta-resistencia",
      "limpiador-fosfato-fierro-multimetales",
      "fosfato-acido-detergente-integral",
      "limpiador-liquido-alcalino-metales",
      "sellador-anticorrosion-libre-cromo",
    ],
    relatedIndustrySlugs: ["automotriz", "metalmecanica", "electrica-electronica", "tratamiento-superficies-metalicas"],
  },

  {
    slug: "pintura-electrostatica",
    title: "Servicio para Pintura Electrostática: Pretratamiento y Soporte Técnico",
    metaTitle: "Pintura Electrostática y Pretratamiento",
    metaDescription:
      "Servicio técnico para líneas de pintura electrostática: pretratamiento químico, fosfatizado, sellado libre de cromo y optimización de baños.",
    category: "metales",
    intro:
      "La pintura electrostática (powder coating) es uno de los acabados más demandados en manufactura mexicana por su durabilidad y eficiencia. Trevigo da soporte químico integral al pretratamiento previo a la aplicación de polvo: limpieza, desoxidación, fosfatizado al zinc o al hierro, y sellado anticorrosión.",
    sections: [
      {
        heading: "Por qué falla la adherencia en pintura electrostática",
        paragraphs: [
          "El 80% de los problemas de adherencia y corrosión en piezas con powder coating vienen del pretratamiento, no de la pintura. Las causas más comunes que diagnosticamos en plantas son:",
        ],
        list: [
          "Limpieza insuficiente: aceite o silicón residual de mecanizado.",
          "Fosfatizado heterogéneo: peso de capa fuera de rango por concentración o temperatura desbalanceada.",
          "Enjuague incompleto: residuos ácidos o alcalinos generan corrosión bajo la película.",
          "Tiempo entre pretratamiento y horneado excedido: se forma flash rust antes de la pintura.",
        ],
      },
      {
        heading: "Sistema de pretratamiento estándar",
        paragraphs: [
          "Una línea bien diseñada incluye 5 a 7 etapas: limpieza alcalina caliente, enjuague, desoxidación, fosfatizado al zinc o al hierro, enjuague final, sellado libre de cromo y secado controlado.",
          "Damos soporte para cada etapa con productos formulados y asesoría de control de baño semanal con titulaciones para mantener cada parámetro en rango óptimo.",
        ],
      },
      {
        heading: "Validación de calidad",
        paragraphs: [
          "El sistema de pretratamiento se valida con: peso de capa de fosfato (g/m²), prueba de adherencia cross-cut (ASTM D3359), niebla salina (ASTM B117) e inspección visual. Trabajamos con plantas para integrar estas pruebas en el control de proceso diario.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué peso de capa de fosfato es óptimo para pintura electrostática?",
        a: "Para fosfato al zinc estándar: 1.8-3.0 g/m². Para fosfato al hierro: 0.4-0.8 g/m². Pesos por encima del rango aumentan riesgo de fallas de adherencia; pesos por debajo dan baja resistencia a corrosión.",
      },
      {
        q: "¿Pueden ayudarme a reducir el consumo del baño de fosfatizado?",
        a: "Sí. Es uno de los proyectos típicos que ejecutamos. Una optimización bien hecha reduce 20-40% el consumo mensual de químico ajustando relación de aceleración, control de hierro disuelto y purga programada.",
      },
      {
        q: "¿Asesoran en sustitución de cromo hexavalente en sellador?",
        a: "Sí. Tenemos sistemas de sellado libres de cromo validados en líneas de pintura electrostática con resultados de niebla salina equivalentes o superiores al cromato. Hacemos validación piloto en tu línea antes de hacer el cambio definitivo.",
      },
    ],
    relatedProductIds: [
      "fosfato-zinc-brillante",
      "fosfato-zinc-calcio-alta-resistencia",
      "limpiador-fosfato-fierro-multimetales",
      "sellador-anticorrosion-libre-cromo",
      "limpiador-liquido-alcalino-metales",
    ],
    relatedIndustrySlugs: ["automotriz", "metalmecanica", "electrica-electronica"],
  },

  // ─────────────────────────── AGUAS ───────────────────────────
  {
    slug: "ingenieria-asesoria",
    title: "Ingeniería y Asesoría en Tratamiento de Aguas Residuales",
    metaTitle: "Ingeniería en Tratamiento de Aguas",
    metaDescription:
      "Servicio de ingeniería y asesoría técnica para plantas de tratamiento de aguas residuales industriales. Diseño, optimización y cumplimiento NOM-001 y NOM-002.",
    category: "aguas",
    intro:
      "Damos servicios de ingeniería de proceso y asesoría técnica para plantas de tratamiento de aguas residuales industriales (PTAR). Apoyamos a tu equipo desde la caracterización del agua cruda hasta el diseño del tren de tratamiento óptimo y el cumplimiento documentado de la normativa mexicana.",
    sections: [
      {
        heading: "Servicios que damos",
        paragraphs: [
          "Trabajamos con plantas existentes y proyectos greenfield en estos frentes:",
        ],
        list: [
          "Caracterización de agua cruda: muestreo de 4 semanas, parámetros NOM y simulación de cargas pico.",
          "Diseño del tren de tratamiento: selección de procesos físicos, fisicoquímicos y biológicos según parámetros de descarga.",
          "Selección de químicos: coagulantes, floculantes, ajustadores de pH y biocidas.",
          "Capacitación a operadores: protocolo de Jar Test, control de baño, dosificación.",
          "Cumplimiento NOM: auditoría documental, plan de monitoreo y respaldo ante visitas de la autoridad.",
        ],
      },
      {
        heading: "Cómo trabajamos",
        paragraphs: [
          "Iniciamos con visita técnica sin costo a tu planta. Caracterizamos el agua, identificamos cuellos de botella y entregamos propuesta de mejora con costos proyectados y resultados esperados. Si decides avanzar, acompañamos la implementación y validamos resultados con muestreos.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cobran por el diagnóstico inicial?",
        a: "No. La visita técnica y el diagnóstico inicial son sin costo para plantas industriales en Nuevo León y norte de México. Solo cobramos si avanzamos a etapa de implementación con productos y servicios contratados.",
      },
      {
        q: "¿Pueden diseñar la planta completa?",
        a: "Trevigo es proveedor químico y consultor de proceso, no construimos plantas. Trabajamos en conjunto con ingenierías de PTAR (civil, mecánica, automatización) para definir la parte química del sistema. Si necesitas constructora te conectamos con socios de confianza en Monterrey.",
      },
      {
        q: "¿Qué normativas mexicanas conocen?",
        a: "Trabajamos con NOM-001-SEMARNAT-2021, NOM-002-SEMARNAT-1996, NOM-003-SEMARNAT-1997, NOM-052-SEMARNAT-2005 (RP) y normativas locales de descarga municipal. Apoyamos auditorías y respondemos visitas de la autoridad ambiental.",
      },
    ],
    relatedProductIds: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "floculante-anionico-alto-peso",
      "agente-secuestrante",
    ],
    relatedIndustrySlugs: ["alimenticia", "refresquera", "automotriz", "metalmecanica", "papel-derivados"],
  },

  {
    slug: "mantenimiento",
    title: "Mantenimiento Químico de Plantas de Tratamiento de Agua",
    metaTitle: "Mantenimiento de PTAR Industrial",
    metaDescription:
      "Servicio de mantenimiento químico para plantas de tratamiento de aguas industriales: limpieza de membranas, desincrustación de equipos y dosificación.",
    category: "aguas",
    intro:
      "Damos servicio continuo de mantenimiento químico para plantas de tratamiento de agua. Cubrimos limpieza periódica de equipos, desincrustación de intercambiadores y membranas, y suministro programado de químicos de proceso.",
    sections: [
      {
        heading: "Mantenimiento típico que ejecutamos",
        paragraphs: [
          "El mantenimiento preventivo de una PTAR industrial incluye intervenciones programadas que evitan paros mayores:",
        ],
        list: [
          "Desincrustación de intercambiadores de calor con ácidos formulados.",
          "Limpieza CIP de membranas de ultrafiltración y ósmosis inversa.",
          "Limpieza de torres de enfriamiento contra incrustación y biofilm.",
          "Mantenimiento de tuberías y tanques con inhibidores de corrosión.",
          "Recarga programada de coagulantes, floculantes y secuestrantes.",
        ],
      },
      {
        heading: "Programa de dosificación continua",
        paragraphs: [
          "Para plantas con consumo regular damos servicio de suministro programado: entrega quincenal o mensual con producto en presentación adecuada al equipo dosificador, monitoreo de parámetros y ajustes de fórmula según cambios estacionales del agua cruda.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Hacen mantenimiento de membranas de ósmosis inversa?",
        a: "Sí. Tenemos químicos de limpieza específicos para membranas de poliamida y celulosa, tanto alcalinos para remoción de materia orgánica como ácidos para incrustaciones de calcio y silicio. Los CIP se programan según presión diferencial y caída de flujo.",
      },
      {
        q: "¿Pueden hacer la dosificación in-situ?",
        a: "Trabajamos en conjunto con tu equipo operativo. Capacitamos a tus operadores y damos soporte continuo, pero no operamos la planta físicamente. Para operación tercerizada te conectamos con socios certificados en Nuevo León.",
      },
      {
        q: "¿Qué frecuencia de mantenimiento recomiendan?",
        a: "Depende del proceso. Torres de enfriamiento: limpieza preventiva cada 3-6 meses. Membranas RO: CIP cada 30-60 días según calidad del agua. Calderas: análisis mensual y purga regulada continua. Diseñamos calendario de mantenimiento a la medida.",
      },
    ],
    relatedProductIds: [
      "limpiador-acido-desincrustante",
      "microbicida-amplio-espectro",
      "inhibidor-oxigeno-calderas",
      "agente-secuestrante",
    ],
    relatedIndustrySlugs: ["alimenticia", "refresquera", "papel-derivados", "farmaceutica"],
  },

  {
    slug: "pruebas-jarras",
    title: "Pruebas de Jarras (Jar Test) para Optimizar Tratamiento de Agua",
    metaTitle: "Pruebas de Jarras (Jar Test) Industrial",
    metaDescription:
      "Servicio de Jar Test (pruebas de jarras) para optimizar dosificación de coagulantes y floculantes en PTAR industriales. Reduce consumo y mejora calidad de descarga.",
    category: "aguas",
    intro:
      "El Jar Test o prueba de jarras es la herramienta básica para determinar la dosis óptima de coagulante y floculante en una planta de tratamiento de agua. En Trevigo ejecutamos Jar Tests profesionales en planta o en nuestro laboratorio con muestras de tu efluente real.",
    sections: [
      {
        heading: "Qué resuelve el Jar Test",
        paragraphs: [
          "Cuando una planta dosifica químico de manera empírica casi siempre tiene desperdicio o subdosificación. El Jar Test te da la dosis exacta para tu agua específica, reduciendo costo operativo del 20 al 40% en la mayoría de los casos.",
        ],
        list: [
          "Determina la dosis mínima eficaz de coagulante.",
          "Selecciona el tipo de coagulante óptimo (PAC vs sulfato vs cloruro férrico).",
          "Encuentra la dosis de polielectrolito que da el flóculo de mayor velocidad de sedimentación.",
          "Detecta interferencias: pH fuera de rango, alcalinidad insuficiente, presencia de surfactantes.",
        ],
      },
      {
        heading: "Cómo lo ejecutamos",
        paragraphs: [
          "Tomamos muestra representativa del agua a tratar (1-2 litros de varios puntos del proceso). En 6 vasos de precipitado dosificamos diferentes concentraciones del coagulante a evaluar. Aplicamos mezcla rápida, mezcla lenta y sedimentación según protocolo. Medimos turbidez residual, color, pH y tiempo de sedimentación.",
          "Con los resultados generamos curva de dosis vs eficiencia y entregamos recomendación de dosificación con respaldo numérico. El test toma 2-3 horas y la entrega de resultados es el mismo día.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Con qué frecuencia debo hacer Jar Test?",
        a: "Recomendamos Jar Test mensual como mínimo. Si el agua cruda cambia mucho (industria con variabilidad de proceso, lluvia estacional, etc.) puede requerirse semanal. Una buena práctica es Jar Test cada vez que cambia el comportamiento del baño.",
      },
      {
        q: "¿Es lo mismo Jar Test que Jar Test colombiano?",
        a: "El protocolo estándar internacional incluye mezcla rápida 100-200 rpm por 1 min, mezcla lenta 30-50 rpm por 15-20 min, y sedimentación de 30 min. Hay variantes regionales menores pero los principios y resultados son comparables. Trabajamos con el método ISO/AWWA estándar.",
      },
      {
        q: "¿Pueden capacitar a mi equipo para hacer Jar Tests internamente?",
        a: "Sí. Damos capacitación práctica en planta para operadores y supervisores. Incluye protocolo paso a paso, lectura de resultados y recomendaciones de dosificación. Después del entrenamiento solo necesitas el equipo (jar tester, turbidímetro y reactivos), que te ayudamos a especificar.",
      },
    ],
    relatedProductIds: [
      "coagulante-inorganico-clarificacion",
      "coagulante-organico-liquido",
      "coagulante-alta-carga-cationica",
      "floculante-anionico-alto-peso",
      "poliacrilamida-phpa",
    ],
    relatedIndustrySlugs: ["alimenticia", "refresquera", "automotriz", "metalmecanica", "papel-derivados"],
  },

  {
    slug: "optimizacion-procesos",
    title: "Optimización de Procesos en Plantas de Tratamiento de Agua",
    metaTitle: "Optimización de PTAR Industrial",
    metaDescription:
      "Servicio de optimización para plantas de tratamiento de aguas residuales: reduce costo por m³, mejora cumplimiento NOM y aumenta capacidad sin inversión mayor.",
    category: "aguas",
    intro:
      "La optimización de procesos en PTAR industrial es un proyecto enfocado en reducir costo operativo, mejorar cumplimiento normativo y aumentar capacidad de tratamiento sin inversión mayor en infraestructura. En Trevigo ejecutamos proyectos de optimización con resultados medibles en 60-90 días.",
    sections: [
      {
        heading: "Qué optimizamos",
        paragraphs: [
          "Cada planta tiene oportunidades específicas. Estos son los frentes más comunes:",
        ],
        list: [
          "Dosificación química: reducción de 20-40% en consumo con la misma calidad de descarga.",
          "Lodos generados: reducción del 25-50% en volumen y mejor deshidratabilidad.",
          "Cumplimiento NOM: pasar de incumplimiento intermitente a cumplimiento sostenido.",
          "Capacidad de tratamiento: aumentar caudal tratable sin construir más infraestructura.",
          "Costo por m³ tratado: KPI integrado que combina químico, energía y disposición de residuos.",
        ],
      },
      {
        heading: "Metodología de proyecto",
        paragraphs: [
          "Trabajamos en cuatro etapas: 1) Diagnóstico (4 semanas de muestreo y caracterización), 2) Diseño de mejoras (Jar Tests, simulación, propuesta numérica), 3) Implementación piloto (4 semanas de validación con dosificación nueva), 4) Despliegue total y verificación de resultados.",
          "Entregamos reporte final con costo antes/después, % de mejora en cada KPI y recomendaciones para sostener los resultados a 12 meses.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué tan rápido se ven resultados?",
        a: "El piloto de 4 semanas ya muestra cambios medibles. Los resultados sostenidos completos se observan a los 60-90 días. Casos típicos: -25% consumo de coagulante en mes 2, -40% lodos en mes 3, cumplimiento NOM estabilizado en mes 4.",
      },
      {
        q: "¿Cuál es el ROI típico de un proyecto de optimización?",
        a: "Para plantas con consumo mensual de químico arriba de $100,000 MXN, el proyecto se paga en 3-6 meses con los ahorros. Para plantas con multas de cumplimiento NOM, el ROI es inmediato porque eliminamos el riesgo de sanciones.",
      },
      {
        q: "¿Necesito firmar exclusividad con Trevigo?",
        a: "No. La optimización es un proyecto de consultoría y producto. Si después de implementarlo decides comprar químico a otro proveedor, lo respetamos. La calidad de nuestro químico y el soporte técnico es lo que mantiene la relación comercial.",
      },
    ],
    relatedProductIds: [
      "coagulante-inorganico-clarificacion",
      "coagulante-alta-carga-cationica",
      "floculante-anionico-alto-peso",
      "agente-secuestrante",
      "microbicida-amplio-espectro",
    ],
    relatedIndustrySlugs: ["alimenticia", "refresquera", "automotriz", "metalmecanica", "papel-derivados", "minera"],
  },
];

export const getServiceContentBySlug = (slug: string): ServiceContent | undefined =>
  SERVICES_CONTENT.find((s) => s.slug === slug);
