import { rootMetadata } from "@/config/metadata";
import "./globals.css";
import { PublicLayout } from "@/public/PublicLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = rootMetadata;

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
};

export default RootLayout;
