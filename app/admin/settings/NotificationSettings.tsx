'use client';

import { useState } from 'react';
import { Switch } from "@/app/components/ui/Switch";
import { Label } from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import { 
  LucideBell, 
  LucideMail, 
  LucideMessageSquare,
  LucideAlertCircle,
  LucidePlus,
  LucideTrash2
} from "lucide-react";

interface NotificationTemplate {
  id: string;
  name: string;
  subject: string;
  enabled: boolean;
}

export function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState({
    enabled: true,
    fromEmail: 'notifications@olyvio.com',
    fromName: 'Olyvio Notifications',
    replyTo: 'support@olyvio.com',
  });

  const [templates, setTemplates] = useState<NotificationTemplate[]>([
    {
      id: 'welcome-email',
      name: 'Welcome Email',
      subject: 'Welcome to Olyvio!',
      enabled: true,
    },
    {
      id: 'password-reset',
      name: 'Password Reset',
      subject: 'Reset your Olyvio password',
      enabled: true,
    },
    {
      id: 'new-message',
      name: 'New Message',
      subject: 'You have a new message',
      enabled: true,
    },
    {
      id: 'account-update',
      name: 'Account Update',
      subject: 'Your account has been updated',
      enabled: false,
    },
  ]);

  const [inAppNotifications, setInAppNotifications] = useState({
    enabled: true,
    showPreviews: true,
    sound: true,
    desktopAlerts: true,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setEmailNotifications(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleInAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setInAppNotifications(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const toggleTemplate = (id: string) => {
    setTemplates(prevTemplates =>
      prevTemplates.map(template =>
        template.id === id
          ? { ...template, enabled: !template.enabled }
          : template
      )
    );
  };

  const addTemplate = () => {
    const newTemplate: NotificationTemplate = {
      id: `template-${Date.now()}`,
      name: 'New Template',
      subject: 'New Notification',
      enabled: true,
    };
    setTemplates(prev => [...prev, newTemplate]);
  };

  const deleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(template => template.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Email Notifications</h3>
        
        <div className="flex items-start space-x-4">
          <Switch
            id="emailEnabled"
            checked={emailNotifications.enabled}
            onCheckedChange={(checked) => 
              setEmailNotifications(prev => ({ ...prev, enabled: checked }))
            }
          />
          <div className="space-y-1">
            <Label htmlFor="emailEnabled">Enable Email Notifications</Label>
            <p className="text-sm text-gray-500">
              Allow the system to send email notifications to users
            </p>
          </div>
        </div>
        
        {emailNotifications.enabled && (
          <div className="ml-12 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fromEmail">From Email</Label>
                <Input
                  id="fromEmail"
                  name="fromEmail"
                  type="email"
                  value={emailNotifications.fromEmail}
                  onChange={handleEmailChange}
                  leftIcon={<LucideMail className="h-4 w-4 text-gray-400" />}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fromName">From Name</Label>
                <Input
                  id="fromName"
                  name="fromName"
                  value={emailNotifications.fromName}
                  onChange={handleEmailChange}
                  leftIcon={<LucideBell className="h-4 w-4 text-gray-400" />}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="replyTo">Reply-To Email</Label>
                <Input
                  id="replyTo"
                  name="replyTo"
                  type="email"
                  value={emailNotifications.replyTo}
                  onChange={handleEmailChange}
                  leftIcon={<LucideMessageSquare className="h-4 w-4 text-gray-400" />}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-md font-medium">Email Templates</h4>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={addTemplate}
                >
                  <LucidePlus className="h-4 w-4 mr-2" />
                  Add Template
                </Button>
              </div>
              
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Template Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {templates.map((template) => (
                      <tr key={template.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Switch
                            checked={template.enabled}
                            onCheckedChange={() => toggleTemplate(template.id)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {template.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {template.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            type="button"
                            onClick={() => deleteTemplate(template.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <LucideTrash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {templates.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                          No email templates configured
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">In-App Notifications</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Switch
              id="inAppEnabled"
              name="enabled"
              checked={inAppNotifications.enabled}
              onChange={handleInAppChange}
            />
            <div className="space-y-1">
              <Label htmlFor="inAppEnabled">Enable In-App Notifications</Label>
              <p className="text-sm text-gray-500">
                Show notifications within the application
              </p>
            </div>
          </div>
          
          {inAppNotifications.enabled && (
            <div className="ml-12 space-y-4">
              <div className="flex items-start space-x-4">
                <Switch
                  id="showPreviews"
                  name="showPreviews"
                  checked={inAppNotifications.showPreviews}
                  onChange={handleInAppChange}
                />
                <div className="space-y-1">
                  <Label htmlFor="showPreviews">Show Message Previews</Label>
                  <p className="text-sm text-gray-500">
                    Show a preview of the notification content
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Switch
                  id="sound"
                  name="sound"
                  checked={inAppNotifications.sound}
                  onChange={handleInAppChange}
                />
                <div className="space-y-1">
                  <Label htmlFor="sound">Enable Notification Sound</Label>
                  <p className="text-sm text-gray-500">
                    Play a sound when a new notification arrives
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Switch
                  id="desktopAlerts"
                  name="desktopAlerts"
                  checked={inAppNotifications.desktopAlerts}
                  onChange={handleInAppChange}
                />
                <div className="space-y-1">
                  <Label htmlFor="desktopAlerts">Show Desktop Alerts</Label>
                  <p className="text-sm text-gray-500">
                    Show notifications as desktop alerts (requires browser permission)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="rounded-md bg-blue-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <LucideAlertCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Notification Preview</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Changes to notification settings will affect all users. Test notifications 
                  to ensure they appear as expected.
                </p>
              </div>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  Send Test Notification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
