'use client';

import { Card, CardContent } from "@/app/components/ui/Card";
import { LucideSearch } from "lucide-react";
import { Select } from "@/app/components/ui/Select";

interface UsersFiltersProps {
  searchQuery: string;
  roleFilter: string;
  statusFilter: string;
  onSearchChange: (value: string) => void;
  onRoleFilterChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
}

export function UsersFilters({
  searchQuery,
  roleFilter,
  statusFilter,
  onSearchChange,
  onRoleFilterChange,
  onStatusFilterChange,
}: UsersFiltersProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative md:col-span-2">
            <LucideSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              className="w-full pl-10 pr-3 py-2 border border-[#D9D9D9] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <Select
            label="Role"
            id="role-filter"
            value={roleFilter}
            onChange={onRoleFilterChange}
            options={[
              { label: 'All Roles', value: 'All' },
              { label: 'Students', value: 'Student' },
              { label: 'Experts', value: 'Expert' },
              { label: 'Admins', value: 'Admin' }
            ]}
          />
          <Select
            label="Status"
            id="status-filter"
            value={statusFilter}
            onChange={onStatusFilterChange}
            options={[
              { label: 'All Statuses', value: 'All' },
              { label: 'Active', value: 'Active' },
              { label: 'Suspended', value: 'Suspended' },
              { label: 'Pending', value: 'Pending' }
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
