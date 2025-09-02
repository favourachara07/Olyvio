import OrderHistoryTable from '../components/dashboard/OrderHistoryTable';
import QuickActions from '../components/dashboard/QuickActions';
import RecentTab from '../components/dashboard/AssignmentForm';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <QuickActions />
      <RecentTab />
      <OrderHistoryTable />
    </div>
  )
}
