import QueueTable from "@/app/components/dashboard/QueueTable";
import MetricsCards from "@/app/components/dashboard/MetricsCards";

export default function ExpertQueuePage() {
  return (
    <div className="space-y-6">
      <MetricsCards />
      <QueueTable />
    </div>
  );
}
