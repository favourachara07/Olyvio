import AvailableTable from "@/app/components/dashboard/AvailableTable";
import MetricsCards from "@/app/components/dashboard/MetricsCards";

export default function ExpertAvailablePage() {
  return (
    <div className="space-y-6">
      <MetricsCards />
      <AvailableTable />
    </div>
  );
}
