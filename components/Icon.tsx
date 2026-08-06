// ============================================================
// Icon — Set unificado de SVGs outline (estilo Heroicons / Lucide)
// Reemplaza los emojis del sitio con iconos vectoriales monocromos.
// Todos usan `currentColor` para heredar el color del padre y respetan
// el tamaño via className (default 16px).
// ============================================================

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export type IconName =
  // Botones / acciones
  | "flask"          // Cotizar producto (🧪) + materias primas + petri (🧫)
  | "wrench"         // Cotizar servicio (🔧) + despintado + tratamiento de superficies
  | "magnifying-glass" // Ver catálogo (🔍)
  | "phone"          // WhatsApp / teléfono (📱)
  | "check-circle"   // Ya soy cliente / éxito (✅)
  // Urgencia / tiempo
  | "fire"           // Urgente (🔥)
  | "calendar"       // Esta semana (📅)
  | "calendar-days" // Sin prisa (🗓)
  | "clock"          // Tiempo / pronto
  // Trust bar
  | "bolt"           // Respuesta rápida (⚡) + eléctrica
  | "map-pin"        // Ubicación (📍)
  | "building-2"     // Clientes / planta (🏭)
  // Section badges
  | "chart-bar"      // La cifra (📊) + optimización de procesos
  | "alert-triangle" // Consideración técnica (⚠)
  | "chevron-right"  // Bullets ▸
  | "arrow-down"     // Punto hacia abajo (👇)
  | "rocket"         // Confirmación (🚀)
  // Productos / categorías
  | "settings"       // Tratamiento de metales (⚙️) + hule/caucho
  | "droplet"        // Tratamiento de aguas (💧)
  | "fuel"           // Lubricantes y aceites (🛢️)
  // Servicios técnicos
  | "screw"          // Galvanizado (🔩) + metalmecánica
  | "shield"         // Tropicalizado (🛡️)
  | "test-tube"      // Decapado (⚗️)
  | "sparkles"       // Pasivado (✨) + cosmética
  | "palette"        // Pintura electrostática (🎨)
  | "ruler"          // Ingeniería y asesoría (📐)
  | "hammer"         // Mantenimiento (🔨)
  | "link"           // Despintado de cadenas y bastidores (🔗)
  // Industrias
  | "car"            // Automotriz (🚗)
  | "factory"        // Manufactura general (🏭)
  | "plane"          // Aeronáutica (✈️)
  | "utensils"       // Alimenticia (🍽️)
  | "wine-glass"     // Vitivinícola (🍷)
  | "beer-mug"       // Cervecera (🍺)
  | "pill"           // Farmacéutica (💊)
  | "file-text"      // Papel y derivados (📄)
  | "shirt"          // Lavanderías (👕)
  | "wheat"          // Agroindustria (🌾)
  | "pickaxe"        // Minera (⛏️)
  | "printer"        // Artes gráficas (🖨️)
  | "cup"            // Refresquera (🥤)
  | "broom"          // Limpieza general (🧹)
  | "spool"          // Textil (🧵)
  | "hospital"       // Hospitales (🏥)
  | "microscope"     // Polímeros (🔬)
  // Common
  | "x"
  | "check"
  | "external-link";

const PATHS: Record<IconName, JSX.Element> = {
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.5 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3l-5.5-8.5V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 1-5.7 5.7L4 17a2.1 2.1 0 0 0 3 3l5-5a4.5 4.5 0 0 1 5.7-5.7l-3 3-1.7-1.7Z" />
  ),
  "magnifying-glass": (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  fire: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.7-2.6-1.5-3.6L8 6.5 6.5 8.4C5.7 9.4 5 10.6 5 12a2.5 2.5 0 0 0 2.5 2.5Zm6.5-8c2.4 2.4 4 5.8 4 8a7 7 0 1 1-14 0c0-2.2 1.4-5.2 4-8 .9 1.4 2 2.5 3 4 1-1.5 2.1-2.6 3-4Z" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </>
  ),
  "calendar-days": (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  bolt: (
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  "building-2": (
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </>
  ),
  "chart-bar": (
    <>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </>
  ),
  "alert-triangle": (
    <>
      <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  "chevron-right": (
    <polyline points="9 18 15 12 9 6" />
  ),
  "arrow-down": (
    <>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  x: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  check: (
    <polyline points="20 6 9 17 4 12" />
  ),
  "external-link": (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </>
  ),
  // ── Productos / categorías ──────────────────────────────────────
  settings: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  droplet: (
    <path d="M12 21.5c-3.5 0-6.5-3-6.5-6.7 0-3 2.5-6.7 6.5-12.8 4 6.1 6.5 9.8 6.5 12.8 0 3.7-3 6.7-6.5 6.7Z" />
  ),
  fuel: (
    <>
      <line x1="3" y1="22" x2="15" y2="22" />
      <line x1="4" y1="9" x2="14" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </>
  ),
  // ── Servicios técnicos ──────────────────────────────────────────
  screw: (
    <>
      <circle cx="12" cy="6" r="3.5" />
      <line x1="9" y1="8.5" x2="15" y2="8.5" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="13.5" x2="15" y2="13.5" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <path d="M10 18h4l-2 4-2-4Z" />
    </>
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  ),
  "test-tube": (
    <>
      <path d="M14.5 2v17.5a2.5 2.5 0 1 1-5 0V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z" />
    </>
  ),
  ruler: (
    <>
      <path d="M21.3 8.7 8.7 21.3a2.41 2.41 0 0 1-3.4 0L2.7 18.7a2.41 2.41 0 0 1 0-3.4L15.3 2.7a2.41 2.41 0 0 1 3.4 0l2.6 2.6a2.41 2.41 0 0 1 0 3.4Z" />
      <path d="m7.5 10.5 2 2" />
      <path d="m10.5 7.5 2 2" />
      <path d="m13.5 4.5 2 2" />
      <path d="m4.5 13.5 2 2" />
    </>
  ),
  hammer: (
    <>
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  // ── Industrias ──────────────────────────────────────────────────
  car: (
    <>
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </>
  ),
  plane: (
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z" />
  ),
  utensils: (
    <>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </>
  ),
  "wine-glass": (
    <>
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </>
  ),
  "beer-mug": (
    <>
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M9 12v6" />
      <path d="M13 12v6" />
      <path d="M14 7.5c-1-.7-2.5-.7-3 .5-1-.7-2.5-.7-3 0-1-1-3-1-3 1.5 0 1 .3 1.5 1 2v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-8c.7-.5 1-1 1-2 0-2-2-2.5-3-1.5C16 6.8 15 6.8 14 7.5Z" />
    </>
  ),
  pill: (
    <>
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  "file-text": (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </>
  ),
  shirt: (
    <path d="M20.4 5 16 3l-4 4-4-4-4.4 2a1 1 0 0 0-.5 1.3L4 12l3-1v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l3 1 .9-5.7a1 1 0 0 0-.5-1.3Z" />
  ),
  wheat: (
    <>
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M20 9c-3 0-4.5 1.5-5 5 3 0 4.5-1.5 5-5Z" />
      <path d="M20 14c-3 0-4.5 1.5-5 5 3 0 4.5-1.5 5-5Z" />
    </>
  ),
  pickaxe: (
    <>
      <path d="M14 12 3 22" />
      <path d="m14.5 11.5 5.7-5.7a1 1 0 0 0 0-1.4l-.2-.2a4 4 0 0 0-5.6 0L9 9.5l5.5 2Z" />
      <path d="m9.5 9.5 5 5" />
    </>
  ),
  printer: (
    <>
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </>
  ),
  cup: (
    <>
      <path d="M5 8h14l-1.5 12a2 2 0 0 1-2 1.8h-7a2 2 0 0 1-2-1.8L5 8Z" />
      <path d="M8 8V5a4 4 0 0 1 8 0v3" />
    </>
  ),
  broom: (
    <>
      <path d="m18.5 5.5-12 12" />
      <path d="M19 4 12 11l2 2 7-7-2-2Z" />
      <path d="M9.5 14.5 4 20l6.5-1.5L13 16l-3.5-1.5Z" />
    </>
  ),
  spool: (
    <>
      <ellipse cx="12" cy="5" rx="6" ry="2" />
      <ellipse cx="12" cy="19" rx="6" ry="2" />
      <path d="M6 5v14" />
      <path d="M18 5v14" />
      <path d="M9 8c1.5 1.5 4.5 1.5 6 0" />
      <path d="M9 12c1.5 1.5 4.5 1.5 6 0" />
      <path d="M9 16c1.5 1.5 4.5 1.5 6 0" />
    </>
  ),
  hospital: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </>
  ),
  microscope: (
    <>
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12v6" />
      <path d="M12 6.5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.5" />
    </>
  ),
};

// ─── Mapeo emoji → IconName ─────────────────────────────────────
// Permite usar <EmojiIcon emoji={data.icon} /> sin tener que tocar
// los strings de emoji que están en lib/data.ts.
const EMOJI_TO_ICON: Record<string, IconName> = {
  // Productos / categorías
  "⚙️": "settings",
  "💧": "droplet",
  "🛢️": "fuel",
  "🧪": "flask",
  // Servicios
  "🔩": "screw",
  "🛡️": "shield",
  "🔧": "wrench",
  "⚗️": "test-tube",
  "✨": "sparkles",
  "🎨": "palette",
  "📐": "ruler",
  "🔨": "hammer",
  "🔗": "link",
  "🧫": "flask",
  "📊": "chart-bar",
  // Industrias
  "🚗": "car",
  "🏭": "factory",
  "✈️": "plane",
  "🍽️": "utensils",
  "🍷": "wine-glass",
  "🍺": "beer-mug",
  "💊": "pill",
  "📄": "file-text",
  "👕": "shirt",
  "🌾": "wheat",
  "⛏️": "pickaxe",
  "🖨️": "printer",
  "🥤": "cup",
  "🧹": "broom",
  "⚡": "bolt",
  "🧵": "spool",
  "🏥": "hospital",
  "🔬": "microscope",
};

/**
 * EmojiIcon — renderiza un SVG outline correspondiente al emoji recibido.
 * Si no encuentra mapeo, devuelve el emoji como texto (degrada elegante).
 */
export function EmojiIcon({
  emoji,
  className = "w-5 h-5",
}: {
  emoji: string;
  className?: string;
}) {
  const name = EMOJI_TO_ICON[emoji];
  if (name) return <Icon name={name} className={className} />;
  return <span className={className}>{emoji}</span>;
}

export function Icon({ name, className = "w-4 h-4", ...rest }: IconProps) {
  const paths = PATHS[name];
  if (!paths) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths}
    </svg>
  );
}
