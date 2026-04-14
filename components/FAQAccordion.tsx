"use client";

import { useState } from "react";

interface FAQ { q: string; a: string; }
interface FAQAccordionProps { faqs: FAQ[]; title?: string; }

export default function FAQAccordion({ faqs, title = "Preguntas frecuentes" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-white" aria-label="Preguntas frecuentes">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-navy-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">FAQ</p>
          <h2 className="text-2xl sm:text-4xl font-black text-steel-900 uppercase">{title}</h2>
        </div>
        <div className="divide-y divide-steel-200 border border-steel-200 rounded-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-steel-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-steel-800 font-bold text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-navy-500 shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 border-t border-steel-100 bg-steel-50">
                  <p className="text-steel-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
