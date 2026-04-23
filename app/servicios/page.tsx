import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios de Tratamiento de Metales y Aguas Residuales | Trevigo",
  description:
    "Servicios aplicados de galvanizado, tropicalizado, despintado, decapado, pasivado, pintura electrostática e ingeniería para tratamiento de aguas. Monterrey, N.L.",
  alternates: { canonical: `${COMPANY.url}/servicios` },
};

// ─── Helper: section header ───────────────────────────────────────────────────
function SectionHeader({ label, title, desc, accent = "navy" }: { label: string; title: string; desc?: string; accent?: "navy" | "orange" }) {
  const bar = accent === "orange" ? "bg-orange-500" : "bg-navy-500";
  const labelColor = accent === "orange" ? "text-orange-500" : "text-navy-500";
  return (
    <div className="flex items-start gap-4 mb-12">
      <div className={`${bar} w-1 h-10 rounded-full shrink-0 mt-1`} />
      <div>
        <p className={`${labelColor} text-xs font-bold uppercase tracking-widest mb-1`}>{label}</p>
        <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">{title}</h2>
        {desc && <p className="text-steel-500 text-sm mt-2 max-w-2xl">{desc}</p>}
      </div>
    </div>
  );
}

// ─── Helper: dark CTA strip ───────────────────────────────────────────────────
function ServiceCTA({ title, body, linkLabel, linkHref }: { title: string; body: string; linkLabel: string; linkHref: string }) {
  return (
    <div className="bg-navy-950 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">
      <div>
        <h3 className="text-white font-black text-base uppercase mb-2">{title}</h3>
        <p className="text-steel-400 text-sm max-w-lg">{body}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <Link href={linkHref}
          className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-black text-sm uppercase tracking-wide transition-colors">
          {linkLabel}
        </Link>
        <Link href="/contacto"
          className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors">
          Contactar asesor
        </Link>
      </div>
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Industrias Trevigo
              </p>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
                Servicios Industriales
              </h1>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-400 text-base leading-relaxed mb-8">
                Servicios especializados en tratamientos de superficies metálicas y soluciones para aguas industriales. Calidad e innovación con más de 35 años de experiencia en el norte de México.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#tratamiento-metales"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-black text-sm uppercase tracking-wide transition-colors">
                  Tratamiento de Metales
                </a>
                <a href="#tratamiento-aguas"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors">
                  Tratamiento de Aguas
                </a>
              </div>
            </div>
            <div className="relative h-56 lg:h-72 rounded-lg overflow-hidden">
              <Image
                src="/servicios/banner.png"
                alt="Servicios Industrias Trevigo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRATAMIENTO DE METALES
      ═══════════════════════════════════════════════════════════════ */}
      <section id="tratamiento-metales" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="⚙️ Tratamiento de Metales"
            title="Servicios de Tratamiento de Superficies Metálicas"
            desc="Procesos especializados de protección y acabado de superficies metálicas para la industria manufacturera del norte de México."
          />
          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-2 mb-14">
            {[
              { label: "Galvanizado", href: "#galvanizado" },
              { label: "Tropicalizado", href: "#tropicalizado" },
              { label: "Fosfatizado", href: "#fosfatizado" },
              { label: "Despintado", href: "#despintado" },
              { label: "Decapado", href: "#decapado" },
              { label: "Pasivado", href: "#pasivado" },
              { label: "Pintura Electrostática", href: "#pintura-electrostatica" },
            ].map((p) => (
              <a key={p.href} href={p.href}
                className="inline-flex items-center px-4 py-1.5 bg-steel-50 border border-steel-200 hover:border-navy-400 hover:bg-navy-50 text-steel-700 hover:text-navy-700 text-xs font-bold uppercase tracking-wide transition-all">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALVANIZADO ──────────────────────────────────────────── */}
      <section id="galvanizado" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Metales" title="Galvanizado Industrial" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                El galvanizado es el proceso de depositar zinc sobre una superficie de acero para protegerla contra la corrosión. El zinc actúa como barrera física y como ánodo de sacrificio, protegiendo el acero incluso cuando la capa se daña localmente.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Trevigo suministra los químicos de proceso para líneas de galvanizado electrolítico: desengrasantes, ácidos de decapado, abrillantadores y pasivantes de zinc. Asesoramos la operación del baño y realizamos análisis periódicos para mantener el proceso en especificación.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ASTM A123", "ASTM A153", "RoHS compliant", "NSS 120+ horas"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tipos */}
            <div className="space-y-4">
              {[
                {
                  tipo: "Galvanizado Electrolítico",
                  uso: "Industria automotriz · Electrónica",
                  desc: "Depósito de zinc controlado mediante corriente eléctrica. Capas delgadas y uniformes (5–25 µm). Excelente acabado superficial. Base para pasivado posterior.",
                  border: "border-l-navy-500",
                },
                {
                  tipo: "Galvanizado en Caliente",
                  uso: "Estructuras · Alta exposición",
                  desc: "Inmersión en zinc fundido a ~450°C. Capas gruesas (45–85 µm). Máxima protección para estructuras expuestas a intemperie o ambientes corrosivos.",
                  border: "border-l-steel-400",
                },
                {
                  tipo: "Galvanizado por Centrifugación",
                  uso: "Tornillería · Piezas pequeñas",
                  desc: "Variante del galvanizado en caliente para piezas de geometría compleja. Elimina excesos de zinc mediante centrifugado antes del enfriamiento.",
                  border: "border-l-orange-400",
                },
              ].map((item) => (
                <div key={item.tipo} className={`bg-white border border-steel-200 border-l-4 ${item.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-steel-900 font-black text-sm uppercase">{item.tipo}</h4>
                    <span className="text-[10px] font-bold text-steel-400 uppercase tracking-wide text-right shrink-0">{item.uso}</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso */}
          <div className="mb-4">
            <h3 className="text-steel-900 font-black text-sm uppercase tracking-wide mb-5 text-center">Proceso de galvanizado electrolítico</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { n: "1", name: "Desengrase", detail: "Alcalino", icon: "🧹" },
                { n: "2", name: "Enjuague", detail: "Agua industrial", icon: "💧" },
                { n: "3", name: "Decapado", detail: "Ácido clorhídrico", icon: "⚗️" },
                { n: "4", name: "Enjuague", detail: "Agua industrial", icon: "💧" },
                { n: "5", name: "Galvanizado", detail: "Baño de zinc", icon: "🔩" },
                { n: "6", name: "Enjuague", detail: "Agua desmin.", icon: "💧" },
                { n: "7", name: "Pasivado", detail: "Cr-free / azul / negro", icon: "🛡️" },
              ].map((step) => (
                <div key={step.n} className="flex flex-col items-center text-center bg-white border border-steel-200 rounded-xl p-4">
                  <div className="w-7 h-7 bg-navy-500 text-white font-black text-xs rounded-full flex items-center justify-center mb-2">{step.n}</div>
                  <div className="text-lg mb-1">{step.icon}</div>
                  <div className="text-steel-900 font-black text-[10px] uppercase mb-0.5">{step.name}</div>
                  <div className="text-steel-400 text-[10px]">{step.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tienes una línea de galvanizado?"
            body="Analizamos tu baño, eficiencia catódica y calidad del depósito. Te proponemos mejoras con impacto medible en resistencia a niebla salina."
            linkLabel="Agendar análisis de baño →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── TROPICALIZADO ────────────────────────────────────────── */}
      <section id="tropicalizado" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Metales" title="Tropicalizado" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                El tropicalizado es un proceso de conversión química aplicado sobre zinc galvanizado que forma una capa de cromato o de conversión libre de cromo. Esta capa mejora la resistencia a la corrosión del zinc, aumenta la adhesión de pinturas y da al acabado un color característico (amarillo, azul, negro o transparente).
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Hoy la industria automotriz y electrónica exige tropicalizados <strong>Cr(VI)-free</strong> y <strong>Cr-free</strong> en cumplimiento con RoHS y directivas ELV. Trevigo suministra pasivantes modernos de zirconio y titanio que cumplen estas normativas sin sacrificar desempeño.
              </p>
              <div className="flex flex-wrap gap-2">
                {["RoHS compliant", "ELV compliant", "Cr(VI)-free", "Cr-free disponible", "NSS 72–240 h"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { tipo: "Tropicalizado Amarillo (Cr VI)", uso: "Protección máxima · Legacy", desc: "Mayor resistencia a corrosión (NSS 200+ h sobre zinc). Restringido por RoHS en muchas aplicaciones. Aún utilizado en sectores no regulados.", border: "border-l-orange-400" },
                { tipo: "Tropicalizado Azul / Transparente", uso: "Automotriz · Electrónica", desc: "Cr(III) o libre de cromo. Acabado iridiscente azul-plateado. NSS 72–120 h sobre zinc. Cumple RoHS. El más usado en industria automotriz actual.", border: "border-l-navy-500" },
                { tipo: "Tropicalizado Negro", uso: "Estética · Herrajes · Consumo", desc: "Acabado negro uniforme sobre zinc. Resistencia media a corrosión. Se usa cuando se requiere aspecto negro sin pintura adicional.", border: "border-l-steel-700" },
              ].map((item) => (
                <div key={item.tipo} className={`bg-steel-50 border border-steel-200 border-l-4 ${item.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-steel-900 font-black text-sm uppercase">{item.tipo}</h4>
                    <span className="text-[10px] font-bold text-steel-400 uppercase tracking-wide text-right shrink-0">{item.uso}</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tu planta necesita cambiar a pasivante Cr-free?"
            body="Te ayudamos a hacer la transición sin parar la línea. Realizamos pruebas comparativas de NSS y te entregamos el reporte de validación."
            linkLabel="Solicitar prueba comparativa →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── FOSFATIZADO ──────────────────────────────────────────── */}
      <section id="fosfatizado" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio destacado · Tratamiento de Metales" title="Fosfatizado Industrial" accent="orange" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                El fosfatizado es un proceso de conversión química que forma una capa de cristales de fosfato metálico sobre la superficie del acero o hierro. Esta capa actúa como barrera anticorrosiva y como base de anclaje ideal para pinturas, recubrimientos en polvo o e-coat.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                En Industrias Trevigo fabricamos y suministramos los químicos para cada etapa de la línea: desengrasantes alcalinos, activadores de superficie, fosfatos de zinc o hierro, enjuagues y pasivantes. También realizamos análisis de baño y ajuste de concentraciones en sitio.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Fosfato de Zinc", "Fosfato de Hierro", "Tricatiónico", "Cr-free"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { tipo: "Fosfato de Zinc", uso: "Automotriz · Alta exigencia anticorrosiva", desc: "Cristales de fosfato de zinc sobre acero. La mejor protección contra corrosión. Base ideal para e-coat y pintura electrostática. Cumple normas GM, Ford y Chrysler.", border: "border-l-navy-500" },
                { tipo: "Fosfato de Hierro", uso: "Manufactura general · Piezas de menor exigencia", desc: "Capa amorfa de fosfato de hierro. Proceso más simple y económico. Adecuado para aplicaciones donde la resistencia a la corrosión es moderada.", border: "border-l-steel-400" },
                { tipo: "Fosfato Tricatiónico", uso: "Alto desempeño · Zinc / Níquel / Manganeso", desc: "Combina tres cationes para cristales más finos y uniformes. Mayor resistencia a niebla salina. Opción premium para piezas de alta demanda.", border: "border-l-orange-500" },
              ].map((item) => (
                <div key={item.tipo} className={`bg-white border border-steel-200 border-l-4 ${item.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-steel-900 font-black text-sm uppercase">{item.tipo}</h4>
                    <span className="text-[10px] font-bold text-steel-400 uppercase tracking-wide text-right shrink-0">{item.uso}</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso */}
          <div className="mb-10">
            <h3 className="text-steel-900 font-black text-sm uppercase tracking-wide mb-5 text-center">Línea de fosfatizado — etapas del proceso</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { n: "1", name: "Desengrase", detail: "Alcalino caliente", icon: "🧹" },
                { n: "2", name: "Enjuague", detail: "Agua industrial", icon: "💧" },
                { n: "3", name: "Activación", detail: "Activador coloidal", icon: "⚡" },
                { n: "4", name: "Fosfatizado", detail: "Zn / Fe / Tricatiónico", icon: "🔩" },
                { n: "5", name: "Enjuague", detail: "Agua desmin.", icon: "💧" },
                { n: "6", name: "Pasivado", detail: "Cr-free", icon: "🛡️" },
              ].map((step) => (
                <div key={step.n} className="flex flex-col items-center text-center bg-white border border-steel-200 rounded-xl p-4">
                  <div className="w-8 h-8 bg-navy-500 text-white font-black text-sm rounded-full flex items-center justify-center mb-2">{step.n}</div>
                  <div className="text-xl mb-1">{step.icon}</div>
                  <div className="text-steel-900 font-black text-xs uppercase mb-0.5">{step.name}</div>
                  <div className="text-steel-400 text-[10px]">{step.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tienes una línea de fosfatizado?"
            body="Visita técnica sin costo. Analizamos tu baño actual, detectamos desviaciones y te proponemos ajustes con impacto medible en adhesión y resistencia a corrosión."
            linkLabel="Agendar visita técnica →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── DESPINTADO ───────────────────────────────────────────── */}
      <section id="despintado" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Metales" title="Despintado Industrial" accent="navy" />

          {/* Texto intro — full width */}
          <div className="mb-10">
            <p className="text-steel-600 text-sm leading-relaxed mb-4">
              El despintado es el proceso de remoción química o mecánica de recubrimientos —pintura en polvo, e-coat, pintura líquida— de superficies metálicas sin dañar el sustrato. Trevigo suministra los removedores alcalinos y solventes formulados para los dos casos de uso más comunes en líneas de pintura industrial.
            </p>
            <p className="text-steel-600 text-sm leading-relaxed mb-6">
              Nuestros removedores están formulados para trabajar en baños calientes con tiempos de ciclo cortos, compatibles con acero al carbón, aluminio y zinc galvanizado según la formulación.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Sin daño al sustrato", "Acero / Aluminio", "Baño caliente"].map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Los dos tipos de despintado — lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {[
                {
                  tipo: "Despintado de Racks",
                  icon: "🔧",
                  uso: "Líneas de pintura electrostática · Continuo",
                  desc: "Los racks (ganchos y bastidores) acumulan capas de pintura en polvo o e-coat con cada ciclo de producción. Cuando el espesor de pintura acumulado es excesivo (generalmente cada 50–150 ciclos), el rack pierde conductividad eléctrica y afecta la calidad del recubrimiento. El despintado de racks mediante baño alcalino caliente elimina todas las capas acumuladas sin deformar el metal ni dañar los puntos de contacto.",
                  items: ["Baño alcalino caliente a 80–90 °C", "Tiempo de inmersión: 30–120 min según espesor", "Enjuague y neutralización posterior", "Sin daño a la geometría del rack"],
                  border: "border-orange-500",
                  bg: "bg-orange-50",
                  image: "/servicios/rack.png",
                },
                {
                  tipo: "Despintado de Rechazo",
                  icon: "🔄",
                  uso: "Control de calidad · Recuperación de piezas",
                  desc: "Las piezas rechazadas en el proceso de pintura (burbujas, escurridos, contaminación, mal curado) pueden recuperarse retirando el recubrimiento defectuoso y reprocesándolas desde cero. El despintado de rechazo evita el desperdicio de la pieza metálica, reduciendo el costo de scrap. Trabajamos con pintura en polvo, e-coat y pintura líquida sobre acero y aluminio.",
                  items: ["Compatible con pintura en polvo y e-coat", "Recupera piezas de alto valor unitario", "No altera dimensiones ni tolerancias", "Entrega lista para fosfatizado y repintura"],
                  border: "border-navy-500",
                  bg: "bg-navy-50",
                  image: "/servicios/despintado.png",
                },
              ].map((item) => (
                <div key={item.tipo} className={`${item.bg} border-2 ${item.border} rounded-xl overflow-hidden`}>
                  {item.image && (
                    <div className="relative w-full h-48">
                      <Image src={item.image} alt={item.tipo} fill className="object-contain p-4" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="text-steel-900 font-black text-base uppercase">{item.tipo}</h4>
                        <span className="text-[10px] font-bold text-steel-500 uppercase tracking-wide">{item.uso}</span>
                      </div>
                    </div>
                    <p className="text-steel-600 text-xs leading-relaxed mb-4">{item.desc}</p>
                    <ul className="space-y-1">
                      {item.items.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-steel-700">
                          <span className="text-orange-500 font-black mt-0.5">✓</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>

          {/* Comparativo rápido */}
          <div className="bg-steel-50 border border-steel-200 rounded-xl p-6 mb-2">
            <h3 className="text-steel-900 font-black text-sm uppercase mb-5 text-center">Comparativo rápido</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-center">
              <div />
              <div className="font-black text-navy-700 uppercase">Despintado de Racks</div>
              <div className="font-black text-navy-700 uppercase">Despintado de Rechazo</div>
              {[
                ["Objetivo", "Limpiar bastidor para reusar", "Recuperar pieza rechazada"],
                ["Frecuencia", "Cada 50–150 ciclos de línea", "Por evento (rechazo QC)"],
                ["Tipo de recubrimiento", "Pintura en polvo / e-coat", "Polvo, e-coat o líquida"],
                ["Temperatura de baño", "80–90 °C", "60–90 °C según caso"],
                ["Prioridad", "Mantener conductividad", "Preservar geometría de pieza"],
              ].map(([label, col1, col2]) => (
                <>
                  <div key={`l-${label}`} className="bg-white border border-steel-100 rounded p-2 font-semibold text-steel-700 text-left sm:text-center">{label}</div>
                  <div key={`c1-${label}`} className="bg-white border border-steel-100 rounded p-2 text-steel-600">{col1}</div>
                  <div key={`c2-${label}`} className="bg-white border border-steel-100 rounded p-2 text-steel-600">{col2}</div>
                </>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tienes problema con acumulación de pintura en racks?"
            body="Te enviamos una muestra de removedor y te acompañamos en la prueba en tu planta. Sin costo, sin compromiso."
            linkLabel="Solicitar muestra →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── DECAPADO ─────────────────────────────────────────────── */}
      <section id="decapado" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Metales" title="Decapado Industrial" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                El decapado es la eliminación química de óxidos, cascarilla de laminación, incrustaciones e impurezas superficiales del metal usando ácidos o mezclas alcalinas. Es una etapa crítica antes de galvanizado, fosfatizado, pintura o soldadura, ya que garantiza que la superficie esté completamente limpia y activa para el proceso siguiente.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Trevigo suministra inhibidores de decapado que protegen el metal base de la sobredisolución (mordentado excesivo), así como los ácidos y formulaciones utilizadas en baños de decapado controlado.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HCl industrial", "H₂SO₄ técnico", "Inhibidores de mordentado", "Decapado neutro / alcalino"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { tipo: "Decapado con Ácido Clorhídrico", uso: "Acero al carbón · Alta velocidad", desc: "El más usado en la industria. Elimina óxido y cascarilla rápidamente a temperatura ambiente. Requiere inhibidor para evitar ataque al acero base. Fácil regeneración del baño.", border: "border-l-navy-500" },
                { tipo: "Decapado con Ácido Sulfúrico", uso: "Alta capacidad · Líneas continuas", desc: "Operación en caliente (60–80 °C). Menor costo de ácido pero mayor consumo energético. Preferido en líneas de alta capacidad y decapado continuo.", border: "border-l-steel-500" },
                { tipo: "Decapado Alcalino / Neutro", uso: "Aluminio · Acero inoxidable", desc: "Para metales sensibles al ataque ácido. Elimina óxidos de aluminio y anodizado deteriorado. Temperatura de operación 50–70 °C.", border: "border-l-orange-400" },
              ].map((item) => (
                <div key={item.tipo} className={`bg-white border border-steel-200 border-l-4 ${item.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-steel-900 font-black text-sm uppercase">{item.tipo}</h4>
                    <span className="text-[10px] font-bold text-steel-400 uppercase tracking-wide text-right shrink-0">{item.uso}</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Parámetros clave */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {[
              { val: "5–20%", label: "Concentración típica de HCl", icon: "🧪" },
              { val: "5–30 min", label: "Tiempo de inmersión típico", icon: "⏱️" },
              { val: "15–40 °C", label: "Temperatura HCl ambiente", icon: "🌡️" },
              { val: "< 0.5%", label: "Inhibidor recomendado en baño", icon: "🛡️" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white border border-steel-200 rounded-xl p-5 text-center">
                <div className="text-2xl mb-2">{kpi.icon}</div>
                <div className="text-navy-600 font-black text-lg mb-1">{kpi.val}</div>
                <div className="text-steel-500 text-xs leading-snug">{kpi.label}</div>
              </div>
            ))}
          </div>

          <ServiceCTA
            title="¿Problemas de calidad después del decapado?"
            body="Sobre-mordentado, rugosidad excesiva o cascarilla residual tienen solución. Realizamos análisis de tu baño y ajustamos el inhibidor sin parar la línea."
            linkLabel="Solicitar análisis de baño →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── PASIVADO ─────────────────────────────────────────────── */}
      <section id="pasivado" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Metales" title="Pasivado de Superficies Metálicas" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                El pasivado es el proceso de crear o reforzar una capa de óxido estable y adherente sobre la superficie del metal que actúa como barrera contra la corrosión. No es una capa de recubrimiento externo sino una modificación de la propia superficie metálica.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Trevigo suministra soluciones de pasivado para acero inoxidable (ácido nítrico, ácido cítrico), pasivantes de zinc galvanizado (Cr-free) y selladores sin cromo para líneas de fosfatizado, cumpliendo con ASTM A380, AMS 2700 y directivas RoHS.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ASTM A380", "AMS 2700", "Cr(VI)-free", "Ácido cítrico (verde)", "Ácido nítrico"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { tipo: "Pasivado de Acero Inoxidable", uso: "Farmacéutico · Alimentos · Médico", desc: "Elimina hierro libre y contaminantes de la superficie. Restaura y refuerza la capa de óxido de cromo natural. Proceso con ácido nítrico (ASTM A380) o ácido cítrico (más seguro y verde).", border: "border-l-steel-400" },
                { tipo: "Pasivado de Zinc Galvanizado", uso: "Automotriz · Manufactura general", desc: "Tropicalizado Cr-free sobre zinc. Mejora resistencia a corrosión blanca del zinc y a corrosión roja del acero. Colores: azul, negro, transparente, amarillo.", border: "border-l-navy-500" },
                { tipo: "Pasivado post-fosfatizado", uso: "Líneas de pintura · Pretratamiento", desc: "Sellador final de la línea de fosfatizado. Reduce la porosidad de la capa de fosfato. Mejora adherencia y resistencia del recubrimiento posterior.", border: "border-l-orange-400" },
              ].map((item) => (
                <div key={item.tipo} className={`bg-steel-50 border border-steel-200 border-l-4 ${item.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-steel-900 font-black text-sm uppercase">{item.tipo}</h4>
                    <span className="text-[10px] font-bold text-steel-400 uppercase tracking-wide text-right shrink-0">{item.uso}</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Necesitas validar tu proceso de pasivado?"
            body="Realizamos pruebas de niebla salina NSS ASTM B117, prueba de gota de sulfato de cobre y análisis de superficie. Resultados en 72–240 horas."
            linkLabel="Solicitar prueba NSS →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── PINTURA ELECTROSTÁTICA ───────────────────────────────── */}
      <section id="pintura-electrostatica" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Metales" title="Pintura Electrostática" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                La pintura electrostática aplica carga eléctrica a las partículas de pintura en polvo o a la pintura líquida para atraerlas a la pieza metálica conectada a tierra. El resultado es una cobertura uniforme, alta eficiencia de transferencia y un acabado de alta durabilidad que se cura en horno.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Trevigo suministra los pretratamientos químicos que garantizan la adhesión del recubrimiento: desengrasantes para líneas de pintura en polvo, fosfatos y selladores previos al e-coat. Un pretratamiento correcto puede duplicar la vida útil del recubrimiento.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Pintura en polvo", "E-coat", "Polvo termoendurecible", "Curado en horno 160–200°C"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { tipo: "Pintura en Polvo (Powder Coating)", uso: "Manufactura · Muebles · Estructural", desc: "Polvo termoendurecible aplicado electroestáticamente y curado en horno. Sin solventes (VOC = 0). Alta resistencia mecánica y química. Acabados epóxicos, poliéster o híbridos.", border: "border-l-orange-500" },
                { tipo: "E-coat (Electrodeposición)", uso: "Automotriz · Alto volumen", desc: "La pieza actúa como electrodo en un baño de pintura acuosa. Cobertura perfecta de geometrías complejas y cavidades internas. Base anticorrosiva por excelencia en automotriz.", border: "border-l-navy-500" },
                { tipo: "Pintura Líquida Electrostática", uso: "Líneas mixtas · Colores especiales", desc: "Mayor flexibilidad en acabados y colores. Compatible con piezas grandes o geometrías que no aceptan polvo. Requiere manejo de solventes y ventilación.", border: "border-l-steel-400" },
              ].map((item) => (
                <div key={item.tipo} className={`bg-white border border-steel-200 border-l-4 ${item.border} rounded-xl p-5`}>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h4 className="text-steel-900 font-black text-sm uppercase">{item.tipo}</h4>
                    <span className="text-[10px] font-bold text-steel-400 uppercase tracking-wide text-right shrink-0">{item.uso}</span>
                  </div>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* La importancia del pretratamiento */}
          <div className="bg-navy-950 rounded-xl p-6 mb-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🔬</div>
              <div>
                <h3 className="text-white font-black text-sm uppercase mb-2">El pretratamiento define la durabilidad del recubrimiento</h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-3">
                  Una pieza bien fosfatizada resiste 500+ horas en niebla salina. La misma pieza sin pretratamiento falla en menos de 48 horas. Trevigo suministra la química de pretratamiento y verifica la calidad del proceso antes del pintado.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Sin pretratamiento: < 48 h NSS", "Con fosfato de hierro: 200–300 h NSS", "Con fosfato de zinc: 500–1000 h NSS"].map((pt) => (
                    <span key={pt} className="text-orange-400 text-xs font-bold">{pt}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ServiceCTA
            title="¿Problemas de adhesión o corrosión en tu línea de pintura?"
            body="Auditamos tu línea de pretratamiento: análisis de baños, pH, temperatura, tiempos. Identificamos la causa raíz y proponemos corrección."
            linkLabel="Solicitar auditoría de línea →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRATAMIENTO DE AGUAS
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-navy-500 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-center text-sm font-bold uppercase tracking-widest opacity-80">
            Soluciones industriales integrales — Monterrey, N.L.
          </p>
        </div>
      </div>

      <section id="tratamiento-aguas" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="💧 Tratamiento de Aguas"
            title="Servicios de Tratamiento de Aguas Residuales Industriales"
            desc="Ingeniería, asesoría y mantenimiento especializado para plantas de tratamiento de aguas industriales y residuales. Cumplimiento NOM-001-SEMARNAT-2021."
          />
          {/* Quick nav pills */}
          <div className="flex flex-wrap gap-2 mb-14">
            {[
              { label: "Ingeniería y Asesoría", href: "#ingenieria-asesoria" },
              { label: "Mantenimiento", href: "#mantenimiento" },
              { label: "Prueba de Jarras", href: "#pruebas-jarras" },
              { label: "Optimización", href: "#optimizacion-procesos" },
            ].map((p) => (
              <a key={p.href} href={p.href}
                className="inline-flex items-center px-4 py-1.5 bg-steel-50 border border-steel-200 hover:border-navy-400 hover:bg-navy-50 text-steel-700 hover:text-navy-700 text-xs font-bold uppercase tracking-wide transition-all">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INGENIERÍA Y ASESORÍA ────────────────────────────────── */}
      <section id="ingenieria-asesoria" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Aguas" title="Ingeniería y Asesoría Técnica" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                Diseñamos y optimizamos sistemas de tratamiento fisicoquímico para aguas residuales industriales. Nuestro equipo de ingenieros analiza la caracterización del efluente, selecciona los productos químicos y dimensiona el sistema para cumplir con la normativa de descarga vigente.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Atendemos plantas de tratamiento de aguas en la industria automotriz, metalmecánica, alimentaria y de manufactura general. Entregamos memoria de cálculo, diagrama de flujo de proceso y protocolo de operación.
              </p>
              <div className="flex flex-wrap gap-2">
                {["NOM-001-SEMARNAT-2021", "NOM-002-SEMARNAT", "Diseño de sistemas PTAR", "Caracterización de efluentes"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "📋", title: "Caracterización del efluente", desc: "Análisis fisicoquímico completo: DBO, DQO, SST, metales pesados, pH, temperatura. Base para el diseño del sistema." },
                { icon: "🏗️", title: "Diseño del sistema de tratamiento", desc: "Selección de proceso (coagulación-floculación, neutralización, sedimentación). Dimensionamiento de tanques y dosificación." },
                { icon: "📐", title: "Supervisión de arranque", desc: "Acompañamiento en el arranque del sistema, ajuste de parámetros y capacitación al operador." },
                { icon: "📊", title: "Reporte de cumplimiento", desc: "Memoria técnica del sistema, protocolos de muestreo y reporte para presentar ante autoridad ambiental." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white border border-steel-200 rounded-xl p-5">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-steel-900 font-black text-sm uppercase mb-1">{item.title}</h4>
                    <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tu planta necesita sistema de tratamiento de aguas?"
            body="Hacemos la visita técnica y caracterización del efluente sin costo. En 5 días hábiles te entregamos una propuesta de sistema con estimado de inversión."
            linkLabel="Agendar visita de diagnóstico →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── MANTENIMIENTO ────────────────────────────────────────── */}
      <section id="mantenimiento" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Aguas" title="Mantenimiento de Plantas de Tratamiento" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                Una planta de tratamiento de aguas mal mantenida genera efluentes fuera de norma, multas ambientales y paros de línea. Trevigo ofrece contratos de mantenimiento preventivo y correctivo para sistemas fisicoquímicos con visitas programadas, análisis de agua y reposición de productos.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Contamos con técnicos especializados en el norte de México con respuesta en menos de 24 horas para emergencias.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { tipo: "Preventivo", icon: "🔧", items: ["Visitas programadas mensuales", "Análisis de efluente in-situ", "Ajuste de dosis de químicos", "Reporte de parámetros de operación", "Limpieza de sedimentadores"] },
                { tipo: "Correctivo", icon: "🚨", items: ["Respuesta < 24 horas", "Diagnóstico de falla", "Reparación de equipos de dosificación", "Ajuste emergente de proceso", "Reporte de causa raíz"] },
              ].map((item) => (
                <div key={item.tipo} className="bg-steel-50 border border-steel-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{item.icon}</span>
                    <h4 className="text-steel-900 font-black text-sm uppercase">Mantenimiento {item.tipo}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs text-steel-600">
                        <span className="text-navy-500 font-black mt-0.5">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tu planta de tratamiento opera sin contrato de mantenimiento?"
            body="Un efluente fuera de NOM-001 puede resultar en clausura. Cotizamos un contrato de mantenimiento preventivo mensual a un costo menor al de una multa ambiental."
            linkLabel="Cotizar contrato de mantenimiento →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── PRUEBA DE JARRAS ─────────────────────────────────────── */}
      <section id="pruebas-jarras" className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Aguas" title="Prueba de Jarras (Jar Test)" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                La prueba de jarras es el procedimiento de laboratorio estándar para determinar el coagulante y floculante más eficiente y su dosis óptima para tratar un efluente específico. Simula a pequeña escala el proceso de coagulación-floculación de tu planta de tratamiento.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Trevigo realiza Jar Test con muestra de tu efluente en nuestro laboratorio o en sitio. Te entregamos un reporte con el producto recomendado, dosis exacta, pH óptimo de operación y la turbiedad esperada del efluente tratado.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Sin costo con muestra de efluente", "Resultado en 48–72 h", "Reporte con dosis óptima", "Coagulantes y floculantes"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 bg-navy-50 border border-navy-200 text-navy-700 text-xs font-bold uppercase tracking-wide rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Proceso del Jar Test */}
            <div>
              <h3 className="text-steel-900 font-black text-sm uppercase mb-5">Cómo funciona el Jar Test</h3>
              <div className="space-y-3">
                {[
                  { n: "1", title: "Toma de muestra", desc: "Recolectas 5–10 L de tu efluente sin tratar y nos lo envías o lo tomamos en sitio." },
                  { n: "2", title: "Prueba de coagulación", desc: "Evaluamos distintos coagulantes (sulfato de aluminio, policloruro de aluminio, coagulante orgánico) a diferentes dosis y pH." },
                  { n: "3", title: "Prueba de floculación", desc: "Evaluamos floculantes y poliacrilamidas para maximizar el tamaño y densidad del floc formado." },
                  { n: "4", title: "Medición de resultados", desc: "Medimos turbiedad, SST, pH y velocidad de sedimentación. Determinamos la combinación óptima." },
                  { n: "5", title: "Reporte y recomendación", desc: "Entregamos reporte con producto, dosis, pH de operación y proyección de consumo mensual." },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-4 bg-white border border-steel-200 rounded-xl p-4">
                    <div className="w-7 h-7 bg-navy-500 text-white font-black text-xs rounded-full flex items-center justify-center shrink-0 mt-0.5">{step.n}</div>
                    <div>
                      <h4 className="text-steel-900 font-black text-xs uppercase mb-0.5">{step.title}</h4>
                      <p className="text-steel-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ServiceCTA
            title="Realiza el Jar Test de tu efluente sin costo"
            body="Envíanos una muestra de tu agua residual sin tratar. En 48–72 horas te entregamos el reporte con el producto y la dosis exacta para tu proceso."
            linkLabel="Solicitar Jar Test →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── OPTIMIZACIÓN DE PROCESOS ─────────────────────────────── */}
      <section id="optimizacion-procesos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Servicio · Tratamiento de Aguas" title="Optimización de Procesos Fisicoquímicos" accent="navy" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <p className="text-steel-600 text-sm leading-relaxed mb-4">
                Un sistema de tratamiento que funciona "más o menos" genera costos ocultos: exceso de químicos, lodo en exceso, efluente borderline que puede salir de norma con cualquier variación del proceso. La optimización del proceso fisicoquímico puede reducir el consumo de químicos hasta un 30% sin sacrificar calidad del efluente.
              </p>
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                Trevigo realiza auditorías técnicas del proceso, identifica desviaciones y propone ajustes de dosis, pH, tiempo de mezcla y secuencia de adición que mejoran la eficiencia global del sistema.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "📉", title: "Reducción de dosis de químicos", desc: "Optimizamos la dosificación para que uses exactamente lo necesario, sin excesos que eleven el costo." },
                { icon: "💧", title: "Mejora de calidad del efluente", desc: "Ajuste de pH, puntos de adición y agitación para maximizar la remoción de SST y DQO." },
                { icon: "🧱", title: "Reducción de generación de lodo", desc: "Una coagulación bien ajustada genera menos lodo, reduciendo el costo de disposición." },
                { icon: "📊", title: "Monitoreo y control de proceso", desc: "Implementamos indicadores de proceso simples para que el operador detecte desviaciones a tiempo." },
              ].map((item) => (
                <div key={item.title} className="bg-steel-50 border border-steel-200 rounded-xl p-5">
                  <span className="text-2xl block mb-3">{item.icon}</span>
                  <h4 className="text-steel-900 font-black text-xs uppercase mb-1.5">{item.title}</h4>
                  <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <ServiceCTA
            title="¿Tu planta de tratamiento gasta más de lo necesario en químicos?"
            body="Una auditoría de proceso puede reducir tu consumo de coagulante hasta un 30%. Realizamos la visita sin costo y presentamos un reporte de hallazgos con potencial de ahorro estimado."
            linkLabel="Agendar auditoría de proceso →"
            linkHref="/contacto"
          />
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Contáctanos</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Nuestro equipo de ingenieros visita tu planta sin costo, evalúa tu proceso y te propone la solución técnica más adecuada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Solicitar visita técnica
            </Link>
            <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors">
              {COMPANY.phone}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-steel-500 text-xs font-semibold">
            {["✓ Visita técnica sin costo", "✓ Propuesta personalizada", "✓ TDS y SDS incluidas", "✓ 35+ años de experiencia"].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
