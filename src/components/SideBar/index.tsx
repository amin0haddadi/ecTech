import { ChevronDown, X } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className=" w-64 h-[100vh] border border-[#E9EAEB] bg-white py-10 px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/ecTech.png" alt="logo" width={30} height={30} priority />
          <h4>شرکت اک تک تکنولوژی</h4>
        </div>
        <X size={20} />
      </div>
      <div className="w-[227px] h-12 px-3 py-2 rounded-md flex items-center justify-between bg-white hover:bg-gray-100 cursor-pointer">
        <h4 className="text-sm text-gray-800">پیگیری سفارشات</h4>
        <ChevronDown size={15} />
      </div>
    </aside>
  );
};

export default Sidebar;
