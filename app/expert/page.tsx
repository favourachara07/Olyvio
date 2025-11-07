import OrderHistoryTable from '@/app/components/dashboard/OrderHistoryTable';
import QuickActions from '@/app/components/dashboard/QuickActions';
import RecentTab from '@/app/components/dashboard/AssignmentForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { BookOpen, Clock, MessageSquare, DollarSign, Star, type LucideIcon } from 'lucide-react';

// Add CardDescription interface since it's not exported from the Card component
interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const CardDescription = ({ className, children }: CardDescriptionProps) => (
  <p className={`text-sm text-gray-500 ${className || ''}`}>{children}</p>
);

// Reusing the same components as the main dashboard for consistency
export default function ExpertDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Expert Dashboard</h2>
          <p className="text-gray-500 text-sm">Manage your assignments and track your progress</p>
        </div>
        <Button className="bg-gray-900 hover:bg-gray-800 text-white">
          <BookOpen className="mr-2 h-4 w-4" />
          View Guidelines
        </Button>
      </div>
      
      {/* Quick Actions - Reusing the same component as main dashboard */}
      <QuickActions />
      
      {/* Recent Assignments - Using the same AssignmentForm component as main dashboard */}
      <Card className="border border-gray-200">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-lg font-semibold">Your Assignments</CardTitle>
          <CardDescription>Track and manage your current assignments</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <RecentTab />
        </CardContent>
      </Card>
      
      {/* Order History - Reusing the same component as main dashboard */}
      <OrderHistoryTable />
    </div>
  );
}

// Types
type QuickAction = {
  title: string;
  icon: LucideIcon;
  href: string;
  description: string;
};

type UpcomingSession = {
  id: number;
  title: string;
  time: string;
  student: string;
  subject: string;
  duration: string;
};

type Stats = {
  completedSessions: number;
  averageRating: number;
  totalEarnings: number;
  pendingTasks: number;
  profileCompletion: number;
  responseRate: number;
  upcomingSessions: Array<{
    id: number;
    title: string;
    student: string;
    subject: string;
    time: string;
    duration: string;
  }>;
  quickActions: Array<{
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }>;
};

// Mock data - replace with actual data from your API
const stats: Stats = {
  completedSessions: 24,
  averageRating: 4.7,
  totalEarnings: 1850,
  pendingTasks: 3,
  profileCompletion: 92,
  responseRate: 95,
  upcomingSessions: [
    { 
      id: 1, 
      title: 'Advanced Calculus', 
      student: 'John D.', 
      subject: 'Mathematics',
      time: 'Tomorrow, 2:00 PM',
      duration: '1 hour'
    },
    { 
      id: 2, 
      title: 'Quantum Physics', 
      student: 'Sarah M.', 
      subject: 'Physics',
      time: 'Nov 10, 10:00 AM',
      duration: '45 mins'
    },
  ],
  quickActions: [
    {
      title: 'Set Availability',
      description: 'Update your available hours',
      href: '/expert/availability',
      icon: Clock
    },
    {
      title: 'View Messages',
      description: 'Check your inbox',
      href: '/expert/messages',
      icon: MessageSquare
    },
    {
      title: 'Earnings',
      description: 'View your payment history',
      href: '/expert/earnings',
      icon: DollarSign
    }
  ]
};

// Reusable Stat Card Component
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: { value: string; positive: boolean };
  isRating?: boolean;
  warning?: boolean;
  iconBg?: string;
  iconColor?: string;
}

function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  isRating = false, 
  warning = false,
  iconBg = 'bg-gray-100',
  iconColor = 'text-gray-600'
}: StatCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className={`mt-1 text-2xl font-semibold ${warning ? 'text-red-600' : 'text-gray-900'}`}>
              {isRating ? (
                <span className="flex items-center">
                  {value}
                  <Star className="ml-1 h-4 w-4 fill-amber-400 text-amber-400" />
                </span>
              ) : (
                value
              )}
            </p>
            {trend && (
              <p className={`mt-1 flex items-center text-xs ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
                {trend.positive ? (
                  <svg className="mr-1 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 01-1.707-.707L10 5.586 8.707 6.293a1 1 0 11-1.414-1.414l2-2a1 1 0 011.414 0l2 2A1 1 0 0112 7z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12 7v8a1 1 0 11-2 0V7a1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="mr-1 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 13a1 1 0 100-2H8a1 1 0 100 2h4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12 13a1 1 0 001-1V7a1 1 0 00-1.707-.707L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2A1 1 0 0012 7v5a1 1 0 001 1z" clipRule="evenodd" />
                  </svg>
                )}
                {trend.value}
              </p>
            )}
          </div>
          <div className={`p-2.5 rounded-lg ${iconBg}`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
