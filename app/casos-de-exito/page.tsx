import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, INDUSTRIES } from "@/lib/data";
import { CASES } from "@/lib/cases";
import { SERVICES_CONTENT } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Casos de Éxito en Plantas Industriales",
  description:
    "Proyectos reales de optimización química en plantas industriales de Monterrey y México: fosfatizado, tratamiento de aguas, tropicalizado y más. Resultados medibles.",
  alternates: { canonical: `${COMPANY.url}/casos-de-exito` },
};

export default function CasosDeExitoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Casos de Éxito en Plantas Industriales",
            description:
              "Proyectos reales de optimización química en plantas industriales de Monterrey y México con resultados medibles.",
            url: `${COMPANY.url}/casos-de-exito`,
            isPartOf: {
              "@type": "WebSite",
              name: COMPANY.legalName,
              url: COMPANY.url,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: COMPANY.url },
              { "@type": "ListItem", position: 2, name: "Casos de éxito", item: `${COMPANY.url}/casos-de-exito` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-4">
            Casos de éxito
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Proyectos reales con{" "}
            <span className="text-orange-500">resultados medibles</span>
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-400 text-base leading-relaxed max-w-2xl">
            35 años trabajando con plantas industriales en México. Estos son
            algunos de los proyectos que hemos resuelto: optimización de procesos,
            cumplimiento normativo y reducción de costos operativos.
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {CASES.map((c, idx) => (
            <article
              key={c.id}
              className="bg-white border border-steel-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="bg-navy-500 px-6 py-3 flex flex-wrap items-center gap-3">
                <span className="text-white text-[11px] font-black uppercase tracking-widest">
                  Caso {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-steel-300 text-xs">·</span>
                <span className="text-white text-xs font-medium">{c.serviceArea}</span>
                <span className="text-steel-300 text-xs">·</span>
                <span className="text-white text-xs font-medium">{c.location}</span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                  <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase leading-tight">
                    {c.industrySlug ? (
                      <Link
                        href={`/industrias/${c.industrySlug}`}
                        className="hover:text-orange-600 transition-colors"
                      >
                        {c.industry}
                      </Link>
                    ) : (
                      c.industry
                    )}
                  </h2>
                </div>
                <div className="w-10 h-1 bg-orange-500 mb-6" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-2">
                      Reto
                    </p>
                    <p className="text-steel-700 text-sm leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-2">
                      Solución
                    </p>
                    <p className="text-steel-700 text-sm leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                <div className="bg-steel-50 border-l-4 border-green-500 p-5 rounded mb-5">
                  <p className="text-green-700 text-[10px] font-black uppercase tracking-widest mb-3">
                    Resultados medibles
                  </p>
                  <ul className="space-y-2">
                    {c.results.map((r, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-steel-800 text-sm leading-relaxed"
                      >
                        <span className="text-green-600 font-black mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {c.productsUsed && c.productsUsed.length > 0 && (
                  <div className="mb-4">
                    <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-3">
                      Productos aplicados
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.productsUsed.map((p) => (
                        <Link
                          key={p.id}
                          href={`/productos/${p.id}`}
                          className="inline-flex items-center gap-1 bg-white border border-steel-300 hover:border-navy-400 text-steel-700 hover:text-navy-700 text-xs font-bold px-3 py-2 rounded-md transition-colors"
                        >
                          {p.name}
                          <span className="text-steel-400">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {c.serviceSlug && (() => {
                  const svc = SERVICES_CONTENT.find((s) => s.slug === c.serviceSlug);
                  if (!svc) return null;
                  return (
                    <div className="pt-3 border-t border-steel-100">
                      <Link
                        href={`/servicios/${svc.slug}`}
                        className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 text-xs font-black uppercase tracking-wide"
                      >
                        Ver servicio: {svc.metaTitle} →
                      </Link>
                    </div>
                  );
                })()}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="bg-steel-50 border-y border-steel-200 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
            Industrias atendidas
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase mb-2">
            Trabajamos con plantas en estos sectores
          </h2>
          <div className="w-12 h-1 bg-orange-500 mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                href={`/industrias/${ind.slug}`}
                className="bg-white border border-steel-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-sm transition-all group flex items-center gap-3"
              >
                <span className="text-2xl shrink-0">{ind.icon}</span>
                <span className="text-steel-900 font-black text-xs uppercase leading-tight group-hover:text-orange-600 transition-colors">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Tu planta tiene un reto similar?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Visita técnica sin costo en Nuevo León y zona norte. Diagnóstico,
            propuesta de solución y resultados medibles desde la primera reunión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Agendar visita técnica
            </Link>
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver recursos técnicos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
