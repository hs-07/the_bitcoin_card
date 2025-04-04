import React from "react";
import Image from "next/image";

const Section5 = () => {
  const HOW_IT_WORKS = [
    {
      src: "/lock.svg",
      heading: "Lock in Your Limit",
      content:
        "Deposit BTC to secure a credit line-fully secured or partially secured collateralize, your call. No special accounts needed; we keep it seamless.",
    },
    {
      src: "/bitcoin-circle.svg",
      heading: "Connect Your Wallet",
      content:
        "Easily link your BTC wallet. We’ll verify your collateral in real time—no drawn-out ‘wire money here, wait 3 days’ nonsense.",
    },
  ];

  return (
    <div className="w-full h-full md:px-16 ">
      <div className="w-full flex justify-center py-24 px-4">
        <h1 className="font-bold text-[40px] md:text-[64px] lg:text-[96px] leading-[1.2] font-onest text-secondary text-center">
          How it works
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
        {HOW_IT_WORKS.map((item, index) => (
          <div
            className="bg-bg_color rounded-2xl p-4 md:p-12 lg:p-16 flex flex-col gap-4"
            key={index}
          >
            <Image
              src={item.src}
              alt={"icon"}
              width={30}
              height={30}
              className="w-16 md:w-20"
            />
            <h2 className="font-onest text-[24px] md:text-[40px] font-bold text-secondary">
              {item.heading}
            </h2>
            <p className="font-oxygen text-[16px] md:text-[24px] font-[400]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
