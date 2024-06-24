import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
const ProductCategorySkeleton = ({ isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ml-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between animate-pulse"
        >
          <div className="w-full h-48 bg-gray-300 mb-4 rounded-lg"></div>
          <div className="h-6 bg-gray-300 mb-2 rounded-lg"></div>
          <div className="h-6 bg-gray-300 mb-2 rounded-lg"></div>
          <div className="flex justify-between items-center mt-2">
            <div className="h-6 bg-gray-300 w-1/3 rounded-lg"></div>
            <div className="h-6 bg-gray-300 w-1/3 rounded-lg"></div>
          </div>
          <div className="mt-2 px-2 py-1 bg-gray-300 rounded-lg"></div>
          <div className="flex justify-between items-center mt-4">
            <div className="bg-gray-300 h-10 w-1/2 rounded-lg"></div>
            <FaHeart className="text-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategorySkeleton;
