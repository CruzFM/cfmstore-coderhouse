import { initializeApp } from "firebase/app";
import {collection, getDocs, getDoc, doc, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAwxtf6kbNzdhKWS7lJPML8eTUkLH3dvoA",
  authDomain: "cfmstore-coder-fernandocruz.firebaseapp.com",
  projectId: "cfmstore-coder-fernandocruz",
  storageBucket: "cfmstore-coder-fernandocruz.appspot.com",
  messagingSenderId: "192013873495",
  appId: "1:192013873495:web:475eb85ac50cc8a0654e12"
};

const appFireBase = initializeApp(firebaseConfig);

const appFirestore = getFirestore()


export async function traeProductos(){

  const itemsCollection = collection(appFirestore, "items")

  const itemsSnapshot = await getDocs(itemsCollection)

  let respuesta = itemsSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id:doc.id
    }
  })
  return respuesta
}


export default appFirestore