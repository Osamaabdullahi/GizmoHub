"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes, FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import useCartStore, { useAppStore, useAuthStore } from "@/store";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAdmin = user ? user.admin : false;
  const isDarkMode = useAppStore((state) => state.night);
  const setNight = useAppStore((state) => state.setNight);
  const cartItems = useCartStore((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkStyle = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      pathname === path
        ? "bg-brand-600 text-white"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
    }`;

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`/product?${params.toString()}`);
  }

  const cartCount = mounted
    ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200 dark:bg-gray-950/90 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link
            href="/"
            className="shrink-0 text-xl font-bold text-gray-900 dark:text-white"
          >
            Gizmo<span className="text-brand-600">Hub</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link href="/admin/Dashboard" className={linkStyle("/admin/Dashboard")}>
                Admin
              </Link>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3 flex-1 max-w-sm">
            <div className="relative w-full">
              <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                placeholder="Search products..."
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("query")?.toString()}
              />
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/product/cart"
              className="relative p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] leading-none rounded-full px-1.5 py-1">
                  {cartCount}
                </span>
              )}
            </Link>

            {mounted && isLoggedIn ? (
              <button onClick={() => router.push("/profile")} aria-label="Profile">
                <Image
                  src="/images/controller.jpg"
                  alt="Profile avatar"
                  className="w-9 h-9 rounded-full object-cover cursor-pointer border border-gray-200 dark:border-gray-700"
                  width={36}
                  height={36}
                />
              </button>
            ) : (
              <button
                onClick={() => router.push("/sighin")}
                className="px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700"
              >
                Log in
              </button>
            )}

            <button
              onClick={setNight}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/product/cart"
              className="relative p-2 text-gray-700 dark:text-gray-200"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] leading-none rounded-full px-1.5 py-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-1 dark:bg-gray-950 dark:border-gray-800">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`block ${linkStyle(link.href)}`}>
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <Link href="/admin/Dashboard" className={`block ${linkStyle("/admin/Dashboard")}`}>
              Admin
            </Link>
          )}

          <div className="relative py-2">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              placeholder="Search products..."
              onChange={(e) => handleSearch(e.target.value)}
              defaultValue={searchParams.get("query")?.toString()}
            />
          </div>

          {mounted && isLoggedIn ? (
            <button
              onClick={() => router.push("/profile")}
              className="w-full text-left px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
            >
              Profile
            </button>
          ) : (
            <button
              onClick={() => router.push("/sighin")}
              className="w-full px-4 py-2 rounded-lg bg-brand-600 text-white"
            >
              Log in
            </button>
          )}

          <button
            onClick={setNight}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />} Toggle theme
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
