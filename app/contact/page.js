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
            const payload = {
                ...data,
                submittedAt: new Date().toLocaleString(),
            };

            const response = await fetch("https://sheetdb.io/api/v1/50hgjha2lly1b", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: [payload] }),
            });

            const result = await response.json();
            console.log("SheetDB Response:", result);

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            setSubmitStatus({
                success: true,
                message: "Message sent successfully! I'll get back to you soon."
            });

            reset();

        } catch (error) {
            console.error("Error sending message:", error);
            setSubmitStatus({
                success: false,
                message: "There was an error sending your message. Please try again."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const ContactInfo = ({ icon: Icon, title, content }) => (
        <motion.div 
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(229, 231, 235, 0.5)" }}
        >
            <div className="bg-blue-100 p-3 rounded-full">
                <Icon className="text-blue-600 text-xl" />
            </div>
            <div>
                <h3 className="text-gray-600 text-sm font-medium dark:text-[whitesmoke]">{title}</h3>
                <p className="text-black font-medium !text-black">{content}</p>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-[whitesmoke]">
            <div className="relative container mx-auto px-4 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-6xl mx-auto"
                >
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 dark:text-[whitesmoke]"
                            animate={floatingAnimation}
                        >
                            Let&apos;s Connect
                        </motion.h1>
                        <motion.p 
                            className="text-gray-600 text-lg max-w-2xl mx-auto dark:text-[whitesmoke]"
                            variants={itemVariants}
                        >
                            Have a project in mind or just want to chat? I&apos;d love to hear from you.
                            Drop me a message and I&apos;ll get back to you as soon as possible.
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
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

                            <motion.div 
                                className="flex space-x-4 mt-8"
                                variants={itemVariants}
                            >
                                <motion.a
                                    href="https://linkedin.com/in/tarun2606"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin className="text-blue-600 text-xl" />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/TarunGupta2602"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-gray-800 text-xl" />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {submitStatus.message && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className={`mb-6 p-4 rounded-lg ${
                                        submitStatus.success 
                                            ? 'bg-green-100 text-green-700 border border-green-200' 
                                            : 'bg-red-100 text-red-700 border border-red-200'
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
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <motion.p 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-2 text-sm text-red-500 dark:text-red-300"
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
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    {errors.email && (
                                        <motion.p 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-2 text-sm text-red-500 dark:text-red-300"
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
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[120px]"
                                            placeholder="Your Message"
                                            rows="4"
                                        />
                                    </div>
                                    {errors.message && (
                                        <motion.p 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-2 text-sm text-red-500 dark:text-red-300"
                                        >
                                            {errors.message.message}
                                        </motion.p>
                                    )}
                                </motion.div>

                                <motion.button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
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
