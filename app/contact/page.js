"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs, { init } from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    // Replace these with your EmailJS credentials
    const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    useEffect(() => {
        init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await emailjs.sendForm(
                EMAIL_SERVICE_ID,
                EMAIL_TEMPLATE_ID,
                formRef.current,
                EMAIL_PUBLIC_KEY
            );
            
            setSubmitStatus({
                success: true,
                message: "Message sent successfully! I'll get back to you soon."
            });
            formRef.current.reset();
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: "Message sent successfully! I'll get back to you soon."
            });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus({ success: false, message: '' }), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            value: "tarun.gupta2606@gmail.com",
            link: "mailto:tarun.gupta2606@gmail.com"
        },
        {
            icon: <FaLinkedin className="text-2xl" />,
            title: "LinkedIn",
            value: "tarun2606",
            link: "https://www.linkedin.com/in/tarun2606/"
        },
        {
            icon: <FaGithub className="text-2xl" />,
            title: "GitHub",
            value: "TarunGupta2602",
            link: "https://github.com/TarunGupta2602"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Location",
            value: "Hapur, India",
            link: "https://maps.google.com/?q=Hapur,India"
        }
    ];

    // Animation variants
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const containerVariants = {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.8 } }
    };

    const formVariants = {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
    };

    return (
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"><br/>
                        Let&apos;s Connect
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info Section */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                                        className="flex items-center gap-4 p-4 bg-gray-700/20 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                                    >
                                        <div className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-200">{info.title}</h3>
                                            <p className="text-blue-400 text-sm">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div variants={formVariants}>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-xl space-y-6"
                        >
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.01 }}
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-medium text-white 
                                    ${isSubmitting 
                                        ? 'bg-gray-600 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'} 
                                    transition-all duration-300 shadow-lg hover:shadow-blue-500/25`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </div>
                                ) : (
                                    'Send Message'
                                )}
                            </motion.button>

                            {submitStatus.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`text-center p-4 rounded-lg ${
                                        submitStatus.success 
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/20' 
                                            : 'bg-red-500/20 text-red-400 border border-red-500/20'
                                    }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer Section */}
        </motion.div>
    );
};

export default ContactPage;
