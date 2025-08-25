import MetricsCards from "@/app/components/dashboard/MetricsCards";
import QueueTable from "@/app/components/dashboard/QueueTable";
import AvailableTable from "@/app/components/dashboard/AvailableTable";

export default function ExpertOverviewPage() {
  return (
    <div className="space-y-6">
      <MetricsCards />
      <QueueTable />
      <AvailableTable />
    </div>
  );
}
