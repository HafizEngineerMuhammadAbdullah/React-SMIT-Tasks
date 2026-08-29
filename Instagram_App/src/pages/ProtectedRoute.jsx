// This is a new concept — Protected Routes
import { useEffect, useState } from 'react';
import { auth } from '../../configuration/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { motion } from "motion/react"
import styles from "./InstagramPage.module.css"
// ProtectedRoute.jsx is an authentication guard. Its job is to allow only logged-in users to view protected pages such as the Instagram home page.




// Firebase checking
//        |
//        v
//    Loader shown
//        |
//        v
// Logged in? ------ no ------> /login
//     |
//    yes
//     |
//     v
// Protected page shown
const ProtectedRoute = ({ children }) => {

    // undefined means Firebase has not finished checking the login status yet.
    const [user, setUser] = useState(undefined); // undefined = still checking

    useEffect(() => {
        // Listen for Firebase authentication changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // currentUser is a user object when logged in
            // currentUser is null when logged out.
            setUser(currentUser); // null = not logged in, object = logged in
        });

        // The unsubscribe cleanup stops the Firebase listener when the component is removed.
        return () => unsubscribe();
    }, []);



    // This prevents the app from immediately redirecting to login before Firebase has finished checking
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
    // If user is null, the person is not logged in, so React Router sends them to /login.
    if (!user) return <Navigate to="/login" />; // not logged in → redirect
    return children; // logged in → show page

    //     undefined = still checking
    // null = checked, but logged out
    // user object = checked and logged in
};

export default ProtectedRoute;