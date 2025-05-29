"use client";
import React, { useState, useEffect } from 'react';

  // Custom SVG Icons
  const GithubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const FileTextIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  const CodeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const SparklesIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const TypeAnimation = ({ sequence, className }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        const texts = ['a Developer', 'a Problem Solver', 'an Innovator', 'a Creator'];
        setCurrentText(texts[currentIndex]);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      
      return () => clearInterval(interval);
    }, [currentIndex]);

    return <span className={className}>{currentText}</span>;
  };

  const skills = [
    { icon: <CodeIcon />, name: "Frontend Development" },
    { icon: <GlobeIcon />, name: "Web Technologies" },
    { icon: <ZapIcon />, name: "Performance Optimization" },
    { icon: <SparklesIcon />, name: "UI/UX Design" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Cursor Effect */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            TG
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">About</a>
            <a href="#work" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">Work</a>
            <a href="#contact" className="hover:text-cyan-400 transition-all duration-300 hover:scale-105">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Text Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-gray-300">
                    <span>Hello, I'm</span>
                    <TypeAnimation 
                      sequence={['a Developer', 'a Problem Solver', 'an Innovator']}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"
                    />
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                    <span className="block text-white">Tarun</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                      Gupta
                    </span>
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Crafting digital experiences that merge 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"> creativity </span>
                  with 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> functionality</span>.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className={`flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="text-cyan-400">{skill.icon}</div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>View My Work</span>
                      <ArrowRightIcon />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-8 py-4 border border-gray-300 rounded-full font-semibold text-gray-300 hover:text-white hover:border-white transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    Get In Touch
                  </button>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative z-10 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl font-bold text-white">
                      TG
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-bounce">
                    <CodeIcon />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-bounce delay-500">
                    <SparklesIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-white">About</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  As a <span className="text-cyan-400 font-semibold">software alchemist</span>, I transform complex problems into elegant solutions. 
                  With expertise in React, Next.js, and modern web technologies, I create 
                  seamless digital experiences that leave a lasting impression.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
                      <div key={tech} className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-white">Let's Create Something</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Amazing</span>
          </h2>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/TarunGupta2602', color: 'from-gray-600 to-gray-800' },
              { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tarun2606/', color: 'from-blue-500 to-blue-700' },
              { icon: <FileTextIcon />, label: 'Resume', href: 'https://docs.google.com/document/d/1NcZZfxJ7LGEV5P-tFt8nkQuyHkOCvuLT/edit?usp=sharing&ouid=112404319985495156886&rtpof=true&sd=true', color: 'from-purple-500 to-pink-500' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center space-x-3 px-6 py-4 bg-gradient-to-r ${social.color} rounded-full text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 transform`}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                <span>{social.label}</span>
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-medium text-gray-300">
            "In the world of <span className="text-yellow-400 animate-pulse">404s</span> and <span className="text-green-400 animate-pulse">200s</span>, 
            be the one who creates the path others follow."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// "use client";
// import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
// import React from 'react';
// import Image from 'next/image';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { HiDocumentText } from 'react-icons/hi';

// const Home = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

  
//   const staggerContainer = {
//     initial: {},
//     animate: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const slideInFromLeft = {
//     initial: { x: -100, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     transition: { duration: 0.8, type: "spring", bounce: 0.4 }
//   };

//   const pulseAnimation = {
//     initial: { scale: 1 },
//     animate: {
//       scale: [1, 1.02, 1],
//       transition: {   
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 lg:px-8"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Hero Section with enhanced animations */}
//       <section className="pt-20 pb-32 max-w-6xl mx-auto">
//         <motion.div 
//           className="space-y-4"
//           variants={staggerContainer}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.div 
//             className="flex items-center space-x-2"
//             variants={fadeInUp}
//           >
//             <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
//               Hello, I&apos;m
//             </span>
//             <TypeAnimation
//               sequence={[
//                 'a Developer',
//                 1000,
//                 'a Problem Solver',
//                 1000,
//                 'an Innovator',
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500"
//               repeat={Infinity}
//             />
//           </motion.div>
          
//           <motion.h1 
//             className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
//             variants={slideInFromLeft}
//             whileHover={{
//               scale: 1.05,
//               textShadow: "0 0 8px rgb(59, 130, 246)",
//               transition: { duration: 0.2 }
//             }}
//           >
//             Tarun Gupta
//           </motion.h1>
          
//           <motion.p 
//             className="text-lg sm:text-xl text-gray-300 max-w-2xl"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Crafting digital experiences that merge creativity with functionality. 
//             Specialized in frontend development with a passion for creating 
//             intuitive and impactful web solutions.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* About Section with enhanced animations */}
//       <motion.section 
//         className="py-20 bg-gray-900/50 backdrop-blur-sm"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.div 
//             className="space-y-6"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <motion.h2 
//               className="text-3xl font-bold"
//               variants={slideInFromLeft}
//               whileHover={{ scale: 1.05 }}
//             >
//               About Me
//             </motion.h2>
//             <p className="text-gray-300 leading-relaxed">
//               As a software alchemist, I transform complex problems into elegant solutions. 
//               With expertise in React, Next.js, and modern web technologies, I create 
//               seamless digital experiences that leave a lasting impression.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
//               contributing to open-source projects, or sharing knowledge with the 
//               developer community.
//             </p>
//           </motion.div>
          
//           <motion.div 
//             className="relative h-[400px] rounded-lg overflow-hidden"
//             variants={pulseAnimation}
//             initial="initial"
//             animate="animate"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Image 
//               src="/new.jpg"
//               alt="Profile"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* CTA Section with enhanced animations */}
//       <section className="py-20">
//         <motion.div 
//           className="max-w-6xl mx-auto text-center space-y-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h2 
//             className="text-3xl font-bold"
//             whileHover={{
//               scale: 1.05,
//               color: "#60A5FA",
//               transition: { duration: 0.2 }
//             }}
//           >
//             Let&apos;s Create Something Amazing Together
//           </motion.h2>
          
//           <motion.div 
//             className="flex flex-wrap justify-center gap-4"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             <motion.a
//               href="https://github.com/TarunGupta2602"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
//               whileHover={{ 
//                 scale: 1.1,
//                 boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaGithub className="text-xl" />
//               <span>GitHub</span>
//             </motion.a>

//             <motion.a
//               href="https://www.linkedin.com/in/tarun2606/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaLinkedin className="text-xl" />
//               <span>LinkedIn</span>
//             </motion.a>

//             <motion.a
//               href="https://docs.google.com/document/d/1NcZZfxJ7LGEV5P-tFt8nkQuyHkOCvuLT/edit?usp=sharing&ouid=112404319985495156886&rtpof=true&sd=true"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <HiDocumentText className="text-xl" />
//               <span>Resume</span>
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Footer Quote with enhanced animation */}
//       <motion.footer 
//         className="py-12 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.p 
//           className="text-lg font-medium text-gray-400"
//           whileHover={{
//             scale: 1.05,
//             transition: { duration: 0.2 }
//           }}
//         >
//           &quot;In the world of <motion.span 
//             className="text-yellow-300"
//             animate={{
//               opacity: [1, 0.5, 1],
//               transition: { duration: 2, repeat: Infinity }
//             }}
//           >404s</motion.span> and <motion.span 
//             className="text-blue-500"
//             animate={{
//               opacity: [1, 0.5, 1],
//               transition: { duration: 2, repeat: Infinity, delay: 1 }
//             }}
//           >200s</motion.span>, 
//           be the one who creates the path others follow.&quot;
//         </motion.p>
//       </motion.footer>
//     </motion.div>
//   );
// }

// export default Home;
