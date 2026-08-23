import React from "react";
import { FaBox, FaUsers, FaShoppingCart, FaChartBar } from "react-icons/fa";

const Navbar = ({ active, setActive }) => {
  return (
    <nav className="flex justify-around bg-gray-800 text-white p-4">
      <div
        className={`flex items-center cursor-pointer ${
          active === "products" && "bg-gray-700"
        } p-2 rounded`}
        onClick={() => setActive("products")}
      >
        <FaBox className="mr-2" />
        Products
      </div>
      <div
        className={`flex items-center cursor-pointer ${
          active === "orders" && "bg-gray-700"
        } p-2 rounded`}
        onClick={() => setActive("orders")}
      >
        <FaShoppingCart className="mr-2" />
        Orders
      </div>
      <div
        className={`flex items-center cursor-pointer ${
          active === "users" && "bg-gray-700"
        } p-2 rounded`}
        onClick={() => setActive("users")}
      >
        <FaUsers className="mr-2" />
        Users
      </div>
      <div
        className={`flex items-center cursor-pointer ${
          active === "analytics" && "bg-gray-700"
        } p-2 rounded`}
        onClick={() => setActive("analytics")}
      >
        <FaChartBar className="mr-2" />
        Analytics
      </div>
    </nav>
  );
};

export default Navbar;
