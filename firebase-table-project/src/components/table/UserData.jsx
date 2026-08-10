// import React, { useState, useEffect } from 'react'
// import { ref, onValue } from "firebase/database"
// import { database } from "../../../configuration/firebase"
// import styles from "./UserData.module.css"
// import { ImBin2 } from "react-icons/im";

// const UserData = () => {

//     const [users, setUsers] = useState([]);
//     const [loader, setLoader] = useState(true);

//     useEffect(() => {
//         const userRef = ref(database, "users");

//         const unsubscribe = onValue(userRef, (snapshot) => {
//             const data = snapshot.val();

//             if (data) {
//                 const usersArray = Object.entries(data).map(([id, user]) => ({
//                     id,
//                     ...user,
//                 }));

//                 setUsers(usersArray);
//             } else {
//                 setUsers([]);
//             }


//             setLoader(false);
//         });



//     }, []);

//     return (
//         <div className={styles.container}>

//             {loader ? (
//                 <div className={styles.loader}></div>
//             ) : (
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>NAME</th>
//                             <th>EMAIL</th>
//                             <th>PASSWORD</th>
//                             <th>AGE</th>
//                             <th>GENDER</th>
//                             <th>ID</th>
//                             <th>DELETE</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         {users.map((item) => (
//                             <tr key={item.id}>
//                                 <td>{item.username}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.password}</td>
//                                 <td>{item.age}</td>
//                                 <td>{item.gender}</td>
//                                 <td>{item.id}</td>
//                                 <td className='styles.ogg'>{<ImBin2 />}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}

//         </div>
//     )
// }

// export default UserData





import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from "firebase/database";
import { database } from "../../../configuration/firebase";
import styles from "./UserData.module.css";
import { ImBin2 } from "react-icons/im";

const UserData = () => {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const userRef = ref(database, "users");

        /* =========================================================================
           Realtime Sync & Cleanup
           1. `onValue` listens for live data changes.
           2. `snapshot.val()` returns a raw JavaScript Object keyed by Firebase IDs:
              { "-Nx123": { username: "Alice", ... }, "-Nx456": { username: "Bob", ... } }
           3. `Object.entries(data)` turns that object into an array of [key, value] pairs.
           4. `.map(([id, user]) => ({ id, ...user }))` attaches the key as `id` inside each object!
           5. Returning `unsubscribe()` ensures the listener disconnects when component unmounts.
        ========================================================================= */
        const unsubscribe = onValue(userRef, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                const usersArray = Object.entries(data).map(([id, user]) => ({
                    id,
                    ...user,
                }));
                setUsers(usersArray);
            } else {
                setUsers([]);
            }

            setLoader(false);
        });

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, []);

    /* Delete User Handler */
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await remove(ref(database, `users/${id}`));
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    return (
        // for Table Card
        <div className={styles.tableCard}>
            {/* for Header */}
            <div className={styles.header}>
                <h3>Registered Users</h3>
                <span className={styles.badge}>{users.length} Users</span>
            </div>

            {/* for Loader */}
            {loader ? (
                <div className={styles.loaderContainer}>
                    <div className={styles.loader}></div>
                </div>
            ) : users.length === 0 ? (
                <div className={styles.emptyState}>No registered users found.</div>
            ) : (
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((item) => (
                                <tr key={item.id}>
                                    <td className={styles.fontMedium}>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.tel || "N/A"}</td>
                                    <td>{item.age}</td>
                                    {/* styles[item.gender] => styles["male"] => styles.male */}
                                    <td>
                                        <span className={`${styles.genderBadge} ${styles[item.gender]}`}>
                                            {item.gender || 'N/A'}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className={styles.deleteBtn}
                                            title="Delete User"
                                        >
                                            <ImBin2 />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserData;