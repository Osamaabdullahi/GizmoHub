"use client";
import React, { useState } from "react";
import { useAppStore, useAuthStore } from "@/store";

const EditProfile = () => {
  const user = useAuthStore((state) => state.user);
  const [userInfo, setUserInfo] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: "(555) 555-5555",
    cardHolder: "John Doe",
    cardNumber: "**** **** **** 1234",
    expiryDate: "12/23",
    billingAddress: "123 Main St, San Francisco, CA",
  });

  const isDarkMode = useAppStore((state) => state.night);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
  };

  return (
    <div
      className={`flex flex-col items-center md:flex-row md:items-start md:space-x-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } p-4 rounded-lg shadow-md`}
    >
      {/* User Avatar and Info */}
      <div
        className={`flex flex-col items-center p-6 rounded-lg w-full md:w-1/3 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white shadow-md"
        }`}
      >
        <img
          className="w-32 h-32 rounded-full mb-4"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <h3 className="text-2xl font-semibold mb-2">Edit Profile</h3>
        <p className={`mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {userInfo.email}
        </p>
        <p className={`mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          San Francisco, CA
        </p>
      </div>

      {/* User Details Form */}
      <div
        className={
          isDarkMode
            ? `bg-gray-800 text-white p-6 rounded-lg w-full md:w-2/3 mt-6 md:mt-0 shadow-md`
            : `bg-white-800 text-black p-6 rounded-lg w-full md:w-2/3 mt-6 md:mt-0 shadow-md`
        }
      >
        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-300">First Name</label>
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full border border-black  ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                // className={
                //   isDarkMode
                //     ? `bg-white-900 p-2 rounded w-full border border-white text-white`
                //     : `bg-grey-900 p-2 rounded w-full border border-black text-black `
                // }
              />
            </div>
            <div>
              <label className="block text-gray-300">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-300">Phone</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300">Card Holder</label>
              <input
                type="text"
                name="cardHolder"
                value={userInfo.cardHolder}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-300">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={userInfo.cardNumber}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div>
              <label className="block text-gray-300">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={userInfo.expiryDate}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-300">Billing Address</label>
              <input
                type="text"
                name="billingAddress"
                value={userInfo.billingAddress}
                onChange={handleChange}
                className={`bg-gray-900 p-2 rounded w-full ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                isDarkMode ? "hover:bg-blue-700" : "hover:bg-blue-500"
              }`}
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
