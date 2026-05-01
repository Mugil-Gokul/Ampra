import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#800000] text-white px-8 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* GET IN TOUCH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            GET IN TOUCH
          </h3>

          <div className="space-y-3 text-sm">
            
            <div className="flex items-start gap-3 group">
              <FaMapMarkerAlt className="mt-1 text-white/80 group-hover:text-white transition" />
              <p className="text-white/90 group-hover:text-white transition">
                1700 Dundas St, Unit 2, London, ON N5W 3C9, Canada
              </p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaPhoneAlt className="text-white/80 group-hover:text-white transition" />
              <p className="text-white/90 group-hover:text-white transition">
                (519) 601-1250
              </p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaEnvelope className="text-white/80 group-hover:text-white transition" />
              <p className="text-white/90 group-hover:text-white transition">
                info@ampra.ca
              </p>
            </div>

          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300 transition">About Us</a></li>
            <li><a href="/testimonials" className="hover:text-gray-300 transition">Testimonials</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition">Contact Us</a></li>
            <li><a href="/gallery" className="hover:text-gray-300 transition">Gallery</a></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300 transition">IELTS</li>
            <li className="hover:text-gray-300 transition">TOEFL</li>
            <li className="hover:text-gray-300 transition">Pearson VUE</li>
            <li className="hover:text-gray-300 transition">CLEP</li>
            <li className="hover:text-gray-300 transition">PSI</li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-white/80">
          © 2026 Mugil Technologies Ltd All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, rotate: 3 }}
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Icon className="text-sm" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;