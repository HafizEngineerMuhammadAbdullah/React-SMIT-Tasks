import React from 'react';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import styles from "./Signup.module.css";


const INITIAL_FORM_STATE = {
    email: "",
    password: ""
}

const LeftPanel = () => {


    const [formData, setFormData] = useState(INITIAL_FORM_STATE)


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))
    }


    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`${styles.leftSideBar} h-full flex-[2]`}>
            <header className="p-6">
                <img src="/assets/dribble.png" alt="Dribble" />
            </header>


            <main className='h-full flex flex-col justify-evenly items-center'>
                <img className="h-15" src="/assets/ball.jpg" alt="Ball" />
                <h1 className={`${styles.heading} my-3`}>Welcome Back!</h1>

                <form className='h-full border border-[#322e33] p-7 rounded-xl flex flex-col gap-y-8 items-center' onSubmit={submitHandler}>

                    <button className='relative px-15 py-2 flex gap-x-5 items-center border-2 border-[#111abc] rounded-full cursor-pointer hover:border-2 hover:border-[#494343] hover:bg-[#4e4376]'>
                        <FcGoogle className='absolute left-3' size={24} />
                        Signin with Google
                    </button>

                    <p>or</p>


                    <input type="text"
                        className={styles.input}
                        value={formData.email}
                        placeholder='Enter Email here'
                        onChange={changeHandler}
                        name='email'
                    />

                    <input type="password"
                        className={styles.input}
                        value={formData.password}
                        placeholder='Enter Password here'
                        onChange={changeHandler}
                        name='password'
                    />

                    <button className='w-full px-20 py-4 bg-[#111111] text-[#ffffff] rounded-full cursor-pointer 
                    hover:bg-[#494343]'>
                        Continue
                    </button>
                </form>
            </main>
        </div>
    )
}

export default LeftPanel