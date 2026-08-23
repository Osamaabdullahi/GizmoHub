"use client";
import { useAppStore } from "@/store";
import React from "react";

const Analytics = () => {
  const isDarkMode = useAppStore((state) => state.night);
  const totalSales = 125000;
  const numberOfOrders = 1200;
  const averageOrderValue = (totalSales / numberOfOrders).toFixed(2);
  const topSellingProducts = [
    { id: 1, name: "Product 1", sales: 300, revenue: 30000 },
    { id: 2, name: "Product 2", sales: 250, revenue: 25000 },
    { id: 3, name: "Product 3", sales: 200, revenue: 20000 },
  ];
  const userAcquisition = [
    { source: "Organic Search", users: 500 },
    { source: "Paid Search", users: 300 },
    { source: "Social Media", users: 200 },
    { source: "Email Campaigns", users: 100 },
  ];

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>

      {/* Summary Metrics */}
      <div
        className={`flex flex-wrap gap-4 mb-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`flex-1 p-4 rounded shadow ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        >
          <h3 className="text-xl font-bold mb-2">Total Sales</h3>
          <p className="text-3xl">${totalSales.toLocaleString()}</p>
        </div>
        <div
          className={`flex-1 p-4 rounded shadow ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        >
          <h3 className="text-xl font-bold mb-2">Number of Orders</h3>
          <p className="text-3xl">{numberOfOrders.toLocaleString()}</p>
        </div>
        <div
          className={`flex-1 p-4 rounded shadow ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        >
          <h3 className="text-xl font-bold mb-2">Average Order Value</h3>
          <p className="text-3xl">${averageOrderValue}</p>
        </div>
      </div>

      {/* Top Selling Products */}
      <div
        className={`bg-white p-4 rounded shadow mb-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-2 ${
            isDarkMode ? "text-black" : "text-black"
          }`}
        >
          Top Selling Products
        </h3>
        <table
          className={`min-w-full ${isDarkMode ? "text-white" : "text-black"}`}
        >
          <thead
            className={`${isDarkMode ? "bg-gray-700" : "bg-gray-200"} ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <tr>
              <th className="py-2 px-4">
                {isDarkMode ? "Product Name" : "Product Name"}
              </th>
              <th className="py-2 px-4">{isDarkMode ? "Sales" : "Sales"}</th>
              <th className="py-2 px-4">
                {isDarkMode ? "Revenue" : "Revenue"}
              </th>
            </tr>
          </thead>
          <tbody>
            {topSellingProducts.map((product) => (
              <tr
                key={product.id}
                className={`${
                  isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                }`}
              >
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.sales}</td>
                <td className="border px-4 py-2">
                  ${product.revenue.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Acquisition */}
      <div
        className={`bg-white p-4 rounded shadow ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          User Acquisition
        </h3>
        <table
          className={`min-w-full ${isDarkMode ? "text-white" : "text-black"}`}
        >
          <thead
            className={`${isDarkMode ? "bg-gray-700" : "bg-gray-200"} ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <tr>
              <th className="py-2 px-4">{isDarkMode ? "Source" : "Source"}</th>
              <th className="py-2 px-4">{isDarkMode ? "Users" : "Users"}</th>
            </tr>
          </thead>
          <tbody>
            {userAcquisition.map((source, index) => (
              <tr
                key={index}
                className={`${
                  isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                }`}
              >
                <td className="border px-4 py-2">{source.source}</td>
                <td className="border px-4 py-2">
                  {source.users.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
