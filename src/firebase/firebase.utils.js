import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7iTMJjudGRs1qS83zZaxhkgbcHqMTAGA",
    authDomain: "react-ecommerce-db-ddaec.firebaseapp.com",
    databaseURL: "https://react-ecommerce-db-ddaec.firebaseio.com",
    projectId: "react-ecommerce-db-ddaec",
    storageBucket: "react-ecommerce-db-ddaec.appspot.com",
    messagingSenderId: "210545355854",
    appId: "1:210545355854:web:de43eb47601e84518fe71f",
    measurementId: "G-H55JFYQJB8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;