// import React, { useState } from 'react'
// import styles from "./Signup.module.css";
// import { push, ref } from "firebase/database";
// import { database } from "../../../configuration/firebase"

// function Signup() {

//     const [formData, setformData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         age: "",
//         tel: "",
//         gender: "",
//     });



//     const handleInput = (e) => {
//         setformData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     };

//     const handleForm = async (e) => {
//         e.preventDefault()

//         try {
//             console.log(formData)
//             await push(ref(database, "users"), formData)

//             alert("Sign Is Done");

//             setformData({
//                 username: "",
//                 email: "",
//                 password: "",
//                 age: "",
//                 tel: "",
//                 gender: "",
//             })
//         } catch (error) {

//             console.error("the error is", error)
//         }
//     }




//     return (
//         <div className={styles.container}>
//             <form onSubmit={handleForm} className={styles.form}>
//                 <h1 className={styles.h1}>SignUp</h1>
//                 <input className={styles.input} type="text" placeholder='User Name' value={formData.username} name='username' required onChange={handleInput} />
//                 <input className={styles.input} type="email" placeholder='Email' value={formData.email} name='email' required onChange={handleInput} />
//                 <input className={styles.input} type="password" name="password" id="" value={formData.password} placeholder='Password' onChange={handleInput} />
//                 <input className={styles.input} type="Age" placeholder='Age' name='age' value={formData.age} required onChange={handleInput} />
//                 <input className={styles.input} type="tel" placeholder='Phone' name='tel' value={formData.tel} required onChange={handleInput} />
//                 <select onChange={handleInput} name="gender" value={formData.gender} className={styles.input}>
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                 </select>
//                 <button className={styles.btn}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Signup





import React, { useState } from 'react';
import styles from "./Signup.module.css";
import { push, ref } from "firebase/database";
import { database } from "../../../configuration/firebase";

// Initial state object kept outside component to avoid re-creation on every render
const INITIAL_FORM_STATE = {
    username: "",
    email: "",
    password: "",
    age: "",
    tel: "",
    gender: "",
};

function Signup() {
    // form Data
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);

    // function to handle Input Field using React controlled component
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            /* =========================================================================
                Firebase push()
               `push(ref, data)` => push(ref,collection) generates a unique timestamp-based key (e.g., "-Nx9z...") 
               under the "users" node and saves the object there.
            ========================================================================= */
            await push(ref(database, "users"), formData);

            setStatusMessage({ type: 'success', text: 'Account created successfully!' });
            // Empty form after Submission
            setFormData(INITIAL_FORM_STATE);
        } catch (error) {
            console.error("Firebase submit error:", error);
            setStatusMessage({ type: 'error', text: 'Failed to create account. Try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // for Form Card
        <div className={styles.formCard}>
            {/* for Header */}
            <div className={styles.header}>
                <h2>Create Account</h2>
                <p>Enter details to register a new user in the database</p>
            </div>

            {/* Display Message */}
            {statusMessage && (
                <div className={`${styles.alert} ${styles[statusMessage.type]}`}>
                    {statusMessage.text}
                </div>
            )}

            {/* for Form */}
            <form onSubmit={handleForm} className={styles.formGrid}>

                {/* for Full Name */}
                <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="John Doe"
                        value={formData.username}
                        name="username"
                        required
                        onChange={handleInput}
                    />
                </div>

                {/* for Email */}
                <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        name="email"
                        required
                        onChange={handleInput}
                    />
                </div>

                {/* for Password */}
                <div className={styles.inputGroup}>
                    <label>Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        required
                        onChange={handleInput}
                    />
                </div>

                {/* for Age */}
                <div className={styles.row}>
                    <div className={styles.inputGroup}>
                        <label>Age</label>
                        <input
                            className={styles.input}
                            type="number"
                            placeholder="25"
                            name="age"
                            value={formData.age}
                            min="1"
                            max="120"
                            required
                            onChange={handleInput}
                        />
                    </div>

                    {/* for Gender */}
                    <div className={styles.inputGroup}>
                        <label>Gender</label>
                        <select
                            onChange={handleInput}
                            name="gender"
                            value={formData.gender}
                            className={styles.select}
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                {/* for Phone Number */}
                <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input
                        className={styles.input}
                        type="tel"
                        placeholder="+92 (555) 000-0000"
                        name="tel"
                        value={formData.tel}
                        required
                        onChange={handleInput}
                    />
                </div>
               
               {/* Submission Button */}
                <button disabled={isSubmitting} className={styles.submitBtn}>
                    {isSubmitting ? <span className={styles.buttonSpinner}></span> : "Register User"}
                </button>
            </form>
        </div>
    );
}

export default Signup;