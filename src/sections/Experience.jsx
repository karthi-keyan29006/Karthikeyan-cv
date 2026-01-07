import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:pl-8 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>

                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
                            <span className="text-sm text-blue-400 font-mono mb-2 block">July 11, 2025 – Present</span>
                            <h3 className="text-xl font-bold text-white mb-1">Junior Developer Intern</h3>
                            <h4 className="text-slate-400 mb-4">Lyzoo Technologies</h4>

                            <ul className="space-y-3 text-slate-300 list-disc list-inside">
                                <li>Working with <span className="text-blue-300">React, JavaScript, HTML, and CSS</span> to build responsive web interfaces.</li>
                                <li>Assisting in frontend component development and implementation of design systems.</li>
                                <li>Collaborating with senior developers to debug issues and optimize UI performance.</li>
                                <li>Participating in code reviews and project planning discussions.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:pl-8 relative"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>

                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                            <span className="text-sm text-purple-400 font-mono mb-2 block">2023 – 2025</span>
                            <h3 className="text-xl font-bold text-white mb-1">M.Sc. Computer Science</h3>
                            <h4 className="text-slate-400">Jamal Mohammed College, Tiruchirappalli</h4>
                            <p className="text-slate-500 mt-2">Percentage: 68%</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:pl-8 relative"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>

                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                            <span className="text-sm text-purple-400 font-mono mb-2 block">2020 – 2023</span>
                            <h3 className="text-xl font-bold text-white mb-1">B.Sc. Computer Science</h3>
                            <h4 className="text-slate-400">National College, Tiruchirappalli</h4>
                            <p className="text-slate-500 mt-2">Percentage: 74.5%</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
