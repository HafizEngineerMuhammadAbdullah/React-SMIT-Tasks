import React from 'react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const InstagramPage = () => {
    return (
        // Instagram Page Consists of Left Panel & Right Panel or Left Side bar & Right Side bar constitutes Instagram Page
        <div className='h-full flex'>
            <LeftPanel />
            <RightPanel />
        </div>
    )
}

export default InstagramPage