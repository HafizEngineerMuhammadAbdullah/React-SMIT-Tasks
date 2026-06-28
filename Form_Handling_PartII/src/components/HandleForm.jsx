import React, { useEffect, useState } from 'react';
import { User, UserRound, Mail, LockKeyhole, Phone } from 'lucide-react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2';


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
    
  }, [formData]);//runs every time whenever formData state changes
  
  // show Error Message
  const showError = (message) => {
    setError(message);
  }

  // function to handle change, it triggers(this function calls) whenever we type or remove sth from an input box
  const handleChange = (e) => {
    // extract the name & value from change event object e.target
    const { name, value } = e.target;

    let updatedValue = value;

    // Preventing non-digits in the phone field
    if (name === "phoneNo") {
      // remove every non-digit character & ensure user could enter at most 7 digits
      updatedValue = value.replace(/\D/g, "").slice(0, 7);//keep digits & 7 digits only
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
    showError("");


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
    // • minimum 7 characters
    // • maximum 16 characters
    const passwordRegex =
      /^[A-Za-z][A-Za-z0-9!@#%^&*$]{6,15}$/;
    const hasSpecialChar = /[!@#%^&*$]/;
    const hasUppercase = /[A-Z]/;


    // 1. Validate First Name
    if (!firstNameRegex.test(formData.firstName)) {
      showError("First Name must contain only letters and be 6–15 characters long.");
      return false;
    }

    // 2. Validate Last Name
    if (!lastNameRegex.test(formData.lastName)) {
      showError("Last Name must contain only letters and be 6–15 characters long.");
      return false;
    }

    // 3. Validate Phone Operator
    if (formData.operator === "Operator") {
      showError("kindly, set the Phone Number Operator!");
      return false;
    }

    // 4. Validate Mobile No
    // Should contain exactly 7 digit
    if (!phoneRegex.test(formData.phoneNo)) {
      showError("Phone number must contain exactly 7 digits.");
      return false;
    }

    // 5. Validate Email
    if (!emailRegex.test(formData.email)) {
      showError("Please enter a valid email address.");
      return false;
    }

    // const fullNumber = `+92-${formData.operator}-${formData.phoneNo}`;
    // functional update
    // React state updates are asynchronous.
    // setFormData(prevForm => ({
    //   ...prevForm,
    //   fullNumber: fullNumber
    // }))

    // 6. Validate Password
    if (!passwordRegex.test(formData.password)) {
      showError("Password first character must be english letter and be 7-15 characters long!");
      return false;
    }
    // check if there is a special character exist in the password or not
    if (!hasSpecialChar.test(formData.password)) {
      showError("Password must contain at least one special character.");
      return false;
    }
    // check if there is an UpperCase letter exist in the password or not
    if (!hasUppercase.test(formData.password)) {
      showError("Password must contain at least one upper case letter.");
      return false;
    }

    return true;
  }



  const checkIfEmailExists = () => {

    let existingUsers = [];
    // it could throw SyntaxError
    try {
      // Now extract the data from the local storage(if present) & put it into an array
      existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
    } catch {
      existingUsers = [];
    }
    // Checking for duplicate Emails in a Local Storage
    //check if email is distinct(unique) or it is duplicate(check for duplicate Email Address)
    const alreadyExists = existingUsers.some((user) =>
      // if duplicate email exists
      user.email.toLowerCase() === formData.email.toLowerCase()
    )

    if (alreadyExists) {
      showError("Email already registered!");
      return true;//duplicate email found
    }

    return false;//duplicate email not found
  }

  const pushUserData = () => {

    // NOW save the user Data (Permission Granted!)
    // React state updates asynchronously because React schedules the update and re-renders later.
    const fullNumber = `+92-${formData.operator}-${formData.phoneNo}`;
    const userToSave = {
      ...formData,
      // update the fullNumber
      fullNumber
    };

    // push the current data of user in an array
    let existingUsers = [];
    try {
      existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
    } catch {
      existingUsers = [];
    }
    // push the user Data into Local storage if & only if the Email is not duplicated
    existingUsers.push(userToSave);
    // it can throw QuotaExceededError iff local storage becomes full
    try {
      localStorage.setItem("userData", JSON.stringify(existingUsers));
    } catch (err) {
      console.log(err);
    }
  }



  // function to handle Submit
  const submitHandler = async (e) => {
    e.preventDefault();

    // if Validation are not accepted,return from here 
    // Stop Submission if validation fails 
    // Validate Inputs
    if (!validateForm()) return;

    // Check for duplicates BEFORE asking for T&C
    if (checkIfEmailExists()) return;

    // Ask for Terms & Condition (Message)
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
    let timerInterval;

    Swal.fire({
      title: "Submitting Your Form...",
      html: "Processing your data in <b></b>ms.",
      timer: 2500,
      timerProgressBar: true,
      icon: "success",
      iconColor: "#2ecc71",
      confirmButtonColor: "#3085d6",

      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 7000);
      },

      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {

      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("Form successfully submitted!");
      }
    });


    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
          } max-w-md w-full bg-[#333] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {`${formData.firstName} ${formData.lastName}`}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Form Submitted Successfully!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ))

    // push the user Data into Local Storage
    pushUserData();


    // set error as empty
    showError("");

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
      <div><Toaster /></div>
      <form onSubmit={submitHandler} className='flex flex-col justify-between items-start gap-y-2'>

        <div className='w-full flex gap-x-3.5 items-center-safe'>
          <p>Already have an account?</p>
          <button type="button" className='bg-[rgb(93,211,38)] py-2 px-4 text-[white] cursor-pointer hover:bg-[rgb(93,247,22)]'>Sign In to LMS</button>
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
              autoComplete='given-name'
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
              autoComplete='family-name'
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
                autoComplete='tel'
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
              autoComplete='email'
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
              autoComplete='new-password'
              required={true} />

            <LockKeyhole className='absolute left-1.5 top-3' size={20} color='gray' />

            <p className='absolute right-5 top-1.5 mx-3 text-gray-400 text-xl'>|</p>

            {/*  if isShowPassword is true, eyeoff appear otherwise eyeon appear */}
            {/* {isShowPassword ? <IoMdEyeOff className='absolute right-2.5 top-3.5 text-gray-700 cursor-pointer' onClick={togglePasswordVisibility} /> : <IoMdEye className='absolute right-2.5 top-3.5 text-gray-700 cursor-pointer' onClick={togglePasswordVisibility} />} */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2.5 top-3.5 text-gray-500 cursor-pointer"
            >
              {/* Password Show/Hide Toggle Logic */}
              {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </button>

          </div>
        </div>

        <div><p className='text-blue-600 text-sm font-semibold font-mono tracking-wide'>7-16 characters starts with Alphabets,then Numbers OR Special Characters !@#%^&*$</p></div>

        {/* for Submit Button */}

        <button
          type="submit"
          className='w-full text-center text-white font-medium bg-[#F59321] py-2 cursor-pointer hover:bg-[#df7904] active:scale-95'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default HandleForm
