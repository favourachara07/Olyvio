"use client";

import { useState } from 'react';
import { Search, Filter, ChevronDown, Plus, Calendar, Clock, FileText, CheckCircle, AlertCircle, Circle, SlidersVertical } from 'lucide-react';

interface Assignment {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'overdue';
    paymentStatus: 'pending' | 'completed' | 'failed';
    dueDate: string;
    subject: string;
    priority: 'low' | 'medium' | 'high';
    price: number;
}

export default function AssignmentHub() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Sample data - in production this would come from an API
    const [assignments] = useState<Assignment[]>([
        {
            id: 1,
            title: "Research Paper on AI",
            description: "Create a note that should be able to comprehensively analyze the impact of artificial intelligence on modern society",
            status: "pending",
            paymentStatus: "completed",
            dueDate: "2025-09-05",
            subject: "Computer Science",
            priority: "high",
            price: 150
        },
        {
            id: 2,
            title: "Marketing Strategy Analysis",
            description: "Develop a comprehensive marketing strategy for a startup company in the tech industry",
            status: "in-progress",
            paymentStatus: "completed",
            dueDate: "2025-09-08",
            subject: "Business",
            priority: "medium",
            price: 200
        },
        {
            id: 3,
            title: "Literature Review on Climate Change",
            description: "Conduct an extensive literature review on climate change impacts on coastal communities",
            status: "completed",
            paymentStatus: "completed",
            dueDate: "2025-08-28",
            subject: "Environmental Science",
            priority: "medium",
            price: 120
        },
        {
            id: 4,
            title: "Statistical Data Analysis",
            description: "Perform statistical analysis on provided dataset using SPSS and Python",
            status: "overdue",
            paymentStatus: "pending",
            dueDate: "2025-08-25",
            subject: "Statistics",
            priority: "high",
            price: 180
        }
    ]);

    const statusColors = {
        pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
        "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
        completed: "bg-green-100 text-green-800 border-green-200",
        overdue: "bg-red-100 text-red-800 border-red-200"
    };

    const paymentStatusColors = {
        pending: "bg-orange-100 text-orange-800 border-orange-200",
        completed: "bg-green-100 text-green-800 border-green-200",
        failed: "bg-red-100 text-red-800 border-red-200"
    };

    const priorityColors = {
        low: "bg-gray-100 text-gray-800",
        medium: "bg-yellow-100 text-yellow-800",
        high: "bg-red-100 text-red-800"
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-4 h-4 text-green-600" />;
            case 'in-progress':
                return <Clock className="w-4 h-4 text-blue-600" />;
            case 'overdue':
                return <AlertCircle className="w-4 h-4 text-red-600" />;
            default:
                return <Circle className="w-4 h-4 text-yellow-600" />;
        }
    };

    const filteredAssignments = assignments.filter(assignment => {
        const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            assignment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            assignment.subject.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterStatus === 'All' ||
            assignment.status === filterStatus.toLowerCase().replace(' ', '-');

        return matchesSearch && matchesFilter;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getDaysUntilDue = (dateString: string) => {
        const today = new Date();
        const dueDate = new Date(dateString);
        const diffTime = dueDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-white">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Assignment Hub</h1>
                            <p className="text-sm text-gray-600 mt-1">Manage your academic assignments and track progress</p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                            <Plus className="w-4 h-4" />
                            New Assignment
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search by ID or title"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
                        >
                            <SlidersVertical className="w-4 h-4" />
                            {filterStatus}
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {isFilterOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {['All', 'Pending', 'In Progress', 'Completed', 'Overdue'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => {
                                            setFilterStatus(status);
                                            setIsFilterOpen(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Total Assignments</p>
                                <p className="text-2xl font-bold text-gray-900">{assignments.length}</p>
                            </div>
                            <FileText className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Completed</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {assignments.filter(a => a.status === 'completed').length}
                                </p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">In Progress</p>
                                <p className="text-2xl font-bold text-blue-600">
                                    {assignments.filter(a => a.status === 'in-progress').length}
                                </p>
                            </div>
                            <Clock className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Overdue</p>
                                <p className="text-2xl font-bold text-red-600">
                                    {assignments.filter(a => a.status === 'overdue').length}
                                </p>
                            </div>
                            <AlertCircle className="w-8 h-8 text-red-600" />
                        </div>
                    </div>
                </div>

                {/* Assignments Table */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-sm font-medium text-gray-500">
                            <div className="lg:col-span-1">S/N</div>
                            <div className="lg:col-span-3">Assignment Title</div>
                            <div className="lg:col-span-4">Assignment Description</div>
                            <div className="lg:col-span-2">Assignment Status</div>
                            <div className="lg:col-span-2">Payment Status</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-200">
                        {filteredAssignments.map((assignment, index) => (
                            <div key={assignment.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                                    {/* S/N */}
                                    <div className="lg:col-span-1">
                                        <span className="text-sm font-medium text-gray-900">{index + 1}</span>
                                    </div>

                                    {/* Assignment Title */}
                                    <div className="lg:col-span-3">
                                        <div className="flex items-start gap-3">
                                            {getStatusIcon(assignment.status)}
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900">{assignment.title}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-gray-500">{assignment.subject}</span>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[assignment.priority]}`}>
                                                        {assignment.priority}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>Due: {formatDate(assignment.dueDate)}</span>
                                                    {getDaysUntilDue(assignment.dueDate) < 0 && (
                                                        <span className="text-red-600 font-medium">
                                                            ({Math.abs(getDaysUntilDue(assignment.dueDate))} days overdue)
                                                        </span>
                                                    )}
                                                    {getDaysUntilDue(assignment.dueDate) >= 0 && getDaysUntilDue(assignment.dueDate) <= 3 && (
                                                        <span className="text-orange-600 font-medium">
                                                            ({getDaysUntilDue(assignment.dueDate)} days left)
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Assignment Description */}
                                    <div className="lg:col-span-4">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {assignment.description}
                                        </p>
                                        <div className="mt-2 text-xs text-green-600 font-medium">
                                            ${assignment.price}
                                        </div>
                                    </div>

                                    {/* Assignment Status */}
                                    <div className="lg:col-span-2">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[assignment.status]}`}>
                                            {assignment.status === 'in-progress' ? 'In Progress' :
                                                assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                                        </span>
                                    </div>

                                    {/* Payment Status */}
                                    <div className="lg:col-span-2">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${paymentStatusColors[assignment.paymentStatus]}`}>
                                            {assignment.paymentStatus.charAt(0).toUpperCase() + assignment.paymentStatus.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Empty State */}
                {filteredAssignments.length === 0 && (
                    <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}