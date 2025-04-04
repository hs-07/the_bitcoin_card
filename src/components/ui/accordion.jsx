"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Accordion({ item, index }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="bg-bg_color text-secondary rounded-xl px-4 md:px-12 lg:px-16  shadow-sm py-4 md:py-6 lg:py-8 flex flex-col">
        <button
          onClick={() => toggle(index)}
          className={`${
            openIndex === index ? "pb-6" : ""
          } w-full flex justify-between items-center text-left font-medium text-gray-800  transition`}
        >
          <span className="font-onest font-bold text-[24px] md:text-[40px]">
            {item.heading}
          </span>
          {openIndex === index ? (
            <FiMinus className="h-6 w-6 text-gray-500" />
          ) : (
            <FiPlus className="h-6 w-6 text-gray-500" />
          )}
        </button>
        <div
          className={`font-oxygen text-[16px] md:text-[24px] text-gray-600 transition-all duration-300 ease-in-out ${
            openIndex === index
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
}
