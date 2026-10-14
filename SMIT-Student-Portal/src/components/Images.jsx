import React, { useEffect, useState } from 'react'

// how to add a specific value in className attribute when certain event trigger like onClick and how to change some another className attribute value when another ?

const SMIT_IMAGES = [
    'smit-logo.png',
    'sit-logo-on-dark.png',
    'sit-logo-on-light.png'
];
const Images = () => {
    // useState to update image idx 
    const [currImgIdx, setCurrImgIdx] = useState(0);


    // only runs once after mounting
    // Your updater uses braces but doesn’t return a value:
    // So after 3 seconds, React sets the index to undefined, and the image src becomes /assets/undefined. The next updates produce NaN, so it never reaches the second or third image.
    // Use an implicit return: Or keep the braces and add return.
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrImgIdx((prevImgIdx) => (prevImgIdx + 1) % SMIT_IMAGES.length);
        }, 3000);//update the image idx to move to appear/display the next image

        return () => clearInterval(interval);
    }, [])

    return (
        <img
            src={`/assets/${SMIT_IMAGES[currImgIdx]}`}
            className="w-24 sm:w-28 md:w-32 mx-auto"
            alt="SMIT Logo"
        />
    )
}

export default Images
