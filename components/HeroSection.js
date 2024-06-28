"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0  z-[-1]">
          <img
            src="/images/controller.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Content */}
        <div className="relative bg-opacity-75 bg-black py-24 sm:py-32 px-4 text-white text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to our E-commerce Store
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Explore the latest electronics and gadgets.
          </p>
          <button
            onClick={() => router.push("product")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
