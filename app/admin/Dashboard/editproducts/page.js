"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Suspense } from "react";
const Page = () => {
  const router = useRouter();
  const params = useSearchParams();
  console.log("%%%%", params);
  const [product, setProduct] = useState({
    name: params.get("name"),
    price: params.get("price"),
    oldPrice: params.get("oldPrice"),
    image: null,
    discount: params.get("discount"),
    description: params.get("description"),
    secondImage: null,
    thirdImage: null,
    fourthImage: null,
    category: params.get("category"),
  });

  const categories = [
    "Mobile Phones",
    "Laptops",
    "Headphones",
    "Tablets",
    "Networking",
    "PC Gaming",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProduct({
        ...product,
        [name]: files[0],
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Add your form submission logic here
  };

  return (
    <Suspense>
      <div className="mt-10 mb-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Old Price</label>
            <input
              type="number"
              name="oldPrice"
              value={product.oldPrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Discount</label>
            <input
              type="text"
              name="discount"
              value={product.discount}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Second Image</label>
            <input
              type="file"
              name="secondImage"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Third Image</label>
            <input
              type="file"
              name="thirdImage"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fourth Image</label>
            <input
              type="file"
              name="fourthImage"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => router.push("admin/Dashboard")}
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </Suspense>
  );
};

export default Page;
