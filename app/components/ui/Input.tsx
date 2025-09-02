import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'rows'> {
  label: string;
  id: string;
  error?: string;
  textarea?: boolean;
  className?: string;
  rows?: number;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, id, error, textarea = false, className = '', ...props }, ref) => {
    const baseClasses = 'w-full px-3 py-3 border border-[#D9D9D9] rounded-md text-sm placeholder-[#6C6C6C] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
    const errorClasses = error ? 'border-red-500' : '';
    
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-xs lg:text-[10px] xl:text-xs font-semibold text-black mb-2">
          {label}
        </label>
        {textarea ? (
          <textarea
            id={id}
            rows={props.rows || 3}
            className={`${baseClasses} ${errorClasses} ${className} resize-none`}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          />
        ) : (
          <input
            id={id}
            className={`${baseClasses} ${errorClasses} ${className}`}
            {...props as React.InputHTMLAttributes<HTMLInputElement>}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
          />
        )}
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
