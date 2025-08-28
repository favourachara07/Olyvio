"use client";
import { useState } from "react";
import Link from "next/link";
import { LucideFile, LucideFolder, LucideMicroscope, LucideMoreVertical } from "lucide-react";

export default function AssignmentForm() {
  const [services, setServices] = useState<string[]>([]);
  const toggle = (k: string) => setServices((s) => (s.includes(k) ? s.filter((i) => i !== k) : [...s, k]));

  const actions = [
    { label: "CSC 314 Ass. 2", size: "220 KB", type: "docx", href: "/dashboard/student#new", icon: LucideFolder },
    { label: "CSC 418 Lab Assignment", size: "1.5 MB", type: "pdf", href: "/dashboard/projects#new", icon: LucideMicroscope },
    { label: "CSC 416  Assignment", size: "1.2 MB", type: "pdf", href: "/dashboard/research#new", icon: LucideFile },
  ];

  return (
    <div className="">
      <h1 className="text-black font-semibold mb-1 text-sm">Recent</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((a, index) => {
          const Icon = a.icon;
          return (
            <Link
              key={index}
              href={a.href}
              className="rounded-xl border border-[#D9D9D9] bg-white flex flex-row items-center justify-between gap-4 p-4 text-black"
            >
              <div className="text-sm font-semibold flex flex-row gap-2 items-center">
                <div className="rounded-md p-2 bg-[#D9D9D940]">
                  <Icon className="text-black size-4" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold">{a.label}</h1>
                  <h1 className="text-[10px] font-normal">{a.size} <span>{a.type}</span></h1>
                </div>
              </div>
              <LucideMoreVertical className="text-black size-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
