"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Upload, Users, CreditCard, Shield, Star, CheckCircle, Menu, X, ArrowRight, BookOpen, Clock, Award, Zap, LucideImage, LucideFile, LucideClipboardList, LucideChevronRight, LucideMessageCircleQuestionMark, LucideFileSearch, LucideFileSearch2, LucideCircleQuestionMark } from 'lucide-react';
import Truck from './components/ui/Truck';
import Image from 'next/image';

const OlyvioLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black">
        <div className="max-w-7xl mx-auto py-3">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-shrink-0">
              <div className="h-6 2xl:h-8 max-w-fit mb-1">
                <Image src="/logo-white.png" alt="" width={100} height={50} className="h-full w-full" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block flex-shrink-1">
              <div className="ml-10 flex items-baseline space-x-8 font-medium text-sm">
                <button onClick={() => scrollToSection('hero')} className="text-white hover:text-blue-400 transition-colors">Home</button>
                <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-blue-400 transition-colors">How It Works</button>
                <button onClick={() => scrollToSection('features')} className="text-white hover:text-blue-400 transition-colors">Features</button>
                <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-blue-400 transition-colors">Pricing</button>
              </div>
            </div>

            <div className='flex flex-row gap-2 flex-shrink-0'>
              <button className='text-white border border-white rounded-md px-8 py-2 text-sm'>Join</button>
              <button className='text-black bg-white rounded-md px-8 py-2 text-sm'>Start</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-white hover:text-blue-400 transition-colors">Pricing</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
          <div className="text-center mb-16">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight my-8 bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
              Academic Excellence<br />
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Delivered Instantly
              </span>
            </h1>

            <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto mb-12">
              Transform your academic journey with AI-powered assignment assistance.
              Upload, customize, and receive expert-quality work in minutes, not hours.
              <span className="text-white font-medium"> Experience the future of learning.</span>
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-6 mx-auto w-full justify-center'>
              <button className='group relative text-black bg-white rounded-md px-8 py-2.5 text-sm font-medium '>
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className='group text-white px-8 py-3 text-sm font-medium flex gap-3 items-center justify-center hover:gap-4 transition-all duration-300 hover:text-gray-200'>
                <span>Watch Demo</span>
                <div className="relative">
                  <ChevronRight className='text-white size-5 transition-transform duration-300 group-hover:translate-x-1' />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            {/* Main container */}
            <div className="relative bg-gray-900 rounded-2xl border border-[#111111] shadow-2xl overflow-hidden">
              {/* Browser bar mockup */}
              <div className="bg-[#111111] px-4 py-3 flex items-center space-x-2 border-b border-[#111111]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#222222] rounded px-3 py-1 text-xs text-white">
                    https://app.olyvio.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard image */}
              <div className="relative">
                <Image
                  src="/hero.png"
                  alt="Olyvio Dashboard - Streamlined assignment management interface"
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                  priority
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="process" className="bg-black w-full h-screen overflow-hidden relative">
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
          className="flex flex-row w-full items-center justify-center gap-8 h-full max-w-7xl mx-auto px-4 relative z-10 parallax-bg"
          data-parallax
        >
          {/* Parallax Overlay Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating elements for depth */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 float-animation"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 float-animation delay-1"></div>
            <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl opacity-20 float-slow delay-2"></div>
            <div className="absolute top-1/5 right-1/5 w-40 h-40 bg-pink-500/10 rounded-full filter blur-3xl opacity-15 float-animation delay-3"></div>
          </div>
          {/* Content Section */}
          <div className="w-1/2">
            <div className="max-w-lg flex flex-col gap-6">
              <h1 className="text-5xl font-bold text-white">Streamline Your Assignment Submission Process Today</h1>
              <h1 className="text-sm text-white">SwiftAssign simplifies the way students submit assignments, offering customizable options and expert assistance. Experience a seamless workflow from submission to completion.</h1>
              <div className="flex flex-row items-center gap-4">
                <button className="text-black bg-white rounded-md px-8 py-2.5 text-sm hover:bg-gray-100 transition-colors">Login</button>
                <button className="text-white border border-white rounded-md px-8 py-2.5 text-sm hover:bg-white hover:text-black transition-colors">Sign Up</button>
              </div>
            </div>
          </div>

          {/* Scrolling Images Section */}
          <div className="w-1/2 h-full grid grid-cols-2 gap-4 overflow-hidden">
            {/* Left Column - Scrolling Up */}
            <div className="h-full overflow-hidden relative">
              <div className="scroll-up flex flex-col gap-4">
                {/* First set */}
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Upload className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <BookOpen className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <CheckCircle className="text-white size-16" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Upload className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <BookOpen className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <CheckCircle className="text-white size-16" />
                </div>
              </div>
            </div>

            {/* Right Column - Scrolling Down */}
            <div className="h-full overflow-hidden relative">
              <div className="scroll-down flex flex-col gap-4">
                {/* First set */}
                <div className="w-full h-80 bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Users className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Clock className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Award className="text-white size-16" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="w-full h-80 bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Users className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Clock className="text-white size-16" />
                </div>
                <div className="w-full h-80 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center rounded-2xl shadow-lg">
                  <Award className="text-white size-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative w-full py-20 bg-black'>
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

        <div className='w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto'>
          <h1 className='text-3xl text-white font-bold text-center mb-16'>Discover how SwiftAssign simplifies your <br></br> assignment submission process <br></br> effortlessly.</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {submissionProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className='w-full flex flex-col gap-6 text-center items-center'>
                  <Icon className='text-white size-9' />
                  <h1 className='text-white font-semibold text-xl'>{process.header}</h1>
                  <h1 className='text-white text-sm mb-1'>{process.content}</h1>
                  <button className='text-white text-sm flex flex-row items-center justify-center gap-2'>{process.linkName} <LucideChevronRight className='size-4' /></button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-black'>
        <div className='w-full h-full flex flex-col items-start justify-center max-w-7xl mx-auto'>
          <h1 className='text-sm text-white font-semibold text-start'>Olyvio</h1>
          <h1 className='text-3xl text-white font-bold text-start my-4 max-w-xl'>Explore Our Key Features and <br /> Benefits</h1>
          <h1 className='text-sm text-white font-normal text-start mb-16 max-w-xl'>SwiftAssign offers a suite of features designed to enhance your assignment submission experience. From quick delivery options to expert assistance, we have you covered.</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {featuresSection.map((features, index) => {
              const Icon = features.icon;
              return (
                <div key={index} className='w-full flex flex-col gap-6 text-start items-start'>
                  <Icon className='text-white size-9' />
                  <h1 className='text-white font-bold text-2xl max-w-sm'>{features.header}</h1>
                  <h1 className='text-white text-sm mb-1'>{features.content}</h1>
                </div>
              )
            })}
            <div className='flex flex-row items-center gap-0'>
              <button className='text-black border border-black rounded-md px-8 py-2.5 text-sm'>Learn More</button>
              <button className='text-black px-8 py-2.5 text-sm flex gap-2 items-center justify-center'>Sign Up <LucideChevronRight className='text-black size-4' /></button>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full py-20 bg-black'>
        <div className='w-full h-full flex flex-row items-start justify-between max-w-7xl mx-auto'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl text-white font-bold text-start'>Quick and Easy Sign Up</h1>
            <h1 className='text-sm text-white font-normal text-start'>Join SwiftAssign for seamless assignment submissions.</h1>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex flex-row items-center'>
              <input className='border border-[#22222290] placeholder-[#777] text-white text-sm bg-[#111111] rounded-md px-4 py-2.5 w-96' placeholder='Enter your email' />
              <button className='text-white rounded-md px-8 py-2.5 text-sm'>Sign Up</button>
            </div>
            <h1 className='text-xs text-black font-normal text-start'>By clicking Sign Up, you agree to our Terms and Conditions.</h1>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#11111170]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="h-6 2xl:h-8 max-w-fit mb-1">
                <Image src="/logo-white.png" alt="" width={100} height={50} className="h-full w-full" />
              </div>
              <p className="text-white mb-4">
                Empowering students with professional academic support and quality assignments delivered on time.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[#fafafa] transition-colors">LinkedIn</a>
                <a href="#" className="text-[#fafafa] transition-colors">Twitter</a>
                <a href="#" className="text-[#fafafa] transition-colors">Instagram</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#fafafa] transition-colors">Home</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors">About</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors">Contact</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#fafafa] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-[#fafafa] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#333333] mt-8 pt-8 text-center">
            <p className="text-white">© 2025 Olyvio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OlyvioLanding;