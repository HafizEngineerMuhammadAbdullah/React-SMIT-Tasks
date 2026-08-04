import React from 'react';
import styles from "./SignupForm.module.css"
import { TbBolt, TbCheck, TbArrowRight, TbEye, TbBrandGoogle, TbBrandGithub } from 'react-icons/tb'

const SignupForm = () => {



  const options = [
    {
      icon: TbCheck,
      backgroundColor: '#534AB7',
      color: '#ffffff',
      borderColor: '#534AB7',
      content: 'Create your account',
      contentColor: '#ffffff'
    },
    {
      backgroundColor: 'transparent',
      color: '#9595B6',
      borderColor: '#534AB7',
      content: 'Set up your workspace',
      contentColor: '#9595B6'
    },
    {
      backgroundColor: 'transparent',
      color: '#9595B6',
      borderColor: '#534AB7',
      content: 'Invite your team',
      contentColor: '#9595B6'
    }
  ];


  return (
    <div className={`${styles.container}`}>

      {/* LEFT PANEL */}
      <div className={`${styles.leftPanel} flex flex-col justify-between bg-[#1A1A2E] p-9`}>

        {/* for Left Upper Panel */}
        <div className={`${styles.upperLeftPanel}`}>
          <div className='h-10 w-10 flex justify-center items-center rounded-xl bg-[#534AB7] '>
            < TbBolt color='white' size={22} />
          </div>
          <h1 className='font-medium text-2xl text-white text-wrap my-3'>Built something great today</h1>
          <p className='text-[#9595B6] text-sm'>Join thousands of developers shipping faster with our platform.</p>
        </div>

        {/* for Left Lower Panel */}
        <div className={`${styles.lowerLeftPanel}`}>
          {options.map((item, idx) => {
            return (
              <div key={idx} className={`${styles.options} h-10 flex gap-3 items-center`}>

                {/* Icon(if any) */}
                <div className={`${styles.icon} h-7 w-7 flex justify-center items-center rounded-full border`} style={{
                  backgroundColor: item.backgroundColor,
                  color: item.color,
                  borderColor: item.borderColor
                }}>
                  {
                    // Remove space after the opening bracket of the ternary operator to fix the error
                    item.icon ? <item.icon /> : (idx + 1)
                  }
                </div>

                {/* Textual Content */}
                <div className={`${styles.textContent} text-md font-medium`} style={{ color: item.contentColor }} >{item.content}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={`${styles.rightPanel} w-full flex flex-col justify-evenly bg-[#2C2C2A] p-9`}>
        <div>
          <h1 className='font-medium text-2xl text-white text-wrap my-3'>Create your account</h1>
          {/* <p className='text-[#9595B6] text-sm'>Already have an account? <span className='text-[#534AB7]'>Sign in</span></p> */}
          <p className='text-[#9595B6] text-sm'>Step 1 of 3 — takes less than 2 minutes</p>
        </div>

        {/* User Form */}
        <form className={`${styles.formGrid}}`}>

          {/* Row-1 */}
          <div className='flex gap-x-3 items-center'>
            {/* for First Name */}
            <div>
              <label htmlFor="firstname" className='text-[#9595B6] text-sm'>First name</label>
              <input type="text" id='firstname' className={`${styles.input}`} />
            </div>

            {/* for Last Name */}
            <div>
              <label htmlFor="lastname" className='text-[#9595B6] text-sm'>Last name</label>
              <input type="text" id='lastname' className={`${styles.input}`} />
            </div>
          </div>

          {/* Row-2 */}
          {/* for Email */}
          <div className='flex flex-col gap-3'>
            <label htmlFor="email" className='text-[#9595B6] text-sm'>Email</label>
            <input type="email" id='email' className={`${styles.input}`} />
          </div>

          {/* Row-3 */}
          {/* for Password */}
          <div className='flex flex-col gap-3'>
            <label htmlFor="password" className='text-[#9595B6] text-sm'>Password</label>
            <input type="password" id='password' className={`${styles.input}`} />
          </div>


          {/* Row-4 */}
          <div className='flex gap-x-3 items-center'>
            <input type="checkbox" className='bg-[#2c2c2a] border border-[rgba(108, 99, 255, 0.1)]'/>
            <p className='text-[#9595B6] text-sm'>I agree to the <span className='text-[#534AB7]'>Terms of Service</span> and <span className='text-[#534AB7]'>Privacy Policy</span></p>
          </div>
          
          {/* Row-5 */}
          {/* Create Account */}
          <div>
             <input type="button" className={`${styles.input} w-full text-white text-2xl font-mono font-medium`} value="Create Account"/> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupForm
