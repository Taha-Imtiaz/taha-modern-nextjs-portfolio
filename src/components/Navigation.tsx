"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            // Debounce scroll events to prevent too frequent updates
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const sections = ["home", "about", "experience", "skills", "projects", "leadership", "testimonials", "contact"];
                const scrollPosition = window.scrollY + 100;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }, 50); // 50ms debounce
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Leadership", href: "#leadership" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    if (!mounted) return null;

    return (
        <>
            {/* Animated background circles for navigation */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="fixed top-0 left-5 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none z-0"
            />
            <motion.div
                animate={{
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                }}
                className="fixed top-10 right-5 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl pointer-events-none z-0"
            />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold"
                        >
                            <Link
                                href="#home"
                                onClick={() => scrollToSection("#home")}
                                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                            >
                                Taha<span className="font-black">Imtiaz</span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <motion.button
                                        key={item.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`relative px-3 py-2 text-sm font-medium rounded-lg overflow-hidden ${isActive
                                                ? "text-cyan-300"
                                                : "text-gray-300 hover:text-cyan-300"
                                            }`}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: isActive ? 1 : 0,
                                                opacity: isActive ? 1 : 0
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                                duration: 0.3
                                            }}
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-cyan-500/5 rounded-lg"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: isActive ? 0 : 1,
                                                opacity: isActive ? 0 : 1
                                            }}
                                            transition={{ duration: 0.2 }}
                                            whileHover={{
                                                scale: isActive ? 1 : 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                        />
                                        <span className="relative z-10">{item.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-300 transition-colors"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-cyan-500/20 py-4"
                        >
                            <div className="space-y-2">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.slice(1);
                                    return (
                                        <motion.button
                                            key={item.name}
                                            onClick={() => scrollToSection(item.href)}
                                            className={`relative w-full text-left px-4 py-2 text-sm font-medium rounded-lg overflow-hidden ${isActive
                                                    ? "text-cyan-300"
                                                    : "text-gray-300 hover:text-cyan-300"
                                                }`}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{
                                                    scale: isActive ? 1 : 0,
                                                    opacity: isActive ? 1 : 0
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                    duration: 0.3
                                                }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 bg-cyan-500/5 rounded-lg"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{
                                                    scale: isActive ? 0 : 1,
                                                    opacity: isActive ? 0 : 1
                                                }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{
                                                    scale: isActive ? 1 : 1.05,
                                                    transition: { duration: 0.2 }
                                                }}
                                            />
                                            <span className="relative z-10">{item.name}</span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.nav>
        </>
    );
}