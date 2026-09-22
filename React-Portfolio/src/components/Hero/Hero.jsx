import React from 'react';
import styles from "./Hero.module.css";
import { motion } from "motion/react";
import { fadeInUp, scaleOnHover } from '../../animation/variants';
import { socialLinks } from '../../data/portfolioData';
import AvailabilityBadge from '../Badge/AvailabilityBadge';
import TypingAnimation from './TypingAnimation';
import CircularBadge from './CircularBadge';

const Hero = () => {

    return (
        <section id="home" className={styles.hero}>
            {/* Left Part : Content Box */}
            <motion.div className={styles.content}
                variants={fadeInUp}
            >
                {/* Badge Animation */}
                <motion.div className={styles.badge}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}>
                    ✨ Open to opportunities
                </motion.div>

                <div>
                    {/* Availability Badge */}
                    < AvailabilityBadge />
                </div>

                {/* My Title */}
                <motion.h1 className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}>
                    Hi, I'm{' '}
                    <motion.span
                        className={styles.gradientText}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    >
                        {/* Name */}
                        Muhammad Abdullah
                    </motion.span>
                </motion.h1>

                {/* Skills/Subtitle Section */}
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    {/* Subtitle */}
                    Full-stack developer · UI/UX enthusiast · React specialist
                </motion.p>

                {/* Typing Text Animation */}
                <motion.p>
                    <TypingAnimation />
                </motion.p>

                {/* Description Section */}
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {/* description */}
                    I craft beautiful, performant web experiences with modern tools.
                    Passionate about clean code and delightful user interfaces.
                </motion.p>


                {/* For Buttons */}
                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    {/* Primary Button */}
                    <motion.button
                        className={styles.primaryBtn}
                        {...scaleOnHover}
                        whileHover={{
                            boxShadow: '0 0 30px rgba(108, 99, 255, 0.4)',
                            ...scaleOnHover.whileHover
                        }}
                        onClick={() => window.location.href = '#projects'}
                    >
                        View Projects
                    </motion.button>

                    {/* Secondary Button */}
                    <motion.button
                        className={styles.secondaryBtn}
                        {...scaleOnHover}
                        onClick={() => window.location.href = '#contact'}
                    >
                        Contact Me
                    </motion.button>

                </motion.div>

                {/* Social Section */}
                <motion.div className={styles.socials}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}>
                    {/* Social Platform Links */}
                    {socialLinks.map((Icon, index) => (
                        <motion.a
                            key={index}
                            href={Icon.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.socialLink}
                            whileHover={{
                                scale: 1.2,
                                y: -5,
                                color: Icon.color
                            }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Icon.linkName />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <div className="w-full flex items-center relative">
                    <div className="absolute right-0 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Scroll</span>
                        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
                    </div>
                </div>

            </motion.div>



            {/* Right Part : Image Box */}
            {/* Image Section/Content */}
            <motion.div
                className={styles.heroImage}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
            >
                <div className={styles.imageWrapper}>

                    {/* Decorative glowing rings */}
                    {/* <div className="absolute inset-0 w-full h-full max-w-[500px] max-h-[500px] mx-auto z-0">
                        <div className="absolute inset-0 rounded-full border-[1px] border-cyan/30 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border-[1px] border-orange/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute inset-12 rounded-full border-[1px] border-white/10 border-dashed animate-[spin_20s_linear_infinite]"></div>
                    </div> */}


                    <div className={styles.floatingOrb}></div>
                    <div className={styles.floatingOrb2}></div>
                    <div className={styles.floatingOrb3}></div>
                    <div className={styles.profilePlaceholder}>

                        {/* <span>👨‍💻</span> */}
                        <img className={styles.portfolioImage} src="/assets/face.png" alt="Portfolio-Image" />
                    </div>


                    {/* Floating UI Elements */}
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 right-0 sm:right-10 bg-[#1e1917]/60  border border-white/10 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-xl">
                            1+
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-bold">Years</p>
                            <p className="text-[#978580]">Experience</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [15, -15, 15] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 left-0 sm:left-10 bg-[#1e1917]/60  border border-white/10 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center text-orange-400 font-bold text-xl">
                            10+
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-bold">Projects</p>
                            <p className="text-[#978580]">Completed</p>
                        </div>
                    </motion.div>

                </div>

                {/* Circular Badge Component */}
                <CircularBadge />
            </motion.div>
        </section>
    )
}

export default Hero
