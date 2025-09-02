import { LucideFile, LucideFileEdit, LucideFolder, LucideMicroscope, LucidePlus } from "lucide-react";
import Link from "next/link";

const actions = [
  { label: "New Assignment", href: "/dashboard/student#new", color: "bg-indigo-50 text-indigo-700", icon: LucideFile },
  { label: "New Research", href: "/dashboard/projects#new", color: "bg-cyan-50 text-cyan-700", icon: LucideMicroscope },
  { label: "New Project", href: "/dashboard/research#new", color: "bg-emerald-50 text-emerald-700", icon: LucideFolder },
  { label: "Document Review", href: "/dashboard/review#new", color: "bg-amber-50 text-amber-700", icon: LucideFileEdit },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((a) => {
        const Icon = a.icon;
        return (
          <Link
            key={a.label}
            href={a.href}
            className="rounded-lg lg:rounded-md xl:rounded-lg 2xl:rounded-xl border border-[#D9D9D9] bg-white flex flex-col gap-4 lg:gap-3 xl:gap-4 p-4 lg:p-3 xl:p-4 text-black"
          >
            <div className="text-sm font-semibold flex flex-row justify-between items-center">
              <div className="rounded-md p-1 2xl:p-2 bg-[#D9D9D940]">
                <Icon className="text-black size-3 lg:size-2 xl:size-3 2xl:size-4" />
              </div>
              <LucidePlus className="text-black size-3 lg:size-2 xl:size-3 2xl:size-4" />
            </div>
            <div className="text-[10px] xl:text-xs 2xl:text-sm font-semibold pb-2 font-montserrat-alternates">{a.label}</div>
          </Link>
        );
      })}
    </div>
  );
}
