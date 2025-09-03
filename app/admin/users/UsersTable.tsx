'use client';

import { User, UserStatus } from './page';
import { Badge } from "@/app/components/ui/Badge";
import { Checkbox } from "@/app/components/ui/Checkbox";
import { Button } from "@/app/components/ui/Button";
import { LucideMoreVertical, LucideUser, LucideUserCheck, LucideUserX, LucideEdit2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/DropdownMenu";

interface UsersTableProps {
  users: User[];
  selectedUsers: number[];
  onUserSelect: (userId: number) => void;
  onSelectAll: () => void;
  getStatusBadgeVariant: (status: UserStatus) => 'success' | 'destructive' | 'warning' | 'outline';
}

export function UsersTable({ 
  users, 
  selectedUsers, 
  onUserSelect, 
  onSelectAll,
  getStatusBadgeVariant 
}: UsersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-[#F9FAFB] border-b border-[#E6E6E6]">
          <tr>
            <th className="w-12 px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
              <Checkbox 
                checked={selectedUsers.length === users.length && users.length > 0}
                onCheckedChange={onSelectAll}
                aria-label="Select all users"
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-[#666666] uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E6E6E6]">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-[#F9FAFB]">
              <td className="px-6 py-4 whitespace-nowrap">
                <Checkbox 
                  checked={selectedUsers.includes(user.id)}
                  onCheckedChange={() => onUserSelect(user.id)}
                  aria-label={`Select ${user.name}`}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    {user.avatar ? (
                      <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                    ) : (
                      <span className="text-sm font-medium">
                        {user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">Joined {user.joinDate}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.role}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant={getStatusBadgeVariant(user.status) as any}>
                  {user.status}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <LucideMoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex items-center gap-2">
                      <LucideUser className="h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <LucideEdit2 className="h-4 w-4" />
                      Edit User
                    </DropdownMenuItem>
                    {user.status === 'Active' ? (
                      <DropdownMenuItem className="flex items-center gap-2 text-amber-600">
                        <LucideUserX className="h-4 w-4" />
                        Suspend User
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="flex items-center gap-2 text-green-600">
                        <LucideUserCheck className="h-4 w-4" />
                        Activate User
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
