import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaUserGraduate, FaClock, FaCheckCircle } from "react-icons/fa";

const exams = [
  {
    title: "TOEFL / GRE",
    desc: "Globally recognized exams for higher education and migration pathways.",
    icon: <FaUserGraduate />,
  },
  {
    title: "IELTS",
    desc: "Widely accepted English proficiency test across institutions worldwide.",
    icon: <FaGlobe />,
  },
  {
    title: "CELPIP",
    desc: "Canada-focused testing with faster results and simplified format.",
    icon: <FaClock />,
  },
  {
    title: "PEARSON VUE",
    desc: "Professional certification exams across industries globally.",
    icon: <FaCheckCircle />,
  },
  {
    title: "TOEFL / GRE",
    desc: "Globally recognized exams for higher education and migration pathways.",
    icon: <FaUserGraduate />,
  },
  {
    title: "IELTS",
    desc: "Widely accepted English proficiency test across institutions worldwide.",
    icon: <FaGlobe />,
  },
  {
    title: "CELPIP",
    desc: "Canada-focused testing with faster results and simplified format.",
    icon: <FaClock />,
  },
  {
    title: "PEARSON VUE",
    desc: "Professional certification exams across industries globally.",
    icon: <FaCheckCircle />,
  },
];

const ExamsOfferedMain = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Exams Offered
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Choose from globally recognized exams conducted in certified environments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {exams.map((exam, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* Top Ribbon */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#800000] rounded-t-2xl"></div>

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#800000]/10 text-[#800000] mb-5">
                {exam.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#800000] transition">
                  {exam.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {exam.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-[#800000] flex items-center gap-2">
                  Register
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <div className="w-8 h-8 rounded-full bg-[#800000]/10 group-hover:bg-[#800000]/20 transition"></div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#800000]/20 transition"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExamsOfferedMain;