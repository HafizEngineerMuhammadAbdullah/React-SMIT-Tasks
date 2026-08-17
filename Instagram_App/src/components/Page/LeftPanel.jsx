import React from 'react'
import styles from "./InstagramPage.module.css"

const LeftPanel = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center flex-1 border-r-2 border-gray-300'>
            <h1 className='font-medium leading-20 li text-5xl text-center'>See everyday moments from your <span className={`${styles.heading}`}>close friends</span></h1>

            <img className='h-80' src="/assets/insta.webp" alt="Insta Image" />
        </div>
    )
}

export default LeftPanel