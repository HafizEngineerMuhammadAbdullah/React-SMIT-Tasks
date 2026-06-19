import React, { useEffect, useState } from 'react'
import HandleForm from "./HandleForm";
const BackgroundSlider = () => {

    // store all images in an array
    const images = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZnICGwHcOWOisRYKQylzzqPFgYSqBiTu_fdIyrtrFIoLfSphsxRpvzhS&s=10",
        "https://cdn.wallpapersafari.com/99/8/pltGD3.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxt1u8t-bLb0O_IKWgbTm6QRhZd--1vF-rLbNVE6NaWn4IZNQ_72FTEVb&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwRHgONzy5Kh1V3_3wUTn9dPqNww-egjEpuauzyjm2b5mXuDDaQNh8dYK&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CBJorho6YGePkRtqPY5gj9l2RwFyfdqGTNlddvpwwLiN5b6RyrkbjMJo&s=10",
    ];

    // track current image index
    const [currentImage, setCurrentImage] = useState(0);

    // execute only once after mounting(creating a component)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);// Change image every 3 seconds

        // This prevents a memory leak. When the component unmounts, React removes the interval, otherwise it would continue running in the background
        return () => clearInterval(interval);//clear function that clear the interval
    }, []);

    return (
        <div className="h-screen w-screen bg-cover bg-center bg-no-repeat flex justify-center items-center transition-all duration-1000"
            style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <HandleForm />
        </div>
    )
}

export default BackgroundSlider
