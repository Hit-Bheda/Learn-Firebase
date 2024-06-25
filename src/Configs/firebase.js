// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcl1aglRg8hxbrMR-DzOxRhCcXqKGu9Qc",
  authDomain: "learn-firebase-27d2d.firebaseapp.com",
  projectId: "learn-firebase-27d2d",
  storageBucket: "learn-firebase-27d2d.appspot.com",
  messagingSenderId: "1040009075599",
  appId: "1:1040009075599:web:ac7e71c2ce18342b0989fa",
  measurementId: "G-SKK5W0N0D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();