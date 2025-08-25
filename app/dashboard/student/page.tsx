import WelcomeBanner from "@/app/components/dashboard/WelcomeBanner";
import QuickActions from "@/app/components/dashboard/QuickActions";
import AssignmentForm from "@/app/components/dashboard/AssignmentForm";
import OrderHistoryTable from "@/app/components/dashboard/OrderHistoryTable";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <WelcomeBanner name="Alex" />
      <QuickActions />
      <AssignmentForm />
      <OrderHistoryTable />
    </div>
  );
}
