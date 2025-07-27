"use client";
import { Menu } from "lucide-react";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <div className="md:hidden w-full flex items-center justify-between bg-white dark:bg-[#1C1C2C] px-4 py-3 border-b shadow-sm">
      <div className="flex items-center gap-2">
        <Image src="/ecTech.png" alt="logo" width={30} height={30} priority />
        <h4 className="font-semibold text-sm text-gray-800 dark:text-white">
          شرکت اک تک تکنولوژی
        </h4>
      </div>
      <Menu
        size={24}
        className="text-gray-800 dark:text-gray-300 cursor-pointer"
        onClick={() => console.log("Open sidebar or menu")}
      />
    </div>
  );
};

export default MobileHeader;
