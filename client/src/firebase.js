// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7d3c3.firebaseapp.com",
  projectId: "mern-blog-7d3c3",
  storageBucket: "mern-blog-7d3c3.appspot.com",
  messagingSenderId: "943363325463",
  appId: "1:943363325463:web:c53adbf747a8d52cba2652"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

