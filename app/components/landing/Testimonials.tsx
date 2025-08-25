'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Student",
    content: "Olyvio connected me with an expert who helped me understand complex algorithms. My grades improved significantly after just one session!",
    avatar: "/images/avatars/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "MBA Candidate",
    content: "The quality of research and writing exceeded my expectations. I've recommended Olyvio to all my classmates.",
    avatar: "/images/avatars/michael.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Engineering Student",
    content: "As an international student, I needed help with technical writing. My expert was patient and helped me improve my writing skills.",
    avatar: "/images/avatars/emily.jpg"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300 mx-auto">
            Join thousands of students who have achieved academic success with Olyvio
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden">
              <div className="relative">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
                        <Quote className="h-8 w-8 text-indigo-400 mb-6" />
                        <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-6">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium text-slate-900 dark:text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-slate-600 dark:text-slate-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    currentSlide === index
                      ? 'bg-indigo-600 w-6'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
