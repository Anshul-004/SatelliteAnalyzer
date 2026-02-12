import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBja1uGr9iLvKyEUi39YTKDlUsKzmvUR3I",
  authDomain: "satelliteanalyzer.firebaseapp.com",
  projectId: "satelliteanalyzer",
  storageBucket: "satelliteanalyzer.firebasestorage.app",
  messagingSenderId: "418218715944",
  appId: "1:418218715944:web:d4f2a313fbd0a156abfe1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const googleProvider = new GoogleAuthProvider();
