"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "trevigo_cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (private browsing, etc.) — show once, don't persist
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de uso de cookies"
      className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pr-4 sm:pr-24">
        <p className="text-steel-300 text-xs sm:text-sm leading-relaxed flex-1">
          Usamos cookies propias y de terceros (Google Analytics y Microsoft
          Clarity) para mejorar tu experiencia y entender cómo se usa el sitio.
          Consulta nuestro{" "}
          <Link
            href="/aviso-privacidad"
            className="text-orange-400 hover:text-orange-300 underline underline-offset-2 font-semibold"
          >
            Aviso de Privacidad
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={dismiss}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 text-xs font-black uppercase tracking-wider transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={dismiss}
            aria-label="Cerrar aviso de cookies"
            className="w-8 h-8 flex items-center justify-center text-steel-400 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
