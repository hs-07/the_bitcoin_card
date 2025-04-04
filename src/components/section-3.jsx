import Image from "next/image";
import React from "react";

const Section3 = () => {
  const items = [
    { src: "/bitcoin.svg", content: "Pure Bitcoin Collateral" },
    {
      src: "/withdraw-cash.svg",
      content: "Use the Bitcoin you hold, to access more cash",
    },
    {
      content:
        "We’re fintech, not legacy. That means instant app signups, real-time analytics, and no snail-mail for anything. Verified in minutes, not weeks",
    },
    { src: "/3d-render-icon.svg", content: "No Gatekeeper Vibes" },
    {
      src: "/dollars-bitcoins.svg",
      content:
        "Collateral’s all it takes. If you’ve got Bitcoin, you can power up.",
    },
  ];
  return (
    <div className="w-full h-full md:px-16 ">
      <div className="w-full flex justify-center py-20 px-4">
        <h1 className="font-bold text-[40px] md:text-[64px] lg:text-[96px] leading-[1.2] font-onest text-secondary text-center">
           The Bitcoin Card{" "}
        </h1>
      </div>

      <div className="flex shrink-0 overflow-x-auto md:overflow-x-hidden md:grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 px-4 md:px-0">
        {items.map((item, index) => (
          <div
            className={`${
              index === 2
                ? "bg-[url('/sm-bg.svg')] bg-cover bg-center font-[500]"
                : "bg-bg_color font-[400]"
            }  rounded-xl p-4 w-full flex flex-col justify-around min-w-[270px] md:min-w-full`}
            key={index}
          >
            <div className="w-full flex justify-center">
              {item.src && (
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt="icons"
                  className="w-3/4"
                />
              )}
            </div>
            <p className="font-onest text-[20px] text-secondary ">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
