"use client";
import React, { useState, useEffect } from "react";
import Notification from "../Notification";
import { useAppStore } from "@/store";

const Messages = ({ kind }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");
  const [Pressed, setPressed] = useState(false);
  const messageType = useAppStore((state) => state.messageType);

  useEffect(() => {
    setPressed(true);
  }, [messageType]);

  const showNotification = (message, type) => {
    setMessage(message);
    setType(type);
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  const DisplayButton = () => {
    switch (kind) {
      case "cart":
        return (
          <button
            onClick={() => showNotification("Item added to cart!", "info")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
          >
            Added to Cart
          </button>
        );
      case "login":
        return (
          <button
            onClick={() =>
              showNotification("Successfully logged in!", "success")
            }
            className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
          >
            Success Login
          </button>
        );

      case "logout":
        return (
          <button
            onClick={() =>
              showNotification("Successfully logged out!", "warning")
            }
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg"
          >
            Success Logout
          </button>
        );

      case "loginerror":
        return (
          <button
            onClick={() => showNotification("Error while logging in!", "error")}
            className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
          >
            Error Login
          </button>
        );

      default:
        <button
          onClick={() => showNotification("Successfully logged in!", "success")}
          className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
        >
          Success Login
        </button>;
    }
  };
  return (
    <div className="p-4">
      {DisplayButton()}

      <Notification
        message={message}
        type={type}
        isVisible={isVisible}
        onClose={handleClose}
      />
    </div>
  );
};

export default Messages;
