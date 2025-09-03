"use client";

import { useState, useRef, useEffect } from 'react';
import {
    Search,
    MoreVertical,
    Send,
    Plus,
    X,
    Phone,
    Video,
    Bell,
    Archive,
    Shield,
    Trash2,
    ArrowLeft,
    Paperclip,
    Smile,
    Mic,
    Check,
    CheckCheck,
    ChevronDown
} from 'lucide-react';

interface ChatMessage {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
    avatar: string;
    status?: 'sending' | 'sent' | 'delivered' | 'read';
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
    unreadCount?: number;
}

export default function ChatInterface() {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showProfile, setShowProfile] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Check for mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
    }, [messageInput]);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedChat]);

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
            about: "PhD in Computer Science, AI Research Specialist with over 10 years of experience in machine learning and data science.",
            joinedDate: "January 15, 2020",
            role: "AI Research Expert",
            unreadCount: 2
        },
        {
            id: 2,
            name: "Prof. Ahmed Hassan",
            lastMessage: "The statistical analysis looks comprehensive",
            timestamp: "Yesterday",
            avatar: "AH",
            phone: "+1 (555) 987-6543",
            about: "Professor of Statistics and Data Science at MIT, specializing in advanced statistical modeling.",
            joinedDate: "March 22, 2018",
            role: "Statistics Expert",
            unreadCount: 0
        },
        {
            id: 3,
            name: "Dr. Maria Garcia",
            lastMessage: "Your literature review needs more recent sources",
            timestamp: "12:25",
            avatar: "MG",
            isOnline: true,
            phone: "+1 (555) 456-7890",
            about: "Environmental Science Research Director with expertise in climate change and sustainability.",
            joinedDate: "July 8, 2019",
            role: "Environmental Science Expert",
            unreadCount: 1
        },
        {
            id: 4,
            name: "Dr. James Chen",
            lastMessage: "The financial model assumptions are solid",
            timestamp: "2 days ago",
            avatar: "JC",
            phone: "+1 (555) 321-0987",
            about: "Finance Professor and Investment Advisor specializing in corporate finance and portfolio management.",
            joinedDate: "November 3, 2021",
            role: "Finance Expert",
            unreadCount: 0
        }
    ]);

    // Sample messages for selected chat
    const [messages] = useState<ChatMessage[]>([
        {
            id: 1,
            sender: "other",
            message: "Hi! I've reviewed your research proposal. The methodology is solid, but I have a few suggestions for improvement.",
            timestamp: "Today 10:30",
            avatar: "SW",
            status: 'read'
        },
        {
            id: 2,
            sender: "me",
            message: "Thank you for the quick review! I'd love to hear your suggestions.",
            timestamp: "10:35",
            avatar: "ME",
            status: 'read'
        },
        {
            id: 3,
            sender: "other",
            message: "First, consider expanding your literature review to include more recent publications from 2024-2025. Second, your sample size calculation needs adjustment.",
            timestamp: "10:38",
            avatar: "SW",
            status: 'read'
        },
        {
            id: 4,
            sender: "me",
            message: "Those are excellent points. Could you recommend some specific journals or papers I should look at?",
            timestamp: "10:40",
            avatar: "ME",
            status: 'delivered'
        },
        {
            id: 5,
            sender: "other",
            message: "I'll review your research methodology and get back to you with detailed feedback by tomorrow.",
            timestamp: "10:45",
            avatar: "SW",
            status: 'sent'
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

    const handleBackClick = () => {
        setSelectedChat(null);
        setShowProfile(false);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.role?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const MessageStatus = ({ status }: { status?: string }) => {
        switch (status) {
            case 'sent':
                return <Check className="w-3 h-3" />;
            case 'delivered':
                return <CheckCheck className="w-3 h-3" />;
            case 'read':
                return <CheckCheck className="w-3 h-3 text-blue-500" />;
            default:
                return null;
        }
    };

    // Mobile: Show chat list or chat view
    // Desktop: Show both side by side
    const showChatList = !isMobile || !selectedChat;
    const showChatView = !isMobile || selectedChat;

    return (
        <div className="flex h-full bg-gray-100 overflow-hidden">
            {/* Left Sidebar - Contacts List */}
            <div className={`${showChatList ? 'flex' : 'hidden'
                } ${isMobile ? 'w-full' : 'w-96 border-r border-gray-100 h-full'
                } flex-col bg-white`}>

                {/* Header */}
                <div className="py-3 border-b border-gray-50 mr-5">
                    <div className="flex items-center justify-between mb-3">
                        <h1 className="text-xl font-semibold text-gray-800">Expert Support</h1>
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search or start new chat"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Experts List */}
                <div className="flex-1 overflow-y-auto pr-5">
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedChat(contact.id)}
                            className={`py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 ${selectedChat === contact.id ? 'bg-gray-50' : ''
                                }`}
                        >
                            <div className="flex items-center space-x-3">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                        {contact.avatar}
                                    </div>
                                    {contact.isOnline && (
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>

                                {/* Contact Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900 truncate">
                                            {contact.name}
                                        </h3>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-xs text-gray-500">
                                                {contact.timestamp}
                                            </span>
                                            {contact.unreadCount! > 0 && (
                                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                    <span className="text-xs text-white font-medium">
                                                        {contact.unreadCount}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-0.5 mb-1">
                                        {contact.role}
                                    </p>
                                    <p className="text-sm text-gray-600 truncate">
                                        {contact.lastMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className={`${showChatView ? 'flex' : 'hidden'
                } ${isMobile ? 'w-full' : 'flex-1'
                } flex-col bg-white relative`}>

                {selectedContact ? (
                    <>
                        {/* Chat Header */}
                        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex-shrink-0">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    {isMobile && (
                                        <button
                                            onClick={handleBackClick}
                                            className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    )}

                                    <div
                                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-200 p-2 -m-2 rounded-lg transition-colors"
                                        onClick={() => setShowProfile(true)}
                                    >
                                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                            {selectedContact.avatar}
                                        </div>
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-900">
                                                {selectedContact.name}
                                            </h2>
                                            <p className="text-xs text-gray-600">
                                                {selectedContact.role}
                                            </p>
                                            <p className="text-xs text-green-600">
                                                {selectedContact.isOnline ? 'Online' : 'Last seen recently'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors">
                                        <Video className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div
                            className="flex-1 overflow-y-auto p-4 space-y-3"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='%23f3f4f6' fill-opacity='0.3'%3e%3cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3e%3c/g%3e%3c/svg%3e")`,
                                backgroundColor: '#f9fafb'
                            }}
                        >
                            {/* Date Separator */}
                            <div className="flex justify-center mb-6">
                                <span className="bg-white px-3 py-1 rounded-full text-xs text-gray-500 shadow-sm">
                                    Today
                                </span>
                            </div>

                            {/* Messages */}
                            {messages.map((message) => (
                                <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg ${message.sender === 'me'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                                        } rounded-lg px-3 py-2 relative`}>
                                        <p className="text-sm leading-relaxed break-words">
                                            {message.message}
                                        </p>
                                        <div className={`flex items-center justify-end mt-1 space-x-1 ${message.sender === 'me' ? 'text-green-100' : 'text-gray-500'
                                            }`}>
                                            <span className="text-xs">
                                                {message.timestamp}
                                            </span>
                                            {message.sender === 'me' && (
                                                <MessageStatus status={message.status} />
                                            )}
                                        </div>

                                        {/* Message tail */}
                                        <div className={`absolute top-0 ${message.sender === 'me'
                                            ? '-right-2 border-l-8 border-l-green-500'
                                            : '-left-2 border-r-8 border-r-white'
                                            } border-t-8 border-t-transparent border-b-8 border-b-transparent`}></div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="bg-gray-50 p-4 border-t border-gray-200 flex-shrink-0">
                            <div className="flex items-end space-x-3">
                                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0">
                                    <Paperclip className="w-5 h-5" />
                                </button>

                                <div className="flex-1 relative bg-white rounded-full border border-gray-200 focus-within:border-green-500 transition-colors">
                                    <textarea
                                        ref={textareaRef}
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type a message"
                                        rows={1}
                                        className="w-full px-4 py-3 pr-12 bg-transparent border-0 rounded-full resize-none focus:outline-none text-sm placeholder-gray-500 max-h-32"
                                        style={{ minHeight: '48px' }}
                                    />
                                    <button className="absolute right-3 bottom-3 p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <Smile className="w-5 h-5" />
                                    </button>
                                </div>

                                {messageInput.trim() ? (
                                    <button
                                        onClick={handleSendMessage}
                                        className="p-2.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0">
                                        <Mic className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    /* Welcome Screen */
                    <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <div className="text-center p-8 max-w-md">
                            <div className="w-64 h-64 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <div className="text-6xl text-gray-400">💬</div>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                Welcome to Expert Support
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Connect with professional experts to get help with your assignments and research projects.
                            </p>
                            <p className="text-sm text-gray-500">
                                Select a conversation from the sidebar to start chatting with an expert.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Profile Sidebar */}
            {showProfile && selectedContact && (
                <>
                    {/* Overlay for mobile */}
                    {isMobile && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setShowProfile(false)}
                        />
                    )}

                    <div className={`fixed top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMobile ? 'w-full' : 'w-96'
                        } ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex flex-col h-full">
                            {/* Profile Header */}
                            <div className="bg-gray-50 p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-semibold text-gray-800">Contact info</h2>
                                    <button
                                        onClick={() => setShowProfile(false)}
                                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Profile Photo and Name */}
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center text-white text-2xl font-medium mx-auto mb-4">
                                        {selectedContact.avatar}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{selectedContact.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{selectedContact.role}</p>
                                    <p className="text-sm text-green-600 mt-1">
                                        {selectedContact.isOnline ? 'Online' : 'Last seen recently'}
                                    </p>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="grid grid-cols-3 gap-4">
                                    <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                        <Phone className="w-6 h-6 text-green-500 mb-2" />
                                        <span className="text-xs text-gray-700">Audio</span>
                                    </button>
                                    <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                        <Video className="w-6 h-6 text-blue-500 mb-2" />
                                        <span className="text-xs text-gray-700">Video</span>
                                    </button>
                                    <button className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                                        <Search className="w-6 h-6 text-purple-500 mb-2" />
                                        <span className="text-xs text-gray-700">Search</span>
                                    </button>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="flex-1 overflow-y-auto">
                                {/* About Section */}
                                <div className="p-6 border-b border-gray-100">
                                    <h4 className="text-sm font-medium text-gray-800 mb-3">About</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {selectedContact.about}
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="p-6 border-b border-gray-100">
                                    <h4 className="text-sm font-medium text-gray-800 mb-3">Contact info</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between py-2">
                                            <div>
                                                <p className="text-sm text-gray-900">{selectedContact.phone}</p>
                                                <p className="text-xs text-gray-500">Phone</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <div>
                                                <p className="text-sm text-gray-900">Expert since {selectedContact.joinedDate}</p>
                                                <p className="text-xs text-gray-500">Joined</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Chat Settings */}
                                <div className="p-6">
                                    <h4 className="text-sm font-medium text-gray-800 mb-3">Chat settings</h4>
                                    <div className="space-y-2">
                                        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                            <Bell className="w-5 h-5 text-gray-400" />
                                            <span className="text-sm text-gray-700">Mute notifications</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                            <Archive className="w-5 h-5 text-gray-400" />
                                            <span className="text-sm text-gray-700">Archive chat</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                            <Shield className="w-5 h-5 text-orange-400" />
                                            <span className="text-sm text-orange-600">Block contact</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                                            <Trash2 className="w-5 h-5 text-red-400" />
                                            <span className="text-sm text-red-600">Delete chat</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}