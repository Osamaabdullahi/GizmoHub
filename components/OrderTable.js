"use client";

import React, { useEffect, useState } from "react";
import { useAppStore } from "@/store";
import { ToastContainer, toast } from "react-toastify"; // Import from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for React-Toastify
import { useRouter } from "next/navigation";

const OrderTable = () => {
  const isDarkMode = useAppStore((state) => state.night);
  const [orders, setOrders] = useState([[]]);
  const router = useRouter();

  const getOrders = async () => {
    const url = "http://127.0.0.1:8000/orderditems/";
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setOrders(result);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const updateStatus = async (id, status) => {
    const url = `http://127.0.0.1:8000/orderditems/${id}/`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    const result = await response.json();
    router.replace("admin");
    toast.success("status updated");
  };

  const deleteOrder = async (id) => {
    const url = `http://127.0.0.1:8000/orderditems/${id}`;
    const response = await fetch(url, { method: "DELETE" });
    const result = await response.json();
    router.replace("admin");
    toast.error("order has been deleted");
  };

  return (
    <div
      className={
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }
    >
      <table className="w-full border-collapse mt-5">
        <thead>
          <tr className="text-sm md:text-base">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className={`border text-sm md:text-base ${statusClass(
                order.status
              )}`}
            >
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.product}</td>
              <td className="p-2">{order.product}</td>
              <td className="p-2">{order.quantity}</td>
              <td className="p-2">{order.total_price}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2 flex flex-col md:flex-row">
                <button
                  onClick={() => updateStatus(order.id, "Delivered")}
                  className="mb-2 md:mb-0 md:mr-2 py-1 px-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
                >
                  Delivered
                </button>
                <button
                  onClick={() => updateStatus(order.id, "InTransit")}
                  className="mb-2 md:mb-0 md:mr-2 py-1 px-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition"
                >
                  In Transit
                </button>
                <button
                  onClick={() => deleteOrder(order.id)}
                  className="py-1 px-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

const statusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "InTransit":
      return "bg-yellow-100 text-yellow-800";
    case "Processing":
      return "bg-blue-100 text-blue-800";
    default:
      return "";
  }
};

export default OrderTable;
