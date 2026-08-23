"use client";
import React, { useState, useEffect } from "react";

const Notification = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 text-lg md:text-xl lg:text-2xl w-11/12 md:w-3/4 lg:w-1/2 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
};

export default Notification;
