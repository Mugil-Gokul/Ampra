import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Hero.png";

const HomeHero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      
      {/* Background */}
      <img
        src={heroImage}
        alt="Ampra Examination Centre"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ampra Examination Centre - Known for its Convenience, Hospitality, and Efficiency
          </h1>
        </motion.div>

        {/* BOTTOM RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-10 right-6 md:right-12 max-w-md"
        >
          <div className="bg-red-800/80 backdrop-blur-md p-5 rounded-md shadow-lg">
            <p className="text-sm md:text-base text-white leading-relaxed">
              We ensure that everything runs as smoothly as possible for you on your test day.
              Take your test at London’s most reputed Testing Centre.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;