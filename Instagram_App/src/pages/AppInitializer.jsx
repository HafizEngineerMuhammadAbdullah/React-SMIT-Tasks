import React, { useState, useEffect } from 'react'
import InstagramPage from './InstagramPage';
import Login from "../components/authentication/LoginPage/Login"
import Signup from "../components/authentication/SignupPage/Signup"
// import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import { AnimatePresence } from "motion/react";
import ProtectedRoute from './ProtectedRoute';
import styles from './InstagramPage.module.css';
// const InstagramPage = lazy(() => import("./InstagramPage"));
// const Login = lazy(() => import("../components/authentication/LoginPage/Login"));
// const Signup = lazy(() => import("../components/authentication/SignupPage/Signup"));


// Right now if a logged-in user refreshes the page, they get kicked back to the splash screen and then the home page — but there's no auth guard. Anyone can visit / without logging in.
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
                <Route path='/' element={<ProtectedRoute>
                    <AnimatePresence mode="wait">
                        {loading ? <SplashScreen key="splash" /> : <InstagramPage key="home" />}
                    </AnimatePresence>
                </ProtectedRoute>} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>


            {/* <Suspense fallback={<div className={styles.loader}></div>}>
                Routes container handles path matching 
                <Routes>
                    {/* Now Splash fades out...
                    Home fades in...
                    Looks MUCH smoother. 
                    <Route path='/' element={<ProtectedRoute>
                        <AnimatePresence mode="wait">
                            {loading ? <SplashScreen key="splash" /> : <InstagramPage key="home" />}
                        </AnimatePresence>
                    </ProtectedRoute>} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Suspense> */}
        </div >
    )
}

export default AppInitializer;