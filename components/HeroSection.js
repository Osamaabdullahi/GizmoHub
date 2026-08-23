"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <Image
        src="/images/controller.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 max-w-2xl mx-auto">
          The latest tech, at prices that make sense
        </h1>
        <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl mx-auto">
          Phones, laptops, headphones and more — hand-picked and ready to ship.
        </p>
        <Link
          href="/product"
          className="inline-block bg-brand-600 hover:bg-brand-700 transition-colors text-white py-3 px-8 rounded-lg font-medium"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
