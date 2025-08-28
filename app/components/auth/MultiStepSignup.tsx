"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, GraduationCap, Eye, EyeOff, ArrowLeft, Check, Frown, BookOpen } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa6";

interface SignupFormData {
  email: string;
  password: string;
  name: string;
  institution: string;
  fieldOfStudy: string;
  academicLevel: string;
  graduationYear: string;
  profilePicture?: string;
  authMethod: 'email' | 'google';
}

interface MultiStepSignupProps {
  onComplete: () => void;
}

const MultiStepSignup: React.FC<MultiStepSignupProps> = ({ onComplete }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<'email' | 'google' | null>(null);
  const [formData, setFormData] = useState<SignupFormData>({
    email: "",
    password: "",
    name: "",
    institution: "",
    fieldOfStudy: "",
    academicLevel: "",
    graduationYear: new Date().getFullYear().toString(),
    authMethod: 'email'
  });

  const steps = [
    { id: 1, name: 'Account', status: 'current' },
    { id: 2, name: 'Education', status: 'upcoming' },
    { id: 3, name: 'Complete Profile', status: 'upcoming' },
  ];

  // Simulate Google Auth
  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      // In a real app, this would be handled by NextAuth.js or similar
      const googleUser = {
        name: 'John Doe', // Would come from Google
        email: 'john@example.com', // Would come from Google
        picture: 'https://example.com/avatar.jpg' // Would come from Google
      };

      setFormData(prev => ({
        ...prev,
        name: googleUser.name,
        email: googleUser.email,
        profilePicture: googleUser.picture,
        authMethod: 'google'
      }));

      setAuthMethod('google');
      setCurrentStep(2); // Skip to education step
    } catch (error) {
      console.error('Google sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle manual email signup
  const handleEmailSignUp = () => {
    setAuthMethod('email');
    setCurrentStep(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRoleSelect = (role: string) => {
    // Role selection is no longer needed as we're focusing on students only
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Call the onComplete callback after successful signup
      onComplete();
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
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
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium text-black mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="size-5 text-[#6C6C6C]" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-10 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-5 text-[#6C6C6C]" />
                    ) : (
                      <Eye className="size-5 text-[#6C6C6C]" />
                    )}
                  </button>
                </div>
                {/* <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p> */}
              </div>
              <button
                  type="button"
                  onClick={handleEmailSignUp}
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2.5 text-xs font-medium text-white disabled:opacity-50"
                >
                  Sign up
                </button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-gray-500 text-[10px] uppercase">Or continue with</span>
                </div>
              </div>
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={handleGoogleSignUp}
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  <FaGoogle className="size-4" />
                  Google
                </button>
              </div>

            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
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
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="institution" className="block text-xs font-medium text-black mb-1">
                School/University
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="size-5 text-[#6C6C6C]" />
                </div>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                  placeholder="Your school or university"
                />
              </div>
            </div>

            <div>
              <label htmlFor="fieldOfStudy" className="block text-xs font-medium text-black mb-1">
                Field of Study
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BookOpen className="size-5 text-[#6C6C6C]" />
                </div>
                <input
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  type="text"
                  required
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
                  placeholder="e.g., Computer Science, Business"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="academicLevel" className="block text-xs font-medium text-black mb-1">
                  Academic Level
                </label>
                <select
                  id="academicLevel"
                  name="academicLevel"
                  required
                  value={formData.academicLevel}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] text-xs"
                >
                  <option value="">Select level</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="masters">Master's</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="graduationYear" className="block text-xs font-medium text-black mb-1">
                  Graduation Year
                </label>
                <select
                  id="graduationYear"
                  name="graduationYear"
                  required
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="block w-full pl-3 pr-10 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] text-xs"
                >
                  <option value="">Select year</option>
                  {Array.from({ length: 6 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return <option key={year} value={year.toString()}>{year}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <nav aria-label="Progress" className="mb-8">
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={`${stepIdx !== steps.length - 1 ? 'flex-1' : ''} relative`}>
              {stepIdx < currentStep ? (
                <>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-black" />
                  </div>
                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-black">
                    <Check className="h-4 w-4 text-white" aria-hidden="true" />
                    <span className="sr-only">{step.name}</span>
                  </div>
                </>
              ) : stepIdx === currentStep ? (
                <>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <div
                    className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-white"
                    aria-current="step"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-black" aria-hidden="true" />
                    <span className="sr-only">{step.name}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <div className="group relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true" />
                    <span className="sr-only">{step.name}</span>
                  </div>
                </>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-4 flex justify-between text-xs text-gray-500">
          {steps.map((step) => (
            <div key={step.id} className={`${currentStep >= step.id ? 'text-black font-medium' : ''}`}>
              {step.name}
            </div>
          ))}
        </div>
      </nav>

      <div className="mb-6">
        {renderStep()}
      </div>

      <div className="flex justify-between">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-indigo-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <div />
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="ml-auto inline-flex items-center justify-center rounded-md bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg className="-ml-1 mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {currentStep === steps.length ? 'Creating Account...' : 'Continue'}
            </>
          ) : (
            <>{currentStep === steps.length ? 'Create Account' : 'Continue'}</>
          )}
        </button>
      </div>
    </form>
  );
};

export default MultiStepSignup;
