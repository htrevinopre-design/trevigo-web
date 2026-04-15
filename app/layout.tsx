import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmartChatWidget from "@/components/SmartChatWidget";
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

        {/* ── Smart chat widget (replaces static WhatsApp button) ── */}
        <SmartChatWidget />
      </body>
    </html>
  );
}
