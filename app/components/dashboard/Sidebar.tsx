import { LucideCalendar, LucideHistory, LucideLayoutDashboard, LucideMessageSquare, LucideSettings, LucideUpload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const items = [
    { label: "Dashboard", href: "/dashboard", icon: LucideLayoutDashboard },
    { label: "Submit Assignment", href: "/dashboard/submit", icon: LucideUpload },
    { label: "Assignment Hub", href: "/dashboard/assignment-hub", icon: LucideCalendar },
    { label: "Expert Support", href: "/dashboard/expert-support", icon: LucideMessageSquare },
    { label: "Assignment History", href: "/dashboard/assignment-history", icon: LucideHistory },
    { label: "Settings", href: "/dashboard/settings", icon: LucideSettings },
  ];

  return (
    <div className="border-r border-r-[#D9D9D9] bg-[#33333305] px-8 py-6 w-80 h-screen fixed">
      <div className="h-9 px-1 max-w-fit">
        <Image src="/logo.png" alt="" width={100} height={50} className="h-full w-full" />
      </div>
      <nav className="mt-5 flex flex-col gap-1 h-4/6">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              className="flex items-center gap-2 rounded-lg px-2 py-3 text-[16px] rounded-lg text-[#33333380] hover:bg-[#33333308]"
            >
              <Icon className="size-5" />
              {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="w-full flex flex-1 gap-5 flex-col items-center justify-end pt-20">
        <div className="flex flex-col items-center">
          <div className="size-14 rounded-full bg-red-100 mb-1">
            <Image src="/george.jpeg" alt="" width={100} height={50} className="size-full object-cover rounded-full" />
          </div>
          <h1 className="text-black text-[14px]">Hey, George</h1>
          <h2 className="text-[#7E7E7E] text-[10px]">Friday August 26, 2025</h2>
        </div>
      </div>
    </div>
  );
}
