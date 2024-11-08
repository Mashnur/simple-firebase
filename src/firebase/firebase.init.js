// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUAnUZH4NE8NwWK1TUiki3dXHbOBGSr2g",
  authDomain: "simple-firebase-86c1b.firebaseapp.com",
  projectId: "simple-firebase-86c1b",
  storageBucket: "simple-firebase-86c1b.firebasestorage.app",
  messagingSenderId: "324799687605",
  appId: "1:324799687605:web:7baa73255753ff365647fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app