import React from 'react';
import { User, UserRound, Mail, LockKeyhole, Phone } from 'lucide-react';

const HandleForm = () => {

  const inputStyle = "border border-black p-1 px-9 my-1.5";

  return (
    <div className='w-150 border border-gray-300 p-6'>
      <form action="" className='h-full flex flex-col justify-between items-start gap-y-2'>

        <div className='w-full flex gap-x-3.5 items-center-safe'>
          <p>Already have an account?</p>
          <button type="button" className='bg-[rgb(93,211,38)] py-2 px-4 text-[white] cursor-pointer'>Sign In to LMS</button>
        </div>

        {/* Create New Account Paragraph */}
        <div> <p className='text-[#f3a412] font-semibold text-xl'>Create New Account</p></div>
        {/* for First Name */}
        <div >
          <label htmlFor="">First Name</label>
          <div className='relative'>
            <input className={inputStyle} size={60} type="text" placeholder='enter your first name' />
            <User className="absolute left-1.5 top-3" size={20} color='gray' />
          </div>
        </div>

        {/* for Last Name */}
        <div>
          <label htmlFor="">Last Name</label>
          <div className='relative'>
            <input type="text" className={inputStyle} size={60} placeholder='enter your last name' />
            <UserRound className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        {/* for Mobile No */}
        <div>
          <label htmlFor="">Mobile No</label>
          <div className='flex justify-evenly items-center gap-x-3 my-0.5'>
            <input type="text" className="border p-1" disabled={true} value="+92" size={2} />
            <select name="" id="" className="border p-1">
              <option value="Operator">Operator</option>
              <option value="0300">0300</option>
              <option value="0310">0310</option>
              <option value="0320">0320</option>
              <option value="0330">0330</option>
              <option value="0340">0340</option>
              <option value="0350">0350</option>
            </select>
            <div className='relative'>
              <input type="text" className={inputStyle} placeholder='7 digit number' size={36} />
              <Phone className="absolute left-1.5 top-3" size={20} color='gray' />
            </div>
          </div>
        </div>

        {/* for Email Address */}
        <div >
          <label htmlFor="">Email Address</label>
          <div className='relative'>
            <input type="text" className={inputStyle} size={60} placeholder='please enter valid email address' />
            <Mail className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        {/* for Password */}
        <div >
          <label htmlFor="">Password</label>
          <div className='relative'>
            <input type="text" className={inputStyle} size={60} placeholder='please enter valid password' />
            <LockKeyhole className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        <div><p className='text-blue-600 text-sm'>7-16 characters starts with Alphabets,then Numbers OR Special Characters !@#%^&*$</p></div>

        {/* for Submit Button */}
        <button type="submit" className='w-full text-center text-white bg-[#fab112] py-2 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default HandleForm
