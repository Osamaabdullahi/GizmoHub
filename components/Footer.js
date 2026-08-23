"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const shopLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const categoryLinks = [
  { href: "/product?query=Laptops", label: "Laptops" },
  { href: "/product?query=Headphones", label: "Headphones" },
  { href: "/product?query=Tablets", label: "Tablets" },
  { href: "/product?query=Networking", label: "Networking" },
  { href: "/product?query=PC Gaming", label: "PC Gaming" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // No newsletter backend is wired up yet — acknowledge locally so the
    // form doesn't silently do nothing when submitted.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">GizmoHub</h2>
            <ul className="space-y-2 text-sm">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Categories</h2>
            <ul className="space-y-2 text-sm">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Customer Service</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/product/cart" className="hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <span className="cursor-default">Shipping &amp; Returns</span>
              </li>
              <li>
                <span className="cursor-default">Privacy Policy</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> 123 Main Street, City, Country
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> 123-456-7890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> support@gizmohub.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full max-w-sm">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-600 text-white text-sm rounded-r-lg hover:bg-brand-700 whitespace-nowrap"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GizmoHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
