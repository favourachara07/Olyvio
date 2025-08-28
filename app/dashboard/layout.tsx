import Sidebar from "@/app/components/dashboard/Sidebar";
import { LucideBell } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-white">
      <div className="w-full h-full flex">
        <Sidebar />
        <div className="ml-[17%] px-4 py-6 w-full flex flex-col">
          <div className="w-full flex flex-row items-center justify-between pb-8">
            <h1 className="text-[#33333330] text-md">Olyvio / <span className="text-black">Dashboard</span></h1>
            <div className="border border-[#E6E6E6] rounded-md p-2">
              <LucideBell className="size-5 text-[#7E7E7E]" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
