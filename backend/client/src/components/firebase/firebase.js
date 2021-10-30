// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZWv5rO4-NNTz_rDiZlxy3T8kV9hQaGtw",
  authDomain: "saveenvironment-88753.firebaseapp.com",
  projectId: "saveenvironment-88753",
  storageBucket: "saveenvironment-88753.appspot.com",
  messagingSenderId: "573788250173",
  appId: "1:573788250173:web:41f68a05986289e8d9ca54",
  measurementId: "G-9CHJ9749H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};