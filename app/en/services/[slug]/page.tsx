import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY } from "@/lib/data";
import { SERVICES_EN, getServiceEN } from "@/lib/services-content-en";
import { EnHeader, EnFooter } from "@/components/EnChrome";

export function generateStaticParams() {
  return SERVICES_EN.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const s = getServiceEN(params.slug);
  if (!s) return { title: "Service not found" };
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: {
      canonical: `${COMPANY.url}/en/services/${s.slug}`,
      languages: {
        "es-MX": `${COMPANY.url}/servicios/${s.esSlug}`,
        en: `${COMPANY.url}/en/services/${s.slug}`,
      },
    },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${COMPANY.url}/en/services/${s.slug}`,
    },
  };
}

export default function EnServicePage({ params }: { params: { slug: string } }) {
  const s = getServiceEN(params.slug);
  if (!s) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            provider: { "@type": "Organization", name: COMPANY.legalName, url: COMPANY.url },
            areaServed: { "@type": "Country", name: "Mexico" },
            serviceType: "Metal Finishing",
            url: `${COMPANY.url}/en/services/${s.slug}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <EnHeader esHref={`/servicios/${s.esSlug}`} />
      <main className="bg-white text-steel-800">
        <section className="bg-steel-50 border-b border-steel-200">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <p className="text-navy-600 font-semibold text-xs uppercase tracking-widest mb-3">
              <Link href="/en" className="hover:underline">English</Link> · Metal Finishing Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight">{s.title}</h1>
            <p className="mt-4 text-lg text-steel-600">{s.intro}</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-10 space-y-10">
          {s.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">{sec.heading}</h2>
              {sec.paragraphs.map((p, i) => (
                <p key={i} className="text-steel-700 mb-3">{p}</p>
              ))}
              {sec.list && (
                <ul className="list-disc pl-6 space-y-2 text-steel-700">
                  {sec.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {s.faqs.map((f) => (
                <div key={f.q} className="border border-steel-200 rounded-xl p-5">
                  <p className="font-semibold text-navy-900">{f.q}</p>
                  <p className="mt-2 text-sm text-steel-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-steel-50 border border-steel-200 rounded-xl p-6 text-center">
            <p className="font-bold text-navy-900 text-lg">
              Setting up or relocating a line in Mexico?
            </p>
            <p className="mt-2 text-sm text-steel-600 max-w-xl mx-auto">
              Get a no-cost process diagnosis from our bilingual technical team — we answer
              in English within one business day.
            </p>
            <Link
              href="/en#contact"
              className="inline-block mt-4 bg-navy-700 hover:bg-navy-600 text-white rounded px-6 py-3 font-semibold transition-colors"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <EnFooter />
    </>
  );
}
