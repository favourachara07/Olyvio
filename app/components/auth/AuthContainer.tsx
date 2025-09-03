import { LucideSun } from "lucide-react";
import Logo from "../logo";

type AuthContainerProps = {
  children: React.ReactNode;
};

export default function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center border-b border-[#E6E6E6]">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <div className="border border-[#E6E6E6] rounded-md p-2">
          <LucideSun className="size-6 text-[#7E7E7E]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Section - Auth Form */}
        <div className="w-1/2 flex items-center justify-center px-8 py-12">
          <div className="rounded-xl border border-[#D9D9D9] bg-white px-8 py-12 w-full max-w-md font-montserrat shadow-sm">
            {children}
          </div>
        </div>

        {/* Right Section - Background Image & Text */}
        <div className="w-1/2 relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center">
          {/* Background Pattern/Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-12 max-w-md">
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Welcome to the Future
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Experience seamless authentication with our modern, secure platform designed for the next generation.
              </p>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Lightning-fast authentication</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Trusted by thousands of users</span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/3 left-8 w-2 h-2 bg-white/40 rounded-full"></div>
          <div className="absolute bottom-1/3 right-8 w-2 h-2 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}