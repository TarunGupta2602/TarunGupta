import React from 'react';
import Image from 'next/image';
import projetImage from '@/public/Screenshot 2024-10-20 153643.png';
import projetImage1 from '@/public/Screenshot_20241214_142522.png';

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-6 space-x-8 flex-wrap">
      {/* Project 1 */}
      <div className="relative group w-80 h-52 md:w-96 md:h-60 mb-6 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <Image 
          src={projetImage} 
          className="object-cover w-full h-full" 
          alt="Project 1" 
          layout="fill" 
        />
        {/* Hover effect and View Project button */}
        <a 
          href="https://tarungupta2602.github.io/webtask.github.io/" 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        >
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            View Project
          </button>
        </a>
      </div>

      {/* Project 2 */}
      <div className="relative group w-80 h-52 md:w-96 md:h-60 mb-6 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <Image 
          src={projetImage1} 
          className="object-cover w-full h-full" 
          alt="Project 2" 
          layout="fill" 
        />
        {/* Hover effect and View Project button */}
        <a 
          href="https://webyug.onrender.com" 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        >
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            View Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default Page;
