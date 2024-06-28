"use client";
import React, { useState } from "react";
import { FaUser, FaBox, FaHistory, FaEdit, FaSignOutAlt } from "react-icons/fa";
import AccountDetails from "./AccountDetails";
import Orders from "./Orders";
import OrderHistory from "./OrderHistory";
import EditProfile from "./EditProfile";
import SignOut from "./SignOut";
import { useAppStore, useAuthStore } from "@/store";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("accountDetails");
  const isDarkMode = useAppStore((state) => state.night);
  const isAuth = useAuthStore((state) => state.isLoggedIn);
  useLayoutEffect(() => {
    if (!isAuth) {
      redirect("/");
    }
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "accountDetails":
        return <AccountDetails />;
      case "orders":
        return <Orders />;
      case "orderHistory":
        return <OrderHistory />;
      case "editProfile":
        return <EditProfile />;
      case "signOut":
        return <SignOut />;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-${isDarkMode ? "gray-800" : "gray-100"} py-8`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2
            className={`text-3xl md:text-4xl font-bold text-${
              isDarkMode ? "white" : "gray-800"
            }`}
          >
            Your Account
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Sidebar / Navbar */}
          <div
            className={`w-full md:w-1/4 ${
              isDarkMode ? "dark" : "light"
            }-bg p-4 fixed md:relative h-full md:h-auto`}
          >
            <ul className="flex md:flex-col justify-around space-x-4 md:space-x-0 md:space-y-4 text-center md:text-left">
              <li
                className={`flex items-center justify-center md:justify-start cursor-pointer ${
                  activeSection === "accountDetails" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("accountDetails")}
              >
                <FaUser className="mr-2" />
                <span className="hidden md:inline">Account Details</span>
              </li>
              <li
                className={`flex items-center justify-center md:justify-start cursor-pointer ${
                  activeSection === "orders" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("orders")}
              >
                <FaBox className="mr-2" />
                <span className="hidden md:inline">Orders</span>
              </li>
              <li
                className={`flex items-center justify-center md:justify-start cursor-pointer ${
                  activeSection === "orderHistory" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("orderHistory")}
              >
                <FaHistory className="mr-2" />
                <span className="hidden md:inline">Order History</span>
              </li>
              <li
                className={`flex items-center justify-center md:justify-start cursor-pointer ${
                  activeSection === "editProfile" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("editProfile")}
              >
                <FaEdit className="mr-2" />
                <span className="hidden md:inline">Edit Profile</span>
              </li>
              <li
                className={`flex items-center justify-center md:justify-start cursor-pointer ${
                  activeSection === "signOut" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveSection("signOut")}
              >
                <FaSignOutAlt className="mr-2" />
                <span className="hidden md:inline">Sign Out</span>
              </li>
            </ul>
          </div>
          {/* Main Content */}
          <div
            className={`w-full md:w-3/4 ml-0 md:ml-1/4 p-6 ${
              isDarkMode ? "dark" : "light"
            }-bg shadow-md rounded-lg mt-0 md:mt-0 md:ml-0`}
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
