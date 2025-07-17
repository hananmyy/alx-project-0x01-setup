import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;