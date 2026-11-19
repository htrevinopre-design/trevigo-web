import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  // SEO P002: title y description optimizados para "SAK inhibidor corrosión"
  // Anterior: "Sak: Insumos para Limpieza Industrial" (no capturaba intent metalúrgico)
  title: "SAK: Inhibidor de Corrosión para Metal | Trevigo",
  description:
    "SAK químico para tratamiento y protección de metales en Monterrey. Ideal para industria metalmecánica. Solicita cotización →",
  alternates: { canonical: `${COMPANY.url}/sak` },
  openGraph: {
    title: "SAK: Inhibidor de Corrosión para Metal | Trevigo",
    description:
      "SAK químico para tratamiento y protección de metales en Monterrey. Ideal para industria metalmecánica. Solicita cotización →",
    url: `${COMPANY.url}/sak`,
  },
};

export default function SakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
