import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industrias que atendemos — Industrias Trevigo",
  description: "Trevigo provee químicos industriales para más de 20 industrias en México: automotriz, alimenticia, farmacéutica, minera y más.",
  alternates: { canonical: `${COMPANY.url}/industrias` },
};

// Color theme per industry — grouped by sector
const INDUSTRY_THEME: Record<string, {
  header: string;
  cardHover: string;
  cta: string;
  textHover: string;
}> = {
  // Industrial / Metalmecánica → azul
  "automotriz":                       { header: "bg-blue-700",   cardHover: "hover:border-blue-300 hover:shadow-blue-100",     cta: "border-blue-600 text-blue-700 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700",     textHover: "group-hover:text-blue-700"   },
  "metalmecanica":                    { header: "bg-blue-800",   cardHover: "hover:border-blue-300 hover:shadow-blue-100",     cta: "border-blue-700 text-blue-800 group-hover:bg-blue-800 group-hover:text-white group-hover:border-blue-800",     textHover: "group-hover:text-blue-800"   },
  "tratamiento-superficies-metalicas":{ header: "bg-blue-900",   cardHover: "hover:border-blue-300 hover:shadow-blue-100",     cta: "border-blue-800 text-blue-900 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900",     textHover: "group-hover:text-blue-900"   },
  "hule-caucho":                      { header: "bg-slate-700",  cardHover: "hover:border-slate-300 hover:shadow-slate-100",   cta: "border-slate-600 text-slate-700 group-hover:bg-slate-700 group-hover:text-white group-hover:border-slate-700",   textHover: "group-hover:text-slate-700"  },
  // Aeronáutica / Tech → índigo
  "aeronautica":                      { header: "bg-indigo-700", cardHover: "hover:border-indigo-300 hover:shadow-indigo-100", cta: "border-indigo-600 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white group-hover:border-indigo-700", textHover: "group-hover:text-indigo-700" },
  "electrica-electronica":            { header: "bg-indigo-600", cardHover: "hover:border-indigo-300 hover:shadow-indigo-100", cta: "border-indigo-500 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600", textHover: "group-hover:text-indigo-600" },
  "polimeros":                        { header: "bg-purple-700", cardHover: "hover:border-purple-300 hover:shadow-purple-100", cta: "border-purple-600 text-purple-700 group-hover:bg-purple-700 group-hover:text-white group-hover:border-purple-700", textHover: "group-hover:text-purple-700" },
  // Alimentos / Agro → verde
  "alimenticia":                      { header: "bg-green-600",  cardHover: "hover:border-green-300 hover:shadow-green-100",   cta: "border-green-600 text-green-700 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600",   textHover: "group-hover:text-green-700"  },
  "agroindustria":                    { header: "bg-emerald-700",cardHover: "hover:border-emerald-300 hover:shadow-emerald-100",cta: "border-emerald-600 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700",textHover: "group-hover:text-emerald-700"},
  // Bebidas → ámbar
  "vitivinicola":                     { header: "bg-violet-700", cardHover: "hover:border-violet-300 hover:shadow-violet-100", cta: "border-violet-600 text-violet-700 group-hover:bg-violet-700 group-hover:text-white group-hover:border-violet-700", textHover: "group-hover:text-violet-700" },
  "cervecera":                        { header: "bg-amber-600",  cardHover: "hover:border-amber-300 hover:shadow-amber-100",   cta: "border-amber-600 text-amber-700 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",   textHover: "group-hover:text-amber-700"  },
  "refresquera":                      { header: "bg-cyan-600",   cardHover: "hover:border-cyan-300 hover:shadow-cyan-100",     cta: "border-cyan-600 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600",     textHover: "group-hover:text-cyan-700"   },
  // Salud / Farmacia → violeta / rosa
  "farmaceutica":                     { header: "bg-violet-600", cardHover: "hover:border-violet-300 hover:shadow-violet-100", cta: "border-violet-500 text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600", textHover: "group-hover:text-violet-600" },
  "cosmetica":                        { header: "bg-rose-500",   cardHover: "hover:border-rose-300 hover:shadow-rose-100",     cta: "border-rose-500 text-rose-600 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500",     textHover: "group-hover:text-rose-600"   },
  "hospitales":                       { header: "bg-red-600",    cardHover: "hover:border-red-300 hover:shadow-red-100",       cta: "border-red-600 text-red-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600",       textHover: "group-hover:text-red-700"    },
  // Limpieza / Servicios → teal
  "lavanderias":                      { header: "bg-teal-600",   cardHover: "hover:border-teal-300 hover:shadow-teal-100",     cta: "border-teal-600 text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",     textHover: "group-hover:text-teal-700"   },
  "limpieza-general":                 { header: "bg-teal-700",   cardHover: "hover:border-teal-300 hover:shadow-teal-100",     cta: "border-teal-700 text-teal-800 group-hover:bg-teal-700 group-hover:text-white group-hover:border-teal-700",     textHover: "group-hover:text-teal-800"   },
  // Materias / Minería → gris oscuro / piedra
  "minera":                           { header: "bg-stone-700",  cardHover: "hover:border-stone-300 hover:shadow-stone-100",   cta: "border-stone-600 text-stone-700 group-hover:bg-stone-700 group-hover:text-white group-hover:border-stone-700",   textHover: "group-hover:text-stone-700"  },
  "papel-derivados":                  { header: "bg-slate-600",  cardHover: "hover:border-slate-300 hover:shadow-slate-100",   cta: "border-slate-500 text-slate-600 group-hover:bg-slate-600 group-hover:text-white group-hover:border-slate-600",   textHover: "group-hover:text-slate-600"  },
  "textil":                           { header: "bg-pink-600",   cardHover: "hover:border-pink-300 hover:shadow-pink-100",     cta: "border-pink-500 text-pink-600 group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600",     textHover: "group-hover:text-pink-600"   },
  // Artes gráficas → naranja
  "artes-graficas":                   { header: "bg-orange-600", cardHover: "hover:border-orange-300 hover:shadow-orange-100", cta: "border-orange-500 text-orange-600 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600", textHover: "group-hover:text-orange-600" },
};

// Fallback theme
const DEFAULT_THEME = INDUSTRY_THEME["automotriz"];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind) => {
              const theme = INDUSTRY_THEME[ind.slug] ?? DEFAULT_THEME;
              return (
                <Link
                  key={ind.slug}
                  href={`/industrias/${ind.slug}`}
                  className={`bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-md transition-all group flex flex-col ${theme.cardHover}`}
                >
                  {/* Colored header */}
                  <div className={`${theme.header} px-4 py-3`}>
                    <p className="text-white text-xs font-black uppercase tracking-widest leading-tight">{ind.name}</p>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col items-center text-center gap-2">
                    <span className="text-4xl mt-2">{ind.icon}</span>
                    <h3 className={`text-steel-800 font-black text-sm uppercase leading-tight mt-1 transition-colors ${theme.textHover}`}>
                      {ind.name}
                    </h3>
                    <p className="text-steel-500 text-xs leading-relaxed flex-1">
                      {ind.description?.slice(0, 80)}…
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="px-4 pb-4">
                    <span className={`block w-full text-center border-2 py-2 text-[10px] font-black uppercase tracking-wide transition-colors ${theme.cta}`}>
                      Ver soluciones →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
