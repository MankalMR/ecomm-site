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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.error('error creating user. ', error.message);
      }
    }

    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;