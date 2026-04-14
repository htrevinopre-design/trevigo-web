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
};

module.exports = nextConfig;
