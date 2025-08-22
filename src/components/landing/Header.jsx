"use client";
import { motion } from "motion/react";
import logo from "../../assests/CVCraft.png";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-yellow-400/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="CvCraft Logo" className="block w-8 h-8 object-contain scale-[3] origin-center" />
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            CvCraft
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>Features</a>
          <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>How It Works</a>
          <a href="#samples" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>Samples</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>Contact Us</a>
        </nav>

        {/* Right-side controls removed as requested */}
      </div>
    </motion.header>
  );
}