// ============================================================
// CONTENIDO TÉCNICO ÚNICO POR PRODUCTO
// Cada entrada agrega contenido único a la página de producto:
// descripción extendida (SEO + valor al lector), aplicaciones
// específicas y consideraciones técnicas / limitaciones.
// ============================================================

export interface ProductContent {
  /** Descripción técnica extendida — 80-120 palabras única por producto */
  description: string;
  /** Aplicaciones típicas — 4-6 bullets concretos */
  applications: string[];
  /** Nota técnica / limitación / advertencia — 1-2 frases */
  notes?: string;
}

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  // ══════════════════════════════════════════════
  // DETERGENTES
  // ══════════════════════════════════════════════
  "limpiador-liquido-alcalino-metales": {
    description:
      "Formulación alcalina líquida de pH 12-13 diseñada para remover aceites de corte, fluidos hidráulicos, pastas de pulir y contaminantes orgánicos sobre acero al carbón, hierro fundido y zinc galvanizado. Su sistema surfactante combina tensoactivos no iónicos y agentes secuestrantes que evitan la redeposición del aceite emulsionado, lo que prolonga la vida útil del baño. Funciona por aspersión, inmersión o ultrasonido a 50-70 °C, generando baja espuma incluso en sistemas de alta turbulencia. Es la primera etapa estándar en líneas de pretratamiento previas a fosfatado de zinc o pintura electrostática en la industria automotriz, metalmecánica y de electrodomésticos.",
    applications: [
      "Desengrase previo a fosfatado de zinc en líneas automotrices (pre-pintura)",
      "Limpieza de piezas estampadas con aceites protectores antes de soldadura",
      "Remoción de fluidos de corte solubles en piezas maquinadas",
      "Etapa inicial en líneas de aspersión de 5 o 7 etapas",
      "Limpieza por inmersión en talleres de mantenimiento industrial",
    ],
    notes:
      "No recomendado para aluminio anodizado o piezas de zinc con recubrimientos sensibles a álcali fuerte; en esos casos use el limpiador alcalino multimetálico.",
  },
  "limpiador-polvo-alcalino-multiusos": {
    description:
      "Limpiador alcalino concentrado en polvo de alta pureza, ideal para operaciones que requieren transporte económico y dosificación precisa. Se disuelve completamente en agua a temperatura ambiente formando una solución cáustica tamponada con builders fosfatados y silicatos de sodio que protegen al sustrato metálico. Compatible con sistemas de inmersión, aspersión y limpieza electrolítica. Por su formato sólido, ofrece mayor concentración por kg que los líquidos equivalentes y reduce los costos logísticos en plantas remotas. Su principal aplicación es la limpieza profunda de barriles, transportadores, ganchos y bastidores con incrustaciones acumuladas de varios turnos de operación.",
    applications: [
      "Limpieza periódica de bastidores y ganchos de líneas de pintura",
      "Recuperación de transportadores con acumulación de pintura y aceite",
      "Desengrase profundo en operaciones de mantenimiento mayor",
      "Sistemas de limpieza electrolítica catódica y anódica",
      "Plantas remotas donde el flete del producto líquido es prohibitivo",
    ],
    notes:
      "Diluir siempre el polvo en el agua (no al revés) para evitar reacción exotérmica violenta. Use EPP completo durante la preparación.",
  },
  "limpiador-acido-fosforico-hierro-acero": {
    description:
      "Limpiador ácido a base de ácido fosfórico al 25-35% formulado con inhibidores de corrosión que evitan el ataque excesivo al sustrato y surfactantes que solubilizan grasas mineralizadas. Disuelve óxido superficial, escamas de laminación ligeras y sales de soldadura sobre acero al carbón y hierro fundido, dejando una capa de fosfato de hierro amorfo (~0.2-0.5 g/m²) que mejora la adhesión de pinturas y recubrimientos epóxicos. Es la opción preferida cuando se busca limpieza + conversión química ligera en una sola etapa, sin necesidad de fosfatado de zinc completo.",
    applications: [
      "Limpieza y conversión de tubería estructural antes de pintura",
      "Tratamiento de piezas soldadas con manchas de óxido por calor",
      "Pretratamiento ligero en líneas de pintura electrostática de bajo costo",
      "Remoción de óxido superficial en piezas de almacén oxidadas",
      "Acondicionamiento de tanques y estructuras de acero al carbón",
    ],
    notes:
      "No usar sobre aluminio, zinc galvanizado ni acero inoxidable: el ácido fosfórico ataca estos sustratos. Para esas aleaciones use el limpiador neutro con pasivado.",
  },
  "limpiador-neutro-pasivado": {
    description:
      "Solución acuosa de pH 7-8.5 que combina detergencia suave con agentes pasivantes orgánicos que dejan una película anticorrosiva temporal sobre la superficie tratada. Diseñado para metales sensibles donde un álcali o un ácido fuerte deteriorarían el acabado: aluminio anodizado, zinc galvanizado, latón, cobre, magnesio y aceros inoxidables pulidos. Su acción de limpieza viene de surfactantes biodegradables y solventes glicólicos miscibles, mientras que la pasivación post-limpieza protege la pieza durante 24-72 horas en ambiente controlado. Muy usado en industria electrónica, aeronáutica y dispositivos médicos donde no se admite manchado ni decoloración del sustrato.",
    applications: [
      "Limpieza de carcasas de aluminio anodizado en electrónica",
      "Desengrase de piezas galvanizadas previo a almacenamiento",
      "Limpieza de componentes aeronáuticos de aleaciones especiales",
      "Tratamiento de instrumental quirúrgico antes de esterilización",
      "Acabado final de piezas pulidas que no irán a pintura",
    ],
    notes:
      "Su poder de limpieza es moderado; no sustituye a desengrasantes alcalinos para contaminación pesada. Use como segunda etapa o para cargas ligeras.",
  },
  "limpiador-alcalino-multimetalico": {
    description:
      "Limpiador alcalino líquido formulado con quelantes específicos (gluconatos y EDTA) que protegen al aluminio, zinc y sus aleaciones del ataque cáustico tradicional. Mantiene un pH efectivo de limpieza (10.5-11.5) sin generar smut ni picaduras superficiales, lo que permite procesar líneas mixtas con piezas de acero, aluminio y zinc en el mismo baño. Se usa en plantas de electrodomésticos, partes automotrices con aluminio fundido, perfilería de aluminio y operaciones de manufactura general donde la flexibilidad de mezcla de sustratos es crítica. Reduce drásticamente los inventarios de químicos al eliminar la necesidad de baños separados por aleación.",
    applications: [
      "Líneas de electrodomésticos con piezas mixtas (acero + aluminio)",
      "Desengrase de partes automotrices fundidas (cabezas, bloques)",
      "Limpieza de perfiles de aluminio para construcción",
      "Plantas multi-producto que procesan varias aleaciones por turno",
      "Etapa única en sistemas de pretratamiento simplificados de 3 etapas",
    ],
    notes:
      "Verifique periódicamente el contenido de aluminio disuelto (>500 ppm requiere descarte) para evitar precipitación y ataque al sustrato.",
  },
  "limpiador-solido-alcalino": {
    description:
      "Desengrasante sólido en escamas de altísima concentración formulado para sistemas industriales de gran volumen donde se requiere mantener la concentración del baño con dosificación automática. Cada kilogramo equivale aproximadamente a 3-4 litros de producto líquido, lo que reduce significativamente los costos de transporte y almacenamiento. Su composición incluye builders alcalinos (silicatos, carbonatos, fosfatos) y surfactantes en polvo que se disuelven completamente al contacto con agua tibia. Es el formato preferido en plantas con consumo mensual superior a 500 kg, donde la economía de escala del polvo se vuelve significativa frente al líquido.",
    applications: [
      "Líneas de aspersión de gran volumen con dosificación automática",
      "Plantas con consumo mensual >500 kg de desengrasante",
      "Ubicaciones remotas donde el flete del líquido es prohibitivo",
      "Sistemas de inmersión en tanques de gran capacidad (>5,000 L)",
      "Operaciones que requieren almacenamiento por más de 6 meses",
    ],
    notes:
      "Almacenar en envase sellado, lejos de humedad. La absorción de humedad del aire causa apelmazamiento y dificulta la dosificación.",
  },
  "desengrasante-multisuperficies": {
    description:
      "Desengrasante industrial polivalente de pH neutro a ligeramente alcalino, formulado para limpiar sin dañar una amplia variedad de sustratos: metales, plásticos termoestables, superficies pintadas, vidrio, hule y compuestos. Combina solventes glicólicos, surfactantes biodegradables y emulsificantes que disuelven aceites minerales, sintéticos y vegetales sin atacar selladores, gomas o pinturas curadas. Es el producto de limpieza general más versátil del catálogo y se usa en plantas industriales, talleres de mantenimiento, flotas de transporte y operaciones de food-service no críticas. Su perfil de seguridad permite uso manual sin EPP especializado más allá de guantes.",
    applications: [
      "Limpieza general de equipos y maquinaria con superficies mixtas",
      "Mantenimiento de transportadores con bandas de hule",
      "Limpieza de talleres mecánicos: bancos, herramientas, suelos",
      "Desengrase de piezas pintadas sin afectar el acabado",
      "Operaciones de housekeeping en plantas manufactureras",
    ],
    notes:
      "Para contaminación pesada de aceites de horno o brea, su poder de limpieza es insuficiente; use removedor alcalino o intensivo.",
  },

  // ══════════════════════════════════════════════
  // DESOXIDANTES
  // ══════════════════════════════════════════════
  "desoxidante-fosfato-ligero": {
    description:
      "Producto de doble función que combina desoxidación ácida con deposición de fosfato de hierro amorfo en una sola etapa de proceso. Su mezcla balanceada de ácido fosfórico, surfactantes y aceleradores remueve óxido y escamas ligeras de laminación mientras forma un recubrimiento de conversión de 0.3-0.6 g/m² que mejora dramáticamente la adhesión de pinturas en polvo, e-coat y recubrimientos líquidos. Usado en líneas rápidas de pretratamiento de 3 etapas, reemplaza a procesos tradicionales de 5 etapas con ahorros del 30-40% en consumo de agua y químicos sin sacrificar performance anticorrosivo en aplicaciones de servicio interior moderado.",
    applications: [
      "Líneas de pintura electrostática de 3 etapas (limpieza + fosfato + sello)",
      "Pretratamiento de muebles metálicos, lockers y archiveros",
      "Acabado de tubería estructural y perfiles ligeros",
      "Línea de hojalatería: tableros eléctricos, gabinetes, racks",
      "Sustitución de fosfato de zinc en aplicaciones de baja exigencia",
    ],
    notes:
      "El recubrimiento depositado es más delgado que un fosfato de zinc convencional. No recomendado para aplicaciones automotrices exteriores o con exposición salina prolongada.",
  },
  "limpiador-acido-desincrustante": {
    description:
      "Desoxidante ácido potente formulado con ácido clorhídrico o sulfámico inhibido, capaz de remover óxido pesado, escamas de laminación gruesas, incrustaciones calcáreas y residuos de soldadura sobre acero al carbón. El sistema de inhibidores integrados protege al sustrato base del ataque excesivo durante el tiempo de reacción, permitiendo limpieza profunda sin pérdida significativa de espesor. Es la herramienta estándar para restauración de equipos, calderas, intercambiadores de calor con escala mineral y piezas industriales con corrosión acumulada. Funciona por inmersión, circulación o aplicación manual con bombas de aspersión a baja presión.",
    applications: [
      "Limpieza química de calderas con escala carbonatada",
      "Restauración de intercambiadores de calor con corrosión",
      "Decapado de piezas con costras de óxido pesadas",
      "Limpieza de tuberías de proceso con incrustaciones minerales",
      "Acondicionamiento de equipos antes de mantenimiento mayor",
    ],
    notes:
      "Producto altamente corrosivo. Requiere EPP completo, ventilación adecuada y neutralización del baño agotado antes de descarga. No usar sobre aceros inoxidables ni aluminio.",
  },
  "limpiador-desoxidante-fosfatizante": {
    description:
      "Solución multifuncional de tres en uno: limpia aceites residuales, desoxida superficie y deposita fosfato de zinc cristalino en un solo proceso. Optimiza líneas de pretratamiento al reducir el número de etapas, lo que disminuye consumo de agua, energía y espacio de planta. Su química balanceada produce un recubrimiento de conversión de 1.5-3.0 g/m² adecuado para aplicaciones que requieren mejor anticorrosivo que el fosfato de hierro pero sin la complejidad de una línea convencional de 7 etapas. Muy usado en talleres medianos de pintura electrostática, partes automotrices tier 2 y manufactureros de hardware.",
    applications: [
      "Líneas compactas de pintura para piezas medianas (electrodomésticos, muebles)",
      "Talleres de tier 2 automotriz con piezas no estructurales",
      "Pretratamiento de hardware ferretero: bisagras, herrajes, tornillería",
      "Líneas con espacio limitado donde no caben 7 etapas",
      "Operaciones de bajo a mediano volumen (<200 piezas/hora)",
    ],
    notes:
      "El espesor y cristalinidad del fosfato son intermedios. Para acabados automotrices OEM use el fosfato de zinc-calcio de alta resistencia.",
  },
  "limpiador-desoxidante-fosfatizacion-ligera": {
    description:
      "Versión optimizada para velocidades altas de línea (>1.5 m/min) que mantiene tiempos de contacto cortos sin sacrificar el resultado del pretratamiento. Usa un sistema de aceleradores fluorados que permite obtener un fosfato funcional en 30-60 segundos de contacto, comparado con los 90-180 segundos del proceso convencional. Es ideal para líneas continuas tipo coil-coating, lámina recubierta o sistemas robotizados de alta producción donde el cuello de botella tradicional ha sido el tiempo de fosfatado. Compatible con sistemas de aspersión a presiones moderadas (0.8-1.5 bar).",
    applications: [
      "Líneas continuas de coil-coating de lámina galvanizada",
      "Sistemas robotizados de pintura con velocidades altas",
      "Producción de lámina pintada para techos y paneles",
      "Líneas automotrices de tier 1 con cadencia >1.5 m/min",
      "Operaciones donde el tiempo de fosfatado limita la producción",
    ],
    notes:
      "Requiere control estricto de concentración de fluoruros (15-25 ppm) y temperatura (45-55°C). Variaciones afectan dramáticamente el peso del recubrimiento.",
  },
  "desoxidante-acero-inoxidable": {
    description:
      "Formulación especializada para limpieza y desoxidación de aceros inoxidables (304, 316, 430) sin alterar el acabado superficial pulido o cepillado. Combina ácido cítrico o ácido nítrico diluido con inhibidores de picado que permiten remover manchas de óxido por contaminación con acero al carbón (free iron contamination), residuos de soldadura, marcas de calor y decoloraciones por templado. El proceso es selectivo: ataca al óxido y al hierro libre superficial sin disolver la matriz de cromo-níquel del inox. Cumple con norma ASTM A967 para pasivación química de aceros inoxidables en aplicaciones de food-grade y farmacéutica.",
    applications: [
      "Limpieza de tanques y tuberías de acero inoxidable post-fabricación",
      "Remoción de manchas de soldadura (heat tint) en piezas inox",
      "Pasivación de equipos para industria alimenticia y farmacéutica",
      "Eliminación de hierro libre superficial en piezas mecanizadas",
      "Acondicionamiento de instrumental quirúrgico de inox",
    ],
    notes:
      "El proceso debe seguirse con enjuague abundante con agua desmineralizada. Residuos de cloruros del agua de proceso pueden generar corrosión por picaduras.",
  },

  // ══════════════════════════════════════════════
  // FOSFATOS
  // ══════════════════════════════════════════════
  "alcohol-isopropilico": {
    description:
      "Alcohol isopropílico (IPA) de grado industrial, el solvente estándar para limpieza de precisión: se evapora rápido, no deja residuo y no ataca la mayoría de los plásticos y recubrimientos. En manufactura se usa para preparar superficies antes de pintar, pegar o sellar, para limpiar componentes electrónicos y ópticos, y para remover aceites ligeros y huellas en piezas terminadas. Lo suministramos con ficha de seguridad y certificado de análisis por lote, en presentaciones desde porrón hasta tote según el consumo de tu planta.",
    applications: [
      "Limpieza de precisión de componentes electrónicos y ópticos",
      "Preparación de superficies antes de pintura, adhesivos o sellado",
      "Remoción de aceites ligeros, huellas y residuos de maquinado",
      "Limpieza de equipo y herramental en líneas de acabado",
      "Dilución de tintas y recubrimientos según especificación del fabricante",
    ],
    notes:
      "Inflamable: almacenar en área ventilada lejos de fuentes de ignición y conectar a tierra los recipientes al trasvasar. Consulta la SDS antes de usar.",
  },
  "alcohol-etilico": {
    description:
      "Alcohol etílico de grado industrial para limpieza, sanitización y uso como solvente de proceso. Es el solvente de elección cuando se necesita evaporación rápida con buen poder de limpieza en superficies de trabajo, equipo y utensilios industriales. Lo suministramos con ficha de seguridad y certificado de análisis por lote; consúltanos el grado y la concentración que requiere tu proceso para confirmarte disponibilidad y documentación.",
    applications: [
      "Limpieza y sanitización de superficies de trabajo y equipo",
      "Solvente de proceso en manufactura y formulación",
      "Limpieza de herramental y áreas de producción",
      "Dilución de productos según especificación del fabricante",
    ],
    notes:
      "Inflamable: manejar con ventilación adecuada y lejos de fuentes de ignición. El grado y concentración disponibles se confirman según tu aplicación.",
  },
  "fosfato-zinc-brillante": {
    description:
      "Fosfato de zinc tricatiónico (Zn-Mn-Ni) de grano fino que produce un recubrimiento cristalino denso y uniforme de 1.5-3.5 g/m². Es el estándar OEM para pretratamiento automotriz: la cristalinidad fina (<10 micras) maximiza el área superficial efectiva, lo que se traduce en adhesión superior de electrodepósito (e-coat) y resistencia anticorrosiva extendida en pruebas de niebla salina (ASTM B117 >500 horas con e-coat). Cumple con especificaciones GM, Ford, Chrysler y los estándares de la cadena tier 1. Funciona óptimamente a 50-55°C con tiempo de contacto de 90-180 segundos en aspersión.",
    applications: [
      "Carrocerías y partes estructurales automotrices OEM",
      "Lámina galvanizada antes de e-coat en industria automotriz",
      "Tier 1 automotriz: bastidores, suspensiones, ejes",
      "Aplicaciones de alto desempeño con exposición exterior",
      "Equipo agrícola y maquinaria pesada con requerimientos de niebla salina",
    ],
    notes:
      "Requiere control diario de relación punto libre / punto total (free/total acid) entre 1:6 y 1:8. Desbalance afecta el peso del recubrimiento y la cristalinidad.",
  },
  "fosfato-zinc-calcio-alta-resistencia": {
    description:
      "Fosfato de zinc-calcio de alto peso (3.5-7.0 g/m²) formulado para aplicaciones que demandan máxima resistencia anticorrosiva en ambientes severos: salinidad costera, climas tropicales húmedos, contacto con químicos industriales. La adición de calcio modifica la estructura cristalina hacia formas más densas y compactas (hopeite + scholzite) que ofrecen barrera mecánica adicional al e-coat o pintura aplicada encima. Pruebas internas de niebla salina cíclica (ASTM B117 / SAE J2334) muestran resultados >720 horas sin propagación significativa del defecto. Estándar para fabricantes que operan en zonas costeras o exportan a mercados tropicales.",
    applications: [
      "Carrocerías para mercados costeros (Veracruz, Tampico, Mazatlán)",
      "Estructuras expuestas a ambientes salinos (puertos, plataformas)",
      "Equipo agrícola con uso en climas tropicales húmedos",
      "Maquinaria pesada para minería y construcción",
      "Exportación a mercados con normas anticorrosivas estrictas",
    ],
    notes:
      "El alto peso del recubrimiento puede afectar la formabilidad. No recomendado para piezas que serán dobladas o conformadas después del fosfatado.",
  },
  "limpiador-fosfato-fierro-multimetales": {
    description:
      "Producto dos en uno que limpia y deposita fosfato de hierro amorfo simultáneamente, compatible con sustratos mixtos: acero, zinc galvanizado, aluminio y sus aleaciones. Es el caballo de batalla de líneas industriales de pintura donde no hay espacio para fosfatado de zinc completo. El recubrimiento amorfo de 0.2-0.6 g/m² mejora la adhesión un 30-50% sobre superficie sin tratar y proporciona resistencia anticorrosiva moderada (150-250 horas de niebla salina con pintura epoxi-poliéster en polvo). Su simplicidad operativa lo hace popular en muebles metálicos, electrodomésticos línea blanca, hardware y aplicaciones de servicio interior.",
    applications: [
      "Líneas de pintura para muebles metálicos y archiveros",
      "Electrodomésticos línea blanca (refrigeradores, lavadoras)",
      "Componentes electrónicos: gabinetes, bastidores, racks",
      "Hardware: bisagras, herrajes, accesorios de construcción",
      "Productos de servicio interior con bajo riesgo de corrosión",
    ],
    notes:
      "No produce un recubrimiento visible (no cambia de color la pieza). Verifique el peso por gravimetría o coupon de prueba mensualmente.",
  },
  "fosfato-acido-detergente-integral": {
    description:
      "Concentrado ácido con surfactantes integrados que combina detergencia y fosfatado de hierro en una sola etapa de proceso. Optimizado para líneas de 3 etapas (fosfato + enjuague + sello) donde la reducción de espacio y químicos es prioritaria. Su sistema surfactante remueve aceites de hasta 5 g/m² de carga superficial mientras forma un recubrimiento de conversión amorfo. Es la opción más compacta y económica para iniciar operaciones de pintura en pequeñas y medianas plantas que no requieren acabados OEM. Compatible con aspersión, inmersión y sistemas de wand spray manual.",
    applications: [
      "Plantas pequeñas iniciando operaciones de pintura electrostática",
      "Talleres de pintura para hojalatería y carrocería ligera",
      "Líneas móviles de wand spray para piezas grandes (estructuras)",
      "Producción artesanal y a baja escala (<50 piezas/hora)",
      "Reemplazo de procesos manuales de limpieza + primer",
    ],
    notes:
      "La concentración del baño se agota más rápido que un fosfato de zinc convencional. Plan dosificación cada 2-4 horas en operación continua.",
  },

  // ══════════════════════════════════════════════
  // REMOVEDORES
  // ══════════════════════════════════════════════
  "removedor-alcalino-pinturas": {
    description:
      "Removedor alcalino de alto poder (pH 13-14) formulado para eliminar pinturas en polvo curadas, esmaltes alquídicos, primers epóxicos y recubrimientos orgánicos sin atacar al sustrato metálico base de acero al carbón o hierro fundido. Su acción combina ataque químico al ligante de la pintura con penetración por surfactantes especializados que despegan el recubrimiento de la superficie. Es el estándar para reproceso de bastidores, ganchos y transportadores de líneas de pintura electrostática que acumulan capas de pintura horneada después de cientos de ciclos. Funciona por inmersión a 60-80°C con tiempos de contacto de 30 minutos a 4 horas dependiendo del espesor.",
    applications: [
      "Limpieza de bastidores y ganchos de líneas de pintura electrostática",
      "Reproceso de piezas con pintura defectuosa (sagging, cratering)",
      "Recuperación de transportadores con acumulación masiva de pintura",
      "Restauración de equipos industriales pintados para repintado",
      "Operaciones de mantenimiento mayor de plantas de acabado",
    ],
    notes:
      "Altamente cáustico. No usar sobre aluminio, zinc galvanizado o aleaciones sensibles a álcali; las disolverá. Use guantes de neopreno y protección facial completa.",
  },
  "removedor-pintura-cloruro-metileno": {
    description:
      "Removedor de pintura a base de cloruro de metileno (diclorometano) con activadores y agentes ceríferos que evitan la evaporación rápida del solvente. Es el método más rápido para despintar piezas complejas con geometrías difíciles donde un removedor alcalino no penetra adecuadamente. Disuelve epóxicos, poliuretanos, pinturas acrílicas y barnices en 5-30 minutos sin necesidad de calor. Compatible con la mayoría de sustratos metálicos y plásticos de ingeniería. Usado tradicionalmente en aerospacial y restauración de partes de motor donde la integridad del sustrato es crítica.",
    applications: [
      "Despintado de partes aerospaciales (componentes de aluminio aleado)",
      "Restauración de piezas automotrices clásicas (cuerpo, partes de motor)",
      "Limpieza de moldes de inyección con residuos de pintura",
      "Despintado manual de piezas complejas o con cavidades",
      "Operaciones de retrabajo donde se requiere acción rápida",
    ],
    notes:
      "Cloruro de metileno está regulado por NOM-010-STPS por toxicidad. Requiere ventilación forzada y EPP respiratorio. Considere alternativas alcalinas o intensivas siempre que sea posible.",
  },
  "removedor-intensivo-superficies": {
    description:
      "Removedor de máxima concentración formulado para los recubrimientos más resistentes: epóxicos cargados, poliuretanos curados a alta temperatura, pinturas industriales con fibra de vidrio y revestimientos protectores marinos. Su química combina solventes polares de alta densidad con activadores ácidos que penetran la matriz polimérica y provocan desbonding del sustrato. Es la última línea de defensa cuando los removedores alcalinos o de cloruro de metileno no son efectivos. Funciona típicamente por inmersión prolongada (4-24 horas) a temperatura ambiente o ligeramente calentada (40-50°C).",
    applications: [
      "Despintado de equipo marino con recubrimientos epoxi-marinos",
      "Restauración de tanques industriales con linings protectores",
      "Limpieza de estructuras con pintura de tráfico o vialidad pesada",
      "Reproceso de piezas con pinturas bicomponentes curadas",
      "Operaciones donde otros removedores fallan por dureza del recubrimiento",
    ],
    notes:
      "Producto agresivo. Requiere baños dedicados y monitoreo del sustrato — exposición prolongada puede atacar al metal base, especialmente en aluminio.",
  },

  // ══════════════════════════════════════════════
  // SELLOS
  // ══════════════════════════════════════════════
  "sellador-anticorrosion-libre-cromo": {
    description:
      "Sellador post-fosfatado de última generación basado en química de zirconio y silanos orgánicos, libre de cromo VI conforme a directivas RoHS, REACH y SCAQMD. Sustituye a los selladores tradicionales de cromo trivalente que están siendo eliminados en mercados regulados. Aplicado como última etapa antes del enjuague final, aumenta la resistencia a la corrosión del recubrimiento de fosfato un 30-50% en pruebas de niebla salina, sin riesgos ambientales ni de salud ocupacional. Es la elección obligatoria para fabricantes que exportan a Europa, EUA o que tienen políticas internas de químicos verdes.",
    applications: [
      "Última etapa de sellado en líneas automotrices con compromiso ambiental",
      "Pretratamiento para fabricantes que exportan a la Unión Europea",
      "Plantas con certificación ISO 14001 o políticas de químicos verdes",
      "Acabado final en aplicaciones de electrodomésticos premium",
      "Sistemas que reemplazan selladores con cromo trivalente",
    ],
    notes:
      "Requiere agua de enjuague de baja conductividad (<30 µS/cm) para máxima efectividad. Agua dura agota prematuramente el baño.",
  },
  "anticor-sell-50": {
    description:
      "ANTICOR SELL 50 es un sellador de zirconio-silano de alto rendimiento desarrollado para aplicaciones automotrices y de electrodomésticos donde el desempeño anticorrosivo es crítico pero no se admite el uso de cromo. Su película de pasivación inorgánica-orgánica de 50-80 nm sella los poros del recubrimiento de fosfato de zinc, proporcionando una barrera adicional que mejora la resistencia a niebla salina hasta 720+ horas en sistemas con e-coat. Su formulación con silanos funcionales también mejora la adhesión química con el primer aplicado encima, reduciendo el riesgo de delaminación bajo impacto o flexión.",
    applications: [
      "Sellado final en líneas OEM automotrices (sustituye Cr+3 y Cr+6)",
      "Pretratamiento de electrodomésticos premium con e-coat",
      "Aplicaciones que requieren >500 horas de niebla salina certificada",
      "Plantas con auditorías ambientales internacionales",
      "Sistemas con alta exposición a impacto y flexión",
    ],
    notes:
      "Su efectividad depende de la limpieza del baño (sólidos disueltos <500 ppm). Filtración continua y reemplazo del baño cada 60-90 días son recomendados.",
  },

  // ══════════════════════════════════════════════
  // INHIBIDORES
  // ══════════════════════════════════════════════
  "inhibidor-oxidacion-temporal": {
    description:
      "Inhibidor de corrosión temporal tipo VCI (Vapor Corrosion Inhibitor) que protege piezas metálicas durante almacenamiento, tránsito interoperacional y exportación. Forma una película molecular protectora de espesor sub-microscópico que repele agua y oxígeno sin alterar el acabado superficial ni requerir remoción posterior con solventes. Adecuado para protecciones de 30 días a 12 meses dependiendo de las condiciones ambientales. Es muy usado en la industria metalmecánica para piezas mecanizadas que esperan ensamble, exportación de partes en contenedor marítimo, y almacenamiento intermedio en almacenes sin clima controlado.",
    applications: [
      "Protección de piezas mecanizadas entre operaciones (lapsos de 1-30 días)",
      "Exportación de partes en contenedor marítimo (climas tropicales)",
      "Almacenamiento de partes terminadas en bodegas sin clima",
      "Empaque de refacciones para distribución a larga distancia",
      "Almacenamiento de moldes y herramientas entre producción",
    ],
    notes:
      "La efectividad depende del empaque hermético. Si la pieza se desempaca prematuramente, la protección se reduce drásticamente.",
  },

  // ══════════════════════════════════════════════
  // PASIVADOS
  // ══════════════════════════════════════════════
  "pasivador-frio-libre-acido-inoxidable": {
    description:
      "Pasivador acuoso libre de ácido nítrico para acero inoxidable, de aplicación en frío por aspersión. Al soldar inoxidable (TIG, MIG o electrodo), el cordón y su zona afectada quedan con marcas de soldadura: el quemado o colores de temple (heat tint), y — tras el decapado o después de tratamientos mecánicos como esmerilado, cepillado o granallado — con smut, manchas cafés o hierro libre que comprometen la capa pasiva y provocan que el inoxidable se oxide justo donde se soldó. Este producto los elimina y restaura la pasivación aplicándose húmedo sobre húmedo, con 10-15 minutos de reacción y enjuague final con agua. Al no contener ácido nítrico, no genera humos nítricos, el enjuague resultante es neutro y no requiere tratamiento como residuo peligroso, y el producto se maneja y transporta como mercancía no peligrosa — una alternativa de seguridad superior frente a los pasivadores ácidos tradicionales.",
    applications: [
      "Eliminación de marcas, quemado y colores de temple en cordones de soldadura TIG y MIG",
      "Pasivado de soldaduras de acero inoxidable después del decapado (gel o inmersión)",
      "Pasivado tras tratamiento mecánico: esmerilado, cepillado o granallado de inoxidable",
      "Remoción de hierro libre (smut) y manchas cafés post-decapado",
      "Aplicación en niebla durante el decapado para suprimir la formación de humos",
      "Prevención de manchas por agua de enjuague de mala calidad y de la oxidación que aparece después de soldar",
      "Fabricación de equipo alimenticio, farmacéutico y sanitario en inoxidable",
    ],
    notes:
      "Aplicar con equipo de aspersión resistente a químicos y enjuagar con agua, idealmente a presión. Usar guantes y protección ocular; almacenar cerrado, en lugar fresco y protegido de la luz.",
  },

  "pasivador-aluminio-cromo": {
    description:
      "Pasivado cromático para aluminio y sus aleaciones que genera una capa de conversión amarilla-dorada (cromato amarillo) o transparente (cromato MIL-DTL-5541) altamente protectora. Es el estándar histórico de la industria aerospacial y militar para acabado de aluminio aeronáutico (2024, 7075, 6061). Mejora la resistencia a la corrosión de la aleación tratada en pruebas de niebla salina hasta 168 horas (cromato amarillo) y proporciona excelente base para pintura, primer y adhesivos estructurales. Cumple con MIL-DTL-5541 Tipo I Clase 1A y Class 3 para conductividad eléctrica conservada.",
    applications: [
      "Componentes aerospaciales de aluminio (estructura, paneles, fuselaje)",
      "Aplicaciones militares con especificaciones MIL-DTL-5541",
      "Conectores eléctricos de aluminio (Class 3, baja resistencia)",
      "Pretratamiento de aluminio antes de pinturas tipo MIL-PRF-23377",
      "Aplicaciones donde el aluminio expuesto requiere máxima protección",
    ],
    notes:
      "Contiene cromo hexavalente. Está siendo regulado en mercados europeos (REACH) y EUA (OSHA). Considere alternativas no-cromáticas para nuevos proyectos.",
  },

  // ══════════════════════════════════════════════
  // ACEITES (METALES)
  // ══════════════════════════════════════════════
  "aceite-protector-piezas-metalicas": {
    description:
      "Aceite protector de film fino con aditivos antioxidantes y antidesgaste que forma una capa de 2-5 micras sobre la superficie metálica. A diferencia de los inhibidores VCI, este aceite proporciona protección física continua y es removible con solventes desengrasantes estándar antes del siguiente proceso. Su viscosidad baja permite que sea aplicado por inmersión, aspersión o brocha sin acumulaciones excesivas que afecten ensambles posteriores. Es el método tradicional para protección de mediano plazo (3-12 meses) en piezas terminadas que serán pintadas o ensambladas más adelante.",
    applications: [
      "Almacenamiento mediano plazo de piezas mecanizadas terminadas",
      "Protección de moldes de inyección durante mantenimiento",
      "Aplicación final en herramientas y dispositivos de medición",
      "Acabado de partes que serán pintadas (después de remoción)",
      "Protección de superficies pulidas durante tránsito",
    ],
    notes:
      "Debe removerse con desengrasante antes de pintura o adhesivado. Residuos comprometen la adhesión.",
  },
  "aceite-desmoldante-naftenico": {
    description:
      "Aceite nafténico altamente refinado para desmoldado de piezas fundidas en aluminio, zinc y aleaciones de bajo punto de fusión. Su composición de hidrocarburos cíclicos saturados ofrece estabilidad térmica hasta 300°C sin formación de residuos quemados que afecten el acabado de la pieza. Combina excelente separación pieza-molde con baja generación de humo durante la operación, mejorando las condiciones del personal de fundición. Es compatible con moldes de acero H13, aluminio y aleaciones especializadas. Aplicación por aspersión o brocha en cantidades pequeñas (1-3 ml por molde mediano).",
    applications: [
      "Desmoldado de piezas en fundición de aluminio (cabezas, bloques)",
      "Inyección de zinc para hardware y herrajes",
      "Fundición a presión de aleaciones de magnesio",
      "Operaciones donde se requiere acabado superficial limpio",
      "Procesos sensibles a humo y vapores en zona de trabajo",
    ],
    notes:
      "No usar en fundición de hierro o aceros (puntos de fusión >700°C). El aceite se descompone y genera depósitos carbonosos.",
  },

  // ══════════════════════════════════════════════
  // COAGULANTES
  // ══════════════════════════════════════════════
  "coagulante-inorganico-clarificacion": {
    description:
      "Coagulante inorgánico de alta carga (típicamente policloruro de aluminio PAC al 18% Al₂O₃) optimizado para tratamiento de aguas industriales con sólidos suspendidos, turbiedad y carga orgánica moderada. Su mecanismo de neutralización de cargas negativas en partículas coloidales permite la formación rápida de microflóculos que luego se aglomeran en flóculos sedimentables. A diferencia del sulfato de aluminio tradicional, el PAC opera en un rango de pH más amplio (5.5-9.0), genera 30-50% menos lodos y consume menos alcalinidad, lo que reduce costos operativos en plantas con efluentes variables.",
    applications: [
      "Tratamiento primario de PTAR industriales (DAF, sedimentación)",
      "Clarificación de aguas de lavado en industria automotriz",
      "Pretratamiento de aguas de proceso en industria alimenticia",
      "Sistemas de DAF (flotación por aire disuelto) en cervecerías",
      "Plantas con variabilidad alta de pH del efluente entrante",
    ],
    notes:
      "Dosis típicas 50-300 ppm. Realice prueba de jarras con muestra real de su efluente para determinar dosis óptima — varía 5x entre plantas similares.",
  },
  "coagulante-organico-liquido": {
    description:
      "Coagulante orgánico catiónico líquido a base de polímeros de poliamina o polidialildimetilamonio (polyDADMAC), formulado para tratamiento de efluentes con alta carga orgánica disuelta o emulsionada (aceites, grasas, surfactantes). A diferencia de los coagulantes inorgánicos, no genera lodos de hidróxido metálico ni eleva el contenido de aluminio o hierro en el efluente tratado, lo que es crítico cuando se requiere reúso de agua o descarga a cuerpos receptores con límites estrictos de metales. Funciona efectivamente en pH neutro (6.5-8.0) sin necesidad de ajuste previo.",
    applications: [
      "Plantas con descarga a cuerpos receptores sensibles (ríos, lagos)",
      "Sistemas de reúso de agua donde se requiere baja salinidad",
      "Tratamiento de emulsiones aceite-agua en metalmecánica",
      "Industrias con regulación estricta de metales en efluente",
      "Combinación con coagulantes inorgánicos en procesos optimizados",
    ],
    notes:
      "Dosis típicas 10-100 ppm. Sobre-dosificación produce inversión de carga y empeora la coagulación. Control estricto de dosis es esencial.",
  },
  "coagulante-alta-carga-cationica": {
    description:
      "Polímero coagulante de alta densidad de carga catiónica (>40% carga cationica equivalente) diseñado para sistemas de flotación por aire disuelto (DAF) y clarificación de alta demanda donde los coagulantes convencionales no logran neutralizar la carga negativa de las partículas dispersas. Su alto peso molecular y densidad de carga producen flóculos compactos y sedimentables incluso con cargas altas de sólidos en suspensión (TSS >2,000 mg/L). Es la elección estándar para industria alimenticia (rastros, procesadoras de aves), refresqueras y cualquier proceso con alta carga orgánica de proteínas, grasas o azúcares.",
    applications: [
      "DAF en procesadoras de carne, aves y mariscos",
      "Tratamiento de efluentes de cervecerías y refresqueras",
      "Clarificación primaria en industria láctea",
      "Plantas con TSS de entrada >1,500 mg/L",
      "Sistemas con carga variable que requiere flexibilidad de dosificación",
    ],
    notes:
      "Producto altamente concentrado. Dilución previa a 0.1-0.5% antes de dosificación es crítica para evitar overdose puntual y bloqueo de bombas.",
  },

  // ══════════════════════════════════════════════
  // FLOCULANTES
  // ══════════════════════════════════════════════
  "floculante-anionico-alto-peso": {
    description:
      "Floculante aniónico de altísimo peso molecular (>15 millones Daltons) basado en poliacrilamida parcialmente hidrolizada. Funciona como auxiliar después del coagulante: una vez que la coagulación ha neutralizado las cargas, el floculante crea puentes moleculares entre los microflóculos formando aglomerados grandes (1-5 mm) que sedimentan rápidamente. Esto reduce los tiempos de retención en sedimentadores y aumenta la calidad del clarificado. Es el complemento estándar para tratamiento físico-químico de efluentes industriales donde la sedimentación gravitacional es el método de separación.",
    applications: [
      "Sedimentación primaria en PTAR industriales",
      "Aglomeración de lodos antes de prensa filtro o centrífuga",
      "Auxiliar de clarificación en industria minera (espesadores)",
      "Tratamiento de aguas de lavado en industria automotriz",
      "Optimización de sedimentadores existentes con baja eficiencia",
    ],
    notes:
      "Requiere preparación previa: disolución lenta en agua de baja dureza durante 30-60 minutos. La solución madre dura 24-48 horas máximo.",
  },

  // ══════════════════════════════════════════════
  // POLIACRILAMIDAS
  // ══════════════════════════════════════════════
  "poliacrilamida-phpa": {
    description:
      "Poliacrilamida parcialmente hidrolizada (PHPA) de alto peso molecular y carga aniónica controlada (15-30% hidrólisis), optimizada para procesos donde el equilibrio entre alcance de puenteo y velocidad de hidratación es crítico. Es la poliacrilamida más versátil del catálogo, compatible con coagulantes inorgánicos (PAC, sulfato de aluminio, cloruro férrico) y orgánicos catiónicos. Se usa ampliamente en separación sólido-líquido en minería, deshidratación de lodos en PTAR municipales e industriales, y como auxiliar en procesos de flotación. Produce lodos con concentración de sólidos 30-50% mayor que floculantes convencionales, reduciendo costos de disposición.",
    applications: [
      "Deshidratación de lodos en prensa filtro y centrífuga decantadora",
      "Espesado de lodos minerales (cobre, zinc, hierro)",
      "Auxiliar de sedimentación en plantas municipales",
      "Floculación en flotación con espumas (minería)",
      "Aglomeración de finos en proceso de potabilización",
    ],
    notes:
      "Sensible a la cizalla. No bombear con bombas de impulsor de alta velocidad — destruyen el peso molecular y pierde efectividad.",
  },
  "poliacrilamida-baja-densidad": {
    description:
      "Poliacrilamida no iónica o de carga ligera para floculación en aguas con baja concentración de sólidos suspendidos (<200 mg/L) y baja conductividad eléctrica. En estas condiciones, las poliacrilamidas aniónicas convencionales tienen rendimiento reducido por falta de cargas para neutralizar. La PAC-L compensa con su alto peso molecular y mecanismo de puenteo no iónico, generando flóculos de tamaño moderado pero suficientes para sedimentación. Aplicación típica: agua de proceso con baja turbidez residual, aguas de enjuague con químicos diluidos, y sistemas de pulido final donde el coagulante ya hizo el trabajo principal.",
    applications: [
      "Pulido final de efluentes ya pretratados con coagulante",
      "Aguas de enjuague de líneas de pintura (baja turbidez)",
      "Sistemas de recirculación con baja carga",
      "Tratamiento terciario en plantas municipales",
      "Aguas de proceso con conductividad <500 µS/cm",
    ],
    notes:
      "No es efectiva en aguas con alta carga orgánica disuelta (DBO >200 mg/L). Para esos casos use PHPA o poliacrilamidas catiónicas.",
  },
  "poliacrilamida-alta-densidad": {
    description:
      "Poliacrilamida catiónica de alta densidad de carga (>50% carga catiónica) y peso molecular medio-alto, diseñada para condicionar lodos biológicos y aguas con alta carga de sólidos orgánicos negativamente cargados. Es el estándar para deshidratación de lodos primarios y secundarios en PTAR industriales y municipales. La alta densidad de carga permite lograr deshidratación efectiva con dosis 30-50% menores que poliacrilamidas de carga baja, reduciendo costos operativos en plantas con alto consumo de polímero. Compatible con prensa de banda, centrífuga decantadora y filtros de tornillo.",
    applications: [
      "Deshidratación de lodos biológicos secundarios en PTAR",
      "Condicionamiento de lodos primarios sedimentados",
      "Plantas con alto consumo de polímero buscando optimización",
      "Sistemas de prensa de banda con lodos difíciles de deshidratar",
      "Tratamiento de lodos de industria alimenticia",
    ],
    notes:
      "Su alta carga catiónica la hace muy sensible a cambios de pH. Operación óptima entre pH 6-8. Fuera de rango la efectividad cae 50%+.",
  },

  // ══════════════════════════════════════════════
  // AGENTES SECUESTRANTES
  // ══════════════════════════════════════════════
  "agente-secuestrante": {
    description:
      "Mezcla de agentes quelantes (fosfonatos, polímeros funcionales) que secuestran cationes divalentes (Ca²⁺, Mg²⁺) y trivalentes (Fe³⁺, Al³⁺) responsables de incrustaciones en sistemas de agua de proceso. Su acción previene la precipitación de carbonatos, sulfatos y silicatos en torres de enfriamiento, calderas, intercambiadores y tuberías de proceso. Reduce la frecuencia de limpieza química, mantiene los coeficientes de transferencia de calor cercanos al diseño y prolonga la vida útil de equipos. Es la línea de defensa estándar contra el ensuciamiento mineral en sistemas de circulación cerrada y recirculación abierta.",
    applications: [
      "Inhibición de escala en torres de enfriamiento abiertas",
      "Tratamiento de calderas pirotubulares y acuotubulares de baja-media presión",
      "Intercambiadores de calor con agua dura (>200 ppm CaCO₃)",
      "Sistemas de circulación cerrada en industria de procesos",
      "Aguas de proceso con tendencia incrustante (Índice de Langelier >0)",
    ],
    notes:
      "La dosificación debe basarse en análisis de agua periódico. Subdosificación causa escala; sobredosificación es desperdicio sin beneficio adicional.",
  },

  // ══════════════════════════════════════════════
  // INHIBIDORES DE OXÍGENO
  // ══════════════════════════════════════════════
  "inhibidor-oxigeno-calderas": {
    description:
      "Eliminador de oxígeno disuelto a base de sulfito de sodio catalizado (con activador de cobalto) o eritorbato de sodio para sistemas grado alimento. El oxígeno disuelto en agua de calderas es la causa #1 de corrosión por picaduras (pitting) en tubería interna y deteriora la vida útil del equipo. Este producto reacciona instantáneamente con el O₂ para formar sulfato no corrosivo. Es complementario al desgasificador térmico (deaerator) — mientras el deaerator remueve la mayor parte del O₂, el inhibidor químico elimina los trazos residuales (típicamente <0.1 ppm). Es esencial en operaciones de calderas de mediana y alta presión.",
    applications: [
      "Calderas pirotubulares con presión >50 psi",
      "Sistemas con desgasificador térmico que requieren pulido químico",
      "Calderas acuotubulares industriales y de cogeneración",
      "Sistemas de vapor para procesos farmacéuticos y alimenticios",
      "Generadores de vapor en hospitales y lavanderías industriales",
    ],
    notes:
      "Para calderas grado alimento o farmacéutico use eritorbato (food-grade), no sulfito. Verifique normativas FDA / NSF aplicables.",
  },

  // ══════════════════════════════════════════════
  // MICROBICIDAS
  // ══════════════════════════════════════════════
  "microbicida-amplio-espectro": {
    description:
      "Biocida no oxidante de amplio espectro a base de isotiazolinonas (CMI/MI) con actividad contra bacterias gram-positivas y negativas, hongos filamentosos, levaduras y algas verdes/azulverdes. Su mecanismo de inhibición de enzimas mitocondriales actúa a dosis bajas (5-50 ppm activo) sin generar cloro libre ni subproductos halogenados. Es la elección estándar para sistemas de enfriamiento donde el biocida oxidante (cloro, bromo) no puede usarse por riesgo de corrosión a equipos sensibles, o como complemento al biocida oxidante en programas de dosificación dual. Compatible con la mayoría de inhibidores y dispersantes.",
    applications: [
      "Torres de enfriamiento con equipos de aluminio o cobre sensibles",
      "Sistemas cerrados de circulación de agua fría/caliente",
      "Aguas de proceso en industria alimenticia (CIP, enjuague)",
      "Biocida secundario en programas duales con cloro",
      "Sistemas con biofilm establecido que requieren penetración",
    ],
    notes:
      "Sensibilizante cutáneo. Use guantes y protección facial al manipular. Dosificación pulsada (shock dosing) es más efectiva que dosis continuas bajas.",
  },

  // ══════════════════════════════════════════════
  // LUBRICANTES ESPECIALIZADOS
  // ══════════════════════════════════════════════
  "lubricantes-sinteticos": {
    description:
      "Lubricantes sintéticos a base de polialfaolefinas (PAO) o ésteres sintéticos para aplicaciones que exceden las capacidades de los aceites minerales convencionales: temperaturas extremas (-40°C a 250°C), cargas elevadas, períodos de servicio prolongados (5,000-10,000 horas) y condiciones de oxidación severa. Su estabilidad térmica y química superior reduce la generación de depósitos, prolonga la vida del lubricante y disminuye el consumo de aceite por degradación. Es la elección obligatoria en compresores de tornillo de alta exigencia, turbinas industriales, reductores de molinos y operaciones donde el costo de paro por falla de lubricante es prohibitivo.",
    applications: [
      "Compresores de aire de tornillo de alto factor de servicio",
      "Reductores de molinos en industria minera y cementera",
      "Turbinas de gas y vapor en cogeneración",
      "Cojinetes de hornos a altas temperaturas (acero, vidrio)",
      "Equipos con períodos de cambio extendidos (>5,000 hrs)",
    ],
    notes:
      "No mezclar con aceites minerales o sintéticos de otra base química — la incompatibilidad genera precipitación de aditivos y degradación acelerada.",
  },
  "lubricante-compresores": {
    description:
      "Aceite específicamente formulado para compresores de tornillo y pistón, con altísima resistencia a la oxidación y formación de barniz/varnish en condiciones de alta temperatura y presión. Su sistema de aditivos antioxidantes (fenólicos y aminas hindradas) extiende la vida del aceite a 4,000-8,000 horas en compresores rotativos de tornillo. La baja tendencia a formar emulsiones (demulsibilidad) facilita la separación de agua condensada, manteniendo limpio el separador. Compatible con elastómeros estándar de compresor (NBR, FKM) y filtros de fibra de vidrio. Disponible en grados ISO VG 32, 46 y 68 según especificación del fabricante.",
    applications: [
      "Compresores de tornillo Atlas Copco, Ingersoll-Rand, Sullair",
      "Compresores de pistón industriales (alta presión)",
      "Sistemas de aire comprimido en líneas de producción 24/7",
      "Compresores en plantas con alta humedad ambiental",
      "Operaciones que requieren extender intervalo de cambio",
    ],
    notes:
      "Verifique la especificación exacta del fabricante (ISO VG, aditivos restringidos). Un aceite de grado incorrecto puede dañar sellos o filtros.",
  },
  "lubricante-metalworking": {
    description:
      "Fluido de corte semisintético soluble en agua que combina la lubricidad de aceites minerales con la refrigeración y limpieza de soluciones acuosas. Contiene aceites parafínicos refinados, surfactantes EP (extreme pressure) y biocidas que mantienen la estabilidad microbiológica del baño durante semanas de operación. Compatible con torneado, fresado, taladrado y rectificado en aceros al carbón, aceros aleados, hierros fundidos y aluminio. Su balance entre lubricidad y refrigeración prolonga la vida de la herramienta de corte 30-50% comparado con emulsiones convencionales y mejora el acabado superficial de la pieza maquinada.",
    applications: [
      "Torneado y fresado CNC en talleres metalmecánicos",
      "Rectificado de precisión con muelas convencionales",
      "Taladrado profundo en aceros y aleaciones",
      "Brochado y operaciones de alta carga",
      "Plantas con producción mixta de aceros y aluminio",
    ],
    notes:
      "Mantenga concentración entre 5-10% (refractómetro Brix). Concentraciones bajas favorecen crecimiento microbiano y oxidación de pieza.",
  },
  "fluido-termico": {
    description:
      "Aceite térmico mineral altamente refinado para sistemas de calentamiento indirecto a temperaturas hasta 300°C en bulk y 320°C film. Ofrece alta capacidad calorífica, baja viscosidad a temperatura de operación y excelente estabilidad térmica frente al cracking que produce coquización en serpentines y depósitos en intercambiadores. Es el medio térmico estándar en industria química, alimenticia (chocolatería, panificación), procesos de plástico (extrusión, inyección de molde) y secado industrial. Su carga inicial puede operar 5-10 años con mantenimiento adecuado y análisis periódico (acidez, viscosidad, agua, contaminantes metálicos).",
    applications: [
      "Sistemas de calentamiento de moldes en inyección de plástico",
      "Hornos de chocolate y procesos de confitería",
      "Reactores químicos con calentamiento indirecto",
      "Líneas de extrusión de plásticos y polímeros",
      "Secadoras industriales y procesos de evaporación",
    ],
    notes:
      "Análisis del aceite cada 12 meses es esencial. Si la acidez (TAN) supera 1.5 mg KOH/g o el agua supera 200 ppm, considerar reemplazo o purificación.",
  },
  "lubricante-grado-alimento": {
    description:
      "Lubricante sintético certificado NSF H1 (registro vigente) para uso en zonas de contacto incidental con alimentos. Su composición libre de aceites minerales, basada en poli alfa olefinas alimenticias y aditivos aprobados FDA 21 CFR 178.3570, garantiza inocuidad en caso de contaminación accidental durante operación. Cumple con HACCP, ISO 22000 y BRC. Es obligatorio en industria alimenticia, farmacéutica, cosmética y empaque primario donde la lubricación de equipo es crítica pero no se admiten lubricantes industriales tradicionales. Disponible en grasas y aceites de varios grados (ISO VG 32 hasta VG 460).",
    applications: [
      "Mezcladoras, moledoras y empacadoras en industria cárnica",
      "Cadenas de transportador en líneas de producción de bebidas",
      "Reductores y motores en industria farmacéutica",
      "Bombas dosificadoras de productos alimenticios",
      "Equipo en plantas con auditorías HACCP/ISO 22000",
    ],
    notes:
      "Verifique que el código NSF H1 esté vigente cada año. Productos vencidos no son aceptados en auditorías y pueden causar no-conformidades mayores.",
  },

  // ══════════════════════════════════════════════
  // GRASAS Y LUBRICANTES
  // ══════════════════════════════════════════════
  "grasas-industriales": {
    description:
      "Línea de grasas multipropósito de litio y litio-complejo formuladas con aceites base seleccionados (parafínicos o sintéticos según grado) y aditivos EP/AW para protección bajo carga. Cubre temperaturas de operación de -20°C a 150°C continuo (litio simple) o -30°C a 180°C (litio-complejo), con NLGI 1, 2 y 3 disponibles. La adherencia mecánica y resistencia al lavado por agua hacen estas grasas ideales para rodamientos, cojinetes lisos y articulaciones expuestas a intemperie. Su consistencia uniforme y bombabilidad permiten dosificación con sistemas centralizados de lubricación.",
    applications: [
      "Rodamientos de motores eléctricos industriales",
      "Cojinetes lisos en maquinaria de construcción",
      "Articulaciones de equipo agrícola e industrial",
      "Sistemas centralizados de lubricación en plantas grandes",
      "Cojinetes en reductores y transmisiones expuestos",
    ],
    notes:
      "No mezclar con grasas de otra base (calcio, sodio, polyurea). Antes de cambiar de grasa, purgue completamente el rodamiento.",
  },
  "anti-aferrante": {
    description:
      "Compuesto anti-aferrante (anti-seize) a base de cobre, níquel o aluminio dispersos en grasa de alta temperatura, formulado para prevenir el agarrotamiento (galling) y soldadura en frío entre piezas roscadas en condiciones extremas: alta temperatura (hasta 1,100°C en cobre), alta presión, vibración y exposición química. Su aplicación en bujes, espárragos, conexiones de tubería y elementos roscados garantiza que la pieza pueda desensamblarse incluso después de meses o años de servicio. Es esencial en mantenimiento de hornos, calderas, turbinas, intercambiadores de calor y equipos de proceso de alta temperatura.",
    applications: [
      "Espárragos de bridas en líneas de vapor y proceso caliente",
      "Bujes de hornos industriales (acero, vidrio, cemento)",
      "Conexiones de turbinas y compresores de gas",
      "Tuercas y pernos de intercambiadores de calor",
      "Bombas de proceso con servicio cíclico térmico",
    ],
    notes:
      "Verifique compatibilidad química con el medio (cobre no se usa en presencia de amoniaco o aminas; níquel para aplicaciones nucleares).",
  },
  "desmoldante-industrial": {
    description:
      "Agente desmoldante en aerosol o líquido para moldes metálicos (acero H13, aluminio) y de plástico (epóxico, silicón) en operaciones de inyección, compresión y termoformado. Su composición de ceras emulsionables o silicones diluidos forma una película delgada (5-15 micras) que facilita la separación pieza-molde sin transferencia significativa al producto final ni acumulación en el molde. La fácil limpieza con desengrasante estándar es ventaja clave frente a desmoldantes de silicón puro que requieren solventes especiales. Disponible en versión grado-alimento NSF para aplicaciones críticas.",
    applications: [
      "Inyección de plásticos termoplásticos (PP, ABS, PC, PA)",
      "Moldeo de hule y elastómeros termofijos",
      "Termoformado de empaques alimenticios",
      "Moldeo de partes en composites de fibra de vidrio",
      "Operaciones de fundición a presión de aluminio y zinc",
    ],
    notes:
      "Aplicación excesiva genera defectos superficiales (mottling, manchas). Use solo la cantidad necesaria para una capa delgada uniforme.",
  },

  // ══════════════════════════════════════════════
  // LUBRICANTES FORMATO ESPECIAL
  // ══════════════════════════════════════════════
  "lubricantes-transportadores-conveyor": {
    description:
      "Lubricante adherente especialmente formulado para cadenas y guías de sistemas transportadores en industria alimenticia y empaque. Su alta viscosidad y aditivos de adhesión mantienen la película de lubricación en contacto con la cadena durante toda la operación, resistiendo el lavado por aspersión de agua, líquidos de producto y limpieza CIP. Disponible en versión grado alimento NSF H1 para zonas de contacto incidental. Reduce la fricción metal-metal en eslabones y guías un 40-60% comparado con grasas convencionales, prolongando la vida de la cadena y reduciendo consumo eléctrico del motor del transportador.",
    applications: [
      "Cadenas de transporte en cervecerías y refresqueras",
      "Guías de carga en líneas de empaque y embalaje",
      "Transportadores en pasteurizadores y túneles de enfriamiento",
      "Líneas de horneado y enfriamiento en panadería industrial",
      "Cadenas en plantas con limpieza CIP frecuente",
    ],
    notes:
      "Versión NSF H1 obligatoria en industria alimenticia. La versión industrial estándar manchaba el producto en pruebas de transferencia.",
  },
  "lubricantes-cadenas": {
    description:
      "Lubricante específico para cadenas industriales (de rodillos, de transmisión, de transportador) con aditivos de adherencia y resistencia a la proyección que mantienen la lubricación en condiciones de alta velocidad y vibración. Su viscosidad balanceada permite penetración inicial entre los pines y bujes de la cadena (donde reside el desgaste real) y luego se espesa por evaporación del solvente portador, formando una película protectora resistente al desplazamiento. Aplicación por aspersión, brocha o sistema automático de goteo. Reduce desgaste de cadena, ruido y consumo eléctrico del sistema motriz.",
    applications: [
      "Cadenas de transmisión en motores y reductores industriales",
      "Cadenas de transportador en industria automotriz y manufactura",
      "Maquinaria agrícola (segadoras, empacadoras, tractores)",
      "Equipo de minería con cadenas expuestas a polvo",
      "Sistemas con cadenas operando a alta velocidad (>5 m/s)",
    ],
    notes:
      "La aplicación correcta es DENTRO de los pines de la cadena, no por fuera. Lubricante en superficie externa solo atrapa polvo.",
  },
  "lubricantes-aerosol": {
    description:
      "Lubricante multiusos en aerosol con efecto penetrante, antioxidante y desplazador de humedad (W&D - water displacement). Su mezcla de aceites minerales ligeros, solventes y inhibidores de corrosión llega a puntos de difícil acceso (roscas oxidadas, mecanismos internos, juntas atrapadas) y proporciona lubricación temporal mientras protege contra corrosión. Es el caballo de batalla del taller de mantenimiento: afloja tornillos pegados, libera mecanismos seizados, lubrica bisagras y previene oxidación en herramientas y equipos de almacén. Disponible en versión convencional y grado alimento NSF H1.",
    applications: [
      "Mantenimiento general en taller (afloje de mecanismos, lubricación rápida)",
      "Liberación de tornillos y tuercas oxidadas",
      "Protección anticorrosiva temporal en herramientas y equipos",
      "Lubricación de bisagras, candados y mecanismos pequeños",
      "Desplazamiento de humedad en sistemas eléctricos no energizados",
    ],
    notes:
      "El efecto lubricante es temporal (días a semanas). No sustituye a un lubricante específico para aplicaciones de servicio continuo.",
  },
  "lubricante-engranes-abiertos": {
    description:
      "Lubricante de altísima viscosidad y adherencia para engranes abiertos expuestos a la intemperie en aplicaciones de cargas extremas: molinos de bola en minería, hornos rotatorios cementeros, engranes de grúas y maquinaria pesada. Su composición con polímeros adherentes y aditivos EP de carga extrema (boro, fósforo, azufre) forma una película tenaz que resiste impactos, presión específica >500 MPa y desplazamiento por la rotación de los engranes. Aplicación periódica con sistemas automáticos de aspersión o cubetas de inmersión parcial.",
    applications: [
      "Engranes de molinos de bola en industria minera",
      "Coronas y piñones de hornos rotatorios cementeros",
      "Engranes abiertos de grúas y maquinaria portuaria",
      "Coronas dentadas de mezcladoras y secadoras industriales",
      "Aplicaciones con engranes expuestos a polvo abrasivo",
    ],
    notes:
      "Su altísima viscosidad requiere calentamiento (40-60°C) para aplicación. Sistemas automatizados deben tener tubería calentada o uso de spray neumático.",
  },

  // ══════════════════════════════════════════════
  // ACEITES GENERALES
  // ══════════════════════════════════════════════
  "aceites-hidraulicos": {
    description:
      "Aceite hidráulico antidesgaste formulado con base parafínica refinada y paquete de aditivos zinc-DTP (ZDDP) o zinc-free según aplicación. Cumple las especificaciones DIN 51524 Parte 2 (HLP) para sistemas hidráulicos industriales operando a presiones medias-altas (200-350 bar). Su balance de aditivos antiespumantes, demulsificadores y antioxidantes mantiene la estabilidad del aceite durante 4,000-8,000 horas de servicio en sistemas bien filtrados. Disponible en grados ISO VG 22, 32, 46, 68 y 100. La selección del grado depende de la temperatura de operación y especificación del fabricante de la bomba hidráulica.",
    applications: [
      "Sistemas hidráulicos industriales (prensas, inyectoras, máquinas-herramienta)",
      "Equipo de construcción (excavadoras, retroexcavadoras, cargadores)",
      "Maquinaria agrícola con sistema hidráulico integrado",
      "Sistemas hidráulicos de servicio severo (alta temperatura)",
      "Bombas de pistón axial, paletas y engranes",
    ],
    notes:
      "Filtrado a 10 micras absoluto es esencial. Contaminación con partículas >25 micras causa desgaste acelerado en bombas de pistón.",
  },
  "aceites-motor": {
    description:
      "Aceite multigrado para motores de combustión interna (diesel y gasolina) en equipos y maquinaria industrial: generadores eléctricos, compresores reciprocantes, montacargas, vehículos de planta y equipo móvil. Disponible en grados SAE 15W-40, 20W-50 (diesel) y 5W-30, 10W-40 (gasolina) con niveles de servicio API CK-4/SN o superiores. Su sistema de aditivos detergentes-dispersantes mantiene limpios los aros y áreas críticas del motor, mientras que los aditivos antioxidantes y antidesgaste extienden la vida útil del motor. Cumple especificaciones de fabricantes principales (Cummins, Caterpillar, Detroit Diesel).",
    applications: [
      "Generadores eléctricos diesel de respaldo y producción",
      "Compresores de aire reciprocantes a diesel o gas natural",
      "Montacargas a combustión interna (diesel, GLP)",
      "Vehículos industriales en planta (camiones de patio, tractores)",
      "Equipo móvil de construcción (excavadoras, cargadores)",
    ],
    notes:
      "El cambio debe seguir el manual del fabricante (típicamente 250-500 horas). Análisis de aceite extendido permite intervalos de hasta 750 horas.",
  },
  "aceite-turbina": {
    description:
      "Aceite de turbina con altísima estabilidad oxidativa y separación rápida de agua (demulsibilidad) para uso en turbinas de vapor, gas y sistemas de generación eléctrica. Cumple normas DIN 51515 Parte 1/2 (TD/TG) y especificaciones de fabricantes principales (GE, Siemens, Mitsubishi). Su vida útil esperada es de 30,000-100,000 horas con análisis periódico y mantenimiento adecuado del sistema de filtración. Disponible en ISO VG 32 y 46 según el modelo de turbina. La extrema pureza de su base y la dosificación precisa de aditivos previenen formación de varnish/barniz que causa pegado de válvulas reguladoras.",
    applications: [
      "Turbinas de vapor en plantas de cogeneración industrial",
      "Turbinas de gas en generación eléctrica de respaldo",
      "Compresores centrífugos en industria petroquímica",
      "Sistemas de lubricación combinada turbina-reductor-generador",
      "Plantas con monitoreo continuo de calidad del aceite",
    ],
    notes:
      "Análisis trimestral incluyendo número de barniz (MPC) es esencial. MPC >30 indica formación de depósitos y necesidad de purificación o reemplazo.",
  },
  "aceite-engranes": {
    description:
      "Aceite EP (Extreme Pressure) para cajas de engranes industriales bajo cargas severas: reductores helicoidales, sin-fin, planetarios y cónicos. Cumple especificación AGMA 9005 EP/EOR y DIN 51517 Parte 3 (CLP). Sus aditivos EP de azufre-fósforo activan bajo presión y formación de microsoldaduras en flancos de dientes, formando una película de sacrificio que protege la geometría del diente. Esto extiende la vida del reductor 2-5x comparado con aceites no-EP en aplicaciones de carga alta. Disponible en grados ISO VG 100, 150, 220, 320, 460 y 680 según velocidad de salida y temperatura.",
    applications: [
      "Reductores de transmisión en industria minera y siderurgia",
      "Cajas de engranes en agitadores de tanques y mezcladoras",
      "Reductores de molinos en cementeras y plantas químicas",
      "Engranes en bombas y compresores de proceso",
      "Aplicaciones con choques de carga (impactos, arranques bajo carga)",
    ],
    notes:
      "No usar en reductores con bronce sin verificar compatibilidad. Aditivos EP agresivos pueden causar corrosión en metales no-ferrosos.",
  },

  // ══════════════════════════════════════════════
  // MATERIAS PRIMAS — ÁCIDOS Y BASES
  // ══════════════════════════════════════════════
  "acido-citrico": {
    description:
      "Ácido cítrico anhidro de alta pureza (>99.5%) en presentación cristalina o monohidrato. Su origen natural por fermentación lo hace la elección preferida cuando se requiere un ácido orgánico biodegradable, no tóxico y compatible con grado alimento. Aplicaciones químicas industriales incluyen desincrustante de calderas y intercambiadores (alternativa al HCl en sistemas con acero inoxidable), pasivación de aceros inoxidables (ASTM A967 método citric), ajuste de pH en formulaciones, y agente quelante de metales en limpieza de equipos. Su ventaja sobre ácidos minerales es la ausencia de halogenuros que generen corrosión por picaduras.",
    applications: [
      "Pasivación de aceros inoxidables 304, 316 (ASTM A967)",
      "Limpieza química de calderas y intercambiadores con inox",
      "Agente quelante en formulaciones de limpieza CIP industrial",
      "Ajuste de pH en procesos químicos y formulaciones",
      "Desincrustante para industria alimenticia y farmacéutica",
    ],
    notes:
      "Más caro por unidad de acidez que ácidos minerales, pero su perfil ambiental y compatibilidad lo justifican en aplicaciones críticas.",
  },
  "acido-nitrico": {
    description:
      "Ácido nítrico industrial al 65-68% para aplicaciones de pasivación de acero inoxidable (ASTM A967 método nitric), grabado químico, síntesis de nitratos y procesos de digestión química. Es el agente pasivante histórico para inox 304, 316 y 17-4 PH, generando una capa de óxido de cromo enriquecida que protege contra corrosión por picaduras. Su acción oxidante también limpia hierro libre superficial transferido durante mecanizado o soldadura. Comparado con citric, ofrece mayor velocidad de pasivación pero requiere mayor cuidado por la generación de vapores NOx tóxicos.",
    applications: [
      "Pasivación de aceros inoxidables en industria farmacéutica",
      "Limpieza y pasivación de tanques y tubería sanitaria",
      "Grabado químico de aceros (preparación metalográfica)",
      "Producción de nitratos para industria química",
      "Digestión química de muestras analíticas",
    ],
    notes:
      "Genera vapores NOx altamente tóxicos durante reacción. Ventilación forzada y EPP respiratorio son obligatorios. Considere ácido cítrico cuando sea técnicamente viable.",
  },
  "acido-clorhidrico": {
    description:
      "Ácido clorhídrico industrial al 31-33% (también conocido como ácido muriático) para aplicaciones de decapado de acero al carbón, ajuste de pH en plantas de tratamiento de agua, regeneración de resinas catiónicas en intercambiadores iónicos, y procesos químicos diversos. Es el ácido más económico por unidad de acidez y el más usado en decapado de barras, alambre y fleje de acero antes de galvanizado o estirado. Su acción rápida y eficacia frente a óxido pesado lo hacen indispensable en plantas siderúrgicas. Disponible en grados técnico, comercial y ACS (analítico).",
    applications: [
      "Decapado de barras y alambre de acero antes de galvanizado",
      "Ajuste de pH en PTAR industriales y municipales",
      "Regeneración de resinas catiónicas en suavizadores de agua",
      "Limpieza química de equipos con incrustaciones calcáreas",
      "Procesos de la industria química (cloruros, síntesis)",
    ],
    notes:
      "Genera vapores HCl altamente corrosivos. NO usar en presencia de aceros inoxidables o aluminio sin inhibidor — causa picaduras severas en minutos.",
  },
  "acido-fosforico": {
    description:
      "Ácido fosfórico industrial al 75-85% (grado técnico) para aplicaciones de fosfatado de metales, limpieza de aceros con conversión química ligera, ajuste de pH y procesos químicos. Es la materia prima base para formulación de productos de fosfatado de hierro y zinc, y se usa directamente en limpiadores ácidos para acero al carbón donde se desea limpiar y acondicionar la superficie en una operación. Su acción más controlada que el HCl lo hace preferible en aplicaciones donde se requiere precisión sin riesgo de sobrelimpieza. Compatible con la mayoría de equipos de polipropileno, PVC y acero inoxidable diluido.",
    applications: [
      "Materia prima para formulación de fosfatos de hierro y zinc",
      "Limpieza ácida de acero al carbón con conversión química",
      "Ajuste de pH en PTAR y procesos químicos",
      "Tratamiento ácido de aguas en torres de enfriamiento",
      "Limpieza de equipos con escala mineral fosfatada",
    ],
    notes:
      "El producto técnico contiene impurezas (Fe, As, Pb). Para aplicaciones farmacéuticas, alimenticias o electrónicas use grado food/USP/electronic.",
  },
  "sosa-caustica-escamas": {
    description:
      "Hidróxido de sodio (NaOH) en escamas de alta pureza (>99%) para formulación de limpiadores alcalinos, neutralización de ácidos en plantas de tratamiento, regeneración de resinas aniónicas en intercambiadores iónicos, saponificación de grasas y procesos químicos diversos. Su formato sólido es ideal para almacenamiento de largo plazo (sin pérdida por evaporación), transporte económico (90%+ de concentración vs 50% en líquido) y dosificación precisa cuando se requiere. Se disuelve completamente en agua con liberación significativa de calor (reacción exotérmica), lo que requiere precaución durante preparación.",
    applications: [
      "Formulación de limpiadores alcalinos industriales",
      "Neutralización de ácidos en PTAR (con dosificador)",
      "Regeneración de resinas aniónicas en desmineralizadores",
      "Saponificación de grasas en industria de jabones y oleoquímica",
      "Tratamiento de aguas para ajuste de pH y alcalinidad",
    ],
    notes:
      "Almacenar en envase sellado en zona seca. Absorbe humedad del aire (higroscópico) y CO₂ formando carbonatos que reducen su efectividad alcalina.",
  },
  "sosa-al-50": {
    description:
      "Solución de hidróxido de sodio al 50% en peso, lista para dosificación directa en procesos industriales sin necesidad de preparación. Es la presentación preferida cuando se requiere alimentación continua a sistemas de neutralización, plantas de tratamiento de aguas, regeneración de resinas o procesos químicos. La solución 50% se mantiene líquida hasta -7°C, por lo que en climas templados (como Monterrey) no requiere calentamiento. Disponible a granel en pipa, en porrón de 50 kg o en tote de 1,000 kg. Reduce los riesgos asociados a manejo de sosa sólida (polvo cáustico, reacción exotérmica de disolución).",
    applications: [
      "Dosificación continua a sistemas de neutralización en PTAR",
      "Alimentación a torres de absorción de gases ácidos",
      "Regeneración automática de resinas aniónicas",
      "Producción de detergentes y limpiadores líquidos",
      "Procesos químicos con alimentación de sosa controlada por pH",
    ],
    notes:
      "Por debajo de 12°C cristaliza parcialmente. Si se almacena en exterior en climas fríos, considere calentamiento del tote o cambio a versión 32%.",
  },
  "hipoclorito-sodio": {
    description:
      "Hipoclorito de sodio al 13% (cloro activo aproximadamente 12%) para desinfección, blanqueo y control microbiológico en procesos industriales. Es el oxidante más usado en tratamiento de agua potable, control biológico en torres de enfriamiento, desinfección de equipo en industria alimenticia y blanqueo de fibras textiles. Su acción rápida elimina bacterias gram-positivas y negativas, virus y biofilms en minutos a concentraciones de 1-10 ppm de cloro libre. Disponible a granel y en presentaciones menores. La concentración decae con el tiempo (5-10% mensual a temperatura ambiente), por lo que es preferible compra justo a tiempo.",
    applications: [
      "Cloración de agua potable en plantas potabilizadoras",
      "Control microbiológico en torres de enfriamiento",
      "Desinfección de superficies y equipo en industria alimenticia",
      "Blanqueo de fibras textiles y pulpa de papel",
      "Oxidación de compuestos orgánicos en aguas residuales",
    ],
    notes:
      "Genera gas cloro tóxico al mezclarse con ácidos. NUNCA mezclar con productos ácidos (HCl, ácido muriático, limpiadores ácidos). Almacenar separado.",
  },

  // ══════════════════════════════════════════════
  // ADITIVOS PARA LUBRICANTES (línea BTA)
  // ══════════════════════════════════════════════
  "bta-2000-diesel-cf-cg4": {
    description:
      "Paquete de aditivos multifuncional para formular aceites de motor a Diesel con nivel de servicio API CF/CG-4. Combina detergentes metálicos, dispersantes sin ceniza, aditivos antidesgaste y antioxidantes balanceados para motores Diesel de aspiración natural y turbo de generación anterior. Aporta la reserva alcalina (TBN) necesaria para neutralizar los ácidos de la combustión de diésel con azufre, además de controlar la formación de depósitos en pistones y el espesamiento por hollín. Se dosifica sobre aceite base grupo I o II en la proporción indicada en ficha técnica para alcanzar la especificación objetivo en monogrados y multigrados como 15W-40.",
    applications: [
      "Formulación de aceite de motor a Diesel API CF-4 / CG-4",
      "Aceites para flotillas de transporte y maquinaria de generación anterior",
      "Lubricantes para motores Diesel agrícolas y de construcción",
      "Producción de multigrados 15W-40 y 20W-50 para servicio pesado",
    ],
    notes:
      "Para motores Diesel modernos con postratamiento (DPF/SCR) use un paquete de bajo contenido de cenizas (CJ-4 o CK-4 Plus). Verifique el aceite base y el tratamiento en ficha técnica.",
  },
  "bta-2000p-diesel-ci4-plus": {
    description:
      "Paquete de aditivos de alto desempeño para formular aceites de motor a Diesel con nivel de servicio API CI-4 Plus. Diseñado para motores Diesel con recirculación de gases de escape (EGR), incorpora un sistema de dispersancia reforzado que controla el espesamiento por hollín — el principal reto de los motores con EGR — junto con detergencia, protección antidesgaste y estabilidad ante oxidación. Su balance de TBN y química de dispersión permite intervalos de drenaje extendidos. Se dosifica sobre aceite base grupo II para producir multigrados de servicio pesado como 15W-40 que cumplen las exigencias de flotillas modernas.",
    applications: [
      "Formulación de aceite de motor a Diesel API CI-4 Plus",
      "Aceites para motores con recirculación de gases (EGR)",
      "Lubricantes de servicio pesado con intervalos de drenaje extendidos",
      "Producción de 15W-40 premium para transporte de carga",
    ],
    notes:
      "El control de hollín es su fortaleza principal. Para motores con filtro de partículas (DPF) considere un CK-4 Plus de menor ceniza sulfatada.",
  },
  "bta-2000p1-diesel-ck4-plus": {
    description:
      "Paquete de aditivos de última generación para formular aceites de motor a Diesel con nivel de servicio API CK-4 Plus. Formulado para motores Diesel modernos compatibles con sistemas de postratamiento (DPF/SCR), ofrece mayor resistencia a la oxidación, mejor estabilidad al corte y protección superior contra el desgaste frente a categorías anteriores, con bajo contenido de cenizas sulfatadas, fósforo y azufre (low SAPS). Mantiene compatibilidad retroactiva con especificaciones CJ-4 y CI-4 Plus. Se dosifica sobre aceite base grupo II o III para producir multigrados modernos como 15W-40 y 10W-30 de alto desempeño para flotillas actuales.",
    applications: [
      "Formulación de aceite de motor a Diesel API CK-4 Plus",
      "Aceites para motores Diesel modernos con DPF/SCR",
      "Lubricantes low-SAPS para flotillas de última generación",
      "Producción de 10W-30 y 15W-40 de servicio pesado premium",
    ],
    notes:
      "Comparte SKU con la variante CJ-4 Plus; confirme la especificación exacta requerida al cotizar. Compatible hacia atrás con CJ-4 y CI-4 Plus.",
  },
  "bta-2000p1-diesel-cj4-plus": {
    description:
      "Paquete de aditivos para formular aceites de motor a Diesel con nivel de servicio API CJ-4 Plus, orientado a motores de servicio pesado compatibles con sistemas de tratamiento de gases de escape. Incorpora química de bajo contenido de cenizas sulfatadas (low SAPS) que protege el filtro de partículas Diesel (DPF), junto con detergencia, dispersancia de hollín y protección antidesgaste para motores con EGR. Aporta la estabilidad térmica y oxidativa necesaria para intervalos de servicio prolongados. Se dosifica sobre aceite base grupo II para producir multigrados 15W-40 que cumplen los requisitos de motores Diesel modernos previos a la categoría CK-4.",
    applications: [
      "Formulación de aceite de motor a Diesel API CJ-4 Plus",
      "Aceites low-SAPS compatibles con filtro de partículas (DPF)",
      "Lubricantes para motores con EGR y SCR",
      "Producción de 15W-40 de servicio pesado con protección de postratamiento",
    ],
    notes:
      "Comparte SKU con la variante CK-4 Plus; confirme la especificación exacta al cotizar. CK-4 es la categoría más reciente y puede sustituir a CJ-4 en la mayoría de aplicaciones.",
  },
  "bta-2010-gasolina": {
    description:
      "Paquete de aditivos multifuncional para formular aceites de motor a gasolina de ciclo Otto. Combina detergentes, dispersantes, aditivos antidesgaste (ZDDP) y antioxidantes que mantienen limpios los anillos y pistones, controlan la formación de lodos a baja temperatura y protegen contra el desgaste de árbol de levas y buzos. Diseñado para motores de vehículos ligeros a gasolina, se dosifica sobre aceite base grupo I o II para producir monogrados y multigrados como 20W-50 y 25W-60. Su balance de detergencia y dispersancia lo hace adecuado para el mercado de servicio y reposición.",
    applications: [
      "Formulación de aceite de motor a gasolina para vehículos ligeros",
      "Producción de multigrados 20W-50 y 25W-60 de reposición",
      "Aceites para el mercado de servicio automotriz general",
      "Lubricantes para motores a gasolina de aspiración natural",
    ],
    notes:
      "Para niveles de servicio API SL o superiores (SM-SN) use el paquete correspondiente (BTA-2010-S o BTA-2091), que aportan mayor protección contra depósitos y compatibilidad con catalizador.",
  },
  "bta-2010s-gasolina-sl": {
    description:
      "Paquete de aditivos para formular aceites de motor a gasolina con nivel de servicio API SL. Ofrece mayor protección contra depósitos a alta temperatura, control de lodos y resistencia a la oxidación que las categorías básicas, con niveles de fósforo compatibles con convertidores catalíticos. Su sistema detergente-dispersante mantiene la limpieza del motor bajo condiciones de manejo severo (stop-and-go, altas temperaturas). Se dosifica sobre aceite base grupo II para producir multigrados modernos como 10W-30 y 5W-30 que cumplen los requisitos de motores a gasolina de vehículos más recientes.",
    applications: [
      "Formulación de aceite de motor a gasolina API SL",
      "Producción de multigrados 10W-30 y 5W-30",
      "Aceites para motores a gasolina con convertidor catalítico",
      "Lubricantes para manejo severo urbano (stop-and-go)",
    ],
    notes:
      "Para las especificaciones más recientes (SM-SN) con mayor economía de combustible y protección, considere el BTA-2091.",
  },
  "bta-2091-gasolina-sm-sn": {
    description:
      "Paquete de aditivos de alto desempeño para elaborar aceites de motor a gasolina con niveles de servicio API SM y SN. Formulado con química de última generación para vehículos modernos: mayor protección contra depósitos en turbocargadores, control de LSPI (pre-encendido a baja velocidad) en motores turbo de inyección directa, protección de sistemas de emisiones y compatibilidad con biocombustibles. Su balance de fósforo protege el catalizador. Se dosifica sobre aceite base grupo II o III para producir multigrados de baja viscosidad como 5W-30 y 5W-20 orientados a economía de combustible y protección de motores actuales.",
    applications: [
      "Formulación de aceite de motor a gasolina API SM / SN",
      "Producción de multigrados de baja viscosidad 5W-30 y 5W-20",
      "Aceites para motores turbo de inyección directa (protección LSPI)",
      "Lubricantes para vehículos modernos con sistemas de emisiones",
    ],
    notes:
      "Para grados de muy baja viscosidad (0W-20) verifique la selección de aceite base sintético y la dosificación de mejorador de índice de viscosidad.",
  },
  "bta-2095-diesel-cj4": {
    description:
      "Paquete de aditivos multifuncional para elaborar aceites de motor a Diesel con nivel de servicio API CJ-4. Diseñado para motores Diesel de servicio pesado con bajo contenido de cenizas sulfatadas (low SAPS), protege los sistemas de postratamiento de gases (DPF) mientras controla el hollín, los depósitos y el desgaste en motores con EGR. Aporta la reserva alcalina y la estabilidad oxidativa para intervalos de servicio prolongados en flotillas de transporte. Se dosifica sobre aceite base grupo II para producir multigrados 15W-40 que cumplen los requisitos de motores Diesel modernos de camión y maquinaria.",
    applications: [
      "Formulación de aceite de motor a Diesel API CJ-4",
      "Aceites low-SAPS para motores con filtro de partículas",
      "Lubricantes de servicio pesado para transporte de carga",
      "Producción de 15W-40 para flotillas Diesel modernas",
    ],
    notes:
      "CK-4 es la categoría más reciente y ofrece mejor estabilidad al corte y oxidación; considérela para las flotillas más nuevas.",
  },
  "bta-2105-gas": {
    description:
      "Paquete de aditivos multifuncional para elaborar aceites de motor a gas natural (GNC/GNV) y gas LP. Los motores a gas operan en condiciones distintas a los de gasolina o diésel: combustión más limpia pero con mayor tendencia a la nitración del aceite y necesidad de control preciso de cenizas para proteger válvulas y bujías. Este paquete balancea la reserva alcalina, la resistencia a la nitración y el contenido de cenizas para maximizar la vida del aceite y del motor. Se dosifica sobre aceite base grupo II para producir lubricantes específicos para motores estacionarios y vehiculares a gas.",
    applications: [
      "Formulación de aceite para motores a gas natural (GNC/GNV)",
      "Lubricantes para motores estacionarios de generación a gas",
      "Aceites para flotillas convertidas a gas LP",
      "Producción de lubricantes con control de cenizas para motores a gas",
    ],
    notes:
      "El contenido de cenizas debe ajustarse al tipo de motor a gas (estacionario vs vehicular). Consulte la especificación del fabricante del motor.",
  },
  "bta-2001-transmision-automatica": {
    description:
      "Paquete de aditivos para formular fluidos de transmisión automática (ATF). Su característica distintiva es un sistema de modificación de fricción preciso que garantiza el desempeño correcto de los embragues y bandas de la transmisión: fricción suficiente para transmitir par sin patinar, pero controlada para cambios suaves. Incluye además protección antidesgaste de engranes planetarios, estabilidad térmica y oxidativa para soportar las altas temperaturas del convertidor de par, y protección contra la formación de depósitos. Se dosifica sobre aceite base para producir ATF que cumplen especificaciones tipo Dexron y Mercon del mercado de reposición.",
    applications: [
      "Formulación de fluido de transmisión automática (ATF)",
      "Fluidos tipo Dexron / Mercon para reposición",
      "Aceites para convertidores de par y transmisiones planetarias",
      "Lubricantes para servodirección hidráulica",
    ],
    notes:
      "La química de fricción es específica por especificación OEM. Verifique el requisito exacto (Dexron III/VI, Mercon, etc.) antes de formular.",
  },
  "bta-2002-fluidos-tractor": {
    description:
      "Paquete de aditivos para formular fluidos universales de tractor (UTTO/STOU) que lubrican simultáneamente la transmisión, el sistema hidráulico y los frenos húmedos de la maquinaria agrícola. El principal reto de estos fluidos es balancear la modificación de fricción para que los frenos húmedos no rechinen ni patinen, manteniendo a la vez protección de engranes de extrema presión y desempeño hidráulico. Este paquete integra esas funciones en un solo fluido, simplificando el inventario del usuario final. Se dosifica sobre aceite base para producir fluidos que cumplen las especificaciones de los principales fabricantes de tractores.",
    applications: [
      "Formulación de fluido universal de tractor (UTTO)",
      "Fluidos STOU que incluyen también el motor",
      "Lubricantes para transmisión, hidráulico y frenos húmedos de tractor",
      "Aceites para maquinaria agrícola de uso múltiple",
    ],
    notes:
      "El desempeño de frenos húmedos (anti-chatter) es crítico. Valide la formulación contra la especificación del fabricante del tractor objetivo.",
  },
  "bta-2004-hidraulicos": {
    description:
      "Paquete de aditivos multifuncional para formular fluidos hidráulicos antidesgaste (AW). Combina aditivos antidesgaste a base de zinc (ZDDP), inhibidores de oxidación y corrosión, antiespumantes y aditivos de demulsibilidad que protegen bombas de paletas, engranes y pistones bajo alta presión. Controla la formación de espuma que interferiría con la transmisión de potencia y separa el agua contaminante para proteger el sistema. Se dosifica en baja proporción sobre aceite base grupo I o II para producir hidráulicos ISO VG 32, 46 y 68 que cumplen las especificaciones de fabricantes de bombas como Vickers, Denison y Eaton.",
    applications: [
      "Formulación de fluido hidráulico antidesgaste (AW) ISO VG 32/46/68",
      "Aceites para sistemas hidráulicos industriales y móviles",
      "Lubricantes para bombas de paletas, engranes y pistones",
      "Fluidos para prensas, inyectoras y maquinaria hidráulica",
    ],
    notes:
      "Para sistemas con filtración muy fina o requisitos ambientales, considere el paquete sin cenizas (BTA-2005).",
  },
  "bta-2005-hidraulicos-sin-cenizas": {
    description:
      "Paquete de aditivos multifuncional para formular fluidos hidráulicos sin cenizas (ashless). A diferencia de los hidráulicos AW convencionales basados en zinc, este paquete usa química antidesgaste libre de metales, lo que evita los problemas de taponamiento de filtros finos, la formación de lodos en presencia de agua y los efectos sobre metales amarillos. Ofrece protección antidesgaste, antioxidante y anticorrosiva con demulsibilidad y control de espuma. Es la opción para sistemas hidráulicos de alta precisión, aplicaciones con requisitos ambientales o equipos donde el zinc del ZDDP resulta problemático. Se dosifica sobre aceite base para producir hidráulicos ISO VG estándar libres de cenizas.",
    applications: [
      "Formulación de hidráulico sin cenizas (ashless) ISO VG 32/46/68",
      "Fluidos para sistemas con filtración de alta precisión",
      "Aceites hidráulicos con requisitos ambientales",
      "Lubricantes para equipos sensibles al zinc (metales amarillos)",
    ],
    notes:
      "La química sin cenizas evita el taponamiento de filtros finos. Verifique la compatibilidad de sellos con el aceite base seleccionado.",
  },
  "bta-2035-to4-allison-c4": {
    description:
      "Paquete de aditivos para elaborar aceites de transmisión powershift y mando final tipo TO-4 (Caterpillar) y Allison C-4. Estos aceites requieren una fricción cuidadosamente especificada para el desempeño correcto de embragues de disco húmedo, frenos y convertidores de par en maquinaria pesada de construcción y minería. El paquete aporta esa química de fricción, junto con protección de extrema presión para engranes, estabilidad térmica y protección antidesgaste. Se dosifica sobre aceite base en distintos grados de viscosidad (SAE 10, 30, 50) según la aplicación del equipo pesado objetivo.",
    applications: [
      "Formulación de aceite TO-4 / Allison C-4 para maquinaria pesada",
      "Fluidos para transmisiones powershift y convertidores de par",
      "Aceites para mandos finales y frenos húmedos de equipo minero",
      "Lubricantes SAE 10/30/50 para construcción y minería",
    ],
    notes:
      "La fricción es específica de la especificación TO-4 / C-4. No sustituir por ATF, cuya química de fricción es distinta y haría patinar los embragues.",
  },
  "bta-2006-corte-no-manchante": {
    description:
      "Paquete de aditivos multifuncional para formular aceites de corte íntegros (straight) no manchantes. Aporta lubricación de extrema presión para operaciones de maquinado exigentes — brochado, roscado, rectificado, embutido — con química de azufre inactivo que no mancha ni corroe los metales no ferrosos (cobre, latón, aluminio) de la pieza trabajada. Incluye aditivos de lubricidad, antioxidantes y protección anticorrosiva. Se dosifica sobre aceite base de baja viscosidad para producir aceites de corte que mejoran el acabado superficial, extienden la vida de la herramienta y permiten mayores velocidades de corte sin manchar la pieza.",
    applications: [
      "Formulación de aceite de corte íntegro (straight) no manchante",
      "Lubricantes para brochado, roscado y rectificado",
      "Aceites de maquinado para piezas de latón, cobre y aluminio",
      "Fluidos de corte para operaciones de alta exigencia",
    ],
    notes:
      "El azufre inactivo evita manchar metales amarillos. Para máxima capacidad EP en acero donde el manchado no importa, existen químicas de azufre activo.",
  },
  "bta-2006sa-corte-no-manchante": {
    description:
      "Variante SA del paquete de aditivos para formular aceites de corte no manchantes, formulada para operaciones de maquinado de mayor severidad. Aporta un nivel reforzado de lubricación de extrema presión manteniendo la característica no manchante sobre metales no ferrosos. Es adecuado para materiales difíciles de maquinar y operaciones con altas cargas de contacto donde el paquete estándar resulta insuficiente. Incluye aditivos de lubricidad, antioxidantes y anticorrosivos. Se dosifica sobre aceite base para producir aceites de corte íntegros de alto desempeño que protegen la herramienta y mejoran el acabado en aplicaciones exigentes.",
    applications: [
      "Formulación de aceite de corte no manchante de alta severidad",
      "Lubricantes para maquinado de materiales difíciles",
      "Aceites de corte para operaciones de alta carga de contacto",
      "Fluidos para brochado y roscado profundo",
    ],
    notes:
      "Nivel EP reforzado frente al BTA-2006 estándar. Seleccione según la severidad de la operación de maquinado.",
  },
  "bta-2007-2-tiempos": {
    description:
      "Paquete de aditivos multifuncional para formular aceites de motor de 2 tiempos. Estos aceites se queman junto con la mezcla de combustible, por lo que el paquete debe aportar lubricación efectiva con baja formación de humo, cenizas y depósitos en bujía, lumbreras y cámara de combustión. Incluye aditivos de lubricidad, detergencia y control de humo, además de propiedades de miscibilidad con la gasolina. Se dosifica sobre aceite base — mineral o con componentes sintéticos — para producir aceites de 2 tiempos para motocicletas, motosierras, desbrozadoras y motores fuera de borda del mercado de reposición.",
    applications: [
      "Formulación de aceite de motor de 2 tiempos",
      "Lubricantes para motocicletas, motosierras y desbrozadoras",
      "Aceites para motores fuera de borda de 2 tiempos",
      "Producción de aceites premezcla y de inyección de aceite",
    ],
    notes:
      "El balance humo/lubricación es clave. Para motores fuera de borda considere las especificaciones NMMA TC-W3 que exigen química específica.",
  },
  "bta-2008-engranes": {
    description:
      "Paquete de aditivos multifuncional para formular aceites de engranes industriales y automotrices con desempeño de extrema presión (EP). Aporta aditivos EP azufre-fósforo que forman una película protectora bajo las altas cargas de contacto de los dientes del engrane, evitando el micro-soldado, el picado (pitting) y el desgaste. Incluye inhibidores de oxidación y corrosión, antiespumantes y aditivos de demulsibilidad. Se dosifica sobre aceite base para producir aceites de engranes ISO VG 100 a 680 (equivalentes SAE 80W-90, 85W-140) que cumplen las clasificaciones API GL y AGMA para reductores industriales y diferenciales automotrices.",
    applications: [
      "Formulación de aceite de engranes industriales ISO VG 100-680",
      "Aceites para diferenciales y ejes automotrices (API GL-5)",
      "Lubricantes EP para reductores de velocidad industriales",
      "Aceites de engranes para molinos, mezcladoras y transportadores",
    ],
    notes:
      "Los aditivos EP azufre-fósforo pueden atacar bronce a alta temperatura; para engranes sinfín-corona de bronce use una química EP suave.",
  },
  "bta-2014-maquinas-herramientas": {
    description:
      "Paquete de aditivos multifuncional para formular lubricantes de máquinas-herramienta: aceites de guías (deslizaderas), husillos y sistemas combinados. Su característica distintiva son las propiedades antideslizamiento (anti stick-slip) que garantizan el movimiento suave y preciso de las guías de la máquina, esenciales para el acabado y la exactitud dimensional. Aporta además adhesividad para que el aceite permanezca en guías verticales, compatibilidad con el refrigerante de corte y protección antidesgaste. Se dosifica sobre aceite base para producir aceites de guías ISO VG 32 a 220 que cumplen las especificaciones de fabricantes de máquinas-herramienta.",
    applications: [
      "Formulación de aceite de guías (deslizaderas) para máquinas-herramienta",
      "Lubricantes para husillos y sistemas de lubricación combinada",
      "Aceites con propiedades anti stick-slip para movimiento preciso",
      "Fluidos compatibles con refrigerantes de corte solubles",
    ],
    notes:
      "La propiedad anti stick-slip y la compatibilidad con el refrigerante de corte son críticas. Seleccione la viscosidad según el tipo de guía.",
  },
  "bta-2017-ep-grasas": {
    description:
      "Aditivo de extrema presión (EP) para formular grasas lubricantes con capacidad de carga elevada. Se incorpora durante la fabricación de la grasa, junto con el espesante y el aceite base, para aportar protección bajo cargas altas e impactos donde la película lubricante normal se rompe: rodamientos pesados, engranes abiertos, juntas universales y chumaceras de servicio severo. Su química EP forma una capa protectora sobre el metal bajo carga, elevando la carga de soldadura (prueba de cuatro bolas) y la carga OK Timken de la grasa. Es compatible con los espesantes más comunes (litio, complejo de litio, calcio).",
    applications: [
      "Formulación de grasas EP multipropósito y de servicio pesado",
      "Grasas para rodamientos de carga alta y de impacto",
      "Lubricantes para engranes abiertos y juntas universales",
      "Grasas para chumaceras de minería, acería y agroindustria",
    ],
    notes:
      "Valide la compatibilidad con el sistema de espesante y verifique que no afecte el punto de goteo ni la estabilidad mecánica. Haga pruebas de laboratorio antes de producir a escala.",
  },
  "bta-2012-modificador-viscosidad": {
    description:
      "Mejorador de índice de viscosidad (VI improver) para formular lubricantes multigrado. Es un polímero de cadena larga que se disuelve en el aceite base y modifica su comportamiento con la temperatura: en frío las moléculas están contraídas y contribuyen poco a la viscosidad (buen flujo y arranque), en caliente se expanden y compensan el adelgazamiento natural del aceite base (protección bajo carga térmica). Esto permite formular multigrados como 15W-40 o 5W-30 a partir de un aceite base ligero. Se dosifica para alcanzar la viscosidad objetivo a 100 °C, considerando siempre la estabilidad al corte del polímero.",
    applications: [
      "Formulación de aceites de motor multigrado (15W-40, 5W-30)",
      "Fluidos hidráulicos de alto índice de viscosidad (HV)",
      "Aceites de engranes y ATF multigrado",
      "Ajuste de viscosidad en lubricantes de amplio rango térmico",
    ],
    notes:
      "La estabilidad al corte determina si el aceite mantiene su grado en servicio. Use la mínima dosis que alcance la viscosidad objetivo, apoyándose en un aceite base de VI adecuado.",
  },
  "bta-2050-antifriccionante": {
    description:
      "Aditivo antifriccionante (modificador de fricción) para formular lubricantes de baja fricción. Actúa en el régimen de lubricación límite — donde las superficies casi se tocan — reduciendo el coeficiente de fricción, lo que se traduce en menor consumo de energía, menor generación de calor y, en motores, mejor economía de combustible. Es un componente clave en los aceites de motor modernos de baja viscosidad (0W-20, 5W-30) diseñados para eficiencia energética y en aplicaciones industriales donde reducir la fricción impacta el consumo eléctrico. Se dosifica en baja proporción, balanceándolo con el resto del paquete de aditivos.",
    applications: [
      "Formulación de aceites de motor de baja fricción (0W-20, 5W-30)",
      "Lubricantes de eficiencia energética para motores modernos",
      "Aceites industriales donde reducir la fricción baja el consumo eléctrico",
      "Aditivo complementario en paquetes de alto desempeño",
    ],
    notes:
      "No usar en fluidos que requieren fricción controlada (ATF con frenos húmedos, fluidos de tractor): reduciría la fricción necesaria y haría patinar los embragues.",
  },
};
