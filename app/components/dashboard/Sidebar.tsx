import Link from "next/link";

const items = [
  { label: "Assignments", href: "/dashboard/student" },
  { label: "Projects", href: "/dashboard/projects" },
  { label: "Research", href: "/dashboard/research" },
  { label: "Document Review", href: "/dashboard/review" },
  { label: "Profile", href: "/profile" },
];

export default function Sidebar() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-sm p-4">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Navigation</h3>
      <nav className="mt-3 grid gap-1">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
            {it.label}
          </Link>
        ))}
      </nav>
      <div className="mt-6 rounded-lg bg-indigo-50 text-indigo-700 p-3 text-xs">
        Tip: Use quick actions to start faster.
      </div>
    </div>
  );
}
