// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5cmPNnKoZfkpoww_JXh2mwRuL5cf6Zak",
  authDomain: "appointcare-4ae2e.firebaseapp.com",
  projectId: "appointcare-4ae2e",
  storageBucket: "appointcare-4ae2e.appspot.com",
  messagingSenderId: "255140343497",
  appId: "1:255140343497:web:d612b9947ed9b2693ae718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app)