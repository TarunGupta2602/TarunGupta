"use client"; // Ensure this is client-side

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/project", label: "Projects" },
        { href: "/skills", label: "Skills" },
        { href: "/contact", label: "Contact" }
    ];

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        },
        closed: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/10 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                              <Image
      src="/download-removebg-preview.png"
      width={200}
      height={200}
      alt="Picture of the author"
    />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.href}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-orange-600 hover:text-indigo-300 relative group transition-colors duration-200"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.div
                        className="md:hidden"
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full text-black hover:bg-white/20 focus:outline-none transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FiX className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2 bg-white/10 backdrop-blur-lg border-t border-white/20">
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.href}
                            variants={itemVariants}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-orange-400 hover:bg-indigo-500/20 hover:text-indigo-200 rounded-lg transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;