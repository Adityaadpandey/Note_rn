import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCoHtusUOKlicpu3EqxBPSKn47hM9qEFR4",
    authDomain: "project-5d1cd.firebaseapp.com",
    projectId: "project-5d1cd",
    storageBucket: "project-5d1cd.appspot.com",
    messagingSenderId: "1069248766217",
    appId: "1:1069248766217:web:86d9bc0239b1d5d46173d8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, auth, db, storage };
