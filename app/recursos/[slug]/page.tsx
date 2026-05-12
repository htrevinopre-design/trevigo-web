import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import { getAuthor, DEFAULT_AUTHOR_SLUG } from "@/lib/authors";
import FAQAccordion from "@/components/FAQAccordion";
import AuthorBlock from "@/components/AuthorBlock";

const allProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.subcategories.flatMap((sub) => sub.products)
);

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Artículo no encontrado" };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `${COMPANY.url}/recursos/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${COMPANY.url}/recursos/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const author = getAuthor(article.authorSlug ?? DEFAULT_AUTHOR_SLUG)!;

  const relatedProducts = (article.relatedProducts ?? [])
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
              worksFor: {
                "@type": "Organization",
                name: author.company,
                url: COMPANY.url,
              },
              knowsAbout: author.expertise,
              ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
            },
            publisher: {
              "@type": "Organization",
              name: COMPANY.legalName,
              logo: {
                "@type": "ImageObject",
                url: `${COMPANY.url}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${COMPANY.url}/recursos/${article.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Recursos", item: `${COMPANY.url}/recursos` },
              { "@type": "ListItem", position: 3, name: article.title, item: `${COMPANY.url}/recursos/${article.slug}` },
            ],
          }),
        }}
      />

      {article.faqs && article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        />
      )}

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/recursos" className="hover:text-steel-300 transition-colors">Recursos</Link>
            <span>/</span>
            <span className="text-steel-300 truncate">{article.category}</span>
          </nav>

          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-4">
            {article.category}
          </p>
          <h1 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight mb-5">
            {article.title}
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-6" />
          <div className="flex items-center gap-4 text-steel-400 text-sm mb-7">
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("es-MX", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-steel-600">·</span>
            <span>{article.readingTime} de lectura</span>
          </div>

          {/* ── Byline del autor ── */}
          <AuthorBlock author={author} variant="byline" />
        </div>
      </section>

      {/* BODY */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-steel-700 text-lg leading-relaxed mb-12 font-medium">
            {article.intro}
          </p>

          {article.sections.map((section, idx) => (
            <section key={idx} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase mb-5 leading-tight">
                {section.heading}
              </h2>
              <div className="w-10 h-1 bg-orange-500 mb-6" />
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-steel-700 text-base leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-3 mt-5 mb-2">
                  {section.list.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-steel-700 text-base leading-relaxed">
                      <span className="text-orange-500 font-black mt-1 shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="bg-steel-50 border-y border-steel-200 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
              Productos relacionados
            </p>
            <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase mb-8">
              Soluciones químicas Trevigo para este proceso
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/productos/${p.id}`}
                  className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group"
                >
                  <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-700">
                    {p.name}
                  </h3>
                  <p className="text-steel-500 text-sm leading-relaxed line-clamp-3 mb-3">
                    {p.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-navy-500 text-xs font-black uppercase tracking-wide">
                    Ver ficha técnica →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {article.faqs && article.faqs.length > 0 && (
        <FAQAccordion
          faqs={article.faqs}
          title={`Preguntas frecuentes: ${article.category}`}
        />
      )}

      {/* SOBRE EL AUTOR */}
      <AuthorBlock author={author} variant="full" />

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            {article.cta.title}
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {article.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/recursos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver más recursos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
