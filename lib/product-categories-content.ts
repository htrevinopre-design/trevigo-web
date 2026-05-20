// ============================================================
// CONTENIDO PARA LANDING PAGES DE CATEGORÍAS TOP-LEVEL DE PRODUCTO
// Estas son las 4 líneas principales del catálogo. Cada una tiene
// una página dedicada en /productos/linea/[id] que captura queries
// de categoría como "químicos para tratamiento de metales" o
// "lubricantes industriales".
// ============================================================

export interface CategoryContent {
  /** Slug — coincide con id en PRODUCT_CATEGORIES de lib/data.ts */
  id: string;
  /** Título visible (H1) */
  pageTitle: string;
  /** Meta title (SEO) */
  metaTitle: string;
  /** Meta description (SEO) */
  metaDescription: string;
  /** Hero label corto */
  hero: string;
  /** Lead paragraph debajo del H1 */
  lead: string;
  /** Secciones de contenido educativo */
  sections: {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];
  /** FAQs con schema FAQPage */
  faqs: { q: string; a: string }[];
  /** Industrias relevantes (slugs) */
  relatedIndustries?: string[];
  /** Servicios relacionados (slugs SERVICES_CONTENT) */
  relatedServices?: string[];
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  // ══════════════════════════════════════════════════════════════
  // TRATAMIENTO DE METALES
  // ══════════════════════════════════════════════════════════════
  "tratamiento-metales": {
    id: "tratamiento-metales",
    pageTitle: "Químicos para Tratamiento de Metales",
    metaTitle: "Químicos para Tratamiento de Metales Industriales en México | Trevigo",
    metaDescription:
      "Proveedor mexicano de químicos para tratamiento de metales: detergentes alcalinos, desoxidantes, fosfato de zinc, removedores, selladores Cr-free e inhibidores VCI. 35+ años en N.L. Cotización 24 h.",
    hero: "Tratamiento de metales",
    lead: "Industrias Trevigo es fabricante mexicano y proveedor de químicos para tratamiento de metales con 35+ años de experiencia en Monterrey, N.L. Nuestra línea cubre las 8 etapas críticas de cualquier proceso de pintura electrostática, galvanizado o pretratamiento OEM: desengrase alcalino, desoxidación, fosfato de zinc y de hierro, sellado libre de cromo, pasivado y protección anticorrosiva — con formulaciones específicas para acero, zinc, aluminio y aleaciones especiales.",
    sections: [
      {
        heading: "¿Qué son los químicos para tratamiento de metales y para qué sirven?",
        paragraphs: [
          "Cualquier pieza metálica que recibe pintura, recubrimiento orgánico, galvanizado o ensamble requiere un proceso de pretratamiento químico que limpia, prepara la superficie y deposita una capa de conversión que mejora la adhesión del recubrimiento posterior. Sin pretratamiento correcto, las pinturas y recubrimientos fallan por delaminación, ampollas y corrosión bajo película en pocos meses.",
          "Los químicos industriales para tratamiento de metales se dividen en familias funcionales que actúan en orden secuencial dentro de una línea de pretratamiento: detergentes alcalinos (limpieza), desoxidantes ácidos (remoción de óxido), fosfatos (conversión química), selladores (sellado de poros), pasivadores (protección final) e inhibidores (protección entre operaciones).",
        ],
      },
      {
        heading: "Familias de productos en esta línea",
        paragraphs: [
          "Nuestra línea de tratamiento de metales cubre todas las etapas críticas del proceso. Cada familia tiene su propia guía técnica detallada:",
        ],
        list: [
          "Detergentes y desengrasantes alcalinos para limpieza profunda previo a fosfatado",
          "Desoxidantes para remover óxido, calamina y escamas de laminación",
          "Fosfatos (zinc, hierro, multimetálico) para conversión química previa a pintura",
          "Removedores de pintura para reproceso y mantenimiento de bastidores",
          "Selladores anticorrosivos libres de cromo para máxima resistencia",
          "Inhibidores de corrosión (VCI) para protección temporal entre operaciones",
          "Pasivadores para acero inoxidable conforme ASTM A967",
          "Aceites de protección y desmoldado para piezas mecanizadas",
        ],
      },
      {
        heading: "Cómo se integran en una línea de pintura industrial típica",
        paragraphs: [
          "Una línea de pintura industrial estándar tiene de 3 a 9 etapas químicas según la exigencia anticorrosiva del producto final. Las líneas compactas (servicio interior) usan 3 etapas: desengrase + fosfato de hierro combinado + sellado. Las líneas automotrices OEM usan 7-9 etapas: predesengrase, desengrase principal, enjuague, activador, fosfato de zinc tricatiónico, enjuague, sellado, enjuague final con agua desmineralizada.",
          "La elección de cada producto químico en la secuencia determina el desempeño anticorrosivo final del producto pintado — desde 150 horas niebla salina (servicio interior básico) hasta 1,000+ horas (automotriz exterior). Damos asesoría técnica para diseñar la línea óptima según tu producto.",
        ],
      },
      {
        heading: "Industrias que típicamente usan esta línea",
        paragraphs: [
          "Los químicos para tratamiento de metales son insumo crítico para: cadena automotriz OEM y tier 1/2, metalmecánica general, electrodomésticos línea blanca, muebles metálicos de oficina, hardware y herrajes, equipo agrícola y de construcción, partes aeronáuticas, electrónica industrial, y cualquier proceso donde se aplique pintura electrostática o líquida sobre acero, zinc o aluminio.",
          "Si tu planta produce piezas metálicas que requieren pintura o recubrimiento, esta línea es la columna vertebral de tu proceso de calidad. Una mala formulación o control deficiente del baño puede causar rechazos masivos y reclamos de cliente; una formulación correcta multiplica la vida útil del recubrimiento aplicado encima.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué químicos necesito para mi línea de pintura industrial?",
        a: "Depende de la exigencia anticorrosiva. Líneas básicas de servicio interior usan 3 etapas: desengrasante alcalino + fosfato de hierro combinado + sellador ligero. Líneas exigentes (automotriz, exterior, costero) requieren 7-9 etapas con desengrasante, desoxidante, fosfato de zinc tricatiónico, sellador sin cromo y enjuagues con agua desmineralizada. Hacemos auditoría técnica gratuita de tu línea para recomendar la mezcla óptima.",
      },
      {
        q: "¿Sus productos cumplen con normas automotrices OEM?",
        a: "Sí. Nuestras formulaciones de fosfato de zinc tricatiónico cumplen los requerimientos de GM (GMW3179), Ford (WSS-M3P18-A) y los estándares de tier 1 y tier 2 de la cadena automotriz mexicana. Emitimos reportes de baño y panel testigo con pruebas de niebla salina ASTM B117.",
      },
      {
        q: "¿Hay alternativas libres de cromo hexavalente?",
        a: "Sí, toda nuestra línea de selladores y pasivadores es libre de cromo hexavalente (Cr⁶⁺) — cumple RoHS, REACH y las normas más estrictas de exportación. Usamos químicas modernas de zirconio, silanos y ácidos orgánicos quelantes con desempeño igual o superior al cromo tradicional.",
      },
      {
        q: "¿Cuánto dura un baño bien mantenido en producción?",
        a: "Depende del tipo de baño y la carga: detergentes alcalinos duran 2-4 semanas con control de aceite emulsionado, fosfatos de zinc 3-6 meses con filtración, desoxidantes 1-3 meses según consumo de óxido. Con buen mantenimiento (skimming, filtración, reposición diaria de químico) la vida útil puede extenderse 30-50%.",
      },
      {
        q: "¿Hacen análisis de control de baño in-situ?",
        a: "Sí. Realizamos visitas técnicas para análisis completo de baño (acidez total, acidez libre, Fe disuelto, conductividad, temperatura) y entregamos reporte con recomendaciones de ajuste. Para clientes activos este servicio está incluido sin costo adicional.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "aeronautica", "electrica-electronica", "tratamiento-superficies-metalicas"],
    relatedServices: ["fosfatizado", "galvanizado", "tropicalizado", "pasivado", "decapado"],
  },

  // ══════════════════════════════════════════════════════════════
  // TRATAMIENTO DE AGUAS
  // ══════════════════════════════════════════════════════════════
  "tratamiento-aguas": {
    id: "tratamiento-aguas",
    pageTitle: "Químicos para Tratamiento de Aguas Residuales Industriales",
    metaTitle: "Químicos para Tratamiento de Aguas Residuales Industriales en México | Trevigo",
    metaDescription:
      "Proveedor mexicano de químicos para PTAR industrial: coagulantes (PAC), floculantes, poliacrilamidas, secuestrantes y microbicidas. Cumplimiento NOM-001-SEMARNAT-2021. Jar Test sin costo.",
    hero: "Tratamiento de aguas",
    lead: "Industrias Trevigo es proveedor mexicano de químicos para tratamiento de aguas residuales industriales — obligatorio en México bajo NOM-001-SEMARNAT-2021 para cualquier planta que descargue efluentes a cuerpos nacionales o drenaje municipal. Nuestra línea cubre el espectro completo: coagulantes (PAC, sulfato de aluminio, cloruro férrico), floculantes, poliacrilamidas, secuestrantes (EDTA, fosfonatos), microbicidas y ajustadores de pH — con formulaciones específicas por industria y asesoría con Jar Test sin costo.",
    sections: [
      {
        heading: "¿Qué son los químicos para tratamiento de aguas residuales y para qué sirven?",
        paragraphs: [
          "Las plantas industriales generan efluentes que contienen contaminantes específicos según su proceso: metales pesados (cromo, zinc, níquel) en plantas de tratamiento de metales, materia orgánica (DBO, DQO) en alimentación y bebidas, grasas y aceites en metalmecánica, color en textil, y sólidos suspendidos en prácticamente todas. Estos efluentes no pueden descargarse sin tratamiento previo — la NOM-001-SEMARNAT-2021 establece límites estrictos para cada parámetro.",
          "Los químicos para tratamiento de aguas actúan en las distintas etapas de la PTAR (planta de tratamiento de aguas residuales): coagulación para desestabilizar partículas suspendidas, floculación para agregarlas en flóculos sedimentables, ajuste de pH para precipitar metales, y polímeros para deshidratación de lodos. Cada efluente requiere un cóctel específico de productos.",
        ],
      },
      {
        heading: "Familias de productos en esta línea",
        paragraphs: [
          "Nuestra línea de tratamiento de aguas se organiza por función dentro del proceso de PTAR:",
        ],
        list: [
          "Coagulantes inorgánicos (PAC, sulfato de aluminio, cloruro férrico) para desestabilización primaria de partículas",
          "Coagulantes orgánicos (poliaminas, polidadmac) para reducción de lodos y mejor manejo de cargas variables",
          "Floculantes aniónicos, catiónicos y no-iónicos para agregación de flóculos",
          "Poliacrilamidas en polvo y emulsión para deshidratación de lodos en filtros prensa y centrífugas",
          "Agentes secuestrantes (EDTA, ácidos orgánicos) para complejación selectiva de metales pesados",
          "Inhibidores de oxígeno para protección de calderas y sistemas cerrados de agua",
          "Microbicidas no-oxidantes para control de biofouling en torres de enfriamiento",
          "Ajustadores de pH (sosa cáustica, cal hidratada, ácidos) para precipitación química",
        ],
      },
      {
        heading: "Cómo se diseña una PTAR industrial con estos químicos",
        paragraphs: [
          "Una PTAR industrial estándar tiene 4 etapas: (1) pretratamiento físico (rejas, desarenado), (2) tratamiento primario químico (coagulación + floculación + sedimentación), (3) tratamiento secundario biológico (lodos activados o reactores anaerobios) opcional, y (4) tratamiento terciario de pulido (filtración, desinfección).",
          "La selección de químicos depende del análisis del efluente: una prueba de jarras (Jar Test) en laboratorio determina la dosis óptima de coagulante y floculante. Ofrecemos este servicio sin costo con muestra de tu efluente — entregamos reporte con dosificación recomendada, costo por m³ tratado y proyección de cumplimiento NOM-001.",
        ],
      },
      {
        heading: "Industrias que típicamente usan esta línea",
        paragraphs: [
          "Los químicos para tratamiento de aguas son insumo obligatorio en: industria automotriz (efluentes con zinc, fosfatos), galvanoplastia (cromo, níquel, cobre), industria alimentaria (DBO/DQO alto), papel y derivados (sólidos suspendidos, color), textil (colorantes), refresqueras y cervecerías (carga orgánica), farmacéutica, minera (metales pesados, pH ácido), y cualquier proceso con descarga a colector municipal o cuerpo nacional.",
          "El costo del tratamiento de aguas residuales industriales en México está entre 8 y 35 MXN por m³ tratado, dependiendo del nivel de contaminación. Una buena selección de químicos puede reducir el costo operativo 20-40% sin comprometer el cumplimiento.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo cumplo con la NOM-001-SEMARNAT-2021?",
        a: "La NOM-001 establece límites máximos de descarga para 16 parámetros (DBO, DQO, SST, N total, P total, grasas, metales, pH, etc.) que entraron en vigor de forma escalonada desde 2024. Para cumplir necesitas: (1) caracterización del efluente, (2) PTAR con etapas adecuadas, (3) químicos seleccionados con Jar Test, (4) control operativo diario y muestreo periódico. Ofrecemos asesoría completa desde diseño hasta operación.",
      },
      {
        q: "¿Cuál es la diferencia entre coagulante y floculante?",
        a: "Coagulante (PAC, alumbre, cloruro férrico) desestabiliza eléctricamente las partículas suspendidas para que dejen de repelerse. Floculante (poliacrilamida, polímero aniónico/catiónico) actúa después: forma puentes moleculares entre partículas desestabilizadas para crear flóculos grandes sedimentables. Se usan en secuencia: primero coagulante, luego floculante.",
      },
      {
        q: "¿Hacen pruebas de jarras (Jar Test) en su laboratorio?",
        a: "Sí, sin costo para clientes activos o potenciales con efluentes de interés. Procesamos 6 muestras simultáneas con dosificaciones distintas y entregamos reporte con: dosis óptima de coagulante y floculante, costo unitario por m³, proyección de cumplimiento de parámetros NOM-001, y recomendaciones de manejo de lodos.",
      },
      {
        q: "¿Qué químico uso para precipitar cromo de un efluente de galvanoplastia?",
        a: "El proceso estándar es: (1) reducción de Cr⁶⁺ a Cr³⁺ con sulfito de sodio o metabisulfito a pH 2.5, (2) ajuste de pH a 8.5-9.0 con sosa cáustica para precipitar como Cr(OH)₃, (3) floculación con polímero aniónico, (4) sedimentación y deshidratación de lodos. Manejamos toda la línea de productos requeridos.",
      },
      {
        q: "¿Cómo controlo el biofouling en torres de enfriamiento?",
        a: "Combinación de oxidantes (cloro, dióxido de cloro o bromo) con biocidas no-oxidantes (glutaraldehído, isotiazolinonas) en dosificación alterna para evitar resistencia. Adicionalmente inhibidor de incrustación (fosfonatos) y dispersante (polímero acrílico). Ofrecemos análisis de agua y plan de dosificación personalizado.",
      },
    ],
    relatedIndustries: ["automotriz", "metalmecanica", "alimenticia", "papel-derivados", "textil", "farmaceutica", "minera"],
    relatedServices: ["pruebas-jarras", "optimizacion-procesos", "ingenieria-asesoria"],
  },

  // ══════════════════════════════════════════════════════════════
  // LUBRICANTES Y ACEITES
  // ══════════════════════════════════════════════════════════════
  "lubricantes-aceites": {
    id: "lubricantes-aceites",
    pageTitle: "Lubricantes y Aceites Industriales",
    metaTitle: "Lubricantes Industriales y Aceites para Maquinaria en México | Trevigo",
    metaDescription:
      "Proveedor mexicano de lubricantes industriales: aceite hidráulico ISO VG 46, grasas EP NLGI 2, aceites de corte, engranajes y compresores. Formulaciones técnicas. Cotización 24 h.",
    hero: "Lubricantes y aceites",
    lead: "Industrias Trevigo es proveedor mexicano de lubricantes y aceites industriales para mantenimiento de planta. Manejamos aceite hidráulico ISO VG 32-68, aceites de engranajes ISO VG 220-460, aceites de compresor (tornillo, pistón), grasas multipropósito NLGI 2, grasas EP, lubricantes sintéticos PAO/PAG y alimenticios H1 NSF. Una selección correcta es uno de los costos operativos con mayor retorno de inversión en mantenimiento.",
    sections: [
      {
        heading: "¿Qué son los lubricantes industriales y para qué sirven?",
        paragraphs: [
          "Los lubricantes industriales cumplen 5 funciones simultáneas: (1) reducir fricción entre superficies metálicas en movimiento relativo, (2) transferir calor desde puntos calientes (rodamientos, engranajes), (3) sellar superficies para evitar entrada de contaminantes, (4) proteger del óxido y la corrosión durante operación, y (5) actuar como vehículo para limpieza interna del equipo.",
          "La industria moderna usa lubricantes formulados específicamente para cada aplicación: aceites hidráulicos para sistemas de presión, aceites de corte para máquinas-herramienta, grasas para rodamientos sellados, aceites de engranajes para reductores, y aceites de compresor para refrigeración o aire comprimido. Cada uno tiene aditivos específicos.",
        ],
      },
      {
        heading: "Familias de productos en esta línea",
        paragraphs: [
          "Nuestra línea de lubricantes y aceites cubre las aplicaciones industriales más críticas:",
        ],
        list: [
          "Aceites hidráulicos (ISO VG 32, 46, 68) para prensas, inyectoras y maquinaria con sistemas hidráulicos",
          "Aceites de corte y solubles para máquinas CNC, tornos, milling y rectificadoras",
          "Aceites de engranajes (ISO VG 220, 320, 460) para reductores industriales",
          "Aceites de compresor (rotativo, tornillo, pistón) con base sintética y mineral",
          "Grasas multipropósito (NLGI 2) y grasas EP (Extreme Pressure) para cargas pesadas",
          "Aceites de transferencia térmica para sistemas de calentamiento indirecto",
          "Aceites desmoldantes para fundición y plásticos",
          "Lubricantes alimenticios H1 (NSF) para industria alimentaria con contacto incidental",
        ],
      },
      {
        heading: "Parámetros técnicos para seleccionar el lubricante correcto",
        paragraphs: [
          "La selección de lubricante depende de 6 parámetros: (1) viscosidad cinemática (ISO VG, SAE) según temperatura de operación y carga, (2) índice de viscosidad (IV) — qué tan estable es la viscosidad al variar temperatura, (3) punto de inflamación para seguridad operativa, (4) aditivos antidesgaste y EP según severidad de la carga, (5) compatibilidad con elastómeros y sellos del equipo, y (6) consistencia (NLGI) para grasas según velocidad de rotación.",
          "Cada fabricante de equipo (OEM) especifica el lubricante recomendado en su manual; nuestras formulaciones cumplen los principales estándares (DIN, ISO, AGMA, NSF). Para casos de selección compleja damos asesoría técnica con análisis del equipo y condiciones de operación.",
        ],
      },
      {
        heading: "Análisis de aceite en uso: la práctica que ahorra millones",
        paragraphs: [
          "El análisis periódico del aceite en uso (lab analysis) es la práctica de mantenimiento predictivo con mayor retorno: por 200-400 MXN por muestra detecta desgaste anormal antes de falla catastrófica, contaminación con agua o partículas, y deterioro del aditivo. Esto permite cambiar el aceite cuando realmente se requiere (no por calendario) y detectar problemas mecánicos antes de paro.",
          "Recomendamos análisis cada 250-500 horas de operación para equipos críticos. Manejamos servicio de análisis externo con laboratorio certificado y entregamos reporte con: viscosidad real, TBN/TAN, agua, partículas por código ISO 4406, espectrometría de elementos (Fe, Cu, Cr, Pb, Si) y recomendación de cambio.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo selecciono la viscosidad ISO VG correcta para mi equipo hidráulico?",
        a: "Depende de la temperatura de operación y la presión. Regla general: para sistemas operando 30-60°C usa ISO VG 46 (más común). Para climas calientes o presión >200 bar usa ISO VG 68. Para operación a baja temperatura usa ISO VG 32. Siempre verifica el manual del OEM — algunos sistemas requieren viscosidad específica por diseño del actuador o servoválvula.",
      },
      {
        q: "¿Cada cuánto debo cambiar el aceite hidráulico?",
        a: "Las recomendaciones varían: por calendario 4,000-8,000 horas de operación (1-2 años en uso continuo), pero la mejor práctica es por análisis. Cambio anticipado si: viscosidad cambia más de 10%, TAN aumenta más de 0.5 mg KOH/g, agua >0.1%, o código ISO 4406 supera 22/20/17. El análisis periódico evita cambios innecesarios y detecta problemas.",
      },
      {
        q: "¿Sus lubricantes son compatibles con normas alimenticias?",
        a: "Sí, manejamos línea de lubricantes alimenticios H1 (NSF International) para contacto incidental con alimento, y H2 para zonas sin contacto. Los H1 cumplen FDA 21 CFR 178.3570. Son obligatorios en cadena alimentaria, bebidas, lácteos, cárnicos y farmacéutica.",
      },
      {
        q: "¿Tienen grasa de alta temperatura para hornos y procesos industriales?",
        a: "Sí. Manejamos grasas sintéticas de poliurea y bentonita para temperaturas hasta 200-260°C, y grasas de complejo de aluminio o litio-complejo para temperaturas estándar (-30 a 160°C). Para aplicaciones extremas (>260°C) recomendamos lubricantes secos a base de MoS₂ o grafito.",
      },
      {
        q: "¿Ofrecen análisis de aceite en uso?",
        a: "Sí, con laboratorio externo certificado. Entregamos reporte completo en 5-7 días hábiles con viscosidad real, TBN/TAN, agua, partículas (ISO 4406), y espectrometría de 18+ elementos. Para clientes con consumo regular este servicio se integra al plan de mantenimiento sin costo adicional.",
      },
    ],
    relatedIndustries: ["metalmecanica", "automotriz", "alimenticia", "papel-derivados", "minera", "hule-caucho"],
    relatedServices: ["mantenimiento", "optimizacion-procesos"],
  },

  // ══════════════════════════════════════════════════════════════
  // MATERIAS PRIMAS
  // ══════════════════════════════════════════════════════════════
  "materias-primas": {
    id: "materias-primas",
    pageTitle: "Materias Primas Químicas Industriales",
    metaTitle: "Materias Primas Químicas Industriales en México: Ácidos, Sosa | Trevigo",
    metaDescription:
      "Proveedor mexicano de materias primas químicas: ácido cítrico, nítrico, clorhídrico, fosfórico 85%, sosa cáustica escamas y al 50%, hipoclorito de sodio. SDS y COA por lote. Entrega 48 h.",
    hero: "Materias primas químicas",
    lead: "Industrias Trevigo es proveedor mexicano de materias primas químicas industriales con SDS, COA y trazabilidad completa: ácido cítrico, ácido nítrico, ácido clorhídrico (muriático), ácido fosfórico al 85%, sosa cáustica en escamas (NaOH sólido), sosa cáustica al 50% líquida e hipoclorito de sodio. Insumos base para formulación industrial, ajuste de pH, neutralización, síntesis y mantenimiento de procesos.",
    sections: [
      {
        heading: "¿Qué son las materias primas químicas industriales y para qué sirven?",
        paragraphs: [
          "Las materias primas químicas industriales son la base de innumerables procesos: formulación de productos de limpieza, ajuste de pH en PTAR y agua de proceso, neutralización de efluentes ácidos o alcalinos, síntesis de productos derivados, pasivación de acero inoxidable, decapado de metales, desinfección y blanqueo, regeneración de resinas de intercambio iónico, y formulación de cosméticos, alimentos y farmacéuticos.",
          "A diferencia de los productos formulados (que vienen listos para usar), las materias primas requieren conocimiento técnico para dosificación correcta, manejo seguro y cumplimiento normativo. Ofrecemos asesoría técnica, SDS actualizadas y certificados de análisis (COA) por lote.",
        ],
      },
      {
        heading: "Materias primas disponibles en nuestra línea",
        paragraphs: [
          "Nuestra línea de materias primas se enfoca en ácidos, bases y oxidantes inorgánicos de alto consumo industrial:",
        ],
        list: [
          "Ácido cítrico (orgánico) para limpieza, desoxidación suave y ajuste de pH alimentario",
          "Ácido nítrico para pasivado de acero inoxidable (ASTM A967), grabado y síntesis",
          "Ácido clorhídrico (muriático) para decapado de metales, regeneración de resinas y ajuste de pH",
          "Ácido fosfórico para fosfatado, limpieza de metales y formulación de detergentes",
          "Sosa cáustica en escamas (NaOH sólido) para formulación de limpiadores y neutralización",
          "Sosa cáustica al 50% líquida para dosificación directa en PTAR y procesos continuos",
          "Hipoclorito de sodio para desinfección, blanqueo y control microbiológico",
        ],
      },
      {
        heading: "Manejo seguro y normativa aplicable",
        paragraphs: [
          "Las materias primas químicas son productos peligrosos clasificados bajo NOM-018-STPS-2015 (Hoja de Datos de Seguridad). Su manejo requiere capacitación específica del personal, EPP completo (lentes, guantes resistentes, mandil, careta), área de almacenamiento segregada por compatibilidad química, y plan de emergencia para derrames.",
          "Entregamos cada producto con: ficha técnica, hoja de seguridad SDS actualizada conforme NOM-018, certificado de análisis (COA) por lote, etiquetado SGA (Sistema Globalmente Armonizado), y capacitación de manejo a tu personal en planta cuando sea requerido.",
        ],
      },
      {
        heading: "Industrias que típicamente usan materias primas",
        paragraphs: [
          "Las materias primas químicas son insumo crítico para: industria automotriz (ácidos para pretratamiento, sosa para neutralización), galvanoplastia (ácidos de baños), industria alimentaria (ácido cítrico, sosa al 50% para CIP), tratamiento de aguas (ajuste de pH, oxidación), textil (sosa para mercerización), papel (sosa cáustica para proceso kraft), química y farmacéutica (síntesis), y mantenimiento general de plantas.",
          "El consumo de materias primas en una planta industrial puede ir desde unos cientos de kg al mes (taller pequeño) hasta varias toneladas mensuales (planta química grande). Manejamos formatos desde porrón de 50 kg hasta tote de 1,000 kg con logística garantizada en Nuevo León.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Sus materias primas son grado industrial, técnico o reactivo?",
        a: "Manejamos principalmente grado técnico industrial (pureza 95-99% según producto), apropiado para la mayoría de aplicaciones industriales: tratamiento de aguas, limpieza, neutralización, decapado, síntesis no-farmacéutica. Para aplicaciones que requieran grado reactivo (USP, ACS, food grade) podemos cotizar bajo pedido con tiempos de entrega más largos.",
      },
      {
        q: "¿Entregan SDS y COA con cada pedido?",
        a: "Sí, sin costo adicional. Cada entrega incluye: ficha técnica del producto, hoja de seguridad SDS actualizada conforme NOM-018-STPS-2015, certificado de análisis (COA) del lote específico entregado, y etiquetado SGA. Si requieres documentación adicional (estudios toxicológicos, certificados de origen, etc.) la cotizamos por separado.",
      },
      {
        q: "¿Cómo se debe almacenar el ácido fosfórico o el ácido clorhídrico?",
        a: "En área techada, ventilada, con piso impermeable y muro de contención (volumen ≥110% del envase mayor). Lejos de bases (sosa) y oxidantes (hipoclorito) para evitar reacciones peligrosas. Envase original sellado, en lugar fresco. Vida útil típica 2-3 años bien almacenados. Las SDS de cada producto detallan condiciones específicas.",
      },
      {
        q: "¿Tienen capacidad de entrega en tote (1,000 kg) y autotanque?",
        a: "Sí, manejamos formatos desde porrón de 50 kg hasta tote de 1,000 kg. Para consumos mayores (>5,000 kg/mes por producto) podemos coordinar entrega en autotanque a granel con descarga directa a tu tanque de almacenamiento. Logística en N.L., Coahuila, Tamaulipas y norte de México.",
      },
      {
        q: "¿Hacen mezcla o dilución a medida?",
        a: "Sí, ofrecemos servicio de formulación de soluciones a concentración específica (por ejemplo, sosa al 25% en lugar de 50%) para clientes que prefieren no diluir en sitio. Esto reduce riesgos de manejo y simplifica dosificación. Cotización por volumen.",
      },
    ],
    relatedIndustries: ["alimenticia", "metalmecanica", "automotriz", "papel-derivados", "textil", "farmaceutica", "lavanderias"],
    relatedServices: ["ingenieria-asesoria", "mantenimiento"],
  },
};

export function getCategoryContent(id: string): CategoryContent | undefined {
  return CATEGORY_CONTENT[id];
}

export function getCategoryContentSlugs(): string[] {
  return Object.keys(CATEGORY_CONTENT);
}
