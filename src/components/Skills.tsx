"use client";

import { motion } from "framer-motion";
import {
    Code,
    Smartphone,
    Database,
    Server,
    GitBranch,
    Shield,
    Palette,
    Wrench
} from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Mobile Development",
            icon: <Smartphone className="w-8 h-8" />,
            skills: [
                { name: "React Native", level: 95 },
                { name: "iOS App Attestation", level: 90 },
                { name: "DexGuard", level: 85 }
            ],
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Frontend Development",
            icon: <Code className="w-8 h-8" />,
            skills: [
                { name: "React.js", level: 90 },
                { name: "JavaScript (ES6+)", level: 88 },
                { name: "TypeScript", level: 80 },
                { name: "HTML5 & CSS3", level: 85 }
            ],
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Backend & Databases",
            icon: <Database className="w-8 h-8" />,
            skills: [
                { name: "Node.js & Express.js", level: 82 },
                { name: "MongoDB & Firebase", level: 85 },
                { name: "REST API & GraphQL", level: 88 }
            ],
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "Frameworks & Libraries",
            icon: <Server className="w-8 h-8" />,
            skills: [
                { name: "Redux & State Management", level: 90 },
                { name: "Material UI", level: 85 },
                { name: "Chakra UI", level: 80 },
                { name: "Bootstrap", level: 85 },
                { name: "Storybook", level: 88 },
                { name: "Angular", level: 78 }
            ],
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "Tools & Technologies",
            icon: <Wrench className="w-8 h-8" />,
            skills: [
                { name: "Git & Version Control", level: 90 },
                { name: "Payment Gateway Integration", level: 92 },
                { name: "Storybook", level: 80 }
            ],
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "Security & Fintech",
            icon: <Shield className="w-8 h-8" />,
            skills: [
                { name: "Fintech Applications", level: 95 },
                { name: "Security Protocols", level: 88 },
                { name: "1Link, KuickPay, Paypro", level: 90 }
            ],
            color: "from-red-500 to-pink-500"
        }
    ];

    const CircularProgress = ({ percentage, color, delay = 0 }: { percentage: number; color: string; delay?: number }) => {
        const radius = 35;
        const circumference = 2 * Math.PI * radius;
        const strokeDasharray = circumference;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;

        return (
            <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                    {/* Background circle */}
                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-gray-700"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke={`url(#gradient-${color.replace(/\s+/g, '-')})`}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={strokeDasharray}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 2, delay, ease: "easeInOut" }}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id={`gradient-${color.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={`var(--tw-gradient-from)`} />
                            <stop offset="100%" stopColor={`var(--tw-gradient-to)`} />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{percentage}%</span>
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* MEGA animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large cyan circle - top right */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -90, 0],
                        scale: [1, 1.6, 1],
                        rotate: [0, 360, 720],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/22 rounded-full blur-3xl shadow-2xl shadow-cyan-500/30"
                />

                {/* Ultra-large pink circle - bottom left */}
                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.7, 1],
                        rotate: [720, 360, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute -bottom-48 -left-56 w-full h-96 bg-pink-500/18 rounded-full blur-3xl shadow-2xl shadow-pink-500/25"
                />

                {/* Large purple circle - center */}
                <motion.div
                    animate={{
                        x: [0, 90, 0],
                        y: [0, -85, 0],
                        scale: [1, 1.5, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 42,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3
                    }}
                    className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl shadow-2xl shadow-purple-500/25"
                />

                {/* Medium indigo circle - right side */}
                <motion.div
                    animate={{
                        x: [0, -85, 0],
                        y: [0, 70, 0],
                        scale: [1, 1.4, 1],
                        rotate: [180, 0, 360],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute top-1/2 -right-24 w-72 h-72 bg-indigo-500/18 rounded-full blur-3xl shadow-2xl shadow-indigo-500/20"
                />

                {/* Medium teal circle - bottom right */}
                <motion.div
                    animate={{
                        x: [0, 75, 0],
                        y: [0, -95, 0],
                        scale: [1, 1.4, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 48,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2.5
                    }}
                    className="absolute bottom-1/4 -right-20 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl shadow-2xl shadow-teal-500/20"
                />
            </div>

            {/* Additional animated circles layer */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 25, 0],
                        scale: [1, 0.9, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute bottom-20 left-20 w-56 h-56 bg-pink-500/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-500/12 rounded-full blur-3xl shadow-2xl shadow-purple-500/15"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 35, 0],
                        scale: [1, 1.15, 1],
                        rotate: [180, 0, 360],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3
                    }}
                    className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-indigo-500/12 rounded-full blur-3xl shadow-2xl shadow-indigo-500/15"
                />
                <motion.div
                    animate={{
                        x: [0, 45, 0],
                        y: [0, -45, 0],
                        scale: [1, 1.1, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 4
                    }}
                    className="absolute top-1/4 right-1/3 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl shadow-2xl shadow-teal-500/10"
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
                        Skills & Technologies
                    </h2>
                    <p className="text-xl text-gray-300">
                        A comprehensive overview of my technical expertise and proficiency levels across different domains.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                        >
                            {/* Left side - Skills list */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-2' : ''}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-700/50">
                                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-6 shadow-lg`}>
                                        {category.icon}
                                    </div>

                                    <h3 className="text-2xl font-semibold text-white mb-8">
                                        {category.title}
                                    </h3>

                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-gray-300 font-medium">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-cyan-400 font-semibold text-sm">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-3">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1.5, delay: index * 0.1 + skillIndex * 0.2 }}
                                                        viewport={{ once: true }}
                                                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} shadow-sm`}
                                                    ></motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right side - Visual showcase */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-1' : ''}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative h-80 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20"
                                    />
                                    <div className="relative z-10 grid grid-cols-2 gap-6 w-full">
                                        {category.skills.map((skill, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.1 }}
                                                className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700/50 hover:border-cyan-500/50 transition-all"
                                            >
                                                <div className={`text-3xl mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-bold`}>
                                                    {skill.level}%
                                                </div>
                                                <p className="text-xs md:text-sm text-gray-300 line-clamp-2">{skill.name}</p>
                                            </motion.div>
                                        ))}
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
                    <div className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                        <p className="text-lg opacity-90">
                            I'm always expanding my skill set and staying up-to-date with the latest technologies and best practices in software development.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}