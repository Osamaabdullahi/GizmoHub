"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useAuthStore } from "@/store";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const inputClasses =
  "appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/token/`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        const decoded = jwtDecode(result.access);
        const { email, first_name, last_name, user_id, admin } = decoded;
        login({ email, first_name, last_name, user_id, refresh: result.refresh, admin });
        toast.success("You have been logged in");
        router.push("/product");
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => toast.info("Google login isn't set up yet.");
  const handleFacebookLogin = () => toast.info("Facebook login isn't set up yet.");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link href="/sighup" className="font-medium text-brand-600 hover:text-brand-500">
              create a new account
            </Link>{" "}
            if you don&apos;t have one.
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
              className={`${inputClasses} rounded-md`}
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
              className={`${inputClasses} rounded-md`}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-500">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <div className="flex items-center justify-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
          <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FaGoogle className="mr-2" /> Log in with Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FaFacebookF className="mr-2" /> Log in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
