import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <ProductSection title="Explore our Products" />
      <ProductSection title="New Arrivals" reverse />
    </>
  );
}
