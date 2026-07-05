"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const products = [
  {
    id: 1,
    name: "Luna 3-Seater Sofa",
    price: 899.00,
    rating: 4.8,
    image: "/images/sofa-new.jpg",
    swatches: ["#C4A882", "#8B7355", "#6B5B45"],
  },
  {
    id: 2,
    name: "Haven Dining Table",
    price: 899.00,
    rating: 4.7,
    image: "/images/dining table.jpg",
    swatches: ["#3D2B1F", "#6B4C3B", "#8B6B55"],
  },
  {
    id: 3,
    name: "Casa Lounge Chair",
    price: 299.00,
    rating: 4.9,
    image: "/images/chair-new.jpg",
    swatches: ["#3D5A3E", "#8B7355", "#C4A882"],
  },
  {
    id: 4,
    name: "Milo Sideboard",
    price: 449.00,
    rating: 4.9,
    image: "/images/sideboard.jpg",
    swatches: ["#3D2B1F", "#6B4C3B"],
  },
  {
    id: 5,
    name: "Sofa",
    price: 199.00,
    rating: 4.6,
    image: "/images/hero-room.jpg",
    swatches: ["#1A1A1A", "#C4A882"],
  },
];

type Product = typeof products[0];

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
}: {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-white rounded-full px-2 py-0.5 shadow-sm">
          <span className="text-amber-400 text-xs">★</span>
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
        </div>
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm font-medium text-foreground">${product.price.toFixed(2)}</p>
        <div className="flex items-center gap-1.5">
          {product.swatches.map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BestSellers() {
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">

        {/* Left - Text Block */}
        <div className="flex flex-col gap-3 lg:w-60 shrink-0">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Best Sellers
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Our Most Loved Pieces
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Handpicked favorites that blend style, quality, and functionality.
          </p>
          <Button className="bg-olive text-background hover:bg-olive/80 rounded-full px-6 gap-2 w-fit mt-2">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Right - Horizontal scroll all screen sizes */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 flex-1">
          {products.map((product) => (
            <div key={product.id} className="shrink-0 w-56 lg:w-64">
              <ProductCard
                product={product}
                isWishlisted={wishlist.has(product.id)}
                onToggleWishlist={toggleWishlist}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}