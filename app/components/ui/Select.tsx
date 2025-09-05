import { ChevronDown } from "lucide-react";

type SelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
  error?: string;
};

export default function Select({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  className = "",
  error
}: SelectProps) {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={id} className="block text-xs lg:text-[10px] xl:text-xs font-semibold text-black mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-3 border border-[#D9D9D9] rounded-md text-sm lg:text-xs xl:text-sm text-[#6C6C6C] bg-white appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#6C6C6C] pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
