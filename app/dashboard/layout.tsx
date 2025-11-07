import Sidebar from "@/app/components/dashboard/Sidebar";
import MobileBottomNav from "../components/dashboard/MobileNavBar";
import Image from "next/image";
import NotificationLink from "../components/NotificationLink";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex h-full w-full">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="fixed left-0 top-0 z-10 hidden h-screen w-[18.6%] xl:w-[17.6%] 2xl:w-[16.6%] lg:block">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:ml-[18.6%] xl:ml-[17.6%] 2xl:ml-[16.6%] min-h-screen flex flex-col">
          {/* Top Navigation Bar */}
          <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3 shadow-sm lg:px-6">
            <div className="mx-auto flex w-full max-w-[2000px] items-center justify-between">
              <h1 className="hidden text-sm font-medium text-gray-500 lg:block 2xl:text-base">
                Olyvio <span className="text-gray-900">/ Dashboard</span>
              </h1>
              <div className="lg:hidden">
                <div className="h-7 w-24">
                  <Image 
                    src="/logo.png" 
                    alt="Olyvio Logo" 
                    width={96} 
                    height={28} 
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <NotificationLink />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 bg-white p-4 md:p-6">
            <div className="mx-auto w-full max-w-[2000px]">
              {children}
            </div>
          </main>

          {/* Mobile Bottom Navigation */}
          <div className="lg:hidden">
            <MobileBottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}