"use client";
import React from "react";
import { toast } from "react-toastify";

const SAMPLE_ORDERS = [
  { id: 1, status: "Delivered", date: "2024-06-15" },
  { id: 2, status: "In Transit", date: "2024-06-20" },
  { id: 3, status: "Processing", date: "2024-06-25" },
];

const OrderHistory = () => {
  return (
    <div className="text-gray-900 dark:text-white">
      <h3 className="text-2xl font-semibold mb-4">Order History</h3>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {SAMPLE_ORDERS.map((order) => (
          <li key={order.id} className="py-4 flex justify-between items-center">
            <div>
              <p>
                <strong>Order #{order.id}</strong> - {order.status}
              </p>
              <p className="text-gray-600 dark:text-gray-400">Date: {order.date}</p>
            </div>
            <button
              onClick={() => toast.info(`Details for order #${order.id} aren't available yet.`)}
              className="text-brand-600 hover:underline"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
