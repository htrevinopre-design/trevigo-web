import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";
import ProductCatalogFilter from "@/components/ProductCatalogFilter";

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

        {/* Category nav (anchors) */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {PRODUCT_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center justify-center px-12 py-6 text-steel-400 hover:text-white border-b-2 border-transparent hover:border-orange-500 transition-all text-center"
                >
                  <span className="text-xs font-bold leading-snug">{cat.name}</span>
                </a>
              ))}
            </div>
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
