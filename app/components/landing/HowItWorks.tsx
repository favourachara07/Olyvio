import { BookOpen, UserCheck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Submit Your Request",
    description: "Share your assignment details, requirements, and deadline with us through our secure platform."
  },
  {
    icon: UserCheck,
    title: "Get Matched with an Expert",
    description: "Our system will connect you with the most qualified expert for your specific subject and requirements."
  },
  {
    icon: CreditCard,
    title: "Receive & Review Work",
    description: "Get your completed work before the deadline. Request revisions if needed, guaranteed to meet your expectations."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300 mx-auto">
            Get academic help in just three simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col h-full p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/10 dark:to-cyan-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
