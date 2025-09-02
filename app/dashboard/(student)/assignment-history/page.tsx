"use client";

import { useState } from 'react';
import { Search, Filter, ChevronDown, Download, Eye, Calendar, Clock, FileText, CheckCircle, XCircle, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

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
        "A+": "bg-green-100 text-green-800 border-green-200",
        "A": "bg-green-100 text-green-700 border-green-200",
        "A-": "bg-green-50 text-green-700 border-green-200",
        "B+": "bg-blue-100 text-blue-800 border-blue-200",
        "B": "bg-blue-50 text-blue-700 border-blue-200",
        "B-": "bg-yellow-100 text-yellow-700 border-yellow-200"
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

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="bg-white">
                <div className="w-full">
                    <div className="flex items-center justify-between py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Assignment History</h1>
                            <p className="text-sm text-gray-600 mt-1">Track your completed assignments and performance metrics</p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                            {/* <Download className="w-4 h-4" /> */}
                            Export Report
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full py-6">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm lg:text-xs xl:text-sm 2xl:text-sm text-gray-600">Total Completed</p>
                                <p className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900">{assignments.length}</p>
                                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                    <TrendingUp className="w-3 h-3" />
                                    +12% this month
                                </p>
                            </div>
                            <CheckCircle className="size-6 lg:size-4 xl:size-6 2xl:size-8 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm lg:text-xs xl:text-sm 2xl:text-sm text-gray-600">Total Earnings</p>
                                <p className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900">${totalEarnings.toLocaleString()}</p>
                                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                                    <ArrowUpRight className="w-3 h-3" />
                                    +8% this month
                                </p>
                            </div>
                            <DollarSign className="size-6 lg:size-4 xl:size-6 2xl:size-8 text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Average Rating</p>
                                <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
                                <p className="text-xs text-yellow-600">{renderStars(Math.round(averageRating))}</p>
                            </div>
                            <div className="text-2xl">⭐</div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">Avg. Completion</p>
                                <p className="text-2xl font-bold text-gray-900">{averageCompletionTime.toFixed(1)} days</p>
                                <p className="text-xs text-blue-600 flex items-center gap-1 mt-1">
                                    <Clock className="w-3 h-3" />
                                    -2 days vs last month
                                </p>
                            </div>
                            <Clock className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search assignments or subjects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                    </div>

                    {/* Time Period Filter */}
                    <div className="relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
                        >
                            <Calendar className="w-4 h-4" />
                            {filterPeriod}
                            <ChevronDown className="w-4 h-4" />
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
                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium"
                        >
                            <Filter className="w-4 h-4" />
                            {filterSubject}
                            <ChevronDown className="w-4 h-4" />
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

                {/* History Cards */}
                <div className="space-y-4">
                    {filteredAssignments.map((assignment) => (
                        <div key={assignment.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                {/* Left Column - Assignment Details */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{assignment.title}</h3>
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <span className="bg-gray-100 px-2 py-1 rounded">{assignment.subject}</span>
                                                <span>ID: #{assignment.id}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${gradeColors[assignment.grade as keyof typeof gradeColors] || 'bg-gray-100 text-gray-800'}`}>
                                                Grade: {assignment.grade}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 leading-relaxed">{assignment.description}</p>

                                    {/* Metadata */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-500">Completed</p>
                                            <p className="font-medium">{formatDate(assignment.completedDate)}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Duration</p>
                                            <p className="font-medium">{assignment.duration} days</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Word Count</p>
                                            <p className="font-medium">{assignment.wordCount?.toLocaleString() || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Attachments</p>
                                            <p className="font-medium">{assignment.attachments.length} files</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Payment & Rating */}
                                <div className="lg:w-80 bg-gray-50 rounded-lg p-4">
                                    <div className="space-y-4">
                                        {/* Payment Info */}
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Payment Details</h4>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-2xl font-bold text-green-600">${assignment.paymentAmount}</span>
                                                <span className="text-lg">{paymentMethodIcons[assignment.paymentMethod]}</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Paid on {formatDate(assignment.paymentDate)}</p>
                                        </div>

                                        {/* Rating */}
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-2">Client Rating</h4>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg">{renderStars(assignment.clientRating)}</span>
                                                <span className="text-sm text-gray-600">({assignment.clientRating}/5)</span>
                                            </div>
                                            {assignment.feedback && (
                                                <p className="text-xs text-gray-600 italic bg-white p-2 rounded border-l-2 border-blue-200">
                                                    "{assignment.feedback}"
                                                </p>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-2 pt-2 border-t border-gray-200">
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
                                </div>
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