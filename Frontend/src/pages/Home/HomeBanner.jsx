import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bannerImg from "../../assets/Hero.png";

const HomeBanner = () => {
  const ref = useRef(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[100vh] flex items-center bg-gradient-to-br from-red-700 via-red-600 to-red-900 text-white"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={bannerImg}
          alt="Background"
          className="w-full h-[120%] object-cover opacity-20"
        />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-red-400/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">

        {/* LEFT - IMAGE (Parallax) */}
        <motion.div
          style={{ y: imageY }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-2xl" />
            <img
              src={bannerImg}
              alt="Professional"
              className="relative w-full max-w-lg rounded-sm shadow-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT - TEXT (Parallax) */}
        <motion.div
          style={{ y: textY }}
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          {/* Badge */}
          <span className="mb-4 px-4 py-1 text-sm bg-white/10 rounded-full backdrop-blur-md border border-white/20">
            🚀 AI Powered Solutions
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-gray-800 to-white bg-clip-text text-transparent">
              Success
            </span>{" "}
            Into Scalable Growth
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg mb-8">
            We combine cutting-edge AI technology with deep industry expertise 
            to build powerful, scalable solutions that redefine performance 
            and accelerate business growth.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-white/40 rounded-lg hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeBanner;