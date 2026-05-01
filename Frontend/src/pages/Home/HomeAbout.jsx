import React from "react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-red-900 mb-6 text-center tracking-wide"
        >
          WHO WE ARE
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto"
        >
          At Ampra, you will enjoy a comfortable, modern, spacious, and quiet testing environment. 
          All exams are conducted in a well-equipped hall with advanced testing aids. 
          We provide premium noise-reduction headsets and private workstations with dividers 
          to ensure focus and zero disturbance. Test schedules are flexible — you can choose 
          your preferred date directly through your exam provider’s platform.
        </motion.p>

        {/* Info Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Get Certified */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group bg-gradient-to-br from-red-900 to-red-700 text-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* subtle glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              Get Certified
            </h3>

            <p className="text-sm md:text-base mb-6 text-white/90 leading-relaxed">
              Access certification exams from top providers like Pearson VUE, Prometric,
              College Board, PSI, Kryterion and more.
            </p>

            <a
              href="#registration"
              className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
            >
              Book Your Exam
              <span className="text-lg">→</span>
            </a>
          </motion.div>

          {/* Hours of Operations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group bg-gradient-to-br from-red-900 to-red-700 text-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* subtle glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              Hours of Operations
            </h3>

            <p className="text-sm md:text-base mb-6 text-white/90 leading-relaxed">
              Open on Fridays & Saturdays (7:45 AM – 4 PM) and Sundays (7:45 AM – 9 PM). 
              Exams begin promptly at 8 AM.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
            >
              Contact Us
              <span className="text-lg">→</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;