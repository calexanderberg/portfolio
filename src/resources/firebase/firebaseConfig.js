// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA7yxf5yu19iUXEAEtinQizviO0Fjs5zjk",

  authDomain: "bug-tracker-7979b.firebaseapp.com",

  projectId: "bug-tracker-7979b",

  storageBucket: "bug-tracker-7979b.appspot.com",

  messagingSenderId: "757889077888",

  appId: "1:757889077888:web:d944e71a5e908ff1db4c65",

  measurementId: "G-2Q8FL8PCJ0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);