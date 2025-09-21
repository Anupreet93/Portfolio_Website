import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CpuChipIcon, CircleStackIcon, ServerIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const technologies = [
    { icon: <FontAwesomeIcon icon={faJava} className="h-12 w-12 text-[#5382A1]" />, name: "Java" },
    { icon: <FontAwesomeIcon icon={faJs} className="h-12 w-12 text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FontAwesomeIcon icon={faReact} className="h-12 w-12 text-[#61DAFB]" />, name: "React" },
    { icon: <CpuChipIcon className="h-12 w-12 text-primary-light dark:text-primary-dark" />, name: "Algorithms" },
    { icon: <CircleStackIcon className="h-12 w-12 text-primary-light dark:text-primary-dark" />, name: "MongoDB & MySQL" },
    { icon: <ServerIcon className="h-12 w-12 text-primary-light dark:text-primary-dark" />, name: "Linux" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="experience"
      className="relative min-h-screen py-20 px-5 md:px-24 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Dynamic background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(56,189,248,0.08) 0%, rgba(8,16,28,0.03) 60%)`
        }}
      />

      {/* Section Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-16 text-center"
      >
        Technical Arsenal
      </motion.h1>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-28">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.1 }}
            className="group relative p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-primary-dark/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative p-4 rounded-full bg-white/30 dark:bg-gray-800/30 hover:scale-110 transition-transform">
                {tech.icon}
                <div className="absolute inset-0 blur-xl rounded-full bg-primary-light/10 dark:bg-primary-dark/10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Timeline */}
      <motion.div className="space-y-16">
        {[
          {
            title: "Goldman Sachs - Cybersecurity Intern",
            date: "Feb 2025 - Mar 2025",
            points: [
              "Analyzed password databases using Hashcat",
              "Implemented secure password policies with bcrypt/Argon2",
              "Authored security reports and collaborated with experts"
            ]
          },
          {
            title: "Deltin India Tech - Frontend Developer",
            date: "Jun 2024 - Aug 2024",
            points: [
              "Developed React-based user interfaces",
              "Enhanced system scalability and features",
              "Implemented Git-based version control"
            ]
          }
        ].map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
            className="relative pl-10 border-l-2 border-primary-light/30 dark:border-primary-dark/30"
          >
            <div className="absolute -left-[10px] top-0 w-5 h-5 bg-primary-light dark:bg-primary-dark rounded-full shadow-lg" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.date}</p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full flex-shrink-0 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
