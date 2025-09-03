"use client";

import { useState } from 'react';
import { Search, MoreVertical, Send, Plus, X, Phone, Video, Bell, Archive, Shield, Trash2 } from 'lucide-react';

interface ChatMessage {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
    avatar: string;
}

interface ChatContact {
    id: number;
    name: string;
    lastMessage: string;
    timestamp: string;
    avatar: string;
    isOnline?: boolean;
    phone?: string;
    about?: string;
    joinedDate?: string;
    role?: string;
}

export default function ChatInterface() {
    const [selectedChat, setSelectedChat] = useState<number>(1);
    const [messageInput, setMessageInput] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showProfile, setShowProfile] = useState<boolean>(false);

    // Sample expert support contacts
    const [contacts] = useState<ChatContact[]>([
        {
            id: 1,
            name: "Dr. Sarah Wilson",
            lastMessage: "I'll review your research methodology and get back to you",
            timestamp: "10:45",
            avatar: "SW",
            isOnline: true,
            phone: "+1 (555) 123-4567",
            about: "PhD in Computer Science, AI Research Specialist",
            joinedDate: "January 15, 2020",
            role: "AI Research Expert"
        },
        {
            id: 2,
            name: "Prof. Ahmed Hassan",
            lastMessage: "The statistical analysis looks comprehensive",
            timestamp: "Yesterday",
            avatar: "AH",
            phone: "+1 (555) 987-6543",
            about: "Professor of Statistics and Data Science",
            joinedDate: "March 22, 2018",
            role: "Statistics Expert"
        },
        {
            id: 3,
            name: "Dr. Maria Garcia",
            lastMessage: "Your literature review needs more recent sources",
            timestamp: "12:25",
            avatar: "MG",
            isOnline: true,
            phone: "+1 (555) 456-7890",
            about: "Environmental Science Research Director",
            joinedDate: "July 8, 2019",
            role: "Environmental Science Expert"
        },
        {
            id: 4,
            name: "Dr. James Chen",
            lastMessage: "The financial model assumptions are solid",
            timestamp: "2 days ago",
            avatar: "JC",
            phone: "+1 (555) 321-0987",
            about: "Finance Professor and Investment Advisor",
            joinedDate: "November 3, 2021",
            role: "Finance Expert"
        }
    ]);

    // Sample messages for selected chat
    const [messages] = useState<ChatMessage[]>([
        {
            id: 1,
            sender: "other",
            message: "Hi! I've reviewed your research proposal. The methodology is solid, but I have a few suggestions for improvement.",
            timestamp: "Today",
            avatar: "SW"
        },
        {
            id: 2,
            sender: "me",
            message: "Thank you for the quick review! I'd love to hear your suggestions.",
            timestamp: "10:35",
            avatar: "ME"
        },
        {
            id: 3,
            sender: "other",
            message: "First, consider expanding your literature review to include more recent publications from 2024-2025. Second, your sample size calculation needs adjustment.",
            timestamp: "10:38",
            avatar: "SW"
        },
        {
            id: 4,
            sender: "me",
            message: "Those are excellent points. Could you recommend some specific journals or papers I should look at?",
            timestamp: "10:40",
            avatar: "ME"
        }
    ]);

    const selectedContact = contacts.find(contact => contact.id === selectedChat);

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            console.log('Sending message:', messageInput);
            setMessageInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleProfileClick = () => {
        setShowProfile(true);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-white relative overflow-hidden">
            {/* Left Sidebar - Contacts List */}
            <div className={`${showProfile ? 'hidden lg:flex' : 'flex'} w-full lg:w-80 xl:w-96 border-r border-gray-200 flex-col bg-white transition-all duration-300`}>
                {/* Header */}
                <div className="border-b border-gray-100 bg-white">
                    <h1 className="text-sm xl:text-lg 2xl:text-xl font-bold text-black mb-2 xl:mb-4">Expert Support</h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-3 xl:size-4" />
                        <input
                            type="text"
                            placeholder="Search experts"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-8 xl:pl-10 pr-4 py-2 xl:py-3 bg-gray-50 border-0 rounded-lg xl:rounded-xl text-xs xl:text-sm focus:outline-none focus:ring-2 focus:ring-black focus:bg-white placeholder-gray-500 transition-all"
                        />
                    </div>
                </div>

                {/* Experts List */}
                <div className="flex-1 overflow-y-auto">
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedChat(contact.id)}
                            className={`p-2 xl:p-3 2xl:p-4 cursor-pointer hover:bg-gray-50 transition-colors border-l-4 ${selectedChat === contact.id 
                                ? 'bg-gray-50 border-l-black' 
                                : 'border-l-transparent'
                            }`}
                        >
                            <div className="flex items-center space-x-2 xl:space-x-3">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="size-8 xl:size-10 2xl:size-12 bg-black rounded-full flex items-center justify-center text-white text-xs xl:text-sm font-bold shadow-sm">
                                        {contact.avatar}
                                    </div>
                                    {contact.isOnline && (
                                        <div className="absolute -bottom-0.5 -right-0.5 size-2 xl:size-3 2xl:size-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>

                                {/* Expert Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-xs xl:text-sm font-bold text-black truncate">
                                            {contact.name}
                                        </h3>
                                        <span className="text-[8px] xl:text-xs text-gray-500 ml-2 flex-shrink-0">
                                            {contact.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-[8px] xl:text-xs 2xl:text-sm text-gray-600 font-medium mb-1">
                                        {contact.role}
                                    </p>
                                    <p className="text-[8px] xl:text-xs text-gray-500 truncate">
                                        {contact.lastMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${showProfile ? 'lg:mr-80 xl:mr-96' : ''} h-screen`}>
                {selectedContact ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-3 xl:p-4 2xl:p-6 border-b border-gray-200 bg-white shadow-sm flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div 
                                    className="flex items-center space-x-2 xl:space-x-3 cursor-pointer hover:bg-gray-50 p-1 xl:p-2 -m-1 xl:-m-2 rounded-lg transition-colors"
                                    onClick={handleProfileClick}
                                >
                                    <div className="size-8 xl:size-10 2xl:size-12 bg-black rounded-full flex items-center justify-center text-white text-xs xl:text-sm font-bold">
                                        {selectedContact.avatar}
                                    </div>
                                    <div>
                                        <h2 className="text-sm xl:text-lg font-bold text-black">
                                            {selectedContact.name}
                                        </h2>
                                        <p className="text-[8px] xl:text-xs 2xl:text-sm text-gray-600 font-medium">
                                            {selectedContact.role}
                                        </p>
                                        <p className="text-[8px] xl:text-xs text-green-500">
                                            {selectedContact.isOnline ? 'Online now' : 'Last seen recently'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1 xl:space-x-2">
                                    <button className="p-1 xl:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Phone className="size-3 xl:size-4 2xl:size-5" />
                                    </button>
                                    <button className="p-1 xl:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                        <Video className="size-3 xl:size-4 2xl:size-5" />
                                    </button>
                                    <button className="p-1 xl:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                        <MoreVertical className="size-3 xl:size-4 2xl:size-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-3 xl:p-4 2xl:p-6 bg-gray-50">
                            <div className="space-y-3 xl:space-y-4 max-w-4xl mx-auto">
                                {messages.map((message) => (
                                    <div key={message.id}>
                                        {/* Date separator */}
                                        {message.id === 1 && (
                                            <div className="flex justify-center mb-4 xl:mb-6">
                                                <span className="text-[8px] xl:text-xs text-gray-500 bg-white px-2 xl:px-4 py-1 xl:py-2 rounded-full shadow-sm">
                                                    {message.timestamp}
                                                </span>
                                            </div>
                                        )}

                                        <div className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg ${message.sender === 'me'
                                                    ? 'bg-black text-white ml-8 xl:ml-12'
                                                    : 'bg-white text-gray-900 mr-8 xl:mr-12 shadow-sm'
                                                } rounded-xl xl:rounded-2xl px-3 xl:px-4 py-2 xl:py-3 transition-all hover:shadow-md`}>
                                                <p className="text-xs xl:text-sm leading-relaxed">{message.message}</p>
                                                <div className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} mt-1`}>
                                                    <span className={`text-[8px] xl:text-xs ${message.sender === 'me' ? 'text-gray-300' : 'text-gray-500'}`}>
                                                        {message.timestamp}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Message Input - Fixed at bottom */}
                        <div className="p-3 xl:p-4 2xl:p-6 bg-white border-t border-gray-200 flex-shrink-0">
                            <div className="max-w-4xl mx-auto">
                                <div className="flex items-end space-x-2 xl:space-x-3">
                                    <button className="p-2 xl:p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
                                        <Plus className="size-3 xl:size-4 2xl:size-5" />
                                    </button>

                                    <div className="flex-1 relative">
                                        <textarea
                                            value={messageInput}
                                            onChange={(e) => setMessageInput(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Ask your expert a question..."
                                            rows={1}
                                            className="w-full px-3 xl:px-4 py-2 xl:py-3 border border-gray-200 bg-gray-50 rounded-lg xl:rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-black focus:bg-white text-xs xl:text-sm placeholder-gray-500 transition-all"
                                            style={{ minHeight: '40px', maxHeight: '120px' }}
                                        />
                                    </div>

                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!messageInput.trim()}
                                        className={`p-2 xl:p-3 rounded-full transition-all flex-shrink-0 ${messageInput.trim()
                                                ? 'bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105'
                                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        <Send className="size-3 xl:size-4 2xl:size-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="flex-1 flex items-center justify-center bg-white">
                        <div className="text-center p-6 xl:p-8">
                            <div className="size-16 xl:size-20 bg-black rounded-full mx-auto mb-4 xl:mb-6 flex items-center justify-center shadow-lg">
                                <Search className="size-6 xl:size-8 text-white" />
                            </div>
                            <h3 className="text-lg xl:text-xl font-bold text-black mb-2 xl:mb-3">
                                Expert Support
                            </h3>
                            <p className="text-gray-500 text-xs xl:text-sm max-w-sm mx-auto">
                                Select an expert from the sidebar to start getting professional help with your assignments
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Profile Sidebar - Slides in from right */}
            <div className={`fixed top-0 right-0 h-full w-full lg:w-80 xl:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
                {selectedContact && (
                    <div className="flex flex-col h-full">
                        {/* Profile Header */}
                        <div className="p-4 xl:p-6 border-b border-gray-200 bg-black text-white">
                            <div className="flex items-center justify-between mb-3 xl:mb-4">
                                <h2 className="text-sm xl:text-lg font-bold">Expert Profile</h2>
                                <button 
                                    onClick={() => setShowProfile(false)}
                                    className="p-1 xl:p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                                >
                                    <X className="size-4 xl:size-5" />
                                </button>
                            </div>
                            
                            {/* Profile Avatar and Name */}
                            <div className="text-center">
                                <div className="size-16 xl:size-20 2xl:size-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-lg xl:text-xl 2xl:text-2xl font-bold mx-auto mb-3 xl:mb-4 shadow-lg">
                                    {selectedContact.avatar}
                                </div>
                                <h3 className="text-lg xl:text-xl font-bold">{selectedContact.name}</h3>
                                <p className="text-xs xl:text-sm text-gray-300 font-medium mt-1">
                                    {selectedContact.role}
                                </p>
                                <p className="text-gray-400 text-xs xl:text-sm mt-1">
                                    {selectedContact.isOnline ? 'Available now' : 'Last seen recently'}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="p-4 xl:p-6 border-b border-gray-100">
                            <div className="grid grid-cols-3 gap-2 xl:gap-4">
                                <button className="flex flex-col items-center p-2 xl:p-4 hover:bg-gray-50 rounded-lg xl:rounded-xl transition-colors">
                                    <Phone className="size-4 xl:size-5 2xl:size-6 text-green-500 mb-1 xl:mb-2" />
                                    <span className="text-[8px] xl:text-xs text-gray-700">Call</span>
                                </button>
                                <button className="flex flex-col items-center p-2 xl:p-4 hover:bg-gray-50 rounded-lg xl:rounded-xl transition-colors">
                                    <Video className="size-4 xl:size-5 2xl:size-6 text-blue-500 mb-1 xl:mb-2" />
                                    <span className="text-[8px] xl:text-xs text-gray-700">Video</span>
                                </button>
                                <button className="flex flex-col items-center p-2 xl:p-4 hover:bg-gray-50 rounded-lg xl:rounded-xl transition-colors">
                                    <Search className="size-4 xl:size-5 2xl:size-6 text-purple-500 mb-1 xl:mb-2" />
                                    <span className="text-[8px] xl:text-xs text-gray-700">Search</span>
                                </button>
                            </div>
                        </div>

                        {/* Profile Details */}
                        <div className="flex-1 overflow-y-auto p-4 xl:p-6 space-y-4 xl:space-y-6">
                            {/* About Section */}
                            <div>
                                <h4 className="text-xs xl:text-sm font-bold text-black mb-2 xl:mb-3">About</h4>
                                <p className="text-xs xl:text-sm text-gray-600 bg-gray-50 p-3 xl:p-4 rounded-lg">
                                    {selectedContact.about || "No about information available"}
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="text-xs xl:text-sm font-bold text-black mb-2 xl:mb-3">Contact Info</h4>
                                <div className="space-y-2 xl:space-y-3">
                                    <div className="flex items-center justify-between p-2 xl:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div>
                                            <p className="text-xs xl:text-sm font-medium text-black">{selectedContact.phone}</p>
                                            <p className="text-[8px] xl:text-xs text-gray-500">Phone</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-2 xl:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div>
                                            <p className="text-xs xl:text-sm font-medium text-black">Expert since {selectedContact.joinedDate}</p>
                                            <p className="text-[8px] xl:text-xs text-gray-500">Joined</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Settings */}
                            <div>
                                <h4 className="text-xs xl:text-sm font-bold text-black mb-2 xl:mb-3">Settings</h4>
                                <div className="space-y-1 xl:space-y-2">
                                    <button className="w-full flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                        <Bell className="size-3 xl:size-4 2xl:size-5 text-gray-400" />
                                        <span className="text-xs xl:text-sm text-gray-700">Notifications</span>
                                    </button>
                                    <button className="w-full flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                        <Archive className="size-3 xl:size-4 2xl:size-5 text-gray-400" />
                                        <span className="text-xs xl:text-sm text-gray-700">Archive chat</span>
                                    </button>
                                    <button className="w-full flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                        <Shield className="size-3 xl:size-4 2xl:size-5 text-orange-400" />
                                        <span className="text-xs xl:text-sm text-orange-600">Block expert</span>
                                    </button>
                                    <button className="w-full flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                        <Trash2 className="size-3 xl:size-4 2xl:size-5 text-red-400" />
                                        <span className="text-xs xl:text-sm text-red-600">Delete chat</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay for mobile when profile is open */}
            {showProfile && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setShowProfile(false)}
                />
            )}
        </div>
    );
}