import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Recursos Técnicos",
  description:
    "Artículos técnicos sobre químicos industriales, tratamiento de metales, fosfatizado y procesos de superficie. Conocimiento aplicado a la industria mexicana.",
  alternates: { canonical: `${COMPANY.url}/recursos` },
};

export default function RecursosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Recursos Técnicos Industrias Trevigo",
            url: `${COMPANY.url}/recursos`,
            blogPost: ARTICLES.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              url: `${COMPANY.url}/recursos/${a.slug}`,
              datePublished: a.publishedAt,
              dateModified: a.updatedAt,
              description: a.excerpt,
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-4">
            Recursos técnicos
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Conocimiento aplicado para{" "}
            <span className="text-orange-500">tu proceso industrial</span>
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-400 text-base leading-relaxed max-w-2xl">
            Artículos técnicos escritos por nuestro equipo de ingenieros sobre
            tratamiento de metales, materias primas industriales y procesos de
            superficie. Información práctica aplicable en plantas manufactureras.
          </p>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-steel-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-navy-300 transition-all flex flex-col"
              >
                <div className="bg-navy-500 px-5 py-3">
                  <p className="text-white text-[11px] font-black uppercase tracking-widest">
                    {article.category}
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-steel-400 text-xs mb-3">
                    {new Date(article.publishedAt).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {article.readingTime} de lectura
                  </p>
                  <h2 className="text-steel-900 font-black text-base uppercase leading-tight mb-3">
                    {article.title}
                  </h2>
                  <p className="text-steel-500 text-sm leading-relaxed mb-5 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/recursos/${article.slug}`}
                    className="inline-flex items-center gap-1 text-navy-600 font-black text-xs uppercase tracking-wide hover:text-navy-800 transition-colors mt-auto"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Buscas asesoría técnica para tu planta?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Nuestro equipo de ingenieros visita tu planta sin costo, analiza tu
            proceso y propone soluciones químicas a la medida.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
          >
            Agendar visita técnica
          </Link>
        </div>
      </section>
    </>
  );
}
