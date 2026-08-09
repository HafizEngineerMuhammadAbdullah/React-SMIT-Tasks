import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { database } from "../../configuration/firebase"
import { ref, push } from "firebase/database"
import User from './User';




const Signup = () => {
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });


    // function to handle input field changes and update the formData state
    const handleChange = (e) => {   
        const { name, value } = e.target;

        // setFormData({
        //   name: value,
        // });
        setFormData((prevForm) => ({ ...prevForm, [name]: value }));

        console.log(formData);
    };


    // function to handle form submission
    const submitHandler = async (e) => {
        e.preventDefault();

        // Validate Form:-

        // Validate Age
        if(formData.age < 0 || formData.age > 100){
            setError("Age must be between 0 and 100!");
            return;
        }

        if(formData.age === ""){
            setError("Age is required!");
            return;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address!");
            return;
        }
        
        // Validate Gender
        if (formData.gender === "") {
            setError("Please select a gender!");
            return;
        }

        // Validate Password
        if (formData.password.length < 8) {
            setError("Password must be 8 characters long!");
            return;
        } else if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password must be same!");
            return;
        }

        if (!/[!@#$%^&*()<>,.";:]/.test(formData.password)) {
            setError("Password must contain any special character!");
            return;
        }


        if (!/[A-Z]/.test(formData.password)) {
            setError("Password must contain any capital letter!");
            return;
        }

        // setUser((prevUser) => [
        //   ...prevUser,
        //   {
        //     fullName: formData.fullName,
        //     email: formData.email,
        //     password: formData.password,
        //     confirmPassword: formData.confirmPassword,
        //   },
        // ]);


         // Save data to Firebase Realtime Database
        try {
            const dbRef = ref(database, "users");
            await push(dbRef, formData);
            console.log("Data saved to Firebase Realtime Database");
        } catch (error) {
            console.error("Error saving data to Firebase:", error);
        }


        setUser((prevUser) => [...prevUser, formData]);

        const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
        console.log(existingUsers);
        console.log(Array.isArray(existingUsers));
        existingUsers.push(formData);

        localStorage.setItem("userData", JSON.stringify(existingUsers));

        // localStorage.setItem("userData", JSON.stringify(formData));

        setFormData({
            fullName: "",
            age: "",
            email: "",
            gender: "",
            password: "",
            confirmPassword: "",
        });

        setError("");
        // setFullName("");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");

        toast.success("🦄 Login Successfull! ", {
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

    };
    const inputStyle =
        "w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500";
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 overflow-auto">
            <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-md">

                <form
                    onSubmit={submitHandler}
                    className="flex flex-col items-center gap-4 border border-gray-200 rounded-xl p-4"
                >
                    <h1 className="text-3xl font-bold text-center">Sign Up</h1>

                    <p className="text-gray-500 text-sm text-center">
                        Please fill in the details below.
                    </p>
                    {/* <label htmlFor="name" className="text-sm font-medium">
            Full Name :
          </label> */}
                    <input
                        // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
                        className={inputStyle}
                        type="text"
                        id="name"
                        value={formData.fullName}
                        // onChange={(e) => setFullName(e.target.value)}
                        name="fullName"
                        onChange={handleChange}
                        required={true}
                        placeholder="Enter Name here"
                        autoComplete="given-name"
                    />


                    <input
                        // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
                        className={inputStyle}
                        type="text"
                        value={formData.age}
                        // onChange={(e) => setFullName(e.target.value)}
                        name="age"
                        onChange={handleChange}
                        required={true}
                        placeholder="Enter Age here"
                        autoComplete="age"
                    />

                    {/* <label htmlFor="email" className="text-sm font-medium">
            Email No :
          </label> */}
                    <input
                        // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
                        className={inputStyle}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={handleChange}
                        required={true}
                        placeholder="Enter Your Email"
                        autoComplete="email"
                    />


                    <select
                        className={`${inputStyle}`}
                        name="gender"
                        value={formData.gender}
                        placeholder="Select Gender"
                        onChange={handleChange}
                        required={true}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {/* <label htmlFor="password" className="text-sm font-medium">
            Full Name
          </label> */}
                    <input
                        // className="w-full border-2 border-[#7e7373af] px-3 py-1 text-xl rounded-lg"
                        className={inputStyle}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={handleChange}
                        required={true}
                        placeholder="Enter Password"
                        autoComplete="new-password"
                    />
                    {/* <label htmlFor="confirm-password" className="text-sm font-medium">
            Confirm Password :
          </label> */}
                    <input
                        className={inputStyle}
                        // className="w-full border-2 border-[#7e7373af] focus:border-none focus:outline-2 outline-[#5518c7] px-3 py-1 text-xl rounded-lg"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                        onChange={handleChange}
                        required={true}
                        placeholder="Confirm Password"
                    />
 

                    {/* Display error */}
                    {error && (
                        <p className="text-red-500 text-sm text-center font-medium">
                            {error}
                        </p>
                    )}


                    <button
                        type="submit"
                        className="text-lg text-white px-4 py-2 rounded-lg bg-[#1a58df] font-semibold mt-5 w-full cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="text-black">
                {user.map((element, idx) => {
                    return <User key={idx} element={element} />;
                })}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Signup
