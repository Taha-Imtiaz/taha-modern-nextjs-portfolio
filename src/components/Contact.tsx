"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        const mailtoLink = `mailto:tahaimtiaz1996@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "tahaimtiaz1996@gmail.com",
            href: "mailto:tahaimtiaz1996@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+92 332 3822619",
            href: "tel:+923323822619"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Karachi, Pakistan",
            href: "#"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* MEGA animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large cyan circle - top left */}
                <motion.div
                    animate={{
                        x: [0, 105, 0],
                        y: [0, -95, 0],
                        scale: [1, 1.6, 1],
                        rotate: [0, 360, 720],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-48 -left-48 w-96 h-96 bg-cyan-500/22 rounded-full blur-3xl shadow-2xl shadow-cyan-500/30"
                />

                {/* Large pink circle - bottom right */}
                <motion.div
                    animate={{
                        x: [0, -125, 0],
                        y: [0, 105, 0],
                        scale: [1, 1.7, 1],
                        rotate: [720, 360, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute -bottom-48 -right-56 w-96 h-96 bg-pink-500/18 rounded-full blur-3xl shadow-2xl shadow-pink-500/25"
                />

                {/* Medium purple circle - right center */}
                <motion.div
                    animate={{
                        x: [0, 95, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.5, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 42,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3
                    }}
                    className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl shadow-2xl shadow-purple-500/25"
                />
            </div>

            {/* Additional layer */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 48, 0],
                        y: [0, -36, 0],
                        scale: [1, 1.22, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-20 w-48 h-48 bg-cyan-500/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -42, 0],
                        y: [0, 30, 0],
                        scale: [1, 0.8, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-20 w-56 h-56 bg-pink-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.3, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute top-1/2 right-1/4 w-44 h-44 bg-purple-500/12 rounded-full blur-3xl shadow-2xl shadow-purple-500/15"
                />
            </div>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        Let's build something amazing together!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">
                            Let's Connect
                        </h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="flex items-center space-x-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center text-cyan-400">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-400">
                                            {info.label}
                                        </p>
                                        {info.href !== "#" ? (
                                            <Link
                                                href={info.href}
                                                className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors"
                                            >
                                                {info.value}
                                            </Link>
                                        ) : (
                                            <p className="text-lg font-semibold text-white">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-2xl border border-gray-700/50">
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Quick Links
                            </h4>
                            <div className="space-y-3">
                                <Link
                                    href="https://github.com/Taha-Imtiaz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>GitHub Profile</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/taha-imtiaz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>LinkedIn Profile</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700/50">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Send Me a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-700 text-white"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-700 text-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-700 text-white resize-none"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                                >
                                    <Send className="w-4 h-4" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                        <p className="text-lg opacity-90">
                            I'm currently available for freelance work and full-time opportunities.
                            Let's discuss how we can bring your ideas to life!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}