"use client";
import logo from "../../assests/CVCraft.png";

export function Footer() {
  return (
    <footer className="relative py-8 px-6 backdrop-blur-xl bg-white/10 dark:bg-black/10 border-t border-white/20 dark:border-yellow-400/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="CvCraft Logo" className="block w-7 h-7 object-contain scale-[2.5] origin-center" />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              CvCraft
            </span>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-yellow-400/20 pt-6 mt-6 text-center">
          <p className="text-gray-800 dark:text-gray-200 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
            2025 CvCraft. All rights reserved. Built with AI to transform careers.
          </p>
        </div>
      </div>
    </footer>
  );
}