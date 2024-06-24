"use client";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import ProductSectionSkeleton from "./skeletons/ProductSectionSkeleton";

const ProductSection = ({ title, isDarkMode }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const url = "http://127.0.0.1:8000/products/";
    const response = await fetch(url);
    const result = await response.json();
    console.log(response);
    console.log(result);
    if (response.ok) {
      setData(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <ProductSectionSkeleton />;
  }

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="container mx-auto">
        <h2
          className={`text-2xl font-bold text-center mb-8 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.map((product) => (
            <div
              key={product.name}
              className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-between ${
                isDarkMode ? "dark:bg-gray-700 dark:text-white" : ""
              }`}
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xl font-bold text-blue-600">
                    {product.price}
                  </p>
                  <p className="text-gray-500 line-through">
                    {product.oldPrice}
                  </p>
                </div>
                <div
                  className={`mt-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-lg ${
                    isDarkMode ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {product.discount}
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 ${
                    isDarkMode ? "dark:bg-gray-600" : ""
                  }`}
                >
                  Add to Cart
                </button>
                <FaHeart
                  className={`text-red-500 cursor-pointer hover:text-red-700 ${
                    isDarkMode ? "dark:text-red-400 hover:text-red-600" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
