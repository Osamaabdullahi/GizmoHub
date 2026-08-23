"use client";

import React from "react";
import { useAuthStore } from "@/store";

const initials = (user) =>
  `${user?.first_name?.[0] || ""}${user?.last_name?.[0] || ""}`.toUpperCase() || "?";

const AccountDetails = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <p className="text-gray-600 dark:text-gray-400">Loading account details...</p>;
  }

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
      <div className="flex flex-col items-center p-6 shadow-sm rounded-lg w-full md:w-1/3 bg-white dark:bg-gray-800">
        <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center bg-brand-600 text-white text-3xl font-semibold">
          {initials(user)}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{user.email}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {user.first_name} {user.last_name}
        </p>
      </div>

      <div className="p-6 shadow-sm rounded-lg w-full md:w-2/3 mt-6 md:mt-0 bg-white dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Account Details
        </h3>
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                First Name
              </label>
              <p className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                {user.first_name}
              </p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                Last Name
              </label>
              <p className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                {user.last_name}
              </p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Email</label>
              <p className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
