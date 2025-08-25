import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 19.99,
    description: "Perfect for simple assignments and tight deadlines",
    features: [
      "Up to 5 pages",
      "3-day delivery",
      "Standard quality check",
      "2 revision rounds",
      "24/7 support"
    ],
    featured: false
  },
  {
    name: "Standard",
    price: 34.99,
    description: "Ideal for most academic assignments and projects",
    features: [
      "Up to 15 pages",
      "2-day delivery",
      "Premium quality check",
      "3 revision rounds",
      "24/7 priority support",
      "Plagiarism report"
    ],
    featured: true
  },
  {
    name: "Premium",
    price: 59.99,
    description: "For complex projects and research papers",
    features: [
      "Unlimited pages",
      "1-day delivery",
      "Premium+ quality check",
      "Unlimited revisions",
      "24/7 VIP support",
      "Plagiarism report",
      "Outline & draft",
      "Direct expert contact"
    ],
    featured: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300 mx-auto">
            Choose the perfect plan for your academic needs
          </p>
        </div>

        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl shadow-sm overflow-hidden ${
                plan.featured 
                  ? 'ring-2 ring-indigo-500 dark:ring-indigo-400 transform lg:scale-105 z-10' 
                  : 'ring-1 ring-slate-200 dark:ring-slate-700'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-lg font-medium text-slate-600 dark:text-slate-300">
                    /assignment
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <a
                    href="/auth/signup"
                    className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg text-sm font-medium ${
                      plan.featured
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-200 dark:hover:bg-indigo-900/50'
                    }`}
                  >
                    Get Started
                    {plan.featured && <Zap className="ml-2 h-4 w-4" />}
                  </a>
                </div>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-6">
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                  What's included
                </h4>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-sm text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Need a custom solution?{' '}
            <a href="#contact" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
