// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpBs8-uatX-18pOe7Q3a7GoAOCm0YEW5w",
  authDomain: "my-first-firebase-miniproject.firebaseapp.com",
  projectId: "my-first-firebase-miniproject",
  storageBucket: "my-first-firebase-miniproject.firebasestorage.app",
  messagingSenderId: "588031888773",
  appId: "1:588031888773:web:29ad2e426e4f52ba6a08ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);

export default app;