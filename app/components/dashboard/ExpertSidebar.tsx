import Link from "next/link";

const items = [
  { label: "Overview", href: "/dashboard/expert" },
  { label: "Assignment Queue", href: "/dashboard/expert/queue" },
  { label: "Available", href: "/dashboard/expert/available" },
  { label: "Earnings", href: "/dashboard/expert/earnings" },
  { label: "Profile", href: "/profile" },
];

export default function ExpertSidebar() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-sm p-4">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Expert Nav</h3>
      <nav className="mt-3 grid gap-1">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
            {it.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 rounded-lg bg-emerald-50 text-emerald-700 p-3 text-xs">
        Tip: Claim tasks in Available to grow your earnings.
      </div>
    </div>
  );
}
