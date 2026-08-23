"use client";
import React, { useEffect, useState } from "react";
import useCartStore, { useAuthStore } from "@/store";
import ThankYouModal from "@/components/ThankYouModal";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const formatPrice = (n) => (Number.isFinite(Number(n)) ? Number(n).toFixed(2) : "0.00");

const fieldClasses =
  "w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500";

const Checkout = () => {
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const cartObjects = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  // `redirect()` from next/navigation only works during server rendering;
  // in a client component the router is the correct way to navigate away.
  useEffect(() => {
    if (mounted && !isAuth) {
      router.push("/sighup");
    }
  }, [mounted, isAuth, router]);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const placeOrder = async (item) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orderditems/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: item.quantity,
        total_price: item.total,
        user: user.user_id,
        product: item.id,
      }),
    });
    if (!response.ok) throw new Error("Order failed");
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartObjects.length === 0) return;

    setIsPlacingOrder(true);
    try {
      await Promise.all(cartObjects.map(placeOrder));
      clearCart();
      setIsModalOpen(true);
    } catch (err) {
      toast.error("We couldn't place your order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/product");
  };

  if (!mounted || !isAuth) {
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-950" />;
  }

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 md:max-w-2xl lg:max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Checkout
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm space-y-8"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Shipping Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" value={shippingInfo.fullName} onChange={handleShippingChange} placeholder="Full Name" className={fieldClasses} required />
              <input type="text" name="address" value={shippingInfo.address} onChange={handleShippingChange} placeholder="Address" className={fieldClasses} required />
              <input type="text" name="city" value={shippingInfo.city} onChange={handleShippingChange} placeholder="City" className={fieldClasses} required />
              <input type="text" name="state" value={shippingInfo.state} onChange={handleShippingChange} placeholder="State" className={fieldClasses} required />
              <input type="text" name="zipCode" value={shippingInfo.zipCode} onChange={handleShippingChange} placeholder="Zip Code" className={fieldClasses} required />
              <input type="text" name="country" value={shippingInfo.country} onChange={handleShippingChange} placeholder="Country" className={fieldClasses} required />
              <input type="tel" name="phoneNumber" value={shippingInfo.phoneNumber} onChange={handleShippingChange} placeholder="Phone Number" className={fieldClasses} required />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Payment Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="cardHolderName" value={paymentInfo.cardHolderName} onChange={handlePaymentChange} placeholder="Card Holder Name" className={fieldClasses} required />
              <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} placeholder="Card Number" className={fieldClasses} required />
              <input type="text" name="expirationDate" value={paymentInfo.expirationDate} onChange={handlePaymentChange} placeholder="Expiration Date (MM/YY)" className={fieldClasses} required />
              <input type="text" name="cvv" value={paymentInfo.cvv} onChange={handlePaymentChange} placeholder="CVV" className={fieldClasses} required />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Order Summary
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-gray-900 dark:text-white">
              <div className="flex justify-between items-center mb-2">
                <span>Subtotal:</span>
                <span>${formatPrice(totalAmount)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg pt-2 border-t border-gray-300 dark:border-gray-700">
                <span>Total:</span>
                <span>${formatPrice(totalAmount + 10)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isPlacingOrder || cartObjects.length === 0}
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-60"
            >
              {isPlacingOrder ? "Placing order..." : "Place Order"}
            </button>
          </div>
        </form>
        <ThankYouModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
};

export default Checkout;
