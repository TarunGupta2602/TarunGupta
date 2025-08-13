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
      title: "Devora",
      description: "Our company website is built using Next.js, React, and Tailwind CSS. It is designed for a gym business.",
      image: "/dev.png",
      liveLink: "https://sitezy.vercel.app/",
      githubLink: "https://github.com/TarunGupta2602/Devora",
      technologies: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiMongodb />, name: "Supabase" }, 
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
      title: "Quick Commerce Website",
      description: "A complete Quick-commerce website with a focus on seamless user experience.",
      image: "/quick.png",
      liveLink: "https://lusekelo.vercel.app/",
      githubLink: "https://github.com/TarunGupta2602/lusekelo",
      technologies: [
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiMongodb />, name: "Supabase" }, 
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
      title: "GYMWEB",
      description: "A modern gym management system designed to streamline operations and enhance user experience.",
      image: "/gym.png",
      liveLink: "https://maharanafitness.online/",
      githubLink: "https://github.com/TarunGupta2602/MaharanaFitness",
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 mt-14  dark:bg-gray-900 text-gray-900 dark:text-[whitesmoke] py-16 px-4 sm:px-6 lg:px-8"
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
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Featured Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-7 text-lg max-w-3xl mx-auto">
            Explore my collection of innovative projects, showcasing modern design and cutting-edge technology.
          </p>
          <motion.div
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6 mx-auto"
            style={{ scaleX, maxWidth: '300px' }}
          />
        </motion.div>

        {/* Grid layout for desktop, single column for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectStackingCard key={project.title} index={index} total={projects.length}>
              <motion.div 
                className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/50 px-3 py-1 rounded-full text-xs text-blue-700 dark:text-blue-300"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-blue-500">•</span> {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
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