import { Button } from "@/app/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Progress } from "@/app/components/ui/Progress";
import { Calendar, Clock, DollarSign, Star, TrendingUp, Users, LucideIcon } from "lucide-react";
import Link from "next/link";

// Types
type QuickAction = {
  title: string;
  icon: LucideIcon;
  href: string;
};

type UpcomingSession = {
  id: number;
  title: string;
  time: string;
  student: string;
};

type Stats = {
  completedSessions: number;
  averageRating: number;
  totalEarnings: number;
  pendingTasks: number;
  profileCompletion: number;
  upcomingSessions: UpcomingSession[];
  quickActions: QuickAction[];
};

// Mock data - replace with actual data from your API
const stats: Stats = {
  completedSessions: 128,
  averageRating: 4.8,
  totalEarnings: 3250,
  pendingTasks: 3,
  profileCompletion: 85,
  upcomingSessions: [
    { id: 1, title: 'Math Tutoring', time: 'Today, 2:00 PM', student: 'Alex Johnson' },
    { id: 2, title: 'Physics Help', time: 'Tomorrow, 10:00 AM', student: 'Sam Wilson' },
  ],
  quickActions: [
    { title: 'Update Availability', icon: Calendar, href: '/dashboard/expert/calendar' },
    { title: 'View Messages', icon: Users, href: '/dashboard/expert/messages' },
    { title: 'Track Earnings', icon: DollarSign, href: '/dashboard/expert/earnings' },
  ]
};

export default function ExpertDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#333333]">Welcome back, Dr. Smith</h2>
          <p className="text-[#666666] text-sm">Here's what's happening with your account today</p>
        </div>
        <Button className="bg-[#0096FF] hover:bg-[#0080E5] text-white">
          New Session
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Completed Sessions" 
          value={stats.completedSessions} 
          icon={Clock}
          trend="+12% from last month"
        />
        <StatCard 
          title="Average Rating" 
          value={stats.averageRating} 
          icon={Star}
          trend="4.8/5.0"
          isRating
        />
        <StatCard 
          title="Total Earnings" 
          value={`$${stats.totalEarnings.toLocaleString()}`} 
          icon={DollarSign}
          trend="+$450 from last month"
        />
        <StatCard 
          title="Pending Tasks" 
          value={stats.pendingTasks} 
          icon={TrendingUp}
          trend="2 due today"
          warning={stats.pendingTasks > 0}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Completion */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Profile Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#666666]">Profile Strength</span>
                  <span className="font-medium">{stats.profileCompletion}%</span>
                </div>
                <Progress value={stats.profileCompletion} className="h-2" />
              </div>
              <p className="text-sm text-[#666666]">
                Complete your profile to get more students and increase your earnings potential.
              </p>
              <Button variant="outline" className="w-full border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF10]">
                Complete Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Upcoming Sessions</CardTitle>
            <Link href="/dashboard/expert/calendar" className="text-sm text-[#0096FF] hover:underline">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.upcomingSessions.length > 0 ? (
                <div className="space-y-4">
                  {stats.upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-[#666666]">{session.student}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{session.time}</p>
                        <Button variant="outline" size="sm" className="mt-2 border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF10]">
                          Join Session
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-[#666666]">
                  <p>No upcoming sessions scheduled</p>
                  <Button variant="link" className="text-[#0096FF] p-0 h-auto">
                    View Available Time Slots
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.quickActions.map((action, index) => (
          <Link key={index} href={action.href}>
            <Card className="h-full transition-all hover:shadow-md cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0096FF10] text-[#0096FF]">
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{action.title}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Reusable Stat Card Component
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  isRating?: boolean;
  warning?: boolean;
}

function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  isRating = false, 
  warning = false 
}: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-[#666666]">{title}</p>
            <p className={`text-2xl font-bold mt-1 ${warning ? 'text-amber-500' : 'text-[#333333]'}`}>
              {value}{isRating && <span className="text-base font-normal">/5.0</span>}
            </p>
            {trend && (
              <p className={`text-xs mt-1 ${trend.startsWith('+') ? 'text-green-500' : 'text-[#666666]'}`}>
                {trend}
              </p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${warning ? 'bg-amber-50 text-amber-500' : 'bg-[#0096FF10] text-[#0096FF]'}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
