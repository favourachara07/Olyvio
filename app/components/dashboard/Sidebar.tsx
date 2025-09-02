"use client";

import { LucideCalendar, LucideHistory, LucideLayoutDashboard, LucideMessageSquare, LucideSettings, LucideUpload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const sections = [
    {
      title: "Main",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: LucideLayoutDashboard },
        { label: "Submit Assignment", href: "/dashboard/submit", icon: LucideUpload },
      ]
    },
    {
      title: "Assignments",
      items: [
        { label: "Assignment Hub", href: "/dashboard/assignment-hub", icon: LucideCalendar },
        { label: "Assignment History", href: "/dashboard/assignment-history", icon: LucideHistory },
      ]
    },
    {
      title: "Support",
      items: [
        { label: "Expert Support", href: "/dashboard/expert-support", icon: LucideMessageSquare },
        { label: "Settings", href: "/dashboard/settings", icon: LucideSettings },
      ]
    }
  ];

  return (
    <div className="border-r border-r-[#D9D9D9] bg-[#33333305] px-2 xl:px-4 2xl:px-6 py-6 w-48 xl:w-56 2xl:w-80 h-screen fixed flex flex-col">
      <div className="h-6 2xl:h-9 px-1 max-w-fit">
        <Image src="/logo.png" alt="" width={100} height={50} className="h-full w-full" />
      </div>

      <nav className="mt-5 flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-1">
            <h3 className="text-[10px] xl:text-[11px] 2xl:text-xs font-medium text-[#33333360] font-montserrat-alternates uppercase tracking-wider px-2 mb-1">
              {section.title}
            </h3>
            {section.items.map((item) => {
              const Icon = item.icon;
              const isSelected = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-4 py-1 xl:py-2 2xl:py-3 text-[12px] xl:text-xs 2xl:text-sm font-montserrat-alternates transition-colors duration-150 
                    ${isSelected ? "bg-[#333333] text-white" : "text-[#33333380] hover:bg-[#33333308]"}`}
                >
                  <Icon className="size-4 2xl:size-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="w-full flex gap-5 flex-col items-center justify-end mt-auto">
        <div className="flex flex-col items-center">
          <div className="size-10 2xl:size-14 rounded-full bg-red-100 mb-1">
            <Image src="/george.jpeg" alt="" width={100} height={50} className="size-full object-cover rounded-full" />
          </div>
          <h1 className="text-black text-xs 2xl:text-sm font-montserrat-alternates">Hey, George</h1>
          <h2 className="text-[#7E7E7E] text-[10px] font-montserrat-alternates">Friday August 26, 2025</h2>
        </div>
      </div>
    </div>
  );
}
