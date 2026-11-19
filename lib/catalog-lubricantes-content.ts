// ============================================================
// LANDING PAGES DEL CATÁLOGO DE ACEITES LUBRICANTES TREVIGO 2026
// - LUBRICANTES_LINEA_CONTENT  → /productos/linea/aceites-lubricantes
// - LUBRICANTES_SUBCATEGORY_CONTENT → /productos/categoria/[id]
// Se mezclan en CATEGORY_CONTENT y SUBCATEGORY_CONTENT.
// ============================================================

import type { CategoryContent } from "./product-categories-content";
import type { SubcategoryContent } from "./product-subcategories-content";

export const LUBRICANTES_LINEA_CONTENT: CategoryContent = {
  id: "aceites-lubricantes",
  pageTitle: "Aceites Lubricantes Automotrices e Industriales",
  metaTitle: "Aceites Lubricantes por Mayoreo: Diésel, Hidráulico, ATF",
  metaDescription:
    "Aceites lubricantes Trevigo: motor a diésel y gasolina, transmisión, hidráulicos e industriales. Cubeta 19 L, tambo 208 L, tote y granel en pipa. Monterrey, N.L.",
  hero: "Aceites lubricantes Trevigo",
  lead: "Industrias Trevigo ofrece una línea completa de 30 aceites lubricantes marca Trevigo para flotas, talleres y plantas industriales: aceites para motor a diésel (API CI-4, CJ-4 Plus, CK-4), motor a gasolina y motocicleta, transmisión y diferencial (GL-5, ATF), aceites hidráulicos ISO 32 a 100 y aceites industriales para reductores, compresores, guías, circulación, transferencia de calor y transformadores. Se surten en cubeta de 19 L, tambo de 208 L, tote de 1,000 L o a granel en pipa, con precio por volumen.",
  sections: [
    {
      heading: "Cinco líneas de aceites para cubrir toda la operación",
      paragraphs: [
        "El catálogo está organizado por tipo de equipo, para que un comprador de flota o de mantenimiento encuentre en un solo proveedor todos los aceites que consume su operación:",
      ],
      list: [
        "Motor a diésel (7 aceites): Turbo CI-4, Monogrado CF-2, CK-4, CJ-4 Plus, Flota Mixta CI-4 Plus, 15W-40 y 25W-60",
        "Motor a gasolina y moto (5 aceites): Multigrado SL, Monogrado, SAE 40, Alto Desempeño 5W-30 y Motocicleta 4T",
        "Transmisión y diferencial (5 aceites): Engranes GL-5 80W-90 y 85W-140, ATF DEX III, ATF III y ATF II",
        "Hidráulicos (6 aceites): ISO 32, ISO 46, AW ISO 68, AW ISO 100, Multigrado y Fluido Antiflama",
        "Industriales (7 aceites): Cajas Reductoras ISO 32-220 y Alta Carga ISO 320-680, Guías y Correderas, Compresores, Circulación, Transferencia de Calor y Dieléctrico",
      ],
    },
    {
      heading: "Presentaciones del tamaño de tu consumo",
      paragraphs: [
        "Todos los aceites se surten en la presentación que mejor se ajusta al consumo de cada cliente. Entre mayor el volumen, menor el costo por litro y menos envases que manejar y desechar.",
      ],
      list: [
        "Cubeta de 19 L: para talleres, rellenos y equipos de bajo consumo",
        "Tambo de 208 L: la presentación estándar para flotas y plantas",
        "Tote (IBC) de 1,000 L: para consumos altos, con válvula de descarga",
        "A granel en pipa: para clientes con tanque de almacenamiento propio",
      ],
    },
    {
      heading: "Cómo elegir el aceite correcto",
      paragraphs: [
        "El primer criterio siempre es el manual del fabricante del equipo: indica la viscosidad (grado SAE para motores y engranes, grado ISO VG para hidráulicos e industriales) y el nivel de desempeño (API para motores y engranes, tipo DEXRON/MERCON para transmisiones automáticas). Con esos dos datos se elige el producto del catálogo.",
        "Después se ajusta por condición de operación: temperatura ambiente, carga, horas de uso del equipo y si tiene sistemas de postratamiento de gases. Un asesor Trevigo puede ayudarte a reducir el número de aceites en tu inventario, por ejemplo con un aceite de flota mixta o estandarizando la planta en un solo grado hidráulico.",
      ],
    },
  ],
  faqs: [
    {
      q: "¿Venden aceite para motor a diésel por tambo de 208 litros?",
      a: "Sí. Todos los aceites para motor a diésel de Trevigo (Turbo CI-4, CK-4, CJ-4 Plus, Flota Mixta CI-4 Plus, 15W-40, 25W-60 y Monogrado CF-2) se surten en cubeta de 19 L, tambo de 208 L, tote de 1,000 L y a granel en pipa.",
    },
    {
      q: "¿Cuál es la diferencia entre un aceite API CI-4, CJ-4 y CK-4?",
      a: "Son niveles de desempeño para motores a diésel de trabajo pesado. CI-4 es para motores con recirculación de gases (EGR). CJ-4 es bajo en cenizas para motores con filtro de partículas (DPF) y diésel de ultra bajo azufre. CK-4 es la categoría vigente, con mejor resistencia a la oxidación y a la aireación, y es compatible con motores que piden CJ-4 y CI-4.",
    },
    {
      q: "¿Qué aceite hidráulico necesito, ISO 32, 46 o 68?",
      a: "Depende del equipo y la temperatura. ISO 46 es el grado de uso general en planta. ISO 32 es para baja presión, equipo de precisión o clima frío. AW ISO 68 y AW ISO 100 son para más temperatura y carga. Si el equipo opera con cambios fuertes de temperatura, el Hidráulico Multigrado es una buena opción.",
    },
    {
      q: "¿Entregan aceite lubricante a granel?",
      a: "Sí. Para clientes con tanque de almacenamiento propio surtimos a granel en pipa, con precio por volumen. Para consumos menores manejamos tote de 1,000 L, tambo de 208 L y cubeta de 19 L.",
    },
    {
      q: "¿Tienen ficha técnica y hoja de seguridad de los aceites?",
      a: "Sí. Cada aceite cuenta con ficha técnica (TDS) y hoja de datos de seguridad (SDS) en español. Puedes solicitarlas desde la página de cada producto o por WhatsApp.",
    },
  ],
  relatedIndustries: ["automotriz", "minera", "metalmecanica", "manufactura-general", "agroindustria", "electrica-electronica"],
};

export const LUBRICANTES_SUBCATEGORY_CONTENT: Record<string, SubcategoryContent> = {
  // ── MOTOR A DIÉSEL ──
  "aceites-motor-diesel": {
    id: "aceites-motor-diesel",
    categoryId: "aceites-lubricantes",
    pageTitle: "Aceite para Motor a Diésel",
    metaTitle: "Aceite para Motor a Diésel 15W-40, CI-4, CK-4 por Tambo",
    metaDescription:
      "Aceite para motor a diésel Trevigo: Turbo CI-4, CK-4, CJ-4 Plus, Flota Mixta, 15W-40, 25W-60 y monogrado CF-2. Cubeta, tambo 208 L, tote y granel.",
    hero: "Aceite para motor a diésel",
    lead: "Siete aceites para motor a diésel que cubren desde el tractocamión de modelo reciente con filtro de partículas hasta el motor estacionario con muchas horas de uso. Niveles API CI-4, CI-4 Plus, CJ-4 Plus, CK-4 y CF-2, en grados SAE 15W-40, 20W-50, 25W-60 y monogrados.",
    sections: [
      {
        heading: "¿Qué aceite de motor a diésel necesita mi flota?",
        paragraphs: [
          "El nivel API que pide el fabricante del motor depende principalmente de su año y de su sistema de control de emisiones. Una regla práctica para elegir dentro del catálogo Trevigo:",
        ],
        list: [
          "Motores de especificación reciente: Diésel CK-4 (compatible con motores que piden CJ-4 y CI-4)",
          "Motores con filtro de partículas (DPF) y EGR: Diésel CJ-4 Plus, bajo en cenizas",
          "Motores turbo de trabajo pesado con EGR: Diésel Turbo CI-4 en 15W-40 o 20W-50",
          "Flotas con unidades a diésel y gasolina: Flota Mixta CI-4 Plus / SL 15W-40",
          "Servicio general en flota: Diésel 15W-40",
          "Motores con desgaste y alto consumo: Diésel 25W-60",
          "Motores que especifican monogrado o API CF-2: Diésel Monogrado CF-2, SAE 10W a 50",
        ],
      },
      {
        heading: "Viscosidad: 15W-40, 20W-50 y 25W-60",
        paragraphs: [
          "En un multigrado, el número antes de la W indica cómo fluye el aceite en frío y el segundo número, su viscosidad a temperatura de operación. El 15W-40 es el grado más usado en México porque equilibra arranque y protección en clima cálido. El 20W-50 y el 25W-60 dan una película más gruesa para motores con más horas, clima muy caluroso o alto consumo de aceite, a cambio de un arranque más lento en frío.",
        ],
      },
      {
        heading: "Intervalos de cambio y análisis de aceite",
        paragraphs: [
          "El intervalo de cambio lo define el fabricante del motor según el tipo de servicio. En flotas grandes conviene apoyarse en análisis de aceite (viscosidad, hollín, desgaste de metales y reserva alcalina) para extender intervalos con seguridad o detectar a tiempo problemas como entrada de refrigerante o dilución por combustible.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo usar aceite CK-4 en un motor que pide CI-4?",
        a: "Sí. API CK-4 es compatible hacia atrás con motores que especifican CJ-4, CI-4 Plus y CI-4. Lo que no conviene es lo contrario: usar un aceite de categoría anterior en un motor que exige CK-4 o CJ-4.",
      },
      {
        q: "¿Qué aceite uso en un motor con filtro de partículas (DPF)?",
        a: "Un aceite bajo en cenizas, como el Diésel CJ-4 Plus o el Diésel CK-4. Un aceite con alto contenido de cenizas tapa el filtro de partículas y obliga a regenerarlo o reemplazarlo antes de tiempo.",
      },
      {
        q: "¿Por qué usar un aceite de flota mixta?",
        a: "Porque un solo aceite sirve para unidades a diésel y a gasolina. Reduce inventario, evita errores de llenado y simplifica las compras en talleres que atienden camiones, camionetas y montacargas.",
      },
      {
        q: "¿Cuándo conviene un 25W-60?",
        a: "En motores con desgaste que presentan alto consumo de aceite, humo azul o baja presión de aceite, sobre todo en clima caluroso. No se recomienda en motores nuevos ni en clima frío.",
      },
    ],
    relatedIndustries: ["automotriz", "minera", "agroindustria", "manufactura-general"],
    relatedGlossary: ["sae", "viscosidad", "indice-de-viscosidad", "sds"],
  },

  // ── MOTOR A GASOLINA Y MOTO ──
  "aceites-motor-gasolina": {
    id: "aceites-motor-gasolina",
    categoryId: "aceites-lubricantes",
    pageTitle: "Aceite para Motor a Gasolina y Motocicleta",
    metaTitle: "Aceite para Motor a Gasolina y Moto 4T por Mayoreo",
    metaDescription:
      "Aceite para motor a gasolina Trevigo: multigrado API SL 15W-40 y 20W-50, 5W-30 alto desempeño, SAE 40, monogrados y moto 4T 20W-50. Cubeta, tambo y tote.",
    hero: "Aceite para motor a gasolina y moto",
    lead: "Cinco aceites para motores a gasolina y motocicletas de cuatro tiempos, pensados para talleres, lubricentros, agencias y flotas de vehículos ligeros y de reparto que compran por volumen.",
    sections: [
      {
        heading: "Elige por viscosidad y por tipo de motor",
        paragraphs: [
          "La viscosidad correcta está en el manual del vehículo o en el tapón de llenado de aceite. Dentro del catálogo Trevigo:",
        ],
        list: [
          "Autos y camionetas modernos: Alto Desempeño 5W-30",
          "Motores con algunos años de uso, camionetas de trabajo: Gasolina Multigrado SL 15W-40 o 20W-50",
          "Motores en clima cálido y equipo estacionario: Gasolina SAE 40 API SL",
          "Equipo que especifica un solo grado: Gasolina Monogrado SAE 10W a 50",
          "Motocicletas de cuatro tiempos: Motocicleta 4T 20W-50",
        ],
      },
      {
        heading: "¿Por qué una motocicleta necesita su propio aceite?",
        paragraphs: [
          "En la mayoría de motocicletas el mismo aceite lubrica el motor, la caja de velocidades y el clutch húmedo. Un aceite de auto con modificadores de fricción puede hacer patinar el clutch, y los engranes de la caja cortan el aceite y lo adelgazan. Por eso conviene un aceite formulado para motos 4T, como el Motocicleta 4T 20W-50.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué significa API SL?",
        a: "Es un nivel de desempeño del American Petroleum Institute para motores a gasolina. Indica que el aceite cumple pruebas de control de depósitos, lodos, oxidación y desgaste. Los motores más recientes pueden especificar categorías posteriores; revise el manual.",
      },
      {
        q: "¿Puedo usar 20W-50 en un auto moderno?",
        a: "No es lo recomendable. Los motores modernos están diseñados para viscosidades bajas como 5W-30 o 5W-20. Un aceite más grueso tarda más en llegar a las partes en el arranque y aumenta el consumo de combustible.",
      },
      {
        q: "¿El aceite Motocicleta 4T sirve para motos de dos tiempos?",
        a: "No. Los motores de dos tiempos (2T) usan aceite de mezcla con la gasolina. El Motocicleta 4T es solo para motores de cuatro tiempos.",
      },
    ],
    relatedIndustries: ["automotriz", "agroindustria"],
    relatedGlossary: ["sae", "viscosidad", "sds"],
  },

  // ── TRANSMISIÓN Y DIFERENCIAL ──
  "aceites-transmision-diferencial": {
    id: "aceites-transmision-diferencial",
    categoryId: "aceites-lubricantes",
    pageTitle: "Aceite para Transmisión y Diferencial",
    metaTitle: "Aceite para Diferencial GL-5 y ATF Dexron III por Tambo",
    metaDescription:
      "Aceite para diferencial y transmisión Trevigo: engranes GL-5 80W-90 y 85W-140, ATF DEX III, ATF III Dexron/Mercon y ATF II. Cubeta, tambo, tote y granel.",
    hero: "Aceite para transmisión y diferencial",
    lead: "Aceites de engranes de extrema presión API GL-5 para diferenciales y transmisiones manuales, y fluidos ATF para transmisiones automáticas y dirección hidráulica.",
    sections: [
      {
        heading: "Aceites de engranes GL-5: 80W-90 y 85W-140",
        paragraphs: [
          "Los diferenciales usan engranes hipoidales que trabajan con deslizamiento y cargas muy altas. Necesitan un aceite de extrema presión (EP) con nivel API GL-5, que forma una película protectora en los dientes y evita rayado y soldadura en frío.",
        ],
        list: [
          "GL-5 80W-90: el grado de uso general para diferenciales, transmisiones manuales que piden GL-5, mandos finales y rodamientos",
          "GL-5 85W-140: para diferenciales con carga pesada, remolque, pendientes y alta temperatura",
        ],
      },
      {
        heading: "Fluidos para transmisión automática (ATF)",
        paragraphs: [
          "El ATF transmite potencia en el convertidor de par, acciona los cambios y lubrica la transmisión. Cada transmisión está diseñada para un tipo de fluido, por lo que hay que respetar la especificación del fabricante:",
        ],
        list: [
          "ATF DEX III (DEXRON / MERCON III): transmisión automática y dirección hidráulica",
          "ATF III (DEXRON III / MERCON): transmisiones automáticas de modelo reciente que piden esta especificación",
          "ATF II: transmisiones automáticas de modelos anteriores",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo usar aceite GL-5 en una transmisión manual?",
        a: "Solo si el fabricante especifica GL-5. Algunas transmisiones manuales sincronizadas con componentes de bronce piden API GL-4, porque la aditivación GL-5 puede afectar los sincronizadores.",
      },
      {
        q: "¿Cuándo uso 85W-140 en lugar de 80W-90?",
        a: "Cuando el fabricante lo especifica o el diferencial trabaja con carga pesada y alta temperatura: tractocamiones, volteos, equipo minero y unidades que remolcan. En clima frío o equipo que pide 80W-90, use 80W-90.",
      },
      {
        q: "¿El ATF sirve para la dirección hidráulica?",
        a: "Muchos sistemas de dirección hidráulica especifican ATF tipo DEXRON. El ATF DEX III de Trevigo se usa en transmisión automática y dirección hidráulica. Verifique el fluido que pide su vehículo.",
      },
    ],
    relatedIndustries: ["automotriz", "minera", "agroindustria"],
    relatedGlossary: ["sae", "ep-extreme-pressure", "viscosidad"],
  },

  // ── HIDRÁULICOS ──
  "aceites-hidraulicos-iso": {
    id: "aceites-hidraulicos-iso",
    categoryId: "aceites-lubricantes",
    pageTitle: "Aceite Hidráulico ISO 32, 46, 68 y 100",
    metaTitle: "Aceite Hidráulico ISO 46, 68 y 32 por Tambo 208 L",
    metaDescription:
      "Aceite hidráulico Trevigo ISO 32, ISO 46, AW ISO 68, AW ISO 100, multigrado y fluido antiflama. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, N.L.",
    hero: "Aceite hidráulico",
    lead: "Seis aceites hidráulicos para prensas, inyectoras, montacargas, maquinaria móvil y equipo en zonas con riesgo de incendio, en grados ISO VG 32, 46, 68 y 100, multigrado y resistente al fuego.",
    sections: [
      {
        heading: "¿Qué grado ISO VG necesita mi sistema hidráulico?",
        paragraphs: [
          "El grado ISO VG indica la viscosidad del aceite a 40 °C. Se elige según el manual del equipo, la presión del sistema y la temperatura de operación:",
        ],
        list: [
          "ISO 32: baja presión, equipo de precisión, máquinas herramienta o clima frío",
          "ISO 46: el grado de uso general en planta: prensas, inyectoras, montacargas y unidades de potencia",
          "AW ISO 68: antidesgaste, para más temperatura y carga: equipo móvil y prensas grandes",
          "AW ISO 100: antidesgaste, para equipos de alta carga y temperatura",
          "Multigrado: alto índice de viscosidad para equipos que operan en frío y calor extremos",
          "Fluido Antiflama: resistente al fuego, para fundición, acerías, forja y zonas con riesgo de incendio",
        ],
      },
      {
        heading: "Limpieza: la clave de la vida del sistema hidráulico",
        paragraphs: [
          "La mayoría de las fallas de bombas y válvulas hidráulicas se deben a contaminación por partículas y agua, no al aceite en sí. Filtre el aceite nuevo al llenar, cambie filtros a tiempo, mantenga los respiraderos en buen estado y no mezcle aceites de distinto tipo. Antes de cambiar de aceite, drene y limpie el sistema.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué significa AW en un aceite hidráulico?",
        a: "AW significa antidesgaste (anti-wear). Son aceites con aditivos que protegen las zonas de contacto de bombas de paletas y de pistones a alta presión. Los Hidráulicos AW ISO 68 y AW ISO 100 de Trevigo llevan esta aditivación.",
      },
      {
        q: "¿Puedo mezclar aceite hidráulico ISO 46 con ISO 68?",
        a: "No es recomendable. La mezcla cambia la viscosidad y puede combinar aditivos incompatibles. Si necesita cambiar de grado, drene el sistema y cambie filtros.",
      },
      {
        q: "¿Cuándo necesito un fluido hidráulico antiflama?",
        a: "Cuando el sistema hidráulico opera cerca de metal fundido, hornos, soldadura o superficies calientes, donde una fuga de aceite mineral podría causar un incendio. Es común en fundición a presión, acerías, forja y minería subterránea.",
      },
    ],
    relatedIndustries: ["metalmecanica", "manufactura-general", "polimeros", "minera", "automotriz"],
    relatedGlossary: ["iso-vg", "viscosidad", "indice-de-viscosidad", "punto-de-inflamacion"],
  },

  // ── INDUSTRIALES ──
  "aceites-industriales": {
    id: "aceites-industriales",
    categoryId: "aceites-lubricantes",
    pageTitle: "Aceites Industriales para Reductores, Compresores y Transformadores",
    metaTitle: "Aceite para Reductores, Compresores y Dieléctrico",
    metaDescription:
      "Aceites industriales Trevigo: cajas reductoras ISO 32 a 680, guías y correderas, compresores, circulación, transferencia de calor y dieléctrico. Tambo y granel.",
    hero: "Aceites industriales",
    lead: "Siete aceites para la maquinaria de planta: reductores de carga media y alta, guías de máquina herramienta, compresores de aire, sistemas de circulación, calefacción por aceite térmico y transformadores eléctricos.",
    sections: [
      {
        heading: "Aceites para cajas reductoras y engranes industriales",
        paragraphs: [
          "Los reductores se lubrican según el grado ISO VG de su placa. Trevigo maneja dos familias:",
        ],
        list: [
          "Cajas Reductoras ISO 32, 68, 100, 150 y 220: reductores y engranes de carga media, motorreductores, transportadores y agitadores",
          "Cajas Reductoras Alta Carga ISO 320, 460 y 680: extrema presión para alta carga y baja velocidad: molinos, hornos, trituradoras y sinfín",
        ],
      },
      {
        heading: "Aceites para equipos específicos de planta",
        paragraphs: [
          "Cada equipo tiene exigencias distintas que un aceite genérico no cubre bien:",
        ],
        list: [
          "Guías y Correderas: adherente y sin efecto stick-slip, para que las mesas de máquina herramienta se deslicen sin trabarse",
          "Compresores SAE 10W, 30 y 40: alta estabilidad a la oxidación para compresores de tornillo, reciprocantes y centrífugos",
          "Circulación: para maquinaria lubricada por sistemas de circulación: papeleras, laminadoras, chumaceras",
          "Transferencia de Calor ISO 22 y 46: aceite térmico para calefacción indirecta",
          "Dieléctrico: aislamiento y enfriamiento en transformadores y equipo eléctrico",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué grado de aceite uso en un reductor?",
        a: "El que indica la placa o el manual del reductor. Como referencia, ISO 220 es el grado más común en reductores industriales estándar; ISO 320 a 680 se usa en reductores de alta carga y baja velocidad y en reductores de sinfín.",
      },
      {
        q: "¿Puedo usar aceite hidráulico en las guías de mi máquina?",
        a: "No es lo ideal. El aceite para guías tiene agentes de adherencia y modificadores de fricción que evitan que escurra y que la mesa avance a saltos. Un hidráulico escurre y puede causar pérdida de precisión.",
      },
      {
        q: "¿Venden aceite dieléctrico a granel?",
        a: "Sí. El aceite dieléctrico se surte en tambo de 208 L, tote y a granel en pipa para llenado de transformadores. Antes de llenar se recomienda verificar la rigidez dieléctrica y la humedad del aceite.",
      },
    ],
    relatedIndustries: ["manufactura-general", "metalmecanica", "papel-derivados", "minera", "electrica-electronica", "alimenticia"],
    relatedGlossary: ["iso-vg", "ep-extreme-pressure", "viscosidad", "punto-de-inflamacion", "ibc"],
  },
};
