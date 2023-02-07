// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoQ3rdY2fwFg_PEP3T-XaiqmmXPk8sT0o",
  authDomain: "todo-app-multipeproject.firebaseapp.com",
  projectId: "todo-app-multipeproject",
  storageBucket: "todo-app-multipeproject.appspot.com",
  messagingSenderId: "102016240461",
  appId: "1:102016240461:web:990106f0c65740bd428504",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
