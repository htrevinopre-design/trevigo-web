import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros — Quiénes somos y nuestra historia | Industrias Trevigo",
  description:
    "Industrias Trevigo: 35+ años fabricando y distribuyendo productos químicos industriales en Monterrey, Nuevo León. Conoce nuestra historia, valores y equipo técnico.",
  alternates: { canonical: `${COMPANY.url}/nosotros` },
};

function ImgPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-steel-100 border-2 border-dashed border-steel-300 rounded-2xl flex items-center justify-center ${className}`}
    >
      <div className="text-center p-6">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-steel-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-steel-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-steel-400 text-[11px] font-bold uppercase tracking-widest">{label}</p>
      </div>
    </div>
  );
}

const TIMELINE = [
  {
    year: "1990",
    title: "Fundación",
    desc: "Industrias Trevigo nació en Monterrey como distribuidor de productos químicos para la industria metalmecánica local. La industria automotriz y manufacturera de México estaba en pleno auge post-TLCAN.",
  },
  {
    year: "2002",
    title: "Formulaciones propias",
    desc: "Desarrollamos nuestras primeras formulaciones propias de fosfatos, detergentes e inhibidores, adaptadas a las necesidades específicas de la manufactura regiomontana: agua dura, procesos de alta temperatura y normativas estrictas de efluentes.",
  },
  {
    year: "2015",
    title: "Expansión a tratamiento de aguas",
    desc: "Las normas ambientales se volvieron más estrictas. Ampliamos nuestro portafolio con coagulantes y floculantes para ayudar a las plantas manufactureras a cumplir con NOM-001-SEMARNAT y evitar sanciones.",
  },
  {
    year: "2020",
    title: "Nearshoring y nuevas oportunidades",
    desc: "La reconfiguración de cadenas de suministro globales trajo nuevas plantas a Nuevo León. Trevigo creció con la región, siendo el proveedor técnico de confianza para plantas que llegaban a Monterrey por primera vez.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-5">
                Sobre Trevigo
              </p>
              <h1 className="text-4xl sm:text-6xl font-black text-white uppercase leading-[0.95] mb-6">
                35 años en la{" "}
                <span className="text-orange-500">química</span>{" "}
                que mueve a la industria
              </h1>
              <div className="w-16 h-1 bg-orange-500 mb-7" />
              <p className="text-steel-300 text-lg leading-relaxed max-w-lg">
                Fundada en San Nicolás de los Garza, fabricamos y distribuimos
                productos químicos industriales con soporte técnico real — no
                solo vendemos, acompañamos el proceso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors"
                >
                  Habla con un asesor
                </Link>
                <Link
                  href="/productos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Ver catálogo
                </Link>
              </div>
            </div>
            <ImgPlaceholder
              label="Foto: Instalaciones / Planta Trevigo"
              className="aspect-[4/3] lg:aspect-square"
            />
          </div>
        </div>

        {/* Stats band */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-8 py-8 text-center">
                  <div className="text-3xl lg:text-4xl font-black text-orange-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
                  <div className="text-steel-500 text-xs leading-snug">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISIÓN ───────────────────────────────────────────────── */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-100 text-xs font-black uppercase tracking-[0.25em] mb-5">
            Nuestra razón de ser
          </p>
          <blockquote className="text-white text-2xl sm:text-3xl font-black leading-tight uppercase">
            "No vendemos químicos. Resolvemos problemas de proceso con química
            de precisión."
          </blockquote>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-xl mb-16">
            <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
              Cronología
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-steel-900 uppercase leading-tight mb-4">
              Cómo llegamos hasta aquí
            </h2>
            <div className="w-12 h-1 bg-orange-500" />
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-14 top-14 bottom-14 w-px bg-steel-200 hidden sm:block" />

            <div className="space-y-0">
              {TIMELINE.map((item, idx) => (
                <div key={item.year} className="relative flex gap-10 sm:gap-14 pb-14 last:pb-0">
                  {/* Year bubble */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-28 h-28 rounded-2xl bg-navy-950 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-black text-white tabular-nums">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-4 border-l-0">
                    <h3 className="text-steel-900 font-black text-xl uppercase mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-steel-500 text-sm leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ImgPlaceholder
            label="Foto: Historia / equipo o proceso Trevigo"
            className="mt-16 aspect-[21/9]"
          />
        </div>
      </section>

      {/* ─── VALORES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Lo que nos define
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-steel-900 uppercase leading-tight mb-4">
                Nuestros valores
              </h2>
              <div className="w-12 h-1 bg-orange-500 mb-6" />
              <p className="text-steel-500 text-base leading-relaxed">
                Más de tres décadas en la industria química nos han enseñado que
                la confianza se construye con rigor técnico, transparencia y
                compromiso real con el cliente.
              </p>
            </div>
            <ImgPlaceholder
              label="Foto: Laboratorio / control de calidad"
              className="aspect-[4/3]"
            />
          </div>

          {/* Values cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Rigor técnico",
                desc: "Cada producto tiene ficha técnica, hoja de seguridad y certificado de análisis. No vendemos sin documentar. No recomendamos sin evaluar.",
              },
              {
                number: "02",
                title: "Servicio personalizado",
                desc: "En Trevigo no hay call centers. Cuando llamas hablas con un ingeniero que conoce tu proceso. El soporte post-venta no es un add-on, es parte del precio.",
              },
              {
                number: "03",
                title: "Compromiso ambiental",
                desc: "Desarrollamos formulaciones biodegradables, libres de cromo VI y compatibles con sistemas de tratamiento de aguas. La normativa ambiental no es un problema; es una guía.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white border border-steel-200 rounded-2xl p-8 hover:shadow-lg hover:border-navy-300 transition-all group"
              >
                <div className="text-6xl font-black text-steel-100 group-hover:text-orange-100 transition-colors mb-4 leading-none">
                  {value.number}
                </div>
                <h3 className="text-steel-900 font-black text-lg uppercase mb-3">
                  {value.title}
                </h3>
                <p className="text-steel-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
              Nuestro equipo
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-steel-900 uppercase leading-tight mb-4">
              Las personas detrás del producto
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6" />
            <p className="text-steel-500 text-base leading-relaxed">
              Nuestro equipo técnico suma décadas de experiencia en la industria
              química, metalmecánica y de tratamiento de aguas en México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                role: "Dirección General",
                expertise: "Ingeniería Química · 30+ años en la industria",
                desc: "Fundador de Trevigo. Experto en formulación de químicos para tratamiento de metales y gestión de procesos industriales.",
              },
              {
                role: "Gerente Técnico de Ventas",
                expertise: "Ingeniero Químico · Especialista en superficies",
                desc: "Responsable de diagnóstico de procesos, visitas técnicas y desarrollo de soluciones a medida para clientes industriales.",
              },
              {
                role: "Área de Calidad",
                expertise: "Control de calidad y certificaciones",
                desc: "Garantiza que cada lote cumpla con las especificaciones técnicas y genera la documentación requerida (TDS, SDS, COA).",
              },
            ].map((member) => (
              <div key={member.role}>
                <ImgPlaceholder
                  label={`Foto: ${member.role}`}
                  className="aspect-[3/4] mb-5"
                />
                <h3 className="text-steel-900 font-black text-base uppercase mb-1">
                  {member.role}
                </h3>
                <p className="text-orange-500 text-xs font-black uppercase tracking-wide mb-3">
                  {member.expertise}
                </p>
                <p className="text-steel-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>

          <ImgPlaceholder
            label="Foto: Equipo completo Trevigo"
            className="mt-16 aspect-[21/9]"
          />
        </div>
      </section>

      {/* ─── INSTALACIONES ────────────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-orange-400 text-xs font-black uppercase tracking-[0.2em] mb-3">
              Nuestras instalaciones
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-4">
              Planta y laboratorio en San Nicolás
            </h2>
            <div className="w-12 h-1 bg-orange-500 mb-6" />
            <p className="text-steel-400 text-base leading-relaxed">
              Contamos con planta de producción, laboratorio de control de calidad
              y almacén en San Nicolás de los Garza — a minutos de las principales
              zonas industriales del Área Metropolitana de Monterrey.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ImgPlaceholder
              label="Foto: Planta de producción"
              className="col-span-2 lg:col-span-1 aspect-square"
            />
            <ImgPlaceholder label="Foto: Laboratorio" className="aspect-video" />
            <ImgPlaceholder label="Foto: Almacén / producto terminado" className="aspect-video" />
            <ImgPlaceholder label="Foto: Proceso de formulación" className="aspect-video" />
            <ImgPlaceholder label="Foto: Control de calidad" className="aspect-video" />
          </div>
        </div>
      </section>

      {/* ─── UBICACIÓN ───────────────────────────────────────────── */}
      <section className="py-24 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-navy-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
                Ubicación
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-steel-900 uppercase leading-tight mb-4">
                En el corazón industrial de Monterrey
              </h2>
              <div className="w-12 h-1 bg-orange-500 mb-7" />
              <p className="text-steel-500 text-base leading-relaxed mb-8">
                Nuestras instalaciones están en San Nicolás de los Garza — Área
                Metropolitana de Monterrey, el centro industrial más importante
                del norte de México. Desde aquí atendemos clientes en todo Nuevo
                León y en las principales ciudades industriales del país.
              </p>
              <address className="not-italic space-y-4 mb-8">
                {[
                  { label: "Dirección", text: COMPANY.address.full },
                  { label: "Teléfono", text: COMPANY.phone },
                  { label: "Correo", text: COMPANY.email },
                ].map((item) => (
                  <div key={item.text} className="flex gap-5 items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest text-navy-500 pt-0.5 w-16 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-steel-700 text-sm font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </address>
              <a
                href={`https://maps.google.com/?q=${COMPANY.address.full}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white px-6 py-3 text-xs font-black uppercase tracking-wide transition-colors"
              >
                Ver en Google Maps →
              </a>
            </div>

            {/* Map card */}
            <div className="bg-white border border-steel-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-steel-100 border-b border-steel-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-steel-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-steel-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-steel-400 text-[11px] font-bold uppercase tracking-widest">
                    Mapa interactivo
                  </p>
                  <p className="text-steel-400 text-xs mt-1 leading-relaxed">
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.city}, {COMPANY.address.state}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-steel-900 font-black text-sm uppercase mb-1">
                  Industrias Trevigo
                </p>
                <p className="text-steel-500 text-xs">{COMPANY.address.full}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-xs font-black uppercase tracking-[0.25em] mb-4">
            Trabajemos juntos
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-6">
            ¿Listo para conocer{" "}
            <span className="text-orange-500">cómo podemos ayudarte?</span>
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Visítanos en planta o agenda una llamada técnica. Estamos listos
            para conocer tus procesos y presentarte soluciones concretas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 font-black text-sm uppercase tracking-wide transition-colors"
            >
              Contáctanos
            </Link>
            <a
              href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-10 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
