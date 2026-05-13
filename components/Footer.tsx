import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image src="/logo.png" alt="Trevigo" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <div className="text-white font-black text-lg leading-tight">TREVIGO</div>
                <div className="text-navy-400 text-xs">Químicos Industriales</div>
              </div>
            </Link>
            <p className="text-navy-400 text-sm leading-relaxed mb-6">
              {COMPANY.yearsExperience}+ años fabricando y distribuyendo productos químicos
              para la industria mexicana. Tecnología, servicio y confianza.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-navy-500 rounded-lg flex items-center justify-center text-navy-400 hover:text-white transition-all"
                aria-label="LinkedIn de Industrias Trevigo"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-navy-500 rounded-lg flex items-center justify-center text-navy-400 hover:text-white transition-all"
                aria-label="Facebook de Industrias Trevigo"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Productos</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Tratamiento de Metales", href: "/productos#tratamiento-metales" },
                { label: "Fosfatos y Fosfatado", href: "/productos#fosfatos" },
                { label: "Desoxidantes", href: "/productos#desoxidantes" },
                { label: "Inhibidores de Corrosión", href: "/productos#inhibidores-corrosion" },
                { label: "Tratamiento de Aguas", href: "/productos#tratamiento-agua" },
                { label: "Coagulantes y Floculantes", href: "/productos#coagulantes" },
                { label: "Materias Primas", href: "/productos#materias-primas" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-400 hover:text-navy-200 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Tratamiento de Metales", href: "/servicios#tratamiento-metales" },
                { label: "Galvanizado", href: "/servicios#galvanizado" },
                { label: "Tropicalizado", href: "/servicios#tropicalizado" },
                { label: "Fosfatizado Industrial", href: "/servicios#fosfatizado" },
                { label: "Despintado", href: "/servicios#despintado" },
                { label: "Decapado", href: "/servicios#decapado" },
                { label: "Pasivado", href: "/servicios#pasivado" },
                { label: "Pintura Electrostática", href: "/servicios#pintura-electrostatica" },
                { label: "Tratamiento de Aguas", href: "/servicios#tratamiento-aguas" },
                { label: "Ingeniería y Asesoría", href: "/servicios#ingenieria-asesoria" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-400 hover:text-navy-200 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg
                  className="w-5 h-5 text-navy-500 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <a
                    href={COMPANY.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-navy-200 text-sm not-italic leading-relaxed transition-colors block"
                  >
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.zip} {COMPANY.address.city}, {COMPANY.address.state}
                  </a>
                  <a
                    href={COMPANY.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[11px] font-bold text-navy-500 hover:text-navy-300 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver en Google Maps
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <svg
                  className="w-5 h-5 text-navy-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="text-navy-400 hover:text-navy-200 text-sm transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <svg
                  className="w-5 h-5 text-navy-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-navy-400 hover:text-navy-200 text-sm transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Google Maps embed */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
            <p className="text-white font-bold text-sm uppercase tracking-wider">Nuestra Ubicación</p>
            <a
              href={COMPANY.social.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-xs font-bold uppercase tracking-wide transition-colors"
            >
              📍 Ver ficha verificada en Google →
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 h-64 w-full">
            <iframe
              src="https://www.google.com/maps?q=Puerto+Tampico+325,+La+Fe,+66477+San+Nicolás+de+los+Garza,+Nuevo+León,+México&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Industrias Trevigo"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-navy-500 text-xs">
            © {currentYear} {COMPANY.legalName}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/aviso-privacidad" className="text-navy-500 hover:text-navy-300 text-xs transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="text-navy-500 hover:text-navy-300 text-xs transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
