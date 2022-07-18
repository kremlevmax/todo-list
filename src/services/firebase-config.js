// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnbTDGvG2meO96kR-ySmje2JqV_njfPg",
  authDomain: "maxkremle.firebaseapp.com",
  projectId: "maxkremle",
  storageBucket: "maxkremle.appspot.com",
  messagingSenderId: "671198403189",
  appId: "1:671198403189:web:f79afff823b8d44756b63c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
