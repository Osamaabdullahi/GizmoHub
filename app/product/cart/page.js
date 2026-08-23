"use client";
import React from "react";
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import useCartStore from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const formatPrice = (price) => {
  const num = Number(price);
  return Number.isFinite(num) ? num.toFixed(2) : "0.00";
};

export default function Cart() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const totalAmount = useCartStore((state) => state.totalAmount);

  const handleRemove = (itemName) => {
    removeItem(itemName);
    toast.error("Item removed from cart!");
  };

  if (cart.length === 0) {
    return (
      <div className="py-24 bg-gray-100 dark:bg-gray-950 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <FaShoppingCart className="text-5xl text-gray-300 dark:text-gray-700 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/product"
          className="bg-brand-600 text-white py-2 px-6 rounded-lg hover:bg-brand-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Shopping Cart
        </h2>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <div className="hidden md:grid grid-cols-5 gap-4 mb-4 border-b-2 border-gray-200 dark:border-gray-800 pb-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            <div className="col-span-2 text-left">Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Total</div>
            <div className="text-center" />
          </div>
          {cart.map((item) => (
            <div
              key={item.name}
              className="flex flex-col md:grid md:grid-cols-5 gap-4 items-center border-b border-gray-200 dark:border-gray-800 py-4"
            >
              <div className="col-span-2 flex items-center w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </span>
              </div>
              <div className="text-center text-gray-900 dark:text-white">
                ${formatPrice(item.price)}
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => decrementItem(item.name)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-1 rounded-l-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4 text-gray-900 dark:text-white">{item.quantity}</span>
                  <button
                    onClick={() => incrementItem(item.name)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white px-2 py-1 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                    aria-label="Increase quantity"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="text-center font-semibold text-gray-900 dark:text-white">
                ${formatPrice(item.total)}
              </div>
              <div className="text-center">
                <button
                  onClick={() => handleRemove(item.name)}
                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
            <button
              onClick={() => router.push("/product")}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Continue Shopping
            </button>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Total: ${formatPrice(totalAmount)}
            </div>
            <button
              onClick={() => router.push("/product/cart/checkout")}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
