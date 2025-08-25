import Card from "@/app/components/ui/Card";

const items = [
  { title: "Literature review", student: "Alex", due: "Aug 30", status: "In Progress" },
  { title: "Data structures homework", student: "Maya", due: "Aug 29", status: "Pending" },
  { title: "Chem lab write-up", student: "Leo", due: "Sep 2", status: "Pending" },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700">{children}</span>;
}

export default function QueueTable() {
  return (
    <Card className="overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Assignment queue</h3>
        <p className="text-sm text-slate-600">Your active and pending tasks.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Title</th>
              <th className="text-left font-medium px-6 py-3">Student</th>
              <th className="text-left font-medium px-6 py-3">Due</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-6 py-3">{r.title}</td>
                <td className="px-6 py-3">{r.student}</td>
                <td className="px-6 py-3">{r.due}</td>
                <td className="px-6 py-3"><Badge>{r.status}</Badge></td>
                <td className="px-6 py-3"><button className="text-indigo-600 hover:text-indigo-500">Open</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
