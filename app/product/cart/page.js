"use client";

import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const cartItems = [
    {
      name: "Gaming Controller",
      price: "$29.99",
      image: "/images/controller.jpg",
      quantity: 1,
    },
    {
      name: "Mechanical Keyboard",
      price: "$59.99",
      image: "/images/controller.jpg",
      quantity: 1,
    },
    {
      name: "Wireless Speakers",
      price: "$49.99",
      image: "/images/controller.jpg",
      quantity: 1,
    },
  ];

  const handleRemove = (itemName) => {
    alert(`Removed ${itemName} from cart!`); // Replace with actual remove functionality
  };

  const handleQuantityChange = (itemName, action) => {
    alert(
      `${
        action === "increase" ? "Increased" : "Decreased"
      } quantity of ${itemName}!`
    ); // Replace with actual quantity change functionality
  };

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) =>
          total + parseFloat(item.price.slice(1)) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="hidden md:grid grid-cols-5 gap-4 mb-4 border-b-2 pb-2">
            <div className="col-span-2 text-left">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Total</div>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col md:grid md:grid-cols-5 gap-4 items-center border-b-2 py-4"
            >
              <div className="col-span-2 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <span className="text-lg font-semibold">{item.name}</span>
              </div>
              <div className="text-center text-lg">${item.price}</div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleQuantityChange(item.name, "decrease")}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-lg hover:bg-gray-400"
                >
                  <FaMinus />
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.name, "increase")}
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r-lg hover:bg-gray-400"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="text-center text-lg">
                ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleRemove(item.name)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 mb-4 md:mb-0">
              Continue Shopping
            </button>
            <div className="text-xl font-bold">Total: ${calculateTotal()}</div>
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
