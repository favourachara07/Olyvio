"use client";

import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Circle, ChevronDown, Search, FileText, SlidersHorizontal } from 'lucide-react';

interface Assignment {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'overdue';
    paymentStatus: 'pending' | 'paid' | 'unpaid';
    dueDate: string;
    subject: string;
    priority: 'low' | 'medium' | 'high';
    price: number;
}

const AssignmentTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterStatus, setFilterStatus] = useState('All');
    // Sample data - replace with your actual filteredAssignments
    const filteredAssignments: Assignment[] = [
        {
            id: 1,
            title: "Research Paper on Climate Change",
            subject: "Environmental Science",
            description: "Write a comprehensive 15-page research paper analyzing the impact of climate change on coastal ecosystems, including current mitigation strategies and future recommendations.",
            price: 150,
            priority: "high",
            status: "in-progress",
            paymentStatus: "pending",
            dueDate: "2025-09-10"
        },
        {
            id: 2,
            title: "Data Analysis Project",
            subject: "Statistics",
            description: "Analyze customer behavior data using Python and create visualizations to identify trends and patterns for business decision making.",
            price: 200,
            priority: "medium",
            status: "completed",
            paymentStatus: "paid",
            dueDate: "2025-08-25"
        },
        {
            id: 3,
            title: "Marketing Strategy Presentation",
            subject: "Business",
            description: "Develop a comprehensive marketing strategy for a startup tech company, including market analysis, target audience identification, and campaign proposals.",
            price: 120,
            priority: "low",
            status: "pending",
            paymentStatus: "unpaid",
            dueDate: "2025-09-15"
        }
    ];

    const StatusBadge = ({ status }: { status: Assignment['status'] }) => {
        const statusStyles: Record<Assignment['status'], string> = {
            'pending': 'bg-yellow-50 text-yellow-800 border-yellow-200',
            'in-progress': 'bg-blue-50 text-blue-800 border-blue-200',
            'completed': 'bg-green-50 text-green-800 border-green-200',
            'overdue': 'bg-red-50 text-red-800 border-red-200'
        };

        return (
            <span className={`inline-flex items-center px-1.5 2xl:px-2.5 py-0.5 2xl:py-1 rounded-xl 2xl:rounded-full text-[8px] 2xl:text-xs font-medium border ${statusStyles[status]}`}>
                {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
        );
    };

    const PaymentStatusBadge = ({ paymentStatus }: { paymentStatus: Assignment['paymentStatus'] }) => {
        const paymentStyles: Record<Assignment['paymentStatus'], string> = {
            'paid': 'bg-green-50 text-green-800 border-green-200',
            'pending': 'bg-yellow-50 text-yellow-800 border-yellow-200',
            'unpaid': 'bg-red-50 text-red-800 border-red-200'
        };

        return (
            <span className={`inline-flex items-center px-1.5 2xl:px-2.5 py-0.5 2xl:py-1 rounded-xl 2xl:rounded-full text-[8px] 2xl:text-xs font-medium border ${paymentStyles[paymentStatus]}`}>
                {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
            </span>
        );
    };

    const getStatusIcon = (status: Assignment['status']) => {
        const iconProps = { className: "w-4 h-4" };
        switch (status) {
            case 'completed':
                return <CheckCircle {...iconProps} className="w-4 h-4 text-green-600" />;
            case 'in-progress':
                return <Clock {...iconProps} className="w-4 h-4 text-blue-600" />;
            case 'overdue':
                return <XCircle {...iconProps} className="w-4 h-4 text-red-600" />;
            default:
                return <Circle {...iconProps} className="w-4 h-4 text-yellow-600" />;
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getDaysUntilDue = (dateString: string) => {
        const dueDate = new Date(dateString);
        const today = new Date();
        const diffTime = dueDate.getTime() - today.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const stats = [
        {
            title: "Total Assignments",
            value: filteredAssignments.length,
            icon: <FileText className="size-4 xl:size-6 2xl:size-8 text-black" />,
            color: "text-gray-900",
        },
        {
            title: "Completed",
            value: filteredAssignments.filter(a => a.status === "completed").length,
            icon: <CheckCircle className="size-4 xl:size-6 2xl:size-8 text-green-600" />,
            color: "text-green-600",
        },
        {
            title: "In Progress",
            value: filteredAssignments.filter(a => a.status === "in-progress").length,
            icon: <Clock className="size-4 xl:size-6 2xl:size-8 text-blue-600" />,
            color: "text-blue-600",
        },
        {
            title: "Overdue",
            value: filteredAssignments.filter(a => a.status === "overdue").length,
            icon: <AlertCircle className="size-4 xl:size-6 2xl:size-8 text-red-600" />,
            color: "text-red-600",
        },
    ];

    return (
        <div className='w-full gap-4 2xl:gap-6'>
            <div className="bg-white">
                <div className="w-full">
                    <div className="flex items-center justify-between pb-6">
                        <div>
                            <h1 className="text-sm xl:text-lg 2xl:text-2xl font-bold text-gray-900">Assignment Hub</h1>
                            <p className="text-xs xl:text-sm text-gray-600 2xl:mt-1">Manage your academic assignments and track progress</p>
                        </div>
                        <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-xs sm:text-sm">
                            <span className="hidden lg:block sm:inline">New Assignment</span>
                            <span className="lg:hidden">New</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="w-full">
                <div className="flex flex-row gap-2 2xl:gap-4 mb-6">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6C6C6C] size-4 xl:size-5" />
                        <input
                            type="text"
                            placeholder="Search by ID or title"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 lg:py-1.5 xl:py-2 2xl:py-3 border border-[#D9D9D9] placeholder-[#6C6C6C] rounded-md text-xs xl:text-sm"
                        />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 px-4 py-3 lg:py-1.5 xl:py-2 2xl:py-3 border border-[#D9D9D9] rounded-md hover:bg-gray-50 text-xs xl:text-sm font-medium"
                        >
                            <SlidersHorizontal className="size-4 lg:size-3 2xl:size-4" />
                            {filterStatus}
                            <ChevronDown className="size-4 lg:size-3 2xl:size-4" />
                        </button>

                        {isFilterOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">{stat.title}</p>
                                    <p className={`text-lg sm:text-xl 2xl:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                </div>
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-md xl:rounded-md 2xl:rounded-lg border border-[#D9D9D9] bg-white">
                    <div className="overflow-auto flex-1">
                        <table className="min-w-full">
                            <thead className="bg-[#F9F9F9] text-[#A0A0A0] font-normal text-xs lg:text-[9px] xl:text-[10px] 2xl:text-xs font-montserrat-alternates sticky top-0 z-10">
                                <tr className='whitespace-nowrap'>
                                    <th className="text-center px-3 py-3 font-normal">S/N</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] px-8 py-3 font-normal">Assignment Title</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3 font-normal">Assignment Description</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] lg:px-6 xl:px-8 2xl:px-16 py-3 font-normal">Assignment Status</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] lg:px-6 xl:px-6 2xl:px-16 py-3 font-normal">Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAssignments.map((assignment, index) => (
                                    <tr key={assignment.id} className="border-t text-center border-[#EAEAEA] hover:bg-[#FAFAFA50] text-xs lg:text-[10px] xl:text-sm font-montserrat-alternates">
                                        <td className="px-3 py-3 text-[#A0A0A0] text-xs xl:text-sm">{index + 1}</td>

                                        <td className="px-8 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-[10px] 2xl:text-sm">
                                            <div className="flex items-start gap-3 text-left">
                                                {getStatusIcon(assignment.status)}
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-[8px] 2xl:text-xs text-gray-500">{assignment.subject}</span>
                                                        {/* <PriorityBadge priority={assignment.priority} /> */}
                                                    </div>
                                                    <div className="flex items-center gap-1 mt-1 text-[8px] 2xl:text-xs text-gray-500">
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
                                        </td>

                                        <td className="px-6 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-[10px] 2xl:text-sm text-left">
                                            <p className="text-gray-600 leading-relaxed">
                                                {assignment.description}
                                            </p>
                                            <div className="mt-2 text-green-600 font-medium">
                                                ${assignment.price}
                                            </div>
                                        </td>

                                        <td className="lg:px-6 xl:px-8 2xl:px-14 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">
                                            <StatusBadge status={assignment.status} />
                                        </td>

                                        <td className="lg:px-6 xl:px-6 2xl:px-16 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">
                                            <PaymentStatusBadge paymentStatus={assignment.paymentStatus} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4 mb-24">
                    {filteredAssignments.map((assignment, index) => (
                        <div key={assignment.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            {/* Header with status icon and title */}
                            <div className="flex items-start gap-3 mb-3">
                                {getStatusIcon(assignment.status)}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-gray-900 text-sm leading-tight">{assignment.title}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500">{assignment.subject}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium text-green-600">${assignment.price}</div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
                                {assignment.description}
                            </p>

                            {/* Status badges and due date */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <StatusBadge status={assignment.status} />
                                    <PaymentStatusBadge paymentStatus={assignment.paymentStatus} />
                                </div>
                                
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Calendar className="w-3 h-3" />
                                    <span>{formatDate(assignment.dueDate)}</span>
                                </div>
                            </div>

                            {/* Due date warning */}
                            {getDaysUntilDue(assignment.dueDate) < 0 && (
                                <div className="mt-2 text-xs text-red-600 font-medium">
                                    {Math.abs(getDaysUntilDue(assignment.dueDate))} days overdue
                                </div>
                            )}
                            {getDaysUntilDue(assignment.dueDate) >= 0 && getDaysUntilDue(assignment.dueDate) <= 3 && (
                                <div className="mt-2 text-xs text-orange-600 font-medium">
                                    {getDaysUntilDue(assignment.dueDate)} days left
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssignmentTable;