"use client";
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
import { useRouter } from "next/navigation";
import useCartStore, { useAppStore } from "@/store";
import ProductCategorySkeleton from "@/components/skeletons/ProductCategorySkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

const Product = ({ searchParams }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isDarkMode = useAppStore((state) => state.night);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setcategory] = useState("");
  const query = searchParams?.query || "";

  const fetchData = async () => {
    if (!query === "") {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/?name=${query}`;
    }
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/?category=${category}`;
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setData(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const filter = (cat) => {
    setcategory(cat);
    fetchData();
  };

  return (
    <Suspense>
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
                      <span
                        onClick={() => filter("Laptops")}
                        className={`flex items-center cursor-pointer ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        } hover:underline`}
                      >
                        <span className="mr-2">
                          <FaLaptop />
                        </span>
                        Laptops
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => filter("Headphones")}
                        className={`flex items-center cursor-pointer ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        } hover:underline`}
                      >
                        <span className="mr-2">
                          <FaHeadphones />
                        </span>
                        Headphones
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => filter("Tablets")}
                        className={`flex items-center cursor-pointer ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        } hover:underline`}
                      >
                        <span className="mr-2">
                          <FaTabletAlt />
                        </span>
                        Tablets
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => filter("Networking")}
                        className={`flex items-center cursor-pointer ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        } hover:underline`}
                      >
                        <span className="mr-2">
                          <FaNetworkWired />
                        </span>
                        Networking
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => filter("PC Gaming")}
                        className={`flex items-center cursor-pointer ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        } hover:underline`}
                      >
                        <span className="mr-2">
                          <FaGamepad />
                        </span>
                        PC Gaming
                      </span>
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
                  onClick={() => filter()}
                  className={`bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 ${
                    isDarkMode ? "dark:bg-gray-700" : ""
                  }`}
                >
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Products Section */}
            <div className="w-full mt-4 md:ml-4 md:w-4/5">
              {loading ? (
                <ProductCategorySkeleton />
              ) : (
                <ProductPage data={data} isDarkMode={isDarkMode} />
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Suspense>
  );
};

export default Product;

const ProductPage = ({ isDarkMode, data }) => {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handleClick = (id, name) => {
    const params = new URLSearchParams({ id: id });
    router.push(`/product/${name}?${params.toString()}`);
  };

  const handleAddToCart = (name, id, image, price) => {
    const item = { id, name, price, image, quantity: 1 };
    addItem(item);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((product) => (
        <div
          key={product.name}
          className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
          }`}
        >
          <div
            onClick={() => handleClick(product.id, product.name)}
            className="cursor-pointer"
          >
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
              <p className="text-xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-500 line-through">
                ${product.oldPrice?.toFixed(2)}
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
              onClick={() =>
                handleAddToCart(
                  product.name,
                  product.id,
                  product.image,
                  product.price
                )
              }
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
