import React from "react";
import Image from "next/image";

const Section6 = () => {
  return (
    <div className="px-4 md:px-16">
      <div className="py-16 w-full flex gap-6 items-start md:items-center flex-col md:flex-row">
        <Image
          src={"/spend-stack.svg"}
          alt="spend-stack"
          className="w-full md:w-2/5"
          width={80}
          height={80}
        />
        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <h1 className="font-onest font-bold text-[24px] md:text-[40px]">
            Spend and Stack
          </h1>
          <p className="font-oxygen text-[18px] md:text-[24px] font-[400]">
            “Use the [TBD] Card anywhere major networks are accepted. Each
            swipe, you earn Bitcoin rewards—stacking sats back into your
            collateral.”
          </p>
        </div>
      </div>

      <div className="flex w-full px-0 md:px-16 h-full rounded-3xl bg-bg_color justify-between gap-4 items-center flex-col md:flex-row">
        <div className="w-fit max-w-[800px] px-4 md:px-0 py-4 md:py-14 h-full flex flex-col gap-4 justify-center">
          <Image
            src={"/clock.svg"}
            alt={"icon"}
            width={30}
            height={30}
            className="w-16 md:w-20"
          />
          <h2 className="font-onest text-[24px] md:text-[40px] font-bold text-secondary">
            Manage Everything in One App
          </h2>
          <p className="font-oxygen text-[16px] md:text-[24px] font-[400]">
            “Our fintech dashboard is built to handle it all: track your spend,
            see your next bill, and watch your BTC balance grow in real time.”
          </p>
        </div>
        <div className="h-full flex items-center md:items-end flex-col justify-end md:pt-16">
          <Image
            src={"/activities.svg"}
            alt="activities"
            width={70}
            height={70}
            className="w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
