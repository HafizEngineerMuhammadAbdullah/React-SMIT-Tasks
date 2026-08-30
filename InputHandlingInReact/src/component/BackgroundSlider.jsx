import React, { useEffect, useState } from 'react'
import HandleInput from './HandleInput';


// create an Array of Images
const IMAGES_ARRAY = [
    "/assets/images.jpg",
    "/assets/img.jpg",
    "/assets/img1.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
    "/assets/img4.jpg",
    "/assets/nature.jpg"
];


const BackgroundSlider = () => {


    // useState to update image idx 
    const [currentImageIdx, setCurrentImageIdx] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentImageIdx((prevIdx) => (prevIdx + 1) % IMAGES_ARRAY.length);
        }, 3000);//change image after every 3 second

        // cleaner function
        return () => clearInterval(interval);

    }, [])// runs only once after mounting(after initially rendering a component) because of dependency array

    return (
        <div style={{ backgroundImage: `url(${IMAGES_ARRAY[currentImageIdx]})` }} className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat">
            <HandleInput />
        </div>
    )
}

export default BackgroundSlider
