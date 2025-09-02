import WelcomeBanner from "@/app/components/dashboard/WelcomeBanner";
import QuickActions from "@/app/components/dashboard/QuickActions";
import AssignmentForm from "@/app/components/dashboard/AssignmentForm";
import OrderHistoryTable from "@/app/components/dashboard/OrderHistoryTable";
import RecentTab from "@/app/components/dashboard/AssignmentForm";

export default function StudentDashboard() {
  return (
    <div className="space-y-6 flex flex-col h-full bg-red-200">
      <QuickActions />
      <RecentTab />
      <div className="h-3/8">
        <OrderHistoryTable />
      </div>
    </div>
  );
}
