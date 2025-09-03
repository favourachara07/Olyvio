import { LucideBell } from "lucide-react";
import Image from "next/image";
import MobileBottomNav from "@/app/components/dashboard/MobileNavBar";
import AdminSidebar from "@/app/components/dashboard/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-white">
      <div className="w-full h-full flex">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden lg:block">
          <AdminSidebar />
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:ml-[18%] xl:md:ml-[17%] px-4 py-4 2xl:py-6 flex flex-col pb-20 md:pb-4 mb-40">
          <div className="w-full flex flex-row items-center justify-between pb-4 xl:pb-8">
            <h1 className="hidden lg:block text-[#33333390] text-sm 2xl:text-md font-montserrat-alternates">
              Olyvio
              <span className="text-black"> / Admin Dashboard</span>
            </h1>
            <div className="block lg:hidden">
              <div className="h-7 max-w-fit">
                <Image src="/logo.png" alt="" width={100} height={50} className="h-full w-full" />
              </div>
            </div>
            <div className="border border-[#E6E6E6] rounded-md p-2">
              <LucideBell className="size-4 2xl:size-5 text-[#7E7E7E]" />
            </div>
          </div>
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation - only shows on mobile */}
      <MobileBottomNav />
    </div>
  );
}
