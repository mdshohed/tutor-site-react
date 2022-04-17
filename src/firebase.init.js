// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIQ4IeyT6aXm4jT5kmNEHPbuYX_xJWqB0",
  authDomain: "programming-tutor-28276.firebaseapp.com",
  projectId: "programming-tutor-28276",
  storageBucket: "programming-tutor-28276.appspot.com",
  messagingSenderId: "510288088968",
  appId: "1:510288088968:web:a4b31fea1c0962c17b743d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;  