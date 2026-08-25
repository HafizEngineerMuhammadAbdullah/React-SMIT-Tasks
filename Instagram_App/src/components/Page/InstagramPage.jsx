import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const InstagramPage = () => {
    return (
        // Instagram Page Consists of Left Panel & Right Panel or Left Side bar & Right Side bar constitutes Instagram Page
        <div className='h-full flex backdrop-blur-[20px] bg-[rgba(255,255,255,.08)]'>
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default InstagramPage