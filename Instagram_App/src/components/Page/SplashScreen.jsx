import React from 'react';
import { motion } from "motion/react"
import { FaMeta } from "react-icons/fa6";
import styles from "./InstagramPage.module.css"

const SplashScreen = () => {
    return (
        // <div className='relative h-screen w-full flex flex-col justify-center items-center bg-[#0C1014] '>
        <motion.div
            className="inset-0 relative h-screen w-full flex flex-col justify-center items-center bg-[#0C1014]"
            animate={{
                backgroundPosition: [
                    "0% 50%",
                    "100% 50%",
                    "0% 50%"
                ]
            }}
            transition={{
                duration: 8,
                repeat: Infinity
            }}
        >
            {/* Instagram Logo */}
            {/* the logo fades away instead of disappearing abruptly. */}
            {/* <motion.img
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className='bg-black w-28' src="/assets/insta-logo.png" alt="Insta-Logo" /> */}

            {/* appears
                ↓
               zooms
                ↓
               stays
                ↓
             shrinks
                ↓
             disappears */}
            <motion.img
                initial={{
                    opacity: 0,
                    scale: 0.6
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                exit={{
                    opacity: 0,
                    scale: 0.8
                }}
                transition={{
                    duration: 0.6
                }}
                className='bg-black w-28' src="/assets/insta-logo.png" alt="Insta-Logo" />
            {/* Loading or Loader */}
            {/* <div className={styles.spinner}>
                <div className={styles.spinner1}></div>
            </div> */}

            {/* <div className='flex items-center justify-center mt-10'> */}
            <motion.div
                className='flex items-center justify-center mt-5'
                initial={{
                    opacity: 0,
                    scale: 0
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    delay: 0.5
                }}
            >

                <div className={styles.loader}></div>

            </motion.div>


            {/* <p className='text-gray-600 absolute bottom-20'>from</p> */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 1.8
                }}
            >
                from
            </motion.p>
            {/* Meta Tag */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: .9
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    delay: 2
                }}
                className='w-full mt-6 absolute bottom-10 flex justify-center items-center gap-x-1.5 text-md font-semibold text-[#cacdd4]'>
                <span className='bg-linear-to-r from-[#fcb045] via-[#f31414]  to-[#eb0ea9] bg-clip-text text-transparent'><FaMeta color='gray' size={24} /></span><span className='text-lg bg-linear-to-r from-[#fcb045] via-[#f31414]  to-[#eb0ea9] bg-clip-text text-transparent'>Meta</span>
            </motion.div>
        </motion.div >
    )
}

export default SplashScreen;


