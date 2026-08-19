import React from 'react'
import { FaMeta } from "react-icons/fa6";

const Login = () => {


    const inputStyle = `py-3 px-2 rounded-xl text-[#97A2AB] border border-[#AAAFB5] outline-none hover:border-[#AAAFB5]`;
    return (
        <div className='h-screen w-full bg-[#1F1F22] flex flex-col items-center justify-center'>
            <form className='max-w-lg w-full max-auto p-10 flex flex-col gap-y-4'>
                <h2 className='text-white font-bold text-xl'>Log into Instagram</h2>
                {/* Input Fields */}
                <div className='flex flex-col gap-y-6'>
                    <input
                        type="text"
                        placeholder='Mobile number,username or email'
                        className={`${inputStyle}`}
                    />
                    <input
                        type="text"
                        placeholder='Password'
                        className={`${inputStyle}`} />
                </div>
                {/* Buttons Group-1 */}
                <div className='flex flex-col gap-y-2'>
                    <button className='bg-[#133B6E] text-[#f2f4f6] text-md font-medium p-2.5 rounded-full'>Login</button>
                    <button className='hover:bg-[#363639] cursor-pointer text-[#f2f4f6] p-2.5 rounded-full'>Forgot Password?</button>
                </div>

                {/* Buttons Group-2*/}
                <div className='flex flex-col gap-y-3'>
                    <button className='bg-[#28292c] hover:bg-[#3E3F42] text-[#b2b8be] p-2.5 rounded-full cursor-pointer'>

                        Log in with Facebook</button>
                    <button className='bg-[#1f1f2233] hover:bg-[#3E3F42] text-[#4ba9fe] border border-[##4599ff] p-2.5 rounded-full cursor-pointer'>Create new account</button>
                </div>
                {/* Meta Tag */}
                <div className='w-full mt-4 flex justify-center items-center-safe gap-x-1.5 text-xl text-[#f2f4f6]'>
                    <span><FaMeta /></span>Meta
                </div>
            </form>
        </div>
    )
}

export default Login
