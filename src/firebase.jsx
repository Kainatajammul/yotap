// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBanBsjTk286lyCsjsmi41dOmyiXzQsx4g",
  authDomain: "crud-878f4.firebaseapp.com",
  databaseURL: "https://crud-878f4-default-rtdb.firebaseio.com",
  projectId: "crud-878f4",
  storageBucket: "crud-878f4.appspot.com",
  messagingSenderId: "457832748006",
  appId: "1:457832748006:web:b9bdef78091628f1663c27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app)
export const storage = getStorage(app);