"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import useCartStore, { useAppStore, useAuthStore } from "@/store";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);
  const isAdmin = user ? user.admin : false;
  const isDarkMode = useAppStore((state) => state.night);
  const setNight = useAppStore((state) => state.setNight);
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cart);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setNight();
  };

  const linkStyle = (path) => {
    return `py-2 px-3 rounded ${
      pathname === path
        ? isDarkMode
          ? "bg-gray-700 text-white"
          : "bg-blue-600 text-white"
        : isDarkMode
        ? "text-white hover:text-blue-600"
        : "text-black hover:text-blue-600"
    }`;
  };

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    // replace(`${pathname}?${params.toString()}`);
    replace(`/product?${params.toString()}`);
  }

  if (!mounted) {
    // Render nothing on the server to avoid mismatches
    return null;
  }

  return (
    <nav className={`bg-${isDarkMode ? "gray-800" : "white"} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          onClick={() => router.push("/")}
          className={`text-2xl cursor-pointer font-bold text-${
            isDarkMode ? "white" : "gray-800"
          }`}
        >
          GizmoHub
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/product" className={linkStyle("/product")}>
            Shop
          </Link>
          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>
          <Link href="/blog" className={linkStyle("/blog")}>
            Blog
          </Link>
          {isAdmin && (
            <Link href="/admin/Dashboard" className={linkStyle("/admin")}>
              Admin
            </Link>
          )}
          <Link
            href="/product/cart"
            className={`relative ${linkStyle("/product/cart")}`}
          >
            Cart
            <sup className="absolute -top-2 right-0 bg-red-600 text-white rounded-full text-xs px-1">
              {cartItems.length}
            </sup>
          </Link>
          <div className="relative">
            <input
              type="text"
              className={`border border-${
                isDarkMode ? "gray-700" : "gray-300"
              } rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
                isDarkMode ? "white" : "black"
              }`}
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get("query")?.toString()}
            />
            <FaSearch className="absolute top-2 left-3 text-gray-400" />
          </div>
          {isLoggedIn ? (
            <div className="relative">
              <Image
                src="/images/controller.jpg"
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => router.push("/profile")}
                width={100}
                height={100}
              />
            </div>
          ) : (
            <button
              onClick={() => router.push("sighin")}
              className={`px-4 py-2 rounded-lg ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
              } hover:bg-blue-700 focus:outline-none`}
            >
              Login
            </button>
          )}
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
            } hover:bg-blue-700 focus:outline-none`}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`text-${
              isDarkMode ? "white" : "gray-800"
            } focus:outline-none`}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`lg:hidden bg-${
            isDarkMode ? "gray-800" : "white"
          } px-4 py-4`}
        >
          <Link href="/" className={`block ${linkStyle("/")}`}>
            Home
          </Link>
          <Link href="/product" className={`block ${linkStyle("/product")}`}>
            Shop
          </Link>
          <Link href="/about" className={`block ${linkStyle("/about")}`}>
            About
          </Link>
          <Link href="/blog" className={`block ${linkStyle("/blog")}`}>
            Blog
          </Link>
          {isAdmin && (
            <Link
              href="/admin/Dashboard"
              className={`block ${linkStyle("/admin")}`}
            >
              Admin
            </Link>
          )}
          <Link
            href="/product/cart"
            className={`block relative ${linkStyle("/product/cart")}`}
          >
            Cart
            <sup className="absolute -top-2 right-0 bg-red-600 text-white rounded-full text-xs px-1">
              {cartItems.length}
            </sup>
          </Link>
          <div className="relative py-2">
            <input
              type="text"
              className={`border border-${
                isDarkMode ? "gray-700" : "gray-300"
              } rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 text-${
                isDarkMode ? "white" : "black"
              }`}
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get("query")?.toString()}
            />
            <FaSearch className="absolute top-3 left-4 text-gray-400" />
          </div>
          {isLoggedIn ? (
            <div className="w-full mt-2">
              <button
                onClick={() => router.push("/profile")}
                className={`w-full px-4 py-2 ${
                  isDarkMode
                    ? "bg-gray-700 text-white"
                    : "bg-blue-600 text-white"
                } rounded-lg`}
              >
                Profile
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("sighin")}
              className={`w-full mt-2 px-4 py-2 ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-blue-600 text-white"
              } rounded-lg`}
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
