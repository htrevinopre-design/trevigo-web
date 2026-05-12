import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { DATOS } from "@/lib/datos";

export const metadata: Metadata = {
  title: "Datos del sector industrial mexicano",
  description:
    "Cifras verificadas y actualizadas sobre la industria química, tratamiento de aguas, nearshoring y manufactura en México. Fuentes oficiales: ANIQ, INEGI, CONAGUA, Secretaría de Economía.",
  alternates: { canonical: `${COMPANY.url}/datos` },
};

export default function DatosIndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <nav
            className="flex items-center gap-2 text-steel-500 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-steel-300 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-steel-300">Datos</span>
          </nav>

          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-3">
            Centro de datos · Sector industrial mexicano
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Cifras del sector industrial mexicano
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Datos verificables y actualizados sobre la industria química,
            tratamiento de aguas, nearshoring en Nuevo León y otros temas
            relevantes para periodistas, analistas e investigadores que
            cubren el sector industrial mexicano. Todas las cifras incluyen
            fuente oficial y fecha de actualización.
          </p>
        </div>
      </section>

      {/* GRID DE DATOS */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {DATOS.map((d) => (
              <Link
                key={d.slug}
                href={`/datos/${d.slug}`}
                className="bg-white border border-steel-200 rounded-xl p-7 hover:shadow-md hover:border-navy-300 transition-all group flex flex-col"
              >
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">
                  {d.category} · Actualizado {formatShortDate(d.updatedAt)}
                </p>
                <h2 className="text-steel-900 font-black text-lg sm:text-xl leading-tight mb-3 group-hover:text-navy-700 transition-colors">
                  {d.question}
                </h2>
                <div className="bg-navy-50 border border-navy-100 rounded-lg p-4 mb-4">
                  <p className="text-3xl font-black text-navy-900 leading-none mb-1">
                    {d.headlineStat.value}{" "}
                    {d.headlineStat.unit && (
                      <span className="text-base font-black text-navy-700">
                        {d.headlineStat.unit}
                      </span>
                    )}
                  </p>
                  <p className="text-steel-600 text-xs leading-relaxed mt-2">
                    {d.headlineStat.label}
                  </p>
                </div>
                <p className="text-steel-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                  {d.shortAnswer}
                </p>
                <span className="text-navy-500 text-xs font-black uppercase tracking-wide">
                  Ver datos completos →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA EDITORIAL */}
      <section className="bg-steel-50 border-y border-steel-200 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-navy-500 w-1 h-7 rounded-full shrink-0" />
            <h2 className="text-base sm:text-lg font-black text-steel-900 uppercase">
              Nota editorial
            </h2>
          </div>
          <p className="text-steel-700 text-sm leading-relaxed mb-3">
            Los datos publicados en esta sección provienen de fuentes públicas
            oficiales: ANIQ (Asociación Nacional de la Industria Química), INEGI
            (Instituto Nacional de Estadística y Geografía), CONAGUA (Comisión
            Nacional del Agua), SEMARNAT (Secretaría de Medio Ambiente),
            Secretaría de Economía federal y estatal, Banxico y reportes
            sectoriales abiertos.
          </p>
          <p className="text-steel-700 text-sm leading-relaxed mb-3">
            Las cifras se revisan periódicamente. Cada página incluye la fecha
            de última actualización y enlaces directos a las fuentes originales
            para que cualquier lector pueda verificar y profundizar.
          </p>
          <p className="text-steel-500 text-xs leading-relaxed">
            <strong className="text-steel-700">
              Para periodistas y analistas:
            </strong>{" "}
            si necesitas datos adicionales o cifras específicas no incluidas en
            esta sección, contáctanos a{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-navy-600 hover:underline font-semibold"
            >
              {COMPANY.email}
            </a>
            . Podemos compartir información operativa del sector dentro del
            margen de confidencialidad aplicable.
          </p>
        </div>
      </section>
    </>
  );
}

function formatShortDate(iso: string): string {
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const [y, m] = iso.split("-").map(Number);
  if (!y || !m) return iso;
  return `${months[m - 1]}. ${y}`;
}
