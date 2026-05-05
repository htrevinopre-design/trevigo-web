// Casos de éxito reales (anonimizados) usados en /casos-de-exito
// y mostrados contextualmente en /industrias/[slug] y /servicios/[slug].

export type CaseStudy = {
  id: string;
  industry: string;
  industrySlug?: string; // matches a slug in INDUSTRIES
  serviceSlug?: string; // matches a slug in SERVICES_CONTENT (optional)
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  productsUsed?: { name: string; id: string }[];
  serviceArea: string;
};

export const CASES: CaseStudy[] = [
  {
    id: "fosfatizado-automotriz-tier1",
    industry: "Automotriz Tier 1",
    industrySlug: "automotriz",
    serviceSlug: "pintura-electrostatica",
    location: "Apodaca, Nuevo León",
    serviceArea: "Tratamiento de Metales",
    challenge:
      "Línea de fosfatizado al zinc con peso de capa fuera de rango (fluctuaciones de 2.0 a 4.5 g/m²) y rechazos de pintura por adherencia deficiente. Consumo de químico 30% por encima del benchmark del corporativo.",
    solution:
      "Diagnóstico técnico en planta, ajuste de relación de aceleración, sustitución del fosfatizador por nuestro Fosfato de Zinc-Calcio de Alta Resistencia y protocolo de control de baño semanal con titulaciones automatizadas.",
    results: [
      "Peso de capa estabilizado en 2.8 a 3.2 g/m² (dentro de rango OEM)",
      "Reducción de 22% en consumo de químico mensual",
      "Cero rechazos por adherencia en 6 meses consecutivos",
      "1,500+ horas de niebla salina sin óxido rojo en pruebas ASTM B117",
    ],
    productsUsed: [
      { name: "Fosfato de Zinc-Calcio de Alta Resistencia", id: "fosfato-zinc-calcio-alta-resistencia" },
      { name: "Limpiador Líquido Alcalino para Metales", id: "limpiador-liquido-alcalino-metales" },
    ],
  },
  {
    id: "ptar-refresquera",
    industry: "Refresquera",
    industrySlug: "refresquera",
    serviceSlug: "optimizacion-procesos",
    location: "Saltillo, Coahuila",
    serviceArea: "Tratamiento de Aguas",
    challenge:
      "Planta de tratamiento de aguas residuales con incumplimientos recurrentes de NOM-002-SEMARNAT. DQO de descarga superaba 320 mg/L cuando el límite local es 200 mg/L. Costos de químico desbalanceados frente a la carga real.",
    solution:
      "Caracterización del agua cruda con muestreo de 4 semanas, sustitución de coagulante inorgánico por Policloruro de Aluminio de Alta Carga, optimización de polielectrolito aniónico y rediseño del protocolo de Jar Test mensual.",
    results: [
      "DQO promedio bajó a 145 mg/L (cumplimiento total NOM-002)",
      "Reducción de 35% en lodos generados",
      "Costo por m³ tratado bajó 18%",
      "Cero sanciones de la autoridad municipal en 12 meses",
    ],
    productsUsed: [
      { name: "Coagulante de Alta Carga Catiónica", id: "coagulante-alta-carga-cationica" },
      { name: "Floculante Aniónico de Alto Peso Molecular", id: "floculante-anionico-alto-peso" },
    ],
  },
  {
    id: "tropicalizado-electrodomesticos",
    industry: "Electrodomésticos",
    industrySlug: "electrica-electronica",
    serviceSlug: "tropicalizado",
    location: "Santa Catarina, Nuevo León",
    serviceArea: "Tratamiento de Metales",
    challenge:
      "Gabinetes metálicos con falla de corrosión en piezas exportadas a la Costa del Pacífico. Sistema actual con cromo hexavalente que estaba siendo eliminado por política corporativa de sustentabilidad.",
    solution:
      "Implementación de sistema tropicalizado libre de cromo basado en Sellador Anticorrosión Libre de Cromo, validación con pruebas de niebla salina y capacitación al equipo de calidad para control de baño.",
    results: [
      "1,200+ horas de niebla salina sin óxido rojo (vs 720 horas del sistema anterior)",
      "Cumplimiento total con directiva RoHS y REACH",
      "Cero quejas por corrosión en garantía durante 18 meses",
      "Costo operativo 12% menor que el sistema con cromo",
    ],
    productsUsed: [
      { name: "Sellador Anticorrosión Libre de Cromo", id: "sellador-anticorrosion-libre-cromo" },
      { name: "Pasivador de Aluminio con Cromo", id: "pasivador-aluminio-cromo" },
    ],
  },
  {
    id: "decapado-metalmecanica",
    industry: "Metalmecánica",
    industrySlug: "metalmecanica",
    serviceSlug: "decapado",
    location: "Monterrey, Nuevo León",
    serviceArea: "Tratamiento de Metales",
    challenge:
      "Tiempo de decapado por pieza superaba 25 minutos generando cuello de botella en la línea de pintura. Consumo de ácido clorhídrico al doble del benchmark sectorial debido a baño envejecido y temperatura no controlada.",
    solution:
      "Sustitución parcial del HCl por nuestro Limpiador Ácido Desincrustante Multisuperficies con inhibidor, instalación de control de temperatura del baño y régimen de purga programada.",
    results: [
      "Tiempo de decapado por pieza bajó a 12 minutos (52% menos)",
      "Consumo mensual de ácido se redujo 40%",
      "Eliminación del ataque al metal base por sobre-decapado",
      "Capacidad efectiva de la línea de pintura aumentó 30%",
    ],
    productsUsed: [
      { name: "Limpiador Ácido Desincrustante Multisuperficies", id: "limpiador-acido-desincrustante" },
      { name: "Limpiador Líquido Alcalino para Metales", id: "limpiador-liquido-alcalino-metales" },
    ],
  },
  {
    id: "pasivado-aeronautica",
    industry: "Aeronáutica",
    industrySlug: "aeronautica",
    serviceSlug: "pasivado",
    location: "Querétaro, México",
    serviceArea: "Tratamiento de Metales",
    challenge:
      "Componentes de acero inoxidable 316L con presencia de hierro libre tras maquinado. Especificación de cliente exigía pasivado certificado conforme a ASTM A967 y validación con prueba de inmersión en sulfato de cobre.",
    solution:
      "Diseño de protocolo de pasivado con Ácido Nítrico al 20%, parámetros validados de tiempo y temperatura, registro documental por lote y entrega de certificado por proceso.",
    results: [
      "100% de aprobación en pruebas ASTM A967",
      "Trazabilidad documental completa para auditorías OEM",
      "Tiempo de proceso optimizado en 18% vs sistema anterior",
      "Aprobación de proveeduría con cliente Tier 1 aeronáutico",
    ],
    productsUsed: [
      { name: "Ácido Nítrico", id: "acido-nitrico" },
      { name: "Desoxidante y Limpiador para Acero Inoxidable", id: "desoxidante-acero-inoxidable" },
    ],
  },
  {
    id: "calderas-alimenticia",
    industry: "Alimenticia",
    industrySlug: "alimenticia",
    serviceSlug: "mantenimiento",
    location: "García, Nuevo León",
    serviceArea: "Tratamiento de Aguas",
    challenge:
      "Planta de proceso con generación de vapor a 12 bar enfrentaba paros recurrentes por incrustación en calderas. Pérdida de eficiencia térmica del 8% medida por consumo de gas, y mantenimientos químicos cada 4 meses.",
    solution:
      "Programa integrado de tratamiento de agua de alimentación: ablandador, dosificación de Inhibidor de Oxígeno para Calderas, secuestrante de iones y monitoreo de purga continua con control de TDS.",
    results: [
      "Eliminación total de paros no programados por incrustación",
      "Recuperación de 7% en eficiencia térmica de calderas",
      "Mantenimientos químicos espaciados a 12+ meses",
      "Ahorro neto anual de $480,000 MXN en consumo de gas",
    ],
    productsUsed: [
      { name: "Inhibidor de Oxígeno para Calderas", id: "inhibidor-oxigeno-calderas" },
      { name: "Agente Secuestrante para Tratamiento de Agua", id: "agente-secuestrante" },
    ],
  },
];

export const getCasesByIndustrySlug = (slug: string): CaseStudy[] =>
  CASES.filter((c) => c.industrySlug === slug);

export const getCasesByServiceSlug = (slug: string): CaseStudy[] =>
  CASES.filter((c) => c.serviceSlug === slug);
