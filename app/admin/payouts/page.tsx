import Card from "@/app/components/ui/Card";

const payouts = [
  { id: "P-2201", expert: "#214", amount: "$220", date: "Aug 20, 2025", status: "Paid" },
  { id: "P-2196", expert: "#133", amount: "$180", date: "Aug 10, 2025", status: "Paid" },
  { id: "P-2190", expert: "#077", amount: "$160", date: "Aug 1, 2025", status: "Pending" },
];

export default function AdminPayoutsPage() {
  return (
    <Card className="overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        <h3 className="text-lg font-semibold">Payouts</h3>
        <p className="text-sm text-slate-600">Manage expert payouts.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-6 py-3">Payout ID</th>
              <th className="text-left font-medium px-6 py-3">Expert</th>
              <th className="text-left font-medium px-6 py-3">Amount</th>
              <th className="text-left font-medium px-6 py-3">Date</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((p, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="px-6 py-3">{p.id}</td>
                <td className="px-6 py-3">{p.expert}</td>
                <td className="px-6 py-3">{p.amount}</td>
                <td className="px-6 py-3">{p.date}</td>
                <td className="px-6 py-3">{p.status}</td>
                <td className="px-6 py-3"><button className="text-indigo-600 hover:text-indigo-500">Process</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
