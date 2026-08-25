// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-first-firebase-miniproject.firebaseapp.com",
  // 👇 ADD YOUR DATABASE URL HERE
  databaseURL: "https://my-first-firebase-miniproject-default-rtdb.firebaseio.com/",
  projectId: "my-first-firebase-miniproject",
  storageBucket: "my-first-firebase-miniproject.firebasestorage.app",
  messagingSenderId: "588031888773",
  appId: "1:588031888773:web:29ad2e426e4f52ba6a08ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize the Facebook Provider
export const provider = new FacebookAuthProvider();

// Initialize Realtime Database
export const database = getDatabase(app);

// Initialize Auth
export const auth = getAuth(app);


export default app;