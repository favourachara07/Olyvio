"use client";

import { useState } from 'react';
import { Search, Filter, ChevronDown, Download, Eye, Calendar, Clock, FileText, CheckCircle, XCircle, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Star, SlidersHorizontal } from 'lucide-react';
import { FaStar } from 'react-icons/fa6';

interface HistoryAssignment {
    id: number;
    title: string;
    description: string;
    subject: string;
    completedDate: string;
    submittedDate: string;
    grade: string;
    paymentAmount: number;
    paymentDate: string;
    paymentMethod: 'card' | 'transfer' | 'paypal';
    clientRating: number;
    feedback: string;
    duration: number; // days to complete
    wordCount?: number;
    attachments: string[];
}

export default function AssignmentHistory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPeriod, setFilterPeriod] = useState('All Time');
    const [filterSubject, setFilterSubject] = useState('All Subjects');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSubjectFilterOpen, setIsSubjectFilterOpen] = useState(false);

    // Sample historical data
    const [assignments] = useState<HistoryAssignment[]>([
        {
            id: 101,
            title: "Machine Learning Research Paper",
            description: "Comprehensive analysis of supervised learning algorithms and their applications in healthcare",
            subject: "Computer Science",
            completedDate: "2025-08-15",
            submittedDate: "2025-08-14",
            grade: "A+",
            paymentAmount: 250,
            paymentDate: "2025-08-16",
            paymentMethod: "card",
            clientRating: 5,
            feedback: "Excellent work! Very thorough research and well-structured paper.",
            duration: 7,
            wordCount: 3500,
            attachments: ["research_paper.pdf", "references.docx"]
        },
        {
            id: 102,
            title: "Financial Market Analysis",
            description: "Stock market trend analysis for Q2 2025 with investment recommendations",
            subject: "Finance",
            completedDate: "2025-07-28",
            submittedDate: "2025-07-27",
            grade: "A",
            paymentAmount: 180,
            paymentDate: "2025-07-29",
            paymentMethod: "paypal",
            clientRating: 4,
            feedback: "Great analysis, minor suggestions for improvement in the conclusion.",
            duration: 5,
            wordCount: 2800,
            attachments: ["analysis_report.pdf", "data_charts.xlsx"]
        },
        {
            id: 103,
            title: "Environmental Impact Study",
            description: "Assessment of renewable energy projects on local ecosystems",
            subject: "Environmental Science",
            completedDate: "2025-07-10",
            submittedDate: "2025-07-09",
            grade: "A-",
            paymentAmount: 200,
            paymentDate: "2025-07-11",
            paymentMethod: "transfer",
            clientRating: 4,
            feedback: "Well researched but could use more visual data representation.",
            duration: 10,
            wordCount: 4200,
            attachments: ["impact_study.pdf", "survey_data.csv"]
        },
        {
            id: 104,
            title: "Marketing Campaign Strategy",
            description: "Digital marketing strategy for emerging e-commerce brand",
            subject: "Marketing",
            completedDate: "2025-06-22",
            submittedDate: "2025-06-21",
            grade: "B+",
            paymentAmount: 150,
            paymentDate: "2025-06-23",
            paymentMethod: "card",
            clientRating: 3,
            feedback: "Good strategy but needs more detailed budget breakdown.",
            duration: 6,
            wordCount: 2500,
            attachments: ["strategy_document.pdf"]
        },
        {
            id: 105,
            title: "Statistical Data Mining Project",
            description: "Data mining techniques applied to customer behavior analysis",
            subject: "Statistics",
            completedDate: "2025-05-18",
            submittedDate: "2025-05-17",
            grade: "A+",
            paymentAmount: 220,
            paymentDate: "2025-05-19",
            paymentMethod: "paypal",
            clientRating: 5,
            feedback: "Outstanding work! Exceeded expectations with innovative approaches.",
            duration: 8,
            wordCount: 3200,
            attachments: ["data_analysis.pdf", "code_scripts.py", "results.xlsx"]
        }
    ]);

    const paymentMethodIcons = {
        card: "💳",
        transfer: "🏦",
        paypal: "💰"
    };

    const gradeColors = {
        "A+": "bg-gray-100 text-gray-800 border-gray-200",
        "A": "bg-gray-100 text-gray-800 border-gray-200",
        "A-": "bg-gray-100 text-gray-800 border-gray-200",
        "B+": "bg-gray-200 text-gray-900 border-gray-300",
        "B": "bg-gray-200 text-gray-900 border-gray-300",
        "B-": "bg-gray-300 text-gray-900 border-gray-400"
    };

    const subjects = [...new Set(assignments.map(a => a.subject))];

    // Calculate stats
    const totalEarnings = assignments.reduce((sum, a) => sum + a.paymentAmount, 0);
    const averageRating = assignments.reduce((sum, a) => sum + a.clientRating, 0) / assignments.length;
    const averageCompletionTime = assignments.reduce((sum, a) => sum + a.duration, 0) / assignments.length;

    const filteredAssignments = assignments.filter(assignment => {
        const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            assignment.subject.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesSubject = filterSubject === 'All Subjects' || assignment.subject === filterSubject;

        // Simple date filtering - in production you'd have more sophisticated filtering
        let matchesPeriod = true;
        if (filterPeriod !== 'All Time') {
            const assignmentDate = new Date(assignment.completedDate);
            const now = new Date();

            switch (filterPeriod) {
                case 'Last Month':
                    matchesPeriod = (now.getTime() - assignmentDate.getTime()) <= (30 * 24 * 60 * 60 * 1000);
                    break;
                case 'Last 3 Months':
                    matchesPeriod = (now.getTime() - assignmentDate.getTime()) <= (90 * 24 * 60 * 60 * 1000);
                    break;
                case 'Last 6 Months':
                    matchesPeriod = (now.getTime() - assignmentDate.getTime()) <= (180 * 24 * 60 * 60 * 1000);
                    break;
            }
        }

        return matchesSearch && matchesSubject && matchesPeriod;
    });

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const renderStars = (rating: number) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const GradeBadge = ({ grade }: { grade: string }) => {
        return (
            <span className={`inline-flex items-center px-1.5 2xl:px-2.5 py-0.5 2xl:py-1 rounded-xl 2xl:rounded-full text-[8px] 2xl:text-xs font-medium border ${gradeColors[grade as keyof typeof gradeColors] || 'bg-gray-100 text-gray-800'}`}>
                {grade}
            </span>
        );
    };

    const PaymentMethodBadge = ({ method, amount }: { method: HistoryAssignment['paymentMethod'], amount: number }) => {
        const methodStyles = {
            card: 'bg-gray-100 text-gray-800 border-gray-200',
            transfer: 'bg-gray-100 text-gray-800 border-gray-200',
            paypal: 'bg-gray-200 text-gray-900 border-gray-300'
        };

        return (
            <div className="text-center">
                <div className="text-sm xl:text-base 2xl:text-lg font-bold text-gray-800 mb-1">${amount}</div>
                <span className={`inline-flex items-center px-1.5 2xl:px-2.5 py-0.5 2xl:py-1 rounded-xl 2xl:rounded-full text-[8px] 2xl:text-xs font-medium border ${methodStyles[method]}`}>
                    {method.charAt(0).toUpperCase() + method.slice(1)}
                </span>
            </div>
        );
    };

    const RatingDisplay = ({ rating, feedback }: { rating: number, feedback: string }) => {
        return (
            <div className="text-center">
                <div className="text-lg text-gray-700 2xl:text-xl mb-1">
                    {renderStars(rating).replace(/★/g, '★').replace(/☆/g, '☆')}
                </div>
                <div className="text-[8px] 2xl:text-xs text-gray-500">({rating}/5)</div>
                {feedback && (
                    <div className="mt-2 text-[8px] 2xl:text-xs text-gray-500 italic max-w-32 2xl:max-w-40 mx-auto">
                        "{feedback.length > 50 ? feedback.substring(0, 50) + '...' : feedback}"
                    </div>
                )}
            </div>
        );
    };

    const stats = [
        {
            title: "Total Completed",
            value: assignments.length,
            icon: <CheckCircle className="size-4 xl:size-6 2xl:size-8 text-gray-700" />,
            color: "text-gray-800",
            change: "+12% this month",
            changeIcon: <TrendingUp className="w-3 h-3 text-gray-700" />,
            changeColor: "text-gray-700"
        },
        {
            title: "Total Earnings",
            value: `$${totalEarnings.toLocaleString()}`,
            icon: <DollarSign className="size-4 xl:size-6 2xl:size-8 text-gray-700" />,
            color: "text-gray-800",
            change: "+8% this month",
            changeIcon: <ArrowUpRight className="w-3 h-3 text-gray-700" />,
            changeColor: "text-gray-700"
        },
        {
            title: "Average Rating",
            value: averageRating.toFixed(1),
            icon: <FaStar className="size-4 xl:size-6 2xl:size-8 text-gray-700"/>,
            color: "text-gray-800",
            change: renderStars(Math.round(averageRating)).replace(/★/g, '★').replace(/☆/g, '☆'),
            changeColor: "text-gray-700"
        },
        {
            title: "Avg. Completion",
            value: `${averageCompletionTime.toFixed(1)} days`,
            icon: <Clock className="size-4 xl:size-6 2xl:size-8 text-gray-700" />,
            color: "text-gray-800",
            change: "-2 days vs last month",
            changeIcon: <Clock className="w-3 h-3 text-gray-700" />,
            changeColor: "text-gray-700"
        },
    ];

    return (
        <div className='w-full gap-4 2xl:gap-6'>
            {/* Header */}
            <div className="bg-white">
                <div className="w-full">
                    <div className="flex items-center justify-between pb-6">
                        <div>
                            <h1 className="text-sm xl:text-lg 2xl:text-2xl font-bold text-gray-800">Assignment History</h1>
                            <p className="text-xs xl:text-sm text-gray-500 2xl:mt-1">Track your completed assignments and performance metrics</p>
                        </div>
                        <button className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-xs sm:text-sm">
                            <span className="hidden lg:block sm:inline">Export Report</span>
                            <span className="lg:hidden">Export</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                {/* Stats Overview */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] sm:text-xs 2xl:text-sm text-gray-600">{stat.title}</p>
                                    <p className={`text-lg sm:text-xl 2xl:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                    {stat.change && (
                                        <p className={`text-xs ${stat.changeColor} flex items-center gap-1 mt-1`}>
                                            {stat.changeIcon}
                                            {stat.change}
                                        </p>
                                    )}
                                </div>
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filters and Search */}
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

                    {/* Time Period Filter */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 px-4 py-3 lg:py-1.5 xl:py-2 2xl:py-3 border border-[#D9D9D9] rounded-md hover:bg-gray-50 text-xs xl:text-sm font-medium"
                        >
                            <Calendar className="size-4 lg:size-3 2xl:size-4" />
                            {filterPeriod}
                            <ChevronDown className="size-4 lg:size-3 2xl:size-4" />
                        </button>

                        {isFilterOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {['All Time', 'Last Month', 'Last 3 Months', 'Last 6 Months'].map((period) => (
                                    <button
                                        key={period}
                                        onClick={() => {
                                            setFilterPeriod(period);
                                            setIsFilterOpen(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Subject Filter */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSubjectFilterOpen(!isSubjectFilterOpen)}
                            className="flex items-center gap-2 px-4 py-3 lg:py-1.5 xl:py-2 2xl:py-3 border border-[#D9D9D9] rounded-md hover:bg-gray-50 text-xs xl:text-sm font-medium"
                        >
                            <SlidersHorizontal className="size-4 lg:size-3 2xl:size-4" />
                            {filterSubject}
                            <ChevronDown className="size-4 lg:size-3 2xl:size-4" />
                        </button>

                        {isSubjectFilterOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {['All Subjects', ...subjects].map((subject) => (
                                    <button
                                        key={subject}
                                        onClick={() => {
                                            setFilterSubject(subject);
                                            setIsSubjectFilterOpen(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {subject}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-md xl:rounded-md 2xl:rounded-lg border border-[#D9D9D9] bg-white">
                    <div className="overflow-auto flex-1">
                        <table className="min-w-full">
                            <thead className="bg-[#F9F9F9] text-[#A0A0A0] font-normal text-xs lg:text-[9px] xl:text-[10px] 2xl:text-xs font-montserrat-alternates sticky top-0 z-10">
                                <tr className='whitespace-nowrap'>
                                    <th className="text-center px-3 py-3 font-normal">S/N</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] px-8 py-3 font-normal">Assignment Details</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3 font-normal">Description & Meta</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] lg:px-6 xl:px-8 2xl:px-16 py-3 font-normal">Grade & Rating</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] lg:px-6 xl:px-6 2xl:px-16 py-3 font-normal">Payment Info</th>
                                    <th className="text-center border-l border-l-[#EAEAEA] px-6 py-3 font-normal">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAssignments.map((assignment, index) => (
                                    <tr key={assignment.id} className="border-t text-center border-[#EAEAEA] hover:bg-[#FAFAFA50] text-xs lg:text-[10px] xl:text-sm font-montserrat-alternates">
                                        <td className="px-3 py-3 text-[#A0A0A0] text-xs xl:text-sm">{index + 1}</td>

                                        <td className="px-8 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-[10px] 2xl:text-sm">
                                            <div className="flex items-start gap-3 text-left">
                                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-[8px] 2xl:text-xs text-gray-500">{assignment.subject}</span>
                                                        <span className="text-[8px] 2xl:text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-800">
                                                            ID: #{assignment.id}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1 mt-1 text-[8px] 2xl:text-xs text-gray-500">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>Completed: {formatDate(assignment.completedDate)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-[10px] 2xl:text-sm text-left">
                                            <p className="text-gray-600 leading-relaxed mb-2">
                                                {assignment.description.length > 80 ? assignment.description.substring(0, 80) + '...' : assignment.description}
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-[8px] 2xl:text-xs text-gray-500">
                                                <div>Duration: {assignment.duration} days</div>
                                                <div>Words: {assignment.wordCount?.toLocaleString() || 'N/A'}</div>
                                                <div>Files: {assignment.attachments.length}</div>
                                                <div>Submitted: {formatDate(assignment.submittedDate)}</div>
                                            </div>
                                        </td>

                                        <td className="lg:px-6 xl:px-8 2xl:px-14 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">
                                            <div className="space-y-2">
                                                <GradeBadge grade={assignment.grade} />
                                                <RatingDisplay rating={assignment.clientRating} feedback={assignment.feedback} />
                                            </div>
                                        </td>

                                        <td className="lg:px-6 xl:px-6 2xl:px-16 border-l border-l-[#EAEAEA] py-3 text-xs lg:text-[10px] xl:text-sm">
                                            <PaymentMethodBadge method={assignment.paymentMethod} amount={assignment.paymentAmount} />
                                            <div className="text-[8px] 2xl:text-xs text-gray-500 mt-1">
                                                Paid: {formatDate(assignment.paymentDate)}
                                            </div>
                                        </td>

                                        <td className="px-6 border-l border-l-[#EAEAEA] py-3">
                                            <div className="flex flex-col gap-1">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-[8px] 2xl:text-xs flex items-center justify-center gap-1 transition-colors">
                                                    <Eye className="w-3 h-3" />
                                                    View
                                                </button>
                                                <button className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded text-[8px] 2xl:text-xs flex items-center justify-center gap-1 transition-colors">
                                                    <Download className="w-3 h-3" />
                                                    Download
                                                </button>
                                            </div>
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
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-gray-900 text-sm leading-tight">{assignment.title}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-500">{assignment.subject}</span>
                                        <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-800">ID: #{assignment.id}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium text-green-600">${assignment.paymentAmount}</div>
                                    <GradeBadge grade={assignment.grade} />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
                                {assignment.description}
                            </p>

                            {/* Metadata grid */}
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                                <div>Completed: {formatDate(assignment.completedDate)}</div>
                                <div>Duration: {assignment.duration} days</div>
                                <div>Words: {assignment.wordCount?.toLocaleString() || 'N/A'}</div>
                                <div>Files: {assignment.attachments.length}</div>
                            </div>

                            {/* Rating and payment info */}
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="text-sm">{renderStars(assignment.clientRating)} ({assignment.clientRating}/5)</div>
                                    <div className="text-xs text-gray-500 capitalize">{assignment.paymentMethod} payment</div>
                                </div>
                                <div className="text-xs text-gray-500">
                                    Paid: {formatDate(assignment.paymentDate)}
                                </div>
                            </div>

                            {/* Feedback */}
                            {assignment.feedback && (
                                <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 italic mb-3">
                                    "{assignment.feedback}"
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm flex items-center justify-center gap-2 transition-colors">
                                    <Eye className="w-4 h-4" />
                                    View
                                </button>
                                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded text-sm flex items-center justify-center gap-2 transition-colors">
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
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