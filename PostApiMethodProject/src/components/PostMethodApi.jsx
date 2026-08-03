import React, { useState } from 'react'
import { URL } from '../../configuration/configure';
// import Lottie from 'lottie-react';

const PostMethodApi = () => {

    const [message, setMessage] = useState("")
    // const [val, setVal] = useState("")
    // const [btnClick, setBtnClick] = useState(false)
    const [loading, setLoading] = useState(false)

    const sendUserData = async () => {
        // set loading to true when the function is called(loading starts)
        setLoading(true)
        setMessage(""); // Clear any previous messages when a new request starts
        // if the error occurs,try & catch will handle it
        try {
            // send data to server using post method
            const res = await fetch(URL, {
                // set method to post
                method: "POST",
                // set headers to send data in json format
                headers: {
                    "Content-Type": "application/json"
                },
                // send data to server in json format
                body: JSON.stringify({
                    userId: 1,
                    id: 10,
                    title: "Hello, Server",
                    body: "Send Data & give response"
                })
            });

            console.log(res);
            // wait until the response is converted to json format
            const data = await res.json();
            console.log(data);
            // setVal(data);
            setMessage("Successfully , passed the data to server!")
        } catch (error) {
            console.error(error);
            setMessage("Failed to send data. Please try again.");
        } finally {// why finally is used here because it will execute the code inside it regardless of whether the try block succeeds or the catch block catches an error. This ensures that certain cleanup or finalization code runs no matter what happens in the try-catch blocks. In this case, it is used to set the loading state back to false after the API call is completed, whether it was successful or resulted in an error.
            // set loading to false when the function is completed(loading ends)
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center w-full max-w-sm mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-100 gap-6 transition-all'>

            <div className="text-center">
                <h1 className='text-2xl font-bold text-slate-800'>Post Method API</h1>
                <p className="text-sm text-slate-500 mt-1">Send data to the server</p>
            </div>
            {/* {!val && btnClick && <div className="loader"></div>} */}
            {/* {loading && <div className="loader"></div>} */}
            {/* {!val && btnClick && <Lottie
                animationData={groovyWalkAnimation}
                loop={true}
                style={{ width: 300, height: 300 }}
            />
                } */}



            {/* This fixed-height container prevents the card from jumping around when the loader or message appears */}
            <div className="h-16 flex items-center justify-center w-full">
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    message && (
                        <div className={`w-full text-center p-3 rounded-lg text-sm font-medium ${message.includes('Failed')
                            ? 'bg-red-50 text-red-600 border border-red-100'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                            }`}>
                            {message}
                        </div>
                    )
                )}
            </div>

            {message && <p className="text-center text-xl text-green-900">{message}</p>}

            <button
                disabled={loading}
                onClick={sendUserData}
                className='w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-95 disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed'
                onClick={() => {
                    sendUserData();
                    // setBtnClick(true)
                }}>
                {loading ? "Adding..." : "Add Data"}
            </button>
        </div>
    );
}

export default PostMethodApi
