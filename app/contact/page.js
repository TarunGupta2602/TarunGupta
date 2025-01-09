"use client";
import React, { useRef } from 'react';
import { createUser } from '../user/users';
import Footer from '../new/Footer';

const Page = () => {
    const ref = useRef();

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <div className="flex flex-col md:flex-row items-center justify-between flex-grow p-8 md:p-12 lg:p-16">
                {/* Left Section */}
                <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0 px-6 md:px-12 lg:px-16 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white leading-tight">
                        Let&apos;s brainstorm <br /> something <span className="text-green-500">exciting</span> <br /> together
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-serif">
                        <a href="mailto:tarun.gupta2606@gmail.com" className="text-blue-600">✉️ tarun.gupta2606@gmail.com</a>
                    </p>
                    <p className="text-white text-xl md:text-2xl font-serif mt-2">⛳ Hapur, India</p>
                    <div className="flex justify-center md:justify-start space-x-6 mt-6">
                        <a href="https://www.linkedin.com/in/tarun2606/" className="text-gray-400 hover:text-blue-600 text-2xl">🔗</a>
                        <a href="mailto:tarun.gupta2606@gmail.com" className="text-gray-400 hover:text-blue-600 text-2xl">✉️</a>
                        <a href="https://github.com/TarunGupta2602" className="text-gray-400 hover:text-blue-600 text-2xl">🐞</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center w-full md:w-1/2">
                    <form
                        ref={ref}
                        onSubmit={(e) => {
                            e.preventDefault();
                            createUser(e);
                            ref.current.reset();
                            alert("Your message has been sent.");
                        }}
                        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
                    >
                        <h2 className="text-white text-2xl font-bold mb-6">Contact Me</h2>
                        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="mt-1 block w-full border border-gray-600 rounded-md p-3 bg-black focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <label htmlFor="email" className="block text-sm font-medium text-white mt-4">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="mt-1 block w-full border border-gray-600 rounded-md p-3 bg-black focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <label htmlFor="message" className="block text-sm font-medium text-white mt-4">Your Message</label>
                        <textarea
                            name="message"
                            placeholder="Enter your message for me"
                            required
                            className="mt-1 block w-full border border-gray-600 rounded-md p-3 bg-black h-32 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200"
                        >
                            Send Now 🦭
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Page;
