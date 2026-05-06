import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description:
    "Términos y condiciones de uso del sitio web de Industrias Trevigo: cotizaciones, responsabilidad, propiedad intelectual y jurisdicción aplicable.",
  alternates: { canonical: `${COMPANY.url}/terminos` },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav
            className="flex items-center gap-2 text-steel-500 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-steel-300 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-steel-300">Términos y Condiciones</span>
          </nav>

          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Información legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-3">
            Términos y Condiciones de Uso
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-steel-400 text-sm">
            Última actualización: 6 de mayo, 2026
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-steel-700 text-base leading-relaxed">
            <p>
              Al acceder y utilizar este sitio web, usted acepta los
              siguientes términos y condiciones:
            </p>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Uso del sitio
              </h2>
              <p>
                El contenido de este sitio tiene fines informativos y
                comerciales. Trevigo se reserva el derecho de modificar la
                información sin previo aviso.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Cotizaciones
              </h2>
              <p className="mb-3">
                Toda solicitud de cotización realizada a través del sitio web
                o medios de contacto:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Está sujeta a validación técnica</li>
                <li>No constituye una oferta vinculante</li>
                <li>
                  Puede cambiar sin previo aviso según condiciones del proyecto
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Responsabilidad
              </h2>
              <p className="mb-3">Trevigo no se hace responsable por:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>El uso indebido de los productos comercializados</li>
                <li>Interpretaciones incorrectas de la información técnica</li>
                <li>
                  Daños derivados de una aplicación incorrecta de los productos
                </li>
              </ul>
              <p>
                Es responsabilidad del cliente validar el uso adecuado de los
                productos en sus procesos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Propiedad intelectual
              </h2>
              <p>
                Todo el contenido del sitio web, incluyendo textos, imágenes,
                fichas técnicas y materiales, es propiedad de Trevigo y no
                puede ser reproducido sin autorización.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Enlaces externos
              </h2>
              <p>
                El sitio puede contener enlaces a terceros (por ejemplo,
                WhatsApp). Trevigo no es responsable por las políticas de
                privacidad o prácticas de dichos servicios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Jurisdicción
              </h2>
              <p>
                Para cualquier controversia, las partes se someten a las leyes
                aplicables en México y a los tribunales competentes de Nuevo
                León.
              </p>
            </div>

            <div className="pt-6 border-t border-steel-200">
              <p className="text-steel-500 text-sm">
                <strong className="text-steel-700">
                  Fecha de última actualización:
                </strong>{" "}
                6 de mayo, 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
