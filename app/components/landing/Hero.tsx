import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Academic Excellence,<br />
              <span className="text-indigo-600 dark:text-indigo-400">On Demand</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Connect with vetted academic experts for personalized assignment help and research assistance.
              Get quality work delivered on time, every time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/get-started" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="#experts" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Browse Experts
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-w-5 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4 lg:aspect-w-2 lg:aspect-h-1">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/hero-illustration.svg"
                    alt="Academic illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
