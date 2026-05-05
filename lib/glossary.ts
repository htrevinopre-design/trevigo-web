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
};

export const GLOSSARY: GlossaryEntry[] = [
  // ─── TRATAMIENTO DE METALES ───
  {
    slug: "fosfatizado",
    term: "Fosfatizado",
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
