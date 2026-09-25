import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import { links } from '../../data/portfolioData';

const MainFooter = () => {

    return (
        <footer className="pt-20 pb-10 border-t border-white/10 bg-black/80 font-manrope">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <Link to="home" smooth={true} className="cursor-pointer inline-block mb-6">
                            <span className="text-3xl font-bold text-white tracking-tight">
                                Abdullah<span className="text-[#15d1e9]">.</span>
                            </span>
                        </Link>
                        <p className="text-[#978580] text-sm leading-relaxed max-w-sm mb-8">
                            A passionate Frontend Developer specializing in building modern, responsive, and high-quality web applications.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/HafizEngineerMuhammadAbdullah" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/2  border border-white/10 flex items-center justify-center text-[#978580] hover:text-[#15d1e9] hover:border-[#15d1e9] hover:bg-[#15d1e9]/10 hover:shadow-[0_0_15px_rgba(21,209,233,0.3)] hover:-translate-y-1 transition- duration-75 ease-out">
                                <FiGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-abdullah-360a87384/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/2  border border-white/10 flex items-center justify-center text-[#978580] hover:text-[#15d1e9] hover:border-[#15d1e9] hover:bg-[#15d1e9]/10 hover:shadow-[0_0_15px_rgba(21,209,233,0.3)] hover:-translate-y-1 transition- duration-75 ease-out">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="https://www.upwork.com/freelancers/~01cf64dd2b269b0bad?mp_source=share" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.02]  border border-white/10 flex items-center justify-center text-[#978580] hover:text-[#fb9718] hover:border-[#fb9718] hover:bg-[#fb9718]/10 hover:shadow-[0_0_15px_rgba(251,151,24,0.3)] hover:-translate-y-1 transition- duration-75 ease-out">
                                <SiUpwork size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {links.map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        offset={-100}
                                        className="text-[#978580] text-sm hover:text-[#15d1e9] cursor-pointer transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="text-[#978580] text-sm">abdullahkhalid2k25@gmail.com</li>
                            <li className="text-[#978580] text-sm">Available for Freelance</li>
                            <li className="text-[#978580] text-sm">Worldwide</li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#978580] text-xs">
                        &copy; {new Date().getFullYear()} Abdullah Khalid. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[#978580] text-xs hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[#978580] text-xs hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;