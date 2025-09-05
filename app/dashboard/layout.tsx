import Sidebar from "@/app/components/dashboard/Sidebar";
import MobileBottomNav from "../components/dashboard/MobileNavBar";
import Image from "next/image";
import NotificationLink from "../components/NotificationLink";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-white">
      <div className="w-full h-full flex">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:ml-[18.6%] xl:ml-[17.6%] 2xl:w-[16.6%] py-4 2xl:pt-6 flex flex-col pb-20 md:pb-0 mb-40 lg:mb-0">
          <div className="w-full flex flex-row items-center justify-between px-4 pb-4 xl:pb-8">
            <h1 className="hidden lg:block text-[#33333390] text-sm 2xl:text-md">
              Olyvio /
              <span className="text-black"> Dashboard</span>
            </h1>
            <div className="block lg:hidden">
              <div className="h-7 max-w-fit">
                <Image src="/logo.png" alt="" width={100} height={50} className="h-full w-full" />
              </div>
            </div>
            <NotificationLink />
          </div>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation - only shows on mobile */}
      <MobileBottomNav />
    </div>
  );
}