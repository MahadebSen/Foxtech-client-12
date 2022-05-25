// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApPC-7WZsQJ07vBzqTebE0pQAHOLNTzG0",
  authDomain: "foxtech-90c48.firebaseapp.com",
  projectId: "foxtech-90c48",
  storageBucket: "foxtech-90c48.appspot.com",
  messagingSenderId: "1025440916938",
  appId: "1:1025440916938:web:905ceffff5d182be819b33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
