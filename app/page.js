
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const CreativePortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'React.js', level: 90, color: '#61DAFB' },
    { name: 'Next.js', level: 88, color: '#61DAFB' },
    { name: 'TypeScript', level: 85, color: '#3178C6' },
    { name: 'Node.js', level: 82, color: '#339933' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'SQL', level: 88, color: '#336791' },
    { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
  ];

  const projects = [
    {
      title: 'ECOMWEB',
      description: 'Full-stack e-commerce platform with secure authentication and dynamic cart functionality',
      tech: ['Next.js', 'React', 'Clerk', 'JavaScript'],
      color: 'from-purple-500 to-pink-500',
      url: 'https://ecomweb-rosy.vercel.app/',
    },
    {
      title: 'ShopEase',
      description: 'Modern electronics marketplace with server-side rendering and optimized performance',
      tech: ['Next.js', 'TypeScript', 'Vercel'],
      color: 'from-blue-500 to-cyan-500',
      url: 'https://shopease-eosin.vercel.app/',
    },
    {
      title: 'GeekSoft',
      description: 'Service-based platform for documentation and printing with enhanced UX',
      tech: ['React', 'Next.js', 'JavaScript'],
      color: 'from-green-500 to-teal-500',
      url: 'https://smartsolution-rust.vercel.app/',
    },
    {
      title: 'Parvah',
      description: 'Educational platform with secure authentication and intuitive interface',
      tech: ['React', 'Supabase', 'MongoDB'],
      color: 'from-orange-500 to-red-500',
      url: 'https://parvah.vercel.app/',
    },
  ];

  const experiences = [
    {
      role: 'Full Stack Web Developer',
      company: 'TechCurators',
      period: 'April 2025 - Present',
      description: 'Developing high-performance web applications and maintaining backend systems',
      achievements: ['Quick commerce platform development', 'Backend system optimization', 'Multi-site maintenance'],
    },
    {
      role: 'Junior Developer Trainee',
      company: 'GTAC Solutions',
      period: 'Nov 2024 - Dec 2024',
      description: 'Gained expertise in SQL optimization and database design',
      achievements: ['SQL performance tuning', 'Database schema design', 'Backend service integration'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative font-sans">
      {/* Animated Cursor - Hide on mobile */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Floating Particles - Reduce on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(typeof window !== 'undefined' && window.innerWidth <= 768 ? 20 : 50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30" />
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-8 lg:space-y-10 relative z-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <motion.div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                TARUN GUPTA
              </motion.h1>
              <motion.div
                className="absolute -inset-3 lg:-inset-5 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Crafting innovative digital experiences with React.js, Next.js, and modern web technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-6 mt-10 lg:mt-14 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/tarun2606/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="https://docs.google.com/document/d/1NcZZfxJ7LGEV5P-tFt8nkQuyHkOCvuLT/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative h-[400px] sm:h-[450px] lg:h-[550px] xl:h-[650px] rounded-3xl overflow-hidden mx-6 sm:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl" />
            <Image
              src="/new.jpg"
              alt="Tarun Gupta - Full Stack Developer"
              fill
              className="object-cover rounded-3xl"
              style={{ objectPosition: 'center' }}
              priority
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Floating Contact Info - Hide on mobile */}
        <motion.div
          className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 space-y-2 hidden sm:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="text-sm lg:text-base text-gray-400 flex items-center gap-2">
            <span>📍</span> Ghaziabad, India
          </div>
          <div className="text-sm lg:text-base text-gray-400 flex items-center gap-2">
            <span>📧</span> tarun.gupta2606@gmail.com
          </div>
          <div className="text-sm lg:text-base text-gray-400 flex items-center gap-2">
            <span>📱</span> +91 7456096455
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-40 px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center mb-16 lg:mb-24 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SKILLS
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-xl lg:text-2xl font-bold mb-4" style={{ color: skill.color }}>
                  {skill.name}
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 mb-3">
                  <motion.div
                    className="h-3 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-sm text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-40 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-purple-900/15 to-cyan-900/15">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center mb-16 lg:mb-24 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            PROJECTS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-8 bg-gradient-to-br ${project.color} rounded-3xl overflow-hidden group cursor-pointer block shadow-lg hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed text-base lg:text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm lg:text-base font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.3, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-40 px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-center mb-16 lg:mb-24 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent tracking-tight"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            EXPERIENCE
          </motion.h2>

          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="relative p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col lg:flex-row items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-cyan-400">{exp.role}</h3>
                    <p className="text-xl lg:text-2xl text-gray-200">{exp.company}</p>
                  </div>
                  <div className="text-purple-400 font-semibold text-base mt-2 lg:mt-0">{exp.period}</div>
                </div>
                <p className="text-gray-300 mb-6 text-base lg:text-lg leading-relaxed">{exp.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0" />
                      <span className="text-base text-gray-400">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-t from-purple-900/20 to-transparent">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 lg:mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Let&apos;s Build Something Extraordinary
          </motion.h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 lg:gap-8 mb-10 lg:mb-16">
            {[
              { name: 'GitHub', url: 'https://github.com/TarunGupta2602', icon: '🐙' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tarun2606/', icon: '💼' },
              { name: 'Email', url: 'mailto:tarun.gupta2606@gmail.com', icon: '📧' },
            ].map((link) => (
              <motion.a 
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-semibold text-base">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact info for mobile */}
          <div className="block sm:hidden mb-8 space-y-2 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span>📍</span> Ghaziabad, India
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📧</span> tarun.gupta2606@gmail.com
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📱</span> +91 7456096455
            </div>
          </div>

          <motion.div 
            className="text-gray-500 text-base font-medium"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            &quot;Code is Poetry Written in Logic&quot;
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default CreativePortfolio;
