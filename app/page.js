"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Tailwind CSS', level: 92, color: '#06B6D4' }
  ];

  const projects = [
    {
      title: 'ECOMWEB',
      description: 'Full-stack e-commerce platform with secure authentication and dynamic cart functionality',
      tech: ['Next.js', 'React', 'Clerk', 'JavaScript'],
      color: 'from-purple-500 to-pink-500',
      url: 'https://ecomweb-rosy.vercel.app/'
    },
    {
      title: 'ShopEase',
      description: 'Modern electronics marketplace with server-side rendering and optimized performance',
      tech: ['Next.js', 'TypeScript', 'Vercel'],
      color: 'from-blue-500 to-cyan-500',
      url: 'https://shopease-eosin.vercel.app/'
    },
    {
      title: 'GeekSoft',
      description: 'Service-based platform for documentation and printing with enhanced UX',
      tech: ['React', 'Next.js', 'JavaScript'],
      color: 'from-green-500 to-teal-500',
      url: 'https://smartsolution-rust.vercel.app/'
    },
    {
      title: 'Parvah',
      description: 'Educational platform with secure authentication and intuitive interface',
      tech: ['React', 'Supabase', 'MongoDB'],
      color: 'from-orange-500 to-red-500',
      url: 'https://parvah.vercel.app/'
    }
  ];

  const experiences = [
    {
      role: 'Full Stack Web Developer',
      company: 'TechCurators',
      period: 'April 2025 - Present',
      description: 'Developing high-performance web applications and maintaining backend systems',
      achievements: ['Quick commerce platform development', 'Backend system optimization', 'Multi-site maintenance']
    },
    {
      role: 'Junior Developer Trainee',
      company: 'GTAC Solutions',
      period: 'Nov 2024 - Dec 2024',
      description: 'Gained expertise in SQL optimization and database design',
      achievements: ['SQL performance tuning', 'Database schema design', 'Backend service integration']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Cursor - Hide on mobile */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 2 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating Particles - Reduce on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(typeof window !== 'undefined' && window.innerWidth <= 768 ? 20 : 50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Section - Adjusted for navbar space */}
      <section className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TARUN GUPTA
              </motion.h1>
              <motion.div
                className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl lg:rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Crafting digital experiences that push boundaries. Specialized in React.js, Next.js, and modern web technologies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-8 lg:mt-12 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all cursor-pointer text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.div>
              <motion.a
                href="https://docs.google.com/document/d/1NcZZfxJ7LGEV5P-tFt8nkQuyHkOCvuLT/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden mx-4 sm:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl lg:rounded-3xl" />
            <img
              src="/new.jpg"
              alt="Tarun Gupta - Full Stack Developer"
              className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
              style={{ objectPosition: 'center' }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl lg:rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Floating Contact Info - Hide on mobile */}
        <motion.div
          className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 space-y-1 lg:space-y-2 hidden sm:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-xs lg:text-sm text-gray-400">📍 Ghaziabad, India</div>
          <div className="text-xs lg:text-sm text-gray-400">📧 tarun.gupta2606@gmail.com</div>
          <div className="text-xs lg:text-sm text-gray-400">📱 +91 7456096455</div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-12 lg:mb-20 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            SKILLS
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative p-4 lg:p-6 bg-white/5 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-lg lg:text-xl font-bold mb-3 lg:mb-4" style={{ color: skill.color }}>
                  {skill.name}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  />
                </div>
                <div className="text-sm text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/10 to-cyan-900/10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-12 lg:mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            PROJECTS
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-6 lg:p-8 bg-gradient-to-br ${project.color} rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer block`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">{project.title}</h3>
                  <p className="text-white/90 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 lg:px-3 py-1 bg-white/20 rounded-full text-xs lg:text-sm font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-center mb-12 lg:mb-20 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h2>

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                className="relative p-6 lg:p-8 bg-white/5 backdrop-blur-md rounded-2xl lg:rounded-3xl border border-white/10 hover:border-white/20 transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-cyan-400">{exp.role}</h3>
                    <p className="text-lg lg:text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="text-purple-400 font-medium mt-2 lg:mt-0">{exp.period}</div>
                </div>
                <p className="text-gray-300 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{exp.description}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-gray-400">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-purple-900/20 to-transparent">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Let&apos;s Build Something Amazing
          </motion.h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6 mb-8 lg:mb-12">
            {[
              { name: 'GitHub', url: 'https://github.com/TarunGupta2602', icon: '🐙' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/tarun2606/', icon: '💼' },
              { name: 'Email', url: 'mailto:tarun.gupta2606@gmail.com', icon: '📧' }
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 lg:px-6 py-2 lg:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg lg:text-xl">{link.icon}</span>
                <span className="font-medium text-sm lg:text-base">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact info for mobile */}
          <div className="block sm:hidden mb-6 space-y-2 text-sm text-gray-400">
            <div>📍 Ghaziabad, India</div>
            <div>📧 tarun.gupta2606@gmail.com</div>
            <div>📱 +91 7456096455</div>
          </div>

          <motion.div 
            className="text-gray-400 text-sm"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &ldquo;Code is poetry written in logic&rdquo;
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default CreativePortfolio;