import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/SideBar";
import { ThemeProvider } from "next-themes";

import { Toaster } from "sonner";

type PublicLayoutProps = React.PropsWithChildren;

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="flex flex-col md:flex-row min-h-screen">
          <MobileHeader />
          <Sidebar />

          <div className="flex-1 flex flex-col w-full">
            <Header />
            <main className="flex-1 px-10 lg:px-24 py-4">
              {children}
              <Toaster position="top-right" richColors />
            </main>
            {/* footer */}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export { PublicLayout };
