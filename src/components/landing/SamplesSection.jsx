"use client";
import { motion } from "motion/react";
import sample1 from "../../assests/sample1get.jpg";
import sample2 from "../../assests/sample2get.jpg";

export function SamplesSection() {
  return (
    <section id="samples" className="relative py-20 px-6 scroll-mt-28 md:scroll-mt-32">
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
            Resume <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Samples</span>
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore two example resumes crafted by our AI with ATS-based evaluation to align with job criteria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {[sample1, sample2].map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative h-full"
            >
              <div className="h-full flex flex-col backdrop-blur-xl bg-white/20 dark:bg-black/20 rounded-2xl p-6 border border-white/30 dark:border-yellow-400/30 hover:border-white/50 dark:hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl">
                {/* Preview frame */}
                <div className="aspect-[3/4] w-full rounded-xl bg-gradient-to-br from-white/60 to-gray-100/40 dark:from-gray-800/50 dark:to-gray-900/40 border border-white/40 dark:border-yellow-400/30 overflow-hidden">
                  <img
                    src={src}
                    alt={`Sample Resume ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6">
                  <h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Sample Resume {idx + 1}
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    AI-crafted and evaluated with our ATS engine to maximize relevance and readability.
                  </p>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
