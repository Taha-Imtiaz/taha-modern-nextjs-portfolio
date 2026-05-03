"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, Shield, Target } from "lucide-react";

export default function Leadership() {
    const contributions = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Mentorship & Training",
            description: "Mentored junior developers on React Native best practices, security implementations, and fintech application development.",
            percentage: 90
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Performance Optimization",
            description: "Implemented performance optimizations in fintech applications, improving response times and user experience.",
            percentage: 85
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Security Enhancements",
            description: "Integrated DexGuard and iOS App Attestation for enhanced mobile security across multiple applications.",
            percentage: 95
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Client Collaboration",
            description: "Collaborated with clients and stakeholders for optimal project delivery in fintech and utility sectors.",
            percentage: 88
        }
    ];

    return (
        <section id="leadership" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* MEGA animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large green circle - top right */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -85, 0],
                        scale: [1, 1.6, 1],
                        rotate: [0, 360, 720],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl shadow-2xl shadow-green-500/25"
                />

                {/* Large teal circle - bottom left */}
                <motion.div
                    animate={{
                        x: [0, -110, 0],
                        y: [0, 95, 0],
                        scale: [1, 1.6, 1],
                        rotate: [720, 360, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute -bottom-40 -left-48 w-96 h-96 bg-teal-500/18 rounded-full blur-3xl shadow-2xl shadow-teal-500/22"
                />

                {/* Medium cyan circle - left center */}
                <motion.div
                    animate={{
                        x: [0, 85, 0],
                        y: [0, -75, 0],
                        scale: [1, 1.45, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 42,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3
                    }}
                    className="absolute top-1/3 -left-32 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl shadow-2xl shadow-cyan-500/18"
                />
            </div>

            {/* Additional layer */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 42, 0],
                        y: [0, -32, 0],
                        scale: [1, 1.15, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-14 right-14 w-48 h-48 bg-green-500/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -38, 0],
                        y: [0, 26, 0],
                        scale: [1, 0.82, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute bottom-18 left-14 w-44 h-44 bg-teal-500/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -45, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl shadow-2xl shadow-cyan-500/10"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Leadership & Contributions
                    </h2>
                    <p className="text-xl text-gray-300">
                        Driving innovation and excellence in mobile development, security, and team collaboration.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {contributions.map((contribution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                        >
                            {/* Left side - Icon and stats */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-2' : ''}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-gray-800/50 backdrop-blur-sm p-12 rounded-xl shadow-2xl hover:shadow-green-500/10 transition-all duration-300 border border-gray-700/50">
                                    <div className="flex items-center mb-8">
                                        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white mr-6 shadow-lg">
                                            {contribution.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">
                                                {contribution.title}
                                            </h3>
                                            <div className="text-3xl font-bold text-green-400 mt-2">
                                                {contribution.percentage}%
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${contribution.percentage}%` }}
                                            transition={{ duration: 1.2, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-lg"
                                        ></motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right side - Description */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-1' : ''}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {contribution.description}
                                    </p>

                                    <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-lg p-6">
                                        <p className="text-green-300 font-semibold">Key Impact:</p>
                                        <p className="text-gray-300 mt-2">
                                            Contributing {contribution.percentage}% of my expertise to ensure excellence in {contribution.title.toLowerCase()}.
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-green-400 font-semibold">Active Focus Area</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Continuous Impact</h3>
                        <p className="text-lg opacity-90">
                            Committed to delivering high-quality solutions and fostering growth in the development community.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}