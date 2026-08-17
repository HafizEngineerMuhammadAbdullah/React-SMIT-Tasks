import React from 'react'

const RightPanel = () => {

    const inputStyle = `w-full rounded-lg py-4 border border-[#111111]`;

    return (
        <div className='flex flex-col justify-center items-center flex-1'>
            <img className="h-20" src="/assets/insta-logo.png" alt="" />
            <h1 className='text-lg font-medium'>Get the full experience with the tablet app</h1>

            <form className='w-full p-10 flex flex-col items-center justify-evenly'>
                <p className='self-start'>Log into Instagram</p>
                <input type="text" className={`${inputStyle}`} placeholder='Mobile number,username or email' />
                <input type="text" placeholder='Password' />
                <button>login</button>
                <button>Forgot Password?</button>
            </form>
        </div>
    )
}

export default RightPanel