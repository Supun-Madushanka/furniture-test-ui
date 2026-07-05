import Navbar from "@/components/home/navbar";
import HeroSection from "@/components/home/hero-section";
import CategoryRibbon from "@/components/home/category-ribbon";
import BestSellers from "@/components/home/best-sellers";
import PromoBanner from "@/components/home/promo-banner";
import ValueProps from "@/components/home/value-props";
import Editorial from "@/components/home/editorial";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoryRibbon />
        <BestSellers />
        <PromoBanner />
        <ValueProps />
        <Editorial />
      </main>
    </div>
  );
}