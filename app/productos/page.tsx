import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";
import ProductCatalogFilter from "@/components/ProductCatalogFilter";
import { CATEGORY_CONTENT } from "@/lib/product-categories-content";

export const metadata: Metadata = {
  title: "Catálogo de Productos Químicos Industriales",
  description:
    "Catálogo completo de químicos industriales Trevigo: limpiadores, desoxidantes, fosfatos, coagulantes, floculantes, lubricantes y materias primas. Entrega en 48h en Monterrey.",
  alternates: { canonical: `${COMPANY.url}/productos` },
};

export default function ProductosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Catálogo de Productos Químicos Industriales",
            description:
              "Catálogo completo de químicos industriales: limpiadores, desoxidantes, fosfatos, coagulantes, floculantes, lubricantes y materias primas.",
            url: `${COMPANY.url}/productos`,
            isPartOf: { "@type": "WebSite", name: COMPANY.legalName, url: COMPANY.url },
            about: PRODUCT_CATEGORIES.map((cat) => ({
              "@type": "Thing",
              name: cat.name,
            })),
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
              { "@type": "ListItem", position: 2, name: "Productos", item: `${COMPANY.url}/productos` },
            ],
          }),
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Industrias Trevigo
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Catálogo de Productos
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-steel-400 text-base max-w-2xl leading-relaxed">
            Químicos industriales de formulación propia para tratamiento de metales,
            aguas residuales, lubricación y materias primas. Entrega en 48h en el Área
            Metropolitana de Monterrey.
          </p>
        </div>

      </section>

      {/* ─── 4 LÍNEAS TOP-LEVEL ───────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-navy-500 w-1 h-8 rounded-full shrink-0" />
            <div>
              <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-0.5">
                Líneas de producto
              </p>
              <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                5 líneas de químicos industriales
              </h2>
            </div>
          </div>
          <p className="text-steel-600 text-sm leading-relaxed mb-6 sm:ml-7 max-w-3xl">
            Cada línea tiene su propia guía técnica con química, aplicaciones,
            normativa y selección por proceso.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRODUCT_CATEGORIES.map((cat) => {
              const content = CATEGORY_CONTENT[cat.id];
              return (
                <Link
                  key={cat.id}
                  href={`/productos/linea/${cat.id}`}
                  className="bg-steel-50 border border-steel-200 rounded-xl p-6 hover:shadow-md hover:border-navy-300 hover:bg-white transition-all group"
                >
                  <h3 className="text-steel-900 font-black text-base sm:text-lg uppercase leading-tight mb-2 group-hover:text-navy-700 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed mb-3 line-clamp-3">
                    {content?.metaDescription ?? cat.description}
                  </p>
                  <span className="text-orange-600 text-xs font-black uppercase tracking-wide">
                    Ver línea completa →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CATÁLOGO con buscador + filtros (componente cliente) ─── */}
      <ProductCatalogFilter categories={PRODUCT_CATEGORIES} />

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-navy-500 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
            ¿No encontraste lo que buscas?
          </h2>
          <p className="text-navy-100 text-base mb-8">
            Nuestro catálogo es amplio y en constante actualización. Contáctanos: un asesor técnico te ayudará a encontrar el producto adecuado para tu proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Contactar un asesor
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
