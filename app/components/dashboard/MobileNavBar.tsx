"use client";
import { LucideCalendar, LucideHistory, LucideLayoutDashboard, LucideMessageSquare, LucideSettings, LucideUpload } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
    const pathname = usePathname();

    const items = [
        { label: "Dashboard", href: "/dashboard", icon: LucideLayoutDashboard },
        { label: "Submit", href: "/dashboard/submit", icon: LucideUpload },
        { label: "Hub", href: "/dashboard/assignment-hub", icon: LucideCalendar },
        { label: "Support", href: "/dashboard/expert-support", icon: LucideMessageSquare },
        // { label: "History", href: "/dashboard/assignment-history", icon: LucideHistory },
        { label: "Settings", href: "/dashboard/settings", icon: LucideSettings },
    ];

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-[#F2F2F2] rounded-xl px-2 py-2 z-50 lg:hidden">
            <nav className="flex justify-between items-center">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg min-w-0 flex-1 ${isActive
                                    ? "text-black bg-[#33333308]"
                                    : "text-[#33333380] hover:bg-[#33333305]"
                                }`}
                        >
                            <Icon className="size-5 flex-shrink-0" />
                            <span className="text-[10px] truncate w-full text-center leading-tight">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}