import Card from "@/app/components/ui/Card";

const rows = [
  { title: "Research methods essay", assigner: "SwiftAssigner #214", status: "In Progress", due: "2025-09-02", link: "#" },
  { title: "Algorithms project", assigner: "SwiftAssigner #133", status: "Completed", due: "2025-08-15", link: "#" },
  { title: "Biology lab report", assigner: "SwiftAssigner #077", status: "Pending", due: "2025-08-28", link: "#" },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "Completed": "bg-emerald-50 text-emerald-700",
    "In Progress": "bg-amber-50 text-amber-700",
    "Pending": "bg-slate-100 text-slate-700",
  };
  return <span className={`px-2 py-1 rounded-md text-xs font-medium ${map[status] ?? "bg-slate-100 text-slate-700"}`}>{status}</span>;
}

export default function OrderHistoryTable() {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Order history</h3>
        <p className="text-sm text-slate-600">Recent assignments and their statuses.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Assignment</th>
              <th className="text-left font-medium px-6 py-3">SwiftAssigner</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Due date</th>
              <th className="text-left font-medium px-6 py-3">Download</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-6 py-3">{r.title}</td>
                <td className="px-6 py-3">{r.assigner}</td>
                <td className="px-6 py-3"><StatusBadge status={r.status} /></td>
                <td className="px-6 py-3">{r.due}</td>
                <td className="px-6 py-3"><a className="text-indigo-600 hover:text-indigo-500" href={r.link}>Download</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
