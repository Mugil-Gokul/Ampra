import React from 'react'
import { motion } from 'framer-motion'
import AboutUsHeroImg from '../../assets/Hero.png'
import SecondaryBoxImg from '../../assets/Hero.png' 

const AboutUsHero = () => {
  return (
    <section className="relative w-full h-[60vh] mb-40">
      {/* Background Image */}
      <img 
        src={AboutUsHeroImg} 
        alt="About Us Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Breadcrumb in Main Section */}
      <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl font-medium tracking-wider text-white drop-shadow-lg"
        >
          Home / About Us
        </motion.h1>
      </div>

      {/* Secondary Box with Image Background */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-20 w-[90%] md:w-[70%]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative border border-red-500 shadow-lg overflow-hidden"
        >
          {/* Background Image for Secondary Box */}
          <img 
            src={SecondaryBoxImg} 
            alt="Secondary Box Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="relative px-6 py-10 bg-black/40">
            <h2 className="text-xl max-w-2xl mx-auto md:text-6xl font-medium text-white text-center">
              We change lives to create a better world
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsHero
