"use client";
import {
  Bell,
  CircleUserRound,
  Clock,
  MessageSquareMore,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full h-[88px] py-5 px-10 flex items-center justify-between border-r-[0.7px] border-r-[#00000014] bg-white">
      <div className="w-full h-12 flex items-center justify-between gap-4">
        <div className=" h-12 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/avatar.png"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
              width={10}
              height={10}
            />
            <div>
              <div className="font-semibold text-sm">مهدی دارابی</div>
              <div className="text-xs text-gray-500">09123456789</div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" h-10 flex items-center gap-2 rounded px-3">
          <div className="flex items-center gap-3">
            <div className="w-[163px] h-10 rounded-full bg-[#F0F4FF] flex items-center gap-2 px-4 text-sm text-gray-700">
              <Clock size={16} className="text-blue-500" />
              <span className="text-[12px] text-[#1E3A8A] leading-[12px] font-normal text-center text-gray-700">
                ۱۱:۴۲ ، شنبه ۲۵ اسفند
              </span>{" "}
            </div>
            <div className="w-[182px] h-10 border rounded-full flex items-center gap-2 px-3 bg-white cursor-pointer hover:shadow-sm transition">
              <CircleUserRound />{" "}
              <span className="text-[12px] leading-[12px] font-normal font-yekan text-gray-700 text-center">
                آخرین لاگین : ۴ ساعت قبل
              </span>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <MessageSquareMore />
            <Bell />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
