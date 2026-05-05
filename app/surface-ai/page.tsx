import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import SurfaceAIROI from "@/components/SurfaceAIROI";

export const metadata: Metadata = {
  title: "SurfaceAI: IA para Líneas de Acabado",
  description:
    "SurfaceAI integra IA en tiempo real a sus tanques químicos y cabinas de pintura en polvo. Cero defectos, 15-20% de ahorro en insumos, control de titulación y curado predictivo. Para manufactura en Monterrey y LATAM.",
  alternates: { canonical: `${COMPANY.url}/surface-ai` },
};

const PILLARS = [
  {
    number: "01",
    color: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Pre-tratamiento Inteligente",
    tagline: "Sus baños químicos, bajo control 24/7",
    desc: "SurfaceAI monitorea en tiempo real la concentración, pH y temperatura de cada etapa de pre-tratamiento (fosfatado, desengrasado, enjuagues), usando los productos Trevigo como base de calibración. Un modelo predictivo detecta desviaciones de titulación hasta 40 minutos antes de que afecten la adherencia, eliminando el principal origen de rechazo en línea.",
    specs: [
      "Monitoreo continuo de titulación (ácido libre / ácido total)",
      "Predicción de falla de adherencia antes de pintar",
      "Dosificación automática de correctivos Trevigo",
      "Alertas por turno con trazabilidad de lote",
    ],
  },
  {
    number: "02",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Optimización de Aplicación",
    tagline: "Electrostática de precisión, sin ojo humano",
    desc: "La humedad relativa, la geometría de la pieza y la velocidad de la cadena determinan la eficiencia de transferencia del polvo. SurfaceAI ajusta automáticamente los parámetros electrostáticos (kV / µA) de cada pistola en función de los sensores ambientales y la geometría de la pieza. El resultado: fijación uniforme sin depender de la experiencia del operador.",
    specs: [
      "Ajuste automático de kV y µA por pieza y ambiente",
      "Reducción de polvo en exceso (over-spray) hasta 12%",
      "Compatible con cabinas de cualquier fabricante",
      "Detección de piezas con geometría compleja (Faraday Cage)",
    ],
  },
  {
    number: "03",
    color: "orange",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Curado Predictivo",
    tagline: "El horno sabe lo que necesita cada lote",
    desc: "El mayor desperdicio energético de una línea de polvo es hornear todas las piezas al mismo perfil de tiempo-temperatura, ignorando la masa térmica real de cada carga. SurfaceAI calcula el perfil de curado óptimo por lote, considerando peso, espesor de recubrimiento y temperatura ambiente, reduciendo hasta un 25% el consumo de gas y electricidad.",
    specs: [
      "Cálculo de masa térmica en tiempo real",
      "Perfil de curado dinámico por geometría y carga",
      "Ahorro de hasta 25% en gas/electricidad del horno",
      "Registro de perfil de temperatura por pieza (trazabilidad Tier 1)",
    ],
  },
];

const METRICS = [
  { value: "12%",  label: "Mejora en transferencia de polvo" },
  { value: "−60%", label: "Reducción de retrabajo y rechazo" },
  { value: "25%",  label: "Ahorro energético en horno de curado" },
  { value: "<6m",  label: "Recuperación de inversión promedio" },
];

export default function SurfaceAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SurfaceAI",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Industrial Process Optimization",
            operatingSystem: "Web",
            description:
              "SurfaceAI integra inteligencia artificial en tiempo real a tanques químicos y cabinas de pintura en polvo. Cero defectos, 15-20% de ahorro en insumos, control de titulación y curado predictivo.",
            url: `${COMPANY.url}/surface-ai`,
            provider: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: COMPANY.url,
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: { "@type": "Country", name: "México" },
              seller: {
                "@type": "Organization",
                name: COMPANY.legalName,
              },
            },
            featureList: [
              "Control de titulación en tiempo real",
              "Curado predictivo en cabinas de pintura",
              "Detección de defectos con visión computacional",
              "Integración con tanques químicos existentes",
              "Reducción 15-20% en consumo de insumos",
            ],
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
              { "@type": "ListItem", position: 2, name: "SurfaceAI", item: `${COMPANY.url}/surface-ai` },
            ],
          }),
        }}
      />
      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-white pt-[100px] border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-[11px] font-black uppercase tracking-widest">
                  SurfaceAI · Tecnología Industrial
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-navy-950 uppercase leading-[0.9] mb-6">
                Digitaliza tu{" "}
                <span className="text-emerald-600">línea de acabado.</span>{" "}
                Produce más. Desperdicia menos.
              </h1>

              <div className="w-16 h-1 bg-emerald-500 mb-7" />

              <p className="text-steel-600 text-lg leading-relaxed mb-10 max-w-xl">
                SurfaceAI conecta inteligencia artificial a sus tanques químicos
                y cabinas de pintura en polvo,{" "}
                <strong className="text-navy-950">en tiempo real, dentro de su planta</strong>.
                Cero defectos. Ahorro del{" "}
                <strong className="text-emerald-600">15–20% en insumos</strong>.
                Sin depender de la nube.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
                >
                  Agendar Auditoría de Eficiencia Digital
                </Link>
                <a
                  href="#roi"
                  className="inline-flex items-center justify-center gap-2 border-2 border-steel-300 hover:border-navy-500 text-steel-700 hover:text-navy-700 px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Calcular mi ROI →
                </a>
              </div>

              <p className="text-steel-400 text-xs mt-6 uppercase tracking-widest">
                Diseñado para proveedores de{" "}
                <span className="text-steel-500">Tesla · BMW · John Deere</span>{" "}
                en LATAM
              </p>
            </div>

            {/* Terminal widget — stays dark intentionally */}
            <div className="relative">
              <div className="bg-[#0a0f1a] border border-steel-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-steel-500 text-[11px] font-mono ml-2">
                    surfaceai — monitor de línea
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-mono">EN VIVO</span>
                  </span>
                </div>

                <div className="p-6 font-mono text-xs space-y-3">
                  {[
                    { time: "14:32:01", module: "FOSFATO",  status: "OK",     value: "Ácido libre: 3.2 pts | Temp: 52.1°C" },
                    { time: "14:32:01", module: "CABINA-1", status: "OK",     value: "kV: 78 | µA: 42 | Transf: 68.4%" },
                    { time: "14:32:02", module: "HORNO",    status: "AJUSTE", value: "Masa térmica alta. Perfil +4 min" },
                    { time: "14:32:03", module: "TITULAC",  status: "ALERTA", value: "Ácido total: 28.1 pts → Dosificando" },
                    { time: "14:32:04", module: "CABINA-2", status: "OK",     value: "kV: 72 | µA: 38 | Transf: 71.2%" },
                    { time: "14:32:05", module: "RECHAZO",  status: "OK",     value: "Piezas OK: 147/147 | Retrabajo: 0" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-steel-700 shrink-0">{row.time}</span>
                      <span className="text-blue-400 w-20 shrink-0">[{row.module}]</span>
                      <span className={`w-14 shrink-0 font-black ${
                        row.status === "OK"     ? "text-emerald-400" :
                        row.status === "ALERTA" ? "text-yellow-400"  : "text-blue-400"
                      }`}>{row.status}</span>
                      <span className="text-steel-400">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5">
                  {[
                    { label: "Efic. transferencia", value: "71.2%" },
                    { label: "Consumo polvo/hr",    value: "−11.8%" },
                    { label: "Piezas en cola",      value: "312" },
                  ].map((m) => (
                    <div key={m.label} className="px-4 py-3 text-center">
                      <p className="text-emerald-400 font-black text-base tabular-nums">{m.value}</p>
                      <p className="text-steel-600 text-[9px] uppercase tracking-wide mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white rounded-xl px-4 py-2.5 shadow-lg">
                <p className="font-black text-xs uppercase tracking-wide">Local-First</p>
                <p className="text-[10px] font-semibold opacity-80">Sus datos no salen de su planta</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics band */}
        <div className="border-t border-steel-200 bg-steel-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-steel-200">
              {METRICS.map((m) => (
                <div key={m.label} className="px-8 py-7 text-center">
                  <p className="text-3xl font-black tabular-nums mb-1 text-emerald-600">{m.value}</p>
                  <p className="text-steel-500 text-xs leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEMA ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-steel-400 text-xs font-black uppercase tracking-[0.2em] mb-3">El problema real</p>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-950 uppercase leading-tight">
              El &quot;ojo humano&quot; ya no alcanza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Maestros pintores en extinción",
                desc: "El conocimiento acumulado en décadas de experiencia se jubila sin transferirse. Las nuevas generaciones de operadores no pueden replicar la intuición que evita el retrabajo.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                ),
                title: "Desperdicio silencioso de insumos",
                desc: "Sin control preciso de titulación y parámetros electrostáticos, el sobre-spray y los baños fuera de rango consumen entre 15–25% más polvo y químico del necesario.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                title: "Rechazo en el cliente, no en la línea",
                desc: "Las fallas de adherencia, cráter o espesor insuficiente se detectan en el cliente final, o en la auditoría del OEM. El costo no es el polvo: es la pieza completa más la relación comercial.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-steel-200 rounded-2xl p-7 hover:shadow-md hover:border-steel-300 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-steel-50 border border-steel-200 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-navy-950 font-black text-base uppercase mb-3">{item.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROI CALCULATOR ──────────────────────────────────────────── */}
      <section id="roi" className="bg-steel-50 py-24 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-emerald-600 text-xs font-black uppercase tracking-[0.2em] mb-3">
              Calculadora de ROI
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
              ¿Cuánto le cuesta no tenerlo?
            </h2>
            <p className="text-steel-500 text-base leading-relaxed">
              Mueva los controles con los datos reales de su planta y vea el
              impacto económico de implementar SurfaceAI.
            </p>
          </div>
          <SurfaceAIROI />
        </div>
      </section>

      {/* ─── 3 PILARES ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-steel-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
              Arquitectura técnica
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
              Los 3 pilares de SurfaceAI
            </h2>
            <div className="w-12 h-1 bg-emerald-500" />
          </div>

          <div className="space-y-6">
            {PILLARS.map((pillar) => {
              const colorMap: Record<string, { border: string; headerBg: string; iconBg: string; iconBorder: string; iconText: string; tag: string; num: string }> = {
                emerald: {
                  border:     "border-emerald-200",
                  headerBg:   "bg-emerald-50",
                  iconBg:     "bg-emerald-100",
                  iconBorder: "border-emerald-200",
                  iconText:   "text-emerald-700",
                  tag:        "text-emerald-600",
                  num:        "text-emerald-100",
                },
                blue: {
                  border:     "border-blue-200",
                  headerBg:   "bg-blue-50",
                  iconBg:     "bg-blue-100",
                  iconBorder: "border-blue-200",
                  iconText:   "text-blue-700",
                  tag:        "text-blue-600",
                  num:        "text-blue-100",
                },
                orange: {
                  border:     "border-orange-200",
                  headerBg:   "bg-orange-50",
                  iconBg:     "bg-orange-100",
                  iconBorder: "border-orange-200",
                  iconText:   "text-orange-700",
                  tag:        "text-orange-600",
                  num:        "text-orange-100",
                },
              };
              const c = colorMap[pillar.color];

              return (
                <div key={pillar.number} className={`border ${c.border} rounded-2xl overflow-hidden`}>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
                    {/* Left */}
                    <div className={`${c.headerBg} p-8 lg:p-10 relative overflow-hidden`}>
                      <span className={`absolute -top-4 -right-2 text-[8rem] font-black ${c.num} leading-none select-none`}>
                        {pillar.number}
                      </span>
                      <div className={`w-12 h-12 rounded-xl ${c.iconBg} border ${c.iconBorder} flex items-center justify-center mb-6 relative z-10 ${c.iconText}`}>
                        {pillar.icon}
                      </div>
                      <p className={`${c.tag} text-[10px] font-black uppercase tracking-widest mb-2 relative z-10`}>
                        Módulo {pillar.number}
                      </p>
                      <h3 className="text-navy-950 font-black text-xl sm:text-2xl uppercase leading-tight mb-2 relative z-10">
                        {pillar.title}
                      </h3>
                      <p className={`${c.tag} text-sm font-semibold relative z-10`}>
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="bg-white p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-steel-100">
                      <p className="text-steel-600 text-sm leading-relaxed mb-8">
                        {pillar.desc}
                      </p>
                      <div className="space-y-3">
                        {pillar.specs.map((spec) => (
                          <div key={spec} className="flex items-start gap-3">
                            <svg className={`w-4 h-4 mt-0.5 shrink-0 ${c.iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-steel-600 text-sm">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SOBERANÍA DE DATOS ──────────────────────────────────────── */}
      <section className="bg-steel-50 py-24 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 rounded-full px-4 py-2 mb-8">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-blue-700 text-[11px] font-black uppercase tracking-widest">
                  Local-First · Soberanía de Datos
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
                Sus recetas de proceso son{" "}
                <span className="text-blue-600">suyas. No de la nube.</span>
              </h2>
              <div className="w-12 h-1 bg-blue-500 mb-7" />

              <p className="text-steel-600 text-base leading-relaxed mb-6">
                SurfaceAI corre en un servidor industrial dentro de su planta.
                Los parámetros de titulación, los perfiles de curado y las
                configuraciones electrostáticas.{" "}
                <strong className="text-navy-950">Su "know-how" acumulado en años</strong>{" "}
                nunca sale de su red local.
              </p>
              <p className="text-steel-500 text-sm leading-relaxed mb-8">
                No dependemos de conexión a internet para operar. No hay
                suscripciones que interrumpan su producción. No hay cláusulas
                que cedan sus datos a terceros. Es su activo digital y permanece
                bajo su control.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Operación offline",    desc: "Funciona sin internet. Su producción no depende de nuestra nube." },
                  { title: "Datos encriptados",    desc: "AES-256 en reposo y en tránsito dentro de su red." },
                  { title: "Propiedad del cliente",desc: "Usted puede exportar, auditar y migrar sus datos en cualquier momento." },
                  { title: "Sin vendor lock-in",   desc: "El sistema es interoperable con sus equipos y ERP existente." },
                ].map((item) => (
                  <div key={item.title} className="bg-white border border-steel-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <h4 className="text-navy-950 font-black text-sm uppercase">{item.title}</h4>
                    </div>
                    <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture diagram — stays dark */}
            <div>
              <div className="bg-[#0a0f1a] border border-steel-700 rounded-2xl p-8 shadow-xl">
                <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-6">
                  Arquitectura Local-First
                </p>

                <div className="border border-blue-500/30 rounded-xl p-6 bg-blue-500/5 mb-4">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    Su planta (red local)
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Sensores de pre-tratamiento", color: "bg-emerald-500" },
                      { label: "Cabinas electrostáticas",     color: "bg-emerald-500" },
                      { label: "Horno de curado",             color: "bg-emerald-500" },
                      { label: "Servidor SurfaceAI",          color: "bg-blue-500" },
                      { label: "ERP / MES local",             color: "bg-steel-500" },
                    ].map((node) => (
                      <div key={node.label} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${node.color} shrink-0`} />
                        <span className="text-steel-300 text-xs">{node.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-red-500/30" />
                  <div className="flex items-center gap-2 border border-red-500/30 bg-red-500/5 rounded-full px-3 py-1">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-400 text-[10px] font-black uppercase tracking-wide">
                      Sus datos no cruzan este límite
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-red-500/30" />
                </div>

                <div className="border border-white/5 rounded-xl p-4 bg-white/[0.01] opacity-40">
                  <p className="text-steel-600 text-[10px] font-black uppercase tracking-widest mb-2">
                    Nube pública (no accede a sus datos)
                  </p>
                  <div className="flex gap-3">
                    {["AWS", "Azure", "GCP"].map((c) => (
                      <span key={c} className="text-steel-700 text-[11px] border border-white/5 rounded px-2 py-1">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[11px] font-black uppercase tracking-widest">
              Disponible para plantas en Monterrey y LATAM
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Transforme su costo variable en una{" "}
            <span className="text-emerald-400">ventaja competitiva</span>
          </h2>
          <p className="text-steel-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Una auditoría de eficiencia digital es un diagnóstico sin compromiso
            de su línea de acabado. Identificamos oportunidades de ahorro reales
            antes de cualquier inversión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 font-black text-base uppercase tracking-wide transition-colors"
            >
              Agendar Auditoría de Eficiencia Digital
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-10 py-5 font-bold text-base uppercase tracking-wide transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>

          <p className="text-steel-600 text-xs uppercase tracking-widest">
            Sin contrato de permanencia · Implementación en 2–4 semanas · Soporte técnico Trevigo incluido
          </p>
        </div>
      </section>
    </>
  );
}
