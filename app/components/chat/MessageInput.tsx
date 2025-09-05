import { useRef, useEffect, KeyboardEvent } from 'react';
import { Paperclip, Smile, Mic, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  className?: string;
}

export function MessageInput({
  value,
  onChange,
  onSend,
  placeholder = 'Type a message',
  className,
}: MessageInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className={cn('bg-gray-50 p-4 border-t border-gray-200 flex-shrink-0', className)}>
      <div className="flex items-end space-x-3">
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0">
          <Paperclip className="w-5 h-5" />
        </button>

        <div className="flex-1 relative bg-white rounded-full border border-gray-200 focus-within:border-green-500 transition-colors">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            rows={1}
            className="w-full px-4 py-3 pr-12 bg-transparent border-0 rounded-full resize-none focus:outline-none text-sm placeholder-gray-500 max-h-32"
            style={{ minHeight: '48px' }}
          />
          <button className="absolute right-3 bottom-3 p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <Smile className="w-5 h-5" />
          </button>
        </div>

        {value.trim() ? (
          <button
            onClick={onSend}
            className="p-2.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </button>
        ) : (
          <button className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0">
            <Mic className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
