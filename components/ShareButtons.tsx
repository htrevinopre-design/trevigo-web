"use client";

import { useState } from "react";

interface ShareButtonsProps {
  /** URL completa de la página a compartir */
  url: string;
  /** Título de la página (usado por Facebook/LinkedIn como texto de pre-relleno) */
  title: string;
  /** Variant visual — "dark" sobre hero oscuro, "light" sobre fondo blanco */
  variant?: "dark" | "light";
}

export default function ShareButtons({
  url,
  title,
  variant = "dark",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback para navegadores antiguos
      const tmp = document.createElement("textarea");
      tmp.value = url;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const isDark = variant === "dark";

  // Estilos por variant
  const labelClass = isDark
    ? "text-steel-400 text-xs font-bold uppercase tracking-widest"
    : "text-steel-500 text-xs font-bold uppercase tracking-widest";

  const buttonBase =
    "inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-colors border";

  const buttonNeutral = isDark
    ? `${buttonBase} border-white/20 text-white hover:border-white/50 hover:bg-white/5`
    : `${buttonBase} border-steel-300 text-steel-700 hover:border-steel-500 hover:bg-steel-50`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={labelClass}>Comparte:</span>

      {/* Copiar URL */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar enlace"
        className={buttonNeutral}
      >
        {copied ? (
          <>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Copiado
          </>
        ) : (
          <>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Copiar URL
          </>
        )}
      </button>

      {/* Facebook */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Facebook"
        className={`${buttonBase} border-[#1877F2] bg-[#1877F2] text-white hover:bg-[#0e5fc7] hover:border-[#0e5fc7]`}
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Facebook
      </a>

      {/* LinkedIn */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en LinkedIn"
        className={`${buttonBase} border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-[#084d92] hover:border-[#084d92]`}
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>

      {/* Suppress unused-var warning in dev */}
      <span className="hidden">{title}</span>
    </div>
  );
}
