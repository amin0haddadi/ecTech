import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی"
};
const MainPage = () => {
  return (
    <h1
      className="flex items-center justify-center min-h-screen text-2xl"
      dir="ltr"
    >
      wellcome to Ech-Tech !
    </h1>
  );
};

export default MainPage;
