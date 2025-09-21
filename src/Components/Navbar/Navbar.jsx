import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed w-full z-50 bg-transparent backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20">
        
        {/* Brand */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent font-montserrat hover:drop-shadow-[0_0_15px_rgba(125,95,255,0.5)] transition-all duration-300"
        >
          Anupreet Dalvi
          <span className="text-secondary-light dark:text-primary-dark">.</span>
        </motion.a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Projects', 'Experience', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-lg text-gray-100/90 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 150 }}
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                initial={{ scaleX: 0 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="p-3 rounded-full bg-white/10 dark:bg-gray-900/20 hover:bg-white/20 dark:hover:bg-gray-900/30 transition-all shadow-lg backdrop-blur-sm"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-1.5"
            >
              <SunIcon className="w-7 h-7 text-amber-400/90 hover:text-amber-300 transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-1.5"
            >
              <MoonIcon className="w-7 h-7 text-indigo-600/90 hover:text-indigo-500 transition-colors" />
            </motion.div>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
