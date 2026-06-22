import React, { useEffect, useState } from 'react';
import { User, UserRound, Mail, LockKeyhole, Phone } from 'lucide-react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const HandleForm = () => {

  //useState formData
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    operator: "Operator",
    phoneNo: "",
    fullNumber: "",
    email: "",
    password: ""
  })


  const [isShowPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const inputStyle = "w-full border border-black p-1 px-9 my-1.5";


  // function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prev => (!prev));
  }

  // useEffect runs after render & give latest update of formData(to observe state changes)
  useEffect(() => {
    console.log("Updated data : ", formData);

  }, [formData]);


  // function to handle change, it triggers whenever we type or remove sth  from an input box
  const handleChange = (e) => {
    // extract the name & value from change event object e.target
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phoneNo") {
      // remove every non-digit character
      updatedValue = value.replace(/\D/g, "");//keep digits only
    }

    setFormData(prevForm => ({
      ...prevForm,//copy the existing object
      // [name]: value
      [name]: updatedValue
    }))
    // setFormData((prevForm) => ({
    //   [name]: value
    // }))
    // This logs the previous state because React schedules the update.
    console.log("old data : ", formData);
  }

  // performs Validation before submission
  const submitHandler = (e) => {
    e.preventDefault();


    // form Validation :-
    // • first Name requires: only letters
    // • minimum 6 characters
    // • maximum 15 characters
    const firstNameRegex = /^[A-Za-z]{6,15}$/;
    const lastNameRegex = /^[A-Za-z]{6,15}$/
    const phoneRegex = /^\d{7}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // first letter must be a character, // - total length: 7 to 16 characters , remaining characters may be letters,digits or allowed special symbols(characters)
    // ^ => start(beginning of string) 
    // $ => end of string 
    const passwordRegex =
      /^[A-Za-z][A-Za-z0-9!@#%^&*$]{6,15}$/;
    const hasSpecial = /[!@#%^&*$]/;
    // 1. Validate First Name
    if (!firstNameRegex.test(formData.firstName)) {
      setError("First Name must contain only letters and be 6–15 characters long.");
      return;
    }

    // 2. Validate Last Name
    if (!lastNameRegex.test(formData.lastName)) {
      setError("Last Name must contain only letters and be 6–15 characters long.");
      return;
    }

    // 3. Validate Phone Operator
    if (formData.operator === "Operator") {
      setError("kindly set the Phone Number Operator!");
      return;
    }

    // 4. Validate Mobile No
    if (!phoneRegex.test(formData.phoneNo)) {
      setError("Phone number must contain exactly 7 digits.");
      return;
    }

    // 5. Validate Email
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // const fullNumber = `+92-${formData.operator}-${formData.phoneNo}`;
    // functional update
    // React state updates are asynchronous.
    // setFormData(prevForm => ({
    //   ...prevForm,
    //   fullNumber: fullNumber
    // }))
    // React state updates asynchronously because React schedules the update and re-renders later.
    const userToSave = {
      ...formData,
      fullNumber: `+92-${formData.operator}-${formData.phoneNo}`
    }

    // 5.Validate Password
    if (!passwordRegex.test(formData.password)) {
      setError("Password first character must be english letter and be 7-15 characters long!");
      return;
    }
    if (!hasSpecial.test(formData.password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    setError("");

    // Now extract the data from the local storage(if present) & put it into an array
    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
    // psuh the current data of user in an array
    existingUsers.push(userToSave);
    localStorage.setItem("userData", JSON.stringify(existingUsers));

    // Empty formData
    setFormData({
      firstName: "",
      lastName: "",
      operator: "Operator",
      phoneNo: "",
      fullNumber: "",
      email: "",
      password: ""
    })

    alert("successfully submitted!")

  }
  return (
    <div className='w-full max-w-md border border-gray-300 p-6'>
      <form onSubmit={submitHandler} action="" className='flex flex-col justify-between items-start gap-y-2'>

        <div className='w-full flex gap-x-3.5 items-center-safe'>
          <p>Already have an account?</p>
          <button type="button" className='bg-[rgb(93,211,38)] py-2 px-4 text-[white] cursor-pointer'>Sign In to LMS</button>
        </div>

        {/* Create New Account Paragraph */}
        <div> <p className='text-[#f3a412] font-semibold text-xl'>Create New Account</p></div>

        {/* Error Paragraph */}
        <div className='w-full text-center'><p className='text-red-500 text-sm font-mono font-medium'>{error}</p></div>

        {/* for First Name */}
        {/* Performs Two Way Data Binding here */}
        <div className='w-full'>
          <label htmlFor="userFirstName">First Name</label>
          <div className='relative'>
            <input
              id='userFirstName'
              onChange={handleChange}
              className={inputStyle} name="firstName" value={formData.firstName} type="text" placeholder='enter your first name' required={true} />
            <User className="absolute left-1.5 top-3" size={20} color='gray' />
          </div>
        </div>

        {/* for Last Name */}
        <div className='w-full'>
          <label htmlFor="userLastName">Last Name</label>
          <div className='relative'>
            <input type="text" id='userLastName' onChange={handleChange} className={inputStyle} name="lastName" value={formData.lastName} placeholder='enter your last name' required={true} />
            <UserRound className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        {/* for Mobile No */}
        <div className='w-full'>
          <label htmlFor="userMobileNo">Mobile No</label>
          <div className='flex items-center gap-x-2 my-0.5'>
            <input type="text" className="border p-1" disabled={true} value="+92" size={2} />
            <select name="operator" id="" onChange={handleChange} value={formData.operator} className="border p-1">
              <option value="Operator">Operator</option>
              <option value="0300">0300</option>
              <option value="0310">0310</option>
              <option value="0320">0320</option>
              <option value="0330">0330</option>
              <option value="0340">0340</option>
              <option value="0350">0350</option>
            </select>
            <div className='w-full relative'>
              <input type="text" id='userMobileNo' onChange={handleChange} className={inputStyle} name="phoneNo" value={formData.phoneNo} placeholder='7 digit number' required={true} />
              <Phone className="absolute left-1.5 top-3" size={20} color='gray' />
            </div>
          </div>
        </div>

        {/* for Email Address */}
        <div className='w-full'>
          <label htmlFor="userEmail">Email Address</label>
          <div className='relative'>
            <input type="email" id='userEmail' onChange={handleChange} className={inputStyle} name="email" value={formData.email} placeholder='please enter valid email address' required={true} />
            <Mail className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        {/* for Password */}
        <div className='w-full'>
          <label htmlFor="userPassword">Password</label>
          <div className='relative'>
            <input type={isShowPassword ? "text" : "password"} id='userPassword' onChange={handleChange} className={inputStyle} name="password" value={formData.password} placeholder='please enter valid password' required={true} />
            <LockKeyhole className='absolute left-1.5 top-3' size={20} color='gray' />
            <p className='absolute right-5 top-1.5 mx-3 text-gray-500 text-xl'>|</p>

            {/*  if isShowPassword is true, eyeoff appear otherwise eyeon appear */}
            {/* {isShowPassword ? <IoMdEyeOff className='absolute right-2.5 top-3.5 text-gray-700 cursor-pointer' onClick={togglePasswordVisibility} /> : <IoMdEye className='absolute right-2.5 top-3.5 text-gray-700 cursor-pointer' onClick={togglePasswordVisibility} />} */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2.5 top-3.5 text-gray-700 cursor-pointer"
            >
              {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </button>

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
