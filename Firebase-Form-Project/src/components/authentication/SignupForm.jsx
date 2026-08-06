import React from 'react';
import styles from './SignupForm.module.css'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const SignupForm = () => {

  return (
    <div className={`${styles.container}`}>
       < LeftPanel />
       < RightPanel />
    </div>
  )
}

export default SignupForm
