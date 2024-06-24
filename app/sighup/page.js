"use client";

import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const SignIn = () => {
  const isDarkMode = true;
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in
    alert("Sign-In form submitted!");
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in
    alert("Google sign-in!");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in
    alert("Facebook sign-in!");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      } py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            {isDarkMode ? "Create your account" : "Create your account"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  isDarkMode ? "border-gray-700 text-white" : "border-gray-300"
                } placeholder-gray-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  isDarkMode ? "border-gray-700 text-white" : "border-gray-300"
                } placeholder-gray-500 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isDarkMode
                  ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }`}
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-6">
          <div
            className={`w-full border-t border-gray-300 ${
              isDarkMode ? "border-gray-700" : ""
            }`}
          ></div>
          <span
            className={`mx-4 ${isDarkMode ? "text-gray-500" : "text-gray-700"}`}
          >
            OR
          </span>
          <div
            className={`w-full border-t border-gray-300 ${
              isDarkMode ? "border-gray-700" : ""
            }`}
          ></div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleGoogleSignIn}
            className={`w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium ${
              isDarkMode
                ? "text-gray-700 hover:bg-gray-700 hover:text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleFacebookSignIn}
            className={`w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium ${
              isDarkMode
                ? "text-gray-700 hover:bg-gray-700 hover:text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaFacebookF className="mr-2" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
