import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import styles from "./StyleForm.module.css";
import { ToastContainer, toast } from "react-toastify";

const HandleForm = () => {
  // form Data
  const [formData, setFormData] = useState({
    userCnicNo: "",
    userPassword: "",
  });

  const [error, setError] = useState("");

  // handle State (Use States which is Hook) of input fields
  // const [inputType, setInputType] = useState("password");
  const [isShowPassword, setIsShowPassword] = useState(false);
  // const [cnicNo, setCnicNo] = useState("");
  // const [password, setPassword] = useState("");

  // const togglePasswordVisibility = () => {
  //   // setIsShowPassword(!isShowPassword);
  //   if (!isShowPassword) {
  //     setInputType("text");
  //     setIsShowPassword(true);
  //   } else {
  //     setInputType("password");
  //     setIsShowPassword(false);
  //   }
  // };

  // function to toggle input type state(toggle input type) & isShowPassword state that tracks whether the password is displayed(showed) or not
  const togglePasswordVisibility = () => {
    setIsShowPassword((prev) => !prev);
  };

  // function to resist(prevent) the default behaviour of browser which is reloading the page every time when we click on anywhere inside the form element
  const resistReload = (e) => {
    e.preventDefault();
  };

  // function that handle Change when every time changes occur on input box
  const handleChange = (e) => {
    const { name, value } = e.target;
    // spread operator copy formData object into a new prevForm obj & then update the value of the corresponding particular key in the prevForm obj & update the state
    setFormData((prevform) => ({ ...prevform, [name]: value }));


    // useEffect(() => {
    //   console.log("Updated form Data : ", formData);
    // }, [formData])//runs every time when the formData changes

    console.log("Old Form Data : ", formData);
  };

  // function that handle submit means it shows users Data when the form has been submitted
  const submitHandler = () => {

    const hasUpperCase = /[A-Z]/;
    const hasSpecialChar = /[!@#$%^&*()_:.,|]/;
    // Form Validation :-
    if (formData.userPassword.length < 8) {
      setError(`Password must be 8 characters(letters) long!`);
      toast.warn("too short Password!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    if (!hasSpecialChar.test(formData.userPassword)) {
      setError(`Password must contain at least single(one) special letter!`);
      toast.error("Password must contain special Letter!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!hasUpperCase.test(formData.userPassword)) {
      setError(`Password must contain at least one(single) capital letter`);
      toast.info("Password must contain uppercase letter!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setError("");

    // extract the old data from Browser local storage 
    const existingUser = JSON.parse(localStorage.getItem("userData")) || [];
    // push the new Data of user
    existingUser.push(formData);
    // convert the array data to JSON string & put into Browser local Storage
    localStorage.setItem("userData", JSON.stringify(existingUser));

    setFormData({
      userCnicNo: "",
      userPassword: "",
    });

    toast.success("Form Submitted Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
    console.log("-------User Details ----------");
    console.log(`User CNIC no : ${formData.userCnicNo}`);
    console.log(`User Password : ${formData.userPassword}`);

    // const userData = {
    //   cnicNo,
    //   password,
    // };
    console.log(formData);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          resistReload(e);
          submitHandler();
        }}
        // className={`${styles.form} w-[30vw] h-[60vh] flex flex-col gap-4`}
        className={`${styles.form} w-full max-w-md flex flex-col gap-4`}
      >
        {/* Buttons Div */}
        <div className="h-10 w-full p-1 flex items-center rounded-lg bg-[#f5f5f5]">
          {/* button-01 */}
          <button
            type="button"
            className={`${styles.btn} bg-[#ffffff] text-[#0a0a0a] w-1/2 rounded`}
          >
            Login
          </button>
          {/* button-02 */}
          <button
            type="button"
            className={`${styles.btn} text-[#737373] w-1/2`}
          >
            Create Password
          </button>
        </div>

        <div>
          <p className="text-sm text-red-700 font-medium font-mono text-center text-shadow-2xs">
            {error}
          </p>
        </div>

        {/* Actual Form Div */}
        <div className="w-full h-[80%] flex flex-col border-[#b1a9a9] border rounded-2xl">
          {/* Paragraph Div */}
          <div className="p-6">
            <p className="text-[#0a0a0a] font-semibold leading-none tracking-tight">
              Login
            </p>
            {/* <p className="text-[#737373] text-[15px] mt-1.5"> */}
            <p className="text-sm text-[#737373] sm:text-base font-normal mt-1.5">
              Kindly provide the CNIC number and password used during SMIT
              course registration.
            </p>
          </div>

          {/* Cnic Div */}
          <div className="p-6 pt-0">
            <div className="flex flex-col justify-center space-y-1">
              <label htmlFor="cnic" className="text-sm font-normal">
                CNIC *
              </label>
              {/* Performs Two Way Data Binding here */}
              <input
                className="bg-[#e8f0fe] h-9 w-full rounded-md px-3 py-1 mt-1 border border-[#8c969773] focus:outline-1"
                type="text"
                name="userCnicNo"
                value={formData.userCnicNo}
                required={true}
                // onChange={(e) => setCnicNo(e.target.value)}
                onChange={handleChange}
                id="cnic"
                autoComplete="user-cnic"
              />
            </div>

            {/* Password Div */}
            <div className="flex flex-col justify-center space-y-1 mt-2">
              <label htmlFor="password" className="text-sm font-normal">
                Password *
              </label>
              {/* Eye div */}
              <div className="relative">
                {/* Input fields type update dynamically(toggle input type between password & text type) */}
                {/* Performs Two Way Data Binding here */}
                <input
                  className="bg-[#e8f0fe] h-9 w-full rounded-md px-3 py-1 mt-1 border border-[#8c969773] focus:outline-1"
                  // type={inputType}
                  type={isShowPassword ? "text" : "password"}
                  name="userPassword"
                  value={formData.userPassword}
                  required={true}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handleChange}
                  id="password"
                  autoComplete="user-password"
                />
                {/* Eye toggle button */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="h-1 absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {/* if eye is on means the password won't show else when cilck eye is off means password should be showed  */}
                  {isShowPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          {/* Login Button */}
          <div className="h-full w-full flex items-center p-6 pt-0">
            <button
              type="submit"
              className="w-full rounded-md text-sm font-medium text text-[#fafafa] bg-[#2b4f8cde] hover:bg-[#2b4f8cff] py-2 px-4 cursor-pointer"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
      {/* Last Button */}
      <button
        type="button"
        className="mt-2 h-9 w-full px-4 py-2 cursor-pointer hover:bg-gray-100 text-black border border-[#c0b9b9be] bg-white-shadow-sm inline-flex justify-center items-center rounded-md text-[15px] font-medium"
      >
        Login as teacher
      </button>
      {/* Toast Container */}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HandleForm;
