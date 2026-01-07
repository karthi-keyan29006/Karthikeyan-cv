import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-slate-300 text-lg leading-relaxed"
                    >
                        <p>
                            I am a driven <strong>Computer Science graduate</strong> (M.Sc.) from Jamal Mohammed College, Tiruchirappalli. My journey in technology is built on a strong foundation in computer fundamentals and a growing passion for software development.
                        </p>
                        <p>
                            Currently working as a <strong>Junior Developer Intern</strong> at Lyzoo Technologies, I focus on building responsive web interfaces using <strong>React, JavaScript, HTML, and CSS</strong>. I enjoy collaborating with senior developers to debug issues and improve UI performance.
                        </p>
                        <p>
                            Beyond web development, I have a keen interest in <strong>Machine Learning</strong> using Python and am actively expanding my knowledge in this field.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-xl font-semibold text-white mb-3">Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Web Development', 'Machine Learning', 'Video Gaming', 'Kabaddi', 'Cricket'].map((item) => (
                                    <span key={item} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-blue-300 border border-slate-700">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Abstract visual or image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative h-80 w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                        <div className="text-center p-6">
                            <div className="text-6xl mb-4">🚀</div>
                            <p className="text-slate-400 font-light">"Code is like humor. When you have to explain it, it’s bad."</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
