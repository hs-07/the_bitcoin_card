"use client";
import Image from "next/image";
import { Section2, TickerBanner } from "@/components";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-4 h-full pt-16 pb-4 md:pb-0 md:pt-0 md:h-[calc(100vh-4rem)] justify-between bg-[url('/hero-bg.svg')] bg-cover bg-center px-4 md:px-16">
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
        <div className="w-full md:w-fit h-full flex flex-col md:flex-row items-center md:items-end gap-6">
          <Image
            src={"/hero-1.svg"}
            alt="hero"
            width={50}
            height={50}
            className="w-full h-[80%]"
          />
          <div className="md:hidden flex">
            <Button type={"SECONDARY"} text={"Get Early Access"} />
          </div>
        </div>
      </div>
      <div className="p-4 md:p-16 h-fit">
        <Section2 />
      </div>

      <div className="my-8">
        <TickerBanner />
      </div>
    </div>
  );
}
