import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";
import { GLOSSARY, getGlossaryEntry } from "@/lib/glossary";
import { ARTICLES } from "@/lib/articles";
import { SERVICES_CONTENT } from "@/lib/services-content";

const allProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.subcategories.flatMap((sub) =>
    sub.products.map((p) => ({ ...p, subcategoryName: sub.name }))
  )
);

export async function generateStaticParams() {
  return GLOSSARY.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) return { title: "Término no encontrado" };
  return {
    title: `${entry.term}: Definición Técnica`,
    description: entry.shortDef,
    alternates: { canonical: `${COMPANY.url}/glosario/${entry.slug}` },
    openGraph: {
      title: `${entry.term}: Definición Técnica`,
      description: entry.shortDef,
      url: `${COMPANY.url}/glosario/${entry.slug}`,
    },
  };
}

export default function GlossaryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) notFound();

  const relatedTerms = (entry.relatedTerms ?? [])
    .map((slug) => GLOSSARY.find((g) => g.slug === slug))
    .filter(Boolean) as typeof GLOSSARY;

  const relatedProducts = (entry.relatedProductIds ?? [])
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts;

  const relatedArticles = (entry.relatedArticleSlugs ?? [])
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter(Boolean) as typeof ARTICLES;

  const relatedServices = (entry.relatedServiceSlugs ?? [])
    .map((slug) => SERVICES_CONTENT.find((s) => s.slug === slug))
    .filter(Boolean) as typeof SERVICES_CONTENT;

  const categoryLabels: Record<string, string> = {
    metales: "Tratamiento de Metales",
    aguas: "Tratamiento de Aguas",
    lubricantes: "Lubricantes",
    general: "General",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: entry.term,
            description: entry.shortDef,
            url: `${COMPANY.url}/glosario/${entry.slug}`,
            inDefinedTermSet: {
              "@type": "DefinedTermSet",
              name: "Glosario Técnico Industrial Trevigo",
              url: `${COMPANY.url}/glosario`,
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
              { "@type": "ListItem", position: 2, name: "Glosario", item: `${COMPANY.url}/glosario` },
              { "@type": "ListItem", position: 3, name: entry.term, item: `${COMPANY.url}/glosario/${entry.slug}` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/glosario" className="hover:text-steel-300 transition-colors">Glosario</Link>
            <span>/</span>
            <span className="text-steel-300 truncate">{entry.term}</span>
          </nav>

          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-3">
            {categoryLabels[entry.category]}
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            {entry.term}
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-steel-300 text-lg leading-relaxed">
            {entry.shortDef}
          </p>
        </div>
      </section>

      {/* DEFINITION */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase mb-5">
            Definición técnica completa
          </h2>
          <div className="w-10 h-1 bg-orange-500 mb-6" />
          {entry.longDef.map((p, i) => (
            <p key={i} className="text-steel-700 text-base leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </article>

      {/* RELATED TERMS */}
      {relatedTerms.length > 0 && (
        <section className="bg-steel-50 border-y border-steel-200 py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
              Términos relacionados
            </p>
            <h2 className="text-xl font-black text-steel-900 uppercase mb-6">
              Conceptos asociados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTerms.map((t) => (
                <Link
                  key={t.slug}
                  href={`/glosario/${t.slug}`}
                  className="bg-white border border-steel-200 rounded-lg p-4 hover:border-navy-300 hover:shadow-sm transition-all group"
                >
                  <h3 className="text-steel-900 font-black text-sm uppercase mb-1 group-hover:text-navy-700 transition-colors">
                    {t.term}
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed line-clamp-2">
                    {t.shortDef}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS / SERVICES / ARTICLES */}
      {(relatedProducts.length > 0 || relatedServices.length > 0 || relatedArticles.length > 0) && (
        <section className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {relatedProducts.length > 0 && (
              <div>
                <p className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                  Productos relacionados
                </p>
                <h2 className="text-xl font-black text-steel-900 uppercase mb-6">
                  Productos químicos vinculados a este término
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/productos/${p.id}`}
                      className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group"
                    >
                      <p className="text-navy-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                        {p.subcategoryName}
                      </p>
                      <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-700">
                        {p.name}
                      </h3>
                      <p className="text-steel-500 text-xs line-clamp-2">{p.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedServices.length > 0 && (
              <div>
                <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                  Servicios relacionados
                </p>
                <h2 className="text-xl font-black text-steel-900 uppercase mb-6">
                  Servicios donde aplicamos este concepto
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="bg-steel-50 border border-steel-200 rounded-xl p-5 hover:bg-white hover:border-navy-300 transition-all group"
                    >
                      <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-1 group-hover:text-navy-700">
                        {s.metaTitle}
                      </h3>
                      <span className="text-navy-500 text-xs font-bold">Ver guía técnica →</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedArticles.length > 0 && (
              <div>
                <p className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                  Artículos técnicos
                </p>
                <h2 className="text-xl font-black text-steel-900 uppercase mb-6">
                  Lecturas profundas sobre este tema
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/recursos/${a.slug}`}
                      className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-orange-300 transition-all group"
                    >
                      <p className="text-orange-500 text-[10px] font-black uppercase tracking-wider mb-2">
                        {a.category} · {a.readingTime}
                      </p>
                      <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-orange-600">
                        {a.title}
                      </h3>
                      <p className="text-steel-500 text-xs line-clamp-2">{a.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy-950 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase mb-3">
            ¿Necesitas ayuda con un proceso que involucra {entry.term}?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Visita técnica sin costo en Nuevo León y norte de México.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Agendar visita técnica
            </Link>
            <Link
              href="/glosario"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-7 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver glosario completo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
