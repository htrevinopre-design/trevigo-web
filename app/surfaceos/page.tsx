import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "SurfaceOS: Bitácora Digital de Proceso Químico",
  description:
    "SurfaceOS digitaliza la bitácora de tus líneas de proceso químico — pretratamiento, galvanizado, decapado, pasivado: captura más rápida que el papel, evidencia ISO 9001 por cláusula y AMEF vivo.",
  alternates: { canonical: `${COMPANY.url}/surfaceos` },
};

const USERS = [
  {
    number: "01",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "El Operador de Línea",
    tagline: "Captura más rápida que el papel, o no sirve",
    desc: "El operador registra concentración, temperatura, presión y conductividad seis veces al día. SurfaceOS está diseñado alrededor de un solo criterio: que capturar tome menos tiempo que la hoja junto al tanque. Campos precargados con las especificaciones de la línea, valores fuera de rango marcados al instante y la posibilidad de registrar qué se hizo cuando algo se salió — eso que el papel nunca capturó.",
    specs: [
      "Captura guiada con las especificaciones reales de cada línea",
      "Valores fuera de rango marcados en el momento",
      "Registro de acciones tomadas, no solo de lecturas",
      "Funciona en una tablet: sin obra, sin sensores, sin capex",
    ],
  },
  {
    number: "02",
    color: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "El Gerente de Calidad",
    tagline: "La auditoría deja de armarse a mano",
    desc: "ISO 9001 obliga a conservar los registros de seguimiento y medición (9.1.1), la evidencia de salidas no conformes (8.7.2) y los resultados de acción correctiva (10.2). Hoy eso vive en carpetas y se arma la semana antes de la auditoría. SurfaceOS genera el paquete de evidencia ordenado por cláusula, y su bandeja muestra las desviaciones con su tendencia — no solo si un valor está fuera de rango hoy, sino que la conductividad viene subiendo desde hace tres turnos.",
    specs: [
      "Paquete de evidencia ISO 9001 ordenado por cláusula (9.1.1, 8.7.2, 10.2)",
      "Bandeja de desviaciones con tendencia por turno",
      "Trazabilidad de qué se hizo, quién lo hizo y si funcionó",
      "Historial completo por línea, consultable en segundos",
    ],
  },
  {
    number: "03",
    color: "orange",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "El AMEF Vivo",
    tagline: "El conocimiento deja de irse con la gente",
    desc: "Lo que se hizo cuando un baño se salió de rango, por qué se hizo y si sirvió — hoy no queda en ningún lado, y se va cuando se va el operador que lo sabía. El AMEF vivo de SurfaceOS convierte cada intervención registrada en memoria de proceso: con el tiempo, la línea acumula su propio historial de qué funciona, y las propuestas de revisión al AMEF salen de datos reales de la operación, firmadas por quien las valida.",
    specs: [
      "Cada intervención registrada alimenta el AMEF de la línea",
      "Propuestas de revisión con base en la operación real, no en juntas",
      "Firma y validación de cambios por el responsable de calidad",
      "El técnico Trevigo consulta el historial antes de entrar a planta",
    ],
  },
];

export default function SurfaceOSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "SurfaceOS",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Process Logging and Quality Compliance",
            operatingSystem: "Web",
            description:
              "Bitácora digital de líneas de proceso químico (pretratamiento, galvanizado, decapado, pasivado): captura de operador, evidencia ISO 9001 por cláusula, tendencias por turno y AMEF vivo.",
            url: `${COMPANY.url}/surfaceos`,
            provider: {
              "@type": "Organization",
              name: COMPANY.legalName,
              url: COMPANY.url,
            },
            featureList: [
              "Captura de bitácora más rápida que el papel",
              "Evidencia ISO 9001 ordenada por cláusula",
              "Tendencias de parámetros por turno",
              "AMEF vivo con propuestas de revisión firmadas",
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
              { "@type": "ListItem", position: 2, name: "Tecnología", item: `${COMPANY.url}/tecnologia` },
              { "@type": "ListItem", position: 3, name: "SurfaceOS", item: `${COMPANY.url}/surfaceos` },
            ],
          }),
        }}
      />

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-white pt-[100px] border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-700 text-[11px] font-black uppercase tracking-widest">
                  SurfaceOS · Producto Trevigo
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-navy-950 uppercase leading-[0.9] mb-6">
                La memoria de tus{" "}
                <span className="text-blue-600">líneas de proceso</span>
              </h1>

              <div className="w-16 h-1 bg-blue-500 mb-7" />

              <p className="text-steel-600 text-lg leading-relaxed mb-10 max-w-xl">
                SurfaceOS es la bitácora digital de tus líneas de proceso
                químico: pretratamiento, galvanizado, decapado, pasivado. Es la
                hoja junto al tanque (concentración, temperatura, presión,
                conductividad) más lo que esa hoja nunca capturó:{" "}
                <strong className="text-navy-950">
                  qué se hizo cuando algo se salió, y si funcionó
                </strong>
                . Sin sensores, sin obra: se implementa con una tablet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
                >
                  Agendar demo guiada
                </Link>
                <Link
                  href="/tecnologia"
                  className="inline-flex items-center justify-center gap-2 border-2 border-steel-300 hover:border-navy-500 text-steel-700 hover:text-navy-700 px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Ver toda la tecnología →
                </Link>
              </div>
            </div>

            {/* Fact chips */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4-6", label: "semanas a primera línea operando" },
                { value: "0", label: "sensores u obra para arrancar" },
                { value: "ISO 9001", label: "evidencia por cláusula: 9.1.1 · 8.7.2 · 10.2" },
                { value: "6×/día", label: "diseñado para el operador que captura en piso" },
              ].map((m) => (
                <div key={m.label} className="bg-steel-50 border border-steel-200 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-black tabular-nums mb-2 text-blue-600">{m.value}</p>
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
              La hoja junto al tanque ya no alcanza
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "La auditoría se arma a mano",
                desc: "Los registros que exige ISO 9001 viven en carpetas, y el paquete de evidencia se arma la semana antes de la auditoría. Cada año, otra vez.",
              },
              {
                title: "La desviación se detecta tarde",
                desc: "El papel dice si un valor está fuera de rango hoy. No dice que la conductividad viene subiendo desde hace tres turnos y cruza el límite el jueves.",
              },
              {
                title: "El conocimiento se va con la gente",
                desc: "Qué se hizo cuando el baño se salió, por qué y si sirvió — no queda registrado en ningún lado. Cuando el operador que lo sabía se va, se va con él.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-steel-200 rounded-2xl p-7 hover:shadow-md hover:border-steel-300 transition-all"
              >
                <h3 className="text-navy-950 font-black text-base uppercase mb-3">{item.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3 USUARIOS ──────────────────────────────────────────────── */}
      <section className="bg-steel-50 py-24 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16">
            <p className="text-steel-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
              Cómo funciona
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
              Un sistema, tres usuarios
            </h2>
            <div className="w-12 h-1 bg-blue-500" />
          </div>

          <div className="space-y-6">
            {USERS.map((pillar) => {
              const colorMap: Record<string, { border: string; headerBg: string; iconBg: string; iconBorder: string; iconText: string; tag: string; num: string }> = {
                blue: {
                  border: "border-blue-200", headerBg: "bg-blue-50", iconBg: "bg-blue-100",
                  iconBorder: "border-blue-200", iconText: "text-blue-700", tag: "text-blue-600", num: "text-blue-100",
                },
                emerald: {
                  border: "border-emerald-200", headerBg: "bg-emerald-50", iconBg: "bg-emerald-100",
                  iconBorder: "border-emerald-200", iconText: "text-emerald-700", tag: "text-emerald-600", num: "text-emerald-100",
                },
                orange: {
                  border: "border-orange-200", headerBg: "bg-orange-50", iconBg: "bg-orange-100",
                  iconBorder: "border-orange-200", iconText: "text-orange-700", tag: "text-orange-600", num: "text-orange-100",
                },
              };
              const c = colorMap[pillar.color];

              return (
                <div key={pillar.number} className={`border ${c.border} rounded-2xl overflow-hidden`}>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
                    <div className={`${c.headerBg} p-8 lg:p-10 relative overflow-hidden`}>
                      <span className={`absolute -top-4 -right-2 text-[8rem] font-black ${c.num} leading-none select-none`}>
                        {pillar.number}
                      </span>
                      <div className={`w-12 h-12 rounded-xl ${c.iconBg} border ${c.iconBorder} flex items-center justify-center mb-6 relative z-10 ${c.iconText}`}>
                        {pillar.icon}
                      </div>
                      <p className={`${c.tag} text-[10px] font-black uppercase tracking-widest mb-2 relative z-10`}>
                        {pillar.number === "03" ? "Módulo" : "Usuario"} {pillar.number}
                      </p>
                      <h3 className="text-navy-950 font-black text-xl sm:text-2xl uppercase leading-tight mb-2 relative z-10">
                        {pillar.title}
                      </h3>
                      <p className={`${c.tag} text-sm font-semibold relative z-10`}>
                        {pillar.tagline}
                      </p>
                    </div>

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

      {/* ─── CÓMO SE OFRECE ──────────────────────────────────────────── */}
      <section className="bg-white py-24 border-b border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-steel-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Cómo se ofrece
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase leading-tight mb-4">
                Incluido con tu programa de{" "}
                <span className="text-blue-600">químicos Trevigo</span>
              </h2>
              <div className="w-12 h-1 bg-blue-500 mb-7" />

              <p className="text-steel-600 text-base leading-relaxed mb-6">
                Para las líneas que corren con químicos Trevigo, SurfaceOS se
                incluye con el programa de suministro — con su precio de lista
                declarado en la cotización, para que sepas exactamente qué
                estás recibiendo.
              </p>
              <p className="text-steel-500 text-sm leading-relaxed mb-8">
                Para líneas que operan con químico de otro proveedor está
                disponible por suscripción por línea. La captura automática con
                sensores y la integración a tu ERP o sistema de calidad se
                cotizan como proyecto, cuando tu operación lo pida — el sistema
                arranca sin nada de eso.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Con químico Trevigo", desc: "Incluido con el programa de suministro, con precio de lista declarado." },
                  { title: "Sin químico Trevigo", desc: "Suscripción por línea, con implementación y soporte incluidos." },
                  { title: "Arranque sin capex", desc: "Una tablet y 4-6 semanas a la primera línea operando. Sin obra." },
                  { title: "Sensores cuando toque", desc: "La captura automática es el siguiente nivel: se cotiza aparte, cuando el sistema ya vive en tu planta." },
                ].map((item) => (
                  <div key={item.title} className="bg-steel-50 border border-steel-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <h4 className="text-navy-950 font-black text-sm uppercase mb-2">{item.title}</h4>
                    <p className="text-steel-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation steps */}
            <div>
              <div className="bg-[#0a0f1a] border border-steel-700 rounded-2xl p-8 shadow-xl">
                <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-6">
                  Cómo se implementa
                </p>

                <div className="space-y-4">
                  {[
                    { step: "1", title: "Demo guiada", desc: "Recorremos el sistema contigo sobre el flujo real de una línea de proceso químico.", color: "border-blue-500/30 bg-blue-500/5", accent: "text-blue-400" },
                    { step: "2", title: "Carga de tus especificaciones", desc: "Configuramos tus líneas, parámetros, rangos y frecuencias de captura reales.", color: "border-emerald-500/30 bg-emerald-500/5", accent: "text-emerald-400" },
                    { step: "3", title: "Arranque con el operador", desc: "Capacitación en piso. Si capturar no es más rápido que el papel, no avanzamos.", color: "border-orange-500/30 bg-orange-500/5", accent: "text-orange-400" },
                    { step: "4", title: "Primera auditoría con evidencia lista", desc: "El paquete por cláusula ISO 9001 se genera del uso diario, no de una carpeta.", color: "border-blue-500/30 bg-blue-500/5", accent: "text-blue-400" },
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
                  4 a 6 semanas de la demo a la primera línea operando
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-[11px] font-black uppercase tracking-widest">
              Demo guiada disponible
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Tu línea ya genera estos datos.{" "}
            <span className="text-blue-400">Hoy se pierden en papel.</span>
          </h2>
          <p className="text-steel-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            En 30 minutos te mostramos SurfaceOS corriendo sobre el flujo real
            de una línea de proceso: la captura del operador, la bandeja de
            calidad y el AMEF vivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 font-black text-base uppercase tracking-wide transition-colors"
            >
              Agendar demo guiada
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-10 py-5 font-bold text-base uppercase tracking-wide transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>

          <p className="text-steel-600 text-xs uppercase tracking-widest">
            Producto Trevigo · Sin sensores ni obra para arrancar · Soporte desde Monterrey
          </p>
        </div>
      </section>
    </>
  );
}
