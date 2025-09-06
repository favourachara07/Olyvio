'use client';

import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import { Select } from "@/app/components/ui/Select";
import { Switch } from "@/app/components/ui/Switch";
import { Label } from "@/app/components/ui/Label";
import { LucideGlobe, LucideMail, LucideClock } from "lucide-react";
import { useState } from "react";

export function GeneralSettings() {
  // Mock data - in a real app, this would come from an API
  const [formData, setFormData] = useState({
    siteName: 'Olyvio',
    siteDescription: 'Empowering education through technology',
    contactEmail: 'support@olyvio.com',
    defaultLanguage: 'en',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    maintenanceMode: false,
    registrationEnabled: true,
    googleAnalyticsId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const timezones = [
    { value: 'UTC', label: 'UTC' },
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'America/Denver', label: 'Mountain Time (MT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/London', label: 'London (GMT)' },
    { value: 'Europe/Paris', label: 'Paris (CET)' },
    { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'zh', label: '中文' },
    { value: 'ja', label: '日本語' },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Site Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              placeholder="Your site name"
              // leftIcon={<LucideGlobe className="h-4 w-4 text-gray-400" />}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Contact Email</Label>
            <Input
              id="contactEmail"
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="contact@example.com"
              leftIcon={<LucideMail className="h-4 w-4 text-gray-400" />}
            />
          </div>
          
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="siteDescription">Site Description</Label>
            <Textarea
              id="siteDescription"
              name="siteDescription"
              value={formData.siteDescription}
              onChange={handleChange}
              placeholder="A brief description of your platform"
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">Localization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="defaultLanguage">Default Language</Label>
            <Select
              id="defaultLanguage"
              name="defaultLanguage"
              value={formData.defaultLanguage}
              onChange={handleChange}
              options={languages}
              placeholder="Select language"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              options={timezones}
              placeholder="Select timezone"
              leftIcon={<LucideClock className="h-4 w-4 text-gray-400" />}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timeFormat">Time Format</Label>
            <Select
              id="timeFormat"
              name="timeFormat"
              value={formData.timeFormat}
              onChange={handleChange}
              options={[
                { value: '12h', label: '12-hour (2:30 PM)' },
                { value: '24h', label: '24-hour (14:30)' },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">Features</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="maintenanceMode" className="font-medium">Maintenance Mode</Label>
              <p className="text-sm text-gray-500">
                When enabled, only administrators can access the site.
              </p>
            </div>
            <Switch
              id="maintenanceMode"
              checked={formData.maintenanceMode}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, maintenanceMode: checked }))
              }
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="registrationEnabled" className="font-medium">User Registration</Label>
              <p className="text-sm text-gray-500">
                Allow new users to create accounts.
              </p>
            </div>
            <Switch
              id="registrationEnabled"
              checked={formData.registrationEnabled}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, registrationEnabled: checked }))
              }
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">Analytics</h3>
        
        <div className="space-y-2">
          <Label htmlFor="googleAnalyticsId">Google Analytics Tracking ID</Label>
          <Input
            id="googleAnalyticsId"
            name="googleAnalyticsId"
            value={formData.googleAnalyticsId}
            onChange={handleChange}
            placeholder="UA-XXXXX-Y"
          />
          <p className="text-sm text-gray-500">
            Enter your Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX) or Universal Analytics Tracking ID (e.g., UA-XXXXXXXX-X)
          </p>
        </div>
      </div>
    </div>
  );
}
