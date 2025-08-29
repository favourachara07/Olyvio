"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    // Mock notification data
    const notifications = [
        {
            id: 1,
            sender: 'Jacob Paul',
            message: 'Jacob sent you a message',
            description: 'Check the messages sent to you by jacob.',
            time: '12:15',
            avatar: 'JP'
        },
        {
            id: 2,
            sender: 'Martin Luther',
            message: 'Your assignment is ready',
            description: 'Hey, your assignment has been sent to your mail @fgeorgean@gmail.com check your mail to view your assignment.',
            time: '23 Jul',
            avatar: 'ML',
            hasAttachment: true
        },
        {
            id: 3,
            sender: 'Olyvio',
            message: 'Your payment is successful',
            description: 'Your assignment will be sent to you in the next two days.',
            time: '21 Jul',
            avatar: 'O'
        }
    ];

    const ProfileTab = () => (
        <div className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex items-start gap-4">
                <div className="relative">
                    <div className="w-20 h-20 bg-gray-800 rounded-full overflow-hidden">
                        <img
                            src="/api/placeholder/80/80"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Oluwatosin George Fabunmi"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        defaultValue="ftgeorgean@gmail.com"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        defaultValue="+234 704 953 2023"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* University */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        University
                    </label>
                    <div className="relative">
                        <select className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                            <option>Veritas University</option>
                            <option>Other University</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                {/* Department */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Department
                    </label>
                    <input
                        type="text"
                        defaultValue="Computer Science"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Matric Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                        Matric Number
                    </label>
                    <div className="relative">
                        <select className="w-full px-3 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                            <option>VUG/CSC/22/6618</option>
                            <option>Other Matric Number</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );

    const NotificationsTab = () => (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search notification"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        {/* Avatar */}
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                            {notification.avatar}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 mb-1">
                                        {notification.sender}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 mb-1">
                                        {notification.message}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {notification.description}
                                    </p>

                                    {/* Attachment */}
                                    {notification.hasAttachment && (
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                            <span className="text-xs text-gray-600">CSC 416 In...</span>
                                        </div>
                                    )}
                                </div>

                                {/* Time */}
                                <span className="text-xs text-gray-500 flex-shrink-0">
                                    {notification.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                    {['My details', 'Profile', 'Notifications'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab
                                    ? 'border-black text-gray-900'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white">
                {activeTab === 'Profile' && <ProfileTab />}
                {activeTab === 'Notifications' && <NotificationsTab />}
                {activeTab === 'My details' && (
                    <div className="text-center text-gray-500 py-8">
                        My details content would go here
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsPage;