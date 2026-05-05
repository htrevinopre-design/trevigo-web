"use client";

import { useState } from "react";

const ESTADOS = [
  "Nuevo León", "Coahuila", "Tamaulipas", "Chihuahua", "Sonora",
  "Jalisco", "Estado de México", "CDMX", "Guanajuato", "Otro",
];
const PUESTOS = [
  "Director General", "Gerente de Planta", "Ingeniero de Proceso",
  "Jefe de Mantenimiento", "Compras / Adquisiciones", "Consultor", "Otro",
];
const PERIODOS = ["Semanal", "Quincenal", "Mensual", "Bimestral", "Solo esta vez"];

interface Props {
  productName: string;
  sku: string;
  formats: { label: string; weight: string }[];
}

export default function ProductCotizaForm({ productName, sku, formats }: Props) {
  const [form, setForm] = useState({
    nombre: "", correo: "", telefono: "", empresa: "",
    estado: "", puesto: "", presentacion: "", periodo: "",
    cantidad: 1, yaCliente: false,
  });
  const [sent, setSent] = useState(false);

  const set = (key: string, val: string | number | boolean) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola, me interesa cotizar el siguiente producto de Industrias Trevigo:`,
      ``,
      `*Producto:* ${productName}`,
      `*SKU:* ${sku}`,
      `*Presentación:* ${form.presentacion || "Por definir"}`,
      `*Cantidad:* ${form.cantidad}`,
      `*Pedido periódico:* ${form.periodo || "Por definir"}`,
      ``,
      `*Mis datos:*`,
      `Nombre: ${form.nombre}`,
      `Correo: ${form.correo}`,
      `Teléfono: ${form.telefono}`,
      `Empresa: ${form.empresa}`,
      `Estado: ${form.estado}`,
      `Puesto: ${form.puesto}`,
      `¿Ya soy cliente?: ${form.yaCliente ? "Sí" : "No"}`,
    ];
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/528120403135?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls = "w-full border border-steel-200 bg-steel-50 px-3 py-2 text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-400 focus:bg-white transition-colors";
  const selectCls = `${inputCls} appearance-none`;
  const labelCls = "block text-[10px] font-black text-steel-500 uppercase tracking-widest mb-1";

  return (
    <div className="bg-white border border-steel-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-navy-950 px-5 py-4">
        <p className="text-white font-black text-sm uppercase tracking-widest">Cotiza Ahora</p>
        <p className="text-steel-400 text-xs mt-0.5">Respuesta en menos de 24 h</p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 space-y-3">
        {/* Nombre */}
        <div>
          <label className={labelCls}>Nombre completo *</label>
          <input required type="text" placeholder="Tu nombre" value={form.nombre}
            onChange={(e) => set("nombre", e.target.value)} className={inputCls} />
        </div>

        {/* Correo */}
        <div>
          <label className={labelCls}>Correo electrónico *</label>
          <input required type="email" placeholder="correo@empresa.com" value={form.correo}
            onChange={(e) => set("correo", e.target.value)} className={inputCls} />
        </div>

        {/* Teléfono */}
        <div>
          <label className={labelCls}>Teléfono *</label>
          <input required type="tel" placeholder="81 0000 0000" value={form.telefono}
            onChange={(e) => set("telefono", e.target.value)} className={inputCls} />
        </div>

        {/* Empresa */}
        <div>
          <label className={labelCls}>Empresa</label>
          <input type="text" placeholder="Nombre de tu empresa" value={form.empresa}
            onChange={(e) => set("empresa", e.target.value)} className={inputCls} />
        </div>

        {/* Estado */}
        <div>
          <label className={labelCls}>Estado</label>
          <div className="relative">
            <select value={form.estado} onChange={(e) => set("estado", e.target.value)} className={selectCls}>
              <option value="">Seleccionar estado</option>
              {ESTADOS.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-400 pointer-events-none text-xs">▼</span>
          </div>
        </div>

        {/* Puesto */}
        <div>
          <label className={labelCls}>Puesto</label>
          <div className="relative">
            <select value={form.puesto} onChange={(e) => set("puesto", e.target.value)} className={selectCls}>
              <option value="">Seleccionar puesto</option>
              {PUESTOS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-400 pointer-events-none text-xs">▼</span>
          </div>
        </div>

        {/* Presentación */}
        <div>
          <label className={labelCls}>Presentación</label>
          <div className="relative">
            <select value={form.presentacion} onChange={(e) => set("presentacion", e.target.value)} className={selectCls}>
              <option value="">Seleccionar presentación</option>
              {formats.map((f) => (
                <option key={f.label} value={`${f.label} ${f.weight}`}>{f.label} / {f.weight}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-400 pointer-events-none text-xs">▼</span>
          </div>
        </div>

        {/* Pedido periódico */}
        <div>
          <label className={labelCls}>Pedido periódico</label>
          <div className="relative">
            <select value={form.periodo} onChange={(e) => set("periodo", e.target.value)} className={selectCls}>
              <option value="">Frecuencia de compra</option>
              {PERIODOS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-400 pointer-events-none text-xs">▼</span>
          </div>
        </div>

        {/* Cantidad */}
        <div>
          <label className={labelCls}>Cantidad</label>
          <div className="flex items-center gap-0">
            <button type="button"
              onClick={() => set("cantidad", Math.max(1, form.cantidad - 1))}
              className="w-9 h-9 border border-steel-200 bg-steel-50 hover:bg-steel-100 text-steel-700 font-black text-base flex items-center justify-center transition-colors">
              −
            </button>
            <input type="number" min={1} value={form.cantidad}
              onChange={(e) => set("cantidad", Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 h-9 border-y border-steel-200 text-center text-sm font-black text-steel-800 bg-white focus:outline-none" />
            <button type="button"
              onClick={() => set("cantidad", form.cantidad + 1)}
              className="w-9 h-9 border border-steel-200 bg-steel-50 hover:bg-steel-100 text-steel-700 font-black text-base flex items-center justify-center transition-colors">
              +
            </button>
          </div>
        </div>

        {/* Ya soy cliente */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.yaCliente}
            onChange={(e) => set("yaCliente", e.target.checked)}
            className="w-4 h-4 accent-navy-500" />
          <span className="text-xs text-steel-600">Ya soy cliente de Industrias Trevigo</span>
        </label>

        {/* Submit */}
        <button type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-black text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {sent ? "¡Enviado por WhatsApp!" : "Enviar por WhatsApp"}
        </button>

        <p className="text-steel-400 text-[10px] text-center">
          Al enviar abrirás WhatsApp con tu solicitud pre-llenada.
        </p>
      </form>
    </div>
  );
}
