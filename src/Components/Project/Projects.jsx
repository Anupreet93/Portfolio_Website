import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "InstaPrint",
      description: "Online printing service with Raspberry Pi integration, reduced processing time by 35%",
      tech: ["React", "Razorpay", "Raspberry Pi", "Vercel"],
      link: "https://insta-print.vercel.app/",
      github: "https://github.com/Anupreet93/InstaPrint",
      image: "https://img.freepik.com/premium-photo/blue-white-3d-illustration-word-print-connected-computer-mouse_190619-941.jpg?w=826",
      objectPosition: "center top",
    },
    {
      title: "AI Diary App",
      description: "Secure journal with TextRank summaries & real-time notifications",
      tech: ["React", "Spring Security", "MongoDB", "ML"],
      link: "#",
      github: "https://github.com/Anupreet93/Dairy_APP",
      image: "https://img.freepik.com/premium-photo/flat-lay-smartphone-notebook-coffee-with-social-media-icons_1297101-70628.jpg?w=1380",
      objectPosition: "center center",
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio with interactive animations",
      tech: ["React", "Tailwind", "Framer Motion", "Vite"],
      link: "#",
      github: "#",
      image: "https://img.freepik.com/premium-psd/dream-business-corporate-psd_226222-7.jpg?w=996",
      objectPosition: "center center",
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog with rich text editing and user authentication",
      tech: ["React.js", "Appwrite", "Auth0"],
      link: "#",
      github: "#",
      image: "https://img.freepik.com/premium-photo/online-article-concept-illustration_1254992-270510.jpg?ga=GA1.1.79815786.1724618873&semt=ais_hybrid",
      objectPosition: "center center",
    },
    {
      title: "Pathfinding Visualizer",
      description: "Interactive visualization of A*, Dijkstra, and BFS algorithms",
      tech: ["React", "Algorithms", "D3.js", "Jest"],
      link: "#",
      github: "#",
      image: "https://img.freepik.com/free-photo/3d-smartphone-device-with-map-gps-technology_23-2150458977.jpg?ga=GA1.1.79815786.1724618873&semt=ais_hybrid",
      objectPosition: "center center",
    },
    {
      title: "Timetable Scheduler",
      description: "Automated conflict-free scheduling system for colleges",
      tech: ["React", "Spring Boot", "Algorithm", "MySQL"],
      link: "#",
      github: "#",
      image: "https://img.freepik.com/free-photo/still-life-colorful-overloaded-bullet-journal_23-2150168648.jpg?t=st=1742848588~exp=1742852188~hmac=43cab47371d1cdea00ada18a76733c2f1584632f7ff414faf449d8054280368b&w=1380",
      objectPosition: "center center",
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-5 md:px-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 120 }}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-gray-700/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all shadow-lg hover:shadow-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: project.objectPosition || "center center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-1.5 text-sm font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full backdrop-blur-sm transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 dark:bg-gray-900/20 rounded-full hover:bg-primary-light/30 dark:hover:bg-primary-dark/30 transition-colors shadow-md"
                  >
                    <FaGithub className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 dark:bg-gray-900/20 rounded-full hover:bg-primary-light/30 dark:hover:bg-primary-dark/30 transition-colors shadow-md"
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
