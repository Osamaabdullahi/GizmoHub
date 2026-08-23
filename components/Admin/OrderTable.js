"use client";
import { useAppStore } from "@/store";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for React-Toastify

const Orders = () => {
  const isDarkMode = useAppStore((state) => state.night);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([
    { id: 1, product: "Product 1", owner: "John Doe", status: "Delivered" },
    { id: 2, product: "Product 2", owner: "Jane Smith", status: "In Transit" },
    {
      id: 3,
      product: "Product 3",
      owner: "Alice Johnson",
      status: "In Processing",
    },
  ]);

  const getOrders = async () => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orderditems/`;
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setOrders(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return isDarkMode ? "bg-green-800 text-white" : "bg-green-100";
      case "In Transit":
        return isDarkMode ? "bg-yellow-800 text-white" : "bg-yellow-100";
      case "In Processing":
        return isDarkMode ? "bg-blue-800 text-white" : "bg-blue-100";
      default:
        return "";
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/orderditems/${id}/`;

    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });
    const result = await response.json();
    if (response.ok) {
      toast.success("Status updated");
      // Assuming you want to update the local state with the updated status
      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      );
      setOrders(updatedOrders);
    }
  };

  if (loading) {
    return <OrderSkeleton isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Owner</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className={getStatusClass(order.status)}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.product}</td>
                <td className="border px-4 py-2">{order.owner}</td>
                <td className="border px-4 py-2">{order.status}</td>
                <td className="border px-4 py-2">
                  <select
                    className={`p-2 rounded ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200"
                    }`}
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                  >
                    <option value="Delivered">Delivered</option>
                    <option value="In Transit">In Transit</option>
                    <option value="In Processing">In Processing</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Orders;

const OrderSkeleton = ({ isDarkMode }) => {
  const skeletonItems = Array(5).fill(0); // Change the number to the number of skeleton items you want to display

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Owner</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skeletonItems.map((_, index) => (
              <tr
                key={index}
                className={`${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-8 bg-gray-300 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
