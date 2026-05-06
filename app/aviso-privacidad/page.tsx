import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de privacidad de Industrias Trevigo: tratamiento de datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  alternates: { canonical: `${COMPANY.url}/aviso-privacidad` },
  robots: { index: true, follow: true },
};

export default function AvisoPrivacidadPage() {
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
            <span className="text-steel-300">Aviso de Privacidad</span>
          </nav>

          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Información legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-3">
            Aviso de Privacidad
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
              En cumplimiento con la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares, Industrias Trevigo
              (en lo sucesivo &ldquo;Trevigo&rdquo;), con domicilio en
              Monterrey, Nuevo León, México, es responsable del tratamiento
              de sus datos personales.
            </p>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Datos personales que recabamos
              </h2>
              <p className="mb-3">
                Trevigo podrá recabar los siguientes datos personales a través
                de su sitio web, formularios de contacto y medios digitales:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Nombre completo</li>
                <li>Empresa</li>
                <li>Correo electrónico</li>
                <li>Número telefónico</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Finalidades del tratamiento de datos
              </h2>
              <p className="mb-3">
                Sus datos personales serán utilizados para las siguientes
                finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Atender solicitudes de información</li>
                <li>Elaborar y enviar cotizaciones</li>
                <li>Dar seguimiento comercial y técnico</li>
                <li>
                  Establecer contacto relacionado con nuestros productos y
                  servicios
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Transferencia de datos
              </h2>
              <p className="mb-3">
                Sus datos podrán ser compartidos con terceros únicamente en
                los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>
                  Plataformas de comunicación como WhatsApp (propiedad de Meta
                  Platforms, Inc.) para facilitar la comunicación directa
                </li>
                <li>
                  Herramientas tecnológicas utilizadas para la operación del
                  sitio web
                </li>
              </ul>
              <p>
                En todos los casos, se procurará que dichos terceros cumplan
                con estándares adecuados de protección de datos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Uso de tecnologías de rastreo
              </h2>
              <p>
                Nuestro sitio web utiliza herramientas de análisis como Google
                Analytics, que recopilan información de manera automática
                para analizar el comportamiento de los usuarios. Esta
                información no permite identificarlo personalmente, pero ayuda
                a mejorar la experiencia del usuario.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Almacenamiento de datos
              </h2>
              <p>
                Los datos personales proporcionados serán almacenados en
                sistemas internos de Trevigo, incluyendo herramientas como
                hojas de cálculo (Excel), bajo medidas razonables de seguridad
                administrativa y técnica.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Derechos ARCO
              </h2>
              <p className="mb-3">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-1.5 mb-3">
                <li>Acceder a sus datos personales</li>
                <li>Rectificarlos si son inexactos</li>
                <li>Cancelarlos cuando considere que no son necesarios</li>
                <li>Oponerse al tratamiento de los mismos</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede enviar una solicitud al
                correo electrónico:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-navy-600 font-bold hover:underline"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-steel-900 uppercase mb-3">
                Cambios al aviso de privacidad
              </h2>
              <p>
                Trevigo se reserva el derecho de modificar el presente aviso
                en cualquier momento. Cualquier cambio será publicado en este
                sitio web.
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
