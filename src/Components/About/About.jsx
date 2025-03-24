import { motion } from 'framer-motion';
import { CodeBracketIcon, ShieldCheckIcon, ServerIcon, ChartPieIcon } from '@heroicons/react/24/outline';
import Image from "../../assets/Images/Aboutimg3.avif";

const About = () => {
  const skills = [
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />,
      title: "Full-Stack Development",
      points: [
        "300+ LeetCode solutions (Rating 1450+)",
        "React.js • Spring Boot • Microservices",
        "Built production-grade apps like InstaPrint & AI Diary"
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />,
      title: "Cybersecurity",
      points: [
        "Goldman Sachs Cybersecurity Virtual Intern",
        "Password hash analysis with Hashcat",
        "Implemented JWT/OAuth2 security protocols"
      ]
    },
    {
      icon: <ServerIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />,
      title: "System Design",
      points: [
        "35% process optimization in InstaPrint",
        "Kafka-based event processing systems",
        "Automated scheduling algorithms"
      ]
    },
    {
      icon: <ChartPieIcon className="w-8 h-8 text-primary-light dark:text-primary-dark" />,
      title: "Data Structures",
      points: [
        "Pathfinding algorithm visualizer",
        "Graph algorithms (A*, Dijkstra, BFS)",
        "Optimization techniques in distributed systems"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-5 md:px-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent mb-12">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary-light/20 dark:bg-primary-dark/20 blur-3xl rounded-full animate-pulse" />
            <img 
              src={Image} 
              alt="Anupreet Daivi" 
              className="w-full h-auto rounded-2xl border-4 border-primary-light/20 dark:border-primary-dark/20 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all shadow-2xl"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary-light/10 dark:bg-primary-dark/10 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.points.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 text-sm md:text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-primary-dark/20 backdrop-blur-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Innovation Focus</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As a B.Tech student at Government College of Engineering, I combine academic rigor with practical 
              implementation through projects like the AI-powered Diary App (TextRank integration) and hardware-integrated 
              InstaPrint system. My work emphasizes secure architecture design and performance optimization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-primary-light dark:text-primary-dark font-bold text-2xl">20%</span>
                <span className="text-gray-600 dark:text-gray-300">Vendor profit increase with InstaPrint</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary-light dark:text-primary-dark font-bold text-2xl">30%</span>
                <span className="text-gray-600 dark:text-gray-300">Daily throughput improvement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;