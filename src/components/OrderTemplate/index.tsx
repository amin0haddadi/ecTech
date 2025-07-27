"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import OrdersTable from "@/components/ordersTable";
import { MessageSquare } from "lucide-react";
import { columns, columns2, columns3, data, data2, data3 } from "@/lib/mock";

const OrderTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mb-10 m-5">
      <OrdersTable columns={columns} data={data} />
      <OrdersTable columns={columns2} data={data2} />
      <OrdersTable columns={columns3} data={data3} />

      <div className="pt-4">
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-[#003399] text-white rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-[#002277]"
        >
          <MessageSquare className="w-5 h-5" />
          ثبت بازخورد
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div
            className={`rounded-xl p-4 w-full max-w-[715px] max-h-[90vh] overflow-y-auto mx-4 ${
              theme === "dark" ? "bg-[#2A2A3C]" : "bg-white"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? " text-white" : ""
              }`}
            >
              ثبت بازخورد
            </h3>
            <p className={`mt-2 ${theme === "dark" ? " text-white" : ""}`}>
              نظر شما
            </p>
            <textarea
              className={`w-full h-32 p-3 border rounded resize-none text-sm ${
                theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-50"
              }`}
              placeholder="اینجا وارد کنید..."
            />
            <div className="w-full mt-5 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className={`w-full px-4 py-2 rounded-[8px] border text-sm ${
                  theme === "dark" ? "border-gray-600 text-white" : ""
                }`}
              >
                انصراف
              </button>
              <button className="w-full px-4 py-2 bg-[#1E3A8A] text-white rounded-[8px] text-sm hover:bg-blue-600">
                ثبت بازخورد
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTemplate;
