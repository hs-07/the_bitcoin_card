import React from "react";

const Button = ({ type, text }) => {
  return (
    <button
      className={`${
        type === "PRIMARY"
          ? "text-white bg-gradient-to-r from-light_primary via-[#FF762C] to-[#FFAB7E]"
          : type === "SECONDARY"
          ? "text-primary"
          : "text-black"
      } rounded-md md:rounded-xl font-onest border-none px-4 md:px-6 py-1 md:py-2 text-sm md:text-lg flex flex-nowrap shrink-0`}
    >
      {text}
    </button>
  );
};

export default Button;
