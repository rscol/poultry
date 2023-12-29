import React from "react";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  className,
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-green-900 text-white";
      case "secondary":
        return "bg-gray-500 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const buttonClass = `py-2 px-4 rounded-md hover:opacity-80 focus:outline-none ${getVariantClass()} ${className}`;

  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
