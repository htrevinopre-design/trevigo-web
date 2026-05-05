import { MetadataRoute } from "next";
import { COMPANY, PRODUCT_CATEGORIES, INDUSTRIES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((ind) => ({
    url: `${baseUrl}/industrias/${ind.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Individual product detail pages (real URLs, not anchors)
  const productPages: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.flatMap((cat) =>
    cat.subcategories.flatMap((sub) =>
      sub.products.map((product) => ({
        url: `${baseUrl}/productos/${product.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
    )
  );

  return [...staticPages, ...industryPages, ...productPages];
}
