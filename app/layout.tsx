import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.name} — Químicos Industriales & Tratamiento de Metales | Monterrey, México`,
    template: `%s | ${COMPANY.shortName} — Químicos Industriales`,
  },
  description:
    "Industrias Trevigo: fabricantes y distribuidores de productos químicos para tratamiento de metales, limpieza industrial y tratamiento de aguas residuales en Monterrey, N.L. Más de 35 años de experiencia. Fosfatos, desoxidantes, coagulantes, floculantes y más.",
  keywords: [
    "químicos industriales Monterrey",
    "tratamiento de metales México",
    "fosfatado industrial",
    "desoxidantes industriales",
    "coagulantes floculantes",
    "tratamiento aguas residuales industriales",
    "inhibidores corrosion",
    "removedor pintura industrial",
    "tropicalizado galvanizado Monterrey",
    "industrias trevigo",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.url }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Químicos Industriales & Tratamiento de Metales`,
    description:
      "Más de 35 años fabricando y distribuyendo productos químicos para la industria mexicana. Fosfatos, coagulantes, inhibidores de corrosión y servicios de superficie en Monterrey, N.L.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Industrias Trevigo — Químicos Industriales Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Químicos Industriales`,
    description:
      "35+ años fabricando productos químicos para la industria mexicana. Monterrey, N.L.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: COMPANY.url,
  },
};

// Schema JSON-LD para Organization + LocalBusiness
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${COMPANY.url}/#organization`,
  name: COMPANY.legalName,
  alternateName: COMPANY.shortName,
  url: COMPANY.url,
  logo: {
    "@type": "ImageObject",
    url: `${COMPANY.url}/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${COMPANY.url}/og-image.jpg`,
  description: COMPANY.description,
  foundingDate: COMPANY.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.coordinates.lat,
    longitude: COMPANY.coordinates.lng,
  },
  telephone: COMPANY.phone,
  email: COMPANY.email,
  sameAs: [COMPANY.social.linkedin, COMPANY.social.facebook],
  areaServed: {
    "@type": "Country",
    name: "México",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productos y Servicios Químicos Industriales",
  },
  knowsAbout: [
    "Tratamiento de metales",
    "Fosfatado industrial",
    "Tratamiento de aguas residuales",
    "Químicos industriales",
    "Galvanizado",
    "Tropicalizado",
    "Inhibidores de corrosión",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* ── WhatsApp floating button ── */}
        <a
          href="https://wa.me/528120403135"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar asesor por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-xl font-bold text-sm transition-all hover:scale-105 group"
        >
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="hidden sm:inline">Contactar asesor</span>
        </a>
      </body>
    </html>
  );
}
