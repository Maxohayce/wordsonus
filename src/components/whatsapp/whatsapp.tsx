// components/WhatsAppButton.js
import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  const phoneNumber = "+2349029712838"; // Replace with your WhatsApp Business number (with country code)
  const message = "Hello! I'm interested in learning more."; // Optional default message

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        padding: "15px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Image
        src="/images/whatsapp.png" // Place your WhatsApp icon in the public folder
        alt="Chat on WhatsApp"
        height={50}
        width={50}
      />
    </a>
  );
};

export default WhatsAppButton;
