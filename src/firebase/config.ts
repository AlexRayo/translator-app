// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkey6xrgaQD3ll08PsUJdahv0kmjretyU",
  authDomain: "translate-app-16f65.firebaseapp.com",
  databaseURL: "https://translate-app-16f65-default-rtdb.firebaseio.com",
  projectId: "translate-app-16f65",
  storageBucket: "translate-app-16f65.appspot.com",
  messagingSenderId: "949991829224",
  appId: "1:949991829224:web:8c6700e4782063dd59e35d",
  measurementId: "G-2QCPCGFH3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);