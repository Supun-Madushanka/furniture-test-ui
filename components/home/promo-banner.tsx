import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden min-h-80">

        {/* Left - Olive Green Text Side */}
        <div
          className="flex flex-col justify-center gap-4 px-10 py-12 md:w-1/2 bg-olive"
        >
          {/* Label */}
          <span className="text-sm text-white/70 font-medium tracking-wide">
            Summer Sale
          </span>

          {/* Heading */}
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
            Up to 30% Off
          </h2>

          {/* Subtext */}
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Selected items for a limited time only.
          </p>

          {/* CTA Button */}
          <Link
            href="/shop/sale"
            className="flex items-center gap-2 w-fit mt-2 bg-white text-foreground text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Shop Sale
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Right - Image Side */}
        <div className="relative md:w-1/2 h-64 md:h-auto">
          <Image
            src="/images/sofa-new.jpg"
            alt="Summer Sale"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}