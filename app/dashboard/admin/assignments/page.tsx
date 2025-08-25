import Card from "@/app/components/ui/Card";

const rows = [
  { id: "#1021", title: "AI ethics essay", student: "Alex", expert: "#214", status: "In Progress" },
  { id: "#1018", title: "Microeconomics set", student: "Noah", expert: "#133", status: "Pending" },
  { id: "#1012", title: "OS report", student: "Ivy", expert: "#077", status: "Completed" },
];

export default function AdminAssignmentsPage() {
  return (
    <Card className="overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Assignments</h3>
        <p className="text-sm text-slate-600">Manage all assignments across the platform.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">ID</th>
              <th className="text-left font-medium px-6 py-3">Title</th>
              <th className="text-left font-medium px-6 py-3">Student</th>
              <th className="text-left font-medium px-6 py-3">Expert</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-6 py-3">{r.id}</td>
                <td className="px-6 py-3">{r.title}</td>
                <td className="px-6 py-3">{r.student}</td>
                <td className="px-6 py-3">{r.expert}</td>
                <td className="px-6 py-3">{r.status}</td>
                <td className="px-6 py-3"><button className="text-indigo-600 hover:text-indigo-500">Open</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
