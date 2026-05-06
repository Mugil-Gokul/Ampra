import React from 'react'
import { motion } from 'framer-motion'

const HoursOfOperation = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
        
        {/* Guidance and Advice */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="p-2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] mb-4">
            Guidance and Advice
          </h2>
          <p className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            Always arrive on time as per the instructions sent to you.Wear comfortable clothing. Approved documentation is mandatory.
            Please do not bring any stationery, everything will be provided.
          </p>
        </motion.div>

        {/* Hours of Operation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="p-2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] mb-4">
            Hours of Operation
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            <li>Monday to Friday: 9:00 AM – 5:00 PM</li>
            <li>Saturday / Sunday: 10:00 AM – 4:00 PM</li>
          </ul>
          <div className="text-sm sm:text-base text-gray-700 space-y-2">
            <p>Email : <span className="text-red-600 font-medium">info@ampra.ca</span></p>
            <p>Phone : <span className="text-red-600 font-medium">(519) 601-1250</span></p>
            <p>Address : 1700 Dundas St, Unit 2, London, ON N5W 3C9, Canada</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HoursOfOperation
