"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaTools, FaLaptopCode, FaBrain } from 'react-icons/fa';

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillCard = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const skills = {
    frontend: [
      { icon: <FaCode className="text-4xl" />, title: 'JavaScript', level: 90, description: 'Modern ES6+, TypeScript, DOM manipulation' },
      { icon: <FaLaptopCode className="text-4xl" />, title: 'React.js', level: 85, description: 'Hooks, Context, Redux, Next.js' },
      { icon: <FaLaptopCode className="text-4xl" />, title: 'HTML/CSS', level: 95, description: 'Semantic HTML5, CSS3, Sass, Tailwind' },
      { icon: <FaLaptopCode className="text-4xl" />, title: 'Next.js', level: 80, description: 'Server Components, App Router, API Routes' },
    ],
    backend: [
      { icon: <FaServer className="text-4xl" />, title: 'Node.js', level: 85, description: 'Express.js, REST APIs, Authentication' },
      { icon: <FaServer className="text-4xl" />, title: 'Express.js', level: 80, description: 'Middleware, Routing, Error Handling' },
      { icon: <FaServer className="text-4xl" />, title: 'API Design', level: 75, description: 'RESTful APIs, GraphQL, Swagger' },
    ],
    database: [
      { icon: <FaDatabase className="text-4xl" />, title: 'MongoDB', level: 85, description: 'Schema Design, Aggregation, Indexing' },
      { icon: <FaDatabase className="text-4xl" />, title: 'MySQL', level: 80, description: 'Query Optimization, Normalization' },
      { icon: <FaDatabase className="text-4xl" />, title: 'Redis', level: 70, description: 'Caching, Session Management' },
    ],
    tools: [
      { icon: <FaTools className="text-4xl" />, title: 'Git', level: 90, description: 'Version Control, Collaboration' },
      { icon: <FaTools className="text-4xl" />, title: 'Docker', level: 75, description: 'Containerization, Deployment' },
      { icon: <FaBrain className="text-4xl" />, title: 'Problem Solving', level: 85, description: 'Algorithms, Data Structures' },
    ]
  };

  return (
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6 md:p-12"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      > 
        <h1 className="text-4xl md:text-5xl  font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"> <br/><br/>
          My Technical Arsenal
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and expertise in various domains of software development.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {['all', 'frontend', 'backend', 'database', 'tools'].map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300
              ${activeTab === tab 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {Object.entries(skills).map(([category, categorySkills]) => (
          activeTab === 'all' || activeTab === category ? (
            categorySkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={skillCard}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-600 h-2.5 rounded-full"
                  />
                </div>
                <div className="mt-2 text-right text-sm text-gray-400">
                  Proficiency: {skill.level}%
                </div>
              </motion.div>
            ))
          ) : null
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 text-lg">
          Always learning, always growing. Check out my projects to see these skills in action!
        </p>
        <motion.a
          href="/project"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors duration-300"
        >
          View Projects →
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;
