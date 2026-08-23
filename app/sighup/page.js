"use client";

import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const inputClasses =
  "appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  const createAccount = async () => {
    setIsLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register/`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Account created! Please log in.");
        router.push("/sighin");
      } else {
        toast.error("Couldn't create your account — please check your details.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => toast.info("Google sign-up isn't set up yet.");
  const handleFacebookSignUp = () => toast.info("Facebook sign-up isn't set up yet.");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link href="/sighin" className="font-medium text-brand-600 hover:text-brand-500">
              sign in to an existing account
            </Link>{" "}
            if you already have one.
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <input
                id="firstname"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
                className={`${inputClasses} rounded-md`}
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <input
                id="lastname"
                name="last_name"
                type="text"
                autoComplete="family-name"
                required
                className={`${inputClasses} rounded-md`}
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
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
              autoComplete="new-password"
              required
              className={`${inputClasses} rounded-md`}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="block text-sm text-gray-900 dark:text-gray-300">
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
            {isLoading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="space-y-3">
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
          <button
            onClick={handleFacebookSignUp}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <FaFacebookF className="mr-2" /> Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
