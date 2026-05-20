import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, PRODUCT_CATEGORIES, INDUSTRIES } from "@/lib/data";
import { SERVICES_CONTENT } from "@/lib/services-content";
import {
  getCategoryContent,
  getCategoryContentSlugs,
} from "@/lib/product-categories-content";
import { SUBCATEGORY_CONTENT } from "@/lib/product-subcategories-content";
import FAQAccordion from "@/components/FAQAccordion";
import { EmojiIcon } from "@/components/Icon";

export async function generateStaticParams() {
  return getCategoryContentSlugs().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const content = getCategoryContent(params.id);
  if (!content) return { title: "Línea no encontrada" };
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `${COMPANY.url}/productos/linea/${content.id}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${COMPANY.url}/productos/linea/${content.id}`,
      type: "website",
    },
  };
}

export default function LineaPage({
  params,
}: {
  params: { id: string };
}) {
  const content = getCategoryContent(params.id);
  if (!content) notFound();

  const category = PRODUCT_CATEGORIES.find((c) => c.id === content.id);
  if (!category) notFound();

  const subcategories = category.subcategories;
  const totalProducts = subcategories.reduce(
    (acc, s) => acc + s.products.length,
    0
  );

  // Para cada subcategoría, ver si tiene landing page dedicada
  const subcategoryHasLanding = (subId: string) =>
    SUBCATEGORY_CONTENT[subId] !== undefined;

  const relatedIndustries = (content.relatedIndustries ?? [])
    .map((slug) => INDUSTRIES.find((i) => i.slug === slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const relatedServices = (content.relatedServices ?? [])
    .map((slug) => SERVICES_CONTENT.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // ── Schema: BreadcrumbList ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: COMPANY.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Productos",
        item: `${COMPANY.url}/productos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.pageTitle,
        item: `${COMPANY.url}/productos/linea/${content.id}`,
      },
    ],
  };

  // ── Schema: FAQPage ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // ── Schema: CollectionPage ──
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.pageTitle,
    description: content.metaDescription,
    url: `${COMPANY.url}/productos/linea/${content.id}`,
    isPartOf: { "@type": "WebSite", name: COMPANY.shortName, url: COMPANY.url },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: totalProducts,
      itemListElement: subcategories.flatMap((sub) =>
        sub.products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${COMPANY.url}/productos/${p.id}`,
          name: p.name,
        }))
      ),
    },
  };

  const waUrl = `https://wa.me/528120403135?text=${encodeURIComponent(
    `Hola, me interesa cotizar productos de la línea ${content.pageTitle}.`
  )}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-steel-500 text-xs mb-8 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-steel-300 transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/productos"
              className="hover:text-steel-300 transition-colors"
            >
              Productos
            </Link>
            <span>/</span>
            <span className="text-steel-300">{content.hero}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
            <div>
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-flex items-center gap-2">
                <EmojiIcon emoji={category.icon} className="w-4 h-4" />
                Línea de productos
              </p>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
                {content.pageTitle}
              </h1>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-400 text-base leading-relaxed mb-8">
                {content.lead}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-black text-sm uppercase tracking-wide transition-colors"
                >
                  Solicitar cotización
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Stats lateral */}
            <div className="bg-navy-900/70 border border-navy-800 rounded-xl p-6">
              <p className="text-navy-300 text-[10px] font-black uppercase tracking-widest mb-4">
                Resumen de la línea
              </p>
              <div className="space-y-3 mb-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-orange-500 text-2xl font-black">
                    {totalProducts}
                  </span>
                  <span className="text-steel-300 text-xs">
                    productos en catálogo
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-orange-500 text-2xl font-black">
                    {subcategories.length}
                  </span>
                  <span className="text-steel-300 text-xs">
                    {subcategories.length === 1 ? "sublínea" : "sublíneas técnicas"}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-orange-500 text-2xl font-black">
                    48 h
                  </span>
                  <span className="text-steel-300 text-xs">
                    entrega en área metropolitana
                  </span>
                </div>
              </div>
              <div className="border-t border-navy-700 pt-4">
                <p className="text-steel-400 text-xs leading-relaxed">
                  Formulación propia con asesoría técnica y SDS/COA en cada
                  entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUBLÍNEAS TÉCNICAS ──────────────────────────────── */}
      <section className="bg-white py-12 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-orange-500 w-1 h-8 rounded-full shrink-0" />
            <div>
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                Sublíneas técnicas
              </p>
              <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                Familias de productos dentro de esta línea
              </h2>
            </div>
          </div>
          <p className="text-steel-600 text-sm leading-relaxed mb-6 sm:ml-7 max-w-3xl">
            Cada sublínea agrupa productos por función técnica. Las marcadas con
            guía técnica tienen página dedicada con química, aplicación y
            selección.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcategories.map((sub) => {
              const hasLanding = subcategoryHasLanding(sub.id);
              const Wrapper = hasLanding ? Link : "a";
              const href = hasLanding
                ? `/productos/categoria/${sub.id}`
                : `/productos#${category.id}`;
              return (
                <Wrapper
                  key={sub.id}
                  href={href as string}
                  className="bg-steel-50 border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-orange-300 hover:bg-white transition-all group block"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-steel-900 font-black text-sm uppercase leading-tight group-hover:text-orange-600 transition-colors">
                      {sub.name}
                    </h3>
                    {hasLanding && (
                      <span className="text-[9px] font-black uppercase tracking-widest bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded shrink-0">
                        Guía
                      </span>
                    )}
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed mb-3">
                    {sub.products.length}{" "}
                    {sub.products.length === 1 ? "producto" : "productos"}{" "}
                    disponibles
                  </p>
                  <span className="text-navy-500 text-xs font-black uppercase tracking-wide">
                    {hasLanding ? "Ver guía técnica →" : "Ver productos →"}
                  </span>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTENIDO EDUCATIVO ─────────────────────────────── */}
      <section className="bg-steel-50 py-14 border-b border-steel-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {content.sections.map((sec, i) => (
            <div key={i} className="mb-10 last:mb-0">
              <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase tracking-tight mb-4">
                {sec.heading}
              </h2>
              <div className="w-10 h-1 bg-orange-500 mb-5" />
              {sec.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-steel-700 text-base leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
              {sec.list && sec.list.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {sec.list.map((item, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-steel-700 text-sm sm:text-base leading-relaxed"
                    >
                      <span className="text-orange-500 font-black mt-1 shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CATÁLOGO COMPLETO ────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-navy-500 w-1 h-8 rounded-full shrink-0" />
            <div>
              <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                Catálogo completo
              </p>
              <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                Todos los productos de esta línea
              </h2>
            </div>
          </div>

          {subcategories.map((sub) => (
            <div key={sub.id} className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-base font-black text-steel-900 uppercase tracking-wide">
                  {sub.name}
                </h3>
                {subcategoryHasLanding(sub.id) && (
                  <Link
                    href={`/productos/categoria/${sub.id}`}
                    className="text-orange-600 text-xs font-black uppercase tracking-wide hover:underline"
                  >
                    Ver guía técnica →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sub.products.map((p) => (
                  <Link
                    key={p.id}
                    href={`/productos/${p.id}`}
                    className="bg-steel-50 border border-steel-200 rounded-lg p-4 hover:shadow-md hover:border-navy-300 hover:bg-white transition-all group"
                  >
                    <p className="text-navy-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                      SKU: {p.sku}
                    </p>
                    <h4 className="text-steel-900 font-black text-xs uppercase leading-tight mb-1 group-hover:text-navy-600 transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-steel-500 text-xs leading-snug line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INDUSTRIAS RELACIONADAS ─────────────────────────── */}
      {relatedIndustries.length > 0 && (
        <section className="py-12 bg-steel-50 border-b border-steel-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 w-1 h-8 rounded-full shrink-0" />
              <h2 className="text-lg font-black text-steel-900 uppercase">
                Industrias donde se aplica
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industrias/${ind.slug}`}
                  className="bg-white border border-steel-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-sm transition-all group flex items-center gap-3"
                >
                  <span className="text-navy-700 shrink-0">
                    <EmojiIcon emoji={ind.icon} className="w-6 h-6" />
                  </span>
                  <span className="text-steel-900 font-black text-xs uppercase leading-tight group-hover:text-orange-600 transition-colors">
                    {ind.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── SERVICIOS RELACIONADOS ──────────────────────────── */}
      {relatedServices.length > 0 && (
        <section className="py-12 bg-white border-b border-steel-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-navy-500 w-1 h-8 rounded-full shrink-0" />
              <h2 className="text-lg font-black text-steel-900 uppercase">
                Servicios técnicos relacionados
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="bg-steel-50 border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 hover:bg-white transition-all group"
                >
                  <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-700 transition-colors">
                    {s.title ?? s.slug}
                  </h3>
                  <span className="text-navy-500 text-xs font-black uppercase tracking-wide">
                    Ver servicio →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="py-14 bg-steel-50 border-b border-steel-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={content.faqs} title="Preguntas frecuentes" />
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className="bg-navy-950 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
            ¿Necesitas asesoría técnica?
          </h2>
          <p className="text-steel-400 text-sm sm:text-base mb-7 max-w-2xl mx-auto">
            Un ingeniero especialista te ayuda a seleccionar el producto correcto
            para tu proceso. Cotización y ficha técnica en menos de 24 horas
            hábiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Solicitar cotización
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 font-black text-sm uppercase tracking-wide transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
