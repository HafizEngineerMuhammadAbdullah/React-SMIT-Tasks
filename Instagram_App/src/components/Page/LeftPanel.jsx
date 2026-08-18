import React from 'react'
import styles from "./InstagramPage.module.css"

const LeftPanel = () => {
    return (
        // Instagram Left Side Bar/ Left Panel
        <div className='h-screen flex flex-col justify-center items-center flex-1 border-r-2 border-gray-300'>
            {/* Instagram Left Side Heading */}
            <h1 className='font-medium leading-20 text-5xl text-center'>See everyday moments from your <span className={`${styles.heading} bg-linear-to-r from-[#fcb045] via-[#f31414]  to-[#eb0ea9] bg-clip-text text-transparent`}>close friends
                </span></h1>
            {/* Instagram Left Side Image */}
            <img className='h-80' src="/assets/insta.webp" alt="Insta Image" />
        </div>
    )
}

export default LeftPanel