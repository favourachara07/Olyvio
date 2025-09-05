"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { LucideFile, LucideFolder, LucideMicroscope, LucideMoreVertical, LucideTrash2, LucideEdit, LucideShare2, LucideDownload } from "lucide-react";

interface DropdownState {
  isOpen: boolean;
  activeIndex: number | null;
}

export default function RecentTab() {
  const [services, setServices] = useState<string[]>([]);
  const [dropdown, setDropdown] = useState<DropdownState>({ isOpen: false, activeIndex: null });
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggle = (k: string) => setServices((s) => (s.includes(k) ? s.filter((i) => i !== k) : [...s, k]));
  
  const toggleDropdown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdown({
      isOpen: dropdown.activeIndex === index ? !dropdown.isOpen : true,
      activeIndex: index
    });
  };
  
  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setDropdown({ isOpen: false, activeIndex: null });
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleAction = (e: React.MouseEvent, action: string, item: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`${action} action for:`, item.label);
    // Add your action handlers here
    setDropdown({ isOpen: false, activeIndex: null });
  };

  const actions = [
    { label: "CSC 314 Ass. 2", size: "220 KB", type: "docx", href: "/dashboard/student#new", icon: LucideFolder },
    { label: "CSC 418 Lab Assignment", size: "1.5 MB", type: "pdf", href: "/dashboard/projects#new", icon: LucideMicroscope },
    { label: "CSC 416  Assignment", size: "1.2 MB", type: "pdf", href: "/dashboard/research#new", icon: LucideFile },
    { label: "CSC 416  Assignment", size: "1.2 MB", type: "pdf", href: "/dashboard/research#new", icon: LucideFile },
    { label: "CSC 416  Assignment", size: "1.2 MB", type: "pdf", href: "/dashboard/research#new", icon: LucideFile },
  ];

  return (
    <div className="">
      <h1 className="text-black font-semibold mb-1  text-xs xl:text-sm">Recent</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions.map((a, index) => {
          const Icon = a.icon;
          return (
            <Link
              key={index}
              href={a.href}
              className="rounded-lg lg:rounded-md xl:rounded-lg 2xl:rounded-xl border border-[#D9D9D9] bg-white flex flex-row items-center justify-between gap-4 lg:gap-3 xl:gap-4 p-4 lg:p-3 xl:p-4 text-black"
            >
              <div className="text-sm font-semibold flex flex-row gap-2 items-center">
                <div className="rounded-md p-1 2xl:p-2 bg-[#D9D9D940]">
                  <Icon className="text-black size-3 lg:size-2 xl:size-3 2xl:size-4" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xs 2xl:text-sm font-semibold">{a.label}</h1>
                  <h1 className="text-[9px] xl:text-[10px] font-normal">{a.size} <span>{a.type}</span></h1>
                </div>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={(e) => toggleDropdown(index, e)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <LucideMoreVertical className="text-black size-3 lg:size-2 xl:size-3 2xl:size-4" />
                </button>
                {dropdown.isOpen && dropdown.activeIndex === index && (
                  <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                    <div className="py-1">
                      <button 
                        onClick={(e) => handleAction(e, 'edit', a)}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LucideEdit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </button>
                      <button 
                        onClick={(e) => handleAction(e, 'share', a)}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LucideShare2 className="mr-2 h-4 w-4" />
                        <span>Share</span>
                      </button>
                      <button 
                        onClick={(e) => handleAction(e, 'download', a)}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LucideDownload className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </button>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button 
                        onClick={(e) => handleAction(e, 'delete', a)}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LucideTrash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
