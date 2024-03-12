
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJInFNSv7znb-PeCnS0LE-Ag4qy7cknDw",
  authDomain: "mintmarket-1f5b1.firebaseapp.com",
  projectId: "mintmarket-1f5b1",
  storageBucket: "mintmarket-1f5b1.appspot.com",
  messagingSenderId: "539294010334",
  appId: "1:539294010334:web:20d97716b63ded4036eb4f",
  measurementId: "G-96XY1MHE3E"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
