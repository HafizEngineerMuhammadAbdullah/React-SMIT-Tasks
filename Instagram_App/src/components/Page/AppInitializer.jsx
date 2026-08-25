import React, { useState, useEffect } from 'react'
import InstagramPage from './InstagramPage';
import Login from "../Authentication/LoginPage/Login"
import Signup from "../Authentication/SignupPage/Signup"
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import { AnimatePresence } from "motion/react";

const AppInitializer = () => {

    const [loading, setLoading] = useState(true);


    //  Executes when the component mounts/rendered first time
    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 3000);

        return () => clearTimeout(timer);

    }, []);


    return (
        <div>
            {/* Routes container handles path matching */}
            <Routes>
                {/* Now Splash fades out...
        Home fades in...
        Looks MUCH smoother. */}
                <Route path='/' element={<AnimatePresence mode="wait">
                    {loading ? (
                        <SplashScreen key="splash" />
                    ) : (
                        <InstagramPage key="home" />
                    )}

                </AnimatePresence>} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default AppInitializer;