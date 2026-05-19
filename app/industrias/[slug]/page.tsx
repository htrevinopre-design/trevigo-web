import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import FAQAccordion from "@/components/FAQAccordion";
import { EmojiIcon } from "@/components/Icon";
import { COMPANY, INDUSTRIES, PRODUCT_CATEGORIES, SERVICES_METALES, SERVICES_AGUAS } from "@/lib/data";
import { getCasesByIndustrySlug } from "@/lib/cases";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return {
    title: `Químicos para ${industry.name}`,
    description: industry.description,
    alternates: { canonical: `${COMPANY.url}/industrias/${industry.slug}` },
  };
}

export default function IndustriaPage({ params }: Props) {
  const industry = INDUSTRIES.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  // Build product → category id map (for accent colors)
  const productCategoryMap: Record<string, string> = {};
  PRODUCT_CATEGORIES.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      sub.products.forEach((prod) => {
        productCategoryMap[prod.id] = cat.id;
      });
    });
  });

  const CATEGORY_THEME: Record<string, { header: string; cardHover: string; cta: string; textHover: string }> = {
    "tratamiento-metales": { header: "bg-blue-700",    cardHover: "hover:border-blue-300 hover:shadow-blue-100",     cta: "border-blue-600 text-blue-700 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700",     textHover: "group-hover:text-blue-700"    },
    "tratamiento-aguas":   { header: "bg-teal-600",    cardHover: "hover:border-teal-300 hover:shadow-teal-100",     cta: "border-teal-600 text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",     textHover: "group-hover:text-teal-700"    },
    "lubricantes-aceites": { header: "bg-amber-600",   cardHover: "hover:border-amber-300 hover:shadow-amber-100",   cta: "border-amber-600 text-amber-700 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",   textHover: "group-hover:text-amber-700"   },
    "materias-primas":     { header: "bg-emerald-700", cardHover: "hover:border-emerald-300 hover:shadow-emerald-100",cta: "border-emerald-600 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700",textHover: "group-hover:text-emerald-700" },
  };

  // Gather product subcategories for this industry
  const featuredSubcategories = PRODUCT_CATEGORIES
    .flatMap((cat) => cat.subcategories)
    .filter((sub) => industry.productSubcategoryIds.includes(sub.id));

  // Gather services
  const allServices = [...SERVICES_METALES, ...SERVICES_AGUAS];
  const featuredServices = allServices.filter((svc) => industry.serviceIds.includes(svc.id));

  // One representative product per featured subcategory (first product of each)
  const representativeProducts = featuredSubcategories
    .map((sub) => ({
      product: sub.products[0],
      subcategoryName: sub.name,
    }))
    .filter((item) => Boolean(item.product));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `Químicos para la Industria ${industry.name} | Industrias Trevigo`,
            description: industry.description,
            url: `${COMPANY.url}/industrias/${industry.slug}`,
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
              { "@type": "ListItem", position: 2, name: "Industrias", item: `${COMPANY.url}/industrias` },
              { "@type": "ListItem", position: 3, name: industry.name, item: `${COMPANY.url}/industrias/${industry.slug}` },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/industrias" className="hover:text-steel-300 transition-colors">Industrias</Link>
            <span>/</span>
            <span className="text-steel-300">{industry.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-flex items-center gap-1.5">
                <EmojiIcon emoji={industry.icon} className="w-3.5 h-3.5" />
                Industria {industry.name}
              </p>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
                Químicos para la{" "}
                <span className="text-orange-500">Industria {industry.name}</span>
              </h1>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-400 text-base leading-relaxed mb-8">
                {industry.heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-black text-sm uppercase tracking-wide transition-colors">
                  Solicitar cotización
                </Link>
                <Link href="/productos"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                  Ver catálogo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {industry.stats.map((stat) => (
                <div key={stat.label} className="bg-navy-900 border border-white/10 rounded-xl p-5">
                  <div className="text-2xl font-black text-orange-500 mb-1">{stat.value}</div>
                  <div className="text-steel-400 text-xs leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      {representativeProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-12">
              <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
              <div>
                <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">
                  Productos para {industry.name}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                  Productos recomendados para la industria {industry.name}
                </h2>
                <p className="text-steel-500 text-sm mt-2 max-w-2xl">
                  {industry.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {representativeProducts.map(({ product, subcategoryName }) => {
                const catId = productCategoryMap[product.id] ?? "";
                const theme = CATEGORY_THEME[catId] ?? CATEGORY_THEME["tratamiento-metales"];
                const isSaco = product.formats.length === 1 && product.formats[0].name === "saco";
                return (
                  <Link key={product.id} href={`/productos/${product.id}`}
                    className={`bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-md transition-all group flex flex-col ${theme.cardHover}`}>

                    {/* Category label strip */}
                    <div className={`${theme.header} px-4 py-3`}>
                      <p className="text-white text-xs font-black uppercase tracking-widest leading-tight">{subcategoryName}</p>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className={`text-steel-900 font-black text-sm uppercase leading-tight mb-2 transition-colors ${theme.textHover}`}>
                        {product.name}
                      </h4>
                      <p className="text-steel-500 text-xs leading-relaxed mb-3 flex-1">
                        {product.shortDescription}
                      </p>
                      <p className="text-steel-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
                        SKU: {product.sku}
                      </p>

                      {/* Formats */}
                      <div className="border-t border-steel-100 pt-3 mb-4">
                        <p className="text-steel-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                          {isSaco ? "Presentación" : "Presentaciones disponibles"}
                        </p>
                        <div className={`flex gap-3 ${isSaco ? "justify-start" : "justify-around"}`}>
                          {product.formats.map((fmt) => (
                            <div key={fmt.name} className="flex flex-col items-center gap-1">
                              <div className="w-10 h-10 relative">
                                <Image src={fmt.image} alt={fmt.label} fill className="object-contain" />
                              </div>
                              <span className="text-[9px] font-bold text-steel-700 uppercase">{fmt.label}</span>
                              <span className="text-[9px] text-steel-500">{fmt.weight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <span className={`block w-full text-center border-2 py-2 text-[10px] font-black uppercase tracking-wide transition-colors ${theme.cta}`}>
                        Ver ficha técnica →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link href="/productos"
                className="inline-flex items-center gap-2 border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white px-8 py-3 font-black text-sm uppercase tracking-wide transition-colors">
                Ver catálogo completo
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES SECTION */}
      {featuredServices.length > 0 && (
        <section className="py-20 bg-steel-50 border-y border-steel-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-12">
              <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
              <div>
                <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">
                  Servicios para {industry.name}
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                  Servicios para la Industria {industry.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <article key={service.id}
                  className="bg-white border border-steel-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-navy-300 transition-all group">
                  <div className="bg-gradient-to-br from-steel-800 to-steel-900 p-6">
                    <div className="w-14 h-14 bg-navy-500 rounded-full flex items-center justify-center mb-4 shadow-lg text-white">
                      <EmojiIcon emoji={service.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-black text-sm uppercase leading-snug group-hover:text-orange-300 transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-steel-500 text-sm leading-relaxed mb-5 line-clamp-4">
                      {service.description}
                    </p>
                    <Link href={`/servicios#${service.id}`}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-navy-500 hover:bg-navy-600 text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/servicios"
                className="inline-flex items-center gap-2 border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white px-8 py-3 font-black text-sm uppercase tracking-wide transition-colors">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* RELATED CASE STUDIES */}
      {(() => {
        const relatedCases = getCasesByIndustrySlug(industry.slug);
        if (relatedCases.length === 0) return null;
        return (
          <section className="bg-white py-14 border-y border-steel-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2">
                Casos de éxito
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase mb-2">
                Proyectos en plantas {industry.name.toLowerCase()}
              </h2>
              <div className="w-12 h-1 bg-orange-500 mb-8" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {relatedCases.map((c) => (
                  <Link
                    key={c.id}
                    href="/casos-de-exito"
                    className="bg-steel-50 border border-steel-200 rounded-xl p-6 hover:bg-white hover:border-orange-300 hover:shadow-md transition-all group"
                  >
                    <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-2">
                      {c.serviceArea} · {c.location}
                    </p>
                    <h3 className="text-steel-900 font-black text-base uppercase leading-tight mb-3 group-hover:text-orange-600 transition-colors">
                      {c.industry}
                    </h3>
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
      {industry.faqs.length > 0 && (
        <FAQAccordion
          faqs={industry.faqs}
          title={`Preguntas frecuentes: Industria ${industry.name}`}
        />
      )}

      {/* CTA */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Visita técnica sin costo</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Tu planta necesita un proveedor técnico?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Visitamos tu planta sin costo. Evaluamos tus procesos y te proponemos la solución química adecuada para tu industria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar asesoría técnica
            </Link>
            <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
