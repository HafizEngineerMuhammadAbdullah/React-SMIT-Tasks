import React from 'react';
import { motion } from 'motion/react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        // footer Section
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* for Container */}
            <div className={styles.container}>
                {/* for Text */}
                <p className={styles.text}>
                    © {new Date().getFullYear()} DevPortfolio · Built with{' '}
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        ❤️
                    </motion.span>
                    {' '}for students
                </p>
                {/* for Subtext */}
                <p className={styles.subtext}>
                    Every component uses <code>.module.css</code> + Framer Motion animations
                </p>
                {/* for Tech Badges */}
                <div className={styles.techBadges}>
                    <span>React</span>
                    <span>Framer Motion</span>
                    <span>Modular CSS</span>
                    <span>Component-based</span>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;