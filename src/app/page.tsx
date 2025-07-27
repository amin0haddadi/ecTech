import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "صفحه اصلی"
};
const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen gap-4 items-center justify-center  text-2xl dark:text-white">
      <h1 dir="ltr">wellcome to Ech-Tech !</h1>
      <Link href={"/echTech"} className="text-red-600">
        صفحه سفارش
      </Link>
    </div>
  );
};

export default MainPage;
