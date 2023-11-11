// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2oOolSV8i1_6SekX3zINfxZXwSgud-w0",
  authDomain: "amberlismovies-19d0d.firebaseapp.com",
  projectId: "amberlismovies-19d0d",
  storageBucket: "amberlismovies-19d0d.appspot.com",
  messagingSenderId: "681998855623",
  appId: "1:681998855623:web:e97ec82e43990b5b9a7de2",
  measurementId: "G-NDLKF6TSW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)