"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = [
  { id: "Tratamiento de Metales",   label: "Tratamiento de Metales" },
  { id: "Tratamiento de Aguas",     label: "Tratamiento de Aguas" },
  { id: "Materias Primas",          label: "Materias Primas" },
  { id: "Servicios",                label: "Servicios" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    ciudad: "",
    producto: "",
    descripcion: "",
  });

  const set = (key: keyof typeof form, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "cotizacion",
          categoria: activeTab,
          ...form,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500";

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
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-steel-900 font-black text-lg uppercase mb-2">¡Solicitud recibida!</h3>
            <p className="text-steel-500 text-sm mb-6">Un asesor técnico te contactará en menos de 24 horas hábiles.</p>
            <button
              onClick={() => {
                setStatus("idle");
                setForm({ nombre: "", empresa: "", email: "", telefono: "", ciudad: "", producto: "", descripcion: "" });
              }}
              className="text-navy-500 text-sm font-bold underline"
            >
              Enviar otra consulta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-steel-600 text-sm text-center mb-6">
              Acércate a nosotros y resolveremos cualquier duda sobre{" "}
              <strong className="text-steel-800">{activeTab}</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                required type="text" placeholder="Nombre completo *"
                value={form.nombre} onChange={(e) => set("nombre", e.target.value)}
                className={inputCls}
              />
              <input
                required type="text" placeholder="Empresa *"
                value={form.empresa} onChange={(e) => set("empresa", e.target.value)}
                className={inputCls}
              />
              <input
                required type="email" placeholder="Correo electrónico *"
                value={form.email} onChange={(e) => set("email", e.target.value)}
                className={inputCls}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                required type="tel" placeholder="Teléfono *"
                value={form.telefono} onChange={(e) => set("telefono", e.target.value)}
                className={inputCls}
              />
              <input
                type="text" placeholder="Ciudad"
                value={form.ciudad} onChange={(e) => set("ciudad", e.target.value)}
                className={inputCls}
              />
              <input
                type="text" placeholder="Producto de interés"
                value={form.producto} onChange={(e) => set("producto", e.target.value)}
                className={inputCls}
              />
            </div>

            <textarea
              placeholder="Descripción del proceso o aplicación (opcional)"
              rows={3}
              value={form.descripcion} onChange={(e) => set("descripcion", e.target.value)}
              className={`${inputCls} resize-none`}
            />

            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                No se pudo enviar. Intenta de nuevo o escríbenos a{" "}
                <a href="mailto:ventas@trevigo.com.mx" className="underline font-bold">
                  ventas@trevigo.com.mx
                </a>
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-10 py-3.5 bg-navy-500 hover:bg-navy-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando…
                  </>
                ) : (
                  "Enviar solicitud"
                )}
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
