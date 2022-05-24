// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChq3JdANNtpdLZungzJYWQfsv2_icUEdw",
  authDomain: "techparts-bc2f4.firebaseapp.com",
  projectId: "techparts-bc2f4",
  storageBucket: "techparts-bc2f4.appspot.com",
  messagingSenderId: "284338341254",
  appId: "1:284338341254:web:5987c73e1254f440109807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;