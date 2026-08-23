"use client";
import React from "react";
import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignOut = () => {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/sighin");
  };

  return (
    <div className="text-gray-900 dark:text-white">
      <h3 className="text-2xl font-semibold mb-4">Sign Out</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        You&apos;ll need to log back in to view your account.
      </p>
      <button
        onClick={handleLogout}
        className="bg-brand-600 text-white py-2 px-4 rounded-lg hover:bg-brand-700 transition-colors"
      >
        Log out
      </button>
    </div>
  );
};

export default SignOut;
