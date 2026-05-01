import React from 'react'
import { motion } from 'framer-motion'
import galleryHeroImg from '../../assets/GalleryHero.png'

const GalleryHero = () => {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Image */}
      <img 
        src={galleryHeroImg} 
        alt="Gallery Hero" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl font-medium tracking-wider text-white drop-shadow-lg"
        >
          Home / Gallery
        </motion.h1>
      </div>
    </section>
  )
}

export default GalleryHero
