import MetricsCards from "@/app/components/dashboard/MetricsCards";
import Card from "@/app/components/ui/Card";

export default function AdminOverviewPage() {
  const stats = [
    { label: "Active Users", value: "1,284" },
    { label: "Active Assignments", value: "63" },
    { label: "Completed (30d)", value: "812" },
    { label: "Revenue (30d)", value: "$18,420" },
  ];
  return (
    <div className="space-y-6">
      <MetricsCards />
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">System stats</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            {stats.map((s) => (
              <li key={s.label} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
                <span className="text-slate-600">{s.label}</span>
                <span className="font-semibold">{s.value}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Recent activity</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-600">
            <li>Alex submitted "Research methods essay"</li>
            <li>Maya claimed "Data structures homework"</li>
            <li>Payout processed for Expert #214</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
