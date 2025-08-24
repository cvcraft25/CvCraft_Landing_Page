"use client";
import { motion } from "motion/react";
import { MessageCircle, Bot, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Build Professional Resumes in{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Minutes with AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Your dream job is just a conversation away. Chat with our AI to
              create ATS-friendly resumes with built-in ATS evaluation, tailored
              to job criteria to boost your chances of getting hired.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://t.me/SPA_89_bot", "_blank")}
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold text-lg shadow-2xl overflow-hidden group"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Build My Resume Now</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-yellow-400/30 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-white/30 dark:hover:bg-yellow-400/10 transition-all duration-300"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              See How It Works
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Telegram Chat Mockup */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="backdrop-blur-xl bg-white/20 dark:bg-black/20 rounded-3xl p-6 border border-white/30 dark:border-yellow-400/30 shadow-2xl"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    CvCraft AI
                  </div>
                  <div className="text-sm text-green-500">online</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black rounded-2xl rounded-tl-md px-4 py-2 ml-auto max-w-xs font-medium">
                  /start
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  Hi! I'm CvCraft AI. Let's build your perfect resume! What's
                  your profession?
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black rounded-2xl rounded-tl-md px-4 py-2 ml-auto max-w-xs font-medium">
                  Software Engineer
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl rounded-bl-md px-4 py-2 max-w-xs">
                  Great! Tell me about your experience...
                </div>
              </div>
            </motion.div>

            {/* Floating Resume Preview */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-10 -bottom-10 w-48 h-64 backdrop-blur-xl bg-white/30 dark:bg-black/30 rounded-lg border border-white/40 dark:border-yellow-400/40 shadow-2xl p-4"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-lg p-3">
                <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="w-2/3 h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-black" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
