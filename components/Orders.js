"use client";
import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/store";

const Orders = () => {
  const user = useAuthStore((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user?.user_id) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    const getOrders = async () => {
      setLoading(true);
      setError(false);
      try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/?user_id=${user.user_id}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        const result = await response.json();
        if (!cancelled) setOrders(result);
      } catch (err) {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    getOrders();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading) {
    return <p className="text-gray-600 dark:text-gray-400">Loading orders...</p>;
  }

  if (error) {
    return (
      <p className="text-gray-600 dark:text-gray-400">
        Couldn&apos;t load your orders right now. Please try again shortly.
      </p>
    );
  }

  return (
    <div className="text-gray-900 dark:text-white">
      <h3 className="text-2xl font-semibold mb-4">Orders</h3>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
              <p className="text-lg font-semibold">Order #{order.id}</p>
              <p>Product: {order.product}</p>
              <p className="text-gray-600 dark:text-gray-400">Quantity: {order.quantity}</p>
              <p>Price: ${order.total_price}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No orders available.</p>
      )}
    </div>
  );
};

export default Orders;
