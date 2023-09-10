// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0F8gKR7W-NOx5C4GJLZjoIkQm_egf5Cw",
  authDomain: "financio1.firebaseapp.com",
  projectId: "financio1",
  storageBucket: "financio1.appspot.com",
  messagingSenderId: "76741468664",
  appId: "1:76741468664:web:14e38b06c559897a2af60d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
