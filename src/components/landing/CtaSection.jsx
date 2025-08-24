"use client";
import { motion } from "motion/react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-3xl p-12 border border-white/30 dark:border-yellow-400/30 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 animate-pulse"></div>

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-black" />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Start your career transformation{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                today
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Join professionals worldwide who are upgrading their careers with AI-powered, ATS-optimized resumes
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://t.me/SPA_89_bot", "_blank")}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.4)",
                  "0 0 40px rgba(251, 146, 60, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative px-12 py-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-xl shadow-2xl overflow-hidden group"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <MessageCircle className="w-6 h-6" />
                <span>Try CvCraft Free</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}