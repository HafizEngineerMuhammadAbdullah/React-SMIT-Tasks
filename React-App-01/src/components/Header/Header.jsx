import React from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header>
           {/* NavBar */}
            <nav className={styles.navbar}>
                <div className={styles.foodpandaLogoText}>
                    <img src="./assets/foodpanda.jpg" className={styles.foodpandaLogo} alt="foodpanda-logo" />
                    <h4 className={styles.foodpandaText}>foodpanda</h4>
                </div>
                <div className={styles.foodpandaLocation}>
                    <HiOutlineLocationMarker size={24} />
                    <span className={styles.address}>Select your address</span>
                </div>
                <div className='foodpanda-register-system'></div>
            </nav>
        </header>
    )
}

export default Header
