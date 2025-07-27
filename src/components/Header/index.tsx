"use client";

import { Bell, Clock, MessageSquareMore, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full h-auto md:h-[88px] py-5 px-4 md:px-10 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1C1C1E]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="hidden md:flex items-center gap-2">
          <Image
            src="/profile.png"
            alt="avatar"
            className="rounded-full border"
            width={40}
            height={40}
          />
          <div>
            <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
              مهدی دارابی
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              09123456789
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto">
          <div className="w-auto h-10 rounded-full bg-[#F0F4FF] dark:bg-[#2A2A3C] flex items-center gap-2 px-4 text-sm text-gray-700 dark:text-gray-300">
            <Clock size={16} className="text-blue-500 dark:text-blue-400" />
            <span className="text-[12px] leading-[12px] font-normal text-center whitespace-nowrap">
              ۱۱:۴۲ ، شنبه ۲۵ اسفند
            </span>
          </div>

          <div className="hidden md:flex w-[182px] h-10 border rounded-full items-center gap-2 px-3 bg-white dark:bg-[#2A2A3C] cursor-pointer hover:shadow-sm transition border-gray-300 dark:border-gray-600">
            <MessageSquareMore className="text-gray-700 dark:text-gray-300" />
            <span className="text-[12px] leading-[12px] font-normal font-yekan text-gray-700 dark:text-gray-300 text-center">
              آخرین لاگین : ۴ ساعت قبل
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <MessageSquareMore className="text-gray-700 dark:text-gray-300" />
            <Bell className="text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
