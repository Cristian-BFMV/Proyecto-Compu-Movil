import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
  addDoc,
  getDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBY4q_8-DFZS7bwrfTCk6VhBrdRY4iOKnc',
  authDomain: 'proyecto-compu-movil.firebaseapp.com',
  projectId: 'proyecto-compu-movil',
  storageBucket: 'proyecto-compu-movil.appspot.com',
  messagingSenderId: '536308553034',
  appId: '1:536308553034:web:94d8660505682ff019ddb3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {
  app,
  db,
  collection,
  query,
  doc,
  where,
  setDoc,
  getDocs,
  getDoc,
  addDoc
};
