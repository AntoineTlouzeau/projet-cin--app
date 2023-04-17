import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtCxiYl5yd00bW9e06Cc-WVTr5e5QAZ14",
    authDomain: "fil-rouge-cd649.firebaseapp.com",
    projectId: "fil-rouge-cd649",
    storageBucket: "fil-rouge-cd649.appspot.com",
    messagingSenderId: "920935611665",
    appId: "1:920935611665:web:0fec0dfc2bc04cbda9e0b0"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
