"use client";
import React, { useEffect, useState } from "react";
import { useAppStore, useAuthStore } from "@/store";

const Orders = () => {
  const isDarkMode = useAppStore((state) => state.night);
  const user = useAuthStore((state) => state.user);
  const [orders, setorders] = useState({});
  const [Loading, setLoading] = useState(false);

  const getOrders = async () => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/?user_id=${user.user_id}`;
    const response = await fetch(url);
    const result = await response.json();

    if (response.ok) {
      setorders(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, [user]);

  if (Loading) {
    return <h1>laoding ...</h1>;
  }

  return (
    <div className={`text-${isDarkMode ? "white" : "black"}`}>
      <h3 className="text-2xl font-semibold mb-4">Orders</h3>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li
              key={order.id}
              className={`mb-4 border-b pb-2 ${
                isDarkMode ? "border-gray-600" : "border-gray-200"
              }`}
            >
              <p className="text-3xl font-semibold">
                {" "}
                order id: {"  "}
                {order.id}
              </p>
              <p className="text-2xl">
                name: {"  "}
                {order.product}
              </p>
              <p className="text-gray-600">
                quantity: {"  "}
                {order.quantity}
              </p>

              <p>
                {" "}
                price: {"  "}
                {order.total_price}
              </p>
              <p>
                status: {"  "}
                {orders.status}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default Orders;
