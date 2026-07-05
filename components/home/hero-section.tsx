import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Column */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-sm text-muted-foreground tracking-wide">
              New Collection 2024
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Crafted for
            </h1>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Comfort.
            </h1>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-olive">
              Made for Life.
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
            Timeless design, premium materials, and unmatched comfort for every space in your home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              className="bg-olive text-background hover:bg-olive/80 rounded-full px-6 gap-2"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 bg-background text-foreground hover:bg-olive hover:text-background"
            >
              Explore Collections
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
                {[
                { id: 1, src: "/images/ss3.jpg" },
                { id: 2, src: "/images/ss2.jpg" },
                { id: 3, src: "/images/s1.jpg" },
                ].map((avatar) => (
                <div
                    key={avatar.id}
                    className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shrink-0"
                >
                    <Image
                    src={avatar.src}
                    alt={`Customer ${avatar.id}`}
                    fill
                    className="object-cover"
                    />
                </div>
                ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by{" "}
              <span className="text-foreground font-semibold">25,000+</span>{" "}
              happy customers
            </p>
          </div>

        </div>

        {/* Right Column */}
        <div className="relative h-100 lg:h-135">

          {/* Main Image */}
          <Image
            src="/images/hero-room.jpg"
            alt="Modern living room"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Floating Card - desktop only */}
          <div className="hidden lg:flex absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-3 items-center gap-3 max-w-68">
            
            {/* Thumbnail */}
            <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                <Image
                    src="/images/hero-room.jpg"
                    alt="Modern Living Room"
                    fill
                    className="object-cover"
                />
            </div>
            
            {/* Text */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-foreground leading-tight">
                  Modern Living Room
                </span>
                <div className="flex items-center gap-0.5">
                  <span className="text-xs font-medium text-foreground">4.9</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <Link
                    href="/shop"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    Shop the look <ArrowRight className="w-3 h-3 inline-block ml-1" />
                </Link>
                <Star className="w-3 h-3 text-amber-400 fill-current" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}