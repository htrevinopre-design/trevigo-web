import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";

// Build a flat product map for lookup
const allProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.subcategories.flatMap((sub) =>
    sub.products.map((p) => ({ ...p, categoryId: cat.id, categoryName: cat.name, categoryIcon: cat.icon, subcategoryId: sub.id, subcategoryName: sub.name }))
  )
);

export async function generateStaticParams() {
  return allProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = allProducts.find((p) => p.id === params.id);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} — Industrias Trevigo`,
    description: product.shortDescription,
    alternates: { canonical: `${COMPANY.url}/productos/${product.id}` },
  };
}

export default function ProductoPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id);
  if (!product) notFound();

  const isSaco = product.formats.length === 1 && product.formats[0].name === "saco";

  // Related products from same subcategory
  const related = allProducts
    .filter((p) => p.subcategoryId === product.subcategoryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* ─── HERO / BREADCRUMB ── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-8 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/productos" className="hover:text-steel-300 transition-colors">Productos</Link>
            <span>/</span>
            <Link href={`/productos#${product.categoryId}`} className="hover:text-steel-300 transition-colors">
              {product.categoryName}
            </Link>
            <span>/</span>
            <Link href={`/productos#${product.subcategoryId}`} className="hover:text-steel-300 transition-colors">
              {product.subcategoryName}
            </Link>
            <span>/</span>
            <span className="text-steel-300 truncate max-w-[200px]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                {product.categoryIcon} {product.categoryName} · {product.subcategoryName}
              </p>
              <h1 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight mb-4">
                {product.name}
              </h1>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-400 text-sm leading-relaxed mb-3">
                {product.shortDescription}
              </p>
              <p className="text-steel-500 text-xs font-semibold uppercase tracking-wider">
                SKU: {product.sku}
              </p>
            </div>

            {/* Formats card */}
            <div className="bg-navy-900 border border-white/10 rounded-xl p-8">
              <h2 className="text-white font-black text-sm uppercase tracking-wide mb-6">
                {isSaco ? "Presentación disponible" : "Presentaciones disponibles"}
              </h2>
              <div className={`flex gap-6 ${isSaco ? "justify-start" : "justify-around"} mb-8`}>
                {product.formats.map((fmt) => (
                  <div key={fmt.name} className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 relative">
                      <Image src={fmt.image} alt={fmt.label} fill className="object-contain" />
                    </div>
                    <span className="text-white font-black text-xs uppercase">{fmt.label}</span>
                    <span className="text-steel-400 text-xs">{fmt.weight}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <Link href="/contacto"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3.5 font-black text-sm uppercase tracking-wide transition-colors">
                  Solicitar cotización
                </Link>
                <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="block w-full text-center border-2 border-white/30 hover:border-white/60 text-white py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPCIÓN EXTENDIDA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
                <div>
                  <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Descripción técnica</p>
                  <h2 className="text-2xl font-black text-steel-900 uppercase">Características del producto</h2>
                </div>
              </div>
              <p className="text-steel-600 text-sm leading-relaxed mb-8">
                {product.shortDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Ficha técnica", value: "Disponible bajo solicitud", icon: "📄" },
                  { label: "Hoja de seguridad (SDS)", value: "Disponible bajo solicitud", icon: "⚠️" },
                  { label: "Certificado de análisis (COA)", value: "Disponible bajo solicitud", icon: "✅" },
                  { label: "Soporte técnico", value: "Incluido con la compra", icon: "🔬" },
                ].map((item) => (
                  <div key={item.label} className="bg-steel-50 border border-steel-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{item.icon}</span>
                      <span className="text-steel-900 font-black text-xs uppercase tracking-wide">{item.label}</span>
                    </div>
                    <p className="text-steel-500 text-xs">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5">
                <h3 className="text-navy-800 font-black text-sm uppercase mb-3">¿Por qué Trevigo?</h3>
                <ul className="space-y-2">
                  {[
                    "Fabricante local — Monterrey, N.L.",
                    "Entrega en 48h en área metropolitana",
                    "Soporte técnico de ingenieros",
                    "TDS y SDS incluidas",
                    "35+ años de experiencia",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-navy-700">
                      <span className="text-orange-500 font-black mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-steel-200 rounded-xl p-5">
                <h3 className="text-steel-900 font-black text-sm uppercase mb-3">Contacto rápido</h3>
                <p className="text-steel-500 text-xs mb-4">Un asesor técnico responde en menos de 24 h.</p>
                <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="block text-center border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white py-2.5 text-xs font-black uppercase tracking-wide transition-colors mb-2">
                  {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}?subject=Cotización ${product.name}&body=Hola, me interesa cotizar el producto ${product.name} (SKU: ${product.sku}).`}
                  className="block text-center bg-steel-100 hover:bg-steel-200 text-steel-700 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS RELACIONADOS ── */}
      {related.length > 0 && (
        <section className="py-16 bg-steel-50 border-t border-steel-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-10">
              <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
              <div>
                <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">También te puede interesar</p>
                <h2 className="text-xl font-black text-steel-900 uppercase">Productos relacionados</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/productos/${p.id}`}
                  className="bg-white border border-steel-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group"
                >
                  <p className="text-navy-500 text-[10px] font-bold uppercase tracking-wider mb-2">{p.subcategoryName}</p>
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

      {/* ─── CTA ── */}
      <section className="bg-navy-950 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">¿Listo para cotizar?</p>
          <h2 className="text-2xl font-black text-white uppercase mb-4">
            Solicita precio y disponibilidad
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Contáctanos y un asesor técnico te responde con cotización y ficha técnica en menos de 24 horas hábiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar cotización
            </Link>
            <Link href="/productos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors">
              Ver más productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
