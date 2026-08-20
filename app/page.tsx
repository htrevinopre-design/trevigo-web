import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY, PRODUCT_CATEGORIES, SERVICES, INDUSTRIES, GENERAL_FAQS } from "@/lib/data";
import { EmojiIcon } from "@/components/Icon";

export const metadata: Metadata = {
  title: `${COMPANY.name} | Químicos Industriales & Tratamientos | Monterrey, México`,
  description:
    "Industrias Trevigo: 35+ años fabricando productos químicos para tratamiento de metales, limpieza industrial y tratamiento de aguas en Monterrey, N.L.",
  alternates: {
    canonical: COMPANY.url,
    languages: { "es-MX": COMPANY.url, en: `${COMPANY.url}/en`, "x-default": COMPANY.url },
  },
};

const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }} />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-[100px] overflow-hidden" aria-label="Hero">
        {/* Dot pattern texture */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Blue gradient glow — subtle, not blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-950" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Monterrey, N.L. · Desde 1989 · 35+ años de experiencia
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] tracking-tight mb-6">
            Químicos industriales<br />
            <span className="text-navy-500">para la industria mexicana</span>
          </h1>
          <p className="text-steel-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Fabricamos y distribuimos productos para <strong className="text-white">tratamiento de metales</strong>,{" "}
            <strong className="text-white">limpieza industrial</strong> y{" "}
            <strong className="text-white">tratamiento de aguas residuales</strong>.
            Servicio técnico especializado. Entrega en 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar cotización
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/productos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors">
              Ver catálogo de productos
            </Link>
          </div>
        </div>

        {/* Stats strip at bottom of hero */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {[
                { value: "35+", label: "Años de experiencia", sub: "Desde 1989" },
                { value: "200+", label: "Clientes activos", sub: "En todo México" },
                { value: "48h", label: "Tiempo de entrega", sub: "Área Metro Monterrey" },
                { value: "4", label: "Líneas de producto", sub: "Metales, Aguas, Lubricantes, Mat. Primas" },
              ].map((s) => (
                <div key={s.label} className="py-6 px-6 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-orange-500 mb-0.5">{s.value}</div>
                  <div className="text-white text-xs font-bold uppercase tracking-wide">{s.label}</div>
                  <div className="text-steel-500 text-xs mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST / CERTIFICACIONES ──────────────────────────────── */}
      <section className="bg-steel-50 border-b border-steel-200 py-8" aria-label="Confianza y certificaciones">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { label: "Fabricante local", icon: "🏭" },
              { label: "Ficha técnica y SDS", icon: "📋" },
              { label: "Soporte técnico incluido", icon: "👷" },
              { label: "Entrega 48h Monterrey", icon: "🚚" },
              { label: "Formulación a medida", icon: "🧪" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-steel-600 text-xs font-semibold uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LÍNEAS DE PRODUCTO ───────────────────────────────────── */}
      <section className="py-20 bg-white" aria-label="Líneas de productos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Nuestras líneas de producto</p>
            <h2 className="text-2xl sm:text-4xl font-black text-steel-900 uppercase">
              Soluciones para cada necesidad industrial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat, i) => {
              const colorsList = [
                { bg: "bg-navy-500", light: "bg-navy-50", border: "border-navy-200", text: "text-navy-600" },
                { bg: "bg-navy-700", light: "bg-navy-50", border: "border-navy-200", text: "text-navy-700" },
                { bg: "bg-steel-700", light: "bg-steel-50", border: "border-steel-200", text: "text-steel-700" },
                { bg: "bg-steel-800", light: "bg-steel-50", border: "border-steel-200", text: "text-steel-700" },
              ];
              const colors = colorsList[i] ?? colorsList[0];
              return (
                <div key={cat.id} className="bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                  {/* Color top */}
                  <div className={`${colors.bg} px-6 py-8 text-white`}>
                    <div className="mb-3"><EmojiIcon emoji={cat.icon} className="w-9 h-9" /></div>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">INDUSTRIAS TREVIGO</p>
                    <h3 className="text-xl font-black uppercase leading-tight">{cat.name}</h3>
                  </div>
                  {/* Content */}
                  <div className="px-6 py-5">
                    <p className="text-steel-500 text-sm leading-relaxed mb-5">{cat.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cat.products.slice(0, 4).map((p) => (
                        <span key={p.id} className={`${colors.light} ${colors.border} ${colors.text} border text-xs px-2 py-0.5 rounded`}>
                          {p.name}
                        </span>
                      ))}
                      {cat.products.length > 4 && (
                        <span className="bg-steel-100 text-steel-500 text-xs px-2 py-0.5 rounded border border-steel-200">
                          +{cat.products.length - 4} más
                        </span>
                      )}
                    </div>
                    <Link href={`/productos#${cat.id}`}
                      className="block w-full text-center border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white py-2.5 text-xs font-black uppercase tracking-wide transition-colors">
                      Ver productos
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/productos"
              className="inline-flex items-center gap-2 bg-navy-500 hover:bg-navy-600 text-white px-8 py-3.5 font-black text-sm uppercase tracking-wide transition-colors">
              Ver catálogo completo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COTIZA AQUÍ (form embebido) ──────────────────────────── */}
      <section className="py-20 bg-steel-50 border-y border-steel-200" aria-label="Formulario de cotización">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-navy-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Atención inmediata</p>
            <h2 className="text-2xl sm:text-4xl font-black text-steel-900 uppercase mb-3">
              Cotiza tus productos químicos aquí
            </h2>
            <p className="text-steel-500 text-base">Un asesor técnico te responde en menos de 24 horas.</p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ─── SPLIT: Por qué Trevigo ───────────────────────────────── */}
      <section className="bg-navy-950 overflow-hidden" aria-label="Por qué Trevigo">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — dark */}
            <div className="py-16 lg:py-24 pr-0 lg:pr-16">
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Nuestra diferencia</p>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight mb-6">
                Somos expertos en química industrial para la manufactura mexicana
              </h2>
              <p className="text-steel-400 text-base leading-relaxed mb-8">
                Analizamos cada operación y diseñamos soluciones específicas que responden a los retos particulares de tu planta, con respaldo técnico y cumplimiento normativo.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Formulación propia: ajustamos el producto a tu proceso",
                  "Soporte técnico en campo sin costo para clientes activos",
                  "TDS, SDS/GHS y COA incluidos con cada producto",
                  "Entrega en 48h en el Área Metropolitana de Monterrey",
                  "Libre de cromo VI. Cumplimiento NOM-SEMARNAT",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-steel-300 text-sm">
                    <svg className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/nosotros"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                Conocer más sobre Trevigo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right — numbers */}
            <div className="bg-navy-900 border-l border-white/10 py-16 lg:py-24 px-10 lg:px-16 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { n: "35+", label: "Años en la industria" },
                  { n: "200+", label: "Clientes satisfechos" },
                  { n: "48h", label: "Tiempo de entrega" },
                  { n: "100%", label: "Soporte post-venta" },
                ].map((s) => (
                  <div key={s.label} className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-black text-white mb-1">{s.n}</div>
                    <div className="text-steel-400 text-sm font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-label="Servicios aplicados">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Servicios técnicos</p>
            <h2 className="text-2xl sm:text-4xl font-black text-steel-900 uppercase mb-3">
              No solo vendemos el químico.<br />Aplicamos el proceso.
            </h2>
            <p className="text-steel-500 text-base max-w-2xl mx-auto">
              Servicios aplicados de tratamiento de superficie para la industria manufacturera mexicana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/servicios#${service.id}`}
                className="group bg-white border border-steel-200 rounded-lg p-6 hover:border-navy-400 hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-navy-50 border-2 border-navy-100 flex items-center justify-center mx-auto mb-4 text-navy-600">
                  <EmojiIcon emoji={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-steel-900 font-black text-sm uppercase mb-2 group-hover:text-navy-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-steel-500 text-xs leading-relaxed line-clamp-3">
                  {service.description.slice(0, 120)}...
                </p>
                <div className="mt-4 text-navy-500 text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver más →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/servicios"
              className="inline-flex items-center gap-2 border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white px-8 py-3.5 font-black text-sm uppercase tracking-wide transition-colors">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIAS ───────────────────────────────────────────── */}
      <section className="py-20 bg-steel-50 border-y border-steel-200" aria-label="Industrias que atendemos">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Sectores industriales</p>
            <h2 className="text-2xl sm:text-4xl font-black text-steel-900 uppercase">
              Industrias a las que servimos
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <Link key={industry.id} href={`/industrias/${industry.slug}`}
                className="group bg-white border border-steel-200 rounded-lg p-6 text-center hover:border-navy-400 hover:shadow-md transition-all">
                <div className="mb-3 flex justify-center text-navy-700"><EmojiIcon emoji={industry.icon} className="w-10 h-10" /></div>
                <h3 className="text-steel-800 font-black text-sm uppercase mb-2 group-hover:text-navy-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-steel-500 text-xs leading-relaxed">{industry.description.slice(0, 65)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <FAQAccordion faqs={GENERAL_FAQS} title="Preguntas frecuentes sobre Industrias Trevigo" />

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-navy-500 py-16" aria-label="Llamada a la acción">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase mb-4">
            ¿Necesitas un químico industrial para tu planta?
          </h2>
          <p className="text-navy-100 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Llevamos 35 años resolviendo retos de manufactura en México. Cuéntanos tu proceso y te hacemos una propuesta técnica sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar cotización
            </Link>
            <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar ahora
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-navy-100 text-xs font-semibold">
            {["✓ Visita técnica sin costo", "✓ TDS y SDS incluidas", "✓ Entrega en 48h", "✓ Soporte post-venta"].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
