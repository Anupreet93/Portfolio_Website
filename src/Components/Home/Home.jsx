import React, { useState, useEffect } from 'react';
import Avatar from "../../assets/Images/Avatar.avif";
import ResumePDF from "../../assets/ANUPREET DALVI 1 (1).pdf";
import { CodeBracketIcon, ShieldCheckIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const BACKGROUND_URL = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";

export const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initialize event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate background transform with safe window reference
  const getBackgroundStyle = () => {
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;
    
    return {
      backgroundImage: `url(${BACKGROUND_URL})`,
      transform: `translate3d(
        ${-(cursorPos.x - centerX) / 25}px,
        ${-(cursorPos.y - centerY) / 25}px,
        0
      ) scale(1.1)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden mt-10">
      {/* Animated Background Layer */}
      <div 
        className="fixed inset-0 z-0 transition-transform duration-700 ease-out opacity-60"
        style={getBackgroundStyle()}
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-1 bg-gradient-to-br from-gray-100/30 via-transparent to-gray-100/30 dark:from-gray-900/50 dark:via-gray-900/30 dark:to-gray-900/50" />

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-gray-100/95 via-gray-50/95 to-gray-100/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 py-20 px-5 md:px-20">
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-28">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-in-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">
                Full-Stack Developer
              </span>
              <br />
              <span className="text-gray-900 dark:text-white mt-4 block">Anupreet Dalvi</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in">
              Building secure, scalable systems at the intersection of 
              <span className="text-primary-light dark:text-primary-dark"> cybersecurity</span> and 
              <span className="text-secondary-light dark:text-secondary-dark"> distributed architecture</span>
            </p>

            <div className="flex gap-4 animate-pop-in">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark text-white px-8 py-3 rounded-full hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
              <a 
                href={ResumePDF} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-primary-light dark:border-primary-dark text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="relative group md:w-1/2 flex justify-center">
            <div className="absolute inset-0 bg-primary-light/20 dark:bg-primary-dark/20 blur-3xl rounded-full animate-pulse" />
            <img 
              src={Avatar} 
              alt="Anupreet Dalvi" 
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary-light/20 dark:border-primary-dark/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              icon: <CodeBracketIcon className="w-12 h-12 text-primary-light dark:text-primary-dark" />,
              title: "Full-Stack Expertise",
              content: "300+ LeetCode solutions • Spring Boot • React • Microservices • Kafka"
            },
            {
              icon: <ShieldCheckIcon className="w-12 h-12 text-primary-light dark:text-primary-dark" />,
              title: "Security First",
              content: "Goldman Sachs cybersecurity intern • OAuth2/JWT • Hashcat analysis • Secure architecture"
            },
            {
              icon: <CpuChipIcon className="w-12 h-12 text-primary-light dark:text-primary-dark" />,
              title: "System Design",
              content: "35% process optimization • Distributed systems • Algorithm design • Hardware integration"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all backdrop-blur-lg border border-gray-200 dark:border-gray-700"
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="text-center mb-28">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "InstaPrint",
                description: "35% faster processing • Raspberry Pi integration • QR-based verification",
                tech: ["React", "Spring Boot", "Kafka"]
              },
              {
                title: "AI Diary App",
                description: "TextRank summaries • Real-time notifications • OAuth2 security",
                tech: ["Redux", "Spring Security", "ML Integration"]
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-primary-light dark:text-primary-dark text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}