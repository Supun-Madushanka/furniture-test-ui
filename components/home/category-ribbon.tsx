import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "Sofas & Couches", href: "/shop/sofas", image: "/images/sofas.png" },
  { label: "Chairs", href: "/shop/chairs", image: "/images/chair.png" },
  { label: "Tables", href: "/shop/tables", image: "/images/table.png" },
  { label: "Beds", href: "/shop/beds", image: "/images/bed.png" },
  { label: "Storage", href: "/shop/storage", image: "/images/closet.png" },
  { label: "Lighting", href: "/shop/lighting", image: "/images/chair 2.png" },
  { label: "Decor", href: "/shop/decor", image: "/images/decor.png" },
  { label: "Outdoor", href: "/shop/outdoor", image: "/images/outdoor.png" },
];

export default function CategoryRibbon() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Scrollable row */}
      <div className="flex gap-16 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className="flex flex-col items-center gap-2 group shrink-0"
          >
            {/* Image Box */}
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden bg-stone-100">
              <Image
                src={category.image}
                alt={category.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Label */}
            <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors w-20 lg:w-24">
              {category.label}
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
}