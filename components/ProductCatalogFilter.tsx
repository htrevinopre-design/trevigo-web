"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/data";

// ─── Color theme por categoría (duplicado del page.tsx, mantenidos sincronizados)
const CATEGORY_THEME: Record<
  string,
  {
    header: string;
    cardHover: string;
    cta: string;
    textHover: string;
    subBanner: string;
    subText: string;
    subCount: string;
    pill: string;
  }
> = {
  "tratamiento-metales": {
    header: "bg-blue-700",
    cardHover: "hover:border-blue-300 hover:shadow-blue-100",
    cta: "border-blue-600 text-blue-700 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700",
    textHover: "group-hover:text-blue-700",
    subBanner: "border-blue-600 bg-blue-50",
    subText: "text-blue-800",
    subCount: "bg-blue-100 text-blue-700",
    pill: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  "tratamiento-aguas": {
    header: "bg-teal-600",
    cardHover: "hover:border-teal-300 hover:shadow-teal-100",
    cta: "border-teal-600 text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",
    textHover: "group-hover:text-teal-700",
    subBanner: "border-teal-600 bg-teal-50",
    subText: "text-teal-800",
    subCount: "bg-teal-100 text-teal-700",
    pill: "bg-teal-600 hover:bg-teal-700 text-white",
  },
  "lubricantes-aceites": {
    header: "bg-amber-600",
    cardHover: "hover:border-amber-300 hover:shadow-amber-100",
    cta: "border-amber-600 text-amber-700 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
    textHover: "group-hover:text-amber-700",
    subBanner: "border-amber-500 bg-amber-50",
    subText: "text-amber-800",
    subCount: "bg-amber-100 text-amber-700",
    pill: "bg-amber-600 hover:bg-amber-700 text-white",
  },
  "materias-primas": {
    header: "bg-emerald-700",
    cardHover: "hover:border-emerald-300 hover:shadow-emerald-100",
    cta: "border-emerald-600 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700",
    textHover: "group-hover:text-emerald-700",
    subBanner: "border-emerald-600 bg-emerald-50",
    subText: "text-emerald-800",
    subCount: "bg-emerald-100 text-emerald-700",
    pill: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
};

interface Props {
  categories: ProductCategory[];
}

export default function ProductCatalogFilter({ categories }: Props) {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedSubcategories, setSelectedSubcategories] = useState<Set<string>>(new Set());
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Normaliza string para búsqueda (sin acentos, lowercase)
  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");

  // Filtrado: aplica búsqueda + categorías + subcategorías
  const filtered = useMemo(() => {
    const q = norm(query.trim());
    const catSet = selectedCategories;
    const subSet = selectedSubcategories;

    return categories
      .map((cat) => {
        // Si hay categorías seleccionadas y esta no está, skip
        if (catSet.size > 0 && !catSet.has(cat.id)) return null;

        const filteredSubs = cat.subcategories
          .map((sub) => {
            // Si hay subcategorías seleccionadas y esta no está, skip
            if (subSet.size > 0 && !subSet.has(sub.id)) return null;

            const filteredProducts = sub.products.filter((p) => {
              if (!q) return true;
              return (
                norm(p.name).includes(q) ||
                norm(p.sku).includes(q) ||
                norm(p.shortDescription).includes(q)
              );
            });

            if (filteredProducts.length === 0) return null;
            return { ...sub, products: filteredProducts };
          })
          .filter(Boolean) as typeof cat.subcategories;

        if (filteredSubs.length === 0) return null;
        return { ...cat, subcategories: filteredSubs };
      })
      .filter(Boolean) as ProductCategory[];
  }, [categories, query, selectedCategories, selectedSubcategories]);

  const totalResults = useMemo(
    () =>
      filtered.reduce(
        (sum, c) => sum + c.subcategories.reduce((s, sc) => s + sc.products.length, 0),
        0
      ),
    [filtered]
  );

  const totalProducts = useMemo(
    () =>
      categories.reduce(
        (sum, c) => sum + c.subcategories.reduce((s, sc) => s + sc.products.length, 0),
        0
      ),
    [categories]
  );

  function toggleCategory(catId: string) {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) next.delete(catId);
      else next.add(catId);
      return next;
    });
    // Si deselecciono una categoría, también quito subcategorías huérfanas
    setSelectedSubcategories((prev) => {
      const cat = categories.find((c) => c.id === catId);
      if (!cat) return prev;
      const next = new Set(prev);
      cat.subcategories.forEach((s) => next.delete(s.id));
      return next;
    });
  }

  function toggleSubcategory(subId: string) {
    setSelectedSubcategories((prev) => {
      const next = new Set(prev);
      if (next.has(subId)) next.delete(subId);
      else next.add(subId);
      return next;
    });
  }

  function clearAll() {
    setQuery("");
    setSelectedCategories(new Set());
    setSelectedSubcategories(new Set());
  }

  const hasActiveFilters =
    query.length > 0 || selectedCategories.size > 0 || selectedSubcategories.size > 0;

  // Cierra drawer en mobile cuando cambia la URL (no aplica aquí pero por buena práctica)
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMobileFiltersOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Barra de búsqueda + contador + toggle mobile ───── */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <input
                type="search"
                placeholder="Buscar producto por nombre, SKU o descripción..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-steel-300 rounded-lg text-sm text-steel-800 placeholder-steel-400 focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20"
                aria-label="Buscar productos"
              />
              <svg
                className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-steel-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden inline-flex items-center justify-center gap-2 bg-navy-600 hover:bg-navy-700 text-white px-5 py-3 rounded-lg text-sm font-black uppercase tracking-wide transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4h18M6 8h12M9 12h6M11 16h2"
                />
              </svg>
              Filtros{" "}
              {selectedCategories.size + selectedSubcategories.size > 0 && (
                <span className="bg-orange-500 text-white text-[10px] font-black rounded-full w-5 h-5 inline-flex items-center justify-center">
                  {selectedCategories.size + selectedSubcategories.size}
                </span>
              )}
            </button>
          </div>

          {/* Resultados / filtros activos */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <p className="text-steel-600">
              <span className="font-black text-steel-900">{totalResults}</span> de{" "}
              {totalProducts} productos
              {hasActiveFilters && " (filtrados)"}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="text-orange-600 hover:text-orange-700 text-xs font-bold uppercase tracking-wide underline underline-offset-2"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* ─── Layout: sidebar + content ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 lg:gap-8 items-start">
          {/* ── Sidebar de filtros (desktop) ── */}
          <aside className="hidden lg:block sticky top-[100px] self-start">
            <FiltersSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              selectedSubcategories={selectedSubcategories}
              toggleCategory={toggleCategory}
              toggleSubcategory={toggleSubcategory}
            />
          </aside>

          {/* ── Drawer mobile ── */}
          {mobileFiltersOpen && (
            <div
              className="lg:hidden fixed inset-0 z-50 flex"
              role="dialog"
              aria-modal="true"
              aria-label="Filtros de productos"
            >
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="relative bg-white w-full max-w-sm ml-auto h-full overflow-y-auto p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-steel-900 font-black text-base uppercase">Filtros</h3>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-steel-500 hover:text-steel-900 hover:bg-steel-100 rounded transition-colors"
                    aria-label="Cerrar filtros"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <FiltersSidebar
                  categories={categories}
                  selectedCategories={selectedCategories}
                  selectedSubcategories={selectedSubcategories}
                  toggleCategory={toggleCategory}
                  toggleSubcategory={toggleSubcategory}
                />
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-5 bg-navy-600 hover:bg-navy-700 text-white py-3 font-black text-sm uppercase tracking-wide rounded transition-colors"
                >
                  Ver {totalResults} productos
                </button>
              </div>
            </div>
          )}

          {/* ── Resultados ── */}
          <div>
            {filtered.length === 0 ? (
              <div className="bg-steel-50 border border-steel-200 rounded-xl p-10 text-center">
                <div className="text-5xl mb-3">🔍</div>
                <h3 className="text-steel-900 font-black text-lg uppercase mb-2">
                  Sin resultados
                </h3>
                <p className="text-steel-500 text-sm mb-5 max-w-md mx-auto">
                  No encontramos productos con esos criterios. Intenta otra búsqueda o
                  limpia los filtros.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center justify-center bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 font-black text-sm uppercase tracking-wide rounded transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              filtered.map((cat) => {
                const theme = CATEGORY_THEME[cat.id] ?? CATEGORY_THEME["tratamiento-metales"];
                return (
                  <section key={cat.id} id={cat.id} className="mb-12 last:mb-0 scroll-mt-24">
                    <div className="flex items-start gap-4 mb-7">
                      <div
                        className={`${theme.header} w-1 h-9 rounded-full shrink-0 mt-1`}
                      />
                      <div>
                        <p className="text-navy-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                          {cat.icon} Categoría
                        </p>
                        <h2 className="text-lg sm:text-xl font-black text-steel-900 uppercase">
                          {cat.name}
                        </h2>
                      </div>
                    </div>

                    {cat.subcategories.map((sub) => (
                      <div key={sub.id} id={sub.id} className="mb-10 last:mb-0 scroll-mt-24">
                        <div
                          className={`flex items-center gap-4 mb-5 pl-4 pr-5 py-2.5 rounded-r-xl border-l-4 ${theme.subBanner}`}
                        >
                          <h3
                            className={`text-sm font-black uppercase tracking-widest leading-none ${theme.subText}`}
                          >
                            {sub.name}
                          </h3>
                          <div className="flex-1" />
                          <span
                            className={`text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full ${theme.subCount}`}
                          >
                            {sub.products.length} producto
                            {sub.products.length !== 1 ? "s" : ""}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                          {sub.products.map((product) => {
                            const isSaco =
                              product.formats.length === 1 &&
                              product.formats[0].name === "saco";
                            return (
                              <Link
                                key={product.id}
                                href={`/productos/${product.id}`}
                                className={`bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-md transition-all group flex flex-col ${theme.cardHover}`}
                              >
                                <div className={`${theme.header} px-4 py-2.5`}>
                                  <p className="text-white text-[10px] font-black uppercase tracking-widest leading-tight">
                                    {sub.name}
                                  </p>
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                  <h4
                                    className={`text-steel-900 font-black text-sm uppercase leading-tight mb-2 transition-colors ${theme.textHover}`}
                                  >
                                    {product.name}
                                  </h4>
                                  <p className="text-steel-500 text-xs leading-relaxed mb-3 flex-1">
                                    {product.shortDescription}
                                  </p>
                                  <p className="text-steel-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
                                    SKU: {product.sku}
                                  </p>

                                  <div className="border-t border-steel-100 pt-3 mb-3">
                                    <p className="text-steel-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                                      {isSaco ? "Presentación" : "Presentaciones"}
                                    </p>
                                    <div
                                      className={`flex gap-3 ${
                                        isSaco ? "justify-start" : "justify-around"
                                      }`}
                                    >
                                      {product.formats.map((fmt) => (
                                        <div
                                          key={fmt.name}
                                          className="flex flex-col items-center gap-0.5"
                                        >
                                          <div className="w-9 h-9 relative">
                                            <Image
                                              src={fmt.image}
                                              alt={fmt.label}
                                              fill
                                              className="object-contain"
                                            />
                                          </div>
                                          <span className="text-[9px] font-bold text-steel-700 uppercase">
                                            {fmt.label}
                                          </span>
                                          <span className="text-[9px] text-steel-500">
                                            {fmt.weight}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <span
                                    className={`block w-full text-center border-2 py-2 text-[10px] font-black uppercase tracking-wide transition-colors ${theme.cta}`}
                                  >
                                    Ver ficha técnica →
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </section>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar de filtros (reutilizable en desktop + drawer mobile)
function FiltersSidebar({
  categories,
  selectedCategories,
  selectedSubcategories,
  toggleCategory,
  toggleSubcategory,
}: {
  categories: ProductCategory[];
  selectedCategories: Set<string>;
  selectedSubcategories: Set<string>;
  toggleCategory: (id: string) => void;
  toggleSubcategory: (id: string) => void;
}) {
  return (
    <div className="border border-steel-200 rounded-xl overflow-hidden bg-white">
      <div className="bg-navy-950 px-4 py-3">
        <p className="text-white font-black text-xs uppercase tracking-widest">
          Filtrar por
        </p>
      </div>
      <div className="p-4 max-h-[600px] overflow-y-auto">
        {categories.map((cat) => {
          const theme = CATEGORY_THEME[cat.id] ?? CATEGORY_THEME["tratamiento-metales"];
          const isCatSelected = selectedCategories.has(cat.id);
          return (
            <div key={cat.id} className="mb-4 last:mb-0">
              <label className="flex items-start gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={isCatSelected}
                  onChange={() => toggleCategory(cat.id)}
                  className="mt-0.5 w-4 h-4 accent-navy-500 shrink-0 cursor-pointer"
                />
                <span className="text-steel-800 font-black text-xs uppercase tracking-wide leading-tight group-hover:text-navy-700 transition-colors">
                  {cat.icon} {cat.name}
                </span>
              </label>
              <ul className="ml-6 mt-2 space-y-1.5">
                {cat.subcategories.map((sub) => {
                  const isSubSelected = selectedSubcategories.has(sub.id);
                  return (
                    <li key={sub.id}>
                      <label className="flex items-start gap-2 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={isSubSelected}
                          onChange={() => toggleSubcategory(sub.id)}
                          className="mt-0.5 w-3.5 h-3.5 accent-orange-500 shrink-0 cursor-pointer"
                        />
                        <span
                          className={`text-xs leading-tight transition-colors ${
                            isSubSelected
                              ? theme.subText + " font-bold"
                              : "text-steel-600 group-hover:text-steel-900"
                          }`}
                        >
                          {sub.name}{" "}
                          <span className="text-steel-400">
                            ({sub.products.length})
                          </span>
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
