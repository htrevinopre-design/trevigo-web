// ============================================================
// CONTENIDO PARA LANDING PAGES DE SUBCATEGORÍAS DE PRODUCTO
// Cada subcategoría tiene una página dedicada en
// /productos/categoria/[id] que captura queries categoría-level
// como "selladores anticorrosivos", "inhibidores de corrosión",
// "desoxidantes industriales", etc.
// ============================================================

export interface SubcategoryContent {
  /** Slug de la subcategoría — coincide con id en lib/data.ts */
  id: string;
  /** Slug de la categoría padre (tratamiento-metales, etc.) */
  categoryId: string;
  /** Título de la página visible */
  pageTitle: string;
  /** Meta title (SEO) */
  metaTitle: string;
  /** Meta description (SEO) */
  metaDescription: string;
  /** H1 hero */
  hero: string;
  /** Tagline / lead paragraph (mostrado bajo el H1) */
  lead: string;
  /** Secciones de contenido educativo */
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
  /** Preguntas frecuentes con schema FAQPage */
  faqs: { q: string; a: string }[];
  /** Industrias relevantes (slugs) — para internal linking */
  relatedIndustries?: string[];
  /** Servicios relacionados (slugs de SERVICES_CONTENT) */
  relatedServices?: string[];
  /** Glosario terms relacionados */
  relatedGlossary?: string[];
}

export const SUBCATEGORY_CONTENT: Record<string, SubcategoryContent> = {
  "solventes-alcoholes": {
    id: "solventes-alcoholes",
    categoryId: "materias-primas",
    pageTitle: "Solventes y Alcoholes Industriales",
    metaTitle: "Solventes y Alcoholes Industriales: Venta",
    metaDescription:
      "Venta de alcohol isopropílico (IPA) y alcohol etílico de grado industrial por porrón, tambo o tote. Con SDS y certificado de análisis por lote. Monterrey.",
    hero: "Solventes y Alcoholes Industriales",
    lead: "Alcohol isopropílico y alcohol etílico de grado industrial para limpieza de precisión, preparación de superficies y sanitización, con documentación completa por lote y entrega en presentaciones desde porrón hasta tote.",
    sections: [
      {
        heading: "Cuál alcohol necesita tu proceso",
        paragraphs: [
          "La elección entre isopropílico y etílico depende del uso. El alcohol isopropílico (IPA) es el estándar para limpieza de precisión: evapora rápido, no deja residuo y es el que piden las especificaciones de electrónica, óptica y preparación de superficies antes de pintar o pegar. El alcohol etílico es el solvente de trabajo para limpieza y sanitización general de equipo, superficies y áreas de producción.",
          "Ambos se entregan con ficha de seguridad (SDS) y certificado de análisis (CoA) por lote, que es lo que piden las auditorías de calidad en automotriz, aeroespacial y alimenticia. Si tu proceso exige un grado o concentración específica, consúltanos y te confirmamos disponibilidad con la documentación correspondiente.",
        ],
      },
      {
        heading: "Manejo seguro de alcoholes industriales",
        paragraphs: [
          "Los alcoholes son inflamables: se almacenan en áreas ventiladas, lejos de fuentes de ignición, y los recipientes se conectan a tierra al trasvasar para evitar descargas estáticas. Asesoramos en el manejo y almacenamiento seguro según el volumen de tu operación.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre alcohol isopropílico y etílico para uso industrial?",
        a: "El isopropílico (IPA) es el preferido para limpieza de precisión y preparación de superficies: evapora rápido y sin residuo. El etílico se usa más para limpieza y sanitización general. Si tu especificación pide uno en particular, respétala; si tienes duda, cuéntanos la aplicación y te recomendamos con base en ella.",
      },
      {
        q: "¿En qué presentaciones venden los alcoholes?",
        a: "Porrón, tambo y tote, según tu consumo. Todas las entregas incluyen ficha de seguridad y certificado de análisis por lote.",
      },
      {
        q: "¿Atienden a la industria aeroespacial y electrónica?",
        a: "Sí. Suministramos IPA para limpieza de precisión con la documentación de trazabilidad que exigen las auditorías de estos sectores: SDS, CoA por lote y soporte técnico.",
      },
    ],
    relatedIndustries: ["aeronautica", "electrica-electronica", "automotriz", "metalmecanica"],
  },
  // ══════════════════════════════════════════════════════════════
  // SELLOS / SELLADORES ANTICORROSIVOS
  // ══════════════════════════════════════════════════════════════
  sellos: {
    id: "sellos",
    categoryId: "tratamiento-metales",
    pageTitle: "Selladores Anticorrosivos para Pretratamiento de Pintura",
    metaTitle: "Selladores Anticorrosivos Industriales en México (Cr-free)",
    metaDescription:
      "Proveedor de selladores anticorrosivos libres de cromo en México: zirconio, silanos y química de última generación para post-fosfatado de líneas de pintura industrial. Cotización 24 h.",
    hero: "Selladores anticorrosivos",
    lead: "Los selladores son la última etapa del pretratamiento químico antes de aplicar pintura sobre acero fosfatado. Su función es cerrar los microporos de la capa de fosfato, neutralizar la superficie y mejorar la adhesión del recubrimiento posterior — extendiendo la vida útil del producto terminado hasta 3x bajo las mismas condiciones de exposición.",
    sections: [
      {
        heading: "¿Qué es un sellador anticorrosivo y para qué sirve?",
        paragraphs: [
          "Después del fosfatado de zinc o hierro, la superficie metálica queda con un recubrimiento cristalino microporoso. Si esa pieza pasa directamente a pintura sin sellar, los microporos permiten la entrada de humedad y agentes corrosivos a largo plazo, generando burbujeo, delaminación y oxidación bajo la pintura.",
          "El sellador anticorrosivo cumple tres funciones simultáneas: (1) llenar los microporos del fosfato, (2) neutralizar residuos ácidos del baño anterior, y (3) depositar una capa nano-molecular orgánica/inorgánica que actúa como puente químico con la pintura. El resultado: pruebas de niebla salina (ASTM B117) de 500 a 1,000+ horas dependiendo del sistema de pintura aplicado encima.",
        ],
      },
      {
        heading: "Tipos de selladores: con cromo vs sin cromo",
        paragraphs: [
          "Históricamente, los selladores más usados contenían cromo hexavalente (Cr⁶⁺), que daba excelente desempeño anticorrosivo pero está siendo eliminado mundialmente por su toxicidad y regulación RoHS, REACH y SCAQMD. Los OEMs automotrices han migrado a selladores sin cromo desde hace 5-10 años.",
          "Los selladores modernos sin cromo se basan en dos químicas principales:",
        ],
        list: [
          "Zirconio (Zr): forma una capa de óxido de zirconio nano-cristalino, excelente adhesión con e-coat y compatible con sustratos mixtos (acero, zinc, aluminio)",
          "Silanos orgánicos: moléculas con doble funcionalidad que se anclan químicamente al sustrato metálico y a la pintura, generando una interfaz molecular fuerte",
          "Combinaciones zirconio + silano (la generación más reciente, máximo desempeño)",
        ],
      },
      {
        heading: "¿Cuándo usar un sellador?",
        paragraphs: [
          "Recomendamos sellar después del fosfatado en los siguientes casos: piezas que estarán expuestas a la intemperie (equipo agrícola, construcción, partes automotrices), productos exportados a mercados costeros o tropicales, piezas de e-coat de alta exigencia OEM, y cualquier aplicación con pruebas anticorrosivas de aceptación obligatoria.",
          "En aplicaciones de servicio interior (muebles, archivero, electrónica con e-coat) el sellado adicional ofrece beneficio marginal frente a su costo. En cambio, en aplicaciones de servicio exterior el sellado bien aplicado puede ser la diferencia entre 200 horas y 1,000+ horas de resistencia anticorrosiva.",
        ],
      },
      {
        heading: "Cómo elegir el sellador correcto",
        paragraphs: [
          "La selección depende de cuatro variables: (1) tipo de pretratamiento previo (fosfato de zinc, fosfato de hierro, sólo limpieza), (2) sistema de pintura aplicado encima (e-coat, powder, líquido), (3) sustratos a procesar (acero, zinc, aluminio o mixto), y (4) requerimientos de niebla salina del producto final.",
          "Para líneas mixtas y alto desempeño, los selladores basados en zirconio + silanos son la mejor opción. Para líneas exclusivas de acero con pintura en polvo de servicio interior, formulaciones más simples de zirconio puro suelen ser suficientes a menor costo. En Trevigo damos asesoría técnica para evaluar tu línea específica.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Es obligatorio sellar después del fosfatado de zinc?",
        a: "No es obligatorio, pero el desempeño anticorrosivo del recubrimiento final mejora 30-50% en pruebas de niebla salina cuando se aplica un sellador correcto. Para aplicaciones automotrices y de exportación, sellar es la práctica estándar.",
      },
      {
        q: "¿Puedo usar selladores sin cromo en mi línea existente que era con cromo?",
        a: "Sí, la mayoría de selladores modernos sin cromo se diseñan como reemplazo drop-in para baños anteriores con cromo. Lo único que suele cambiar es el rango de pH operativo (típicamente 4.0-5.5 para zirconio) y la temperatura (30-50°C). Hacer pruebas piloto antes de migrar la línea completa es la práctica recomendada.",
      },
      {
        q: "¿Qué pruebas se usan para validar el desempeño de un sellador?",
        a: "Las más comunes son: niebla salina ASTM B117 (500-1,000+ horas), cyclical corrosion test SAE J2334, ensayo de chip Gravelómetro SAE J400, y adhesion test ASTM D3359 (cross-hatch). Para automotriz OEM, se usan las especificaciones del fabricante (GMW3179, WSS-M3P18-A, etc.).",
      },
      {
        q: "¿Sus selladores son compatibles con pintura electrostática y e-coat?",
        a: "Sí. Nuestros selladores libres de cromo están formulados para ser compatibles con todos los sistemas de pintura modernos: e-coat catódico (acrílico y epoxi), polvo (epoxi, poliéster, híbrido), líquido y bicomponentes. Para sistemas muy específicos hacemos pruebas previas en laboratorio.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "tratamiento-superficies-metalicas", "electrica-electronica"],
    relatedServices: ["fosfatizado", "tropicalizado", "pasivado"],
    relatedGlossary: ["fosfatizado", "cromo-hexavalente", "niebla-salina"],
  },

  // ══════════════════════════════════════════════════════════════
  // INHIBIDORES DE CORROSIÓN
  // ══════════════════════════════════════════════════════════════
  inhibidores: {
    id: "inhibidores",
    categoryId: "tratamiento-metales",
    pageTitle: "Inhibidores de Corrosión Industriales",
    metaTitle: "Inhibidores de Corrosión Industriales (VCI) en México",
    metaDescription:
      "Proveedor de inhibidores de corrosión temporal VCI, en fase vapor y para aceites en México. Protección de piezas metálicas entre operaciones, exportación marítima y almacenamiento. Cotización 24 h.",
    hero: "Inhibidores de corrosión",
    lead: "Los inhibidores de corrosión protegen piezas metálicas durante almacenamiento, tránsito y operaciones intermedias sin alterar el acabado superficial. Su uso correcto puede prevenir hasta el 95% del rechazo por oxidación en piezas mecanizadas que esperan ensamble.",
    sections: [
      {
        heading: "¿Qué es un inhibidor de corrosión y para qué sirve?",
        paragraphs: [
          "Un inhibidor de corrosión es una sustancia química que, aplicada en concentración baja sobre una superficie metálica o disuelta en un medio (agua, aceite, fase vapor), reduce drásticamente la velocidad de oxidación del metal. Funcionan formando una película molecular protectora que aísla la superficie del oxígeno y la humedad atmosférica.",
          "A diferencia de pinturas o recubrimientos permanentes, los inhibidores son típicamente de protección temporal (días, semanas o pocos meses) y se diseñan para ser removidos fácilmente cuando la pieza llega a su siguiente etapa de proceso (pintura, ensamble, soldadura).",
        ],
      },
      {
        heading: "Tipos de inhibidores industriales",
        paragraphs: [
          "Los inhibidores de corrosión más usados en industria se clasifican según su fase y aplicación:",
        ],
        list: [
          "Inhibidores de oxidación temporal (VCI / Vapor Corrosion Inhibitor): se aplican por inmersión, aspersión o impregnación en papel/film. Forman una película molecular sub-microscópica que protege piezas mecanizadas durante 30 días a 12 meses",
          "Inhibidores de oxígeno para calderas: químicos como sulfito de sodio catalizado o eritorbato que eliminan el oxígeno disuelto en agua de calderas, previniendo corrosión por picaduras (pitting) en tubería interna",
          "Inhibidores en fase vapor: emiten vapores anticorrosivos que protegen piezas en empaque cerrado sin contacto directo (útiles para piezas con geometrías complejas)",
          "Inhibidores en aceites y lubricantes: aditivos que se integran a fluidos industriales para prevenir corrosión durante uso y almacenamiento",
        ],
      },
      {
        heading: "Aplicaciones típicas",
        paragraphs: [
          "Las industrias que más usan inhibidores son: metalmecánica (entre operaciones de maquinado, antes de pintura o ensamble), automotriz (protección de piezas exportadas en contenedor marítimo), aeronáutica (protección de componentes durante mantenimiento o almacenamiento), y plantas de generación de vapor (inhibidores de oxígeno para calderas y agua de proceso).",
          "Un caso común: una pieza mecanizada terminada que tiene que esperar 1-4 semanas a ser ensamblada o pintada. Sin inhibidor, esa pieza se oxida superficialmente en 24-72 horas en clima de Monterrey y debe ser reprocessada. Con un inhibidor VCI aplicado por inmersión, la misma pieza puede esperar hasta 6 meses sin oxidación visible.",
        ],
      },
      {
        heading: "Cómo elegir el inhibidor correcto",
        paragraphs: [
          "La selección depende de cuatro factores principales: (1) tiempo de protección requerido (días, meses, años), (2) ambiente de almacenamiento (interior climatizado vs almacén abierto vs contenedor marítimo), (3) sustrato a proteger (acero al carbón, zinc, aluminio, cobre — cada uno requiere química distinta), y (4) si la película protectora debe ser removible o puede quedar para producción.",
          "Para protección entre operaciones de maquinado (1-30 días), un inhibidor VCI líquido aplicado por inmersión es la opción más común y económica. Para exportación en contenedor marítimo (30-90 días), VCI con mayor concentración y empaque hermético. Para calderas y sistemas cerrados de agua, inhibidores de oxígeno dosificados continuamente.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Los inhibidores VCI requieren remover antes de pintar?",
        a: "Sí. La película molecular del VCI debe removerse con desengrasante alcalino estándar antes de aplicar pintura o recubrimientos. Si no se remueve, puede comprometer la adhesión. La remoción es rápida (1-2 minutos en baño alcalino tibio) y no deja residuo.",
      },
      {
        q: "¿Cuánto dura la protección de un inhibidor VCI?",
        a: "Depende del producto y las condiciones de almacenamiento. En empaque hermético (bolsa sellada o caja cerrada) la protección típica es 6-12 meses. En almacén abierto sin empaque hermético, baja a 30-90 días. En contenedor marítimo con humedad relativa alta, 60-120 días según la formulación.",
      },
      {
        q: "¿Qué inhibidor uso para piezas de aluminio?",
        a: "Los inhibidores para aluminio son distintos a los de acero al carbón porque deben evitar manchas blancas (corrosión por óxido de aluminio). Recomendamos formulaciones específicas a base de azoles o ésteres de fosfato que protegen sin manchar. Si tu línea procesa ambos sustratos, considera un inhibidor multimetálico.",
      },
      {
        q: "¿Los inhibidores afectan procesos posteriores como soldadura?",
        a: "Sí, todos los residuos de inhibidor deben removerse antes de soldar. La capa molecular del VCI generalmente se quema durante la soldadura sin afectar el cordón, pero es buena práctica desengrasar la zona de soldadura antes del proceso para evitar inclusiones gaseosas o porosidad.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "aeronautica", "tratamiento-superficies-metalicas"],
    relatedServices: ["pasivado"],
    relatedGlossary: ["niebla-salina", "smut"],
  },

  // ══════════════════════════════════════════════════════════════
  // DESOXIDANTES
  // ══════════════════════════════════════════════════════════════
  desoxidantes: {
    id: "desoxidantes",
    categoryId: "tratamiento-metales",
    pageTitle: "Desoxidantes Industriales para Metales",
    metaTitle: "Desoxidantes y Decapantes Ácidos para Metales",
    metaDescription:
      "Desoxidantes ácidos (también llamados decapantes) para óxido, calamina y escamas: fosfórico, clorhídrico y cítrico con inhibidor. Fabricante en Monterrey.",
    hero: "Desoxidantes industriales",
    lead: "Los desoxidantes — también llamados decapantes ácidos o soluciones de pickling — son ácidos formulados que remueven óxido, calamina, escamas de laminación y contaminación oxidada de superficies metálicas — preparándolas para fosfatado, galvanizado, pintura, soldadura o ensamble. Bien usados, eliminan el rechazo por oxidación residual en piezas reprocesadas.",
    sections: [
      {
        heading: "¿Qué es un desoxidante industrial y para qué sirve?",
        paragraphs: [
          "El óxido (Fe₂O₃, Fe₃O₄) y la calamina de laminación que se forman en piezas de acero al carbón impiden la adhesión correcta de pinturas, galvanizados y otros recubrimientos. Si una pieza con óxido pasa directamente a fosfatado o pintura, el resultado es delaminación a corto plazo, ampollas bajo la pintura y eventual falla estructural del recubrimiento.",
          "El desoxidante reacciona químicamente con el óxido para disolverlo selectivamente sin atacar la matriz metálica base. Las formulaciones modernas incluyen inhibidores integrados que protegen el sustrato del ataque ácido excesivo, dejando una superficie limpia, brillante y lista para el siguiente proceso.",
        ],
      },
      {
        heading: "Tipos de desoxidantes según ácido base",
        paragraphs: [
          "Los desoxidantes industriales se formulan principalmente con tres ácidos. Cada uno tiene ventajas y limitaciones según el sustrato y la severidad del óxido:",
        ],
        list: [
          "Ácido fosfórico (H₃PO₄): ataca óxido y forma una capa de fosfato amorfo simultáneamente. Ideal para procesos combinados de desoxidación + conversión química. No genera vapores agresivos. El más usado en líneas de pintura industrial",
          "Ácido clorhídrico (HCl) o muriático: el más potente y económico para óxido pesado y calamina. Reacción rápida. Genera vapores corrosivos que requieren ventilación. NO usar sobre acero inoxidable ni aluminio",
          "Ácido sulfámico o cítrico: formulaciones para acero inoxidable y aleaciones especiales. No daña la matriz Cr-Ni. Cumple ASTM A967 para pasivación química",
          "Mezclas con ácido nítrico: para acero inoxidable con manchas de soldadura (heat tint). Pasivación + desoxidación en una sola etapa",
        ],
      },
      {
        heading: "¿Cuándo necesitas un desoxidante?",
        paragraphs: [
          "El uso de desoxidante es necesario en: (1) piezas con óxido visible o escamas de laminación gruesas, (2) piezas que han estado almacenadas sin protección y muestran oxidación superficial, (3) reproceso de piezas con pintura defectuosa que requieren stripping previo, (4) líneas de pintura que requieren cumplimiento de niebla salina alto, y (5) producción de partes que requieren conversión química (fosfatado) — sin desoxidación previa el fosfato no se forma uniformemente.",
          "Si tu pieza está visiblemente oxidada o no pasa una prueba de espacios libres (white-rust test) post-desengrase, requiere desoxidante. En cambio, piezas que vienen directo de estampado o maquinado con aceite protector probablemente no necesitan desoxidante — sólo desengrase alcalino seguido de fosfatado.",
        ],
      },
      {
        heading: "Procesos combinados: desoxidación + fosfatado en una etapa",
        paragraphs: [
          "Las formulaciones más modernas combinan desoxidación, limpieza ligera y fosfatado de hierro amorfo en un solo paso de proceso. Esto reduce el número de etapas de la línea (de 5-7 etapas tradicionales a 3-4), ahorra químicos, energía y agua, y reduce el tamaño físico de la planta.",
          "Estos productos son particularmente útiles para plantas pequeñas y medianas que arrancan operación con pretratamiento de pintura, talleres de hojalatería y carrocería ligera, y producción de muebles metálicos donde el desempeño anticorrosivo requerido es moderado (servicio interior). Para automotriz tier 1 o aplicaciones de exterior severo se sigue requiriendo línea completa con fosfato de zinc.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Desoxidante y decapante son lo mismo?",
        a: "Para metal, sí: el decapante ácido que remueve óxido y calamina es lo que la industria llama desoxidante (o solución de pickling). Si buscas decapante para quitar pintura, ese es otro producto — visita nuestra categoría de removedores.",
      },

      {
        q: "¿Cuál es la diferencia entre un desoxidante y un decapante?",
        a: "Son términos relacionados pero no idénticos. El desoxidante remueve óxido superficial principalmente; el decapante (pickling) es más agresivo y remueve también escamas de laminación gruesas, residuos de soldadura y contaminación profunda. En la práctica industrial los términos se usan indistintamente, aunque 'decapado' tiende a referirse a procesos más intensivos.",
      },
      {
        q: "¿Cómo manejar la disposición del desoxidante agotado?",
        a: "Los baños de desoxidante agotado contienen hierro disuelto y residuos ácidos. Se clasifican como residuo peligroso (RP) bajo NOM-052-SEMARNAT y deben disponerse mediante empresa autorizada. Algunas plantas regeneran el ácido con tecnología de filtración / extracción para extender la vida del baño y reducir costos de disposición.",
      },
      {
        q: "¿Puedo desoxidar acero inoxidable con ácido clorhídrico?",
        a: "No. El ácido clorhídrico ataca selectivamente la matriz cromo-níquel del inox y genera picaduras (pitting) severas. Para acero inoxidable usa formulaciones específicas a base de ácido nítrico o cítrico, que pasivan en lugar de atacar el sustrato base.",
      },
      {
        q: "¿Cuánto tiempo dura un baño de desoxidante en operación?",
        a: "Depende del volumen procesado y la carga de óxido. Como referencia: un baño de 1,000 L procesa típicamente 3-5 toneladas de acero con óxido superficial antes de saturarse de hierro disuelto. Con control de Fe disuelto y reposición periódica, la vida puede extenderse 30-50%.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "tratamiento-superficies-metalicas", "papel-derivados"],
    relatedServices: ["decapado", "fosfatizado"],
    relatedGlossary: ["decapado", "fosfatizado", "smut"],
  },

  // ══════════════════════════════════════════════════════════════
  // FOSFATOS
  // ══════════════════════════════════════════════════════════════
  fosfatos: {
    id: "fosfatos",
    categoryId: "tratamiento-metales",
    pageTitle: "Fosfatos Industriales para Pretratamiento de Pintura",
    metaTitle: "Fosfato de Zinc y Hierro para Pintura Industrial en México",
    metaDescription:
      "Proveedor de fosfatos industriales en México: fosfato de zinc tricatiónico para automotriz (GMW3179, WSS-M3P18-A), fosfato de hierro amorfo y multimetálicos. Cotización 24 h.",
    hero: "Fosfatos industriales",
    lead: "Los fosfatos industriales son el corazón del pretratamiento químico antes de la pintura electrostática o líquida. Industrias Trevigo es proveedor mexicano de fosfato de zinc tricatiónico (automotriz OEM: GMW3179, WSS-M3P18-A), fosfato de hierro amorfo (servicio interior) y fosfatos multimetálicos compatibles con líneas de acero, zinc y aluminio.",
    sections: [
      {
        heading: "¿Qué es el fosfatado y para qué sirve en la pintura industrial?",
        paragraphs: [
          "El fosfato deposita una capa cristalina o amorfa sobre la superficie metálica que cumple tres funciones críticas: (1) crear textura microscópica que aumenta el área superficial para anclaje mecánico de la pintura, (2) actuar como barrera química entre el metal y agentes corrosivos, y (3) neutralizar la superficie para que el e-coat o pintura aplicada encima adhiera uniformemente.",
          "Sin fosfatado adecuado, las pinturas industriales muestran delaminación, burbujeo y oxidación bajo la película en cuestión de meses. Con un fosfato correcto, la misma pintura puede durar décadas bajo las mismas condiciones de exposición.",
        ],
      },
      {
        heading: "Tipos de fosfatos según aplicación",
        paragraphs: [
          "Los fosfatos industriales se dividen en categorías según su química, peso de recubrimiento y aplicación destino:",
        ],
        list: [
          "Fosfato de zinc tricatiónico (Zn-Mn-Ni): el estándar OEM automotriz. Recubrimiento cristalino denso de 1.5-3.5 g/m². Excelente niebla salina (500+ horas con e-coat)",
          "Fosfato de zinc-calcio: para máxima resistencia anticorrosiva (3.5-7.0 g/m²). Aplicaciones costeras, climas tropicales y exportación",
          "Fosfato de hierro amorfo: capa ligera (0.2-0.6 g/m²) para servicio interior. Líneas compactas de 3 etapas",
          "Fosfato multimetálico: compatible con líneas mixtas acero + zinc + aluminio simultáneamente",
          "Fosfato + detergente integral: combina limpieza y conversión en un solo paso de proceso para plantas pequeñas",
        ],
      },
      {
        heading: "¿Cuál fosfato usar según tu aplicación?",
        paragraphs: [
          "La selección depende de cuatro variables: (1) sustrato a procesar (acero al carbón, zinc galvanizado, aluminio, mixto), (2) cliente final (OEM automotriz, electrodomésticos, muebles, hardware), (3) ambiente de exposición del producto terminado (interior, exterior tropical, exterior costero), y (4) tamaño y complejidad de tu línea de pintura.",
          "Como guía rápida: para automotriz OEM y exportación a mercados exigentes, fosfato de zinc tricatiónico es prácticamente obligatorio. Para muebles metálicos, electrodomésticos línea blanca y producción interior, fosfato de hierro amorfo es suficiente y más económico. Para líneas mixtas con aluminio incluido, fosfato multimetálico evita conflictos químicos entre sustratos.",
        ],
      },
      {
        heading: "Control de calidad: parámetros que debes monitorear",
        paragraphs: [
          "Una línea de fosfatado bien controlada requiere monitoreo diario de cuatro parámetros: (1) acidez total y libre del baño (titulación cada 8 horas, mantener relación 1:6 a 1:8 para fosfato de zinc), (2) temperatura del baño (50-60°C según formulación), (3) peso del recubrimiento depositado (gravimetría semanal sobre panel testigo), y (4) cristalinidad y uniformidad (inspección visual + microscopía mensual).",
          "Adicionalmente, cada lote de producción debe pasar prueba de niebla salina o equivalente. Si los resultados se degradan, los primeros parámetros a revisar son: contaminación del baño con Fe disuelto, temperatura fuera de rango, relación de acidez desbalanceada o agua de enjuague de mala calidad (conductividad >50 µS/cm).",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre fosfato de zinc y fosfato de hierro?",
        a: "Fosfato de zinc deposita un recubrimiento cristalino denso (1.5-3.5 g/m²) con excelente desempeño anticorrosivo (400-1000+ horas niebla salina con pintura). Fosfato de hierro deposita una capa amorfa ligera (0.2-0.6 g/m²) con desempeño moderado (150-300 horas). Zinc es para aplicaciones exigentes; hierro para servicio interior económico.",
      },
      {
        q: "¿Por qué los OEMs automotrices usan fosfato de zinc tricatiónico?",
        a: "El fosfato tricatiónico (Zn-Mn-Ni) deposita una estructura cristalina más fina y uniforme que el zinc puro tradicional. Esto maximiza el área de anclaje del e-coat aplicado encima y mejora 30-50% la resistencia anticorrosiva en pruebas cíclicas (SAE J2334). Es la especificación de GM, Ford, Stellantis y todos los OEMs globales.",
      },
      {
        q: "¿Puedo cambiar mi línea de fosfato de hierro a fosfato de zinc?",
        a: "Sí, pero requiere modificar la línea: agregar etapas (3 → 5-7), bañó de activador, control más estricto de pH y temperatura. La inversión puede ser significativa, pero el desempeño anticorrosivo final justifica el cambio si tu producto requiere exposición exterior o exportación.",
      },
      {
        q: "¿Cuánto dura un baño de fosfato de zinc?",
        a: "Un baño bien controlado dura 3-6 meses antes de necesitar reemplazo o regeneración. Los indicadores de fin de vida útil son: Fe disuelto >500 ppm, lodo en suspensión visible, peso del recubrimiento fuera de rango, o cristalinidad degradada. Con filtración continua se puede extender la vida 30-50%.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "tratamiento-superficies-metalicas", "electrica-electronica"],
    relatedServices: ["fosfatizado", "pasivado", "pintura-electrostatica"],
    relatedGlossary: ["fosfatizado", "fosfato-manganeso", "niebla-salina"],
  },

  // ══════════════════════════════════════════════════════════════
  // REMOVEDORES DE PINTURA
  // ══════════════════════════════════════════════════════════════
  removedores: {
    id: "removedores",
    categoryId: "tratamiento-metales",
    pageTitle: "Removedores de Pintura Industrial",
    metaTitle: "Removedores de Pintura Industrial en México: Alcalinos y Solventes",
    metaDescription:
      "Proveedor de removedores de pintura industrial en México: alcalinos para despintado de bastidores, base solvente y formulaciones intensivas para epóxicos y poliuretanos. Cotización 24 h.",
    hero: "Removedores de pintura",
    lead: "Los removedores de pintura industriales son químicos especializados para eliminar pinturas curadas, primers, e-coat, polvo electrostático y recubrimientos orgánicos de piezas metálicas — sin dañar el sustrato base. Son críticos para reproceso, mantenimiento de bastidores y restauración de equipos.",
    sections: [
      {
        heading: "¿Qué es un removedor de pintura industrial y cuándo se usa?",
        paragraphs: [
          "Las aplicaciones típicas del despintado químico industrial son: (1) reproceso de piezas con pintura defectuosa (sagging, cratering, color incorrecto), (2) recuperación de bastidores y ganchos de líneas de pintura electrostática que acumulan capas de pintura horneada después de cientos de ciclos, (3) restauración de equipos industriales pintados para repintar, (4) limpieza de transportadores con acumulación masiva de pintura, y (5) reproceso de partes automotrices clásicas o de motor.",
          "El despintado químico es generalmente más limpio, controlado y menos invasivo que métodos mecánicos como granallado o lijado, especialmente para piezas con geometrías complejas, roscas o detalles que el método mecánico dañaría.",
        ],
      },
      {
        heading: "Tipos de removedores industriales",
        paragraphs: [
          "Hay tres categorías principales de removedores industriales, cada una con su mejor caso de uso:",
        ],
        list: [
          "Removedores alcalinos (pH 13-14): de alto poder para eliminar pinturas en polvo curadas, esmaltes alquídicos, primers epóxicos y recubrimientos orgánicos sobre acero al carbón. NO usar sobre aluminio o zinc — los disuelven",
          "Removedores base solvente (cloruro de metileno, alcoholes, glicoléteres): el método más rápido para despintado de piezas complejas. Disuelven epóxicos, poliuretanos, acrílicos en 5-30 min. Requieren ventilación y EPP respiratorio",
          "Removedores intensivos: la última línea para los recubrimientos más resistentes — epóxicos cargados, poliuretanos curados a alta temperatura, recubrimientos marinos. Funcionan típicamente por inmersión prolongada (4-24 horas)",
        ],
      },
      {
        heading: "Despintado de bastidores: el caso de uso #1 en la industria",
        paragraphs: [
          "Los bastidores, ganchos y transportadores de líneas de pintura electrostática son el caso de uso más común y económicamente importante del despintado químico. Después de cientos de ciclos pintados y horneados, acumulan capas gruesas de pintura que afectan: (1) la conductividad eléctrica necesaria para el efecto Faraday, (2) el contacto con la pieza pintada, y (3) la capacidad de paso por la línea.",
          "El despintado periódico (cada 50-200 ciclos según producción) restaura los bastidores a su condición original. Los removedores alcalinos por inmersión a 60-80°C en tinas dedicadas son la solución estándar. Tiempos típicos: 30 min a 4 horas según el espesor acumulado de pintura.",
        ],
      },
      {
        heading: "Consideraciones de seguridad y disposición",
        paragraphs: [
          "Los removedores industriales son químicos altamente cáusticos o tóxicos según el tipo. Requieren obligatoriamente: ventilación forzada en zona de trabajo (especialmente solventes), EPP completo (guantes de neopreno, mandil PVC, protección facial), área dedicada con piso impermeable y muros de contención, y procedimiento de neutralización y disposición conforme NOM-052-SEMARNAT.",
          "Los baños agotados se clasifican como residuo peligroso y deben disponerse mediante empresa autorizada. Algunas plantas implementan procesos de regeneración del baño alcalino por filtración o decantación, extendiendo la vida útil 2-3x y reduciendo costos de disposición.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es el removedor más rápido para despintar piezas?",
        a: "Los removedores base solvente con cloruro de metileno son los más rápidos (5-30 min para mayoría de pinturas). Sin embargo, son los más tóxicos. Para uso industrial sostenido, removedores alcalinos a temperatura (60-80°C) son más balanceados: 30 min a 4 horas pero con manejo de seguridad más simple.",
      },
      {
        q: "¿Puedo usar el mismo removedor para pintura en polvo y epoxi?",
        a: "Sí, los removedores alcalinos de alto poder funcionan para ambos tipos. Sin embargo, las pinturas epóxicas curadas a alta temperatura (>200°C) pueden requerir más tiempo de contacto o un removedor intensivo. Para pintura en polvo estándar, los alcalinos básicos son suficientes.",
      },
      {
        q: "¿Cómo dispongo del removedor agotado?",
        a: "Los baños agotados se clasifican como residuo peligroso (RP) bajo NOM-052-SEMARNAT. Debe disponerse mediante empresa autorizada con certificado de disposición. Para baños alcalinos, algunos servicios de recuperación pueden tratar el residuo y devolver una base reutilizable, reduciendo costos.",
      },
      {
        q: "¿El despintado químico daña el sustrato metálico?",
        a: "Los removedores alcalinos no atacan el acero al carbón ni el hierro fundido si se controlan temperatura y tiempo de contacto. Sin embargo, NO se deben usar sobre aluminio, zinc galvanizado o magnesio (los disuelven). Para esos sustratos use removedores con solventes específicos o intensivos selectivos.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "tratamiento-superficies-metalicas"],
    relatedServices: ["despintado", "decapado"],
    relatedGlossary: ["fosfatizado", "decapado"],
  },

  // ══════════════════════════════════════════════════════════════
  // DETERGENTES INDUSTRIALES / DESENGRASANTES ALCALINOS
  // ══════════════════════════════════════════════════════════════
  detergentes: {
    id: "detergentes",
    categoryId: "tratamiento-metales",
    pageTitle: "Detergentes y Desengrasantes Industriales para Metales",
    metaTitle: "Desengrasantes Alcalinos Industriales para Metales en México",
    metaDescription:
      "Proveedor de desengrasantes y detergentes alcalinos en México: limpieza profunda de metales para piezas mecanizadas, estampadas y previo a fosfatado. Líquidos, polvo y multimetálicos. Cotización 24 h.",
    hero: "Detergentes y desengrasantes industriales",
    lead: "Los desengrasantes alcalinos industriales son la primera etapa de cualquier proceso de pretratamiento metálico previo a pintura electrostática, fosfatado o galvanizado. Industrias Trevigo es proveedor mexicano de desengrasantes alcalinos líquidos, en polvo concentrado, multimetálicos y neutros con pasivado — con tasas de limpieza superiores al 99% en pruebas estandarizadas (break-time, white-rust).",
    sections: [
      {
        heading: "¿Qué es un desengrasante alcalino industrial y para qué sirve?",
        paragraphs: [
          "Toda pieza metálica que llega a una línea de pintura industrial trae contaminantes superficiales: aceites residuales de maquinado, fluidos de prensa de estampado, pastas anti-corrosivas de almacenamiento, polvo, huellas digitales y partículas de soldadura. Si esa pieza entra a fosfatado o pintura sin limpieza adecuada, el resultado es: fosfatado irregular o ausente, ampollas bajo la pintura, delaminación y oxidación a corto plazo.",
          "Los desengrasantes alcalinos modernos eliminan 99%+ de estos contaminantes en una sola etapa de limpieza por aspersión o inmersión a temperatura controlada (50-70°C). Su química combina álcali activo (sosa cáustica, silicato de sodio), surfactantes que emulsifican aceites, y agentes secuestrantes que previenen la redeposición de contaminantes disueltos.",
        ],
      },
      {
        heading: "Tipos de detergentes industriales según aplicación",
        paragraphs: [
          "Los desengrasantes industriales se clasifican por su pH operativo, forma física y compatibilidad de sustratos:",
        ],
        list: [
          "Líquidos alcalinos fuertes (pH 12-13): para acero al carbón y hierro fundido. Máximo poder desengrasante. NO compatibles con aluminio o zinc galvanizado",
          "Multimetálicos: con quelantes específicos (gluconatos, EDTA) que permiten procesar acero + aluminio + zinc en el mismo baño sin atacar los sustratos sensibles",
          "Polvo concentrado: alta concentración para sistemas grandes con dosificación automática. 3-4x más concentrado que líquido — ahorro logístico y de almacenamiento",
          "Neutros con pasivado: pH 7-8.5 para metales sensibles (electrónica, aeronáutica, dispositivos médicos) donde un álcali fuerte deterioraría el acabado",
          "Sólidos alcalinos: para baños de gran volumen con dosificación periódica",
        ],
      },
      {
        heading: "¿Cómo elegir el desengrasante correcto?",
        paragraphs: [
          "La selección depende de tres variables: (1) tipo de contaminación (aceites minerales ligeros, fluidos sintéticos, pastas anti-corrosivas pesadas, mezclas), (2) sustratos a procesar (acero exclusivo, mixto con aluminio/zinc, metales sensibles), y (3) sistema de aplicación (aspersión, inmersión, electrolítico, ultrasonido).",
          "Para acero al carbón con contaminación normal: líquido alcalino fuerte estándar. Para líneas mixtas: multimetálico con quelantes. Para alto consumo (>500 kg/mes): polvo concentrado por economía logística. Para metales sensibles o piezas pulidas finas: neutro con pasivado.",
        ],
      },
      {
        heading: "Control de calidad de baño",
        paragraphs: [
          "Un baño desengrasante bien controlado requiere monitoreo diario de tres parámetros: (1) concentración (titulación o conductividad — mantener en rango operativo 3-8%), (2) carga de aceite emulsionado (medición visual o densitométrica — descartar baño cuando >50% saturación), y (3) pH (>11 para alcalinos fuertes).",
          "Adicionalmente, prueba semanal de calidad de limpieza con prueba de break-time (tiempo de escurrimiento del agua) o test de espacios libres (white-rust). Una mala limpieza siempre genera problemas en etapas posteriores, así que invertir en su control rindue beneficios desproporcionados.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre desengrasante alcalino y solvente?",
        a: "Los desengrasantes alcalinos son base agua (mezclas de álcali + surfactantes) y emulsifican aceites en el baño. Los solventes (n-propilbromuro, percloroetileno) disuelven aceites químicamente. Para uso industrial moderno los alcalinos son ampliamente preferidos por menor toxicidad, costo y compatibilidad con tratamiento de aguas posterior.",
      },
      {
        q: "¿A qué temperatura debe operar un baño desengrasante?",
        a: "El rango óptimo para alcalinos fuertes es 50-70°C. Por debajo de 45°C la velocidad de limpieza cae significativamente; arriba de 75°C aumenta el consumo de energía sin mejora proporcional. Para neutros con pasivado, 30-50°C es suficiente y económico.",
      },
      {
        q: "¿Cómo extiendo la vida de mi baño desengrasante?",
        a: "Tres prácticas: (1) skimming continuo del aceite que flota en superficie, (2) filtración periódica para remover partículas sólidas, y (3) reposición diaria de químico para mantener concentración (no esperar a que se agote completamente). Con buen manejo, un baño puede durar 2-4 semanas vs 1 semana sin control.",
      },
      {
        q: "¿Los desengrasantes son compatibles con tratamiento de aguas residuales?",
        a: "Sí, los desengrasantes modernos son biodegradables (>80% en 28 días) y se tratan en PTAR convencional. El aceite emulsionado se separa en DAF (flotación) o coagulación con catiónicos. Algunos formulados antiguos con nonilfenol-etoxilados son problemáticos — verifica la SDS de tu producto.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "tratamiento-superficies-metalicas", "electrica-electronica", "alimenticia"],
    relatedServices: ["fosfatizado", "decapado"],
    relatedGlossary: ["fosfatizado", "smut"],
  },

  // ══════════════════════════════════════════════════════════════
  // PASIVADOS (TRATAMIENTO DE METALES)
  // ══════════════════════════════════════════════════════════════
  pasivados: {
    id: "pasivados",
    categoryId: "tratamiento-metales",
    pageTitle: "Pasivadores para Acero Inoxidable y Metales",
    metaTitle: "Pasivadores para Acero Inoxidable en México (ASTM A967)",
    metaDescription:
      "Proveedor de pasivadores químicos para acero inoxidable en México conforme ASTM A967 (Nitric y Citric). Eliminación de hierro libre y restauración de capa pasiva. Cotización 24 h.",
    hero: "Pasivadores químicos",
    lead: "El pasivado es el tratamiento químico final que restaura la capa pasiva de óxido de cromo en acero inoxidable y otros metales — el escudo natural que les da su resistencia a la corrosión. Sin pasivado correcto post-fabricación, el acero inoxidable puede oxidarse en cuestión de semanas, especialmente en presencia de hierro libre incrustado durante el maquinado o soldadura.",
    sections: [
      {
        heading: "¿Qué es el pasivado de acero inoxidable y para qué sirve?",
        paragraphs: [
          "El acero inoxidable debe su resistencia a la corrosión a una película delgadísima (3-5 nanómetros) de óxido de cromo (Cr₂O₃) que se forma espontáneamente en su superficie. Esta capa pasiva se daña durante maquinado, soldadura, estampado y manipulación — quedando con hierro libre incrustado y zonas sin protección.",
          "El pasivador es una solución ácida (típicamente nítrica o cítrica) que: (1) disuelve selectivamente el hierro libre incrustado sin atacar la matriz Cr-Ni, (2) acelera la regeneración de la capa pasiva de óxido de cromo, y (3) deja la superficie químicamente uniforme y máximamente resistente a corrosión. El proceso suele tomar 15-30 minutos en baño a temperatura controlada.",
        ],
      },
      {
        heading: "Tipos de pasivadores según norma y aplicación",
        paragraphs: [
          "Los pasivadores se formulan principalmente con dos químicas ácidas, cada una con norma de aplicación específica:",
        ],
        list: [
          "Pasivadores con ácido nítrico (HNO₃): el estándar histórico para acero inoxidable austenítico (304, 316). Cumple ASTM A967 método Nitric 1-5 y AMS 2700 aeroespacial. Excelente para alto desempeño",
          "Pasivadores con ácido cítrico: alternativa más segura (no genera vapores NOₓ), biodegradable, cumple ASTM A967 método Citric. Cada vez más usado en industria alimentaria y farmacéutica",
          "Pasivadores con ácido oxálico o quelantes: para casos específicos como acero inoxidable martensítico (410, 420) o aleaciones especiales que requieren química menos agresiva",
          "Geles pasivadores: para aplicación selectiva en zonas de soldadura y manchas heat tint sin sumergir la pieza completa",
        ],
      },
      {
        heading: "¿Cuándo necesitas pasivar?",
        paragraphs: [
          "El pasivado es necesario en: (1) acero inoxidable recién maquinado, cortado o doblado (siempre queda hierro libre incrustado), (2) post-soldadura para eliminar heat tint y carburos precipitados, (3) restauración de equipos de proceso (industria alimentaria, farmacéutica, química) después de mantenimiento, (4) equipos que tendrán contacto con químicos agresivos o ambientes salinos.",
          "La industria alimentaria y farmacéutica pasiva rutinariamente tanques, tuberías y agitadores antes de puesta en servicio y después de mantenimiento mayor — es una práctica obligatoria en FDA/FSMA, BPM y GMP. Para equipos críticos se pasiva cada 6-24 meses dependiendo del uso.",
        ],
      },
      {
        heading: "Validación del pasivado: pruebas de aceptación",
        paragraphs: [
          "Después de pasivar se valida el resultado con pruebas específicas. Las más comunes son: (1) prueba de ferroxyl (gota de ferricianuro de potasio) — detecta hierro libre residual en minutos, (2) prueba de inmersión en agua destilada 24-72 hr — busca aparición de manchas de óxido, (3) prueba de niebla salina ASTM B117 para acero inoxidable de alta exigencia, y (4) prueba de cobre sulfato CASS para piezas críticas (aeronáutica, médico).",
          "Un pasivado bien hecho debe pasar prueba ferroxyl sin ningún punto azul (presencia de Fe libre). Para automotriz, alimentos y farmacéutica el cumplimiento de ASTM A967 es la referencia normativa. Emitimos certificados de pasivado con resultados de prueba si el cliente lo requiere.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre pasivar y electropulir?",
        a: "Pasivado: tratamiento químico que disuelve hierro libre y regenera la capa pasiva de óxido de cromo sin alterar la geometría de la pieza. Electropulido: proceso electroquímico que también remueve material superficial (5-25 μm), nivelando y dejando un acabado espejo. El electropulido pasiva automáticamente. Para resistencia a corrosión, pasivado químico es suficiente y mucho más económico.",
      },
      {
        q: "¿Puedo pasivar acero inoxidable con ácido cítrico en lugar de nítrico?",
        a: "Sí. ASTM A967 método Citric acepta ácido cítrico (típicamente 4-10% a 50-70°C, 4-30 min) como alternativa válida al nítrico para todas las series 200, 300 y 400 de acero inoxidable. El cítrico es más seguro (sin vapores NOₓ), biodegradable y aceptable en industria alimentaria — pero requiere temperatura mayor y tiempo de contacto más largo que el nítrico.",
      },
      {
        q: "¿El pasivado elimina las manchas de soldadura (heat tint)?",
        a: "Parcialmente. Las manchas de soldadura severas (azules, marrones, negras) son óxidos de Cr y Fe muy adheridos — el pasivado estándar no las remueve completamente. Para heat tint severo se requiere previamente pickling con HNO₃+HF o pasta gel específica para soldadura. Después se pasiva normalmente.",
      },
      {
        q: "¿Qué frecuencia debo pasivar tanques de proceso de acero inoxidable?",
        a: "Depende de la severidad del servicio: tanques en industria farmacéutica suelen pasivarse cada 6-12 meses como parte de validación. Tanques alimentarios cada 12-24 meses o post-CIP intensivo. Equipos químicos en servicio agresivo (cloruros, ácidos) pueden requerir pasivado más frecuente. Tanques de almacenamiento neutro pueden durar 3-5 años sin repasivado.",
      },
    ],
    relatedIndustries: ["alimenticia", "farmaceutica", "automotriz", "aeronautica", "metalmecanica", "hospitales"],
    relatedServices: ["pasivado", "decapado"],
    relatedGlossary: ["pasivado", "acero-inoxidable", "astm-a967", "cromo-hexavalente"],
  },

  // ══════════════════════════════════════════════════════════════
  // ACEITES PARA METALES (CORTE, DESMOLDADO, PROTECCIÓN)
  // ══════════════════════════════════════════════════════════════
  "aceites-metales": {
    id: "aceites-metales",
    categoryId: "tratamiento-metales",
    pageTitle: "Aceites Industriales para Metales: Corte, Desmoldado y Protección",
    metaTitle: "Aceites Industriales para Metales en México: Corte, Desmoldado",
    metaDescription:
      "Proveedor de aceites de corte solubles, desmoldantes de fundición y anticorrosivos temporales en México. Formulaciones técnicas para maquinado CNC, fundición y almacén. Cotización 24 h.",
    hero: "Aceites para metales",
    lead: "Los aceites industriales para metales agrupan tres familias críticas: aceites de corte solubles y puros (para tornos CNC, fresado, taladrado, rectificado), aceites desmoldantes para fundición a presión (HPDC) de aluminio, y aceites de protección anticorrosiva temporal entre operaciones. Industrias Trevigo es proveedor mexicano con formulaciones técnicas por aplicación.",
    sections: [
      {
        heading: "Funciones de los aceites industriales para metales",
        paragraphs: [
          "Los aceites para metales cumplen funciones específicas según su formulación: lubricación durante maquinado (reducción de calor y desgaste de herramienta), refrigeración (disipación térmica), separación entre molde y pieza fundida, protección anticorrosiva temporal entre operaciones, y desmoldado en producción de partes plásticas o de hule sobre matrices metálicas.",
          "Una buena selección de aceite puede multiplicar la vida útil de las herramientas de corte hasta 3x, mejorar el acabado superficial de la pieza maquinada, reducir el rechazo por oxidación entre operaciones, y disminuir el tiempo de cambio en líneas de fundición.",
        ],
      },
      {
        heading: "Tipos de aceites en esta línea",
        paragraphs: [
          "Nuestra línea de aceites para metales cubre las aplicaciones más críticas en talleres de maquinado, fundición y plantas de producción:",
        ],
        list: [
          "Aceites de corte solubles (emulsionables): se mezclan con agua para formar refrigerante en tornos CNC, milling, taladros y rectificadoras",
          "Aceites de corte puros (straight): para operaciones de alta exigencia — brochado, roscado, embutido profundo",
          "Aceites desmoldantes para fundición: nafténicos y semi-sintéticos que evitan adherencia de metal fundido a moldes de aluminio o hierro",
          "Aceites de protección temporal: películas anticorrosivas removibles entre operaciones, almacenamiento o transporte",
          "Aceites para forja y embutido: lubricación de matrices con cargas extremas y altas presiones",
        ],
      },
      {
        heading: "Cómo elegir el aceite de corte correcto",
        paragraphs: [
          "La selección depende de cuatro variables principales: (1) tipo de operación (torneado, fresado, taladrado, rectificado, roscado), (2) material maquinado (acero al carbón, inoxidable, aluminio, titanio, hierro fundido), (3) severidad (velocidad de corte, profundidad, herramienta usada), y (4) requisitos del taller (estabilidad de emulsión, bajo olor, biodegradabilidad).",
          "Como regla general: para acero al carbón en operaciones estándar, un soluble semi-sintético al 5-8% es la opción más versátil. Para acero inoxidable, formulación con aditivos EP (extreme pressure) cloradores. Para aluminio, sintéticos o semi-sintéticos sin cloruro para evitar manchas. Damos asesoría técnica por aplicación.",
        ],
      },
      {
        heading: "Control de baño de aceite soluble: prácticas críticas",
        paragraphs: [
          "Un baño de aceite soluble bien controlado dura 3-6 meses y entrega rendimiento óptimo. Los parámetros a monitorear diariamente son: (1) concentración (refractómetro Brix, mantener en rango 5-8%), (2) pH (8.8-9.5 — más bajo indica acidificación por bacterias), (3) conductividad (creciente indica acumulación de sales y residuos), y (4) aspecto visual (sin separación, sin olor pútrido).",
          "Los problemas más comunes son: contaminación con aceite de fugas (tramping oil — desnata), crecimiento bacteriano (anti-microbiano cada 30-60 días), pérdida de concentración por evaporación (reposición con emulsión preparada), y rancidity (olor a huevo podrido — descartar baño y limpiar tanque). Buen manejo reduce el costo del baño 50-70%.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre aceite de corte soluble y sintético?",
        a: "Soluble (emulsionable): contiene aceite mineral con emulsificantes; se mezcla con agua formando lechosa estable. Sintético: sin aceite mineral, sólo aditivos químicos en agua; queda transparente. Semi-sintético: intermedio (10-30% aceite). Los solubles son más versátiles y económicos; los sintéticos dan mejor visibilidad del corte y resistencia a bacterias, ideales para máquinas centrales y rectificado fino.",
      },
      {
        q: "¿Cómo evito que mi aceite soluble se contamine con bacterias?",
        a: "Cinco prácticas: (1) skimming continuo de tramping oil (los hidrocarburos alimentan bacterias), (2) aireación del baño (las bacterias proliferan en anaerobiosis), (3) dosificación periódica de biocida no-oxidante (cada 30-60 días), (4) limpieza completa de tanque cada cambio de baño (no dejar lodo residual), y (5) control de pH — mantener >8.8 inhibe crecimiento bacteriano.",
      },
      {
        q: "¿Sus aceites desmoldantes son compatibles con fundición de aluminio?",
        a: "Sí, manejamos formulaciones nafténicas específicas para fundición a presión de aluminio (HPDC). Son aceites de alto punto de inflamación, sin cenizas y con aditivos que evitan adherencia del aluminio al molde de acero a 200-250°C. Para fundición de hierro y acero usamos formulaciones distintas (grafito coloidal en agua).",
      },
      {
        q: "¿Por cuánto tiempo protege un aceite anticorrosivo entre operaciones?",
        a: "Depende de la formulación y ambiente. Aceites de protección temporal estándar dan 30-90 días en almacén cerrado y 7-15 días al ambiente. Para protección extendida (60-180 días) usamos aceites con inhibidores VCI integrados. Para exportación marítima (90-180 días en contenedor) requiere combinación de aceite + papel VCI.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "aeronautica", "tratamiento-superficies-metalicas"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
    relatedGlossary: ["viscosidad", "iso-vg", "ep-extreme-pressure", "indice-de-viscosidad"],
  },

  // ══════════════════════════════════════════════════════════════
  // COAGULANTES (TRATAMIENTO DE AGUAS)
  // ══════════════════════════════════════════════════════════════
  coagulantes: {
    id: "coagulantes",
    categoryId: "tratamiento-aguas",
    pageTitle: "Coagulantes para Tratamiento de Aguas Residuales Industriales",
    metaTitle: "Coagulantes Industriales en México: PAC, Sulfato de Aluminio",
    metaDescription:
      "Proveedor de coagulantes industriales en México: PAC (policloruro de aluminio), sulfato de aluminio, cloruro férrico y orgánicos. Cumplimiento NOM-001-SEMARNAT-2021. Jar Test sin costo.",
    hero: "Coagulantes industriales",
    lead: "Los coagulantes industriales son la primera etapa química del tratamiento de aguas residuales en PTAR. Industrias Trevigo es proveedor de PAC (policloruro de aluminio), sulfato de aluminio, cloruro férrico, sulfato férrico y coagulantes orgánicos (poliaminas) para galvanoplastia, automotriz, alimentaria, papel y textil — con cumplimiento de NOM-001-SEMARNAT-2021.",
    sections: [
      {
        heading: "¿Qué es un coagulante y para qué sirve en tratamiento de aguas?",
        paragraphs: [
          "El agua residual industrial contiene partículas suspendidas y coloides cargadas eléctricamente que se repelen entre sí, manteniéndose en suspensión por meses o años. Un coagulante neutraliza estas cargas, eliminando la repulsión y permitiendo que las partículas se acerquen lo suficiente para ser atraídas por fuerzas de van der Waals.",
          "Sin coagulación previa, la sedimentación es imposible para partículas <50 micras (la mayoría del contaminante). Por eso el coagulante es el corazón químico de cualquier PTAR — su selección y dosificación determinan: % de remoción de turbidez (típicamente 85-98%), % de remoción de DQO (40-70%), volumen de lodos generados, y costo operativo total del tratamiento.",
        ],
      },
      {
        heading: "Tipos de coagulantes industriales",
        paragraphs: [
          "Los coagulantes industriales se dividen en inorgánicos y orgánicos, cada familia con sus ventajas:",
        ],
        list: [
          "Policloruro de aluminio (PAC): coagulante inorgánico moderno, alta basicidad. Funciona en amplio rango de pH (5-9). Genera 30-50% menos lodo que el sulfato de aluminio. El más usado actualmente",
          "Sulfato de aluminio (alumbre): coagulante tradicional, económico. Requiere ajuste de pH a 6-7 y consume alcalinidad del agua. Útil para aguas con turbidez alta",
          "Cloruro férrico (FeCl₃): excelente para remoción de fosfatos, sulfuros y color. Funciona en pH amplio. Genera lodos densos. Mancha de marrón",
          "Sulfato férrico: similar al cloruro férrico pero sin riesgo de corrosión por cloruro. Ideal para acero inoxidable",
          "Coagulantes orgánicos (poliaminas, polidadmac): catiónicos de alto peso molecular. Reducen significativamente el volumen de lodos (50-70%) y funcionan con cargas variables. Más caros por kilo pero menor costo total",
        ],
      },
      {
        heading: "Cómo seleccionar el coagulante correcto",
        paragraphs: [
          "La selección depende de cuatro variables: (1) tipo de contaminantes (sólidos suspendidos, DQO orgánica, fosfatos, color, metales), (2) pH y alcalinidad del efluente, (3) requisitos de manejo de lodos (volumen, deshidratación, disposición), y (4) economía global del proceso (costo del químico + costo de manejo de lodos + costo de incumplimiento).",
          "Para efluentes con alta turbidez y carga orgánica estándar: PAC es la opción más versátil. Para alta carga de fosfatos: cloruro férrico. Para minimizar lodos: coagulante orgánico (poliamina). Para aguas con metales pesados: combinación de coagulante + ajuste de pH + secuestrante. Hacemos pruebas de jarras (Jar Test) sin costo para determinar la dosis óptima por efluente.",
        ],
      },
      {
        heading: "Dosificación y control operativo",
        paragraphs: [
          "Las dosis típicas son: PAC 50-300 ppm, sulfato de aluminio 100-500 ppm, cloruro férrico 80-400 ppm, coagulantes orgánicos 5-50 ppm. La dosis óptima debe determinarse por Jar Test (prueba de jarras en laboratorio) — usar dosis subóptima causa mala coagulación, usar dosis excesiva desperdicia químico y genera más lodo.",
          "El control operativo se hace con: (1) medición continua de turbidez de entrada y salida del sedimentador, (2) ajuste automático de bomba dosificadora vía controlador PID o setpoint manual, (3) prueba de jarras semanal para ajuste por variaciones del efluente, y (4) muestreo diario de pH (mantener en rango óptimo de coagulación 6-8).",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál coagulante es mejor: PAC o sulfato de aluminio?",
        a: "PAC supera al sulfato de aluminio en la mayoría de aplicaciones modernas: funciona en rango de pH más amplio (5-9 vs 6-7), genera 30-50% menos lodos, requiere menos ajuste de pH y forma flóculos más densos. Sulfato de aluminio sigue usándose por economía cuando el efluente es muy turbio pero con composición estable. Para PTAR nueva, recomendamos siempre PAC.",
      },
      {
        q: "¿Hacen pruebas de jarras (Jar Test) en su laboratorio?",
        a: "Sí, sin costo para clientes con efluentes de interés. Procesamos 6 muestras simultáneas con dosis distintas en jar tester estándar y entregamos reporte con: dosis óptima de coagulante, dosis óptima de floculante, costo unitario por m³, proyección de cumplimiento NOM-001-SEMARNAT-2021, y recomendaciones de manejo de lodos. Tiempo de respuesta: 3-5 días hábiles.",
      },
      {
        q: "¿Cuánto cuesta tratar 1 m³ de agua residual industrial?",
        a: "Depende del tipo de efluente. Rango típico: 8-15 MXN/m³ para efluentes orgánicos estándar (alimentos, papel), 15-25 MXN/m³ para efluentes con metales (galvanoplastia, automotriz), 25-45 MXN/m³ para efluentes complejos (textil, farmacéutica). El costo del coagulante representa 30-50% del costo químico total. Optimizar selección reduce 20-40% el costo operativo.",
      },
      {
        q: "¿Cómo dispongo de los lodos generados por la coagulación?",
        a: "Los lodos de PTAR industrial son residuos no-peligrosos (RNP) si no contienen metales pesados sobre límite, o peligrosos (RP) si los contienen. Pueden disponerse mediante: (1) confinamiento controlado por empresa autorizada (la opción estándar), (2) coprocesamiento en cementeras (lodos orgánicos), (3) compostaje (sólo orgánicos sin metales). Generamos certificado de manejo conforme NOM-052-SEMARNAT.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "alimenticia", "papel-derivados", "textil", "farmaceutica", "minera"],
    relatedServices: ["pruebas-jarras", "optimizacion-procesos", "ingenieria-asesoria"],
    relatedGlossary: ["coagulante", "floculante", "pac-policloruro-aluminio", "jar-test", "nom-001", "ptar"],
  },

  // ══════════════════════════════════════════════════════════════
  // FLOCULANTES
  // ══════════════════════════════════════════════════════════════
  floculantes: {
    id: "floculantes",
    categoryId: "tratamiento-aguas",
    pageTitle: "Floculantes para Tratamiento de Aguas Industriales",
    metaTitle: "Floculantes Industriales en México: Aniónicos, Catiónicos",
    metaDescription:
      "Proveedor de floculantes industriales en México: aniónicos, catiónicos y no-iónicos de alto peso molecular para PTAR. Sedimentación rápida y cumplimiento NOM-001. Cotización 24 h.",
    hero: "Floculantes industriales",
    lead: "Los floculantes son polímeros de alto peso molecular que actúan después de la coagulación: agregan las micro-partículas desestabilizadas en flóculos grandes y densos que sedimentan rápidamente, permitiendo separación eficiente del agua tratada.",
    sections: [
      {
        heading: "¿Qué es un floculante y cuál es la diferencia con un coagulante?",
        paragraphs: [
          "El coagulante neutraliza las cargas eléctricas de las partículas suspendidas, pero las partículas resultantes son aún muy pequeñas (<100 micras) y sedimentan lentamente. El floculante actúa como puente molecular: sus largas cadenas poliméricas se adhieren a múltiples partículas simultáneamente, agregándolas en flóculos grandes (1-10 mm) y densos que sedimentan en minutos.",
          "El uso secuencial coagulante + floculante es el estándar mundial en tratamiento de aguas porque optimiza ambos efectos: el coagulante para desestabilizar (acción química), el floculante para agregar (acción física). Sin floculante, la sedimentación requiere horas o decantadores muy grandes. Con floculante correcto, sedimentación en 15-30 minutos.",
        ],
      },
      {
        heading: "Tipos de floculantes según carga iónica",
        paragraphs: [
          "Los floculantes se clasifican según la carga eléctrica de su polímero:",
        ],
        list: [
          "Floculantes aniónicos (carga negativa): los más usados en industria. Excelentes para efluentes con sólidos minerales (minería, metalmecánica, lavado de arenas). Trabajan después de coagulantes inorgánicos catiónicos como PAC o FeCl₃",
          "Floculantes catiónicos (carga positiva): para efluentes con alta carga orgánica (alimentos, papel, tratamiento de lodos). Se usan en deshidratación de lodos biológicos y municipal",
          "Floculantes no-iónicos: para condiciones de pH extremo o cuando otros polímeros no funcionan. Versátiles pero menos eficientes que los iónicos en la mayoría de aplicaciones",
          "Floculantes anfotéricos: para efluentes complejos con cargas variables. Más caros pero efectivos en condiciones difíciles",
        ],
      },
      {
        heading: "Selección del floculante correcto",
        paragraphs: [
          "La selección se basa en tres variables clave: (1) carga del coagulante usado previamente (si es catiónico como PAC, el floculante debe ser aniónico para complementar), (2) tipo de sólidos a flocular (orgánicos vs minerales), y (3) peso molecular requerido (alto PM para flóculos grandes, mediano PM para emulsiones, bajo PM como auxiliar).",
          "Como guía: para efluentes de galvanoplastia y metalmecánica con PAC o FeCl₃: floculante aniónico de alto PM. Para efluentes alimentarios y de papel con coagulante orgánico catiónico: floculante aniónico. Para deshidratación de lodos biológicos: floculante catiónico de alto PM. Hacemos Jar Test combinado coagulante + floculante para optimizar la mezcla.",
        ],
      },
      {
        heading: "Dosificación y aplicación operativa",
        paragraphs: [
          "Las dosis típicas son muy bajas: 0.5-5 ppm para floculantes líquidos al 0.1-0.5% activo, o equivalente para polímeros en polvo (poliacrilamidas, ver subcategoría dedicada). El floculante se inyecta inmediatamente después del coagulante, en zona de mezcla lenta (velocidad gradient G=20-80 s⁻¹) para no romper los flóculos formados.",
          "Errores comunes: dosificar floculante antes de coagulante (no funciona), agitación demasiado intensa que rompe los flóculos, dosificación en zona de mezcla rápida en lugar de lenta, y subdosificación que deja partículas sin flocular. El diseño correcto del cámara de floculación es tan importante como la selección del químico.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre floculante y poliacrilamida?",
        a: "Poliacrilamida es una clase específica de floculante: polímero sintético derivado de la acrilamida, disponible en aniónico, catiónico y no-iónico. Es la familia de floculantes más usada en industria por su alto peso molecular y eficiencia. Otros floculantes incluyen polímeros naturales (almidón, alginatos) y sintéticos no-acrilamida — menos usados. En la práctica industrial, 'floculante' y 'poliacrilamida' suelen usarse como sinónimos.",
      },
      {
        q: "¿Por qué mi floculante no forma flóculos visibles?",
        a: "Cinco causas comunes: (1) carga incorrecta — si usas PAC necesitas floculante aniónico, no catiónico, (2) preparación incorrecta — los polímeros requieren maduración 30-60 min antes de uso, (3) dosis muy baja o muy alta (overdose rompe flóculos), (4) agitación excesiva en zona de floculación, o (5) pH fuera de rango óptimo. Diagnóstico vía Jar Test es el método más rápido para identificar la causa.",
      },
      {
        q: "¿Puedo usar floculante sin coagulante previo?",
        a: "Rara vez. El floculante necesita partículas pre-desestabilizadas por el coagulante para funcionar. Sin coagulación previa, las partículas siguen repelidas eléctricamente y el polímero no logra agregarlas eficientemente. La excepción son efluentes con sólidos muy gruesos (>100 μm) que sedimentan por gravedad — en esos casos un floculante puede funcionar solo para acelerar sedimentación.",
      },
      {
        q: "¿Los floculantes son seguros para descarga a cuerpos de agua?",
        a: "Sí, los floculantes modernos son biodegradables (>80% en 28 días según OECD 301) y la dosis residual en el efluente tratado es típicamente <0.5 ppm — muy por debajo de límites toxicológicos. Las poliacrilamidas pueden contener trazas de acrilamida monomérica residual (carcinogénica), pero las formulaciones actuales tienen <0.05% conforme normativa europea — no representan riesgo en uso normal.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "alimenticia", "papel-derivados", "textil", "minera"],
    relatedServices: ["pruebas-jarras", "optimizacion-procesos"],
    relatedGlossary: ["floculante", "coagulante", "poliacrilamida", "jar-test", "ptar"],
  },

  // ══════════════════════════════════════════════════════════════
  // POLIACRILAMIDAS
  // ══════════════════════════════════════════════════════════════
  poliacrilamidas: {
    id: "poliacrilamidas",
    categoryId: "tratamiento-aguas",
    pageTitle: "Poliacrilamidas para Deshidratación de Lodos y Floculación",
    metaTitle: "Poliacrilamidas en Polvo y Emulsión para PTAR en México",
    metaDescription:
      "Proveedor de poliacrilamidas (PAM) en México: polvo y emulsión para deshidratación de lodos en filtros prensa, centrífugas y bandas. Aniónicas, catiónicas y no-iónicas. Cotización 24 h.",
    hero: "Poliacrilamidas industriales",
    lead: "Las poliacrilamidas (PAM) son polímeros sintéticos de muy alto peso molecular (5-20 millones Da) — los floculantes más potentes del mercado. Industrias Trevigo es proveedor de poliacrilamida en polvo y emulsión (aniónica, catiónica y no-iónica) para deshidratación de lodos en filtros prensa, centrífugas decantadoras y bandas filtrantes — reduciendo humedad de 95-98% a 65-75% y el costo de disposición.",
    sections: [
      {
        heading: "¿Qué es la poliacrilamida (PAM) y para qué sirve?",
        paragraphs: [
          "Una PTAR industrial genera grandes volúmenes de lodo con 95-98% de agua. Disponer este lodo líquido es prohibitivamente caro (transporte de agua) y técnicamente complicado. La deshidratación reduce la humedad a 65-75%, generando un sólido manejable que se puede transportar y disponer fácilmente — reduciendo el volumen 5-10x.",
          "La poliacrilamida es el químico clave: forma puentes moleculares entre las partículas del lodo, permitiendo que el equipo mecánico (filtro prensa, centrífuga, banda filtrante) exprima eficientemente el agua libre y atrapada. Sin poliacrilamida, los equipos de deshidratación rinden 30-50% menos y el lodo final queda con humedad excesiva.",
        ],
      },
      {
        heading: "Tipos de poliacrilamidas según forma física",
        paragraphs: [
          "Las poliacrilamidas industriales se comercializan en tres formas físicas, cada una con su mejor caso de uso:",
        ],
        list: [
          "Poliacrilamida en polvo (PAM granular): la forma más concentrada (90%+ activo). Requiere unidad de preparación con agua + maduración 30-60 min. Económica por kilo activo. Ideal para consumos altos (>50 kg/día)",
          "Poliacrilamida en emulsión (PAM emulsión): líquido viscoso al 30-50% activo. Activación rápida (5-10 min) con inversión de fase. Más caro por kilo activo pero menor inversión en equipo. Ideal para consumos medios (5-50 kg/día)",
          "Poliacrilamida líquida lista para usar: solución diluida al 0.1-0.5% activo. Más cara por kilo activo pero sin preparación. Ideal para plantas pequeñas o uso intermitente",
          "Por carga: aniónica (para lodos minerales), catiónica (para lodos orgánicos y biológicos — la más usada en deshidratación), no-iónica (casos específicos)",
        ],
      },
      {
        heading: "Equipos de deshidratación y selección de poliacrilamida",
        paragraphs: [
          "Cada equipo de deshidratación requiere poliacrilamida específica: (1) filtro prensa con placas y marcos — PAM catiónica de muy alto PM, dosis 3-8 kg/ton sólido seco, (2) centrífuga decantadora — PAM catiónica de alto PM, dosis 5-12 kg/ton, (3) banda filtrante — PAM catiónica de PM mediano-alto, dosis 4-10 kg/ton, (4) espesador por gravedad — PAM aniónica de alto PM, dosis 1-3 kg/ton.",
          "La selección de PAM por equipo es crítica: usar la incorrecta puede reducir el rendimiento del equipo 30-50% y disparar el consumo de químico. Hacemos pruebas en laboratorio con muestra del lodo del cliente para determinar el polímero óptimo, la dosis y la economía del proceso.",
        ],
      },
      {
        heading: "Preparación correcta: el paso que muchos hacen mal",
        paragraphs: [
          "La preparación correcta de poliacrilamida en polvo determina su eficiencia. Errores comunes: (1) dosificación demasiado rápida o sin mezclado adecuado — forma pelotas no disueltas, (2) agua de preparación con cloro residual >2 ppm — destruye el polímero, (3) tiempo de maduración insuficiente (<30 min para polvo, <10 min para emulsión), (4) almacenamiento de solución madura >24 hr (degradación), (5) bombeo con velocidades excesivas o válvulas que cizallan el polímero.",
          "La preparación correcta incluye: agua suave sin cloro, dosificación con eyector o spreader que humecte cada partícula antes de entrar al tanque, agitación lenta (no violenta — rompe el polímero), maduración 45-60 min, dilución final a la línea de aplicación con mezclador estático, y consumo de toda la solución madura en menos de 12 hr.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre poliacrilamida aniónica, catiónica y no-iónica?",
        a: "Aniónica: cadena polimérica con carga negativa. Usar para flocular sólidos minerales (lodos de galvanoplastia, minería). Catiónica: carga positiva. Usar para deshidratación de lodos biológicos y orgánicos (la más común en PTAR municipales e industriales). No-iónica: sin carga. Para casos específicos con condiciones extremas de pH o cuando los iónicos no funcionan. Selección incorrecta = 50% menos eficiencia.",
      },
      {
        q: "¿Cuánta poliacrilamida necesito para deshidratar mi lodo?",
        a: "Depende del tipo de lodo y equipo. Rangos típicos: lodos químicos primarios 2-5 kg PAM/ton sólido seco, lodos biológicos 5-12 kg/ton, lodos de papel 3-8 kg/ton. Para una PTAR típica industrial que genera 500-2,000 kg/día de lodo seco, el consumo es 3-25 kg/día de PAM. Determinamos consumo exacto con prueba de laboratorio sobre muestra del lodo del cliente.",
      },
      {
        q: "¿Cuánto dura la solución de poliacrilamida una vez preparada?",
        a: "Máximo 12-24 hr en almacenamiento estático. Después de ese tiempo la viscosidad y la eficiencia caen significativamente. Por eso es importante dimensionar el tanque de maduración correctamente para preparar sólo lo que se consume en menos de 12 hr. Para consumos pequeños recomendamos PAM emulsión que prepara más rápido y se conserva mejor.",
      },
      {
        q: "¿La poliacrilamida es tóxica? ¿Hay riesgo en el agua tratada?",
        a: "La poliacrilamida polímerica es prácticamente atóxica. El riesgo está en la acrilamida monomérica residual (carcinogénica), pero las poliacrilamidas industriales modernas tienen <0.05% de monómero residual — muy por debajo de límites toxicológicos. La dosis residual en agua tratada es <1 ppm, sin riesgo para descarga a cuerpos de agua o reúso industrial. Cumplen FDA 21 CFR 173.5 para contacto con alimentos.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "alimenticia", "papel-derivados", "textil", "minera"],
    relatedServices: ["pruebas-jarras", "optimizacion-procesos"],
    relatedGlossary: ["poliacrilamida", "floculante", "ptar"],
  },

  // ══════════════════════════════════════════════════════════════
  // AGENTES SECUESTRANTES
  // ══════════════════════════════════════════════════════════════
  "agentes-secuestrantes": {
    id: "agentes-secuestrantes",
    categoryId: "tratamiento-aguas",
    pageTitle: "Agentes Secuestrantes y Quelantes para Metales en Aguas",
    metaTitle: "Agentes Secuestrantes en México: EDTA, Quelantes, Fosfonatos",
    metaDescription:
      "Proveedor de agentes secuestrantes y quelantes en México: EDTA tetrasódico, fosfonatos (HEDP, ATMP), ácido cítrico y gluconato. Tratamiento de metales pesados e incrustaciones. Cotización 24 h.",
    hero: "Agentes secuestrantes",
    lead: "Los agentes secuestrantes y quelantes son moléculas químicas que capturan iones metálicos disueltos formando complejos solubles estables. Se usan tanto para tratar efluentes con metales pesados como para prevenir incrustaciones en sistemas de agua de proceso, torres de enfriamiento y calderas.",
    sections: [
      {
        heading: "¿Qué es un agente secuestrante (quelante) y para qué sirve?",
        paragraphs: [
          "Un agente secuestrante (también llamado quelante o complejante) es una molécula que tiene múltiples puntos de unión química con iones metálicos. Al disolverse en agua, captura iones de calcio, magnesio, hierro, cobre, manganeso y otros metales — formando complejos estables que ya no reaccionan con otros compuestos del agua.",
          "Las aplicaciones industriales son dos: (1) prevenir incrustaciones — los iones de Ca, Mg secuestrados no precipitan como carbonatos o sulfatos en tuberías y equipos, evitando obstrucciones y pérdida de transferencia de calor; (2) acondicionamiento de efluentes — los metales pesados secuestrados no precipitan ni interfieren con procesos posteriores, facilitando su separación selectiva.",
        ],
      },
      {
        heading: "Tipos de agentes secuestrantes industriales",
        paragraphs: [
          "Los secuestrantes se clasifican según su química y selectividad:",
        ],
        list: [
          "EDTA tetrasódico (ácido etilendiaminotetraacético): el quelante más universal. Captura prácticamente todos los metales divalentes y trivalentes (Ca, Mg, Fe, Cu, Zn). Muy estable pero baja biodegradabilidad — uso restringido en algunas aplicaciones",
          "Ácido cítrico y gluconato de sodio: secuestrantes biodegradables, ideal para limpieza CIP en industria alimentaria y farmacéutica. Menor afinidad que EDTA pero suficiente para Ca, Mg, Fe",
          "Fosfonatos (HEDP, ATMP, DTPMP): específicos para inhibición de incrustaciones en torres de enfriamiento y calderas. Funcionan en concentraciones muy bajas (1-10 ppm)",
          "Poliacrilatos de bajo PM: dispersantes que mantienen partículas suspendidas. Se usan en combinación con fosfonatos en sistemas de enfriamiento",
          "NTA (nitrilotriacetato): alternativa al EDTA con mejor biodegradabilidad. Captura Ca, Mg, Fe eficientemente",
        ],
      },
      {
        heading: "Aplicaciones críticas: torres de enfriamiento y calderas",
        paragraphs: [
          "La aplicación más común de agentes secuestrantes es la prevención de incrustaciones en sistemas de agua industrial. Una torre de enfriamiento que opera con agua dura sin tratamiento puede acumular 1-3 mm de incrustación de carbonato de calcio por mes — reduciendo la eficiencia de transferencia de calor 20-40% y eventualmente bloqueando tubos del intercambiador.",
          "El programa típico de tratamiento incluye: (1) inhibidor de incrustación a base de fosfonatos (HEDP o ATMP) a 5-15 ppm, (2) dispersante poliacrilato a 5-10 ppm, (3) inhibidor de corrosión específico al sistema, (4) biocida oxidante y no-oxidante alternados, (5) ajuste continuo de purga para mantener ciclos de concentración controlados (típicamente 3-6 ciclos).",
        ],
      },
      {
        heading: "Tratamiento de efluentes con metales pesados",
        paragraphs: [
          "En efluentes industriales con metales pesados (galvanoplastia, automotriz, minería), el uso de secuestrantes es delicado: si se usan en exceso, mantienen los metales solubles e impiden su precipitación como hidróxidos en la PTAR. La estrategia correcta es: (1) reducir Cr⁶⁺ a Cr³⁺ con sulfito, (2) ajustar pH a 8.5-9.5 para precipitar metales como hidróxidos, (3) flocular y sedimentar.",
          "El secuestrante se usa cuando hay interferencia entre metales (por ejemplo, complejos cianurados de níquel o cobre que requieren oxidación previa con hipoclorito). En aplicaciones de limpieza CIP de tanques industriales, los secuestrantes son críticos para remover incrustaciones sin atacar el sustrato.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre quelante y secuestrante?",
        a: "Son términos prácticamente sinónimos. Técnicamente: 'quelante' enfatiza la formación de un anillo molecular con el metal (estructura tipo pinza), 'secuestrante' enfatiza que el metal queda 'secuestrado' fuera de reacciones. EDTA, NTA, ácido cítrico, gluconato son ejemplos de ambos. En la práctica industrial los términos se usan indistintamente.",
      },
      {
        q: "¿Cuánto fosfonato necesito para mi torre de enfriamiento?",
        a: "Depende de la dureza del agua de reposición y ciclos de concentración. Rango típico: 5-15 ppm de HEDP o ATMP, mantenidos por dosificación continua proporcional a la purga. Con agua de 200-300 ppm CaCO₃ y 4-5 ciclos, el consumo típico es 50-150 mL/m³ de agua de reposición. Hacemos análisis de agua y plan de dosificación personalizado.",
      },
      {
        q: "¿El EDTA es biodegradable? ¿Hay alternativas más ecológicas?",
        a: "EDTA tiene baja biodegradabilidad (<20% en 28 días según OECD 301B) y se acumula en el ambiente. Alternativas más ecológicas: GLDA (sal de glutamato de tetrasodio), MGDA (sal de metilglicinato de trisodio), citrato de sodio, gluconato de sodio. Todas biodegradables >80% en 28 días con eficiencia similar al EDTA en pH 8-11. Para industria alimentaria son obligatorias.",
      },
      {
        q: "¿Puedo usar secuestrante en lugar de ablandador de agua?",
        a: "Es una alternativa válida para sistemas pequeños o medios. El secuestrante (típicamente fosfonato + poliacrilato) mantiene Ca y Mg solubles previniendo precipitación, pero no remueve los iones. Funciona bien para torres de enfriamiento, calderas de media presión y sistemas cerrados. Para alta presión y procesos que requieren agua suave estricta (calderas alta presión >40 bar, cosmética, farmacéutica), un ablandador con resina + secuestrante de respaldo es lo recomendado.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "alimenticia", "farmaceutica", "papel-derivados", "minera"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
    relatedGlossary: ["dureza-del-agua", "ptar"],
  },

  // ══════════════════════════════════════════════════════════════
  // INHIBIDORES DE OXÍGENO
  // ══════════════════════════════════════════════════════════════
  "inhibidores-oxigeno": {
    id: "inhibidores-oxigeno",
    categoryId: "tratamiento-aguas",
    pageTitle: "Inhibidores de Oxígeno para Calderas y Sistemas Cerrados",
    metaTitle: "Inhibidores de Oxígeno para Calderas Industriales en México",
    metaDescription:
      "Proveedor de inhibidores de oxígeno para calderas industriales en México: sulfito catalizado, eritorbato de sodio y aminas. Prevención de corrosión por picadura en vapor. Cotización 24 h.",
    hero: "Inhibidores de oxígeno",
    lead: "El oxígeno disuelto en agua de calderas y sistemas cerrados causa corrosión por picadura (pitting) — el mecanismo de falla más común y peligroso en tubería y equipos de vapor. Los inhibidores de oxígeno eliminan químicamente el O₂ disuelto, extendiendo la vida útil del sistema hasta 5-10x.",
    sections: [
      {
        heading: "¿Qué es un inhibidor de oxígeno y por qué se usa en calderas?",
        paragraphs: [
          "El agua tomada del suministro municipal o pozos contiene 6-12 ppm de oxígeno disuelto. Cuando esa agua entra a una caldera, el O₂ reacciona con el hierro de la tubería formando óxido de hierro localizado (picaduras) — un mecanismo de corrosión muchas veces más rápido que la corrosión uniforme. Una picadura puede atravesar pared de tubo de 3 mm en cuestión de meses.",
          "Además, las picaduras son extremadamente difíciles de detectar antes de la falla — se ven como pequeños puntos negros en la superficie y no afectan visiblemente el espesor general. La falla típica es un boquete súbito con fuga de vapor a alta presión, que puede causar paro de planta, daño a personal y costos de reparación de cientos de miles de pesos.",
        ],
      },
      {
        heading: "Tipos de inhibidores de oxígeno",
        paragraphs: [
          "Los inhibidores de oxígeno (también llamados secuestradores u oxygen scavengers) reaccionan química y rápidamente con el O₂ disuelto, eliminándolo del agua. Los principales son:",
        ],
        list: [
          "Sulfito de sodio catalizado: el más usado en calderas de baja-media presión (<40 bar). Reacción rápida con O₂ (segundos) si está catalizado con cobalto. Económico. Aumenta sólidos disueltos en el agua",
          "Eritorbato de sodio (isoascorbato): no aumenta sólidos disueltos. Ideal para calderas de alta presión y vapor de calidad alimentaria. Más caro que sulfito",
          "Hidracina: el químico más efectivo pero cancerígeno — uso restringido en plantas modernas. Algunos OEMs lo siguen requiriendo en aplicaciones específicas",
          "Carbohidrazida: alternativa moderna a la hidracina. Sin riesgos toxicológicos. Para calderas de alta presión y procesos críticos",
          "DEHA (dietilhidroxilamina) y MEKO: aminas neutralizantes que actúan como secuestradores en sistemas cerrados",
        ],
      },
      {
        heading: "Cómo dosificar inhibidor de oxígeno correctamente",
        paragraphs: [
          "La dosificación correcta requiere conocer: (1) contenido de O₂ disuelto en el agua de alimentación después del desaireador térmico (típicamente 7-40 ppb residual), (2) flujo de agua de alimentación, (3) tipo de inhibidor seleccionado. La regla es dosis estequiométrica + exceso de seguridad (típicamente 1.5-3x la dosis teórica).",
          "Para sulfito catalizado: la dosis típica es 8 ppm Na₂SO₃ por cada ppm de O₂ residual, mantenido como exceso de 30-50 ppm de SO₃²⁻ libre en el agua de la caldera. Para eritorbato: 7-10 ppm por ppm de O₂. El residual se mide diariamente con kit colorimétrico. Bajo residual = riesgo de corrosión; alto residual = desperdicio de químico.",
        ],
      },
      {
        heading: "Sistema completo de tratamiento de agua de calderas",
        paragraphs: [
          "El tratamiento completo de agua para calderas no se limita al inhibidor de oxígeno. Incluye: (1) ablandamiento o desmineralización del agua de reposición (remover Ca, Mg, sólidos), (2) desaireación térmica para reducir O₂ a <40 ppb antes de químicos, (3) inhibidor de oxígeno para eliminar O₂ residual, (4) ajuste de pH con aminas neutralizantes (morfolina, ciclohexilamina) para proteger condensados, (5) dispersante para mantener limpia la superficie de calefacción.",
          "El programa correcto extiende la vida útil de la caldera 3-5x, reduce el consumo de combustible 5-15% (transferencia limpia), evita paros no programados y cumple con regulaciones de seguridad. Diseñamos programa completo según el tipo de caldera (pirotubular vs acuotubular), presión y uso del vapor.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto oxígeno residual es seguro en agua de caldera?",
        a: "Para calderas baja-media presión: <0.04 ppm (40 ppb) es el estándar industrial. Para calderas alta presión (>40 bar): <0.007 ppm (7 ppb). Por debajo de estos valores la corrosión por O₂ es despreciable. Por encima, la velocidad de picadura se duplica con cada incremento. El control se hace por medición diaria del residual de sulfito o eritorbato (no del O₂ directamente).",
      },
      {
        q: "¿Sulfito o eritorbato: cuál uso?",
        a: "Sulfito: para calderas baja-media presión, donde el aumento de sólidos disueltos no es problema (purga frecuente). Más económico. Eritorbato: para calderas alta presión donde los sólidos deben mantenerse bajos, para vapor en contacto con alimentos (sulfito no es food-grade), y para sistemas donde se quiere reducir purga y consumo de agua. Más caro pero versátil.",
      },
      {
        q: "¿Sigue siendo legal usar hidracina?",
        a: "Sí, pero con restricciones crecientes. La hidracina es carcinógeno categoría 1B y mutágeno bajo regulación REACH europea. En México sigue siendo legal pero requiere medidas estrictas de manejo (extracción local, EPP, capacitación). Los OEMs modernos especifican alternativas (carbohidrazida, DEHA). Para plantas nuevas o renovaciones, recomendamos migrar a alternativas sin hidracina.",
      },
      {
        q: "¿Mi caldera necesita inhibidor si tiene desaireador térmico?",
        a: "Sí. El desaireador térmico baja O₂ de 6-12 ppm a 7-40 ppb, pero ese residual sigue siendo suficiente para causar corrosión por picadura sostenida. El inhibidor químico es la 'última línea' que asegura O₂ efectivamente cero en el agua de caldera. Todos los manuales OEM recomiendan ambos: desaireador + inhibidor químico.",
      },
    ],
    relatedIndustries: ["alimenticia", "papel-derivados", "metalmecanica", "automotriz", "farmaceutica"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
    relatedGlossary: ["ptar", "ph"],
  },

  // ══════════════════════════════════════════════════════════════
  // MICROBICIDAS
  // ══════════════════════════════════════════════════════════════
  microbicidas: {
    id: "microbicidas",
    categoryId: "tratamiento-aguas",
    pageTitle: "Microbicidas Industriales para Aguas y Torres de Enfriamiento",
    metaTitle: "Microbicidas para Torres de Enfriamiento en México (Legionella)",
    metaDescription:
      "Proveedor de microbicidas industriales en México: oxidantes (cloro, bromo) y no-oxidantes (glutaraldehído, isotiazolinonas). Control de Legionella, biofouling y NOM-013-SSA1. Cotización 24 h.",
    hero: "Microbicidas industriales",
    lead: "Los microbicidas controlan bacterias, hongos, algas y biopelículas en sistemas de agua industrial — previniendo biofouling, contaminación microbiana y proliferación de Legionella. Su uso correcto es obligatorio en torres de enfriamiento bajo regulaciones de salud pública y crítico para el rendimiento operativo del sistema.",
    sections: [
      {
        heading: "¿Qué es un microbicida industrial y para qué sirve?",
        paragraphs: [
          "Cualquier sistema de agua industrial con temperatura templada (20-45°C) y materia orgánica disponible es un caldo de cultivo perfecto para bacterias, hongos y algas. En semanas se forma biopelícula (biofilm) — una matriz de microorganismos adherida a las superficies internas de tubería, intercambiadores y empaques de torre.",
          "El biofouling genera tres problemas serios: (1) pérdida de eficiencia de transferencia de calor (la biopelícula es aislante térmico), (2) corrosión bajo depósito (bacterias sulfato-reductoras), y (3) riesgo de salud pública por Legionella pneumophila en torres de enfriamiento. En México, la NOM-013-SSA1 obliga programas activos de control en torres con potencial de aerosolización.",
        ],
      },
      {
        heading: "Tipos de microbicidas: oxidantes vs no-oxidantes",
        paragraphs: [
          "Los microbicidas industriales se dividen en dos familias con químicas y aplicaciones distintas:",
        ],
        list: [
          "Oxidantes — actúan por destrucción química de membranas celulares. Inicio rápido pero residual corto. Cloro (hipoclorito), bromo (BCDMH), dióxido de cloro (ClO₂), ozono. Ideal para choques periódicos",
          "No-oxidantes — actúan por bloqueo metabólico específico. Inicio más lento pero residual largo. Glutaraldehído, isotiazolinonas (CMIT/MIT), DBNPA, bronopol. Ideal para mantenimiento entre choques oxidantes",
          "Estrategia óptima: alternancia oxidante + no-oxidante para evitar desarrollo de resistencia bacteriana. Choque oxidante 1-2 veces/semana, mantenimiento con no-oxidante en dosificación continua o intermitente",
        ],
      },
      {
        heading: "Control en torres de enfriamiento: NOM y mejores prácticas",
        paragraphs: [
          "Las torres de enfriamiento abiertas son el caso más crítico: generan aerosoles que pueden dispersar Legionella a distancia. La NOM-013-SSA1 y las normas ANSI/ASHRAE 188 exigen: (1) plan documentado de gestión del agua, (2) programa de tratamiento microbiano con monitoreo, (3) registros de dosificación y purga, (4) análisis microbiológicos periódicos (recuento de bacterias heterótrofas, Legionella).",
          "El programa estándar incluye: oxidante en dosificación continua manteniendo 0.5-1.0 ppm de cloro residual libre (o 0.2-0.4 ppm de bromo), choques no-oxidantes semanales con glutaraldehído o isotiazolinonas a 100-300 ppm, control de pH 7.5-8.5, monitoreo semanal de recuento microbiano (<10⁴ UFC/mL), y muestreo trimestral de Legionella en laboratorio certificado.",
        ],
      },
      {
        heading: "Aplicaciones más allá de torres de enfriamiento",
        paragraphs: [
          "Los microbicidas industriales también son críticos en: (1) sistemas cerrados de agua de proceso (control de bacterias sulfato-reductoras y corrosión microbiológica), (2) PTARs biológicas con problemas de bulking (control selectivo de filamentosas como Microthrix), (3) aceites de corte solubles (prevención de rancidity bacteriana), (4) papel y celulosa (control de slime en máquinas de papel), (5) procesos alimentarios (CIP y sanitización).",
          "Cada aplicación requiere selección específica: para aceites solubles usamos triazinas o isotiazolinonas que no atacan los emulsificantes, para sistemas cerrados glutaraldehído de larga residencia, para choques en torres bronopol o DBNPA de degradación rápida. Damos asesoría técnica por aplicación.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo hacer choque microbiano en mi torre de enfriamiento?",
        a: "Mínimo 1-2 veces por semana durante operación. Adicionalmente: choque intensivo (dosis 2-3x) después de mantenimiento o paros prolongados, cuando el recuento microbiano supere 10⁴ UFC/mL, o si se detecta biofilm visible. El programa exacto depende del tamaño del sistema, condiciones operativas y resultados de monitoreo. Diseñamos plan personalizado.",
      },
      {
        q: "¿El cloro es suficiente o necesito biocidas no-oxidantes adicionales?",
        a: "Para torres pequeñas con baja carga orgánica, cloro residual mantenido en 0.5-1.0 ppm puede ser suficiente. Para sistemas grandes o con biofouling histórico, la combinación de oxidante (residual continuo) + no-oxidante (choques periódicos) es muy superior: el oxidante mata bacterias planktónicas, el no-oxidante penetra biofilm y elimina las sésiles. Evita desarrollo de resistencia.",
      },
      {
        q: "¿Cómo controlo Legionella en mi torre de enfriamiento?",
        a: "Programa integral: (1) tratamiento microbiano continuo con cloro/bromo + choques no-oxidantes, (2) control de pH 7.5-8.5 y temperatura <50°C de retorno, (3) limpieza física trimestral de empaque y bandeja, (4) muestreo trimestral de Legionella en lab certificado (resultado debe ser <10 UFC/mL), (5) plan de gestión documentado conforme NOM-013-SSA1. Si detectas Legionella positivo, choque intensivo + investigación de causa raíz.",
      },
      {
        q: "¿Los microbicidas afectan el tratamiento biológico de mi PTAR?",
        a: "Sí, hay que tener cuidado. Si tu agua tratada con microbicidas se dirige a PTAR biológica (lodos activados), los biocidas pueden inhibir o matar las bacterias del proceso. La buena práctica es: (1) descargar el agua de purga de torres en horario alternado a la purga de biocida, (2) diluir suficientemente antes de entrar al biológico, (3) en casos críticos, usar biocidas de degradación rápida (DBNPA, peróxido de hidrógeno) que no afecten el biológico aguas abajo.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "alimenticia", "papel-derivados", "farmaceutica", "hospitales"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
    relatedGlossary: ["ptar", "lodos-activados"],
  },

  // ══════════════════════════════════════════════════════════════
  // LUBRICANTES ESPECIALIZADOS
  // ══════════════════════════════════════════════════════════════
  "lubricantes-especializados": {
    id: "lubricantes-especializados",
    categoryId: "lubricantes-aceites",
    pageTitle: "Lubricantes Especializados Industriales",
    metaTitle: "Lubricantes Especializados en México: Sintéticos PAO, PAG, H1 NSF",
    metaDescription:
      "Proveedor de lubricantes especializados en México: sintéticos PAO, PAG, ésteres, alimenticios H1 NSF y de alta temperatura. Para aplicaciones críticas en industria. Cotización 24 h.",
    hero: "Lubricantes especializados",
    lead: "Los lubricantes especializados son formulaciones técnicas para condiciones de operación extremas o requisitos normativos específicos donde los aceites convencionales fallan: alta temperatura, vacío industrial, contacto con alimentos, ambientes radiactivos, criogénicos o procesos con compatibilidad química estricta.",
    sections: [
      {
        heading: "¿Qué es un lubricante especializado y cuándo usarlo?",
        paragraphs: [
          "Los lubricantes convencionales (minerales y semi-sintéticos) cubren el 80% de aplicaciones industriales estándar. Pero hay 20% de casos donde sus límites se exceden: temperaturas sostenidas >150°C, contacto con químicos agresivos, requisitos de pureza alimentaria (H1 NSF), vacío profundo, ambientes muy fríos (-40°C), o aplicaciones con larga vida sin cambio.",
          "En estos casos un lubricante especializado puede ser la diferencia entre un equipo que opera confiablemente por años y uno que falla cada 6 meses. El sobrecosto del lubricante (3-10x más caro por litro) se recupera múltiples veces en: extensión de intervalos de cambio, reducción de paros no programados, menor desgaste de componentes y cumplimiento normativo.",
        ],
      },
      {
        heading: "Familias de lubricantes especializados",
        paragraphs: [
          "Las principales familias técnicas de lubricantes especializados son:",
        ],
        list: [
          "Polialfaolefinas (PAO): hidrocarburos sintéticos, excelente índice de viscosidad, rango operativo -40 a +180°C. Para engranajes industriales de alto desempeño y motores Diesel de alta exigencia",
          "Poliéteres de glicol (PAG): solubles en agua. Excelente para compresores de aire que manejan gases solubles. No compatibles con minerales (problema de migración)",
          "Ésteres sintéticos: alta estabilidad térmica >200°C. Para turbinas, compresores de proceso, aplicaciones aeronáuticas. Excelente biodegradabilidad",
          "Lubricantes alimenticios H1 NSF: cumplen FDA 21 CFR 178.3570 para contacto incidental con alimentos. Base mineral USP o sintético, aditivos restringidos",
          "Lubricantes para alta temperatura (PFPE, siliconas): hasta 250-300°C sustained. Para hornos, calderas, procesos de polímeros",
          "Aceites de transferencia térmica: para sistemas de calentamiento indirecto con aceite caliente",
        ],
      },
      {
        heading: "Cómo seleccionar un lubricante especializado",
        paragraphs: [
          "La selección no se hace por catálogo genérico — requiere análisis técnico de la aplicación. Las variables críticas son: (1) temperatura operativa máxima sostenida y momentánea, (2) cargas mecánicas y velocidades de rotación, (3) compatibilidad con elastómeros y sellos del equipo, (4) requisitos normativos (alimentario, biodegradable, no-tóxico), (5) compatibilidad química con fluidos de proceso, y (6) economía de ciclo de vida.",
          "Adicionalmente debe verificarse: especificación OEM del fabricante del equipo (la mayoría de OEMs especifican lubricantes aceptados por marca y modelo), compatibilidad con lubricante anterior si no se hace flush completo, y disponibilidad para reposición. Hacemos asesoría técnica con visita a planta y revisión de equipos críticos.",
        ],
      },
      {
        heading: "Análisis de aceite en uso: clave en lubricantes premium",
        paragraphs: [
          "Cuando se invierte en lubricantes especializados (típicamente 5-15x más caros que minerales), el análisis de aceite en uso es indispensable. Permite: (1) confirmar que el lubricante cumple su vida útil esperada (extender intervalos de cambio cuando es seguro), (2) detectar desgaste anormal del equipo antes de falla mayor, (3) identificar contaminación o degradación temprana del lubricante, y (4) optimizar el ciclo de mantenimiento basado en evidencia.",
          "Ofrecemos servicio de análisis con laboratorio externo certificado, con reporte completo cada 250-500 horas de operación: viscosidad real, índice de viscosidad, agua, partículas (ISO 4406), TBN/TAN para detectar oxidación, espectrometría de 18+ elementos para desgaste, FTIR para identificar contaminación. Servicio incluido sin costo para clientes activos con consumo regular.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Vale la pena pagar 5x más por un sintético vs un mineral?",
        a: "Depende de la aplicación. En equipos críticos (turbinas, compresores de proceso, reductores de gran tamaño), un sintético: (1) dura 3-5x más en servicio (ROI positivo), (2) reduce desgaste y extiende vida útil del equipo, (3) opera mejor en temperaturas extremas. Para equipos estándar de baja exigencia (motores eléctricos pequeños, ventiladores), el mineral sigue siendo más económico. Recomendamos sintético sólo donde el caso técnico lo justifica.",
      },
      {
        q: "¿Sus lubricantes alimenticios cumplen con FDA y FSMA?",
        a: "Sí. Manejamos lubricantes H1 NSF (registrados en NSF International) y H2 según corresponda. Los H1 cumplen FDA 21 CFR 178.3570 para contacto incidental con alimento y son obligatorios en cadena alimentaria, bebidas, lácteos, cárnicos, panificación. Entregamos certificado NSF con cada producto. Si tu planta es FSMA-compliant, podemos cotizar lubricantes con auditoría documentada de cadena de custodia.",
      },
      {
        q: "¿Puedo mezclar un sintético PAO con un aceite mineral?",
        a: "PAO es compatible con minerales pero no se recomienda mezcla porque diluye los beneficios del sintético. Si haces conversión: drenaje completo + flush + nuevo lubricante. PAG (poliglicol) NO es compatible con minerales ni con PAO — pueden formar gel y dañar el equipo. Para conversión a PAG el flush con solvente específico es obligatorio. Hacemos asesoría técnica para conversiones.",
      },
      {
        q: "¿Tienen lubricantes para aplicaciones con alta exigencia normativa (aeronáutica, médico)?",
        a: "Sí, cotizamos lubricantes con especificaciones MIL (militar), SAE/AMS (aeronáutica), USP (médico), FDA (alimento) bajo pedido. Estos productos tienen tiempos de entrega más largos (4-8 semanas) y requieren documentación específica (COA por lote, trazabilidad de materia prima, certificación NADCAP en algunos casos). Para proyectos de este tipo necesitamos especificación detallada del cliente.",
      },
    ],
    relatedIndustries: ["aeronautica", "alimenticia", "farmaceutica", "metalmecanica", "automotriz", "polimeros"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
    relatedGlossary: ["viscosidad", "iso-vg", "indice-de-viscosidad", "punto-de-inflamacion", "ep-extreme-pressure"],
  },

  // ══════════════════════════════════════════════════════════════
  // GRASAS LUBRICANTES
  // ══════════════════════════════════════════════════════════════
  "grasas-lubricantes": {
    id: "grasas-lubricantes",
    categoryId: "lubricantes-aceites",
    pageTitle: "Grasas Lubricantes Industriales",
    metaTitle: "Grasas Lubricantes Industriales en México: Litio, EP, NLGI 2",
    metaDescription:
      "Proveedor de grasas lubricantes industriales en México: litio multipropósito, EP para cargas extremas, poliurea de alta temperatura y alimenticias H1 NSF. NLGI 0-3. Cotización 24 h.",
    hero: "Grasas lubricantes",
    lead: "Las grasas lubricantes son lubricantes semi-sólidos compuestos por aceite base + espesante + aditivos. Se usan donde el aceite líquido no puede mantenerse (rodamientos sellados, chumaceras, juntas universales) o donde se requiere sellado contra contaminantes. Una grasa correctamente seleccionada extiende la vida útil de los rodamientos 3-5x.",
    sections: [
      {
        heading: "¿Qué es una grasa lubricante y cuándo usarla vs aceite?",
        paragraphs: [
          "Las grasas tienen ventajas operativas específicas frente a los aceites líquidos: (1) permanecen en su lugar sin requerir tanque de circulación, (2) sellan contra entrada de agua, polvo y contaminantes, (3) protegen anticorrosivamente durante paros, (4) no requieren sistemas complejos de lubricación, y (5) tienen intervalos de re-engrase largos (semanas o meses).",
          "Las desventajas son: menor disipación de calor (las grasas no circulan), dificultad para purgar contaminación, y vida útil más corta en aplicaciones de alta velocidad o alta temperatura. La regla práctica: usar grasa cuando el aceite no es práctico (rodamientos sellados, geometrías expuestas, juntas) y usar aceite para alta velocidad, alta temperatura sostenida o sistemas con filtración.",
        ],
      },
      {
        heading: "Tipos de grasas según espesante",
        paragraphs: [
          "El espesante determina las características operativas de la grasa. Los principales son:",
        ],
        list: [
          "Grasas de litio (Li-12-OH): multipropósito estándar industrial. Rango -20 a +130°C. La grasa más usada en mundo industrial general por costo-beneficio",
          "Grasas de complejo de litio: versión mejorada con mayor temperatura (hasta 160°C) y mejor estabilidad mecánica. Para aplicaciones más exigentes",
          "Grasas de poliurea: para muy alta temperatura (hasta 200-260°C) y motores eléctricos sellados de larga vida. Excelente estabilidad química",
          "Grasas de complejo de aluminio: alimenticias H1 NSF y aplicaciones con agua",
          "Grasas de bentonita (arcilla): para muy alta temperatura (>200°C) y hornos. No se derriten",
          "Grasas de calcio: económicas, resistentes al agua. Limitadas en temperatura (<70°C)",
          "Grasas EP (Extreme Pressure): con aditivos sulfurosos o fosforosos para cargas mecánicas pesadas en engranajes y rodamientos cargados",
        ],
      },
      {
        heading: "Consistencia NLGI: cómo elegir la dureza correcta",
        paragraphs: [
          "La consistencia de la grasa se mide en grados NLGI (National Lubricating Grease Institute) del 000 (semi-líquida) al 6 (jabón sólido). La consistencia correcta depende de la aplicación: (1) NLGI 000-0 para sistemas centralizados de lubricación automática y temperaturas frías, (2) NLGI 1 para chumaceras de baja velocidad, (3) NLGI 2 la más común — multipropósito industrial, rodamientos estándar, (4) NLGI 3 para rodamientos verticales y temperaturas altas.",
          "Para 90% de aplicaciones industriales, NLGI 2 es la opción correcta. Si tu grasa se 'escurre' del rodamiento elige NLGI 3. Si tu sistema de lubricación automática se atasca, baja a NLGI 1 o 0. Para temperaturas extremas (calientes o frías), consulta tabla NLGI específica del fabricante.",
        ],
      },
      {
        heading: "Intervalos de re-engrase y método correcto",
        paragraphs: [
          "El intervalo de re-engrase depende de: tipo de rodamiento, velocidad de rotación, temperatura, tipo de grasa y exposición a contaminantes. Como guía: rodamientos sellados con grasa premium pueden durar 5-10 años sin re-engrase. Rodamientos abiertos en ambiente sucio requieren re-engrase cada 2-4 semanas. La mayoría de aplicaciones industriales caen en intervalos de 1-6 meses.",
          "Errores comunes en el re-engrase: (1) sobre-engrase — exceso de grasa causa sobrecalentamiento, ruptura del sello y fuga, (2) sub-engrase — falla por desgaste prematuro, (3) mezcla incompatible — agregar grasa distinta sin purgar la anterior puede causar separación de aceite, endurecimiento o licuefacción, (4) re-engrase con grasa contaminada — siempre limpia el grasero antes de aplicar. Damos capacitación a personal de mantenimiento sin costo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo mezclar grasas de distinto espesante?",
        a: "No es recomendable. La mezcla de grasas con espesantes diferentes (ejemplo: litio + poliurea, o litio + calcio) puede causar: separación de aceite, endurecimiento o licuefacción de la grasa, pérdida de propiedades anticorrosivas. Para cambio de tipo de grasa: purga completa del rodamiento o lubricador, limpieza con solvente compatible, y re-engrase con la nueva grasa. La incompatibilidad es la causa principal de fallas tempranas en re-engrase.",
      },
      {
        q: "¿Cuánta grasa debo aplicar en un rodamiento?",
        a: "Regla práctica: llenar el rodamiento al 30-50% del espacio libre interno. Más grasa causa sobrecalentamiento por batido interno y fuga por sellos. Para cantidad exacta usa la fórmula: G (gramos) = 0.005 × D × B, donde D = diámetro exterior del rodamiento (mm) y B = ancho (mm). En rodamientos de alta velocidad (>5,000 rpm), reducir al 20-30% para evitar sobrecalentamiento.",
      },
      {
        q: "¿Las grasas alimenticias H1 son lo mismo que las grasas regulares con etiqueta verde?",
        a: "No. Las grasas H1 NSF están registradas con NSF International, formuladas con base mineral USP o sintético, espesante específico (típicamente complejo de aluminio) y aditivos de la lista permitida FDA 21 CFR 178.3570. Cumplen estándares estrictos de pureza para contacto incidental con alimento. Una grasa 'color verde' sin certificación NSF NO es H1 — es marketing. Verifica número de registro NSF en el envase o catálogo NSF White Book.",
      },
      {
        q: "¿Cómo selecciono grasa EP vs estándar?",
        a: "Usar grasa EP cuando: (1) cargas mecánicas son altas (rodamientos pesados, engranajes abiertos, juntas universales), (2) hay impactos o vibraciones que rompen película hidrodinámica, (3) baja velocidad con alta carga (cuna de lubricación límite). NO usar EP en rodamientos de bronce o aleaciones amarillas — los aditivos azufrados atacan el cobre. Para rodamientos con jaula de latón, verificar compatibilidad EP específica.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "papel-derivados", "alimenticia", "minera", "agroindustria"],
    relatedServices: ["mantenimiento"],
    relatedGlossary: ["viscosidad", "nlgi", "ep-extreme-pressure"],
  },

  // ══════════════════════════════════════════════════════════════
  // LUBRICANTES FORMATO ESPECIAL
  // ══════════════════════════════════════════════════════════════
  "lubricantes-formato-especial": {
    id: "lubricantes-formato-especial",
    categoryId: "lubricantes-aceites",
    pageTitle: "Lubricantes en Aerosol, Spray y Formato Especial",
    metaTitle: "Lubricantes en Aerosol y Spray Industriales en México",
    metaDescription:
      "Proveedor de lubricantes en aerosol y spray industriales en México: penetrantes (alternativa WD-40), lubricantes de cadena, anti-óxidos, desmoldantes y secos (PTFE, MoS₂). Cotización 24 h.",
    hero: "Lubricantes en formato especial",
    lead: "Los lubricantes en aerosol, spray y formato especial son productos de mantenimiento industrial diseñados para aplicación rápida en zonas de difícil acceso, mantenimiento preventivo, desbloqueo de tornillería y aplicaciones donde no es práctico usar lubricantes líquidos o grasas tradicionales.",
    sections: [
      {
        heading: "¿Qué es un lubricante en aerosol y para qué sirve?",
        paragraphs: [
          "Los formatos en aerosol y spray tienen aplicaciones específicas donde los aceites o grasas tradicionales no son prácticos: (1) desbloqueo de tornillería oxidada y atascada, (2) lubricación rápida en mantenimiento de campo, (3) aplicación en zonas de difícil acceso (cadenas, engranajes expuestos, bisagras), (4) protección anticorrosiva temporal de superficies, (5) aplicaciones especializadas como cadenas de transportador, cintas adhesivas o procesos con desmoldado.",
          "Estos productos son herramientas de mantenimiento preventivo y correctivo en talleres industriales, plantas de producción, mantenimiento de flota vehicular y servicios técnicos en general. Una caja con la selección correcta de aerosoles cubre el 70% de necesidades de lubricación rápida en una planta industrial.",
        ],
      },
      {
        heading: "Tipos de lubricantes en formato especial",
        paragraphs: [
          "Las categorías más útiles para industria son:",
        ],
        list: [
          "Aceites penetrantes y desbloqueantes (alternativa industrial al WD-40): solvente + lubricante + anticorrosivo en aerosol. Para liberar tornillería oxidada y lubricación rápida en mantenimiento",
          "Lubricantes de cadena: aceites de alta adherencia con aditivos EP para cadenas industriales de transporte y motorreductores",
          "Lubricantes secos (PTFE, MoS₂, grafito): película seca que no atrae polvo. Para guías deslizantes, cerraduras, mecanismos en ambiente sucio",
          "Lubricantes para alta temperatura: spray con base sintética y solventes de evaporación rápida. Hasta 200-300°C",
          "Desmoldantes y antiadherentes (siliconas): para moldes de inyección, separación de hule y plásticos",
          "Anti-óxido y anticorrosivos en aerosol: capa protectora temporal para piezas en almacén o tránsito",
          "Limpiadores y desengrasantes en aerosol: para limpieza previa al lubricado o mantenimiento",
        ],
      },
      {
        heading: "Lubricantes de cadena: la aplicación más común en industria",
        paragraphs: [
          "Las cadenas industriales son uno de los componentes con mayor demanda de lubricación: motorreductores, transportadores aéreos, cadenas Roller estándar y de alta carga, sistemas de elevación. Una cadena bien lubricada dura 3-5x más que una mal lubricada y consume 5-15% menos energía.",
          "La selección del lubricante de cadena depende de: temperatura (estándar -10 a +100°C, alta temperatura hasta +250°C), velocidad y carga, ambiente (interior limpio vs intemperie vs alimentario H1), y frecuencia de aplicación. Los formatos típicos: spray para aplicación localizada (cadenas pequeñas/medianas), sistemas automáticos por gota o spray (cadenas industriales grandes), inmersión periódica para cadenas accesibles.",
        ],
      },
      {
        heading: "Buenas prácticas en aplicación de aerosoles y sprays",
        paragraphs: [
          "Los lubricantes en aerosol son productos potentes pero su mal uso desperdicia producto y puede causar problemas. Buenas prácticas: (1) limpiar la superficie antes de aplicar (un desengrasante en aerosol previo es ideal), (2) agitar el envase 30 segundos antes de usar, (3) aplicar capa fina y dejar tiempo de penetración (5-15 minutos para desbloqueantes), (4) evitar contacto con plásticos sensibles o pinturas frescas, (5) almacenar en lugar fresco lejos de fuentes de ignición.",
          "Para mantenimiento industrial bien organizado, recomendamos kit estándar de aerosoles con: 1 penetrante/desbloqueante, 1 lubricante general, 1 lubricante de cadena, 1 anticorrosivo, 1 desmoldante de silicona, 1 limpiador desengrasante. Este set cubre la mayoría de aplicaciones de campo en planta industrial.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tienen lubricantes en aerosol con certificación alimentaria H1?",
        a: "Sí, manejamos aerosoles H1 NSF para industria alimentaria, panificación, lácteos, cárnicos y bebidas. La línea H1 incluye: lubricante general en aerosol, penetrante H1, lubricante de cadena H1 y desengrasante H1. Todos registrados en NSF International. Son obligatorios en zonas de procesamiento de alimentos con potencial de contacto incidental.",
      },
      {
        q: "¿Qué aerosol es mejor para desbloquear tornillería muy oxidada?",
        a: "Los penetrantes con base solvente + aditivos EP son los más efectivos. Aplicar generosamente, dejar penetrar 15-30 minutos (no apurarte), aplicar más penetrante, golpear suavemente con martillo para inducir vibración, y aplicar torque controlado. Para tornillería extremadamente atascada (>5 años de oxidación), aplicación nocturna con re-aplicación a la mañana siguiente suele liberar lo que un solo intento no logra.",
      },
      {
        q: "¿Los lubricantes secos (PTFE, grafito) reemplazan al aceite?",
        a: "En aplicaciones específicas sí. Los lubricantes secos son ideales para: guías deslizantes en ambiente sucio (no atraen polvo), mecanismos en alta temperatura donde el aceite se vaporiza, aplicaciones en vacío, cerraduras y bisagras de uso intermitente. Para rodamientos rotativos a alta velocidad, juntas con cargas hidrodinámicas o equipos con cojinetes hidrodinámicos: NO reemplazan al aceite/grasa convencional.",
      },
      {
        q: "¿Cada cuánto debo re-aplicar lubricante de cadena?",
        a: "Depende del tipo de cadena, carga, velocidad y ambiente: cadenas de motorreductores en interior limpio: cada 200-500 horas. Cadenas de transportador aéreo: cada 100-300 horas. Cadenas en intemperie o ambiente sucio: cada 50-150 horas. Cadenas con sistema automático de lubricación: continuo a baja dosis. Una cadena con tensión correcta + lubricación adecuada dura 8,000-15,000 horas vs 2,000-3,000 horas mal mantenida.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "alimenticia", "papel-derivados", "agroindustria", "tratamiento-superficies-metalicas"],
    relatedServices: ["mantenimiento"],
    relatedGlossary: ["viscosidad", "ep-extreme-pressure"],
  },

  // ══════════════════════════════════════════════════════════════
  // ACEITES GENERALES (HIDRÁULICOS, ENGRANAJES, COMPRESORES)
  // ══════════════════════════════════════════════════════════════
  "aceites-generales": {
    id: "aceites-generales",
    categoryId: "lubricantes-aceites",
    pageTitle: "Aceites Industriales Generales: Hidráulicos, Engranajes, Compresores",
    metaTitle: "Aceite Hidráulico ISO VG 46, Engranajes y Compresores en México",
    metaDescription:
      "Proveedor de aceites industriales en México: hidráulicos ISO VG 32, 46, 68; aceites de engranajes ISO VG 220-460 y aceites de compresor (tornillo, pistón). Formulación técnica. Cotización 24 h.",
    hero: "Aceites industriales generales",
    lead: "Los aceites industriales generales son la columna vertebral del mantenimiento de planta: aceites hidráulicos para sistemas de presión, aceites de engranajes para reductores, aceites de compresor para aire comprimido y aceites de turbina para generación. Su selección correcta determina la confiabilidad y vida útil de toda la maquinaria industrial.",
    sections: [
      {
        heading: "¿Qué tipos de aceites industriales existen y cómo se clasifican?",
        paragraphs: [
          "Una planta industrial típica usa cuatro familias de aceites generales que cubren la mayoría de aplicaciones: hidráulicos, engranajes, compresores y aceites de circulación. Cada una tiene formulación específica con aditivos diferentes y no son intercambiables — usar el incorrecto puede causar falla del equipo.",
          "El mantenimiento correcto de aceites en planta requiere: (1) identificación clara por código de color o etiquetado, (2) almacenamiento separado y limpio, (3) procedimientos de cambio que eviten contaminación cruzada, (4) análisis periódico de aceite en uso para detectar problemas temprano, y (5) trazabilidad de cada cambio para responsabilidad técnica.",
        ],
      },
      {
        heading: "Aceites hidráulicos: ISO VG 32, 46, 68",
        paragraphs: [
          "Los aceites hidráulicos son los más consumidos en industria. Se especifican por su viscosidad ISO VG y deben cumplir requisitos específicos del fabricante del equipo. Los grados estándar son:",
        ],
        list: [
          "ISO VG 32: para sistemas de baja presión y temperatura. Maquinaria industrial estándar en clima templado. Bombas de paletas y engranajes",
          "ISO VG 46: el más universal. Maquinaria industrial moderna, prensas, inyectoras, sistemas servoválvulas. Clima templado-caliente",
          "ISO VG 68: para alta presión (>200 bar), alta temperatura ambiente, o servicio severo. Equipo móvil y maquinaria pesada",
          "Hidráulicos detergentes (HM o HLP-D): para sistemas con contaminación de agua o variaciones de temperatura. Mantienen agua dispersada hasta separación gravitacional",
          "Hidráulicos para baja temperatura (HV): índice de viscosidad mayor (IV >140) para arranques en frío",
          "Hidráulicos biodegradables (HE): para equipos en zonas ambientalmente sensibles (forestal, agrícola, marítimo)",
        ],
      },
      {
        heading: "Aceites de engranajes: ISO VG 100-680",
        paragraphs: [
          "Los aceites de engranajes industriales tienen viscosidades mucho más altas que los hidráulicos (ISO VG 100-680) y aditivos EP para soportar cargas mecánicas pesadas. Selección según aplicación:",
        ],
        list: [
          "ISO VG 100-150: engranajes ligeros, motorreductores pequeños, mecanismos de baja carga",
          "ISO VG 220: la viscosidad más común para reductores industriales estándar. Cargas medias, temperaturas normales",
          "ISO VG 320: reductores grandes, cargas pesadas, temperaturas más altas. Industria papelera, cementera, minería",
          "ISO VG 460-680: cargas extremas, engranajes de molinos, reductores principales en industria pesada",
          "Aceites de engranajes sintéticos PAO o PAG: para alta temperatura sostenida, vida útil extendida (3-5x más que mineral) y eficiencia energética mejorada",
        ],
      },
      {
        heading: "Aceites de compresor: rotativos vs reciprocantes",
        paragraphs: [
          "Los aceites de compresor son específicos para cada tipo de compresor — usar el incorrecto causa carbonización, fallas de válvulas y reducción drástica de vida útil. Los principales tipos son: (1) aceites para compresor de tornillo (lubricación + sellado interno) — la mayoría sintéticos PAO para vida extendida 4,000-8,000 horas, (2) aceites para compresor de pistón (alta temperatura en cilindro) — minerales R&O o sintéticos según severidad, (3) aceites para compresor centrífugo de aire — turbina o R&O de alta calidad.",
          "El consumo de aceite en compresores varía: tornillo 5-30 mL/m³ aire comprimido (aceite atrapado por separador), pistón 50-200 mL/m³ (consumo intrínseco por diseño). Los compresores de aire grado alimentario o farmacéutico requieren aceites H1 NSF específicos. Damos asesoría para selección por marca y modelo de compresor.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo selecciono la viscosidad ISO VG correcta para mi sistema hidráulico?",
        a: "Tres factores: (1) temperatura ambiente y operativa — climas más calientes requieren viscosidad mayor (VG 46-68), climas fríos VG 32, (2) presión del sistema — >200 bar requiere VG 68 para protección antidesgaste, (3) tipo de bomba — bombas de paletas estrictas en viscosidad, bombas de engranajes más tolerantes. Siempre verifica el manual OEM. Para 80% de aplicaciones industriales en clima de México, ISO VG 46 es la opción correcta.",
      },
      {
        q: "¿Cada cuánto debo cambiar el aceite hidráulico?",
        a: "Por calendario: 4,000-8,000 horas (1-2 años en operación continua). Por análisis: cambio cuando viscosidad cambia >10%, TAN aumenta >0.5 mg KOH/g, agua >0.1%, código ISO 4406 supera 22/20/17, o se detecta degradación oxidativa. La mejor práctica es por análisis — extiende intervalos en sistemas bien mantenidos y detecta problemas temprano en sistemas con desgaste.",
      },
      {
        q: "¿Puedo cambiar de aceite mineral a sintético en mi reductor existente?",
        a: "Sí, en la mayoría de casos. Pasos: (1) drenado completo en caliente (mejor viscosidad de salida), (2) inspección del estado interno y limpieza con flushing oil si es necesario, (3) verificar compatibilidad con sellos y empaques (algunos sintéticos atacan elastómeros viejos), (4) llenado con sintético y operación de prueba, (5) cambio de aceite a las 100-200 horas para purgar contaminación residual. Después del segundo cambio, intervalos extendidos.",
      },
      {
        q: "¿Qué pasa si uso aceite de engranajes en un sistema hidráulico (o viceversa)?",
        a: "Es un error común con consecuencias serias. Aceite de engranajes en sistema hidráulico: viscosidad demasiado alta causa cavitación de bomba, baja eficiencia y eventual falla. Aceite hidráulico en reductor: viscosidad demasiado baja causa desgaste prematuro de engranajes y rodamientos por película insuficiente, sin aditivos EP los engranajes se dañan. Si por error mezclaste, drena y purga completamente antes de continuar operación.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "papel-derivados", "alimenticia", "minera", "hule-caucho"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
    relatedGlossary: ["viscosidad", "iso-vg", "indice-de-viscosidad", "punto-de-inflamacion", "ep-extreme-pressure"],
  },

  // ══════════════════════════════════════════════════════════════
  // ADITIVOS PARA ACEITE DE MOTOR
  // ══════════════════════════════════════════════════════════════
  "aditivos-motor": {
    id: "aditivos-motor",
    categoryId: "aditivos-lubricantes",
    pageTitle: "Aditivos para Formular Aceite de Motor (Diesel, Gasolina, Gas)",
    metaTitle: "Aditivos para Formular Aceite de Motor en México",
    metaDescription:
      "Paquetes de aditivos para formular aceites de motor: Diesel (API CF-CG4, CI-4 Plus, CK-4 Plus, CJ-4), gasolina (SL, SM-SN) y gas. Cubeta y tambo de 208 L. Asesoría de formulación.",
    hero: "Aditivos para aceite de motor",
    lead: "Los paquetes de aditivos para aceite de motor son el corazón químico de cualquier lubricante automotriz. Determinan el nivel de servicio API que alcanza tu producto terminado, la protección del motor y la vida útil del aceite. Industrias Trevigo distribuye paquetes BTA para formular aceites de motor a Diesel (CF-CG4 hasta CK-4 Plus), gasolina (SL, SM-SN) y motores a gas, en cubeta y tambo de 208 L.",
    sections: [
      {
        heading: "¿Qué hace un paquete de aditivos para aceite de motor?",
        paragraphs: [
          "El aceite base — mineral o sintético — aporta la película lubricante, pero no protege el motor por sí solo. El paquete de aditivos es lo que convierte un aceite base en un lubricante de motor real: aporta la detergencia que mantiene limpias las superficies calientes, la dispersancia que suspende el hollín, la protección antidesgaste, la resistencia a la oxidación y la reserva alcalina (TBN) que neutraliza los ácidos de la combustión.",
          "En un aceite de motor, el paquete representa típicamente entre 10% y 18% de la formulación. El nivel de tratamiento y la química del paquete definen el nivel de servicio API que alcanza el producto: no es lo mismo un CF-CG4 básico que un CK-4 Plus de última generación para motores Diesel con postratamiento de gases.",
        ],
      },
      {
        heading: "Paquetes por tipo de motor y nivel de servicio",
        paragraphs: [
          "Nuestra línea BTA cubre los niveles de servicio más demandados en el mercado mexicano:",
        ],
        list: [
          "Diesel API CF-CG4 (BTA-2000): para motores Diesel de aspiración natural y turbo de generación anterior",
          "Diesel API CI-4 Plus (BTA-2000P): alto desempeño con control de hollín para motores con recirculación de gases (EGR)",
          "Diesel API CK-4 Plus (BTA-2000P-1): última generación, compatible con motores modernos y postratamiento (DPF/SCR)",
          "Diesel API CJ-4 (BTA-2095): para motores de servicio pesado con bajo contenido de cenizas sulfatadas",
          "Gasolina API SL / SM-SN (BTA-2010, BTA-2010-S, BTA-2091): protección contra depósitos y desgaste en motores de ciclo Otto",
          "Motores a gas (BTA-2105): formulado para las condiciones de combustión de GNC/GNV/GLP",
        ],
      },
      {
        heading: "Cómo elegir el paquete correcto",
        paragraphs: [
          "La selección parte del nivel de servicio API objetivo de tu producto terminado. Un blender que produce aceite para flotillas de camiones modernos necesita CK-4; uno que atiende maquinaria agrícola vieja puede formular con CF-CG4 a menor costo. El paquete correcto es el que alcanza la especificación objetivo con el menor tratamiento posible.",
          "Después del nivel API, considera el aceite base disponible (grupo I, II o III) y la viscosidad objetivo. Para multigrados (15W-40, 20W-50) se combina el paquete de desempeño con un mejorador de índice de viscosidad. Damos asesoría técnica de formulación para ayudarte a alcanzar la especificación con el mejor balance costo-desempeño.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre API CJ-4 y CK-4?",
        a: "CK-4 es la categoría más reciente (2016) y supera a CJ-4 en resistencia a la oxidación, estabilidad al corte y protección contra desgaste, manteniendo compatibilidad con sistemas de postratamiento (DPF/SCR). Un aceite CK-4 puede usarse donde se especifica CJ-4, pero no al revés en motores nuevos. Para formular aceite de servicio pesado moderno, CK-4 es el estándar actual.",
      },
      {
        q: "¿Cuánto paquete de aditivo lleva un aceite de motor?",
        a: "Depende del nivel de servicio: un aceite de motor a gasolina básico puede llevar 8-12% de tratamiento, mientras que un Diesel CK-4 de servicio pesado requiere 12-18%. La ficha técnica de cada paquete BTA indica el porcentaje exacto y la especificación alcanzable. Sub-dosificar para ahorrar costo compromete el nivel de servicio real del producto.",
      },
      {
        q: "¿Sus aditivos alcanzan especificación para motores a gas natural?",
        a: "Sí. El BTA-2105 está formulado específicamente para aceites de motor a gas (GNC/GNV/GLP), cuyas condiciones de combustión difieren de los motores a Diesel o gasolina (menos hollín, más nitración y necesidad de control de cenizas). Damos asesoría para ajustar la formulación a tu aplicación de gas específica.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "minera", "agroindustria"],
    relatedServices: ["ingenieria-asesoria", "mantenimiento"],
    relatedGlossary: ["viscosidad", "iso-vg", "sae", "indice-de-viscosidad"],
  },

  // ══════════════════════════════════════════════════════════════
  // ADITIVOS PARA TRANSMISIÓN Y FLUIDOS
  // ══════════════════════════════════════════════════════════════
  "aditivos-transmision-fluidos": {
    id: "aditivos-transmision-fluidos",
    categoryId: "aditivos-lubricantes",
    pageTitle: "Aditivos para Formular Fluidos de Transmisión e Hidráulicos",
    metaTitle: "Aditivos para Transmisión Automática, Tractor e Hidráulicos",
    metaDescription:
      "Paquetes de aditivos para formular fluidos de transmisión automática (ATF), tractor (UTTO/STOU), hidráulicos con y sin cenizas y TO-4/Allison C-4. Cubeta y tambo de 208 L.",
    hero: "Aditivos para transmisión y fluidos",
    lead: "Los fluidos de transmisión e hidráulicos requieren paquetes de aditivos con química de fricción precisa y protección antidesgaste específica. Industrias Trevigo distribuye paquetes BTA para formular fluidos de transmisión automática (ATF), fluidos universales de tractor (UTTO/STOU), hidráulicos con y sin cenizas, y aceites TO-4/Allison C-4.",
    sections: [
      {
        heading: "¿Por qué los fluidos de transmisión necesitan aditivos especiales?",
        paragraphs: [
          "A diferencia de un aceite de motor, un fluido de transmisión debe tener un coeficiente de fricción controlado con precisión: demasiada fricción y los embragues patinan; muy poca y no transmiten par. El paquete de aditivos de un ATF incluye modificadores de fricción específicos, además de protección antidesgaste para engranes y estabilidad térmica para soportar las temperaturas de la caja.",
          "Los fluidos hidráulicos, por su parte, priorizan la protección antidesgaste de bombas (de paletas, engranes o pistones), el control de espuma, la demulsibilidad (separación del agua) y la estabilidad ante oxidación. Cada aplicación — transmisión, tractor, hidráulico — tiene su química óptima.",
        ],
      },
      {
        heading: "Paquetes por tipo de fluido",
        paragraphs: [
          "Nuestra línea BTA para transmisión y fluidos cubre:",
        ],
        list: [
          "Transmisión automática / ATF (BTA-2001): modificación de fricción precisa, estabilidad térmica y protección de engranes",
          "Fluidos universales de tractor / UTTO-STOU (BTA-2002): compatibles con transmisión, hidráulico y frenos húmedos en un solo fluido",
          "Hidráulicos antidesgaste (BTA-2004): protección de bombas, antiespuma y demulsibilidad para sistemas estándar",
          "Hidráulicos sin cenizas / ashless (BTA-2005): para sistemas que requieren aditivos libres de zinc",
          "TO-4 / Allison C-4 (BTA-2035): fricción controlada para transmisiones y mandos finales de maquinaria pesada",
        ],
      },
      {
        heading: "Cómo elegir el paquete correcto",
        paragraphs: [
          "La selección depende de la especificación objetivo del fluido: ¿es un ATF para transmisiones automáticas, un fluido universal de tractor, un hidráulico AW estándar o uno sin cenizas? Cada especificación (Dexron, Allison, JDM, etc.) define la química de fricción y el nivel de protección requerido.",
          "Considera también el sistema donde operará: los hidráulicos sin cenizas se usan donde el zinc del paquete AW convencional sería problemático (por ejemplo, sistemas con filtros finos o requisitos ambientales). Ofrecemos asesoría técnica de formulación para alcanzar la especificación OEM objetivo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué es un fluido universal de tractor (UTTO/STOU)?",
        a: "Un UTTO (Universal Tractor Transmission Oil) es un fluido que sirve simultáneamente para la transmisión, el sistema hidráulico y los frenos húmedos de un tractor. Un STOU (Super Tractor Oil Universal) va más allá e incluye también el motor. El paquete de aditivos debe balancear la modificación de fricción para frenos húmedos con protección de engranes e hidráulica — química compleja que un paquete dedicado resuelve.",
      },
      {
        q: "¿Cuándo debo usar un hidráulico sin cenizas (ashless)?",
        a: "Los hidráulicos sin cenizas se usan cuando el zinc del paquete antidesgaste convencional (ZDDP) causa problemas: sistemas con filtración muy fina que el zinc puede tapar, aplicaciones con requisitos ambientales estrictos, o sistemas con metales amarillos sensibles al zinc. Dan protección antidesgaste con química alternativa sin cenizas metálicas.",
      },
      {
        q: "¿El aditivo TO-4 sirve para cualquier transmisión de maquinaria pesada?",
        a: "TO-4 (Caterpillar) y Allison C-4 son especificaciones con requisitos de fricción específicos para transmisiones powershift, convertidores de par y mandos finales de maquinaria pesada. El BTA-2035 está formulado para esas especificaciones. Verifica siempre la especificación exacta que requiere el OEM del equipo, porque una fricción incorrecta afecta el desempeño de embragues y frenos.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "minera", "agroindustria"],
    relatedServices: ["ingenieria-asesoria", "mantenimiento"],
    relatedGlossary: ["viscosidad", "iso-vg", "indice-de-viscosidad", "ep-extreme-pressure"],
  },

  // ══════════════════════════════════════════════════════════════
  // ADITIVOS PARA ACEITES INDUSTRIALES
  // ══════════════════════════════════════════════════════════════
  "aditivos-industriales": {
    id: "aditivos-industriales",
    categoryId: "aditivos-lubricantes",
    pageTitle: "Aditivos para Formular Aceites Industriales (Engranes, Corte, 2 Tiempos)",
    metaTitle: "Aditivos para Aceites de Engranes, Corte y Máquinas",
    metaDescription:
      "Paquetes de aditivos para formular aceites industriales: engranes EP, aceites de corte no manchantes, 2 tiempos y máquinas-herramienta. Cubeta y tambo de 208 L en México.",
    hero: "Aditivos para aceites industriales",
    lead: "Los aceites industriales — engranes, corte, 2 tiempos, máquinas-herramienta — requieren paquetes de aditivos con desempeño de extrema presión (EP) y química específica por aplicación. Industrias Trevigo distribuye paquetes BTA para formular estos aceites, en cubeta y tambo de 208 L, con asesoría técnica de formulación.",
    sections: [
      {
        heading: "Aditivos EP: la base de los aceites industriales",
        paragraphs: [
          "La mayoría de los aceites industriales operan bajo cargas de contacto altas: los dientes de un engrane, el filo de una herramienta de corte, el punto de contacto de una máquina-herramienta. Ahí la película hidrodinámica normal no basta — se necesitan aditivos de extrema presión (EP) que reaccionan químicamente con la superficie metálica bajo carga, formando una capa protectora que evita el micro-soldado y el desgaste.",
          "Los aditivos EP (típicamente compuestos de azufre-fósforo) son el componente distintivo de estos paquetes. Su balance debe ajustarse a la aplicación: demasiado agresivos atacan metales amarillos; insuficientes no protegen bajo carga. Cada aplicación industrial tiene su química EP óptima.",
        ],
      },
      {
        heading: "Paquetes por aplicación industrial",
        paragraphs: [
          "Nuestra línea BTA para aceites industriales incluye:",
        ],
        list: [
          "Aceites de engranes EP (BTA-2008): para reductores industriales y automotrices con cargas de contacto altas",
          "Aceites de corte no manchantes (BTA-2006, BTA-2006SA): lubricación EP para maquinado sin manchar metales no ferrosos",
          "Aceites de 2 tiempos (BTA-2007): lubricación con baja formación de humo y depósitos para motores de mezcla",
          "Máquinas-herramienta (BTA-2014): para guías, husillos y sistemas combinados de lubricación",
        ],
      },
      {
        heading: "Cómo elegir el paquete correcto",
        paragraphs: [
          "La selección depende del tipo de aceite y de la severidad de la aplicación. Para aceites de engranes, el nivel EP (medido por ejemplo con la prueba Timken o FZG) define la capacidad de carga. Para aceites de corte, la clave es el balance entre lubricación EP y que no manche los metales no ferrosos de la pieza maquinada.",
          "Considera también la compatibilidad con los metales del sistema: los aditivos EP azufrados pueden atacar cobre y latón, por lo que en aplicaciones con metales amarillos se usan químicas EP menos corrosivas. Damos asesoría de formulación para equilibrar desempeño y compatibilidad.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué significa que un aceite de corte sea 'no manchante'?",
        a: "Significa que su química EP no reacciona con los metales no ferrosos (cobre, latón, aluminio) de la pieza maquinada dejando manchas o coloración. Los aditivos EP azufrados activos pueden manchar estos metales; un aceite de corte no manchante usa azufre inactivo o química alternativa que da lubricación EP sin atacar el sustrato. Es crítico al maquinar piezas de latón, bronce o aluminio.",
      },
      {
        q: "¿Puedo usar un aditivo de engranes para máquinas-herramienta?",
        a: "No es óptimo. Aunque ambos requieren desempeño EP, los aceites de máquinas-herramienta (guías, husillos) necesitan además propiedades antdeslizamiento (stick-slip) y compatibilidad con el refrigerante de corte, mientras que los de engranes priorizan capacidad de carga pura. Usar el paquete correcto por aplicación asegura el desempeño y evita problemas como el stick-slip en guías.",
      },
      {
        q: "¿Los aditivos EP dañan los engranes de bronce?",
        a: "Los aditivos EP azufre-fósforo activos pueden corroer bronce y metales amarillos, especialmente a alta temperatura. Para reductores con engranes de bronce (por ejemplo, sinfín-corona) se usan aceites con aditivos EP suaves o compuestos (con grasa animal) menos agresivos. Verifica siempre la compatibilidad del paquete con los metales del reductor.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "minera", "papel-derivados"],
    relatedServices: ["ingenieria-asesoria", "mantenimiento"],
    relatedGlossary: ["ep-extreme-pressure", "viscosidad", "iso-vg", "indice-de-viscosidad"],
  },

  // ══════════════════════════════════════════════════════════════
  // ADITIVOS PARA GRASAS
  // ══════════════════════════════════════════════════════════════
  "aditivos-grasas": {
    id: "aditivos-grasas",
    categoryId: "aditivos-lubricantes",
    pageTitle: "Aditivos EP para Formular Grasas Lubricantes",
    metaTitle: "Aditivo EP para Grasas Lubricantes Industriales",
    metaDescription:
      "Aditivo de extrema presión (EP) para formular grasas lubricantes industriales. Mejora la capacidad de carga y protección antidesgaste bajo cargas altas. Cubeta y tambo de 208 L.",
    hero: "Aditivos para grasas",
    lead: "Las grasas lubricantes que operan bajo cargas altas o impactos requieren aditivos de extrema presión (EP) que mejoran su capacidad de carga y protección antidesgaste. Industrias Trevigo distribuye aditivo EP (BTA-2017) para formular grasas industriales, compatible con distintos espesantes y aceites base, en cubeta y tambo de 208 L.",
    sections: [
      {
        heading: "¿Por qué una grasa necesita aditivo EP?",
        paragraphs: [
          "Una grasa lubricante es aceite base retenido en un espesante (jabón de litio, calcio, poliurea, etc.). El espesante retiene el aceite en su lugar, pero la lubricación real la aporta el aceite base y los aditivos. Bajo cargas altas o impactos — rodamientos pesados, engranes abiertos, juntas universales — la película de aceite se rompe y se necesita un aditivo EP que forme una capa protectora química sobre el metal.",
          "El aditivo EP se incorpora durante la fabricación de la grasa, junto con el espesante y el aceite base. Su dosificación y compatibilidad con el sistema de espesante determinan el desempeño final de la grasa bajo carga (medido por ejemplo con la prueba de cuatro bolas o Timken).",
        ],
      },
      {
        heading: "Cómo se usa el aditivo EP en la formulación de grasas",
        paragraphs: [
          "El aditivo EP (BTA-2017) se dosifica en la grasa durante su fabricación para elevar su capacidad de carga a niveles EP. Es compatible con los espesantes más comunes (litio, complejo de litio, calcio), pero siempre debe validarse la compatibilidad con el sistema específico y verificar que no afecte la estabilidad mecánica ni el punto de goteo de la grasa.",
          "La dosificación depende del nivel EP objetivo: grasas multipropósito estándar requieren menos aditivo que grasas para engranes abiertos o servicio de impacto. Damos asesoría técnica para integrar el aditivo EP en tu formulación de grasa manteniendo el balance con las demás propiedades.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿El aditivo EP es compatible con cualquier grasa?",
        a: "Es compatible con la mayoría de espesantes comunes (litio, complejo de litio, calcio), pero siempre debe validarse: algunos aditivos EP pueden afectar la estabilidad mecánica, el punto de goteo o la compatibilidad con ciertos espesantes especiales. La práctica correcta es hacer pruebas de laboratorio antes de producir a escala. Damos asesoría para tu sistema de grasa específico.",
      },
      {
        q: "¿Qué prueba mide el desempeño EP de una grasa?",
        a: "Las más comunes son la prueba de cuatro bolas (ASTM D2596, mide la carga de soldadura) y la prueba Timken (ASTM D2509, mide la carga OK). Una grasa con buen aditivo EP muestra cargas de soldadura altas y protege bajo impacto. Estas pruebas validan que la dosificación de aditivo EP alcanzó el nivel de desempeño objetivo.",
      },
      {
        q: "¿En qué presentaciones venden el aditivo EP para grasas?",
        a: "Manejamos el aditivo EP (BTA-2017) en cubeta (19 L) para lotes pequeños y desarrollo de formulaciones, y tambo de 208 L para producción a escala. Incluye ficha técnica y hoja de seguridad (SDS), con asesoría técnica de formulación de grasas.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "minera", "agroindustria"],
    relatedServices: ["ingenieria-asesoria", "mantenimiento"],
    relatedGlossary: ["ep-extreme-pressure", "nlgi", "viscosidad"],
  },

  // ══════════════════════════════════════════════════════════════
  // MODIFICADORES Y MEJORADORES
  // ══════════════════════════════════════════════════════════════
  "aditivos-modificadores": {
    id: "aditivos-modificadores",
    categoryId: "aditivos-lubricantes",
    pageTitle: "Modificadores de Viscosidad y Aditivos Antifriccionantes",
    metaTitle: "Modificador de Índice de Viscosidad y Antifriccionante",
    metaDescription:
      "Mejorador de índice de viscosidad (VI) para formular lubricantes multigrado y aditivo antifriccionante para lubricantes de baja fricción. Cubeta y tambo de 208 L en México.",
    hero: "Modificadores y mejoradores",
    lead: "Los modificadores y mejoradores ajustan propiedades específicas del lubricante: el mejorador de índice de viscosidad (VI) hace posibles los aceites multigrado, y el aditivo antifriccionante reduce el coeficiente de fricción para mejorar la eficiencia energética. Industrias Trevigo distribuye ambos (BTA-2012 y BTA-2050) en cubeta y tambo de 208 L.",
    sections: [
      {
        heading: "Mejorador de índice de viscosidad (VI): la base del multigrado",
        paragraphs: [
          "El mejorador de índice de viscosidad es un polímero que hace posible un aceite multigrado como el 15W-40: en frío las moléculas están contraídas y el aceite fluye fácil (buen arranque), en caliente se expanden y compensan el adelgazamiento del aceite base (protección bajo carga térmica). Sin él, no existirían los lubricantes multigrado modernos.",
          "La consideración crítica al formular con VI es la estabilidad al corte: bajo el esfuerzo mecánico del motor o la bomba, las cadenas del polímero pueden romperse y el aceite 'pierde grado'. Elegir el polímero VI correcto y la dosificación adecuada asegura que el aceite mantenga su viscosidad durante toda su vida útil.",
        ],
      },
      {
        heading: "Aditivo antifriccionante: eficiencia energética",
        paragraphs: [
          "El aditivo antifriccionante (modificador de fricción) reduce el coeficiente de fricción del lubricante en el régimen de lubricación límite, donde las superficies casi se tocan. Esto se traduce en menor consumo de energía, menor generación de calor y, en motores, mejor economía de combustible.",
          "Es un componente clave en los aceites de motor modernos de baja viscosidad (0W-20, 5W-30) diseñados para eficiencia energética, y también en aplicaciones industriales donde reducir la fricción impacta directamente el consumo eléctrico. Su dosificación debe balancearse con el resto del paquete para no afectar la fricción en aplicaciones que la requieren (como frenos húmedos).",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué pasa si uso demasiado mejorador de índice de viscosidad?",
        a: "Sobredosificar encarece la formulación y aumenta el riesgo de pérdida de viscosidad por corte, porque hay más polímero que puede romperse bajo esfuerzo mecánico. También puede afectar la volatilidad y el desempeño a baja temperatura. La práctica correcta es usar la mínima cantidad que alcance la viscosidad objetivo, apoyándose en un aceite base de índice de viscosidad adecuado.",
      },
      {
        q: "¿El aditivo antifriccionante sirve para cualquier lubricante?",
        a: "No en todos. En aceites de motor y muchas aplicaciones industriales reduce fricción y mejora eficiencia, pero en fluidos que requieren fricción controlada — como los ATF con frenos húmedos o los fluidos de tractor — un antifriccionante mal aplicado haría patinar los embragues. Su uso debe ajustarse a la aplicación específica.",
      },
      {
        q: "¿Cómo sé cuánto modificador de viscosidad necesito?",
        a: "Depende del aceite base y del grado multigrado objetivo. Se dosifica para alcanzar exactamente la viscosidad objetivo a 100 °C, partiendo de un aceite base ligero. La cantidad se determina por formulación y prueba; damos asesoría técnica para calcular la dosificación correcta según tu aceite base y el rango de grados que quieras cubrir.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "minera", "agroindustria"],
    relatedServices: ["ingenieria-asesoria", "mantenimiento"],
    relatedGlossary: ["indice-de-viscosidad", "viscosidad", "iso-vg", "sae"],
  },
};

export function getSubcategoryContent(id: string): SubcategoryContent | undefined {
  return SUBCATEGORY_CONTENT[id];
}

export function getSubcategoryContentSlugs(): string[] {
  return Object.keys(SUBCATEGORY_CONTENT);
}
