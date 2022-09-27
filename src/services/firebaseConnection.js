import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyARb1p3SBIor1fRAxFV-g45TLb5HUfDhBk",
    authDomain: "gestaoapp01.firebaseapp.com",
    projectId: "gestaoapp01",
    storageBucket: "gestaoapp01.appspot.com",
    messagingSenderId: "1014715006406",
    appId: "1:1014715006406:web:6b1a686692daf3cd3c06c7",
    measurementId: "G-SRC11P13HF"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)