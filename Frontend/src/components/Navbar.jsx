import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Services (Exams Offered)", href: "#services" },
    { label: "Exam Registration Info", href: "#registration" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-[#800000] px-6 py-2 text-sm border-b border-white/50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <i className="fas fa-phone"></i> (519) 601-1250
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-envelope"></i> info@ampra.ca
          </span>
        </div>
        {/* Logo */}
        <div className="flex justify-center py-1">
          <img
            src={Logo}
            alt="AMPRA Logo"
            className="w-20 h-20 object-contain bg-white p-2 rounded-full shadow-lg"
          />
        </div>
        <div className="flex items-center gap-6">
          <a href="#contact" className="relative group text-white/90 hover:text-white transition-all duration-300">
            Contact Us
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="#location"
              className="relative group text-white/90 hover:text-white transition-all duration-300"
            >
              Location
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-red-900 font-semibold leading-none">
              G
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#800000]/90 sticky top-0 z-50 backdrop-blur-md">
        <ul className="flex justify-evenly gap-8 py-3">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative cursor-pointer text-white/90 hover:text-white transition-all duration-300"
            >
              <a className="relative group">
                {item.label}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
