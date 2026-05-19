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
  | "flask"          // Cotizar producto (🧪)
  | "wrench"         // Cotizar servicio (🔧)
  | "magnifying-glass" // Ver catálogo (🔍)
  | "phone"          // WhatsApp / teléfono (📱)
  | "check-circle"   // Ya soy cliente / éxito (✅)
  // Urgencia / tiempo
  | "fire"           // Urgente (🔥)
  | "calendar"       // Esta semana (📅)
  | "calendar-days" // Sin prisa (🗓)
  | "clock"          // Tiempo / pronto
  // Trust bar
  | "bolt"           // Respuesta rápida (⚡)
  | "map-pin"        // Ubicación (📍)
  | "building-2"     // Clientes / planta (🏭)
  // Section badges
  | "chart-bar"      // La cifra (📊)
  | "alert-triangle" // Consideración técnica (⚠)
  | "chevron-right"  // Bullets ▸
  | "arrow-down"     // Punto hacia abajo (👇)
  | "rocket"         // Confirmación (🚀)
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
};

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
