"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
    FaPaperPlane, 
    FaUser, 
    FaEnvelope, 
    FaCommentAlt, 
    FaMapMarkerAlt, 
    FaPhone, 
    FaLinkedin, 
    FaGithub 
} from 'react-icons/fa';

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
    
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
    } = useForm();

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const floatingAnimation = {
        y: [-5, 5],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSubmitStatus({
                success: true,
                message: "Message sent successfully! I'll get back to you soon."
            });
            
            reset();
            setTimeout(() => {
                setSubmitStatus({ success: false, message: '' });
                window.location.reload();
            }, 3000);

        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus({
                success: false,
                message: "There was an error sending your message. Please try again."
            });
            
            setTimeout(() => {
                setSubmitStatus({ success: false, message: '' });
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const ContactInfo = ({ icon: Icon, title, content }) => (
        <motion.div 
            className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
        >
            <div className="bg-blue-500/20 p-3 rounded-full">
                <Icon className="text-blue-400 text-xl" />
            </div>
            <div>
                <h3 className="text-gray-300 text-sm">{title}</h3>
                <p className="text-white font-medium">{content}</p>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-black">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ top: '20%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ bottom: '20%', right: '10%' }}
                />
            </div>

            <div className="relative container mx-auto px-4 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-6xl mx-auto"
                >
                    {/* Header Section */}
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                            animate={floatingAnimation}
                        >
                            Let&apos;s Connect
                        </motion.h1>
                        <motion.p 
                            className="text-gray-400 text-lg max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Have a project in mind or just want to chat? I&apos;d love to hear from you.
                            Drop me a message and I&apos;ll get back to you as soon as possible.
                        </motion.p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Contact Information */}
                        <motion.div 
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            <ContactInfo 
                                icon={FaMapMarkerAlt}
                                title="Location"
                                content="Ghaziabad, India"
                            />
                            <ContactInfo 
                                icon={FaEnvelope}
                                title="Email"
                                content="tarungupta2602@gmail.com"
                            />
                            <ContactInfo 
                                icon={FaPhone}
                                title="Phone"
                                content="+91 7456096455"
                            />

                            {/* Social Links */}
                            <motion.div 
                                className="flex space-x-4 mt-8"
                                variants={itemVariants}
                            >
                                <motion.a
                                    href="https://linkedin.com/in/tarun2606"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-600/40 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin className="text-blue-400 text-xl" />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/TarunGupta2602"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700/20 p-3 rounded-full hover:bg-gray-700/40 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-white text-xl" />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div 
                            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Status Message */}
                            {submitStatus.message && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`mb-6 p-4 rounded-lg ${
                                        submitStatus.success 
                                            ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                                            : 'bg-red-500/20 text-red-300 border border-red-500/50'
                                    }`}
                                >
                                    {submitStatus.message}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <motion.div variants={itemVariants}>
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input 
                                            {...register("name", { 
                                                required: "Name is required",
                                                minLength: { value: 2, message: "Name must be at least 2 characters" }
                                            })}
                                            type="text" 
                                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <motion.p 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-2 text-sm text-red-400"
                                        >
                                            {errors.name.message}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input 
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            type="email" 
                                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    {errors.email && (
                                        <motion.p 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-2 text-sm text-red-400"
                                        >
                                            {errors.email.message}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <div className="relative">
                                        <FaCommentAlt className="absolute left-3 top-4 text-gray-400" />
                                        <textarea 
                                            {...register("message", {
                                                required: "Message is required",
                                                minLength: { value: 10, message: "Message must be at least 10 characters" }
                                            })}
                                            className="w-full pl-10 pr-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                                            placeholder="Your Message"
                                            rows="4"
                                        />
                                    </div>
                                    {errors.message && (
                                        <motion.p 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-2 text-sm text-red-400"
                                        >
                                            {errors.message.message}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        scale: 1.02,
                                        backgroundPosition: ['0%', '100%'],
                                        transition: { duration: 0.8 }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.div
                                        animate={isSubmitting ? {
                                            rotate: 360,
                                            transition: { duration: 1, repeat: Infinity }
                                        } : {}}
                                    >
                                        <FaPaperPlane />
                                    </motion.div>
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;