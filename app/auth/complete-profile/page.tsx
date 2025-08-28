"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContainer from "@/app/components/auth/AuthContainer";
import CompleteProfile from "@/app/components/auth/CompleteProfile";

export default function CompleteProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // TODO: Replace with actual authentication check
    const checkAuth = async () => {
      try {
        // Simulate API call to check authentication
        await new Promise(resolve => setTimeout(resolve, 500));
        // For now, we'll assume the user is authenticated
        // In a real app, you would check for a valid session/token
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Authentication check failed:', error);
        router.push('/auth/signin');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleComplete = () => {
    // Redirect to dashboard after profile completion
    router.push('/dashboard');
  };

  if (isLoading) {
    return (
      <AuthContainer>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </AuthContainer>
    );
  }

  if (!isAuthenticated) {
    return null; // or redirect to sign-in
  }

  return (
    <AuthContainer>
      <CompleteProfile onComplete={handleComplete} />
    </AuthContainer>
  );
}
