import React from 'react';
import styles from './SignupForm.module.css'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const SignupForm = () => {

  return (
    // <div className={`${styles.container}`}>
    <div className='w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 overflow-y-auto overflow-x-hidden rounded-2xl'>
      < LeftPanel />
      < RightPanel />
    </div>
  )
}

export default SignupForm
