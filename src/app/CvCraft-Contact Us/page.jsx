"use client";
import { motion } from "motion/react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CvCraftContactUsPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-3xl p-10 border border-white/30 dark:border-yellow-400/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 animate-pulse" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Contact CvCraft
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              We'd love to hear your feedback and ideas. Reach out and help us shape the future of CvCraft.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:hello@cvcrafthq.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold shadow-2xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <Mail className="w-5 h-5" /> Email Us
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 dark:border-yellow-400/30 text-gray-800 dark:text-gray-200 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <ArrowLeft className="w-5 h-5" /> Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
