import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catálogo de Productos Químicos Industriales | Trevigo — Monterrey",
  description:
    "Catálogo completo de químicos industriales Trevigo: limpiadores, desoxidantes, fosfatos, coagulantes, floculantes, lubricantes y materias primas. Entrega en 48h en Monterrey.",
  alternates: { canonical: `${COMPANY.url}/productos` },
};

const ACCENT_COLORS: Record<string, string> = {
  "tratamiento-metales": "bg-navy-600",
  "tratamiento-aguas":   "bg-navy-500",
  "lubricantes-aceites": "bg-steel-700",
  "materias-primas":     "bg-steel-800",
};

export default function ProductosPage() {
  return (
    <>
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
            Químicos industriales de formulación propia para tratamiento de metales, aguas residuales, lubricación y materias primas.
            Entrega en 48h en el Área Metropolitana de Monterrey.
          </p>
        </div>

        {/* Category nav */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {PRODUCT_CATEGORIES.map((cat) => {
                const shortName: Record<string, string> = {
                  "tratamiento-metales": "Trat. Metales",
                  "tratamiento-aguas": "Trat. Aguas",
                  "lubricantes-aceites": "Lubricantes",
                  "materias-primas": "Mat. Primas",
                };
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="flex flex-col items-center gap-1 px-3 py-4 text-steel-400 hover:text-white border-b-2 border-transparent hover:border-orange-500 transition-all text-center"
                  >
                    <span className="text-xl">{cat.icon}</span>
                    <span className="text-xs font-bold">{shortName[cat.id] ?? cat.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ───────────────────────────────────────── */}
      {PRODUCT_CATEGORIES.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={catIndex % 2 === 0 ? "bg-white py-16" : "bg-steel-50 py-16 border-y border-steel-200"}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <div className="flex items-start gap-4 mb-10">
              <div className={`${ACCENT_COLORS[cat.id] ?? "bg-navy-500"} w-1 h-10 rounded-full shrink-0 mt-1`} />
              <div>
                <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">{cat.icon} Categoría</p>
                <h2 className="text-xl sm:text-2xl font-black text-steel-900 uppercase">{cat.name}</h2>
              </div>
            </div>

            {/* Subcategories */}
            {cat.subcategories.map((sub) => (
              <div key={sub.id} className="mb-14 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-sm font-black text-steel-700 uppercase tracking-widest whitespace-nowrap">{sub.name}</h3>
                  <div className="flex-1 h-px bg-steel-200" />
                  <span className="text-xs text-steel-400 font-semibold whitespace-nowrap">{sub.products.length} productos</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {sub.products.map((product) => {
                    const isSaco = product.formats.length === 1 && product.formats[0].name === "saco";
                    return (
                      <Link key={product.id} href={`/productos/${product.id}`} className="bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-md hover:border-navy-300 transition-all group flex flex-col">
                        {/* Category label */}
                        <div className={`${ACCENT_COLORS[cat.id] ?? "bg-navy-500"} px-4 py-2.5`}>
                          <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest">INDUSTRIAS TREVIGO</p>
                          <p className="text-white text-[11px] font-black uppercase leading-tight">{sub.name}</p>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex-1 flex flex-col">
                          <h4 className="text-steel-900 font-black text-sm uppercase leading-tight mb-2 group-hover:text-navy-600 transition-colors">
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
                                    <Image
                                      src={fmt.image}
                                      alt={fmt.label}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                  <span className="text-[9px] font-bold text-steel-700 uppercase">{fmt.label}</span>
                                  <span className="text-[9px] text-steel-500">{fmt.weight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <span className="block w-full text-center border-2 border-navy-500 text-navy-600 group-hover:bg-navy-500 group-hover:text-white py-2 text-[10px] font-black uppercase tracking-wide transition-colors">
                            Ver ficha técnica →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-navy-500 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">
            ¿No encontraste lo que buscas?
          </h2>
          <p className="text-navy-100 text-base mb-8">
            Nuestro catálogo es amplio y en constante actualización. Contáctanos — un asesor técnico te ayudará a encontrar el producto adecuado para tu proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 font-black text-sm uppercase tracking-wide transition-colors">
              Contactar un asesor
            </Link>
            <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white px-8 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
