import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { SERVICES_EN } from "@/lib/services-content-en";
import { EnHeader, EnFooter } from "@/components/EnChrome";

export const metadata: Metadata = {
  title: "Metal Finishing Chemicals in Monterrey, Mexico",
  description:
    "Metal finishing chemicals and on-site process support for nearshoring plants in Mexico: phosphating, passivation, pickling, paint stripping and galvanizing. Bilingual team, 35+ years in Monterrey.",
  alternates: {
    canonical: `${COMPANY.url}/en`,
    languages: { "es-MX": COMPANY.url, en: `${COMPANY.url}/en`, "x-default": COMPANY.url },
  },
  openGraph: {
    title: "Metal Finishing Chemicals in Monterrey, Mexico | Trevigo",
    description:
      "Chemistry and process support for phosphating, passivation, pickling, paint stripping and galvanizing lines in Mexico. Bilingual technical team.",
    url: `${COMPANY.url}/en`,
  },
};

const VALUE_PROPS = [
  {
    title: "Where your plant is",
    text: "Based in the Monterrey metropolitan area — the heart of North American nearshoring — with scheduled deliveries across the Monterrey–Saltillo corridor, the Bajío and the border region.",
  },
  {
    title: "Audit-ready documentation",
    text: "SDS, COA per lot, validated process parameters and control records in English and Spanish, aligned with ASTM standards and OEM audit requirements.",
  },
  {
    title: "Process support, not just chemicals",
    text: "35+ years running bath control, coating validation and troubleshooting on Mexican production lines. We fix root causes — your line's performance is our product.",
  },
  {
    title: "A team you can call in English",
    text: "Bilingual technical and sales staff. Your U.S. engineering team talks directly to the people who formulate and control the chemistry.",
  },
];

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: COMPANY.legalName,
            url: `${COMPANY.url}/en`,
            email: COMPANY.email,
            telephone: "+52 81 2040 3135",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Nicolás de los Garza",
              addressRegion: "Nuevo León",
              addressCountry: "MX",
            },
            description:
              "Industrial chemicals manufacturer for metal finishing and wastewater treatment, supporting manufacturing plants in Mexico since 1990.",
          }),
        }}
      />
      <EnHeader esHref="/" />
      <main className="bg-white text-steel-800">
        {/* Hero */}
        <section className="bg-steel-50 border-b border-steel-200">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <p className="text-navy-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Nearshoring to Mexico?
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-navy-900 max-w-3xl leading-tight">
              Your metal finishing chemical partner in Monterrey, Mexico
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-steel-600">
              Phosphating, passivation, pickling, paint stripping and galvanizing —
              chemistry, bath control and troubleshooting for your line, with a bilingual
              technical team and 35+ years in the Mexican manufacturing supply chain.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/en#contact"
                className="bg-navy-700 hover:bg-navy-600 text-white rounded px-6 py-3 font-semibold transition-colors"
              >
                Talk to our team
              </Link>
              <Link
                href="/en#services"
                className="border border-navy-300 text-navy-700 hover:bg-navy-50 rounded px-6 py-3 font-semibold transition-colors"
              >
                See services
              </Link>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="max-w-6xl mx-auto px-4 py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((v) => (
            <div key={v.title} className="border border-steel-200 rounded-xl p-5">
              <p className="font-bold text-navy-900 mb-2">{v.title}</p>
              <p className="text-sm text-steel-600">{v.text}</p>
            </div>
          ))}
        </section>

        {/* Services */}
        <section id="services" className="bg-steel-50 border-y border-steel-200">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
              Metal finishing services we support
            </h2>
            <p className="mt-2 text-steel-600 max-w-2xl">
              We manufacture the chemistry and support the process on your line — from
              start-up to daily bath control and OEM validation.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_EN.map((s) => (
                <Link
                  key={s.slug}
                  href={`/en/services/${s.slug}`}
                  className="bg-white border border-steel-200 rounded-xl p-5 hover:border-navy-300 hover:shadow-sm transition-all group"
                >
                  <p className="font-bold text-navy-900 group-hover:text-navy-700">
                    {s.title.split(":")[0]}
                  </p>
                  <p className="mt-2 text-sm text-steel-600 line-clamp-3">{s.intro}</p>
                  <p className="mt-3 text-sm font-semibold text-navy-600">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Wastewater cross-sell */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="border border-steel-200 rounded-xl p-6 md:p-8 md:flex items-center justify-between gap-8">
            <div>
              <h2 className="text-xl font-bold text-navy-900">
                Also: wastewater treatment chemistry for your discharge permit
              </h2>
              <p className="mt-2 text-steel-600 max-w-2xl text-sm">
                Every plant in Mexico must comply with NOM-001-SEMARNAT-2021 discharge
                limits. We supply coagulants, flocculants and biocides — and run free jar
                testing on your actual effluent to define dosing and cost per cubic meter.
              </p>
            </div>
            <Link
              href="/en#contact"
              className="inline-block mt-4 md:mt-0 shrink-0 bg-navy-700 hover:bg-navy-600 text-white rounded px-5 py-3 font-semibold transition-colors"
            >
              Ask about water treatment
            </Link>
          </div>
        </section>
      </main>
      <EnFooter />
    </>
  );
}
