import { redirect } from 'next/navigation';
import AssignmentForm from '../components/dashboard/AssignmentForm';
import OrderHistoryTable from '../components/dashboard/OrderHistoryTable';
import QuickActions from '../components/dashboard/QuickActions';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <QuickActions />
      <AssignmentForm />
      <OrderHistoryTable />
    </div>
  )
}
