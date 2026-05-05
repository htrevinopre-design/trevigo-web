import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nosotros: Quiénes Somos y Nuestra Historia",
  description:
    "Industrias Trevigo: 35+ años fabricando y distribuyendo productos químicos industriales en Monterrey, Nuevo León. Conoce nuestra historia, valores y equipo técnico.",
  alternates: { canonical: `${COMPANY.url}/nosotros` },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Nosotros: Quiénes Somos y Nuestra Historia",
            description:
              "Industrias Trevigo: 35+ años fabricando y distribuyendo productos químicos industriales en Monterrey.",
            url: `${COMPANY.url}/nosotros`,
            mainEntity: {
              "@type": "Organization",
              name: COMPANY.legalName,
              alternateName: COMPANY.shortName,
              url: COMPANY.url,
              logo: `${COMPANY.url}/logo.png`,
              foundingDate: "1990",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: COMPANY.address.city,
                  addressRegion: COMPANY.address.state,
                  addressCountry: "MX",
                },
              },
              description:
                "Fabricantes y distribuidores de productos químicos para tratamiento de metales, limpieza industrial y tratamiento de aguas residuales. 35+ años de experiencia en México.",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
              areaServed: { "@type": "Country", name: "México" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: COMPANY.phone,
                contactType: "sales",
                areaServed: "MX",
                availableLanguage: ["Spanish", "English"],
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
              { "@type": "ListItem", position: 2, name: "Nosotros", item: `${COMPANY.url}/nosotros` },
            ],
          }),
        }}
      />
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
                productos químicos industriales con soporte técnico real: no
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

            {/* Hero image */}
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/nosotros.png"
                alt="Industrias Trevigo: equipo y planta"
                fill
                className="object-cover"
                priority
              />
            </div>
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
              {TIMELINE.map((item) => (
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
                  <div className="flex-1 pt-4">
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/quimica.png"
                alt="Laboratorio de química industrial Trevigo"
                fill
                className="object-cover"
              />
            </div>
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
                Nuestras instalaciones están en San Nicolás de los Garza, en el Área
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

            {/* Interactive map */}
            <div className="bg-white border border-steel-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="rounded-xl overflow-hidden h-80 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Puerto+Tampico+325,+La+Fe,+66477+San+Nicolás+de+los+Garza,+Nuevo+León,+México&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Industrias Trevigo"
                />
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
