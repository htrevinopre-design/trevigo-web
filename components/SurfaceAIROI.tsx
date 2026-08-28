"use client";

import { useState, useMemo } from "react";

// ─── ROI Assumptions ─────────────────────────────────────────────────────────
const POWDER_EFFICIENCY = 0.10; // 10% = ahorro MÍNIMO publicado por coatingAI (usuarios reportan 16-30%)
const CO2_PER_KG        = 5.5;  // kg CO₂ por kg de polvo

function formatUSD(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)} M USD`;
  if (n >= 1_000)     return `$${Math.round(n / 1_000).toLocaleString("es-MX")} K USD`;
  return `$${Math.round(n).toLocaleString("es-MX")} USD`;
}

export default function SurfaceAIROI() {
  const [powderKg,  setPowderKg]  = useState(800);
  const [powderUsd, setPowderUsd] = useState(8);

  const roi = useMemo(() => {
    const total     = powderKg * 12 * POWDER_EFFICIENCY * powderUsd;
    const monthlyKg = powderKg * POWDER_EFFICIENCY;
    const co2Tonnes = (powderKg * 12 * POWDER_EFFICIENCY * CO2_PER_KG) / 1000;
    return { total, monthlyKg, co2Tonnes };
  }, [powderKg, powderUsd]);

  return (
    <div className="bg-white border border-steel-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-steel-100 flex items-center gap-3 bg-steel-50">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-emerald-700 text-xs font-black uppercase tracking-widest">
          Calculadora de ROI · coatingAI (escenario conservador)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-steel-100">

        {/* ─── Inputs ──────────────────────────────────────────────── */}
        <div className="p-8 space-y-8">
          {/* Slider 1: consumo */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-steel-700 text-sm font-bold">
                Consumo mensual de polvo
              </label>
              <span className="text-navy-950 font-black text-xl tabular-nums">
                {powderKg.toLocaleString("es-MX")}
                <span className="text-steel-400 text-sm font-normal ml-1">kg</span>
              </span>
            </div>
            <input
              type="range" min={100} max={100000} step={100}
              value={powderKg}
              onChange={(e) => setPowderKg(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none bg-steel-200 accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-steel-400 text-[10px]">100 kg</span>
              <span className="text-steel-400 text-[10px]">100 t (100,000 kg)</span>
            </div>
          </div>

          {/* Slider 2: precio polvo */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="text-steel-700 text-sm font-bold">
                Precio del polvo
              </label>
              <span className="text-navy-950 font-black text-xl tabular-nums">
                ${powderUsd}
                <span className="text-steel-400 text-sm font-normal ml-1">USD/kg</span>
              </span>
            </div>
            <input
              type="range" min={3} max={25} step={1}
              value={powderUsd}
              onChange={(e) => setPowderUsd(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none bg-steel-200 accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-steel-400 text-[10px]">$3 USD</span>
              <span className="text-steel-400 text-[10px]">$25 USD</span>
            </div>
          </div>

          {/* Assumptions */}
          <div className="border border-steel-100 rounded-xl p-4 bg-steel-50">
            <p className="text-steel-400 text-[10px] font-black uppercase tracking-widest mb-2">
              Supuestos del modelo
            </p>
            <ul className="space-y-1">
              {[
                `Ahorro de polvo: ${POWDER_EFFICIENCY * 100}% (el mínimo publicado; usuarios reportan 16-30%)`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-steel-500 text-[11px]">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ─── Results ─────────────────────────────────────────────── */}
        <div className="p-8 flex flex-col gap-5 bg-steel-50">
          {/* Total saving */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
            <p className="text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-2">
              Ahorro anual estimado
            </p>
            <p className="text-4xl sm:text-5xl font-black text-navy-950 tabular-nums leading-none mb-1">
              {formatUSD(roi.total)}
            </p>
            <p className="text-steel-500 text-xs mt-2">
              calculado con el ahorro mínimo publicado —{" "}
              <span className="text-emerald-600 font-black">el escenario conservador</span>
            </p>
          </div>

          {/* Powder saved */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-steel-200 rounded-lg p-4 text-center">
              <p className="text-steel-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Polvo ahorrado / mes
              </p>
              <p className="text-emerald-700 font-black text-xl tabular-nums">
                {Math.round(roi.monthlyKg).toLocaleString("es-MX")}{" "}
                <span className="text-steel-400 font-normal text-sm">kg</span>
              </p>
            </div>
            <div className="bg-white border border-steel-200 rounded-lg p-4 text-center">
              <p className="text-steel-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Polvo ahorrado / año
              </p>
              <p className="text-emerald-700 font-black text-xl tabular-nums">
                {Math.round(roi.monthlyKg * 12).toLocaleString("es-MX")}{" "}
                <span className="text-steel-400 font-normal text-sm">kg</span>
              </p>
            </div>
          </div>

          {/* Carbon footprint */}
          <div className="flex items-center gap-4 border border-steel-200 rounded-xl p-4 bg-white">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <div>
              <p className="text-steel-400 text-[10px] font-black uppercase tracking-widest">
                Reducción de huella de carbono
              </p>
              <p className="text-navy-950 font-black text-lg tabular-nums">
                {roi.co2Tonnes.toFixed(1)}{" "}
                <span className="text-steel-400 font-normal text-sm">ton CO₂/año</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
