"use client";

import React, { useState } from 'react';
import { ArrowRight, Star, Check, Play, Users, FileText, Clock, Award, Menu, X, BookOpen, Target, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const RedesignedLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-white">AssignExpert</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Features</a>
            <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Services</a>
            <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">Reviews</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors font-medium">Sign In</button>
            <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight size={16} className="mt-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</a>
              <a href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors">Reviews</a>
              <div className="pt-4 border-t border-gray-800 flex flex-col space-y-2">
                <button className="text-left text-gray-300">Sign In</button>
                <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium text-left flex items-center justify-between w-full">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Enhanced */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <Zap size={18} className="text-emerald-400" />
            <span className="text-emerald-400 font-medium">New: AI-Powered Expert Matching</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Connect with Academic
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Experts Instantly
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get professional academic help in under 60 seconds. From complex essays to research papers -
            connect with verified experts who understand your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group bg-emerald-500 text-black px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-400 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1">
              Start Free Trial
              <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-gray-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-200 flex items-center justify-center gap-3">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-400" />
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-emerald-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview - Enhanced */}
        <div className="relative max-w-6xl mx-auto mt-20">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 aspect-video overflow-hidden shadow-2xl">
            {/* Mock Dashboard Interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
                    <span className="text-white font-semibold">Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-4 bg-gray-700 rounded mb-3"></div>
                    <div className="w-3/4 h-3 bg-gray-600 rounded"></div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-4 bg-emerald-500/20 rounded mb-3"></div>
                    <div className="w-2/3 h-3 bg-gray-600 rounded"></div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="w-full h-4 bg-gray-700 rounded mb-3"></div>
                    <div className="w-1/2 h-3 bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="text-center opacity-60">
                  <FileText size={32} className="text-emerald-400 mx-auto mb-2" />
                  <p className="text-gray-400">Expert Matching Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-8">Trusted by 50,000+ students worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Active Students", value: "50K+" },
              { icon: Award, label: "Expert Tutors", value: "2,500+" },
              { icon: FileText, label: "Completed Projects", value: "100K+" },
              { icon: Star, label: "Average Rating", value: "4.9/5" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400 font-medium text-sm">Why Choose AssignExpert</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Academic Success,
              <br />
              <span className="text-emerald-400">Simplified</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with human expertise to deliver
              exceptional academic support tailored to your specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Smart Expert Matching</h3>
                    <p className="text-gray-400 mb-4">
                      Our AI-powered algorithm matches you with the most qualified experts
                      based on your subject, academic level, and specific requirements.
                    </p>
                    <div className="text-emerald-400 font-semibold">99.2% Match Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
                    <p className="text-gray-400 mb-4">
                      All our experts are verified professionals with advanced degrees.
                      Every project includes unlimited revisions and plagiarism checking.
                    </p>
                    <div className="text-blue-400 font-semibold">100% Original Work</div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Lightning Fast Delivery</h3>
                    <p className="text-gray-400 mb-4">
                      Get connected with experts in under 60 seconds. Rush orders available
                      with delivery as fast as 3 hours for urgent assignments.
                    </p>
                    <div className="text-purple-400 font-semibold">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Stats */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30">
                <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Live Performance</h3>
                <div className="space-y-6">
                  {[
                    { label: "Active Experts Online", value: "1,247", trend: "+12%" },
                    { label: "Projects Completed Today", value: "89", trend: "+8%" },
                    { label: "Average Response Time", value: "< 2 min", trend: "-15%" },
                    { label: "Client Satisfaction", value: "98.7%", trend: "+2%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-300">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-semibold text-lg">{item.value}</span>
                        <span className="text-emerald-400 text-sm font-medium">{item.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-800/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full animate-pulse" style={{ width: '87%' }}></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">87% of projects delivered ahead of schedule</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 text-center group hover:border-emerald-500/50 transition-all duration-300">
                  <Globe className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-emerald-400 mb-2">150+</div>
                  <p className="text-gray-400 text-sm">Countries Served</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 text-center group hover:border-emerald-500/50 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-blue-400 mb-2">94%</div>
                  <p className="text-gray-400 text-sm">Return Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="px-6 py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 font-medium text-sm">Our Expertise</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Academic
              <br />
              <span className="text-blue-400">Support Services</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              From essay writing to complex research projects, our verified experts
              provide personalized support across all academic disciplines and levels.
            </p>
          </div>

          {/* Enhanced Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: BookOpen,
                title: "Essay Writing",
                description: "Custom essays, research papers, and academic writing with proper citations",
                color: "emerald"
              },
              {
                icon: Users,
                title: "Research Support",
                description: "Literature reviews, data analysis, and comprehensive research assistance",
                color: "blue"
              },
              {
                icon: Target,
                title: "1-on-1 Tutoring",
                description: "Personalized tutoring sessions with subject matter experts",
                color: "purple"
              },
              {
                icon: Award,
                title: "Project Guidance",
                description: "End-to-end support for complex assignments and capstone projects",
                color: "orange"
              }
            ].map((service, i) => (
              <div key={i} className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-${service.color}-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-${service.color}-500/10 hover:-translate-y-2`}>
                <div className={`w-12 h-12 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-3">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-semibold mb-6">
              Get matched with the perfect expert
              <br />
              <span className="text-emerald-400">in under 60 seconds</span>
            </h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Our advanced algorithm analyzes your requirements and connects you with
              the most qualified expert for your specific academic needs.
            </p>
            <button className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
              Start Free Consultation
              <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section id="pricing" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400 font-medium text-sm">Simple Pricing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start your academic
                <br />
                <span className="text-emerald-400">success journey</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Get comprehensive academic support with transparent pricing.
                No hidden fees, no long-term contracts.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "5 free expert consultations",
                  "Unlimited project submissions",
                  "24/7 customer support",
                  "Plagiarism checking included",
                  "Unlimited revisions"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-emerald-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                  Most Popular
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 mb-6">
                  Start Free Trial
                </button>
                <div className="text-center text-sm text-gray-400">
                  Cancel anytime • No commitments
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="px-6 py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-400 font-medium text-sm">Student Success Stories</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              What students say about
              <br />
              <span className="text-purple-400">AssignExpert</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Enhanced Testimonial Cards */}
            {[
              {
                rating: 5,
                text: "AssignExpert completely transformed my academic performance. The expert I worked with understood exactly what I needed and delivered exceptional quality work.",
                name: "Sarah Chen",
                role: "Graduate Student, MIT",
                avatar: "bg-gradient-to-br from-emerald-500 to-emerald-600",
                highlight: true
              },
              {
                rating: 5,
                text: "The turnaround time is incredible! I got matched with a perfect expert in under 2 minutes and received my completed assignment ahead of schedule.",
                name: "Alex Rodriguez",
                role: "Computer Science, Stanford",
                avatar: "bg-gradient-to-br from-blue-500 to-blue-600"
              },
              {
                rating: 5,
                text: "Quality work, reasonable prices, and amazing support. I've used AssignExpert for multiple projects and they never disappoint.",
                name: "Michael Thompson",
                role: "MBA Student, Harvard",
                avatar: "bg-gradient-to-br from-purple-500 to-purple-600"
              }
            ].map((testimonial, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${testimonial.highlight
                  ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-500/30'
                  : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50'
                }`}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to excel in your
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  academic journey?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of students who trust AssignExpert for their academic success.
                Get started with your free trial today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-emerald-400 hover:to-blue-400 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                  Start Free Trial
                  <ArrowRight size={20} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-gray-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-200">
                  View Pricing
                </button>
              </div>

              <div className="text-gray-400 text-sm">
                No credit card required • Cancel anytime • 7-day free trial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="px-6 py-16 border-t border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-semibold">AssignExpert</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Connecting students with verified academic experts for quality assignment help.
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons placeholder */}
                <div className="w-8 h-8 bg-gray-800 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg hover:bg-purple-500 transition-colors cursor-pointer"></div>
              </div>
            </div>

            {[
              {
                title: "Services",
                links: ["Essay Writing", "Research Papers", "Tutoring", "Project Help"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "Live Chat", "FAQ"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press"]
              }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <div className="space-y-3 text-sm text-gray-400">
                  {section.links.map((link, j) => (
                    <a key={j} href="#" className="block hover:text-emerald-400 transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 AssignExpert. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RedesignedLandingPage;