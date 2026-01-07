import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400">Feel free to reach out for collaborations or just a friendly hello</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <motion.a
                        href="mailto:karthikeyan29629@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500 hover:bg-slate-800 transition-all group"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                            <FaEnvelope className="text-xl" />
                        </div>
                        <h3 className="text-white font-medium mb-2">Email</h3>
                        <p className="text-slate-400 text-sm break-all">karthikeyan29629@gmail.com</p>
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-green-500 hover:bg-slate-800 transition-all group"
                    >
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform">
                            <FaPhone className="text-xl" />
                        </div>
                        <h3 className="text-white font-medium mb-2">Phone</h3>
                        <p className="text-slate-400 text-sm">9025507052</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-8 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500 hover:bg-slate-800 transition-all group"
                    >
                        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                            <FaMapMarkerAlt className="text-xl" />
                        </div>
                        <h3 className="text-white font-medium mb-2">Location</h3>
                        <p className="text-slate-400 text-sm">Tiruchirappalli, Tamil Nadu</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
