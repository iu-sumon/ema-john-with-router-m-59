// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3naaN2NGnYJfFjfmpLQEP5Som27SsYc8",
    authDomain: "ema-john-router-simple2.firebaseapp.com",
    projectId: "ema-john-router-simple2",
    storageBucket: "ema-john-router-simple2.appspot.com",
    messagingSenderId: "1024432253385",
    appId: "1:1024432253385:web:b9d5f6b9f46a7f18fc6018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;