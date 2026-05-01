import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Impressed by the professionalism and attention to detail.",
    name: "Guy Hawkins",
    username: "@guyhawkins",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    text: "A seamless experience from start to finish. Highly recommend!",
    name: "Karla Lynn",
    username: "@karlalynn98",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    text: "Reliable and trustworthy. Made my life so much easier!",
    name: "Jane Cooper",
    username: "@janecooper",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    text: "Fantastic service and great support throughout.",
    name: "Robert Fox",
    username: "@robertfox",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    text: "Very smooth process and great communication.",
    name: "Leslie Alexander",
    username: "@lesliealex",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    text: "Exceeded expectations in every way possible.",
    name: "Cody Fisher",
    username: "@codyfisher",
    img: "https://i.pravatar.cc/40?img=6",
  },
];

const CARDS_PER_VIEW = 3;

const HomeTestimonials = () => {
  const [index, setIndex] = useState(0);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_VIEW);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // Get current visible testimonials
  const start = index * CARDS_PER_VIEW;
  const visible = testimonials.slice(start, start + CARDS_PER_VIEW);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Subtitle */}
        <p className="text-gray-400 text-sm mb-2">Testimonial</p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-14">
          Transformative Client Experiences
        </h2>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visible.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl text-gray-300 mb-4">“</div>

                  <p className="text-gray-800 text-lg leading-relaxed mb-8">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.username}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all ${
                index === i
                  ? "w-6 h-2 bg-gray-800 rounded-full"
                  : "w-2 h-2 bg-gray-300 rounded-full"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeTestimonials;