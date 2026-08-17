import React, { useState } from 'react'
import styles from "./Signup.module.css"
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Signup = () => {
    return (
        <div className='h-full flex overflow-hidden'>
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default Signup