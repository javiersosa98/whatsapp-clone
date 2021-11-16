// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc , addDoc, onSnapshot, collection, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKzb4GJk19TdeP1ab5Ty0CZvlLDlkfWZQ",
    authDomain: "whatsapp-clone-e29ba.firebaseapp.com",
    projectId: "whatsapp-clone-e29ba",
    storageBucket: "whatsapp-clone-e29ba.appspot.com",
    messagingSenderId: "760851288080",
    appId: "1:760851288080:web:cdaeba9214982b46ed3a95",
    measurementId: "G-5TRXDZ4Q82"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, collection, onSnapshot, doc , addDoc, query, orderBy };
export default db;