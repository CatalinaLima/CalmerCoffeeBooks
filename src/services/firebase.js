// Import the functions you need from the SDKs you need
import productsStore from '../data/productsStore'
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, writeBatch, limit} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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

export async function getData(limitCount) {
    const productsCollectionRef = collection(db, 'products')

    let q = query (productsCollectionRef, orderBy('index'))

    if (limitCount) {
      q = query(q, limit(limitCount));
    }

    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  
    return dataDocs;
}

export async function getItemData(idURL) {
    const docRef = doc (db, 'products', idURL )
    const docSnap = await getDoc (docRef)
    return {id: docSnap.id, ...docSnap.data()}
}

export async function getCategoryData (idCategory) {
    const productsCollectionRef = collection (db,'products')
    const q = query (productsCollectionRef, where ('category', '==', idCategory))
    
    const productsSnapshot = await getDocs (q)
    const arrayDocs = productsSnapshot.docs
    const dataDocs = arrayDocs.map ((doc) => {
        return {...doc.data(), id: doc.id}
    })
    return dataDocs
}

export async function createOrder(data) {
    const ordersCollectionRef = collection(db, "orders");

  const response = await addDoc(ordersCollectionRef, data);
  return response.id;

}


export async function exportDataWithBatch() {
    const batch = writeBatch(db)
    const collectionRef = collection (db, 'products')
  
    for (let item of productsStore) {
      item.index = item.id;
      delete item.id;
      const docRef = doc(collectionRef)
      batch.set(docRef, item);
    }

    await batch.commit()
  }

  //Cuando hacemos orden de compra, hacer Update de cada elemento que estamos comprando

  export async function createOrderWithStockUpdate(data) {
    const ordersCollectionRef = collection(db, "orders");
    const batch = writeBatch(db);
    const { items } = data;
  
    for (let itemInCart of items) {
      const refDoc = doc(db, "products", itemInCart.id);
      const docSnap = await getDoc(refDoc);
  
      const { stock } = docSnap.data();
      console.log(stock);
  
      const stockToUpdate = stock - itemInCart.count;
      if (stockToUpdate < 0) {
        throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
      } else {
        const docRef = doc(db, "products", itemInCart.id);
        batch.update(docRef, { stock: stockToUpdate });
      }
    }
  
    await batch.commit();
    const response = await addDoc(ordersCollectionRef, data);
  
    return response.id;
  }