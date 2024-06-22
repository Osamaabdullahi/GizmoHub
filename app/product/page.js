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
} from "react-icons/fa";

const ProductSection = () => {
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
          {/* Fixed Filter Section */}
          <div
            className={`md:w-1/4 bg-white p-4 rounded-lg shadow-md ${
              isFilterOpen ? "block" : "hidden"
            } md:block sticky top-16`}
          >
            <h2 className="text-lg font-semibold mb-4 md:hidden flex items-center justify-between">
              Filter By
              <button
                onClick={toggleFilter}
                className="text-blue-600 hover:text-blue-700"
              >
                {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </h2>
            <div className="hidden md:block">
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <span className="mr-2">
                    <FaMobileAlt />
                  </span>{" "}
                  Mobile Phones
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-1">
                        <FaLaptop />
                      </span>{" "}
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-1">
                        <FaHeadphones />
                      </span>{" "}
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-1">
                        <FaTabletAlt />
                      </span>{" "}
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-1">
                        <FaNetworkWired />
                      </span>{" "}
                      Networking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span className="mr-1">
                        <FaGamepad />
                      </span>{" "}
                      PC Gaming
                    </a>
                  </li>
                </ul>
              </div>
              {/* Price Range Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2 flex items-center">
                  <span className="mr-2">
                    <FaChevronRight />
                  </span>{" "}
                  Price Range
                </h3>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">Select</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200+">$200 and above</option>
                </select>
              </div>
              {/* Add more filters as needed */}
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="md:w-3/4 mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
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
                </div>
                <div>
                  <button
                    onClick={() => handleAddToCart(product.name)}
                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 self-start"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
