// Import the functions you need from the SDKs you need

// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHPgkiTS2qO8PaEzO4yvhp4miTSz5SWbg",
  authDomain: "fir-auth-daa41.firebaseapp.com",
  projectId: "fir-auth-daa41",
  storageBucket: "fir-auth-daa41.appspot.com",
  messagingSenderId: "178417379208",
  appId: "1:178417379208:web:5a2216e5c25ae1936c3c3d",
};

// Initialize Firebase
// let app;
// if(firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();
// export { auth};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {
  auth,
  createUserWithEmailAndPassword,
  getDatabase,
  set,
  ref,
  signInWithEmailAndPassword,
  storage,
  db,
};
