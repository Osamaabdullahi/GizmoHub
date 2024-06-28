"use client";
import React, { useState } from "react";
import Navbar from "./Sidebar";
import Products from "./ProductTable";
import Orders from "./OrderTable";
import Users from "./UserTable";
import Analytics from "./Analytics";
import { useAppStore } from "@/store";

export default function Home() {
  const [active, setActive] = useState("products");
  const isDarkMode = useAppStore((state) => state.night);

  const renderContent = () => {
    switch (active) {
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "users":
        return <Users />;
      case "analytics":
        return <Analytics />;
      default:
        return <Products />;
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Navbar active={active} setActive={setActive} />
      <main className="p-4">{renderContent()}</main>
    </div>
  );
}
