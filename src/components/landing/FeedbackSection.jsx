"use client";
import { motion } from "motion/react";
import { Mail, HeartHandshake } from "lucide-react";

export function FeedbackSection() {
  return (
    <section id="contact" className="relative py-20 px-6 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-3xl p-12 border border-white/30 dark:border-yellow-400/30 relative overflow-hidden"
        >
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 animate-pulse" />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center"
            >
              <HeartHandshake className="w-8 h-8 text-black" />
            </motion.div>

            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              We value your feedback
            </h2>

            <p
              className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Kindly share your feedback so our team can keep improving CvCraft. We build fast, iterate faster, and your
              insights directly shape the product.
            </p>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We're also open to collaborators and contributors who want to help us elevate the experience for everyone.
            </p>

            <motion.a
              href="https://cvcraft25.netlify.app/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.4)",
                  "0 0 40px rgba(251, 146, 60, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold text-lg shadow-2xl overflow-hidden group"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <Mail className="w-6 h-6" />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
