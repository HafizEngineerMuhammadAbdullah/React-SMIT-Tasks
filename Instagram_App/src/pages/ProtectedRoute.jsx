// This is a new concept — Protected Routes
import { useEffect, useState } from 'react';
import { auth } from '../../configuration/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { motion } from "motion/react"
import styles from "./InstagramPage.module.css"
const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(undefined); // undefined = still checking

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // null = not logged in, object = logged in
        });
        return () => unsubscribe();
    }, []);

    if (user === undefined) return <motion.div
        className='h-screen flex items-center justify-center'
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

    </motion.div>; // still checking
    if (!user) return <Navigate to="/login" />; // not logged in → redirect
    return children; // logged in → show page
};

export default ProtectedRoute;