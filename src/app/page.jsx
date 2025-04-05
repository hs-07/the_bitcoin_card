"use client";
import Image from "next/image";
import {
  Section2,
  Section3,
  Section4,
  TickerBanner,
  Section5,
  Section6,
  FAQs,
  Contact,
} from "@/components";
import { Button, Footer } from "@/components/ui";
import { HOW_IT_WORKS, WHO_WE_ARE } from "@/utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-4 h-full pt-16 md:pb-0 md:pt-0 md:h-[calc(100vh-4rem)] justify-between bg-[url('/hero-bg.svg')] bg-cover bg-center px-4 md:px-16">
        <div className="w-fit text-white h-full flex flex-col justify-center ">
          <span className=" font-onest text-[40px] md:text-[56px] lg:text-[96px] leading-[1.2] font-bold max-w-[800px] pb-2">
            {" "}
            Bitcoin-Backed, Built for You.
          </span>
          <p className="font-oxygen text-[20px] md:text-[24px] font-[400] pb-6">
            Secure everyday Credit Card <br />
            Bitcoin—Stack More Bitcoin with Every Dollar Spent.
          </p>
          <div className="hidden md:flex">
            <Button type={"SECONDARY"} text={"Get Early Access"} />
          </div>
        </div>
        <div className="w-full md:w-fit h-full flex flex-col md:flex-row items-center md:items-end">
          <Image
            src={"/hero-1.svg"}
            alt="hero"
            width={50}
            height={50}
            className="w-full h-[80%]"
          />
          <div className="md:hidden flex p-6 bg-[#F1683C] w-full justify-center items-center">
            <Button type={"SECONDARY"} text={"Get Early Access"} />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-16 h-fit">
        <Section2 />
      </div>

      <div className="mt-8">
        <TickerBanner />
      </div>

      <div className="">
        <Section3 />
      </div>
      <div className="px-4 md:px-0">
        <Section4 />
      </div>
      <Section5
        items={HOW_IT_WORKS}
        title={"How it works"}
        className={"grid-cols-1 md:grid-cols-2"}
      />
      <Section6 />
      <Section5
        items={WHO_WE_ARE}
        title={"Who we are"}
        className={"grid-cols-1 md:grid-cols-3"}
      />

      <FAQs />
      <div className="mt-4 md:mt-16">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
