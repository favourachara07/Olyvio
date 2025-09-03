"use client";

import { LucideCalendar, LucideDollarSign, LucideHome, LucideMessageSquare, LucideSettings, LucideTrendingUp, LucideUser, LucideUsers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExpertSidebar() {
  const pathname = usePathname();

  const sections = [
    {
      title: "Main",
      items: [
        { label: "Dashboard", href: "/dashboard/expert", icon: LucideHome },
        { label: "My Calendar", href: "/dashboard/expert/calendar", icon: LucideCalendar },
      ]
    },
    {
      title: "Assignments",
      items: [
        { label: "Assignment Queue", href: "/dashboard/expert/queue", icon: LucideUsers },
        { label: "Available Tasks", href: "/dashboard/expert/available", icon: LucideTrendingUp },
      ]
    },
    {
      title: "Account",
      items: [
        { label: "Earnings", href: "/dashboard/expert/earnings", icon: LucideDollarSign },
        { label: "Messages", href: "/dashboard/expert/messages", icon: LucideMessageSquare },
        { label: "Profile", href: "/dashboard/expert/profile", icon: LucideUser },
        { label: "Settings", href: "/dashboard/expert/settings", icon: LucideSettings },
      ]
    }
  ];

  return (
    <div className="border-r border-r-[#D9D9D9] bg-[#33333305] px-3 xl:px-4 2xl:px-6 py-6 w-48 xl:w-56 2xl:w-80 h-screen fixed flex flex-col">
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
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isSelected 
                      ? 'bg-[#0096FF] text-white' 
                      : 'text-[#333333] hover:bg-[#0096FF10]'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-[#D9D9D9]">
        <div className="rounded-lg bg-[#0096FF10] p-3 text-xs text-[#33333380]">
          <p className="font-medium">Pro Tip</p>
          <p className="mt-1">Claim tasks in Available to grow your earnings and ratings.</p>
        </div>
      </div>
    </div>
  );
}
