'use client';

import { useState } from 'react';
import { Input } from "@/app/components/ui/Input";
import { Switch } from "@/app/components/ui/Switch";
import { Label } from "@/app/components/ui/Label";
import { Button } from "@/app/components/ui/Button";
import { 
  LucideLock, 
  LucideShield, 
  LucideShieldCheck,
  LucideAlertTriangle,
  LucideShieldOff,
  LucideGlobe
} from "lucide-react";

export function SecuritySettings() {
  const [formData, setFormData] = useState({
    enableBruteForceProtection: true,
    failedLoginAttempts: 5,
    loginLockoutTime: 30, // minutes
    enable2FA: true,
    enforceStrongPasswords: true,
    passwordExpiry: 90, // days
    passwordReuse: 5, // last N passwords
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
    enableCSRFProtection: true,
    allowedOrigins: 'https://yourdomain.com, https://app.yourdomain.com',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) || 0;
    
    setFormData(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Authentication Security</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Switch
              id="enableBruteForceProtection"
              checked={formData.enableBruteForceProtection}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enableBruteForceProtection: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enableBruteForceProtection">Enable Brute Force Protection</Label>
              <p className="text-sm text-gray-500">
                Temporarily lock accounts after multiple failed login attempts
              </p>
            </div>
          </div>
          
          {formData.enableBruteForceProtection && (
            <div className="ml-12 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="failedLoginAttempts">Failed Attempts Before Lockout</Label>
                  <Input
                    id="failedLoginAttempts"
                    name="failedLoginAttempts"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.failedLoginAttempts}
                    onChange={handleNumberChange}
                    leftIcon={<LucideShield className="h-4 w-4 text-gray-400" />}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="loginLockoutTime">Lockout Duration (minutes)</Label>
                  <Input
                    id="loginLockoutTime"
                    name="loginLockoutTime"
                    type="number"
                    min="1"
                    max="1440"
                    value={formData.loginLockoutTime}
                    onChange={handleNumberChange}
                    leftIcon={<LucideClock className="h-4 w-4 text-gray-400" />}
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-start space-x-4 pt-2">
            <Switch
              id="enable2FA"
              checked={formData.enable2FA}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enable2FA: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enable2FA">Enable Two-Factor Authentication</Label>
              <p className="text-sm text-gray-500">
                Require a second authentication step for all users
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">Password Policy</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Switch
              id="enforceStrongPasswords"
              checked={formData.enforceStrongPasswords}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enforceStrongPasswords: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enforceStrongPasswords">Enforce Strong Passwords</Label>
              <p className="text-sm text-gray-500">
                Require passwords to meet complexity requirements
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-12">
            <div className="space-y-2">
              <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
              <Input
                id="passwordExpiry"
                name="passwordExpiry"
                type="number"
                min="0"
                max="365"
                value={formData.passwordExpiry}
                onChange={handleNumberChange}
                leftIcon={<LucideShieldCheck className="h-4 w-4 text-gray-400" />}
              />
              <p className="text-xs text-gray-500">
                Set to 0 to disable password expiry
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passwordReuse">Password History</Label>
              <Input
                id="passwordReuse"
                name="passwordReuse"
                type="number"
                min="0"
                max="24"
                value={formData.passwordReuse}
                onChange={handleNumberChange}
                leftIcon={<LucideShieldOff className="h-4 w-4 text-gray-400" />}
              />
              <p className="text-xs text-gray-500">
                Number of previous passwords to remember (0 to disable)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium mb-6">HTTP Security Headers</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Switch
              id="enableCSP"
              checked={formData.enableCSP}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enableCSP: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enableCSP">Enable Content Security Policy (CSP)</Label>
              <p className="text-sm text-gray-500">
                Helps prevent XSS attacks by controlling resources the browser is allowed to load
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Switch
              id="enableHSTS"
              checked={formData.enableHSTS}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enableHSTS: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enableHSTS">Enable HTTP Strict Transport Security (HSTS)</Label>
              <p className="text-sm text-gray-500">
                Ensures all communication is sent over HTTPS
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Switch
              id="enableXSSProtection"
              checked={formData.enableXSSProtection}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enableXSSProtection: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enableXSSProtection">Enable XSS Protection</Label>
              <p className="text-sm text-gray-500">
                Enables cross-site scripting filter in the browser
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Switch
              id="enableCSRFProtection"
              checked={formData.enableCSRFProtection}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, enableCSRFProtection: checked }))
              }
            />
            <div className="space-y-1">
              <Label htmlFor="enableCSRFProtection">Enable CSRF Protection</Label>
              <p className="text-sm text-gray-500">
                Protects against Cross-Site Request Forgery attacks
              </p>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
            <Label htmlFor="allowedOrigins">Allowed Cross-Origin Domains</Label>
            <div className="relative">
              <textarea
                id="allowedOrigins"
                name="allowedOrigins"
                value={formData.allowedOrigins}
                onChange={(e) => setFormData(prev => ({ ...prev, allowedOrigins: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm min-h-[80px]"
                placeholder="https://example.com, https://subdomain.example.com"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <LucideGlobe className="h-4 w-4" />
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Comma-separated list of allowed origins for CORS requests
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="rounded-md bg-yellow-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <LucideAlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Security Notice</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Changing these settings can affect the security of your application. 
                  Only modify these settings if you understand the implications.
                </p>
              </div>
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex">
                  <button
                    type="button"
                    className="rounded-md bg-yellow-50 px-2 py-1.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50"
                    onClick={() => {
                      // Reset to default values
                      setFormData({
                        ...formData,
                        enableBruteForceProtection: true,
                        failedLoginAttempts: 5,
                        loginLockoutTime: 30,
                        enable2FA: true,
                        enforceStrongPasswords: true,
                        passwordExpiry: 90,
                        passwordReuse: 5,
                        enableCSP: true,
                        enableHSTS: true,
                        enableXSSProtection: true,
                        enableCSRFProtection: true,
                      });
                    }}
                  >
                    Reset to defaults
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
