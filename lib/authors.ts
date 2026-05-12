// ============================================================
// AUTORES — Bylines y schema.org Person para E-E-A-T
// Cada artículo técnico, dato y caso es atribuido a un humano
// real con credenciales verificables, no a la "organización".
// ============================================================

export interface Author {
  slug: string;
  name: string;
  role: string;
  company: string;
  shortBio: string;
  longBio: string;
  yearsExperience?: number;
  expertise: string[];
  /** Perfil de LinkedIn verificable (usado en schema.org sameAs para E-E-A-T) */
  linkedin?: string;
  /** Para concordancia gramatical en español ("el autor" / "la autora") */
  gender: "masculino" | "femenino";
}

export const AUTHORS: Record<string, Author> = {
  "blanca-garza": {
    slug: "blanca-garza",
    name: "Blanca Garza",
    role: "Jefa de Ventas Técnicas",
    company: "Industrias Trevigo",
    shortBio:
      "35+ años en la industria química, asesorando a empresas nacionales e internacionales.",
    longBio:
      "Blanca Garza lidera el área de ventas técnicas de Industrias Trevigo y cuenta con más de 35 años de experiencia en la industria química mexicana. Ha trabajado con plantas nacionales e internacionales en proyectos de pretratamiento de superficies metálicas, tratamiento de aguas residuales industriales y optimización de procesos químicos. Su práctica diaria incluye diagnóstico técnico en planta, pruebas de jarras para tratamiento de aguas, ajuste de baños de fosfatado y soporte a la cadena automotriz y metalmecánica del norte de México.",
    yearsExperience: 35,
    expertise: [
      "Tratamiento de superficies metálicas",
      "Fosfatado y pasivado industrial",
      "Tratamiento de aguas residuales (NOM-001-SEMARNAT)",
      "Asesoría técnica a OEMs y tier 1 automotriz",
      "Pruebas de jarras y optimización de PTAR",
    ],
    linkedin:
      "https://www.linkedin.com/in/blanca-esthela-garza-alvarado-25ba79a9/",
    gender: "femenino",
  },
  "arturo-trevino": {
    slug: "arturo-trevino",
    name: "Arturo Treviño",
    role: "Director General",
    company: "Industrias Trevigo",
    shortBio:
      "Director General de Industrias Trevigo, empresa fundada en 1989 en San Nicolás de los Garza, N.L.",
    longBio:
      "Arturo Treviño dirige Industrias Trevigo, empresa de químicos industriales fundada en 1989 en San Nicolás de los Garza, Nuevo León. Lidera la estrategia comercial y operativa de la compañía con enfoque en la cadena automotriz, metalmecánica, alimenticia y de tratamiento de aguas industriales. Tiene experiencia directa con las dinámicas del sector manufacturero del noreste mexicano: relación con OEMs automotrices, ciclos de proveeduría tier 1 y tier 2, y el impacto de tendencias como el nearshoring sobre la demanda de químicos industriales en la región.",
    expertise: [
      "Estrategia comercial B2B en química industrial",
      "Cadena de suministro automotriz en Nuevo León",
      "Mercado mexicano de químicos para manufactura",
      "Nearshoring y manufactura de exportación",
    ],
    linkedin: "https://www.linkedin.com/in/arturo-trevi%C3%B1o-a7361629/",
    gender: "masculino",
  },
};

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS[slug];
}

export const DEFAULT_AUTHOR_SLUG = "blanca-garza";
