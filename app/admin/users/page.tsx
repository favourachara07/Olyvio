'use client';

import { useState } from 'react';
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { LucidePlus } from "lucide-react";
import { UsersTable } from './UsersTable';
import { UsersFilters } from './UsersFilters';

export type UserRole = 'All' | 'Student' | 'Expert' | 'Admin';
export type UserStatus = 'All' | 'Active' | 'Suspended' | 'Pending';

export interface User {
  id: number;
  name: string;
  role: UserRole;
  email: string;
  status: UserStatus;
  lastActive: string;
  joinDate: string;
  avatar?: string;
}

// Mock user data
const users: User[] = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    role: "Student", 
    email: "alex@uni.edu", 
    status: "Active",
    lastActive: "2 hours ago",
    joinDate: "Jan 15, 2023",
    avatar: "/avatars/1.png"
  },
  { 
    id: 2, 
    name: "Maya Patel", 
    role: "Expert", 
    email: "maya@olyvio.com", 
    status: "Active",
    lastActive: "30 minutes ago",
    joinDate: "Mar 2, 2023",
    avatar: "/avatars/2.png"
  },
  { 
    id: 3, 
    name: "Leo Kim", 
    role: "Student", 
    email: "leo@uni.edu", 
    status: "Suspended",
    lastActive: "5 days ago",
    joinDate: "Feb 10, 2023",
    avatar: "/avatars/3.png"
  },
];

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<UserRole>('All');
  const [statusFilter, setStatusFilter] = useState<UserStatus>('All');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId) 
        : [...prev, userId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const getStatusBadgeVariant = (status: UserStatus) => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Suspended':
        return 'destructive';
      case 'Pending':
        return 'warning';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#333333]">User Management</h2>
          <p className="text-[#666666] text-sm">Manage all users, experts, and administrators</p>
        </div>
        <Button className="bg-[#0096FF] hover:bg-[#0080E5] text-white">
          <LucidePlus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      <UsersFilters 
        searchQuery={searchQuery}
        roleFilter={roleFilter}
        statusFilter={statusFilter}
        onSearchChange={setSearchQuery}
        onRoleFilterChange={setRoleFilter as (value: string) => void}
        onStatusFilterChange={setStatusFilter as (value: string) => void}
      />

      <Card>
        <div className="p-6 border-b border-[#E6E6E6]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Users ({filteredUsers.length})</h3>
          </div>
        </div>
        
        <UsersTable 
          users={filteredUsers}
          selectedUsers={selectedUsers}
          onUserSelect={toggleUserSelection}
          onSelectAll={toggleSelectAll}
          getStatusBadgeVariant={getStatusBadgeVariant}
        />
      </Card>
    </div>
  );
}
