import React, { useState } from 'react'
import { URL } from "../configuration/configure";
import styles from "./PostApi.module.css"
import Swal from 'sweetalert2'

const PostApi = () => {

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)



    const postApi = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                URL,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        name: "DrAbdullah",
                        email: ' abdullahkhan@gmail.com'
                    })
                }
            );

            console.log(response);

            const data = await response.json();
            console.log(data);

            setMessage("Successfully Passed the data")
            Swal.fire({
                title: "Good job!",
                text: "Successfully,passed the data to MyServer!",
                icon: "success",
                confirmButtonColor: "#4f46e5" // Matches your button color
            });
        }
        catch (error) {
            console.error(error);
            setMessage("Failed to pass the data")
            Swal.fire({
                title: "Error!",
                text: "Failed to pass the data to MyServer!",
                icon: "error",
                confirmButtonColor: "#4f46e5" // Matches your button color
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.textContent}>
                <h2 className={styles.heading}>Post Method API</h2>
                <p className={styles.subtitle}>Send data securely to the server</p>
            </div>

            {loading && <div className={styles.loader}></div>}

            {/* <button className={styles.btn} onClick={postApi}>
                Add User
            </button> */}


            {/* The Updated Button */}
            <button
                disabled={loading}
                onClick={postApi}
                // Added flex, justify-center, items-center, and gap-2 to align spinner and text
                className={styles.btn}
            >
            {loading ? (
                <>
                    <div className={styles.btnLoader}></div>
                    Adding Data...
                </>
            ) : (
                "Add Data"
            )}
        </button>

            { message && <p>{message}</p> }
        </div >
    )
}

export default PostApi