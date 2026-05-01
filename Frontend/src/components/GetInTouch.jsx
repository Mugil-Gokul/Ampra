import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 text-white bg-gradient-to-br from-[#7a0000] via-[#8B0000] to-[#a00000]">

      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-black/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight"
        >
          Get In Touch With Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Reach out to learn more about how we can ensure the integrity,
          security and every credential you offer—so you can help build
          the workforce of tomorrow.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative overflow-hidden bg-white text-gray-900 px-8 py-3 rounded-xl font-medium shadow-lg group"
        >
          <span className="relative z-10">Contact Us</span>

          {/* Shine Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700"></span>
        </motion.button>

      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/70"></div>
    </section>
  );
};

export default GetInTouch;