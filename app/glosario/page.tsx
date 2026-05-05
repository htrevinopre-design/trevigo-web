import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { GLOSSARY } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glosario Técnico Industrial",
  description:
    "Glosario técnico de procesos industriales: fosfatizado, pasivado, decapado, tropicalizado, DBO, DQO, ISO VG, NOM-001, ASTM y más términos de tratamiento de metales y aguas.",
  alternates: { canonical: `${COMPANY.url}/glosario` },
};

const CATEGORY_LABELS: Record<string, { label: string; icon: string; accent: string }> = {
  metales: { label: "Tratamiento de Metales", icon: "⚙️", accent: "bg-navy-500" },
  aguas: { label: "Tratamiento de Aguas", icon: "💧", accent: "bg-teal-500" },
  lubricantes: { label: "Lubricantes", icon: "🛢️", accent: "bg-amber-500" },
  general: { label: "General", icon: "📚", accent: "bg-steel-500" },
};

export default function GlosarioPage() {
  // Group entries by category
  const grouped = GLOSSARY.reduce((acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    return acc;
  }, {} as Record<string, typeof GLOSSARY>);

  // Sort within each category alphabetically
  Object.values(grouped).forEach((arr) => arr.sort((a, b) => a.term.localeCompare(b.term, "es")));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Glosario Técnico Industrial Trevigo",
            description:
              "Términos técnicos de tratamiento de metales, aguas, lubricantes y procesos industriales.",
            url: `${COMPANY.url}/glosario`,
            hasDefinedTerm: GLOSSARY.map((g) => ({
              "@type": "DefinedTerm",
              name: g.term,
              description: g.shortDef,
              url: `${COMPANY.url}/glosario/${g.slug}`,
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-4">
            Glosario técnico
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Términos técnicos de la{" "}
            <span className="text-orange-500">industria química</span>
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-400 text-base leading-relaxed max-w-2xl">
            Definiciones técnicas de los procesos, productos y normativas más
            usados en plantas industriales mexicanas. Útil para ingenieros,
            compradores técnicos y operadores de proceso.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {Object.entries(grouped).map(([categoryKey, entries]) => {
            const meta = CATEGORY_LABELS[categoryKey];
            return (
              <div key={categoryKey}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${meta.accent} w-1 h-10 rounded-full shrink-0`} />
                  <div>
                    <p className="text-steel-500 text-xs font-black uppercase tracking-widest">
                      {meta.icon} Categoría
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                      {meta.label}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {entries.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/glosario/${entry.slug}`}
                      className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group"
                    >
                      <h3 className="text-steel-900 font-black text-base uppercase leading-tight mb-2 group-hover:text-navy-700 transition-colors">
                        {entry.term}
                      </h3>
                      <p className="text-steel-500 text-sm leading-relaxed line-clamp-3 mb-3">
                        {entry.shortDef}
                      </p>
                      <span className="inline-flex items-center gap-1 text-navy-500 text-xs font-black uppercase tracking-wide">
                        Ver definición →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Buscas un proveedor químico técnico en México?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            35 años aplicando estos conceptos en plantas industriales mexicanas.
            Te ayudamos a elegir el producto y proceso correcto para tu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Solicitar asesoría técnica
            </Link>
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver artículos técnicos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
