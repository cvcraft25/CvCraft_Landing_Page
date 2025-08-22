"use client";
import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Start the Chat",
    description:
      "Simply type /start in our Telegram bot to begin your resume journey",
  },
  {
    step: "02",
    title: "Share Your Story",
    description:
      "Our AI asks smart questions about your experience and career goals",
  },
  {
    step: "03",
    title: "Download & Evaluate",
    description:
      "Get your professional, ATS-optimized resume ready for job applications",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 px-6 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Simple 3-Step Process
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From chat to career in minutes
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-16 max-w-3xl mx-auto">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center space-y-8"
              >
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-sm">
                    STEP {item.step}
                  </div>
                  <h3
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-lg text-gray-600 dark:text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
