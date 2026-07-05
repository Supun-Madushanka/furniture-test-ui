import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    category: "Design Tips",
    title: "5 Ways to Style Your Dining Room",
    date: "May 12, 2024",
    readTime: "5 min read",
    image: "/images/dining table.jpg",
    href: "/inspiration/dining-room",
  },
  {
    id: 2,
    category: "Inspiration",
    title: "Create a Calm & Cozy Bedroom",
    date: "April 28, 2024",
    readTime: "6 min read",
    image: "/images/sofa-new.jpg",
    href: "/inspiration/bedroom",
  },
  {
    id: 3,
    category: "Trends",
    title: "Top Interior Design Trends for 2024",
    date: "April 15, 2024",
    readTime: "4 min read",
    image: "/images/hero-room.jpg",
    href: "/inspiration/trends",
  },
];

export default function Editorial() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">

        {/* Left - Text Block */}
        <div className="flex flex-col gap-3 lg:w-60 shrink-0">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Get Inspired
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Designed to inspire your home
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Explore ideas and tips to create spaces that feel uniquely yours.
          </p>
          <Button className="bg-olive text-background hover:bg-olive/80 rounded-full px-6 gap-2 w-fit mt-2">
            Explore Inspiration
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Right - Articles */}
        <div className="flex-1">

          {/* Mobile/Tablet - horizontal scroll */}
          <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide pb-2">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="shrink-0 w-64 flex flex-col gap-3 group"
              >
                <ArticleCard article={article} />
              </Link>
            ))}
          </div>

          {/* Desktop - 3 column grid */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="flex flex-col gap-3 group"
              >
                <ArticleCard article={article} />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <>
      {/* Image */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden bg-stone-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground font-medium">
          {article.category}
        </span>
        <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-olive transition-colors">
          {article.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {article.date} • {article.readTime}
        </p>
      </div>
    </>
  );
}