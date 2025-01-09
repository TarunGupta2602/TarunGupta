"use client"; // Ensure this is client-side

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black sticky top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white text-lg font-semibold font-serif">
                    <Link href="/">TarunGupta</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link
                        href="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-fuchsia-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        href="/project"
                        className="text-gray-300 hover:bg-gray-700 hover:text-fuchsia-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/skills"
                        className="text-gray-300 hover:bg-gray-700 hover:text-fuchsia-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Skills
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-300 hover:bg-gray-700 hover:text-fuchsia-500 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Contact
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/project"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/skills"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Skills
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
