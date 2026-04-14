import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros — Quiénes somos y nuestra historia | Industrias Trevigo",
  description:
    "Industrias Trevigo: 35+ años fabricando y distribuyendo productos químicos industriales en Monterrey, Nuevo León. Conoce nuestra historia, valores y equipo técnico.",
  alternates: { canonical: `${COMPANY.url}/nosotros` },
};

export default function NosotrosPage() {
  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                Nuestra Historia
              </p>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
                35 años haciendo{" "}
                <span className="text-orange-500">química</span>{" "}
                que trabaja
              </h1>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-400 text-base leading-relaxed">
                Fundada a principios de los años 90 en San Nicolás de los Garza, Nuevo León, Industrias Trevigo nació con una misión simple: ofrecer productos químicos industriales de calidad, con soporte técnico real y precios competitivos para la manufactura mexicana.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-navy-900 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-orange-500 mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-steel-500 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NUESTRA HISTORIA — TIMELINE ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12">
            <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Cronología</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                Cómo llegamos hasta aquí
              </h2>
            </div>
          </div>

          <div className="space-y-0">
            {[
              {
                year: "1990s",
                title: "Fundación",
                desc: "Industrias Trevigo nació en Monterrey como distribuidor de productos químicos para la industria metalmecánica local. La industria automotriz y manufacturera del norte de México estaba en pleno auge post-TLCAN.",
              },
              {
                year: "2000s",
                title: "Formulaciones propias",
                desc: "Desarrollamos nuestras primeras formulaciones propias de fosfatos, detergentes e inhibidores, adaptadas a las necesidades específicas de la manufactura regiomontana: agua dura, procesos de alta temperatura y normativas estrictas de efluentes.",
              },
              {
                year: "2010s",
                title: "Expansión a tratamiento de aguas",
                desc: "Las normas ambientales se volvieron más estrictas. Ampliamos nuestro portafolio con coagulantes y floculantes para ayudar a las plantas manufactureras a cumplir con NOM-001-SEMARNAT y evitar sanciones.",
              },
              {
                year: "2020s",
                title: "Nearshoring y nuevas oportunidades",
                desc: "La reconfiguración de cadenas de suministro globales trajo nuevas plantas a Nuevo León. Trevigo creció con la región, siendo el proveedor técnico de confianza para plantas que llegaban a Monterrey por primera vez.",
              },
            ].map((item, idx, arr) => (
              <div key={item.year} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-navy-500 flex items-center justify-center text-white font-black text-xs uppercase tracking-wide shrink-0 text-center leading-tight px-1">
                    {item.year}
                  </div>
                  {idx < arr.length - 1 && <div className="w-0.5 flex-1 bg-steel-200 mt-2" />}
                </div>
                <div className="pb-8 pt-1">
                  <h3 className="text-steel-900 font-black text-lg uppercase mb-2">{item.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALORES ─────────────────────────────────────────────── */}
      <section className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12">
            <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Nuestros valores</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                Lo que nos define
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔬",
                title: "Rigor técnico",
                desc: "Cada producto tiene ficha técnica, hoja de seguridad y certificado de análisis. No vendemos sin documentar. No recomendamos sin evaluar.",
              },
              {
                icon: "🤝",
                title: "Servicio personalizado",
                desc: "En Trevigo no hay call centers. Cuando llamas hablas con un ingeniero que conoce tu proceso. El soporte post-venta no es un add-on, es parte del precio.",
              },
              {
                icon: "🌱",
                title: "Compromiso ambiental",
                desc: "Desarrollamos formulaciones biodegradables, libres de cromo VI y compatibles con sistemas de tratamiento de aguas. La normativa ambiental no es un problema; es una guía.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-steel-200 rounded-xl p-8 hover:shadow-md hover:border-navy-300 transition-all">
                <div className="w-14 h-14 bg-navy-50 border border-navy-100 rounded-xl flex items-center justify-center text-3xl mb-5">
                  {value.icon}
                </div>
                <h3 className="text-steel-900 font-black text-lg uppercase mb-3">{value.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-12">
            <div className="bg-navy-500 w-1 h-10 rounded-full shrink-0 mt-1" />
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-widest mb-1">Nuestro equipo</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase">
                Las personas detrás del producto
              </h2>
              <p className="text-steel-500 text-sm mt-2 max-w-2xl">
                Nuestro equipo técnico y comercial suma décadas de experiencia en la industria química, metalmecánica y de tratamiento de aguas en México.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                desc: "Garantiza que cada lote de producto cumpla con las especificaciones técnicas y genera la documentación requerida (TDS, SDS, COA).",
              },
            ].map((member) => (
              <div key={member.role} className="bg-white border border-steel-200 rounded-xl p-6 hover:shadow-md hover:border-navy-300 transition-all">
                <div className="w-12 h-12 bg-navy-500 rounded-xl flex items-center justify-center text-xl mb-5">
                  👤
                </div>
                <h3 className="text-steel-900 font-black text-base uppercase mb-1">{member.role}</h3>
                <p className="text-navy-500 text-xs font-semibold mb-3">{member.expertise}</p>
                <p className="text-steel-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UBICACIÓN ───────────────────────────────────────────── */}
      <section className="py-20 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-navy-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Ubicación</p>
              <h2 className="text-2xl sm:text-3xl font-black text-steel-900 uppercase mb-4">
                En el corazón industrial de Monterrey
              </h2>
              <div className="w-12 h-1 bg-orange-500 mb-5" />
              <p className="text-steel-500 text-sm leading-relaxed mb-6">
                Nuestras instalaciones están en San Nicolás de los Garza, parte del Área Metropolitana de Monterrey — el centro industrial más importante del norte de México. Desde aquí atendemos a clientes en todo el estado de Nuevo León y en las principales ciudades industriales del país.
              </p>
              <address className="not-italic space-y-3">
                {[
                  { icon: "📍", text: COMPANY.address.full },
                  { icon: "📞", text: COMPANY.phone },
                  { icon: "✉️", text: COMPANY.email },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-steel-600 text-sm">{item.text}</span>
                  </div>
                ))}
              </address>
            </div>
            {/* Map placeholder */}
            <div className="bg-white border border-steel-200 rounded-xl h-72 flex items-center justify-center hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-steel-500 text-sm mb-4">
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.state}
                </p>
                <a
                  href={`https://maps.google.com/?q=${COMPANY.address.full}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white px-4 py-2 text-xs font-black uppercase tracking-wide transition-colors"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Contáctanos</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
            ¿Quieres conocer más sobre Trevigo?
          </h2>
          <p className="text-steel-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Visítanos en planta o agenda una llamada técnica. Estamos listos para conocer tus procesos y presentarte cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-black text-sm uppercase tracking-wide transition-colors">
              Contáctanos
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
