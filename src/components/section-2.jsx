import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="flex w-full px-0 md:px-16 h-full rounded-3xl bg-bg_color justify-between items-end flex-col md:flex-row">
      {" "}
      <div className="w-fit  px-4 md:px-0 py-4 md:py-14 h-full flex flex-col justify-center">
        <span className=" font-onest text-secondary text-[28px] md:text-[42px] lg:text-[64px] leading-[1.2] font-bold max-w-[800px] pb-2">
          {" "}
          The Bitcoin Card
        </span>
        <p className="font-oxygen text-[20px] md:text-[24px] font-[400] pb-6 max-w-[800px]">
          Lock in your limit with BTC, then spend cash and earn bitcoin rewards
          like a pro. New to the game or a hodl master, this card’s your ticket
          to flex without the runaround.
        </p>
        <p className="font-onest text-gray-400 text-[16px] md:text-[20px] font-[400] pb-6 max-w-[800px]">
          Not a credit giveaway. Approval’s got rules, terms can shift..
        </p>
      </div>
      <div className="w-full md:w-fit h-full flex items-end justify-end">
        <Image
          src={"/card.svg"}
          alt="hero"
          width={80}
          height={80}
          className="w-full h-full hidden md:block"
        />
        <Image
          src={"/mob-card.svg"}
          alt="hero"
          width={80}
          height={80}
          className="w-3/4 h-full block md:hidden rounded-br-3xl"
        />
      </div>
    </div>
  );
};

export default Section2;
