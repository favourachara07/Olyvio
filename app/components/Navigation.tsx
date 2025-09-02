'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Search, FileText, MessageCircle, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  const bottomTabs = [
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      href: '/',
    },
    {
      id: 'solutions',
      name: 'Solutions',
      icon: Search,
      href: '#solutions',
    },
    {
      id: 'docs',
      name: 'Docs',
      icon: FileText,
      href: '#docs',
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: MessageCircle,
      href: '#contact',
    },
    {
      id: 'account',
      name: 'Account',
      icon: User,
      href: '/auth/signin',
    },
  ];

  return (
    <>
      {/* Top Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-semibold text-white">AssignExpert</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth/signin"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                Get started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`mobile-menu md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 transform transition-all duration-300 ease-in-out ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
            style={{ marginTop: '4rem' }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl text-gray-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800 mt-4">
                <Link
                  href="/auth/signin"
                  className="block text-center py-3 px-4 rounded-lg bg-gray-800 text-white mb-3 hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="block text-center py-3 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Tab Navigator - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Background with blur effect */}
        <div className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
          <div className="flex items-center justify-around py-2 px-1">
            {bottomTabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg min-w-0 flex-1 transition-all duration-200 ${
                    isActive 
                      ? 'text-indigo-400 bg-indigo-500/10' 
                      : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent 
                    size={20} 
                    className={`mb-1 transition-all duration-200 ${
                      isActive ? 'scale-110' : ''
                    }`} 
                  />
                  <span 
                    className={`text-xs font-medium transition-all duration-200 ${
                      isActive ? 'text-indigo-400' : 'text-gray-400'
                    }`}
                  >
                    {tab.name}
                  </span>
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -top-1 w-1 h-1 bg-indigo-400 rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Safe area for devices with home indicator */}
        <div className="bg-gray-900/90 h-safe-area-inset-bottom" />
      </div>

      {/* Bottom padding for content to prevent overlap with bottom tabs */}
      <div className="md:hidden h-20" />
    </>
  );
};

export default Navigation;