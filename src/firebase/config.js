import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDq7rUa3rK4g5Woiruotb0pF1gDcLCjSbM",
  authDomain: "cardealer-efa34.firebaseapp.com",
  projectId: "cardealer-efa34",
  storageBucket: "cardealer-efa34.appspot.com",
  messagingSenderId: "1079398173047",
  appId: "1:1079398173047:web:5444e77b88e4f4687bf972"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }