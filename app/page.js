"use client";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import { useAppStore } from "@/store";
import { useState, useEffect } from "react";

export default function Home() {
  const night = useAppStore((state) => state.night);
  const setNight = useAppStore((state) => state.setNight);

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductSection title="Explore our Products" />
      <ProductSection title="Explore our Products" />
    </div>
  );
}
