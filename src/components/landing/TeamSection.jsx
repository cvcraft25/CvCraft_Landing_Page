"use client";
import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";
import AbhirupImg from "../../assests/abhirup.jpg";
import Saraansh from "../../assests/sarransh.jpg";
import prakhar from "../../assests/prakhar.jpg";
import prateek from "../../assests/prateek.jpg";
import parv from "../../assests/parvKn.jpg";
const teamMembers = [
  {
    name: "Prateek Rane",
    role: "Chief Architect",
    image: prateek,
    linkedin: "https://www.linkedin.com/in/prateek-rane-5a9496214/",
    github: "https://github.com/prateekrane",
    description: "Designs the overall architecture and drives bot development.",
  },
  {
    name: "Abhirup Dey",
    role: "Lead Backend Engineer",
    image: AbhirupImg,
    linkedin: "https://www.linkedin.com/in/abhirup-dey-92287725b/",
    github: "https://github.com/abhi-ingithub22",
    description: "Specializes in building a robust, end-to-end ATS system.",
  },
  {
    name: "Prakhar Singh Panwar",
    role: "Deployment Lead",
    image: prakhar,
    linkedin: "https://www.linkedin.com/in/prakhar-singh-panwar-756116236/",
    github: "https://github.com/Prakhar22111",
    description: "Oversees deployment and contributes to bot development.",
  },
  {
    name: "Parv Kanungo",
    role: "User Analytics Lead",
    image: parv,
    linkedin: "https://www.linkedin.com/in/parvkanungo/",
    github: "https://github.com/ParvKanungo",
    description: "Leads user tracking and crafts insightful frontend dashboards.",
  },
  {
    name: "Saraansh Gupta",
    role: "Front-End Engineer",
    image: Saraansh,
    linkedin: "https://www.linkedin.com/in/saraanshgupta/",
    github: "https://github.com/Saraansh08",
    description: "Develops intuitive and engaging frontend experiences.",
  },
];

export function TeamSection() {
  return (
    <section className="relative py-20 px-6">
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
            Built by the CvCraft Team
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A product-first AI resume builder engineered to help you land interviews — fast, effective, and ATS-ready
          </p>
        </motion.div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative h-full"
            >
              <div className="h-full flex flex-col backdrop-blur-xl bg-white/20 dark:bg-black/20 rounded-2xl p-8 border border-white/30 dark:border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl text-center">
                <div className="relative mx-auto w-28 h-28 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm text-gray-600 dark:text-gray-400 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {member.description}
                </p>

                <div className="mt-auto flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2.5 rounded-lg backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-800 dark:text-gray-200 border border-white/40 dark:border-yellow-400/30 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2.5 rounded-lg backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-800 dark:text-gray-200 border border-white/40 dark:border-yellow-400/30 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Neon border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-md"></div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 2 cards, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative h-full"
            >
              <div className="h-full flex flex-col backdrop-blur-xl bg-white/20 dark:bg-black/20 rounded-2xl p-8 border border-white/30 dark:border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl text-center">
                <div className="relative mx-auto w-28 h-28 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {member.role}
                </p>

                <p
                  className="text-sm text-gray-600 dark:text-gray-400 mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {member.description}
                </p>

                <div className="mt-auto flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2.5 rounded-lg backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-800 dark:text-gray-200 border border-white/40 dark:border-yellow-400/30 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2.5 rounded-lg backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-800 dark:text-gray-200 border border-white/40 dark:border-yellow-400/30 hover:bg-gray-800 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Neon border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 blur-md"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
