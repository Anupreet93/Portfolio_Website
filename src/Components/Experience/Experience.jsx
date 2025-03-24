import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  CpuChipIcon, 
  CircleStackIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline';

const Experience = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  const technologies = [
    { icon: <FontAwesomeIcon icon={faJava} className="h-12 w-12 text-[#5382A1]" />, name: "Java" },
    { icon: <FontAwesomeIcon icon={faJs} className="h-12 w-12 text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <FontAwesomeIcon icon={faReact} className="h-12 w-12 text-[#61DAFB]" />, name: "React" },
    { icon: <CpuChipIcon className="h-12 w-12 text-primary-light dark:text-primary-dark" />, name: "Algorithms" },
    { icon: <CircleStackIcon className="h-12 w-12 text-primary-light dark:text-primary-dark" />, name: "Databases" },
    { icon: <ServerIcon className="h-12 w-12 text-primary-light dark:text-primary-dark" />, name: "Systems" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setGradientPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="experience"
      className="relative min-h-screen py-20 px-5 md:px-24 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `conic-gradient(from 0deg at 50% 50%, rgba(8, 145, 178, 0.1) 0%, rgba(21, 94, 117, 0.1) 20%, transparent 40%)`,
            `conic-gradient(from 180deg at 50% 50%, rgba(8, 145, 178, 0.1) 0%, rgba(21, 94, 117, 0.1) 20%, transparent 40%)`
          ]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-16"
      >
        Technical Arsenal
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-28">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative p-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-3xl border border-gray-200 dark:border-primary-dark/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                {tech.icon}
                <div className="absolute inset-0 bg-primary-light/10 dark:bg-primary-dark/10 blur-xl rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="space-y-16">
        {[
          {
            title: "Goldman Sachs - Cybersecurity Intern",
            date: "Feb 2025 (Virtual)",
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
          <div key={index} className="relative pl-8 border-l-2 border-primary-light/30 dark:border-primary-dark/30">
            <div className="absolute w-4 h-4 bg-primary-light dark:bg-primary-dark rounded-full -left-[9px] top-0" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.date}</p>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;