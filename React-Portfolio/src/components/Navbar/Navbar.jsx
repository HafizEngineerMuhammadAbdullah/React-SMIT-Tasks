import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { motion } from "motion/react";
import { FaBars, FaTimes, FaRegMoon } from 'react-icons/fa';
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-scroll';



// Wrap the react-scroll Link component using motion.create()
// const MotionScrollLink = motion.create(ScrollLink);
// const MotionScrollLink = motion.create(Link);

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false)

    // const links = ["Home", "Skills", "Projects", "Contact"];

    const links = [
        { link: "About Me", section: "about" },
        { link: "Skills", section: "skills" },
        { link: "Projects", section: "projects" },
        { link: "Contact", section: "contact" },
    ];

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
                                key={item.section}
                                href={`#${item.section}`} >
                                {item.link}
                            </motion.a >
                        )
                    })}
                    

                    {/* Toggle Theme */}
                    <div>
                        <button className={styles.toggleBtn} onClick={toggleTheme}>
                            {theme === "dark" ? < LuMoon color='#ffffff' /> : <LuSun color='#0a0a0a' />}
                        </button>
                    </div>

                    {/* Let's Talk Button */}
                    <div className="hidden lg:block">
                        <Link to="contact" smooth={true} offset={-100} duration={50}>
                            <button className="relative px-6 py-2.5 text-sm font-medium text-black p bg-white rounded-full overflow-hidden group cursor-pointer">
                                <span className="relative z-10 group-hover:text-gray-500 transition-colors duration-300 ease-out">Let's Talk</span>
                                <div className="absolute inset-0 bg-linear-to-r from-[#15d1e9] via-purple-200 to-[#fb9718] w-0 group-hover:w-full origin-left transition-[width] duration-300 ease-out z-0"></div>
                            </button>
                        </Link>
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
                    {links.map((item) => (
                        <motion.a
                            key={item.section}
                            href={`#${item.section}`}
                            className={styles.navLinkMobile}
                            onClick={() => setIsOpen(false)}
                            whileHover={{ x: 10, color: '#6c63ff' }}
                        >
                            {item.link}
                        </motion.a>
                    ))}
                </motion.nav>
            </motion.nav>
        </motion.header>
    )
}

export default Navbar
