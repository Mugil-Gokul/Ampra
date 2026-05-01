import React from "react";
import { motion } from "framer-motion";
import ValuesImg from "../../assets/Hero.png";

const values = [
  { title: "Respect", desc: "We treat everyone with dignity and respect." },
  { title: "Empathy", desc: "We understand, listen, and act with care." },
  { title: "Integrity", desc: "We remain honest and principled in everything." },
  { title: "Courage", desc: "We take bold decisions to do what's right." },
  { title: "Forward Thinking", desc: "We innovate and build for the future." },
];

const AboutOurValues = () => {
  return (
    <section className="relative w-full py-10 bg-white overflow-hidden">
      
      {/* BIG FADED BACKGROUND TEXT */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-100 select-none pointer-events-none">
        VALUES
      </h1>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide every decision, action, and experience we create.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-200 -translate-x-1/2"></div>

          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`mb-16 flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-[45%]">
                <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-xl hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold text-[#800000] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="relative z-10 w-6 h-6 bg-[#800000] rounded-full border-4 border-white shadow-md"></div>

              {/* Empty space */}
              <div className="w-[45%]"></div>
            </motion.div>
          ))}
        </div>

        {/* Floating Image */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-10 right-10 hidden md:block"
        >
          <img
            src={ValuesImg}
            alt="Values"
            className="w-72 opacity-90 drop-shadow-2xl"
          />
        </motion.div> */}

      </div>
    </section>
  );
};

export default AboutOurValues;