import React, { useEffect, useState } from 'react';
import { User, UserRound, Mail, LockKeyhole, Phone } from 'lucide-react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Swal from 'sweetalert2'


const HandleForm = () => {

  //Initial formData
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




  // function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  }

  // useEffect runs after render & give latest update of formData(if we want to observe state changes)
  useEffect(() => {
    console.log("Updated data : ", formData);

  }, [formData]);


  // function to handle change, it triggers(this function calls) whenever we type or remove sth from an input box
  const handleChange = (e) => {
    // extract the name & value from change event object e.target
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phoneNo") {
      // remove every non-digit character & ensure user could enter at most 7 digits
      updatedValue = value.replace(/\D/g, "").slice(0, 7);//keep digits only
    }

    setFormData(prevForm => ({
      ...prevForm,//copy the existing object
      // [name]: value
      [name]: updatedValue
    }))

    // setFormData((prevForm) => ({
    //   [name]: value
    // }))
    // This logs the previous state because React schedules the update later.
    console.log("old data : ", formData);
  }

  // performs Validation before submission
  const validateForm = () => {

    //  Form Validation :-
    // • first Name requires: only letters
    // • minimum 6 characters
    // • maximum 15 characters
    const firstNameRegex = /^[A-Za-z]{6,15}$/;
    const lastNameRegex = /^[A-Za-z]{6,15}$/
    const phoneRegex = /^\d{7}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// [^\s@] => Matches any character except whitespaces & '@'
    // first letter must be a character, // - total length: 7 to 16 characters , remaining characters may be letters,digits or allowed special symbols(characters)
    // ^ => start(beginning of string) 
    // $ => end of string 
    const passwordRegex =
      /^[A-Za-z][A-Za-z0-9!@#%^&*$]{6,15}$/;
    const hasSpecialChar = /[!@#%^&*$]/;
    const hasUppercase = /[A-Z]/;


    // 1. Validate First Name
    if (!firstNameRegex.test(formData.firstName)) {
      setError("First Name must contain only letters and be 7–16 characters long.");
      return false;
    }

    // 2. Validate Last Name
    if (!lastNameRegex.test(formData.lastName)) {
      setError("Last Name must contain only letters and be 7–16 characters long.");
      return false;
    }

    // 3. Validate Phone Operator
    if (formData.operator === "Operator") {
      setError("kindly set the Phone Number Operator!");
      return false;
    }

    // 4. Validate Mobile No
    // Should contain exactly 7 digit
    if (!phoneRegex.test(formData.phoneNo)) {
      setError("Phone number must contain exactly 7 digits.");
      return false;
    }

    // 5. Validate Email
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // const fullNumber = `+92-${formData.operator}-${formData.phoneNo}`;
    // functional update
    // React state updates are asynchronous.
    // setFormData(prevForm => ({
    //   ...prevForm,
    //   fullNumber: fullNumber
    // }))

    // 6.Validate Password
    if (!passwordRegex.test(formData.password)) {
      setError("Password first character must be english letter and be 7-15 characters long!");
      return false;
    }
    // check if there is a special character exist in the password or not
    if (!hasSpecialChar.test(formData.password)) {
      setError("Password must contain at least one special character.");
      return false;
    }
    // check if there is an UpperCase letter exist in the password or not
    if (!hasUppercase.test(formData.password)) {
      setError("Password must contain at least one upper case letter.");
      return false;
    }


    return true;
  }



  const submitHandler = async (e) => {
    e.preventDefault();

    // if Validation are not accepted,return from here 
    // Stop Submission if validation fails 
    if (!validateForm()) return;

    // Terms & Condition Message
    const { value: accept } = await Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: "I agree with the terms and conditions",
      confirmButtonText: `Continue&nbsp;<i class="fa fa-arrow-right"></i>`,
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      }
    });
    // Stop execution if user don't accept
    if (!accept) return;

    // if agreed with terms & conditions,show Message
    Swal.fire("You agreed with T&C :)")



    // form submitted successfully message
    Swal.fire({
      title: "Form submitted Successfully!",
      icon: "success",
      timerProgressBar: true,
      // text: "You clicked the button!",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        ` },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        ` }
    });

    // React state updates asynchronously because React schedules the update and re-renders later.
    const userToSave = {
      ...formData,
      // update the fullNumber
      fullNumber: `+92-${formData.operator}-${formData.phoneNo}`
    }

    // Now extract the data from the local storage(if present) & put it into an array
    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
    //check if email is distinct(unique) or it is duplicate(check for duplicate Email Address)
    const alreadyExists = existingUsers.some((user) =>
      // if duplicate email exists
      user.email === formData.email
    )

    if (alreadyExists) {
      setError("Email already registered!");
      return;
    }
    // push the current data of user in an array
    existingUsers.push(userToSave);

    localStorage.setItem("userData", JSON.stringify(existingUsers));


    // set error as empty
    setError("");

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
  }


  const inputStyle = "w-full border border-black p-1 px-9 my-1.5";

  return (
    <div className='w-full max-w-md border border-gray-300 p-6'>
      <form onSubmit={submitHandler} action="" className='flex flex-col justify-between items-start gap-y-2'>

        <div className='w-full flex gap-x-3.5 items-center-safe'>
          <p>Already have an account?</p>
          <button type="button" className='bg-[rgb(93,211,38)] py-2 px-4 text-[white] cursor-pointer'>Sign In to LMS</button>
        </div>

        {/* Create New Account Paragraph */}
        <div> <p className='text-[#f3a412] font-semibold text-xl'>Create New Account</p></div>

        {/* Show Error Paragraph */}
        <div className='w-full text-center'><p className='text-red-500 text-sm font-mono font-medium'>{error}</p></div>

        {/* for First Name */}
        {/* Performs Two Way Data Binding here */}
        <div className='w-full'>
          <label htmlFor="userFirstName">First Name</label>
          <div className='relative'>
            <input
              id='userFirstName'
              onChange={handleChange}
              className={inputStyle}
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder='enter your first name'
              autoComplete='user-first-name'
              required={true} />
            <User className="absolute left-1.5 top-3" size={20} color='gray' />
          </div>
        </div>

        {/* for Last Name */}
        <div className='w-full'>
          <label htmlFor="userLastName">Last Name</label>
          <div className='relative'>
            <input
              id='userLastName'
              type="text"
              onChange={handleChange}
              className={inputStyle}
              name="lastName"
              value={formData.lastName}
              placeholder='enter your last name'
              autoComplete='user-last-name'
              required={true} />
            <UserRound className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        {/* for Mobile No */}
        <div className='w-full'>
          <label htmlFor="userMobileNo">Mobile No</label>
          <div className='flex items-center gap-x-2 my-0.5'>
            <input
              type="text"
              className="border p-1"
              disabled={true}
              value="+92"
              size={2} />
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
              <input
                id='userMobileNo'
                type="text"
                onChange={handleChange}
                className={inputStyle}
                name="phoneNo"
                value={formData.phoneNo}
                placeholder='7 digit number'
                autoComplete='user-phoneNo'
                required={true} />
              <Phone className="absolute left-1.5 top-3" size={20} color='gray' />
            </div>
          </div>
        </div>

        {/* for Email Address */}
        <div className='w-full'>
          <label htmlFor="userEmail">Email Address</label>
          <div className='relative'>
            <input
              id='userEmail'
              type="email"
              onChange={handleChange}
              className={inputStyle}
              name="email"
              value={formData.email}
              placeholder='please enter valid email address'
              autoComplete='user-email'
              required={true} />
            <Mail className='absolute left-1.5 top-3' size={20} color='gray' />
          </div>
        </div>

        {/* for Password */}
        <div className='w-full'>
          <label htmlFor="userPassword">Password</label>
          <div className='relative'>
            <input
              id='userPassword'
              type={isShowPassword ? "text" : "password"}
              onChange={handleChange}
              className={inputStyle}
              name="password"
              value={formData.password}
              placeholder='please enter valid password'
              autoComplete='user-password'
              required={true} />

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

        <button
          type="submit"
          className='w-full text-center text-white bg-[#F59321] py-2 cursor-pointer hover:bg-[#df7904]'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default HandleForm
