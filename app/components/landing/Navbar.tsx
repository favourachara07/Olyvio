import Link from "next/link";
import { BookOpenText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpenText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">Olyvio</span>
          </Link>
          
          <nav className="flex items-center gap-4">
            <Link 
              href="/auth/signin" 
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              Sign in
            </Link>
            <Link 
              href="/auth/signup" 
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Get started
              <span className="sr-only">Get started</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
