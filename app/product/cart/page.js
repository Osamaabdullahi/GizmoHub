"use client";
import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import useCartStore, { useAppStore, useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
export default function Cart() {
  const isDarkMode = useAppStore((state) => state.night);
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const isAuth = useAuthStore((state) => state.isLoggedIn);

  const handleCheckout = () => {
    router.push("/product/cart/checkout");
  };

  const handleRemove = (itemName) => {
    removeItem(itemName);
    toast.error("Item removed from cart!");
  };

  return (
    <Suspense>
      <div
        className={`py-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        } min-h-screen`}
      >
        <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-4xl">
          <h2
            className={`text-3xl font-bold text-center mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Shopping Cart
          </h2>
          <div
            className={`bg-white p-6 rounded-lg shadow-md ${
              isDarkMode ? "dark:bg-gray-800" : ""
            }`}
          >
            <div className="hidden md:grid grid-cols-5 gap-4 mb-4 border-b-2 pb-2">
              <div className="col-span-2 text-left">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Total</div>
              <div className="text-center"></div>
            </div>
            {cart.map((item) => (
              <div
                key={item.name}
                className={`flex flex-col md:grid md:grid-cols-5 gap-4 items-center border-b-2 py-4 ${
                  isDarkMode ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <div className="col-span-2 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <span
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <div
                  className={`text-center text-lg ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${item.price}
                </div>
                <div className="text-center">
                  <CartItem item={item} />
                </div>
                <div
                  className={`text-center text-lg ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${item.total}
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleRemove(item.name)}
                    className={`text-red-600 hover:text-red-800 ${
                      isDarkMode ? "dark:text-gray-400" : ""
                    }`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <button
                onClick={() => router.push("/product")}
                className={`bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 mb-4 md:mb-0 ${
                  isDarkMode ? "dark:bg-gray-600 dark:hover:bg-gray-700" : ""
                }`}
              >
                Continue Shopping
              </button>
              <div
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Total: ${totalAmount}
              </div>
              <button
                onClick={handleCheckout}
                className={`bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 ${
                  isDarkMode ? "dark:bg-gray-600 dark:hover:bg-gray-700" : ""
                }`}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </Suspense>
  );
}

const CartItem = ({ item }) => {
  const isDarkMode = useCartStore((state) => state.night);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => decrementItem(item.name)}
        className={`bg-gray-300 text-gray-700 px-2 py-1 rounded-l-lg hover:bg-gray-400 ${
          isDarkMode ? "dark:bg-gray-600 dark:text-white" : ""
        }`}
      >
        <FaMinus />
      </button>
      <span className={`px-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        {item.quantity}
      </span>
      <button
        onClick={() => incrementItem(item.name)}
        className={`bg-gray-300 text-gray-700 px-2 py-1 rounded-r-lg hover:bg-gray-400 ${
          isDarkMode ? "dark:bg-gray-600 dark:text-white" : ""
        }`}
      >
        <FaPlus />
      </button>
    </div>
  );
};
