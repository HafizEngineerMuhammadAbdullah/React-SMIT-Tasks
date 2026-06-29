import React, { useRef } from 'react';
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
import styles from "./Header.module.css";
import { motion } from "motion/react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const Header = () => {

    const navRef = useRef();

    useGSAP(() => {
        gsap.from("a", {
            opacity: 0,
            x: 20,
            y: -20,
            stagger: 0.4,
            duration: 0.5,
            delay: 1
        })
    }, { scope: navRef })

    const lists = ["Home", "About", "Newsroom", "Partners", "Panda ads", "Contact", "Careers"];

    return (
        // Header
        <motion.header
            className={styles.header}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
        >
            {/* NavBar */}
            <nav className={styles.navbar}>
                {/* foodpanda Logo & Text  */}
                <motion.div
                    initial={{
                        y: -10,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    whileHover={{
                        rotate: -4,
                        scale: 1.2,
                        // backgroundColor: "red"
                    }}
                    whileTap={{
                        scale: 0.8
                    }}
                    className={styles.foodpandaLogoText}
                >
                    {/* foodpanda Logo */}
                    <img src="./assets/foodpanda.jpg" className={styles.foodpandaLogo} alt="foodpanda-logo" />
                    {/* foodpanda text */}
                    <h4 className={styles.foodpandaText}>foodpanda</h4>
                </motion.div>
                {/* foodpanda Location
                <div className={styles.foodpandaLocation}>
                    <HiOutlineLocationMarker size={24} />
                    <span className={styles.address}>Select your address</span>
                </div> */}
                {/* Foodpanda Nav Links */}
                <div ref={navRef} className={styles.foodpandaNavLinks}>
                    {
                        lists.map((item, idx) => {
                            return <motion.a

                                whileHover={{
                                    scale: 1.08,
                                    y: -2,
                                    color: "#e21b70",
                                }}

                                whileTap={{
                                    scale: 0.95
                                }}

                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                }}
                                className={styles.navLinks}
                                href="#" key={item}>{item}</motion.a>;
                        })
                    }
                    {/* Location Button */}
                    <motion.button
                        initial={{
                            rotate: 0,
                            scale: 0
                        }}
                        animate={{
                            rotate: 360,
                            scale:1
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 1
                        }}
                        className={styles.btn}>Choose Location</motion.button>
                    {/* Search Icon */}
                    <motion.div
                        initial={{
                            x: 30,
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 1
                        }}
                    >
                        <HiOutlineSearch
                            className={styles.searchIcon}
                            size={25} color='rgb(230, 19, 149)' />
                    </motion.div>
                </div>
            </nav>
        </motion.header>
    )
}

export default Header
