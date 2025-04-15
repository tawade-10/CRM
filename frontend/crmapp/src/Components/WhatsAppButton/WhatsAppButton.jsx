import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ phoneNumber = "1234567890", message = "Hello!" }) => {
  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="absolute bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center text-2xl"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default WhatsAppButton;
