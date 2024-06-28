"use client";
import React, { useState } from "react";

const page = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    oldPrice: "",
    image: null,
    discount: "",
    description: "",
    secondImage: null,
    thirdImage: null,
    fourthImage: null,
    category: "",
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
    CreateProduct(product);

    // Add your form submission logic here
  };
  const CreateProduct = async (product) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/`;
    const formData = new FormData();

    for (const key in product) {
      formData.append(key, product[key]);
    }

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
  };

  return (
    <div className="mt-10 mb-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
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
            type="number"
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
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default page;
