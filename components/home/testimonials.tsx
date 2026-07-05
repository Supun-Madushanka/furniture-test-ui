"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The quality is outstanding and the designs are simply beautiful. Highly recommend Natura Furniture!",
    name: "Emily R.",
    location: "Los Angeles, CA",
    avatar: "/images/s1.jpg",
  },
  {
    id: 2,
    text: "Fast delivery, easy assembly, and the sofa is incredibly comfortable!",
    name: "James T.",
    location: "Austin, TX",
    avatar: "/images/ss2.jpg",
  },
  {
    id: 3,
    text: "Customer service was amazing and the product exceeded my expectations.",
    name: "Sophia L.",
    location: "New York, NY",
    avatar: "/images/ss3.jpg",
  },
  {
    id: 4,
    text: "Absolutely love my new dining table. It fits perfectly in my space and looks stunning.",
    name: "Michael B.",
    location: "Chicago, IL",
    avatar: "/images/s1.jpg",
  },
  {
    id: 5,
    text: "Great value for money. The furniture is solid, stylish and arrived well packaged.",
    name: "Sarah K.",
    location: "Seattle, WA",
    avatar: "/images/ss2.jpg",
  },
];

const CARDS_PER_PAGE = 3;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const currentPage = Math.floor(currentIndex / CARDS_PER_PAGE);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + CARDS_PER_PAGE
  );

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + CARDS_PER_PAGE < testimonials.length;

  const handlePrev = () => {
    if (canGoPrev) setCurrentIndex((prev) => prev - CARDS_PER_PAGE);
  };

  const handleNext = () => {
    if (canGoNext) setCurrentIndex((prev) => prev + CARDS_PER_PAGE);
  };

  const handleDot = (pageIndex: number) => {
    setCurrentIndex(pageIndex * CARDS_PER_PAGE);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Centered Heading */}
      <div className="flex flex-col items-center gap-2 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
          What Our Customers Say
        </span>
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
          Real homes. Real stories.
        </h2>
      </div>

      {/* Carousel Row */}
      <div className="flex items-center gap-4">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
            canGoPrev
              ? "text-foreground hover:bg-olive hover:text-background"
              : "border-border text-muted-foreground cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 bg-white border border-border rounded-2xl p-6"
            >
              {/* Quote mark */}
              <span className="font-serif text-4xl font-bold text-muted-foreground leading-none">
                "
              </span>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
            canGoNext
              ? "text-foreground hover:bg-olive hover:text-background"
              : "border-border text-muted-foreground cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className={`rounded-full transition-all ${
              i === currentPage
                ? "w-6 h-2 bg-foreground"
                : "w-2 h-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>

    </section>
  );
}