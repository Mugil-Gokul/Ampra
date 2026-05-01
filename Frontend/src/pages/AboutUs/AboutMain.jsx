import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const AboutMain = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-10 overflow-hidden">
      
      {/* Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#800000] mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[#800000] mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16"
        >
          Ampra offers a comfortable, modern, and distraction-free testing
          environment. Our facilities are equipped with noise-reduction
          headsets, private workstations, and well-structured exam scheduling,
          ensuring a smooth and focused experience for every test taker.
        </motion.p>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl p-10 shadow-xl text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4 text-[#800000] text-3xl">
              <FaEye />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#800000]">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To play a transformational role for people, communities, and the
              global economy by enabling growth through opportunity.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#800000] text-white rounded-2xl p-10 shadow-xl text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4 text-white text-3xl">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-semibold mb-3">
              Our Mission
            </h3>
            <p className="leading-relaxed text-gray-100">
              Building the workforce of tomorrow by empowering individuals with
              the right environment and tools to succeed.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMain;