import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-900 text-white">
            <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Karthikeyan
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-slate-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-blue-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>

            <main className="flex-grow pt-16">
                {children}
            </main>

            <footer className="bg-slate-950 py-8 text-center text-slate-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Karthikeyan. All rights reserved.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="mailto:karthikeyan29629@gmail.com" className="hover:text-blue-400 transition-colors">Email</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
