import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { motion } from "motion/react";
import { FaBars, FaTimes, FaRegMoon} from 'react-icons/fa';
import { LuMoon,LuSun } from "react-icons/lu";
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false)

    const links = ["Home", "Skills", "Projects", "Contact"];

    return (
        // for Header
        <motion.header
            initial={{
                y: -100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 5
            }}
            className={styles.header}>
            {/* for Navbar */}
            <motion.nav className={styles.navbar}>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        rotate: -4
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                    className={styles.logo}>
                    {/* for Logo Icon */}
                    <motion.span
                        initial={{
                            y: 100,
                            x: -100,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            opacity: 1
                        }}

                        transition={{
                            duration: 0.6,
                            delay: 0.3
                        }}
                        className={styles.logoIcon}>🚀</motion.span>
                    {/* for Logo Text */}
                    <span className={styles.logoText}>{"<"}Abdullah{" />"}</span>
                </motion.div>

                {/* Navlinks at desktop screen */}
                <div className={styles.navDesktop}>
                    {links.map((item, idx) => {
                        return (
                            <motion.a
                                className={styles.navLinks}
                                whileHover={{ scale: 1.1, color: '#6c63ff' }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={item}
                                href={`#${item.toLowerCase()}`} >{item}</motion.a>
                        )
                    })}
                    {/* Toggle Theme */}
                   <div>
                     <button className={styles.toggleBtn} onClick={toggleTheme}>
                        {theme === "dark" ? < LuMoon color='#ffffff' /> : <LuSun color='#0a0a0a' />}
                    </button>
                   </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* <FaBars /> => means menu bar  */}
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* navLinks at mobile screen */}
                <motion.nav
                    className={`${styles.navMobile} ${isOpen ? styles.open : ""}`}
                    animate={isOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {links.map((link) => (
                        <motion.a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={styles.navLinkMobile}
                            onClick={() => setIsOpen(false)}
                            whileHover={{ x: 10, color: '#6c63ff' }}
                        >
                            {link}
                        </motion.a>
                    ))}
                </motion.nav>
            </motion.nav>
        </motion.header>
    )
}

export default Navbar
