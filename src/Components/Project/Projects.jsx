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
      // Adjust cropping to display the most relevant part of the image
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
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-12 text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-200 dark:border-primary-dark/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all shadow-lg hover:shadow-xl"
            >
              {/* Image Container - Top Half */}
              <div className="relative h-64 bg-gray-100 dark:bg-gray-900 rounded-t-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: project.objectPosition || "center center" }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Content Container - Bottom Half */}
              <div className="pt-6 pb-6 px-6">
                <div className="flex flex-col items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      className="p-2 hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                    </a>
                    <a 
                      href={project.link}
                      className="p-2 hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowTopRightOnSquareIcon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-1.5 text-sm font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
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
