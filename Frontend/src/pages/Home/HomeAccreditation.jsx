import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

import celpip from "../../assets/Hero.png";
import cael from "../../assets/Logo.png";
import pearson from "../../assets/Hero.png";
import ielts from "../../assets/Logo.png";

const baseLogos = [celpip, cael, pearson, ielts];

// Duplicate enough to avoid gaps
const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];


const HomeAccreditation = () => {
  const trackRef = useRef(null);

  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const speed = useRef(0.4);

  // Responsive speed
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) speed.current = 0.25;
      else if (window.innerWidth < 1024) speed.current = 0.35;
      else speed.current = 0.45;
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Measure width of one set
  useEffect(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      setWidth(totalWidth / (logos.length / baseLogos.length));
    }
  }, []);

  // Smooth infinite loop
  useAnimationFrame((t, delta) => {
    let current = x.get();

    const normalized = delta / 16;
    current -= normalized * speed.current;

    const loopWidth = width;

    if (current <= -loopWidth) current += loopWidth;
    if (current >= 0) current -= loopWidth;

    x.set(current);

    const progress = Math.abs(current) / loopWidth;
    const index =
      Math.floor(progress * baseLogos.length) % baseLogos.length;

    setActiveIndex(index);
  });

  return (
    <section className="bg-gray-100 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h3 className="text-lg md:text-2xl font-semibold tracking-wide mb-10 relative inline-block text-gray-700">
          ACCREDITATION
          <span className="absolute left-0 -bottom-2 w-16 h-[3px] bg-[#800000]"></span>
        </h3>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full py-10">

          {/* Edge Fade */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={trackRef}
            className="flex items-center gap-24 min-w-max cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            whileTap={{ cursor: "grabbing" }}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="h-14 md:h-20 object-contain grayscale opacity-80 hover:opacity-100 transition"
              />
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {baseLogos.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                activeIndex === i
                  ? "bg-[#800000] scale-125"
                  : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeAccreditation;