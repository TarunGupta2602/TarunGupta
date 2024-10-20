"use client";
import React from 'react';
import { createUser } from '../user/users';
import { useRef } from 'react';
import Footer from '../new/Footer';

const Page = () => {
   
const ref = useRef();
    return (
        <div>
        <div className="flex flex-col md:flex-row items-center justify-between h-screen p-9 bg-black">
            <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0 px-8 md:px-16 lg:px-24">
                <h1 className="text-6xl  font-serif mb-4">Let's brainstorm <br /> something <span className='text-green-500'>exciting</span> <br />together</h1> <br />
                <p className="text-white text-2xl font-serif"> <a href="tarun.gupta2606@gmail.com" className="text-blue-600"> ✉️   tarun.gupta2606@gmail.com</a></p>
                <p className="text-white text-2xl font-serif ">⛳ Hapur, India</p>
                <div className="flex space-x-4 mt-4">
                    <a href="https://www.linkedin.com/in/tarun2606/" className="text-gray-600 hover:text-blue-600">🔗</a>
                    <a href="tarun.gupta2606@gmail.com" className="text-gray-600 hover:text-blue-600">✉️</a>
                    <a href="https://github.com/TarunGupta2602" className="text-gray-600 hover:text-blue-600">🐞</a>
                </div>
            </div>
            <div className="flex justify-end w-full md:w-2/3 max-w-xl px-8 md:px-18 lg:px-6">
                <form ref={ref} action={(e)=>{createUser(e); ref.current.reset(); alert("Information Send Success");}}      className="bg-white p-8 rounded-lg shadow-md w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-4">Your Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message for me"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-3 h-48 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                    <button type="submit" className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200">
                        Send Now 🦭
                    </button>
                </form>
            </div> 
        </div>
        <Footer/>
       </div>
    );
};

export default Page;
