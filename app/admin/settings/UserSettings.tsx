'use client';

import { useState } from 'react';
import { Input } from "@/app/components/ui/Input";
import { Select } from "@/app/components/ui/Select";
import { Switch } from "@/app/components/ui/Switch";
import { Label } from "@/app/components/ui/Label";
import { Button } from "@/app/components/ui/Button";
import { LucideUser, LucideLock, LucideAlertCircle } from "lucide-react";

export function UserSettings() {
  const [formData, setFormData] = useState({
    defaultUserRole: 'user',
    emailVerification: true,
    allowProfileUpdates: true,
    allowUsernameChanges: true,
    allowAccountDeletion: false,
    require2FA: false,
    passwordMinLength: 8,
  });

  const roles = [
    { id: 'admin', name: 'Administrator' },
    { id: 'moderator', name: 'Moderator' },
    { id: 'user', name: 'Standard User' },
    { id: 'guest', name: 'Guest' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">User Registration & Profiles</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="defaultUserRole">Default User Role</Label>
            <Select
              id="defaultUserRole"
              name="defaultUserRole"
              value={formData.defaultUserRole}
              onChange={handleChange}
              options={roles.map(role => ({
                value: role.id,
                label: role.name
              }))}
              leftIcon={<LucideUser className="h-4 w-4 text-gray-400" />}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="passwordMinLength">Minimum Password Length</Label>
            <Input
              id="passwordMinLength"
              name="passwordMinLength"
              type="number"
              min="4"
              max="64"
              value={formData.passwordMinLength}
              onChange={handleChange}
              leftIcon={<LucideLock className="h-4 w-4 text-gray-400" />}
            />
          </div>
          
          <div className="flex items-start space-x-4 pt-2">
            <Switch
              id="emailVerification"
              checked={formData.emailVerification}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, emailVerification: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="emailVerification">Require Email Verification</Label>
              <p className="text-sm text-gray-500">
                Users must verify their email
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 pt-2">
            <Switch
              id="require2FA"
              checked={formData.require2FA}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, require2FA: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="require2FA">Require Two-Factor Authentication</Label>
              <p className="text-sm text-gray-500">
                Extra security layer for user accounts
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">Account Management</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Switch
              id="allowProfileUpdates"
              checked={formData.allowProfileUpdates}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, allowProfileUpdates: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="allowProfileUpdates">Allow Profile Updates</Label>
              <p className="text-sm text-gray-500">
                Users can update their profile information
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Switch
              id="allowUsernameChanges"
              checked={formData.allowUsernameChanges}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, allowUsernameChanges: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="allowUsernameChanges">Allow Username Changes</Label>
              <p className="text-sm text-gray-500">
                Users can change their username
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Switch
              id="allowAccountDeletion"
              checked={formData.allowAccountDeletion}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, allowAccountDeletion: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="allowAccountDeletion">Allow Account Deletion</Label>
              <p className="text-sm text-gray-500">
                Users can delete their own accounts
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium">User Roles</h3>
          <Button variant="outline" size="sm">
            Add Role
          </Button>
        </div>
        
        <div className="space-y-4">
          {roles.map((role) => (
            <div key={role.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b flex justify-between items-center">
                <h4 className="font-medium text-gray-900">{role.name}</h4>
                <Button variant="ghost" size="sm">
                  Edit Role
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
