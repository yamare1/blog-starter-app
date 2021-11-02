// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxyEIriUe7EBTWUWzopZMWOvbM1ploKrY",
  authDomain: "blog-ce1cb.firebaseapp.com",
  projectId: "blog-ce1cb",
  storageBucket: "blog-ce1cb.appspot.com",
  messagingSenderId: "793083119291",
  appId: "1:793083119291:web:a11f76b3317d1dee0c0b9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);