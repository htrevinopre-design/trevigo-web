import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto: Cotización y Asesoría Técnica",
  description:
    "Contacta a Industrias Trevigo en Monterrey, N.L. Cotización de químicos industriales, asesoría técnica y visitas a planta sin costo. Respuesta en 24h hábiles.",
  alternates: { canonical: `${COMPANY.url}/contacto` },
  openGraph: {
    title: "Contacto: Cotización y Asesoría Técnica",
    description:
      "Cotización de químicos industriales, asesoría técnica y visitas a planta sin costo en Nuevo León.",
    url: `${COMPANY.url}/contacto`,
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
