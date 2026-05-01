import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/Hero.png";
import img2 from "../../assets/Hero.png";
import img3 from "../../assets/Hero.png";
import img4 from "../../assets/Hero.png";
import img5 from "../../assets/Hero.png";
import img6 from "../../assets/Hero.png";
import img7 from "../../assets/Hero.png";
import img8 from "../../assets/Hero.png";
import img9 from "../../assets/Hero.png";
import img10 from "../../assets/Hero.png";
import img11 from "../../assets/Hero.png";
import img12 from "../../assets/Hero.png";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const GalleryMain = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-gray-400 text-sm mb-2">Our Test Centre</p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Inside Our Modern Testing Facility
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Explore our secure and comfortable testing environment designed
          to deliver a seamless experience for every candidate.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={src}
              alt={`Test Centre ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Image */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt="Preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-full rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 text-white text-3xl"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 text-white text-3xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GalleryMain;