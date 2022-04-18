// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'authcrud-1b1df.firebaseapp.com',
  projectId: 'authcrud-1b1df',
  storageBucket: 'authcrud-1b1df.appspot.com',
  messagingSenderId: '604872483183',
  appId: '1:604872483183:web:7204f09a1f89dd507ec89a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
