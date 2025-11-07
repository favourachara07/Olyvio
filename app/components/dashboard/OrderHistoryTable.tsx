"use client";
import React, { useState } from "react";
import { 
  LucideDownload, 
  LucideChevronDown, 
  LucideChevronUp, 
  LucideFileText, 
  LucideClock,
  LucideCheckCircle2,
  LucideAlertCircle,
  LucideFilter,
  LucideSearch,
  LucideMoreVertical,
  LucideTrash2,
  LucideEdit,
  LucideShare2,
  LucideMessageSquare,
  LucidePlus,
  LucideChevronLeft,
  LucideChevronRight
} from "lucide-react";

interface Order {
  id: string;
  title: string;
  assigner: string;
  status: 'completed' | 'in-progress' | 'pending' | 'revision' | 'cancelled';
  due: string;
  submitted?: string;
  price: string;
  subject: string;
  type: string;
  priority: 'low' | 'medium' | 'high';
}

const rows: Order[] = [
  { 
    id: 'ORD-001',
    title: "Research methods essay - Impact of social media on mental health", 
    assigner: "Dr. Sarah Johnson", 
    status: "in-progress", 
    due: "2025-11-15",
    submitted: "2025-11-10",
    price: "$149.99",
    subject: "Psychology",
    type: "Essay",
    priority: "high"
  },
  { 
    id: 'ORD-002',
    title: "Algorithms and Data Structures project", 
    assigner: "Prof. Michael Chen", 
    status: "completed", 
    due: "2025-10-30",
    submitted: "2025-10-28",
    price: "$299.99",
    subject: "Computer Science",
    type: "Project",
    priority: "high"
  },
  { 
    id: 'ORD-003',
    title: "Biology lab report - Cell division and mitosis", 
    assigner: "Dr. Emily Wilson", 
    status: "pending", 
    due: "2025-11-20",
    price: "$199.99",
    subject: "Biology",
    type: "Lab Report",
    priority: "medium"
  },
  { 
    id: 'ORD-004',
    title: "Marketing analysis - Nike vs Adidas", 
    assigner: "Prof. Robert Taylor", 
    status: "completed", 
    due: "2025-10-15",
    submitted: "2025-10-12",
    price: "$179.99",
    subject: "Business",
    type: "Case Study",
    priority: "medium"
  },
  { 
    id: 'ORD-005',
    title: "Quantum physics problem set", 
    assigner: "Dr. James Wilson", 
    status: "revision", 
    due: "2025-11-25",
    submitted: "2025-11-05",
    price: "$249.99",
    subject: "Physics",
    type: "Problem Set",
    priority: "high"
  },
  { 
    id: 'ORD-006',
    title: "19th Century American Literature analysis", 
    assigner: "Prof. Elizabeth Brown", 
    status: "in-progress", 
    due: "2025-12-05",
    price: "$159.99",
    subject: "Literature",
    type: "Essay",
    priority: "medium"
  },
  { 
    id: 'ORD-007',
    title: "Statistical analysis using R", 
    assigner: "Dr. David Kim", 
    status: "completed", 
    due: "2025-10-28",
    submitted: "2025-10-25",
    price: "$229.99",
    subject: "Statistics",
    type: "Data Analysis",
    priority: "high"
  },
  { 
    id: 'ORD-008',
    title: "Organic chemistry reactions summary", 
    assigner: "Prof. Richard Davis", 
    status: "pending", 
    due: "2025-11-18",
    price: "$189.99",
    subject: "Chemistry",
    type: "Study Guide",
    priority: "low"
  },
];

const statusMap = {
  'completed': {
    label: 'Completed',
    color: 'bg-gray-100 text-gray-900',
    icon: LucideCheckCircle2
  },
  'in-progress': {
    label: 'In Progress',
    color: 'bg-gray-200 text-gray-900',
    icon: LucideClock
  },
  'pending': {
    label: 'Pending',
    color: 'bg-gray-100 text-gray-900',
    icon: LucideClock
  },
  'revision': {
    label: 'Revision',
    color: 'bg-gray-200 text-gray-900',
    icon: LucideAlertCircle
  },
  'cancelled': {
    label: 'Cancelled',
    color: 'bg-gray-100 text-gray-900',
    icon: LucideAlertCircle
  }
};

const priorityMap = {
  high: { label: 'High', color: 'bg-red-50 text-red-700' },
  medium: { label: 'Medium', color: 'bg-amber-50 text-amber-700' },
  low: { label: 'Low', color: 'bg-gray-100 text-gray-700' },
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function getDaysUntilDue(dueDate: string) {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return { text: 'Overdue', color: 'text-red-600' };
  if (diffDays === 0) return { text: 'Due today', color: 'text-amber-600' };
  if (diffDays === 1) return { text: 'Due tomorrow', color: 'text-amber-600' };
  if (diffDays <= 7) return { text: `Due in ${diffDays} days`, color: 'text-amber-600' };
  return { text: `Due ${formatDate(dueDate)}`, color: 'text-gray-600' };
}

function StatusBadge({ status }: { status: keyof typeof statusMap }) {
  const statusInfo = statusMap[status];
  const Icon = statusInfo.icon;
  
  return (
    <div className="flex items-center">
      <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
        <Icon className="w-3 h-3 mr-1.5" />
        {statusInfo.label}
      </div>
    </div>
  );
}

export default function OrderHistoryTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortConfig, setSortConfig] = useState<{key: keyof Order | null; direction: 'asc' | 'desc'}>({ 
    key: 'due', 
    direction: 'asc' 
  });
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const filteredAndSortedRows = React.useMemo(() => {
    let result = [...rows];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(row => 
        row.title.toLowerCase().includes(term) ||
        row.assigner.toLowerCase().includes(term) ||
        row.subject.toLowerCase().includes(term) ||
        row.type.toLowerCase().includes(term)
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(row => row.status === statusFilter);
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof Order];
        const bValue = b[sortConfig.key as keyof Order];
        
        if (aValue === undefined || bValue === undefined) return 0;
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return result;
  }, [searchTerm, statusFilter, sortConfig]);

  const requestSort = (key: keyof Order) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getSortIndicator = (key: string) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Order History</h2>
          <p className="text-sm text-gray-500">Track and manage your recent orders</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LucideSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
                    <div className="flex items-center space-x-2">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md bg-white text-gray-900"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">All Statuses</option>
                {Object.entries(statusMap).map(([key, { label }]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                <LucideFilter className="mr-1 h-4 w-4" />
                Filter
              </button>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('title')}
                >
                  <div className="flex items-center">
                    Assignment
                    <span className="ml-1">{getSortIndicator('title')}</span>
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('assigner')}
                >
                  <div className="flex items-center">
                    Assigner
                    <span className="ml-1">{getSortIndicator('assigner')}</span>
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('status')}
                >
                  <div className="flex items-center">
                    Status
                    <span className="ml-1">{getSortIndicator('status')}</span>
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('due')}
                >
                  <div className="flex items-center">
                    Due Date
                    <span className="ml-1">{getSortIndicator('due')}</span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedRows.length > 0 ? (
                filteredAndSortedRows.map((row) => {
                  const dueInfo = getDaysUntilDue(row.due);
                  const StatusIcon = statusMap[row.status].icon;
                  
                  return (
                    <React.Fragment key={row.id}>
                      <tr 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => toggleRow(row.id)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-gray-100 text-gray-600">
                              <LucideFileText className="h-5 w-5" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{row.title}</div>
                              <div className="text-xs text-gray-500">{row.subject} • {row.type}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{row.assigner}</div>
                          <div className="text-xs text-gray-500">{row.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={row.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(row.due)}</div>
                          <div className={`text-xs ${dueInfo.color}`}>{dueInfo.text}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button 
                              className="text-gray-600 hover:text-gray-900"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log('Download:', row.title);
                              }}
                            >
                              <LucideDownload className="h-4 w-4" />
                            </button>
                            <button 
                              className="text-gray-400 hover:text-gray-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log('More options:', row.title);
                              }}
                            >
                              <LucideMoreVertical className="h-4 w-4" />
                            </button>
                            <button 
                              className={`transition-transform ${expandedRow === row.id ? 'rotate-180' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleRow(row.id);
                              }}
                            >
                              <LucideChevronDown className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedRow === row.id && (
                        <tr className="bg-gray-50">
                          <td colSpan={5} className="px-6 py-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Order Details</h4>
                                <dl className="space-y-2">
                                  <div className="flex">
                                    <dt className="w-24 text-gray-500">Order ID:</dt>
                                    <dd className="text-gray-900">{row.id}</dd>
                                  </div>
                                  <div className="flex">
                                    <dt className="w-24 text-gray-500">Subject:</dt>
                                    <dd className="text-gray-900">{row.subject}</dd>
                                  </div>
                                  <div className="flex">
                                    <dt className="w-24 text-gray-500">Type:</dt>
                                    <dd className="text-gray-900">{row.type}</dd>
                                  </div>
                                  <div className="flex">
                                    <dt className="w-24 text-gray-500">Priority:</dt>
                                    <dd>
                                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityMap[row.priority].color}`}>
                                        {priorityMap[row.priority].label}
                                      </span>
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                                <div className="space-y-2">
                                  <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                      <LucideCheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div className="ml-3">
                                      <p className="text-sm font-medium text-gray-900">Order Placed</p>
                                      <p className="text-xs text-gray-500">Nov 1, 2025</p>
                                    </div>
                                  </div>
                                  {row.status === 'completed' && row.submitted && (
                                    <div className="flex items-start">
                                      <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <LucideCheckCircle2 className="h-5 w-5" />
                                      </div>
                                      <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Completed</p>
                                        <p className="text-xs text-gray-500">
                                          Submitted on {formatDate(row.submitted)}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                  {row.status === 'in-progress' && (
                                    <div className="flex items-start">
                                      <div className="flex-shrink-0 h-5 w-5 text-gray-600">
                                        <LucideClock className="h-5 w-5" />
                                      </div>
                                      <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">In Progress</p>
                                        <p className="text-xs text-gray-500">
                                          Due in {getDaysUntilDue(row.due).text.replace('Due in ', '')}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                              <button
                                type="button"
                                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                <LucideMessageSquare className="-ml-0.5 mr-1.5 h-4 w-4" />
                                Message
                              </button>
                              <button
                                type="button"
                                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                <LucideDownload className="-ml-0.5 mr-1.5 h-4 w-4" />
                                Download Files
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <LucideFileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {searchTerm || statusFilter !== 'all' 
                        ? 'No orders match your search criteria. Try adjusting your filters.'
                        : 'You have no orders yet. Get started by placing a new order.'}
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <LucidePlus className="-ml-1 mr-2 h-5 w-5" />
                        New Order
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-3">
        {filteredAndSortedRows.length > 0 ? (
          filteredAndSortedRows.map((row) => {
            const dueInfo = getDaysUntilDue(row.due);
            const StatusIcon = statusMap[row.status].icon;
            const PriorityIcon = priorityMap[row.priority];
            
            return (
              <div key={row.id} className="bg-white shadow overflow-hidden rounded-lg border border-gray-200">
                <div 
                  className="px-4 py-5 sm:px-6 cursor-pointer"
                  onClick={() => toggleRow(row.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <LucideFileText className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{row.title}</h3>
                        <div className="flex items-center mt-1">
                          <StatusBadge status={row.status} />
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-xs text-gray-500">{row.subject}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      className={`text-gray-400 hover:text-gray-500 transition-transform ${expandedRow === row.id ? 'rotate-180' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRow(row.id);
                      }}
                    >
                      <LucideChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className={`border-t border-gray-200 px-4 py-3 sm:px-6 ${expandedRow === row.id ? 'block' : 'hidden'}`}>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="sm:col-span-1">
                      <dt className="text-xs font-medium text-gray-500">Order ID</dt>
                      <dd className="mt-1 text-gray-900">{row.id}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-xs font-medium text-gray-500">Type</dt>
                      <dd className="mt-1 text-gray-900">{row.type}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-xs font-medium text-gray-500">Assigner</dt>
                      <dd className="mt-1 text-gray-900">{row.assigner}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-xs font-medium text-gray-500">Price</dt>
                      <dd className="mt-1 text-gray-900">{row.price}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-xs font-medium text-gray-500">Due Date</dt>
                      <dd className="mt-1">
                        <div className="text-gray-900">{formatDate(row.due)}</div>
                        <div className={`text-xs ${dueInfo.color}`}>{dueInfo.text}</div>
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-xs font-medium text-gray-500">Priority</dt>
                      <dd className="mt-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${PriorityIcon.color}`}>
                          {PriorityIcon.label}
                        </span>
                      </dd>
                    </div>
                  </dl>
                  
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <LucideMessageSquare className="-ml-0.5 mr-1.5 h-4 w-4" />
                      Message
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <LucideDownload className="-ml-0.5 mr-1.5 h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <LucideFileText className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || statusFilter !== 'all' 
                ? 'No orders match your search criteria.'
                : 'You have no orders yet.'}
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
              >
                <LucidePlus className="-ml-1 mr-2 h-5 w-5" />
                New Order
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {filteredAndSortedRows.length > 0 && (
        <div className="mt-4 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-b-lg">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                <span className="font-medium">{filteredAndSortedRows.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <LucideChevronLeft className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-black px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <LucideChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
