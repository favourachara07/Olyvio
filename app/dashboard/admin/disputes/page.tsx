import Card from "@/app/components/ui/Card";

const disputes = [
  { id: "D-3102", order: "#1012", student: "Ivy", expert: "#077", reason: "Late delivery", status: "Open" },
  { id: "D-3097", order: "#1008", student: "Alex", expert: "#214", reason: "Quality concerns", status: "Under Review" },
];

export default function AdminDisputesPage() {
  return (
    <Card className="overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Disputes</h3>
        <p className="text-sm text-slate-600">Investigate and resolve disputes.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Dispute ID</th>
              <th className="text-left font-medium px-6 py-3">Order</th>
              <th className="text-left font-medium px-6 py-3">Student</th>
              <th className="text-left font-medium px-6 py-3">Expert</th>
              <th className="text-left font-medium px-6 py-3">Reason</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((d, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-6 py-3">{d.id}</td>
                <td className="px-6 py-3">{d.order}</td>
                <td className="px-6 py-3">{d.student}</td>
                <td className="px-6 py-3">{d.expert}</td>
                <td className="px-6 py-3">{d.reason}</td>
                <td className="px-6 py-3">{d.status}</td>
                <td className="px-6 py-3"><button className="text-indigo-600 hover:text-indigo-500">Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
