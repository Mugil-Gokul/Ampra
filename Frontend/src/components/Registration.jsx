import React from "react";
import { motion } from "framer-motion";

const Registration = ({
  examName = "",
  officialLink = "#",
  title = "Book Your Exam with Confidence",
  description = "Register through the official provider to secure your preferred test date and location.",
}) => {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-5 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            {description}{" "}
            <span className="font-semibold text-[#800000]">{examName}</span>.
          </p>

          {/* Steps */}
          <div className="space-y-5">
            {[
              "Choose your preferred test date",
              "Select nearest test centre",
              "Complete registration on official site",
              "Receive instant confirmation",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="min-w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#800000] text-white font-semibold">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500">
            <span>✔ Official Registration</span>
            <span>✔ Secure Process</span>
            <span>✔ Instant Confirmation</span>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-black relative overflow-hidden">
            
            {/* subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-transparent"></div>

            <div className="relative z-10 text-center">
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Register for {examName}
              </h3>

              <p className="text-gray-500 text-sm mb-6">
                Click below to proceed to the official registration portal.
              </p>

              {/* Primary CTA */}
              <a
                href={officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#800000] text-white py-3 rounded-lg font-semibold hover:bg-[#5a0000] transition mb-4 shadow-md hover:shadow-lg"
              >
                Go to Official Website →
              </a>

              {/* Secondary CTA */}
              <button className="w-full border border-gray-300 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                Talk to Support
              </button>

              {/* Info */}
              <p className="text-xs text-gray-400 mt-4">
                You will be redirected to the official {examName} website.
              </p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-[#800000] text-white text-xs px-4 py-2 rounded-full shadow-lg">
            Trusted Center
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;