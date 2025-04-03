import React from "react";

const Button = ({ type, text }) => {
  return (
    <button
      className={`${
        type === "PRIMARY"
          ? "text-white bg-gradient-to-r from-light_primary via-[#FF762C] to-[#FFAB7E]"
          : type === "SECONDARY"
          ? "text-primary bg-white"
          : "text-black"
      } rounded-md w-fit font-bold md:rounded-xl font-onest border-none px-6 py-2 text-sm md:text-lg flex flex-nowrap shrink-0`}
    >
      {text}
    </button>
  );
};

export default Button;
