import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmartChatWidget from "@/components/SmartChatWidget";
import CookieBanner from "@/components/CookieBanner";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.name} | Químicos Industriales en Monterrey`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "Industrias Trevigo: fabricantes y distribuidores de productos químicos para tratamiento de metales, limpieza industrial y tratamiento de aguas residuales en Monterrey, N.L. Más de 35 años de experiencia. Fosfatos, desoxidantes, coagulantes, floculantes y más.",
  keywords: [
    "químicos industriales Monterrey",
    "productos químicos Monterrey",
    "tratamiento de metales México",
    "fosfatado industrial",
    "fosfatizado industrial Monterrey",
    "desoxidantes industriales",
    "acido fosforico desoxidante",
    "coagulantes floculantes",
    "tratamiento aguas residuales industriales",
    "inhibidores de corrosion",
    "removedor pintura industrial",
    "tropicalizado galvanizado Monterrey",
    "pasivado industrial",
    "decapado industrial",
    "limpieza industrial Monterrey",
    "industrias trevigo",
    "trevigo quimicos",
    "proveedor quimicos Nuevo León",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.url }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  verification: {
    google: "wip5Qc-dhzHnKzsq3KvCnm0kOUJ1hTlCkJgq9kucNLU",
  },
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
    title: `${COMPANY.name} | Químicos Industriales & Tratamiento de Metales`,
    description:
      "Más de 35 años fabricando y distribuyendo productos químicos para la industria mexicana. Fosfatos, coagulantes, inhibidores de corrosión y servicios de superficie en Monterrey, N.L.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Industrias Trevigo | Químicos Industriales Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Químicos Industriales`,
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
  sameAs: [
    COMPANY.social.linkedin,
    COMPANY.social.facebook,
    COMPANY.social.googleBusiness,
  ],
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

        {/* ── Cookie consent banner ── */}
        <CookieBanner />

        {/* ── Google Analytics ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WJ848EVPGN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJ848EVPGN');
          `}
        </Script>

        {/* ── Microsoft Clarity ── */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wn1oq46ely");
          `}
        </Script>
      </body>
    </html>
  );
}
