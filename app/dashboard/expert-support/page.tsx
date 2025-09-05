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
    ChevronDown,
    Settings,
    User,
    Mail
} from 'lucide-react';

interface ChatMessage {
    id: number;
    sender: string;
    message: string;
    timestamp: string;
    avatar: string;
    status?: 'sending' | 'sent' | 'delivered' | 'read';
    type?: 'text' | 'file' | 'image';
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

// Custom Chat Bubble Component
const ChatBubble = ({ message, isOwn }: { message: ChatMessage; isOwn: boolean }) => {
    const MessageStatus = ({ status }: { status?: string }) => {
        switch (status) {
            case 'sent':
                return <Check className="w-3 h-3 text-gray-400" />;
            case 'delivered':
                return <CheckCheck className="w-3 h-3 text-gray-400" />;
            case 'read':
                return <CheckCheck className="w-3 h-3 text-gray-600" />;
            default:
                return null;
        }
    };

    return (
        <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className="flex items-end space-x-2 max-w-[70%]">
                {!isOwn && (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                        {message.avatar}
                    </div>
                )}

                <div className={`relative group ${isOwn ? 'order-first' : ''}`}>
                    <div className={`px-4 py-3 rounded-2xl shadow-sm border ${isOwn
                            ? 'bg-black text-white border-gray-800 rounded-br-md'
                            : 'bg-white text-gray-900 border-gray-200 rounded-bl-md'
                        } transition-all duration-200 hover:shadow-md`}>
                        <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                            {message.message}
                        </p>

                        <div className={`flex items-center justify-end mt-2 space-x-1 ${isOwn ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            <span className="text-xs opacity-80">
                                {message.timestamp}
                            </span>
                            {isOwn && <MessageStatus status={message.status} />}
                        </div>
                    </div>

                    {/* Hover timestamp */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {message.timestamp}
                    </div>
                </div>

                {isOwn && (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                        {message.avatar}
                    </div>
                )}
            </div>
        </div>
    );
};

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

    // Mobile: Show chat list or chat view
    // Desktop: Show both side by side
    const showChatList = !isMobile || !selectedChat;
    const showChatView = !isMobile || selectedChat;

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden border-t border-gray-200">
            {/* Left Sidebar - Contacts List */}
            <div className={`${showChatList ? 'flex' : 'hidden'} 
                ${isMobile ? 'w-full' : 'w-full md:w-80 lg:w-96 xl:w-80 2xl:w-96 border-r border-gray-200'}
                flex-col bg-white shadow-sm h-full`}>

                {/* Header */}
                <div className="bg-white text-black border-b border-gray-100 px-3 md:px-4 xl:px-3 2xl:px-3 py-3">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h1 className="text-lg md:text-xl lg:text-md xl:text-lg 2xl:text-xl font-bold">Expert Support</h1>
                            <p className="text-gray-400 text-xs md:text-sm">Professional assistance</p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search experts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-gray-50 border border-[#D9D9D9] rounded-lg md:rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent placeholder-gray-400 text-black"
                        />
                    </div>
                </div>

                {/* Experts List */}
                <div className="flex-1 overflow-y-auto">
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedChat(contact.id)}
                            className={`py-4 pr-1 cursor-pointer border-b border-gray-100 transition-all duration-200 hover:bg-gray-50 ${selectedChat === contact.id ? 'bg-gray-50' : ''
                                }`}
                        >
                            <div className="flex px-4 items-center space-x-2 md:space-x-3">
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-medium shadow-md">
                                        {contact.avatar}
                                    </div>
                                    {contact.isOnline && (
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                                    )}
                                </div>

                                {/* Contact Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5 md:mb-1">
                                        <h3 className="text-xs md:text-sm font-semibold text-gray-900 truncate">
                                            {contact.name}
                                        </h3>
                                        <div className="flex items-center space-x-1 md:space-x-2">
                                            <span className="text-[10px] md:text-xs text-gray-500">
                                                {contact.timestamp}
                                            </span>
                                            {contact.unreadCount! > 0 && (
                                                <div className="w-4 h-4 md:w-5 md:h-5 bg-black rounded-full flex items-center justify-center">
                                                    <span className="text-[10px] md:text-xs text-white font-medium">
                                                        {contact.unreadCount}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-[10px] md:text-xs text-gray-600 mb-0.5 font-medium">
                                        {contact.role}
                                    </p>
                                    <p className="text-[10px] md:text-xs text-gray-500 truncate">
                                        {contact.lastMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className={`${showChatView ? 'flex' : 'hidden'} 
                ${isMobile ? 'w-full' : 'flex-1'}
                flex-col bg-gray-50 relative h-full`}>

                {selectedContact ? (
                    <>
                        {/* Chat Header */}
                        <div className="bg-white px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {isMobile && (
                                        <button
                                            onClick={handleBackClick}
                                            className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                    )}

                                    <div
                                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded-xl transition-colors"
                                        onClick={() => setShowProfile(true)}
                                    >
                                        <div className="w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-md">
                                            {selectedContact.avatar}
                                        </div>
                                        <div>
                                            <h2 className="text-sm md:text-base font-semibold text-gray-900">
                                                {selectedContact.name}
                                            </h2>
                                            <div className="flex items-center space-x-1 md:space-x-2">
                                                <p className="text-[10px] md:text-xs text-gray-600">
                                                    {selectedContact.role}
                                                </p>
                                                <span className="text-gray-400 text-xs">•</span>
                                                <div className="flex items-center space-x-1">
                                                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${selectedContact.isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                                                    <p className="text-[10px] md:text-xs text-gray-600">
                                                        {selectedContact.isOnline ? 'Online' : 'Offline'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <button className="p-2.5 text-gray-600 hover:text-black hover:bg-gray-100 rounded-xl transition-colors">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 bg-gradient-to-b from-gray-50 to-white">
                            {/* Date Separator */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-white px-4 py-2 rounded-full text-xs text-gray-500 shadow-sm border border-gray-200 font-medium">
                                    Today
                                </div>
                            </div>

                            {/* Messages */}
                            {messages.map((message) => (
                                <ChatBubble
                                    key={message.id}
                                    message={message}
                                    isOwn={message.sender === 'me'}
                                />
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Message Input */}
                        <div className="bg-white p-4 border-t border-gray-200 shadow-sm">
                            <div className="flex justify-between items-center space-x-3">
                                <button className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                                    <Paperclip className="w-5 h-5" />
                                </button>

                                <div className="flex-1 relative">
                                    <textarea
                                        ref={textareaRef}
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        rows={1}
                                        className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-sm placeholder-gray-500 max-h-32 transition-all duration-200"
                                        style={{ minHeight: '48px' }}
                                    />
                                    <button className="absolute right-3 bottom-3 p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <Smile className="w-5 h-5" />
                                    </button>
                                </div>

                                {messageInput.trim() ? (
                                    <button
                                        onClick={handleSendMessage}
                                        className="p-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-200 flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button className="p-2.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
                                        <Mic className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    /* Welcome Screen */
                    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                        <div className="text-center p-8 max-w-lg">
                            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center shadow-2xl">
                                <div className="text-4xl">💬</div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Welcome to Expert Support
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Connect with professional experts to get personalized help with your assignments and research projects.
                            </p>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                                <p className="text-sm text-gray-500 mb-4">
                                    Select a conversation from the sidebar to start chatting with an expert.
                                </p>
                                <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <User className="w-4 h-4" />
                                        <span>4 Experts Available</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span>Online Now</span>
                                    </div>
                                </div>
                            </div>
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
                            className="fixed inset-0 bg-black bg-opacity-60 z-40 backdrop-blur-sm"
                            onClick={() => setShowProfile(false)}
                        />
                    )}

                    <div className={`fixed top-0 right-0 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMobile ? 'w-full' : 'w-96'
                        } ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex flex-col h-full">
                            {/* Profile Header */}
                            <div className="bg-white text-black p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-lg font-semibold">Contact Info</h2>
                                    <button
                                        onClick={() => setShowProfile(false)}
                                        className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Profile Photo and Name */}
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-2xl font-medium mx-auto mb-4 shadow-lg">
                                        {selectedContact.avatar}
                                    </div>
                                    <h3 className="text-xl font-bold text-black">{selectedContact.name}</h3>
                                    <p className="text-sm text-gray-800 mt-1">{selectedContact.role}</p>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="flex-1 overflow-y-auto">
                                {/* About Section */}
                                <div className="p-6 border-b border-gray-100">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">About</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {selectedContact.about}
                                    </p>
                                </div>

                                {/* Chat Settings */}
                                <div className="p-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Chat Settings</h4>
                                    <div className="space-y-2">
                                        <button className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-xl transition-colors text-left border border-gray-100">
                                            <Bell className="w-5 h-5 text-gray-500" />
                                            <span className="text-sm text-gray-700">Mute notifications</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-xl transition-colors text-left border border-gray-100">
                                            <Archive className="w-5 h-5 text-gray-500" />
                                            <span className="text-sm text-gray-700">Archive chat</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 p-4 hover:bg-orange-50 rounded-xl transition-colors text-left border border-orange-200">
                                            <Shield className="w-5 h-5 text-orange-500" />
                                            <span className="text-sm text-orange-600">Block contact</span>
                                        </button>
                                        <button className="w-full flex items-center space-x-3 p-4 hover:bg-red-50 rounded-xl transition-colors text-left border border-red-200">
                                            <Trash2 className="w-5 h-5 text-red-500" />
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