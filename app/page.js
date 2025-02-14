"use client";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import React from 'react';
import MyImage from '@/public/new.jpg';
import Image from 'next/image';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="intro">
        <motion.div {...fadeInUp}>
          <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Ask me
          </span>

          <TypeAnimation
            sequence={[
              ' Frontend...',
              1000,
              'ReactJS...',
              1000,
              'NextJS...',
              1000,
              'Software Development.',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', color: 'rgb(96 165 250)', display: 'inline-block' }}
            repeat={Infinity}
          /> <br /> <br />
        </motion.div>
        <motion.h1 
          className='font-bold'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi there.. <span className='text-blue-400 font-bold'>I&apos;m Tarun.</span> <br />
          <span className='text-pretty font-bold text-blue-400'>Self proclaimed,</span> Code polyglot!
        </motion.h1>
      </section>

      <section className="content">
        <motion.div 
          className="left-paragraph"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>Emerging from the digital abyss, I am dedicated to revolutionizing technology with a bold proclamation: &quot;Let&apos;s techify the world!&quot; With a touch of digital wizardry, I flip the script on conventional technology, prioritizing innovation and user-centric design. Say goodbye to mundane tech and hello to a realm where complexity fades, capacity skyrockets, and outcomes sparkle with brilliance...</p>
        </motion.div>
        <motion.div 
          className="right-paragraph"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>I&apos;m an aspiring software developer proficient in JavaScript programming with a solid background in frontend development, eager to collaborate on innovative projects within interdisciplinary teams. Passionate about leveraging these technologies in areas such as natural language processing.</p>
        </motion.div>
      </section>

      <motion.p 
        className="p"
        {...fadeInUp}
      >
        Discover the trails I&apos;ve blazed in the landscape of tech
      </motion.p>

      <motion.section 
        className="cv-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="https://docs.google.com/document/d/1BxDhg3eq-eJcy1MMOs8Px5AyZ8UGC5zCgy2_6clwElM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CHECK OUT</a>
      </motion.section>

      <motion.section 
        className="photo-section"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Image src={MyImage} alt="myimage" className="round-photo" />
      </motion.section>

      <motion.section 
        className="more-content"
        {...fadeInUp}
      >
        <p>I aim to excel through innovation, leadership, and impactful contributions.</p>
      </motion.section>

      <motion.p 
        className="new"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Let me win. But if I cannot win, let me brave in the attempt. For in the chronicles of life, effort always precedes triumph..
      </motion.p>

      <div className="cv-button1-container">
        <motion.section 
          className="cv-button1"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="https://github.com/TarunGupta2602" target="_blank" rel="noopener noreferrer">Just Visit</a>
        </motion.section>

        <motion.section 
          className="cv-button1"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="https://www.linkedin.com/in/tarun2606/" target="_blank" rel="noopener noreferrer">🔗Connect Now</a>
        </motion.section>
      </div>

      <motion.p 
        className="new1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Try to be <span className='text-yellow-300'>404</span> sometimes, not always the <span className='text-blue-500'>200</span>
      </motion.p>
    </motion.div>
  )
}

export default Home;
