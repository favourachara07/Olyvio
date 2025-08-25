import Link from "next/link";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#f9fafb] dark:bg-[#0b0c10]">
      <Navbar />
      
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-24">

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-slate-900 dark:text-white">
              Your AI partner for assignments, research and projects
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base md:text-lg">
              Olyvio connects students with vetted experts (SwiftAssigners) to get high‑quality help, securely and on time.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/auth/signup" className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">Get started</Link>
              <Link href="#features" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800">Learn more</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-8 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-indigo-50 text-indigo-700 p-4"><div className="text-xs">Average rating</div><div className="mt-1 text-2xl font-semibold">4.9★</div></div>
              <div className="rounded-xl bg-cyan-50 text-cyan-700 p-4"><div className="text-xs">On-time delivery</div><div className="mt-1 text-2xl font-semibold">98%</div></div>
              <div className="rounded-xl bg-emerald-50 text-emerald-700 p-4"><div className="text-xs">Experts</div><div className="mt-1 text-2xl font-semibold">500+</div></div>
              <div className="rounded-xl bg-amber-50 text-amber-700 p-4"><div className="text-xs">Countries</div><div className="mt-1 text-2xl font-semibold">30+</div></div>
            </div>
          </div>
        </div>
      </section>

        <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Olyvio. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
