'use client';

import { useState } from 'react';
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/Tabs";
import { LucideShield } from "lucide-react";
import { Report, ReportStatus } from './types';
import { ReportsTable } from './ReportsTable';

// Mock data - would typically come from an API
import { mockReports } from './data';

export default function ModerationPage() {
  const [activeTab, setActiveTab] = useState<ReportStatus | 'all'>('pending');
  
  const filteredReports = activeTab === 'all' 
    ? mockReports 
    : mockReports.filter(report => report.status === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#333333]">Content Moderation</h2>
          <p className="text-[#666666] text-sm">Review and manage user reports and flagged content</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF10]">
            Moderation Logs
          </Button>
          <Button className="bg-[#0096FF] hover:bg-[#0080E5] text-white">
            New Moderation Rule
          </Button>
        </div>
      </div>

      <Card>
        <Tabs 
          defaultValue="pending" 
          className="w-full"
          onValueChange={(value) => setActiveTab(value as ReportStatus | 'all')}
        >
          <div className="p-6 border-b border-[#E6E6E6]">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger value="all" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none pb-2 px-4">
                All Reports
              </TabsTrigger>
              <TabsTrigger value="pending" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none pb-2 px-4">
                Pending
                <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {mockReports.filter(r => r.status === 'pending').length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="reviewed" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none pb-2 px-4">
                In Review
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {mockReports.filter(r => r.status === 'reviewed').length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="resolved" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none pb-2 px-4">
                Resolved
              </TabsTrigger>
              <TabsTrigger value="dismissed" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none pb-2 px-4">
                Dismissed
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-6">
            <TabsContent value={activeTab}>
              <ReportsTable reports={filteredReports} />
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}
