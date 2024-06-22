"use client";

import React, { useState } from "react";

const Checkout = () => {
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
    alert("Checkout processed!");
  };

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-8"
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
            <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
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
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <div className="flex justify-between items-center mb-2">
                <span>Subtotal:</span>
                <span>$139.97</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span>$149.97</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
