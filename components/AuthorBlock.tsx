import { Author } from "@/lib/authors";

interface Props {
  author: Author;
  variant?: "byline" | "full";
  date?: string; // ISO date for "Publicado / actualizado"
}

/**
 * AuthorBlock — Atribución humana visible para E-E-A-T.
 *
 * - "byline": versión compacta para insertar arriba del contenido (hero o below H1)
 * - "full":   versión grande con bio extendida para insertar al final del artículo
 */
export default function AuthorBlock({ author, variant = "byline", date }: Props) {
  if (variant === "byline") {
    return (
      <div className="flex flex-wrap items-center gap-3 text-steel-400">
        <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
          <span className="text-orange-400 font-black text-sm">
            {author.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-steel-300 text-sm font-bold leading-tight">
            Por {author.name}
            {author.linkedin && (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={`LinkedIn de ${author.name}`}
                className="inline-flex items-center justify-center w-5 h-5 ml-1.5 align-middle text-steel-400 hover:text-orange-400 transition-colors"
                title="Perfil verificado en LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            )}
          </span>
          <span className="text-steel-500 text-xs leading-tight">
            {author.role} · {author.company}
          </span>
        </div>
        {date && (
          <>
            <span className="text-steel-600 mx-2">·</span>
            <time
              dateTime={date}
              className="text-steel-500 text-xs whitespace-nowrap"
            >
              {formatDate(date)}
            </time>
          </>
        )}
      </div>
    );
  }

  const aboutLabel =
    author.gender === "femenino" ? "Sobre la autora" : "Sobre el autor";

  return (
    <section className="bg-steel-50 border-y border-steel-200 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-5">
          {aboutLabel} · Industrias Trevigo
        </p>

        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-navy-50 border-2 border-navy-200 flex items-center justify-center shrink-0">
            <span className="text-navy-700 font-black text-lg">
              {author.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-steel-900 font-black text-lg leading-tight">
                {author.name}
              </h3>
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`LinkedIn de ${author.name}`}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-[#0A66C2] hover:bg-[#0958a6] text-white text-[10px] font-bold uppercase tracking-wider rounded transition-colors"
                  title="Perfil verificado en LinkedIn"
                >
                  <LinkedInIcon className="w-3 h-3" />
                  LinkedIn
                </a>
              )}
            </div>
            <p className="text-orange-600 text-sm font-bold mb-3">
              {author.role} · {author.company}
            </p>
            <p className="text-steel-700 text-sm leading-relaxed mb-4">
              {author.longBio}
            </p>

            {author.expertise.length > 0 && (
              <div>
                <p className="text-steel-500 text-[10px] font-black uppercase tracking-widest mb-2">
                  Áreas de experiencia
                </p>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((e) => (
                    <span
                      key={e}
                      className="inline-block bg-white border border-steel-200 text-steel-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function formatDate(iso: string): string {
  const months = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${months[m - 1]} ${y}`;
}
