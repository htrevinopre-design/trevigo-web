import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sak™ — Línea de Limpieza Industrial · Industrias Trevigo",
  description:
    "Sak es la línea de productos de limpieza industrial de Industrias Trevigo: detergentes, desengrasantes, desinfectantes y sanitizantes para instalaciones industriales en Monterrey, México.",
  alternates: { canonical: `${COMPANY.url}/sak` },
};

const sakProducts = [
  {
    id: "sak-detergente-multiuso",
    name: "Detergente Multiusos Sak",
    desc: "Fórmula concentrada para limpieza general de pisos, paredes y superficies industriales. Alta eficiencia con baja espuma.",
    tags: ["Superficies", "Pisos", "General"],
    icon: "🧴",
  },
  {
    id: "sak-desengrasante-industrial",
    name: "Desengrasante Industrial Sak",
    desc: "Elimina aceites, grasas y residuos de proceso en líneas de producción, maquinaria y áreas de mantenimiento.",
    tags: ["Maquinaria", "Producción", "Mantenimiento"],
    icon: "⚙️",
  },
  {
    id: "sak-desinfectante-amonio",
    name: "Desinfectante Cuaternario Sak",
    desc: "Amonio cuaternario de amplio espectro para desinfección de superficies en plantas de alimentos, farmacéuticas y hospitales.",
    tags: ["Alimentos", "Farmacéutico", "Hospitales"],
    icon: "🦠",
  },
  {
    id: "sak-sanitizante-spray",
    name: "Sanitizante Spray Sak",
    desc: "Sanitizante listo para usar en formato spray. Sin enjuague requerido. Ideal para superficies de contacto alimentario.",
    tags: ["Sin enjuague", "Contacto alimentario", "Spray"],
    icon: "💨",
  },
  {
    id: "sak-limpiador-banos",
    name: "Limpiador para Baños Sak",
    desc: "Fórmula ácida para eliminación de sarro, incrustaciones y manchas de óxido en instalaciones sanitarias industriales.",
    tags: ["Sarro", "Instalaciones", "Ácido"],
    icon: "🚿",
  },
  {
    id: "sak-desgrasante-espuma",
    name: "Desengrasante en Espuma Sak",
    desc: "Mayor tiempo de contacto en superficies verticales. Ideal para cocinas industriales, campanas y extractores.",
    tags: ["Cocinas", "Extractores", "Vertical"],
    icon: "🫧",
  },
];

const sakBenefits = [
  { icon: "🏭", title: "Formulado para industria", desc: "Concentraciones y fórmulas diseñadas para las demandas de producción industrial continua." },
  { icon: "🌿", title: "Biodegradable", desc: "Tensioactivos biodegradables que cumplen con normativas de descarga y sostenibilidad ambiental." },
  { icon: "📋", title: "Hoja de seguridad incluida", desc: "Cada producto incluye SDS en español, ficha técnica y diluciones recomendadas." },
  { icon: "🔬", title: "Soporte técnico", desc: "Asesoría de aplicación sin costo. Visita a tu instalación para validar el protocolo de limpieza." },
];

export default function SakPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-navy-500 pt-[100px] min-h-[520px] relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[420px]">

            {/* LEFT — Brand + copy */}
            <div className="py-14 lg:py-16 flex flex-col justify-center pr-0 lg:pr-12">
              {/* Brand wordmark */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <Image src="/logo.png" alt="Industrias Trevigo" width={28} height={28} className="object-contain" />
                    <span className="text-navy-950 font-black text-sm uppercase tracking-tight">Trevigo</span>
                  </div>
                  <div className="w-px h-8 bg-white/30" />
                  <div className="bg-orange-500 rounded-lg px-4 py-1.5 shadow-lg">
                    <span className="text-white font-black text-xl tracking-widest uppercase">SAK™</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] mb-5">
                Limpieza industrial<br />
                <span className="text-orange-400">que funciona</span><br />
                de verdad.
              </h1>
              <div className="w-16 h-1 bg-orange-400 mb-6" />
              <p className="text-white/80 text-base leading-relaxed max-w-lg mb-8">
                La línea Sak de Industrias Trevigo concentra más de 35 años de química industrial en productos de limpieza y sanitización para instalaciones en Monterrey y todo el norte de México.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contacto"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-7 py-3.5 font-black text-sm uppercase tracking-wide transition-colors shadow-lg">
                  Solicitar cotización
                </Link>
                <a href="#productos-sak"
                  className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors">
                  Ver productos
                </a>
              </div>
            </div>

            {/* RIGHT — Product image */}
            <div className="hidden lg:flex items-end justify-center relative overflow-hidden">
              <div className="relative w-full h-full min-h-[420px]">
                <Image
                  src="/imagenes/hero-5.png"
                  alt="Productos Sak — Limpieza Industrial"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Fade left edge to blend with blue */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-transparent to-transparent w-1/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom dark tagline strip */}
        <div className="bg-navy-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3 flex-wrap gap-2">
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.25em]">
                Sak™ &nbsp;|&nbsp; Limpieza Industrial · por Industrias Trevigo
              </p>
              <div className="flex items-center gap-6">
                {["Detergentes", "Desengrasantes", "Desinfectantes", "Sanitizantes"].map((tag) => (
                  <span key={tag} className="text-white/40 text-xs font-semibold uppercase tracking-wider hidden sm:block">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO STATEMENT ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
                <div>
                  <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">La línea Sak</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase leading-tight">
                    Química de limpieza para entornos industriales exigentes
                  </h2>
                </div>
              </div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                Sak nace de la experiencia de Industrias Trevigo en química de proceso. Los mismos estándares que aplicamos en tratamiento de metales y aguas industriales, ahora en una línea completa de productos de limpieza, desinfección y sanitización.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed">
                Desde plantas de manufactura y autopartes hasta instalaciones de alimentos y farmacéuticas, Sak cubre los protocolos de limpieza más exigentes con fórmulas concentradas, biodegradables y respaldadas por hoja de seguridad en español.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sakBenefits.map((b) => (
                <div key={b.title} className="bg-steel-50 border border-steel-200 rounded-xl p-5">
                  <div className="text-2xl mb-3">{b.icon}</div>
                  <h3 className="text-steel-900 font-black text-sm uppercase mb-1.5">{b.title}</h3>
                  <p className="text-steel-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS ────────────────────────────────────────────────── */}
      <section id="productos-sak" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12">
            <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Catálogo Sak</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                Productos de limpieza industrial
              </h2>
              <p className="text-steel-500 text-sm mt-2">
                Todos los productos incluyen SDS en español y asesoría técnica de aplicación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sakProducts.map((product) => (
              <article key={product.id}
                className="bg-white border border-steel-200 rounded-xl p-6 hover:shadow-md hover:border-navy-300 transition-all group">
                <div className="text-3xl mb-4">{product.icon}</div>
                <h3 className="text-steel-900 font-black text-sm uppercase mb-2 group-hover:text-navy-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-steel-500 text-xs leading-relaxed mb-4">{product.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tags.map((tag) => (
                    <span key={tag}
                      className="inline-flex items-center px-2 py-0.5 bg-navy-50 border border-navy-100 text-navy-600 text-[10px] font-bold uppercase tracking-wide rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="/contacto"
                  className="inline-flex items-center gap-1 text-navy-500 text-xs font-black uppercase tracking-wide hover:text-navy-700 transition-colors">
                  Solicitar cotización →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-steel-500 text-sm mb-4">
              ¿No encuentras lo que necesitas? Contáctanos — formulamos a medida.
            </p>
            <Link href="/contacto"
              className="inline-flex items-center gap-2 bg-navy-500 hover:bg-navy-600 text-white px-8 py-3.5 font-black text-sm uppercase tracking-wide transition-colors">
              Hablar con un asesor →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIAS ATENDIDAS ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-2">Dónde usamos Sak</p>
            <h2 className="text-2xl font-black text-steel-900 uppercase">Industrias que atendemos</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🚗", label: "Automotriz" },
              { icon: "🏭", label: "Manufactura" },
              { icon: "🍽️", label: "Alimentos" },
              { icon: "💊", label: "Farmacéutica" },
              { icon: "🏥", label: "Hospitales" },
              { icon: "🏗️", label: "Industrial" },
            ].map((ind) => (
              <div key={ind.label}
                className="flex flex-col items-center gap-2 py-6 bg-steel-50 border border-steel-200 rounded-xl hover:border-navy-300 hover:bg-navy-50 transition-all">
                <span className="text-3xl">{ind.icon}</span>
                <span className="text-steel-700 font-black text-xs uppercase tracking-wide text-center">{ind.label}</span>
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
            ¿Lista tu planta para un protocolo de limpieza industrial?
          </h2>
          <p className="text-steel-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Un asesor Sak visita tu instalación, evalúa tus necesidades y te entrega un protocolo de limpieza con productos, diluciones y frecuencias — sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar visita técnica
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
