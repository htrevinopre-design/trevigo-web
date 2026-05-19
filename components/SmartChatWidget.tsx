"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Icon, type IconName } from "@/components/Icon";

// ─── Constants ───────────────────────────────────────────────────────────────
const WA_NUMBER = "528120403135";

type CotizarType = "servicio" | "producto";

type Stage =
  | "hidden"           // not yet triggered
  | "bubble"           // notification bubble shown, chat closed
  | "chat"             // chat open, showing initial quick-action buttons
  | "cotizar-servicio" // flow: picking service type
  | "cotizar-producto" // flow: picking product category
  | "cotizar-empresa"  // flow: entering company name (común para producto y servicio)
  | "cotizar-urgencia" // flow: picking urgency (común para producto y servicio)
  | "done";            // flow complete, final CTA shown

const SERVICIOS = [
  "Tratamiento de metales",
  "Fosfatizado",
  "Galvanizado",
  "Tratamiento de aguas",
  "Despintado",
  "Otro",
];

const PRODUCTOS = [
  "Tratamiento de metales",
  "Tratamiento de aguas",
  "Lubricantes y aceites",
  "Materias primas",
  "Limpieza (SAK)",
  "Otro",
];

const URGENCIAS: { icon: IconName; label: string; value: string }[] = [
  { icon: "fire",          label: "Urgente (hoy o mañana)", value: "Urgente" },
  { icon: "calendar",      label: "Esta semana",            value: "Esta semana" },
  { icon: "calendar-days", label: "Sin prisa",              value: "Sin prisa" },
];

// ─── WhatsApp icon (inline SVG to avoid extra dep) ───────────────────────────
function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ─── Bot avatar ───────────────────────────────────────────────────────────────
function BotAvatar({ size = "sm" }: { size?: "sm" | "md" }) {
  const sz = size === "md" ? "w-9 h-9" : "w-6 h-6";
  const imgSz = size === "md" ? 28 : 18;
  return (
    <div
      className={`${sz} rounded-full bg-white border border-steel-200 shadow-sm flex items-center justify-center shrink-0 overflow-hidden`}
      aria-label="Industrias Trevigo"
    >
      <Image
        src="/logo.png"
        alt="Trevigo"
        width={imgSz}
        height={imgSz}
        className="object-contain"
      />
    </div>
  );
}

// ─── Chat bubble (bot message) ────────────────────────────────────────────────
function BotMsg({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 animate-fade-in">
      <BotAvatar />
      <div className="bg-steel-100 rounded-2xl rounded-tl-none px-3 py-2 text-xs text-steel-800 leading-relaxed max-w-[85%]">
        {children}
      </div>
    </div>
  );
}

// ─── Chat bubble (user reply) ─────────────────────────────────────────────────
function UserMsg({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end animate-fade-in">
      <div className="bg-navy-600 rounded-2xl rounded-tr-none px-3 py-2 text-xs text-white max-w-[85%]">
        {children}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function SmartChatWidget() {
  const [stage, setStage] = useState<Stage>("hidden");
  const [triggered, setTriggered] = useState(false);
  const [cotizarType, setCotizarType] = useState<CotizarType>("servicio");
  const [selection, setSelection] = useState(""); // servicio o categoría de producto
  const [empresa, setEmpresa] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const empresaRef = useRef<HTMLInputElement>(null);

  // ── Smart trigger: 13 s OR 40 % scroll ─────────────────────────────────────
  const trigger = useCallback(() => {
    setTriggered((prev) => {
      if (!prev) setStage("bubble");
      return true;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(trigger, 13000);
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total >= 0.4) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [trigger]);

  // Auto-scroll chat body to bottom on stage change
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
    // Focus empresa input when that step appears
    if (stage === "cotizar-empresa") {
      setTimeout(() => empresaRef.current?.focus(), 80);
    }
  }, [stage]);

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const openWA = (msg: string) =>
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

  // Etiqueta usada en el mensaje de WhatsApp ("Servicio" o "Producto")
  const typeLabel = cotizarType === "producto" ? "Producto" : "Servicio";

  const buildLeadMsg = (urgencia?: string) =>
    `Hola, me interesa cotizar con Industrias Trevigo.\n\n` +
    `${typeLabel}: ${selection}\n` +
    `Empresa: ${empresa || "Por definir"}` +
    (urgencia ? `\nUrgencia: ${urgencia}` : "") +
    `\n\n¿Podrían contactarme?`;

  const handleQuickAction = (key: string) => {
    if (key === "cotizar-servicio") {
      setCotizarType("servicio");
      return setStage("cotizar-servicio");
    }
    if (key === "cotizar-producto") {
      setCotizarType("producto");
      return setStage("cotizar-producto");
    }
    if (key === "ver-catalogo") return (window.location.href = "/productos");
    if (key === "whatsapp")
      return openWA("Hola, estoy interesado en sus servicios de Trevigo. Me gustaría cotizar.");
    if (key === "cliente")
      return openWA("Hola, soy cliente de Industrias Trevigo y necesito apoyo con mi cuenta.");
  };

  const handleSelection = (s: string) => {
    setSelection(s);
    setStage("cotizar-empresa");
  };

  const handleEmpresa = () => {
    if (empresa.trim()) setStage("cotizar-urgencia");
  };

  const handleUrgencia = (u: string) => {
    openWA(buildLeadMsg(u));
    setStage("done");
  };

  const isOpen = stage !== "hidden" && stage !== "bubble";

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── NOTIFICATION BUBBLE (before chat is opened) ── */}
      {stage === "bubble" && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 animate-slide-up">
          {/* Teaser card */}
          <div className="bg-white rounded-2xl shadow-xl border border-steel-100 px-4 py-3 flex items-center gap-3 max-w-[230px]">
            <BotAvatar size="md" />
            <p className="text-steel-800 text-xs font-medium leading-snug flex-1">
              ¿Estás cotizando algo?<br />
              <span className="text-navy-600 font-bold inline-flex items-center gap-1">
                Te ayudo rápido
                <Icon name="arrow-down" className="w-3 h-3" />
              </span>
            </p>
            <button
              onClick={() => setStage("hidden")}
              className="text-steel-300 hover:text-steel-500 text-xs shrink-0 leading-none"
              aria-label="Cerrar notificación"
            >
              ✕
            </button>
          </div>

          {/* Floating chat button */}
          <button
            onClick={() => setStage("chat")}
            className="w-14 h-14 rounded-full bg-navy-600 hover:bg-navy-700 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105"
            aria-label="Abrir chat con asesor"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      )}

      {/* ── CHAT PANEL ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chat con asesor Trevigo"
          className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-[340px] rounded-2xl shadow-2xl bg-white border border-steel-200 flex flex-col overflow-hidden animate-slide-up"
          style={{ maxHeight: "min(520px, calc(100dvh - 6rem))" }}
        >
          {/* ── Header ── */}
          <div className="bg-navy-950 px-4 py-3 flex items-center gap-3 shrink-0">
            <BotAvatar size="md" />
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">Asesor Trevigo</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                <p className="text-steel-400 text-[10px] truncate">Respuesta rápida · Monterrey, NL</p>
              </div>
            </div>
            <button
              onClick={() => setStage(triggered ? "bubble" : "hidden")}
              className="text-steel-500 hover:text-white transition-colors p-1 shrink-0"
              aria-label="Cerrar chat"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Trust bar ── */}
          <div className="bg-navy-900 px-4 py-1.5 flex items-center gap-4 overflow-x-auto shrink-0 scrollbar-none">
            {[
              { icon: "bolt" as const,       label: "Respuesta rápida" },
              { icon: "map-pin" as const,    label: "Todo NL" },
              { icon: "building-2" as const, label: "+500 clientes" },
            ].map((t) => (
              <span key={t.label} className="text-[9px] text-navy-300 font-semibold whitespace-nowrap inline-flex items-center gap-1">
                <Icon name={t.icon} className="w-3 h-3" />
                {t.label}
              </span>
            ))}
          </div>

          {/* ── Chat body (scrollable) ── */}
          <div ref={bodyRef} className="flex flex-col gap-3 p-4 overflow-y-auto flex-1">

            {/* Opening message — always visible once chat is open */}
            <BotMsg>
              <span className="inline-flex items-center gap-1.5">
                ¿Buscas una cotización? Te ayudo rápido
                <Icon name="arrow-down" className="w-3 h-3" />
              </span>
            </BotMsg>

            {/* ── Stage: initial quick actions ── */}
            {stage === "chat" && (
              <div className="flex flex-col gap-2 ml-8 animate-fade-in">
                {([
                  { key: "cotizar-producto", icon: "flask",            label: "Cotizar producto" },
                  { key: "cotizar-servicio", icon: "wrench",           label: "Cotizar servicio" },
                  { key: "ver-catalogo",     icon: "magnifying-glass", label: "Ver catálogo" },
                  { key: "whatsapp",         icon: "phone",            label: "Hablar por WhatsApp" },
                  { key: "cliente",          icon: "check-circle",     label: "Ya soy cliente" },
                ] as const).map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => handleQuickAction(btn.key)}
                    className="w-full text-left border border-navy-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-navy-700 hover:bg-navy-50 hover:border-navy-400 transition-all inline-flex items-center gap-2"
                  >
                    <Icon name={btn.icon} className="w-4 h-4 text-navy-600 shrink-0" />
                    <span>{btn.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* ── Flow: service type ── */}
            {cotizarType === "servicio" && ["cotizar-servicio","cotizar-empresa","cotizar-urgencia","done"].includes(stage) && (
              <>
                <UserMsg>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="wrench" className="w-3.5 h-3.5" />
                    Cotizar servicio
                  </span>
                </UserMsg>
                <BotMsg>¿Qué tipo de servicio necesitas?</BotMsg>
              </>
            )}

            {stage === "cotizar-servicio" && (
              <div className="flex flex-wrap gap-2 ml-8 animate-fade-in">
                {SERVICIOS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSelection(s)}
                    className="border border-navy-200 rounded-full px-3 py-1.5 text-[11px] font-semibold text-navy-700 hover:bg-navy-50 hover:border-navy-400 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* ── Flow: product category ── */}
            {cotizarType === "producto" && ["cotizar-producto","cotizar-empresa","cotizar-urgencia","done"].includes(stage) && (
              <>
                <UserMsg>
                  <span className="inline-flex items-center gap-1.5">
                    <Icon name="flask" className="w-3.5 h-3.5" />
                    Cotizar producto
                  </span>
                </UserMsg>
                <BotMsg>¿Qué tipo de producto necesitas?</BotMsg>
              </>
            )}

            {stage === "cotizar-producto" && (
              <div className="flex flex-wrap gap-2 ml-8 animate-fade-in">
                {PRODUCTOS.map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSelection(p)}
                    className="border border-navy-200 rounded-full px-3 py-1.5 text-[11px] font-semibold text-navy-700 hover:bg-navy-50 hover:border-navy-400 transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* ── Flow: company ── */}
            {["cotizar-empresa","cotizar-urgencia","done"].includes(stage) && (
              <>
                <UserMsg>{selection}</UserMsg>
                <BotMsg>¿A nombre de qué empresa?</BotMsg>
              </>
            )}

            {stage === "cotizar-empresa" && (
              <div className="ml-8 flex gap-2 animate-fade-in">
                <input
                  ref={empresaRef}
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleEmpresa()}
                  className="flex-1 border border-steel-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-navy-400 text-steel-800 bg-steel-50"
                />
                <button
                  onClick={handleEmpresa}
                  disabled={!empresa.trim()}
                  className="bg-navy-600 disabled:opacity-30 text-white rounded-xl px-3 py-2 text-sm font-bold transition-all hover:bg-navy-700"
                  aria-label="Continuar"
                >
                  →
                </button>
              </div>
            )}

            {/* ── Flow: urgency ── */}
            {["cotizar-urgencia","done"].includes(stage) && (
              <>
                <UserMsg>{empresa || "Por definir"}</UserMsg>
                <BotMsg>¿Qué tan urgente es tu cotización?</BotMsg>
              </>
            )}

            {stage === "cotizar-urgencia" && (
              <div className="flex flex-col gap-2 ml-8 animate-fade-in">
                {URGENCIAS.map(({ icon, label, value }) => (
                  <button
                    key={value}
                    onClick={() => handleUrgencia(value)}
                    className="w-full text-left border border-navy-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-navy-700 hover:bg-navy-50 hover:border-navy-400 transition-all inline-flex items-center gap-2"
                  >
                    <Icon name={icon} className="w-4 h-4 text-navy-600 shrink-0" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* ── Done: confirmation ── */}
            {stage === "done" && (
              <>
                <BotMsg>
                  ¡Perfecto! Te enviamos los detalles por WhatsApp ahora mismo.
                </BotMsg>
                <div className="ml-8 animate-fade-in">
                  <button
                    onClick={() => openWA(buildLeadMsg())}
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <WaIcon className="w-4 h-4" />
                    Abrir WhatsApp
                  </button>
                  <p className="text-steel-400 text-[10px] text-center mt-2">
                    Se abrirá WhatsApp con tu solicitud pre-llenada
                  </p>
                </div>
              </>
            )}
          </div>

          {/* ── Footer ── */}
          <div className="border-t border-steel-100 px-4 py-2.5 flex items-center justify-between shrink-0 bg-steel-50">
            <p className="text-[9px] text-steel-400">Industrias Trevigo · Monterrey, NL</p>
            <button
              onClick={() => openWA("Hola, estoy interesado en sus servicios de Trevigo.")}
              className="flex items-center gap-1 text-[10px] font-bold text-green-600 hover:text-green-700 transition-colors"
            >
              <WaIcon className="w-3 h-3" />
              WhatsApp directo
            </button>
          </div>
        </div>
      )}
    </>
  );
}
