"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Rizwan Ahmed Siddiqui",
            position: "Senior Software Engineer (Remote)",
            company: "Node.js | Go | React | Vue | MongoDB | PostgreSQL | Kubernetes",
            image: "/images/rizwan.png",
            rating: 5,
            text: "Taha is my co-software developer. His responsibilities include requirement gathering, analysis and design of complex Web applications using a variety of technologies. He has always proved himself to be a dependable colleague and a hard worker with solid problem solving and technical skills. He takes his work very seriously and always show interest to newest developments in programming techniques. Although he is a fast-learner, he is very careful and cautious about his work. Taha would be an asset to be on any team. To say he's a team player wouldn't be wrong. He has always gone out of his way to welcome newcomers and resolve any problems they might have. He pitches innovative ideas at company meetings but also listens to what others have to say, including constructive criticism. Overall, Taha is a talented, hard-working employee, and I am glad to work with him."
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* MEGA animated background circles */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Ultra-large yellow circle - top right */}
                <motion.div
                    animate={{
                        x: [0, 105, 0],
                        y: [0, -90, 0],
                        scale: [1, 1.6, 1],
                        rotate: [0, 360, 720],
                    }}
                    transition={{
                        duration: 45,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-44 -right-44 w-96 h-96 bg-yellow-500/18 rounded-full blur-3xl shadow-2xl shadow-yellow-500/22"
                />

                {/* Large orange circle - bottom left */}
                <motion.div
                    animate={{
                        x: [0, -115, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.6, 1],
                        rotate: [720, 360, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute -bottom-40 -left-56 w-96 h-96 bg-orange-500/16 rounded-full blur-3xl shadow-2xl shadow-orange-500/20"
                />

                {/* Medium pink circle - center */}
                <motion.div
                    animate={{
                        x: [0, 90, 0],
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
                    className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl shadow-2xl shadow-pink-500/18"
                />
            </div>

            {/* Additional layer */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 52, 0],
                        y: [0, -38, 0],
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-18 right-18 w-52 h-52 bg-yellow-500/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -44, 0],
                        y: [0, 32, 0],
                        scale: [1, 0.78, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                    className="absolute bottom-22 left-18 w-48 h-48 bg-orange-500/12 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 45, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.25, 1],
                        rotate: [0, 270, 180],
                    }}
                    transition={{
                        duration: 32,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2
                    }}
                    className="absolute top-1/3 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl shadow-2xl shadow-pink-500/10"
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
                        Testimonials
                    </h2>
                    <p className="text-xl text-gray-300">
                        What colleagues and clients say about working with me.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                        >
                            {/* Profile/Image side */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-2' : ''}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 border border-gray-700/50 flex flex-col items-center text-center">
                                    <motion.img
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-24 rounded-full mb-6 border-4 border-yellow-400"
                                    />
                                    <h4 className="text-2xl font-semibold text-white mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-yellow-400 font-semibold mb-1">
                                        {testimonial.position}
                                    </p>
                                    <p className="text-gray-400 mb-6">
                                        {testimonial.company}
                                    </p>

                                    <div className="flex mb-4 justify-center">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="text-4xl font-bold text-yellow-400">
                                        {testimonial.rating}.0
                                    </div>
                                </div>
                            </motion.div>

                            {/* Testimonial side */}
                            <motion.div
                                className={index % 2 === 1 ? 'md:order-1' : ''}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="space-y-6">
                                    <div className="relative">
                                        <Quote className="absolute -top-4 -left-6 w-12 h-12 text-gray-300/30" />
                                        <p className="text-lg text-gray-300 leading-relaxed italic pl-4">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6">
                                        <p className="text-yellow-300 font-semibold mb-2">Professional Relationship</p>
                                        <p className="text-gray-300">
                                            Collaborated successfully on impactful projects delivering exceptional results and maintaining professional excellence.
                                        </p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span className="text-yellow-400 font-semibold">Verified Review</span>
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
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Trusted by Industry Professionals</h3>
                        <p className="text-lg opacity-90">
                            Building strong relationships through quality work and reliable delivery.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}