"use client";
import React, { useState, useEffect } from "react";
import { FaUser, FaBox, FaHistory, FaEdit, FaSignOutAlt } from "react-icons/fa";
import AccountDetails from "./AccountDetails";
import Orders from "./Orders";
import OrderHistory from "./OrderHistory";
import EditProfile from "./EditProfile";
import SignOut from "./SignOut";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";

const SECTIONS = [
  { key: "accountDetails", label: "Account Details", icon: FaUser },
  { key: "orders", label: "Orders", icon: FaBox },
  { key: "orderHistory", label: "Order History", icon: FaHistory },
  { key: "editProfile", label: "Edit Profile", icon: FaEdit },
  { key: "signOut", label: "Sign Out", icon: FaSignOutAlt },
];

const Profile = () => {
  const [activeSection, setActiveSection] = useState("accountDetails");
  const [mounted, setMounted] = useState(false);
  const isAuth = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // `redirect()` from next/navigation is for use during server rendering;
  // in a client effect the router is the correct way to navigate away.
  useEffect(() => {
    if (mounted && !isAuth) {
      router.push("/");
    }
  }, [mounted, isAuth, router]);

  if (!mounted || !isAuth) {
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-950" />;
  }

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
    <div className="bg-gray-100 dark:bg-gray-950 py-8 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Your Account
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <ul className="flex md:flex-col justify-around gap-2 bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm">
              {SECTIONS.map(({ key, label, icon: Icon }) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveSection(key)}
                    className={`w-full flex items-center justify-center md:justify-start gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === key
                        ? "bg-brand-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Icon />
                    <span className="hidden md:inline">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4 p-6 bg-white dark:bg-gray-900 shadow-sm rounded-lg">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
