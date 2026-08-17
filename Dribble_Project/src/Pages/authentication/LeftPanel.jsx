import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

const INITIAL_FORM_STATE = {
    email: "",
    password: "",
};


const LeftPanel = () => {

    // form Data
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    // Input Field Handler
    const inputFieldHandler = () => {

    }

    // submit Handler
    const submitHandler = () => {

    }
    return (
        <div className='h-full flex-[2] bg-blue-100'>
            <header className='p-5'>
                <img src="/assets/dribble.png" alt="dribble img" />
            </header>
            <main className='h-full flex flex-col items-center gap-y-6'>
                <img className='h-20' src="/assets/football.jpg" alt="Football" />
                <h1>Welcome to Dribbble</h1>
                <p>Create your account and discover world-class design talent.</p>

                <div className='p-8 border border-[#ccc]'>
                    <form onSubmit={submitHandler} className='flex flex-col items-center gap-y-2 '>
                        <img className='h-18' src="/assets/dribble2.png" alt="" />
                        <h1>Signup</h1>
                        <input
                            type="text"
                            name='email'
                            value={formData.email}
                            placeholder='Enter Email here...'
                            onChange={inputFieldHandler}
                            autoComplete='email'
                            className='py-2 px-4 border border-[#1fc6c4] rounded-lg outline-none'
                            required
                        />

                        <input
                            type="text"
                            name='password'
                            value={formData.password}
                            placeholder='Enter Password here...'
                            onChange={inputFieldHandler}
                            autoComplete='new-password'
                            className='py-2 px-4 border border-[#1fc6c4] rounded-lg outline-none'
                            required
                        />
                        <button className='relative py-2 px-20 flex items-center justify-center rounded-full border border-[#112233] cursor-pointer hover:bg-[]'>
                            <FcGoogle className='absolute left-3' size={22} />
                           <p className='font-medium text-base text-[#3c4043]'> Continue With Google</p>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default LeftPanel
