import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sak: Insumos para Limpieza Industrial",
  description:
    "Sak es la línea de Trevigo para limpieza industrial e institucional: químicos, papel, jarcería, equipo y bolsas. Inventario completo y entrega 48h en Monterrey.",
  alternates: { canonical: `${COMPANY.url}/sak` },
  openGraph: {
    title: "Sak: Insumos para Limpieza Industrial",
    description:
      "Línea Sak de Trevigo: químicos, papel, jarcería y equipo de limpieza institucional. Un solo proveedor, entrega 48h en Monterrey.",
    url: `${COMPANY.url}/sak`,
  },
};

export default function SakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
