"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthContainer from "@/app/components/auth/AuthContainer";
import { FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle sign in logic here
    console.log("Signing in with:", formData);
    router.push('/dashboard');
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AuthContainer>
      <div className="text-start">
        <h1 className="text-xl font-semibold font-montserrat text-black">Welcome back</h1>
        <p className="mt-1 text-xs font-montserrat text-[#A2A2A2]">
          Enter your email below to log in to your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-black mb-1">
              Email
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
                placeholder="you@example.com"
                className="block w-full pl-10 pr-3 py-2.5 border border-[#D9D9D9] rounded-md bg-white text-[#6C6C6C] placeholder-[#6C6C6C] text-xs"
              />
            </div>
          </div>

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
                autoComplete="current-password"
                required
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
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-end">
            <Link
              href="/auth/forgot"
              className="text-xs font-medium text-black hover:text-black/80 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-xs font-medium text-white bg-black ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 w-full">
        <div className="flex items-center justify-center">
          <div className="w-full border-t border-[#D9D9D9]" />
          <h1 className="px-2 text-[10px] text-[#6C6C6C] uppercase text-nowrap">
            Or continue with
          </h1>
          <div className="w-full border-t border-[#D9D9D9]" />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-[#D9D9D9] rounded-lg text-xs font-medium text-black bg-white mt-6"
        >
          <FaGoogle className="size-4" />
          Google
        </button>
      </div>

      <div className="mt-6">
        <p className="text-center text-xs text-black">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="font-semibold text-black">
            Sign up
          </Link>
        </p>
      </div>
    </AuthContainer>
  );
}