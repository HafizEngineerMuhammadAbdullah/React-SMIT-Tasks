import React from 'react'

const Signup = () => {

    const inputStyle = `w-full border border-gray-500  rounded-xl outline-none py-2 px-2`
    return (
        <main className='min-h-screen flex justify-center items-center'>
            <form className='h-[70vh] p-10 border border-gray-700 flex flex-col items-center justify-evenly shadow shadow-gray-600'>
                <h1>Welcome to TailwindCSS Land</h1>
                <label htmlFor="">Name</label>
                <input type="text" className={`${inputStyle}`}/>
                <label htmlFor="">Email</label>
                <input type="email" className={`${inputStyle}`} />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
        </main>
    )
}

export default Signup