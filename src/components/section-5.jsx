import React from "react";
import Image from "next/image";

const Section5 = ({ items, title, className }) => {
  return (
    <div className="w-full h-full md:px-16 ">
      <div className="w-full flex justify-center py-24 px-4">
        <h1 className="font-bold text-[40px] md:text-[64px] lg:text-[96px] leading-[1.2] font-onest text-secondary text-center">
          {title}
        </h1>
      </div>

      <div className={`${className} grid gap-4 md:gap-6 px-4 md:px-0`}>
        {items.map((item, index) => (
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
