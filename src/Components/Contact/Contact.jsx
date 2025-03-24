import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const formRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_n71x1qo', // Replace with your EmailJS service ID
      'template_eso39ko', // Replace with your EmailJS template ID
      formRef.current,
      'pC0KMGH7YQazUWLFh' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log('Feedback sent successfully:', result.text);
      // Optionally reset the form and state
      setFormData({ name: '', email: '', message: '' });
      e.target.reset();
    }, (error) => {
      console.error('Feedback sending failed:', error.text);
    });
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-20 px-5 md:px-24 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, 
            rgba(56, 189, 248, 0.1) 0%, 
            rgba(8, 16, 28, 0.05) 70%)`
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: [null, cursorPos.x + (Math.random() - 0.5) * 100],
            y: [null, cursorPos.y + (Math.random() - 0.5) * 100],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-12 text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 dark:border-primary-dark/20 shadow-xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full bg-white/80 dark:bg-gray-900/50 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  className="w-full bg-white/80 dark:bg-gray-900/50 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full bg-white/80 dark:bg-gray-900/50 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info Section */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 dark:border-primary-dark/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="w-8 h-8 text-primary-light dark:text-primary-dark flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    anupreetdaivi@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-8 h-8 text-primary-light dark:text-primary-dark flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +91 8485527693
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-8 h-8 text-primary-light dark:text-primary-dark flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Karad, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 dark:border-primary-dark/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Social Profiles
              </h3>
              <div className="flex justify-center gap-6">
                <motion.a
                  href="https://github.com/Anupreet93"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/80 dark:bg-gray-900/50 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
                >
                  <FaGithub className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/Anupreet_9393/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/80 dark:bg-gray-900/50 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
                >
                  <FaCode className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/anupreet-daivi-424a6529b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white/80 dark:bg-gray-900/50 rounded-lg hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
                >
                  <FaLinkedin className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
