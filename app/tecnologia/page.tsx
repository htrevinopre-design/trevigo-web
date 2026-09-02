import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnología para Líneas de Acabado",
  description:
    "La tecnología de Trevigo para líneas de acabado: coatingAI para optimizar pintura en polvo con IA, y SurfaceOS, la bitácora digital de tus líneas de proceso con AMEF vivo y evidencia ISO 9001.",
  alternates: { canonical: `${COMPANY.url}/tecnologia` },
};

const TECH = [
  {
    href: "/coatingai",
    badge: "Distribuidor Autorizado en México",
    badgeColor: "text-emerald-700 border-emerald-200 bg-emerald-50",
    dot: "bg-emerald-500",
    name: "coatingAI",
    tagline: "IA que baja el consumo de polvo en tu línea de pintura",
    desc: "El software suizo que optimiza la aplicación de pintura en polvo: calibra pistolas, ecualiza la salida de polvo y ajusta parámetros en ciclo cerrado. Ahorro mínimo publicado de 10% de polvo — usuarios reportan entre 16 y 30% — sin cambiar cabinas ni equipo. Trevigo es su distribuidor autorizado en México y lo implementa junto con el pretratamiento de tu línea.",
    facts: ["Ahorro mínimo de 10% de polvo publicado", "Compatible con cualquier cabina y polvo", "Alianza coatingAI · AkzoNobel Powder Coatings"],
    cta: "Conocer coatingAI",
    ctaClass: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    href: "/surfaceos",
    badge: "Producto Trevigo",
    badgeColor: "text-blue-700 border-blue-200 bg-blue-50",
    dot: "bg-blue-500",
    name: "SurfaceOS",
    tagline: "La bitácora digital de tus líneas de proceso",
    desc: "El sistema de registro y memoria de las líneas donde corre la química — pretratamiento, galvanizado, decapado, pasivado: captura de operador más rápida que el papel, evidencia ISO 9001 ordenada por cláusula, tendencias de parámetros por turno y un AMEF vivo que convierte cada intervención en conocimiento de proceso. Arranca con una tablet, sin sensores ni obra.",
    facts: ["Evidencia ISO 9001 por cláusula (9.1.1 · 8.7.2 · 10.2)", "AMEF vivo alimentado por la operación real", "4-6 semanas a la primera línea operando"],
    cta: "Conocer SurfaceOS",
    ctaClass: "bg-blue-600 hover:bg-blue-700",
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: COMPANY.url },
              { "@type": "ListItem", position: 2, name: "Tecnología", item: `${COMPANY.url}/tecnologia` },
            ],
          }),
        }}
      />

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-white pt-[100px] border-b border-steel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 border border-steel-200 bg-steel-50 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-500" />
            <span className="text-steel-600 text-[11px] font-black uppercase tracking-widest">
              Tecnología Trevigo
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-navy-950 uppercase leading-[0.95] mb-6">
            La química funciona mejor{" "}
            <span className="text-blue-600">con sistema</span>
          </h1>

          <p className="text-steel-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Llevamos 35 años dentro de líneas de acabado. Esa experiencia ahora
            también se entrega como tecnología: software que optimiza la
            aplicación de pintura y sistemas que capturan la memoria del
            proceso — siempre del lado de quien opera la línea.
          </p>
        </div>
      </section>

      {/* ─── TECH CARDS ──────────────────────────────────────────────── */}
      <section className="bg-steel-50 py-20 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {TECH.map((t) => (
            <div key={t.name} className="bg-white border border-steel-200 rounded-2xl p-8 lg:p-12 hover:shadow-md transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                <div>
                  <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6 ${t.badgeColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dot} animate-pulse`} />
                    <span className="text-[11px] font-black uppercase tracking-widest">{t.badge}</span>
                  </div>
                  <h2 className="text-navy-950 font-black text-3xl sm:text-4xl uppercase leading-tight mb-2">
                    {t.name}
                  </h2>
                  <p className="text-steel-500 font-semibold text-base mb-5">{t.tagline}</p>
                  <p className="text-steel-600 text-sm leading-relaxed mb-7">{t.desc}</p>
                  <Link
                    href={t.href}
                    className={`inline-flex items-center justify-center gap-2 ${t.ctaClass} text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors`}
                  >
                    {t.cta} →
                  </Link>
                </div>

                <div className="space-y-3">
                  {t.facts.map((f) => (
                    <div key={f} className="flex items-start gap-3 bg-steel-50 border border-steel-200 rounded-xl p-4">
                      <svg className="w-4 h-4 mt-0.5 shrink-0 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-steel-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── POR QUÉ TREVIGO ─────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-steel-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase leading-tight mb-5">
            Tecnología que nace del piso de planta
          </h2>
          <p className="text-steel-600 text-base leading-relaxed max-w-2xl mx-auto">
            No somos una empresa de software buscando clientes industriales:
            somos una empresa industrial que convirtió en tecnología lo que
            aprendió en 35 años de operar química en líneas de acabado. Por eso
            cada herramienta está diseñada alrededor de quien la usa a diario —
            el aplicador de pintura, el operador de la línea, el gerente de
            calidad — y se implementa con acompañamiento en planta, en español.
          </p>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-4">
            Platícanos de tu línea
          </h2>
          <p className="text-steel-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Cuéntanos qué corre en tu planta y te decimos qué herramienta
            aplica — con demo guiada y sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 font-black text-base uppercase tracking-wide transition-colors"
          >
            Agendar una demo
          </Link>
        </div>
      </section>
    </>
  );
}
