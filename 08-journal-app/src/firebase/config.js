import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDS1kpsB_HAdNuy0lFiAnzGg_3VHbFrFao",
  authDomain: "react-curso-b4535.firebaseapp.com",
  projectId: "react-curso-b4535",
  storageBucket: "react-curso-b4535.appspot.com",
  messagingSenderId: "941826710234",
  appId: "1:941826710234:web:c7c8a50dbf73330a2763e3"
}

export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)