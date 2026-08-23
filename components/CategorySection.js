"use client";
import Link from "next/link";
import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaTabletAlt,
  FaNetworkWired,
  FaGamepad,
} from "react-icons/fa";

const CATEGORIES = [
  { icon: FaMobileAlt, label: "Mobile Phones" },
  { icon: FaLaptop, label: "Laptops" },
  { icon: FaHeadphones, label: "Headphones" },
  { icon: FaTabletAlt, label: "Tablets" },
  { icon: FaNetworkWired, label: "Networking" },
  { icon: FaGamepad, label: "PC Gaming" },
];

const CategorySection = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <Link
              key={label}
              href={`/product?query=${encodeURIComponent(label)}`}
              className="flex flex-col items-center text-center gap-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-600 text-white text-xl">
                <Icon />
              </div>
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {label}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
