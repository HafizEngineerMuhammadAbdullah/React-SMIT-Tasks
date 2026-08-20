import React, { useEffect, useState } from 'react'
import styles from "./InstagramPage.module.css"



// store all Images in an Array
// Move static arrays OUTSIDE the component so they aren't recreated on every render
const IMAGES = [
    '/assets/insta.webp',
    '/assets/insta2.webp'
];


const LeftPanel = () => {
    // track current image index
    const [currImageIdx, setCurrImageIdx] = useState(0)


    // Execute only once after mounting(creating or rendering a functional component first time)
    useEffect(() => {

        const interval = setInterval(() => {
            // Using the functional state updater correctly ensures you always get the latest index
            setCurrImageIdx((prevImageIdx) => (prevImageIdx + 1) % IMAGES.length);
            console.log(currImageIdx);
        }, 3000);// Change image every 3 seconds

        // This prevents a memory leak. When the component unmounts, React removes the interval, otherwise it would continue running in the background
        return () => clearInterval(interval)//clear function that clear the interval
    }, [])// Empty dependency array means this setup runs exactly once on mount

    return (
        // Instagram Left Side Bar/ Left Panel
        <div className='h-screen flex flex-col justify-center items-center flex-1 border-r-2 border-gray-300'>
            {/* Instagram Left Side Heading */}
            <h1 className='font-medium leading-20 text-5xl text-center'>See everyday moments from your <span className={`${styles.heading} bg-linear-to-r from-[#fcb045] via-[#f31414]  to-[#eb0ea9] bg-clip-text text-transparent`}>close friends
            </span></h1>
            {/* Instagram Left Side Image */}
            {/* Displaying the image dynamically based on the current state index */}
            <img className='h-80' src={IMAGES[currImageIdx]} alt="Insta Image" />
        </div>
    )
}

export default LeftPanel