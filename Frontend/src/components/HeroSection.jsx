import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  backgroundImage,
  title = "",
  breadcrumb = "",
  align = "left", 
  height = "60vh",
  overlay = true,
}) => {
  const alignmentClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right",
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 ${alignmentClasses[align]}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          {breadcrumb && (
            <p className="text-sm md:text-base tracking-wider mb-2 opacity-90">
              {breadcrumb}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;