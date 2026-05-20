// Glosario técnico industrial
// Cada entrada tiene URL propia /glosario/[slug] = SEO long-tail puro.
// Captura queries específicas tipo "qué es DBO en agua", "ISO VG 46", "Jar Test", etc.

export type GlossaryEntry = {
  slug: string;
  term: string;
  shortDef: string; // 1 sentence summary for cards/meta
  longDef: string[]; // paragraphs for the detail page
  category: "metales" | "aguas" | "lubricantes" | "general";
  relatedTerms?: string[]; // slugs of related entries
  relatedProductIds?: string[];
  relatedArticleSlugs?: string[];
  relatedServiceSlugs?: string[];
  /** Override del metaTitle para CTR-optimization. Si no se define,
   * el page.tsx genera "{term}: Definición Técnica" por defecto. */
  seoTitle?: string;
  /** Override del metaDescription para SERP attractive. Si no se define
   * usa shortDef. */
  seoDescription?: string;
};

export const GLOSSARY: GlossaryEntry[] = [
  // ─── TRATAMIENTO DE METALES ───
  {
    slug: "fosfatizado",
    term: "Fosfatizado",
    seoTitle: "Fosfatizado: qué es, proceso y aplicaciones industriales",
    seoDescription:
      "Fosfatizado: proceso químico que mejora la adhesión de pintura sobre acero. Tipos (zinc, hierro, manganeso), aplicaciones automotrices e industriales.",
    shortDef:
      "Proceso de conversión química que forma una capa de fosfato cristalino sobre acero para mejorar adherencia de pintura y resistencia a corrosión.",
    longDef: [
      "El fosfatizado, también llamado fosfatado, es un tratamiento químico de superficie que forma una capa de cristales de fosfato metálico (zinc, hierro o manganeso) sobre piezas de acero al carbón. La capa funciona como ancla para la adherencia de pinturas y como barrera anticorrosión temporal.",
      "Es paso obligado antes de pintura electrostática, e-coat y cualquier recubrimiento orgánico de alto desempeño. Sin fosfatizado, la pintura puede desprenderse en horas frente a humedad o niebla salina.",
      "Existen tres tipos principales: fosfato al hierro (capa amorfa, para piezas de baja exigencia), fosfato al zinc (capa cristalina, estándar automotriz) y fosfato tricatiónico zinc-níquel-manganeso (alta resistencia, sectores premium).",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "decapado", "tropicalizado", "ph"],
    relatedProductIds: ["fosfato-zinc-brillante", "fosfato-zinc-calcio-alta-resistencia", "limpiador-fosfato-fierro-multimetales"],
    relatedArticleSlugs: ["fosfatizado-zinc-pretratamiento-pintura"],
    relatedServiceSlugs: ["pintura-electrostatica"],
  },
  {
    slug: "pasivado",
    term: "Pasivado",
    shortDef:
      "Proceso químico que forma una capa pasiva delgada sobre el metal para protegerlo contra la corrosión.",
    longDef: [
      "El pasivado es el tratamiento químico mediante el cual se forma una capa pasiva (delgada, estable, adherente) sobre la superficie de un metal para protegerlo contra la corrosión. En acero inoxidable se usa para reactivar la capa de óxido de cromo natural y eliminar hierro libre. En acero al carbón es protección temporal entre etapas. En aluminio es preparación para anodizado o pintura.",
      "Para acero inoxidable, la norma estándar es ASTM A967, que define métodos con ácido nítrico al 20% o ácido cítrico al 4-10%. La validación se hace con prueba de inmersión en sulfato de cobre o con prueba de ferroxilo.",
      "En zinc galvanizado, el pasivado libre de cromo (basado en cromo trivalente o zirconio) ha reemplazado al cromato hexavalente clásico para cumplir con regulaciones RoHS y REACH.",
    ],
    category: "metales",
    relatedTerms: ["fosfatizado", "tropicalizado", "astm-a967", "cromo-hexavalente"],
    relatedProductIds: ["pasivador-aluminio-cromo", "desoxidante-acero-inoxidable", "inhibidor-oxidacion-temporal"],
    relatedServiceSlugs: ["pasivado", "tropicalizado"],
  },
  {
    slug: "decapado",
    term: "Decapado",
    seoTitle: "Decapado de metales: qué es, ácidos usados y proceso industrial",
    seoDescription:
      "Decapado industrial: proceso químico para remover óxidos y calamina con ácidos (clorhídrico, sulfúrico, fosfórico). Cuándo usarlo y qué ácido elegir.",
    shortDef:
      "Proceso químico que remueve óxidos, calamina y contaminantes superficiales de piezas metálicas con ácidos.",
    longDef: [
      "El decapado, conocido en inglés como pickling, es la remoción química de óxidos, calamina, escamas de laminación y contaminantes superficiales en piezas metálicas. Es paso obligado antes de fosfatizado, galvanizado, pintura o soldadura crítica.",
      "Para acero al carbón, los ácidos típicos son clorhídrico al 15-25% (rápido, agresivo, requiere extracción de vapores) y sulfúrico al 10-15% caliente (alta capacidad). Para acero inoxidable se usa una mezcla de ácido nítrico-fluorhídrico para remover hierro libre. Para aluminio se usa sosa cáustica seguida de desmutado nítrico.",
      "El monitoreo del baño es crítico: cuando el hierro disuelto supera 30-50 g/L, la velocidad de decapado cae al 20-30% del óptimo y conviene cambiar el baño.",
    ],
    category: "metales",
    relatedTerms: ["fosfatizado", "pasivado", "ph", "smut"],
    relatedProductIds: ["limpiador-acido-fosforico-hierro-acero", "limpiador-acido-desincrustante", "acido-clorhidrico"],
    relatedArticleSlugs: ["decapado-metales-industrial"],
    relatedServiceSlugs: ["decapado"],
  },
  {
    slug: "tropicalizado",
    term: "Tropicalizado",
    seoTitle: "Tropicalizado de metales: qué es, proceso y aplicaciones",
    seoDescription:
      "Tropicalizado: sistema multicapa de protección anticorrosión para acero y zinc en climas húmedos y zonas costeras. Proceso, pasos y normas industriales.",
    shortDef:
      "Sistema multicapa de protección anticorrosión para piezas metálicas en climas húmedos y zonas costeras.",
    longDef: [
      "El tropicalizado es un sistema multicapa de tratamientos químicos y de recubrimiento aplicados a piezas metálicas para incrementar su resistencia a la corrosión bajo condiciones de alta humedad, niebla salina y temperaturas variables. El nombre viene de protocolos militares de la Segunda Guerra Mundial para equipo destinado a climas tropicales.",
      "Un sistema completo incluye 5 etapas: limpieza alcalina, desoxidación, fosfatizado, sellado libre de cromo y aplicación de recubrimiento orgánico (e-coat o pintura). Bien ejecutado, multiplica por 4 a 10 las horas de niebla salina sin presencia de óxido rojo en pruebas ASTM B117.",
      "Es estándar en electrónica, electrodomésticos, gabinetes industriales, automotriz interior y componentes para zonas costeras o de exportación a regiones con humedad relativa superior al 70%.",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "fosfatizado", "niebla-salina", "cromo-hexavalente"],
    relatedProductIds: ["sellador-anticorrosion-libre-cromo", "fosfato-zinc-calcio-alta-resistencia"],
    relatedArticleSlugs: ["tropicalizado-acero-galvanizado-corrosion"],
    relatedServiceSlugs: ["tropicalizado"],
  },
  {
    slug: "niebla-salina",
    term: "Niebla Salina (ASTM B117)",
    shortDef:
      "Prueba estándar de resistencia a corrosión que expone piezas a una atmósfera de cloruro de sodio en cámara cerrada.",
    longDef: [
      "La prueba de niebla salina, formalmente ASTM B117, es el ensayo estándar internacional para evaluar la resistencia a corrosión de recubrimientos metálicos. Las piezas se exponen a una atmósfera saturada de solución de cloruro de sodio al 5% a 35°C en cámara cerrada, y se mide el tiempo hasta la aparición de óxido rojo.",
      "Las exigencias varían por sector: piezas automotrices interiores 240-500 horas, electrodomésticos exteriores 720-1000 horas, componentes marinos o de exportación 1500+ horas. Sectores aeronáutico y militar exigen 2000+ horas con sistemas multicapa.",
      "El test ha sido criticado por no replicar fielmente la corrosión real (carece de ciclos seco-húmedo), por lo que cada vez más se complementa con pruebas cíclicas como ASTM G85 o con cámaras CASS para piezas con recubrimientos decorativos.",
    ],
    category: "metales",
    relatedTerms: ["tropicalizado", "pasivado", "fosfatizado"],
    relatedServiceSlugs: ["pasivado", "tropicalizado"],
  },
  {
    slug: "cromo-hexavalente",
    term: "Cromo Hexavalente",
    shortDef:
      "Compuesto de cromo en estado de oxidación +6 usado históricamente en pasivados anticorrosión, ahora restringido por toxicidad.",
    longDef: [
      "El cromo hexavalente o Cr(VI) es un compuesto químico de cromo en estado de oxidación +6 utilizado históricamente como ingrediente principal en pasivados anticorrosión sobre zinc galvanizado, aluminio y otros metales. Su eficacia anticorrosión es excelente, pero es un cancerígeno demostrado y altamente tóxico para el ambiente acuático.",
      "Las regulaciones RoHS (Europa), REACH (Europa), ELV (Europa, automotriz) y los estándares de proveeduría de armadoras automotrices globales (GM, Ford, Stellantis, Toyota) prohíben su uso en piezas comerciales. México ha incorporado restricciones similares en NOM-002-STPS-2010 y NMX-AA-066-1985 para descargas industriales.",
      "Las alternativas modernas son cromo trivalente Cr(III) (similar a cromo hexavalente pero menos tóxico) y formulaciones libres de cromo a base de zirconio o titanio que igualan o superan el desempeño anticorrosión del cromato clásico.",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "tropicalizado", "rohs"],
    relatedProductIds: ["sellador-anticorrosion-libre-cromo", "pasivador-aluminio-cromo"],
  },
  {
    slug: "astm-a967",
    term: "ASTM A967",
    shortDef:
      "Norma estándar para pasivado de acero inoxidable usando ácido nítrico o ácido cítrico.",
    longDef: [
      "ASTM A967 es la norma internacional para tratamientos químicos de pasivado de acero inoxidable. Define cinco métodos (Nitric 1 a 5) según el grado del acero (304, 316, 17-4 PH, etc.) y especifica concentraciones, temperaturas y tiempos de inmersión.",
      "Los métodos más comunes son: Nitric 2 (ácido nítrico al 20-25% a temperatura ambiente, 30 minutos) para inoxidables 300 series; y los métodos Citric 1-5 que usan ácido cítrico al 4-10% como alternativa más segura y ambientalmente amigable al ácido nítrico.",
      "La validación del proceso se hace con prueba de inmersión en sulfato de cobre, prueba de ferroxilo, prueba de humedad alta o exposición a niebla salina. Industrias como aeronáutica, médica y alimenticia exigen certificación ASTM A967 con trazabilidad documental por lote.",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "acero-inoxidable", "smut"],
    relatedServiceSlugs: ["pasivado"],
  },
  {
    slug: "smut",
    term: "Smut",
    shortDef:
      "Capa oscura de partículas residuales (cobre, hierro, silicio) que se libera al decapar aluminio con sosa cáustica.",
    longDef: [
      "El smut es una capa negra o gris oscura compuesta principalmente por partículas de cobre, hierro y silicio que se forma sobre la superficie del aluminio durante el decapado alcalino con sosa cáustica. Estos elementos están presentes como impurezas en las aleaciones de aluminio y se concentran en la superficie cuando el aluminio se disuelve selectivamente.",
      "La presencia de smut afecta la calidad del anodizado, la pintura y los acabados decorativos. Por eso el decapado alcalino siempre se sigue de un paso de desmutado con ácido nítrico al 20-30% que disuelve los residuos metálicos.",
      "En aleaciones con alto contenido de silicio (series 4xxx y 5xxx), el smut es más persistente y puede requerir desmutado con mezclas nítrico-fluorhídricas o nítrico-sulfúricas. La validación visual es: superficie limpia, brillante y sin manchas oscuras.",
    ],
    category: "metales",
    relatedTerms: ["decapado", "pasivado", "anodizado"],
    relatedServiceSlugs: ["decapado", "pasivado"],
  },

  // ─── TRATAMIENTO DE AGUAS ───
  {
    slug: "dbo",
    term: "DBO (Demanda Bioquímica de Oxígeno)",
    shortDef:
      "Cantidad de oxígeno consumido por microorganismos para degradar materia orgánica en agua, indicador clave de contaminación.",
    longDef: [
      "La Demanda Bioquímica de Oxígeno (DBO o BOD por sus siglas en inglés) es la cantidad de oxígeno disuelto consumido por microorganismos aerobios al degradar la materia orgánica presente en una muestra de agua durante un período específico. La DBO5 (medida a 5 días, 20°C) es el parámetro estándar internacional.",
      "Es uno de los indicadores principales de contaminación orgánica en aguas residuales municipales e industriales. NOM-001-SEMARNAT-2021 establece límites de DBO5 según el cuerpo receptor: 30-150 mg/L para descargas a aguas nacionales, 75-220 mg/L para descargas al alcantarillado municipal según giro industrial.",
      "Plantas de tratamiento secundario (lodos activados, reactores aeróbicos, lagunas de oxidación) están diseñadas específicamente para reducir DBO. Una planta bien operada reduce DBO en 90-98% del valor de entrada.",
    ],
    category: "aguas",
    relatedTerms: ["dqo", "ptar", "nom-001", "lodos-activados"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["ingenieria-asesoria", "optimizacion-procesos"],
  },
  {
    slug: "dqo",
    term: "DQO (Demanda Química de Oxígeno)",
    seoTitle: "DQO (Demanda Química de Oxígeno): qué es y cómo se mide",
    seoDescription:
      "DQO: qué significa, cómo se mide, diferencia con DBO y por qué es clave para cumplir la NOM-001-SEMARNAT en tratamiento de aguas residuales industriales.",
    shortDef:
      "Cantidad de oxígeno equivalente requerido para oxidar químicamente toda la materia orgánica e inorgánica oxidable en agua.",
    longDef: [
      "La Demanda Química de Oxígeno (DQO o COD por sus siglas en inglés) mide la cantidad de oxígeno equivalente requerido para oxidar químicamente toda la materia oxidable presente en una muestra de agua, usando un agente oxidante fuerte (típicamente dicromato de potasio en medio ácido).",
      "A diferencia de la DBO, la DQO captura tanto materia orgánica biodegradable como no biodegradable, y materia inorgánica oxidable. Por eso el valor de DQO siempre es mayor o igual a la DBO. La relación DQO/DBO es indicador de biodegradabilidad: valores cercanos a 1 indican alta biodegradabilidad; valores altos (3-5+) indican presencia de materia recalcitrante difícil de tratar biológicamente.",
      "En aguas residuales industriales, la DQO es el parámetro más usado para diseño de planta y monitoreo continuo porque su análisis toma 2-4 horas (vs 5 días para DBO). NOM-001 y NOM-002 establecen límites específicos por giro industrial.",
    ],
    category: "aguas",
    relatedTerms: ["dbo", "ptar", "nom-001", "ph"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["ingenieria-asesoria"],
  },
  {
    slug: "ptar",
    term: "PTAR (Planta de Tratamiento de Aguas Residuales)",
    seoTitle: "PTAR: qué significa y cómo funciona una Planta de Tratamiento",
    seoDescription:
      "PTAR (Planta de Tratamiento de Aguas Residuales): qué es, etapas, equipos y normas que rigen su operación en México (NOM-001-SEMARNAT-2021).",
    shortDef:
      "Instalación industrial diseñada para tratar aguas residuales hasta cumplir parámetros de descarga normativos.",
    longDef: [
      "Una Planta de Tratamiento de Aguas Residuales (PTAR) es la instalación industrial donde se tratan las aguas residuales municipales o industriales hasta alcanzar parámetros de descarga que cumplan con la normativa ambiental aplicable.",
      "Una PTAR típica industrial tiene 4 etapas: pretratamiento (cribado, desarenado, trampa de grasas), tratamiento primario fisicoquímico (coagulación, floculación, sedimentación), tratamiento secundario biológico (lodos activados, reactores) y tratamiento terciario (filtración, desinfección, ósmosis inversa cuando aplica).",
      "El diseño depende del caudal, la composición del agua cruda y los parámetros exigidos por NOM-001-SEMARNAT-2021 (descarga a cuerpo receptor) o NOM-002-SEMARNAT-1996 (descarga al alcantarillado municipal). Plantas que generan más de 5 m³/día están obligadas a contar con sistema de tratamiento.",
    ],
    category: "aguas",
    relatedTerms: ["dbo", "dqo", "coagulante", "floculante", "nom-001", "lodos-activados"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["ingenieria-asesoria", "mantenimiento", "optimizacion-procesos"],
  },
  {
    slug: "coagulante",
    term: "Coagulante",
    shortDef:
      "Químico que neutraliza la carga eléctrica de partículas coloidales en agua para que puedan aglomerarse.",
    longDef: [
      "Un coagulante es una sal metálica o polímero catiónico que neutraliza la carga negativa de las partículas coloidales en suspensión en aguas residuales, permitiendo que se acerquen y formen aglomerados (flóculos) sedimentables. Es el primer químico dosificado en el tratamiento fisicoquímico de aguas residuales.",
      "Los coagulantes inorgánicos más usados son sulfato de aluminio (eficiente y económico, pH 6-7.5), cloruro férrico (mejor remoción de fósforo, pH 4-6) y policloruro de aluminio o PAC (alta carga, menos lodos generados, ideal para aguas con alta materia orgánica).",
      "Los coagulantes orgánicos catiónicos son polímeros líquidos basados en poliaminas o poliDADMAC. Se usan para sustituir o complementar coagulantes inorgánicos cuando se busca menor generación de lodos o cuando el agua tiene alta carga de materia orgánica.",
    ],
    category: "aguas",
    relatedTerms: ["floculante", "ptar", "jar-test", "ph"],
    relatedProductIds: ["coagulante-inorganico-clarificacion", "coagulante-organico-liquido", "coagulante-alta-carga-cationica"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["pruebas-jarras"],
  },
  {
    slug: "floculante",
    term: "Floculante",
    shortDef:
      "Polímero de alto peso molecular que une partículas coaguladas para formar flóculos densos sedimentables.",
    longDef: [
      "Un floculante es un polímero de alto peso molecular que se dosifica después del coagulante para tender un puente entre las partículas neutralizadas, formando flóculos grandes y densos que sedimentan rápido. La combinación coagulante + floculante es el corazón del tratamiento fisicoquímico.",
      "Los floculantes más usados son las poliacrilamidas, disponibles en tres cargas: aniónica (la más común para aguas con coagulante inorgánico ya dosificado), catiónica (para aguas con alta materia orgánica y deshidratación de lodos biológicos), y no iónica (para aguas con alta salinidad o pH extremo).",
      "La preparación correcta del floculante es crítica: solución madre al 0.1-0.5%, dispersión gradual, maduración mínima de 30 minutos sin agitación, dilución en línea al 0.05-0.1%. Una preparación incorrecta corta las cadenas del polímero y reduce eficacia hasta en un 50%.",
    ],
    category: "aguas",
    relatedTerms: ["coagulante", "poliacrilamida", "ptar", "jar-test"],
    relatedProductIds: ["floculante-anionico-alto-peso", "poliacrilamida-phpa"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["pruebas-jarras"],
  },
  {
    slug: "poliacrilamida",
    term: "Poliacrilamida",
    shortDef:
      "Polímero floculante de alto peso molecular usado en tratamiento de agua, deshidratación de lodos y recuperación enhanced de petróleo.",
    longDef: [
      "La poliacrilamida (PAM) es un polímero sintético de alto peso molecular formado por unidades de acrilamida. Tiene capacidad de floculación excepcional debido a sus largas cadenas que tienden puentes entre partículas. Se distribuye en presentaciones sólida (granular o microperla) y líquida emulsionada.",
      "Existen tres tipos según carga eléctrica: aniónica (hidrolizada parcialmente o PHPA), catiónica (con grupos amino) y no iónica. La selección depende del agua a tratar y del tipo de lodo a deshidratar.",
      "Aplicaciones principales: floculación en tratamiento de agua potable y residual, deshidratación de lodos de PTAR (mejora 200-300% el contenido de sólidos en torta de filtración), recuperación enhanced de petróleo (EOR) y agente de retención en industria papelera.",
    ],
    category: "aguas",
    relatedTerms: ["floculante", "coagulante", "ptar"],
    relatedProductIds: ["poliacrilamida-phpa", "floculante-anionico-alto-peso"],
    relatedServiceSlugs: ["pruebas-jarras"],
  },
  {
    slug: "jar-test",
    term: "Jar Test (Prueba de Jarras)",
    seoTitle: "Jar Test (Prueba de Jarras): qué es y cómo se realiza paso a paso",
    seoDescription:
      "Jar Test o Prueba de Jarras: ensayo de laboratorio para encontrar la dosis óptima de coagulante en una PTAR. Protocolo, interpretación y errores comunes.",
    shortDef:
      "Prueba de laboratorio para determinar la dosis óptima de coagulante y floculante en una muestra real de agua a tratar.",
    longDef: [
      "El Jar Test o prueba de jarras es la herramienta básica de laboratorio para determinar la dosis óptima de coagulante y floculante en una planta de tratamiento de agua. Reproduce a pequeña escala las condiciones de mezcla rápida, mezcla lenta y sedimentación que ocurren en la planta real.",
      "El protocolo estándar incluye: mezcla rápida 100-200 rpm por 1 minuto (para dispersar coagulante), mezcla lenta 30-50 rpm por 15-20 minutos (para formar flóculos) y sedimentación de 30 minutos. Se mide turbidez residual, color, pH y velocidad de sedimentación.",
      "Es la mejor práctica para optimizar dosificación. Un Jar Test mensual previene desperdicio mensual de químicos del orden del 20 al 40%. Cuando el agua cruda cambia mucho (industria con variabilidad de proceso, lluvia estacional) se recomienda Jar Test semanal.",
    ],
    category: "aguas",
    relatedTerms: ["coagulante", "floculante", "ptar"],
    relatedServiceSlugs: ["pruebas-jarras"],
  },
  {
    slug: "nom-001",
    term: "NOM-001-SEMARNAT-2021",
    shortDef:
      "Norma mexicana que establece límites máximos permisibles de contaminantes en descargas de aguas residuales a cuerpos receptores nacionales.",
    longDef: [
      "La NOM-001-SEMARNAT-2021 es la norma oficial mexicana que establece los límites máximos permisibles de contaminantes en las descargas de aguas residuales a cuerpos receptores propiedad de la Nación (ríos, lagos, embalses, costas, suelo). Es la principal regulación ambiental para industrias que descargan a aguas nacionales.",
      "Establece límites para parámetros como DBO5, DQO, sólidos suspendidos totales, grasas y aceites, fósforo total, nitrógeno total, metales pesados (Cd, Cr, Cu, Hg, Ni, Pb, Zn), microorganismos patógenos y sustancias tóxicas. Los límites varían según el tipo de cuerpo receptor.",
      "Aplica a industrias que descargan más de 5 m³/día. El incumplimiento puede resultar en multas, clausura temporal y, en casos graves, suspensión de operación. La autoridad responsable es CONAGUA y PROFEPA en aspectos sancionatorios.",
    ],
    category: "aguas",
    relatedTerms: ["nom-002", "ptar", "dbo", "dqo"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["ingenieria-asesoria"],
  },
  {
    slug: "nom-002",
    term: "NOM-002-SEMARNAT-1996",
    shortDef:
      "Norma mexicana que regula descargas de aguas residuales al alcantarillado municipal con límites por giro industrial.",
    longDef: [
      "La NOM-002-SEMARNAT-1996 establece los límites máximos permisibles de contaminantes en las descargas de aguas residuales a los sistemas de alcantarillado urbano o municipal. Es complementaria a NOM-001 y aplica cuando la descarga va al drenaje municipal en lugar de a cuerpo receptor.",
      "Los límites son menos estrictos que NOM-001 porque el agua será tratada por la PTAR municipal antes de llegar al cuerpo receptor. Aún así regula DBO5, DQO, SST, grasas y aceites, metales pesados, sustancias inhibidoras de procesos biológicos y cianuros.",
      "El cumplimiento de NOM-002 es vigilado por el operador municipal del sistema de alcantarillado (en CDMX por SACMEX, en Monterrey por SADM). Los límites se complementan con reglamentos municipales que pueden ser más estrictos.",
    ],
    category: "aguas",
    relatedTerms: ["nom-001", "ptar", "dbo", "dqo"],
    relatedArticleSlugs: ["tratamiento-aguas-residuales-industriales"],
    relatedServiceSlugs: ["ingenieria-asesoria"],
  },
  {
    slug: "ph",
    term: "pH",
    shortDef:
      "Medida de la acidez o alcalinidad de una solución acuosa en escala de 0 a 14, donde 7 es neutro.",
    longDef: [
      "El pH es la medida cuantitativa de la acidez o alcalinidad de una solución acuosa. Se define como el logaritmo negativo de la concentración de iones hidrógeno (H⁺): pH = -log[H⁺]. La escala va de 0 (muy ácido) a 14 (muy alcalino), siendo 7 el valor neutro.",
      "En procesos industriales el control de pH es crítico. Por ejemplo: baños de fosfatizado al zinc operan a pH 2.5-3.2; baños de pasivado de aluminio a pH 1.5-3.5; coagulación con sulfato de aluminio a pH 6.0-7.5; coagulación con cloruro férrico a pH 4.0-6.0. Una desviación de 0.5 unidades puede reducir eficacia del proceso al 50%.",
      "La medición se hace con potenciómetro (electrodo de vidrio) calibrado con buffers estándar de pH 4, 7 y 10. En plantas industriales se usa monitoreo continuo en línea con sondas conectadas al sistema de dosificación automática de ácido o base.",
    ],
    category: "general",
    relatedTerms: ["coagulante", "decapado", "fosfatizado"],
  },
  {
    slug: "lodos-activados",
    term: "Lodos Activados",
    shortDef:
      "Proceso biológico aeróbico de tratamiento de aguas residuales que usa biomasa en suspensión para degradar materia orgánica.",
    longDef: [
      "Los lodos activados son un proceso biológico aeróbico de tratamiento secundario de aguas residuales que usa una biomasa en suspensión (cultivo mixto de bacterias, protozoos y otros microorganismos) para degradar la materia orgánica disuelta. Es el método más usado mundialmente en plantas de tratamiento.",
      "El sistema típico incluye un tanque de aeración donde la biomasa se mezcla con el agua residual y consume materia orgánica usando oxígeno disuelto, seguido de un sedimentador secundario donde la biomasa se separa por gravedad. Una porción de los lodos se recircula al tanque de aeración para mantener concentración de microorganismos; el resto se purga como exceso.",
      "Las variantes incluyen: convencional, oxidación extendida (alto tiempo de retención, baja carga), reactor por lotes secuenciales o SBR, y biorreactor de membrana o MBR (combinación de lodos activados con ultrafiltración). Cada variante tiene ventajas según caudal, calidad de descarga requerida y restricciones de espacio.",
    ],
    category: "aguas",
    relatedTerms: ["dbo", "dqo", "ptar"],
    relatedServiceSlugs: ["ingenieria-asesoria", "optimizacion-procesos"],
  },

  // ─── TRATAMIENTO DE METALES (continuación) ───
  {
    slug: "despintado",
    term: "Despintado",
    shortDef:
      "Proceso de remoción química o mecánica de capas de pintura, recubrimientos o barnices sobre piezas metálicas para reprocesarlas o reacondicionarlas.",
    longDef: [
      "El despintado, también llamado stripping de pintura o remoción de recubrimientos, es el proceso industrial que elimina capas de pintura, primer, e-coat, polvo o barniz de piezas metálicas. Se aplica cuando una pieza está mal pintada (rechazo de calidad), cuando se requiere reproceso, cuando la pieza llega al final de su vida útil y quiere recuperarse el metal base, o cuando se renueva flota industrial.",
      "Existen tres métodos principales: despintado químico con solventes o soluciones alcalinas (eficaz en piezas complejas con geometría interior difícil), despintado por llama o pirolítico (horno a alta temperatura que carboniza la pintura, luego se lava), y despintado mecánico con granalla o abrasivos (para piezas grandes y robustas).",
      "El despintado químico alcalino es el más usado en industria metalmecánica. Baños de sosa cáustica al 5-15% a 60-80°C disuelven la mayoría de pinturas en base acuosa y polvo en 20-60 minutos. Para pinturas de alta resistencia (epóxico, poliuretano, e-coat catódico) se requieren formulaciones especializadas con aminas o solventes clorados.",
    ],
    category: "metales",
    relatedTerms: ["fosfatizado", "granallado", "decapado", "pasivado"],
    relatedServiceSlugs: ["decapado"],
  },
  {
    slug: "galvanizado",
    term: "Galvanizado",
    seoTitle: "Galvanizado: qué es, tipos (en caliente y electrolítico) y proceso",
    seoDescription:
      "Galvanizado: proceso para proteger acero contra corrosión mediante recubrimiento de zinc. Tipos, aplicaciones industriales, costos y diferencias.",
    shortDef:
      "Recubrimiento de zinc sobre acero para protegerlo contra corrosión, por inmersión en zinc fundido o por deposición electrolítica.",
    longDef: [
      "El galvanizado es el proceso de aplicar una capa de zinc sobre acero para protegerlo contra la corrosión. El zinc actúa como ánodo de sacrificio: se oxida antes que el acero base, protegiéndolo incluso cuando hay raspaduras o discontinuidades en el recubrimiento.",
      "Existen dos métodos principales: galvanizado por inmersión en caliente (GIC o hot-dip galvanizing), donde las piezas se sumergen en zinc fundido a 450°C formando una capa de 45-85 micras con aleación zinc-hierro en la interfaz; y galvanizado electrolítico (electrodeposición de zinc), donde el zinc se deposita en una celda electrolítica dando capas de 5-25 micras más uniformes y brillantes.",
      "Las piezas galvanizadas requieren pasivado posterior para sellar la capa de zinc y aumentar resistencia a corrosión. El pasivado puede ser cromato hexavalente (restringido por RoHS), cromo trivalente o formulaciones libres de cromo con zirconio. Una pieza galvanizada y bien pasivada alcanza 500-1000 horas de niebla salina en prueba ASTM B117.",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "cromo-hexavalente", "electrodeposicion", "niebla-salina", "tropicalizado"],
    relatedProductIds: ["sellador-anticorrosion-libre-cromo", "pasivador-aluminio-cromo"],
    relatedServiceSlugs: ["pasivado", "tropicalizado"],
  },
  {
    slug: "granallado",
    term: "Granallado",
    shortDef:
      "Proceso de limpieza y preparación de superficie por impacto de partículas abrasivas metálicas proyectadas a alta velocidad.",
    longDef: [
      "El granallado (shot blasting en inglés) es un proceso de preparación de superficie en el que se proyectan partículas metálicas (granalla de acero, granalla de acero inoxidable, granalla de cobre) a alta velocidad contra la pieza metálica. El impacto limpia óxido, calamina, recubrimientos anteriores y contaminantes, y crea un perfil de rugosidad controlado.",
      "El perfil de rugosidad es el factor clave: la norma ISO 8501 clasifica el grado de preparación de Sa 1 (limpieza ligera) a Sa 3 (metal al blanco puro). Para adherencia óptima de fosfatizado y pintura se busca Sa 2.5 con perfil de 25-75 micras. Un perfil muy liso no ancla; uno muy rugoso crea picos que punzan el recubrimiento.",
      "A diferencia del granallado, el arenado (sandblasting) usa arena de sílice que genera polvo de sílice cristalina, sustancia clasificada como carcinógena (Grupo 1 IARC). En México la NOM-010-STPS obliga a usar equipos con extracción. La industria automotriz y de electrodomésticos ha migrado casi completamente a granallado metálico que no genera polvo de sílice.",
    ],
    category: "metales",
    relatedTerms: ["fosfatizado", "decapado", "despintado"],
    relatedServiceSlugs: ["decapado"],
  },
  {
    slug: "electrodeposicion",
    term: "Electrodeposición (Zinc Electrolítico)",
    shortDef:
      "Proceso electroquímico que deposita una capa de zinc sobre acero usando corriente eléctrica en solución ácida o alcalina.",
    longDef: [
      "La electrodeposición de zinc, también llamada galvanizado electrolítico o zinc electrolítico, es el proceso en el que se deposita zinc sobre piezas de acero mediante corriente eléctrica en una celda electrolítica. La pieza actúa como cátodo, ánodos de zinc solubles se disuelven y el zinc migra y se deposita sobre la pieza.",
      "Los baños de electrodeposición de zinc pueden ser ácidos (cloruro de zinc o sulfato de zinc) o alcalinos (cianuro de zinc o zinc alcalino libre de cianuro). Los baños ácidos dan depósito más brillante y mayor eficiencia de corriente; los alcalinos dan mejor distribución sobre geometrías complejas.",
      "El zinc electrolítico da capas más delgadas (5-25 micras) y uniformes que el galvanizado por inmersión en caliente (45-85 micras), con mejor tolerancia dimensional. Es el proceso preferido para tornillería, clips, brackets y piezas de estampado automotriz donde las tolerancias son críticas. Requiere pasivado posterior para cumplir especificaciones de corrosión.",
    ],
    category: "metales",
    relatedTerms: ["galvanizado", "pasivado", "niebla-salina", "cromo-hexavalente"],
    relatedProductIds: ["sellador-anticorrosion-libre-cromo"],
    relatedServiceSlugs: ["pasivado"],
  },
  {
    slug: "fosfato-manganeso",
    term: "Fosfato de Manganeso",
    shortDef:
      "Recubrimiento de conversión de fosfato que reduce fricción y resistencia al desgaste en superficies de acero sometidas a alta carga.",
    longDef: [
      "El fosfato de manganeso es un tratamiento de conversión química que forma cristales de fosfato de manganeso sobre acero al carbón. A diferencia del fosfato de zinc (orientado a adherencia para pintura), el fosfato de manganeso se usa principalmente para reducir fricción y resistencia al desgaste en piezas que trabajan con contacto metal-metal.",
      "El proceso se realiza a 88-98°C en baños con ácido fosfórico y sales de manganeso, formando una capa de cristales porosos grises oscuros de 5-25 micras. Los poros de la capa retienen aceite lubricante, lo que es crítico durante el periodo de rodaje de piezas nuevas.",
      "Aplicaciones principales: engranajes de transmisión, árboles de leva, pistones y camisas de motor, tornillería de alta resistencia, herramientas de corte y piezas de armas de fuego. Es estándar en industria automotriz, aeronáutica y defensa. La norma de referencia es MIL-DTL-16232.",
    ],
    category: "metales",
    relatedTerms: ["fosfatizado", "pasivado", "decapado"],
    relatedProductIds: ["fosfato-zinc-calcio-alta-resistencia"],
    relatedServiceSlugs: ["pasivado"],
  },

  // ─── LUBRICANTES ───
  {
    slug: "iso-vg",
    term: "ISO VG (ISO Viscosity Grade)",
    shortDef:
      "Sistema internacional de clasificación de aceites industriales por viscosidad cinemática a 40°C.",
    longDef: [
      "ISO VG es el sistema de clasificación internacional ISO 3448 que organiza los aceites industriales por su viscosidad cinemática medida a 40°C. El número ISO VG indica el valor central del rango de viscosidad en cSt (centiStokes).",
      "Por ejemplo, ISO VG 32 indica viscosidad cinemática de 28.8 a 35.2 cSt a 40°C; ISO VG 46 indica 41.4 a 50.6 cSt; ISO VG 68 indica 61.2 a 74.8 cSt. Los grados estándar van de ISO VG 2 a ISO VG 1500.",
      "Aplicaciones típicas: ISO VG 22-32 en sistemas hidráulicos de baja presión; ISO VG 32-46 en sistemas hidráulicos industriales (el más común); ISO VG 46-68 en compresores; ISO VG 100-150 en cajas de engranes ligeras; ISO VG 220-460 en cajas de engranes pesadas; ISO VG 680-1500 en aplicaciones de baja velocidad y alta carga.",
    ],
    category: "lubricantes",
    relatedTerms: ["sae"],
    relatedProductIds: ["aceites-hidraulicos", "lubricante-compresores", "aceite-engranes"],
  },
  {
    slug: "sae",
    term: "SAE (Society of Automotive Engineers)",
    shortDef:
      "Sistema de clasificación de aceites para motor y transmisión automotriz por viscosidad a baja y alta temperatura.",
    longDef: [
      "SAE J300 es el estándar de clasificación de aceites de motor automotriz desarrollado por la Society of Automotive Engineers. A diferencia de ISO VG (que mide a 40°C), SAE clasifica aceites con dos números: el primero (con W) indica viscosidad a baja temperatura, el segundo a alta temperatura.",
      "Por ejemplo, SAE 5W-30 significa que el aceite tiene viscosidad de grado 5W a -30°C (arranque en frío) y de grado 30 a 100°C (operación normal). Los grados W van de 0W a 25W; los grados de operación de 8 a 60.",
      "SAE J306 es el estándar análogo para aceites de transmisión y diferencial automotriz, con grados típicos como SAE 75W-90, SAE 80W-90, SAE 85W-140. Para aceite hidráulico industrial se usa más ISO VG que SAE.",
    ],
    category: "lubricantes",
    relatedTerms: ["iso-vg"],
    relatedProductIds: ["aceites-motor"],
  },
  {
    slug: "nlgi",
    term: "NLGI (Clasificación de Grasas)",
    shortDef:
      "Sistema de clasificación de la consistencia de grasas lubricantes en escala de 000 (muy fluida) a 6 (muy dura).",
    longDef: [
      "NLGI son las siglas de National Lubricating Grease Institute. La clasificación NLGI establece 9 grados de consistencia para grasas lubricantes, del 000 (grasa semifluida) al 6 (grasa muy dura, casi sólida). El grado se determina midiendo la penetración de un cono estándar bajo condiciones de norma ASTM D217.",
      "Los grados más usados industrialmente son: NLGI 1 (grasas para rodamientos de alta velocidad y baja temperatura), NLGI 2 (el estándar universal para rodamientos industriales y automotrices, el más consumido), y NLGI 3 (para rodamientos verticales o bajo vibraciones fuertes). Grados 4-6 se usan en aplicaciones estáticas como sellos.",
      "La base del espesante define otras propiedades: litio es el más universal (resistente al agua y temperatura hasta 120°C), litio complejo (hasta 180°C), calcio sulfonato (excelente resistencia al agua y EP), polimolibdeno o molibdeno (alta carga y antidesgaste). El código completo de una grasa incluye grado NLGI, base y clasificación ISO o NLGI.",
    ],
    category: "lubricantes",
    relatedTerms: ["viscosidad", "iso-vg", "ep-extreme-pressure"],
  },
  {
    slug: "ep-extreme-pressure",
    term: "EP (Extreme Pressure)",
    shortDef:
      "Aditivos para lubricantes que forman una capa protectora sobre metales bajo condiciones de alta presión de contacto.",
    longDef: [
      "Los aditivos EP (Extreme Pressure, presión extrema) son compuestos químicos que se incorporan a aceites y grasas lubricantes para proteger las superficies metálicas cuando la película de aceite se rompe bajo condiciones de alta carga, baja velocidad o impacto. Reaccionan químicamente con el metal a altas temperaturas locales para formar una capa de sacrificio.",
      "Los aditivos EP más comunes son compuestos de azufre-fósforo (el estándar industrial), compuestos de cloro (en fluidos de corte), y organo-molibdeno (en lubricantes premium para motores de alto desempeño). La norma de prueba estándar es ASTM D2783 (prueba de 4 bolas de Timken) que mide la carga de soldadura antes de falla.",
      "Los aceites de engranes industriales ISO VG 220-460 casi siempre incluyen aditivos EP para proteger flancos de engranajes. También son estándar en fluidos de corte, aceites de taladrinas y lubricantes para compresores de tornillo. Se designan con las letras EP en el nombre del producto: Aceite EP 220, Grasa EP NLGI 2, etc.",
    ],
    category: "lubricantes",
    relatedTerms: ["iso-vg", "viscosidad", "nlgi"],
    relatedProductIds: ["aceite-engranes"],
  },
  {
    slug: "indice-de-viscosidad",
    term: "Índice de Viscosidad (IV)",
    shortDef:
      "Número que cuantifica qué tan estable es la viscosidad de un aceite ante cambios de temperatura.",
    longDef: [
      "El índice de viscosidad (IV o VI en inglés) es un número adimensional que describe cuánto cambia la viscosidad de un aceite cuando cambia la temperatura. Un IV alto indica que el aceite mantiene viscosidad más estable ante cambios de temperatura, lo cual es deseable para la mayoría de aplicaciones industriales.",
      "El IV se calcula con la norma ASTM D2270 comparando la viscosidad a 40°C y 100°C contra aceites de referencia. Un IV de 100 es el estándar para aceites minerales convencionales. Aceites minerales de alta refinación tienen IV de 95-110. Aceites sintéticos (polialquilenglicoles, ésteres sintéticos, polialfaolefinas) tienen IV de 130-180+.",
      "El IV es especialmente crítico en aceites multigrado de motor (SAE 5W-30, 10W-40) donde polímeros modificadores de viscosidad elevan el IV a 150-200. En aceites hidráulicos para sistemas expuestos a variaciones de temperatura el IV debe ser mayor a 95 para garantizar eficiencia tanto en arranque frío como en operación plena.",
    ],
    category: "lubricantes",
    relatedTerms: ["viscosidad", "iso-vg", "sae"],
    relatedProductIds: ["aceites-hidraulicos"],
  },
  {
    slug: "punto-de-inflamacion",
    term: "Punto de Inflamación",
    shortDef:
      "Temperatura mínima a la que un lubricante emite vapores en cantidad suficiente para encenderse con una fuente de ignición.",
    longDef: [
      "El punto de inflamación (flash point) es la temperatura mínima a la que un lubricante o fluido inflamable produce suficientes vapores para formar una mezcla inflamable con el aire que se enciende momentáneamente al acercar una fuente de ignición (no necesariamente sostenida). Es el parámetro de seguridad más importante en almacenamiento, transporte y selección de lubricantes.",
      "Se mide por dos métodos: copa cerrada (ASTM D93, Pensky-Martens) y copa abierta (ASTM D92, Cleveland). La copa cerrada da valores 5-10°C menores. Reguladores, como el DOT (transporte) y OSHA (seguridad industrial), usan el valor de copa cerrada para clasificar peligrosidad.",
      "Valores típicos: aceites minerales ISO VG 32-100 tienen flash point de 160-200°C; aceites sintéticos PAO de 220-280°C; fluidos hidráulicos resistentes al fuego (HFC, HFDU) de 300°C+. En plantas con fuentes de ignición (hornos, soldadura, motores de combustión) se deben usar lubricantes con flash point al menos 50°C por encima de la temperatura máxima de operación.",
    ],
    category: "lubricantes",
    relatedTerms: ["viscosidad", "iso-vg", "sds"],
    relatedProductIds: ["aceites-hidraulicos"],
  },
  {
    slug: "viscosidad",
    term: "Viscosidad",
    shortDef:
      "Resistencia interna de un fluido al flujo, medida en cSt (centiStokes) o cP (centipoises).",
    longDef: [
      "La viscosidad es la propiedad física que mide la resistencia interna de un fluido al flujo bajo una fuerza aplicada. En lubricantes y químicos industriales es el parámetro más importante porque define la capacidad del fluido para formar película protectora y para circular a través de equipos de bombeo.",
      "Existen dos formas de medir viscosidad: la viscosidad dinámica o absoluta (en centipoises, cP, o pascales-segundo, Pa·s) que se mide con viscosímetro de Stormer o de cilindros concéntricos; y la viscosidad cinemática (en centiStokes, cSt, o milímetros cuadrados/segundo, mm²/s) que se mide con viscosímetro capilar. La cinemática es la más usada para clasificar aceites.",
      "La viscosidad cambia con la temperatura: aumenta al enfriar y disminuye al calentar. El índice de viscosidad (VI) cuantifica qué tan estable es la viscosidad ante cambios de temperatura. Aceites premium tienen VI mayor a 95; aceites multigrado tienen VI superior a 150.",
    ],
    category: "lubricantes",
    relatedTerms: ["iso-vg", "sae"],
    relatedProductIds: ["aceites-hidraulicos"],
  },

  // ─── TRATAMIENTO DE AGUAS (continuación) ───
  {
    slug: "dureza-del-agua",
    term: "Dureza del Agua",
    shortDef:
      "Concentración de iones calcio y magnesio en el agua, expresada en mg/L de CaCO₃, que causa incrustaciones en equipos.",
    longDef: [
      "La dureza del agua es la medida de la concentración de iones calcio (Ca²⁺) y magnesio (Mg²⁺) disueltos. Se expresa en mg/L o ppm de carbonato de calcio equivalente (CaCO₃). El agua blanda tiene menos de 60 mg/L; el agua moderadamente dura de 60-120 mg/L; agua dura de 120-180 mg/L; agua muy dura más de 180 mg/L.",
      "La dureza es el principal responsable de incrustaciones en tuberías, calderas, intercambiadores de calor y torres de enfriamiento. Al calentar el agua, la solubilidad del carbonato de calcio disminuye y precipita como sarro (CaCO₃) sobre superficies calientes. Una incrustación de 3 mm de sarro en una caldera aumenta el consumo de combustible entre 15 y 20%.",
      "El control de dureza se hace con ablandadores de agua por intercambio iónico (resinas catiónicas en ciclo sodio), inhibidores de incrustación químicos (polifosfatos, policarboxilatos, fosfonatos) o tratamiento de agua en la pluma de alimentación. NOM-127-SSA1 establece límite de 500 mg/L para agua potable.",
    ],
    category: "aguas",
    relatedTerms: ["ptar", "ph", "osmosis-inversa"],
    relatedServiceSlugs: ["ingenieria-asesoria"],
  },
  {
    slug: "osmosis-inversa",
    term: "Ósmosis Inversa",
    shortDef:
      "Proceso de filtración de membrana a alta presión que retiene sales, iones y microcontaminantes para producir agua ultrapura.",
    longDef: [
      "La ósmosis inversa (OI o RO por sus siglas en inglés) es un proceso de separación por membrana semipermeable en el que se aplica una presión superior a la presión osmótica del agua a tratar para forzar el paso de agua pura a través de la membrana, mientras se retienen sales disueltas, iones, metales pesados, nitratos, microorganismos y microcontaminantes.",
      "Las membranas de OI estándar son de poliamida de película delgada y rechazan el 95-99% de sólidos disueltos. La presión de operación varía de 10-20 bar para agua salobre a 55-80 bar para agua de mar. El rendimiento típico (recovery) es del 50-75%, lo que significa que se produce ese porcentaje en agua permeada y el resto se descarta como rechazo concentrado.",
      "Aplicaciones industriales: producción de agua ultrapura para calderas de alta presión (ASTM D1193), manufactura de electrónica y semiconductores, industria farmacéutica, bebidas y alimentos, y remoción de metales pesados en efluentes industriales. El mayor costo operativo es el consumo eléctrico del sistema de alta presión: 0.5-1.0 kWh/m³ para agua salobre, 3-7 kWh/m³ para agua de mar.",
    ],
    category: "aguas",
    relatedTerms: ["dureza-del-agua", "ptar", "dbo", "dqo"],
    relatedServiceSlugs: ["ingenieria-asesoria"],
  },
  {
    slug: "pac-policloruro-aluminio",
    term: "PAC (Policloruro de Aluminio)",
    shortDef:
      "Coagulante inorgánico polimérico de alta basicidad para tratamiento de agua con mejor desempeño que el sulfato de aluminio en aguas frías o de baja turbidez.",
    longDef: [
      "El Policloruro de Aluminio (PAC o PACl) es un coagulante inorgánico que se obtiene por polimerización controlada de cloruro de aluminio con hidróxido de sodio. Su fórmula general es Aln(OH)mCl(3n-m). La basicidad (relación OH/Al) varía de 10% a 85%, siendo los PAC de alta basicidad (70-85%) los de mayor eficiencia coagulante.",
      "Ventajas frente al sulfato de aluminio: mayor rango eficaz de pH (5.5-8.5 vs 6.0-7.5 del alumbre), mejor coagulación en aguas frías donde el alumbre pierde actividad, menor generación de lodos (hasta 30% menos), menor depresión de pH por lo que reduce o elimina la necesidad de cal correctora, y eficaz en aguas de muy baja turbidez donde el alumbre falla.",
      "Se presenta en solución líquida (10-18% Al₂O₃, densidad 1.2-1.4 g/mL) o en polvo (30% Al₂O₃). La dosis típica en potabilización es de 5-50 mg/L según la turbidez y calidad del agua. En aguas residuales industriales de alta carga la dosis puede ser de 100-500 mg/L. Siempre debe determinarse por Jar Test.",
    ],
    category: "aguas",
    relatedTerms: ["coagulante", "floculante", "jar-test", "ph", "ptar"],
    relatedProductIds: ["coagulante-inorganico-clarificacion"],
    relatedServiceSlugs: ["pruebas-jarras"],
  },

  // ─── GENERAL ───
  {
    slug: "rohs",
    term: "RoHS",
    shortDef:
      "Directiva europea que restringe el uso de sustancias peligrosas en equipos eléctricos y electrónicos.",
    longDef: [
      "RoHS son las siglas en inglés de Restriction of Hazardous Substances. Es una directiva de la Unión Europea (originalmente 2002/95/EC, ahora actualizada como RoHS 3 o 2015/863) que restringe el uso de ciertas sustancias peligrosas en la fabricación de equipos eléctricos y electrónicos.",
      "Las sustancias restringidas son: plomo (Pb), mercurio (Hg), cadmio (Cd), cromo hexavalente (Cr VI), bifenilos polibromados (PBB), éteres de difenilo polibromados (PBDE) y cuatro ftalatos. La restricción aplica a concentraciones por encima de 0.1% en peso (1000 ppm).",
      "Aunque es directiva europea, RoHS se ha vuelto estándar global en electrónica e industria automotriz. Productos comercializados internacionalmente típicamente cumplen RoHS. En tratamientos de superficie metálica esto significa pasivados libres de cromo hexavalente (cromo trivalente o zirconio).",
    ],
    category: "general",
    relatedTerms: ["cromo-hexavalente", "tropicalizado"],
    relatedProductIds: ["sellador-anticorrosion-libre-cromo"],
  },
  {
    slug: "anodizado",
    term: "Anodizado",
    shortDef:
      "Proceso electroquímico que forma una capa de óxido controlada sobre aluminio para mejorar resistencia a corrosión y permitir coloración.",
    longDef: [
      "El anodizado es un proceso electroquímico mediante el cual se forma una capa de óxido controlada sobre superficies de aluminio (también de titanio y magnesio en aplicaciones especializadas). La pieza se coloca como ánodo en una solución de ácido sulfúrico o ácido fosfórico y se aplica corriente eléctrica que oxida la superficie.",
      "El espesor de la capa de óxido va de 5 a 25 micras según el proceso. Anodizado tipo I (cromico) da capas finas, ideal para aeronáutica. Tipo II (sulfúrico) es el más usado, da capas medianas adecuadas para arquitectura y consumo. Tipo III (duro) da capas gruesas (50+ micras) para aplicaciones de alta resistencia mecánica.",
      "La capa anódica es porosa y absorbe colorantes, lo que permite coloración decorativa. Después del coloreo se hace sellado con agua hirviendo o sales de níquel para cerrar los poros y fijar el color. Sin sellado, la capa absorbe humedad y pierde resistencia a corrosión.",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "decapado", "smut"],
    relatedServiceSlugs: ["pasivado", "decapado"],
  },
  {
    slug: "acero-inoxidable",
    term: "Acero Inoxidable",
    shortDef:
      "Aleación de hierro con cromo (mínimo 10.5%) que forma una capa pasiva natural resistente a corrosión.",
    longDef: [
      "El acero inoxidable es una aleación de hierro con un mínimo de 10.5% de cromo en peso. La presencia de cromo provoca la formación espontánea de una capa pasiva delgada de óxido de cromo (Cr₂O₃) en la superficie, que protege al metal contra la corrosión.",
      "Las series más usadas industrialmente son: 304 (18% Cr, 8% Ni) para aplicaciones generales y alimenticias; 316 (16% Cr, 10% Ni, 2% Mo) con mayor resistencia a cloruros y ambientes marinos; 410 y 420 (martensíticos, 11-13% Cr) para herramientas y cuchillería; 17-4 PH (precipitación endurecible) para aeronáutico.",
      "Para mantener la capa pasiva natural es indispensable evitar contaminación con hierro libre (rebabas, polvo de acero al carbón) y restos de soldadura. Cuando hay contaminación se requiere pasivado químico según ASTM A967 con ácido nítrico o ácido cítrico.",
    ],
    category: "metales",
    relatedTerms: ["pasivado", "astm-a967", "decapado"],
    relatedProductIds: ["desoxidante-acero-inoxidable"],
    relatedServiceSlugs: ["pasivado"],
  },
  {
    slug: "ibc",
    term: "IBC (Intermediate Bulk Container)",
    shortDef:
      "Contenedor industrial reutilizable de 1000-1500 litros para transporte y almacenamiento de líquidos químicos.",
    longDef: [
      "Un IBC (Intermediate Bulk Container) es un contenedor industrial estandarizado para transporte y almacenamiento de líquidos químicos a granel. Las capacidades típicas son 1000 L (264 galones), 1250 L y 1500 L. El más común es el de 1000 L, conocido también como tote.",
      "Los IBC tienen estructura externa de jaula metálica galvanizada montada sobre tarima de plástico, madera o metal, con un contenedor interno de polietileno de alta densidad (HDPE). Están diseñados para apilamiento, manejo con montacargas y descarga gravimétrica con válvula inferior.",
      "Las certificaciones UN (ONU) clasifican IBC para diferentes peligrosidades: UN 31A (sólidos y líquidos no peligrosos), UN 31H1 (líquidos peligrosos en HDPE), UN 31HZ1 (líquidos peligrosos en HDPE con jaula metálica). El IBC más común para químicos industriales es 31HZ1.",
    ],
    category: "general",
    relatedTerms: [],
  },
  {
    slug: "sds",
    term: "SDS (Safety Data Sheet)",
    shortDef:
      "Documento estandarizado que detalla propiedades, peligros, manejo seguro y respuesta a emergencias de una sustancia química.",
    longDef: [
      "Una Safety Data Sheet (SDS), antes conocida como MSDS (Material Safety Data Sheet), es el documento estandarizado que detalla las propiedades fisicoquímicas, peligros, manejo seguro, respuesta a emergencias y disposición de un producto químico. Es obligatoria por ley para todo químico distribuido comercialmente.",
      "El formato estándar internacional GHS (Globally Harmonized System) tiene 16 secciones: identificación del producto, identificación de peligros, composición, primeros auxilios, medidas contra incendios, medidas de fuga accidental, manejo y almacenamiento, controles de exposición, propiedades fisicoquímicas, estabilidad y reactividad, información toxicológica, ecológica, consideraciones de disposición, transporte, regulatoria y otra información.",
      "En México la SDS debe estar disponible en español y entregarse al cliente con cada compra. Es indispensable para auditorías de seguridad e higiene industrial, capacitación de personal y respuesta ante emergencias químicas.",
    ],
    category: "general",
    relatedTerms: ["coa"],
  },
  {
    slug: "reach",
    term: "REACH",
    shortDef:
      "Reglamento europeo de registro, evaluación, autorización y restricción de sustancias químicas que impacta exportaciones industriales a Europa.",
    longDef: [
      "REACH son las siglas de Registration, Evaluation, Authorisation and Restriction of Chemicals. Es el reglamento europeo EC 1907/2006, en vigor desde 2007, que regula la fabricación, importación, uso y comercialización de sustancias químicas en la Unión Europea. Es la regulación química más completa y de mayor alcance global.",
      "REACH obliga a los fabricantes e importadores a demostrar que las sustancias que producen o importan son seguras. El principio central es la responsabilidad del fabricante: 'sin datos, sin mercado'. Las sustancias de muy alta preocupación (SVHC) están sujetas a autorización previa o restricción. La lista SVHC actualizada contiene más de 240 sustancias, incluyendo cromo hexavalente, ftalatos, hidrocarburos aromáticos policíclicos y plomo.",
      "Para exportadores mexicanos que venden a Europa o a multinacionales con operaciones europeas, REACH es obligación indirecta: el cliente europeo exige que los productos y piezas metálicas cumplan restricciones de REACH, lo que afecta directamente los procesos de tratamiento de superficie (pasivados libres de cromo hexavalente, pinturas sin plomo). El incumplimiento puede resultar en rechazo de embarques en aduana.",
    ],
    category: "general",
    relatedTerms: ["rohs", "cromo-hexavalente", "sds"],
    relatedProductIds: ["sellador-anticorrosion-libre-cromo"],
  },
  {
    slug: "galvanoplastia",
    term: "Galvanoplastia",
    shortDef:
      "Proceso electroquímico de deposición de metales (zinc, níquel, cromo, cobre, oro) sobre piezas metálicas con fines funcionales o decorativos.",
    longDef: [
      "La galvanoplastia es el proceso de deposición electrolítica de metales sobre piezas metálicas o no metálicas (con previo metalizado). Se aplica corriente continua en un baño electrolítico con sales del metal a depositar: la pieza actúa como cátodo y el metal se deposita sobre su superficie.",
      "Los metales más depositados industrialmente son: zinc (protección anticorrosión en automotriz), níquel (resistencia a corrosión y abrasión, base para cromado), cromo (dureza superficial extrema hasta 1000 HV y resistencia química), cobre (base de adhesión y blindaje electromagnético), plata y oro (contactos eléctricos de alta conducción).",
      "Las aplicaciones industriales van desde la tornillería anticorrosión (zinc electrolítico) hasta piezas aeronáuticas con recubrimientos de cadmio (en declive por toxicidad), pasando por cromado duro en vástagos hidráulicos y moldes de inyección. En México la galvanoplastia es una industria concentrada principalmente en Monterrey, Guadalajara y Estado de México.",
    ],
    category: "general",
    relatedTerms: ["electrodeposicion", "galvanizado", "cromo-hexavalente", "rohs"],
    relatedServiceSlugs: ["pasivado"],
  },
  {
    slug: "coa",
    term: "COA (Certificate of Analysis)",
    shortDef:
      "Documento que certifica que un lote específico de producto químico cumple con las especificaciones técnicas declaradas.",
    longDef: [
      "Un COA (Certificate of Analysis) o Certificado de Análisis es el documento técnico que certifica que un lote específico de producto químico cumple con las especificaciones declaradas por el fabricante. Lo emite el laboratorio de control de calidad del fabricante después de analizar muestra del lote.",
      "Un COA típico incluye: identificación del producto y número de lote, fecha de fabricación y caducidad, especificaciones técnicas declaradas (pH, concentración, densidad, color, etc.), resultados analíticos del lote, métodos de análisis usados, firma del responsable de calidad.",
      "Es indispensable para control de calidad en industrias reguladas (farmacéutica, alimentos, aeronáutica, automotriz Tier 1), trazabilidad de proceso, auditorías ISO 9001 e ISO/TS 16949, y resolución de disputas comerciales sobre calidad.",
    ],
    category: "general",
    relatedTerms: ["sds"],
  },
];

export const getGlossaryEntry = (slug: string): GlossaryEntry | undefined =>
  GLOSSARY.find((g) => g.slug === slug);

export const getGlossaryByCategory = (category: GlossaryEntry["category"]): GlossaryEntry[] =>
  GLOSSARY.filter((g) => g.category === category);
