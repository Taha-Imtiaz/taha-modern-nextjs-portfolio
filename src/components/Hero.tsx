"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gray-950 overflow-hidden">
            {/* Background gradient for shining black effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-80"></div>

            {/* Optimized background circles - fewer, larger, slower */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large cyan circle - top left */}
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Ultra-large pink circle - bottom right */}
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 70,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5
                    }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Large purple circle - center-left */}
                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 65,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 10
                    }}
                    className="absolute top-1/3 -left-48 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Large indigo circle - top right */}
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.25, 1],
                    }}
                    transition={{
                        duration: 75,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 15
                    }}
                    className="absolute top-1/4 -right-36 w-72 h-72 bg-indigo-500/18 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold text-white leading-tight"
                        >
                            Hi, I'm{" "}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                Taha Imtiaz
                            </motion.span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 font-light"
                        >
                            Software Engineer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg text-gray-400 leading-relaxed"
                        >
                            Innovative optimized solution seeker with 5+ years of experience in React Native mobile development,
                            specializing in fintech applications, payment gateway integrations, and advanced security implementations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center space-x-4 text-gray-400"
                        >
                            <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>Karachi, Pakistan</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="flex flex-wrap gap-4 pt-8"
                        >
                            <Link
                                href="https://github.com/Taha-Imtiaz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-105"
                            >
                                <ExternalLink className="w-5 h-5" />
                                <span>GitHub</span>
                            </Link>

                            <Link
                                href="mailto:taha.imtiaz@paysyslabs.com"
                                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-105"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </Link>

                            <Link
                                href="tel:+923323822619"
                                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-105"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Call</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Visual showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative h-96 hidden md:flex items-center justify-center"
                    >
                        <div className="relative w-72 h-72">
                            {/* Animated gradient border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-2xl blur-xl opacity-50"
                            />
                            <div className="absolute inset-2 bg-gray-950 rounded-2xl flex items-center justify-center">
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="text-center space-y-4"
                                >
                                    <div className="text-6xl">💻</div>
                                    <p className="text-white font-semibold">React Native</p>
                                    <p className="text-gray-400 text-sm">Fintech Specialist</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/60 cursor-pointer"
                >
                    <ChevronDown className="w-8 h-8 mx-auto" />
                </motion.div>
            </motion.div>
        </section>
    );
}