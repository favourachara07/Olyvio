import { Settings, Users, Lock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Custom Assignment Preferences",
    description: "Tailor every aspect of your assignment help to match your specific requirements and academic level.",
    highlights: [
      "Personalized expert matching",
      "Flexible deadline options",
      "Direct communication with experts"
    ]
  },
  {
    icon: Users,
    title: "Expert Task Assigners",
    description: "Work with vetted professionals holding advanced degrees in their respective fields.",
    highlights: [
      "Subject-matter experts",
      "Native English speakers",
      "Proven track record"
    ]
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Your payment is held securely and only released when you're completely satisfied with the work.",
    highlights: [
      "SSL encryption",
      "Money-back guarantee",
      "No hidden fees"
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Why Choose Olyvio
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 dark:text-slate-300 mx-auto">
            Everything you need for academic success
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="h-full p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
