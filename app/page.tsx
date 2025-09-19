"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Upload, Users, CreditCard, Shield, Star, CheckCircle, Menu, X, ArrowRight, BookOpen, Clock, Award, Zap, LucideImage, LucideFile, LucideClipboardList, LucideChevronRight, LucideMessageCircleQuestionMark, LucideFileSearch, LucideFileSearch2, LucideCircleQuestionMark, Truck, Target, Brain, Lightbulb, Globe, ChevronDown, Play, ArrowUpRight, Sparkles, Rocket, TrendingUp, FileText, Calendar, MessageSquare, CheckCircle2, Timer } from 'lucide-react';
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"

type ComingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-md mx-4 text-center animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Coming Soon!</h2>
          <p className="text-gray-300 text-sm">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

const OlyvioLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Generate consistent particle data
  const particles = Array(80).fill(0).map((_, i) => {
    const seed = i * 1000; // Create a seed based on index for consistency
    const random = (min: number, max: number) => {
      const x = Math.sin(seed + i * 12.9898 + 78.233) * 43758.5453;
      return min + (x - Math.floor(x)) * (max - min);
    };

    const animationType = i % 4;
    return {
      id: i,
      left: random(0, 100),
      top: animationType === 1 ? -5 : random(0, 100),
      delay: random(0, 8),
      duration: 6 + random(0, 4),
      type: animationType
    };
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "SwiftAssign transformed my academic workflow. The quality and speed of delivery exceeded my expectations.",
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "Business Administration",
      content: "The expert assistance and professional quality made all the difference in my academic performance.",
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Emma Rodriguez",
      role: "Psychology Major",
      content: "Fast, reliable, and incredibly professional. SwiftAssign is a game-changer for busy students.",
      avatar: "/api/placeholder/64/64"
    }
  ];

  const leftImages = [
    { id: 1, src: '/screenshot1.png', alt: 'Dashboard View' },
    { id: 2, src: '/screenshot3.png', alt: 'Assignment View' },
    { id: 3, src: '/screenshot5.png', alt: 'Progress View' },
    { id: 4, src: '/screenshot7.png', alt: 'Analytics View' },
  ];

  const rightImages = [
    { id: 1, src: '/screenshot2.png', alt: 'Profile View' },
    { id: 2, src: '/screenshot4.png', alt: 'Settings View' },
    { id: 3, src: '/screenshot6.png', alt: 'Reports View' },
    { id: 4, src: '/screenshot8.png', alt: 'Calendar View' },
  ];

  // Create multiple copies for seamless infinite scroll
  const createInfiniteArray = (arr: any, copies = 4) => {
    return Array(copies).fill(arr).flat();
  };

  const submissionProcess = [
    {
      icon: Upload,
      header: "Upload Your Assignment",
      content: "Simply drag and drop your files or browse to upload. Our system supports all major file formats and automatically organizes your submissions.",
      step: "01"
    },
    {
      icon: Users,
      header: "Select Expert Assistance",
      content: "Choose from our pool of verified academic experts. Each specialist is carefully vetted and matched to your specific subject requirements.",
      step: "02"
    },
    {
      icon: CheckCircle2,
      header: "Receive Quality Work",
      content: "Get your completed assignment delivered on time with quality guarantees. All work includes revision support and originality reports.",
      step: "03"
    }
  ];

  const featuresSection = [
    {
      icon: Truck,
      header: "Lightning-Fast Express Delivery",
      content: "Get your assignments delivered in record time with our express service. Rush orders available 24/7 for urgent deadlines.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: LucideFileSearch2,
      header: "AI-Powered Plagiarism Protection",
      content: "Advanced paraphrasing and originality checking ensures your work is 100% unique and passes all plagiarism detection systems.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: LucideCircleQuestionMark,
      header: "Professional Citation & Formatting",
      content: "Perfect citations in APA, MLA, Chicago, and Harvard styles. Professional formatting that meets academic standards.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Brain,
      header: "Subject Matter Expertise",
      content: "Access to specialists across 100+ academic disciplines. From STEM to liberal arts, we have the right expert for you.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Shield,
      header: "Privacy & Security Guaranteed",
      content: "End-to-end encryption protects your personal information. Your academic integrity and privacy are our top priorities.",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Clock,
      header: "24/7 Customer Support",
      content: "Round-the-clock assistance from our dedicated support team. Get help whenever you need it, wherever you are.",
      gradient: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  const stats = [
    { number: 20000, suffix: "+", label: "Active Students" },
    { number: 95, suffix: "%", label: "Success Rate" },
    { number: 50, suffix: "+", label: "Countries Reached" },
  ];

  function CountUp({ end, suffix }: { end: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
      // 👇 empty array so it only runs once
    }, []);

    return (
      <>
        {count.toLocaleString()}
        {suffix}
      </>
    );
  }


  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats");
      if (
        section &&
        section.getBoundingClientRect().top < window.innerHeight * 0.8
      ) {
        setHasAnimated(true);
        window.removeEventListener("scroll", handleScroll); // ✅ remove once triggered
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // in case it's already visible on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ✅ empty deps, run once

const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]); // adjust parallax depth


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2); }
        }

        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scale-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        .animate-scale-breathe {
          animation: scale-breathe 4s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff, #e5e5e5, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }

        /* Improved scrolling animations */
        @keyframes scroll-up-smooth {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scroll-down-smooth {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        .animate-scroll-up-smooth {
          animation: scroll-up-smooth 30s linear infinite;
        }
        
        .animate-scroll-down-smooth {
          animation: scroll-down-smooth 30s linear infinite;
        }

        /* Enhanced particle animations */
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
        }
        
        .animation-0 {
          width: 2px;
          height: 2px;
          animation: twinkle linear infinite;
        }
        
        .animation-1 {
          width: 1px;
          height: 4px;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: rainDrop linear infinite;
        }
        
        .animation-2 {
          width: 3px;
          height: 3px;
          animation: floatingOrb ease-in-out infinite;
        }
        
        .animation-3 {
          width: 2px;
          height: 2px;
          animation: shootingStar linear infinite;
          box-shadow: 0 0 4px white;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          25% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
          75% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes rainDrop {
          0% { opacity: 0.8; transform: translateY(-100vh) translateX(0); }
          100% { opacity: 0; transform: translateY(100vh) translateX(20px); }
        }
        
        @keyframes floatingOrb {
          0% { opacity: 0; transform: translateY(20px) scale(0.8); }
          25% { opacity: 0.6; transform: translateY(-10px) scale(1.2); }
          50% { opacity: 1; transform: translateY(10px) scale(1); }
          75% { opacity: 0.4; transform: translateY(-5px) scale(1.1); }
          100% { opacity: 0; transform: translateY(-30px) scale(0.5); }
        }
        
        @keyframes shootingStar {
          0% { opacity: 0; transform: translateX(-100px) translateY(-50px) scale(0); }
          10% { opacity: 1; transform: translateX(-50px) translateY(-25px) scale(1); }
          90% { opacity: 1; transform: translateX(200px) translateY(100px) scale(1); }
          100% { opacity: 0; transform: translateX(250px) translateY(125px) scale(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl px-4 mx-auto 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2">
          <div className="flex justify-between items-center 2xl:h-16 xl:h-16 lg:h-12 md:h-12 h-12">
            <div className="flex items-center flex-shrink-0">
              <div className="2xl:h-7 xl:h-7 lg:h-5 md:h-5 h-7 max-w-fit mb-1">
                <img src="/logo-white.png" alt="" className="h-full w-auto" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block flex-shrink-1">
              <div className="ml-10 flex items-baseline 2xl:space-x-8 xl:space-x-8 lg:space-x-6 md:space-x-6 space-x-6 font-medium 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105">Home</button>
                <button onClick={() => scrollToSection('Process')} className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105">Process</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105">How It Works</button>
                <button onClick={() => scrollToSection('features')} className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105">Features</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-gray-300 transition-all duration-300 hover:scale-105">Reviews</button>
              </div>
            </div>

            <div className='hidden md:block md:flex flex-row 2xl:gap-3 xl:gap-3 lg:gap-1.5 md:gap-1.5 gap-1.5 flex-shrink-0'>
              <button onClick={handleButtonClick} className='text-white border border-white/30 rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2 xl:py-2 lg:py-1.5 md:py-1.5 py-1.5 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs hover:bg-white/10 transition-all duration-300'>Join</button>
              <button onClick={handleButtonClick} className='text-black bg-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2 xl:py-2 lg:py-1.5 md:py-1.5 py-1.5 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs hover:bg-gray-200 transition-all duration-300 hover:scale-105'>Start</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-white transition-transform duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-700/50 animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-sm">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-sm">How It Works</button>
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-sm">Features</button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-white hover:text-gray-300 transition-colors text-sm">Reviews</button>
              <div className='flex flex-col space-y-2 px-3 py-2'>
                <button onClick={handleButtonClick} className='text-white border border-white/30 rounded-md px-6 py-1.5 text-xs hover:bg-white/10 transition-colors'>Join</button>
                <button onClick={handleButtonClick} className='text-black bg-white rounded-md px-6 py-1.5 text-xs hover:bg-gray-200 transition-colors'>Start</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="2xl:pt-24 xl:pt-24 lg:pt-20 md:pt-20 pt-20 2xl:pb-20 xl:pb-20 lg:pb-16 md:pb-16 pb-16 2xl:px-8 xl:px-6 lg:px-4 md:px-4 px-4 bg-black relative overflow-hidden">
        {/* Animated Dot Pattern */}
        <div className="absolute inset-0">
          <div className="stars-container">
            {isClient && particles.map((particle) => (
              <div
                key={particle.id}
                className={`particle animation-${particle.type}`}
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center 2xl:mb-16 xl:mb-16 lg:mb-12 md:mb-12 mb-12">

            <h1 className="2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold leading-tight 2xl:my-8 xl:my-6 lg:my-6 md:my-6 my-6 gradient-text animate-slide-up">
              Academic Excellence<br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Delivered Instantly
              </span>
            </h1>

            <p className="2xl:text-lg xl:text-md lg:text-base md:text-base text-sm text-white leading-relaxed max-w-3xl mx-auto 2xl:mb-12 xl:mb-8 lg:mb-10 md:mb-10 mb-10 animate-slide-up delay-200">
              Transform your academic journey with AI-powered assignment assistance.
              Upload, customize, and receive expert-quality work in minutes, not hours.
              <span className="text-white font-medium"> Experience the future of learning.</span>
            </p>
            <div className='flex flex-col sm:flex-row items-center 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 gap-4 mx-auto w-full justify-center animate-slide-up delay-300'>
              <button onClick={handleButtonClick} className='group relative text-black bg-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs font-medium hover:scale-105 transition-all duration-300'>
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <Sparkles className="w-4 h-4 animate-bounce-gentle" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className='group text-white 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs font-medium flex 2xl:gap-3 xl:gap-3 lg:gap-2 md:gap-2 gap-2 items-center justify-center hover:gap-4 transition-all duration-300 hover:text-gray-200'>
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
                <div className="relative">
                  <ChevronRight className='text-white 2xl:size-5 xl:size-5 lg:size-4 md:size-4 size-4 transition-transform duration-300 group-hover:translate-x-1' />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative animate-slide-up delay-500">
            {/* Main container */}
            <div className="relative bg-gray-900 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl border border-[#111111] shadow-2xl overflow-hidden animate-glow-pulse">
              {/* Browser bar mockup */}
              <div className="bg-[#111111] 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2 flex items-center space-x-2 border-b border-[#111111]">
                <div className="flex space-x-2">
                  <div className="2xl:w-3 xl:w-3 lg:w-2 md:w-2 w-2 2xl:h-3 xl:h-3 lg:h-2 md:h-2 h-2 bg-red-500 rounded-full animate-bounce-gentle"></div>
                  <div className="2xl:w-3 xl:w-3 lg:w-2 md:w-2 w-2 2xl:h-3 xl:h-3 lg:h-2 md:h-2 h-2 bg-yellow-500 rounded-full animate-bounce-gentle delay-100"></div>
                  <div className="2xl:w-3 xl:w-3 lg:w-2 md:w-2 w-2 2xl:h-3 xl:h-3 lg:h-2 md:h-2 h-2 bg-green-500 rounded-full animate-bounce-gentle delay-200"></div>
                </div>
                <div className="flex-1 2xl:mx-4 xl:mx-4 lg:mx-3 md:mx-3 mx-3">
                  <div className="bg-[#222222] rounded 2xl:px-3 xl:px-3 lg:px-2 md:px-2 px-2 2xl:py-1 xl:py-1 lg:py-0.5 md:py-0.5 py-0.5 2xl:text-xs xl:text-xs lg:text-xs md:text-xs text-xs text-white">
                    https://app.olyvio.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard image */}
              <div className="relative">
                <img
                  src="/hero.png"
                  alt="Olyvio Dashboard - Streamlined assignment management interface"
                  className="w-full h-auto"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="relative py-32 bg-black text-white overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-extrabold tracking-tight mb-4 2xl:mb-6">
              Trusted by Students Worldwide
            </h2>
            <p className="text-gray-400 2xl:text-lg xl:text-md lg:text-base md:text-base text-sm max-w-xl mx-auto">
              Thousands of learners rely on SwiftAssign to stay ahead in their academic journey.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative text-center p-10 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md hover:scale-105 hover:border-white/20 transition-transform duration-300 w-full"
              >
                <motion.div
                  className="2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                >
                  {hasAnimated ? (
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </motion.div>
                <div className="text-gray-400 mt-3 2xl:text-sm xl:text-xs text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
       <section
      id="process"
      className="relative w-full min-h-screen bg-black overflow-hidden py-16 md:py-20"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full -z-10"
      >
        <Image
          src="/parra.jpg"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto px-4 h-full">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-white/10 inline-block tracking-wider">
            STREAMLINED PROCESS
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Submit Assignments <br /> Smarter & Faster
          </h1>

          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm md:text-base 2xl:text-lg">
            SwiftAssign redefines assignment submissions with real-time tracking,
            expert support, and a workflow designed for results.
          </p>

          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              <Rocket className="w-5 h-5" /> Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 md:px-8 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition"
            >
              <ArrowUpRight className="w-5 h-5" /> Sign Up
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
          {/* Left Column - Scrolling Up */}
          <div className="space-y-3 md:space-y-4 overflow-hidden">
            {createInfiniteArray(leftImages).map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="relative w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br from-white/5 to-white/10 rounded-lg shadow-2xl overflow-hidden border border-white/10 group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image.src}
                  alt="Screenshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          {/* Right Column - Scrolling Down */}
          <div className="space-y-3 md:space-y-4 overflow-hidden">
            {createInfiniteArray(rightImages).map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="relative w-full h-48 md:h-64 lg:h-80 bg-gradient-to-br from-white/5 to-white/10 rounded-lg shadow-2xl overflow-hidden border border-white/10 group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image.src}
                  alt="Screenshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* How It Works Section */}
      <section id="how-it-works" className='relative w-full 2xl:py-20 xl:py-20 lg:py-16 md:py-16 py-16 bg-black'>
        {/* Enhanced Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 rounded-lg animate-float-gentle" />
          <div className="absolute bottom-32 right-16 w-12 h-12 rounded-full animate-float-gentle delay-200" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/5 rounded-full animate-scale-breathe" />

          {/* Orbiting elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-spin-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-spin-slow" />
        </div>

        <div className='w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 py-20 md:py-0 relative z-10'>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold bg-white/10 text-white px-3 py-1 rounded-full animate-bounce-gentle mb-6 inline-block">
              SIMPLE PROCESS
            </span>
            <h1 className='2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl text-white font-bold text-center 2xl:mb-6 xl:mb-4 lg:mb-4 md:mb-4 mb-4 gradient-text animate-slide-up'>
              How Olyvio Works
            </h1>
            <p className='text-gray-300 2xl:text-lg xl:text-md lg:text-base md:text-base text-sm max-w-3xl mx-auto animate-slide-up delay-200'>
              Three simple steps to transform your academic workflow and achieve excellence in every assignment
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6'>
            {submissionProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div
                  key={index}
                  className='relative w-full glass-effect rounded-2xl p-8 card-hover animate-slide-up group'
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg animate-bounce-gentle">
                    {process.step}
                  </div>

                  <div className='flex flex-col 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 gap-4 text-center items-center'>
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center animate-glow-pulse">
                        <Icon className='text-white 2xl:size-8 xl:size-8 lg:size-7 md:size-6 size-6' />
                      </div>
                      <div className="absolute -inset-2 bg-white/5 rounded-full animate-scale-breathe -z-10" />
                    </div>

                    <h1 className='text-white font-bold 2xl:text-xl xl:text-xl lg:text-lg md:text-base text-lg group-hover:gradient-text transition-all duration-300'>
                      {process.header}
                    </h1>

                    <p className='text-gray-300 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs leading-relaxed group-hover:text-white transition-colors duration-300'>
                      {process.content}
                    </p>

                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-xs font-medium">Next Step</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className='w-full 2xl:py-20 xl:py-20 lg:py-16 md:py-16 py-16 bg-black relative overflow-hidden'>

        <div className='w-full h-full flex flex-col items-start justify-center max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 relative z-10'>
          <div className="">
            <span className="text-xs font-semibold bg-white/10 text-white px-3 py-1 rounded-full animate-bounce-gentle mb-6 inline-block">
              POWERFUL FEATURES
            </span>
            <h1 className='2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl text-white font-bold text-start 2xl:mb-4 xl:mb-4 lg:mb-3 md:mb-3 mb-3 gradient-text animate-slide-up max-w-2xl'>
              Everything You Need for Academic Success
            </h1>
            <p className='text-gray-300 2xl:text-lg xl:text-md lg:text-base md:text-base text-sm text-start 2xl:mb-16 xl:mb-16 lg:mb-12 md:mb-12 mb-12 max-w-2xl animate-slide-up delay-200'>
              Comprehensive suite of features designed to elevate your academic performance and streamline your workflow
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6 w-full'>
            {featuresSection.map((features, index) => {
              const Icon = features.icon;
              return (
                <div
                  key={index}
                  className={`relative w-full glass-effect rounded-2xl p-6 card-hover animate-slide-up group overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='relative flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3 text-start items-start'>
                    <div className="relative">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className='text-white 2xl:size-6 xl:size-6 lg:size-5 md:size-5 size-5' />
                      </div>
                      <div className="absolute -inset-1 bg-white/5 rounded-lg animate-pulse -z-10" />
                    </div>

                    <h1 className='text-white font-bold 2xl:text-lg xl:text-lg lg:text-base md:text-sm text-base group-hover:gradient-text transition-all duration-300'>
                      {features.header}
                    </h1>

                    <p className='text-gray-400 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      {features.content}
                    </p>

                    <div className="flex items-center gap-2 text-white/40 group-hover:text-white/80 transition-colors duration-300 mt-2">
                      <div className="w-1 h-1 bg-current rounded-full animate-pulse" />
                      <div className="w-2 h-1 bg-current rounded-full animate-pulse delay-100" />
                      <div className="w-1 h-1 bg-current rounded-full animate-pulse delay-200" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 2xl:mt-12 xl:mt-12 lg:mt-10 md:mt-10 mt-10 animate-slide-up delay-500'>
            <button onClick={handleButtonClick} className='group text-white 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-3 xl:py-3 lg:py-2.5 md:py-2.5 py-2.5 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs flex items-center gap-2 hover:gap-3 transition-all duration-300'>
              Start Your Journey
              <ArrowUpRight className='text-white 2xl:size-4 xl:size-4 lg:size-3 md:size-3 size-3 group-hover:rotate-45 transition-transform duration-300' />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Floating testimonial cards background effect */}
          <div className="absolute top-10 left-1/4 w-64 h-32 bg-white/5 rounded-lg animate-float-gentle opacity-20" />
          <div className="absolute bottom-20 right-1/4 w-48 h-24 bg-white/5 rounded-lg animate-float-gentle delay-300 opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold bg-white/10 text-white px-3 py-1 rounded-full animate-bounce-gentle mb-6 inline-block">
              STUDENT SUCCESS STORIES
            </span>
            <h2 className="2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold text-white 2xl:mb-6 xl:mb-4 mb-2 gradient-text animate-slide-up">
              What Students Say About Us
            </h2>
            <p className="text-gray-300 2xl:text-lg xl:text-md lg:text-base md:text-base text-sm max-w-2xl mx-auto animate-slide-up delay-200">
              Real feedback from students who transformed their academic journey with SwiftAssign
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="glass-effect rounded-2xl p-8 text-center group hover:bg-white/5 transition-all duration-300 animate-glow-pulse">
                      <div className="flex items-center justify-center mb-6">
                        <div className="size-16 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center">
                          <span className="text-xl md:text-2xl font-bold text-white">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <blockquote className="text-md md:text-2xl text-white mb-6 font-light leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="text-center">
                        <div className="font-semibold text-white mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}
                        </div>
                      </div>

                      <div className="flex justify-center mt-4 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-3 md:size-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-4 md:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`size-2 md:size-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full 2xl:py-20 xl:py-20 lg:py-16 md:py-16 py-16 bg-black relative overflow-hidden'>
        <div className='w-full h-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6 relative z-10'>
          <div className='flex flex-col 2xl:gap-2 xl:gap-4 lg:gap-3 md:gap-3 gap-3 text-center lg:text-left animate-slide-up'>
            <span className="text-xs font-semibold bg-white/10 text-white px-3 py-1 rounded-full animate-bounce-gentle mb-2 inline-block w-fit mx-auto lg:mx-0">
              GET STARTED NOW
            </span>
            <h1 className='2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl text-xl text-white font-bold gradient-text'>
              Ready to Transform Your Academic Journey?
            </h1>
            <p className='2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm text-gray-300 max-w-lg'>
              Join thousands of successful students. Start your journey with SwiftAssign today and experience academic excellence like never before.
            </p>
          </div>

          <div className='flex flex-col 2xl:gap-3 xl:gap-3 lg:gap-2 md:gap-2 gap-2 animate-slide-up delay-200'>
            <div className='flex flex-col sm:flex-row items-stretch gap-5 md:gap-2'>
              <input
                className='border border-white/20 placeholder-gray-400 text-white 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs bg-white/5 rounded-lg 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 2xl:py-3 xl:py-3 lg:py-2.5 md:py-2.5 py-2.5 2xl:w-80 xl:w-80 lg:w-72 md:w-64 w-full backdrop-blur-sm focus:border-white/40 focus:outline-none transition-all duration-300 focus:bg-white/10'
                placeholder='Enter your email address'
              />
              <button
                onClick={handleButtonClick}
                className='group bg-white text-black font-semibold rounded-lg 2xl:px-6 xl:px-6 lg:px-5 md:px-5 px-5 2xl:py-3 xl:py-3 lg:py-2.5 md:py-2.5 py-2.5 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center whitespace-nowrap'
              >
                <TrendingUp className="w-4 h-4 group-hover:animate-bounce-gentle" />
                Get Started
              </button>
            </div>
            <p className='2xl:text-xs xl:text-xs lg:text-xs md:text-xs text-xs text-gray-500 text-center sm:text-left mt-2 md:mt-0'>
              By signing up, you agree to our Terms and Conditions. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OlyvioLanding;