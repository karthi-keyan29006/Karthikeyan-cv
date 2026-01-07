import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Python', icon: <FaPython className="text-blue-300" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Networking', icon: <FaNetworkWired className="text-green-400" /> },
        { name: 'Project Planning', icon: null },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-slate-400">Technologies and tools I work with</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon || <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-500">?</div>}
                            </div>
                            <h3 className="font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
