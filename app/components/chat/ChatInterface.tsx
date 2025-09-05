import { useState, useEffect, useRef } from 'react';
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  ArrowLeft,
  ChevronDown,
} from 'lucide-react';
import { ChatBubble } from './ChatBubble';
import { ContactListItem } from './ContactListItem';
import { MessageInput } from './MessageInput';
import { ProfileSidebar } from './ProfileSidebar';

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
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

export function ChatInterface() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      status: 'read'
    },
    {
      id: 2,
      sender: "me",
      message: "Thank you for the quick review! I'd love to hear your suggestions.",
      timestamp: "10:35",
      status: 'read'
    },
    {
      id: 3,
      sender: "other",
      message: "First, consider expanding your literature review to include more recent publications from 2024-2025. Second, your sample size calculation needs adjustment.",
      timestamp: "10:38",
      status: 'read'
    },
    {
      id: 4,
      sender: "me",
      message: "Those are excellent points. Could you recommend some specific journals or papers I should look at?",
      timestamp: "10:40",
      status: 'delivered'
    },
    {
      id: 5,
      sender: "other",
      message: "I'll review your research methodology and get back to you with detailed feedback by tomorrow.",
      timestamp: "10:45",
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
    <div className="flex h-full bg-gray-100 overflow-hidden">
      {/* Left Sidebar - Contacts List */}
      <div 
        className={cn(
          'flex flex-col bg-white',
          isMobile ? 'w-full' : 'w-96 border-r border-gray-100 h-full',
          showChatList ? 'flex' : 'hidden'
        )}
      >
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
            <ContactListItem
              key={contact.id}
              {...contact}
              isSelected={selectedChat === contact.id}
              onClick={setSelectedChat}
            />
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div 
        className={cn(
          'flex flex-col bg-white relative',
          isMobile ? 'w-full' : 'flex-1',
          showChatView ? 'flex' : 'hidden'
        )}
      >
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
                  <button 
                    className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-colors"
                    onClick={() => setShowProfile(true)}
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cg fill=\'%23f3f4f6\' fill-opacity=\'0.3\'%3e%3cpath d=\'M20 20c0-11.046-8.954-20-20-20v20h20z\'/%3e%3c/g%3e%3c/svg%3e")',
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
                <ChatBubble
                  key={message.id}
                  message={message.message}
                  timestamp={message.timestamp}
                  status={message.status}
                  isCurrentUser={message.sender === 'me'}
                  className="mb-3"
                />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <MessageInput
              value={messageInput}
              onChange={setMessageInput}
              onSend={handleSendMessage}
            />
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
        <ProfileSidebar
          contact={selectedContact}
          isMobile={isMobile}
          onClose={() => setShowProfile(false)}
        />
      )}
    </div>
  );
}

// Helper function to conditionally join class names
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
