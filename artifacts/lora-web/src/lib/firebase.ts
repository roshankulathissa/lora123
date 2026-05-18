import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFxoQkIqWGWun9u0ApjywADFaLOqleVOs",
  authDomain: "lora-employment.firebaseapp.com",
  projectId: "lora-employment",
  storageBucket: "lora-employment.firebasestorage.app",
  messagingSenderId: "566568486266",
  appId: "1:566568486266:web:9bd15e00aaf14fb91d82c3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
