

"use client";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, type: "spring", bounce: 0.4 }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {   
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section with enhanced animations */}
      <section className="pt-20 pb-32 max-w-6xl mx-auto">
        <motion.div 
          className="space-y-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="flex items-center space-x-2"
            variants={fadeInUp}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hello, I&apos;m
            </span>
            <TypeAnimation
              sequence={[
                'a Developer',
                1000,
                'a Problem Solver',
                1000,
                'an Innovator',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            variants={slideInFromLeft}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 8px rgb(59, 130, 246)",
              transition: { duration: 0.2 }
            }}
          >
            Tarun Gupta
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting digital experiences that merge creativity with functionality. 
            Specialized in frontend development with a passion for creating 
            intuitive and impactful web solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* About Section with enhanced animations */}
      <motion.section 
        className="py-20 bg-gray-900/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold"
              variants={slideInFromLeft}
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.h2>
            <p className="text-gray-300 leading-relaxed">
              As a software alchemist, I transform complex problems into elegant solutions. 
              With expertise in React, Next.js, and modern web technologies, I create 
              seamless digital experiences that leave a lasting impression.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] rounded-lg overflow-hidden"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src="/new.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with enhanced animations */}
      <section className="py-20">
        <motion.div 
          className="max-w-6xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-bold"
            whileHover={{
              scale: 1.05,
              color: "#60A5FA",
              transition: { duration: 0.2 }
            }}
          >
            Let&apos;s Create Something Amazing Together
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/TarunGupta2602"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tarun2606/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://docs.google.com/document/d/1NcZZfxJ7LGEV5P-tFt8nkQuyHkOCvuLT/edit?usp=sharing&ouid=112404319985495156886&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDocumentText className="text-xl" />
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Quote with enhanced animation */}
      <motion.footer 
        className="py-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="text-lg font-medium text-gray-400"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          &quot;In the world of <motion.span 
            className="text-yellow-300"
            animate={{
              opacity: [1, 0.5, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          >404s</motion.span> and <motion.span 
            className="text-blue-500"
            animate={{
              opacity: [1, 0.5, 1],
              transition: { duration: 2, repeat: Infinity, delay: 1 }
            }}
          >200s</motion.span>, 
          be the one who creates the path others follow.&quot;
        </motion.p>
      </motion.footer>
    </motion.div>
  );
}

export default Home;
