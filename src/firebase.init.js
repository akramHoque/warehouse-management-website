// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBltOxGELA6kNMbTh1D4QRtHr1TUv5hVyQ",
  authDomain: "assignment-11-20be0.firebaseapp.com",
  projectId: "assignment-11-20be0",
  storageBucket: "assignment-11-20be0.appspot.com",
  messagingSenderId: "361155885429",
  appId: "1:361155885429:web:b119a844dbadb238c27b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;