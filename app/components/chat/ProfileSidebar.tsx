import { X, Phone, Video, Search, Bell, Archive, Shield, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileSidebarProps {
  contact: {
    id: number;
    name: string;
    avatar: string;
    role: string;
    isOnline?: boolean;
    about?: string;
    phone?: string;
    joinedDate?: string;
  };
  isMobile: boolean;
  onClose: () => void;
  className?: string;
}

export function ProfileSidebar({
  contact,
  isMobile,
  onClose,
  className,
}: ProfileSidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <div 
        className={cn(
          'fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50',
          isMobile ? 'w-full' : 'w-96',
          className
        )}
      >
        <div className="flex flex-col h-full">
          {/* Profile Header */}
          <div className="bg-gray-50 p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Contact info</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Photo and Name */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-medium mx-auto mb-4">
                {contact.avatar}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{contact.role}</p>
              <p className="text-sm text-green-600 mt-1">
                {contact.isOnline ? 'Online' : 'Last seen recently'}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-b border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <Phone className="w-6 h-6 text-green-500 mb-2" />
                <span className="text-xs text-gray-700">Audio</span>
              </button>
              <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <Video className="w-6 h-6 text-blue-500 mb-2" />
                <span className="text-xs text-gray-700">Video</span>
              </button>
              <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <Search className="w-6 h-6 text-purple-500 mb-2" />
                <span className="text-xs text-gray-700">Search</span>
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 overflow-y-auto">
            {/* About Section */}
            {contact.about && (
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-800 mb-3">About</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {contact.about}
                </p>
              </div>
            )}

            {/* Contact Information */}
            <div className="p-6 border-b border-gray-100">
              <h4 className="text-sm font-medium text-gray-800 mb-3">Contact info</h4>
              <div className="space-y-3">
                {contact.phone && (
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm text-gray-900">{contact.phone}</p>
                      <p className="text-xs text-gray-500">Phone</p>
                    </div>
                  </div>
                )}
                {contact.joinedDate && (
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm text-gray-900">Expert since {contact.joinedDate}</p>
                      <p className="text-xs text-gray-500">Joined</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Settings */}
            <div className="p-6">
              <h4 className="text-sm font-medium text-gray-800 mb-3">Chat settings</h4>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">Mute notifications</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <Archive className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">Archive chat</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-orange-600">Block contact</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                  <Trash2 className="w-5 h-5 text-red-400" />
                  <span className="text-sm text-red-600">Delete chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
