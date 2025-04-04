import React from "react";
import { FAQs } from "@/utils/constants";
import Accordion from "./ui/accordion";

const FAQSection = () => {
  return (
    <div className="w-full h-full px-4 md:px-16 ">
      <div className="w-full flex justify-center py-24 px-4">
        <h1 className="font-bold text-[40px] md:text-[64px] lg:text-[96px] leading-[1.2] font-onest text-secondary text-center">
          FAQs
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        {FAQs.map((item, index) => (
          <Accordion item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
