import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, PRODUCT_CATEGORIES, INDUSTRIES } from "@/lib/data";
import { ARTICLES } from "@/lib/articles";
import { PRODUCT_CONTENT } from "@/lib/products-content";
import ProductCotizaForm from "@/components/ProductCotizaForm";
import { Icon, EmojiIcon } from "@/components/Icon";

const allProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.subcategories.flatMap((sub) =>
    sub.products.map((p) => ({
      ...p,
      categoryId: cat.id,
      categoryName: cat.name,
      categoryIcon: cat.icon,
      subcategoryId: sub.id,
      subcategoryName: sub.name,
    }))
  )
);

export async function generateStaticParams() {
  return allProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = allProducts.find((p) => p.id === params.id);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `${COMPANY.url}/productos/${product.id}` },
  };
}

export default function ProductoPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id);
  if (!product) notFound();

  const related = allProducts
    .filter((p) => p.subcategoryId === product.subcategoryId && p.id !== product.id)
    .slice(0, 3);

  // Industrias que usan productos de esta subcategoría (link interno SEO)
  const relatedIndustries = INDUSTRIES.filter((ind) =>
    ind.productSubcategoryIds.includes(product.subcategoryId)
  ).slice(0, 6);

  // Artículos técnicos que mencionan este producto
  const relatedArticles = ARTICLES.filter((a) =>
    a.relatedProducts?.includes(product.id)
  ).slice(0, 3);

  // Contenido técnico único por producto (descripción + aplicaciones + nota)
  const content = PRODUCT_CONTENT[product.id];

  // Use the largest format image as the "hero" product image
  const heroFormat =
    product.formats.find((f) => f.name === "tote") ??
    product.formats.find((f) => f.name === "tambo") ??
    product.formats.find((f) => f.name === "porron") ??
    product.formats[0];

  const waUrl = `https://wa.me/528120403135?text=${encodeURIComponent(
    `Hola, me interesa obtener la ficha técnica y cotización del producto: ${product.name} (SKU: ${product.sku})`
  )}`;

  // ── Schema.org Product (rich snippet con nombre, marca, SKU, etc.) ──
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    mpn: product.sku,
    image: `${COMPANY.url}${heroFormat.image}`,
    category: `${product.categoryName} > ${product.subcategoryName}`,
    brand: {
      "@type": "Brand",
      name: COMPANY.shortName,
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY.legalName,
      url: COMPANY.url,
    },
    // Offer B2B "Request for Quote" (RFQ): satisface el requisito de Google
    // para Rich Results sin publicar precio falso. El cliente cotiza vía la
    // URL del producto (WhatsApp o formulario). minPrice 0 = "desde
    // cotización" por las buenas prácticas de Google para B2B sin precio.
    offers: {
      "@type": "Offer",
      url: `${COMPANY.url}/productos/${product.id}`,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      businessFunction: "https://schema.org/Sell",
      // Patrón B2B "cotización": price=0 le indica al parser de Google que
      // el precio se obtiene por cotización (no es gratis, es RFQ). Google
      // no muestra "$0" en SERPs cuando el contexto de la página es B2B.
      price: "0",
      priceCurrency: "MXN",
      priceValidUntil: "2027-12-31",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "MXN",
        price: "0",
        valueAddedTaxIncluded: false,
      },
      seller: {
        "@type": "Organization",
        name: COMPANY.legalName,
        url: COMPANY.url,
      },
      areaServed: {
        "@type": "Country",
        name: "México",
      },
    },
  };

  // ── Schema.org BreadcrumbList (mejora cómo Google muestra la URL) ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: COMPANY.url },
      { "@type": "ListItem", position: 2, name: "Productos", item: `${COMPANY.url}/productos` },
      {
        "@type": "ListItem",
        position: 3,
        name: product.categoryName,
        item: `${COMPANY.url}/productos#${product.categoryId}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `${COMPANY.url}/productos/${product.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─── BREADCRUMB STRIP ───────────────────────────────────── */}
      <div className="bg-navy-950 pt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-steel-500 text-xs flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-steel-300 transition-colors">Productos</Link>
            <span>/</span>
            <Link href={`/productos#${product.categoryId}`} className="hover:text-steel-300 transition-colors">
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-steel-300 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ─── MAIN PRODUCT LAYOUT ────────────────────────────────── */}
      <section className="bg-steel-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-6 items-start">

            {/* ── COL 1: Image + Presentations ── */}
            <div className="space-y-4">
              {/* Product image */}
              <div className="bg-white border border-steel-200 rounded-xl p-8 flex items-center justify-center min-h-[260px]">
                <div className="relative w-48 h-48">
                  <Image
                    src={heroFormat.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Presentations */}
              <div className="bg-white border border-steel-200 rounded-xl p-5">
                <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-4">
                  {product.formats.length === 1 ? "Presentación disponible" : "Presentaciones disponibles"}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {product.formats.map((fmt) => (
                    <div key={fmt.name} className="flex flex-col items-center gap-1.5">
                      <div className="relative w-12 h-14">
                        <Image src={fmt.image} alt={fmt.label} fill className="object-contain" />
                      </div>
                      <span className="text-steel-800 font-black text-[10px] uppercase">{fmt.label}</span>
                      <span className="text-steel-500 text-[10px]">{fmt.weight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick docs */}
              <div className="bg-white border border-steel-200 rounded-xl p-5 space-y-2">
                <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-3">Documentación</p>
                {[
                  { label: "Ficha técnica (TDS)", icon: "📄" },
                ].map((doc) => (
                  <a
                    key={doc.label}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-3 bg-steel-50 hover:bg-navy-50 border border-steel-200 hover:border-navy-300 rounded-lg transition-colors group"
                  >
                    <span className="text-base">{doc.icon}</span>
                    <span className="text-xs text-steel-700 group-hover:text-navy-700 font-semibold flex-1">{doc.label}</span>
                    <span className="text-navy-500 text-xs font-black">Solicitar →</span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── COL 2: Product info ── */}
            <div className="space-y-0">
              {/* Name header */}
              <div className="bg-navy-600 rounded-t-xl px-7 py-5">
                <p className="text-navy-200 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {product.categoryIcon} {product.subcategoryName}
                </p>
                <h1 className="text-white font-black text-xl sm:text-2xl uppercase leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Description */}
              <div className="bg-white border-x border-b border-steel-200 rounded-b-xl p-7">
                <p className="text-steel-600 text-sm leading-relaxed mb-6">
                  {product.shortDescription}
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-steel-400 text-xs font-semibold uppercase tracking-wider">SKU:</span>
                  <code className="bg-steel-100 text-steel-700 text-xs font-black px-2 py-1 rounded">{product.sku}</code>
                </div>

                {/* Specs table */}
                <div className="border border-steel-200 rounded-lg overflow-hidden mb-6">
                  <div className="bg-steel-50 border-b border-steel-200 px-4 py-2.5">
                    <p className="text-steel-700 font-black text-xs uppercase tracking-widest">Especificaciones generales</p>
                  </div>
                  <div className="divide-y divide-steel-100">
                    {[
                      { key: "Forma física", val: product.formats[0].name === "saco" ? "Sólido / Polvo" : "Líquido" },
                      { key: "Presentación principal", val: `${heroFormat.label}, ${heroFormat.weight}` },
                      { key: "Otras presentaciones", val: product.formats.length > 1 ? product.formats.map(f => f.label).join(", ") : "N/A" },
                      { key: "Ficha técnica", val: "Disponible bajo solicitud" },
                    ].map((row) => (
                      <div key={row.key} className="grid grid-cols-2 px-4 py-2.5 text-xs">
                        <span className="text-steel-500 font-semibold">{row.key}</span>
                        <span className="text-steel-800 font-bold">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Trevigo */}
                <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
                  <h3 className="text-navy-800 font-black text-xs uppercase tracking-wide mb-3">¿Por qué Industrias Trevigo?</h3>
                  <ul className="space-y-1.5">
                    {[
                      "Fabricante local. Monterrey, N.L.",
                      "Entrega en 48 h en área metropolitana",
                      "Soporte técnico de ingenieros especialistas",
                      "TDS y SDS incluidas en cada entrega",
                      "35+ años de experiencia en la industria",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-navy-700">
                        <span className="text-orange-500 font-black mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── COL 3: Cotiza Ahora form ── */}
            <div className="lg:sticky lg:top-[88px]">
              <ProductCotizaForm
                productName={product.name}
                sku={product.sku}
                formats={product.formats}
              />

              {/* Phone CTA */}
              <div className="mt-3 text-center">
                <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="block border-2 border-navy-400 text-navy-600 hover:bg-navy-500 hover:text-white py-2.5 text-xs font-black uppercase tracking-wide transition-colors">
                  📞 {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APLICACIONES Y CONSIDERACIONES TÉCNICAS ─────────────── */}
      {content && (
        <section className="bg-white py-14 border-b border-steel-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-navy-500 w-1 h-8 rounded-full shrink-0" />
              <div>
                <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                  Información técnica
                </p>
                <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                  Aplicaciones y consideraciones técnicas
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* ── Descripción técnica extendida ── */}
              <div className="lg:col-span-2 bg-steel-50 border border-steel-200 rounded-xl p-7">
                <p className="text-steel-700 text-sm sm:text-base leading-relaxed">
                  {content.description}
                </p>
              </div>

              {/* ── Aplicaciones + Nota técnica ── */}
              <div className="space-y-4">
                <div className="bg-navy-50 border border-navy-100 rounded-xl p-6">
                  <h3 className="text-navy-800 font-black text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Icon name="chevron-right" className="w-3 h-3 text-orange-500" />
                    Aplicaciones típicas
                  </h3>
                  <ul className="space-y-2">
                    {content.applications.map((app, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-navy-700 leading-relaxed"
                      >
                        <span className="text-orange-500 font-black mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {content.notes && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                    <h3 className="text-orange-800 font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Icon name="alert-triangle" className="w-3.5 h-3.5" />
                      Consideración técnica
                    </h3>
                    <p className="text-orange-900 text-xs leading-relaxed">
                      {content.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── TABS: Método de uso / Manipulación ─────────────────── */}
      <section className="bg-white border-y border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab headers */}
          <div className="flex border-b border-steel-200 overflow-x-auto">
            {["Método de uso", "Manipulación y seguridad", "Almacenamiento"].map((tab, i) => (
              <div
                key={tab}
                className={`px-6 py-4 text-sm font-black uppercase tracking-wide whitespace-nowrap border-b-2 ${
                  i === 0
                    ? "border-navy-500 text-navy-600"
                    : "border-transparent text-steel-500"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Tab content — Método de uso */}
          <div className="py-8 px-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "1",
                title: "Preparación",
                desc: "Diluya el producto en agua limpia según las especificaciones de la ficha técnica. Use equipo de protección personal (guantes y lentes de seguridad) durante la preparación.",
              },
              {
                icon: "2",
                title: "Aplicación",
                desc: "Aplique sobre la superficie tratada mediante inmersión, aspersión o frotamiento según el proceso. Respete los tiempos de contacto indicados en la TDS para garantizar la efectividad.",
              },
              {
                icon: "3",
                title: "Enjuague y disposición",
                desc: "Enjuague con agua limpia según se indique. Los residuos deben disponerse conforme a la normativa local (NOM-052-SEMARNAT o la aplicable). Consulte la SDS para detalles.",
              },
            ].map((step) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-navy-500 text-white font-black text-sm rounded-full flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-steel-900 font-black text-sm uppercase mb-1">{step.title}</h4>
                  <p className="text-steel-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS RELACIONADOS ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-12 bg-steel-50 border-b border-steel-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-navy-500 w-1 h-8 rounded-full shrink-0" />
              <h2 className="text-lg font-black text-steel-900 uppercase">Productos relacionados</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.id} href={`/productos/${p.id}`}
                  className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group">
                  <p className="text-navy-500 text-[10px] font-bold uppercase tracking-wider mb-1">{p.subcategoryName}</p>
                  <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed mb-3 line-clamp-2">{p.shortDescription}</p>
                  <span className="text-navy-500 text-xs font-black uppercase tracking-wide">Ver producto →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── INDUSTRIAS DONDE SE USA ────────────────────────────── */}
      {relatedIndustries.length > 0 && (
        <section className="py-12 bg-white border-b border-steel-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500 w-1 h-8 rounded-full shrink-0" />
              <h2 className="text-lg font-black text-steel-900 uppercase">
                Industrias donde se usa
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/industrias/${ind.slug}`}
                  className="bg-steel-50 border border-steel-200 rounded-lg p-4 hover:border-orange-300 hover:bg-white hover:shadow-sm transition-all group flex flex-col items-center text-center"
                >
                  <span className="mb-2 text-navy-700"><EmojiIcon emoji={ind.icon} className="w-6 h-6" /></span>
                  <span className="text-steel-900 font-black text-xs uppercase leading-tight group-hover:text-orange-600 transition-colors">
                    {ind.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── ARTÍCULOS TÉCNICOS RELACIONADOS ────────────────────── */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-steel-50 border-b border-steel-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-navy-500 w-1 h-8 rounded-full shrink-0" />
              <h2 className="text-lg font-black text-steel-900 uppercase">
                Lecturas técnicas relacionadas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/recursos/${a.slug}`}
                  className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group"
                >
                  <p className="text-navy-500 text-[10px] font-black uppercase tracking-wider mb-2">
                    {a.category} · {a.readingTime}
                  </p>
                  <h3 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed line-clamp-2 mb-3">
                    {a.excerpt}
                  </p>
                  <span className="text-navy-500 text-xs font-black uppercase tracking-wide">
                    Leer artículo →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-black text-white uppercase mb-3">Solicita precio y disponibilidad</h2>
          <p className="text-steel-400 text-sm mb-6 max-w-lg mx-auto">
            Un asesor técnico te responde con cotización y ficha técnica en menos de 24 horas hábiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 font-black text-sm uppercase tracking-wide transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Cotizar por WhatsApp
            </a>
            <Link href="/productos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors">
              Ver más productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
