"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Upload, Users, CreditCard, Shield, Star, CheckCircle, Menu, X, ArrowRight, BookOpen, Clock, Award, Zap, LucideImage, LucideFile, LucideClipboardList, LucideChevronRight, LucideMessageCircleQuestionMark, LucideFileSearch, LucideFileSearch2, LucideCircleQuestionMark, Truck } from 'lucide-react';
import Image from 'next/image';

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
      <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-md mx-4 text-center">
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

  const submissionProcess = [
    {
      icon: LucideClipboardList,
      header: "Follow these simple steps to get started with SwiftAssign today.",
      content: "SwiftAssign streamlines your assignment submissions with user-friendly features and expert assistance.",
      link: "",
      linkName: "Learn More"
    },
    {
      icon: LucideClipboardList,
      header: "Easily submit your assignments with just a few clicks.",
      content: "Upload your files, choose add-ons, and select a task expert seamlessly.",
      link: "",
      linkName: "Sign Up"
    },
    {
      icon: LucideClipboardList,
      header: "Track your orders in real-time and stay updated on progress.",
      content: "Receive instant notifications about your order status and expert replies.",
      link: "",
      linkName: "Get Started"
    }
  ];

  const featuresSection = [
    {
      icon: Truck,
      header: "Fast and Reliable Express Delivery",
      content: "Get your assignments delivered at lightning speed.",
    },
    {
      icon: LucideFileSearch2,
      header: "Professional Paraphrasing for Original Content",
      content: "Ensure your work is unique and plagiarism-free.",
    },
    {
      icon: LucideCircleQuestionMark,
      header: "Accurate Citation Assistance for Your Papers",
      content: "Cite your sources correctly with our help.",
    }
  ];

  const scrollToSection = (sectionId: any) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black">
        <div className="max-w-7xl mx-auto 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2">
          <div className="flex justify-between items-center 2xl:h-16 xl:h-16 lg:h-12 md:h-12 h-12">
            <div className="flex items-center flex-shrink-0">
              <div className="2xl:h-6 xl:h-6 lg:h-5 md:h-5 h-5 max-w-fit mb-1">
                <img src="/logo-white.png" alt="" className="h-full w-auto" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block flex-shrink-1">
              <div className="ml-10 flex items-baseline 2xl:space-x-8 xl:space-x-8 lg:space-x-6 md:space-x-6 space-x-6 font-medium 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-blue-400 transition-colors">Home</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-400 transition-colors">How It Works</button>
                <button onClick={() => scrollToSection('features')} className="text-white hover:text-blue-400 transition-colors">Features</button>
                <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-blue-400 transition-colors">Pricing</button>
              </div>
            </div>

            <div className='flex flex-row 2xl:gap-2 xl:gap-2 lg:gap-1.5 md:gap-1.5 gap-1.5 flex-shrink-0'>
              <button onClick={handleButtonClick} className='text-white border border-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2 xl:py-2 lg:py-1.5 md:py-1.5 py-1.5 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs'>Join</button>
              <button onClick={handleButtonClick} className='text-black bg-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2 xl:py-2 lg:py-1.5 md:py-1.5 py-1.5 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs'>Start</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-white"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-sm">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-sm">How It Works</button>
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-sm">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-sm">Pricing</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="2xl:pt-24 xl:pt-24 lg:pt-20 md:pt-20 pt-20 2xl:pb-20 xl:pb-20 lg:pb-16 md:pb-16 pb-16 2xl:px-8 xl:px-6 lg:px-4 md:px-4 px-4 bg-black relative overflow-hidden">
        {/* Animated Dot Pattern */}
        <div className="absolute inset-0">
          <div className="stars-container">
            {[...Array(80)].map((_, i) => {
              const animationType = i % 4;
              return (
                <div
                  key={i}
                  className={`particle animation-${animationType}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: animationType === 1 ? `-5%` : `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${6 + Math.random() * 4}s`
                  }}
                />
              );
            })}
          </div>
        </div>

        <style jsx>{`
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
          
          /* Twinkling Stars */
          .animation-0 {
            width: 2px;
            height: 2px;
            animation: twinkle linear infinite;
          }
          
          /* Rain Drops */
          .animation-1 {
            width: 1px;
            height: 4px;
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            animation: rainDrop linear infinite;
          }
          
          /* Floating Orbs */
          .animation-2 {
            width: 3px;
            height: 3px;
            animation: floatingOrb ease-in-out infinite;
          }
          
          /* Shooting Stars */
          .animation-3 {
            width: 2px;
            height: 2px;
            animation: shootingStar linear infinite;
            box-shadow: 0 0 4px white;
          }
          
          @keyframes twinkle {
            0%, 100% { 
              opacity: 0; 
              transform: scale(0.5); 
            }
            25% { 
              opacity: 0.3; 
              transform: scale(1); 
            }
            50% { 
              opacity: 1; 
              transform: scale(1.5); 
            }
            75% { 
              opacity: 0.6; 
              transform: scale(1.2); 
            }
          }
          
          @keyframes rainDrop {
            0% {
              opacity: 0.8;
              transform: translateY(-100vh) translateX(0);
            }
            100% {
              opacity: 0;
              transform: translateY(100vh) translateX(20px);
            }
          }
          
          @keyframes floatingOrb {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.8);
            }
            25% {
              opacity: 0.6;
              transform: translateY(-10px) scale(1.2);
            }
            50% {
              opacity: 1;
              transform: translateY(10px) scale(1);
            }
            75% {
              opacity: 0.4;
              transform: translateY(-5px) scale(1.1);
            }
            100% {
              opacity: 0;
              transform: translateY(-30px) scale(0.5);
            }
          }
          
          @keyframes shootingStar {
            0% {
              opacity: 0;
              transform: translateX(-100px) translateY(-50px) scale(0);
            }
            10% {
              opacity: 1;
              transform: translateX(-50px) translateY(-25px) scale(1);
            }
            90% {
              opacity: 1;
              transform: translateX(200px) translateY(100px) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateX(250px) translateY(125px) scale(0);
            }
          }
          
          .animation-1:nth-child(odd) {
            animation-duration: 8s;
          }
          
          .animation-2:nth-child(3n) {
            animation-direction: reverse;
          }
          
          .animation-3:nth-child(5n) {
            animation-duration: 12s;
          }
        `}</style>

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

            <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold leading-tight 2xl:my-8 xl:my-8 lg:my-6 md:my-6 my-6 bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
              Academic Excellence<br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Delivered Instantly
              </span>
            </h1>

            <p className="2xl:text-lg xl:text-lg lg:text-base md:text-base text-sm text-white leading-relaxed max-w-3xl mx-auto 2xl:mb-12 xl:mb-12 lg:mb-10 md:mb-10 mb-10">
              Transform your academic journey with AI-powered assignment assistance.
              Upload, customize, and receive expert-quality work in minutes, not hours.
              <span className="text-white font-medium"> Experience the future of learning.</span>
            </p>
            <div className='flex flex-col sm:flex-row items-center 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 gap-4 mx-auto w-full justify-center'>
              <button onClick={handleButtonClick} className='group relative text-black bg-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs font-medium'>
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className='group text-white 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs font-medium flex 2xl:gap-3 xl:gap-3 lg:gap-2 md:gap-2 gap-2 items-center justify-center hover:gap-4 transition-all duration-300 hover:text-gray-200'>
                <span>Watch Demo</span>
                <div className="relative">
                  <ChevronRight className='text-white 2xl:size-5 xl:size-5 lg:size-4 md:size-4 size-4 transition-transform duration-300 group-hover:translate-x-1' />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            {/* Main container */}
            <div className="relative bg-gray-900 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl border border-[#111111] shadow-2xl overflow-hidden">
              {/* Browser bar mockup */}
              <div className="bg-[#111111] 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2 flex items-center space-x-2 border-b border-[#111111]">
                <div className="flex space-x-2">
                  <div className="2xl:w-3 xl:w-3 lg:w-2 md:w-2 w-2 2xl:h-3 xl:h-3 lg:h-2 md:h-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="2xl:w-3 xl:w-3 lg:w-2 md:w-2 w-2 2xl:h-3 xl:h-3 lg:h-2 md:h-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="2xl:w-3 xl:w-3 lg:w-2 md:w-2 w-2 2xl:h-3 xl:h-3 lg:h-2 md:h-2 h-2 bg-green-500 rounded-full"></div>
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

      <section id="process" className="bg-black w-full 2xl:h-screen xl:h-screen lg:h-[80vh] md:h-[70vh] h-[60vh] overflow-hidden relative">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url("/parra.jpg")',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              transform: 'translateZ(0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        @keyframes drift {
          0% {
            transform: translateX(-100px) translateY(100vh);
          }
          100% {
            transform: translateX(100px) translateY(-100px);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .scroll-up {
          animation: scrollUp 20s linear infinite;
        }
        
        .scroll-down {
          animation: scrollDown 20s linear infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .drift-animation {
          animation: drift 15s linear infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        /* Staggered delays for natural movement */
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }
        .delay-3 { animation-delay: 3s; }
        .delay-4 { animation-delay: 4s; }
        .delay-5 { animation-delay: 5s; }
        
        .star-shape {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>

        <div
          className="flex flex-col lg:flex-row w-full items-center justify-center 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6 h-full max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 relative z-10 parallax-bg"
          data-parallax
        >
          {/* Parallax Overlay Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating elements for depth */}
            <div className="absolute top-1/4 left-1/4 2xl:w-64 xl:w-64 lg:w-48 md:w-40 w-32 2xl:h-64 xl:h-64 lg:h-48 md:h-40 h-32 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 float-animation"></div>
            <div className="absolute bottom-1/3 right-1/4 2xl:w-96 xl:w-96 lg:w-72 md:w-60 w-48 2xl:h-96 xl:h-96 lg:h-72 md:h-60 h-48 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 float-animation delay-1"></div>
            <div className="absolute top-2/3 right-1/3 2xl:w-80 xl:w-80 lg:w-60 md:w-48 w-40 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-teal-500/10 rounded-full filter blur-3xl opacity-20 float-slow delay-2"></div>
            <div className="absolute top-1/5 right-1/5 2xl:w-40 xl:w-40 lg:w-32 md:w-24 w-20 2xl:h-40 xl:h-40 lg:h-32 md:h-24 h-20 bg-pink-500/10 rounded-full filter blur-3xl opacity-15 float-animation delay-3"></div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 pt-10 md:pt-0">
            <div className="2xl:max-w-lg xl:max-w-lg lg:max-w-md md:max-w-sm max-w-xs flex flex-col 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 gap-4 mx-auto md:mx-0 text-center md:text-start">
              <h1 className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white">Streamline Your Assignment Submission Process Today</h1>
              <h1 className="2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs text-white">SwiftAssign simplifies the way students submit assignments, offering customizable options and expert assistance. Experience a seamless workflow from submission to completion.</h1>
              <div className="flex flex-row items-center 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3 w-full justify-center md:justify-start">
                <button onClick={handleButtonClick} className="text-black bg-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs hover:bg-gray-100 transition-colors">Login</button>
                <button onClick={handleButtonClick} className="text-white border border-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs hover:bg-white hover:text-black transition-colors">Sign Up</button>
              </div>
            </div>
          </div>

          {/* Scrolling Images Section */}
          <div className="w-full lg:w-1/2 h-full grid grid-cols-2 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3 overflow-hidden">
            {/* Left Column - Scrolling Up */}
            <div className="h-full overflow-hidden relative">
              <div className="scroll-up flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3">
                {/* First set */}
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot5.png" alt="Screenshot 5" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot7.png" alt="Screenshot 7" className="w-full h-full object-cover" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot1.png" alt="Screenshot 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot3.png" alt="Screenshot 3" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot5.png" alt="Screenshot 5" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot7.png" alt="Screenshot 7" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Column - Scrolling Down */}
            <div className="h-full overflow-hidden relative">
              <div className="scroll-down flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3">
                {/* First set */}
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot2.png" alt="Screenshot 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot4.png" alt="Screenshot 4" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot6.png" alt="Screenshot 6" className="w-full h-full object-cover" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot2.png" alt="Screenshot 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot4.png" alt="Screenshot 4" className="w-full h-full object-cover" />
                </div>
                <div className="w-full 2xl:h-80 xl:h-80 lg:h-60 md:h-48 h-40 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center 2xl:rounded-xl xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-xl shadow-lg overflow-hidden border border-[#333333]">
                  <Image width={800} height={1600} src="/screenshot6.png" alt="Screenshot 6" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative w-full 2xl:py-20 xl:py-20 lg:py-16 md:py-16 py-16 bg-black'>
        <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        @keyframes drift {
          0% {
            transform: translateX(-100px) translateY(100vh);
          }
          100% {
            transform: translateX(100px) translateY(-100px);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .scroll-up {
          animation: scrollUp 20s linear infinite;
        }
        
        .scroll-down {
          animation: scrollDown 20s linear infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .drift-animation {
          animation: drift 15s linear infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 3s ease-in-out infinite;
        }
        
        /* Staggered delays for natural movement */
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }
        .delay-3 { animation-delay: 3s; }
        .delay-4 { animation-delay: 4s; }
        .delay-5 { animation-delay: 5s; }
        
        .star-shape {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>

        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Drifting particles */}
          <div className="absolute w-2 h-2 bg-white rounded-full drift-animation opacity-30"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full drift-animation delay-2 opacity-20"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full drift-animation delay-4 opacity-25"></div>
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full drift-animation delay-1 opacity-15"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full drift-animation delay-3 opacity-35"></div>

          {/* Sparkling stars */}
          <div className="absolute top-16 left-1/3 w-2 h-2 bg-white star-shape sparkle-animation"></div>
          <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-white star-shape sparkle-animation delay-2"></div>
          <div className="absolute top-1/3 right-16 w-2.5 h-2.5 bg-white star-shape sparkle-animation delay-4"></div>
          <div className="absolute bottom-1/3 left-16 w-1 h-1 bg-white star-shape sparkle-animation delay-1"></div>
          <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-white star-shape sparkle-animation delay-5"></div>

          {/* Additional floating elements */}
          <div className="absolute top-10 left-2/3 w-8 h-0.5 bg-white opacity-10 float-animation delay-3"></div>
          <div className="absolute bottom-10 right-2/3 w-6 h-0.5 bg-white opacity-15 float-animation delay-1"></div>
          <div className="absolute top-2/3 right-10 w-10 h-0.5 bg-white opacity-20 float-animation delay-4"></div>
        </div>

        <div className='w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 py-20 md:py-0'>
          <h1 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-bold text-center 2xl:mb-16 xl:mb-16 lg:mb-12 md:mb-12 mb-12 hidden md:block'>Discover how SwiftAssign simplifies your <br></br> assignment submission process <br></br> effortlessly.</h1>
          <h1 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-2xl text-white font-bold text-center 2xl:mb-16 xl:mb-16 lg:mb-12 md:mb-12 mb-12 md:hidden block'>Discover how<br/> SwiftAssign simplifies<br/> your assignment <br/> submission process <br></br> effortlessly.</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6'>
            {submissionProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className='w-full flex flex-col 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 gap-4 text-center items-center px-4'>
                  <Icon className='text-white 2xl:size-9 xl:size-9 lg:size-8 md:size-7 size-7' />
                  <h1 className='text-white font-semibold 2xl:text-xl xl:text-xl lg:text-lg md:text-base text-xl'>{process.header}</h1>
                  <h1 className='text-white 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs 2xl:mb-1 xl:mb-1 lg:mb-1 md:mb-1 mb-1 px-4'>{process.content}</h1>
                  <button onClick={handleButtonClick} className='text-white 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs flex flex-row items-center justify-center 2xl:gap-2 xl:gap-2 lg:gap-1 md:gap-1 gap-1'>{process.linkName} <LucideChevronRight className='2xl:size-4 xl:size-4 lg:size-3 md:size-3 size-3' /></button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='w-full 2xl:py-20 xl:py-20 lg:py-16 md:py-16 py-16 bg-black'>
        <div className='w-full h-full flex flex-col items-start justify-center max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3'>
          <h1 className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs text-white font-semibold text-start'>Olyvio</h1>
          <h1 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-bold text-start 2xl:my-4 xl:my-4 lg:my-3 md:my-3 my-3 2xl:max-w-xl xl:max-w-xl lg:max-w-lg md:max-w-md max-w-sm'>Explore Our Key Features and <br /> Benefits</h1>
          <h1 className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs text-white font-normal text-start 2xl:mb-16 xl:mb-16 lg:mb-12 md:mb-12 mb-12 2xl:max-w-xl xl:max-w-xl lg:max-w-lg md:max-w-md max-w-sm'>SwiftAssign offers a suite of features designed to enhance your assignment submission experience. From quick delivery options to expert assistance, we have you covered.</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6 w-full'>
            {featuresSection.map((features, index) => {
              const Icon = features.icon;
              return (
                <div key={index} className='w-full flex flex-col 2xl:gap-6 xl:gap-6 lg:gap-4 md:gap-4 gap-4 text-start items-start'>
                  <Icon className='text-white 2xl:size-9 xl:size-9 lg:size-8 md:size-7 size-7' />
                  <h1 className='text-white font-bold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base 2xl:max-w-sm xl:max-w-sm lg:max-w-xs md:max-w-xs max-w-xs'>{features.header}</h1>
                  <h1 className='text-white 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs 2xl:mb-1 xl:mb-1 lg:mb-1 md:mb-1 mb-1'>{features.content}</h1>
                </div>
              )
            })}
          </div>
          <div className='flex flex-row items-center gap-0 2xl:mt-8 xl:mt-8 lg:mt-6 md:mt-6 mt-6'>
            <button onClick={handleButtonClick} className='text-white border border-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs'>Learn More</button>
            <button onClick={handleButtonClick} className='text-white 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs flex 2xl:gap-2 xl:gap-2 lg:gap-1 md:gap-1 gap-1 items-center justify-center'>Sign Up <LucideChevronRight className='text-white 2xl:size-4 xl:size-4 lg:size-3 md:size-3 size-3' /></button>
          </div>
        </div>
      </section>

      <section className='w-full 2xl:py-20 xl:py-20 lg:py-16 md:py-16 py-16 bg-black'>
        <div className='w-full h-full flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6'>
          <div className='flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3'>
            <h1 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-white font-bold text-start'>Quick and Easy Sign Up</h1>
            <h1 className='2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs text-white font-normal text-start'>Join SwiftAssign for seamless assignment submissions.</h1>
          </div>
          <div className='flex flex-col 2xl:gap-1 xl:gap-1 lg:gap-1 md:gap-1 gap-1'>
            <div className='flex flex-row items-center'>
              <input className='border border-[#22222290] placeholder-[#777] text-white 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs bg-[#111111] rounded-md 2xl:px-4 xl:px-4 lg:px-3 md:px-3 px-3 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:w-96 xl:w-96 lg:w-80 md:w-72 w-64' placeholder='Enter your email' />
              <button onClick={handleButtonClick} className='text-white rounded-md 2xl:px-8 xl:px-8 lg:px-6 md:px-6 px-6 2xl:py-2.5 xl:py-2.5 lg:py-2 md:py-2 py-2 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs'>Sign Up</button>
            </div>
            <h1 className='2xl:text-xs xl:text-xs lg:text-xs md:text-xs text-xs text-gray-500 font-normal text-start'>By clicking Sign Up, you agree to our Terms and Conditions.</h1>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="2xl:py-12 xl:py-12 lg:py-10 md:py-10 py-10 2xl:px-8 xl:px-6 lg:px-4 md:px-4 px-4 bg-[#11111170]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 gap-6">
            <div className="col-span-2">
              <div className="2xl:h-6 xl:h-6 lg:h-5 md:h-5 h-5 max-w-fit 2xl:mb-1 xl:mb-1 lg:mb-1 md:mb-1 mb-1">
                <img src="/logo-white.png" alt="" className="h-full w-auto" />
              </div>
              <p className="text-white 2xl:mb-4 xl:mb-4 lg:mb-3 md:mb-3 mb-3 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">
                Empowering students with professional academic support and quality assignments delivered on time.
              </p>
              <div className="flex 2xl:gap-4 xl:gap-4 lg:gap-3 md:gap-3 gap-3">
                <a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">LinkedIn</a>
                <a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Twitter</a>
                <a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Instagram</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white 2xl:mb-4 xl:mb-4 lg:mb-3 md:mb-3 mb-3 2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm">Quick Links</h4>
              <ul className="2xl:space-y-2 xl:space-y-2 lg:space-y-1 md:space-y-1 space-y-1">
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Home</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">About</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Contact</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white 2xl:mb-4 xl:mb-4 lg:mb-3 md:mb-3 mb-3 2xl:text-base xl:text-base lg:text-sm md:text-sm text-sm">Legal</h4>
              <ul className="2xl:space-y-2 xl:space-y-2 lg:space-y-1 md:space-y-1 space-y-1">
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Terms of Service</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Privacy Policy</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#333333] 2xl:mt-8 xl:mt-8 lg:mt-6 md:mt-6 mt-6 2xl:pt-8 xl:pt-8 lg:pt-6 md:pt-6 pt-6 text-center">
            <p className="text-white 2xl:text-sm xl:text-sm lg:text-xs md:text-xs text-xs">© 2025 Olyvio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OlyvioLanding; 