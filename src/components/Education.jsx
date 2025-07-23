import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* Modern Grid Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff05 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff05 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />

      {/* Content Container */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          className="relative text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-primary">Education</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="relative rounded-2xl p-8 border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300"
            whileHover={{
              transform: "translateY(-5px)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-start gap-6">
              {/* College Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-16 h-16 rounded-xl overflow-hidden bg-primary/10"
              >
                <img
                  src="/gur (1).jpg"
                  alt="College Logo"
                  className="w-full h-full object-cover relative z-10"
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-6 flex-1">
                <div>
                  <motion.h2
                    className="text-2xl font-bold mb-2 text-primary"
                    whileHover={{ x: 5 }}
                  >
                    GYANMANJARI DIPLOMA ENGINEERING COLLEGE
                  </motion.h2>
                  <p className="text-lg font-medium text-primary/80">
                    Diploma in Computer Engineering
                  </p>
                </div>

                {/* Info Section */}
                <div className="flex flex-wrap gap-6">
                  <motion.div
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm"
                    whileHover={{ x: 5 }}
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-gray-300">
                      2022 - 2025 | Pursuing
                    </span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-gray-300">Bhavnagar, Gujarat</span>
                  </motion.div>
                </div>

                {/* Courses Grid */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Key Courses
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Data Structures and Algorithms",
                      "Database Management Systems",
                      "Web Development",
                      "Computer Networks",
                    ].map((course, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all bg-card/50 backdrop-blur-sm"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-gray-300">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
