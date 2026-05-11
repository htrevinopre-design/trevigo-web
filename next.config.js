/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera sitio estático para máximo rendimiento y SEO
  // Para producción, cambiar a export si se quiere HTML puro
  // output: 'export',

  // Compresión de imágenes
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // 301 redirects desde URLs del sitio anterior en Shopify
  // (capturan equity SEO de backlinks viejos + reemplazan 404s en Bing/Google)
  async redirects() {
    return [
      // ── Pages específicas del Shopify viejo ──
      {
        source: "/pages/productos-1",
        destination: "/productos",
        permanent: true,
      },
      {
        source: "/pages/pintura-electrostatica",
        destination: "/servicios/pintura-electrostatica",
        permanent: true,
      },
      {
        source: "/pages/menu-general",
        destination: "/productos",
        permanent: true,
      },
      {
        source: "/pages/optimizacion-de-procesos-fisico-quimicos",
        destination: "/servicios/optimizacion-procesos",
        permanent: true,
      },

      // ── Blogs del Shopify viejo ──
      {
        source: "/blogs/3-blogs",
        destination: "/recursos",
        permanent: true,
      },

      // ── Productos específicos con mapeo manual ──
      {
        source: "/products/limpiador-acido-acero-inoxidable",
        destination: "/productos/desoxidante-acero-inoxidable",
        permanent: true,
      },
      {
        source: "/products/limpiador-acido-para-acero-inoxidable-copy",
        destination: "/productos/desoxidante-acero-inoxidable",
        permanent: true,
      },
      {
        source: "/products/fluido-termico-copy",
        destination: "/productos/fluido-termico",
        permanent: true,
      },
      {
        source: "/products/aceites-de-motor-copy",
        destination: "/productos/aceites-motor",
        permanent: true,
      },
      {
        source: "/products/sosa-caustica-escamas",
        destination: "/productos/sosa-caustica-escamas",
        permanent: true,
      },
      {
        source: "/products/lubricante-grado-alimento-copy",
        destination: "/productos/lubricante-grado-alimento",
        permanent: true,
      },
      {
        source: "/products/desmoldante-industrial-copy",
        destination: "/productos/desmoldante-industrial",
        permanent: true,
      },

      // ── Catch-all para cualquier otra URL vieja de Shopify ──
      // (cualquier /products/algo no mapeado arriba va al catálogo)
      {
        source: "/products/:path*",
        destination: "/productos",
        permanent: true,
      },
      // (cualquier /pages/algo no mapeado va al home)
      {
        source: "/pages/:path*",
        destination: "/",
        permanent: true,
      },
      // (cualquier /blogs/algo no mapeado va a recursos)
      {
        source: "/blogs/:path*",
        destination: "/recursos",
        permanent: true,
      },
      // (cualquier /collections/algo va al catálogo — clásico de Shopify)
      {
        source: "/collections/:path*",
        destination: "/productos",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
