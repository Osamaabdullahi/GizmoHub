"use client";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import ProductSectionSkeleton from "./skeletons/ProductSectionSkeleton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useCartStore from "@/store";

const formatPrice = (price) => {
  const num = Number(price);
  return Number.isFinite(num) ? `$${num.toFixed(2)}` : price;
};

const ProductSection = ({ title = "Explore our Products", reverse = false }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (name, id, image, price) => {
    addItem({ id, name, price, image, quantity: 1 });
    toast.success(`${name} added to cart!`);
  };

  useEffect(() => {
    let cancelled = false;
    const fetchData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        const result = await response.json();
        if (!cancelled) {
          setData(reverse ? [...result].reverse() : result);
        }
      } catch (err) {
        if (!cancelled) setError(true);
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [reverse]);

  const handleClick = (id, name) => {
    const params = new URLSearchParams({ id });
    router.push(`/product/${name}?${params.toString()}`);
  };

  if (error) {
    return (
      <div className="py-16 bg-gray-100 dark:bg-gray-900 text-center text-gray-500 dark:text-gray-400">
        Couldn&apos;t load products right now. Please try again shortly.
      </div>
    );
  }

  if (!data) {
    return <ProductSectionSkeleton />;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((product) => (
            <div
              key={product.id ?? product.name}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div onClick={() => handleClick(product.id, product.name)} className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold line-clamp-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xl font-bold text-brand-600 dark:text-brand-400">
                    {formatPrice(product.price)}
                  </p>
                  {product.oldPrice && (
                    <p className="text-gray-400 line-through">{formatPrice(product.oldPrice)}</p>
                  )}
                </div>
                {product.discount && (
                  <div className="mt-2 inline-block px-2 py-1 bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200 rounded-lg text-sm">
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() =>
                    handleAddToCart(product.name, product.id, product.image, product.price)
                  }
                  className="bg-brand-600 text-white py-2 px-4 rounded-lg hover:bg-brand-700 transition-colors"
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
  );
};

export default ProductSection;
