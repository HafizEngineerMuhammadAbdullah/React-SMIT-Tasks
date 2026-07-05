import React from 'react';
import styles from "./Hero.module.css";
import { motion } from "motion/react";
import { TypeAnimation } from 'react-type-animation'
import { fadeInUp, scaleOnHover } from '../../animation/variants';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            {/* Content Box */}
            <motion.div className={styles.content}
                variants={fadeInUp}
            >
                <motion.div className={styles.badge}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}>
                    ✨ Open to opportunities
                </motion.div>

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

                {/* Typing Animation */}
                <motion.p className={styles.subtitle}>
                <TypeAnimation
                    sequence={[
                        'Frontend Developer',
                        2000,
                        'AI/ML Enthusiast',
                        2000,
                        'DSA & Leetcode Enthusiast',
                        2000,
                        'Interested in Gaming Development',
                        2000,
                        'Aspring Full-Stack Development', // Types 'One'
                        1000, // Waits 1s
                        'UI/UX Enthusiast', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'ReactJs Specialist', // Types 'Three' without deleting 'Two'
                        2000,
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                />
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
                    >
                        View Projects
                    </motion.button>
                    {/* Secondary Button */}
                    <motion.button
                        className={styles.secondaryBtn}
                        {...scaleOnHover}
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
                    {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            className={styles.socialLink}
                            whileHover={{
                                scale: 1.2,
                                y: -5,
                                color: '#6c63ff'
                            }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Images Section */}
            <motion.div
                className={styles.heroImage}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
            >
                <div className={styles.imageWrapper}>
                    <div className={styles.floatingOrb}></div>
                    <div className={styles.floatingOrb2}></div>
                    <div className={styles.floatingOrb3}></div>
                    <div className={styles.profilePlaceholder}>
                        <span>👨‍💻</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
