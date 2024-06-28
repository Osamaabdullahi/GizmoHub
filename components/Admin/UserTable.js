"use client";
import { useAppStore } from "@/store";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const isDarkMode = useAppStore((state) => state.night);

  const getUsers = async () => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`;

    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setUsers(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <UserSkeleton isDarkMode={isDarkMode} />;
  }

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className={`${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.first_name}</td>
                <td className="border px-4 py-2">{user.last_name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button
                    className={`p-2 rounded ${
                      isDarkMode
                        ? "bg-gray-600 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    Make Admin
                  </button>
                  <button
                    className={`p-2 rounded ${
                      isDarkMode
                        ? "bg-gray-600 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

const UserSkeleton = ({ isDarkMode }) => {
  const skeletonItems = Array(5).fill(0); // Change the number to the number of skeleton items you want to display

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr
              className={`${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200"
              }`}
            >
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skeletonItems.map((_, index) => (
              <tr
                key={index}
                className={`${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                </td>
                <td className="border px-4 py-2">
                  <div className="h-8 bg-gray-300 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
