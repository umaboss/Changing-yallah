// src/Components/atoms/WhatsappButton.jsx
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Apna WhatsApp number yahan add karein
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
        <IoLogoWhatsapp className="text-white text-[30px]"/>
    </a>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "50px",
    right: "20px",
    zIndex: 1000,
    backgroundColor: "#25D366",
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
};

export default WhatsappButton;
