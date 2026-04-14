"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = [
  { id: "metales", label: "Tratamiento de Metales" },
  { id: "agua", label: "Tratamiento de Aguas" },
  { id: "materias", label: "Materias Primas" },
  { id: "servicios", label: "Servicios" },
];

export default function QuoteForm() {
  const [activeTab, setActiveTab] = useState("metales");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // En producción conectar con API/email
    setSent(true);
  }

  return (
    <div className="bg-white border border-steel-200 rounded-xl shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-max px-5 py-3.5 text-xs font-black uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-navy-500 text-white border-navy-500"
                : "bg-white text-steel-600 border-steel-200 hover:bg-steel-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="p-8">
        {sent ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-navy-50 border-2 border-navy-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-steel-900 font-black text-lg uppercase mb-2">¡Solicitud recibida!</h3>
            <p className="text-steel-500 text-sm mb-6">Un asesor técnico te contactará en menos de 24 horas hábiles.</p>
            <button onClick={() => setSent(false)} className="text-navy-500 text-sm font-bold underline">
              Enviar otra consulta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-steel-600 text-sm text-center mb-6">
              Acércate a nosotros y resolveremos cualquier duda sobre{" "}
              <strong className="text-steel-800">{TABS.find(t => t.id === activeTab)?.label}</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input required type="text" placeholder="Nombre completo *"
                className="border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" />
              <input required type="text" placeholder="Empresa *"
                className="border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" />
              <input required type="email" placeholder="Correo electrónico *"
                className="border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input required type="tel" placeholder="Teléfono *"
                className="border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" />
              <input type="text" placeholder="Ciudad"
                className="border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" />
              <input type="text" placeholder="Producto de interés"
                className="border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500" />
            </div>

            <textarea placeholder="Descripción del proceso o aplicación (opcional)"
              rows={3}
              className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 resize-none" />

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-navy-500 hover:bg-navy-600 text-white font-black text-sm uppercase tracking-wide transition-colors">
                Enviar solicitud
              </button>
              <p className="text-steel-400 text-xs text-center sm:text-left">
                Al enviar aceptas nuestra{" "}
                <Link href="/aviso-privacidad" className="text-navy-500 hover:underline">
                  política de privacidad
                </Link>.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
