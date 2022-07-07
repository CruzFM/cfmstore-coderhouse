import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwxtf6kbNzdhKWS7lJPML8eTUkLH3dvoA",
  authDomain: "cfmstore-coder-fernandocruz.firebaseapp.com",
  projectId: "cfmstore-coder-fernandocruz",
  storageBucket: "cfmstore-coder-fernandocruz.appspot.com",
  messagingSenderId: "192013873495",
  appId: "1:192013873495:web:475eb85ac50cc8a0654e12"
};

const appFirestore = getFirestore()

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);

export async function traeProductos(){

  const clothesCollection = collection(appFirestore, "prenda")

  const clothesSnapshot = await getDocs(clothesCollection)

  let respuesta = clothesSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id:doc.id
    }
  })
  return respuesta
}


export default appFirestore