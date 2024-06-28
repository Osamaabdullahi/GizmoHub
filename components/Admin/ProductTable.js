"use client";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isDarkMode = useAppStore((state) => state.night); // Assuming this fetches the dark mode state
  const router = useRouter();

  const fetchData = async () => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`;
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setData(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (
    name,
    price,
    oldprice,
    discount,
    description,
    category
  ) => {
    const params = new URLSearchParams({
      name,
      price,
      oldprice,
      discount,
      description,
      category,
    });
    router.push(`Dashboard/editproducts/?${params.toString()}`);
  };

  if (loading) {
    return <ProductSkeleton isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          onClick={() => router.push("Dashboard/addproducts")}
          className={`p-2 rounded ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-green-500 text-white"
          }`}
        >
          Add New Product
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <div
            key={product.id}
            className={`p-4 rounded shadow flex flex-col ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <h3 className="text-xl font-bold line-clamp-3">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Old Price: ${product.oldPrice}</p>
            <p>Discount: {product.discount}%</p>
            <div className="flex justify-between mt-auto pt-4">
              <button
                onClick={() =>
                  handleEdit(
                    product.name,
                    product.price,
                    product.oldPrice,
                    product.discount,
                    product.description,
                    product.category
                  )
                }
                className={`p-2 rounded ${
                  isDarkMode
                    ? "bg-gray-600 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                Edit
              </button>
              <button
                className={`p-2 rounded ${
                  isDarkMode
                    ? "bg-gray-600 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

const ProductSkeleton = ({ isDarkMode }) => {
  const skeletonItems = Array(6).fill(0); // Change the number to the number of skeleton items you want to display

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className={`p-4 rounded shadow animate-pulse ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <div className="bg-gray-300 h-32 mb-2 rounded"></div>
            <div className="h-6 bg-gray-300 mb-2 rounded"></div>
            <div className="h-4 bg-gray-300 mb-2 rounded"></div>
            <div className="h-4 bg-gray-300 mb-2 rounded"></div>
            <div className="flex justify-between mt-auto pt-4">
              <div className="h-8 bg-gray-300 w-1/2 mr-2 rounded"></div>
              <div className="h-8 bg-gray-300 w-1/2 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
