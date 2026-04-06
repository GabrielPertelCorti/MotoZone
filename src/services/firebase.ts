// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSa37pFbZDbzub6Gz-22KVXRkPzs0vRnc",
  authDomain: "motozone-62619.firebaseapp.com",
  projectId: "motozone-62619",
  storageBucket: "motozone-62619.firebasestorage.app",
  messagingSenderId: "476506276016",
  appId: "1:476506276016:web:e281626d0a51e2a7be7b75",
  measurementId: "G-46ZYFE2H3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);