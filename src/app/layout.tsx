import { rootMetadata } from "@/config/metadata";
import "./globals.css";
import { PublicLayout } from "@/public/PublicLayout";

export const metadata = rootMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen h-full w-full bg-white dark:bg-[#1c1c2c]">
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
};

export default RootLayout;
