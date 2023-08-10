import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2Pollq9Xqr81Bw2VFQEoak11YCL3S6x4",
    authDomain: "outfit-ecom.firebaseapp.com",
    projectId: "outfit-ecom",
    storageBucket: "outfit-ecom.appspot.com",
    messagingSenderId: "1031259557404",
    appId: "1:1031259557404:web:d0472d49501f2f739d19d9"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const auth = firebase.auth();

export { auth };