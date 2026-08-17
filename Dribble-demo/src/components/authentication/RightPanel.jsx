import React from 'react'
import styles from "./Signup.module.css"

const RightPanel = () => {
    return (
        <div className={`${styles.rightSideBar} h-full flex-1`}>
            <video src="/assets/dribllevide.mp4" autoPlay loop muted></video>
        </div>
    )
}

export default RightPanel