"use client";
import ProductSection from "@/components/ProductSection";
import ProductSectionSkeleton from "@/components/skeletons/ProductSectionSkeleton";
import React, { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaTabletAlt,
  FaNetworkWired,
  FaGamepad,
  FaChevronDown,
  FaChevronUp,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import ProductCategorySkeleton from "@/components/skeletons/ProductCategorySkeleton";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const Product = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isDarkMode = true;

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

  // if (loading) {
  //   return <ProductSectionSkeleton />;
  // }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`); // Replace with actual add to cart functionality
  };

  return (
    <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Redesigned Filter Section */}
          <div
            className={`${
              isFilterOpen ? "block" : "hidden"
            } md:block w-full md:w-1/5 bg-white h-[100%] p-4 rounded-lg shadow-md fixed md:sticky top-16 z-20 transition-all duration-300 ease-in-out ${
              isDarkMode ? "dark:bg-gray-800" : ""
            }`}
          >
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Filter By
              </h2>
              <button
                onClick={toggleFilter}
                className={`text-blue-600 hover:text-blue-700 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <div className="space-y-4">
                <h3
                  className={`text-sm font-semibold flex items-center ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span className="mr-2">
                    <FaMobileAlt />
                  </span>
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className={`flex items-center ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } hover:underline`}
                    >
                      <span className="mr-2">
                        <FaLaptop />
                      </span>
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } hover:underline`}
                    >
                      <span className="mr-2">
                        <FaHeadphones />
                      </span>
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } hover:underline`}
                    >
                      <span className="mr-2">
                        <FaTabletAlt />
                      </span>
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } hover:underline`}
                    >
                      <span className="mr-2">
                        <FaNetworkWired />
                      </span>
                      Networking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } hover:underline`}
                    >
                      <span className="mr-2">
                        <FaGamepad />
                      </span>
                      PC Gaming
                    </a>
                  </li>
                </ul>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-2">
                <h3
                  className={`text-sm font-semibold flex items-center ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  <span className="mr-2">
                    <FaChevronRight />
                  </span>
                  Price Range
                </h3>
                <select
                  className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    isDarkMode ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  <option value="">Select</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200+">$200 and above</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <button
                className={`bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
                  isDarkMode ? "dark:bg-gray-700" : ""
                }`}
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          {loading ? (
            <ProductCategorySkeleton />
          ) : (
            <ProductPage data={data} isDarkMode={true} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

const ProductPage = ({ isDarkMode, data }) => {
  const router = useRouter();
  const handleClick = (id, name) => {
    const params = new URLSearchParams({ id: id });
    router.push(`/product/${name}?${params.toString()}`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ml-4 ">
      {data?.map((product) => (
        <div
          onClick={() => handleClick(product.id, product.name)}
          key={product.name}
          className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-between cursor-pointer ${
            isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
          }`}
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3
              className={`text-lg font-semibold line-clamp-2 ${
                isDarkMode ? "dark:text-white" : ""
              }`}
            >
              {product.name}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-bold text-blue-600">{product.price}</p>
              <p className="text-gray-500 line-through">{product.oldPrice}</p>
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
              onClick={() => handleAddToCart(product.name)}
              className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
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
  );
};
