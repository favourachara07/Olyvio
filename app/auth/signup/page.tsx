"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, BookOpen, GraduationCap, DollarSign, Eye, EyeOff } from "lucide-react";
import AuthContainer from "@/app/components/auth/AuthContainer";

type Tab = "student" | "expert";

interface FormData {
  name: string;
  email: string;
  password: string;
  institution?: string;
  expertise?: string;
  pricePerPage?: string;
}

export default function SignUp() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    institution: "",
    expertise: "",
    pricePerPage: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/dashboard/${tab}`);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AuthContainer>
      <div className="text-start">
        <h1 className="text-xl font-semibold font-montserrat text-black">Create your account</h1>
        <p className="mt-1 text-xs font-montserrat text-[#A2A2A2]">
          Join Olyvio as a {tab === "student" ? "student" : "SwiftAssigner"}
        </p>
      </div>

      {/* <div className="mt-6 grid grid-cols-2 rounded-lg border border-slate-200 dark:border-slate-700 p-1 text-sm">
        <button 
          onClick={() => setTab("student")} 
          className={`flex items-center justify-center gap-2 py-2.5 rounded-md transition-colors ${
            tab === "student" 
              ? "bg-indigo-600 text-white" 
              : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          Student
        </button>
        <button 
          onClick={() => setTab("expert")} 
          className={`flex items-center justify-center gap-2 py-2.5 rounded-md transition-colors ${
            tab === "expert" 
              ? "bg-indigo-600 text-white" 
              : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          }`}
        >
          <User className="h-4 w-4" />
          Expert
        </button>
      </div> */}

      <form onSubmit={handleSubmit} className="mt-4 space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-black mb-1">
            Full name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="size-5 text-[#6C6C6C]" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={tab === "student" ? "Jane Doe" : "John Smith"}
              className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-black mb-1">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="size-5 text-[#6C6C6C]" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={tab === "student" ? "you@school.edu" : "you@example.com"}
              className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
            />
          </div>
        </div>

        {tab === "student" ? (
          <div>
            <label htmlFor="institution" className="block text-xs font-medium text-black mb-1">
              Matric number / Institution
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BookOpen className="size-5 text-[#6C6C6C]" />
              </div>
              <input
                id="institution"
                name="institution"
                type="text"
                required
                value={formData.institution}
                onChange={handleChange}
                placeholder="MAT12345 • Uni of Lagos"
                className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
              />
            </div>
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="expertise" className="block text-xs font-medium text-black mb-1">
                Areas of Expertise
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="size-5 text-[#6C6C6C]" />
                </div>
                <input
                  id="expertise"
                  name="expertise"
                  type="text"
                  required
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="e.g., Economics, Nursing, Computer Science"
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pricePerPage" className="block text-xs font-medium text-black mb-1">
                Rate per page (USD)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="size-5 text-[#6C6C6C]" />
                </div>
                <input
                  id="pricePerPage"
                  name="pricePerPage"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  value={formData.pricePerPage}
                  onChange={handleChange}
                  placeholder="25.00"
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                />
              </div>
            </div>
          </>
        )}

        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-xs font-medium text-black mb-1">
              Password
            </label>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="size-5 text-[#6C6C6C]" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={8}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6C6C6C]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="mt-1 text-xs text-[#6C6C6C]">
            Must be at least 8 characters
          </p>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-xs font-medium text-white bg-black ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </>
            ) : (
              `Sign up`
            )}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <p className="text-center text-xs text-black">
          Already have an account?{' '}
          <Link href="/auth/signin" className="font-semibold text-black">
            Sign in
          </Link>
        </p>
      </div>
    </AuthContainer>
  );
}
