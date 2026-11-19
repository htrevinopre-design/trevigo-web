// ============================================================
// CATÁLOGO DE ACEITES LUBRICANTES TREVIGO 2026
// Fuente: "Trevigo Lubricants Catalog 2026" (5 líneas, 30 aceites).
// Aquí vive la categoría completa (productos + contenido técnico
// por producto). lib/data.ts la inserta en PRODUCT_CATEGORIES y
// lib/products-content.ts mezcla LUBRICANTES_CONTENT.
//
// SKUs LUB-1xx a LUB-5xx: códigos internos del sitio, uno por
// producto y por línea (1 diésel, 2 gasolina/moto, 3 transmisión,
// 4 hidráulicos, 5 industriales). Cámbialos si el ERP usa otros.
// ============================================================

import type { Product, ProductCategory, ProductFormat } from "./data";
import type { ProductContent } from "./products-content";

/** Presentaciones del catálogo: cubeta 19 L, tambo 208 L, tote 1,000 L (granel en pipa bajo cotización). */
export const FORMATS_LUBRICANTES: ProductFormat[] = [
  { name: "cubeta", label: "Cubeta", weight: "19 L",    image: "/formatos/cubeta.png" },
  { name: "tambo",  label: "Tambo",  weight: "208 L",   image: "/formatos/tambo.png"  },
  { name: "tote",   label: "Tote",   weight: "1,000 L", image: "/formatos/tote.png"   },
];

const GRANEL = { label: "A granel", value: "Pipa, bajo cotización por volumen" };

function lub(
  id: string,
  name: string,
  sku: string,
  shortDescription: string,
  specs: { label: string; value: string }[],
  seoTitle: string,
  seoDescription: string,
): Product {
  return {
    id,
    name,
    sku,
    shortDescription,
    seoTitle,
    seoDescription,
    image: `/productos/lubricantes/${id}.png`,
    specs: [...specs, GRANEL],
    formats: FORMATS_LUBRICANTES,
  };
}

export const LUBRICANTES_CATEGORY: ProductCategory = {
  id: "aceites-lubricantes",
  name: "Aceites Lubricantes",
  icon: "⚙️",
  description:
    "Aceites lubricantes marca Trevigo para motor a diésel y gasolina, transmisión y diferencial, sistemas hidráulicos y maquinaria industrial. Cubeta 19 L, tambo 208 L, tote y granel.",
  subcategories: [
    // ── 01 MOTOR A DIÉSEL ──────────────────────────────────────
    {
      id: "aceites-motor-diesel",
      name: "Aceite para Motor a Diésel",
      products: [
        lub(
          "aceite-diesel-turbo-ci4",
          "Aceite Diésel Turbo CI-4 SAE 15W-40 / 20W-50",
          "LUB-101",
          "Aceite multigrado para motor a diésel turboalimentado de trabajo pesado, nivel API CI-4, con alta reserva alcalina para controlar ácidos y hollín.",
          [
            { label: "Grado SAE", value: "15W-40 · 20W-50" },
            { label: "Nivel API", value: "CI-4" },
            { label: "Servicio", value: "Diésel trabajo pesado, turbo" },
          ],
          "Aceite Diésel Turbo API CI-4 15W-40 y 20W-50",
          "Aceite para motor a diésel turbo API CI-4, SAE 15W-40 y 20W-50, alta reserva alcalina. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, envío a todo México.",
        ),
        lub(
          "aceite-diesel-monogrado-cf2",
          "Aceite Diésel Monogrado CF-2 SAE 10W a 50",
          "LUB-102",
          "Aceite monogrado universal para motor a diésel en condiciones severas, nivel API CF-2, disponible en grados SAE 10W, 20W, 30, 40 y 50.",
          [
            { label: "Grado SAE", value: "10W, 20W, 30, 40, 50 (monogrado)" },
            { label: "Nivel API", value: "CF-2" },
            { label: "Servicio", value: "Diésel en condiciones severas" },
          ],
          "Aceite Diésel Monogrado API CF-2 SAE 30, 40, 50",
          "Aceite monogrado para motor a diésel API CF-2 en SAE 10W, 20W, 30, 40 y 50. Para condiciones severas. Cubeta, tambo, tote o granel. Cotiza con Trevigo.",
        ),
        lub(
          "aceite-diesel-ck4-sae-40",
          "Aceite Diésel CK-4 SAE 40",
          "LUB-103",
          "Aceite para motores a diésel de especificación reciente, nivel API CK-4 / SN Plus, con protección contra oxidación, aireación y pérdida de viscosidad.",
          [
            { label: "Grado SAE", value: "40" },
            { label: "Nivel API", value: "CK-4 / SN Plus" },
            { label: "Servicio", value: "Motores diésel de especificación reciente" },
          ],
          "Aceite Diésel API CK-4 SAE 40 para Motor Reciente",
          "Aceite para motor a diésel API CK-4 / SN Plus SAE 40 para motores de especificación reciente. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, N.L.",
        ),
        lub(
          "aceite-diesel-cj4-plus",
          "Aceite Diésel CJ-4 Plus",
          "LUB-104",
          "Aceite para motores a diésel con sistemas de postratamiento de gases (DPF, EGR), nivel API CJ-4 Plus, de bajo contenido de cenizas.",
          [
            { label: "Nivel API", value: "CJ-4 Plus" },
            { label: "Servicio", value: "Motores con postratamiento de gases (DPF/EGR)" },
          ],
          "Aceite Diésel API CJ-4 Plus para Motores con DPF",
          "Aceite para motor a diésel API CJ-4 Plus, bajo en cenizas, para equipos con postratamiento de gases DPF y EGR. Cubeta, tambo, tote o granel. Cotiza hoy.",
        ),
        lub(
          "aceite-flota-mixta-ci4-plus-15w40",
          "Aceite Flota Mixta CI-4 Plus SAE 15W-40",
          "LUB-105",
          "Aceite multigrado para flotas mixtas de motores a diésel y gasolina, nivel API CI-4 Plus / SL. Un solo aceite para toda la flota.",
          [
            { label: "Grado SAE", value: "15W-40" },
            { label: "Nivel API", value: "CI-4 Plus / SL" },
            { label: "Servicio", value: "Flotas mixtas diésel y gasolina" },
          ],
          "Aceite Flota Mixta API CI-4 Plus / SL 15W-40",
          "Aceite 15W-40 API CI-4 Plus / SL para flotas mixtas de diésel y gasolina: un solo aceite para toda la flota. Cubeta, tambo, tote o granel. Trevigo, Monterrey.",
        ),
        lub(
          "aceite-diesel-15w40",
          "Aceite Diésel SAE 15W-40",
          "LUB-106",
          "Aceite multigrado SAE 15W-40 de uso general para flotas a diésel: camiones, autobuses, maquinaria y plantas de emergencia.",
          [
            { label: "Grado SAE", value: "15W-40" },
            { label: "Servicio", value: "Uso general en flota a diésel" },
          ],
          "Aceite 15W-40 para Motor a Diésel por Tambo",
          "Aceite multigrado SAE 15W-40 para motor a diésel, uso general en flotas, maquinaria y plantas de emergencia. Cubeta 19 L, tambo 208 L, tote y granel.",
        ),
        lub(
          "aceite-diesel-25w60",
          "Aceite Diésel SAE 25W-60",
          "LUB-107",
          "Aceite multigrado de alta viscosidad SAE 25W-60 para motores a diésel con desgaste y alto consumo de aceite.",
          [
            { label: "Grado SAE", value: "25W-60" },
            { label: "Servicio", value: "Motores con desgaste y alto consumo" },
          ],
          "Aceite 25W-60 para Motor Diésel con Desgaste",
          "Aceite SAE 25W-60 de alta viscosidad para motores a diésel con desgaste, fugas y alto consumo de aceite. Cubeta, tambo, tote o granel. Cotiza con Trevigo.",
        ),
      ],
    },

    // ── 02 MOTOR A GASOLINA Y MOTO ─────────────────────────────
    {
      id: "aceites-motor-gasolina",
      name: "Aceite para Motor a Gasolina y Moto",
      products: [
        lub(
          "aceite-gasolina-multigrado-sl",
          "Aceite Gasolina Multigrado SL SAE 15W-40 / 20W-50",
          "LUB-201",
          "Aceite multigrado para motores a gasolina, nivel API SL, en SAE 15W-40 y 20W-50, formulado para intervalos de cambio extendidos.",
          [
            { label: "Grado SAE", value: "15W-40 · 20W-50" },
            { label: "Nivel API", value: "SL" },
            { label: "Servicio", value: "Motor a gasolina, intervalos extendidos" },
          ],
          "Aceite Gasolina API SL 15W-40 y 20W-50 por Mayoreo",
          "Aceite multigrado para motor a gasolina API SL, SAE 15W-40 y 20W-50, para intervalos extendidos. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, N.L.",
        ),
        lub(
          "aceite-gasolina-monogrado",
          "Aceite Gasolina Monogrado SAE 10W a 50",
          "LUB-202",
          "Aceite monogrado para motores a gasolina, disponible en grados SAE 10W, 20W, 30, 40 y 50.",
          [
            { label: "Grado SAE", value: "10W, 20W, 30, 40, 50 (monogrado)" },
            { label: "Servicio", value: "Motor a gasolina" },
          ],
          "Aceite Monogrado para Motor a Gasolina SAE 30 a 50",
          "Aceite monogrado para motor a gasolina en SAE 10W, 20W, 30, 40 y 50. Para talleres, flotas y equipo estacionario. Cubeta, tambo, tote o granel.",
        ),
        lub(
          "aceite-gasolina-sae-40",
          "Aceite Gasolina SAE 40 API SL",
          "LUB-203",
          "Aceite monogrado SAE 40 para motor a gasolina, nivel API SL, para motores en buen estado que operan en clima cálido.",
          [
            { label: "Grado SAE", value: "40" },
            { label: "Nivel API", value: "SL" },
            { label: "Servicio", value: "Motor a gasolina, monogrado" },
          ],
          "Aceite SAE 40 API SL para Motor a Gasolina",
          "Aceite monogrado SAE 40 API SL para motor a gasolina. Ideal para clima cálido y equipo estacionario. Cubeta 19 L, tambo 208 L, tote y granel. Cotiza hoy.",
        ),
        lub(
          "aceite-motor-alto-desempeno-5w30",
          "Aceite Alto Desempeño SAE 5W-30",
          "LUB-204",
          "Aceite multigrado de baja viscosidad SAE 5W-30 para motores a gasolina de alto desempeño y tolerancias cerradas.",
          [
            { label: "Grado SAE", value: "5W-30" },
            { label: "Servicio", value: "Motores a gasolina de alto desempeño" },
          ],
          "Aceite 5W-30 Alto Desempeño para Motor a Gasolina",
          "Aceite SAE 5W-30 de alto desempeño para motores a gasolina modernos: arranque en frío rápido y menor fricción. Cubeta, tambo, tote o granel. Trevigo.",
        ),
        lub(
          "aceite-motocicleta-4t-20w50",
          "Aceite Motocicleta 4T SAE 20W-50",
          "LUB-205",
          "Aceite multigrado SAE 20W-50 para motocicletas de cuatro tiempos, que lubrica motor, caja y clutch húmedo.",
          [
            { label: "Grado SAE", value: "20W-50" },
            { label: "Servicio", value: "Motocicletas de cuatro tiempos (4T)" },
          ],
          "Aceite para Motocicleta 4T 20W-50 por Mayoreo",
          "Aceite 20W-50 para motocicleta de cuatro tiempos (4T), para flotas de reparto y talleres. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, N.L.",
        ),
      ],
    },

    // ── 03 TRANSMISIÓN Y DIFERENCIAL ───────────────────────────
    {
      id: "aceites-transmision-diferencial",
      name: "Aceite para Transmisión y Diferencial",
      products: [
        lub(
          "aceite-engranes-gl5-80w90",
          "Aceite para Engranes GL-5 SAE 80W-90",
          "LUB-301",
          "Aceite de extrema presión SAE 80W-90, nivel API GL-5, para transmisión manual, diferencial y rodamientos.",
          [
            { label: "Grado SAE", value: "80W-90" },
            { label: "Nivel API", value: "GL-5" },
            { label: "Servicio", value: "Transmisión manual, diferencial, rodamientos" },
          ],
          "Aceite 80W-90 GL-5 para Diferencial y Transmisión",
          "Aceite para engranes SAE 80W-90 API GL-5 de extrema presión para diferencial, transmisión manual y rodamientos. Cubeta, tambo, tote o granel. Cotiza hoy.",
        ),
        lub(
          "aceite-engranes-gl5-85w140",
          "Aceite para Engranes GL-5 SAE 85W-140",
          "LUB-302",
          "Aceite de extrema presión SAE 85W-140, nivel API GL-5, para diferenciales con carga pesada y alta temperatura.",
          [
            { label: "Grado SAE", value: "85W-140" },
            { label: "Nivel API", value: "GL-5" },
            { label: "Servicio", value: "Diferenciales con carga pesada y calor" },
          ],
          "Aceite 85W-140 GL-5 para Diferencial Carga Pesada",
          "Aceite para engranes SAE 85W-140 API GL-5 para diferenciales de camión y equipo con carga pesada y calor. Cubeta 19 L, tambo 208 L, tote y granel.",
        ),
        lub(
          "atf-dex-iii",
          "Aceite ATF DEX III (DEXRON / MERCON III)",
          "LUB-303",
          "Fluido para transmisión automática y dirección hidráulica, tipo DEXRON / MERCON III.",
          [
            { label: "Tipo", value: "DEXRON / MERCON III" },
            { label: "Servicio", value: "Transmisión automática y dirección hidráulica" },
          ],
          "Aceite ATF Dexron III / Mercon para Transmisión",
          "Fluido ATF tipo DEXRON / MERCON III para transmisión automática y dirección hidráulica. Cubeta 19 L, tambo 208 L, tote y granel. Industrias Trevigo, Monterrey.",
        ),
        lub(
          "atf-iii-dexron-mercon",
          "Aceite ATF III (DEXRON III / MERCON)",
          "LUB-304",
          "Fluido para transmisiones automáticas de modelo reciente que especifican DEXRON III / MERCON.",
          [
            { label: "Tipo", value: "DEXRON III / MERCON" },
            { label: "Servicio", value: "Transmisiones automáticas de modelo reciente" },
          ],
          "ATF III Dexron III / Mercon por Cubeta y Tambo",
          "Aceite ATF III tipo DEXRON III / MERCON para transmisiones automáticas. Para talleres y flotas. Cubeta 19 L, tambo 208 L, tote y granel. Cotiza con Trevigo.",
        ),
        lub(
          "atf-ii",
          "Aceite ATF II para Transmisión Automática",
          "LUB-305",
          "Fluido para transmisiones automáticas de modelos anteriores que especifican ATF tipo II.",
          [
            { label: "Tipo", value: "ATF tipo II" },
            { label: "Servicio", value: "Transmisiones automáticas de modelos anteriores" },
          ],
          "Aceite ATF II para Transmisión Automática",
          "Fluido ATF II para transmisiones automáticas de modelos anteriores y equipo que especifica ATF tipo II. Cubeta, tambo, tote o granel. Monterrey, N.L.",
        ),
      ],
    },

    // ── 04 HIDRÁULICOS ─────────────────────────────────────────
    {
      id: "aceites-hidraulicos-iso",
      name: "Aceite Hidráulico",
      products: [
        lub(
          "aceite-hidraulico-iso-32",
          "Aceite Hidráulico ISO 32",
          "LUB-401",
          "Aceite hidráulico de baja viscosidad ISO VG 32 para sistemas de baja presión, equipos de precisión y operación en clima frío.",
          [
            { label: "Grado ISO VG", value: "32" },
            { label: "Servicio", value: "Baja viscosidad o clima frío" },
          ],
          "Aceite Hidráulico ISO 32 por Tambo y Cubeta",
          "Aceite hidráulico ISO VG 32 para sistemas de baja presión, máquinas de precisión y clima frío. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, N.L.",
        ),
        lub(
          "aceite-hidraulico-iso-46",
          "Aceite Hidráulico ISO 46",
          "LUB-402",
          "Aceite hidráulico ISO VG 46, el grado de uso general en planta para prensas, inyectoras, montacargas y unidades de potencia.",
          [
            { label: "Grado ISO VG", value: "46" },
            { label: "Servicio", value: "Uso general en planta" },
          ],
          "Aceite Hidráulico ISO 46: Tambo 208 L y Cubeta",
          "Aceite hidráulico ISO VG 46, el grado de uso general en planta: prensas, inyectoras y montacargas. Cubeta 19 L, tambo 208 L, tote y granel. Cotiza hoy.",
        ),
        lub(
          "aceite-hidraulico-aw-iso-68",
          "Aceite Hidráulico AW ISO 68",
          "LUB-403",
          "Aceite hidráulico antidesgaste (AW) ISO VG 68 para sistemas que trabajan con más temperatura y carga.",
          [
            { label: "Grado ISO VG", value: "68" },
            { label: "Aditivación", value: "Antidesgaste (AW)" },
            { label: "Servicio", value: "Mayor temperatura y carga" },
          ],
          "Aceite Hidráulico AW ISO 68 Antidesgaste",
          "Aceite hidráulico antidesgaste AW ISO VG 68 para sistemas con alta temperatura y carga: maquinaria pesada y equipo móvil. Cubeta, tambo, tote o granel.",
        ),
        lub(
          "aceite-hidraulico-aw-iso-100",
          "Aceite Hidráulico AW ISO 100",
          "LUB-404",
          "Aceite hidráulico antidesgaste (AW) ISO VG 100 para equipos de alta carga y temperatura.",
          [
            { label: "Grado ISO VG", value: "100" },
            { label: "Aditivación", value: "Antidesgaste (AW)" },
            { label: "Servicio", value: "Equipos de alta carga y temperatura" },
          ],
          "Aceite Hidráulico AW ISO 100 para Alta Carga",
          "Aceite hidráulico antidesgaste AW ISO VG 100 para equipos de alta carga y temperatura: prensas grandes, minería y construcción. Cubeta, tambo, tote o granel.",
        ),
        lub(
          "aceite-hidraulico-multigrado",
          "Aceite Hidráulico Multigrado",
          "LUB-405",
          "Aceite hidráulico multigrado de alto índice de viscosidad para condiciones extremas de frío y calor.",
          [
            { label: "Tipo", value: "Multigrado (alto índice de viscosidad)" },
            { label: "Servicio", value: "Condiciones extremas: frío y calor" },
          ],
          "Aceite Hidráulico Multigrado para Frío y Calor",
          "Aceite hidráulico multigrado de alto índice de viscosidad para equipo que opera en frío y calor extremos: maquinaria móvil y a la intemperie. Cotiza hoy.",
        ),
        lub(
          "fluido-hidraulico-antiflama",
          "Fluido Hidráulico Antiflama",
          "LUB-406",
          "Fluido hidráulico resistente al fuego para sistemas que operan en zonas con riesgo de incendio.",
          [
            { label: "Tipo", value: "Resistente al fuego" },
            { label: "Servicio", value: "Zonas con riesgo de incendio" },
          ],
          "Fluido Hidráulico Antiflama Resistente al Fuego",
          "Fluido hidráulico antiflama, resistente al fuego, para fundición, acerías, forja y zonas con riesgo de incendio. Cubeta, tambo, tote o granel. Monterrey, N.L.",
        ),
      ],
    },

    // ── 05 INDUSTRIALES ────────────────────────────────────────
    {
      id: "aceites-industriales",
      name: "Aceites Industriales",
      products: [
        lub(
          "aceite-cajas-reductoras",
          "Aceite para Cajas Reductoras ISO 32 a 220",
          "LUB-501",
          "Aceite para reductores y engranes industriales de carga media, en grados ISO VG 32, 68, 100, 150 y 220.",
          [
            { label: "Grado ISO VG", value: "32 · 68 · 100 · 150 · 220" },
            { label: "Servicio", value: "Reductores y engranes de carga media" },
          ],
          "Aceite para Reductores ISO 68, 100, 150 y 220",
          "Aceite para cajas reductoras y engranes industriales de carga media, ISO VG 32, 68, 100, 150 y 220. Cubeta 19 L, tambo 208 L, tote y granel. Cotiza hoy.",
        ),
        lub(
          "aceite-cajas-reductoras-alta-carga",
          "Aceite para Cajas Reductoras Alta Carga ISO 320 a 680",
          "LUB-502",
          "Aceite de extrema presión para reductores de alta carga y baja velocidad, en grados ISO VG 320, 460 y 680.",
          [
            { label: "Grado ISO VG", value: "320 · 460 · 680" },
            { label: "Servicio", value: "Alta carga y baja velocidad" },
          ],
          "Aceite para Reductores Alta Carga ISO 320, 460, 680",
          "Aceite EP para cajas reductoras de alta carga y baja velocidad, ISO VG 320, 460 y 680: minería, cementeras y acerías. Cubeta, tambo, tote o granel.",
        ),
        lub(
          "aceite-guias-correderas",
          "Aceite para Guías y Correderas",
          "LUB-503",
          "Aceite para guías, correderas y bancadas de máquina herramienta, que permite un deslizamiento sin trabarse.",
          [
            { label: "Tipo", value: "Aceite para guías (way oil)" },
            { label: "Servicio", value: "Máquina herramienta: guías y bancadas" },
          ],
          "Aceite para Guías y Correderas de Máquina CNC",
          "Aceite para guías, correderas y bancadas de máquina herramienta y CNC: deslizamiento suave sin trabarse. Cubeta 19 L, tambo 208 L, tote y granel.",
        ),
        lub(
          "aceite-compresores",
          "Aceite para Compresores SAE 10W, 30 y 40",
          "LUB-504",
          "Aceite para compresores de aire de tornillo, reciprocantes y centrífugos, en grados SAE 10W, 30 y 40.",
          [
            { label: "Grado SAE", value: "10W · 30 · 40" },
            { label: "Servicio", value: "Compresores de tornillo, reciprocantes y centrífugos" },
          ],
          "Aceite para Compresor de Aire SAE 30 y 40",
          "Aceite para compresores de aire de tornillo, reciprocantes y centrífugos, SAE 10W, 30 y 40. Cubeta 19 L, tambo 208 L, tote y granel. Monterrey, N.L.",
        ),
        lub(
          "aceite-circulacion",
          "Aceite para Sistemas de Circulación",
          "LUB-505",
          "Aceite para maquinaria de planta lubricada por sistemas de circulación, con buena separación de agua y estabilidad a la oxidación.",
          [
            { label: "Tipo", value: "Aceite de circulación" },
            { label: "Servicio", value: "Maquinaria de planta por circulación" },
          ],
          "Aceite de Circulación para Maquinaria Industrial",
          "Aceite para sistemas de lubricación por circulación en maquinaria de planta, chumaceras y rodamientos. Cubeta, tambo, tote o granel. Cotiza con Trevigo.",
        ),
        lub(
          "aceite-transferencia-calor",
          "Aceite de Transferencia de Calor ISO 22 / 46",
          "LUB-506",
          "Aceite térmico para sistemas de calefacción indirecta, en grados ISO VG 22 y 46.",
          [
            { label: "Grado ISO VG", value: "22 · 46" },
            { label: "Servicio", value: "Calefacción indirecta" },
          ],
          "Aceite Térmico de Transferencia de Calor ISO 22 y 46",
          "Aceite de transferencia de calor ISO VG 22 y 46 para calefacción indirecta: calentadores de fluido térmico, prensas y reactores. Cubeta, tambo, tote o granel.",
        ),
        lub(
          "aceite-dielectrico",
          "Aceite Dieléctrico para Transformadores",
          "LUB-507",
          "Aceite aislante para equipo eléctrico que da aislamiento y enfriamiento en transformadores.",
          [
            { label: "Tipo", value: "Aceite aislante (dieléctrico)" },
            { label: "Servicio", value: "Transformadores y equipo eléctrico" },
          ],
          "Aceite Dieléctrico para Transformadores por Tambo",
          "Aceite dieléctrico para transformadores y equipo eléctrico: aislamiento y enfriamiento. Cubeta, tambo 208 L, tote y granel en pipa. Trevigo, Monterrey.",
        ),
      ],
    },
  ],
  get products() {
    return this.subcategories.flatMap((sc) => sc.products);
  },
};

// ============================================================
// CONTENIDO TÉCNICO POR PRODUCTO (descripción + aplicaciones + nota)
// ============================================================

export const LUBRICANTES_CONTENT: Record<string, ProductContent> = {
  // ── MOTOR A DIÉSEL ──
  "aceite-diesel-turbo-ci4": {
    description:
      "El Diésel Turbo CI-4 de Trevigo es un aceite multigrado para motores a diésel de trabajo pesado, con y sin turbocargador, que cumple el nivel de desempeño API CI-4. Su alta reserva alcalina neutraliza los ácidos que se forman en la combustión y su aditivación detergente-dispersante mantiene el hollín en suspensión, lo que evita lodos, depósitos en pistones y espesamiento del aceite. Se ofrece en SAE 15W-40, el grado más usado en flotas de carga en México, y en SAE 20W-50 para motores con más horas de uso o que operan en clima muy caluroso. Es la opción estándar para camiones, tractocamiones, autobuses y maquinaria con motores de recirculación de gases (EGR).",
    applications: [
      "Tractocamiones y camiones de carga en rutas largas",
      "Autobuses urbanos y foráneos",
      "Maquinaria de construcción y minería con motor a diésel",
      "Plantas de emergencia y generadores a diésel",
      "Tractores y equipo agrícola",
    ],
    notes:
      "Para motores con filtro de partículas (DPF) que exigen aceite bajo en cenizas use el Diésel CJ-4 Plus o CK-4. Respete el intervalo de cambio del fabricante del motor o defínalo con análisis de aceite.",
  },
  "aceite-diesel-monogrado-cf2": {
    description:
      "El Diésel Monogrado CF-2 es un aceite de un solo grado para motores a diésel que operan en condiciones severas, con nivel de desempeño API CF-2. Se fabrica en SAE 10W, 20W, 30, 40 y 50, lo que permite elegir la viscosidad exacta según el motor, la carga y la temperatura de operación. Su aditivación protege contra desgaste de cilindros y anillos y contra la formación de depósitos en zonas calientes. Los monogrados siguen siendo la especificación de muchos motores estacionarios, motores de dos tiempos, equipo ferroviario y maquinaria antigua, así como de transmisiones y mandos finales de equipo pesado que piden aceite de motor monogrado.",
    applications: [
      "Motores a diésel estacionarios y de bombeo",
      "Motores a diésel de dos tiempos que especifican API CF-2",
      "Maquinaria pesada antigua que pide monogrado SAE 30 o 40",
      "Transmisiones y mandos finales que especifican aceite de motor monogrado",
      "Equipo que opera a temperatura constante todo el año",
    ],
    notes:
      "Un monogrado no tiene el desempeño en arranque en frío de un multigrado. Elija el grado SAE según el manual del fabricante y la temperatura ambiente mínima.",
  },
  "aceite-diesel-ck4-sae-40": {
    description:
      "El Diésel CK-4 es el aceite de Trevigo para motores a diésel de especificación reciente. Cumple el nivel de desempeño API CK-4, la categoría vigente para motores de trabajo pesado, que mejora la resistencia a la oxidación, a la aireación y a la pérdida de viscosidad por corte frente a categorías anteriores. Su doble clasificación con API SN Plus lo hace adecuado también para equipos a gasolina en la misma operación. Está pensado para motores modernos con sistemas de postratamiento de gases y para flotas que buscan proteger motores nuevos y extender intervalos de cambio con respaldo de análisis de aceite.",
    applications: [
      "Tractocamiones y camiones de modelo reciente",
      "Motores a diésel con sistemas de postratamiento de gases",
      "Flotas que buscan intervalos de cambio extendidos",
      "Maquinaria de construcción de especificación reciente",
      "Operaciones con equipos a diésel y gasolina (doble clasificación SN Plus)",
    ],
    notes:
      "API CK-4 es compatible hacia atrás con motores que piden CJ-4, CI-4 Plus y CI-4. Confirme en el manual del motor el grado SAE que especifica el fabricante.",
  },
  "aceite-diesel-cj4-plus": {
    description:
      "El Diésel CJ-4 Plus es un aceite para motores a diésel equipados con sistemas de postratamiento de gases, como filtro de partículas (DPF) y recirculación de gases (EGR). Cumple el nivel API CJ-4 Plus, una formulación de bajo contenido de cenizas sulfatadas, fósforo y azufre que protege estos sistemas: un aceite con demasiada ceniza tapa el DPF y obliga a regeneraciones más frecuentes o a reemplazarlo. Al mismo tiempo mantiene el control de hollín, desgaste y oxidación que exige un motor de trabajo pesado. Es la opción para flotas con motores de las normas de emisiones de 2007 en adelante que funcionan con diésel de ultra bajo azufre.",
    applications: [
      "Camiones y tractocamiones con filtro de partículas (DPF)",
      "Motores con recirculación de gases (EGR)",
      "Flotas con motores de normas de emisiones de 2007 en adelante",
      "Autobuses de modelo reciente",
      "Maquinaria con sistemas de postratamiento de gases",
    ],
    notes:
      "Los aceites bajos en cenizas están diseñados para diésel de ultra bajo azufre. Con diésel de alto azufre, consulte a su asesor Trevigo sobre el intervalo de cambio.",
  },
  "aceite-flota-mixta-ci4-plus-15w40": {
    description:
      "El aceite Flota Mixta CI-4 Plus es un multigrado SAE 15W-40 con doble clasificación API CI-4 Plus para motores a diésel y API SL para motores a gasolina. Su ventaja es operativa: una empresa con camiones a diésel, camionetas a gasolina y montacargas puede usar un solo aceite en todo el taller, lo que reduce inventario, evita errores de llenado y simplifica las compras. La aditivación CI-4 Plus da un control de hollín y de pérdida de viscosidad superior al de CI-4, y el nivel SL protege los motores a gasolina contra lodos y desgaste. Es una opción práctica para constructoras, distribuidoras, municipios y empresas de logística.",
    applications: [
      "Flotas con unidades a diésel y a gasolina",
      "Talleres de mantenimiento que quieren un solo aceite",
      "Montacargas a gas o gasolina y camiones a diésel en la misma planta",
      "Flotillas municipales y de servicio",
      "Constructoras con camionetas y maquinaria",
    ],
    notes:
      "Para motores a gasolina de modelo reciente que especifican viscosidades bajas (5W-20, 5W-30) use el aceite Alto Desempeño 5W-30.",
  },
  "aceite-diesel-15w40": {
    description:
      "El Diésel 15W-40 es el multigrado de uso general de Trevigo para flotas a diésel. El grado SAE 15W-40 es la viscosidad más usada en camiones, autobuses y maquinaria en México: fluye bien en el arranque en las mañanas frías y mantiene una película lubricante resistente a la temperatura de operación en clima cálido. Su aditivación detergente-dispersante y antidesgaste cubre el servicio diario de motores a diésel convencionales con intervalos de cambio estándar. Es una opción económica para flotas grandes que compran por tambo, tote o a granel y quieren un aceite confiable para el servicio de rutina.",
    applications: [
      "Flotas de reparto y carga regional",
      "Autobuses de personal y transporte urbano",
      "Plantas de emergencia y compresores a diésel",
      "Equipo agrícola y de construcción ligera",
      "Montacargas a diésel",
    ],
    notes:
      "Para motores que exigen un nivel API específico (CI-4, CJ-4, CK-4) elija el producto con esa clasificación; este aceite es para servicio general.",
  },
  "aceite-diesel-25w60": {
    description:
      "El Diésel 25W-60 es un multigrado de alta viscosidad para motores a diésel con desgaste, que ya presentan holguras grandes entre pistón, anillos y cilindro. En estos motores un aceite más delgado se quema o se fuga y la presión de aceite cae. La mayor viscosidad del 25W-60 ayuda a recuperar la presión de aceite, a reducir el consumo y el humo azul, y a sellar mejor la cámara de combustión. Es una solución práctica para extender la vida de motores con muchas horas, en lo que se programa la reparación mayor, sobre todo en equipo que trabaja en clima caluroso.",
    applications: [
      "Motores a diésel con alto kilometraje u horas de uso",
      "Motores con alto consumo de aceite o humo azul",
      "Equipo con baja presión de aceite por desgaste",
      "Maquinaria vieja que opera en clima muy caluroso",
      "Extensión de vida útil antes de una reparación mayor",
    ],
    notes:
      "No use este grado en motores nuevos o en buen estado, ni en clima frío: su alta viscosidad dificulta el arranque y la lubricación inicial.",
  },

  // ── MOTOR A GASOLINA Y MOTO ──
  "aceite-gasolina-multigrado-sl": {
    description:
      "El Gasolina Multigrado SL es un aceite para motores a gasolina con nivel de desempeño API SL, en grados SAE 15W-40 y 20W-50. Su aditivación detergente, antioxidante y antidesgaste controla la formación de lodos y barnices y permite intervalos de cambio extendidos frente a aceites de categorías anteriores. El 15W-40 cubre la mayoría de motores con algunos años de uso; el 20W-50 está indicado para motores con más kilometraje o que trabajan en clima caluroso y con carga, como camionetas de reparto y pick-ups de trabajo. Es una opción rentable para talleres, flotillas y agencias que compran por volumen.",
    applications: [
      "Camionetas de reparto y pick-ups de trabajo",
      "Flotillas de autos a gasolina",
      "Talleres y lubricentros que compran por tambo",
      "Motores a gasolina con algunos años de uso",
      "Montacargas y equipo con motor a gasolina",
    ],
    notes:
      "Para motores de modelo reciente que piden 5W-30 o menor, use el aceite Alto Desempeño 5W-30. Revise siempre la viscosidad que indica el manual del vehículo.",
  },
  "aceite-gasolina-monogrado": {
    description:
      "El Gasolina Monogrado es un aceite de un solo grado para motores a gasolina, disponible en SAE 10W, 20W, 30, 40 y 50. Los monogrados se usan en motores que trabajan a temperatura estable y en equipo cuyo fabricante especifica una sola viscosidad: motores estacionarios, bombas, generadores portátiles, cortadoras, equipo agrícola ligero y motores antiguos. Elegir el grado exacto permite ajustar la lubricación a la holgura del motor y a la temperatura ambiente. Es también una opción económica para operaciones que consumen volúmenes altos de aceite en equipo sencillo.",
    applications: [
      "Motores estacionarios, bombas y generadores a gasolina",
      "Equipo de jardinería y agrícola ligero",
      "Motores antiguos que especifican monogrado",
      "Compresores y equipos pequeños con motor a gasolina",
      "Operación a temperatura estable todo el año",
    ],
    notes:
      "Un monogrado no protege igual que un multigrado en arranques en frío. En vehículos modernos use el multigrado que indique el manual.",
  },
  "aceite-gasolina-sae-40": {
    description:
      "El Gasolina SAE 40 es un aceite monogrado para motores a gasolina con nivel de desempeño API SL. La viscosidad SAE 40 da una película lubricante robusta a alta temperatura, por lo que se usa en motores que operan con carga constante en clima cálido, en equipo estacionario y en motores con cierto desgaste. Su aditivación API SL controla depósitos, lodos y oxidación mejor que los monogrados sin clasificación. Es una opción común en talleres y flotas del norte de México, donde las temperaturas altas favorecen los grados de mayor viscosidad.",
    applications: [
      "Motores a gasolina que trabajan en clima cálido",
      "Equipo estacionario: bombas, generadores, compresores",
      "Motores con carga constante y temperatura estable",
      "Flotas y talleres que estandarizan en SAE 40",
      "Equipo agrícola con motor a gasolina",
    ],
    notes:
      "No se recomienda para arranques en frío ni para motores modernos que especifican multigrados de baja viscosidad.",
  },
  "aceite-motor-alto-desempeno-5w30": {
    description:
      "El Alto Desempeño 5W-30 es un aceite multigrado de baja viscosidad para motores a gasolina modernos, con tolerancias cerradas, inyección directa, turbocargador o sistemas de tiempo variable de válvulas. El grado 5W fluye rápido en el arranque, cuando ocurre la mayor parte del desgaste del motor, y el 30 en caliente reduce la fricción interna, lo que ayuda al rendimiento de combustible. Es la viscosidad que especifica la mayoría de autos y camionetas a gasolina de modelo reciente. Disponible por volumen para agencias, talleres de servicio rápido y flotas de vehículos ligeros.",
    applications: [
      "Autos y camionetas a gasolina de modelo reciente",
      "Motores con turbocargador o inyección directa",
      "Flotillas de vehículos ligeros y de renta",
      "Talleres de servicio rápido y agencias",
      "Motores que especifican SAE 5W-30",
    ],
    notes:
      "Verifique en el manual del vehículo la clasificación API o ILSAC que exige el fabricante antes de usarlo en vehículos en garantía.",
  },
  "aceite-motocicleta-4t-20w50": {
    description:
      "El aceite Motocicleta 4T es un multigrado SAE 20W-50 para motores de motocicleta de cuatro tiempos. A diferencia de un auto, en la mayoría de motocicletas el mismo aceite lubrica el motor, la caja de velocidades y el clutch húmedo, por lo que debe resistir el corte de los engranes sin perder viscosidad y no debe contener modificadores de fricción que hagan patinar el clutch. El grado 20W-50 es el más usado en motocicletas de trabajo en clima cálido. Es ideal para flotas de reparto, mensajería y talleres de motos que compran por cubeta o tambo.",
    applications: [
      "Motocicletas de reparto y mensajería",
      "Motocicletas de trabajo y de uso diario",
      "Talleres y refaccionarias de motos",
      "Motores 4T de cuatrimotos y equipo ligero",
      "Motocicletas que especifican SAE 20W-50",
    ],
    notes:
      "No use este aceite en motores de dos tiempos (2T), que requieren aceite de mezcla. Si su moto especifica norma JASO MA o MA2, confírmelo con su asesor.",
  },

  // ── TRANSMISIÓN Y DIFERENCIAL ──
  "aceite-engranes-gl5-80w90": {
    description:
      "El aceite para Engranes GL-5 80W-90 es un lubricante de extrema presión (EP) con nivel de desempeño API GL-5, la categoría para engranes hipoidales sometidos a alta carga y choque, como los diferenciales de camiones y camionetas. Su aditivación EP forma una película protectora en los dientes del engrane que evita rayado y soldadura en frío bajo carga. El grado SAE 80W-90 es el más usado en diferenciales, transmisiones manuales que especifican GL-5, mandos finales y rodamientos lubricados por baño de aceite. Es el aceite de engranes de uso general en talleres y flotas.",
    applications: [
      "Diferenciales de camiones, camionetas y autos",
      "Transmisiones manuales que especifican API GL-5",
      "Mandos finales y cajas de transferencia",
      "Rodamientos lubricados por baño de aceite",
      "Equipo agrícola y de construcción",
    ],
    notes:
      "Algunas transmisiones manuales sincronizadas con componentes de bronce especifican API GL-4. Revise el manual antes de usar GL-5 en esas cajas.",
  },
  "aceite-engranes-gl5-85w140": {
    description:
      "El aceite para Engranes GL-5 85W-140 es un lubricante de extrema presión de alta viscosidad con nivel API GL-5, diseñado para diferenciales que trabajan con carga pesada y alta temperatura. La mayor viscosidad del grado 85W-140 mantiene una película más gruesa en los dientes del engrane cuando el aceite se calienta por carga sostenida, pendientes o remolque, y reduce el desgaste en diferenciales con muchas horas. Es el grado que especifican muchos tractocamiones, camiones de volteo, equipo minero y de construcción en clima caluroso.",
    applications: [
      "Diferenciales de tractocamiones y camiones de volteo",
      "Equipo minero y de construcción",
      "Unidades que remolcan carga pesada o suben pendientes",
      "Diferenciales con desgaste o temperatura de operación alta",
      "Mandos finales de maquinaria pesada",
    ],
    notes:
      "Su alta viscosidad no es adecuada para clima frío ni para equipos que especifican 80W-90 o 75W-90. Siga el grado del fabricante.",
  },
  "atf-dex-iii": {
    description:
      "El ATF DEX III es un fluido para transmisión automática tipo DEXRON / MERCON III. Cumple tres funciones en la transmisión: transmite potencia en el convertidor de par, acciona el sistema hidráulico de cambios y lubrica engranes y rodamientos. Sus modificadores de fricción dan cambios suaves y consistentes, y su alto índice de viscosidad mantiene el desempeño en frío y en caliente. También se usa en sistemas de dirección hidráulica y en algunos sistemas hidráulicos industriales que especifican fluido tipo ATF. Es el ATF de uso más amplio para talleres y flotas.",
    applications: [
      "Transmisiones automáticas que especifican DEXRON III o MERCON",
      "Sistemas de dirección hidráulica",
      "Sistemas hidráulicos que especifican fluido tipo ATF",
      "Algunas transmisiones de montacargas y equipo industrial",
      "Talleres de transmisiones y servicio automotriz",
    ],
    notes:
      "Las transmisiones más recientes que especifican DEXRON VI, MERCON V/LV o fluidos de fabricante (ATF+4, CVT) requieren su fluido específico. Consulte el manual.",
  },
  "atf-iii-dexron-mercon": {
    description:
      "El ATF III es un fluido para transmisiones automáticas de modelo reciente que especifican DEXRON III / MERCON. Su formulación con modificadores de fricción estables mantiene la calidad de los cambios durante todo el intervalo de servicio, y sus antioxidantes protegen contra la formación de barniz en el cuerpo de válvulas, una de las causas más comunes de fallas de cambios. Su aditivación antidesgaste protege bombas, engranes planetarios y rodamientos. Es una opción para talleres de transmisiones, agencias y flotas que requieren un ATF de especificación DEXRON III / MERCON a precio de volumen.",
    applications: [
      "Transmisiones automáticas DEXRON III / MERCON",
      "Flotas de vehículos ligeros con transmisión automática",
      "Talleres especializados en transmisiones",
      "Sistemas de dirección hidráulica compatibles",
      "Relleno y cambio de fluido en servicio preventivo",
    ],
    notes:
      "No mezcle fluidos ATF de diferentes especificaciones. Para transmisiones CVT o de doble embrague use el fluido que indique el fabricante.",
  },
  "atf-ii": {
    description:
      "El ATF II es un fluido para transmisiones automáticas de modelos anteriores que especifican fluido tipo II (DEXRON II). Muchas unidades de flota, camionetas de trabajo, autobuses y equipo industrial con varios años de servicio siguen usando transmisiones diseñadas para esta especificación. Usar el fluido correcto conserva la calidad de los cambios y protege los sellos y discos de clutch diseñados para ese tipo de fluido. También se usa en algunos sistemas de dirección hidráulica y en equipos hidráulicos que especifican ATF tipo II.",
    applications: [
      "Transmisiones automáticas de vehículos de modelos anteriores",
      "Flotas con unidades de varios años de servicio",
      "Sistemas de dirección hidráulica que especifican ATF II",
      "Equipo industrial y montacargas con transmisión automática",
      "Equipo hidráulico que pide fluido tipo ATF",
    ],
    notes:
      "Si la transmisión especifica DEXRON III o posterior, use el ATF DEX III o ATF III. No use ATF II en transmisiones que requieren fluidos de nueva generación.",
  },

  // ── HIDRÁULICOS ──
  "aceite-hidraulico-iso-32": {
    description:
      "El Hidráulico ISO 32 es un aceite hidráulico de baja viscosidad (ISO VG 32) para sistemas que trabajan a baja presión, equipos de precisión y máquinas que operan en clima frío o en interiores con aire acondicionado. Su baja viscosidad da una respuesta rápida de válvulas y actuadores, menos pérdida de energía por fricción y mejor arranque a baja temperatura. Su aditivación antioxidante y antiherrumbre protege el sistema, y su buena separación de agua y control de espuma ayudan a mantener la limpieza del aceite. Es el grado típico de máquinas herramienta, sistemas servo y prensas ligeras.",
    applications: [
      "Máquinas herramienta y centros de maquinado CNC",
      "Sistemas hidráulicos de baja presión",
      "Equipo que opera en clima frío o en interiores",
      "Sistemas servo y de control de precisión",
      "Elevadores hidráulicos y equipo ligero",
    ],
    notes:
      "En sistemas de alta presión o alta temperatura un ISO 32 puede quedarse delgado; en ese caso use ISO 46 o AW ISO 68. Siga la viscosidad del fabricante del equipo.",
  },
  "aceite-hidraulico-iso-46": {
    description:
      "El Hidráulico ISO 46 es el aceite hidráulico de uso general en planta. La viscosidad ISO VG 46 es la que especifica la mayoría de prensas, inyectoras de plástico, montacargas, unidades de potencia hidráulica y maquinaria industrial que opera en el clima de México. Su formulación con inhibidores de oxidación y herrumbre, antiespumante y buena separación de agua protege bombas de paletas, de engranes y de pistones, y mantiene el sistema limpio durante intervalos largos. Estandarizar la planta en ISO 46 simplifica el inventario y reduce el riesgo de mezclar aceites.",
    applications: [
      "Prensas hidráulicas y troqueladoras",
      "Inyectoras de plástico y máquinas de soplado",
      "Montacargas y equipo de manejo de materiales",
      "Unidades de potencia hidráulica",
      "Maquinaria industrial en general",
    ],
    notes:
      "Antes de cambiar de marca o de tipo de aceite hidráulico, drene y limpie el sistema para evitar incompatibilidades de aditivos. Cambie filtros en cada cambio de aceite.",
  },
  "aceite-hidraulico-aw-iso-68": {
    description:
      "El Hidráulico AW ISO 68 es un aceite hidráulico antidesgaste (AW) de viscosidad ISO VG 68, para sistemas que trabajan con más temperatura y más carga que el promedio. Su aditivación antidesgaste forma una película protectora en las zonas de contacto de bombas de paletas y de pistones, donde un aceite sin AW se desgasta rápido a alta presión. La mayor viscosidad mantiene la película lubricante y reduce fugas internas cuando el aceite se calienta. Es el grado común para maquinaria pesada, equipo móvil de construcción, prensas grandes y sistemas que operan a la intemperie en verano.",
    applications: [
      "Maquinaria de construcción y equipo móvil",
      "Prensas de gran tonelaje",
      "Sistemas hidráulicos de alta presión",
      "Equipo que opera a la intemperie en clima caluroso",
      "Grúas, plataformas y equipo de elevación",
    ],
    notes:
      "Su mayor viscosidad puede causar arranques lentos en clima frío. Si el equipo opera con temperaturas variables, valore el Hidráulico Multigrado.",
  },
  "aceite-hidraulico-aw-iso-100": {
    description:
      "El Hidráulico AW ISO 100 es un aceite hidráulico antidesgaste de alta viscosidad (ISO VG 100) para equipos de alta carga y alta temperatura. Se usa donde el aceite opera muy caliente o el equipo tiene holguras grandes por desgaste, condiciones en las que un ISO 46 o 68 se adelgaza demasiado, baja la presión del sistema y aumentan las fugas internas. Su aditivación AW protege bombas y motores hidráulicos bajo carga extrema. También se usa como aceite de lubricación general en algunos rodamientos y mecanismos de carga pesada.",
    applications: [
      "Prensas y equipos hidráulicos de alta carga",
      "Equipo minero y de construcción pesada",
      "Sistemas que operan con aceite muy caliente",
      "Equipo hidráulico con desgaste y fugas internas",
      "Lubricación general de mecanismos de carga pesada",
    ],
    notes:
      "No lo use en sistemas diseñados para ISO 32 o 46 sin validar con el fabricante: una viscosidad demasiado alta puede causar cavitación en la bomba.",
  },
  "aceite-hidraulico-multigrado": {
    description:
      "El Hidráulico Multigrado es un aceite hidráulico de alto índice de viscosidad, formulado para equipos que operan en condiciones extremas de frío y calor. Un aceite hidráulico convencional se espesa en el frío, lo que causa arranques lentos y cavitación, y se adelgaza en el calor, lo que reduce la presión y la protección. El multigrado mantiene una viscosidad más estable en todo el rango de temperatura, por lo que un solo aceite sirve todo el año. Es ideal para maquinaria móvil, equipo agrícola, grúas y sistemas a la intemperie en regiones con cambios fuertes de temperatura entre el día y la noche.",
    applications: [
      "Maquinaria móvil y de construcción a la intemperie",
      "Equipo agrícola y forestal",
      "Grúas, plataformas y camiones con equipo hidráulico",
      "Regiones con cambios fuertes de temperatura",
      "Equipo con arranques frecuentes en frío",
    ],
    notes:
      "Confirme con su asesor Trevigo el grado equivalente al que especifica su equipo (ISO 32, 46 o 68) antes de cambiar.",
  },
  "fluido-hidraulico-antiflama": {
    description:
      "El Fluido Hidráulico Antiflama es un fluido resistente al fuego para sistemas hidráulicos que operan cerca de fuentes de ignición: metal fundido, hornos, soldadura o superficies calientes. Si una manguera se rompe y un aceite mineral se rocía sobre una superficie caliente, se puede generar un incendio grave. Un fluido resistente al fuego reduce ese riesgo porque es mucho más difícil de encender y no propaga la flama. Se usa en fundiciones, acerías, máquinas de fundición a presión, forjas, minería subterránea y cualquier planta donde un incendio en el sistema hidráulico es un riesgo crítico para el personal y las instalaciones.",
    applications: [
      "Máquinas de fundición a presión (die casting)",
      "Acerías, hornos y laminadoras",
      "Prensas de forja",
      "Minería subterránea",
      "Equipo hidráulico cerca de superficies calientes",
    ],
    notes:
      "Los fluidos resistentes al fuego pueden requerir sellos, pinturas internas y filtros compatibles. Antes de convertir un sistema de aceite mineral, solicite asesoría técnica y la ficha técnica.",
  },

  // ── INDUSTRIALES ──
  "aceite-cajas-reductoras": {
    description:
      "El aceite para Cajas Reductoras es un lubricante para engranes industriales cerrados de carga media, disponible en grados ISO VG 32, 68, 100, 150 y 220. Protege engranes rectos, helicoidales y cónicos, así como los rodamientos del reductor, contra desgaste, herrumbre y oxidación. El rango de grados permite cubrir desde motorreductores pequeños y de alta velocidad (ISO 32 a 100) hasta reductores industriales estándar (ISO 150 y 220, el grado más común). Es el aceite de engranes de uso general para transportadores, agitadores, mezcladoras, bombas y maquinaria de proceso.",
    applications: [
      "Motorreductores de bandas transportadoras",
      "Agitadores, mezcladoras y equipo de proceso",
      "Reductores de velocidad helicoidales y cónicos",
      "Cajas de engranes de maquinaria de manufactura",
      "Rodamientos lubricados por baño de aceite",
    ],
    notes:
      "Para reductores de tornillo sinfín o de carga muy alta (ISO 320 o más) use el aceite para Cajas Reductoras Alta Carga. Siga el grado ISO VG de la placa del reductor.",
  },
  "aceite-cajas-reductoras-alta-carga": {
    description:
      "El aceite para Cajas Reductoras Alta Carga es un lubricante de extrema presión (EP) para engranes industriales que trabajan con alta carga y baja velocidad, en grados ISO VG 320, 460 y 680. A baja velocidad y con cargas altas la película de aceite entre los dientes se adelgaza, y sin aditivos EP aparece desgaste por rayado, picadura y soldadura en frío. Su alta viscosidad y aditivación EP mantienen la protección en estas condiciones. Es el aceite para reductores de molinos, hornos rotatorios, transportadores pesados, trituradoras y reductores de tornillo sinfín.",
    applications: [
      "Reductores de molinos y hornos rotatorios",
      "Trituradoras y transportadores de minería",
      "Reductores de tornillo sinfín",
      "Cementeras, acerías y papeleras",
      "Engranes con carga de choque",
    ],
    notes:
      "Algunos reductores de sinfín con corona de bronce requieren aceites con aditivación específica. Consulte la recomendación del fabricante antes de cambiar.",
  },
  "aceite-guias-correderas": {
    description:
      "El aceite para Guías y Correderas es un lubricante para las superficies de deslizamiento de máquina herramienta: guías, correderas, bancadas y mesas de tornos, fresadoras, rectificadoras y centros de maquinado. Su formulación con agentes de adherencia evita que el aceite escurra de las superficies verticales, y sus modificadores de fricción eliminan el efecto de avance a saltos (stick-slip), lo que permite que las mesas se deslicen sin trabarse y la máquina mantenga su precisión. También resiste el lavado por refrigerante soluble y protege contra herrumbre.",
    applications: [
      "Guías y bancadas de tornos y fresadoras",
      "Centros de maquinado CNC con lubricación centralizada",
      "Rectificadoras y máquinas de precisión",
      "Mesas y correderas de prensas",
      "Superficies de deslizamiento expuestas a refrigerante",
    ],
    notes:
      "Verifique que el aceite de guías sea compatible con el refrigerante soluble de la máquina para evitar emulsiones que reduzcan la vida del refrigerante.",
  },
  "aceite-compresores": {
    description:
      "El aceite para Compresores es un lubricante para compresores de aire de tornillo, reciprocantes (de pistón) y centrífugos, en grados SAE 10W, 30 y 40. En un compresor el aceite trabaja a alta temperatura y en contacto con aire comprimido caliente, lo que acelera la oxidación y la formación de carbón en válvulas. Su formulación con alta estabilidad a la oxidación reduce depósitos y riesgo de incendio en la descarga, separa bien el agua de condensación y controla la espuma. El grado se elige según el tipo de compresor y la temperatura ambiente.",
    applications: [
      "Compresores de aire de tornillo",
      "Compresores reciprocantes de una y dos etapas",
      "Compresores centrífugos",
      "Talleres, plantas de manufactura y de pintura",
      "Sistemas de aire comprimido de planta",
    ],
    notes:
      "Muchos compresores de tornillo con contrato de garantía exigen el aceite del fabricante. Confirme la especificación y el grado antes de cambiar.",
  },
  "aceite-circulacion": {
    description:
      "El aceite para Circulación es un lubricante para maquinaria de planta lubricada por sistemas de circulación, en los que el aceite se bombea desde un depósito central, pasa por chumaceras, rodamientos y engranes, se filtra, se enfría y regresa. Como el mismo aceite circula durante años, necesita alta estabilidad a la oxidación, buena separación de agua y protección contra herrumbre y espuma. Se usa en máquinas de papel, laminadoras, ventiladores y bombas grandes, turbinas pequeñas y sistemas centralizados de lubricación.",
    applications: [
      "Máquinas de papel y cartón",
      "Laminadoras y equipo de acerías",
      "Chumaceras de ventiladores, bombas y motores grandes",
      "Sistemas centralizados de lubricación",
      "Maquinaria de proceso continuo",
    ],
    notes:
      "Monitoree el aceite con análisis periódico (agua, oxidación y partículas) para extender su vida en el sistema.",
  },
  "aceite-transferencia-calor": {
    description:
      "El aceite de Transferencia de Calor es un aceite térmico para sistemas de calefacción indirecta, en grados ISO VG 22 y 46. En estos sistemas un calentador eleva la temperatura del aceite, que circula por tuberías para calentar reactores, prensas, rodillos, tanques y marmitas sin usar vapor a presión. El aceite debe resistir temperaturas altas por largos periodos sin degradarse ni formar carbón en las paredes del calentador. Su estabilidad térmica y a la oxidación prolonga la vida del fluido y mantiene la eficiencia de la transferencia de calor.",
    applications: [
      "Calentadores de fluido térmico",
      "Prensas de laminado y de madera",
      "Reactores, tanques y marmitas de proceso",
      "Rodillos calentados en plásticos y textiles",
      "Industria química, alimenticia y de asfaltos",
    ],
    notes:
      "Opere siempre por debajo de la temperatura máxima que indica la ficha técnica y mantenga el sistema cerrado o con atmósfera inerte para reducir la oxidación.",
  },
  "aceite-dielectrico": {
    description:
      "El Aceite Dieléctrico es un aceite aislante para equipo eléctrico, usado principalmente en transformadores. Cumple dos funciones: aísla eléctricamente los devanados, porque tiene alta rigidez dieléctrica, y retira el calor que generan las pérdidas del transformador al circular por los radiadores. Un aceite dieléctrico debe estar limpio y seco, ya que la humedad y las partículas reducen su capacidad aislante. Se usa en transformadores de distribución y de potencia, interruptores en aceite y otros equipos eléctricos sumergidos.",
    applications: [
      "Transformadores de distribución y de potencia",
      "Relleno y reemplazo de aceite en mantenimiento de subestaciones",
      "Interruptores y equipo eléctrico en aceite",
      "Talleres de reparación de transformadores",
      "Plantas industriales con subestación propia",
    ],
    notes:
      "Antes de llenar, verifique la rigidez dieléctrica y el contenido de humedad del aceite. Manténgalo en envase cerrado para evitar que absorba humedad.",
  },
};
