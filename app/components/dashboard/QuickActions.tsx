import Link from "next/link";

const actions = [
  { label: "New Assignment", href: "/dashboard/student#new", color: "bg-indigo-50 text-indigo-700" },
  { label: "New Project", href: "/dashboard/projects#new", color: "bg-cyan-50 text-cyan-700" },
  { label: "New Research", href: "/dashboard/research#new", color: "bg-emerald-50 text-emerald-700" },
  { label: "Document Review", href: "/dashboard/review#new", color: "bg-amber-50 text-amber-700" },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((a) => (
        <Link key={a.label} href={a.href} className={`rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:shadow transition ${a.color}`}>
          <div className="text-sm font-semibold">{a.label}</div>
        </Link>
      ))}
    </div>
  );
}
