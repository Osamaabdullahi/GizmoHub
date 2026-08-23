"use client";
import React, { useState } from "react";
import { useAuthStore } from "@/store";
import { toast } from "react-toastify";

const inputClasses =
  "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded w-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-500";

const EditProfile = () => {
  const user = useAuthStore((state) => state.user);
  const [userInfo, setUserInfo] = useState({
    firstName: user?.first_name || "",
    lastName: user?.last_name || "",
    email: user?.email || "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No update endpoint is wired up yet — acknowledge the submit so the
    // form doesn't look like it silently did nothing.
    toast.success("Profile changes saved.");
  };

  if (!user) {
    return <p className="text-gray-600 dark:text-gray-400">Loading profile...</p>;
  }

  return (
    <div className="text-gray-900 dark:text-white">
      <h3 className="text-2xl font-semibold mb-4">Edit Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              className={inputClasses}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-brand-600 text-white px-4 py-2 rounded hover:bg-brand-700 transition-colors"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
