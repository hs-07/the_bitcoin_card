import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className="w-full h-full md:px-16 ">
      <div className="w-full flex justify-center py-24 px-4">
        <h1 className="font-bold text-[40px] md:text-[64px] lg:text-[96px] leading-[1.2] font-onest text-secondary text-center">
          Why this matters
        </h1>
      </div>

      <div className="bg-bg_color rounded-xl p-4 md:p-16 w-full flex flex-col md:flex-row gap-4 min-h-[300px] items-center relative">
        <Image
          src={"/freepik.svg"}
          alt="cards"
          className="md:absolute -right-14 md:h-[500px] -top-24 w-full md:w-[35%]"
          width={80}
          height={80}
        />
        <span className="max-w-full md:max-w-[65%] text-secondary font-oxygen text-[20px] md:text-[24px] font-[400]">
          We’re building next-gen finance tools for real people—no big bank
          bureaucracy, no endless forms. Just a frictionless card experience
          fueled by BTC.
        </span>
      </div>
    </div>
  );
};

export default Section4;
