import React from "react";
import { FaHistory } from "react-icons/fa";
import { useAppStore } from "@/store";

const OrderHistory = () => {
  const isDarkMode = useAppStore((state) => state.night);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } p-4 rounded-lg shadow-md`}
    >
      <h3 className="text-2xl font-semibold mb-4">Order History</h3>
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex justify-between items-center">
          <div>
            <p>
              <strong>Order #1</strong> - Delivered
            </p>
            <p className="text-gray-600">Date: 2023-06-15</p>
          </div>
          <button className="text-blue-500 hover:underline flex items-center">
            <FaHistory className="mr-2" /> View Details
          </button>
        </li>
        <li className="py-4 flex justify-between items-center">
          <div>
            <p>
              <strong>Order #2</strong> - In Transit
            </p>
            <p className="text-gray-600">Date: 2023-06-20</p>
          </div>
          <button className="text-blue-500 hover:underline flex items-center">
            <FaHistory className="mr-2" /> View Details
          </button>
        </li>
        <li className="py-4 flex justify-between items-center">
          <div>
            <p>
              <strong>Order #3</strong> - Processing
            </p>
            <p className="text-gray-600">Date: 2023-06-25</p>
          </div>
          <button className="text-blue-500 hover:underline flex items-center">
            <FaHistory className="mr-2" /> View Details
          </button>
        </li>
      </ul>
    </div>
  );
};

export default OrderHistory;
