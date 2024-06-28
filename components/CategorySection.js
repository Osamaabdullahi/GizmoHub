"use client";
import { useAppStore } from "@/store";
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

const CategorySection = () => {
  const isDarkMode = useAppStore((state) => state.night);

  return (
    <div className={`bg-${isDarkMode ? "gray-800" : "gray-100"} py-8`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 text-${
            isDarkMode ? "white" : "gray-800"
          }`}
        >
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Category Cards */}
          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <Link href="product" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaMobileAlt />
              </div>
              <h3 className="text-base font-semibold mb-2">Mobile Phones</h3>
            </Link>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <Link href="product" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaLaptop />
              </div>
              <h3 className="text-base font-semibold mb-2">Laptops</h3>
            </Link>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <Link href="product" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaHeadphones />
              </div>
              <h3 className="text-base font-semibold mb-2">Headphones</h3>
            </Link>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <Link href="product" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaTabletAlt />
              </div>
              <h3 className="text-base font-semibold mb-2">Tablets</h3>
            </Link>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <Link href="product" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaNetworkWired />
              </div>
              <h3 className="text-base font-semibold mb-2">Networking</h3>
            </Link>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md p-4 flex items-center justify-center text-center hover:shadow-lg transition duration-300 ease-in-out ${
              isDarkMode
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:text-opacity-70 hover:text-opacity-100"
            }`}
          >
            <Link href="product" className="flex flex-col items-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                <FaGamepad />
              </div>
              <h3 className="text-base font-semibold mb-2">PC Gaming</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
