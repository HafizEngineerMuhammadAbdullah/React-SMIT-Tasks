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
      <div className={`${styles.leftPanel} flex flex-col justify-between w-[90%] bg-[#1A1A2E] p-9`}>
        <div className={`${styles.upperLeftPanel}`}>
          <div className='h-10 w-10 flex justify-center items-center rounded-xl bg-[#534AB7] '>
            < TbBolt color='white' size={22} />
          </div>
          <h1 className='font-medium text-2xl text-white text-wrap my-3'>Built something great today</h1>
          <p className='text-[#9595B6] text-sm'>Join thousands of developers shipping faster with our platform.</p>
        </div>
        <div className={`${styles.lowerLeftPanel}`}>
          {options.map((item, idx) => {
            return (
              <div key={idx} className={`${styles.options} h-10 flex gap-3 items-center`}>
                <div className={`${styles.icon} h-7 w-7 flex justify-center items-center rounded-full bg-[${item.backgroundColor}] text-[${item.color}] border border-[${item.borderColor}]`}>
                  {
                    item.icon ? < item.icon /> : (idx + 1)
                  }
                </div>
                <div className={`${styles.textContent} text-[${item.contentColor}]`}>{item.content}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.rightPanel}>

      </div>
    </div>
  )
}

export default SignupForm
