"use client";

import { track } from "@/lib/track";

/** Enlace que registra un evento GA4 al hacer clic (WhatsApp, email, etc.). */
export default function TrackedLink({
  href,
  event,
  source,
  className,
  target,
  rel,
  children,
}: {
  href: string;
  event: string;
  source: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => track(event, { source })}
    >
      {children}
    </a>
  );
}
