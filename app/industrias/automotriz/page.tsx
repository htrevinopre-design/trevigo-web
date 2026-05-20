import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { COMPANY, PRODUCT_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proveedor de Químicos para la Industria Automotriz en México",
  description:
    "Proveedor y distribuidor de químicos industriales para la cadena automotriz mexicana: fosfatado, galvanizado, inhibidores y tratamiento de aguas. 35+ años en Nuevo León. Cumplimiento GM, Ford, Chrysler.",
  alternates: { canonical: `${COMPANY.url}/industrias/automotriz` },
};

const automotrizFaqs = [
  {
    q: "¿Qué productos químicos se usan en el pretratamiento de piezas automotrices antes de la pintura?",
    a: "El proceso estándar para piezas automotrices incluye: (1) Desengrase alcalino para eliminar aceites de proceso, (2) Enjuague con agua, (3) Fosfatado de zinc (principal barrera anticorrosiva) o fosfatado de hierro para piezas de menor exigencia, (4) Enjuague con agua desmineralizada, (5) Pasivado final. Trevigo suministra productos para cada etapa de esta línea.",
  },
  {
    q: "¿Cuáles son las normas automotrices que cumple el fosfatado de Trevigo?",
    a: "Nuestras formulaciones de fosfato de zinc están diseñadas para cumplir los requerimientos de GM (GMW3179), Ford (WSS-M3P18-A) y los estándares de la cadena tier 1 y tier 2 en Nuevo León. Emitimos reportes de análisis de baño y pruebas de niebla salina NSS ASTM B117.",
  },
  {
    q: "¿Cómo puedo cumplir con la normativa ambiental de descarga de aguas en mi planta automotriz?",
    a: "Las plantas automotrices generan efluentes con metales pesados (zinc, manganeso, fosfatos) que deben tratarse antes de la descarga. Con nuestros coagulantes y floculantes, más un diseño correcto del sistema de tratamiento, podemos ayudarte a cumplir con NOM-001-SEMARNAT-2021 y con los requerimientos de parques industriales. Realizamos Jar Test con muestra de tu efluente sin costo.",
  },
  {
    q: "¿Trevigo atiende a plantas de la cadena de autopartes (tier 1, tier 2)?",
    a: "Sí, atendemos tanto a OEMs como a fabricantes tier 1 y tier 2 en todo México. Tenemos experiencia con plantas de estampado, maquinado, pintura y ensamble.",
  },
];

// Productos relevantes para automotriz
const automotrizProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.products.filter((p) =>
    ["fosfatos", "detergentes-industriales", "coagulantes", "inhibidores-corrosion", "pasivados"].includes(p.id)
  )
);

export default function IndustriaAutomotrizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Químicos para la Industria Automotriz | Industrias Trevigo",
            description: "Productos y servicios químicos para la cadena automotriz en Nuevo León, México.",
            url: `${COMPANY.url}/industrias/automotriz`,
          }),
        }}
      />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-steel-300 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-steel-400">Industrias</span>
            <span>/</span>
            <span className="text-steel-300">Automotriz</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                🚗 Industria Automotriz
              </p>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
                Proveedor técnico para la{" "}
                <span className="text-orange-500">cadena automotriz</span>{" "}
                en México
              </h1>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-400 text-base leading-relaxed mb-8">
                Nuevo León produce el 42% de las autopartes de México. Industrias Trevigo lleva 35 años siendo proveedor técnico de la industria automotriz en Monterrey: fosfatado, tratamiento de aguas industriales, inhibidores de corrosión y servicios de superficie.
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

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "42%", label: "de autopartes de México producidas en N.L." },
                { value: "35+", label: "años proveyendo a la cadena automotriz" },
                { value: "NOM-001", label: "Cumplimiento SEMARNAT en tratamiento de agua" },
                { value: "GM/Ford", label: "Normas automotrices de fosfatado cubiertas" },
              ].map((stat) => (
                <div key={stat.label} className="bg-navy-900 border border-white/10 rounded-xl p-5">
                  <div className="text-2xl font-black text-orange-500 mb-1">{stat.value}</div>
                  <div className="text-steel-400 text-xs leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESO AUTOMOTRIZ ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12">
            <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">El proceso</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                Línea completa de pretratamiento automotriz
              </h2>
              <p className="text-steel-500 text-sm mt-2 max-w-2xl">
                Trevigo suministra los químicos para cada etapa de tu línea de pintura, desde el desengrase hasta el tratamiento del agua residual generada.
              </p>
            </div>
          </div>

          {/* Process flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { step: "1", name: "Desengrase", product: "Detergente alcalino", color: "bg-navy-50 border-navy-200" },
              { step: "2", name: "Fosfatado", product: "Fosfato de Zn/Fe", color: "bg-orange-50 border-orange-200" },
              { step: "3", name: "Pasivado", product: "Pasivante Cr-free", color: "bg-steel-50 border-steel-200" },
              { step: "4", name: "Pintura", product: "E-coat / Polvo", color: "bg-navy-50 border-navy-200" },
            ].map((item) => (
              <div key={item.step} className={`border rounded-xl p-5 text-center ${item.color}`}>
                <div className="w-8 h-8 bg-navy-500 text-white font-black text-sm rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <div className="text-steel-900 font-black text-sm uppercase mb-1">{item.name}</div>
                <div className="text-steel-500 text-xs">{item.product}</div>
              </div>
            ))}
          </div>

          {/* Water treatment note */}
          <div className="bg-navy-950 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💧</div>
              <div>
                <h3 className="text-white font-black text-sm uppercase mb-2">Tratamiento de aguas residuales del proceso</h3>
                <p className="text-steel-400 text-sm leading-relaxed">
                  Las líneas de fosfatado generan efluentes con zinc, manganeso, fosfatos y tensoactivos que requieren tratamiento antes de la descarga. Trevigo suministra coagulantes, floculantes y asesoría técnica para cumplir con NOM-001-SEMARNAT y los requerimientos de tu parque industrial.
                </p>
                <Link href="/productos#tratamiento-aguas"
                  className="inline-flex items-center gap-1 text-orange-400 text-sm font-bold mt-3 hover:text-orange-300 transition-colors">
                  Ver productos de tratamiento de agua →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS RECOMENDADOS ───────────────────────────────── */}
      {automotrizProducts.length > 0 && (
        <section className="py-20 bg-steel-50 border-y border-steel-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-12">
              <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
              <div>
                <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Catálogo para automotriz</p>
                <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                  Productos más usados en la industria automotriz
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {automotrizProducts.map((product) => (
                <article key={product.id} className="bg-white border border-steel-200 rounded-xl p-6 hover:shadow-md hover:border-navy-300 transition-all">
                  <h3 className="text-steel-900 font-black text-sm uppercase mb-2">{product.name}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed mb-4">{product.shortDescription}</p>
                  <Link href={`/productos#${product.id}`}
                    className="inline-flex items-center gap-1 text-navy-500 text-xs font-black uppercase tracking-wide hover:text-navy-700 transition-colors">
                    Ver ficha técnica →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/productos"
                className="inline-flex items-center gap-2 border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white px-8 py-3 font-black text-sm uppercase tracking-wide transition-colors">
                Ver catálogo completo
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <FAQAccordion
        faqs={automotrizFaqs}
        title="Preguntas frecuentes: Químicos para industria automotriz"
      />

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Visita técnica sin costo</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Tu planta automotriz necesita un proveedor técnico?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Visitamos tu línea de pretratamiento sin costo. Evaluamos tus baños, análisis de proceso y te proponemos mejoras con impacto medible en tu operación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Agendar visita técnica
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
