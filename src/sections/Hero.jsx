import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-400 font-medium tracking-wide mb-4"
                >
                    HELLO, I'M
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-gray-200 bg-clip-text text-transparent"
                >
                    KARTHIKEYAN
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-slate-400 mb-8 font-light"
                >
                    Frontend Developer & <span className="text-purple-400">ML Enthusiast</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
                >
                    Motivated Computer Science graduate skilled in React and Modern Web Technologies.
                    Passionate about building premium web interfaces and exploring Machine Learning.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-full font-medium transition-all hover:bg-slate-800"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
