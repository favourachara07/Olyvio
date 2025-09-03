'use client';

import dynamic from 'next/dynamic';
import { Button } from "@/app/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card";

// Dynamically import the RevenueChart component with SSR disabled
const RevenueChart = dynamic(
  () => import('./components/RevenueChart').then((mod) => mod.RevenueChart),
  { ssr: false, loading: () => <div className="h-[300px] flex items-center justify-center">Loading chart...</div> }
);
import { 
  LucideArrowUpRight, 
  LucideDollarSign, 
  LucideFileText, 
  LucideShield, 
  LucideTrendingUp, 
  LucideUsers,
  LucideUserCheck,
  LucideClock
} from "lucide-react";
import Link from "next/link";

// Mock data - replace with actual data from your API
const stats = {
  totalUsers: 2841,
  activeUsers: 1284,
  totalExperts: 342,
  activeExperts: 198,
  totalAssignments: 5632,
  pendingAssignments: 42,
  completedAssignments: 4876,
  totalRevenue: 184200,
  monthlyRevenue: 42350,
  weeklyGrowth: 12.5,
  userGrowth: 8.2,
  revenueData: [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
  ],
  recentActivity: [
    { id: 1, user: 'Alex Johnson', action: 'submitted', item: 'Research methods essay', time: '2 min ago' },
    { id: 2, user: 'Maya Chen', action: 'claimed', item: 'Data structures homework', time: '15 min ago' },
    { id: 3, user: 'System', action: 'processed payout', item: 'Expert #214 ($245.50)', time: '1 hour ago' },
    { id: 4, user: 'Sam Wilson', action: 'completed', item: 'Calculus assignment', time: '2 hours ago' },
    { id: 5, user: 'Taylor Swift', action: 'registered as expert', item: 'Expert #423', time: '3 hours ago' },
  ],
  pendingApprovals: [
    { id: 1, type: 'Expert Verification', count: 12 },
    { id: 2, type: 'Assignment Review', count: 8 },
    { id: 3, type: 'Payout Requests', count: 5 },
  ]
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#333333]">Admin Dashboard</h2>
          <p className="text-[#666666] text-sm">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF10]">
            Generate Report
          </Button>
          <Button className="bg-[#0096FF] hover:bg-[#0080E5] text-white">
            + New Admin
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Users" 
          value={stats.totalUsers.toLocaleString()} 
          change={`+${stats.userGrowth}% from last month`}
          icon={LucideUsers}
        />
        <StatCard 
          title="Active Experts" 
          value={stats.activeExperts.toString()} 
          change={`${stats.activeExperts} active now`}
          icon={LucideUserCheck}
        />
        <StatCard 
          title="Monthly Revenue" 
          value={`$${stats.monthlyRevenue.toLocaleString()}`} 
          change={`+${stats.weeklyGrowth}% from last week`}
          icon={LucideDollarSign}
          isCurrency
        />
        <StatCard 
          title="Pending Assignments" 
          value={stats.pendingAssignments.toString()} 
          change={`${stats.completedAssignments} completed this month`}
          icon={LucideFileText}
          warning={stats.pendingAssignments > 0}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Revenue Overview</CardTitle>
              <div className="flex items-center text-sm text-green-500">
                <LucideTrendingUp className="h-4 w-4 mr-1" />
                {stats.weeklyGrowth}% from last week
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <RevenueChart data={stats.revenueData} />
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Pending Approvals</CardTitle>
              <Button variant="link" className="text-[#0096FF] p-0 h-auto text-sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.pendingApprovals.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h4 className="font-medium">{item.type}</h4>
                    <p className="text-sm text-[#666666]">{item.count} pending</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF10]">
                    Review
                  </Button>
                </div>
              ))}
              <div className="pt-2 border-t">
                <Button variant="link" className="w-full text-[#666666] hover:text-[#0096FF]">
                  Show More
                  <LucideArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0096FF10] text-[#0096FF]">
                    <LucideClock className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.item}</span>
                    </p>
                    <p className="text-xs text-[#666666]">{activity.time}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <Button variant="link" className="text-[#666666] hover:text-[#0096FF] p-0 h-auto">
                  View all activity
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">API Service</span>
                </div>
                <span className="text-sm text-[#666666]">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Database</span>
                </div>
                <span className="text-sm text-[#666666]">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Payment Gateway</span>
                </div>
                <span className="text-sm text-[#666666]">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Email Service</span>
                </div>
                <span className="text-sm text-[#666666]">Operational</span>
              </div>
              <div className="pt-2">
                <Button variant="link" className="text-[#666666] hover:text-[#0096FF] p-0 h-auto">
                  View detailed status
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ElementType;
  isCurrency?: boolean;
  warning?: boolean;
}

function StatCard({ title, value, change, icon: Icon, isCurrency = false, warning = false }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#666666]">{title}</p>
            <p className={`text-2xl font-bold mt-1 ${warning ? 'text-amber-500' : 'text-[#333333]'}`}>
              {isCurrency && !value.toString().startsWith('$') ? `$${value}` : value}
            </p>
            <p className="text-xs text-[#666666] mt-1">{change}</p>
          </div>
          <div className={`p-2 rounded-lg ${warning ? 'bg-amber-50 text-amber-500' : 'bg-[#0096FF10] text-[#0096FF]'}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
