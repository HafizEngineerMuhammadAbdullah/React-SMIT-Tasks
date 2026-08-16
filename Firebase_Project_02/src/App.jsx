import React from 'react';
import Signup from './components/authentication/Signup';
import UserData from './components/user/UserData';
import styles from './App.module.css';

const App = () => {
    return (
        <main className={styles.main}>
            {/* Ambient background blobs */}
            <div className={styles.blob1} />
            <div className={styles.blob2} />
            <div className={styles.blob3} />

            <div className={styles.content}>
                <Signup />
                <UserData />
            </div>
        </main>
    );
};

export default App;
