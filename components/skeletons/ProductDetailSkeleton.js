"use client";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductDetailSkeleton = ({ isDarkMode }) => {
  return (
    <div
      className={`py-8 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Product Image Skeleton */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-[400px] md:h-[400px] bg-gray-300 rounded-lg animate-pulse"></div>
            {/* Image Thumbnails Skeleton */}
            <div className="flex justify-center mt-4 space-x-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gray-300 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Details Skeleton */}
          <div className="md:w-1/2 md:pl-8">
            <div className="h-8 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="h-6 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="h-10 w-1/4 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
