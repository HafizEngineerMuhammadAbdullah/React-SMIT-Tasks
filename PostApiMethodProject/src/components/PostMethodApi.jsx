import React, { useState } from 'react'
import { URL } from '../../configuration/configure';
import Lottie from 'lottie-react';

const PostMethodApi = () => {

    const [message, setMessage] = useState("")
    const [val, setVal] = useState("")
    const [btnClick, setBtnClick] = useState(false)


    const sendUserData = async () => {
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
            setVal(data);
            setMessage("Successfully ,pass the data to server!")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex flex-col  justify-evenly items-center h-[400px] w-[400px] bg-cyan-500 p-5 rounded-lg shadow-lg border-2 border-[#112245]'>
            <h1 className='text-center text-xl text-gray-300'>Post Method API</h1>
            {/* {!val && btnClick && <div className="loader"></div>} */}
            {!val && btnClick && <Lottie
                animationData={groovyWalkAnimation}
                loop={true}
                style={{ width: 300, height: 300 }}
            />
                }

            {message && <p className="text-center text-xl text-green-900">{message}</p>}
            <button className='border-2 border-[#112255] py-4 px-3 rounded-2xl cursor-pointer hover:scale-[1.1] hover:bg-blue-900' onClick={() => {
                sendUserData(),
                    setBtnClick(true)
            }}>
                Send Data
            </button>
        </div>
    )
}

export default PostMethodApi
