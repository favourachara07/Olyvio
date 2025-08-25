"use client";
import AuthContainer from "@/app/components/auth/AuthContainer";

export default function ForgotPassword() {
  return (
    <AuthContainer>
      <h1 className="text-xl font-semibold tracking-tight">Reset your password</h1>
      <p className="mt-1 text-sm text-slate-600">Enter your email and we’ll send you a reset link.</p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" required placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <button type="submit" className="w-full rounded-lg bg-indigo-600 text-white py-2.5 font-medium hover:bg-indigo-500">Send reset link</button>
      </form>
    </AuthContainer>
  );
}
