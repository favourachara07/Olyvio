import React from 'react';
import { ArrowRight, Star, Check, Play, Users, FileText, Clock, Award } from 'lucide-react';
import Navigation from './components/Navigation';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Assign anything to
            <br />
            <span className="text-emerald-400">experts</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get professional academic help in seconds. From essays to research papers -
            connect with verified experts instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-emerald-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-colors flex items-center justify-center gap-2">
              <Play size={20} />
              Try for free
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Check size={16} className="text-emerald-400" />
            <span>No credit card required. Free 7-day trial</span>
          </div>
        </div>

        {/* Dashboard Image Placeholder */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 aspect-video flex items-center justify-center">
            <div className="text-center">
              <FileText size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">Dashboard Preview Image Goes Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="px-6 py-12 md:px-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by 500K+ companies and businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            <div className="flex items-center gap-2">
              <Users size={24} />
              <span className="font-semibold">StudyGroup</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={24} />
              <span className="font-semibold">AcademicHub</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={24} />
              <span className="font-semibold">EduTech</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={24} />
              <span className="font-semibold">QuickAssign</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={24} />
              <span className="font-semibold">ExpertLink</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovate, collaborate,
            <br />
            & bring your ideas to life
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Seamlessly collaborate and bring your ideas to life. We handle the infrastructure,
            you focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Feature Cards */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Check size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">VPS Status</h3>
                  <p className="text-gray-400">Real-time monitoring</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-emerald-400 mb-2">99.9%</div>
              <p className="text-gray-400">Uptime guaranteed</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Affordable Expert Matching with flexibility and privacy</h3>
              <p className="text-gray-400 mb-6">
                Connect with qualified academic experts who understand your specific needs.
                Our platform ensures quality, privacy, and timely delivery.
              </p>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-sm">Learn more</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Features */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-semibold mb-6">A Student View</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Essays</span>
                  <span className="text-white">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Research Papers</span>
                  <span className="text-white">1,923</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Assignments</span>
                  <span className="text-white">5,671</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-4">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                </div>
                <p className="text-sm text-gray-400">76% completion rate this month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-2">24/7</div>
                <p className="text-gray-400 text-sm">Expert Support</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-2">500+</div>
                <p className="text-gray-400 text-sm">Verified Experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
            Our Services
          </h2>

          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Secure, versatile, and
              <br />
              cost-effective solutions
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Connect with top-tier academic professionals across all disciplines.
              Get personalized help that fits your schedule and budget.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center hover:border-emerald-500 transition-colors">
              <FileText size={32} className="text-emerald-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Essays</h4>
              <p className="text-gray-400 text-sm">Professional essay writing and editing services</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center hover:border-emerald-500 transition-colors">
              <Users size={32} className="text-emerald-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Research</h4>
              <p className="text-gray-400 text-sm">In-depth research and analysis support</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center hover:border-emerald-500 transition-colors">
              <Clock size={32} className="text-emerald-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Tutoring</h4>
              <p className="text-gray-400 text-sm">One-on-one tutoring sessions</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center hover:border-emerald-500 transition-colors">
              <Award size={32} className="text-emerald-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Projects</h4>
              <p className="text-gray-400 text-sm">Complete project assistance and guidance</p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6">
              Fast and reliable expert matching
              <br />
              for your needs
            </h4>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our advanced matching algorithm connects you with the most qualified experts
              for your specific academic requirements in under 60 seconds.
            </p>
            <button className="bg-emerald-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-24 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Try our standard
                <br />
                plan today!
              </h2>
              <p className="text-gray-400 mb-8">
                Get comprehensive academic support with our affordable platform for expert assignment help.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-emerald-400" />
                  <span>5 free submissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-emerald-400" />
                  <span>1 MB storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-emerald-400" />
                  <span>Unlimited transfers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block mb-6">
                  Entry
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$2.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <button className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Buy Now
                </button>
              </div>

              {/* Background building illustration placeholder */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gray-800 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-24 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
              Testimonials
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Don't take our word for it
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-emerald-500 text-black rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="font-medium mb-6">
                "Syed is truly a game-changing tool for my sales process. I don't know what I'd do without Syed."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full"></div>
                <div>
                  <p className="font-semibold">Alex Rodriguez</p>
                  <p className="text-sm opacity-80">Computer Science Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" className="text-emerald-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The expert matching is incredible. Found the perfect tutor for my dissertation in minutes. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-gray-400 text-sm">Graduate Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" className="text-emerald-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Game changer for academic support. The quality of work and quick turnaround exceeded my expectations."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div>
                  <p className="font-semibold">Michael Thompson</p>
                  <p className="text-gray-400 text-sm">MBA Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-2 bg-emerald-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to get expert help?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students who trust our platform for their academic success.
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors">
              Get Started Free
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-500 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold">AssignExpert</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting students with verified academic experts for quality assignment help.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Features</a>
                <a href="#" className="block hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block hover:text-white transition-colors">API</a>
                <a href="#" className="block hover:text-white transition-colors">Documentation</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-white transition-colors">Status</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 AssignExpert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;