"use client";

import { track } from "@/lib/track";

/** Enlace tel: que registra el evento phone_click en GA4 al hacer clic. */
export default function PhoneLink({
  href,
  className,
  source,
  children,
}: {
  href: string;
  className?: string;
  source: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => track("phone_click", { source })}>
      {children}
    </a>
  );
}
