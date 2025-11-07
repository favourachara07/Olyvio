"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LucideFile, LucideFileEdit, LucideFolder, LucideMicroscope, LucidePlus } from "lucide-react";

type ActionType = 'assignment' | 'research' | 'project' | 'review';

interface ActionItem {
  id: string;
  label: string;
  description: string;
  type: ActionType;
  color: string;
  hoverColor?: string;
  icon: React.ComponentType<{ className?: string }>;
}

const actions: ActionItem[] = [
  { 
    id: 'assignment',
    label: "New Assignment", 
    description: "Get help with your academic assignments",
    type: 'assignment',
    color: "bg-gray-50 text-gray-900",
    icon: LucideFile 
  },
  { 
    id: 'research',
    label: "New Research", 
    description: "Research paper writing assistance",
    type: 'research',
    color: "bg-gray-100 text-gray-800",
    icon: LucideMicroscope 
  },
  { 
    id: 'project',
    label: "New Project", 
    description: "Project development and coding help",
    type: 'project',
    color: "bg-gray-200 text-gray-900",
    icon: LucideFolder 
  },
  { 
    id: 'review',
    label: "Document Review", 
    description: "Get feedback on your documents",
    type: 'review',
    color: "bg-gray-300 text-black",
    icon: LucideFileEdit 
  },
];

export default function QuickActions() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent, type: ActionType) => {
    e.preventDefault();
    // For demo purposes, show a console log and navigate
    console.log(`Initiating ${type} action`);
    // In a real app, this would navigate to the appropriate form
    router.push(`/dashboard/submit?type=${type}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        const isHovered = hoveredItem === action.id;
        
        return (
          <div 
            key={action.id}
            onClick={(e) => handleClick(e, action.type)}
            onMouseEnter={() => setHoveredItem(action.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`
              rounded-xl border border-gray-200 
              bg-white
              flex flex-col p-4 cursor-pointer shadow-sm
            `}
          >
            <div className={`p-3 rounded-lg ${action.color} w-fit transition-colors duration-200`}>
              <Icon className={`w-5 h-5 ${isHovered ? 'scale-110' : ''} transition-transform duration-200`} />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-gray-900">{action.label}</h3>
              <p className="mt-1 text-xs text-gray-600">{action.description}</p>
            </div>
            <div className="mt-auto pt-2">
              <span className="inline-flex items-center text-xs font-medium text-gray-500 group-hover:text-blue-600">
                Get started
                <svg 
                  className="ml-1 w-4 h-4 transition-transform duration-200 transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
