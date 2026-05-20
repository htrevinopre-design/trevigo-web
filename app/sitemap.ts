import { MetadataRoute } from "next";
import { COMPANY, PRODUCT_CATEGORIES, INDUSTRIES } from "@/lib/data";
import { ARTICLES } from "@/lib/articles";
import { SERVICES_CONTENT } from "@/lib/services-content";
import { GLOSSARY } from "@/lib/glossary";
import { DATOS } from "@/lib/datos";
import { getSubcategoryContentSlugs } from "@/lib/product-subcategories-content";
import { getCategoryContentSlugs } from "@/lib/product-categories-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;
  const now = new Date();

  // ── Static pages ────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/productos`,         lastModified: now, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${baseUrl}/servicios`,         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industrias`,        lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/nosotros`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contacto`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sak`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/surface-ai`,        lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/recursos`,          lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${baseUrl}/casos-de-exito`,    lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/glosario`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/datos`,             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  // ── Artículos técnicos / blog ────────────────────────────────────
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${baseUrl}/recursos/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Industry pages (each has its own URL + content) ─────────────
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industrias/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Product detail pages (/productos/[id]) ───────────────────────
  // These are the highest-value pages for long-tail keyword ranking
  const allProducts = PRODUCT_CATEGORIES.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );
  const productDetailPages: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: `${baseUrl}/productos/${product.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Service detail pages (/servicios/[slug]) ────────────────────
  // Páginas dedicadas con contenido técnico profundo + FAQ schema
  const servicePages: MetadataRoute.Sitemap = SERVICES_CONTENT.map((svc) => ({
    url: `${baseUrl}/servicios/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── Glossary detail pages (/glosario/[slug]) ────────────────────
  // Long-tail SEO con definiciones técnicas
  const glossaryPages: MetadataRoute.Sitemap = GLOSSARY.map((g) => ({
    url: `${baseUrl}/glosario/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Category landing pages (/productos/linea/[id]) ──────────────
  // 4 líneas top-level: tratamiento-metales, tratamiento-aguas,
  // lubricantes-aceites, materias-primas. Captura queries de mayor
  // volumen como "químicos para tratamiento de metales".
  const categoryLineaPages: MetadataRoute.Sitemap = getCategoryContentSlugs().map(
    (id) => ({
      url: `${baseUrl}/productos/linea/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.92,
    })
  );

  // ── Subcategory landing pages (/productos/categoria/[id]) ───────
  // Páginas dedicadas por línea de producto (sellos, inhibidores, etc.)
  // Captura queries category-level con alto volumen y intent comercial.
  const subcategoryPages: MetadataRoute.Sitemap = getSubcategoryContentSlugs().map(
    (id) => ({
      url: `${baseUrl}/productos/categoria/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })
  );

  // ── Data pages (/datos/[slug]) ──────────────────────────────────
  // Reverse outreach SEO: páginas estadísticas que los periodistas
  // buscan en Google y citan como fuente.
  const datoPages: MetadataRoute.Sitemap = DATOS.map((d) => ({
    url: `${baseUrl}/datos/${d.slug}`,
    lastModified: new Date(d.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...articlePages,
    ...industryPages,
    ...productDetailPages,
    ...categoryLineaPages,
    ...subcategoryPages,
    ...servicePages,
    ...glossaryPages,
    ...datoPages,
  ];
}
