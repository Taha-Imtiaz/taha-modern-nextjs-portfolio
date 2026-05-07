"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
    const backgroundCircles = [
        { delay: 0, duration: 25, color: "cyan-500", opacity: "15", size: "w-56 h-56" },
        { delay: 1, duration: 30, color: "pink-500", opacity: "12", size: "w-64 h-64" },
        { delay: 2, duration: 32, color: "purple-500", opacity: "12", size: "w-48 h-48" },
        { delay: 3, duration: 28, color: "indigo-500", opacity: "12", size: "w-52 h-52" },
        { delay: 4, duration: 35, color: "teal-500", opacity: "10", size: "w-40 h-40" },
    ];

    const experiences = [
        {
            company: "Paysys Labs Pvt Ltd",
            position: "Software Engineer (React Native)",
            period: "Sep 2024 - Present",
            location: "Karachi, Pakistan",
            description: "Contributing to frontend development for multiple fintech and utility mobile applications, implementing advanced security measures and user experience enhancements.",
            achievements: [
                "🏦 NBP Digital Banking App: Comprehensive search functionality, merchant payment features, RTP functionality, cooling-off security",
                "⚡ K-Electric App: Utility bill payment interface and online shopping features",
                "💳 1App & PayApp: Multi-service payment gateways with DexGuard and iOS App Attestation"
            ],
            technologies: ["React Native", "Fintech", "Payment Gateways", "Security"]
        },
        {
            company: "Brandverse Pakistan",
            position: "Software Engineer",
            period: "Oct 2023 - Aug 2024",
            location: "Karachi, Pakistan",
            description: "Developed Chikoo Product platform with advanced filtering, white-labeling solutions, and merchant customization features.",
            achievements: [
                "Implemented comprehensive WhiteLabelling solution for merchants",
                "Developed StoreName as Image feature for enhanced visual representation",
                "Configured Storybook for component documentation and testing",
                "Fixed critical UI issues and improved application stability"
            ],
            technologies: ["React", "Storybook", "UI/UX", "WhiteLabelling"]
        },
        {
            company: "KoderLabs",
            position: "Software Engineer",
            period: "Mar 2022 - Jul 2023",
            location: "Karachi, Pakistan",
            description: "Worked on diverse projects including Chrome extensions, Angular applications, and React Native mobile applications.",
            achievements: [
                "Developed Chrome extension for enhanced web functionality",
                "Built Baroque yachts project using Angular framework",
                "Created React Native applications: Qpon (BOGO), Tandem (speed tracking), Event Bnb"
            ],
            technologies: ["React Native", "Angular", "Chrome Extensions", "Mobile Apps"]
        },
        {
            company: "Corrtec Pvt. Limited",
            position: "Software Engineer",
            period: "Sep 2021 - Mar 2022",
            location: "Karachi, Pakistan",
            description: "Developed React Native applications and worked on backend Angular projects with production deployments.",
            achievements: [
                "Implemented Global Counter Party & Country Limits Management features",
                "Created production builds and deployed to Tomcat server",
                "Developed multiple applications: Maname, Athens, Savings, Pixtool"
            ],
            technologies: ["React Native", "Angular", "Java", "Tomcat"]
        },
        {
            company: "Soft Three",
            position: "Software Engineer",
            period: "Sep 2020 - May 2021",
            location: "Karachi, Pakistan",
            description: "Developed and maintained web applications using modern JavaScript frameworks with focus on responsive design.",
            achievements: [
                "Learned and implemented Angular framework best practices",
                "Participated in code reviews and team collaboration sessions",
                "Ensured cross-browser compatibility and responsive design"
            ],
            technologies: ["JavaScript", "Angular", "Web Development", "Responsive Design"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* MEGA animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large cyan circle - top left */}
                <motion.div
                    animate={{
                        x: [0, 110, 0],
                        y: [0, -90, 0],
                        scale: [1, 1.6, 1],
                        rotate: [0, 360, 720],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-32 -left-48 w-96 h-96 bg-cyan-500/22 rounded-full blur-3xl shadow-2xl shadow-cyan-500/30"
                />

                {/* Ultra-large pink circle - bottom right */}
                <motion.div
                    animate={{
                        x: [0, -130, 0],
                        y: [0, 110, 0],
                        scale: [1, 1.7, 1],
                        rotate: [720, 360, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute -bottom-48 -right-52 w-full h-96 bg-pink-500/18 rounded-full blur-3xl shadow-2xl shadow-pink-500/25"
                />

                {/* Large purple circle - center left */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
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
                    className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl shadow-2xl shadow-purple-500/25"
                />

                {/* Medium indigo circle - right side */}
                <motion.div
                    animate={{
                        x: [0, -90, 0],
                        y: [0, 75, 0],
                        scale: [1, 1.4, 1],
                        rotate: [180, 0, 360],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute top-1/4 -right-32 w-72 h-72 bg-indigo-500/18 rounded-full blur-3xl shadow-2xl shadow-indigo-500/20"
                />

                {/* Medium teal circle - bottom left */}
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.45, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 48,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2.5
                    }}
                    className="absolute bottom-1/3 -left-28 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl shadow-2xl shadow-teal-500/20"
                />

                {/* Additional cyan accent - right center */}
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.35, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 43,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5
                    }}
                    className="absolute top-1/3 -right-20 w-56 h-56 bg-cyan-500/12 rounded-full blur-3xl shadow-2xl shadow-cyan-500/15"
                />
            </div>

            {/* Original circles for layering effect */}
            <div className="absolute inset-0 overflow-hidden">
                {backgroundCircles.map((circle, idx) => (
                    <motion.div
                        key={idx}
                        animate={{
                            x: idx % 2 === 0 ? [0, 70, 0] : [0, -70, 0],
                            y: idx % 2 === 0 ? [0, -60, 0] : [0, 60, 0],
                            scale: [1, 1.4, 1],
                            rotate: idx % 2 === 0 ? [0, 180, 360] : [360, 180, 0],
                        }}
                        transition={{
                            duration: circle.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: circle.delay
                        }}
                        className={`absolute ${circle.size} bg-${circle.color}/${circle.opacity} rounded-full blur-3xl shadow-2xl shadow-${circle.color}/15`}
                        style={{
                            top: `${(idx * 20) % 80}%`,
                            left: `${(idx * 25) % 85}%`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left - Title and intro */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                Career Journey
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                My professional journey in software development, from learning the fundamentals to Contributing fintech projects. Each experience has shaped my expertise and passion for building innovative solutions.
                            </p>
                        </motion.div>

                        {/* Right - Key Achievements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all">
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">🚀 Fintech Leader</h4>
                                <p className="text-gray-300 text-sm">Specialized in payment gateway integrations and secure fintech applications</p>
                            </div>
                            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm p-6 rounded-lg border border-pink-500/30 hover:border-pink-400/50 transition-all">
                                <h4 className="text-lg font-semibold text-pink-300 mb-2">🔒 Security Expert</h4>
                                <p className="text-gray-300 text-sm">Implemented DexGuard & iOS App Attestation across multiple applications</p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all">
                                <h4 className="text-lg font-semibold text-purple-300 mb-2">💡 Innovation Focus</h4>
                                <p className="text-gray-300 text-sm">Delivered 20+ projects with cutting-edge technologies and optimized solutions</p>
                            </div>
                            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-6 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all">
                                <h4 className="text-lg font-semibold text-green-300 mb-2">🎯 Team Player</h4>
                                <p className="text-gray-300 text-sm">Mentored developers and collaborated across 5 companies in fintech and tech sectors</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-3 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot with pulse effect */}
                                <div className="absolute left-1 md:left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-900 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
                                </div>

                                {/* Experience card */}
                                <div className="ml-7 md:ml-20">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
                                    >
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    {exp.position}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                                                    <div className="flex items-center space-x-2">
                                                        <Building className="w-4 h-4 text-cyan-400" />
                                                        <span className="font-medium">{exp.company}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <MapPin className="w-4 h-4 text-cyan-400" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-lg mt-4 md:mt-0">
                                                <Calendar className="w-5 h-5" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                                            <ul className="space-y-3">
                                                {exp.achievements.map((achievement, i) => (
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                                        viewport={{ once: true }}
                                                        className="flex items-start space-x-3 text-gray-300"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="leading-relaxed">{achievement}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}