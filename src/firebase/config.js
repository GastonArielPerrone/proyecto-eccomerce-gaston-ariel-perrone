// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgIYGaWfa3lw6Xu7eJ_PHkLc7rH0EP8Qk",
  authDomain: "eccomerce-gapsport-7cdce.firebaseapp.com",
  projectId: "eccomerce-gapsport-7cdce",
  storageBucket: "eccomerce-gapsport-7cdce.firebasestorage.app",
  messagingSenderId: "475211357723",
  appId: "1:475211357723:web:26b2818c859fb20e7162be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// For login authentication 
const auth = getAuth(app);

export { auth, db };
