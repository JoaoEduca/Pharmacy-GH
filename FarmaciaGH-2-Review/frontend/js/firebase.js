import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAo9z3RhqJvShtupoAUMY9ZWcD6g0ppRwQ",
  authDomain: "drogaria-gh.firebaseapp.com",
  databaseURL: "https://drogaria-gh-default-rtdb.firebaseio.com",
  projectId: "drogaria-gh",
  storageBucket: "drogaria-gh.firebasestorage.app",
  messagingSenderId: "916614594626",
  appId: "1:916614594626:web:1c57ae1dcd963f64eeaddb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, query, where };