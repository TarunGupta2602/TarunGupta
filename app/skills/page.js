"use client";
import React, { useEffect, useState } from 'react';


const Page = () => {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Set a timeout to show cards after the header animation
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div >
      <div className="head">Uhm, skillset? Yes I hold some. Just dive in..</div>
      {showCards && (
        <div className="cards-container">
          <div className="card"><h2>PROGRAMMING LANGUAGE</h2><h1>JavaScript</h1><p>Experienced in JavaScript for Development.</p></div>
          <div className="card"><h2>Backend</h2><h1>NodeJs + Express</h1><p>NodeJs for making Backend to resolve Problems.</p></div>
          <div className="card"><h2>Database</h2><h1>MySQL + MongoDB</h1><p>MySQL and MongoDB for maintaining Data of Web App.</p></div>
          <div className="card"><h2>Framework</h2><h1>Next.js</h1><p>Next.js for making complete Full Stack Applications.</p></div>
        </div>
      )}
      
    </div>
  );
}

export default Page;
