"use client";
import { motion } from "motion/react";

export function Background() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-black dark:to-yellow-900/30">
      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-400/30 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-orange-400/30 to-red-400/30 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 right-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-300/20 to-orange-300/20 blur-xl"
      />
    </div>
  );
}
