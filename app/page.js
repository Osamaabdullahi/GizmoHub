// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import ProductSectionSkeleton from "../components/skeletons/ProductSectionSkeleton";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";

const product = {
  name: "Gaming Controller",
  price: "$29.99",
  oldPrice: "$39.99",
  images: [
    "/images/controller.jpg",
    "/images/controllerOne.jpg",
    "/images/controllerTwo.jpg",
    "/images/controllerThree.jpg",
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet cursus purus, at gravida justo cursus et.",
  discount: "25% OFF",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductSection />
      <ProductSectionSkeleton />
      <ProductDetail product={product} />
    </div>
  );
}
