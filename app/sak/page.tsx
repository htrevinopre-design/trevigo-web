"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

// ─── CATÁLOGO SAK ─────────────────────────────────────────────────────────────
const SAK_CATALOG = [
  {
    id: "quimicos-limpieza",
    category: "Químicos de Limpieza",
    icon: "🧴",
    accent: "bg-navy-500",
    accentLight: "bg-navy-50 border-navy-200 text-navy-700",
    subcategories: [
      {
        name: "Cocina · HORECA",
        icon: "🍳",
        products: [
          { name: "Desengrasante Alcalino", detail: "Parrillas / Hornos", icon: "🔥" },
          { name: "Detergente Lavatrastes Líquido", detail: "Concentrado · Alta espuma", icon: "🫧" },
          { name: "Sanitizante Grado Alimenticio", detail: "Sin enjuague · NSF", icon: "✅" },
          { name: "Desincrustante de Sarro", detail: "Ácido · Superficies sanitarias", icon: "⚡" },
        ],
      },
      {
        name: "Áreas Comunes",
        icon: "🏢",
        products: [
          { name: "Limpiador Multiusos", detail: "Lavanda / Pino / Neutro", icon: "🌿" },
          { name: "Limpiador de Vidrios", detail: "Sin rayas · Secado rápido", icon: "🪟" },
          { name: "Desinfectante Cuaternario", detail: "Amonio cuaternario · Amplio espectro", icon: "🦠" },
        ],
      },
      {
        name: "Aromatizantes",
        icon: "🌸",
        products: [
          { name: "Aromatizante en Aerosol", detail: "Varios aromas disponibles", icon: "💨" },
        ],
      },
      {
        name: "Desinfección",
        icon: "🧪",
        products: [
          { name: "Cloro Blanqueador", detail: "Porrón · 5 galones", icon: "🧊" },
        ],
      },
      {
        name: "Industrial",
        icon: "🏭",
        products: [
          { name: "Desengrasante Industrial Pesado", detail: "Alta concentración · Maquinaria", icon: "⚙️" },
          { name: "Desengrasante Dieléctrico", detail: "Seguro en equipos eléctricos", icon: "⚡" },
        ],
      },
    ],
  },
  {
    id: "higiene-personal",
    category: "Higiene Personal",
    icon: "🤲",
    accent: "bg-orange-500",
    accentLight: "bg-orange-50 border-orange-200 text-orange-700",
    subcategories: [
      {
        name: "Jabones",
        icon: "🧼",
        products: [
          { name: "Jabón Líquido Antibacterial", detail: "Con triclosan · pH neutro", icon: "🧼" },
          { name: "Gel Antibacterial 70%", detail: "Alcohol isopropílico 70%", icon: "🤲" },
          { name: "Jabón Mecánico para Grasa", detail: "Con microesferas · Sin solventes", icon: "🔧" },
        ],
      },
      {
        name: "Despachadores",
        icon: "📦",
        products: [
          { name: "Despachador de Jabón Manual", detail: "1L · Acero inoxidable / ABS", icon: "🚿" },
          { name: "Despachador de Jabón Automático", detail: "Sin contacto · 1L", icon: "✋" },
        ],
      },
    ],
  },
  {
    id: "papel-desechables",
    category: "Papel y Desechables",
    icon: "🧻",
    accent: "bg-steel-600",
    accentLight: "bg-steel-50 border-steel-300 text-steel-700",
    subcategories: [
      {
        name: "Higiénico",
        icon: "🧻",
        products: [
          { name: "Papel Higiénico Jumbo JR", detail: "300 m · Core pequeño", icon: "🧻" },
          { name: "Papel Higiénico Jumbo SR", detail: "600 m · Core grande", icon: "🧻" },
        ],
      },
      {
        name: "Toallas",
        icon: "📄",
        products: [
          { name: "Toalla Intercalada Z-Fold", detail: "250 hojas/paq · 2 capas", icon: "📄" },
          { name: "Toalla en Rollo Autocorte", detail: "200 m · Dispensador incluible", icon: "🗞️" },
        ],
      },
      {
        name: "Servilletas",
        icon: "🤍",
        products: [
          { name: "Servilletas de Papel", detail: "500 pzas/paq · 1 capa", icon: "🤍" },
        ],
      },
      {
        name: "Despachadores",
        icon: "📦",
        products: [
          { name: "Despachador de Papel Higiénico", detail: "Para JR y SR · ABS blanco", icon: "🗃️" },
          { name: "Despachador de Toalla", detail: "Autocorte / Z-Fold", icon: "📦" },
        ],
      },
    ],
  },
  {
    id: "jarceria-utensilios",
    category: "Jarcería y Utensilios",
    icon: "🧹",
    accent: "bg-navy-700",
    accentLight: "bg-navy-50 border-navy-200 text-navy-800",
    subcategories: [
      {
        name: "Barrido y Trapeado",
        icon: "🧹",
        products: [
          { name: "Trapeador de Microfibra", detail: "360° · Mango telescópico", icon: "🧹" },
          { name: "Escoba Cerda Dura", detail: "Exterior · Barrer residuos pesados", icon: "🪣" },
          { name: "Escoba Cerda Suave", detail: "Interior · Piso fino", icon: "🪄" },
        ],
      },
      {
        name: "Accesorios",
        icon: "🛠️",
        products: [
          { name: "Cubeta Exprimidora Profesional", detail: "15 L · Pedal de acero", icon: "🪣" },
          { name: "Señalética Piso Mojado", detail: "Bilingüe · 60 cm · Plegable", icon: "⚠️" },
          { name: "Fibra Verde P-96", detail: "Para lavar sin rayar", icon: "🟢" },
          { name: "Fibra Negra", detail: "Abrasivo pesado · Decapado", icon: "⬛" },
        ],
      },
      {
        name: "Limpieza Manual",
        icon: "🧤",
        products: [
          { name: "Trapo Industrial de Color", detail: "Por kg · Algodón", icon: "🎨" },
          { name: "Recogedor con Bastón", detail: "Largo · Metal reforzado", icon: "🔄" },
        ],
      },
    ],
  },
  {
    id: "bolsas-residuos",
    category: "Bolsas y Residuos",
    icon: "🗑️",
    accent: "bg-orange-600",
    accentLight: "bg-orange-50 border-orange-200 text-orange-700",
    subcategories: [
      {
        name: "Bolsas",
        icon: "🛍️",
        products: [
          { name: "Bolsas de Basura Chicas", detail: "30–40 L · Varios calibres", icon: "🛍️" },
          { name: "Bolsas de Basura Medianas", detail: "60–80 L · Varios calibres", icon: "🛍️" },
          { name: "Bolsas de Basura Grandes", detail: "120–150 L · Reforzada", icon: "🛍️" },
        ],
      },
      {
        name: "Contenedores",
        icon: "♻️",
        products: [
          { name: "Bote de Basura con Pedal", detail: "10 / 20 / 30 L · ABS", icon: "🗑️" },
          { name: "Contenedor con Ruedas 120L", detail: "Polietileno HD · Tapa incluida", icon: "♻️" },
          { name: "Contenedor con Ruedas 240L", detail: "Polietileno HD · Tapa incluida", icon: "♻️" },
        ],
      },
    ],
  },
  {
    id: "maquinaria-equipo",
    category: "Maquinaria y Equipo",
    icon: "⚙️",
    accent: "bg-navy-800",
    accentLight: "bg-navy-50 border-navy-300 text-navy-800",
    subcategories: [
      {
        name: "Limpieza Pesada",
        icon: "🏭",
        products: [
          { name: "Aspiradora de Polvo y Agua", detail: "20–30 L · Inoxidable", icon: "🌀" },
          { name: "Hidrolavadora Alta Presión", detail: "120–180 bar · 1,500–2,000 W", icon: "💦" },
          { name: "Carro de Limpieza para Conserje", detail: "Con bolsa, mopas y repisa", icon: "🛒" },
        ],
      },
    ],
  },
  {
    id: "equipo-seguridad",
    category: "Equipo de Seguridad",
    icon: "🦺",
    accent: "bg-orange-500",
    accentLight: "bg-orange-50 border-orange-200 text-orange-700",
    subcategories: [
      {
        name: "Protección Personal",
        icon: "🧤",
        products: [
          { name: "Guantes de Nitrilo", detail: "Tallas S-M-L-XL · Caja 100 pzas", icon: "🧤" },
          { name: "Guantes de Látex", detail: "Tallas S-M-L · Caja 100 pzas", icon: "🧤" },
          { name: "Lentes de Seguridad", detail: "Transparentes / Oscuros · ANSI Z87", icon: "🥽" },
        ],
      },
    ],
  },
  {
    id: "tapetes",
    category: "Tapetes",
    icon: "🟫",
    accent: "bg-steel-700",
    accentLight: "bg-steel-50 border-steel-300 text-steel-700",
    subcategories: [
      {
        name: "Control de Polvo",
        icon: "🚪",
        products: [
          { name: "Tapete de Entrada Atrapamugre", detail: "60×90 / 90×120 cm · Varios colores", icon: "🟫" },
        ],
      },
    ],
  },
];

const PHONE_CLEAN = COMPANY.phone.replace(/\s|\(|\)|-/g, "");

export default function SakPage() {
  const [activeCategory, setActiveCategory] = useState("quimicos-limpieza");

  const current = SAK_CATALOG.find((c) => c.id === activeCategory) ?? SAK_CATALOG[0];
  const totalProducts = SAK_CATALOG.reduce(
    (acc, cat) => acc + cat.subcategories.reduce((a, s) => a + s.products.length, 0), 0
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Sak: Insumos para Limpieza Industrial",
            description:
              "Sak es la línea de Trevigo para limpieza industrial e institucional: químicos, papel, jarcería, equipo y bolsas. Inventario completo, entrega 48h en Monterrey.",
            url: `${COMPANY.url}/sak`,
            provider: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: COMPANY.url,
            },
            serviceType: "Industrial Cleaning Supplies",
            areaServed: {
              "@type": "City",
              name: COMPANY.address.city,
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: COMPANY.legalName,
              },
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
              { "@type": "ListItem", position: 2, name: "Sak", item: `${COMPANY.url}/sak` },
            ],
          }),
        }}
      />
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-navy-500 pt-[100px] min-h-[480px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[380px]">
            <div className="py-14 lg:py-16 flex flex-col justify-center pr-0 lg:pr-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg">
                  <Image src="/logo.png" alt="Industrias Trevigo" width={28} height={28} className="object-contain" />
                  <span className="text-navy-950 font-black text-sm uppercase tracking-tight">Trevigo</span>
                </div>
                <div className="w-px h-8 bg-white/30" />
                <div className="bg-orange-500 rounded-lg px-4 py-1.5 shadow-lg">
                  <span className="text-white font-black text-xl tracking-widest uppercase">SAK™</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] mb-5">
                Todo para tu operación.<br />
                <span className="text-orange-400">Un solo proveedor.</span>
              </h1>
              <div className="w-16 h-1 bg-orange-400 mb-6" />
              <p className="text-white/80 text-base leading-relaxed max-w-lg mb-8">
                Sak™ es la línea de limpieza e higiene de Industrias Trevigo. Más de {totalProducts} productos en 8 categorías para industria, HORECA y servicios. Entrega en 48 h en Monterrey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#catalogo"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-7 py-3.5 font-black text-sm uppercase tracking-wide transition-colors shadow-lg">
                  Ver catálogo completo
                </a>
                <Link href="/contacto"
                  className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors">
                  Solicitar cotización
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-end justify-center relative overflow-hidden">
              <div className="relative w-full h-full min-h-[380px]">
                <Image src="/imagenes/hero-5.png" alt="Productos Sak" fill className="object-cover object-center" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-transparent to-transparent w-1/3" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-navy-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 flex-wrap gap-2">
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em]">
                Sak™ &nbsp;|&nbsp; Limpieza · Higiene · Insumos · Equipo
              </p>
              <div className="flex items-center gap-6">
                {["Monterrey N.L.", "+36 productos", "Entrega 48 h"].map((tag) => (
                  <span key={tag} className="text-white/40 text-xs font-semibold uppercase tracking-wider hidden sm:block">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-steel-100">
            {[
              { value: `${totalProducts}+`, label: "Productos en catálogo" },
              { value: "8", label: "Categorías" },
              { value: "48 h", label: "Entrega área metropolitana" },
              { value: "1", label: "Proveedor para todo" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center py-5 px-4 text-center">
                <span className="text-2xl font-black text-navy-600 mb-0.5">{s.value}</span>
                <span className="text-steel-500 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATÁLOGO ─────────────────────────────────────────────────── */}
      <section id="catalogo" className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Catálogo Sak™</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                Catálogo completo de productos
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Sidebar — Categorías ── */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-white border border-steel-200 rounded-xl overflow-hidden sticky top-[88px]">
                <div className="bg-navy-950 px-4 py-3">
                  <p className="text-white font-black text-xs uppercase tracking-widest">Categorías</p>
                </div>
                <nav className="divide-y divide-steel-100">
                  {SAK_CATALOG.map((cat) => {
                    const total = cat.subcategories.reduce((a, s) => a + s.products.length, 0);
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors group ${
                          isActive
                            ? "bg-navy-50 border-l-4 border-l-navy-500"
                            : "hover:bg-steel-50 border-l-4 border-l-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{cat.icon}</span>
                          <span className={`text-xs font-bold leading-snug ${isActive ? "text-navy-700" : "text-steel-700 group-hover:text-steel-900"}`}>
                            {cat.category}
                          </span>
                        </div>
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full shrink-0 ${
                          isActive ? "bg-navy-500 text-white" : "bg-steel-100 text-steel-500"
                        }`}>
                          {total}
                        </span>
                      </button>
                    );
                  })}
                </nav>
                <div className="p-4 border-t border-steel-200 bg-orange-50">
                  <p className="text-orange-700 text-xs font-bold mb-2">¿No encuentras algo?</p>
                  <Link href="/contacto"
                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-2 text-xs font-black uppercase tracking-wide transition-colors">
                    Consultar asesor →
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── Main — Productos ── */}
            <main className="flex-1 min-w-0">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`${current.accent} w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0`}>
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-steel-900 uppercase">{current.category}</h3>
                  <p className="text-steel-500 text-xs">
                    {current.subcategories.reduce((a, s) => a + s.products.length, 0)} productos · {current.subcategories.length} subcategorías
                  </p>
                </div>
              </div>

              {/* Subcategories + products */}
              <div className="space-y-8">
                {current.subcategories.map((sub) => (
                  <div key={sub.name}>
                    {/* Subcategory header */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-base">{sub.icon}</span>
                      <h4 className="text-steel-800 font-black text-sm uppercase tracking-wide">{sub.name}</h4>
                      <div className="flex-1 h-px bg-steel-200" />
                      <span className="text-steel-400 text-xs font-semibold">{sub.products.length} producto{sub.products.length !== 1 ? "s" : ""}</span>
                    </div>

                    {/* Product grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {sub.products.map((product) => (
                        <div
                          key={product.name}
                          className="bg-white border border-steel-200 rounded-xl p-4 hover:border-navy-300 hover:shadow-sm transition-all group flex flex-col"
                        >
                          {/* Icon + category chip */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 bg-steel-50 border border-steel-100 rounded-lg flex items-center justify-center text-xl shrink-0">
                              {product.icon}
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${current.accentLight} uppercase tracking-wide`}>
                              {sub.name.split("·")[0].trim()}
                            </span>
                          </div>

                          {/* Name + detail */}
                          <h5 className="text-steel-900 font-black text-sm leading-snug mb-1 group-hover:text-navy-700 transition-colors">
                            {product.name}
                          </h5>
                          <p className="text-steel-500 text-xs mb-4 flex-1">{product.detail}</p>

                          {/* CTA */}
                          <a
                            href={`mailto:${COMPANY.email}?subject=Cotización Sak: ${product.name}&body=Hola, me interesa cotizar: ${product.name} — ${product.detail}.`}
                            className="flex items-center justify-between pt-3 border-t border-steel-100 text-navy-500 hover:text-navy-700 transition-colors"
                          >
                            <span className="text-xs font-black uppercase tracking-wide">Solicitar cotización</span>
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote strip */}
              <div className="mt-10 bg-navy-950 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-black text-sm uppercase mb-1">¿Necesitas cotización por volumen?</p>
                  <p className="text-steel-400 text-xs">Precios especiales para empresas. Entrega en 48 h área metropolitana de Monterrey.</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Link href="/contacto"
                    className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 font-black text-xs uppercase tracking-wide transition-colors">
                    Cotizar ahora →
                  </Link>
                  <a href={`tel:${PHONE_CLEAN}`}
                    className="inline-flex items-center gap-1.5 border border-white/30 hover:border-white text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wide transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ─── POR QUÉ SAK ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-2">¿Por qué Sak™?</p>
            <h2 className="text-2xl font-black text-steel-900 uppercase">Un proveedor para toda tu operación</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "📦", title: "Inventario completo", desc: "Químicos, papel, jarcería, bolsas y equipo en un solo pedido. Menos proveedores, menos trámites." },
              { icon: "🚚", title: "Entrega 48 h", desc: "Área metropolitana de Monterrey. Pedidos repetitivos con entregas programadas sin costo adicional." },
              { icon: "📋", title: "SDS en español", desc: "Todos los químicos incluyen hoja de seguridad en español y ficha técnica con diluciones." },
              { icon: "🔬", title: "Soporte técnico", desc: "Asesor Sak visita tu operación, evalúa tus necesidades y te propone el protocolo de limpieza correcto." },
            ].map((b) => (
              <div key={b.title} className="bg-steel-50 border border-steel-200 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-steel-900 font-black text-sm uppercase mb-2">{b.title}</h3>
                <p className="text-steel-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-orange-500 inline-flex items-center px-4 py-1.5 rounded-full mb-5">
            <span className="text-white font-black text-xs uppercase tracking-widest">SAK™</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Listo para consolidar tus compras de limpieza?
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Un asesor Sak visita tu operación, levanta el inventario de productos que usas actualmente y te presenta una cotización comparativa en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar visita técnica
            </Link>
            <a href={`tel:${PHONE_CLEAN}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
