import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6b827.firebaseapp.com",
  projectId: "reactchat-6b827",
  storageBucket: "reactchat-6b827.appspot.com",
  messagingSenderId: "1092144918626",
  appId: "1:1092144918626:web:f0d8e031fe3fb168bca13b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()