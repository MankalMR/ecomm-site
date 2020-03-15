import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA1mZIa27OrsdhAkDTFWB_IJiobB9pYNks",
  authDomain: "ecomm-site-db.firebaseapp.com",
  databaseURL: "https://ecomm-site-db.firebaseio.com",
  projectId: "ecomm-site-db",
  storageBucket: "ecomm-site-db.appspot.com",
  messagingSenderId: "1081949348595",
  appId: "1:1081949348595:web:9399ff524e817a3097cd86",
  measurementId: "G-30FQ419VRQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;