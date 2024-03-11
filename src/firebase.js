// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLzkGKeG7cMMib_bi3-ZEtkcIU1HvkQA",
  authDomain: "draft3-3e8b4.firebaseapp.com",
  projectId: "draft3-3e8b4",
  storageBucket: "draft3-3e8b4.appspot.com",
  messagingSenderId: "595908223329",
  appId: "1:595908223329:web:d3f3722f2edd3e7f446520"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
export const storage = getStorage(app); 