import Link from "next/link";

const items = [
  { label: "Overview", href: "/dashboard/admin" },
  { label: "Users", href: "/dashboard/admin/users" },
  { label: "Assignments", href: "/dashboard/admin/assignments" },
  { label: "Payouts", href: "/dashboard/admin/payouts" },
  { label: "Disputes", href: "/dashboard/admin/disputes" },
];

export default function AdminSidebar() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-sm p-4">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Admin</h3>
      <nav className="mt-3 grid gap-1">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
            {it.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
