"use client";
import { motion } from "motion/react";
import { Bot, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Smart AI understands your experience and crafts compelling narratives"
  },
  {
    icon: Shield,
    title: "ATS-Friendly",
    description: "Optimized to pass Applicant Tracking Systems with 95% success rate"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create professional resumes in under 5 minutes via simple chat"
  },
  {
    icon: Shield,
    title: "ATS Based Evaluation",
    description: "Built-in ATS evaluation to analyze your resume against job criteria and boost your match"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-6 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Why Choose <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">CvCraft</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Powered by AI to create resumes that actually get you hired
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="h-full flex flex-col backdrop-blur-xl bg-white/20 dark:bg-black/20 rounded-2xl p-8 border border-white/30 dark:border-yellow-400/30 hover:border-white/50 dark:hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                  {feature.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}