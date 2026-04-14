import Link from "next/link";
import { COMPANY } from "@/lib/data";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "default" | "dark" | "orange";
}

export default function CTASection({
  title = "¿Necesitas un químico industrial para tu planta?",
  subtitle = "Llevamos 35 años resolviendo retos de manufactura en el norte de México. Cuéntanos tu proceso y te hacemos una propuesta técnica sin costo.",
  primaryCTA = { label: "Solicitar cotización", href: "/contacto" },
  secondaryCTA = { label: "Llamar ahora", href: `tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}` },
  variant = "default",
}: CTASectionProps) {
  const bg = {
    default: "bg-navy-500",
    dark: "bg-navy-950",
    orange: "bg-gradient-to-br from-orange-500 to-orange-600",
  }[variant];

  return (
    <section className={`${bg} py-20`} aria-label="Llamada a la acción">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-white text-sm font-medium">
            +35 años en la industria mexicana
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
          {title}
        </h2>
        <p className="text-navy-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:-translate-y-0.5"
          >
            {primaryCTA.label}
          </Link>
          <a
            href={secondaryCTA.href}
            className="border-2 border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:bg-white/10 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {secondaryCTA.label}
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-navy-100 text-sm">
          {[
            "✓ Visita técnica sin costo",
            "✓ Fichas técnicas y SDS incluidas",
            "✓ Entrega en 48h en Monterrey",
            "✓ Soporte post-venta con ingeniero",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
