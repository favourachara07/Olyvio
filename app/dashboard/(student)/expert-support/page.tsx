"use client";

import { useState } from 'react';
import { Search, MoreVertical, Send, Plus } from 'lucide-react';

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
}

export default function ChatInterface() {
    const [selectedChat, setSelectedChat] = useState<number>(1);
    const [messageInput, setMessageInput] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Sample contacts data
    const [contacts] = useState<ChatContact[]>([
        {
            id: 1,
            name: "Martin Luther",
            lastMessage: "Hey, how are you doing?",
            timestamp: "10:45",
            avatar: "ML",
            isOnline: true
        },
        {
            id: 2,
            name: "Ahmed Yaar",
            lastMessage: "The size of your document doesn't match the amount",
            timestamp: "Yesterday",
            avatar: "AY"
        },
        {
            id: 3,
            name: "Martin Luther",
            lastMessage: "Hey, how are you doing?",
            timestamp: "12:25",
            avatar: "ML"
        },
        {
            id: 4,
            name: "Ahmed Yaar",
            lastMessage: "The size of your document doesn't match the amount",
            timestamp: "Yesterday",
            avatar: "AY"
        }
    ]);

    // Sample messages for selected chat
    const [messages] = useState<ChatMessage[]>([
        {
            id: 1,
            sender: "other",
            message: "Hi",
            timestamp: "Today",
            avatar: "ML"
        },
        {
            id: 2,
            sender: "me",
            message: "Hi",
            timestamp: "10:35",
            avatar: "ME"
        }
    ]);

    const selectedContact = contacts.find(contact => contact.id === selectedChat);

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            // In production, this would send the message to the backend
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

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-white">
            {/* Left Sidebar - Contacts List */}
            <div className="w-80 border-r border-gray-200 flex flex-col">
                {/* Search Header */}
                <div className="p-4 border-b border-gray-100">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search by chat list"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* All Section Header */}
                <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-900">All</h2>
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="text-xs text-blue-600 hover:text-blue-700 mt-1">
                        Select all
                    </button>
                </div>

                {/* Contacts List */}
                <div className="flex-1 overflow-y-auto">
                    {filteredContacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedChat(contact.id)}
                            className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${selectedChat === contact.id ? 'bg-blue-50 border-l-2 border-l-blue-500' : ''
                                }`}
                        >
                            <div className="flex items-start space-x-3">
                                {/* Avatar */}
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                        {contact.avatar}
                                    </div>
                                    {contact.isOnline && (
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>

                                {/* Chat Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-sm font-medium text-gray-900 truncate">
                                            {contact.name}
                                        </h3>
                                        <span className="text-xs text-gray-500 ml-2">
                                            {contact.timestamp}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 truncate leading-relaxed">
                                        {contact.lastMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Side - Chat Area */}
            <div className="flex-1 flex flex-col">
                {selectedContact ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-200 bg-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                        {selectedContact.avatar}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            {selectedContact.name}
                                        </h2>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div key={message.id}>
                                        {/* Date separator */}
                                        {message.id === 1 && (
                                            <div className="flex justify-center mb-4">
                                                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                                                    {message.timestamp}
                                                </span>
                                            </div>
                                        )}

                                        <div className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-xs lg:max-w-md ${message.sender === 'me'
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-white text-gray-900'
                                                } rounded-2xl px-4 py-2 shadow-sm`}>
                                                <p className="text-sm">{message.message}</p>
                                                {message.sender === 'me' && (
                                                    <div className="flex justify-end mt-1">
                                                        <span className="text-xs text-blue-100">
                                                            {message.timestamp}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex items-end space-x-3">
                                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Plus className="w-5 h-5" />
                                </button>

                                <div className="flex-1 relative">
                                    <textarea
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Write a message..."
                                        rows={1}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder-gray-500"
                                        style={{ minHeight: '44px', maxHeight: '120px' }}
                                    />
                                </div>

                                <button
                                    onClick={handleSendMessage}
                                    disabled={!messageInput.trim()}
                                    className={`p-3 rounded-lg transition-colors ${messageInput.trim()
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Search className="w-6 h-6 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Select a conversation
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Choose a contact from the sidebar to start chatting
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}