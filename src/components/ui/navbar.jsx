"use client";

import Image from "next/image";
import Button from "./button";

const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0 sticky z-[100] bg-white z-[9999]">
      {/* Desktop Navbar */}
      <nav className="flex w-full px-4 md:px-16 py-4 items-center justify-center md:justify-between">
        <div className="h-full flex items-center gap-4">
          <Image
            src="/logo.svg"
            alt="ride"
            width={60}
            height={30}
            className="w-28 md:w-36"
          />
        </div>
        <div className="hidden md:flex w-fit">
          <Button type={"PRIMARY"} text={"Get Early Access"} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
