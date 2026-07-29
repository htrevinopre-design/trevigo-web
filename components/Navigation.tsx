"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY, INDUSTRIES, SERVICES_METALES, SERVICES_AGUAS } from "@/lib/data";
import { EmojiIcon } from "@/components/Icon";

// Estructura del mega menu de productos (3 columnas: selector | items | imagen)
const PRODUCTOS_MENU = [
  {
    title: "Químicos para Tratamiento de Metales",
    href: "/productos/linea/tratamiento-metales",
    image: "/imagenes/mega-metales.png",
    cta: "Ver línea completa",
    items: [
      { label: "Detergentes",  href: "/productos/categoria/detergentes" },
      { label: "Fosfatos",     href: "/productos/categoria/fosfatos" },
      { label: "Sellos",       href: "/productos/categoria/sellos" },
      { label: "Desoxidantes", href: "/productos/categoria/desoxidantes" },
      { label: "Removedores",  href: "/productos/categoria/removedores" },
      { label: "Inhibidores",  href: "/productos/categoria/inhibidores" },
      { label: "Pasivados",    href: "/productos/categoria/pasivados" },
      { label: "Aceites",      href: "/productos/categoria/aceites-metales" },
    ],
  },
  {
    title: "Químicos para Tratamiento de Aguas Residuales",
    href: "/productos/linea/tratamiento-aguas",
    image: "/imagenes/mega-aguas.png",
    cta: "Ver línea completa",
    items: [
      { label: "Agentes Secuestrantes",  href: "/productos/categoria/agentes-secuestrantes" },
      { label: "Inhibidores de Oxígeno", href: "/productos/categoria/inhibidores-oxigeno" },
      { label: "Coagulantes",            href: "/productos/categoria/coagulantes" },
      { label: "Microbicidas",           href: "/productos/categoria/microbicidas" },
      { label: "Floculantes",            href: "/productos/categoria/floculantes" },
      { label: "Poliacrilamidas",        href: "/productos/categoria/poliacrilamidas" },
    ],
  },
  {
    title: "Lubricantes y Aceites Generales",
    href: "/productos/linea/lubricantes-aceites",
    image: "/imagenes/mega-lubricantes.png",
    cta: "Ver línea completa",
    items: [
      { label: "Aceites",                         href: "/productos/categoria/aceites-generales" },
      { label: "Lubricantes Especializados",      href: "/productos/categoria/lubricantes-especializados" },
      { label: "Grasas y Lubricantes",            href: "/productos/categoria/grasas-lubricantes" },
      { label: "Lubricantes en Formato Especial", href: "/productos/categoria/lubricantes-formato-especial" },
    ],
  },
  {
    title: "Materias Primas",
    href: "/productos/linea/materias-primas",
    image: "/imagenes/mega-lubricantes.png",
    cta: "Ver línea completa",
    items: [
      { label: "Ácido Fosfórico",          href: "/productos/acido-fosforico" },
      { label: "Sosa al 50%",              href: "/productos/sosa-al-50" },
      { label: "Ácido Clorhídrico",        href: "/productos/acido-clorhidrico" },
      { label: "Hipoclorito de Sodio",     href: "/productos/hipoclorito-sodio" },
      { label: "Ácido Nítrico",            href: "/productos/acido-nitrico" },
      { label: "Ácido Cítrico",            href: "/productos/acido-citrico" },
      { label: "Sosa Cáustica en Escamas", href: "/productos/sosa-caustica-escamas" },
    ],
  },
  {
    title: "Aditivos para Lubricantes",
    href: "/productos/linea/aditivos-lubricantes",
    image: "/imagenes/mega-lubricantes.png",
    cta: "Ver línea completa",
    items: [
      { label: "Aditivos para Aceite de Motor", href: "/productos/categoria/aditivos-motor" },
      { label: "Transmisión y Fluidos",         href: "/productos/categoria/aditivos-transmision-fluidos" },
      { label: "Aceites Industriales",          href: "/productos/categoria/aditivos-industriales" },
      { label: "Aditivos para Grasas",          href: "/productos/categoria/aditivos-grasas" },
      { label: "Modificadores y Mejoradores",   href: "/productos/categoria/aditivos-modificadores" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const pathname = usePathname();

  const isActive = (prefix: string) => pathname === prefix || pathname.startsWith(prefix + "/");

  const dropdownCls = (key: string) =>
    `flex items-center gap-1 px-4 h-full text-sm font-semibold border-b-2 transition-all ${
      activeMenu === key
        ? "text-navy-600 border-navy-500"
        : isActive(`/${key}`)
        ? "text-navy-600 border-orange-500"
        : "text-steel-700 border-transparent hover:text-navy-600 hover:border-navy-500"
    }`;

  const simpleLinkCls = (href: string) =>
    `flex items-center px-4 h-full text-sm font-semibold border-b-2 transition-all ${
      isActive(href)
        ? "text-navy-600 border-orange-500"
        : "text-steel-700 border-transparent hover:text-navy-600 hover:border-navy-500"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top contact bar ── */}
      <div className="bg-navy-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <span className="text-white/50 text-xs font-semibold tracking-widest uppercase hidden md:block">
              Industrias Trevigo · Monterrey, N.L.
            </span>
            <span className="text-white/50 text-xs font-semibold tracking-widest uppercase md:hidden">
              Industrias Trevigo
            </span>
            <div className="hidden md:flex items-center divide-x divide-white/10">
              <a href={`tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`}
                className="flex items-center gap-2 px-4 text-white/70 hover:text-white text-xs transition-colors">
                <svg className="w-3.5 h-3.5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 px-4 text-white/70 hover:text-white text-xs transition-colors">
                <svg className="w-3.5 h-3.5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-2 px-4 text-white/40 text-xs">
                <svg className="w-3.5 h-3.5 text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {COMPANY.address.city}, {COMPANY.address.state}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav
        className="bg-white border-b border-steel-200 shadow-sm relative"
        onMouseLeave={() => setActiveMenu(null)}
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" onClick={() => setActiveMenu(null)}>
              <Image src="/logo.png" alt="Industrias Trevigo" width={80} height={52} className="object-contain" priority />
            </Link>

            {/* Desktop nav items */}
            <div className="hidden lg:flex items-center h-full">

              {/* PRODUCTOS */}
              <Link
                href="/productos"
                onMouseEnter={() => setActiveMenu("productos")}
                onClick={() => setActiveMenu(null)}
                className={dropdownCls("productos")}
              >
                Productos
                <svg className={`w-3.5 h-3.5 transition-transform ${activeMenu === "productos" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* SERVICIOS */}
              <Link
                href="/servicios"
                onMouseEnter={() => setActiveMenu("servicios")}
                onClick={() => setActiveMenu(null)}
                className={dropdownCls("servicios")}
              >
                Servicios
                <svg className={`w-3.5 h-3.5 transition-transform ${activeMenu === "servicios" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* SAK — special branded link */}
              <Link
                href="/sak"
                onMouseEnter={() => setActiveMenu(null)}
                className={`flex items-center gap-1.5 px-4 h-full text-sm font-black border-b-2 transition-all uppercase tracking-wide text-orange-500 hover:text-orange-600 ${isActive("/sak") ? "border-orange-500" : "border-transparent hover:border-orange-500"}`}
              >
                Sak™
              </Link>

              {/* SURFACEAI — special branded link */}
              <Link
                href="/surface-ai"
                onMouseEnter={() => setActiveMenu(null)}
                className={`flex items-center gap-1.5 px-4 h-full text-sm font-black border-b-2 transition-all text-emerald-600 hover:text-emerald-700 ${isActive("/surface-ai") ? "border-emerald-500" : "border-transparent hover:border-emerald-500"}`}
              >
                SurfaceAI
              </Link>

              {/* INDUSTRIAS */}
              <Link
                href="/industrias"
                onMouseEnter={() => setActiveMenu("industrias")}
                onClick={() => setActiveMenu(null)}
                className={dropdownCls("industrias")}
              >
                Industrias
                <svg className={`w-3.5 h-3.5 transition-transform ${activeMenu === "industrias" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* RECURSOS dropdown */}
              <Link
                href="/recursos"
                onMouseEnter={() => setActiveMenu("recursos")}
                onClick={() => setActiveMenu(null)}
                className={dropdownCls("recursos")}
              >
                Recursos
                <svg className={`w-3.5 h-3.5 transition-transform ${activeMenu === "recursos" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Simple links */}
              {[
                { label: "Nosotros", href: "/nosotros" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setActiveMenu(null)}
                  className={simpleLinkCls(item.href)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/contacto"
                className="hidden lg:flex items-center gap-2 bg-navy-500 hover:bg-navy-600 text-white px-6 py-2.5 font-bold text-sm uppercase tracking-wide transition-colors"
                onClick={() => setActiveMenu(null)}
              >
                Cotizar ahora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                className="lg:hidden p-2 -mr-2 text-steel-600"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Abrir menú"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── MEGA MENU: PRODUCTOS ── */}
        {activeMenu === "productos" && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-steel-200 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
              <div className="grid grid-cols-[220px_1fr_260px] gap-6">

                {/* COL 1 — Selector de categoría */}
                <div className="space-y-1.5 py-1">
                  <p className="text-[10px] font-black text-steel-400 uppercase tracking-widest mb-3 px-3">Productos</p>
                  {PRODUCTOS_MENU.map((cat, i) => (
                    <button
                      key={cat.href}
                      onMouseEnter={() => setActiveCategory(i)}
                      onClick={() => { setActiveMenu(null); window.location.href = cat.href; }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-left transition-all ${
                        activeCategory === i
                          ? "bg-navy-500 text-white shadow-sm"
                          : "text-steel-700 hover:bg-steel-50 border border-steel-200"
                      }`}
                    >
                      {cat.title}
                      <svg className={`w-4 h-4 shrink-0 ml-2 ${activeCategory === i ? "text-white" : "text-navy-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>

                {/* COL 2 — Items de la categoría activa */}
                <div className="border-x border-steel-100 px-8 py-1">
                  <p className="text-sm font-black text-navy-600 mb-4">
                    {PRODUCTOS_MENU[activeCategory].title}
                  </p>
                  <ul className="space-y-0.5">
                    {PRODUCTOS_MENU[activeCategory].items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center gap-2 py-1.5 text-sm text-steel-600 hover:text-navy-600 group transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-steel-300 group-hover:bg-navy-500 transition-colors shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={PRODUCTOS_MENU[activeCategory].href}
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1.5 mt-5 text-xs font-black text-navy-500 hover:text-navy-700 uppercase tracking-wide transition-colors"
                  >
                    {PRODUCTOS_MENU[activeCategory].cta} →
                  </Link>
                </div>

                {/* COL 3 — Imagen destacada */}
                <div className="relative rounded-xl overflow-hidden bg-steel-100 h-[220px]">
                  <Image
                    src={PRODUCTOS_MENU[activeCategory].image}
                    alt={PRODUCTOS_MENU[activeCategory].title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  {/* Logo badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                    <Image src="/logo.png" alt="Trevigo" width={56} height={28} className="object-contain" />
                  </div>
                  {/* CTA bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Link
                      href={PRODUCTOS_MENU[activeCategory].href}
                      onClick={() => setActiveMenu(null)}
                      className="flex items-center justify-between text-white text-xs font-bold hover:text-orange-400 transition-colors"
                    >
                      <span>Ver todo →</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ── MEGA MENU: SERVICIOS ── */}
        {activeMenu === "servicios" && (
          <div className="absolute top-full left-0 right-0 bg-white border-t-2 border-navy-500 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 gap-12">

                {/* Tratamiento de Metales */}
                <div>
                  <Link
                    href="/servicios#tratamiento-metales"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-2 mb-5 group"
                  >
                    <EmojiIcon emoji="⚙️" className="w-4 h-4 text-navy-600" />
                    <span className="text-xs font-black text-navy-600 uppercase tracking-wider group-hover:text-navy-800 transition-colors">
                      Tratamiento de Metales
                    </span>
                  </Link>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-1 border-l-2 border-steel-100 pl-3">
                    {[
                      { id: "fosfatizado", name: "Fosfatizado Industrial", icon: "⚙️" },
                      { id: "galvanizado", name: "Galvanizado", icon: "🔩" },
                      { id: "tropicalizado", name: "Tropicalizado", icon: "🛡️" },
                      { id: "despintado", name: "Despintado", icon: "🔧" },
                      { id: "decapado", name: "Decapado", icon: "⚗️" },
                      { id: "pasivado", name: "Pasivado", icon: "✨" },
                      { id: "pintura-electrostatica", name: "Pintura Electrostática", icon: "🎨" },
                    ].map((svc) => (
                      <li key={svc.id}>
                        <Link
                          href={`/servicios#${svc.id}`}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center gap-2 py-1.5 text-xs text-steel-600 hover:text-navy-600 transition-colors group"
                        >
                          <EmojiIcon emoji={svc.icon} className="w-4 h-4 text-steel-500 group-hover:text-navy-600" />
                          <span className="group-hover:translate-x-0.5 transition-transform leading-snug">{svc.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tratamiento de Aguas */}
                <div>
                  <Link
                    href="/servicios#tratamiento-aguas"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center gap-2 mb-5 group"
                  >
                    <EmojiIcon emoji="💧" className="w-4 h-4 text-navy-600" />
                    <span className="text-xs font-black text-navy-600 uppercase tracking-wider group-hover:text-navy-800 transition-colors">
                      Tratamiento de Aguas Residuales
                    </span>
                  </Link>
                  <ul className="grid grid-cols-1 gap-y-1 border-l-2 border-steel-100 pl-3">
                    {SERVICES_AGUAS.map((svc) => (
                      <li key={svc.id}>
                        <Link
                          href={`/servicios#${svc.id}`}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-center gap-2 py-1.5 text-xs text-steel-600 hover:text-navy-600 transition-colors group"
                        >
                          <EmojiIcon emoji={svc.icon} className="w-4 h-4 text-steel-500 group-hover:text-navy-600" />
                          <span className="group-hover:translate-x-0.5 transition-transform leading-snug">{svc.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Visita técnica CTA */}
                  <div className="mt-6 p-4 bg-navy-50 border border-navy-100 rounded-lg">
                    <p className="text-xs text-navy-700 font-semibold mb-2">¿Necesitas una evaluación técnica?</p>
                    <p className="text-xs text-steel-500 mb-3">Visitamos tu planta sin costo y te proponemos la solución adecuada.</p>
                    <Link
                      href="/contacto"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center gap-1 bg-navy-500 hover:bg-navy-600 text-white px-4 py-2 font-black text-xs uppercase tracking-wide transition-colors"
                    >
                      Agendar visita →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Footer strip */}
              <div className="mt-8 pt-5 border-t border-steel-100 flex items-center justify-between">
                <p className="text-steel-400 text-xs">
                  7 servicios de tratamiento de metales · 4 servicios de tratamiento de aguas
                </p>
                <Link
                  href="/servicios"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-2 bg-navy-500 hover:bg-navy-600 text-white px-5 py-2 font-black text-xs uppercase tracking-wide transition-colors"
                >
                  Ver todos los servicios →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── MEGA MENU: INDUSTRIAS ── */}
        {activeMenu === "industrias" && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-steel-200 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-black text-steel-400 uppercase tracking-widest">Industrias que atendemos</p>
                <Link href="/industrias" onClick={() => setActiveMenu(null)} className="text-xs font-black text-navy-500 hover:text-navy-700 uppercase tracking-wide transition-colors">
                  Ver todas las industrias →
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industrias/${ind.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-steel-200 text-sm font-semibold text-steel-700 hover:bg-navy-50 hover:border-navy-300 hover:text-navy-700 transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <EmojiIcon emoji={ind.icon} className="w-4 h-4 text-steel-500 group-hover:text-navy-600" />
                      <span className="leading-snug">{ind.name}</span>
                    </span>
                    <svg className="w-3.5 h-3.5 text-navy-400 group-hover:text-navy-600 shrink-0 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RECURSOS dropdown panel */}
        {activeMenu === "recursos" && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-steel-200 shadow-2xl z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Artículos técnicos */}
                <Link
                  href="/recursos"
                  onClick={() => setActiveMenu(null)}
                  className="group bg-steel-50 hover:bg-navy-50 border border-steel-200 hover:border-navy-300 rounded-xl p-5 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📚</span>
                    <p className="text-[10px] font-black text-navy-500 uppercase tracking-widest">
                      Artículos técnicos
                    </p>
                  </div>
                  <h3 className="text-steel-900 font-black text-base uppercase leading-tight mb-2 group-hover:text-navy-700 transition-colors">
                    Guías técnicas y artículos
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed mb-3 flex-1">
                    Lecturas profundas sobre fosfatizado, decapado, tratamiento
                    de aguas y procesos industriales.
                  </p>
                  <span className="text-navy-500 text-xs font-black uppercase tracking-wide">
                    Ver artículos →
                  </span>
                </Link>

                {/* Glosario */}
                <Link
                  href="/glosario"
                  onClick={() => setActiveMenu(null)}
                  className="group bg-steel-50 hover:bg-navy-50 border border-steel-200 hover:border-navy-300 rounded-xl p-5 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📖</span>
                    <p className="text-[10px] font-black text-navy-500 uppercase tracking-widest">
                      Glosario técnico
                    </p>
                  </div>
                  <h3 className="text-steel-900 font-black text-base uppercase leading-tight mb-2 group-hover:text-navy-700 transition-colors">
                    Términos y definiciones
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed mb-3 flex-1">
                    Definiciones de DBO, ISO VG, NOM-001, ASTM A967 y más
                    términos técnicos del sector.
                  </p>
                  <span className="text-navy-500 text-xs font-black uppercase tracking-wide">
                    Ver glosario →
                  </span>
                </Link>

                {/* Casos de éxito */}
                <Link
                  href="/casos-de-exito"
                  onClick={() => setActiveMenu(null)}
                  className="group bg-steel-50 hover:bg-orange-50 border border-steel-200 hover:border-orange-300 rounded-xl p-5 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🏭</span>
                    <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                      Casos de éxito
                    </p>
                  </div>
                  <h3 className="text-steel-900 font-black text-base uppercase leading-tight mb-2 group-hover:text-orange-600 transition-colors">
                    Proyectos en plantas
                  </h3>
                  <p className="text-steel-500 text-xs leading-relaxed mb-3 flex-1">
                    Resultados medibles en plantas automotrices, alimenticias,
                    metalmecánicas y de tratamiento de aguas.
                  </p>
                  <span className="text-orange-500 text-xs font-black uppercase tracking-wide">
                    Ver casos →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-steel-200 bg-white py-3 max-h-[80vh] overflow-y-auto">

            {/* Productos accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-6 py-3 text-steel-800 font-bold text-sm"
                onClick={() => setMobileExpanded(mobileExpanded === "productos" ? null : "productos")}
              >
                Productos
                <svg className={`w-4 h-4 transition-transform ${mobileExpanded === "productos" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded === "productos" && (
                <div className="pb-2">
                  {PRODUCTOS_MENU.map((cat) => (
                    <div key={cat.href} className="mb-3">
                      <Link
                        href={cat.href}
                        className="flex items-center gap-2 px-8 py-1.5 text-xs font-black text-navy-600 uppercase tracking-wide"
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                      >
                        {cat.title}
                      </Link>
                      {cat.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block pl-12 pr-6 py-1.5 text-xs text-steel-600 hover:text-navy-600"
                          onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                        >
                          · {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="px-8 pt-2">
                    <Link href="/productos" className="block text-xs font-black text-navy-500 uppercase underline"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}>
                      Ver catálogo completo →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Servicios accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-6 py-3 text-steel-800 font-bold text-sm"
                onClick={() => setMobileExpanded(mobileExpanded === "servicios" ? null : "servicios")}
              >
                Servicios
                <svg className={`w-4 h-4 transition-transform ${mobileExpanded === "servicios" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded === "servicios" && (
                <div className="pb-2">
                  <p className="px-8 py-1 text-[10px] font-black text-navy-400 uppercase tracking-wider">Tratamiento de Metales</p>
                  {SERVICES_METALES.map((svc) => (
                    <Link key={svc.id} href={`/servicios#${svc.id}`}
                      className="flex items-center gap-2 pl-10 pr-6 py-1.5 text-xs text-steel-600 hover:text-navy-600"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}>
                      <EmojiIcon emoji={svc.icon} className="w-3.5 h-3.5 text-steel-500" />
                      {svc.name}
                    </Link>
                  ))}
                  <p className="px-8 py-1 mt-2 text-[10px] font-black text-navy-400 uppercase tracking-wider">Tratamiento de Aguas</p>
                  {SERVICES_AGUAS.map((svc) => (
                    <Link key={svc.id} href={`/servicios#${svc.id}`}
                      className="flex items-center gap-2 pl-10 pr-6 py-1.5 text-xs text-steel-600 hover:text-navy-600"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}>
                      <EmojiIcon emoji={svc.icon} className="w-3.5 h-3.5 text-steel-500" />
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sak mobile link */}
            <Link
              href="/sak"
              className="block px-6 py-3 text-orange-500 font-black text-sm border-t border-steel-100 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Sak™
            </Link>

            {/* SurfaceAI mobile link */}
            <Link
              href="/surface-ai"
              className="block px-6 py-3 text-emerald-600 font-black text-sm border-t border-steel-100"
              onClick={() => setMobileOpen(false)}
            >
              SurfaceAI
            </Link>

            {/* Industrias accordion */}
            <div className="border-t border-steel-100">
              <button
                className="w-full flex items-center justify-between px-6 py-3 text-steel-800 font-bold text-sm"
                onClick={() => setMobileExpanded(mobileExpanded === "industrias" ? null : "industrias")}
              >
                Industrias
                <svg className={`w-4 h-4 transition-transform ${mobileExpanded === "industrias" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded === "industrias" && (
                <div className="pb-2">
                  {INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industrias/${ind.slug}`}
                      className="flex items-center gap-2 pl-10 pr-6 py-1.5 text-xs text-steel-600 hover:text-navy-600"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                    >
                      <EmojiIcon emoji={ind.icon} className="w-3.5 h-3.5 text-steel-500" />
                      <span>{ind.name}</span>
                    </Link>
                  ))}
                  <div className="px-8 pt-2">
                    <Link href="/industrias" className="block text-xs font-black text-navy-500 uppercase underline"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}>
                      Ver todas las industrias →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Recursos accordion */}
            <div className="border-t border-steel-100">
              <button
                className="w-full flex items-center justify-between px-6 py-3 text-steel-800 font-bold text-sm"
                onClick={() => setMobileExpanded(mobileExpanded === "recursos" ? null : "recursos")}
              >
                Recursos
                <svg className={`w-4 h-4 transition-transform ${mobileExpanded === "recursos" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExpanded === "recursos" && (
                <div className="pb-2">
                  {[
                    { label: "Artículos técnicos", href: "/recursos", icon: "📚" },
                    { label: "Glosario técnico", href: "/glosario", icon: "📖" },
                    { label: "Casos de éxito", href: "/casos-de-exito", icon: "🏭" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 pl-10 pr-6 py-2 text-sm text-steel-600 hover:text-navy-600"
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {[
              { label: "Nosotros", href: "/nosotros" },
              { label: "Contacto", href: "/contacto" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-6 py-3 text-steel-800 font-bold text-sm border-t border-steel-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="px-6 pt-4 pb-3 border-t border-steel-200 mt-2">
              <Link href="/contacto"
                className="block w-full text-center bg-navy-500 text-white px-5 py-3 font-black text-sm uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}>
                Cotizar ahora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
