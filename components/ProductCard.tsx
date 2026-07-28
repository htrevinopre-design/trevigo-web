import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

// ─── Color theme por categoría (debe coincidir con ProductCatalogFilter)
const CATEGORY_THEME: Record<
  string,
  {
    header: string;
    cardHover: string;
    cta: string;
    textHover: string;
  }
> = {
  "tratamiento-metales": {
    header: "bg-blue-700",
    cardHover: "hover:border-blue-300 hover:shadow-blue-100",
    cta: "border-blue-600 text-blue-700 group-hover:bg-blue-700 group-hover:text-white group-hover:border-blue-700",
    textHover: "group-hover:text-blue-700",
  },
  "tratamiento-aguas": {
    header: "bg-teal-600",
    cardHover: "hover:border-teal-300 hover:shadow-teal-100",
    cta: "border-teal-600 text-teal-700 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600",
    textHover: "group-hover:text-teal-700",
  },
  "lubricantes-aceites": {
    header: "bg-amber-600",
    cardHover: "hover:border-amber-300 hover:shadow-amber-100",
    cta: "border-amber-600 text-amber-700 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600",
    textHover: "group-hover:text-amber-700",
  },
  "materias-primas": {
    header: "bg-emerald-700",
    cardHover: "hover:border-emerald-300 hover:shadow-emerald-100",
    cta: "border-emerald-600 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700",
    textHover: "group-hover:text-emerald-700",
  },
  "aditivos-lubricantes": {
    header: "bg-purple-700",
    cardHover: "hover:border-purple-300 hover:shadow-purple-100",
    cta: "border-purple-600 text-purple-700 group-hover:bg-purple-700 group-hover:text-white group-hover:border-purple-700",
    textHover: "group-hover:text-purple-700",
  },
};

interface ProductCardProps {
  product: Product;
  subcategoryName: string;
  categoryId: string;
}

export default function ProductCard({
  product,
  subcategoryName,
  categoryId,
}: ProductCardProps) {
  const theme = CATEGORY_THEME[categoryId] ?? CATEGORY_THEME["tratamiento-metales"];
  const isSaco =
    product.formats.length === 1 && product.formats[0].name === "saco";

  return (
    <Link
      href={`/productos/${product.id}`}
      className={`bg-white border border-steel-200 rounded-lg overflow-hidden hover:shadow-md transition-all group flex flex-col ${theme.cardHover}`}
    >
      <div className={`${theme.header} px-4 py-2.5`}>
        <p className="text-white text-[10px] font-black uppercase tracking-widest leading-tight">
          {subcategoryName}
        </p>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h4
          className={`text-steel-900 font-black text-sm uppercase leading-tight mb-2 transition-colors ${theme.textHover}`}
        >
          {product.name}
        </h4>
        <p className="text-steel-500 text-xs leading-relaxed mb-3 flex-1">
          {product.shortDescription}
        </p>
        <p className="text-steel-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
          SKU: {product.sku}
        </p>

        <div className="border-t border-steel-100 pt-3 mb-3">
          <p className="text-steel-500 text-[10px] font-bold uppercase tracking-wider mb-2">
            {isSaco ? "Presentación" : "Presentaciones"}
          </p>
          <div
            className={`flex gap-3 ${isSaco ? "justify-start" : "justify-around"}`}
          >
            {product.formats.map((fmt) => (
              <div
                key={fmt.name}
                className="flex flex-col items-center gap-0.5"
              >
                <div className="w-9 h-9 relative">
                  <Image
                    src={fmt.image}
                    alt={fmt.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] font-bold text-steel-700 uppercase">
                  {fmt.label}
                </span>
                <span className="text-[9px] text-steel-500">{fmt.weight}</span>
              </div>
            ))}
          </div>
        </div>

        <span
          className={`block w-full text-center border-2 py-2 text-[10px] font-black uppercase tracking-wide transition-colors ${theme.cta}`}
        >
          Ver ficha técnica →
        </span>
      </div>
    </Link>
  );
}
