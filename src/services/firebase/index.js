// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuAcv8ecq90zoIlhR3G9W0OuouUPkpqtM",
  authDomain: "coderhouse-50e95.firebaseapp.com",
  projectId: "coderhouse-50e95",
  storageBucket: "coderhouse-50e95.appspot.com",
  messagingSenderId: "416711817873",
  appId: "1:416711817873:web:b34b29bf0ff073b1de9d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)