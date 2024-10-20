import React from 'react'
import Image from 'next/image'
import projetImage from '@/public/Screenshot 2024-10-20 153643.png'

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="relative group w-80 h-52 md:w-96 md:h-60"> {/* Adjusted width and height */}
        <Image 
          src={projetImage} 
          className="rounded-lg object-cover" 
          alt="Project1"
          layout="fill" // Ensures the image covers the entire container
        />
        
        {/* Button that appears on hover */}
        <a 
          href="https://tarungupta2602.github.io/webtask.github.io/" 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
        >
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
            View Project
          </button>
        </a>
      </div>
    </div>
  )
}

export default Page;
    