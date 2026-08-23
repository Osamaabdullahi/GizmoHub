"use client";
import React, { useEffect } from "react";
import Link from "next/link";

// Next.js App Router error boundary. It receives `error` and `reset` from
// the framework — the previous version used the old Pages Router
// `getInitialProps` pattern, which the App Router never calls.
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gray-100 dark:bg-gray-950">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Something went wrong
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        An unexpected error occurred while loading this page.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="bg-brand-600 text-white py-2 px-5 rounded-lg hover:bg-brand-700 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white py-2 px-5 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
