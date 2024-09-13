// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBeV-pZAefp4yZPU4fFcm30PAxtf8F42uw",
  authDomain: "leviosa-xii-b.firebaseapp.com",
  projectId: "leviosa-xii-b",
  storageBucket: "leviosa-xii-b.appspot.com",
  messagingSenderId: "755452644869",
  appId: "1:755452644869:web:408b01db15f22c5b37966c",
  measurementId: "G-ZZKHNLSV7D"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();