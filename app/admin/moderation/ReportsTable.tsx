'use client';

import { Report, ReportStatus } from './types';
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { format } from 'date-fns';
import { 
  LucideAlertCircle, 
  LucideMessageSquare, 
  LucideUserX, 
  LucideShield, 
  LucideExternalLink,
  LucideUser,
  LucideClock,
  LucideCheckCircle2,
  LucideXCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/DropdownMenu";

interface ReportsTableProps {
  reports: Report[];
}

export function ReportsTable({ reports }: ReportsTableProps) {
  const getStatusBadgeVariant = (status: ReportStatus) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'reviewed':
        return 'info';
      case 'resolved':
        return 'success';
      case 'dismissed':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'content':
        return <LucideAlertCircle className="h-4 w-4 mr-2" />;
      case 'user':
        return <LucideUserX className="h-4 w-4 mr-2" />;
      case 'message':
        return <LucideMessageSquare className="h-4 w-4 mr-2" />;
      default:
        return <LucideShield className="h-4 w-4 mr-2" />;
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM d, yyyy h:mm a');
  };

  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <LucideShield className="h-12 w-12 mx-auto text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No reports found</h3>
        <p className="mt-1 text-sm text-gray-500">There are no reports matching your current filters.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Report
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reported Item
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reported By
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    {getTypeIcon(report.type)}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 capitalize">{report.type}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{report.reason}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {report.reportedItem.type}
                </div>
                <div className="text-sm text-gray-500 truncate max-w-xs">
                  {report.reportedItem.preview}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant={getStatusBadgeVariant(report.status)}>
                  {report.status}
                </Badge>
                {report.assignedTo && (
                  <div className="mt-1 text-xs text-gray-500">
                    Assigned to {report.assignedTo.name}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <LucideUser className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">
                      {report.reporter.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {report.reporter.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div>{formatDate(report.createdAt)}</div>
                {report.updatedAt !== report.createdAt && (
                  <div className="text-xs text-gray-400">
                    Updated {formatDate(report.updatedAt)}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-2">
                  {report.reportedItem.url && (
                    <a
                      href={report.reportedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-900"
                      title="View reported content"
                    >
                      <LucideExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <LucideMoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <LucideClock className="mr-2 h-4 w-4" />
                        Mark as In Review
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LucideCheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                        Resolve Report
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LucideXCircle className="mr-2 h-4 w-4 text-red-600" />
                        Dismiss Report
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
