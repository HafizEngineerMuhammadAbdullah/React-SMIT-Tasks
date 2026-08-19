import React from 'react'
import InstagramPage from './components/Page/InstagramPage';
import Login from "./components/Authentication/LoginPage/Login"
import Signup from "./components/Authentication/SignupPage/Signup"
import "./App.css"
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
     {/* Routes container handles path matching */}
      <Routes>
          <Route path='/' element={<InstagramPage />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App