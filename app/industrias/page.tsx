import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industrias que atendemos — Industrias Trevigo",
  description: "Trevigo provee químicos industriales para más de 20 industrias en México: automotriz, alimenticia, farmacéutica, minera y más.",
  alternates: { canonical: `${COMPANY.url}/industrias` },
};

export default function IndustriasPage() {
  return (
    <>
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex items-center gap-2 text-steel-500 text-xs mb-8">
            <Link href="/" className="hover:text-steel-300">Inicio</Link>
            <span>/</span>
            <span className="text-steel-300">Industrias</span>
          </nav>
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Soluciones por sector</p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Industrias que <span className="text-orange-500">atendemos</span>
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-steel-400 text-base max-w-2xl">
            Más de 35 años proveyendo químicos industriales especializados para los principales sectores productivos de México.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industrias/${ind.slug}`}
                className="flex items-center justify-between px-4 py-4 rounded-xl border border-steel-200 hover:border-navy-400 hover:bg-navy-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{ind.icon}</span>
                  <span className="text-sm font-bold text-steel-800 group-hover:text-navy-700 leading-snug">{ind.name}</span>
                </div>
                <svg className="w-4 h-4 text-navy-400 group-hover:text-navy-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
