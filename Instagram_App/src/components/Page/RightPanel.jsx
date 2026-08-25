import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import { TypeAnimation } from 'react-type-animation'

const RightPanel = () => {

    const inputStyle = `w-full rounded-lg py-4 border border-[#111111]`;

    return (
        // Instagram Right Side bar / Right Panel 
        // Right Slides from Right
        <motion.div
            initial={{
                opacity: 0,
                x: 100
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            className='flex flex-col justify-center items-center gap-y-7 flex-1'>
            {/* Instagram Logo */}
            <img className="h-20" src="/assets/insta-logo.png" alt="" />
            {/* Instagram Heading */}
            <h1 className='text-5xl font-medium leading-20 text-center'>
                {/* Get the full experience with the tablet app */}
                <TypeAnimation
                    sequence={[
                        'Get the full experience with the tablet app',
                        2000,
                        'Get the full experience with the desktop app',
                        2000,
                        'Get the full experience with the Website',
                        2000,
                        'Developing modern web apps.',
                        2000,
                        'Designing seamless user interfaces.',
                        2000,
                        'Building scalable API systems.',
                        2000,
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ color: '#416597' }}
                />
            </h1>
            {/* Instagram Button */}
            <button className='w-[80%] p-3 text-lg bg-blue-600 rounded-lg text-white shadow-md shadow-cyan-800 cursor-pointer hover:bg-[#467fc0] hover:scale-[1.01] transition-all'>
                <Link to="https://www.instagram.com/?hl=en">Open Instagram</Link>
            </button>
            {/* Instagram Page */}
            <p><Link to='/login' className='text-blue-600 hover:text-cyan-900 text-lg cursor-pointer'>Log in</Link> {" "} or {" "} <Link to='/signup' className='text-blue-600 hover:text-cyan-900 text-lg cursor-pointer'>
                Sign up</Link></p>
        </motion.div>
    )
}

export default RightPanel