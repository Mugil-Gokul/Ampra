import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const dropdownRef = useRef();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Exams Offered", path: "/exams" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Gallery", path: "/gallery" },
  ];

  const examLinks = [
    { label: "TOEFL", path: "/register/toefl" },
    { label: "GRE", path: "/register/gre" },
    { label: "CLEP", path: "/register/clep" },
    { label: "PSI", path: "/register/psi" },
    { label: "Pearson VUE", path: "/register/pearson-vue" },
    { label: "Kryterion", path: "/register/kryterion" },
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkStyle = ({ isActive }) =>
    `relative group ${
      isActive ? "text-white" : "text-white/90"
    }`;

  const underline = (
    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  );

  return (
    <header className="text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-[#800000] px-4 md:px-6 py-2 text-sm border-b border-white/50">
        <div className="hidden sm:flex items-center gap-4">
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
            className="w-14 h-14 md:w-20 md:h-20 object-contain bg-white p-2 rounded-full shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/contact" className={linkStyle}>
            Contact Us
            {underline}
          </NavLink>

          <div className="flex items-center gap-2">
            <NavLink to="/location" className={linkStyle}>
              Location
              {underline}
            </NavLink>

            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-red-900 font-semibold leading-none">
              G
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block bg-[#800000]/90 sticky top-0 z-50 backdrop-blur-md">
        <ul className="flex justify-evenly gap-8 py-3">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink to={item.path} className={linkStyle}>
                {item.label}
                {underline}
              </NavLink>
            </motion.li>
          ))}

          {/* Desktop Dropdown */}
          <li ref={dropdownRef} className="relative">
            <div
              onClick={() => setOpenDropdown(!openDropdown)}
              className="relative group flex items-center gap-1 text-white/90 hover:text-white"
            >
              Exam Registration
              <span
                className={`transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
              {underline}
            </div>

            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-8 -left-10 w-60 bg-white text-gray-800 rounded-xl shadow-xl"
                >
                  {examLinks.map((exam, i) => (
                    <Link
                      key={i}
                      to={exam.path}
                      onClick={() => setOpenDropdown(false)}
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      {exam.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#800000] px-6 py-4 space-y-4"
          >
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className="block relative group"
              >
                {item.label}
                {underline}
              </NavLink>
            ))}

            {/* Mobile Dropdown */}
            <div>
              <div
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex justify-between items-center relative group"
              >
                Exam Registration
                <span>{mobileDropdown ? "−" : "+"}</span>
                {underline}
              </div>

              {mobileDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  {examLinks.map((exam, i) => (
                    <Link
                      key={i}
                      to={exam.path}
                      onClick={() => setMobileMenu(false)}
                      className="block text-sm"
                    >
                      {exam.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact + Location (with G icon) */}
            <NavLink to="/contact" className="block relative group">
              Contact Us
              {underline}
            </NavLink>

            <div className="flex items-center gap-2">
              <NavLink to="/location" className="relative group">
                Location
                {underline}
              </NavLink>
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-red-900 font-semibold">
                G
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;