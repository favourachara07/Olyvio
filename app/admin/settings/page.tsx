'use client';

import { useState } from 'react';
import { Card } from "@/app/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/Tabs";
import { Button } from "@/app/components/ui/Button";
import { 
  LucideSettings, 
  LucideUsers, 
  LucideShield, 
  LucideBell, 
  LucideMail,
  LucideSave,
  LucideGlobe,
  LucideLock
} from "lucide-react";
import { GeneralSettings } from './GeneralSettings';
import { UserSettings } from './UserSettings';
import { SecuritySettings } from './SecuritySettings';
import { NotificationSettings } from './NotificationSettings';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    // Show success message
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#333333]">Settings</h2>
          <p className="text-[#666666] text-sm">Manage your platform settings and configurations</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="border-[#0096FF] text-[#0096FF] hover:bg-[#0096FF10]"
            onClick={() => window.location.reload()}
          >
            Reset Changes
          </Button>
          <Button 
            className="bg-[#0096FF] hover:bg-[#0080E5] text-white"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
            {!isSaving && <LucideSave className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </div>

      <Card>
        <Tabs 
          defaultValue="general" 
          className="w-full"
          onValueChange={setActiveTab}
          value={activeTab}
        >
          <div className="border-b border-[#E6E6E6]">
            <TabsList className="bg-transparent p-0 h-auto w-full justify-start rounded-none">
              <TabsTrigger 
                value="general" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none py-4 px-6"
              >
                <LucideSettings className="h-4 w-4 mr-2" />
                General
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none py-4 px-6"
              >
                <LucideUsers className="h-4 w-4 mr-2" />
                Users & Permissions
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none py-4 px-6"
              >
                <LucideShield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-[#0096FF] data-[state=active]:text-[#0096FF] rounded-none py-4 px-6"
              >
                <LucideBell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-6">
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>
            <TabsContent value="users">
              <UserSettings />
            </TabsContent>
            <TabsContent value="security">
              <SecuritySettings />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}
