"use client";

import React, { useState } from "react";
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

const Product = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    {
      name: "Gaming Controller",
      price: "$29.99",
      oldPrice: "$39.99",
      image: "/images/controller.jpg",
      discount: "25% OFF",
    },
    {
      name: "Mechanical Keyboard",
      price: "$59.99",
      oldPrice: "$79.99",
      image: "/images/controller.jpg",
      discount: "25% OFF",
    },
    {
      name: "Smart Camera with Extra Long Name to Test Layout",
      price: "$99.99",
      oldPrice: "$129.99",
      image: "/images/controller.jpg",
      discount: "20% OFF",
    },
    {
      name: "Wireless Speakers",
      price: "$49.99",
      oldPrice: "$69.99",
      image: "/images/controller.jpg",
      discount: "30% OFF",
    },
    {
      name: "Smart Watch",
      price: "$199.99",
      oldPrice: "$249.99",
      image: "/images/controller.jpg",
      discount: "20% OFF",
    },
    {
      name: "Gaming Headset",
      price: "$79.99",
      oldPrice: "$99.99",
      image: "/images/controller.jpg",
      discount: "20% OFF",
    },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`); // Replace with actual add to cart functionality
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Redesigned Filter Section */}
          <div
            className={`${
              isFilterOpen ? "block" : "hidden"
            } md:block w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md md:sticky top-16 transition-all duration-300 ease-in-out`}
          >
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-lg font-semibold">Filter By</h2>
              <button
                onClick={toggleFilter}
                className="text-blue-600 hover:text-blue-700"
              >
                {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold flex items-center">
                  <span className="mr-2">
                    <FaMobileAlt />
                  </span>
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center"
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
                      className="text-blue-600 hover:underline flex items-center"
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
                      className="text-blue-600 hover:underline flex items-center"
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
                      className="text-blue-600 hover:underline flex items-center"
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
                      className="text-blue-600 hover:underline flex items-center"
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
                <h3 className="text-sm font-semibold flex items-center">
                  <span className="mr-2">
                    <FaChevronRight />
                  </span>
                  Price Range
                </h3>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Select</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200+">$200 and above</option>
                </select>
              </div>

              {/* Apply Filters Button */}
              <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
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
                  <div className="mt-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-lg">
                    {product.discount}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleAddToCart(product.name)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                  <FaHeart className="text-red-500 cursor-pointer hover:text-red-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
