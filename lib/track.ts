// Disparo seguro de eventos GA4. La etiqueta gtag ya se carga en app/layout.tsx;
// este helper solo emite el evento si gtag está disponible (no rompe en SSR).
export function track(event: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", event, params);
}
