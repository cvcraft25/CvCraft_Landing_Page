"use client";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Thompson",
    role: "Software Engineer at Google",
    content: "CvCraft helped me land my dream job at Google! The AI knew exactly how to highlight my skills.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
  },
  {
    name: "David Park",
    role: "Product Manager at Microsoft",
    content: "The resume passed every ATS and got me interviews at top tech companies. Incredible!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
  },
  {
    name: "Lisa Chen",
    role: "UX Designer at Apple",
    content: "Simple chat interface, professional results. Got hired within 2 weeks of using CvCraft!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 px-6 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Join thousands who landed their dream jobs with CvCraft
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 dark:from-black/30 dark:to-black/10 rounded-2xl p-8 border border-white/40 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                  "{testimonial.content}"
                </p>
              </div>

              {/* Star animation background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
