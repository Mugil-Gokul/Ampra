import React from 'react'
import { motion } from 'framer-motion'

const TestimonialsHero = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side - Small Customers Text */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <motion.span 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-gray-600"
          >
            Customers
          </motion.span>
        </div>

        {/* Right Side - Main Text */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="md:w-2/3 text-left"
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4 text-gray-900">
            You're in great
          </h1>
          <h4 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-gray-900">EXAMINATION CENTRE</h4>
          <p className="text-sm md:text-lg text-gray-700 max-w-2xl">
            Ampra is trusted by students and professionals worldwide for exams like TOEFL, IELTS, Pearson VUE, CLEP, and more. 
            Join thousands of test‑takers who choose Ampra for their exam preparation needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsHero
