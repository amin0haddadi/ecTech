import { ChevronDown, X } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 h-fill border border-[#E9EAEB] bg-white dark:bg-[#1C1C1E] dark:border-gray-700 py-10 px-5 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Image src="/ecTech.png" alt="logo" width={30} height={30} priority />
          <h4 className="font-semibold">شرکت اک تک تکنولوژی</h4>
        </div>
        <X
          size={20}
          className="text-gray-800 dark:text-gray-300 cursor-pointer"
        />
      </div>
      <div className="w-[227px] h-12 px-3 py-2 rounded-md flex items-center justify-between bg-white hover:bg-gray-100 cursor-pointer dark:bg-[#2A2A3C] dark:hover:bg-[#3A3A4A]">
        <h4 className="text-sm text-gray-800 dark:text-gray-300">
          پیگیری سفارشات
        </h4>
        <ChevronDown size={15} className="text-gray-800 dark:text-gray-300" />
      </div>
    </aside>
  );
};

export default Sidebar;
