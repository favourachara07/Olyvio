import { cn } from '@/lib/utils';

interface ContactListItemProps {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
  role?: string;  // Made optional with ?
  isOnline?: boolean;
  unreadCount?: number;
  isSelected?: boolean;
  onClick: (id: number) => void;
  className?: string;
}

export function ContactListItem({
  id,
  name,
  lastMessage,
  timestamp,
  avatar,
  role,
  isOnline = false,
  unreadCount = 0,
  isSelected = false,
  onClick,
  className,
}: ContactListItemProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100',
        isSelected && 'bg-gray-50',
        className
      )}
    >
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {avatar}
          </div>
          {isOnline && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {name}
            </h3>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-gray-500">
                {timestamp}
              </span>
              {unreadCount > 0 && (
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">
                    {unreadCount}
                  </span>
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-0.5 mb-1">
            {role}
          </p>
          <p className="text-sm text-gray-600 truncate">
            {lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
