"use client";

import { motion } from "framer-motion";
import { Award, Code, Shield, Smartphone } from "lucide-react";

export default function About() {
    const highlights = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "5+ Years Experience",
            description: "Specialized in React Native mobile development with expertise in fintech applications"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Security Expert",
            description: "Implemented DexGuard and iOS App Attestation for enhanced mobile security"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Fintech Specialist",
            description: "Payment gateway integrations, RTP functionality, and multi-service platforms"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Innovation Focus",
            description: "Optimized solutions with advanced features and user experience enhancements"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* Optimized background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large cyan circle - top left */}
                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 75,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Large pink circle - bottom right */}
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.25, 1],
                    }}
                    transition={{
                        duration: 85,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 12
                    }}
                    className="absolute -bottom-40 -right-48 w-96 h-96 bg-pink-500/12 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Large purple circle - left side */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -35, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 20
                    }}
                    className="absolute top-1/2 -left-32 w-72 h-72 bg-purple-500/13 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
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
                        About Me
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Innovative optimized solution seeker excited to be at the deployment phase of my new career as a web developer.
                        I bring 5+ years of hands-on experience designing, developing, and implementing applications using a range of technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            My Journey
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                My career has been focused on mobile application development, particularly in the fintech sector.
                                I've worked on major banking applications, utility payment systems, and multi-service platforms.
                            </p>
                            <p>
                                Currently at Paysys Labs, I contribute to frontend development for multiple fintech applications,
                                implementing advanced security measures and optimizing user experiences across various platforms.
                            </p>
                            <p>
                                My expertise includes React Native development, payment gateway integrations, and implementing
                                robust security protocols like DexGuard and iOS App Attestation.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-700/50"
                            >
                                <div className="text-cyan-400 mb-4">
                                    {highlight.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {highlight.title}
                                </h4>
                                <p className="text-sm text-gray-300">
                                    {highlight.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                        <p className="text-lg opacity-90">
                            I'm passionate about creating innovative solutions that make a difference.
                            Let's collaborate on your next project!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}