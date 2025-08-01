"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { ProjectStackingCard } from '../page';

const ProjectPage = () => {
  const projects = [
    {
      title: "ECOMWEB",
      description: "A complete E-Commerce website with a focus on seamless user experience.",
      image: "/ECOM.png",
      liveLink: "https://ecomweb-rosy.vercel.app/",
      githubLink: "https://github.com/TarunGupta2602/ECOMWEB",
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
      title: "GeekSoft",
      description: "A comprehensive software development platform offering cutting-edge solutions for modern businesses.",
      image: "/geek.png",
      liveLink: "https://geeksoft.org",
      githubLink: "https://github.com/TarunGupta2602/smartsolution",
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
      title: "Pravah – Guiding Your Career Path",
      description: "A non-profit initiative dedicated to helping students with personalized career guidance and mentorship.",
      image: "/parvah.png",
      liveLink: "https://parvah.vercel.app/",
      githubLink: "https://github.com/TarunGupta2602/Parvah",
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
      title: "ShopEase",
      description: "A modern e-commerce platform built with cutting-edge technologies, focusing on user experience.",
      image: "/shopease.png",
      liveLink: "https://shopease-eosin.vercel.app/",
      githubLink: "https://github.com/TarunGupta2602/ShopEase",
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
      description: "A showcase of web development projects demonstrating expertise in modern frontend technologies.",
      image: "/port.png",
      liveLink: "https://tarun-gupta.vercel.app/",
      githubLink: "https://github.com/TarunGupta2602/TarunGupta",
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
      description: "An innovative web platform built with modern technologies, focusing on user experience.",
      image: "/gzb.png",
      liveLink: "https://www.gzb.ae/",
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
    },
    {
      title: "E-commerce website",
      description: "An innovative web platform built with modern technologies, focusing on user experience.",
      image: "/ecom.png",
      liveLink: "https://tarungupta2602.github.io/webtask.github.io/",
      githubLink: "https://github.com/TarunGupta2602/webtask.github.io",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaDatabase />, name: "MongoDB" }
      ],
      features: [
        "Dynamic content loading",
        "Real-time updates",
        "Responsive interface"
      ]
    }
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 text-gray-900 dark:text-[whitesmoke] py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl mt-16 font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover my latest creations, blending modern design with cutting-edge technology.
          </p>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4 mx-auto"
            style={{ scaleX, maxWidth: '200px' }}
          />
        </motion.div>

        {/* Stacking scroll effect for project cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectStackingCard key={project.title} index={index} total={projects.length}>
              <motion.div 
                className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-100/50 dark:border-gray-700/50 min-h-[500px] flex flex-col justify-between"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-[whitesmoke]">{project.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 dark:text-[whitesmoke]">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className="flex items-center gap-1 bg-blue-100/50 px-2 py-1 rounded-full text-xs text-blue-700"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-[whitesmoke]">
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-blue-500">•</span> {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ProjectStackingCard>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;