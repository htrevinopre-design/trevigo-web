import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  COMPANY,
  PRODUCT_CATEGORIES,
  INDUSTRIES,
  SERVICES_METALES,
  SERVICES_AGUAS,
} from "@/lib/data";
import { EmojiIcon } from "@/components/Icon";
import { SERVICES_CONTENT, getServiceContentBySlug } from "@/lib/services-content";
import { getCasesByServiceSlug } from "@/lib/cases";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCotizaForm from "@/components/ServiceCotizaForm";

const allProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.subcategories.flatMap((sub) =>
    sub.products.map((p) => ({
      ...p,
      categoryName: cat.name,
      subcategoryName: sub.name,
    }))
  )
);

const allServices = [...SERVICES_METALES, ...SERVICES_AGUAS];

export async function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const content = getServiceContentBySlug(params.slug);
  if (!content) return { title: "Servicio no encontrado" };
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `${COMPANY.url}/servicios/${content.slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${COMPANY.url}/servicios/${content.slug}`,
    },
  };
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const content = getServiceContentBySlug(params.slug);
  if (!content) notFound();

  const baseService = allServices.find((s) => s.id === content.slug);
  const relatedProducts = content.relatedProductIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts;
  const relatedIndustries = content.relatedIndustrySlugs
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter(Boolean) as typeof INDUSTRIES;

  const categoryLabel =
    content.category === "metales" ? "Tratamiento de Metales" : "Tratamiento de Aguas";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: content.title,
            description: content.metaDescription,
            provider: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: COMPANY.url,
            },
            areaServed: { "@type": "Country", name: "México" },
            serviceType: categoryLabel,
            url: `${COMPANY.url}/servicios/${content.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Servicios", item: `${COMPANY.url}/servicios` },
              { "@type": "ListItem", position: 3, name: baseService?.name ?? content.title, item: `${COMPANY.url}/servicios/${content.slug}` },
            ],
          }),
        }}
      />
      {content.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-steel-300 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-steel-300 truncate">{baseService?.name ?? content.title}</span>
          </nav>

          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-4">
            {categoryLabel}
          </p>
          {baseService?.icon && (
            <div className="text-5xl mb-4">{baseService.icon}</div>
          )}
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            {content.title}
          </h1>
          <div className="w-16 h-1 bg-orange-500 mb-6" />
          <p className="text-steel-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            {content.intro}
          </p>
        </div>
      </section>

      {/* BANNER IMAGE (opcional) */}
      {content.heroImage && (
        <section className="bg-navy-950 pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-56 sm:h-72 lg:h-80 rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={content.heroImage}
                alt={content.heroImageAlt ?? content.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* BODY SECTIONS + COTIZA SIDEBAR */}
      <article className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-12 items-start">
            {/* ── Contenido del servicio ── */}
            <div>
              {content.sections.map((section, idx) => (
                <section key={idx} className="mb-12 last:mb-0">
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
                      {section.list.map((item, i) => (
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

            {/* ── Formulario de cotización (sticky en desktop) ── */}
            <aside className="lg:sticky lg:top-[100px] h-fit">
              <ServiceCotizaForm
                serviceName={baseService?.name ?? content.title}
              />
            </aside>
          </div>
        </div>
      </article>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="bg-steel-50 border-y border-steel-200 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
              Productos químicos asociados
            </p>
            <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase mb-8">
              Productos que aplicamos en este servicio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <p className="text-steel-500 text-xs leading-relaxed line-clamp-3 mb-3">
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

      {/* INDUSTRIES */}
      {relatedIndustries.length > 0 && (
        <section className="bg-white py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
              Industrias que lo usan
            </p>
            <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase mb-8">
              Sectores donde aplicamos este servicio
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industrias/${ind.slug}`}
                  className="bg-steel-50 border border-steel-200 rounded-lg p-4 hover:border-orange-300 hover:bg-white hover:shadow-sm transition-all group flex items-center gap-3"
                >
                  <span className="shrink-0 text-navy-700"><EmojiIcon emoji={ind.icon} className="w-6 h-6" /></span>
                  <span className="text-steel-900 font-black text-xs uppercase leading-tight group-hover:text-orange-600 transition-colors">
                    {ind.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED CASE STUDIES */}
      {(() => {
        const relatedCases = getCasesByServiceSlug(content.slug);
        if (relatedCases.length === 0) return null;
        return (
          <section className="bg-white py-14 border-y border-steel-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                Casos de éxito
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase mb-2">
                Donde aplicamos este servicio
              </h2>
              <div className="w-10 h-1 bg-orange-500 mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {relatedCases.map((c) => (
                  <Link
                    key={c.id}
                    href="/casos-de-exito"
                    className="bg-steel-50 border border-steel-200 rounded-xl p-6 hover:bg-white hover:border-orange-300 hover:shadow-md transition-all group"
                  >
                    <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-2">
                      {c.industry} · {c.location}
                    </p>
                    <p className="text-steel-600 text-sm leading-relaxed mb-3 line-clamp-3">
                      {c.challenge}
                    </p>
                    {c.results[0] && (
                      <p className="text-green-700 text-xs font-bold flex items-center gap-1.5">
                        <span className="text-green-600">✓</span>
                        {c.results[0]}
                      </p>
                    )}
                    <span className="inline-block mt-3 text-orange-500 text-xs font-black uppercase tracking-wide">
                      Ver detalle del caso →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <FAQAccordion
          faqs={content.faqs}
          title={`Preguntas frecuentes: ${baseService?.name ?? content.title}`}
        />
      )}

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Necesitas asesoría para este servicio?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Visita técnica sin costo en Nuevo León y zona norte. Diagnóstico,
            propuesta y resultados medibles desde la primera reunión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
