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
      <div className="flex items-center gap-3 text-steel-400">
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

  return (
    <section className="bg-steel-50 border-y border-steel-200 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-navy-500 text-[10px] font-black uppercase tracking-widest mb-5">
          Sobre la autora · Industrias Trevigo
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
            <h3 className="text-steel-900 font-black text-lg leading-tight mb-1">
              {author.name}
            </h3>
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

function formatDate(iso: string): string {
  const months = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${months[m - 1]} ${y}`;
}
