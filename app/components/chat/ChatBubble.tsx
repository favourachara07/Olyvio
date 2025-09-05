import { Check, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | undefined;

interface ChatBubbleProps {
  message: string;
  timestamp: string;
  status?: MessageStatus;
  isCurrentUser: boolean;
  className?: string;
}

export function ChatBubble({ 
  message, 
  timestamp, 
  status, 
  isCurrentUser, 
  className 
}: ChatBubbleProps) {
  const renderStatusIcon = () => {
    if (!isCurrentUser) return null;
    
    switch (status) {
      case 'sent':
        return <Check className="w-3 h-3 ml-1" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 ml-1" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 ml-1 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn(
        'flex', 
        isCurrentUser ? 'justify-end' : 'justify-start',
        className
      )}
    >
      <div 
        className={cn(
          'max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg px-3 py-2 relative',
          isCurrentUser 
            ? 'bg-green-500 text-white' 
            : 'bg-white text-gray-900 shadow-sm border border-gray-100'
        )}
      >
        <p className="text-sm leading-relaxed break-words">
          {message}
        </p>
        <div 
          className={cn(
            'flex items-center justify-end mt-1 space-x-1',
            isCurrentUser ? 'text-green-100' : 'text-gray-500'
          )}
        >
          <span className="text-xs">
            {timestamp}
          </span>
          {isCurrentUser && renderStatusIcon()}
        </div>

        {/* Message tail */}
        <div 
          className={cn(
            'absolute top-0 h-0 w-0',
            isCurrentUser
              ? '-right-2 border-l-8 border-l-green-500'
              : '-left-2 border-r-8 border-r-white',
            'border-t-8 border-t-transparent border-b-8 border-b-transparent'
          )} 
        />
      </div>
    </div>
  );
}
