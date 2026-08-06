import React, { useState } from 'react'
import styles from './SignupForm.module.css';
import { TbArrowRight, TbEye, TbEyeClosed, TbBrandGoogle, TbBrandGithub, TbPassword } from 'react-icons/tb';
import { motion } from 'motion/react';
import InputField from './InputField';


const RightPanel = () => {
    // const [showPassword, setShowPassword] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    //  Form Data :-
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })



    // function to toggle password visibility
    const togglePasswordVisibility = () => {
        // setShowPassword((prev) => (!prev))
        setIsPasswordVisible((prev) => (!prev))
    }


    // function that handle changes when changes occur in input box while typing...
    const changeHandler = (e) => {
        // extract the name and value from e.target object from each input box
        const { name, value } = e.target;

        // updates the formData by updating the form Data state
        // Even though we could overwrite the form values by updating the values,but the issue is React doesn't  update state when the same object referencing(have same address) to same memory location it had
        // React updates object state only when the reference(address) pointing to that particular object in memory changes
        // React schedules the update(not immediately updates the state) 
        setFormData((prevFormData) => ({
            ...prevFormData,// copy the existing form data
            [name]: value // update the name and value as key value pair
        }));
    }

    // function that handle submit(when the submit button is pressed/clicked)
    const submitHandler = (e) => {
        // resist reloading the page(prevent the browser default behaviour i.e. reload the webpage when submit btn is pressed)
        e.preventDefault();

        alert(`Form submitted with data: ${JSON.stringify(formData)}`);


        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        })
    }









    return (
        <>
            {/* RIGHT PANEL */}
            {/* Fade in from the Right */}
            <motion.div
                initial={{ opacity: 0, x: 1500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className={`${styles.rightPanel} flex flex-col gap-y-5 bg-[#2C2C2A] px-9 py-4`}>

                {/* for Heading */}
                <div>
                    <h1 className='font-medium text-2xl text-white text-wrap my-3'>Create your account</h1>
                    <p className='text-[#9595B6] text-sm'>Step 1 of 3 — takes less than 2 minutes</p>
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-700">
                        <div
                            style={{
                                width: "33%"
                            }}
                        />
                    </div>
                </div>

                {/* User Form */}
                {/* Controlled Component */}
                <form className={`${styles.formGrid}`} onSubmit={submitHandler}>

                    {/* Row-1 */}
                    <div className='flex gap-x-3 items-center'>
                        {/* for First Name */}
                        < InputField
                            label="First name"
                            name="firstName"
                            value={formData.firstName}
                            type="text"
                            id='firstname'
                            placeholder="Thomas"
                            changeHandler={changeHandler}
                            myClass={`${styles.input}`}
                            autoComplete="given-name"
                            pattern="[A-Za-z]{3,20}"
                            title="Only letters allowed"
                        />

                        {/* for Last Name */}
                            <InputField
                                label="Last name"
                                type="text"
                                id='lastname'
                                name='lastName'
                                value={formData.lastName}
                                placeholder="John"
                                changeHandler={changeHandler}
                                myClass={`${styles.input}`}
                                autoComplete="family-name"
                                pattern="[A-Za-z]{3,20}"
                                title="Only letters allowed"
                                required />
                        </div>

                    {/* Row-2 */}
                    {/* for Email */}
                        <InputField
                            label="Email"
                            type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            placeholder="John@example.com"
                            changeHandler={changeHandler}
                            myClass={`${styles.input}`}
                            autoComplete="email"
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                            title="Letters & Numbers allowed"
                            required />

                    {/* Row-3 */}
                    {/* for Password */}
                    <div className='relative'>
                        <InputField
                            label="Password"
                            type={isPasswordVisible ? "text" : "password"}
                            id='password'
                            name='password'
                            value={formData.password}
                            changeHandler={changeHandler}
                            myClass={`${styles.input}`}
                            autoComplete="new-password"
                            pattern="[A-Za-z0-9]{7,15}"
                            title="Letters & Numbers allowed"
                            required />
                        <button onClick={togglePasswordVisibility} type='button' className='absolute right-3 top-9 text-[#9595B6] cursor-pointer'>
                            {
                                isPasswordVisible ? <TbEyeClosed size={20} /> : <TbEye size={20} />
                            }</button>
                    </div>


                    {/* Row-4 */}
                    {/* for Terms & Conditions */}
                    <div className='flex gap-x-3 items-center my-1.5'>
                        <input
                            type="checkbox"
                            className='bg-[#2c2c2a] border border-[rgba(108, 99, 255, 0.1)] accent-[#534AB7]' />
                        <p className='text-[#9595B6] text-sm'>
                            I agree to the
                            <span className='text-[#534AB7]'>
                                <a href="#"> Terms of Service</a>
                            </span>
                            and
                            <span className='text-[#534AB7]'>Privacy Policy</span>
                        </p>
                    </div>

                    {/* Row-5 */}
                    {/* Create Account */}
                    <div className='relative'>
                        <button
                            type='submit'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`${styles.input} ${styles.account} w-full text-white text-2xl font-mono font-medium cursor-pointer`}
                        >
                            {loading ? "Creating..." : "Create Account"}
                        </button>
                        <TbArrowRight className='absolute left-26 top-2 text-white' size={20} />
                    </div>

                    {/* Row-6 */}
                    {/* More Options for Signup */}
                    <div className='flex gap-x-3 items-center my-2'>
                        <div className='h-[1px] w-full bg-[#9595B6]'></div>
                        <p className='text-[#9595B6] text-sm w-full'>or sign up with</p>
                        <div className='h-[1px] w-full bg-[#9595B6]'></div>
                    </div>

                    {/* Row-7 */}
                    {/* Signup with Google Or Github */}
                    <div className='flex gap-x-3 items-center'>
                        <button
                            type='button'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`${styles.input} flex justify-center items-center gap-x-2 cursor-pointer`}>
                            < TbBrandGoogle size={20} />
                            <span className='text-white'>Sign up with Google</span>
                        </button>
                        <button
                            type='button'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`${styles.input} flex justify-center items-center gap-x-2 cursor-pointer`}>
                            < TbBrandGithub size={20} />
                            <span className='text-white'>Sign up with Github</span>
                        </button>
                    </div>

                    {/* Row-8 */}
                    {/* Signin Option */}
                    <div className='mt-2'>
                        <p className='text-[#9595B6] text-sm text-center'>Already have an account? <span className='text-[#534AB7]'>Sign in</span></p>
                    </div>

                </form>
            </motion.div >
        </>
    )
}

export default RightPanel
