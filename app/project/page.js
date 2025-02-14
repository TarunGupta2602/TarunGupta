"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';

const ProjectPage = () => {
  const projects = [
    {
      title: "GeekSoft",
      description: "A comprehensive software development platform offering cutting-edge solutions for modern businesses. Features include project management, team collaboration, and advanced analytics.",
      image: "/geeksoft-preview.jpg", // Make sure to add this image
      liveLink: "https://geeksoft.org",
      githubLink: "https://github.com/yourusername/geeksoft",
      technologies: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiExpress />, name: "Express.js" }
      ],
      features: [
        "Modern UI/UX with responsive design",
        "Real-time collaboration features",
        "Advanced project management tools",
        "Performance optimized architecture"
      ]
    },
    {
      title: "Web Development Portfolio",
      description: "A showcase of web development projects demonstrating expertise in modern frontend technologies and responsive design principles.",
      image: "/portfolio-preview.jpg", // Add this image
      liveLink: "https://tarungupta2602.github.io/webtask.github.io/",
      githubLink: "https://github.com/TarunGupta2602/webtask.github.io",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaNodeJs />, name: "Node.js" }
      ],
      features: [
        "Responsive design",
        "Modern animations",
        "Portfolio showcases",
        "Contact form integration"
      ]
    },
    {
      title: "WebYug Platform",
      description: "An innovative web platform built with modern technologies, focusing on user experience and performance.",
      image: "/webyug-preview.jpg", // Add this image
      liveLink: "https://webyug.onrender.com",
      githubLink: "https://github.com/yourusername/webyug",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaDatabase />, name: "MongoDB" }
      ],
      features: [
        "Dynamic content loading",
        "User authentication",
        "Real-time updates",
        "Responsive interface"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest works showcasing modern web development techniques and creative solutions.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="bg-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <motion.div 
                  className="relative h-64 md:h-full rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </motion.div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech.name}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400">
                          <span className="text-blue-400">•</span> {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                      >
                        <FaGithub /> Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
