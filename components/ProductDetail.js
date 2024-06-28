"use client";
import useCartStore from "@/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailPage = ({ product, isDarkMode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAddToCart = (name, id, image, price) => {
    const item = { id, name, price, image, quantity: 1 };
    addItem(item);
    toast.success(`${name} added to cart!`);
  };

  return (
    <div
      className={`py-8 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Product Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[400px]">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              {/* Previous Image Button */}
              <button
                onClick={handlePreviousImage}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-md opacity-75 hover:opacity-100 focus:outline-none ${
                  isDarkMode ? "bg-gray-600" : "bg-gray-800 text-white"
                }`}
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              {/* Next Image Button */}
              <button
                onClick={handleNextImage}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-md opacity-75 hover:opacity-100 focus:outline-none ${
                  isDarkMode ? "bg-gray-600" : "bg-gray-800 text-white"
                }`}
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
            {/* Image Thumbnails */}
            <div className="flex justify-center mt-4 space-x-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  className={`w-12 h-12 object-cover rounded-lg cursor-pointer ${
                    index === currentImageIndex
                      ? "border-2 border-blue-600"
                      : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 md:pl-8">
            <h1
              className={`text-3xl font-semibold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {product.name}
            </h1>
            <div className="flex justify-between items-center mb-4">
              <p
                className={`text-xl font-bold ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {product.price}
              </p>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                } line-through`}
              >
                {product.oldPrice}
              </p>
            </div>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } text-lg mb-4`}
            >
              {product.description}
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  handleAddToCart(
                    product.name,
                    product.id,
                    product.image,
                    product.price
                  )
                }
                className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 ${
                  isDarkMode ? "hover:bg-blue-500" : "hover:bg-blue-700"
                }`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleAddToCart(
                    product.name,
                    product.id,
                    product.image,
                    product.price
                  );
                  router.push("/product/cart");
                }}
                className={`bg-green-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 ${
                  isDarkMode
                    ? "hover:bg-gray-300 text-gray-900"
                    : "hover:bg-gray-400"
                }`}
              >
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetailPage;
