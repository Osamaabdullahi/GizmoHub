"use client";
import React from "react";
import Lottie from "lottie-react";
import notfound from "../public/animation/notfound.json"; // Ensure your JSON file is in the public directory
import { useAppStore } from "@/store";
import Link from "next/link";
import { Suspense } from "react";

const NotFoundPage = () => {
  const isDarkMode = useAppStore((state) => state.night);

  return (
    <Suspense fallback={<div>loading ...</div>}>
      <div
        className={`flex flex-col items-center justify-center min-h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <h1
          className={`text-4xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {/* Page Not Found */}
          Oops! The page you are looking for does not exist.
        </h1>
        <div className="w-80 h-80">
          <Lottie
            animationData={notfound}
            loop={true}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        {/* <p
        className={`text-lg  mt-4 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Oops! The page you are looking for does not exist.
      </p> */}
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Go to Homepage
        </Link>
      </div>
    </Suspense>
  );
};

export default NotFoundPage;
