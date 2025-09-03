import EarningsSummary from "@/app/components/dashboard/EarningsSummary";
import Card from "@/app/components/ui/Card";

const payouts = [
  { date: "Aug 20, 2025", amount: "$220", status: "Paid" },
  { date: "Aug 10, 2025", amount: "$180", status: "Paid" },
  { date: "Aug 1, 2025", amount: "$160", status: "Pending" },
];

export default function ExpertEarningsPage() {
  return (
    <div className="space-y-6">
      <EarningsSummary />

      <Card className="overflow-hidden">
        <div className="px-6 pt-5 pb-4">
          <h3 className="text-lg font-semibold">Payout history</h3>
          <p className="text-sm text-slate-600">Recent payouts and their statuses.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="text-left font-medium px-6 py-3">Date</th>
                <th className="text-left font-medium px-6 py-3">Amount</th>
                <th className="text-left font-medium px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p, i) => (
                <tr key={i} className="border-t border-slate-100">
                  <td className="px-6 py-3">{p.date}</td>
                  <td className="px-6 py-3">{p.amount}</td>
                  <td className="px-6 py-3">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
