import React from "react";
import { motion } from "framer-motion";
import facilitiesImage from "../../assets/Hero.png";

const ModernFacilities = () => {
  return (
    <section className="relative bg-[#faf7f7] py-16 sm:py-20 px-4 sm:px-6 md:px-20 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT - IMAGE WITH FLOATING ELEMENTS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src={facilitiesImage}
            alt="Facilities"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />

          {/* Floating Card 1 */}
          <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-xl px-5 py-3 border border-gray-100">
            <p className="text-sm font-semibold text-[#800000]">100% Secure</p>
            <p className="text-xs text-gray-500">Exam Environment</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl px-5 py-3 border border-gray-100">
            <p className="text-sm font-semibold text-[#800000]">Modern Tech</p>
            <p className="text-xs text-gray-500">Latest Equipment</p>
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#800000] leading-tight mb-6">
            Modern Testing <br /> Facilities
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-[#800000]">Ampra Test Centre</span>, 
            we deliver globally recognized exams like 
            <span className="font-semibold"> IELTS, TOEFL, Pearson VUE, CLEP, PSI</span> in a secure and advanced environment.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Our centers feature high-performance systems, noise-isolated setups, 
            and seamless processes to ensure a stress-free experience.
          </p>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#800000]">10K+</h3>
              <p className="text-sm text-gray-500">Tests Conducted</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#800000]">5+</h3>
              <p className="text-sm text-gray-500">Exam Types</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#800000]">100%</h3>
              <p className="text-sm text-gray-500">Secure Systems</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-[#800000]">24/7</h3>
              <p className="text-sm text-gray-500">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFacilities;