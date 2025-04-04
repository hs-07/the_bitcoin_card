"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-xl shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
          >
            <span>{item.heading}</span>
            {openIndex === index ? (
              <FiMinus className="h-5 w-5 text-gray-500" />
            ) : (
              <FiPlus className="h-5 w-5 text-gray-500" />
            )}
          </button>
          <div
            className={`px-4 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
