import Link from "next/link";
import { COMPANY } from "@/lib/data";
import PhoneLink from "@/components/PhoneLink";
import TrackedLink from "@/components/TrackedLink";

/** Minimal header/footer for the English (/en) section. */

export function EnHeader({ esHref }: { esHref: string }) {
  return (
    <header className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/en" className="font-bold tracking-tight text-lg">
          Industrias <span className="text-navy-400">Trevigo</span>
          <span className="block text-[11px] font-normal text-white/60">
            Industrial Chemicals · Monterrey, Mexico
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/en#services" className="text-white/80 hover:text-white transition-colors hidden sm:inline">
            Services
          </Link>
          <Link href="/en#contact" className="text-white/80 hover:text-white transition-colors hidden sm:inline">
            Contact
          </Link>
          <Link
            href={esHref}
            className="border border-white/30 rounded px-3 py-1.5 text-white/90 hover:bg-white/10 transition-colors"
          >
            Español
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function EnFooter() {
  const tel = `tel:${COMPANY.phone.replace(/\s|\(|\)|-/g, "")}`;
  return (
    <footer id="contact" className="bg-navy-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-bold text-lg mb-2">Talk to our bilingual technical team</p>
          <p className="text-white/70 text-sm">
            {COMPANY.legalName} · San Nicolás de los Garza, Nuevo León, Mexico.
            35+ years supplying the Mexican manufacturing supply chain.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p>
            <span className="text-white/50">Phone: </span>
            <PhoneLink href={tel} source="en_footer" className="text-navy-400 hover:text-white transition-colors">
              +52 {COMPANY.phone}
            </PhoneLink>
          </p>
          <p>
            <span className="text-white/50">Email: </span>
            <TrackedLink
              href={`mailto:${COMPANY.email}`}
              event="email_click"
              source="en_footer"
              className="text-navy-400 hover:text-white transition-colors"
            >
              {COMPANY.email}
            </TrackedLink>
          </p>
          <p>
            <TrackedLink
              href="https://wa.me/528120403135?text=Hello%2C%20I%27m%20contacting%20you%20from%20your%20English%20site."
              event="whatsapp_click"
              source="en_footer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2 font-semibold transition-colors"
            >
              WhatsApp us in English
            </TrackedLink>
          </p>
        </div>
        <div className="text-sm text-white/60">
          <p className="mb-2 font-semibold text-white/80">Response commitment</p>
          <p>
            Written replies within one business day. Plant visits available across the
            Monterrey–Saltillo corridor and scheduled trips nationwide.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {COMPANY.legalName} · <Link href="/" className="hover:text-white/70">Sitio en español</Link>
      </div>
    </footer>
  );
}
