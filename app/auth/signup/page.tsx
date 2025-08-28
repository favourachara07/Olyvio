"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AuthContainer from "@/app/components/auth/AuthContainer";
import MultiStepSignup from "@/app/components/auth/MultiStepSignup";

export default function SignUp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isComplete, setIsComplete] = useState(false);

  // Check if we're coming from a signup redirect
  useEffect(() => {
    const complete = searchParams?.get('complete') === 'true';
    setIsComplete(complete);
  }, [searchParams]);

  const handleSignupComplete = () => {
    // After successful signup, redirect to profile completion
    router.push('/auth/complete-profile');
  };

  return (
    <AuthContainer>
      {isComplete ? (
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-3 text-lg font-medium text-gray-900">Account created successfully!</h2>
          <p className="mt-2 text-sm text-gray-500">
            Please complete your profile to get started with Olyvio.
          </p>
          <div className="mt-6">
            <Link
              href="/auth/complete-profile"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Complete Profile
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="text-start">
            <h1 className="text-xl font-semibold font-montserrat text-black">Create your account</h1>
            <p className="mt-1 text-xs font-montserrat text-[#A2A2A2]">
              Join Olyvio to get started
            </p>
          </div>
          
          <div className="mt-6">
            <MultiStepSignup onComplete={handleSignupComplete} />
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>
            </p>
          </div>
        </>
      )}
    </AuthContainer>
  );
}
