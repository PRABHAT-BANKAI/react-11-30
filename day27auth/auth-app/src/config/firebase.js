// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaprfH-Rr6CWiUcsUuVLqw255zSw5AD7w",
  authDomain: "react-auth-22563.firebaseapp.com",
  projectId: "react-auth-22563",
  storageBucket: "react-auth-22563.firebasestorage.app",
  messagingSenderId: "422619567354",
  appId: "1:422619567354:web:a447e6e19fd81e3fd2e543",
  measurementId: "G-5X6MGL8K49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
