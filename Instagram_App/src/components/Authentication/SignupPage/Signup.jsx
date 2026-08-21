import React,{useState} from 'react'

const Signup = () => {



    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    //  Form Data :-
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
    })



    // function to toggle password visibility
    const togglePasswordVisibility = () => {
        // setShowPassword((prev) => (!prev))
        setIsPasswordVisible((prev) => (!prev))
    }


    // function that handle changes when changes occur in input field while typing...
    const changeHandler = (e) => {
        // extract the name and value from e.target object from each input field
        const { name, value } = e.target;

        // updates the formData by updating the form Data state
        // Even though we could overwrite the form values by updating the values,but the issue is React doesn't  update state when the same object referencing(have same address) to same memory location it had
        // React updates object state only when the reference(address) pointing to that particular object in memory changes
        // React schedules the update(not immediately updates the state) 
        setFormData((prevFormData) => ({
            ...prevFormData,// copy the existing form data
            [name]: value // update the name and value as key value pair
        }));
    }



    // function to validate the form data before submission
    const validateFormData = () => {
        const { firstName, lastName, email, password } = formData;

        // Validate first name and last name (only letters allowed)
        const nameRegex = /^[A-Za-z]{3,20}$/;
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            alert("First name and Last name should contain only letters (3-20 characters).");
            return false;
        }

        // Validate email format
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validate password (only letters and numbers allowed)
        const passwordRegex = /^[A-Za-z0-9]{7,15}$/;
        if (!passwordRegex.test(password)) {
            alert("Password should contain only letters and numbers (7-15 characters).");
            return false;
        }

        return true; // Form data is valid
    };

    // function that handle submit(when the submit button is pressed/clicked)
    const submitHandler = async (e) => {
        // resist reloading the page(prevent the browser default behaviour i.e. reload the webpage when submit btn is pressed)
        e.preventDefault();

        if (!validateFormData()) return;

        try {

            // Creates a reference to a folder named 'formSubmissions'
            const dbRef = ref(database, 'formSubmissions');

            // push() generates a unique ID for every form entry automatically
            await push(dbRef, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                message: "Form has been submitted successfully!",
                password: formData.password,
                timestamp: Date.toISOString()
            });

            // await push(ref(database, "usersData"), formData);

            toast('Form data sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
            });

            alert(`Form submitted with data: ${JSON.stringify(formData)}`);

            setFormData({
                username: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
            // console.error("Error sending data:", error.message);
            toast.error('Error Submitting Form.Please try again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: Bounce,
            });
        }
    }

    const inputStyle = `mt-1 w-full rounded-lg px-3 py-2.5 border border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white`;


    return (
        <main className='min-h-screen flex justify-center items-center'>
            {/* <form className='h-[70vh] p-10 border border-gray-700 flex flex-col items-center justify-evenly shadow shadow-gray-600'>
                <h1>Welcome to TailwindCSS Land</h1>
                <label htmlFor="">Name</label>
                <input type="text" className={`${inputStyle}`}/>
                <label htmlFor="">Email</label>
                <input type="email" className={`${inputStyle}`} />
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form> */}


            {/* <form className='w-full p-10 flex flex-col items-center justify-evenly'>
                <p className='self-start'>Log into Instagram</p>
                <input type="text" className={`${inputStyle}`} placeholder='Mobile number,username or email' />
                <input type="text" placeholder='Password' />
                <button>login</button>
                <button>Forgot Password?</button>
            </form> */}



            <form
                action="#"
                className="mx-auto grid max-w-lg grid-cols-1 gap-4 rounded-lg border border-gray-300 bg-gray-100 p-6 sm:grid-cols-2 dark:border-gray-600 dark:bg-gray-800"
                onSubmit={submitHandler}
            >

                {/* for UserName */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
                        Name
                    </label>

                    <input
                        className={inputStyle}
                        id="name"
                        name='username'
                        value={formData.username}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Your name"
                        required
                    />
                </div>

                {/* for Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">
                        Email
                    </label>

                    <input
                        className={inputStyle}
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                    />
                </div>

                {/* for Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="phone">
                        Phone
                    </label>

                    <input
                        className={inputStyle}
                        id="phone"
                        name='phone'
                        value={formData.phone}
                        onChange={changeHandler}
                        type="tel"
                        placeholder="Your phone"
                        required
                    />
                </div>


                {/* for Password */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">
                        Password
                    </label>

                    <input
                        className={inputStyle}
                        id="password"
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder="Your Password..."
                        required
                    />
                </div>
                {/* <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="message">
                        Message
                    </label>

                    <textarea
                        class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        id="message"
                        rows="4"
                        placeholder="Your message"
                    ></textarea>
                </div> */}

                {/* SignUp Button */}
                <div className="md:col-span-2">
                    <button
                        className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-white
                        cursor-pointer"
                        type="submit"
                    >
                        Signup
                    </button>
                </div>

            </form>
        </main>
    )
}

export default Signup