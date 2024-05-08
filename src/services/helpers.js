//Para exportar los datos de forma local hacia Firebase

import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, writeBatch} from 'firebase/firestore'
import productsStore from '../data/productsStore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwj9iLXERkkNtMKNNSeUYRiIrvta6O1A0",
  authDomain: "calmer-5e187.firebaseapp.com",
  projectId: "calmer-5e187",
  storageBucket: "calmer-5e187.appspot.com",
  messagingSenderId: "12103196429",
  appId: "1:12103196429:web:074b2973745007c58c1a44"
};


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp)

  export async function exportData() {
    const productsCollectionRef = collection(db, "products");
  
    for (let item of productsStore) {
      item.index = item.id;
      delete item.id;
      const res = await addDoc(productsCollectionRef, item);
      console.log("Documento creado:", res.id);
    }
  }

