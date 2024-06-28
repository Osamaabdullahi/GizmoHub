// src/components/ThankYouModal.js

import React from "react";
import Modal from "react-modal";
import Lottie from "react-lottie";
import thankYouAnimation from "../public/animation/thankYouAnimation.json";

const ThankYouModal = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      maxWidth: "400px",
      width: "90%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: thankYouAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Thank You Modal"
    >
      <Lottie options={defaultOptions} height={150} width={150} />
      <h2 className="text-xl font-semibold mt-4">Thank You for Your Order!</h2>
      <p className="mt-2">Your order has been placed successfully.</p>
      <button
        onClick={onRequestClose}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Continue Shopping
      </button>
    </Modal>
  );
};

export default ThankYouModal;
