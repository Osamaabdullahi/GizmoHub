"use client";
import useCartStore from "@/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { toast } from "react-toastify";

const formatPrice = (price) => {
  const num = Number(price);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : price;
};

const ProductDetailPage = ({ product }) => {
  const images = (product.images || []).filter(Boolean);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-[400px] bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              {images.length > 0 && (
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-gray-900/70 text-white opacity-80 hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-gray-900/70 text-white opacity-80 hover:opacity-100"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex justify-center mt-4 gap-3">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className={`w-14 h-14 object-cover rounded-lg cursor-pointer border-2 ${
                      index === currentImageIndex ? "border-brand-600" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-3xl font-semibold mb-3 text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                {formatPrice(product.price)}
              </p>
              {product.oldPrice && (
                <p className="text-gray-400 line-through">{formatPrice(product.oldPrice)}</p>
              )}
              {product.discount && (
                <span className="px-2 py-1 bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200 rounded-lg text-sm">
                  {product.discount}
                </span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAddToCart}
                className="bg-brand-600 text-white py-2.5 px-6 rounded-lg hover:bg-brand-700 transition-colors font-medium"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleAddToCart();
                  router.push("/product/cart");
                }}
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-2.5 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
