import Card from "@/app/components/ui/Card";

export default function EarningsSummary() {
  const stats = [
    { label: "This Month", value: "$820" },
    { label: "Last Month", value: "$1,120" },
    { label: "Total", value: "$7,540" },
    { label: "Pending Payout", value: "$260" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <Card key={s.label} className="p-4">
          <div className="text-xs text-slate-600">{s.label}</div>
          <div className="mt-1 text-xl font-semibold">{s.value}</div>
        </Card>
      ))}
    </div>
  );
}
