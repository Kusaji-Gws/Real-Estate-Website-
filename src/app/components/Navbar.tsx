

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Using standard framer-motion import
import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';

import logo from "../assets/logo3.png";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Sell', to: '/properties' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <nav 
        className={`w-full max-w-6xl transition-all duration-500 ease-in-out px-6 rounded-2xl border
          ${scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 shadow-2xl backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 py-3' 
            : 'bg-white/40 dark:bg-gray-800/20 backdrop-blur-sm border-transparent py-5'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with Glow Effect */}
          <NavLink to="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-18 h-18 rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center border border-gray-100 dark:border-gray-800"
            >
              <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
            </motion.div>
            <div className="absolute -inset-1 bg-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          </NavLink>

          {/* Centered Navigation (Desktop) */}
          <div className="hidden md:flex items-center bg-gray-100/50 dark:bg-gray-800/50 p-1.5 rounded-full border border-gray-200/30 dark:border-gray-700/30">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => `
                  relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${isActive 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600 rounded-full"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle: Unique Circular Motion */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ rotate: 180 }}
              className="p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-200"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>

            {/* CTA: Elevated Button */}
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all"
            >
              List Property
              <ArrowUpRight size={16} />
            </motion.button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu: Slide & Fade */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `
                      flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all
                      ${isActive 
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {link.name}
                    <ArrowUpRight size={18} className="opacity-50" />
                  </NavLink>
                ))}
                <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30">
                  List Your Property
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}


