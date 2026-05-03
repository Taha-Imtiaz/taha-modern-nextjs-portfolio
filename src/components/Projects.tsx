"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Users } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            title: "NBP Digital Banking App",
            description: "Comprehensive digital banking application for National Bank of Pakistan with advanced payment features and security measures.",
            image: "/images/nbp-app-screenshot.png",
            technologies: ["React Native", "Fintech", "Payment Gateway", "Security"],
            features: [
                "Multi-gateway payment support (1Link, KuickPay, Paypro)",
                "QR code and VPA payment methods",
                "Real-time RTP functionality",
                "2-hour cooling-off security feature"
            ],
            period: "2024",
            type: "Mobile App",
            link: "https://play.google.com/store/apps/details?id=com.paysys.nbpdigital&hl=en"
        },
        {
            title: "Chikoo Product Platform",
            description: "E-commerce platform with advanced filtering, white-labeling, and merchant customization features.",
            image: "/images/chikoo-image.png",
            technologies: ["React", "White-labeling", "E-commerce"],
            features: [
                "Tags & Filters system",
                "Category & Voucher Discounts",
                "White-labeling for merchants",
                "StoreName as Image feature"
            ],
            period: "2023-2024",
            type: "Web Application",
            link: "https://chikoo.app/"
        },
        {
            title: "Qpon - BOGO Discount App",
            description: "Buy-One-Get-One discount application for restaurants and food services.",
            image: "/images/qpon-app.png",
            technologies: ["React Native", "Mobile App", "Discount System"],
            features: [
                "BOGO discount implementation",
                "Restaurant partnerships",
                "User-friendly discount claiming",
                "Real-time offer updates"
            ],
            period: "2022-2023",
            type: "Mobile App",
            link: "https://play.google.com/store/apps/details?id=com.qpon.deals&hl=en"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* Optimized background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large cyan circle - top left */}
                <motion.div
                    animate={{
                        x: [0, 70, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-48 -left-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Ultra-large pink circle - bottom right */}
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.25, 1],
                    }}
                    transition={{
                        duration: 90,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 8
                    }}
                    className="absolute -bottom-40 -right-56 w-96 h-96 bg-pink-500/12 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
                />

                {/* Large purple circle - right center */}
                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 85,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 15
                    }}
                    className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-500/13 rounded-full blur-3xl"
                    style={{ willChange: 'transform' }}
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
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-300">
                        A showcase of my key projects, from fintech applications to academic endeavors, demonstrating my expertise across different domains.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                        >
                            {/* Image/Visual side */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-2' : ''}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative h-80 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl overflow-hidden border border-gray-700/50">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end">
                                        <div className="p-6 w-full">
                                            <div className="text-3xl font-bold text-white">{project.title}</div>
                                            <div className="text-lg text-gray-300 mt-1">{project.type}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content side */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-1' : ''}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-3xl font-bold text-white">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                                                <Calendar className="w-5 h-5" />
                                                <span>{project.period}</span>
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start text-gray-300"
                                                >
                                                    <span className="text-cyan-400 mr-3 font-bold">✓</span>
                                                    <span>{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={project.link || `#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        target={project.link ? "_blank" : undefined}
                                        rel={project.link ? "noopener noreferrer" : undefined}
                                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                                    >
                                        <span className="font-semibold">View Project</span>
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
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
                    <div className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">More Projects on GitHub</h3>
                        <p className="text-lg opacity-90 mb-6">
                            Check out my GitHub profile for more projects, contributions, and open-source work.
                        </p>
                        <Link
                            href="https://github.com/Taha-Imtiaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span>View GitHub Profile</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}