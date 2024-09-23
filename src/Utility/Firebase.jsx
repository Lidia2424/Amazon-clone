import firebase from "firebase/compat/app";
//Authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJmMq5-V12lXy1AHBlSmscyfL46XBvTLc",
  authDomain: "clone-df296.firebaseapp.com",
  projectId: "clone-df296",
  storageBucket: "clone-df296.appspot.com",
  messagingSenderId: "25429784342",
  appId: "1:25429784342:web:0af4da63ccfa851b470237",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
