import React from 'react'

const RightPanel = () => {

    const inputStyle = `w-full rounded-lg py-4 border border-[#111111]`;

    return (
        // Instagram Right Side bar / Right Panel 
        <div className='flex  flex-col justify-center items-center gap-y-7 flex-1'>
            {/* Instagram Logo */}
            <img className="h-20" src="/assets/insta-logo.png" alt="" />
            {/* Instagram Heading */}
            <h1 className='text-5xl font-medium leading-20 text-center'>Get the full experience with the tablet app</h1>
            {/* Instagram Button */}
            <button className='w-[80%] p-3 text-lg bg-blue-600 rounded-lg text-white cursor-pointer hover:bg-[#1471db]'>Open Instagram</button>
            {/* Instagram Page */}
            <p><span className='text-blue-600 text-lg cursor-pointer'>Log in</span> {" "} or {" "} <span className='text-blue-600 text-lg cursor-pointer'>
                Sign up</span></p>
        </div>
    )
}

export default RightPanel