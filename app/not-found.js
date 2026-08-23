"use client";
import React from "react";
import Lottie from "lottie-react";
import notfound from "../public/animation/notfound.json";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 dark:bg-gray-950 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        Oops! The page you are looking for does not exist.
      </h1>
      <div className="w-72 h-72">
        <Lottie animationData={notfound} loop style={{ height: "100%", width: "100%" }} />
      </div>
      <Link
        href="/"
        className="mt-4 px-5 py-2.5 bg-brand-600 text-white rounded-lg shadow hover:bg-brand-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
