"use client";
import React, { useState } from "react";
import useCartStore, { useAppStore, useAuthStore } from "@/store";
import ThankYouModal from "@/components/ThankYouModal";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { Suspense } from "react";
const Checkout = () => {
  const isAuth = useAuthStore((state) => state.isLoggedIn);

  useLayoutEffect(() => {
    if (!isAuth) {
      redirect("/sighup");
    }
  }, []);

  const router = useRouter();
  const isDarkMode = useAppStore((state) => state.night);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartObjects = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const user = useAuthStore((state) => state.user);
  const [Loading, setLoading] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout
    handleOrderPlaced();
  };

  const handleOrderPlaced = () => {
    setLoading(true);
    setIsModalOpen(true);
    for (let key in cartObjects) {
      placeOrders(
        cartObjects[key].quantity,
        cartObjects[key].total,
        user.user_id,
        cartObjects[key].id
      );
    }
    setLoading(false);
    clearCart();
    // router.push("product");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/product");
  };

  const placeOrders = async (quantity, total_price, user, product) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orderditems/`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
        total_price,
        user,
        product,
      }),
    });
    const result = await response.json();
  };

  return (
    <Suspense>
      <div
        className={`py-16 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        } min-h-screen`}
      >
        <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-3xl">
          <h2
            className={`text-3xl font-bold text-center mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Checkout
          </h2>
          <form
            onSubmit={handleSubmit}
            className={`bg-white p-6 rounded-lg shadow-md space-y-8 ${
              isDarkMode ? "dark:bg-gray-800" : ""
            }`}
          >
            {/* Shipping Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={shippingInfo.fullName}
                  onChange={handleShippingChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleShippingChange}
                  placeholder="City"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={shippingInfo.state}
                  onChange={handleShippingChange}
                  placeholder="State"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={handleShippingChange}
                  placeholder="Zip Code"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="country"
                  value={shippingInfo.country}
                  onChange={handleShippingChange}
                  placeholder="Country"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={shippingInfo.phoneNumber}
                  onChange={handleShippingChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Payment Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cardHolderName"
                  value={paymentInfo.cardHolderName}
                  onChange={handlePaymentChange}
                  placeholder="Card Holder Name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="Card Number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="expirationDate"
                  value={paymentInfo.expirationDate}
                  onChange={handlePaymentChange}
                  placeholder="Expiration Date (MM/YY)"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handlePaymentChange}
                  placeholder="CVV"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
              <div
                className={`bg-gray-100 p-4 rounded-lg shadow-inner ${
                  isDarkMode ? "dark:bg-gray-700" : ""
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span>Subtotal:</span>
                  <span>{totalAmount}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total:</span>
                  <span>{totalAmount + 10}</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleOrderPlaced}
                type="button"
                className={`bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 ${
                  isDarkMode ? "dark:bg-gray-600 dark:hover:bg-gray-700" : ""
                }`}
              >
                Place Order
              </button>
              <ThankYouModal isOpen={isModalOpen} onRequestClose={closeModal} />
            </div>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default Checkout;
