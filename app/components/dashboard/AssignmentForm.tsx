"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  LucideFile, 
  LucideFolder, 
  LucideMicroscope, 
  LucideMoreVertical, 
  LucideTrash2, 
  LucideEdit, 
  LucideShare2, 
  LucideDownload,
  LucideClock,
  LucideCheckCircle2,
  LucideAlertCircle
} from "lucide-react";

interface DropdownState {
  isOpen: boolean;
  activeIndex: number | null;
}

interface DocumentItem {
  id: string;
  label: string;
  size: string;
  type: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: string;
  progress?: number;
  icon: React.ComponentType<{ className?: string }>;
}

export default function RecentTab() {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: 'doc1',
      label: "CSC 314 Assignment 2 - Data Structures",
      size: "2.4 MB",
      type: "docx",
      status: 'in-progress',
      dueDate: '2025-11-15',
      progress: 65,
      icon: LucideFile
    },
    {
      id: 'doc2',
      label: "Research Paper - Machine Learning",
      size: "1.8 MB",
      type: "pdf",
      status: 'pending',
      dueDate: '2025-12-01',
      progress: 20,
      icon: LucideMicroscope
    },
    {
      id: 'doc3',
      label: "Final Year Project Proposal",
      size: "3.2 MB",
      type: "docx",
      status: 'completed',
      dueDate: '2025-10-28',
      progress: 100,
      icon: LucideFolder
    },
    {
      id: 'doc4',
      label: "Mathematics Homework - Week 5",
      size: "850 KB",
      type: "pdf",
      status: 'in-progress',
      dueDate: '2025-11-08',
      progress: 40,
      icon: LucideFile
    },
  ]);
  
  const [dropdown, setDropdown] = useState<DropdownState>({ isOpen: false, activeIndex: null });
  const dropdownRef = useRef<HTMLDivElement>(null);
  
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
  
  const handleAction = (e: React.MouseEvent, action: string, doc: DocumentItem) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log(`${action} action for:`, doc.label);
    
    // Handle different actions
    switch(action) {
      case 'download':
        // Simulate download
        console.log(`Downloading ${doc.label}...`);
        break;
      case 'share':
        // Simulate share action
        console.log(`Sharing ${doc.label}...`);
        break;
      case 'edit':
        // Simulate edit action
        console.log(`Editing ${doc.label}...`);
        break;
      case 'delete':
        // Simulate delete action
        if (confirm(`Are you sure you want to delete ${doc.label}?`)) {
          setDocuments(docs => docs.filter(d => d.id !== doc.id));
          console.log(`Deleted ${doc.label}`);
        }
        break;
    }
    
    setDropdown({ isOpen: false, activeIndex: null });
  };
  
  const getStatusIcon = (status: DocumentItem['status']) => {
    switch(status) {
      case 'completed':
        return <LucideCheckCircle2 className="w-4 h-4 text-gray-900" />;
      case 'in-progress':
        return <LucideClock className="w-4 h-4 text-gray-700" />;
      case 'pending':
      default:
        return <LucideAlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };
  
  const getStatusColor = (status: DocumentItem['status']) => {
    switch(status) {
      case 'completed':
        return 'text-gray-900';
      case 'in-progress':
        return 'text-gray-700';
      case 'pending':
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center mb-2">
        <h2 className="text-black font-semibold text-sm">Recent Documents</h2>
        <Link href="/dashboard/assignments" className="text-xs text-blue-600 hover:underline flex items-center">
          View All
          <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      <div className="grid gap-3">
        {documents.map((doc, index) => {
          const Icon = doc.icon;
          const isOverdue = doc.dueDate && new Date(doc.dueDate) < new Date() && doc.status !== 'completed';
          
          return (
            <div
              key={doc.id}
              className="group relative flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link href={`/dashboard/documents/${doc.id}`} className="flex-1 flex items-center">
                <div className="flex items-center gap-4 w-full">
                  <div className={`p-2.5 rounded-lg ${getStatusColor(doc.status).replace('text-', 'text-opacity-80 ')}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{doc.label}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(doc.status)}`}>
                        {doc.status.replace('-', ' ')}
                      </span>
                      {isOverdue && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-rose-50 text-rose-700">
                          Overdue
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500 space-x-4">
                      <span>{doc.size} • {doc.type.toUpperCase()}</span>
                      {doc.dueDate && (
                        <div className="flex items-center">
                          <LucideClock className="w-3.5 h-3.5 mr-1" />
                          <span>Due {new Date(doc.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      )}
                    </div>
                    
                    {doc.progress !== undefined && doc.progress > 0 && (
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full ${
                            doc.progress < 30 ? 'bg-gray-400' : 
                            doc.progress < 70 ? 'bg-gray-600' : 'bg-gray-900'
                          }`} 
                          style={{ width: `${doc.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
              
              <div className="relative ml-2" ref={dropdownRef}>
                <button
                  onClick={(e) => toggleDropdown(index, e)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="More options"
                >
                  <LucideMoreVertical className="w-4 h-4" />
                </button>
                
                {dropdown.isOpen && dropdown.activeIndex === index && (
                  <div className="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-200 overflow-hidden">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs font-medium text-gray-500">Actions</p>
                    </div>
                    
                    <button
                      onClick={(e) => handleAction(e, 'download', doc)}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LucideDownload className="w-4 h-4 mr-3 text-gray-500" />
                      <span>Download</span>
                    </button>
                    
                    <button
                      onClick={(e) => handleAction(e, 'share', doc)}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LucideShare2 className="w-4 h-4 mr-3 text-gray-500" />
                      <span>Share</span>
                    </button>
                    
                    <div className="border-t border-gray-100 my-1"></div>
                    
                    <button
                      onClick={(e) => handleAction(e, 'edit', doc)}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LucideEdit className="w-4 h-4 mr-3 text-gray-500" />
                      <span>Edit details</span>
                    </button>
                    
                    <div className="border-t border-gray-100 my-1"></div>
                    
                    <button
                      onClick={(e) => handleAction(e, 'delete', doc)}
                      className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LucideTrash2 className="w-4 h-4 mr-3" />
                      <span>Delete document</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        
        {documents.length === 0 && (
          <div className="text-center py-8">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <LucideFile className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-sm font-medium text-gray-900">No recent documents</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by uploading a new document</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Upload Document
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
