"use client"; // components/Navbar.js
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">GizmoHub</div>
        <div className="hidden lg:flex items-center space-x-4">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="/product" className="text-gray-600 hover:text-blue-600">
            Shop
          </a>
          <a href="/product" className="text-gray-600 hover:text-blue-600">
            Deals
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="/blog" className="text-gray-600 hover:text-blue-600">
            Blog
          </a>
          <a href="/product/cart" className="text-gray-600 hover:text-blue-600">
            Cart
          </a>
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search..."
            />
            <FaSearch className="absolute top-2 left-3 text-gray-400" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Login
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
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
        <div className="lg:hidden bg-white px-4 py-4">
          <a href="/" className="block py-2 text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a
            href="/product"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Shop
          </a>
          <a
            href="/product"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Deals
          </a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">
            About
          </a>
          <a
            href="/blog"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Blog
          </a>
          <a
            href="/product/cart"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Cart
          </a>
          <div className="relative py-2">
            <input
              type="text"
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search..."
            />
            <FaSearch className="absolute top-3 left-4 text-gray-400" />
          </div>
          <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
