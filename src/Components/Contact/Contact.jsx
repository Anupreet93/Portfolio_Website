import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
      'service_n71x1qo',
      'template_eso39ko',
      formRef.current,
      'pC0KMGH7YQazUWLFh'
    )
    .then((result) => {
      console.log('Feedback sent successfully:', result.text);
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
      {/* Dynamic radial background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(56,189,248,0.12) 0%, rgba(8,16,28,0.05) 70%)`
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: [null, cursorPos.x + (Math.random() - 0.5) * 120],
            y: [null, cursorPos.y + (Math.random() - 0.5) * 120],
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
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-16 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-700/20 shadow-2xl"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="space-y-6">
              {['Name', 'Email', 'Message'].map((field, idx) => (
                <div key={field}>
                  <label className="block text-gray-600 dark:text-gray-300 mb-2 font-medium">{field}</label>
                  {field !== 'Message' ? (
                    <input
                      type={field === 'Email' ? 'email' : 'text'}
                      name={field === 'Email' ? 'reply_to' : 'from_name'}
                      className="w-full bg-white/80 dark:bg-gray-900/50 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                      onChange={(e) => setFormData({ ...formData, [field.toLowerCase()]: e.target.value })}
                    />
                  ) : (
                    <textarea
                      name="message"
                      rows="5"
                      className="w-full bg-white/80 dark:bg-gray-900/50 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-transform"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Info + Social Links */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-700/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: <EnvelopeIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />, text: "anupreetdaivi@gmail.com" },
                  { icon: <PhoneIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />, text: "+91 8485527693" },
                  { icon: <MapPinIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />, text: "Karad, Maharashtra, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    {item.icon}
                    <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-gray-200 dark:border-gray-700/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Social Profiles</h3>
              <div className="flex justify-center gap-6">
                {[
                  { icon: <FaGithub />, link: "https://github.com/Anupreet93" },
                  { icon: <FaCode />, link: "https://leetcode.com/u/Anupreet_9393/" },
                  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anupreet-daivi-424a6529b/" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 bg-white/80 dark:bg-gray-900/50 rounded-xl hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors shadow-md"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
