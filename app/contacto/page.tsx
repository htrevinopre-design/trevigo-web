"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    industria: "",
    asunto: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="bg-navy-950 pt-[100px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-navy-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Contáctanos
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase leading-tight mb-4">
            Hablemos de <span className="text-orange-500">tu proceso</span>
          </h1>
          <div className="w-12 h-1 bg-orange-500 mb-5" />
          <p className="text-steel-400 text-base max-w-xl leading-relaxed">
            Completa el formulario y un ingeniero de Trevigo te contactará en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* ─── FORM + INFO ─────────────────────────────────────────── */}
      <section className="py-16 bg-steel-50 border-y border-steel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info sidebar */}
            <div className="space-y-5">
              <h2 className="text-steel-900 font-black text-lg uppercase mb-5">
                Información de contacto
              </h2>
              <div className="space-y-3">
                {[
                  {
                    icon: "📍",
                    label: "Dirección",
                    value: COMPANY.address.full,
                    href: `https://maps.google.com/?q=${COMPANY.address.full}`,
                  },
                  {
                    icon: "📞",
                    label: "Teléfono",
                    value: COMPANY.phone,
                    href: `tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`,
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === "📍" ? "_blank" : undefined}
                    rel={item.icon === "📍" ? "noopener noreferrer" : undefined}
                    className="flex gap-4 p-4 bg-white border border-steel-200 rounded-xl hover:border-navy-300 hover:shadow-sm transition-all group"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-navy-500 text-xs font-bold uppercase tracking-wide mb-1">
                        {item.label}
                      </div>
                      <div className="text-steel-700 text-sm group-hover:text-navy-600 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Horario */}
              <div className="bg-white border border-steel-200 rounded-xl p-5">
                <h3 className="text-steel-900 font-black text-sm uppercase mb-3">Horario de atención</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-steel-500">Lun – Vie</span>
                    <span className="text-steel-800 font-semibold">8:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-500">Sábados</span>
                    <span className="text-steel-800 font-semibold">9:00 — 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-steel-500">Domingos</span>
                    <span className="text-steel-400">Cerrado</span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-navy-950 rounded-xl p-5">
                <h3 className="text-white font-black text-sm uppercase mb-4">¿Qué pasa después?</h3>
                <ol className="space-y-3">
                  {[
                    "Un ingeniero revisa tu consulta en < 24 h",
                    "Te contactamos para entender tu proceso",
                    "Evaluamos tu muestra o proceso sin costo",
                    "Te enviamos propuesta técnica y cotización",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-steel-400 leading-snug">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-steel-200 rounded-xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-navy-50 border-2 border-navy-200 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-steel-900 uppercase mb-3">¡Mensaje recibido!</h2>
                  <p className="text-steel-500 text-sm mb-6 max-w-md">
                    Gracias por contactarnos. Un ingeniero de Trevigo revisará tu solicitud y te responderá en menos de 24 horas hábiles.
                  </p>
                  <Link href="/"
                    className="inline-flex items-center gap-2 bg-navy-500 hover:bg-navy-600 text-white px-8 py-3 font-black text-sm uppercase tracking-wide transition-colors">
                    Volver al inicio
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-steel-200 rounded-xl p-8 space-y-5">
                  <h2 className="text-steel-900 font-black text-xl uppercase mb-2">Solicitar información o cotización</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                        Nombre completo <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="nombre" name="nombre" type="text" required
                        value={formData.nombre} onChange={handleChange}
                        placeholder="Ej. Juan Ramírez"
                        className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                        Empresa <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="empresa" name="empresa" type="text" required
                        value={formData.empresa} onChange={handleChange}
                        placeholder="Ej. Manufactura Norte S.A."
                        className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                        Correo electrónico <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="juan@empresa.com.mx"
                        className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                        Teléfono
                      </label>
                      <input
                        id="telefono" name="telefono" type="tel"
                        value={formData.telefono} onChange={handleChange}
                        placeholder="+52 (81) 0000-0000"
                        className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industria" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                        Sector / Industria
                      </label>
                      <select
                        id="industria" name="industria"
                        value={formData.industria} onChange={handleChange}
                        className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 bg-white"
                      >
                        <option value="">Selecciona tu industria</option>
                        <option value="automotriz">Automotriz</option>
                        <option value="metalmecanica">Metalmecánica</option>
                        <option value="manufactura">Manufactura general</option>
                        <option value="agua">Tratamiento de agua</option>
                        <option value="alimentos">Alimentos & Bebidas</option>
                        <option value="construccion">Construcción</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="asunto" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                        ¿Sobre qué nos contactas? <span className="text-orange-500">*</span>
                      </label>
                      <select
                        id="asunto" name="asunto" required
                        value={formData.asunto} onChange={handleChange}
                        className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 bg-white"
                      >
                        <option value="">Selecciona el motivo</option>
                        <option value="cotizacion-producto">Cotización de producto</option>
                        <option value="cotizacion-servicio">Cotización de servicio</option>
                        <option value="ficha-tecnica">Solicitar ficha técnica / SDS</option>
                        <option value="visita-tecnica">Agendar visita técnica</option>
                        <option value="soporte-tecnico">Soporte técnico cliente activo</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-steel-700 text-xs font-bold uppercase tracking-wide mb-2">
                      Cuéntanos sobre tu proceso o necesidad <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="mensaje" name="mensaje" required rows={5}
                      value={formData.mensaje} onChange={handleChange}
                      placeholder="Ej. Tenemos una línea de fosfatado de hierro para acero rolado en frío. Buscamos mejorar la adhesión de la pintura en polvo y reducir el consumo del baño..."
                      className="w-full border border-steel-300 rounded px-4 py-3 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                    <button type="submit"
                      className="w-full sm:w-auto px-10 py-3.5 bg-navy-500 hover:bg-navy-600 text-white font-black text-sm uppercase tracking-wide transition-colors">
                      Enviar solicitud →
                    </button>
                    <p className="text-steel-400 text-xs text-center sm:text-left">
                      Al enviar aceptas nuestra{" "}
                      <Link href="/aviso-privacidad" className="text-navy-500 hover:underline">
                        política de privacidad
                      </Link>.
                      No compartimos tu información con terceros.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
