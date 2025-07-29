"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaGithub, FaLinkedin, FaEnvelope, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiSupabase, SiVercel, SiMysql } from 'react-icons/si';

// Enhanced Scroll-triggered stacking card component for projects
const ProjectStackingCard = ({ children, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // More pronounced stacking effect for projects
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [150, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.2]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  
  // Card stacking with deeper z-index separation
  const zIndex = total - index;

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex: zIndex + 10, // Higher z-index for better stacking
      }}
      className="sticky top-24 mb-8"
    >
      {children}
    </motion.div>
  );
};

// Original stacking card component for skills/experience
const StackingCard = ({ children, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex: total - index,
      }}
      className="sticky top-20"
    >
      {children}
    </motion.div>
  );
};

// Parallax reveal card
const ParallaxCard = ({ children, direction = 'up', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], 
    direction === 'up' ? [50, -50] : [-50, 50]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ 
        opacity: 0, 
        y: direction === 'up' ? 60 : -60,
        scale: 0.9,
        filter: "blur(10px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};

const CreativePortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 95, color: '#F7DF1E', icon: <FaJs /> },
    { name: 'React.js', level: 90, color: '#61DAFB', icon: <FaReact /> },
    { name: 'Next.js', level: 88, color: '#000000', icon: <SiNextdotjs /> },
    { name: 'TypeScript', level: 85, color: '#3178C6', icon: <SiTypescript /> },
    { name: 'Node.js', level: 82, color: '#339933', icon: <FaNodeJs /> },
    { name: 'MongoDB', level: 80, color: '#47A248', icon: <SiMongodb /> },
    { name: 'SQL', level: 88, color: '#336791', icon: <SiMysql /> },
    { name: 'Tailwind CSS', level: 92, color: '#06B6D4', icon: <SiTailwindcss /> },
  ];

  const projects = [
    {
      title: 'ECOMWEB',
      description: 'Full-stack e-commerce platform with secure authentication and dynamic cart functionality. It is built with modern React patterns and optimized for performance.',
      tech: ['Next.js', 'React', 'Clerk', 'JavaScript'],
      color: 'from-purple-400 to-pink-400',
      url: 'https://ecomweb-rosy.vercel.app/',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      accentColor: 'from-purple-500 to-pink-500',
    },
    {
      title: 'ShopEase',
      description: 'Modern electronics marketplace with server-side rendering and optimized performance. It includes advanced filtering and search capabilities.',
      tech: ['Next.js', 'TypeScript', 'Vercel'],
      color: 'from-blue-400 to-cyan-400',
      url: 'https://shopease-eosin.vercel.app/',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      accentColor: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'GeekSoft',
      description: 'Service-based platform for documentation and printing with enhanced user experience. It streamlines workflow for business document management.',
      tech: ['React', 'Next.js', 'JavaScript'],
      color: 'from-green-400 to-teal-400',
      url: 'https://smartsolution-rust.vercel.app/',
      gradient: 'bg-gradient-to-br from-green-50 to-teal-50',
      accentColor: 'from-green-500 to-teal-500',
    },
    {
      title: 'Parvah',
      description: 'Educational platform with secure authentication and intuitive interface. It is designed for seamless learning experiences.',
      tech: ['React', 'Supabase', 'MongoDB'],
      color: 'from-orange-400 to-red-400',
      url: 'https://parvah.vercel.app/',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50',
      accentColor: 'from-orange-500 to-red-500',
    },
  ];

  const experiences = [
    {
      role: 'Full Stack Web Developer',
      company: 'TechCurators',
      period: 'April 2025 - Present',
      description: 'Developing high-performance web applications and maintaining backend systems with modern technologies.',
      achievements: ['Quick commerce platform development', 'Backend system optimization', 'Multi-site maintenance'],
      color: 'from-indigo-400 to-purple-400',
      bgColor: 'from-indigo-50 to-purple-50',
    },
    {
      role: 'Junior Developer Trainee',
      company: 'GTAC Solutions',
      period: 'Nov 2024 - Dec 2024',
      description: 'Gained expertise in SQL optimization and database design while working on enterprise solutions.',
      achievements: ['SQL performance tuning', 'Database schema design', 'Backend service integration'],
      color: 'from-emerald-400 to-teal-400',
      bgColor: 'from-emerald-50 to-teal-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 overflow-x-hidden">
      {/* Floating cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-multiply hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${
              i % 3 === 0 ? 'from-blue-200/30 to-purple-200/30' :
              i % 3 === 1 ? 'from-green-200/30 to-teal-200/30' :
              'from-pink-200/30 to-orange-200/30'
            } blur-xl`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center justify-center relative px-6 py-20"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                TARUN
              </h1>
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                GUPTA
              </h1>
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-light text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-500 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Crafting innovative digital experiences with React.js, Next.js, and modern web technologies. 
              Passionate about creating beautiful, functional, and scalable solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/tarun2606/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin /> Let&apos s Connect
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1Y8TBaba6m3ITRLuoDP6LUw_lDPyTy3dG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="text-8xl text-white/80">👨‍💻</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating elements around the image */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <FaReact className="text-white text-2xl" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <SiNextdotjs className="text-white text-xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Contact info */}
        <motion.div
          className="absolute bottom-10 left-10 space-y-2 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="text-sm text-gray-500">📧 tarun.gupta2606@gmail.com</div>
          <div className="text-sm text-gray-500">📱 +91 7456096455</div>
          <div className="text-sm text-gray-500">📍 Ghaziabad, India</div>
        </motion.div>
      </motion.section>

      {/* Skills Section with Stacking Cards */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <ParallaxCard>
            <h2 className="text-6xl lg:text-8xl font-black text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SKILLS
            </h2>
          </ParallaxCard>
          
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <StackingCard key={skill.name} index={index} total={skills.length}>
                <motion.div 
                  className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 mx-auto max-w-4xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl shadow-lg">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">{skill.name}</h3>
                        <p className="text-gray-500">Proficiency Level</p>
                      </div>
                    </div>
                    <div className="text-4xl font-black text-gray-300">{skill.level}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              </StackingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Stacking Animation */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-6xl mx-auto">
          <ParallaxCard>
            <h2 className="text-6xl lg:text-8xl font-black text-center mb-32 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              PROJECTS
            </h2>
          </ParallaxCard>
          
          {/* Enhanced stacking container with more height for better scroll effect */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <ProjectStackingCard key={project.title} index={index} total={projects.length}>
                <motion.div 
                  className={`${project.gradient} rounded-3xl p-10 shadow-2xl border border-white/50 group cursor-pointer mx-auto max-w-5xl min-h-[500px] flex flex-col justify-between backdrop-blur-sm`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${project.accentColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-2xl font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-4xl font-black text-gray-800 mb-2">{project.title}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.accentColor} rounded-full`}></div>
                            <span className="text-sm uppercase tracking-wider font-semibold">Featured Project</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        className="w-14 h-14 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/50"
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaExternalLinkAlt className="text-gray-700 text-lg" />
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      <p className="text-gray-700 mb-8 leading-relaxed text-xl font-medium">
                        {project.description}
                      </p>
                      
                      {/* Tech stack with enhanced styling */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-bold text-gray-700 shadow-md border border-white/50"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Footer call-to-action */}
                    <div className="mt-auto pt-6 border-t border-white/30">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-3 text-gray-700 font-bold text-lg group-hover:text-purple-600 transition-colors">
                          <span>View Live Project</span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaExternalLinkAlt className="text-base" />
                          </motion.div>
                        </div>
                        <div className={`px-4 py-2 bg-gradient-to-r ${project.accentColor} text-white rounded-full text-sm font-semibold shadow-lg`}>
                          Project #{index + 1}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </ProjectStackingCard>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="text-center mt-20 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Experience Section with Stacking Cards */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ParallaxCard>
            <h2 className="text-6xl lg:text-8xl font-black text-center mb-20 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EXPERIENCE
            </h2>
          </ParallaxCard>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <StackingCard key={exp.role} index={index} total={experiences.length}>
                <motion.div 
                  className={`bg-gradient-to-br ${exp.bgColor} rounded-3xl p-8 shadow-2xl border border-white/50 mx-auto max-w-5xl`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl shadow-lg mb-4">
                        <FaBuilding />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                      <p className="text-xl text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-purple-600 font-semibold">{exp.period}</p>
                    </div>
                    <div className="lg:w-2/3">
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{exp.description}</p>
                      <div className="grid lg:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                            <span className="text-gray-600">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StackingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 border-t border-gray-200">
        <ParallaxCard>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { name: 'GitHub', url: 'https://github.com/TarunGupta2602', icon: <FaGithub className="text-xl" /> },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tarun2606/', icon: <FaLinkedin className="text-xl" /> },
                { name: 'Email', url: 'mailto:tarun.gupta2606@gmail.com', icon: <FaEnvelope className="text-xl" /> },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name === 'Email' ? '_self' : '_blank'}
                  rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="font-semibold text-gray-700">{link.name}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-lg font-medium">
              &quot;Code is Poetry Written in Logic&quot;
            </p>
          </div>
        </ParallaxCard>
      </footer>
    </div>
  );
};

export default CreativePortfolio;