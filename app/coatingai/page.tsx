import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import SurfaceAIROI from "@/components/SurfaceAIROI";

export const metadata: Metadata = {
  title: "coatingAI México: IA para Pintura en Polvo",
  description:
    "Somos distribuidor autorizado de coatingAI en México: el software de IA que optimiza tu línea de pintura en polvo. Ahorro mínimo de 10% de polvo, sin cambiar tu equipo. Demo en tu planta.",
  alternates: { canonical: `${COMPANY.url}/coatingai` },
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
    title: "Diagnóstico y Calibración",
    tagline: "Primero medir, luego optimizar",
    desc: "Todo arranca con una radiografía de tu línea: el módulo HealthCheck evalúa el estado real de la aplicación y las pistolas se calibran midiendo espesor de película con el Coatmaster Flex (Nordson). Funciona con cabinas automáticas de cualquier marca y con cualquier polvo — no hay que cambiar equipo ni integrarse al PLC de la línea.",
    specs: [
      "HealthCheck: diagnóstico del estado real de la línea",
      "Calibración de aplicación medida con Coatmaster Flex (Nordson)",
      "Compatible con cabinas de cualquier fabricante y cualquier polvo",
      "Sin integración con PLC: se implementa sin detener producción",
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
    tagline: "Película uniforme, menos sobre-aspersión",
    desc: "Aquí vive el ahorro: la IA ecualiza la salida de polvo entre pistolas y ajusta los parámetros de aplicación en ciclo cerrado para lograr un espesor de película uniforme con menos polvo. El resultado publicado por coatingAI: un mínimo de 10% de ahorro de polvo — y usuarios reportando entre 16 y 30%. En un caso documentado: 24% de ahorro con 61% de mejora en calidad.",
    specs: [
      "Ecualización de salida de polvo entre pistolas",
      "Optimización en ciclo cerrado de los parámetros de aplicación",
      "Espesor de película más uniforme = menos retrabajo",
      "Ahorro mínimo de 10% de polvo (usuarios reportan 16-30%)",
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
    title: "Mejora Continua",
    tagline: "La línea no se vuelve a desajustar sola",
    desc: "Una línea optimizada un martes se desoptimiza sola para diciembre: cambian los polvos, las piezas, el clima y los operadores. Por eso el sistema incluye afinación continua y mantenimiento predictivo, con visitas de servicio breves que mantienen la optimización en el tiempo — de eso nos encargamos nosotros como tu distribuidor local.",
    specs: [
      "Afinación continua conforme cambian piezas y polvos",
      "Mantenimiento predictivo del equipo de aplicación",
      "Visitas de servicio periódicas breves (del orden de minutos por cabina)",
      "Acompañamiento local Trevigo en español",
    ],
  },
];

const METRICS = [
  { value: "≥10%",   label: "Ahorro mínimo de polvo publicado" },
  { value: "16-30%", label: "Ahorro que reportan los usuarios" },
  { value: "+61%",   label: "Mejora de calidad (caso documentado)" },
  { value: "Días",   label: "Orden de magnitud del retorno" },
];

export default function CoatingAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "coatingAI",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Powder Coating Process Optimization",
            operatingSystem: "Web",
            description:
              "Software de inteligencia artificial que optimiza líneas de pintura en polvo: calibración de aplicación, ecualización de pistolas y optimización en ciclo cerrado. Ahorro mínimo de 10% de polvo.",
            url: `${COMPANY.url}/coatingai`,
            provider: {
              "@type": "Organization",
              name: "coatingAI",
              url: "https://mycoatingai.com",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: { "@type": "Country", name: "México" },
              seller: {
                "@type": "Organization",
                name: COMPANY.legalName,
                url: COMPANY.url,
              },
            },
            featureList: [
              "Diagnóstico HealthCheck de la línea",
              "Calibración de aplicación con Coatmaster Flex",
              "Ecualización de salida de polvo entre pistolas",
              "Optimización en ciclo cerrado",
              "Mantenimiento predictivo",
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
              { "@type": "ListItem", position: 2, name: "coatingAI", item: `${COMPANY.url}/coatingai` },
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
                  coatingAI · Distribuidor Autorizado en México
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-navy-950 uppercase leading-[0.9] mb-6">
                La IA que le baja el{" "}
                <span className="text-emerald-600">consumo de polvo</span>{" "}
                a tu línea de pintura
              </h1>

              <div className="w-16 h-1 bg-emerald-500 mb-7" />

              <p className="text-steel-600 text-lg leading-relaxed mb-10 max-w-xl">
                coatingAI es el software suizo que optimiza la aplicación de
                pintura en polvo con inteligencia artificial:{" "}
                <strong className="text-navy-950">mínimo 10% de ahorro de polvo</strong>{" "}
                según cifras publicadas por el fabricante — y usuarios que reportan{" "}
                <strong className="text-emerald-600">entre 16 y 30%</strong> —
                sin cambiar tus cabinas ni tu equipo. En Trevigo lo traemos a
                México y lo implementamos contigo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
                >
                  Agendar demo en mi línea
                </Link>
                <a
                  href="#roi"
                  className="inline-flex items-center justify-center gap-2 border-2 border-steel-300 hover:border-navy-500 text-steel-700 hover:text-navy-700 px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Calcular mi ROI →
                </a>
              </div>

              <p className="text-steel-400 text-xs mt-6 uppercase tracking-widest">
                Tecnología suiza · Alianza con{" "}
                <span className="text-steel-500">AkzoNobel Powder Coatings</span>
              </p>
            </div>

            {/* Terminal widget — ilustrativo, stays dark intentionally */}
            <div className="relative">
              <div className="bg-[#0a0f1a] border border-steel-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-steel-500 text-[11px] font-mono ml-2">
                    coatingai — optimización de línea
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-blue-400 text-[10px] font-mono">VISTA ILUSTRATIVA</span>
                  </span>
                </div>

                <div className="p-6 font-mono text-xs space-y-3">
                  {[
                    { time: "14:32:01", module: "HEALTH",   status: "OK",     value: "Línea evaluada: 4 pistolas activas" },
                    { time: "14:32:01", module: "CALIBR",   status: "OK",     value: "Espesor medido: 72 µm | objetivo: 70 µm" },
                    { time: "14:32:02", module: "EQUALIZ",  status: "AJUSTE", value: "Pistola 3 sobre-aplicando → nivelando salida" },
                    { time: "14:32:03", module: "OPTIMIZ",  status: "OK",     value: "Parámetros de aplicación actualizados" },
                    { time: "14:32:04", module: "PELÍCULA", status: "OK",     value: "Desviación de espesor a la baja" },
                    { time: "14:32:05", module: "CONSUMO",  status: "OK",     value: "Polvo por pieza: tendencia −12% esta semana" },
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
                    { label: "Ahorro mínimo publicado", value: "10%" },
                    { label: "Reportado por usuarios",  value: "16-30%" },
                    { label: "Cambio de equipo",        value: "Cero" },
                  ].map((m) => (
                    <div key={m.label} className="px-4 py-3 text-center">
                      <p className="text-emerald-400 font-black text-base tabular-nums">{m.value}</p>
                      <p className="text-steel-600 text-[9px] uppercase tracking-wide mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white rounded-xl px-4 py-2.5 shadow-lg">
                <p className="font-black text-xs uppercase tracking-wide">Sin cambiar equipo</p>
                <p className="text-[10px] font-semibold opacity-80">Cualquier cabina, cualquier polvo</p>
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
            <p className="text-steel-400 text-[11px] text-center pb-4">
              Cifras publicadas por coatingAI y prensa especializada (Products
              Finishing). El resultado en tu línea se valida midiendo — para eso
              es la demo.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROBLEMA ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-steel-400 text-xs font-black uppercase tracking-[0.2em] mb-3">El problema real</p>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-950 uppercase leading-tight">
              El &quot;ojo del maestro pintor&quot; ya no alcanza
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
                title: "Desperdicio silencioso de polvo",
                desc: "La sobre-aspersión y el espesor de más consumen polvo todos los días sin aparecer en ningún reporte. Como nadie lo mide pieza por pieza, se asume como parte normal del proceso.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
                title: "Rechazo en el cliente, no en la línea",
                desc: "Las fallas de espesor y cobertura se detectan en el cliente final, o en la auditoría del OEM. El costo no es el polvo: es la pieza completa más la relación comercial.",
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
              ¿Cuánto polvo se te está yendo al aire?
            </h2>
            <p className="text-steel-500 text-base leading-relaxed">
              Mueve los controles con los datos reales de tu planta. La
              estimación usa el ahorro mínimo publicado (10%) — el escenario
              conservador, no el optimista.
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
              Cómo trabaja
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
              Las 3 etapas de coatingAI
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
                        Etapa {pillar.number}
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

      {/* ─── POR QUÉ CON TREVIGO ─────────────────────────────────────── */}
      <section className="bg-steel-50 py-24 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 rounded-full px-4 py-2 mb-8">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-blue-700 text-[11px] font-black uppercase tracking-widest">
                  Distribuidor Autorizado · México
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
                coatingAI en México,{" "}
                <span className="text-blue-600">implementado por Trevigo</span>
              </h2>
              <div className="w-12 h-1 bg-blue-500 mb-7" />

              <p className="text-steel-600 text-base leading-relaxed mb-6">
                Como distribuidor autorizado, el software cuesta lo mismo que
                con el fabricante. Lo que agregamos es todo lo demás:{" "}
                <strong className="text-navy-950">
                  llevamos 35 años dentro de líneas de acabado como la tuya
                </strong>
                , del lado del desengrase, el fosfatizado y el pretratamiento.
              </p>
              <p className="text-steel-500 text-sm leading-relaxed mb-8">
                La pintura en polvo falla por la aplicación o falla por el
                pretratamiento — y quien te acompaña conviene que entienda los
                dos. Nosotros optimizamos la línea completa, no solo la cabina.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Mismo precio que directo", desc: "Sin sobreprecio de intermediario: la distribución autorizada no te cuesta extra." },
                  { title: "Vemos la línea completa",   desc: "Pretratamiento químico + aplicación: diagnosticamos las dos causas de falla, no una." },
                  { title: "Soporte local en español",  desc: "Implementación y seguimiento desde Monterrey, en tu planta y en tu idioma." },
                  { title: "Tecnología con respaldo",   desc: "coatingAI es suizo y tiene alianza con AkzoNobel Powder Coatings." },
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

            {/* Implementation steps — stays dark */}
            <div>
              <div className="bg-[#0a0f1a] border border-steel-700 rounded-2xl p-8 shadow-xl">
                <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-6">
                  Cómo se implementa
                </p>

                <div className="space-y-4">
                  {[
                    { step: "1", title: "Demo y diagnóstico", desc: "Evaluamos tu línea con datos reales: HealthCheck del estado actual de la aplicación.", color: "border-emerald-500/30 bg-emerald-500/5", accent: "text-emerald-400" },
                    { step: "2", title: "Calibración medida", desc: "Las pistolas se calibran midiendo espesor de película con Coatmaster Flex. Sin tocar tu PLC.", color: "border-blue-500/30 bg-blue-500/5", accent: "text-blue-400" },
                    { step: "3", title: "Optimización con IA", desc: "El sistema ecualiza pistolas y ajusta parámetros en ciclo cerrado. Aquí empieza el ahorro.", color: "border-emerald-500/30 bg-emerald-500/5", accent: "text-emerald-400" },
                    { step: "4", title: "Seguimiento continuo", desc: "Visitas de servicio breves mantienen la optimización conforme cambian piezas, polvos y clima.", color: "border-orange-500/30 bg-orange-500/5", accent: "text-orange-400" },
                  ].map((s) => (
                    <div key={s.step} className={`border ${s.color} rounded-xl p-5`}>
                      <div className="flex items-start gap-4">
                        <span className={`${s.accent} font-black text-2xl font-mono shrink-0`}>{s.step}</span>
                        <div>
                          <p className="text-white font-black text-sm uppercase mb-1">{s.title}</p>
                          <p className="text-steel-400 text-xs leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-steel-600 text-[10px] uppercase tracking-widest mt-6 text-center">
                  Compatible con cualquier cabina automática y cualquier polvo
                </p>
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
              Disponible para plantas en todo México
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            El polvo que hoy se va al aire es{" "}
            <span className="text-emerald-400">margen que ya pagaste</span>
          </h2>
          <p className="text-steel-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            La demo es un diagnóstico de tu línea con datos reales, sin
            compromiso. Si los números no salen en tu caso, te lo decimos igual
            de claro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 font-black text-base uppercase tracking-wide transition-colors"
            >
              Agendar demo en mi línea
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-10 py-5 font-bold text-base uppercase tracking-wide transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>

          <p className="text-steel-600 text-xs uppercase tracking-widest">
            Distribuidor autorizado coatingAI · Mismo precio que directo · Acompañamiento técnico Trevigo
          </p>
        </div>
      </section>
    </>
  );
}
