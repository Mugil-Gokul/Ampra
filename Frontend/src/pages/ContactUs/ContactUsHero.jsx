import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUsHero = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-red-100 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-gray-200 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* Heading Section */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-red-600 uppercase tracking-widest"
        >
          Contact us
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight"
        >
          Get in touch with our team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We have the team and know-how to help you scale 10x faster.
        </motion.p>
      </div>

      {/* Contact Info Boxes */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card Component */}
        {[ 
          {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            content: "(519) 601-1250",
          },
          {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            content: (
              <>
                1700 Dundas St, Unit 2<br />
                London, ON N5W 3C9, Canada
              </>
            ),
          },
          {
            icon: <FaEnvelope />,
            title: "Email Us",
            content: "info@ampra.ca",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -8 }}
            className="relative bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 flex flex-col items-center border border-gray-600 hover:shadow-2xl transition"
          >
            {/* Icon with circle */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl mb-4 shadow-inner">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* Content */}
            <p className="text-gray-700 text-center text-sm md:text-base">
              {item.content}
            </p>

            {/* Subtle Glow Border */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-red-200 transition pointer-events-none"></div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ContactUsHero;