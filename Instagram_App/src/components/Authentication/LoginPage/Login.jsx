import React, { useState } from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { auth, provider } from "../../../../configuration/firebase"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx'


const INITIAL_FORM_STATE = {
    email: "",
    password: ""
};


const Login = () => {


    const navigate = useNavigate();

    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    // function to toggle password visibility
    const togglePasswordVisibility = () => {
        // setShowPassword((prev) => (!prev))
        setIsPasswordVisible((prev) => (!prev))
    }


    // function that handle changes
    const changeHandler = (e) => {

        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

    };

    // function that handle submission
    const login = async (e) => {
        e.preventDefault();


        // Throw Warning iff any one of the input fields is empty
        if (!formData.email || !formData.password) {

            Swal.fire({
                title: "Missing Fields!",
                text: "Please enter both email and password.",
                icon: "warning"
            });
            return;
        }

        try {
            // wait for sometime until username,email and password becomes verified
            await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )

            // Show Success Message
            Swal.fire({
                title: "Welcome!",
                text: "Login Successful!",
                icon: "success"
            });
            console.log("Logged in with:",
                {
                    email: formData.email,
                    password: formData.password,
                    date: new Date().toDateString(),
                    time_stamp: new Date().toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    })
                }
            );


            // trigger navigate('/') upon a successful login
            navigate('/');
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message
            });
        } finally {//run even iff error occurs or not

            // Empty FormData
            setFormData(INITIAL_FORM_STATE);
        }

    };






    // Function to trigger the Login Popup
    const loginWithFacebook = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Show Success Alert
            Swal.fire({
                title: "Welcome!",
                text: `Logged in as ${user.displayName || "Facebook User"}`,
                icon: "success"
            });

            // trigger navigate('/') upon a successful login
            navigate('/');

        } catch (error) {
            console.error("Authentication Error:", error.message);
            // Show Error Alert
            Swal.fire({
                icon: "error",
                title: "Facebook Login Failed",
                text: error.message
            });
        }
    };



    const inputStyle = `w-full p-3 bg-transparent rounded-xl text-[#97A2AB] text-[#f2f4f6] border border-[#363639] outline-none hover:border-[#AAAFB5] focus:border-[#AAAFB5] transition-colors`;
    // Instead of template literals:
    const inputClass = clsx(
        'w-full p-3 bg-transparent rounded-xl border outline-none transition-colors',
        'text-[#f2f4f6] border-[#363639]',
        'hover:border-[#AAAFB5] focus:border-[#AAAFB5]'
    );


    // Dynamic validation: Check if both fields have text
    const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";
    
    const btnClass = clsx(
        'p-2.5 rounded-full font-medium transition-all',
        isFormValid
            ? 'bg-[#0064e0] text-white cursor-pointer hover:bg-[#0057c2]'
            : 'bg-[#133B6E] text-[#6F7176] cursor-not-allowed'
    );

    return (
        <div className='h-screen w-full bg-[#1F1F22] flex flex-col items-center justify-center'>
            <form
                onSubmit={login}
                className='max-w-lg w-full mx-auto p-10 flex flex-col gap-y-4'>
                <h2 className='text-white font-bold text-xl'>Log into Instagram</h2>
                {/* Input Fields */}
                <div className='flex flex-col gap-y-4 mt-2'>
                    {/* Username field */}
                    <div>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            placeholder='Mobile number,username or email'
                            // className={`${inputStyle}`}
                            className={inputClass}
                            onChange={changeHandler}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className='relative flex items-center'>
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            name='password'
                            value={formData.password}
                            placeholder='Password'
                            // className={`${inputStyle}`}
                            className={inputClass}
                            onChange={changeHandler}
                            required
                        />

                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className='absolute right-5 cursor-pointer text-gray-500'>
                            {
                                isPasswordVisible ? <LuEyeClosed size={20} /> : <LuEye size={20} />
                            }
                        </button>
                    </div>

                </div>
                {/* Buttons Group-1 */}
                <div
                    className='flex flex-col gap-y-3'>
                    {/* <button
                        style={{ cursor: 'not-allowed' }} disabled
                        className='bg-[#133B6E] text-[#6F7176] text-md font-medium p-2.5 rounded-full cursor-pointer'
                    > */}

                    <button
                        type='submit'
                        disabled={!isFormValid}
                        // className={`text-md font-medium p-2.5 rounded-full transition-all ${isFormValid
                        //     ? 'bg-[#0064e0] text-white cursor-pointer hover:bg-[#0057c2]'
                        //     : 'bg-[#133B6E] text-[#6F7176] cursor-not-allowed'
                        //     }`}
                        // This becomes very powerful when classes are conditional:
                        // Dynamically change colors based on input status
                        className={btnClass}
                    >
                        Login</button>
                    <button type='button' className='hover:bg-[#363639] cursor-pointer text-[#f2f4f6] p-2.5 rounded-full'>Forgot Password?</button>
                </div>


                {/* Buttons Group-2*/}
                <div className='flex flex-col gap-y-3 mt-5'>
                    <button
                        onClick={loginWithFacebook}
                        type='button'
                        className='bg-[#28292c] hover:bg-[#3E3F42] text-[#b2b8be] flex justify-center items-center gap-x-2.5 p-2.5 rounded-full cursor-pointer transition-colors'>
                        <FaFacebook className='text-[#1A8FFB]' />
                        Log in with Facebook
                    </button>
                    <button
                        type='button'
                        className='bg-[#1f1f2233] hover:bg-[#3E3F42] text-[#4ba9fe] border border-[#4599ff] p-2.5 rounded-full cursor-pointer transition-colors'>
                        <Link to='/signup'>Create new account</Link>
                        {/* Create new account */}
                    </button>
                </div>
                {/* Meta Tag */}
                <div className='w-full mt-6 flex justify-center items-center gap-x-1.5 text-md font-semibold text-[#cacdd4]'>
                    <span><FaMeta /></span>Meta
                </div>
            </form>
        </div>
    )
}

export default Login
