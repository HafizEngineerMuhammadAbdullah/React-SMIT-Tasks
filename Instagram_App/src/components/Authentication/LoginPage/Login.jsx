import React, { useState } from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { auth } from "../../../../configuration/firebase"
import { signInWithPopup, FacebookAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


const INITAL_FORM_STATE = {
    username: "",
    password: ""
};


const Login = () => {

    const [formData, setFormData] = useState(INITAL_FORM_STATE);


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
        if (!formData.username || !formData.password) {

            Swal.fire({
                title: "Warning!",
                text: "Missing fields!",
                icon: "Please enter email and password."
            })
            return;
        }

        try {
            // wait for sometime until username,email and password becomes verified
            await signInWithEmailAndPassword(
                auth,
                formData.username,
                formData.password
            )

            // Show Success Message
            Swal.fire({
                title: "Welcome!",
                text: "Login Successful!",
                icon: "success"
            });

            console.log("Logged in with:", formData);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message
            });
        } finally {//run even iff error occurs or not

            // Empty FormData
            setFormData(INITAL_FORM_STATE);
        }


    };




    // Initialize the Facebook Provider
    const provider = new FacebookAuthProvider();

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



    const inputStyle = `p-3 bg-transparent rounded-xl text-[#97A2AB] text-[#f2f4f6] border border-[#363639] outline-none hover:border-[#AAAFB5] focus:border-[#AAAFB5] transition-colors`;

    // Dynamic validation: Check if both fields have text
    const isFormValid = formData.username.trim() !== "" && formData.password.trim() !== "";

    return (
        <div className='h-screen w-full bg-[#1F1F22] flex flex-col items-center justify-center'>
            <form
                onSubmit={login}
                className='max-w-lg w-full mx-auto p-10 flex flex-col gap-y-4'>
                <h2 className='text-white font-bold text-xl'>Log into Instagram</h2>
                {/* Input Fields */}
                <div className='flex flex-col gap-y-4 mt-2'>
                    {/* Username field */}
                    <input
                        type="text"
                        name='username'
                        value={formData.username}
                        placeholder='Mobile number,username or email'
                        className={`${inputStyle}`}
                        onChange={changeHandler}
                        required
                    />

                    {/* Password Field */}
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        placeholder='Password'
                        className={`${inputStyle}`}
                        onChange={changeHandler}
                        required
                    />
                </div>
                {/* Buttons Group-1 */}
                <div className='flex flex-col gap-y-3'>
                    {/* <button
                        style={{ cursor: 'not-allowed' }} disabled
                        className='bg-[#133B6E] text-[#6F7176] text-md font-medium p-2.5 rounded-full cursor-pointer'
                    > */}

                    <button
                        type='submit'
                        disabled={!isFormValid}
                        // Dynamically change colors based on input status
                        className={`text-md font-medium p-2.5 rounded-full transition-all ${isFormValid
                            ? 'bg-[#0064e0] text-white cursor-pointer hover:bg-[#0057c2]'
                            : 'bg-[#133B6E] text-[#6F7176] cursor-not-allowed'
                            }`}
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
