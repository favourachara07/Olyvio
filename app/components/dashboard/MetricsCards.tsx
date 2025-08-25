import Card from "@/app/components/ui/Card";

const metrics = [
  { label: "Earnings (30d)", value: "$1,240", color: "text-emerald-600" },
  { label: "In Queue", value: "4", color: "text-indigo-600" },
  { label: "Completed", value: "28", color: "text-cyan-600" },
  { label: "Rating", value: "4.9★", color: "text-amber-600" },
];

export default function MetricsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <Card key={m.label} className="p-4">
          <div className="text-xs text-slate-600">{m.label}</div>
          <div className={`mt-1 text-xl font-semibold ${m.color}`}>{m.value}</div>
        </Card>
      ))}
    </div>
  );
}
