import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY } from "@/lib/data";
import { DATOS, getDatoBySlug } from "@/lib/datos";
import { getAuthor, DEFAULT_AUTHOR_SLUG } from "@/lib/authors";
import FAQAccordion from "@/components/FAQAccordion";
import AuthorBlock from "@/components/AuthorBlock";
import ShareButtons from "@/components/ShareButtons";
import { Icon } from "@/components/Icon";

export async function generateStaticParams() {
  return DATOS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const dato = getDatoBySlug(params.slug);
  if (!dato) return { title: "Dato no encontrado" };
  return {
    title: dato.metaTitle,
    description: dato.metaDescription,
    alternates: { canonical: `${COMPANY.url}/datos/${dato.slug}` },
    openGraph: {
      title: dato.metaTitle,
      description: dato.metaDescription,
      url: `${COMPANY.url}/datos/${dato.slug}`,
      type: "article",
      publishedTime: dato.publishedAt,
      modifiedTime: dato.updatedAt,
    },
  };
}

export default function DatoPage({ params }: { params: { slug: string } }) {
  const dato = getDatoBySlug(params.slug);
  if (!dato) notFound();

  const author = getAuthor(dato.authorSlug ?? DEFAULT_AUTHOR_SLUG)!;

  // ── Schema.org Article + FAQPage + BreadcrumbList ──
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: dato.question,
    description: dato.shortAnswer,
    datePublished: dato.publishedAt,
    dateModified: dato.updatedAt,
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
      url: COMPANY.url,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/datos/${dato.slug}`,
    },
    contentLocation: {
      "@type": "Country",
      name: "México",
    },
    inLanguage: "es-MX",
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: COMPANY.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Datos",
        item: `${COMPANY.url}/datos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: dato.question,
        item: `${COMPANY.url}/datos/${dato.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {dato.faqs && dato.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: dato.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      {/* ─── HERO con HEADLINE STAT ───────────────────────────────── */}
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
            <Link href="/datos" className="hover:text-steel-300 transition-colors">
              Datos
            </Link>
            <span>/</span>
            <span className="text-steel-300">{dato.category}</span>
          </nav>

          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-3">
            {dato.category} · Datos verificados
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            {dato.question}
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-7">
            {dato.shortAnswer}
          </p>

          {/* ── Byline del autor ── */}
          <AuthorBlock author={author} variant="byline" date={dato.updatedAt} />

          {/* ── Botones de compartir ── */}
          <div className="mt-7 pt-6 border-t border-white/10">
            <ShareButtons
              url={`${COMPANY.url}/datos/${dato.slug}`}
              title={dato.question}
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* ─── HEADLINE STAT CARD ───────────────────────────────────── */}
      <section className="bg-white border-b border-steel-200 py-12 -mt-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-50 border-2 border-navy-200 rounded-2xl p-8 sm:p-10">
            <p className="text-navy-600 text-[11px] font-black uppercase tracking-[0.2em] mb-3 inline-flex items-center gap-1.5">
              <Icon name="chart-bar" className="w-3.5 h-3.5" />
              La cifra
            </p>
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
              <span className="text-4xl sm:text-6xl font-black text-navy-900 leading-none">
                {dato.headlineStat.value}
              </span>
              {dato.headlineStat.unit && (
                <span className="text-xl sm:text-2xl font-black text-navy-700">
                  {dato.headlineStat.unit}
                </span>
              )}
            </div>
            <p className="text-steel-700 text-sm sm:text-base leading-relaxed max-w-2xl mb-4">
              {dato.headlineStat.label}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-steel-500 pt-4 border-t border-navy-100">
              <span>
                <strong className="text-steel-700">Fuente:</strong>{" "}
                {dato.headlineStat.source.url ? (
                  <a
                    href={dato.headlineStat.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:underline font-semibold"
                  >
                    {dato.headlineStat.source.name}
                  </a>
                ) : (
                  <span className="text-steel-700 font-semibold">
                    {dato.headlineStat.source.name}
                  </span>
                )}
              </span>
              {dato.headlineStat.source.year && (
                <span>
                  <strong className="text-steel-700">Año:</strong>{" "}
                  {dato.headlineStat.source.year}
                </span>
              )}
              <span>
                <strong className="text-steel-700">Actualizado:</strong>{" "}
                {formatDate(dato.updatedAt)}
              </span>
            </div>
          </div>

          {/* Intro */}
          <p className="text-steel-700 text-base leading-relaxed mt-8 max-w-3xl">
            {dato.intro}
          </p>
        </div>
      </section>

      {/* ─── SUPPORTING STATS GRID ────────────────────────────────── */}
      {dato.supportingStats.length > 0 && (
        <section className="bg-steel-50 border-b border-steel-200 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="bg-orange-500 w-1 h-8 rounded-full shrink-0" />
              <div>
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                  Cifras de apoyo
                </p>
                <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                  Datos relacionados verificables
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dato.supportingStats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-steel-200 rounded-xl p-5 hover:border-navy-300 transition-colors"
                >
                  <p className="text-3xl font-black text-navy-700 leading-tight mb-2">
                    {s.value}
                  </p>
                  <p className="text-steel-700 text-sm leading-relaxed mb-2">
                    {s.label}
                  </p>
                  {s.source && (
                    <p className="text-steel-400 text-[10px] font-semibold uppercase tracking-wider mt-2">
                      Fuente: {s.source}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CONTEXT NARRATIVE ────────────────────────────────────── */}
      <article className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {dato.context.map((section, idx) => (
            <section key={idx} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase mb-4 leading-tight">
                {section.heading}
              </h2>
              <div className="w-10 h-1 bg-orange-500 mb-5" />
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-steel-700 text-base leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2.5 mt-4">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-steel-700 text-base leading-relaxed"
                    >
                      <span className="text-orange-500 font-black mt-1 shrink-0">
                        ›
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* ─── FUENTES ──────────────────────────────────────────────── */}
      <section className="bg-steel-50 border-y border-steel-200 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-navy-500 w-1 h-7 rounded-full shrink-0" />
            <div>
              <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                Para verificar
              </p>
              <h2 className="text-base sm:text-lg font-black text-steel-900 uppercase">
                Fuentes oficiales citadas
              </h2>
            </div>
          </div>
          <ul className="space-y-2">
            {dato.sources.map((src, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-steel-700"
              >
                <span className="text-navy-500 font-black mt-0.5 shrink-0">
                  ›
                </span>
                <div>
                  {src.url ? (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-600 hover:underline font-semibold"
                    >
                      {src.name}
                    </a>
                  ) : (
                    <span className="text-steel-700 font-semibold">
                      {src.name}
                    </span>
                  )}
                  {src.year && (
                    <span className="text-steel-500 ml-2">({src.year})</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      {dato.faqs && dato.faqs.length > 0 && (
        <FAQAccordion
          faqs={dato.faqs}
          title="Preguntas relacionadas"
        />
      )}

      {/* ─── SOBRE EL AUTOR ───────────────────────────────────────── */}
      <AuthorBlock author={author} variant="full" />

      {/* ─── INTERNAL LINKS (funnel a money pages) ────────────────── */}
      <section className="bg-white py-14 border-y border-steel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-7">
            <div className="bg-orange-500 w-1 h-8 rounded-full shrink-0" />
            <div>
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                Profundiza
              </p>
              <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                Recursos y servicios relacionados
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dato.internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-steel-50 border border-steel-200 rounded-xl p-5 hover:bg-white hover:border-navy-300 hover:shadow-sm transition-all group"
              >
                <p className="text-navy-700 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-900 transition-colors">
                  {link.text} →
                </p>
                {link.description && (
                  <p className="text-steel-500 text-xs leading-relaxed">
                    {link.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
            Industrias Trevigo · Monterrey · desde 1989
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Necesitas químicos industriales para tu planta?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-7 max-w-xl mx-auto">
            Fabricamos y distribuimos químicos industriales para tratamiento de metales,
            limpieza, lubricación y tratamiento de aguas residuales. Visita técnica sin
            costo en todo Nuevo León.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Contactar a un asesor técnico
            </Link>
            <Link
              href="/datos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver más datos del sector
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string): string {
  // ISO yyyy-mm-dd → "12 de mayo, 2026"
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} de ${months[m - 1]}, ${y}`;
}
