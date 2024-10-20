"use client";
import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import MyImage from '@/public/1641179396290 (1).jpg'
import Image from 'next/image'
const home = () => {
  return (
    <div class="container">
      

        <section class="intro">
        <div >
        <span className="text-white text-5xl" class="type">Ask me </span>

       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Frontend...',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'ReactJS...',
        1000,
        'NextJS...',
        1000,
        'Software Development.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', color: 'rgb(96 165 250)' ,  display: 'inline-block' }}
      repeat={Infinity}
    /> <br /> <br /> 
    </div>
            <h1 className='font-bold'>Hi there..  <span class='text-blue-400 font-bold ' >I'm Tarun.</span> <br />
            <span class='text-pretty font-bold text-blue-400 ' >Self proclaimed,</span>   Code polyglot!</h1>
        </section>
       
      
        
        <section class="content">
            <div class="left-paragraph">
                <p>Emerging from the digital abyss, I am dedicated to revolutionizing technology with a bold proclamation: "Let's techify the world!" With a touch of digital wizardry, I flip the script on conventional technology, prioritizing innovation and user-centric design. Say goodbye to mundane tech and hello to a realm where complexity fades, capacity skyrockets, and outcomes sparkle with brilliance...</p>
            </div>
            <div class="right-paragraph">
                <p>i’m an aspiring software developer proficient in JavaScript programming  with a solid background in frontend development, eager to collaborate on innovative projects within interdisciplinary teams. passionate about leveraging these technologies in areas such as natural language processing.
                </p>
            </div>
        </section>
        <p class="p">Discver the trails I've blazed in the landscape of tech</p>
        <section class="cv-button">
            <a href="https://drive.google.com/file/d/1QKbdB4A41HNSvhwif0ndYxxWUsBkHMc8/view?usp=drive_link"  target="_blank">CHECK OUT</a>
        </section >
      
        <section class="photo-section">
        <Image src={MyImage} alt="myimage" class="round-photo"/>
        </section>
        <section class="more-content">
            <p>I aim to excel through innovation, leadership, and impactful contributions.</p>
            
        </section>
        <p class="neww">,,</p>
        <p class="new">Let me win. But if I cannot win, let me brave in the attempt. For in the chronicles of life, effort always precedes triumph..</p>
        <div class="cv-button1-container">
  <section class="cv-button1">
    <a href="https://github.com/TarunGupta2602" target="_blank">Just Visit</a>
  </section>
  
  <section class="cv-button1">
    <a href="https://www.linkedin.com/in/tarun2606/" target="_blank">🔗Connect Now</a>
  </section>
</div>

        <p class="new1">Try to be <span className='text-yellow-300'>404</span> sometimes, not always the <span className='text-blue-500'>200</span></p>
       
    </div>
  )
}

export default home
